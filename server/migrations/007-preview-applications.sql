-- Apply only to migration-write-tests, after provisioning tih_runtime_applications.
-- Existing copied applications have no receipt hash and are inaccessible to this role.
ALTER TABLE public.applications ADD COLUMN preview_receipt_hash text UNIQUE
  CHECK (preview_receipt_hash IS NULL OR preview_receipt_hash ~ '^[0-9a-f]{64}$');
CREATE TABLE migration_runtime.application_limits (
  bucket_key text NOT NULL, time_bucket bigint NOT NULL,
  hits integer NOT NULL CHECK(hits BETWEEN 1 AND 102),
  PRIMARY KEY(bucket_key,time_bucket)
);
ALTER TABLE migration_runtime.application_limits ENABLE ROW LEVEL SECURITY;
GRANT CONNECT ON DATABASE tih TO tih_runtime_applications;
GRANT USAGE ON SCHEMA public,migration_runtime TO tih_runtime_applications;
GRANT SELECT,INSERT,UPDATE ON migration_runtime.application_limits TO tih_runtime_applications;
CREATE POLICY application_limits ON migration_runtime.application_limits TO tih_runtime_applications USING(true) WITH CHECK(true);
GRANT INSERT(id,name,email,phone,goals,tracks,status,preview_receipt_hash) ON public.applications TO tih_runtime_applications;
GRANT SELECT(id,submitted_at,status,status_message,updated_at,preview_receipt_hash) ON public.applications TO tih_runtime_applications;
CREATE POLICY application_receipt_insert ON public.applications FOR INSERT TO tih_runtime_applications
  WITH CHECK(status='pending' AND id ~ '^TIH-PREVIEW-APP-[0-9a-f]{24}$'
    AND preview_receipt_hash=current_setting('app.application_receipt',true));
CREATE POLICY application_receipt_read ON public.applications FOR SELECT TO tih_runtime_applications
  USING(preview_receipt_hash=current_setting('app.application_receipt',true));
