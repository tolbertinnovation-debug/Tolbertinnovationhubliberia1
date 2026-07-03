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
