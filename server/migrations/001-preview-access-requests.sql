-- Apply only to migration-write-tests after provisioning tih_runtime_requests.
-- This role inherits the existing identity-scoped SELECT policies.
GRANT tih_runtime_readonly TO tih_runtime_requests;
GRANT INSERT (student_id,item_id,item_title,payment_status,access_granted)
  ON public.enrollments TO tih_runtime_requests;
CREATE POLICY preview_request_own_access ON public.enrollments
  FOR INSERT TO tih_runtime_requests
  WITH CHECK (
    payment_status = 'requested' AND access_granted = false
    AND payment_reference IS NULL AND granted_at IS NULL
    AND student_id IN (
      SELECT id FROM public.students
      WHERE auth_user_id::text = current_setting('app.user_id',true)
        AND status = 'active'
    )
  );
