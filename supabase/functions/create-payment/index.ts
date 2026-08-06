// ============================================================
//  TIH Learning Hub — create-payment (Flutterwave)
//  Supabase Edge Function. Holds the SECRET key (via secrets),
//  so the browser never sees it. The AMOUNT is decided here,
//  server-side, so a learner can never pay less than the real
//  course price by tampering with the request.
//
//  Deploy:  supabase functions deploy create-payment --no-verify-jwt
//  Secrets: supabase secrets set FLW_SECRET_KEY=FLWSECK_TEST-xxxx
//           (optional) PAY_CURRENCY=USD
// ============================================================

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Mirror of hub-db.js priceFor() — the single source of truth for what a
// course costs, enforced on the server. Keep in sync with the client.
function priceForUSD(itemId: string): number {
  const id = String(itemId || "").toLowerCase();
  if (id.indexOf("wassce-") === 0) return 3;
  if (id === "ielts" || id === "toefl" || id === "sat") return 25;
  return 5;
}
// Published Liberian-dollar equivalents (fixed by TIH); fallback rate for others.
function toLRD(usd: number): number {
  const fixed: Record<number, number> = { 3: 500, 5: 950 };
  return fixed[usd] ?? Math.round(usd * 190);
}

function json(obj: unknown, status = 200): Response {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const SECRET = Deno.env.get("FLW_SECRET_KEY");
  if (!SECRET) return json({ error: "Payments not configured (missing FLW_SECRET_KEY)." }, 500);

  let body: any = {};
  try { body = await req.json(); } catch { return json({ error: "Invalid JSON body." }, 400); }

  const studentId = String(body.studentId || "").trim();
  const itemId = String(body.itemId || "").trim();
  if (!studentId || !itemId) return json({ error: "Missing studentId or itemId." }, 400);

  const cur = String(body.currency || Deno.env.get("PAY_CURRENCY") || "USD").toUpperCase();
  const usd = priceForUSD(itemId);
  if (usd <= 0) return json({ error: "This course is free — no payment needed." }, 400);
  const amount = cur === "LRD" ? toLRD(usd) : usd;

  const txRef = ("TIH-" + itemId + "-" + studentId + "-" + crypto.randomUUID().slice(0, 8))
    .replace(/[^A-Za-z0-9\-]/g, "").slice(0, 80);

  const redirect = String(body.redirectUrl || "https://tolbertinnovationhub.org/payment-complete.html");
  const payload = {
    tx_ref: txRef,
    amount,
    currency: cur,
    redirect_url: redirect,
    payment_options: "mobilemoney,card,ussd",
    customer: {
      email: String(body.email || (studentId + "@learners.tih")),
      name: String(body.studentName || studentId),
      phonenumber: String(body.phone || ""),
    },
    customizations: {
      title: "TIH Learning Hub",
      description: String(body.itemTitle || itemId),
    },
    meta: {
      student_id: studentId,
      item_id: itemId,
      item_title: String(body.itemTitle || itemId),
      student_name: String(body.studentName || ""),
    },
  };

  let data: any;
  try {
    const r = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: { "Authorization": "Bearer " + SECRET, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    data = await r.json();
  } catch (e) {
    return json({ error: "Could not reach the payment gateway.", detail: String(e) }, 502);
  }

  if (data?.status !== "success" || !data?.data?.link) {
    return json({ error: "Gateway did not return a checkout link.", detail: data }, 502);
  }
  return json({ link: data.data.link, tx_ref: txRef, amount, currency: cur });
});
