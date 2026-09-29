-- READ ONLY. Run by the project owner in an authorized Supabase SQL editor.
-- No student rows, credentials or access codes are selected. No schema/data is changed.
begin transaction read only;

select c.relname as table_name, c.relrowsecurity as row_security_enabled,
       c.relforcerowsecurity as force_row_security
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind in ('r', 'p')
  and c.relname in ('students', 'enrollments', 'progress', 'certificates',
                   'cert_requests', 'payments', 'access_codes', 'applications');

select schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
from pg_policies
where schemaname = 'public'
order by tablename, policyname;

select table_name, column_name, data_type, is_nullable
from information_schema.columns
where table_schema = 'public' and table_name in ('students', 'enrollments', 'progress')
order by table_name, ordinal_position;

select p.proname, pg_get_function_identity_arguments(p.oid) as arguments,
       p.prosecdef as security_definer, p.proconfig as function_settings,
       pg_get_functiondef(p.oid) as definition
from pg_proc p join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public' and p.prokind = 'f'
  and (p.proname like 'student_%' or p.proname like 'admin_%'
       or p.proname in ('redeem_access_code', 'request_access'))
order by p.proname;

select grantee, table_name, privilege_type
from information_schema.role_table_grants
where table_schema = 'public' and grantee in ('anon', 'authenticated')
order by table_name, grantee, privilege_type;

select grantee, routine_name, privilege_type
from information_schema.role_routine_grants
where routine_schema = 'public' and grantee in ('anon', 'authenticated', 'PUBLIC')
order by routine_name, grantee;

rollback;
