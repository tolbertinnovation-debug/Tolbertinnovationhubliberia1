/* TIH Complete Android App Development Program (Kotlin) curriculum.
   Rebuilds COURSES_DB.android into the full 19-module program.
   Every content lesson has a video + formal detailed study notes +
   unique practice quiz. Projects carry briefs. */
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

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch];
    });
  }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|App|Tracker|Application)$/.test(name.trim()); }

  var skillLabel = {
    orientation: 'Android development foundations',
    kotlin: 'Kotlin programming',
    studio: 'Android Studio',
    ui: 'Android user interface design',
    interaction: 'user interaction and event handling',
    navigation: 'app navigation and screen flow',
    storage: 'local data storage and persistence',
    firebase: 'Firebase backend services',
    networking: 'networking and REST APIs',
    media: 'media and device features',
    material: 'Material Design',
    auth: 'authentication and security',
    testing: 'testing and debugging',
    publishing: 'publishing to Google Play',
    ai: 'AI-assisted development tools',
    career: 'freelancing and career development',
    projects: 'building real-world applications',
    capstone: 'capstone project development',
    assessment: 'skill assessment'
  };

  /* ---------- Detailed topic knowledge base for formal notes ---------- */
  var TOPIC_DEF = {
    'Welcome to the Course': 'The Complete Android App Development Program is a structured, beginner-to-professional learning path that teaches modern Android development using the Kotlin programming language and Android Studio.',
    'What is Android App Development?': 'Android app development is the process of creating software applications that run on devices powered by the Android operating system, using languages such as Kotlin or Java and tools provided by Google.',
    'Career Opportunities in Android Development': 'Career opportunities in Android development include roles such as junior or senior Android developer, mobile engineer, freelance app developer, and technical lead in companies that build mobile products.',
    'Android Ecosystem Overview': 'The Android ecosystem comprises the Android operating system, Google Play Store, Android Studio, Jetpack libraries, Material Design, and a global community of developers and device manufacturers.',
    'Installing Android Studio': 'Android Studio is the official Integrated Development Environment (IDE) for Android application development, providing project templates, a visual layout editor, emulator, debugger, and build tools.',
    'Setting Up the Development Environment': 'Setting up the development environment involves installing Android Studio, configuring the Android SDK, creating virtual devices (emulators), and ensuring the computer meets the required system specifications.',
    'Creating Your First Android Project': 'Creating a first Android project introduces the standard project structure, the main activity, the layout file, and the process of building and running an application on an emulator or physical device.',
    'Course Roadmap': 'The course roadmap outlines the progressive sequence of modules from Kotlin fundamentals through user interface design, data storage, networking, Firebase, testing, publishing, and a final capstone project.',
    'Introduction to Kotlin': 'Kotlin is a modern, statically typed programming language developed by JetBrains and officially supported by Google as the preferred language for Android application development.',
    'Variables and Data Types': 'Variables are named storage locations that hold values, while data types define the kind of data a variable can store, such as integers, floating-point numbers, strings, and Boolean values.',
    'Operators': 'Operators are special symbols that perform operations on variables and values, including arithmetic, comparison, logical, and assignment operations.',
    'User Input': 'User input refers to data entered by the person using the application, typically captured through text fields, buttons, or other interactive controls.',
    'Conditional Statements': 'Conditional statements allow a program to make decisions by executing different blocks of code depending on whether a specified condition evaluates to true or false.',
    'Loops': 'Loops are control structures that repeatedly execute a block of code as long as a given condition remains true or until a collection has been fully traversed.',
    'Functions': 'A function is a reusable block of code that performs a specific task, optionally accepts parameters, and may return a result.',
    'Arrays': 'An array is a fixed-size collection that stores multiple values of the same type in a contiguous sequence, accessible by numeric index.',
    'Lists': 'A list is an ordered collection that can grow or shrink in size and may contain duplicate elements, commonly used for dynamic sequences of data.',
    'Object-Oriented Programming Basics': 'Object-oriented programming (OOP) is a paradigm that organises software design around objects, which combine data (properties) and behaviour (methods).',
    'Classes and Objects': 'A class is a blueprint that defines the structure and behaviour of objects, while an object is a concrete instance of a class created at runtime.',
    'XML Layouts': 'XML layouts are hierarchical descriptions of an Android user interface written in Extensible Markup Language, defining the arrangement and appearance of visual components.',
    'TextView': 'A TextView is a user-interface component that displays read-only text to the user on the screen.',
    'EditText': 'An EditText is an interactive text field that allows the user to enter and edit textual information.',
    'Button': 'A Button is a clickable user-interface element that triggers an action when pressed by the user.',
    'ImageView': 'An ImageView is a component designed to display images, such as icons, photographs, or illustrations, within an Android layout.',
    'RecyclerView': 'RecyclerView is a flexible and efficient view group that displays large sets of data in a scrollable list or grid by recycling item views as the user scrolls.',
    'ScrollView': 'A ScrollView is a container that allows its content to be scrolled vertically when the content exceeds the visible area of the screen.',
    'ConstraintLayout': 'ConstraintLayout is a flexible layout manager that positions and sizes widgets according to constraints relative to other widgets or the parent container.',
    'LinearLayout': 'LinearLayout is a layout that arranges its child views in a single direction, either horizontally or vertically.',
    'RelativeLayout': 'RelativeLayout is a layout that positions child views relative to each other or relative to the parent container.',
    'CardView': 'CardView is a Material Design component that presents content inside a card with rounded corners and elevation (shadow).',
    'Material Design Components': 'Material Design Components are a set of ready-to-use, customisable user-interface elements that implement Google’s Material Design guidelines.',
    'Click Events': 'Click events are user interactions that occur when a view, such as a button, is tapped, and are handled by registering a click listener in code.',
    'Input Validation': 'Input validation is the process of checking that data entered by the user meets required rules before it is accepted or processed by the application.',
    'Toast Messages': 'A Toast is a short, temporary message that appears near the bottom of the screen to provide simple feedback to the user.',
    'Dialog Boxes': 'Dialog boxes are small windows that prompt the user to make a decision or enter additional information before continuing.',
    'Menus': 'Menus provide a structured list of options or actions that the user can select, commonly appearing as options menus or context menus.',
    'Navigation Drawer': 'A navigation drawer is a sliding panel that displays the main navigation options of an application, typically accessible from the left edge of the screen.',
    'Bottom Navigation': 'Bottom navigation is a persistent bar at the bottom of the screen that allows the user to switch between a small number of top-level destinations.',
    'Intents': 'An Intent is a messaging object used to request an action from another application component, such as starting an activity or sending data.',
    'Activities': 'An Activity represents a single screen with a user interface and is one of the fundamental building blocks of an Android application.',
    'Fragments': 'A Fragment represents a reusable portion of a user interface that can be embedded within an activity and managed independently.',
    'Activity Lifecycle': 'The activity lifecycle is a set of states and callback methods that describe how an activity is created, started, resumed, paused, stopped, and destroyed.',
    'Fragment Lifecycle': 'The fragment lifecycle defines the states a fragment passes through as it is attached, created, started, resumed, paused, stopped, and destroyed within its host activity.',
    'Navigation Component': 'The Navigation Component is a Jetpack library that simplifies implementing navigation between destinations in an Android application, including handling the back stack.',
    'Passing Data Between Screens': 'Passing data between screens involves transferring information from one activity or fragment to another, commonly using Intent extras or Safe Args.',
    'Deep Links': 'Deep links are URIs that take the user directly to specific content within an application rather than simply launching the app’s main screen.',
    'SharedPreferences': 'SharedPreferences is a lightweight key-value storage mechanism used for saving small amounts of primitive data such as settings and user preferences.',
    'Internal Storage': 'Internal storage is a private file-storage area on the device that is accessible only to the application that created the files.',
    'External Storage': 'External storage refers to shared storage areas (including SD cards and emulated external storage) that may be accessible by other applications and the user.',
    'SQLite Database': 'SQLite is a lightweight, file-based relational database engine embedded in Android that allows applications to store structured data using SQL.',
    'Room Database': 'Room is a persistence library that provides an abstraction layer over SQLite, enabling compile-time verification of SQL queries and easier database access.',
    'CRUD Operations': 'CRUD stands for Create, Read, Update, and Delete—the four basic operations performed on persistent data.',
    'Data Persistence': 'Data persistence is the ability of an application to retain data after the application or device is closed or restarted.',
    'Offline Storage': 'Offline storage enables an application to function and retain data even when a network connection is unavailable.',
    'Introduction to Firebase': 'Firebase is a comprehensive mobile and web application development platform provided by Google that offers backend services such as authentication, databases, storage, and analytics.',
    'Firebase Authentication': 'Firebase Authentication is a service that provides backend services and easy-to-use SDKs for authenticating users with email, phone numbers, and popular identity providers.',
    'Firestore Database': 'Cloud Firestore is a flexible, scalable NoSQL cloud database that stores data in documents organised into collections and synchronises data across client applications in real time.',
    'Firebase Realtime Database': 'The Firebase Realtime Database is a cloud-hosted NoSQL database that stores data as JSON and synchronises it in real time to every connected client.',
    'Firebase Storage': 'Firebase Storage is a powerful, simple object storage service designed for storing user-generated content such as images, audio, and video.',
    'Cloud Messaging (Push Notifications)': 'Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that allows applications to send and receive push notifications and data messages reliably.',
    'Firebase Analytics': 'Firebase Analytics (Google Analytics for Firebase) is a free app measurement solution that provides insight into user behaviour and application performance.',
    'Introduction to REST APIs': 'A REST API (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications that use standard HTTP methods to access and manipulate resources.',
    'JSON': 'JSON (JavaScript Object Notation) is a lightweight, text-based data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.',
    'Retrofit': 'Retrofit is a type-safe HTTP client library for Android and Java that simplifies the process of consuming REST APIs by converting HTTP API endpoints into Java/Kotlin interfaces.',
    'Fetching Data': 'Fetching data refers to the process of retrieving information from a remote server or local source, typically over a network using HTTP requests.',
    'Sending Data': 'Sending data involves transmitting information from the client application to a remote server, commonly using HTTP methods such as POST or PUT.',
    'Error Handling': 'Error handling is the systematic process of detecting, responding to, and recovering from errors that occur during program execution, especially network and data operations.',
    'API Authentication': 'API authentication is the process of verifying the identity of a client application or user before granting access to protected resources on a server.',
    'Material Design Principles': 'Material Design is a design language developed by Google that provides a unified system of guidelines, components, and tools for creating visually consistent and usable digital experiences.',
    'Themes': 'A theme is a collection of attributes that define the overall visual appearance of an application, including colours, typography, and shape.',
    'Colors': 'Colour in Material Design is used purposefully to express brand identity, hierarchy, and interactive states while maintaining accessibility.',
    'Typography': 'Typography refers to the style, arrangement, and appearance of text; Material Design provides a type scale that ensures readability and visual hierarchy.',
    'Animations': 'Animations are purposeful motion effects that help users understand changes in the interface, provide feedback, and enhance the sense of continuity.',
    'Responsive Layouts': 'Responsive layouts adapt the arrangement and size of user-interface elements to different screen sizes, orientations, and device types.',
    'Dark Mode': 'Dark mode is a colour scheme that uses light text and icons on a dark background, reducing eye strain in low-light environments and saving power on OLED screens.',
    'User Registration': 'User registration is the process by which a new user creates an account in an application, typically by providing credentials such as email and password.',
    'Login System': 'A login system authenticates a returning user by verifying the credentials they supply against stored account information.',
    'Password Security': 'Password security encompasses practices and technologies that protect user passwords from unauthorised access, including hashing, salting, and secure transmission.',
    'Biometric Authentication': 'Biometric authentication uses unique biological characteristics, such as fingerprints or facial features, to verify a user’s identity.',
    'Secure Data Storage': 'Secure data storage involves protecting sensitive information at rest through encryption and appropriate access controls.',
    'App Permissions': 'App permissions are declared capabilities that an application must request in order to access sensitive device features or user data.',
    'Security Best Practices': 'Security best practices are recommended techniques and habits that reduce the risk of vulnerabilities and protect user data throughout the application lifecycle.',
    'Debugging Apps': 'Debugging is the systematic process of identifying, analysing, and correcting defects or unexpected behaviour in software.',
    'Unit Testing': 'Unit testing is a software testing method in which individual units or components of code are tested in isolation to verify that they behave as expected.',
    'UI Testing': 'UI testing verifies that the graphical user interface of an application functions correctly from the user’s perspective.',
    'Performance Testing': 'Performance testing evaluates how an application behaves under various conditions of load, measuring responsiveness, stability, and resource consumption.',
    'Crash Analysis': 'Crash analysis is the examination of crash reports and stack traces to determine the root cause of application failures.',
    'Memory Management': 'Memory management refers to the techniques used to allocate, use, and release memory efficiently so that an application remains stable and responsive.',
    'App Optimization': 'App optimisation is the practice of improving an application’s speed, size, battery usage, and overall efficiency.',
    'Preparing for Release': 'Preparing for release involves final testing, configuring release build settings, generating signed artefacts, and assembling store listing assets.',
    'App Signing': 'App signing is the process of digitally signing an Android application package with a private key so that the system and users can verify its authenticity and integrity.',
    'Versioning': 'Versioning is the practice of assigning unique version codes and version names to each release of an application to track updates and compatibility.',
    'Creating App Icons': 'An app icon is the visual symbol that represents the application on the device home screen and in the Play Store; it must follow platform design guidelines.',
    'Feature Graphics': 'Feature graphics are promotional images displayed prominently on an application’s Google Play Store listing.',
    'Screenshots': 'Screenshots are images of the application’s user interface that illustrate key features and are required for the store listing.',
    'Writing App Descriptions': 'An app description is the textual content on the store listing that explains the purpose, features, and benefits of the application to potential users.',
    'Publishing to Google Play': 'Publishing to Google Play is the process of uploading a signed application bundle or APK, completing the store listing, and releasing the application to users through the Google Play Console.',
    'App Updates': 'App updates are new versions of an application that are published to deliver bug fixes, performance improvements, or new features to existing users.',
    'Using ChatGPT for Coding': 'ChatGPT is a large language model that can assist developers by explaining concepts, generating code examples, reviewing logic, and suggesting solutions to programming problems.',
    'GitHub Copilot': 'GitHub Copilot is an AI-powered code completion tool that suggests whole lines or blocks of code inside the editor based on the context of the file being written.',
    'Firebase AI Features': 'Firebase offers AI-related capabilities and integrations that help developers add intelligent features such as predictions, recommendations, or generative experiences to their applications.',
    'Building a Developer Portfolio': 'A developer portfolio is a curated collection of projects, code samples, and professional information that demonstrates a developer’s skills and experience to potential employers or clients.',
    'Publishing Projects on GitHub': 'Publishing projects on GitHub involves creating repositories, writing clear README documentation, and sharing source code so that others can view, learn from, or contribute to the work.',
    'Writing Technical Documentation': 'Technical documentation is written material that explains how a software system works, how to use it, and how to maintain or extend it.',
    'Creating a Resume': 'A professional resume is a concise document that summarises a person’s education, skills, experience, and achievements for the purpose of seeking employment.',
    'Preparing for Interviews': 'Interview preparation includes reviewing technical concepts, practising coding problems, understanding common behavioural questions, and researching the target company.',
    'Freelancing Platforms': 'Freelancing platforms are online marketplaces that connect independent developers with clients who need software development services.',
    'Working with Clients': 'Working with clients involves clear communication, requirement gathering, setting expectations, delivering work on schedule, and maintaining professional relationships.',
    'Pricing Mobile App Projects': 'Pricing mobile app projects requires estimating the scope of work, complexity, time required, and market rates to propose a fair and sustainable fee.'
  };

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
    return '<h4>Illustrative Code Example</h4><pre style="background:#0f172a;color:#e2e8f0;padding:.9rem;border-radius:8px;overflow:auto;font-size:.82rem;line-height:1.5"><code>' + esc(C) + '</code></pre><p>Copy the example into Android Studio, run it, and observe the result. Then modify one part and predict the outcome.</p>';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'Android development';
    var def = TOPIC_DEF[name] || (name + ' is an important concept within ' + label + ' that every Android developer should understand thoroughly.');
    var code = codeFor(name);

    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Android Development · ' + esc(moduleTitle) + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + esc(name) + '</h3>' +

      '<h4>1. Definition</h4>' +
      '<p>' + esc(def) + '</p>' +

      '<h4>2. Detailed Explanation</h4>' +
      '<p>In the context of professional Android application development, <strong>' + esc(name) + '</strong> plays a central role in building reliable, maintainable, and user-friendly applications. A clear understanding of this topic enables a developer to make informed design decisions, write correct code, and avoid common pitfalls that lead to bugs or poor user experience.</p>' +
      '<p>The concept is closely related to the broader skill of <em>' + esc(label) + '</em>. Mastery of this topic supports later modules in the programme and is frequently examined in technical interviews and practical assessments.</p>' +

      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>It forms part of the foundational knowledge expected of a competent Android developer.</li>' +
      '<li>Correct application of the concept improves application quality, performance, and maintainability.</li>' +
      '<li>Employers and clients look for demonstrated understanding of such core topics.</li>' +
      '<li>It prepares you for more advanced subjects that appear later in the course.</li>' +
      '</ul>' +

      '<h4>4. Key Concepts and Sub-topics</h4>' +
      '<ul>' +
      '<li>Precise definition and scope of <em>' + esc(name) + '</em>.</li>' +
      '<li>Relationship to other components of an Android application.</li>' +
      '<li>Standard patterns and recommended practices.</li>' +
      '<li>Common variations and when each variation is appropriate.</li>' +
      '<li>Integration with Kotlin language features and Android Jetpack libraries where relevant.</li>' +
      '</ul>' +

      '<h4>5. Practical Application</h4>' +
      '<p>After studying the accompanying video lesson, you should be able to apply <strong>' + esc(name) + '</strong> in a real Android Studio project. Practice by recreating the demonstrated example, then modify it to solve a slightly different problem. Record your observations in the Notes tab.</p>' +

      (code ? '<div class="study-callout">' + code + '</div>' : '') +

      '<h4>6. Common Mistakes to Avoid</h4>' +
      '<ul>' +
      '<li>Memorising syntax without understanding the underlying purpose.</li>' +
      '<li>Copying code without testing it on an emulator or device.</li>' +
      '<li>Ignoring official documentation and relying solely on incomplete examples.</li>' +
      '<li>Skipping the practice exercises and the short quiz that follow this lesson.</li>' +
      '</ul>' +

      '<h4>7. Summary</h4>' +
      '<p><strong>' + esc(name) + '</strong> is a core topic within ' + esc(label) + '. A solid grasp of its definition, purpose, and correct usage is essential for progressing through the Complete Android App Development Program and for building professional-quality applications.</p>' +

      '<h4>8. Study Actions</h4>' +
      '<ol>' +
      '<li>Watch the video carefully and pause to examine any code shown.</li>' +
      '<li>Read this note again and write the definition in your own words.</li>' +
      '<li>Complete the two coding exercises in Android Studio.</li>' +
      '<li>Take the practice quiz that follows this lesson to confirm your understanding.</li>' +
      '</ol>' +

      '<p><strong>Module context:</strong> This lesson belongs to <em>' + esc(moduleTitle) + '</em>. Use your browser’s Print → Save as PDF if you wish to keep an offline copy of these notes.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on Project Brief</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<h4>Project Definition</h4>' +
      '<p>This project requires you to design, implement, test, and document a complete Android application that demonstrates the skills acquired in preceding modules.</p>' +
      '<h4>Objectives</h4>' +
      '<ol><li>Plan the screens, data model, and core features.</li><li>Build a polished user interface following Material Design guidelines.</li><li>Implement the required logic, local or cloud storage, and any network features.</li><li>Test thoroughly on an emulator and, if possible, a physical device.</li><li>Publish the source code to a public GitHub repository with a clear README.</li></ol>' +
      '<div class="study-callout"><strong>Deliverable:</strong> A working Android application together with its Kotlin source code on GitHub. This project forms part of your professional portfolio.</div>' +
      '</div>';
  }

  function topicQuestions(num,name){
    var bank=window.TIH_ANDROID_QUESTIONS,key='M'+num+':'+name;
    if(!bank || !bank.topics[key] || bank.topics[key].length!==4)throw new Error('Incomplete Kotlin topic '+key);
    return bank.topics[key];
  }
  function cloneQ(q){return {q:q.q,opts:q.opts.slice(),correct:q.correct,exp:q.exp};}
  function practiceQuiz(key,name,num,quizId){return {title:'Practice: '+name,moduleNum:num,questions:topicQuestions(num,name).slice(0,3).map(cloneQ)};}
  function assessmentQuiz(key,name,count,num,quizId){return {title:name,moduleNum:num,questionCount:count,questions:[]};}
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
    var key = skill;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'and-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15, num, qid);
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
        quizzes[aid] = assessmentQuiz(akey, name, count, num, aid);
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
      quizzes[pqid] = practiceQuiz(key, name, num, pqid);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the formal study notes, complete the coding exercises, then answer these questions to confirm you understood <em>' + esc(name) + '</em>.</p>';
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
      'Every content lesson has a video and formal detailed study notes with Kotlin code; ten real-world apps and an industry capstone build your portfolio, and you learn Firebase, networking, security, testing, publishing, AI tools and freelancing.',
      'Software & tools: Android Studio, Kotlin, Firebase, Git & GitHub, Postman, Figma, SQLite & Room, Google Play Console and Material Design Components. You finish with a portfolio of apps and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _androidFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.android = notes;

  window.tihApplyAndroidTopicQuizzes = function () {
    var bank = window.TIH_ANDROID_QUESTIONS, course = COURSES_DB.android;
    if (!bank || !course) throw new Error('Missing Kotlin question bank');
    var reserves = [], projects = [];
    course.modules.forEach(function (m, mi) {
      m.lessons.forEach(function (l) {
        if (!l.isQuiz) return;
        var quiz = course.quizzes[l.quizId];
        if (quiz.title.indexOf('Practice: ') !== 0) return;
        var rows = topicQuestions(mi+1, quiz.title.slice(10));
        quiz.questions = rows.slice(0,3).map(cloneQ);
        quiz.moduleNum = mi+1;
        reserves.push(rows[3]);
      });
    });
    projects = bank.exams.slice();
    var used = {};
    function take(pool, count) {
      var buckets = {}, out = [], nums = [];
      pool.forEach(function(q) { if (used[q.q]) return; if(!buckets[q.module]) { buckets[q.module]=[]; nums.push(q.module); } buckets[q.module].push(q); });
      nums.sort(function(a,b){return a-b;});
      var changed = true;
      while(out.length < count && changed) {
        changed = false;
        nums.forEach(function(n) {
          if(out.length >= count || !buckets[n].length) return;
          var q = buckets[n].shift(); used[q.q]=true; out.push(cloneQ(q)); changed=true;
        });
      }
      if(out.length !== count) throw new Error('Exhausted Kotlin assessment pool');
      return out;
    }
    var papers = Object.keys(course.quizzes).map(function(k){return course.quizzes[k];}).filter(function(q){return q.title.indexOf('Practice: ')!==0;});
    var subjects={'Kotlin Assessment':[2],'Android UI Assessment':[4],'Database Assessment':[7],'Firebase Assessment':[8],'API Assessment':[9]};
    papers.filter(function(q){return !!subjects[q.title];}).forEach(function(q){
      var nums=subjects[q.title], extra=projects.filter(function(r){return nums.indexOf(r.module)>=0;});
      var count=q.questionCount-extra.length;
      q.questions=take(reserves.filter(function(r){return nums.indexOf(r.module)>=0;}),count).concat(take(extra,extra.length));
    });
    ['Midterm Examination','Final Examination','Complete App Evaluation','Portfolio Review','Graduation Assessment'].forEach(function(title){
      var q=papers.filter(function(q){return q.title===title;})[0];
      if(!q)throw new Error('Missing Kotlin assessment '+title);
      var pool= title==='Complete App Evaluation'||title==='Portfolio Review' ? projects.filter(function(r){return r.module>=17;}) : reserves.filter(function(r){return r.module<=(title==='Midterm Examination'?8:16);});
      // Keep a question from every first-half module for the final's coverage.
      if(title==='Midterm Examination'){
        var protectedItems={};
        for(var m=1;m<=8;m++){
          var remaining=reserves.filter(function(r){return r.module===m&&!used[r.q];});
          if(!remaining.length)throw new Error('No final reserve for module '+m);
          protectedItems[remaining[remaining.length-1].q]=true;
        }
        pool=pool.filter(function(r){return !protectedItems[r.q];});
      }
      q.questions=take(pool,q.questionCount);
    });
  };
  window.tihApplyAndroidTopicQuizzes();

  if (typeof console !== 'undefined' && console.log) {
    console.log('[ANDROID] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
