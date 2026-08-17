/**
 * TIH Learning Hub — resolve-video
 * Maps a course topic to a YouTube video ID via the YouTube Data API.
 *
 * GET /functions/v1/resolve-video?topicId=...&title=...&course=...
 * Optional: &q=custom+search+query
 *
 * Secrets (set in Supabase Dashboard → Edge Functions → Secrets):
 *   YOUTUBE_API_KEY
 *
 * Optional table:
 *   public.topic_videos (topic_id text PK, video_id text, title text, course_id text, query text, updated_at timestamptz)
 */

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function buildQuery(title: string, course: string, customQ: string | null) {
  if (customQ && customQ.trim()) return customQ.trim();
  const t = (title || "").replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, "").trim();
  const courseHint: Record<string, string> = {
    webdev: "web development",
    ai: "artificial intelligence",
    data: "data analysis",
    design: "graphic design",
    android: "android app development",
    cybersecurity: "cybersecurity",
    marketing: "digital marketing",
    entrepreneurship: "startup entrepreneurship",
    office: "microsoft office",
    ielts: "IELTS exam",
    toefl: "TOEFL exam",
    sat: "SAT exam",
  };
  const hint = courseHint[course] || course || "tutorial";
  return `${t} ${hint} tutorial for beginners`.replace(/\s+/g, " ").trim();
}

async function searchYouTube(q: string, apiKey: string): Promise<string | null> {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");
  url.searchParams.set("maxResults", "5");
  url.searchParams.set("videoEmbeddable", "true");
  url.searchParams.set("safeSearch", "strict");
  url.searchParams.set("relevanceLanguage", "en");
  url.searchParams.set("q", q);
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const errText = await res.text();
    console.error("YouTube API error", res.status, errText.slice(0, 300));
    return null;
  }
  const data = await res.json();
  const items = data.items || [];
  for (const item of items) {
    const id = item?.id?.videoId;
    if (id && typeof id === "string" && id.length >= 6) return id;
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "GET") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const u = new URL(req.url);
    const topicId = (u.searchParams.get("topicId") || "").trim();
    const title = (u.searchParams.get("title") || "").trim();
    const course = (u.searchParams.get("course") || "").trim();
    const customQ = u.searchParams.get("q");

    if (!topicId && !title) {
      return json({ error: "topicId or title is required" }, 400);
    }

    const youtubeKey = Deno.env.get("YOUTUBE_API_KEY");
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const serviceKey =
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
      Deno.env.get("SUPABASE_ANON_KEY") ||
      "";

    // 1) DB cache
    if (topicId && supabaseUrl && serviceKey) {
      try {
        const sb = createClient(supabaseUrl, serviceKey);
        const { data } = await sb
          .from("topic_videos")
          .select("video_id, query, updated_at")
          .eq("topic_id", topicId)
          .maybeSingle();
        if (data?.video_id) {
          return json({
            videoId: data.video_id,
            source: "cache",
            topicId,
            query: data.query || null,
          });
        }
      } catch (e) {
        console.warn("cache read skipped", String(e));
      }
    }

    if (!youtubeKey) {
      return json(
        {
          error: "YOUTUBE_API_KEY not configured",
          videoId: null,
          source: "none",
        },
        503,
      );
    }

    // 2) Live YouTube search
    const query = buildQuery(title || topicId, course, customQ);
    const videoId = await searchYouTube(query, youtubeKey);

    if (!videoId) {
      return json({
        videoId: null,
        source: "youtube",
        topicId: topicId || null,
        query,
        message: "No embeddable video found",
      });
    }

    // 3) Write-through cache
    if (topicId && supabaseUrl && serviceKey) {
      try {
        const sb = createClient(supabaseUrl, serviceKey);
        await sb.from("topic_videos").upsert(
          {
            topic_id: topicId,
            video_id: videoId,
            title: title || null,
            course_id: course || null,
            query,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "topic_id" },
        );
      } catch (e) {
        console.warn("cache write skipped", String(e));
      }
    }

    return json({
      videoId,
      source: "youtube",
      topicId: topicId || null,
      query,
    });
  } catch (e) {
    console.error(e);
    return json({ error: String(e), videoId: null }, 500);
  }
});
