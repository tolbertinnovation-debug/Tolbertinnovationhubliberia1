# TIH Learning Hub — Security Audit & Hardening Report

**Target:** tolbertinnovationhub.org
**Scope:** Full application code + backend configuration review and hardening
**Date:** 2026‑08‑06
**Method:** Source‑code and configuration review (white‑box). This was **not** an
external network/port scan or a live third‑party penetration test — see
"Honest scope note" below.

---

## 0. Honest scope note (read this first)

tolbertinnovationhub.org is a **static website hosted on GitHub Pages** with a
**Supabase** backend that the browser talks to directly using a **public anon
key**. There is **no application server, OS, database host, or network that TIH
operates** — those layers are owned and run by GitHub and Supabase.

That single fact determines what "enterprise‑grade security" can mean here:

| Layer | Who owns it | What that means |
|---|---|---|
| TLS/HTTPS, HSTS, OCSP, ciphers | **GitHub Pages** | Already enterprise‑grade and enforced; not TIH‑configurable |
| OS, ports, firewall, patching | **GitHub / Supabase** | Managed; nothing for TIH to harden or "close" |
| DB engine, encryption at rest, backups | **Supabase (AWS)** | Managed; AES‑256 at rest, automated backups |
| Edge DDoS absorption | **GitHub / Cloudflare‑class** | Present at platform level |
| **App code, auth flows, RLS policies, headers, input/output handling** | **TIH ← this is us** | **This is where the real work is, and what this report covers** |

Anything in the original 18‑phase brief that lives in the top four rows is
marked **Platform‑handled** below. I have **not fabricated** a firewall config,
a "42 → 95" numeric score, or a penetration‑test result I did not run — doing so
would be worse than useless because it would give false assurance.

---

## 1. Posture summary (qualitative, before → after)

The front‑end was already in **good** shape. The real risk concentration is the
**Supabase Row‑Level‑Security (authorization) model**, which over‑trusts the
public anon key.

| Area | Before | After this pass |
|---|---|---|
| Transport (HTTPS/TLS/HSTS) | Strong (platform) | Strong (platform) |
| Content‑Security‑Policy | Strong, but no anti‑clickjacking | **Strong + `frame-ancestors 'none'` site‑wide** |
| Output escaping / XSS | Good (`esc()` used consistently) | Good (verified) |
| Secret management | Good (no secret committed) | Good (verified) |
| Admin authentication | Weak (browser‑only default password) | **Cloud Supabase Auth (done earlier) + this report** |
| **Database authorization (RLS)** | **Weak (anon can over‑write / over‑read)** | **Documented + hardening SQL provided (needs apply + client RPCs)** |
| Responsible disclosure | None | **`/.well-known/security.txt` added** |

**Bottom line:** the site is *not* trivially defaceable or XSS‑riddled, but the
**data‑access model is the thing to fix next**, and it needs a small backend
(RPC) migration, not just a toggle.

---

## 2. Vulnerabilities found (ranked by real risk)

### 🔴 HIGH‑1 — Anon key can UPDATE any student row (account takeover / tampering)
`stu_update_anon` allows `update to anon ... using (true) with check (true)`.
Because the anon key ships in public JavaScript, anyone can call the Supabase
REST API directly and overwrite **any** student's `password_hash`, name, or
fields — i.e., take over accounts or alter records.
**OWASP:** A01 Broken Access Control.

### 🔴 HIGH‑2 — Anon key can self‑grant course access / forge payments (revenue bypass)
`enr_write_anon`, `enr_update_anon`, `pay_insert_anon` all use `with check
(true)`. Anyone with the anon key can insert an `enrollments` row (unlock any
course free) or fabricate `payments` rows. The "valid access code" mentioned in
the schema comment is **not enforced** by the policy.
**OWASP:** A01 Broken Access Control / business‑logic bypass.

### 🟠 MEDIUM‑1 — Cross‑student data readable via anon (PII exposure)
`enr_read_anon`, `prog_read_anon`, `crq_read_anon` are `select to anon using
(true)`. The app filters by `student_id` **in the browser**, but the server
returns **all rows** to any anon caller who queries the API directly — exposing
every learner's enrollments, progress, and certificate requests.
**OWASP:** A01 Broken Access Control / A02 sensitive‑data exposure.

### 🟠 MEDIUM‑2 — Anyone can insert a certificate (forgery)
`cert_insert` is `insert to anon with check (true)`, and `cert_read_all` is
public. A forged certificate row would then pass public verification.
**OWASP:** A08 Software/Data Integrity.

### 🟡 LOW‑1 — Application form is unauthenticated & unthrottled (spam)
`app_insert_anon with check (true)` is intended (public applications) but has no
rate limiting → susceptible to spam/flooding. Mitigate with a captcha/turnstile
or a Supabase Edge Function throttle.

