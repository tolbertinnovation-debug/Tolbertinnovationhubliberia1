-- Apply only to migration-write-tests after provisioning tih_runtime_legacy.
CREATE SCHEMA IF NOT EXISTS migration_runtime;
CREATE TABLE migration_runtime.legacy_login_attempts (
  identity_key text NOT NULL,
  time_bucket bigint NOT NULL,
  attempts integer NOT NULL CHECK (attempts BETWEEN 1 AND 7),
  PRIMARY KEY (identity_key,time_bucket)
);
ALTER TABLE migration_runtime.legacy_login_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY legacy_limiter ON migration_runtime.legacy_login_attempts
  TO tih_runtime_legacy USING (true) WITH CHECK (true);
GRANT CONNECT ON DATABASE tih TO tih_runtime_legacy;
GRANT USAGE ON SCHEMA public,migration_runtime TO tih_runtime_legacy;
GRANT SELECT,INSERT,UPDATE ON migration_runtime.legacy_login_attempts TO tih_runtime_legacy;
GRANT SELECT (id,name,email,status,courses,created_at,updated_at)
  ON public.students TO tih_runtime_legacy;
GRANT SELECT ON public.enrollments,public.progress,public.cert_requests TO tih_runtime_legacy;
CREATE POLICY legacy_own_student ON public.students FOR SELECT TO tih_runtime_legacy
  USING (id = current_setting('app.student_id',true) AND status='active');
CREATE POLICY legacy_own_enrollment ON public.enrollments FOR SELECT TO tih_runtime_legacy
  USING (student_id IN (SELECT id FROM public.students WHERE id=current_setting('app.student_id',true)));
CREATE POLICY legacy_own_progress ON public.progress FOR SELECT TO tih_runtime_legacy
  USING (student_id IN (SELECT id FROM public.students WHERE id=current_setting('app.student_id',true)));
CREATE POLICY legacy_own_cert_request ON public.cert_requests FOR SELECT TO tih_runtime_legacy
  USING (student_id IN (SELECT id FROM public.students WHERE id=current_setting('app.student_id',true)));
