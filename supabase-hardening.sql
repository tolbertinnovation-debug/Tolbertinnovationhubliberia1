-- ============================================================================
-- TIH Learning Hub — Supabase RLS + RPC hardening migration
-- Closes: HIGH-1 (anon can update any student), HIGH-2 (anon self-grants course
-- access / forges payments + computable access codes), MEDIUM-1 (anon reads all
-- learners' data), MEDIUM-2 (anon forges certificates).
--
-- HOW TO APPLY SAFELY (do NOT paste the whole file at once on production):
--   PART A  — additive (tables + RPCs). Safe to run anytime; nothing breaks.
--   <then>  — deploy the client changes that call these RPCs (with fallback).
--   PART B  — the RLS lock-down (drops the over-permissive anon policies).
--             Run ONLY after Part A + client changes are verified, ideally in a
--             Supabase *branch* first. This is the step that closes the holes.
--   Rollback for Part B is at the bottom.
--
-- PREREQ: enrollments should be unique per (student_id, item_id) so the RPC's
--   ON CONFLICT works. If not present, run:
--     create unique index if not exists enrollments_student_item_uidx
--       on public.enrollments (student_id, item_id);
-- ============================================================================


-- ############################################################################
-- PART A — ADDITIVE (safe; run first)
-- ############################################################################

-- Server-issued, RANDOM access codes (replaces the client-computable code).
create table if not exists public.access_codes (
  code        text primary key,
  item_id     text not null,
  student_id  text,                         -- optional: bind a code to one student
  used        boolean not null default false,
  used_by     text,
  created_at  timestamptz not null default now(),
  used_at     timestamptz
);
alter table public.access_codes enable row level security;
-- Only the authenticated admin can see/manage codes. The learner never reads
-- this table directly; redemption goes through the definer RPC below.
drop policy if exists ac_admin on public.access_codes;
create policy ac_admin on public.access_codes
  for all to authenticated using (true) with check (true);

-- 1) Learner loads ONLY their own account state, gated by their password hash.
--    Mirrors the existing student_login pattern. Returns null if the hash is wrong.
create or replace function public.student_bundle(p_student_id text, p_hash text)
returns jsonb
language sql
security definer
set search_path = public
as $$
  select case when exists (
      select 1 from public.students s
      where s.id = p_student_id and s.password_hash = p_hash
    ) then jsonb_build_object(
      'enrollments',  (select coalesce(jsonb_agg(e),  '[]'::jsonb) from public.enrollments  e  where e.student_id  = p_student_id),
      'progress',     (select coalesce(jsonb_agg(pr), '[]'::jsonb) from public.progress     pr where pr.student_id = p_student_id),
      'cert_requests',(select coalesce(jsonb_agg(c),  '[]'::jsonb) from public.cert_requests c  where c.student_id  = p_student_id)
    ) else null end;
$$;
grant execute on function public.student_bundle(text, text) to anon, authenticated;

-- 2) Redeem a real, unused, server-issued code -> grant the enrollment.
--    Anon can EXECUTE this, but cannot forge access because the code must exist,
--    be unused, and (if bound) match the student. No client-computable secret.
create or replace function public.redeem_access_code(p_student_id text, p_code text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare v_item text; v_bound text;
begin
  select item_id, student_id into v_item, v_bound
    from public.access_codes
    where upper(code) = upper(trim(p_code)) and used = false
    for update;
  if v_item is null then return false; end if;
  if v_bound is not null and v_bound <> p_student_id then return false; end if;
  update public.access_codes
    set used = true, used_by = p_student_id, used_at = now()
    where upper(code) = upper(trim(p_code));
  insert into public.enrollments (student_id, item_id, payment_status, access_granted, granted_at)
    values (p_student_id, v_item, 'confirmed', true, now())
    on conflict (student_id, item_id)
    do update set access_granted = true, payment_status = 'confirmed', granted_at = now();
  return true;
end $$;
grant execute on function public.redeem_access_code(text, text) to anon, authenticated;

-- 2b) Learner "I've paid, please unlock" -> writes a PENDING enrollment that
--     shows up in the admin's Access Requests queue. Grants NOTHING on its own
--     (admin must tap Grant). Definer rights let us drop the anon enrollment write.
create or replace function public.request_access(p_student_id text, p_item_id text, p_item_title text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (select 1 from public.students s where s.id = p_student_id) then
    return false;
  end if;
  insert into public.enrollments (student_id, item_id, item_title, payment_status, access_granted, granted_at)
    values (p_student_id, p_item_id, p_item_title, 'requested', false, null)
    on conflict (student_id, item_id) do update
      set payment_status = case when public.enrollments.access_granted
                                then public.enrollments.payment_status
                                else 'requested' end;  -- never downgrade a granted row
  return true;
end $$;
grant execute on function public.request_access(text, text, text) to anon, authenticated;

-- 3) Learner sets a new password (first login / change), proving the old hash.
--    Lets us drop the blanket anon UPDATE on students (HIGH-1).
create or replace function public.student_set_password(p_student_id text, p_old_hash text, p_new_hash text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare v_n int;
begin
  update public.students
    set password_hash = p_new_hash, must_change_password = false
    where id = p_student_id and password_hash = p_old_hash;
  get diagnostics v_n = row_count;
  return v_n > 0;
end $$;
grant execute on function public.student_set_password(text, text, text) to anon, authenticated;


-- ############################################################################
-- PART B — RLS LOCK-DOWN (run ONLY after Part A + client changes are verified)
-- Each drop closes a specific finding. Admin (authenticated) keeps full access
-- via the existing *_all_admin policies, so the admin panel is unaffected.
-- ############################################################################

-- HIGH-1: no direct anon UPDATE of student rows (use student_set_password RPC).
drop policy if exists stu_update_anon on public.students;

-- HIGH-2: no direct anon writes to enrollments / payments
--         (unlock via redeem_access_code RPC; admin grants as authenticated).
drop policy if exists enr_write_anon  on public.enrollments;
drop policy if exists enr_update_anon on public.enrollments;
drop policy if exists pay_insert_anon on public.payments;

-- MEDIUM-1: no blanket anon SELECT of learner data (use student_bundle RPC).
drop policy if exists enr_read_anon  on public.enrollments;
drop policy if exists prog_read_anon on public.progress;
drop policy if exists crq_read_anon  on public.cert_requests;

-- MEDIUM-2: certificates are issued only by the admin (authenticated).
drop policy if exists cert_insert on public.certificates;

-- NOTE: 'requestAccess' (learner "I've paid, please unlock") writes a *pending*
-- enrollment. With enr_write_anon dropped, that direct write stops working — the
-- recommended replacement is admin-grant-only (learner requests via an
-- activities row, admin taps Grant). See SECURITY-MIGRATION.md for the choice.


-- ############################################################################
-- ROLLBACK for PART B (re-open anon policies exactly as before, if needed)
-- ############################################################################
-- create policy stu_update_anon on public.students     for update to anon, authenticated using (true) with check (true);
-- create policy enr_write_anon  on public.enrollments  for insert to anon, authenticated with check (true);
-- create policy enr_update_anon on public.enrollments  for update to anon, authenticated using (true) with check (true);
-- create policy pay_insert_anon on public.payments     for insert to anon, authenticated with check (true);
-- create policy enr_read_anon   on public.enrollments  for select to anon, authenticated using (true);
-- create policy prog_read_anon  on public.progress     for select to anon, authenticated using (true);
-- create policy crq_read_anon   on public.cert_requests for select to anon, authenticated using (true);
-- create policy cert_insert     on public.certificates for insert to anon, authenticated with check (true);
