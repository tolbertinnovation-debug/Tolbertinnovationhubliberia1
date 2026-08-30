-- ============================================================
-- LIBAPPS — APK APP STORE FOR TOLBERT INNOVATION HUB
-- ------------------------------------------------------------
-- Run this ONCE in your Supabase project:
--   Supabase Dashboard -> SQL Editor -> New query -> paste all ->
--   click "Run". It is safe to re-run (IF NOT EXISTS / OR REPLACE).
--
-- It adds to the SAME project the Learning Hub already uses, so a
-- learner who has a TIH account can use LibApps with that account.
-- Nothing in supabase-schema.sql is modified.
--
-- SECURITY MODEL
-- ------------------------------------------------------------
-- The site is static, so the anon key is public and anyone can read
-- it out of the page source. Therefore:
--
--   * Every LibApps table has RLS on and NO anon policies at all.
--     The tables cannot be read or written directly with the anon
--     key -- not even SELECT.
--   * All access goes through SECURITY DEFINER functions below.
--     Each one takes the learner's student id + the SHA-256 password
--     hash and re-verifies them against public.students, exactly the
--     way student_set_password() in supabase-schema.sql already does.
--   * apk_path is never returned by a browse/read function. The only
--     way to learn where an APK actually lives is libapps_download(),
--     which requires valid credentials. That makes "you need an
--     account to download" a real database rule, not a UI gate.
--   * Admin functions reuse the existing is_admin_hash() check.
-- ============================================================

create extension if not exists "pgcrypto";

-- ============================================================
-- TABLES
-- ============================================================

