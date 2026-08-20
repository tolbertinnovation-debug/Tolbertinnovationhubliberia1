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

  /* ========== LARGE UNIQUE QUESTION BANKS ========== */
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
    var extra = BANK.general.concat(BANK.kotlin || [], BANK.ui || []);
    var combined = pool.concat(extra);
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

  /* Authored per-topic questions (android-topic-quizzes.js) take priority over
     the pools above. pickQuestions() draws from a shared pool per key, so the
     146 quizzes held only 78 distinct questions between them and one question
     -- "Which language is recommended by Google for modern Android
     development?" -- was asked 22 times. */
  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ_plain = null, TQ_mod = null;
  function buildTopicIndex() {
    if (TQ_plain) return;
    TQ_plain = {}; TQ_mod = {};
    var src = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['android']) || {};
    Object.keys(src).forEach(function (k) {
      var m = String(k).match(/^\s*M(\d+)\s*[:|]\s*(.+)$/i);
      if (m) TQ_mod[m[1] + '|' + normQ(m[2])] = src[k];
      else TQ_plain[normQ(k)] = src[k];
    });
  }
  function topicQuestions(moduleNum, name) {
    buildTopicIndex();
    var arr = TQ_mod[moduleNum + '|' + normQ(name)] || TQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }

  var practiceIndex = {};   // quizId -> { module, name }
  var assessIndex = [];     // { quizId, module, count, scope }
  function practiceQuiz(key, name, moduleNum, quizId) {
    if (quizId) practiceIndex[quizId] = { module: moduleNum, name: name };
    var authored = topicQuestions(moduleNum, name);
    if (authored) return { title: 'Practice: ' + name, moduleNum: 1, questions: authored };
    return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3, name).map(cloneQ) };
  }
  function assessmentQuiz(key, name, count, moduleNum, quizId) {
    if (quizId) assessIndex.push({ quizId: quizId, module: moduleNum, count: count,
                                   scope: (moduleNum >= 17 ? 'course' : 'module') });
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

  /* android-topic-quizzes.js is fetched only when this course is open, so it can
     land after this builder has run. Re-apply then: the player holds a reference
     to this same quizzes object and reads it afresh each time a quiz opens. */
  window.tihApplyAndroidTopicQuizzes = function () {
    TQ_plain = null; TQ_mod = null;
    var applied = 0;
    var byModule = {};
    Object.keys(practiceIndex).forEach(function (quizId) {
      var meta = practiceIndex[quizId];
      var authored = topicQuestions(meta.module, meta.name);
      if (!authored) return;
      if (quizzes[quizId]) { quizzes[quizId].questions = authored; applied += 1; }
      (byModule[meta.module] = byModule[meta.module] || []).push(authored);
    });
    function interleave(groups) {
      var out = [], depth = 0, added = true;
      while (added) {
        added = false;
        for (var i = 0; i < groups.length; i++) {
          if (groups[i][depth]) { out.push(groups[i][depth]); added = true; }
        }
        depth += 1;
      }
      return out;
    }
    var moduleQs = {};
    Object.keys(byModule).forEach(function (m) { moduleQs[m] = interleave(byModule[m]); });
    var moduleNums = Object.keys(moduleQs).sort(function (a, b) { return a - b; });
    var coursePool = interleave(moduleNums.map(function (m) { return moduleQs[m]; }));
    var cursor = 0;
    assessIndex.forEach(function (a) {
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var picked = [];
      if (a.scope === 'module' && moduleQs[a.module] && moduleQs[a.module].length >= a.count) {
        picked = moduleQs[a.module].slice(0, a.count);
      } else if (coursePool.length) {
        for (var i = 0; i < a.count; i++) picked.push(coursePool[(cursor + i) % coursePool.length]);
        cursor = (cursor + a.count) % coursePool.length;
      }
      if (picked.length === a.count) { quiz.questions = picked.map(cloneQ); applied += 1; }
    });
    return applied;
  };

  if (typeof console !== 'undefined' && console.log) {
    console.log('[ANDROID] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
