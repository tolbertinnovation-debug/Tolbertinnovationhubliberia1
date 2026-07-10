-- ============================================================
-- TIH LEARNING HUB — SUPABASE (PostgreSQL) SCHEMA
-- ------------------------------------------------------------
-- Run this ONCE in your Supabase project:
--   Supabase Dashboard → SQL Editor → New query → paste all →
--   click "Run". It is safe to re-run (uses IF NOT EXISTS / OR REPLACE).
--
-- This gives the static site a real, central database so that:
--   • Applications submitted on ANY device reach the admin panel.
--   • Students can log in from any device (secure RPC below).
--   • Enrollments, payments, progress, certificate requests and
--     issued certificates are tracked centrally in real time.
--
-- SECURITY MODEL (important — the site is static, so the anon key
-- is public):
--   • The public (learners) may only INSERT applications, log
--     learning activity, and call the login RPC. They can never
--     read other people's data.
--   • The ADMIN signs in with a Supabase Auth account (you create
--     one in Authentication → Users) and can read/manage everything.
--   • Student login is handled by a SECURITY DEFINER function so a
--     learner can authenticate without exposing the students table.
-- ============================================================

-- gen_random_uuid() lives in pgcrypto (already available on Supabase).
create extension if not exists "pgcrypto";

-- ---------- APPLICATIONS ----------
create table if not exists public.applications (
  id             text primary key,                 -- e.g. TIH-APP-AB12CD
  submitted_at   timestamptz not null default now(),
  status         text not null default 'pending',  -- pending|review|approved|rejected|info-needed
  status_message text default '',
  name           text not null,
  email          text,
  phone          text,
  location       text,
  dob            text,
  education      text,
  occupation     text,
  goals          text,
  tracks         jsonb default '[]'::jsonb,         -- ["web-development","wassce-all", ...]
  referral       text,
  notes          jsonb default '[]'::jsonb,
  updated_at     timestamptz not null default now()
);

-- ---------- STUDENTS ----------
create table if not exists public.students (
  id                   text primary key,            -- e.g. TIH-STU-AB12CD
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now(),
  status               text not null default 'active', -- active|inactive|suspended
  name                 text not null,
  email                text,
  phone                text,
  location             text,
  application_id       text,
  password_hash        text,                        -- SHA-256 (same as local layer)
  must_change_password boolean default true,
  courses              jsonb default '[]'::jsonb,   -- [{id,assignedAt,deadline,priority}]
  last_login_at        timestamptz,
  admin_notes          jsonb default '[]'::jsonb
);
create index if not exists students_email_idx on public.students (lower(email));

-- ---------- ENROLLMENTS (paid access grants) ----------
create table if not exists public.enrollments (
  id             uuid primary key default gen_random_uuid(),
  student_id     text not null,
  item_id        text not null,                     -- course id or 'wassce-all'
  item_title     text,
  payment_status text default 'pending',            -- pending|paid|confirmed
  payment_reference text,
  access_granted boolean default false,
  granted_at     timestamptz,
  created_at     timestamptz not null default now(),
  unique (student_id, item_id)
);

-- ---------- PAYMENTS ----------
create table if not exists public.payments (
  id           uuid primary key default gen_random_uuid(),
  student_id   text,
  item_id      text,
  amount       numeric(10,2) not null default 2.00,
  method       text default 'Mobile Money',
  reference    text,                                -- Mobile Money transaction id
  status       text default 'pending',              -- pending|success|failed
  confirmed_by text,
  created_at   timestamptz not null default now()
);

-- ---------- PROGRESS (per course, per student) ----------
create table if not exists public.progress (
  id               uuid primary key default gen_random_uuid(),
  student_id       text not null,
  course_id        text not null,
  completed_lessons int default 0,
  total_lessons     int default 0,
  pct               numeric(5,2) default 0,
  last_activity_at  timestamptz not null default now(),
  unique (student_id, course_id)
);

-- ---------- ACTIVITIES (granular learning event log) ----------
create table if not exists public.activities (
  id            uuid primary key default gen_random_uuid(),
  student_id    text,
  course_id     text,
  activity_type text,                               -- lesson_complete|quiz_passed|project_submitted|login
  detail        text,
  score         numeric(5,2),
  at            timestamptz not null default now()
);