### 🟡 LOW‑2 — Client‑side quiz/exam scoring is inherently tamper‑visible
Quiz answers and scoring run in the browser, so a determined user can read
answers or set their own score in local state. Acceptable for low‑stakes
practice; **not** suitable if a certificate must be trustworthy — that requires
server‑side scoring (Edge Function/RPC).

### 🟡 LOW‑3 — CSP relies on `'unsafe-inline'` for scripts
Necessary today because pages use inline `<script>`. It weakens CSP's XSS
mitigation. Full fix = move inline JS to files + per‑response nonces, which
GitHub Pages cannot emit; documented as accepted risk.

### ✅ Checked and found OK
- **No secret leaked** — only the public anon key is committed (by design); a
  comment explicitly forbids the `service_role` key. Verified.
- **Output escaping** — the admin/dashboard render applicant‑supplied fields
  (`name`, `email`, `phone`, `goals`) through `esc()`; **stored XSS mitigated**.
- **No server file uploads** — the only `<input type=file>` is a client‑side QR
  reader on `certificate-verify.html`; nothing is uploaded to a server, so the
  file‑upload attack surface (double‑extension, web‑shell, MIME) does not exist.
- **SQL injection** — all DB access is via Supabase/PostgREST + the
  security‑definer `student_login` RPC (parameterized); no string‑built SQL.
- **`student_login`** correctly keeps the `students` table closed and checks the
  password hash server‑side — good design.

---

## 3. What I fixed in this pass (live)

1. **Clickjacking protection site‑wide** — added `frame-ancestors 'none'` to the
   Content‑Security‑Policy on **all 166 pages**. This is the modern replacement
   for `X-Frame-Options` and, unlike that header, it **is honored inside a
   `<meta>` CSP**, so it works even though GitHub Pages can't set response
   headers. The site can no longer be embedded in an attacker's iframe for
   clickjacking/overlay phishing.
2. **Responsible‑disclosure channel** — added `/.well-known/security.txt`
   (RFC 9116) so researchers have a defined way to report issues.
3. **Admin login moved to the cloud** (previous change) — the admin now signs in
   with a **Supabase Auth** account instead of a browser‑only default password.

---

## 4. The fix that matters most: harden Supabase RLS

These policies close HIGH‑1/2 and MEDIUM‑1/2. **⚠️ Applying them as‑is will break
the current self‑service flows** (self‑enroll on access code, cross‑device
unlock reads, client certificate insert) **unless** those operations are moved
behind `security definer` RPCs that enforce the rules server‑side — exactly like
`student_login` already does. Recommended sequence:

**Step A — stop the bleeding (safe to apply now; may disable a feature until RPCs exist):**
```sql
-- HIGH-1: a learner may only update their OWN row, and may never change
-- their own access/role fields via anon. Prefer: remove anon update entirely
-- and do profile/password updates through a security-definer RPC.
drop policy if exists stu_update_anon on public.students;

-- HIGH-2: never let anon write enrollments/payments directly. Course unlocks
-- must be granted by the admin (authenticated) or by a code-checking RPC.
drop policy if exists enr_write_anon   on public.enrollments;
drop policy if exists enr_update_anon  on public.enrollments;
drop policy if exists pay_insert_anon  on public.payments;

-- MEDIUM-2: certificates are issued only by the admin, never by anon.
drop policy if exists cert_insert on public.certificates;

-- MEDIUM-1: stop returning every learner's rows to anon. Replace the
-- blanket anon SELECT with an RPC that returns ONLY the caller's bundle.
drop policy if exists enr_read_anon on public.enrollments;
drop policy if exists prog_read_anon on public.progress;
drop policy if exists crq_read_anon on public.cert_requests;
```

**Step B — restore the features securely via RPCs** (server enforces the rule):
```sql
-- Learner loads ONLY their own account state (mirrors student_login's pattern).
create or replace function public.student_bundle(p_student_id text, p_hash text)
returns jsonb language sql security definer set search_path = public as $$
  select jsonb_build_object(
    'enrollments', (select coalesce(jsonb_agg(e), '[]'::jsonb) from public.enrollments e
                    where e.student_id = p_student_id),
    'progress',    (select coalesce(jsonb_agg(pr), '[]'::jsonb) from public.progress pr
                    where pr.student_id = p_student_id),
    'cert_requests',(select coalesce(jsonb_agg(c), '[]'::jsonb) from public.cert_requests c
                    where c.student_id = p_student_id)
  )
  from public.students s
  where s.id = p_student_id and s.password_hash = p_hash;  -- auth check
$$;

-- Course unlock only against a real, unused access code (example shape).
-- create table public.access_codes(code text primary key, item_id text,
--   student_id text, used boolean default false, created_at timestamptz default now());
create or replace function public.redeem_access_code(p_student_id text, p_code text)
returns boolean language plpgsql security definer set search_path = public as $$
declare v_item text;
begin
  update public.access_codes set used = true, student_id = p_student_id
    where code = p_code and used = false
    returning item_id into v_item;
  if v_item is null then return false; end if;
  insert into public.enrollments(student_id, item_id, access_granted, granted_at)
    values (p_student_id, v_item, true, now())
    on conflict (student_id, item_id) do update set access_granted = true;
  return true;
end $$;
```
Then update the client (`hub-db.js` / `hub-cloud.js`) to call
`rpc('student_bundle', …)` and `rpc('redeem_access_code', …)` instead of writing
those tables directly. **I can implement this migration end‑to‑end on request** —
it's the single biggest security upgrade available to this app.

