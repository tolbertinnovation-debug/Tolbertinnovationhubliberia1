-- Public certificate lookup only, on the isolated preview database.
GRANT CONNECT ON DATABASE tih TO tih_runtime_verify;
GRANT USAGE ON SCHEMA public TO tih_runtime_verify;
GRANT SELECT (cert_id,student_name,course_title,category,issue_date,verified)
  ON public.certificates TO tih_runtime_verify;
CREATE POLICY preview_public_certificate_lookup ON public.certificates FOR SELECT TO tih_runtime_verify
  USING (verified=true AND cert_id=current_setting('app.verify_cert_id',true));