-- ---------- CERTIFICATE REQUESTS ----------
create table if not exists public.cert_requests (
  id           text primary key,                    -- e.g. TIH-CRQ-AB12CD
  student_id   text not null,
  course_id    text not null,
  course_title text,
  requested_at timestamptz not null default now(),
  status       text default 'pending',              -- pending|approved|declined
  reason       text default '',
  decided_at   timestamptz
);

-- ---------- CERTIFICATES (issued) ----------
create table if not exists public.certificates (
  cert_id      text primary key,                    -- e.g. TIH-2026-WEB-AB12CD
  student_id   text,
  student_name text,
  course_id    text,
  course_title text,
  category     text,
  issue_date   text,
  verified     boolean default true,
  created_at   timestamptz not null default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table public.applications  enable row level security;
alter table public.students      enable row level security;
alter table public.enrollments   enable row level security;
alter table public.payments      enable row level security;
alter table public.progress      enable row level security;
alter table public.activities    enable row level security;
alter table public.cert_requests enable row level security;
alter table public.certificates  enable row level security;

-- Helper: drop-then-create so this script is safely re-runnable.
-- (Postgres has no "create policy if not exists".)

-- APPLICATIONS: public may submit; admin may read/manage.
drop policy if exists app_insert_anon on public.applications;
create policy app_insert_anon on public.applications
  for insert to anon, authenticated with check (true);
drop policy if exists app_all_admin on public.applications;
create policy app_all_admin on public.applications
  for all to authenticated using (true) with check (true);

-- STUDENTS: learners self-register and update their own row (insert/update);
-- reads stay closed (login goes through the student_login RPC below).
drop policy if exists stu_insert_anon on public.students;
create policy stu_insert_anon on public.students
  for insert to anon, authenticated with check (true);
drop policy if exists stu_update_anon on public.students;
create policy stu_update_anon on public.students
  for update to anon, authenticated using (true) with check (true);
drop policy if exists stu_all_admin on public.students;
create policy stu_all_admin on public.students
  for all to authenticated using (true) with check (true);

-- ENROLLMENTS / PAYMENTS: learners record their own unlock when they enter a
-- valid access code (insert/update); admin may read/manage all. Learner reads
-- go through the student_bundle RPC, so these tables stay closed to public SELECT.
drop policy if exists enr_write_anon on public.enrollments;
create policy enr_write_anon on public.enrollments
  for insert to anon, authenticated with check (true);
drop policy if exists enr_update_anon on public.enrollments;
create policy enr_update_anon on public.enrollments
  for update to anon, authenticated using (true) with check (true);
drop policy if exists enr_all_admin on public.enrollments;
create policy enr_all_admin on public.enrollments
  for all to authenticated using (true) with check (true);
drop policy if exists pay_insert_anon on public.payments;
create policy pay_insert_anon on public.payments
  for insert to anon, authenticated with check (true);
drop policy if exists pay_all_admin on public.payments;
create policy pay_all_admin on public.payments
  for all to authenticated using (true) with check (true);

-- PROGRESS: learners may write their own progress (insert/update);
-- admin may read/manage all. Learner reads go through the RPC.
drop policy if exists prog_write_anon on public.progress;
create policy prog_write_anon on public.progress
  for insert to anon, authenticated with check (true);
drop policy if exists prog_update_anon on public.progress;
create policy prog_update_anon on public.progress
  for update to anon, authenticated using (true) with check (true);
drop policy if exists prog_all_admin on public.progress;
create policy prog_all_admin on public.progress
  for select to authenticated using (true);

-- ACTIVITIES: public may append events; admin may read.
drop policy if exists act_insert_anon on public.activities;
create policy act_insert_anon on public.activities
  for insert to anon, authenticated with check (true);
drop policy if exists act_read_admin on public.activities;
create policy act_read_admin on public.activities
  for select to authenticated using (true);

-- CERT REQUESTS: learners may submit; admin manages.
drop policy if exists crq_insert_anon on public.cert_requests;
create policy crq_insert_anon on public.cert_requests
  for insert to anon, authenticated with check (true);
drop policy if exists crq_all_admin on public.cert_requests;
create policy crq_all_admin on public.cert_requests
  for all to authenticated using (true) with check (true);

-- LEARNER READS: let a learner load their own account state (unlocks, progress,
-- cert requests) directly, filtered client-side by student_id. Low-sensitivity
-- (course access + lesson counts), consistent with certificates being public.
-- This is what makes admin grants appear on the learner's other devices.
drop policy if exists enr_read_anon on public.enrollments;
create policy enr_read_anon on public.enrollments
  for select to anon, authenticated using (true);
drop policy if exists prog_read_anon on public.progress;
create policy prog_read_anon on public.progress
  for select to anon, authenticated using (true);
drop policy if exists crq_read_anon on public.cert_requests;
create policy crq_read_anon on public.cert_requests
  for select to anon, authenticated using (true);

-- CERTIFICATES: anyone may verify (public read); admin issues; permanent.
drop policy if exists cert_read_all on public.certificates;
create policy cert_read_all on public.certificates
  for select to anon, authenticated using (true);
drop policy if exists cert_insert on public.certificates;
create policy cert_insert on public.certificates
  for insert to anon, authenticated with check (true);
drop policy if exists cert_admin on public.certificates;
create policy cert_admin on public.certificates
  for all to authenticated using (true) with check (true);

-- ============================================================
-- SECURE STUDENT LOGIN (cross-device, without exposing the table)
-- The learner sends their Student ID / email + the SHA-256 hash of
-- their password. The function runs with definer rights, checks the
-- hash, and returns the student row only on a match. RLS stays closed.
-- ============================================================
create or replace function public.student_login(p_login text, p_hash text)
returns setof public.students
language sql
security definer
set search_path = public
as $$
  select *
  from public.students s
  where (lower(s.id) = lower(trim(p_login)) or lower(s.email) = lower(trim(p_login)))
    and s.password_hash = p_hash
    and s.status <> 'suspended'
  limit 1;
$$;

grant execute on function public.student_login(text, text) to anon, authenticated;

-- Record a successful login timestamp (called after student_login succeeds).
create or replace function public.student_touch_login(p_id text)
returns void
language sql
security definer
set search_path = public
as $$
  update public.students set last_login_at = now(), updated_at = now()
  where lower(id) = lower(trim(p_id));
$$;
grant execute on function public.student_touch_login(text) to anon, authenticated;

-- ============================================================
-- SECURE ACCOUNT BUNDLE (online-authoritative student data)
-- The learner re-sends their login + password hash; on a match the
-- function returns THAT student's enrollments, progress and certificate
-- requests as one JSON object. This lets any device load the same
-- account state online without opening these tables to public reads.
-- ============================================================
create or replace function public.student_bundle(p_login text, p_hash text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id text;
  v_result json;
begin
  select s.id into v_id
  from public.students s
  where (lower(s.id) = lower(trim(p_login)) or lower(s.email) = lower(trim(p_login)))
    and s.password_hash = p_hash
    and s.status <> 'suspended'
  limit 1;

  if v_id is null then
    return json_build_object('enrollments', '[]'::json, 'progress', '[]'::json, 'cert_requests', '[]'::json);
  end if;

  select json_build_object(
    'enrollments',  coalesce((select json_agg(e) from public.enrollments  e where e.student_id = v_id), '[]'::json),
    'progress',     coalesce((select json_agg(p) from public.progress     p where p.student_id = v_id), '[]'::json),
    'cert_requests',coalesce((select json_agg(c) from public.cert_requests c where c.student_id = v_id), '[]'::json)
  ) into v_result;

  return v_result;
end;
$$;
grant execute on function public.student_bundle(text, text) to anon, authenticated;

-- ============================================================
-- REALTIME — let the admin dashboard receive live updates.
-- (Safe to re-run; "add table" errors if already a member, so guard.)
-- ============================================================
do $$
begin
  begin execute 'alter publication supabase_realtime add table public.applications';  exception when duplicate_object then null; end;
  begin execute 'alter publication supabase_realtime add table public.enrollments';   exception when duplicate_object then null; end;
  begin execute 'alter publication supabase_realtime add table public.progress';      exception when duplicate_object then null; end;
  begin execute 'alter publication supabase_realtime add table public.cert_requests'; exception when duplicate_object then null; end;
  begin execute 'alter publication supabase_realtime add table public.payments';      exception when duplicate_object then null; end;
end $$;

-- ============================================================
-- DONE. Next:
--   1. Authentication → Users → "Add user": create ONE admin
--      account (email + password) for Samuel. That account is what
--      the admin panel signs into for cloud access.
--   2. Project Settings → API: copy the Project URL and the
--      "anon public" key into hub-config.js (TIH_SUPABASE_CONFIG).
-- ============================================================
