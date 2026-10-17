-- Test branch only. Provision tih_runtime_signup before applying.
ALTER TABLE public.students ADD COLUMN neon_auth_user_id uuid UNIQUE;
-- Expose only the verified identity selected by the server, never auth sessions/passwords.
CREATE VIEW migration_runtime.signup_identity WITH (security_barrier=true) AS
  SELECT u.id,u.name,u.email,u."emailVerified" AS email_verified,u.banned,
    EXISTS(SELECT 1 FROM public.students s WHERE lower(s.email)=lower(u.email)
      AND (s.neon_auth_user_id IS NULL OR s.neon_auth_user_id<>u.id)) AS copied_email_exists
  FROM neon_auth."user" u WHERE u.id::text=current_setting('app.neon_auth_user',true);
GRANT CONNECT ON DATABASE tih TO tih_runtime_signup;
GRANT USAGE ON SCHEMA public,migration_runtime TO tih_runtime_signup;
GRANT SELECT ON migration_runtime.signup_identity TO tih_runtime_signup;
GRANT SELECT(id,name,email,status,courses,neon_auth_user_id) ON public.students TO tih_runtime_signup;
GRANT INSERT(id,name,email,status,courses,must_change_password,neon_auth_user_id) ON public.students TO tih_runtime_signup;
CREATE POLICY signup_own_student_read ON public.students FOR SELECT TO tih_runtime_signup
  USING(neon_auth_user_id::text=current_setting('app.neon_auth_user',true));
CREATE POLICY signup_own_student_insert ON public.students FOR INSERT TO tih_runtime_signup
  WITH CHECK(status='active' AND must_change_password=false
    AND id='TIH-NEON-'||replace(neon_auth_user_id::text,'-','')
    AND jsonb_typeof(courses)='array'
    AND EXISTS(SELECT 1 FROM migration_runtime.signup_identity u
      WHERE u.id=students.neon_auth_user_id AND u.email=students.email AND u.name=students.name
        AND u.email_verified=true AND coalesce(u.banned,false)=false AND u.copied_email_exists=false));
