-- Minimal local stand-ins for the pieces of a real Supabase project that
-- libapps-schema.sql leans on: the storage schema, the anon/authenticated
-- roles, and the students / app_admins tables plus is_admin_hash() from
-- supabase-schema.sql. For local testing only -- never run this on Supabase.
create extension if not exists "pgcrypto";
create schema if not exists storage;
create table if not exists storage.buckets (
  id text primary key, name text, public boolean,
  file_size_limit bigint, allowed_mime_types text[]
);
create table if not exists storage.objects (id uuid primary key default gen_random_uuid(), bucket_id text, name text);
alter table storage.objects enable row level security;
create role anon; create role authenticated;
-- mirrors supabase-schema.sql
create table if not exists public.students (
  id text primary key, created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(), status text not null default 'active',
  name text not null, email text, phone text, location text, application_id text,
  password_hash text, must_change_password boolean default true,
  courses jsonb default '[]'::jsonb, last_login_at timestamptz, admin_notes jsonb default '[]'::jsonb
);
create table if not exists public.app_admins (username text primary key, password_hash text);
create or replace function public.is_admin_hash(p_hash text) returns boolean
language sql security definer set search_path = public as $$
  select exists (select 1 from public.app_admins where password_hash = p_hash);
$$;
