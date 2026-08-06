// ============================================================
//  TIH Learning Hub — flw-webhook (Flutterwave)
//  Supabase Edge Function. Flutterwave calls this after a payment.
//  We NEVER trust the webhook body alone:
//    1. Check the secret verif-hash header (only Flutterwave knows it).
//    2. Re-verify the transaction directly with Flutterwave's API.
//    3. Confirm the amount is at least the real course price.
//    4. Only then unlock the course (grant_paid_course_access).
//  Replaying the same payment is a no-op (idempotent on tx_ref).
//
//  Deploy:  supabase functions deploy flw-webhook --no-verify-jwt
//  Secrets: FLW_SECRET_KEY, FLW_WEBHOOK_HASH
//  Webhook URL to paste in the Flutterwave dashboard:
//    https://<project-ref>.supabase.co/functions/v1/flw-webhook
// ============================================================

function priceForUSD(itemId: string): number {
  const id = String(itemId || "").toLowerCase();
  if (id.indexOf("wassce-") === 0) return 3;
  if (id === "ielts" || id === "toefl" || id === "sat") return 25;
  return 5;
}
function toLRD(usd: number): number {
  const fixed: Record<number, number> = { 3: 500, 5: 950 };
  return fixed[usd] ?? Math.round(usd * 190);
}

// Call a Postgres RPC with the service-role key (server-side only).
async function rpc(fn: string, args: Record<string, unknown>): Promise<Response> {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  return await fetch(`${url}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: {
      "apikey": key ?? "",
      "Authorization": "Bearer " + (key ?? ""),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return new Response("POST only", { status: 405 });

  const SECRET = Deno.env.get("FLW_SECRET_KEY");
  const HASH = Deno.env.get("FLW_WEBHOOK_HASH");
  const sig = req.headers.get("verif-hash");
  if (!HASH || sig !== HASH) return new Response("unauthorized", { status: 401 });

  let evt: any = {};
  try { evt = await req.json(); } catch { return new Response("bad json", { status: 400 }); }

  const d = evt?.data || {};
  const txId = String(d.id || "");
  const txRef = String(d.tx_ref || "");
  if (!txId) return new Response("ok", { status: 200 }); // nothing to verify

  // Re-verify with Flutterwave — the source of truth.
  let v: any = {};
  try {
    const vr = await fetch(`https://api.flutterwave.com/v3/transactions/${txId}/verify`, {
      headers: { "Authorization": "Bearer " + (SECRET ?? "") },
    });
    v = await vr.json();
  } catch (e) {
    return new Response("verify failed: " + String(e), { status: 502 });
  }

  const tx = v?.data || {};
  const verified = v?.status === "success" && tx?.status === "successful";
  const meta = tx?.meta || d?.meta || {};

  if (!verified) {
    await rpc("record_failed_payment", {
      p_tx_ref: txRef, p_tx_id: txId, p_status: tx?.status || "failed", p_raw: v,
    });
    return new Response("ok", { status: 200 });
  }

  // Amount guard: paid amount must cover the real price in the charged currency.
  const cur = String(tx.currency || "USD").toUpperCase();
  const expected = cur === "LRD" ? toLRD(priceForUSD(meta.item_id)) : priceForUSD(meta.item_id);
  const paid = Number(tx.amount || 0);
  if (paid + 0.01 < expected) {
    await rpc("record_failed_payment", {
      p_tx_ref: txRef, p_tx_id: txId, p_status: "underpaid", p_raw: v,
    });
    return new Response("ok", { status: 200 });
  }

  // Verified + funded → unlock the course.
  await rpc("grant_paid_course_access", {
    p_tx_ref: txRef,
    p_tx_id: txId,
    p_student_id: String(meta.student_id || ""),
    p_item_id: String(meta.item_id || ""),
    p_item_title: String(meta.item_title || meta.item_id || ""),
    p_student_name: String(meta.student_name || ""),
    p_amount: paid,
    p_currency: cur,
    p_method: String(tx.payment_type || "Mobile Money"),
    p_raw: v,
  });

  return new Response("ok", { status: 200 });
});
