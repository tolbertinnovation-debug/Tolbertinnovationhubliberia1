GRANT SELECT (cert_id,student_id,student_name,course_id,course_title,category,issue_date,verified,created_at)
  ON public.certificates TO tih_runtime_legacy;
CREATE POLICY learner_own_issued_certificate ON public.certificates FOR SELECT TO tih_runtime_legacy
  USING (verified=true AND student_id IN (SELECT id FROM public.students WHERE id=current_setting('app.student_id',true)));