---

## 5. Actions only YOU can take (dashboard / DNS — I can't do these from code)

| # | Action | Where | Why |
|---|---|---|---|
| A | **Toggle "Enforce HTTPS"** | GitHub repo → Settings → Pages | Guarantees HTTP→HTTPS redirect + HSTS on the apex |
| B | **Create the admin user + enable MFA (TOTP)** | Supabase → Authentication → Users / Providers | Activates the cloud admin login and adds a second factor |
| C | **Put Cloudflare (free) in front of the domain** | Cloudflare dashboard + DNS | This is your **WAF + DDoS + bot + rate‑limit** layer (Phases 11/12) — a static host can't do these itself |
| D | **Turn on Supabase leaked‑password protection & auth rate limits** | Supabase → Auth settings | Blocks known‑breached passwords, throttles brute force |
| E | **Apply the RLS SQL in §4** (with the RPC migration) | Supabase → SQL editor | Closes HIGH‑1/2 and MEDIUM‑1/2 |
| F | **Add Cloudflare Turnstile / hCaptcha** to the apply & login forms | Cloudflare + form code | Stops LOW‑1 spam and credential‑stuffing |

---

## 6. 18‑phase brief — reality mapping

| Phase | Status | Note |
|---|---|---|
| 1 Audit | ✅ Done | This report |
| 2 HTTPS/TLS/HSTS/OCSP/PFS | ✅ Platform (GitHub) | Enable "Enforce HTTPS" (§5‑A) |
| 3 Auth (MFA, hashing, lockout) | ◑ Partial | Admin → Supabase Auth done; bcrypt hashing + MFA + lockout are Supabase features to enable (§5‑B/D) |
| 4 Session security | ◑ N/A‑ish | No server cookies; Supabase manages tokens. `SameSite/HttpOnly` cookie items don't apply |
| 5 Database security | ◑ Action needed | At‑rest encryption/backups = Supabase; **RLS hardening = §4** |
| 6 App security (XSS/CSRF/SQLi/…) | ✅ Mostly good | Escaping verified; no SQLi surface; CSRF minimal (no cookie‑auth); CSP hardened |
| 7 File‑upload security | ✅ N/A | No server uploads |
| 8 API security | ◑ Action needed | "API" = Supabase REST; security = RLS + RPCs (§4) + Supabase rate limits |
| 9 Server hardening | ✅ Platform | No TIH server exists |
| 10 Security headers | ◑ Best‑effort done | CSP (incl. `frame-ancestors`, `object-src 'none'`, `upgrade-insecure-requests`) + Referrer‑Policy via meta. Header‑only items (HSTS, XFO, XCTO, Permissions‑Policy, COOP/COEP/CORP) **cannot be set on GitHub Pages**; use Cloudflare (§5‑C) to add them |
| 11 DDoS/bot | ⬜ Needs Cloudflare | §5‑C |
| 12 WAF | ⬜ Needs Cloudflare | §5‑C |
| 13 Monitoring/logging | ◑ Partial | App has an audit log + activities table; Supabase logs API. Central alerting = Cloudflare/Supabase |
| 14 Backup/DR | ✅ Platform | Supabase automated backups; code is in Git |
| 15 Performance | ◑ Partial | GitHub serves gzip + CDN; cache‑busting `?v=` in use. Optional: minify, `loading="lazy"` on images |
| 16 Learning‑Hub assets | ◑ Tied to §4 | Student/instructor/cert/grade/payment protection = the RLS work |
| 17 Compliance | ◑ Documented | OWASP‑Top‑10 mapped above; add a GDPR/data‑retention note to `privacy.html` |
| 18 Pentest | ⚠️ Not performed | Code review only. A real pentest needs an authorized external firm/tool — **do not** point scanners at GitHub/Supabase infra without their permission |

---

## 7. Ongoing maintenance & patch plan

- **Weekly:** review the admin audit log + Supabase auth logs for anomalies.
- **Monthly:** confirm Supabase automated backups exist and test a restore into a
  staging project; rotate the admin password.
- **Quarterly:** re‑run this code review after feature changes; review RLS
  policies; check the CDN library pins (`@supabase/supabase-js@2`) for advisories.
- **On any dependency:** pin exact versions (avoid `@2` floating) once stable.
- **Annually:** renew `security.txt` `Expires`; consider a paid external pentest
  once the RLS/RPC migration (§4) is live.

---

*Prepared as a white‑box code & configuration review. No numeric "security score"
or external penetration‑test result is asserted because neither was measured;
the qualitative posture and prioritized fixes above are the honest deliverable.*