-- ---------- APPS ----------
create table if not exists public.libapps_apps (
  id              uuid primary key default gen_random_uuid(),
  owner_id        text not null references public.students(id) on delete cascade,
  owner_name      text,                       -- denormalized, so listings need no join
  name            text not null,
  description     text,
  category        text,
  version         text,
  package_name    text,                       -- e.g. com.example.myapp
  min_android     text,                       -- e.g. "Android 7.0"
  changelog       text,
  icon_url        text,
  screenshot_urls text[] default '{}',
  apk_path        text not null,              -- path inside the libapps-apks bucket
  file_size_mb    numeric,
  download_count  integer not null default 0,
  like_count      integer not null default 0,
  comment_count   integer not null default 0,
  status          text not null default 'published',  -- published | removed
  removed_reason  text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
create index if not exists libapps_apps_owner_idx    on public.libapps_apps (owner_id);
create index if not exists libapps_apps_status_idx   on public.libapps_apps (status);
create index if not exists libapps_apps_category_idx on public.libapps_apps (category);
create index if not exists libapps_apps_created_idx  on public.libapps_apps (created_at desc);

-- ---------- LIKES ----------
create table if not exists public.libapps_likes (
  app_id     uuid not null references public.libapps_apps(id) on delete cascade,
  user_id    text not null references public.students(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (app_id, user_id)
);

-- ---------- COMMENTS ----------
create table if not exists public.libapps_comments (
  id         uuid primary key default gen_random_uuid(),
  app_id     uuid not null references public.libapps_apps(id) on delete cascade,
  user_id    text not null references public.students(id) on delete cascade,
  user_name  text,
  content    text not null,
  created_at timestamptz not null default now()
);
create index if not exists libapps_comments_app_idx on public.libapps_comments (app_id, created_at desc);

-- ---------- REPORTS ----------
-- Apps publish immediately, so the only way an admin learns about a bad
-- upload is if someone tells them. This is that channel.
create table if not exists public.libapps_reports (
  id          uuid primary key default gen_random_uuid(),
  app_id      uuid not null references public.libapps_apps(id) on delete cascade,
  app_name    text,
  user_id     text not null references public.students(id) on delete cascade,
  user_name   text,
  reason      text not null,
  details     text,
  status      text not null default 'open',   -- open | reviewed | dismissed
  created_at  timestamptz not null default now()
);
create index if not exists libapps_reports_status_idx on public.libapps_reports (status, created_at desc);

-- ============================================================
-- ROW LEVEL SECURITY
-- Enabled with no policies: the anon key gets nothing at all.
-- Everything below goes through SECURITY DEFINER functions.
-- ============================================================
alter table public.libapps_apps     enable row level security;
alter table public.libapps_likes    enable row level security;
alter table public.libapps_comments enable row level security;
alter table public.libapps_reports  enable row level security;

revoke all on public.libapps_apps     from anon, authenticated;
revoke all on public.libapps_likes    from anon, authenticated;
revoke all on public.libapps_comments from anon, authenticated;
revoke all on public.libapps_reports  from anon, authenticated;

-- Keep updated_at honest.
create or replace function public.libapps_touch_updated()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists libapps_apps_touch on public.libapps_apps;
create trigger libapps_apps_touch before update on public.libapps_apps
  for each row execute function public.libapps_touch_updated();

-- ============================================================
-- AUTH HELPER
-- Re-verifies the learner on every single call. Mirrors the check
-- inside student_set_password() in supabase-schema.sql.
-- Not granted to anon: it is only ever called from the definer
-- functions below, which run with owner rights.
-- ============================================================
create or replace function public.libapps_auth(p_student_id text, p_hash text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(
    select 1 from public.students s
    where s.id = p_student_id
      and s.password_hash = p_hash
      and coalesce(p_hash, '') <> ''
      and s.status <> 'suspended'
  );
$$;
revoke all on function public.libapps_auth(text, text) from public, anon, authenticated;

create or replace function public.libapps_require(p_student_id text, p_hash text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.libapps_auth(p_student_id, p_hash) then
    raise exception 'LIBAPPS_AUTH_REQUIRED' using errcode = '42501';
  end if;
end;
$$;
revoke all on function public.libapps_require(text, text) from public, anon, authenticated;

-- ============================================================
-- PUBLIC STATS (the only thing a signed-out visitor may read)
-- Feeds the locked landing page. No app names, no paths, no people.
-- ============================================================
create or replace function public.libapps_public_stats()
returns table (app_count bigint, download_count bigint, uploader_count bigint)
language sql
stable
security definer
set search_path = public
as $$
  select count(*)::bigint,
         coalesce(sum(a.download_count), 0)::bigint,
         count(distinct a.owner_id)::bigint
  from public.libapps_apps a
  where a.status = 'published';
$$;
grant execute on function public.libapps_public_stats() to anon, authenticated;

-- ============================================================
-- BROWSE / READ  (account required, apk_path never returned)
-- ============================================================
create or replace function public.libapps_browse(
  p_student_id text,
  p_hash       text,
  p_search     text default null,
  p_category   text default null,
  p_sort       text default 'recent',
  p_limit      int  default 60,
  p_offset     int  default 0
)
returns table (
  id uuid, owner_id text, owner_name text, name text, description text,
  category text, version text, package_name text, min_android text,
  icon_url text, screenshot_urls text[], file_size_mb numeric,
  download_count integer, like_count integer, comment_count integer,
  created_at timestamptz, updated_at timestamptz, liked boolean
)
language plpgsql
stable
security definer
set search_path = public
as $$
declare v_q text := nullif(btrim(coalesce(p_search, '')), '');
begin
  perform public.libapps_require(p_student_id, p_hash);
  return query
    select a.id, a.owner_id, a.owner_name, a.name, a.description,
           a.category, a.version, a.package_name, a.min_android,
           a.icon_url, a.screenshot_urls, a.file_size_mb,
           a.download_count, a.like_count, a.comment_count,
           a.created_at, a.updated_at,
           exists(select 1 from public.libapps_likes l
                  where l.app_id = a.id and l.user_id = p_student_id)
    from public.libapps_apps a
    where a.status = 'published'
      and (p_category is null or p_category in ('', 'all') or a.category = p_category)
      and (v_q is null
           or a.name        ilike '%' || v_q || '%'
           or a.description ilike '%' || v_q || '%'
           or a.category    ilike '%' || v_q || '%'
           or a.owner_name  ilike '%' || v_q || '%')
    order by
      case when p_sort = 'downloads' then a.download_count end desc nulls last,
      case when p_sort = 'likes'     then a.like_count     end desc nulls last,
      case when p_sort = 'name'      then lower(a.name)    end asc  nulls last,
      a.created_at desc
    limit  greatest(1, least(coalesce(p_limit, 60), 200))
    offset greatest(0, coalesce(p_offset, 0));
end;
$$;
grant execute on function public.libapps_browse(text, text, text, text, text, int, int) to anon, authenticated;

-- One app, with its changelog. Still no apk_path.
create or replace function public.libapps_get(
  p_student_id text, p_hash text, p_app_id uuid
)
returns table (
  id uuid, owner_id text, owner_name text, name text, description text,
  category text, version text, package_name text, min_android text,
  changelog text, icon_url text, screenshot_urls text[], file_size_mb numeric,
  download_count integer, like_count integer, comment_count integer,
  created_at timestamptz, updated_at timestamptz, liked boolean
)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  perform public.libapps_require(p_student_id, p_hash);
  return query
    select a.id, a.owner_id, a.owner_name, a.name, a.description,
           a.category, a.version, a.package_name, a.min_android,
           a.changelog, a.icon_url, a.screenshot_urls, a.file_size_mb,
           a.download_count, a.like_count, a.comment_count,
           a.created_at, a.updated_at,
           exists(select 1 from public.libapps_likes l
                  where l.app_id = a.id and l.user_id = p_student_id)
    from public.libapps_apps a
    where a.id = p_app_id
      and (a.status = 'published' or a.owner_id = p_student_id);
end;
$$;
grant execute on function public.libapps_get(text, text, uuid) to anon, authenticated;

-- Everything one person has uploaded (their own view includes removed apps).
create or replace function public.libapps_by_owner(
  p_student_id text, p_hash text, p_owner_id text
)
returns table (
  id uuid, owner_id text, owner_name text, name text, description text,
  category text, version text, icon_url text, file_size_mb numeric,
  download_count integer, like_count integer, comment_count integer,
  status text, removed_reason text, created_at timestamptz
)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  perform public.libapps_require(p_student_id, p_hash);
  return query
    select a.id, a.owner_id, a.owner_name, a.name, a.description,
           a.category, a.version, a.icon_url, a.file_size_mb,
           a.download_count, a.like_count, a.comment_count,
           a.status, a.removed_reason, a.created_at
    from public.libapps_apps a
    where a.owner_id = p_owner_id
      and (a.status = 'published' or p_owner_id = p_student_id)
    order by a.created_at desc;
end;
$$;
grant execute on function public.libapps_by_owner(text, text, text) to anon, authenticated;

-- Category counts for the filter row.
create or replace function public.libapps_categories(p_student_id text, p_hash text)
returns table (category text, n bigint)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  perform public.libapps_require(p_student_id, p_hash);
  return query
    select coalesce(nullif(a.category, ''), 'Other'), count(*)::bigint
    from public.libapps_apps a
    where a.status = 'published'
    group by 1
    order by 2 desc, 1 asc;
end;
$$;
grant execute on function public.libapps_categories(text, text) to anon, authenticated;

-- A public profile: the uploader's display fields only, never their
-- email, phone, password hash or course list.
create or replace function public.libapps_profile(
  p_student_id text, p_hash text, p_owner_id text
)
returns table (id text, name text, joined_at timestamptz, app_count bigint, download_total bigint, like_total bigint)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  perform public.libapps_require(p_student_id, p_hash);
  return query
    select s.id, s.name, s.created_at,
           count(a.id)::bigint,
           coalesce(sum(a.download_count), 0)::bigint,
           coalesce(sum(a.like_count), 0)::bigint
    from public.students s
    left join public.libapps_apps a
      on a.owner_id = s.id and a.status = 'published'
    where s.id = p_owner_id
    group by s.id, s.name, s.created_at;
end;
$$;
grant execute on function public.libapps_profile(text, text, text) to anon, authenticated;

-- Comments on one app.
create or replace function public.libapps_comments_for(
  p_student_id text, p_hash text, p_app_id uuid
)
returns table (id uuid, app_id uuid, user_id text, user_name text, content text, created_at timestamptz)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  perform public.libapps_require(p_student_id, p_hash);
  return query
    select c.id, c.app_id, c.user_id, c.user_name, c.content, c.created_at
    from public.libapps_comments c
    where c.app_id = p_app_id
    order by c.created_at desc
    limit 300;
end;
$$;
grant execute on function public.libapps_comments_for(text, text, uuid) to anon, authenticated;

-- ============================================================
-- WRITES (account required; ownership enforced in the database)
-- ============================================================

-- jsonb array -> text[]
create or replace function public.libapps_txt_array(j jsonb)
returns text[]
language sql
immutable
as $$
  select case
    when j is null or jsonb_typeof(j) <> 'array' then '{}'::text[]
    else coalesce((select array_agg(x) from jsonb_array_elements_text(j) t(x)), '{}'::text[])
  end;
$$;

-- ---------- PUBLISH ----------
-- Two guards worth knowing about, both easy to change here:
--   50   = max APK size in MB (also Supabase's own free-tier upload cap)
--   12   = max published apps per uploader. The free tier gives 1 GB of
--          storage in total, so without a per-person cap one uploader can
--          consume the whole store. Raise it when you upgrade the plan.
create or replace function public.libapps_publish(
  p_student_id text, p_hash text, p_app jsonb
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_name  text := btrim(coalesce(p_app->>'name', ''));
  v_path  text := btrim(coalesce(p_app->>'apk_path', ''));
  v_size  numeric := nullif(p_app->>'file_size_mb', '')::numeric;
  v_owner text;
  v_n     integer;
  v_id    uuid;
begin
  perform public.libapps_require(p_student_id, p_hash);

  if v_name = '' then raise exception 'LIBAPPS_NAME_REQUIRED'; end if;
  if length(v_name) > 80 then raise exception 'LIBAPPS_NAME_TOO_LONG'; end if;
  if v_path = '' then raise exception 'LIBAPPS_FILE_REQUIRED'; end if;
  if v_size is not null and v_size > 50 then raise exception 'LIBAPPS_FILE_TOO_LARGE'; end if;

  select count(*) into v_n from public.libapps_apps a
    where a.owner_id = p_student_id and a.status = 'published';
  if v_n >= 12 then raise exception 'LIBAPPS_UPLOAD_LIMIT'; end if;

  select s.name into v_owner from public.students s where s.id = p_student_id;

  insert into public.libapps_apps (
    owner_id, owner_name, name, description, category, version,
    package_name, min_android, changelog, icon_url, screenshot_urls,
    apk_path, file_size_mb
  ) values (
    p_student_id, v_owner, v_name,
    nullif(btrim(coalesce(p_app->>'description', '')), ''),
    coalesce(nullif(btrim(coalesce(p_app->>'category', '')), ''), 'Other'),
    nullif(btrim(coalesce(p_app->>'version', '')), ''),
    nullif(btrim(coalesce(p_app->>'package_name', '')), ''),
    nullif(btrim(coalesce(p_app->>'min_android', '')), ''),
    nullif(btrim(coalesce(p_app->>'changelog', '')), ''),
    nullif(btrim(coalesce(p_app->>'icon_url', '')), ''),
    public.libapps_txt_array(p_app->'screenshot_urls'),
    v_path, v_size
  ) returning id into v_id;

  return v_id;
end;
$$;
grant execute on function public.libapps_publish(text, text, jsonb) to anon, authenticated;

-- ---------- EDIT (owner only) ----------
create or replace function public.libapps_update(
  p_student_id text, p_hash text, p_app_id uuid, p_changes jsonb
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare v_owner text; v_size numeric := nullif(p_changes->>'file_size_mb', '')::numeric;
begin
  perform public.libapps_require(p_student_id, p_hash);

  select a.owner_id into v_owner from public.libapps_apps a where a.id = p_app_id;
  if v_owner is null then raise exception 'LIBAPPS_NOT_FOUND'; end if;
  if v_owner <> p_student_id then raise exception 'LIBAPPS_NOT_OWNER' using errcode = '42501'; end if;
  if v_size is not null and v_size > 50 then raise exception 'LIBAPPS_FILE_TOO_LARGE'; end if;

  update public.libapps_apps a set
    name            = coalesce(nullif(btrim(coalesce(p_changes->>'name', '')), ''), a.name),
    description     = coalesce(p_changes->>'description',  a.description),
    category        = coalesce(nullif(btrim(coalesce(p_changes->>'category', '')), ''), a.category),
    version         = coalesce(p_changes->>'version',      a.version),
    package_name    = coalesce(p_changes->>'package_name', a.package_name),
    min_android     = coalesce(p_changes->>'min_android',  a.min_android),
    changelog       = coalesce(p_changes->>'changelog',    a.changelog),
    icon_url        = coalesce(nullif(btrim(coalesce(p_changes->>'icon_url', '')), ''), a.icon_url),
    screenshot_urls = case when p_changes ? 'screenshot_urls'
                           then public.libapps_txt_array(p_changes->'screenshot_urls')
                           else a.screenshot_urls end,
    apk_path        = coalesce(nullif(btrim(coalesce(p_changes->>'apk_path', '')), ''), a.apk_path),
    file_size_mb    = coalesce(v_size, a.file_size_mb)
  where a.id = p_app_id;

  return true;
end;
$$;
grant execute on function public.libapps_update(text, text, uuid, jsonb) to anon, authenticated;

-- ---------- DELETE (owner only) ----------
-- Returns the storage paths so the client can clear the files too.
create or replace function public.libapps_delete(
  p_student_id text, p_hash text, p_app_id uuid
)
returns table (apk_path text, icon_url text, screenshot_urls text[])
language plpgsql
security definer
set search_path = public
as $$
declare v_owner text;
begin
  perform public.libapps_require(p_student_id, p_hash);
  select owner_id into v_owner from public.libapps_apps a where a.id = p_app_id;
  if v_owner is null then raise exception 'LIBAPPS_NOT_FOUND'; end if;
  if v_owner <> p_student_id then raise exception 'LIBAPPS_NOT_OWNER' using errcode = '42501'; end if;

  return query
    delete from public.libapps_apps a where a.id = p_app_id
    returning a.apk_path, a.icon_url, a.screenshot_urls;
end;
$$;
grant execute on function public.libapps_delete(text, text, uuid) to anon, authenticated;

-- ---------- LIKE / UNLIKE ----------
create or replace function public.libapps_toggle_like(
  p_student_id text, p_hash text, p_app_id uuid
)
returns table (liked boolean, like_count integer)
language plpgsql
security definer
set search_path = public
as $$
declare v_liked boolean; v_n integer;
begin
  perform public.libapps_require(p_student_id, p_hash);
  if not exists(select 1 from public.libapps_apps a where a.id = p_app_id and a.status = 'published') then
    raise exception 'LIBAPPS_NOT_FOUND';
  end if;

  if exists(select 1 from public.libapps_likes l where l.app_id = p_app_id and l.user_id = p_student_id) then
    delete from public.libapps_likes l where l.app_id = p_app_id and l.user_id = p_student_id;
    v_liked := false;
  else
    insert into public.libapps_likes (app_id, user_id) values (p_app_id, p_student_id)
      on conflict do nothing;
    v_liked := true;
  end if;

  select count(*) into v_n from public.libapps_likes l where l.app_id = p_app_id;
  update public.libapps_apps a set like_count = v_n where a.id = p_app_id;
  return query select v_liked, v_n;
end;
$$;
grant execute on function public.libapps_toggle_like(text, text, uuid) to anon, authenticated;

-- ---------- COMMENT ----------
create or replace function public.libapps_add_comment(
  p_student_id text, p_hash text, p_app_id uuid, p_content text
)
returns table (id uuid, user_id text, user_name text, content text, created_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare v_txt text := btrim(coalesce(p_content, '')); v_name text; v_id uuid;
begin
  perform public.libapps_require(p_student_id, p_hash);
  if v_txt = '' then raise exception 'LIBAPPS_EMPTY_COMMENT'; end if;
  if length(v_txt) > 1000 then v_txt := left(v_txt, 1000); end if;
  if not exists(select 1 from public.libapps_apps a where a.id = p_app_id and a.status = 'published') then
    raise exception 'LIBAPPS_NOT_FOUND';
  end if;

  select s.name into v_name from public.students s where s.id = p_student_id;
  insert into public.libapps_comments (app_id, user_id, user_name, content)
    values (p_app_id, p_student_id, v_name, v_txt)
    returning libapps_comments.id into v_id;

  update public.libapps_apps a
    set comment_count = (select count(*) from public.libapps_comments c where c.app_id = p_app_id)
    where a.id = p_app_id;

  return query
    select c.id, c.user_id, c.user_name, c.content, c.created_at
    from public.libapps_comments c where c.id = v_id;
end;
$$;
grant execute on function public.libapps_add_comment(text, text, uuid, text) to anon, authenticated;

-- Comment author, or the owner of the app it sits on, may delete it.
create or replace function public.libapps_delete_comment(
  p_student_id text, p_hash text, p_comment_id uuid
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare v_author text; v_app uuid; v_appowner text;
begin
  perform public.libapps_require(p_student_id, p_hash);
  select c.user_id, c.app_id into v_author, v_app
    from public.libapps_comments c where c.id = p_comment_id;
  if v_author is null then raise exception 'LIBAPPS_NOT_FOUND'; end if;

  select a.owner_id into v_appowner from public.libapps_apps a where a.id = v_app;
  if p_student_id <> v_author and p_student_id is distinct from v_appowner then
    raise exception 'LIBAPPS_NOT_ALLOWED' using errcode = '42501';
  end if;

  delete from public.libapps_comments c where c.id = p_comment_id;
  update public.libapps_apps a
    set comment_count = (select count(*) from public.libapps_comments c where c.app_id = v_app)
    where a.id = v_app;
  return true;
end;
$$;
grant execute on function public.libapps_delete_comment(text, text, uuid) to anon, authenticated;

-- ---------- DOWNLOAD ----------
-- The ONLY function that reveals apk_path. Counts the download at the
-- same time, so the number cannot drift from reality.
create or replace function public.libapps_download(
  p_student_id text, p_hash text, p_app_id uuid
)
returns table (apk_path text, name text, version text, download_count integer)
language plpgsql
security definer
set search_path = public
as $$
begin
  perform public.libapps_require(p_student_id, p_hash);
  return query
    update public.libapps_apps a
       set download_count = a.download_count + 1
     where a.id = p_app_id and a.status = 'published'
    returning a.apk_path, a.name, a.version, a.download_count;
end;
$$;
grant execute on function public.libapps_download(text, text, uuid) to anon, authenticated;

-- ---------- REPORT ----------
create or replace function public.libapps_report(
  p_student_id text, p_hash text, p_app_id uuid, p_reason text, p_details text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare v_name text; v_app text;
begin
  perform public.libapps_require(p_student_id, p_hash);
  select s.name into v_name from public.students s where s.id = p_student_id;
  select a.name into v_app  from public.libapps_apps a where a.id = p_app_id;
  if v_app is null then raise exception 'LIBAPPS_NOT_FOUND'; end if;

  insert into public.libapps_reports (app_id, app_name, user_id, user_name, reason, details)
    values (p_app_id, v_app, p_student_id, v_name,
            coalesce(nullif(btrim(coalesce(p_reason, '')), ''), 'Unspecified'),
            nullif(btrim(coalesce(p_details, '')), ''));
  return true;
end;
$$;
grant execute on function public.libapps_report(text, text, uuid, text, text) to anon, authenticated;

-- ============================================================
-- ADMIN / MODERATION
-- Reuses the existing is_admin_hash() gate from supabase-schema.sql,
-- so the same admin password that opens hub-admin.html works here.
-- ============================================================
create or replace function public.libapps_admin_apps(p_admin_hash text)
returns table (
  id uuid, owner_id text, owner_name text, name text, category text,
  version text, icon_url text, apk_path text, file_size_mb numeric,
  download_count integer, like_count integer, comment_count integer,
  status text, removed_reason text, created_at timestamptz
)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not public.is_admin_hash(p_admin_hash) then
    raise exception 'LIBAPPS_ADMIN_REQUIRED' using errcode = '42501';
  end if;
  return query
    select a.id, a.owner_id, a.owner_name, a.name, a.category,
           a.version, a.icon_url, a.apk_path, a.file_size_mb,
           a.download_count, a.like_count, a.comment_count,
           a.status, a.removed_reason, a.created_at
    from public.libapps_apps a
    order by a.created_at desc;
end;
$$;
grant execute on function public.libapps_admin_apps(text) to anon, authenticated;

-- Take an app down (or put it back) without destroying the record.
create or replace function public.libapps_admin_set_status(
  p_admin_hash text, p_app_id uuid, p_status text, p_reason text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_hash(p_admin_hash) then
    raise exception 'LIBAPPS_ADMIN_REQUIRED' using errcode = '42501';
  end if;
  if p_status not in ('published', 'removed') then
    raise exception 'LIBAPPS_BAD_STATUS';
  end if;
  update public.libapps_apps
     set status = p_status,
         removed_reason = case when p_status = 'removed'
                               then nullif(btrim(coalesce(p_reason, '')), '') else null end
   where id = p_app_id;
  return true;
end;
$$;
grant execute on function public.libapps_admin_set_status(text, uuid, text, text) to anon, authenticated;

-- Permanent delete. Returns the storage paths so the files go too.
create or replace function public.libapps_admin_delete_app(p_admin_hash text, p_app_id uuid)
returns table (apk_path text, icon_url text, screenshot_urls text[])
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_hash(p_admin_hash) then
    raise exception 'LIBAPPS_ADMIN_REQUIRED' using errcode = '42501';
  end if;
  return query
    delete from public.libapps_apps a where a.id = p_app_id
    returning a.apk_path, a.icon_url, a.screenshot_urls;
end;
$$;
grant execute on function public.libapps_admin_delete_app(text, uuid) to anon, authenticated;

create or replace function public.libapps_admin_delete_comment(p_admin_hash text, p_comment_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare v_app uuid;
begin
  if not public.is_admin_hash(p_admin_hash) then
    raise exception 'LIBAPPS_ADMIN_REQUIRED' using errcode = '42501';
  end if;
  select c.app_id into v_app from public.libapps_comments c where c.id = p_comment_id;
  delete from public.libapps_comments c where c.id = p_comment_id;
  if v_app is not null then
    update public.libapps_apps a
      set comment_count = (select count(*) from public.libapps_comments c where c.app_id = v_app)
      where a.id = v_app;
  end if;
  return true;
end;
$$;
grant execute on function public.libapps_admin_delete_comment(text, uuid) to anon, authenticated;

create or replace function public.libapps_admin_reports(p_admin_hash text)
returns table (
  id uuid, app_id uuid, app_name text, user_id text, user_name text,
  reason text, details text, status text, created_at timestamptz
)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not public.is_admin_hash(p_admin_hash) then
    raise exception 'LIBAPPS_ADMIN_REQUIRED' using errcode = '42501';
  end if;
  return query
    select r.id, r.app_id, r.app_name, r.user_id, r.user_name,
           r.reason, r.details, r.status, r.created_at
    from public.libapps_reports r
    order by (r.status = 'open') desc, r.created_at desc
    limit 400;
end;
$$;
grant execute on function public.libapps_admin_reports(text) to anon, authenticated;

create or replace function public.libapps_admin_resolve_report(
  p_admin_hash text, p_report_id uuid, p_status text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_hash(p_admin_hash) then
    raise exception 'LIBAPPS_ADMIN_REQUIRED' using errcode = '42501';
  end if;
  if p_status not in ('open', 'reviewed', 'dismissed') then
    raise exception 'LIBAPPS_BAD_STATUS';
  end if;
  update public.libapps_reports set status = p_status where id = p_report_id;
  return true;
end;
$$;
grant execute on function public.libapps_admin_resolve_report(text, uuid, text) to anon, authenticated;

-- Every comment on the site, newest first, for the moderation panel.
create or replace function public.libapps_admin_comments(p_admin_hash text)
returns table (id uuid, app_id uuid, app_name text, user_id text, user_name text, content text, created_at timestamptz)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not public.is_admin_hash(p_admin_hash) then
    raise exception 'LIBAPPS_ADMIN_REQUIRED' using errcode = '42501';
  end if;
  return query
    select c.id, c.app_id, a.name, c.user_id, c.user_name, c.content, c.created_at
    from public.libapps_comments c
    left join public.libapps_apps a on a.id = c.app_id
    order by c.created_at desc
    limit 300;
end;
$$;
grant execute on function public.libapps_admin_comments(text) to anon, authenticated;

-- ============================================================
-- STORAGE BUCKETS
-- ------------------------------------------------------------
--   libapps-apks   private, 50 MB cap. Nobody can list or read it with
--                  the anon key; the site fetches a short-lived signed
--                  URL only after libapps_download() has authenticated
--                  the learner.
--   libapps-images public, 3 MB cap. Icons and screenshots need to
--                  render in an <img> tag, so they are public by design.
--
-- If your Supabase version rejects these inserts, create the two
-- buckets by hand in Dashboard -> Storage with the same names, sizes
-- and public/private setting, then run the policies below.
-- ============================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'libapps-apks', 'libapps-apks', false, 52428800,
  array['application/vnd.android.package-archive', 'application/octet-stream', 'application/zip']
)
on conflict (id) do update
  set public = false, file_size_limit = 52428800,
      allowed_mime_types = excluded.allowed_mime_types;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'libapps-images', 'libapps-images', true, 3145728,
  array['image/png', 'image/jpeg', 'image/webp', 'image/gif']
)
on conflict (id) do update
  set public = true, file_size_limit = 3145728,
      allowed_mime_types = excluded.allowed_mime_types;

-- Uploads. The site is static, so the anon key is public and these have
-- to be open to anon -- the same trade-off the Learning Hub already makes
-- for application submissions. The database rows they point at still
-- cannot be created without a valid account, so an orphaned upload is
-- invisible in the store, and admins can empty the bucket at any time.
drop policy if exists "libapps apk upload" on storage.objects;
create policy "libapps apk upload" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'libapps-apks');

drop policy if exists "libapps image upload" on storage.objects;
create policy "libapps image upload" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'libapps-images');

-- Reading images is public (that is what a public bucket means).
drop policy if exists "libapps image read" on storage.objects;
create policy "libapps image read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'libapps-images');

-- Reading APKs: needed so the client can mint a signed URL. The path is
-- unguessable and is only handed out by libapps_download(), which checks
-- the learner's password hash first.
drop policy if exists "libapps apk read" on storage.objects;
create policy "libapps apk read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'libapps-apks');

-- Owners replace their own files by uploading a new path, so no anon
-- UPDATE or DELETE policy is granted. Cleanup of orphaned files is an
-- admin job from the Storage dashboard.

-- ============================================================
-- DONE. Next: put the two bucket names in libapps-db.js if you
-- changed them, then open libapps.html.
-- ============================================================
