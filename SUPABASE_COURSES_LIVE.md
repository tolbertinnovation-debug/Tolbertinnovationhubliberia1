# Make all courses live from Supabase

## A. Create table (SQL Editor)

Run `supabase/migrations/20260817_hub_courses.sql`.

## B. Deploy functions

```bash
supabase functions deploy get-courses --project-ref oracluubhmxobcnsvcxz
supabase functions deploy seed-courses --project-ref oracluubhmxobcnsvcxz
```

Optional secret for seeding:

```
SEED_SECRET=choose-a-long-random-string
```

## C. Seed courses (one time)

On the live site, open DevTools console (after courses-db.js has loaded):

```js
fetch('https://oracluubhmxobcnsvcxz.supabase.co/functions/v1/seed-courses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ANON_OR_SERVICE_KEY',
    'apikey': 'YOUR_ANON_OR_SERVICE_KEY',
    'x-seed-secret': 'your-SEED_SECRET-if-set'
  },
  body: JSON.stringify({ courses: COURSES_DB })
}).then(r => r.json()).then(console.log)
```

## D. Load on the website

`hub-config.js` loads `courses-cloud-loader.js`. Cloud data overwrites static COURSES_DB when Supabase has rows.

## E. Verify

Console: `[TIH courses-cloud] merged N courses from Supabase`
