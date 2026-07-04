/* ============================================================
   TIH LEARNING HUB — CONFIGURATION
   ------------------------------------------------------------
   To turn on PUBLIC, CROSS-DEVICE certificate verification, paste
   your free Firebase project config below. Until you do, the site
   works exactly as before (certificates verify on the issuing
   device only) — nothing breaks if this is left empty.

   HOW TO GET THESE VALUES (one-time, ~10 minutes, free):
     1. Go to https://console.firebase.google.com and click
        "Add project" (any name, e.g. "tih-learning-hub").
     2. In the project, open  Build → Firestore Database → Create
        database  → Start in production mode.
     3. In Firestore → Rules, paste these rules and Publish:
          rules_version = '2';
          service cloud.firestore {
            match /databases/{database}/documents {
              match /certificates/{id} {
                allow read: if true;                 // anyone can verify
                allow create: if !exists(/databases/$(database)/documents/certificates/$(id));
                allow update, delete: if false;      // certs are permanent
              }
            }
          }
     4. Click the gear ⚙ → Project settings → scroll to "Your apps"
        → click the </> (Web) icon → register an app → copy the
        firebaseConfig values into the object below.
     5. Commit this file. Cross-device verification is now live.
   ============================================================ */
window.TIH_FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

/* ============================================================
   SUPABASE (central database) — powers cross-device tracking of
   applications, students, enrollments, payments, progress and
   certificate requests, plus the live admin dashboard.

   Until you paste your values below, the site keeps working
   exactly as before (everything is stored per-device in the
   browser) — nothing breaks if this is left empty.

   ONE-TIME SETUP (free, ~10 minutes):
     1. Go to https://supabase.com  → "New project" (any name,
        e.g. "tih-learning-hub"). Pick a region close to Liberia
        (e.g. West Europe). Save the database password somewhere.
     2. Open  SQL Editor → New query,  paste ALL of
        supabase-schema.sql  from this repo, and click "Run".
     3. Open  Authentication → Users → "Add user":  create ONE
        admin account (email + password) for Samuel. This is what
        the admin panel signs into. (Turn OFF "Auto-confirm"? No —
        leave it ON / mark the user confirmed so you can sign in.)
     4. Open  Project Settings → API.  Copy:
          • "Project URL"      → url  below
          • "anon public" key  → anonKey  below
        (Never paste the "service_role" key into this file — it is
         a full-access secret and this file is public.)
     5. Commit this file. Central tracking is now live.
   ============================================================ */
window.TIH_SUPABASE_CONFIG = {
  url: "",
  anonKey: ""
};
