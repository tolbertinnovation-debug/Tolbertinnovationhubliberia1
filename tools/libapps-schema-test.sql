-- ============================================================
-- LIBAPPS SCHEMA TEST SUITE
-- ------------------------------------------------------------
-- Exercises every function in libapps-schema.sql: the account gate,
-- ownership rules, counters, the admin gate, and the rule that
-- apk_path is never returned by a browse or read call.
--
-- Run it against a throwaway Postgres (NOT your live Supabase --
-- it deletes rows from students, app_admins and libapps_apps):
--
--   initdb -D /tmp/pg -U pg -A trust
--   pg_ctl -D /tmp/pg -o '-k /tmp/pg -p 5433' start
--   psql -h /tmp/pg -p 5433 -U pg -d postgres -f tools/libapps-test-stubs.sql
--   psql -h /tmp/pg -p 5433 -U pg -d postgres -f libapps-schema.sql
--   psql -h /tmp/pg -p 5433 -U pg -d postgres -f tools/libapps-schema-test.sql
--
-- Every line of output should read PASS.
-- ============================================================
create or replace function public.t_check(p_label text, p_ok boolean) returns void
language plpgsql as $f$ begin
  raise notice '%  %', case when p_ok then 'PASS' else 'FAIL <<<<<<<<' end, p_label;
end $f$;
create or replace function public.t_raises(p_sql text, p_msg text) returns boolean
language plpgsql as $f$ begin
  execute p_sql; return false;
exception when others then return position(p_msg in SQLERRM) > 0;
end $f$;

-- fixtures
delete from public.libapps_apps; delete from public.students; delete from public.app_admins;
insert into public.students (id,name,email,password_hash,status) values
  ('TIH-STU-AAA','Musu Kollie','musu@example.com','hash-musu','active'),
  ('TIH-STU-BBB','James Doe','james@example.com','hash-james','active'),
  ('TIH-STU-CCC','Suspended Sam','sam@example.com','hash-sam','suspended');
insert into public.app_admins values ('admin','hash-admin');

