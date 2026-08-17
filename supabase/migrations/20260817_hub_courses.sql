-- TIH: live course catalog in Supabase (avoids Cloudflare/GitHub cache for curriculum)
create table if not exists public.hub_courses (
  id          text primary key,
  title       text not null,
  category    text,
  level       text,
  is_free     boolean default false,
  is_published boolean default true,
  sort_order  int default 0,
  payload     jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

create index if not exists hub_courses_published_idx
  on public.hub_courses (is_published, sort_order);

create index if not exists hub_courses_category_idx
  on public.hub_courses (category);

alter table public.hub_courses enable row level security;

drop policy if exists "hub_courses_select_published" on public.hub_courses;
create policy "hub_courses_select_published"
  on public.hub_courses for select
  using (is_published = true);

comment on table public.hub_courses is
  'Learning Hub course catalog. payload = full COURSES_DB[id] object including modules/lessons.';
comment on column public.hub_courses.payload is
  'Full course JSON: modules[].lessons[] with t, d, v (video id), etc.';
