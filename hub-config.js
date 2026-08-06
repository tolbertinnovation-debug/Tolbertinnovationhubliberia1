/* ============================================================
   TIH LEARNING HUB, CONFIGURATION
   ------------------------------------------------------------
   One place to switch the whole hub from per-device storage to a
   real, shared database. Fill in the Supabase values below and the
   site gains cross-device application tracking, student login, a
   live admin dashboard AND public certificate verification, all
   from the same project. Until you do, everything works exactly as
   before (per-device), and nothing breaks.
   ============================================================ */

/* ============================================================
   SUPABASE (central database), powers cross-device tracking of
   applications, students, enrollments, payments, progress,
   certificate requests and public certificate verification, plus
   the live admin dashboard.

   Until you paste your values below, the site keeps working
   exactly as before (everything is stored per-device in the
   browser), nothing breaks if this is left empty.

   ONE-TIME SETUP (free, ~10 minutes):
     1. Go to https://supabase.com  → "New project" (any name,
        e.g. "tih-learning-hub"). Pick a region close to Liberia
        (e.g. West Europe). Save the database password somewhere.
     2. Open  SQL Editor → New query,  paste ALL of
        supabase-schema.sql  from this repo, and click "Run".
     3. Open  Authentication → Users → "Add user":  create ONE
        admin account (email + password) for Samuel. This is what
        the admin panel signs into. (Turn OFF "Auto-confirm"? No, 
        leave it ON / mark the user confirmed so you can sign in.)
     4. Open  Project Settings → API.  Copy:
          • "Project URL"      → url  below
          • "anon public" key  → anonKey  below
        (Never paste the "service_role" key into this file, it is
         a full-access secret and this file is public.)
     5. Commit this file. Central tracking is now live.
   ============================================================ */
window.TIH_SUPABASE_CONFIG = {
  url: "https://oracluubhmxobcnsvcxz.supabase.co",
  anonKey: "sb_publishable_tPiTlfiFlSJedb1VMsrjNA_sZ10Bri8"
};

/* ============================================================
   PAYMENTS (Flutterwave) — lets learners pay for a course with
   Lonestar MTN MoMo, Orange Money or card, then get access
   automatically.  See PAYMENTS-SETUP.md for the full step-by-step.

   SECURITY: only the PUBLIC key and the function URL live here —
   both are safe to publish.  The SECRET key NEVER goes in this
   file; it lives only in your Supabase Edge Function secrets.

   Leave  enabled:false  until you have created your Flutterwave
   account, added the secret key to Supabase and deployed the two
   Edge Functions.  While it is false the site behaves exactly as
   before (the existing request-access / deposit flow), so nothing
   breaks.  Flip it to true only when you are ready to take money.
   ============================================================ */
window.TIH_PAYMENTS_CONFIG = {
  enabled: false,                 // ← flip to true when keys are live and tested
  provider: "flutterwave",
  publicKey: "",                  // ← paste your Flutterwave PUBLIC key (FLWPUBK... — safe to publish)
  // Base URL of the Supabase Edge Functions that hold the secret key.
  functionsBase: "https://oracluubhmxobcnsvcxz.supabase.co/functions/v1",
  // Currency to charge in. Flutterwave Liberia settles mobile money in LRD;
  // cards can be charged in USD. "USD" or "LRD".
  currency: "USD"
};
