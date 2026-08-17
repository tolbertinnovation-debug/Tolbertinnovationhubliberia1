/**
 * POST /functions/v1/seed-courses
 * Body: { courses: { [id]: fullCoursePayload } }
 * Optional header x-seed-secret if SEED_SECRET is set.
 */
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const cors: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-seed-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const seedSecret = Deno.env.get("SEED_SECRET") || "";
  if (seedSecret) {
    const got = req.headers.get("x-seed-secret") || "";
    if (got !== seedSecret) return json({ error: "Unauthorized" }, 401);
  }

  const url = Deno.env.get("SUPABASE_URL") || "";
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  if (!url || !key) return json({ error: "Missing service role" }, 503);

  let body: { courses?: Record<string, Record<string, unknown>> };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }
  const courses = body.courses || {};
  const ids = Object.keys(courses);
  if (!ids.length) return json({ error: "courses object required" }, 400);

  const sb = createClient(url, key);
  const rows = ids.map((id, i) => {
    const p = courses[id] || {};
    return {
      id,
      title: String(p.title || id),
      category: p.category ? String(p.category) : null,
      level: p.level ? String(p.level) : null,
      is_free: Boolean(p.isFree),
      is_published: true,
      sort_order: i,
      payload: p,
      updated_at: new Date().toISOString(),
    };
  });

  const { error } = await sb.from("hub_courses").upsert(rows, { onConflict: "id" });
  if (error) return json({ error: error.message }, 500);
  return json({ ok: true, upserted: rows.length });
});
