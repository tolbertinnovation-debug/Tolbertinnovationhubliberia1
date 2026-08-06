# RLS + RPC Migration Runbook — closing the data‑access holes

This migration moves the security boundary from the **public browser (anon key)**
to the **Supabase server (RLS + security‑definer RPCs)**. It fixes the HIGH/MEDIUM
findings in `SECURITY-AUDIT.md`.

> ⚠️ **Why it is staged.** tolbertinnovationhub.org is live with real students, and
> the unlock/read paths run through Supabase, which I cannot execute SQL against
> or test from the codebase. If the SQL and the client code are changed out of
> order, students can be locked out of courses they paid for. Follow the order
> below. Do the first dry run in a **Supabase branch** (Dashboard → Branches) or a
> throwaway project, not production.

---

## New critical finding this migration also fixes

**Access codes are currently client‑computable.** The unlock code is
`sha256("TIH-ACCESS|" + STUDENT_ID + "|" + item_id)` truncated to 6 chars, and
that salt/algorithm sits in public JavaScript. **Anyone who reads the page can
compute a valid code for any course and unlock it for free.** Combined with the
anon `enrollments` write, the paywall is bypassable today. Part A replaces this
with **random, server‑issued codes** (or admin‑grant‑only — see Step 4).

---

## Order of operations

### Step 1 — Apply **PART A** of `supabase-hardening.sql` (additive, safe)
Supabase → SQL Editor → run everything under `PART A`. This creates the
`access_codes` table and the `student_bundle`, `redeem_access_code`,
`student_set_password` RPCs. **Nothing breaks** — these are new objects the old
client simply doesn't call yet. Also run the prereq unique index if needed:
```sql
create unique index if not exists enrollments_student_item_uidx
  on public.enrollments (student_id, item_id);
```

### Step 2 — Deploy the client changes (I do this; they're backward‑compatible)
The client is patched to **prefer the RPCs and fall back** to the current path if
an RPC is missing, so it is safe both before and after Part B. Exact patch:

**`hub-cloud.js`** — add RPC wrappers (uses the existing supabase client):
```js
function callRpc(name, params) {
  return ready().then(function (db) {
    if (!db) return { data: null, error: 'nocloud' };
    return db.rpc(name, params).then(function (r) { return r; })
      .catch(function () { return { data: null, error: 'neterr' }; });
  });
}
function studentBundleRpc(id, hash) {
  return callRpc('student_bundle', { p_student_id: id, p_hash: hash })
    .then(function (r) { return (r && !r.error && r.data) ? r.data : null; });
}
function redeemAccessCodeRpc(id, code) {
  return callRpc('redeem_access_code', { p_student_id: id, p_code: code })
    .then(function (r) { return !!(r && !r.error && r.data === true); });
}
function setStudentPasswordRpc(id, oldHash, newHash) {
  return callRpc('student_set_password', { p_student_id: id, p_old_hash: oldHash, p_new_hash: newHash })
    .then(function (r) { return !!(r && !r.error && r.data === true); });
}
// export: studentBundleRpc, redeemAccessCodeRpc, setStudentPasswordRpc, _rpcAvailable flag
```

**`hub-db.js` — `hydrateAccountFromCloud`** (read path): try the RPC first, using
the hash already carried on the logged‑in `student` object; fall back to
`fetchAccountBundle` when the RPC returns null (not yet installed):
```js
var hash = student && (student.password_hash || student.passwordHash);
var bundleP = (hash && C.studentBundleRpc)
  ? C.studentBundleRpc(id, hash).then(function (b) { return b || C.fetchAccountBundle(id); })
  : C.fetchAccountBundle(id);
```

**`hub-db.js` — `verifyAccessCode`** (unlock path): try redemption via RPC first;
if the RPC path is unavailable, keep today's behavior so nothing breaks mid‑migration:
```js
if (cloud() && cloud().redeemAccessCodeRpc) {
  return cloud().redeemAccessCodeRpc(studentId, code).then(function (ok) {
    if (ok) { setJSON('tih_access_' + itemId, { studentId: studentId, at: nowISO() }); return true; }
    return legacyVerify(studentId, itemId, code); // fallback while migrating
  });
}
return legacyVerify(studentId, itemId, code);
```

**`hub-db.js` — student password change**: route through `setStudentPasswordRpc`
instead of a direct `students` update.

*Verify in the branch:* log in as a test student, confirm courses still show,
unlock a course with an admin‑issued code, change password. All green → proceed.

### Step 3 — Apply **PART B** (the lock‑down that closes the holes)
Run the `PART B` block. This drops the over‑permissive anon policies. After this:
- anon can no longer update students, write enrollments/payments, read other
  learners' rows, or insert certificates;
- learners read via `student_bundle`, unlock via `redeem_access_code`, change
  password via `student_set_password`;
- the admin (authenticated) is unaffected (the `*_all_admin` policies remain).

Rollback for Part B is at the bottom of the SQL file if anything misbehaves.

### Step 4 — Unlock model: **ADMIN‑GRANT‑ONLY** (chosen)

Final learner flow: pay → tap **"I've paid, request access"** → admin sees it in
the **Access Requests** queue → taps **Grant** (`adminGrantAccess`, authenticated)
→ the learner's device hydrates the unlock on next login. No codes anywhere.

Client changes I make in lockstep with Part B:
- **`requestAccess`** → call the new **`request_access` RPC** instead of writing
  the pending enrollment directly (so it still works after `enr_write_anon` is
  dropped). The admin's Access Requests queue is unchanged (still reads
  `enrollments` where `payment_status='requested'`).
- **Remove the computable‑code path entirely** — delete `accessCode()` and the
  deterministic branch of `verifyAccessCode()`, and remove the code‑entry UI on
  the course player / dashboard. (`redeem_access_code` stays in the DB, unused,
  as an optional future path — harmless.)
- Keep `adminGrantAccess` / `adminRevokeAccess` as‑is (authenticated).

> The `access_codes` table + `redeem_access_code` RPC from Part A stay installed
> but unused under this model — no need to remove them.

---

## What this does and does not cover
- **Fixes:** HIGH‑1, HIGH‑2 (incl. computable codes), MEDIUM‑1, MEDIUM‑2.
- **Still recommended separately:** Cloudflare (WAF/DDoS/bot/rate‑limit + the
  header‑only security headers), Supabase MFA + leaked‑password protection,
  Turnstile on the apply/login forms. See `SECURITY-AUDIT.md` §5.

## Current status
- ✅ `supabase-hardening.sql` committed — Part A (RPCs incl. `request_access`),
  Part B lock‑down, rollback.
- ✅ Unlock model chosen: **admin‑grant‑only**.
- ✅ This runbook committed.
- ⏳ Client patch (Step 2 + the admin‑grant‑only changes in Step 4) is specified
  and **ready to deploy in lockstep** — I apply and test it the moment Part A
  exists (a Supabase branch is perfect for verifying without touching production).

## Your next action
1. Run **Part A** of `supabase-hardening.sql` (Supabase → SQL Editor), plus the
   `enrollments_student_item_uidx` index. Additive and safe; a Branch is ideal.
2. Tell me it's applied → I deploy + verify the backward‑compatible client patch.
3. Run **Part B** → the holes are closed.
4. I remove the computable‑code path and finish the admin‑grant‑only wiring.
