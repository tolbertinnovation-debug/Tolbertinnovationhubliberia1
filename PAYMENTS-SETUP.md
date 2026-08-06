# TIH Learning Hub — Online Payments Setup (Flutterwave)

This lets learners pay for a course with **Lonestar MTN MoMo**, **Orange Money**
or a **card**, and get access **automatically** once the payment succeeds.

We chose **Flutterwave** because it is the one gateway that covers Liberian
mobile money *and* cards through a single API, gives you **test keys instantly**
(no business registration needed to start), and lets you receive real money via
an "Unregistered Business Account" while your registration is being processed.

## How it stays secure

- Your **secret key never touches the website.** It lives only inside Supabase.
- The **price is decided on the server**, so nobody can edit the page and pay $1
  for a $25 course.
- When a payment finishes, Flutterwave notifies our server, which **re-checks the
  transaction with Flutterwave** before unlocking the course. A replayed or faked
  notification does nothing.

```
Learner → "Pay & Enroll" → create-payment (Edge Function, holds SECRET key)
        → Flutterwave hosted checkout (MoMo / Orange / card)
        → flw-webhook (Edge Function) verifies → unlocks the course automatically
```

---

## What you do — one time, ~20 minutes

### 1. Create your Flutterwave account
1. Go to <https://flutterwave.com> → **Get Started / Sign up**.
2. Country: **Liberia**. If your business isn't registered yet, choose the
   **Unregistered Business** option — you can still test immediately and start
   receiving while you register.
3. You land in **Test Mode** automatically.

### 2. Copy your API keys
In the Flutterwave dashboard: **Settings → API Keys** (or **API**). You'll see:
- **Public Key** — starts with `FLWPUBK...` → *safe to publish.*
- **Secret Key** — starts with `FLWSECK...` → **SECRET. Never put this on the website or in the repo.**
- **Encryption Key** → keep private too.

Test keys have `_TEST` in them. You'll swap for live keys later.

### 3. Run the database migration
In **Supabase → SQL Editor → New query**, paste **all** of
`supabase-payments.sql` from this repo and click **Run**. (Safe to run more than once.)

### 4. Give Supabase the secret key + a webhook password
Install the Supabase CLI once (<https://supabase.com/docs/guides/cli>), then in a
terminal in this repo:

```bash
supabase login
supabase link --project-ref oracluubhmxobcnsvcxz

# Your Flutterwave SECRET key (test key while testing):
supabase secrets set FLW_SECRET_KEY=FLWSECK_TEST-xxxxxxxxxxxx

# A password YOU invent — you'll paste the same value into Flutterwave (step 6):
supabase secrets set FLW_WEBHOOK_HASH=choose-a-long-random-string

# Optional: charge in LRD instead of USD (default is USD)
# supabase secrets set PAY_CURRENCY=LRD
```

### 5. Deploy the two Edge Functions
```bash
supabase functions deploy create-payment --no-verify-jwt
supabase functions deploy flw-webhook   --no-verify-jwt
```
Your endpoints are now:
- `https://oracluubhmxobcnsvcxz.supabase.co/functions/v1/create-payment`
- `https://oracluubhmxobcnsvcxz.supabase.co/functions/v1/flw-webhook`

### 6. Point Flutterwave at the webhook
In Flutterwave: **Settings → Webhooks**.
- **URL:** `https://oracluubhmxobcnsvcxz.supabase.co/functions/v1/flw-webhook`
- **Secret hash:** the *exact same* value you used for `FLW_WEBHOOK_HASH` in step 4.
- Save.

### 7. Turn payments on in the website
Edit `hub-config.js` → `window.TIH_PAYMENTS_CONFIG`:
```js
enabled: true,                    // turn it on
publicKey: "FLWPUBK_TEST-xxxx",   // your PUBLIC key (safe to publish)
```
Commit and push. (While `enabled:false`, the site keeps using the existing
request-access flow, so nothing breaks before you're ready.)

### 8. Test with a fake payment
Flutterwave provides test cards/MoMo in **Test Mode** (see their docs → *Test
Mode*). Buy a course as a learner; you should be redirected back to
`payment-complete.html` and the course should unlock on its own. Check the new
**Payments** tab in the admin console to see the record.

### 9. Go live
When your Flutterwave account is verified/approved:
1. Swap the **live** Secret key: `supabase secrets set FLW_SECRET_KEY=FLWSECK-...`
   (no `_TEST`) and redeploy the functions.
2. Put the **live Public key** in `hub-config.js`.
3. Do one small real payment to confirm, then you're live. 🎉

---

## Files in this feature
| File | What it is |
|---|---|
| `hub-config.js` → `TIH_PAYMENTS_CONFIG` | Public config: on/off, public key, currency. |
| `supabase-payments.sql` | DB migration: payments fields + secure grant/read functions. |
| `supabase/functions/create-payment/` | Server function that starts a payment (holds secret key). |
| `supabase/functions/flw-webhook/` | Server function that verifies + unlocks the course. |
| `hub-pay.js` | Front-end helper: `HubPay.startCheckout('courseId')`. |
| `payment-complete.html` | Friendly return page after checkout. |

## Troubleshooting
- **"Payments not configured"** → `FLW_SECRET_KEY` secret isn't set / functions not redeployed after setting it.
- **Course didn't unlock** → check the webhook URL + that `FLW_WEBHOOK_HASH` matches on both sides; view Edge Function logs in Supabase → Functions.
- **Wrong amount** → the server price lives in both `supabase-payments.sql` and the two functions' `priceForUSD()`; keep them in sync with `hub-db.js` `priceFor()`.
