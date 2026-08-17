/* TIH Android formal notes — Modules 14–18 */
(function(){
if(typeof window==='undefined')return;
window.TIH_AND_NOTES_DATA=window.TIH_AND_NOTES_DATA||[];
var D=window.TIH_AND_NOTES_DATA;
function a(t,m,d,b){D.push([t,m,d,b]);}

a("Preparing for Release","Module 14: Publishing Your App","Preparing for release means finishing features, testing thoroughly, creating store assets, and building a signed release artifact.","<p>Use a release checklist: crashes, permissions, privacy policy, and version codes.</p>");

a("App Signing","Module 14: Publishing Your App","App signing cryptographically signs your APK/AAB so Android and Play can verify the publisher identity across updates.","<p>Protect keystores. Prefer Play App Signing where appropriate and back up keys securely.</p>");

a("Versioning","Module 14: Publishing Your App","Versioning uses versionCode (integer, must increase) and versionName (user-visible string) to track releases.","<p>Never reuse a lower versionCode on Play.</p>");

a("Creating App Icons","Module 14: Publishing Your App","App icons are the launcher and store images that identify your app; Adaptive Icons support modern launchers.","<p>Follow size guidelines; keep the glyph simple and recognisable at small sizes.</p>");

a("Feature Graphics","Module 14: Publishing Your App","Feature graphics are promotional images used in the Play Store listing to showcase the app visually.","<p>Match official dimensions; highlight core value, not clutter.</p>");

a("Screenshots","Module 14: Publishing Your App","Screenshots show real app screens on phone and tablet listings so users understand the experience before installing.","<p>Capture clean, realistic flows; localise when you support multiple languages.</p>");

a("Writing App Descriptions","Module 14: Publishing Your App","App descriptions explain what the app does, who it is for, and key features—within Play character limits and policy rules.","<p>Lead with benefits; avoid misleading claims.</p>");

a("Publishing to Google Play","Module 14: Publishing Your App","Publishing to Google Play uploads a signed App Bundle through Play Console, completes the store listing, content rating, and privacy forms, then rolls out to production or testing tracks.","<p>Start with internal or closed testing when possible.</p>");

a("App Updates","Module 14: Publishing Your App","App updates ship fixes and features by uploading a new higher versionCode build and release notes users can understand.","<p>Monitor crash rates after each rollout; staged rollouts reduce risk.</p>");

a("Using ChatGPT for Coding","Module 15: AI Tools for Android Developers","ChatGPT can draft Kotlin snippets, explain errors, and outline approaches—always reviewed and tested by you in Android Studio.","<p>Never paste secrets. Treat AI output as a suggestion, not production truth.</p>");

a("GitHub Copilot","Module 15: AI Tools for Android Developers","GitHub Copilot suggests code inside the editor based on context; developers must still understand, test, and license-check the result.","<p>Use it to speed boilerplate, not to skip learning fundamentals.</p>");

a("Firebase AI Features","Module 15: AI Tools for Android Developers","Firebase AI features refer to Google’s evolving AI-related services and extensions that can enhance apps when integrated carefully and compliantly.","<p>Read current docs; evaluate cost, privacy, and latency.</p>");

a("AI Code Debugging","Module 15: AI Tools for Android Developers","AI code debugging uses assistants to interpret stack traces and propose fixes—validated by reproducing the bug and confirming the patch.","<p>Provide minimal reproducible context for better suggestions.</p>");

a("Productivity Tools","Module 15: AI Tools for Android Developers","Productivity tools for Android developers include version control, issue trackers, design handoff tools, and AI assistants that reduce repetitive work.","<p>Standardise a small toolchain for the team.</p>");

a("AI-Assisted UI Design","Module 15: AI Tools for Android Developers","AI-assisted UI design uses generative tools to draft layouts, icons, or copy that you refine against Material guidelines and usability standards.","<p>Accessibility and consistency remain human responsibilities.</p>");

a("Building a Developer Portfolio","Module 16: Freelancing & Career Development","A developer portfolio showcases shipped apps, GitHub repos, screenshots, and short case studies that prove you can deliver.","<p>Quality over quantity: three polished apps beat ten broken demos.</p>");

a("Publishing Projects on GitHub","Module 16: Freelancing & Career Development","Publishing on GitHub means clean repos with README, license, and build instructions so employers and clients can evaluate your work.","<p>Commit often with clear messages; never commit keystores or API secrets.</p>");

a("Writing Technical Documentation","Module 16: Freelancing & Career Development","Technical documentation explains how to build, run, and use your project—README, architecture notes, and API summaries.","<p>Write for a competent stranger landing on the repo cold.</p>");

a("Creating a Resume","Module 16: Freelancing & Career Development","A developer resume highlights skills, projects, and impact with measurable outcomes—not only tool lists.","<p>Link Play listings and GitHub. Keep to one page early in your career if possible.</p>");

a("Preparing for Interviews","Module 16: Freelancing & Career Development","Interview preparation covers Kotlin/Android fundamentals, system design for mobile, and clear explanations of your project decisions.","<p>Practice aloud. Be honest about what you built versus what libraries did for you.</p>");

a("Freelancing Platforms","Module 16: Freelancing & Career Development","Freelancing platforms connect mobile developers with clients; success depends on profiles, proposals, delivery, and reviews.","<p>Under-promise and over-deliver on the first projects.</p>");

a("Working with Clients","Module 16: Freelancing & Career Development","Working with clients requires written scope, milestones, communication cadence, and change-request rules.","<p>Confirm acceptance criteria before coding large features.</p>");

a("Pricing Mobile App Projects","Module 16: Freelancing & Career Development","Pricing mobile projects estimates effort by screens, complexity (auth, payments, offline), revisions, and maintenance—not only hourly guesses.","<p>Include buffer for unknown integrations and store review delays.</p>");

a("Calculator App","Module 17: Real-World Projects","The calculator app project practices UI layout, click handling, and basic arithmetic state in Kotlin.","<p>Deliverable: working calculator on emulator with clean layout.</p>");

a("To-Do List App","Module 17: Real-World Projects","The to-do list app practices lists, item actions, and persistence (SharedPreferences or Room).","<p>Deliverable: add, complete, and delete tasks that survive restart.</p>");

a("Notes App","Module 17: Real-World Projects","The notes app practices CRUD with a local database and multi-screen navigation.","<p>Deliverable: create, edit, list, and delete notes.</p>");

a("Quiz App","Module 17: Real-World Projects","The quiz app practices state across questions, scoring, and result screens.","<p>Deliverable: multi-question quiz with final score.</p>");

a("Weather App","Module 17: Real-World Projects","The weather app practices REST API calls, JSON parsing, and displaying results with loading/error states.","<p>Deliverable: city query shows current conditions from a public API.</p>");

a("Expense Tracker","Module 17: Real-World Projects","The expense tracker practices categories, totals, and persistent financial entries.","<p>Deliverable: log expenses and view a simple summary.</p>");

a("News App","Module 17: Real-World Projects","The news app practices fetching article lists, RecyclerView, and detail screens.","<p>Deliverable: scrollable headlines opening detail views.</p>");

a("Chat Application","Module 17: Real-World Projects","The chat application practices authentication and realtime or near-realtime messages (e.g., Firebase).","<p>Deliverable: sign-in and exchange messages in a room or DM.</p>");

a("E-commerce App","Module 17: Real-World Projects","The e-commerce app practices product lists, detail, cart concepts, and optional checkout flow stubs.","<p>Deliverable: browse products and manage a cart locally or via API.</p>");

a("School Management App","Module 17: Real-World Projects","The school management app practices multi-role screens (students, classes, simple records) and structured data.","<p>Deliverable: core CRUD for at least one school entity with navigation.</p>");

a("Project Planning","Module 18: Capstone Project","Project planning defines the capstone problem, users, features (MVP vs later), milestones, and success criteria before heavy coding.","<p>Write a one-page plan and stick to MVP scope.</p>");

a("UI Design","Module 18: Capstone Project","UI design for the capstone produces wireframes or high-fidelity layouts consistent with Material Design and the planned user journeys.","<p>Design core screens first; polish secondary screens later.</p>");

a("Database Design","Module 18: Capstone Project","Database design models entities, relationships, and local/remote storage choices for the capstone data.","<p>Document tables/collections and primary queries.</p>");

a("Authentication","Module 18: Capstone Project","Capstone authentication implements secure sign-up/login and protects private screens and data paths.","<p>Test signed-out and signed-in flows thoroughly.</p>");

a("API Integration","Module 18: Capstone Project","API integration connects the capstone to backend or third-party services with robust error handling.","<p>Isolate networking behind a repository layer.</p>");

a("Testing","Module 18: Capstone Project","Capstone testing covers critical unit logic and manual or automated UI checks of primary user journeys.","<p>Fix crashers before presentation day.</p>");

a("Deployment","Module 18: Capstone Project","Deployment prepares a signed release build and, where applicable, an internal testing track on Play Console.","<p>Include version notes and a short demo script.</p>");

a("Final Presentation","Module 18: Capstone Project","The final presentation demonstrates the live app, architecture choices, challenges, and learnings to mentors or peers.","<p>Show the happy path and one recovered error state.</p>");
})();
