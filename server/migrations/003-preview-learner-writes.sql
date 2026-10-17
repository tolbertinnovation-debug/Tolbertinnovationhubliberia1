-- Apply only to the isolated migration-write-tests branch.
GRANT INSERT (student_id,item_id,item_title,payment_status,access_granted)
  ON public.enrollments TO tih_runtime_legacy;
CREATE POLICY legacy_pending_access ON public.enrollments FOR INSERT TO tih_runtime_legacy
  WITH CHECK (student_id IN (SELECT id FROM public.students)
    AND payment_status='requested' AND access_granted=false
    AND payment_reference IS NULL AND granted_at IS NULL);
GRANT INSERT (student_id,course_id,completed_lessons,total_lessons,pct,last_activity_at),
  UPDATE (completed_lessons,total_lessons,pct,last_activity_at)
  ON public.progress TO tih_runtime_legacy;
CREATE POLICY legacy_progress_insert ON public.progress FOR INSERT TO tih_runtime_legacy
  WITH CHECK (student_id IN (SELECT id FROM public.students)
    AND EXISTS (SELECT 1 FROM public.enrollments e WHERE e.student_id=progress.student_id
      AND e.item_id=progress.course_id AND e.access_granted=true)
    AND completed_lessons BETWEEN 0 AND total_lessons AND total_lessons>0 AND pct BETWEEN 0 AND 100);
CREATE POLICY legacy_progress_update ON public.progress FOR UPDATE TO tih_runtime_legacy
  USING (student_id IN (SELECT id FROM public.students))
  WITH CHECK (student_id IN (SELECT id FROM public.students)
    AND EXISTS (SELECT 1 FROM public.enrollments e WHERE e.student_id=progress.student_id
      AND e.item_id=progress.course_id AND e.access_granted=true)
    AND completed_lessons BETWEEN 0 AND total_lessons AND total_lessons>0 AND pct BETWEEN 0 AND 100);
GRANT INSERT (id,student_id,course_id,course_title,status)
  ON public.cert_requests TO tih_runtime_legacy;
CREATE POLICY legacy_pending_certificate ON public.cert_requests FOR INSERT TO tih_runtime_legacy
  WITH CHECK (student_id IN (SELECT id FROM public.students)
    AND status='pending' AND reason='' AND decided_at IS NULL
    AND EXISTS (SELECT 1 FROM public.enrollments e WHERE e.student_id=cert_requests.student_id
      AND e.item_id=cert_requests.course_id AND e.access_granted=true)
    AND EXISTS (SELECT 1 FROM public.progress p WHERE p.student_id=cert_requests.student_id
      AND p.course_id=cert_requests.course_id AND p.pct=100));
GRANT INSERT (student_id,course_id,activity_type,detail) ON public.activities TO tih_runtime_legacy;
CREATE POLICY legacy_activity_insert ON public.activities FOR INSERT TO tih_runtime_legacy
  WITH CHECK (student_id IN (SELECT id FROM public.students)
    AND activity_type IN ('progress_saved','access_requested','certificate_requested') AND score IS NULL);
