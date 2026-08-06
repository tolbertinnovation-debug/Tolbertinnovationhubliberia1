-- ============================================================
--  TIH LEARNING HUB — PAYMENTS (Flutterwave) MIGRATION
--  Run this AFTER supabase-schema.sql, in Supabase → SQL Editor.
--  Safe to run repeatedly (idempotent).
--
--  What it does:
--    1. Extends the existing public.payments table with the fields
--       a real gateway needs (provider, currency, gateway tx id,
--       tx_ref, raw payload) + a UNIQUE tx_ref for idempotency.
--    2. grant_paid_course_access(...) — a SECURITY DEFINER function
--       the payment webhook (Edge Function, service role) calls to
--       record a successful payment AND unlock the course in ONE
--       atomic step. Idempotent: replaying the same tx_ref is a no-op.
--    3. admin_list_payments(p_hash) — hash-gated read for the admin
--       console "Payments" tab (same security model as the other
--       admin_* RPCs already in supabase-schema.sql).
-- ============================================================

-- ---------- 1. Extend the payments table ----------
alter table public.payments add column if not exists provider    text default 'flutterwave';
alter table public.payments add column if not exists currency    text default 'USD';
alter table public.payments add column if not exists tx_ref       text;   -- our reference (TIH-...), unique
alter table public.payments add column if not exists tx_id        text;   -- gateway transaction id
alter table public.payments add column if not exists item_title   text;
alter table public.payments add column if not exists student_name text;
alter table public.payments add column if not exists raw          jsonb;

-- One row per checkout attempt; lets the webhook be safely replayed.
create unique index if not exists payments_tx_ref_key on public.payments (tx_ref) where tx_ref is not null;

-- ---------- 2. Grant access on a confirmed payment ----------
-- Called by the flw-webhook Edge Function (service role) once it has
-- verified the transaction with Flutterwave. Records the payment and
-- flips the enrollment to confirmed + access_granted. Idempotent on tx_ref.
create or replace function public.grant_paid_course_access(
  p_tx_ref       text,
  p_tx_id        text,
  p_student_id   text,
  p_item_id      text,
  p_item_title   text,
  p_student_name text,
  p_amount       numeric,
  p_currency     text,
  p_method       text,
  p_raw          jsonb
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Record / update the payment row (idempotent on tx_ref).
  insert into public.payments
    (student_id, student_name, item_id, item_title, amount, currency,
     method, provider, reference, tx_ref, tx_id, status, raw)
  values
    (p_student_id, p_student_name, p_item_id, p_item_title, p_amount, coalesce(p_currency,'USD'),
     coalesce(p_method,'Mobile Money'), 'flutterwave', p_tx_id, p_tx_ref, p_tx_id, 'success', p_raw)
  on conflict (tx_ref) do update
    set status   = 'success',
        tx_id    = excluded.tx_id,
        amount   = excluded.amount,
        currency = excluded.currency,
        method   = excluded.method,
        raw      = excluded.raw;

  -- Unlock the course (create the enrollment if the learner never had one).
  insert into public.enrollments
    (student_id, item_id, item_title, student_name,
     payment_status, payment_reference, access_granted, granted_at)
  values
    (p_student_id, p_item_id, p_item_title, p_student_name,
     'confirmed', p_tx_ref, true, now())
  on conflict (student_id, item_id) do update
    set payment_status    = 'confirmed',
        payment_reference = excluded.payment_reference,
        access_granted    = true,
        granted_at        = now(),
        item_title        = coalesce(public.enrollments.item_title, excluded.item_title),
        student_name      = coalesce(public.enrollments.student_name, excluded.student_name);
end;
$$;

-- Record a FAILED / cancelled attempt (optional; keeps the audit trail honest).
create or replace function public.record_failed_payment(
  p_tx_ref text, p_tx_id text, p_status text, p_raw jsonb
) returns void
language plpgsql security definer set search_path = public
as $$
begin
  update public.payments
     set status = coalesce(p_status,'failed'), tx_id = coalesce(p_tx_id, tx_id), raw = p_raw
   where tx_ref = p_tx_ref;
end;
$$;

-- ---------- 3. Admin read (hash-gated) ----------
create or replace function public.admin_list_payments(p_hash text)
returns setof public.payments
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin_hash(p_hash) then
    raise exception 'not authorized';
  end if;
  return query select * from public.payments order by created_at desc;
end;
$$;

-- The grant/record functions are called only by the service role (webhook),
-- so revoke them from anon/authenticated to keep the surface tight.
revoke all on function public.grant_paid_course_access(text,text,text,text,text,text,numeric,text,text,jsonb) from anon, authenticated;
revoke all on function public.record_failed_payment(text,text,text,jsonb) from anon, authenticated;
grant execute on function public.admin_list_payments(text) to anon, authenticated;
