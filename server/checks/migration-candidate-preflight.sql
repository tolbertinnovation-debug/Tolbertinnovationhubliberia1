-- Read-only safety checks for a clean data candidate, not migration-write-tests.
SELECT count(*) AS learner_profiles,
       count(*) FILTER(WHERE must_change_password=true) AS requires_password_change,
       count(*) FILTER(WHERE must_change_password=false) AS no_password_change_required,
       count(*) FILTER(WHERE must_change_password IS NULL) AS unknown_password_policy,
       count(*) FILTER(WHERE password_hash IS NOT NULL) AS learner_credential_hashes
FROM public.students;
SELECT (SELECT count(*) FROM public.app_admins WHERE password_hash IS NOT NULL) AS admin_credential_hashes,
       (SELECT count(*) FROM public.students WHERE id LIKE 'migration-test-%' OR id LIKE 'TIH-NEON-%') AS test_learner_profiles,
       (SELECT count(*) FROM public.applications WHERE id LIKE 'TIH-PREVIEW-APP-%') AS preview_applications,
       (SELECT count(*) FROM information_schema.tables WHERE table_schema='neon_auth') AS managed_auth_tables,
       (SELECT count(*) FROM information_schema.tables WHERE table_schema='migration_runtime') AS test_runtime_tables,
       (SELECT count(*) FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace
         WHERE n.nspname='public' AND c.relkind='r' AND NOT c.relrowsecurity) AS public_tables_without_rls;
