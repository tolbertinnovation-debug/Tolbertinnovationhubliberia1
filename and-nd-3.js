/* TIH Android formal notes — Modules 7–9 */
(function(){
if(typeof window==='undefined')return;
window.TIH_AND_NOTES_DATA=window.TIH_AND_NOTES_DATA||[];
var D=window.TIH_AND_NOTES_DATA;
function a(t,m,d,b){D.push([t,m,d,b]);}

a("SharedPreferences","Module 7: Data Storage","SharedPreferences stores small key–value pairs (settings, flags, simple preferences) in private app storage.","<p>Not for large datasets or complex queries—use Room/SQLite for structured data.</p>");

a("Internal Storage","Module 7: Data Storage","Internal storage is private file storage on the device accessible only to your app (unless the device is compromised).","<p>Suitable for private files; manage space and clean up unused files.</p>");

a("External Storage","Module 7: Data Storage","External storage refers to shared media areas (and legacy external paths) where photos and downloads may live—subject to scoped storage rules on modern Android.","<p>Request only needed permissions; follow scoped storage guidelines for Android 10+.</p>");

a("SQLite Database","Module 7: Data Storage","SQLite is a lightweight relational database engine embedded in Android for structured local data.","<p>Write SQL carefully; prefer Room for type-safe access in modern apps.</p>");

a("Room Database","Module 7: Data Storage","Room is a Jetpack persistence library that provides an abstraction layer over SQLite with compile-time query checks and observable data helpers.","<p>Define @Entity, @Dao, and @Database. Use coroutines or Flow for async access.</p>");

a("CRUD Operations","Module 7: Data Storage","CRUD means Create, Read, Update, and Delete—the four basic operations on persistent records.","<p>Implement all four for each main entity your app manages and test edge cases (empty lists, missing IDs).</p>");

a("Data Persistence","Module 7: Data Storage","Data persistence means information survives process death and app restarts by writing to disk, database, or preferences.","<p>Choose the store by data size, structure, and sensitivity.</p>");

a("Offline Storage","Module 7: Data Storage","Offline storage keeps a local copy of data so core features work without a network—often synced later when connectivity returns.","<p>Design clear conflict rules when local and remote data diverge.</p>");

a("Introduction to Firebase","Module 8: Firebase Integration","Firebase is Google’s app platform offering authentication, databases, storage, messaging, analytics, and more as managed backend services.","<p>It speeds up MVPs by reducing custom server work. Secure rules are mandatory.</p>");

a("Firebase Authentication","Module 8: Firebase Integration","Firebase Authentication provides sign-up and sign-in with email/password, phone, and federated providers, returning user identity tokens for your app.","<p>Handle success and failure callbacks; never store passwords yourself in plain text.</p>");

a("Firestore Database","Module 8: Firebase Integration","Cloud Firestore is a flexible, scalable NoSQL document database for storing and syncing app data in the cloud.","<p>Model data as collections of documents. Design for query patterns and security rules.</p>");

a("Firebase Realtime Database","Module 8: Firebase Integration","Firebase Realtime Database is a cloud-hosted JSON database that syncs data across clients in realtime.","<p>Useful for live presence and chat-like features; structure paths carefully and lock down rules.</p>");

a("Firebase Storage","Module 8: Firebase Integration","Firebase Storage stores user-generated files such as images and videos with download URLs and security rules.","<p>Validate content types and sizes; pair with Auth for per-user paths.</p>");

a("Cloud Messaging (Push Notifications)","Module 8: Firebase Integration","Firebase Cloud Messaging (FCM) delivers push notifications and data messages to devices even when the app is in the background.","<p>Request notification permission on modern Android; handle tokens and topics thoughtfully.</p>");

a("Firebase Analytics","Module 8: Firebase Integration","Firebase Analytics records app events and user properties so you can understand engagement and funnels.","<p>Log meaningful events (sign_up, purchase, level_complete)—not noise.</p>");

a("Firebase Hosting Overview","Module 8: Firebase Integration","Firebase Hosting serves static web content (and related assets) over a global CDN—useful for landing pages or web companions to your app.","<p>Mobile apps themselves are distributed via Play Store, not Hosting.</p>");

a("Introduction to REST APIs","Module 9: Networking & APIs","A REST API is a web interface that uses HTTP methods (GET, POST, PUT, DELETE) to create, read, update, and delete resources, often exchanging JSON.","<p>Android apps are clients: they request data and display or store the response.</p>");

a("JSON","Module 9: Networking & APIs","JSON (JavaScript Object Notation) is a lightweight text format for structured data—objects and arrays—widely used in APIs.","<p>Parse into Kotlin data classes with libraries such as Moshi or Gson (often via Retrofit converters).</p>");

a("Retrofit","Module 9: Networking & APIs","Retrofit is a type-safe HTTP client for Android that turns API interfaces into callable suspend functions or Call objects.","<p>Define endpoints with annotations (@GET, @POST). Handle errors and timeouts explicitly.</p>");

a("Fetching Data","Module 9: Networking & APIs","Fetching data means performing GET (or similar) requests, parsing the response, and updating the UI or local database on success.","<p>Show loading and empty states. Never block the main thread with network I/O.</p>");

a("Sending Data","Module 9: Networking & APIs","Sending data uses POST/PUT/PATCH requests to create or update resources on a server, usually with a JSON body.","<p>Validate locally first; handle 4xx/5xx responses with clear user feedback.</p>");

a("Error Handling","Module 9: Networking & APIs","Network error handling covers timeouts, offline state, HTTP error codes, and malformed payloads—with graceful UI messages.","<p>Retry only when safe. Log technical details for debugging; show simple language to users.</p>");

a("API Authentication","Module 9: Networking & APIs","API authentication proves the client or user is allowed to access endpoints—commonly via tokens in headers (Bearer tokens, API keys).","<p>Never hardcode secrets in source control. Refresh tokens securely when required.</p>");

a("Consuming Third-Party APIs","Module 9: Networking & APIs","Consuming third-party APIs means integrating external services (weather, news, maps, payments) under their terms, rate limits, and key management rules.","<p>Read docs, respect quotas, and isolate API code behind repositories for easier testing.</p>");
})();
