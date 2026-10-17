-- Apply only to migration-write-tests after provisioning both staff roles.
-- Login issuer verifies Supabase credentials before it creates a capability.
CREATE TABLE migration_runtime.staff_sessions (
  session_hash text PRIMARY KEY CHECK (session_hash ~ '^[0-9a-f]{64}$'),
  actor text NOT NULL REFERENCES public.app_admins(username),
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE migration_runtime.staff_sessions ENABLE ROW LEVEL SECURITY;
GRANT CONNECT ON DATABASE tih TO tih_runtime_staff_login,tih_runtime_staff;
GRANT USAGE ON SCHEMA public,migration_runtime TO tih_runtime_staff_login,tih_runtime_staff;
GRANT SELECT,INSERT,UPDATE ON migration_runtime.legacy_login_attempts TO tih_runtime_staff_login;
CREATE POLICY staff_login_limiter ON migration_runtime.legacy_login_attempts
  TO tih_runtime_staff_login USING (true) WITH CHECK (true);
GRANT SELECT (username) ON public.app_admins TO tih_runtime_staff_login;
CREATE POLICY staff_login_actor ON public.app_admins FOR SELECT TO tih_runtime_staff_login
  USING (lower(username)=lower(current_setting('app.staff_login_user',true)));
GRANT INSERT (session_hash,actor,expires_at) ON migration_runtime.staff_sessions TO tih_runtime_staff_login;
CREATE POLICY staff_session_issue ON migration_runtime.staff_sessions FOR INSERT TO tih_runtime_staff_login
  WITH CHECK (actor IN (SELECT username FROM public.app_admins
    WHERE lower(username)=lower(current_setting('app.staff_login_user',true)))
    AND expires_at>now() AND expires_at<=now()+interval '15 minutes' AND revoked_at IS NULL);
GRANT SELECT ON migration_runtime.staff_sessions TO tih_runtime_staff;
CREATE POLICY staff_session_read ON migration_runtime.staff_sessions FOR SELECT TO tih_runtime_staff
  USING (session_hash=current_setting('app.staff_session',true));
GRANT UPDATE (revoked_at) ON migration_runtime.staff_sessions TO tih_runtime_staff;
CREATE POLICY staff_session_revoke ON migration_runtime.staff_sessions FOR UPDATE TO tih_runtime_staff
  USING (session_hash=current_setting('app.staff_session',true) AND expires_at>now() AND revoked_at IS NULL)
  WITH CHECK (session_hash=current_setting('app.staff_session',true) AND revoked_at IS NOT NULL);
GRANT SELECT (id,name,email,phone,status,courses,application_id,created_at,updated_at)
  ON public.students TO tih_runtime_staff;
GRANT SELECT ON public.applications,public.enrollments,public.progress,public.cert_requests,public.certificates,public.payments TO tih_runtime_staff;
CREATE POLICY staff_read_students ON public.students FOR SELECT TO tih_runtime_staff USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
CREATE POLICY staff_read_applications ON public.applications FOR SELECT TO tih_runtime_staff USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
CREATE POLICY staff_read_enrollments ON public.enrollments FOR SELECT TO tih_runtime_staff USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
CREATE POLICY staff_read_progress ON public.progress FOR SELECT TO tih_runtime_staff USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
CREATE POLICY staff_read_cert_requests ON public.cert_requests FOR SELECT TO tih_runtime_staff USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
CREATE POLICY staff_read_certificates ON public.certificates FOR SELECT TO tih_runtime_staff USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
CREATE POLICY staff_read_payments ON public.payments FOR SELECT TO tih_runtime_staff USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));

GRANT UPDATE (status,status_message,updated_at) ON public.applications TO tih_runtime_staff;
CREATE POLICY staff_review_application ON public.applications FOR UPDATE TO tih_runtime_staff
  USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL)) WITH CHECK (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL) AND status IN ('pending','approved','rejected'));
GRANT INSERT (student_id,item_id,item_title,payment_status,access_granted,granted_at),
  UPDATE (access_granted,granted_at) ON public.enrollments TO tih_runtime_staff;
CREATE POLICY staff_create_grant ON public.enrollments FOR INSERT TO tih_runtime_staff
  WITH CHECK (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL) AND payment_status='pending' AND payment_reference IS NULL
    AND student_id IN (SELECT id FROM public.students WHERE status='active'));
CREATE POLICY staff_change_grant ON public.enrollments FOR UPDATE TO tih_runtime_staff
  USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL)) WITH CHECK (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
GRANT UPDATE (status,reason,decided_at) ON public.cert_requests TO tih_runtime_staff;
CREATE POLICY staff_review_certificate ON public.cert_requests FOR UPDATE TO tih_runtime_staff
  USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL)) WITH CHECK (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL) AND status IN ('pending','approved','declined'));
GRANT INSERT (cert_id,student_id,student_name,course_id,course_title,category,issue_date,verified)
  ON public.certificates TO tih_runtime_staff;
CREATE POLICY staff_issue_certificate ON public.certificates FOR INSERT TO tih_runtime_staff
  WITH CHECK (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL) AND verified=true AND EXISTS(SELECT 1 FROM public.cert_requests r
    WHERE r.student_id=certificates.student_id AND r.course_id=certificates.course_id AND r.status='approved'));
CREATE TABLE migration_runtime.staff_audit (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), actor text NOT NULL, action text NOT NULL,
  target text NOT NULL, reason text NOT NULL, created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE migration_runtime.staff_audit ENABLE ROW LEVEL SECURITY;
GRANT SELECT,INSERT ON migration_runtime.staff_audit TO tih_runtime_staff;
CREATE POLICY staff_audit_read ON migration_runtime.staff_audit FOR SELECT TO tih_runtime_staff USING (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
CREATE POLICY staff_audit_append ON migration_runtime.staff_audit FOR INSERT TO tih_runtime_staff
  WITH CHECK (EXISTS(SELECT 1 FROM migration_runtime.staff_sessions ss WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL) AND actor=(SELECT ss.actor FROM migration_runtime.staff_sessions ss
    WHERE ss.session_hash=current_setting('app.staff_session',true) AND ss.expires_at>now() AND ss.revoked_at IS NULL));
