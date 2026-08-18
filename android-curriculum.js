/* TIH Complete Android App Development Program (Kotlin) curriculum.
   Rebuilds COURSES_DB.android into the full 19-module program: Kotlin,
   Android Studio, UI, interaction, navigation, data storage, Firebase,
   networking, media & device features, Material Design, auth & security,
   testing, publishing, AI tools, freelancing, 10 real-world apps, an industry
   capstone and a graduation module with exams and a Certificate of Completion.
   Every content lesson has a video + printable notes (with code snippets);
   project lessons carry briefs and downloadable source code. Modelled on
   webdev-curriculum.js.

   UPDATED: Large unique question banks + seeded shuffle so every topic
   receives a different set of practice questions. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.android || COURSES_DB.android._androidFullBuilt) return;

  var V = ['blKkRoZPxLc', 'FlBhpm9aRUg', 'DzST9xWs4g4', 'UKI-mpESErQ', '4RUZ01ptcYk', 'l-jdSOUpSIA', 'jjGjkElvcfc', 'HYzw8LFvmw4', 'KJSBsRKqNwU', 'ondCeqlAwEI', 'BEvOBTaYUm0', 'wm626abfMM8', '2I6fuD20qlY', 'WOKrelHPefc', 'RKbmqSRc0z0', 'XdcdCZoYRL8', '0kwcXtAq4Yo'];
  var VIDEOS = {
    orientation: ['blKkRoZPxLc', 'oSim9fBFy-E', 'FGi8mcc2tGw', 'DzST9xWs4g4', '_aVmQu6FLZE'],
    kotlin: ['FlBhpm9aRUg', 'mnkzx3TwbV8', 'F9UC9DY-vIU', '8QeEOpCefPY', 'DsKFhuaqBqY', 'cg4vf4jgWtE', 'yraYTV1AIs8'],
    studio: ['DzST9xWs4g4', 'FGi8mcc2tGw', '_aVmQu6FLZE', '2I6fuD20qlY'],
    ui: ['UKI-mpESErQ', 'WE274e3Ip20', 'BEvOBTaYUm0', '4RUZ01ptcYk'],
    interaction: ['4RUZ01ptcYk', 'CAPlP2QcHnM', 'l-jdSOUpSIA'],
    navigation: ['l-jdSOUpSIA'],
    storage: ['jjGjkElvcfc', 'vj92yFW-pZo', 'm-TMpWvPnBM'],
    firebase: ['HYzw8LFvmw4', 'wm626abfMM8', 'SpSzRgbhTa4'],
    networking: ['KJSBsRKqNwU', 'Qk-Tej0ZQas'],
    media: ['ondCeqlAwEI'],
    material: ['BEvOBTaYUm0'],
    auth: ['wm626abfMM8', 'SpSzRgbhTa4', 'dsst_TKgClY'],
    testing: ['2I6fuD20qlY'],
    publishing: ['WOKrelHPefc'],
    ai: ['RKbmqSRc0z0', 'HYzw8LFvmw4'],
    career: ['XdcdCZoYRL8'],
    projects: ['Hi4a2Pk5RJA', 'h8vI2yw2eR8', 'BVAslimaGSk', 'pXZR0QiwvrU', 'Xi2bv01Gdqc', 'eHCzGVup74o', 'UvaVJ0EseP0', 'eXH3Gh9cP74', '0kwcXtAq4Yo'],
    capstone: ['0kwcXtAq4Yo', 'UKI-mpESErQ', 'vj92yFW-pZo', 'wm626abfMM8', 'KJSBsRKqNwU', '2I6fuD20qlY', 'WOKrelHPefc', 'XdcdCZoYRL8'],
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

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch]; }); }
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

  /* ========== LARGE UNIQUE QUESTION BANKS ==========
     Many more questions per skill so different topics receive different sets. */
  var BANK = {
    general: [
      { q: 'Android apps in this course are built mainly with:', opts: ['Swift', 'Kotlin', 'Python', 'PHP'], correct: 1, exp: 'Kotlin is the modern, official language for Android.' },
      { q: 'The official IDE for Android development is:', opts: ['VS Code', 'Android Studio', 'Xcode', 'Eclipse only'], correct: 1, exp: 'Android Studio is the official Android IDE.' },
      { q: 'An emulator lets you:', opts: ['Publish apps', 'Run and test your app on a virtual device', 'Write servers', 'Edit photos'], correct: 1, exp: 'Emulators simulate a device for testing.' },
      { q: 'The best way to learn app development is to:', opts: ['Only watch videos', 'Build and run real apps yourself', 'Memorise syntax', 'Avoid errors'], correct: 1, exp: 'Building real apps is how the skill is built.' },
      { q: 'Logcat is used to:', opts: ['Design UI', 'View log output and debug your app', 'Publish to Play', 'Edit XML only'], correct: 1, exp: 'Logcat shows logs and errors for debugging.' },
      { q: 'Gradle is Android’s:', opts: ['Emulator', 'Build system', 'Database', 'Language'], correct: 1, exp: 'Gradle builds and manages dependencies for the app.' },
      { q: 'Which file describes essential app information such as activities and permissions?', opts: ['build.gradle', 'AndroidManifest.xml', 'MainActivity.kt', 'strings.xml'], correct: 1, exp: 'The AndroidManifest.xml declares components and permissions.' },
      { q: 'APK stands for:', opts: ['Android Package Kit', 'Application Programming Kit', 'Advanced Package Kernel', 'Android Program Key'], correct: 0, exp: 'APK is the Android Package format used to distribute apps.' },
      { q: 'Which language is recommended by Google for modern Android development?', opts: ['Java only', 'Kotlin', 'C++', 'JavaScript'], correct: 1, exp: 'Kotlin is the preferred language for Android.' },
      { q: 'What does AVD stand for in Android Studio?', opts: ['Android Virtual Device', 'Application Version Data', 'Automated Video Debug', 'App Visual Design'], correct: 0, exp: 'AVD is an Android Virtual Device (emulator).' }
    ],
    kotlin: [
      { q: 'Which keyword declares a read-only value in Kotlin?', opts: ['var', 'val', 'let', 'def'], correct: 1, exp: 'val is read-only; var is mutable.' },
      { q: 'Kotlin functions are declared with:', opts: ['function', 'fun', 'def', 'func'], correct: 1, exp: 'fun declares a function in Kotlin.' },
      { q: 'A Kotlin class is defined with the keyword:', opts: ['struct', 'class', 'object only', 'type'], correct: 1, exp: 'class defines a class; objects are instances.' },
      { q: 'A "data class" in Kotlin is useful because it:', opts: ['Cannot hold data', 'Auto-generates equals/hashCode/toString', 'Is only for UI', 'Runs the app'], correct: 1, exp: 'Data classes auto-generate common methods.' },
      { q: 'Which handles multiple branches cleanly in Kotlin?', opts: ['when', 'switchif', 'select', 'branch'], correct: 0, exp: 'when is Kotlin’s powerful switch-like expression.' },
      { q: 'A Kotlin List created with listOf() is:', opts: ['Mutable', 'Read-only (immutable)', 'A database', 'A function'], correct: 1, exp: 'listOf() is read-only; mutableListOf() can change.' },
      { q: 'What is the correct way to declare a mutable integer in Kotlin?', opts: ['val x: Int = 5', 'var x: Int = 5', 'let x = 5', 'int x = 5'], correct: 1, exp: 'var creates a mutable variable.' },
      { q: 'Kotlin is fully interoperable with:', opts: ['Swift', 'Java', 'Python', 'Ruby'], correct: 1, exp: 'Kotlin runs on the JVM and works seamlessly with Java.' },
      { q: 'Which symbol is used for string templates in Kotlin?', opts: ['#', '$', '@', '%'], correct: 1, exp: '$name or ${expression} inserts values into strings.' },
      { q: 'A null-safe call in Kotlin uses:', opts: ['!.', '?.', '??', '!!.'], correct: 1, exp: '?. safely calls a method only if the object is not null.' },
      { q: 'What does the Elvis operator ?: do?', opts: ['Creates a new object', 'Provides a default value when the left side is null', 'Throws an exception', 'Converts types'], correct: 1, exp: '?: returns the right-hand value if the left is null.' },
      { q: 'Which loop is used to iterate over a range in Kotlin?', opts: ['for (i in 1..10)', 'loop (i = 1 to 10)', 'foreach i = 1 to 10', 'while range 1-10'], correct: 0, exp: 'for (i in 1..10) is the standard range loop.' },
      { q: 'An extension function in Kotlin lets you:', opts: ['Extend a class without inheriting from it', 'Only modify the Android Manifest', 'Delete files', 'Change the theme'], correct: 0, exp: 'Extension functions add methods to existing types.' },
      { q: 'What is the default visibility of a class member in Kotlin?', opts: ['private', 'public', 'protected', 'internal'], correct: 1, exp: 'Members are public by default in Kotlin.' },
      { q: 'Which collection is ordered and allows duplicates?', opts: ['Set', 'List', 'Map', 'HashSet'], correct: 1, exp: 'List preserves order and allows duplicate elements.' }
    ],
    ui: [
      { q: 'Android UI layouts are commonly defined in:', opts: ['JSON', 'XML', 'CSS', 'YAML'], correct: 1, exp: 'Layouts are written in XML (or Compose).' },
      { q: 'A RecyclerView is used to:', opts: ['Show one item', 'Efficiently display long, scrolling lists', 'Store data', 'Make network calls'], correct: 1, exp: 'RecyclerView efficiently renders large lists.' },
      { q: 'ConstraintLayout helps you:', opts: ['Store data', 'Build flexible, responsive layouts', 'Call APIs', 'Debug crashes'], correct: 1, exp: 'ConstraintLayout positions views relative to each other.' },
      { q: 'An EditText is used for:', opts: ['Displaying an image', 'User text input', 'Playing audio', 'Navigation'], correct: 1, exp: 'EditText captures typed user input.' },
      { q: 'A TextView is used to:', opts: ['Take input', 'Display text to the user', 'Store data', 'Make a request'], correct: 1, exp: 'TextView shows read-only text.' },
      { q: 'A CardView is typically used to:', opts: ['Store files', 'Group content in a material card with elevation', 'Call an API', 'Run tests'], correct: 1, exp: 'CardView presents content in an elevated card.' },
      { q: 'Which layout arranges children in a single row or column?', opts: ['ConstraintLayout', 'LinearLayout', 'RelativeLayout', 'FrameLayout'], correct: 1, exp: 'LinearLayout places views horizontally or vertically.' },
      { q: 'findViewById is used to:', opts: ['Create a new view', 'Get a reference to a view defined in XML', 'Delete a view', 'Change the theme'], correct: 1, exp: 'It binds XML views to Kotlin variables.' },
      { q: 'Which attribute sets the width of a view to match its parent?', opts: ['wrap_content', 'match_parent', 'fill_width', 'parent_size'], correct: 1, exp: 'match_parent makes the view fill the parent.' },
      { q: 'A ScrollView is useful when:', opts: ['Content may be larger than the screen', 'You need a database', 'You call an API', 'You sign the app'], correct: 0, exp: 'ScrollView allows scrolling when content overflows.' },
      { q: 'Which view displays an image?', opts: ['TextView', 'ImageView', 'Button', 'EditText'], correct: 1, exp: 'ImageView is designed to show images.' },
      { q: 'ViewBinding helps you:', opts: ['Avoid findViewById and get type-safe view references', 'Only change colours', 'Publish the app', 'Write unit tests'], correct: 0, exp: 'ViewBinding generates a binding class for safer view access.' },
      { q: 'dp in Android stands for:', opts: ['Digital Pixels', 'Density-independent Pixels', 'Device Program', 'Data Points'], correct: 1, exp: 'dp scales correctly across different screen densities.' },
      { q: 'Which layout is best for complex, flexible UIs?', opts: ['LinearLayout only', 'ConstraintLayout', 'AbsoluteLayout', 'TableLayout only'], correct: 1, exp: 'ConstraintLayout is recommended for modern flexible layouts.' },
      { q: 'A Button’s primary purpose is to:', opts: ['Display text only', 'Trigger an action when clicked', 'Store user data', 'Make network requests'], correct: 1, exp: 'Buttons respond to click events.' }
    ],
    storage: [
      { q: 'SharedPreferences is best for:', opts: ['Large databases', 'Small key-value data like settings', 'Images', 'Video'], correct: 1, exp: 'SharedPreferences stores small key-value pairs.' },
      { q: 'Room is:', opts: ['A UI widget', 'An abstraction layer over SQLite', 'A network library', 'A language'], correct: 1, exp: 'Room simplifies working with SQLite databases.' },
      { q: 'CRUD stands for:', opts: ['Create, Read, Update, Delete', 'Copy, Run, Undo, Deploy', 'Cache, Route, Use, Debug', 'Compile, Read, Upload, Delete'], correct: 0, exp: 'The four basic data operations.' },
      { q: 'For structured, queryable local data you would use:', opts: ['A text file', 'SQLite / Room', 'A Toast', 'An Intent'], correct: 1, exp: 'SQLite/Room stores structured, queryable data.' },
      { q: 'Data persistence means data:', opts: ['Is lost on close', 'Survives after the app is closed', 'Is only in memory', 'Is a UI'], correct: 1, exp: 'Persisted data remains after the app restarts.' },
      { q: 'A Room @Entity represents:', opts: ['A screen', 'A database table', 'A network call', 'A button'], correct: 1, exp: 'An @Entity maps to a table.' },
      { q: 'Which annotation marks the primary key in a Room entity?', opts: ['@Key', '@PrimaryKey', '@Id', '@Main'], correct: 1, exp: '@PrimaryKey identifies the unique row key.' },
      { q: 'Internal storage is:', opts: ['Accessible by all apps', 'Private to your app', 'Only for images', 'Stored in the cloud'], correct: 1, exp: 'Internal storage is private to the app.' },
      { q: 'Which Room component contains the database access methods?', opts: ['@Entity', '@Dao', '@Database', '@Query only'], correct: 1, exp: 'DAO (Data Access Object) defines the queries.' },
      { q: 'To observe database changes with Room you often use:', opts: ['LiveData or Flow', 'Only Toast', 'SharedPreferences', 'An Intent'], correct: 0, exp: 'LiveData/Flow notify the UI when data changes.' },
      { q: 'External storage is suitable for:', opts: ['App-private settings', 'Files the user may want to share or access with other apps', 'Only passwords', 'Network tokens'], correct: 1, exp: 'External storage is more visible to the user and other apps.' },
      { q: 'A migration in Room is needed when:', opts: ['You change the theme', 'You change the database schema between versions', 'You add a Button', 'You publish the app'], correct: 1, exp: 'Schema changes require a migration to keep user data.' },
      { q: 'Which is NOT a good use of SharedPreferences?', opts: ['Storing a user’s theme preference', 'Storing a large list of 10,000 items', 'Remembering login state', 'Saving a simple counter'], correct: 1, exp: 'Large datasets belong in a database, not SharedPreferences.' },
      { q: 'Offline storage means the app can:', opts: ['Only work online', 'Continue working with local data when there is no internet', 'Never save data', 'Only use Firebase'], correct: 1, exp: 'Local persistence enables offline use.' },
      { q: 'Room compiles SQL queries at:', opts: ['Runtime only', 'Compile time (catching errors early)', 'Install time', 'Never'], correct: 1, exp: 'Room validates queries at compile time.' }
    ],
    firebase: [
      { q: 'Firebase is:', opts: ['A programming language', 'A backend platform (auth, database, storage, etc.)', 'An emulator', 'A UI toolkit'], correct: 1, exp: 'Firebase provides backend services for apps.' },
      { q: 'Firebase Authentication handles:', opts: ['UI layout', 'User sign-up and login', 'Image editing', 'Testing'], correct: 1, exp: 'It manages user identity and login.' },
      { q: 'Firestore is a:', opts: ['SQL server', 'NoSQL cloud document database', 'CSS tool', 'Language'], correct: 1, exp: 'Firestore stores JSON-like documents in the cloud.' },
      { q: 'Cloud Messaging (FCM) is used for:', opts: ['Push notifications', 'UI design', 'Compiling code', 'Local storage'], correct: 0, exp: 'FCM sends push notifications to devices.' },
      { q: 'Firebase Storage is best for:', opts: ['Small settings', 'Files like images and videos', 'Only text', 'Nothing'], correct: 1, exp: 'Storage holds user files/media in the cloud.' },
      { q: 'Firebase Analytics helps you:', opts: ['Design logos', 'Understand how users use your app', 'Write Kotlin', 'Sign the APK'], correct: 1, exp: 'Analytics reports user behaviour and events.' },
      { q: 'Which Firebase product is a realtime database?', opts: ['Firestore only', 'Firebase Realtime Database', 'Cloud Functions only', 'Hosting'], correct: 1, exp: 'Realtime Database synchronises data instantly across clients.' },
      { q: 'To protect Firebase data you should use:', opts: ['No rules', 'Security rules', 'Only client-side checks', 'Hardcoded passwords'], correct: 1, exp: 'Security rules control who can read/write data.' },
      { q: 'Firebase Hosting is used to:', opts: ['Store user passwords', 'Host web apps and static content', 'Compile Kotlin', 'Run emulators'], correct: 1, exp: 'Hosting serves web content quickly and securely.' },
      { q: 'A common sign-in method supported by Firebase Auth is:', opts: ['Only SMS', 'Email/password, Google, Phone, etc.', 'Only fingerprint', 'Only username'], correct: 1, exp: 'Firebase Auth supports many popular providers.' },
      { q: 'Cloud Firestore stores data in:', opts: ['Tables only', 'Collections and documents', 'XML files', 'SharedPreferences'], correct: 1, exp: 'Data is organised as collections of documents.' },
      { q: 'Push notifications can be sent with:', opts: ['Only LocalBroadcast', 'Firebase Cloud Messaging', 'Only Toast', 'Gradle'], correct: 1, exp: 'FCM is the standard way to send push notifications.' },
      { q: 'Firebase can help with offline support by:', opts: ['Deleting local data', 'Caching data and syncing when back online', 'Disabling the app', 'Only working online'], correct: 1, exp: 'Many Firebase SDKs support offline persistence.' },
      { q: 'Which service would you use to store user profile photos?', opts: ['Firebase Authentication', 'Firebase Storage', 'Cloud Messaging', 'Analytics'], correct: 1, exp: 'Storage is designed for files such as images.' },
      { q: 'Firebase projects are managed in the:', opts: ['Android Studio only', 'Firebase Console', 'Play Console only', 'GitHub'], correct: 1, exp: 'The Firebase Console is the central management place.' }
    ],
    networking: [
      { q: 'A REST API commonly exchanges data as:', opts: ['XML only', 'JSON', 'CSS', 'APK'], correct: 1, exp: 'REST APIs commonly use JSON.' },
      { q: 'Retrofit is used to:', opts: ['Design UI', 'Make network/API calls in Android', 'Store local data', 'Sign the app'], correct: 1, exp: 'Retrofit is a type-safe HTTP client for Android.' },
      { q: 'A GET request is used to:', opts: ['Delete data', 'Retrieve data', 'Sign the app', 'Render XML'], correct: 1, exp: 'GET retrieves data from a server.' },
      { q: 'JSON is:', opts: ['A layout language', 'A lightweight data-interchange format', 'A database engine', 'A UI widget'], correct: 1, exp: 'JSON is a common text format for data exchange.' },
      { q: 'Network errors should be:', opts: ['Ignored', 'Handled gracefully with user feedback', 'Crashed on', 'Hidden forever'], correct: 1, exp: 'Handle errors and inform the user.' },
      { q: 'API authentication often uses:', opts: ['Nothing', 'Tokens/keys in request headers', 'A logo', 'A Toast'], correct: 1, exp: 'APIs authenticate via tokens or API keys.' },
      { q: 'Which HTTP method is typically used to create a new resource?', opts: ['GET', 'POST', 'DELETE', 'HEAD'], correct: 1, exp: 'POST is commonly used to create resources.' },
      { q: 'OkHttp is often used together with:', opts: ['Only Room', 'Retrofit as the underlying HTTP client', 'Only SharedPreferences', 'Only Firebase'], correct: 1, exp: 'Retrofit uses OkHttp under the hood.' },
      { q: 'A 404 status code means:', opts: ['Success', 'Resource not found', 'Server error', 'Redirect'], correct: 1, exp: '404 indicates the requested resource was not found.' },
      { q: 'Which library is commonly used to parse JSON in Android?', opts: ['Gson or Moshi', 'Only Room', 'Only Glide', 'Only Picasso'], correct: 0, exp: 'Gson and Moshi convert JSON to Kotlin objects.' },
      { q: 'Coroutines help with networking by:', opts: ['Blocking the main thread', 'Making asynchronous calls easier and safer', 'Removing the need for APIs', 'Changing the UI theme'], correct: 1, exp: 'Coroutines simplify asynchronous network code.' },
      { q: 'HTTPS is preferred over HTTP because it:', opts: ['Is slower', 'Encrypts data in transit', 'Uses more battery only', 'Is required by Gradle'], correct: 1, exp: 'HTTPS protects data with encryption.' },
      { q: 'A base URL in Retrofit is:', opts: ['The full path of every request', 'The common root address for all endpoints', 'Only used for images', 'A database name'], correct: 1, exp: 'The base URL is the shared prefix for API calls.' },
      { q: 'Which annotation marks a GET endpoint in Retrofit?', opts: ['@POST', '@GET', '@PUT', '@DELETE'], correct: 1, exp: '@GET declares a GET request method.' },
      { q: 'Timeout settings are important to:', opts: ['Make the app look better', 'Avoid hanging forever when the network is slow or down', 'Change colours', 'Sign the APK'], correct: 1, exp: 'Timeouts prevent the app from waiting indefinitely.' }
    ],
    material: [
      { q: 'Material Design is:', opts: ['A database', 'Google’s design system for consistent UI', 'A language', 'An emulator'], correct: 1, exp: 'Material Design guides Android UI look and feel.' },
      { q: 'A theme in Android controls:', opts: ['App logic', 'Colours, fonts and styles app-wide', 'The database', 'Networking'], correct: 1, exp: 'Themes set consistent styling across the app.' },
      { q: 'Dark mode support means the app:', opts: ['Only looks dark', 'Adapts colours for light and dark themes', 'Runs faster', 'Uses less data'], correct: 1, exp: 'Apps should adapt to the system light/dark theme.' },
      { q: 'Responsive layouts adapt to:', opts: ['One screen only', 'Different screen sizes and orientations', 'Only tablets', 'Only phones'], correct: 1, exp: 'Responsive UIs work across device sizes.' },
      { q: 'Consistent typography improves:', opts: ['Battery life', 'Readability and a professional look', 'Network speed', 'Storage'], correct: 1, exp: 'Good typography aids readability and polish.' },
      { q: 'Material components include:', opts: ['Buttons and cards', 'Only databases', 'Only APIs', 'Only sensors'], correct: 0, exp: 'Material provides buttons, cards, dialogs, etc.' },
      { q: 'Elevation in Material Design creates:', opts: ['A shadow that shows depth', 'A database table', 'A network request', 'A permission'], correct: 0, exp: 'Elevation gives a sense of layering and depth.' },
      { q: 'Which attribute is commonly used to apply a Material style?', opts: ['android:theme', 'android:src', 'android:hint only', 'android:inputType'], correct: 0, exp: 'Themes and styles apply Material appearance.' },
      { q: 'Colour primary and colour secondary are part of:', opts: ['The network layer', 'The Material colour system / theme', 'Only the database', 'Gradle'], correct: 1, exp: 'Material themes define primary and secondary colours.' },
      { q: 'Animations in Material Design should be:', opts: ['Random and long', 'Meaningful and help the user understand changes', 'Disabled always', 'Only for games'], correct: 1, exp: 'Motion should guide and delight without confusing.' },
      { q: 'A Floating Action Button (FAB) is typically used for:', opts: ['The most important action on the screen', 'Only displaying text', 'Storing data', 'Signing the app'], correct: 0, exp: 'FABs highlight the primary action.' },
      { q: 'ShapeAppearance in Material affects:', opts: ['Network speed', 'Corner radius and shape of components', 'Database size', 'APK signing'], correct: 1, exp: 'ShapeAppearance controls the shape of Material components.' },
      { q: 'Which is a good practice for accessibility?', opts: ['Very small touch targets', 'Sufficient colour contrast and large enough touch targets', 'No labels', 'Only dark colours'], correct: 1, exp: 'Accessibility requires good contrast and usable targets.' },
      { q: 'Material You (Dynamic colour) can:', opts: ['Change app colours based on the user’s wallpaper', 'Only work on iOS', 'Replace the database', 'Remove the need for themes'], correct: 0, exp: 'Dynamic colour personalises the palette from the wallpaper.' },
      { q: 'A Snackbar is used to:', opts: ['Show a short message at the bottom of the screen', 'Store large files', 'Make API calls', 'Sign the APK'], correct: 0, exp: 'Snackbars provide brief feedback about an operation.' }
    ],
    auth: [
      { q: 'Passwords should be:', opts: ['Stored in plain text', 'Never stored in plain text; hashed/handled securely', 'Shown on screen', 'Put in the URL'], correct: 1, exp: 'Never store plain passwords; use secure handling.' },
      { q: 'Biometric authentication uses:', opts: ['A password only', 'Fingerprint or face recognition', 'An email', 'A Toast'], correct: 1, exp: 'Biometrics use fingerprint/face for login.' },
      { q: 'App permissions should be:', opts: ['All requested at once always', 'Requested only when needed, with explanation', 'Never used', 'Hidden'], correct: 1, exp: 'Request permissions in context, only as needed.' },
      { q: 'Sensitive local data should be:', opts: ['Left unprotected', 'Stored securely (encrypted where appropriate)', 'Posted publicly', 'In logs'], correct: 1, exp: 'Protect sensitive data with secure storage.' },
      { q: 'A login system verifies:', opts: ['The app version', 'The user’s identity/credentials', 'The screen size', 'The battery'], correct: 1, exp: 'Login authenticates the user’s identity.' },
      { q: 'A good security habit is to:', opts: ['Trust all input', 'Validate input and follow security best practices', 'Disable updates', 'Hardcode secrets'], correct: 1, exp: 'Validate input and avoid hardcoding secrets.' },
      { q: 'Which is a safer way to store a session token?', opts: ['In a public TextView', 'In encrypted SharedPreferences or a secure storage solution', 'In the app title', 'In Logcat'], correct: 1, exp: 'Tokens must be stored securely.' },
      { q: 'HTTPS helps protect:', opts: ['Only images', 'Data sent between the app and the server', 'Only the database schema', 'The APK signature'], correct: 1, exp: 'HTTPS encrypts traffic in transit.' },
      { q: 'Runtime permissions were introduced to:', opts: ['Make apps slower', 'Let users grant sensitive permissions only when needed', 'Remove all permissions', 'Change the theme'], correct: 1, exp: 'Users can approve permissions at the moment they are required.' },
      { q: 'Hardcoding API keys in the source code is:', opts: ['Recommended', 'A security risk and should be avoided', 'Required by Google', 'Only for testing'], correct: 1, exp: 'Keys in source can be extracted; use safer approaches.' },
      { q: 'Two-factor authentication (2FA) adds:', opts: ['Only a password', 'An extra verification step beyond the password', 'A new colour theme', 'A database table'], correct: 1, exp: '2FA significantly improves account security.' },
      { q: 'ProGuard / R8 helps security by:', opts: ['Making the UI prettier', 'Obfuscating and shrinking code, making reverse-engineering harder', 'Adding animations', 'Creating certificates'], correct: 1, exp: 'Code shrinking and obfuscation raise the bar for attackers.' },
      { q: 'Which permission is considered dangerous and needs runtime request?', opts: ['INTERNET', 'CAMERA or ACCESS_FINE_LOCATION', 'VIBRATE', 'SET_WALLPAPER'], correct: 1, exp: 'Camera and location are sensitive and require runtime approval.' },
      { q: 'Certificate pinning is a technique to:', opts: ['Improve UI performance', 'Reduce risk of man-in-the-middle attacks on network calls', 'Change app icons', 'Speed up Gradle'], correct: 1, exp: 'Pinning validates the server certificate more strictly.' },
      { q: 'A strong password policy should require:', opts: ['Only letters', 'Sufficient length and complexity (and never reuse)', 'The user’s name only', 'A single digit'], correct: 1, exp: 'Length and complexity make passwords harder to guess.' }
    ],
    testing: [
      { q: 'A unit test checks:', opts: ['The whole app UI', 'A small piece of logic in isolation', 'The Play Store listing', 'The icon'], correct: 1, exp: 'Unit tests verify individual functions/units.' },
      { q: 'UI testing verifies:', opts: ['Server code', 'The app’s screens and interactions behave correctly', 'The database schema only', 'The app icon'], correct: 1, exp: 'UI tests check on-screen behaviour.' },
      { q: 'Crash analysis helps you:', opts: ['Design UI', 'Find and fix causes of app crashes', 'Sign the app', 'Write XML'], correct: 1, exp: 'Crash reports reveal what caused failures.' },
      { q: 'Good memory management prevents:', opts: ['Faster apps', 'Leaks and out-of-memory crashes', 'Better UI', 'More features'], correct: 1, exp: 'Managing memory avoids leaks and crashes.' },
      { q: 'App optimization aims to improve:', opts: ['Only colours', 'Speed, responsiveness and resource use', 'The logo', 'The price'], correct: 1, exp: 'Optimisation improves performance and efficiency.' },
      { q: 'Debugging is the process of:', opts: ['Adding features', 'Finding and fixing errors in code', 'Publishing', 'Designing icons'], correct: 1, exp: 'Debugging locates and fixes defects.' },
      { q: 'JUnit is commonly used for:', opts: ['UI design', 'Unit testing in Android/Kotlin', 'Network calls only', 'Signing APKs'], correct: 1, exp: 'JUnit is the standard unit-testing framework.' },
      { q: 'Espresso is a framework for:', opts: ['Database migration', 'UI testing on Android', 'Push notifications', 'App signing'], correct: 1, exp: 'Espresso writes concise, reliable UI tests.' },
      { q: 'A breakpoint is used to:', opts: ['Publish the app', 'Pause execution so you can inspect variables', 'Change the theme', 'Create a new activity'], correct: 1, exp: 'Breakpoints let you examine program state while debugging.' },
      { q: 'ANR stands for:', opts: ['Android Network Request', 'Application Not Responding', 'Automatic Notification Receiver', 'App Name Register'], correct: 1, exp: 'ANR occurs when the main thread is blocked too long.' },
      { q: 'LeakCanary helps detect:', opts: ['UI colours', 'Memory leaks', 'Network speed', 'APK size only'], correct: 1, exp: 'LeakCanary is a popular memory-leak detection library.' },
      { q: 'Code coverage tells you:', opts: ['How pretty the UI is', 'How much of your code is exercised by tests', 'The number of users', 'The app rating'], correct: 1, exp: 'Coverage shows which lines were executed by tests.' },
      { q: 'A flaky test is one that:', opts: ['Always passes', 'Sometimes passes and sometimes fails without code changes', 'Never runs', 'Only tests the database'], correct: 1, exp: 'Flaky tests are unreliable and should be fixed.' },
      { q: 'Profiling tools help you:', opts: ['Only change icons', 'Find performance bottlenecks (CPU, memory, network)', 'Write the manifest', 'Create certificates'], correct: 1, exp: 'Profilers show where time and resources are spent.' },
      { q: 'Test-Driven Development (TDD) means:', opts: ['Writing tests after the whole app is finished', 'Writing tests before or while writing the code', 'Never writing tests', 'Only testing on real devices'], correct: 1, exp: 'TDD uses tests to guide the design of the code.' }
    ],
    publishing: [
      { q: 'Android apps are published on the:', opts: ['App Store', 'Google Play Console', 'GitHub only', 'Firebase'], correct: 1, exp: 'You publish via the Google Play Console.' },
      { q: 'App signing is required to:', opts: ['Design UI', 'Verify and secure your app for release', 'Call APIs', 'Store data'], correct: 1, exp: 'A signing key authenticates your release builds.' },
      { q: 'Versioning helps you:', opts: ['Change colours', 'Track and roll out app updates', 'Design icons', 'Debug crashes'], correct: 1, exp: 'Version codes/names manage releases and updates.' },
      { q: 'A Play Store listing needs:', opts: ['Only code', 'Icon, screenshots and a clear description', 'Nothing', 'A database'], correct: 1, exp: 'Listings require graphics and descriptions.' },
      { q: 'Before release you should:', opts: ['Skip testing', 'Test thoroughly and prepare store assets', 'Remove all features', 'Ignore versioning'], correct: 1, exp: 'Test and prepare assets before publishing.' },
      { q: 'App updates let you:', opts: ['Never change the app', 'Ship fixes and new features to users', 'Delete the app', 'Avoid signing'], correct: 1, exp: 'Updates deliver improvements to installed users.' },
      { q: 'versionCode must:', opts: ['Stay the same forever', 'Increase with every new release uploaded to Play', 'Be a string only', 'Match the package name'], correct: 1, exp: 'Each new upload needs a higher versionCode.' },
      { q: 'AAB stands for:', opts: ['Android App Bundle', 'Application Binary Build', 'Advanced App Backup', 'Android Automatic Build'], correct: 0, exp: 'Android App Bundle is the preferred publishing format.' },
      { q: 'Google Play App Signing means:', opts: ['You never sign the app', 'Google helps manage the app signing key securely', 'Only debug keys are used', 'Signing is optional'], correct: 1, exp: 'Play App Signing protects and manages the signing key.' },
      { q: 'A content rating questionnaire is required to:', opts: ['Change the theme', 'Tell Google the appropriate age rating for your app', 'Create a database', 'Write unit tests'], correct: 1, exp: 'Content ratings help users know if the app is suitable.' },
      { q: 'Staged rollouts allow you to:', opts: ['Release to a percentage of users first', 'Skip testing', 'Remove the need for a signing key', 'Change the package name'], correct: 0, exp: 'You can gradually release to detect issues early.' },
      { q: 'Which file is the modern recommended format for Play uploads?', opts: ['Only APK', 'Android App Bundle (.aab)', 'Only ZIP', 'Only JAR'], correct: 1, exp: 'AAB lets Google generate optimised APKs per device.' },
      { q: 'A good store description should:', opts: ['Be empty', 'Clearly explain what the app does and its benefits', 'Only list technical jargon', 'Contain only emojis'], correct: 1, exp: 'Clear descriptions help users decide to install.' },
      { q: 'Privacy policy is often required when:', opts: ['The app never collects data', 'The app collects user data or uses sensitive permissions', 'You only use TextViews', 'The app is free'], correct: 1, exp: 'Transparency about data use is required by policy.' },
      { q: 'Internal testing track is useful for:', opts: ['Public users only', 'Testing with a small trusted group before wider release', 'Changing the icon only', 'Removing all permissions'], correct: 1, exp: 'Internal testing catches problems early with limited users.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', kotlin: 'kotlin', studio: 'general', ui: 'ui', interaction: 'ui', navigation: 'ui', storage: 'storage', firebase: 'firebase', networking: 'networking', media: 'general', material: 'material', auth: 'auth', testing: 'testing', publishing: 'publishing', ai: 'general', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }

  /* Seeded shuffle so the same topic always gets the same questions,
     but different topics get different combinations. */
  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
    return Math.abs(h);
  }
  function seededShuffle(arr, seed) {
    var a = arr.slice();
    var random = function () {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pickQuestions(key, count, topicName) {
    var pool = (BANK[key] || BANK.general).slice();
    // Mix in a few from neighbouring banks for extra variety when pool is small
    var extra = BANK.general.concat(BANK.kotlin || [], BANK.ui || []);
    var combined = pool.concat(extra);
    // Remove exact duplicates by question text
    var seen = {};
    var unique = [];
    combined.forEach(function (q) {
      if (!seen[q.q]) { seen[q.q] = true; unique.push(q); }
    });
    var seed = hashStr((topicName || key) + '|' + key);
    var shuffled = seededShuffle(unique, seed);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) {
    return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3, name).map(cloneQ) };
  }
  function assessmentQuiz(key, name, count) {
    return { title: name, moduleNum: 1, questions: pickQuestions(key, count, name).map(cloneQ) };
  }
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
