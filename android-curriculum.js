/* TIH Complete Android App Development Program (Kotlin) curriculum.
   Rebuilds COURSES_DB.android into the full 19-module program: Kotlin,
   Android Studio, UI, interaction, navigation, data storage, Firebase,
   networking, media & device features, Material Design, auth & security,
   testing, publishing, AI tools, freelancing, 10 real-world apps, an industry
   capstone and a graduation module with exams and a Certificate of Completion.
   Every content lesson has a video + printable notes (with code snippets);
   project lessons carry briefs and downloadable source code. Modelled on
   webdev-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.android || COURSES_DB.android._androidFullBuilt) return;

  var V = ['2lwmKjkz-DE', 'wCwCsJSCy8Y', '2LWSxWsPUCY', 'ISbyj5nFIUk', 'TwVzuHhQfbk', 'Oc4MDMHRzwY', 'l9ui4Lfgr-E', 'gaPoV4z5wng', 'bHlLYhSrXvc', '_5LgIrd4O5g', 'BEvOBTaYUm0', 'WOKrelHPefc', 'l7hGtIzGRRM', 'EQvLP5BThZ0', 'bOd3wO0uFr8', '7kzttk9lj3U', 'ZIWuTgbQiQg', 'TrHILjGEEvY'];
  var VIDEOS = {
    orientation: ['FjrKMcnKahY'],
    kotlin: ['F9UC9DY-vIU'],
    studio: ['DzST9xWs4g4'],
    ui: ['UKI-mpESErQ'],
    interaction: ['4RUZ01ptcYk'],
    navigation: ['l-jdSOUpSIA'],
    storage: ['jjGjkElvcfc'],
    firebase: ['HYzw8LFvmw4'],
    networking: ['Qk-Tej0ZQas'],
    media: ['ondCeqlAwEI'],
    material: ['BEvOBTaYUm0'],
    auth: ['dsst_TKgClY'],
    testing: ['2I6fuD20qlY'],
    publishing: ['WOKrelHPefc'],
    ai: ['RKbmqSRc0z0'],
    career: ['XdcdCZoYRL8'],
    projects: ['0kwcXtAq4Yo'],
    capstone: ['0kwcXtAq4Yo'],
    assessment: ['0kwcXtAq4Yo']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Android App Development?', 'Career Opportunities in Android Development', 'Android Ecosystem Overview', 'Installing Android Studio', 'Setting Up the Development Environment', 'Creating Your First Android Project', 'Course Roadmap', 'Final Capstone Project']],
    [2, 'Programming Fundamentals with Kotlin', '🟣', 'kotlin', 'content', ['Introduction to Kotlin', 'Variables and Data Types', 'Operators', 'User Input', 'Conditional Statements', 'Loops', 'Functions', 'Arrays', 'Lists', 'Object-Oriented Programming Basics', 'Classes and Objects', 'Practice Exercises']],
    [3, 'Android Studio Basics', '🛠️', 'studio', 'content', ['Android Studio Interface', 'Project Structure', 'Emulator Setup', 'Running Your First App', 'Gradle Basics', 'Android Manifest', 'Logcat', 'Debugging Basics', 'Project Organization', 'Best Practices']],
    [4, 'Android User Interface (UI)', '📐', 'ui', 'content', ['XML Layouts', 'TextView', 'EditText', 'Button', 'ImageView', 'RecyclerView', 'ScrollView', 'ConstraintLayout', 'LinearLayout', 'RelativeLayout', 'CardView', 'Material Design Components']],
    [5, 'User Interaction', '👆', 'interaction', 'content', ['Click Events', 'Input Validation', 'Toast Messages', 'Dialog Boxes', 'Menus', 'Navigation Drawer', 'Bottom Navigation', 'Intents', 'Activities', 'Fragments']],
    [6, 'App Navigation', '🧭', 'navigation', 'content', ['Activity Lifecycle', 'Fragment Lifecycle', 'Navigation Component', 'Passing Data Between Screens', 'Deep Links', 'Back Stack Management', 'Navigation Best Practices']],
    [7, 'Data Storage', '🗄️', 'storage', 'content', ['SharedPreferences', 'Internal Storage', 'External Storage', 'SQLite Database', 'Room Database', 'CRUD Operations', 'Data Persistence', 'Offline Storage']],
    [8, 'Firebase Integration', '🔥', 'firebase', 'content', ['Introduction to Firebase', 'Firebase Authentication', 'Firestore Database', 'Firebase Realtime Database', 'Firebase Storage', 'Cloud Messaging (Push Notifications)', 'Firebase Analytics', 'Firebase Hosting Overview']],
    [9, 'Networking & APIs', '🌐', 'networking', 'content', ['Introduction to REST APIs', 'JSON', 'Retrofit', 'Fetching Data', 'Sending Data', 'Error Handling', 'API Authentication', 'Consuming Third-Party APIs']],
    [10, 'Media & Device Features', '📷', 'media', 'content', ['Camera Integration', 'Photo Capture', 'Image Gallery', 'Audio Playback', 'Video Playback', 'GPS & Location Services', 'Maps Integration', 'Sensors', 'Permissions Management']],
    [11, 'Material Design', '🎨', 'material', 'content', ['Material Design Principles', 'Themes', 'Colors', 'Typography', 'Buttons', 'Cards', 'Animations', 'Responsive Layouts', 'Dark Mode']],
    [12, 'Authentication & Security', '🔐', 'auth', 'content', ['User Registration', 'Login System', 'Password Security', 'Biometric Authentication', 'Secure Data Storage', 'App Permissions', 'Security Best Practices']],
    [13, 'Testing & Debugging', '🧪', 'testing', 'content', ['Debugging Apps', 'Unit Testing', 'UI Testing', 'Performance Testing', 'Crash Analysis', 'Memory Management', 'App Optimization']],
    [14, 'Publishing Your App', '🚀', 'publishing', 'content', ['Preparing for Release', 'App Signing', 'Versioning', 'Creating App Icons', 'Feature Graphics', 'Screenshots', 'Writing App Descriptions', 'Publishing to Google Play', 'App Updates']],
    [15, 'AI Tools for Android Developers', '🤖', 'ai', 'content', ['Using ChatGPT for Coding', 'GitHub Copilot', 'Firebase AI Features', 'AI Code Debugging', 'Productivity Tools', 'AI-Assisted UI Design']],
    [16, 'Freelancing & Career Development', '💼', 'career', 'content', ['Building a Developer Portfolio', 'Publishing Projects on GitHub', 'Writing Technical Documentation', 'Creating a Resume', 'Preparing for Interviews', 'Freelancing Platforms', 'Working with Clients', 'Pricing Mobile App Projects']],
    [17, 'Real-World Projects', '🏗️', 'projects', 'projects', ['Calculator App', 'To-Do List App', 'Notes App', 'Quiz App', 'Weather App', 'Expense Tracker', 'News App', 'Chat Application', 'E-commerce App', 'School Management App']],
    [18, 'Capstone Project', '🎓', 'capstone', 'projects', ['Project Planning', 'UI Design', 'Database Design', 'Authentication', 'API Integration', 'Testing', 'Deployment', 'Final Presentation']],
    [19, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['Kotlin Assessment', 'Android UI Assessment', 'Database Assessment', 'Firebase Assessment', 'API Assessment', 'Midterm Examination', 'Final Examination', 'Complete App Evaluation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|App|Tracker|Application)$/.test(name.trim()); }

  var skillLabel = { orientation: 'Android development foundations', kotlin: 'Kotlin programming', studio: 'Android Studio', ui: 'Android UI', interaction: 'user interaction', navigation: 'app navigation', storage: 'data storage', firebase: 'Firebase', networking: 'networking & APIs', media: 'media & device features', material: 'Material Design', auth: 'authentication & security', testing: 'testing & debugging', publishing: 'publishing to Google Play', ai: 'AI developer tools', career: 'freelancing & career', projects: 'building real apps', capstone: 'your capstone app', assessment: 'your skills' };

  function codeFor(name) {
    var C = null;
    if (/Introduction to Kotlin|Variables and Data Types/i.test(name)) C = 'fun main() {\n    val name: String = "TIH"   // read-only\n    var count: Int = 0            // mutable\n    count += 1\n    println("$name $count")\n}';
    else if (/^Functions$/i.test(name)) C = 'fun add(a: Int, b: Int): Int {\n    return a + b\n}\n\nfun main() {\n    println(add(2, 3)) // 5\n}';
    else if (/Classes and Objects|Object-Oriented/i.test(name)) C = 'class Student(val name: String, var score: Int) {\n    fun passed() = score >= 50\n}\n\nval s = Student("Ama", 72)\nprintln(s.passed()) // true';
    else if (/Conditional Statements/i.test(name)) C = 'val score = 72\nval grade = when {\n    score >= 70 -> "A"\n    score >= 50 -> "B"\n    else -> "F"\n}';
    else if (/XML Layouts|TextView|Button/i.test(name)) C = '<Button\n    android:id="@+id/submitBtn"\n    android:layout_width="wrap_content"\n    android:layout_height="wrap_content"\n    android:text="Submit" />';
    else if (/Click Events/i.test(name)) C = 'submitBtn.setOnClickListener {\n    Toast.makeText(this, "Clicked!", Toast.LENGTH_SHORT).show()\n}';
    else if (/Room Database|CRUD Operations/i.test(name)) C = '@Entity\ndata class Note(\n    @PrimaryKey(autoGenerate = true) val id: Int = 0,\n    val text: String\n)';
    else if (/Retrofit|REST APIs|Fetching Data/i.test(name)) C = 'interface ApiService {\n    @GET("posts")\n    suspend fun getPosts(): List<Post>\n}';
    else if (/Firebase Authentication|Login System/i.test(name)) C = 'auth.signInWithEmailAndPassword(email, password)\n    .addOnSuccessListener { /* logged in */ }\n    .addOnFailureListener { e -> /* handle error */ }';
    if (!C) return '';
    return '<h4>💾 Starter code (Kotlin)</h4><pre style="background:#0f172a;color:#e2e8f0;padding:.9rem;border-radius:8px;overflow:auto;font-size:.82rem;line-height:1.5"><code>' + esc(C) + '</code></pre><p>Copy this into Android Studio, run it, and Print → Save as PDF to keep it with your notes.</p>';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'Android skills';
    var focus = position % 2 ? 'hands-on coding, real examples and a working app feature' : 'understanding the concept, building it step by step and testing on the emulator';
    var code = codeFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Android Development · ' + esc(moduleTitle) + '</strong><span>Kotlin + Android Studio</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two coding exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and where it fits in an Android app.</li>' +
      '<li>Follow the example in Android Studio and read the code carefully.</li>' +
      '<li>Build it yourself and run it on the emulator or a real device.</li></ul>' +
      (code ? '<div class="study-callout">' + code + '</div>' : '') +
      '<h4>Coding exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Recreate the example for <em>' + esc(name) + '</em> and run it.</li>' +
      '<li><strong>Exercise 2:</strong> Change one thing and predict, then check, the result on the emulator.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy of these notes and code.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to publishing real Android apps.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on app build</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical build. Follow the video and notes, then create <em>' + esc(name) + '</em> yourself in Android Studio and push the source code to GitHub for your portfolio.</p>' +
      '<h4>What to build</h4><ol><li>Plan the screens, data and features.</li><li>Build the UI, then add logic, storage and any API/Firebase.</li><li>Test on the emulator, fix bugs, then export the APK and add it to your portfolio.</li></ol>' +
      '<div class="study-callout"><strong>Deliverable:</strong> A working Android app with its Kotlin source code on GitHub — a portfolio-ready application. Download project files and Print → Save as PDF for the brief.</div>' +
      '</div>';
  }

  var BANK = {
    general: [
      { q: 'Android apps in this course are built mainly with:', opts: ['Swift', 'Kotlin', 'Python', 'PHP'], correct: 1, exp: 'Kotlin is the modern, official language for Android.' },
      { q: 'The official IDE for Android development is:', opts: ['VS Code', 'Android Studio', 'Xcode', 'Eclipse only'], correct: 1, exp: 'Android Studio is the official Android IDE.' },
      { q: 'An emulator lets you:', opts: ['Publish apps', 'Run and test your app on a virtual device', 'Write servers', 'Edit photos'], correct: 1, exp: 'Emulators simulate a device for testing.' },
      { q: 'The best way to learn app development is to:', opts: ['Only watch videos', 'Build and run real apps yourself', 'Memorise syntax', 'Avoid errors'], correct: 1, exp: 'Building real apps is how the skill is built.' },
      { q: 'Logcat is used to:', opts: ['Design UI', 'View log output and debug your app', 'Publish to Play', 'Edit XML only'], correct: 1, exp: 'Logcat shows logs and errors for debugging.' },
      { q: 'Gradle is Android’s:', opts: ['Emulator', 'Build system', 'Database', 'Language'], correct: 1, exp: 'Gradle builds and manages dependencies for the app.' }
    ],
    kotlin: [
      { q: 'Which keyword declares a read-only value in Kotlin?', opts: ['var', 'val', 'let', 'def'], correct: 1, exp: 'val is read-only; var is mutable.' },
      { q: 'Kotlin functions are declared with:', opts: ['function', 'fun', 'def', 'func'], correct: 1, exp: 'fun declares a function in Kotlin.' },
      { q: 'A Kotlin class is defined with the keyword:', opts: ['struct', 'class', 'object only', 'type'], correct: 1, exp: 'class defines a class; objects are instances.' },
      { q: 'A "data class" in Kotlin is useful because it:', opts: ['Cannot hold data', 'Auto-generates equals/hashCode/toString', 'Is only for UI', 'Runs the app'], correct: 1, exp: 'Data classes auto-generate common methods.' },
      { q: 'Which handles multiple branches cleanly in Kotlin?', opts: ['when', 'switchif', 'select', 'branch'], correct: 0, exp: 'when is Kotlin’s powerful switch-like expression.' },
      { q: 'A Kotlin List created with listOf() is:', opts: ['Mutable', 'Read-only (immutable)', 'A database', 'A function'], correct: 1, exp: 'listOf() is read-only; mutableListOf() can change.' }
    ],
    ui: [
      { q: 'Android UI layouts are commonly defined in:', opts: ['JSON', 'XML', 'CSS', 'YAML'], correct: 1, exp: 'Layouts are written in XML (or Compose).' },
      { q: 'A RecyclerView is used to:', opts: ['Show one item', 'Efficiently display long, scrolling lists', 'Store data', 'Make network calls'], correct: 1, exp: 'RecyclerView efficiently renders large lists.' },
      { q: 'ConstraintLayout helps you:', opts: ['Store data', 'Build flexible, responsive layouts', 'Call APIs', 'Debug crashes'], correct: 1, exp: 'ConstraintLayout positions views relative to each other.' },
      { q: 'An EditText is used for:', opts: ['Displaying an image', 'User text input', 'Playing audio', 'Navigation'], correct: 1, exp: 'EditText captures typed user input.' },
      { q: 'A TextView is used to:', opts: ['Take input', 'Display text to the user', 'Store data', 'Make a request'], correct: 1, exp: 'TextView shows read-only text.' },
      { q: 'A CardView is typically used to:', opts: ['Store files', 'Group content in a material card with elevation', 'Call an API', 'Run tests'], correct: 1, exp: 'CardView presents content in an elevated card.' }
    ],
    storage: [
      { q: 'SharedPreferences is best for:', opts: ['Large databases', 'Small key-value data like settings', 'Images', 'Video'], correct: 1, exp: 'SharedPreferences stores small key-value pairs.' },
      { q: 'Room is:', opts: ['A UI widget', 'An abstraction layer over SQLite', 'A network library', 'A language'], correct: 1, exp: 'Room simplifies working with SQLite databases.' },
      { q: 'CRUD stands for:', opts: ['Create, Read, Update, Delete', 'Copy, Run, Undo, Deploy', 'Cache, Route, Use, Debug', 'Compile, Read, Upload, Delete'], correct: 0, exp: 'The four basic data operations.' },
      { q: 'For structured, queryable local data you would use:', opts: ['A text file', 'SQLite / Room', 'A Toast', 'An Intent'], correct: 1, exp: 'SQLite/Room stores structured, queryable data.' },
      { q: 'Data persistence means data:', opts: ['Is lost on close', 'Survives after the app is closed', 'Is only in memory', 'Is a UI'], correct: 1, exp: 'Persisted data remains after the app restarts.' },
      { q: 'A Room @Entity represents:', opts: ['A screen', 'A database table', 'A network call', 'A button'], correct: 1, exp: 'An @Entity maps to a table.' }
    ],
    firebase: [
      { q: 'Firebase is:', opts: ['A programming language', 'A backend platform (auth, database, storage, etc.)', 'An emulator', 'A UI toolkit'], correct: 1, exp: 'Firebase provides backend services for apps.' },
      { q: 'Firebase Authentication handles:', opts: ['UI layout', 'User sign-up and login', 'Image editing', 'Testing'], correct: 1, exp: 'It manages user identity and login.' },
      { q: 'Firestore is a:', opts: ['SQL server', 'NoSQL cloud document database', 'CSS tool', 'Language'], correct: 1, exp: 'Firestore stores JSON-like documents in the cloud.' },
      { q: 'Cloud Messaging (FCM) is used for:', opts: ['Push notifications', 'UI design', 'Compiling code', 'Local storage'], correct: 0, exp: 'FCM sends push notifications to devices.' },
      { q: 'Firebase Storage is best for:', opts: ['Small settings', 'Files like images and videos', 'Only text', 'Nothing'], correct: 1, exp: 'Storage holds user files/media in the cloud.' },
      { q: 'Firebase Analytics helps you:', opts: ['Design logos', 'Understand how users use your app', 'Write Kotlin', 'Sign the APK'], correct: 1, exp: 'Analytics reports user behaviour and events.' }
    ],
    networking: [
      { q: 'A REST API commonly exchanges data as:', opts: ['XML only', 'JSON', 'CSS', 'APK'], correct: 1, exp: 'REST APIs commonly use JSON.' },
      { q: 'Retrofit is used to:', opts: ['Design UI', 'Make network/API calls in Android', 'Store local data', 'Sign the app'], correct: 1, exp: 'Retrofit is a type-safe HTTP client for Android.' },
      { q: 'A GET request is used to:', opts: ['Delete data', 'Retrieve data', 'Sign the app', 'Render XML'], correct: 1, exp: 'GET retrieves data from a server.' },
      { q: 'JSON is:', opts: ['A layout language', 'A lightweight data-interchange format', 'A database engine', 'A UI widget'], correct: 1, exp: 'JSON is a common text format for data exchange.' },
      { q: 'Network errors should be:', opts: ['Ignored', 'Handled gracefully with user feedback', 'Crashed on', 'Hidden forever'], correct: 1, exp: 'Handle errors and inform the user.' },
      { q: 'API authentication often uses:', opts: ['Nothing', 'Tokens/keys in request headers', 'A logo', 'A Toast'], correct: 1, exp: 'APIs authenticate via tokens or API keys.' }
    ],
    material: [
      { q: 'Material Design is:', opts: ['A database', 'Google’s design system for consistent UI', 'A language', 'An emulator'], correct: 1, exp: 'Material Design guides Android UI look and feel.' },
      { q: 'A theme in Android controls:', opts: ['App logic', 'Colours, fonts and styles app-wide', 'The database', 'Networking'], correct: 1, exp: 'Themes set consistent styling across the app.' },
      { q: 'Dark mode support means the app:', opts: ['Only looks dark', 'Adapts colours for light and dark themes', 'Runs faster', 'Uses less data'], correct: 1, exp: 'Apps should adapt to the system light/dark theme.' },
      { q: 'Responsive layouts adapt to:', opts: ['One screen only', 'Different screen sizes and orientations', 'Only tablets', 'Only phones'], correct: 1, exp: 'Responsive UIs work across device sizes.' },
      { q: 'Consistent typography improves:', opts: ['Battery life', 'Readability and a professional look', 'Network speed', 'Storage'], correct: 1, exp: 'Good typography aids readability and polish.' },
      { q: 'Material components include:', opts: ['Buttons and cards', 'Only databases', 'Only APIs', 'Only sensors'], correct: 0, exp: 'Material provides buttons, cards, dialogs, etc.' }
    ],
    auth: [
      { q: 'Passwords should be:', opts: ['Stored in plain text', 'Never stored in plain text; hashed/handled securely', 'Shown on screen', 'Put in the URL'], correct: 1, exp: 'Never store plain passwords; use secure handling.' },
      { q: 'Biometric authentication uses:', opts: ['A password only', 'Fingerprint or face recognition', 'An email', 'A Toast'], correct: 1, exp: 'Biometrics use fingerprint/face for login.' },
      { q: 'App permissions should be:', opts: ['All requested at once always', 'Requested only when needed, with explanation', 'Never used', 'Hidden'], correct: 1, exp: 'Request permissions in context, only as needed.' },
      { q: 'Sensitive local data should be:', opts: ['Left unprotected', 'Stored securely (encrypted where appropriate)', 'Posted publicly', 'In logs'], correct: 1, exp: 'Protect sensitive data with secure storage.' },
      { q: 'A login system verifies:', opts: ['The app version', 'The user’s identity/credentials', 'The screen size', 'The battery'], correct: 1, exp: 'Login authenticates the user’s identity.' },
      { q: 'A good security habit is to:', opts: ['Trust all input', 'Validate input and follow security best practices', 'Disable updates', 'Hardcode secrets'], correct: 1, exp: 'Validate input and avoid hardcoding secrets.' }
    ],
    testing: [
      { q: 'A unit test checks:', opts: ['The whole app UI', 'A small piece of logic in isolation', 'The Play Store listing', 'The icon'], correct: 1, exp: 'Unit tests verify individual functions/units.' },
      { q: 'UI testing verifies:', opts: ['Server code', 'The app’s screens and interactions behave correctly', 'The database schema only', 'The app icon'], correct: 1, exp: 'UI tests check on-screen behaviour.' },
      { q: 'Crash analysis helps you:', opts: ['Design UI', 'Find and fix causes of app crashes', 'Sign the app', 'Write XML'], correct: 1, exp: 'Crash reports reveal what caused failures.' },
      { q: 'Good memory management prevents:', opts: ['Faster apps', 'Leaks and out-of-memory crashes', 'Better UI', 'More features'], correct: 1, exp: 'Managing memory avoids leaks and crashes.' },
      { q: 'App optimization aims to improve:', opts: ['Only colours', 'Speed, responsiveness and resource use', 'The logo', 'The price'], correct: 1, exp: 'Optimisation improves performance and efficiency.' },
      { q: 'Debugging is the process of:', opts: ['Adding features', 'Finding and fixing errors in code', 'Publishing', 'Designing icons'], correct: 1, exp: 'Debugging locates and fixes defects.' }
    ],
    publishing: [
      { q: 'Android apps are published on the:', opts: ['App Store', 'Google Play Console', 'GitHub only', 'Firebase'], correct: 1, exp: 'You publish via the Google Play Console.' },
      { q: 'App signing is required to:', opts: ['Design UI', 'Verify and secure your app for release', 'Call APIs', 'Store data'], correct: 1, exp: 'A signing key authenticates your release builds.' },
      { q: 'Versioning helps you:', opts: ['Change colours', 'Track and roll out app updates', 'Design icons', 'Debug crashes'], correct: 1, exp: 'Version codes/names manage releases and updates.' },
      { q: 'A Play Store listing needs:', opts: ['Only code', 'Icon, screenshots and a clear description', 'Nothing', 'A database'], correct: 1, exp: 'Listings require graphics and descriptions.' },
      { q: 'Before release you should:', opts: ['Skip testing', 'Test thoroughly and prepare store assets', 'Remove all features', 'Ignore versioning'], correct: 1, exp: 'Test and prepare assets before publishing.' },
      { q: 'App updates let you:', opts: ['Never change the app', 'Ship fixes and new features to users', 'Delete the app', 'Avoid signing'], correct: 1, exp: 'Updates deliver improvements to installed users.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', kotlin: 'kotlin', studio: 'general', ui: 'ui', interaction: 'ui', navigation: 'ui', storage: 'storage', firebase: 'firebase', networking: 'networking', media: 'general', material: 'material', auth: 'auth', testing: 'testing', publishing: 'publishing', ai: 'general', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.kotlin, BANK.ui, BANK.storage, BANK.firebase, BANK.networking, BANK.material, BANK.auth, BANK.testing, BANK.publishing);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Kotlin/i.test(name)) return 'kotlin';
    if (/UI/i.test(name)) return 'ui';
    if (/Database/i.test(name)) return 'storage';
    if (/Firebase/i.test(name)) return 'firebase';
    if (/API/i.test(name)) return 'networking';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'and-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–16.</li><li>Build the apps in Module 17 (10 real-world Android applications).</li><li>Complete the industry capstone in Module 18 and present it.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Complete App Evaluation and Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final|Complete App/i.test(name) ? 20 : 15) : 8;
        var aid = 'and-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (type === 'projects' || isProjectName(name)) {
        idx += 1;
        var pv = pool[idx % pool.length];
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: pv });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      idx += 1;
      var v = pool[idx % pool.length];
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'and-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes, type out the code and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB.android;
  COURSES_DB.android = {
    id: 'android',
    title: 'Complete Android App Development Program (Kotlin)',
    shortDesc: 'A full 19-module program from beginner to job-ready Android developer: Kotlin, Android Studio, UI, navigation, data storage, Firebase, networking, media, Material Design, security, testing, publishing to Google Play, AI tools, freelancing, 10 real-world apps, an industry capstone and a Certificate of Completion.',
    category: 'Mobile Development',
    icon: ex.icon || '📱',
    gradient: ex.gradient || 'linear-gradient(135deg,#15803d,#16a34a)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH developers',
    duration: '160h+',
    level: 'Beginner → Advanced',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$220',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-ANDROID-0001',
    learn: [
      'Program in Kotlin and use Android Studio confidently',
      'Build Android UIs with XML layouts and Material Design',
      'Handle navigation, activities, fragments and app lifecycle',
      'Store data with SharedPreferences, SQLite, Room and Firebase',
      'Consume REST APIs with Retrofit and add auth, media and device features',
      'Test, secure, publish to Google Play, and build a portfolio to get hired'
    ],
    requirements: [
      'A computer that can run Android Studio',
      'No prior coding experience required — we start with Kotlin basics',
      'Willingness to build and run every app in Android Studio'
    ],
    about: [
      'This is the complete TIH Android App Development Program, rebuilt into nineteen modules that take you from Kotlin basics to publishing full apps on Google Play.',
      'Every content lesson has a video and printable notes with Kotlin code; ten real-world apps and an industry capstone build your portfolio, and you learn Firebase, networking, security, testing, publishing, AI tools and freelancing.',
      'Software & tools: Android Studio, Kotlin, Firebase, Git & GitHub, Postman, Figma, SQLite & Room, Google Play Console and Material Design Components. You finish with a portfolio of apps and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _androidFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.android = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[ANDROID] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
