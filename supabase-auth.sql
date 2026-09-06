-- ============================================================
-- TIH LEARNING HUB — SUPABASE AUTH BRIDGE
-- Additive migration. Safe to run more than once. Run it AFTER
-- supabase-schema.sql. It changes no existing data and drops nothing.
--
-- WHY: student accounts already live in public.students (keyed by their
-- TIH-STU- id) and log in cross-device through the student_login RPC. But a
-- brand-new account is written to that table best-effort, so on a poor
-- connection the row can fail to reach the database and the account then
-- exists only in the browser that signed up — it can never log in elsewhere.
--
-- FIX ("Auth for new users, keep everyone else"):
--   • New signups also create a Supabase Auth account (supabase.auth.signUp).
--     Auth is a single authoritative write — it either succeeds (durable,
--     cross-device by design) or reports an error — so a new account is never
--     silently device-only again.
--   • Each profile is linked to its Auth user by a new nullable column
--     students.auth_user_id (= auth.users.id). All learning data stays keyed
--     to the TIH-STU- id, so nothing is re-linked or orphaned.
--   • Legacy learners keep auth_user_id NULL and keep logging in through the
--     existing student_login RPC. They are linked to Auth automatically the
--     next time they log in (their password is proven first).
--
-- IMPORTANT SUPABASE SETTING: for instant cross-device use, turn OFF email
-- confirmation (Dashboard → Authentication → Providers → Email → uncheck
-- "Confirm email"). With it ON, a new learner cannot sign in on a second
-- device until they click a confirmation email; the account is still created,
-- but cross-device login waits for confirmation.
-- ============================================================

-- 1) Link column: which Supabase Auth user owns this profile (NULL = legacy).
alter table public.students
  add column if not exists auth_user_id uuid;

create unique index if not exists students_auth_user_id_idx
  on public.students (auth_user_id) where auth_user_id is not null;

-- 2) student_claim(login, hash)
--    Link the CURRENTLY SIGNED-IN Supabase Auth user to their profile row,
--    proving ownership with the SHA-256 password hash. Runs with definer
--    rights but keys off auth.uid(), so a signed-in user can only ever attach
--    THEIR OWN auth id, and only to a row whose password hash they can produce
--    (i.e. whose password they actually know). Returns the linked row, or none.
--    Used both by new registration (its own hash) and by the automatic upgrade
--    of a legacy account on first Auth login.
create or replace function public.student_claim(p_login text, p_hash text)
returns setof public.students
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    return;  -- must be signed in to Supabase Auth to claim a profile
  end if;
  update public.students s
     set auth_user_id = auth.uid(), updated_at = now()
   where (lower(s.id) = lower(trim(p_login)) or lower(s.email) = lower(trim(p_login)))
     and s.password_hash = p_hash
     and s.status <> 'suspended'
     and (s.auth_user_id is null or s.auth_user_id = auth.uid());
  return query
    select * from public.students s where s.auth_user_id = auth.uid() limit 1;
end;
$$;

grant execute on function public.student_claim(text, text) to authenticated;

-- 3) student_me()
--    The signed-in Auth user's own profile, for cross-device session restore
--    on a fresh device / private window. No password needed — the Supabase
--    Auth JWT is the proof of identity. Returns at most one row.
create or replace function public.student_me()
returns setof public.students
language sql
security definer
set search_path = public
as $$
  select * from public.students s where s.auth_user_id = auth.uid() limit 1;
$$;

grant execute on function public.student_me() to authenticated;

-- 4) Let a signed-in learner read their OWN row directly (belt-and-braces
--    alongside student_me, and future-proofing for SDK .from('students')
--    reads). Still no blanket public read: only your own linked row.
drop policy if exists stu_read_self on public.students;
create policy stu_read_self on public.students
  for select to authenticated
  using (auth_user_id = auth.uid());

-- Done. Existing rows are untouched (auth_user_id stays NULL until claimed);
-- existing policies, functions and the student_login RPC are unchanged.
