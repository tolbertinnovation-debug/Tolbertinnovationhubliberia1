# resolve-video (Supabase Edge Function)

Resolves a Learning Hub topic to a YouTube video ID.

## Setup

### 1. Create cache table
In Supabase SQL Editor, run the SQL in `supabase/migrations/20260817_topic_videos.sql`.

### 2. Set secret
Dashboard → Project Settings → Edge Functions → Secrets:

```
YOUTUBE_API_KEY=your_youtube_data_api_v3_key
```

Create a key at Google Cloud Console → APIs → enable YouTube Data API v3 → Credentials → API key.

### 3. Deploy

```bash
supabase login
supabase link --project-ref oracluubhmxobcnsvcxz
supabase functions deploy resolve-video
```

### 4. Test

```bash
curl -s "https://oracluubhmxobcnsvcxz.supabase.co/functions/v1/resolve-video?topicId=test:m1:l1&title=Introduction%20to%20SEO&course=marketing" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "apikey: YOUR_ANON_KEY"
```

Expected JSON includes `videoId` and `source` (`youtube` or `cache`).

## Client

```html
<script src="resolve-video-client.js?v=1"></script>
```

```js
var id = await TIHResolveVideo.resolve({
  topicId: 'marketing:m5:l2',
  title: 'On-Page SEO',
  courseId: 'marketing'
});
```
