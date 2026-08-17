/**
 * GET /functions/v1/get-courses
 * Returns published hub_courses as { courses: { [id]: payload } }
 * Optional: ?id=webdev for a single course
 */
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const cors: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "GET") return json({ error: "Method not allowed" }, 405);

  try {
    const url = Deno.env.get("SUPABASE_URL") || "";
    const key =
      Deno.env.get("SUPABASE_ANON_KEY") ||
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
      "";
    if (!url || !key) return json({ error: "Supabase not configured", courses: {} }, 503);

    const sb = createClient(url, key);
    const u = new URL(req.url);
    const oneId = (u.searchParams.get("id") || "").trim();

    if (oneId) {
      const { data, error } = await sb
        .from("hub_courses")
        .select("id, payload, updated_at")
        .eq("id", oneId)
        .eq("is_published", true)
        .maybeSingle();
      if (error) return json({ error: error.message, courses: {} }, 500);
      if (!data) return json({ courses: {}, message: "not found" }, 404);
      return json({
        courses: { [data.id]: data.payload },
        updated_at: data.updated_at,
      });
    }

    const { data, error } = await sb
      .from("hub_courses")
      .select("id, payload, updated_at, sort_order")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });

    if (error) return json({ error: error.message, courses: {} }, 500);

    const courses: Record<string, unknown> = {};
    let latest = "";
    for (const row of data || []) {
      courses[row.id] = row.payload;
      if (row.updated_at && row.updated_at > latest) latest = row.updated_at;
    }
    return json({ courses, count: Object.keys(courses).length, updated_at: latest || null });
  } catch (e) {
    return json({ error: String(e), courses: {} }, 500);
  }
});