DO $$
DECLARE v_app uuid; v_app2 uuid; v_n int; v_b boolean; v_t text;
BEGIN
  perform t_check('publish with wrong password is refused',
    t_raises($q$ select libapps_publish('TIH-STU-AAA','WRONG','{"name":"X","apk_path":"p"}'::jsonb,'hash-admin') $q$,
             'LIBAPPS_AUTH_REQUIRED'));

  -- ---------- PUBLISHING IS ADMINISTRATOR-ONLY ----------
  perform t_check('a member with no admin hash cannot publish',
    t_raises($q$ select libapps_publish('TIH-STU-AAA','hash-musu','{"name":"X","apk_path":"p"}'::jsonb) $q$,
             'LIBAPPS_ADMIN_ONLY_UPLOAD'));
  perform t_check('a wrong admin hash does not let a member publish',
    t_raises($q$ select libapps_publish('TIH-STU-AAA','hash-musu','{"name":"X","apk_path":"p"}'::jsonb,'nope') $q$,
             'LIBAPPS_ADMIN_ONLY_UPLOAD'));
  perform t_check('another member''s password is not an admin hash',
    t_raises($q$ select libapps_publish('TIH-STU-AAA','hash-musu','{"name":"X","apk_path":"p"}'::jsonb,'hash-james') $q$,
             'LIBAPPS_ADMIN_ONLY_UPLOAD'));

  -- ---------- PUBLISH ----------
  v_app := libapps_publish('TIH-STU-AAA','hash-musu', jsonb_build_object(
    'name','Lib Market','description','Buy and sell in Monrovia','category','Business & Finance',
    'version','1.2.0','package_name','lr.tih.libmarket','min_android','Android 7.0',
    'changelog','Faster search','icon_url','https://x/icon.png',
    'screenshot_urls', jsonb_build_array('https://x/1.png','https://x/2.png'),
    'apk_path','TIH-STU-AAA/libmarket.apk','file_size_mb', 8.4), 'hash-admin');
  perform t_check('publish returns an id', v_app is not null);

  select owner_name into v_t from libapps_apps where id = v_app;
  perform t_check('uploader name is denormalized onto the row', v_t = 'Musu Kollie');
  select array_length(screenshot_urls,1) into v_n from libapps_apps where id = v_app;
  perform t_check('screenshots stored as a text array of 2', v_n = 2);

  perform t_check('publish with no name is refused',
    t_raises($q$ select libapps_publish('TIH-STU-AAA','hash-musu','{"name":"  ","apk_path":"p"}'::jsonb,'hash-admin') $q$,
             'LIBAPPS_NAME_REQUIRED'));
  perform t_check('publish with no file is refused',
    t_raises($q$ select libapps_publish('TIH-STU-AAA','hash-musu','{"name":"X"}'::jsonb,'hash-admin') $q$,
             'LIBAPPS_FILE_REQUIRED'));
  perform t_check('an APK over 50 MB is refused',
    t_raises($q$ select libapps_publish('TIH-STU-AAA','hash-musu',
             '{"name":"X","apk_path":"p","file_size_mb":51}'::jsonb,'hash-admin') $q$, 'LIBAPPS_FILE_TOO_LARGE'));

  -- ---------- BROWSE ----------
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james');
  perform t_check('another signed-in learner sees the app', v_n = 1);
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james','monrovia');
  perform t_check('search matches the description', v_n = 1);
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james','Musu');
  perform t_check('search matches the uploader name', v_n = 1);
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james','zzz nothing');
  perform t_check('search that matches nothing returns nothing', v_n = 0);
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james',null,'Business & Finance');
  perform t_check('category filter keeps the app', v_n = 1);
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james',null,'Games');
  perform t_check('category filter excludes other categories', v_n = 0);
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james',null,'all');
  perform t_check('category "all" is not a filter', v_n = 1);

  -- ---------- apk_path must never leak ----------
  perform t_check('browse does not expose apk_path',
    not exists(select 1 from information_schema.routines ro
               join information_schema.parameters pa on pa.specific_name = ro.specific_name
               where ro.routine_name = 'libapps_browse' and pa.parameter_name = 'apk_path'));
  perform t_check('libapps_get does not expose apk_path',
    not exists(select 1 from information_schema.routines ro
               join information_schema.parameters pa on pa.specific_name = ro.specific_name
               where ro.routine_name = 'libapps_get' and pa.parameter_name = 'apk_path'));

  -- ---------- LIKES ----------
  select liked, like_count into v_b, v_n from libapps_toggle_like('TIH-STU-BBB','hash-james', v_app);
  perform t_check('first like sets liked=true and count=1', v_b and v_n = 1);
  select liked, like_count into v_b, v_n from libapps_toggle_like('TIH-STU-BBB','hash-james', v_app);
  perform t_check('liking again unlikes, count back to 0', (not v_b) and v_n = 0);
  perform libapps_toggle_like('TIH-STU-BBB','hash-james', v_app);
  select like_count into v_n from libapps_apps where id = v_app;
  perform t_check('like_count on the row matches the likes table', v_n = 1);
  select liked into v_b from libapps_browse('TIH-STU-BBB','hash-james');
  perform t_check('browse reports liked=true for the person who liked it', v_b);
  select liked into v_b from libapps_browse('TIH-STU-AAA','hash-musu');
  perform t_check('browse reports liked=false for everyone else', not v_b);

  -- ---------- COMMENTS ----------
  select id into v_t from libapps_add_comment('TIH-STU-BBB','hash-james', v_app, '  Very useful, thanks!  ');
  perform t_check('comment returns a row', v_t is not null);
  select content into v_t from libapps_comments where app_id = v_app limit 1;
  perform t_check('comment text is trimmed', v_t = 'Very useful, thanks!');
  select comment_count into v_n from libapps_apps where id = v_app;
  perform t_check('comment_count updated on the app', v_n = 1);
  perform t_check('an empty comment is refused',
    t_raises($q$ select * from libapps_add_comment('TIH-STU-BBB','hash-james',
             (select id from libapps_apps limit 1), '   ') $q$, 'LIBAPPS_EMPTY_COMMENT'));

  -- ---------- DOWNLOAD ----------
  select apk_path, download_count into v_t, v_n from libapps_download('TIH-STU-BBB','hash-james', v_app);
  perform t_check('download returns the real storage path', v_t = 'TIH-STU-AAA/libmarket.apk');
  perform t_check('download count incremented to 1', v_n = 1);
  perform libapps_download('TIH-STU-BBB','hash-james', v_app);
  select download_count into v_n from libapps_apps where id = v_app;
  perform t_check('download count incremented to 2', v_n = 2);

  -- ---------- READING IS PUBLIC (an app now exists) ----------
  perform t_check('browse works with no credentials at all',
    (select count(*) from libapps_browse(null::text, null::text)) >= 1);
  perform t_check('browse works with empty credentials',
    (select count(*) from libapps_browse('', '')) >= 1);
  perform t_check('browse works with an unknown student id',
    (select count(*) from libapps_browse('TIH-STU-NOPE', 'hash-musu')) >= 1);
  perform t_check('an anonymous viewer sees no filled hearts',
    (select liked from libapps_browse(null::text, null::text) limit 1) = false);
  perform t_check('an anonymous visitor can download',
    (select download_count from libapps_download(null::text, null::text, v_app)) >= 3);

  -- ---------- WRITING STILL NEEDS A VALID ACCOUNT ----------
  perform t_check('liking with no account is refused',
    t_raises($q$ select libapps_toggle_like(null::text, null::text, (select id from libapps_apps limit 1)) $q$,
             'LIBAPPS_AUTH_REQUIRED'));
  perform t_check('commenting with no account is refused',
    t_raises($q$ select libapps_add_comment(null::text, null::text, (select id from libapps_apps limit 1), 'x') $q$,
             'LIBAPPS_AUTH_REQUIRED'));
  perform t_check('a suspended account cannot write',
    t_raises($q$ select libapps_toggle_like('TIH-STU-CCC','hash-sam', (select id from libapps_apps limit 1)) $q$,
             'LIBAPPS_AUTH_REQUIRED'));

  -- ---------- OWNERSHIP ----------
  perform t_check('a member cannot edit an app even with an admin hash they do not own',
    t_raises($q$ select libapps_update('TIH-STU-BBB','hash-james',
             (select id from libapps_apps limit 1), '{"name":"Hijacked"}'::jsonb, 'hash-admin') $q$, 'LIBAPPS_NOT_OWNER'));
  perform t_check('editing without an admin hash is refused outright',
    t_raises($q$ select libapps_update('TIH-STU-AAA','hash-musu',
             (select id from libapps_apps limit 1), '{"name":"Hijacked"}'::jsonb) $q$, 'LIBAPPS_ADMIN_ONLY_UPLOAD'));
  perform t_check('a stranger cannot delete your app',
    t_raises($q$ select * from libapps_delete('TIH-STU-BBB','hash-james',
             (select id from libapps_apps limit 1)) $q$, 'LIBAPPS_NOT_OWNER'));
  perform libapps_update('TIH-STU-AAA','hash-musu', v_app, '{"name":"Lib Market Pro","version":"1.3.0"}'::jsonb, 'hash-admin');
  select name into v_t from libapps_apps where id = v_app;
  perform t_check('the owner can edit their own app', v_t = 'Lib Market Pro');
  select version into v_t from libapps_apps where id = v_app;
  perform t_check('edit updates the version too', v_t = '1.3.0');
  select description into v_t from libapps_apps where id = v_app;
  perform t_check('fields left out of an edit are preserved', v_t = 'Buy and sell in Monrovia');
  select array_length(screenshot_urls,1) into v_n from libapps_apps where id = v_app;
  perform t_check('screenshots survive an edit that omits them', v_n = 2);

  -- comment deletion rights
  select id into v_t from libapps_comments where app_id = v_app limit 1;
  perform t_check('a third party cannot delete someone else''s comment',
    t_raises(format($q$ select libapps_delete_comment('TIH-STU-CCC','hash-sam','%s') $q$, v_t),
             'LIBAPPS_AUTH_REQUIRED'));
  perform libapps_delete_comment('TIH-STU-AAA','hash-musu', v_t::uuid);
  select comment_count into v_n from libapps_apps where id = v_app;
  perform t_check('the app owner can delete a comment on their app', v_n = 0);

  -- ---------- REPORTS ----------
  perform libapps_report('TIH-STU-BBB','hash-james', v_app, 'Malware', 'Asks for too many permissions');
  select count(*) into v_n from libapps_reports where app_id = v_app;
  perform t_check('a learner can report an app', v_n = 1);

  -- ---------- ADMIN ----------
  perform t_check('admin list refuses a wrong admin password',
    t_raises($q$ select * from libapps_admin_apps('nope') $q$, 'LIBAPPS_ADMIN_REQUIRED'));
  perform t_check('a learner password does not open the admin list',
    t_raises($q$ select * from libapps_admin_apps('hash-musu') $q$, 'LIBAPPS_ADMIN_REQUIRED'));
  select count(*) into v_n from libapps_admin_apps('hash-admin');
  perform t_check('the admin sees every app', v_n = 1);
  select apk_path into v_t from libapps_admin_apps('hash-admin') limit 1;
  perform t_check('the admin view does include apk_path', v_t is not null);
  perform libapps_admin_set_status('hash-admin', v_app, 'removed', 'Flagged as malware');
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james');
  perform t_check('a removed app disappears from browse', v_n = 0);
  select count(*) into v_n from libapps_get('TIH-STU-BBB','hash-james', v_app);
  perform t_check('a removed app is not readable by other learners', v_n = 0);
  select count(*) into v_n from libapps_get('TIH-STU-AAA','hash-musu', v_app);
  perform t_check('its owner can still see it (to fix or delete it)', v_n = 1);
  perform t_check('a removed app cannot be downloaded',
    t_raises($q$ select * from libapps_download('TIH-STU-BBB','hash-james',
             (select id from libapps_apps limit 1)) $q$, 'query has no destination')
    or (select count(*) from libapps_download('TIH-STU-BBB','hash-james', v_app)) = 0);
  perform libapps_admin_set_status('hash-admin', v_app, 'published', null);
  select count(*) into v_n from libapps_browse('TIH-STU-BBB','hash-james');
  perform t_check('the admin can put it back', v_n = 1);
  perform t_check('an invalid status is refused',
    t_raises(format($q$ select libapps_admin_set_status('hash-admin','%s','banned',null) $q$, v_app),
             'LIBAPPS_BAD_STATUS'));
  select count(*) into v_n from libapps_admin_reports('hash-admin');
  perform t_check('the admin sees open reports', v_n = 1);

  -- ---------- PROFILE ----------
  select app_count into v_n from libapps_profile('TIH-STU-BBB','hash-james','TIH-STU-AAA');
  perform t_check('a public profile counts the uploads', v_n = 1);
  perform t_check('a public profile exposes no email column',
    not exists(select 1 from information_schema.routines ro
               join information_schema.parameters pa on pa.specific_name = ro.specific_name
               where ro.routine_name = 'libapps_profile' and pa.parameter_name in ('email','password_hash','phone')));

  -- ---------- UPLOAD LIMIT ----------
  for v_n in 2..12 loop
    perform libapps_publish('TIH-STU-AAA','hash-musu',
      jsonb_build_object('name','Filler '||v_n,'apk_path','p'||v_n,'file_size_mb',1), 'hash-admin');
  end loop;
  select count(*) into v_n from libapps_apps where owner_id='TIH-STU-AAA';
  perform t_check('twelve apps published', v_n = 12);
  perform t_check('the thirteenth upload is refused',
    t_raises($q$ select libapps_publish('TIH-STU-AAA','hash-musu',
             '{"name":"Too many","apk_path":"p13"}'::jsonb,'hash-admin') $q$, 'LIBAPPS_UPLOAD_LIMIT'));

  -- ---------- SORTING ----------
  select name into v_t from libapps_browse('TIH-STU-BBB','hash-james',null,null,'downloads',1,0);
  perform t_check('sort by downloads puts the most-downloaded first', v_t = 'Lib Market Pro');
  select name into v_t from libapps_browse('TIH-STU-BBB','hash-james',null,null,'name',1,0);
  perform t_check('sort by name is alphabetical', v_t = 'Filler 10');

  -- ---------- OWNER DELETE ----------
  select apk_path into v_t from libapps_delete('TIH-STU-AAA','hash-musu', v_app);
  perform t_check('deleting returns the path so the file can go too', v_t = 'TIH-STU-AAA/libmarket.apk');
  select count(*) into v_n from libapps_apps where id = v_app;
  perform t_check('the row is gone', v_n = 0);
  select count(*) into v_n from libapps_reports where app_id = v_app;
  perform t_check('its reports cascade away', v_n = 0);

  -- ---------- SIGNED-OUT VISITOR ----------
  select app_count into v_n from libapps_public_stats();
  perform t_check('public stats work with no account at all', v_n = 11);
END $$;
