/* TIH Complete Android App Development Program (Kotlin) — one educational YouTube video per topic.
   Course id: android. Practical Kotlin + Android Studio education. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.android || !COURSES_DB.android.modules) return;
  var MAP = {
    /* Module 1 — Course Orientation */
    "Welcome to the Course": "FjrKMcnKahY",
    "What is Android App Development?": "FjrKMcnKahY",
    "Career Opportunities in Android Development": "FjrKMcnKahY",
    "Android Ecosystem Overview": "FjrKMcnKahY",
    "Installing Android Studio": "DzST9xWs4g4",
    "Setting Up the Development Environment": "DzST9xWs4g4",
    "Creating Your First Android Project": "DzST9xWs4g4",
    "Course Roadmap": "FjrKMcnKahY",
    "Final Capstone Project": "0kwcXtAq4Yo",

    /* Module 2 — Kotlin */
    "Introduction to Kotlin": "F9UC9DY-vIU",
    "Variables and Data Types": "F9UC9DY-vIU",
    "Operators": "F9UC9DY-vIU",
    "User Input": "F9UC9DY-vIU",
    "Conditional Statements": "F9UC9DY-vIU",
    "Loops": "F9UC9DY-vIU",
    "Functions": "F9UC9DY-vIU",
    "Arrays": "F9UC9DY-vIU",
    "Lists": "F9UC9DY-vIU",
    "Object-Oriented Programming Basics": "F9UC9DY-vIU",
    "Classes and Objects": "F9UC9DY-vIU",
    "Practice Exercises": "F9UC9DY-vIU",

    /* Module 3 — Android Studio */
    "Android Studio Interface": "DzST9xWs4g4",
    "Project Structure": "DzST9xWs4g4",
    "Emulator Setup": "DzST9xWs4g4",
    "Running Your First App": "DzST9xWs4g4",
    "Gradle Basics": "DzST9xWs4g4",
    "Android Manifest": "DzST9xWs4g4",
    "Logcat": "DzST9xWs4g4",
    "Debugging Basics": "DzST9xWs4g4",
    "Project Organization": "DzST9xWs4g4",
    "Best Practices": "DzST9xWs4g4",

    /* Module 4 — UI */
    "XML Layouts": "UKI-mpESErQ",
    "TextView": "UKI-mpESErQ",
    "EditText": "UKI-mpESErQ",
    "Button": "UKI-mpESErQ",
    "ImageView": "UKI-mpESErQ",
    "RecyclerView": "UKI-mpESErQ",
    "ScrollView": "UKI-mpESErQ",
    "ConstraintLayout": "UKI-mpESErQ",
    "LinearLayout": "UKI-mpESErQ",
    "RelativeLayout": "UKI-mpESErQ",
    "CardView": "UKI-mpESErQ",
    "Material Design Components": "BEvOBTaYUm0",

    /* Module 5 — Interaction */
    "Click Events": "4RUZ01ptcYk",
    "Input Validation": "4RUZ01ptcYk",
    "Toast Messages": "4RUZ01ptcYk",
    "Dialog Boxes": "4RUZ01ptcYk",
    "Menus": "4RUZ01ptcYk",
    "Navigation Drawer": "l-jdSOUpSIA",
    "Bottom Navigation": "l-jdSOUpSIA",
    "Intents": "4RUZ01ptcYk",
    "Activities": "4RUZ01ptcYk",
    "Fragments": "l-jdSOUpSIA",

    /* Module 6 — Navigation */
    "Activity Lifecycle": "l-jdSOUpSIA",
    "Fragment Lifecycle": "l-jdSOUpSIA",
    "Navigation Component": "l-jdSOUpSIA",
    "Passing Data Between Screens": "l-jdSOUpSIA",
    "Deep Links": "l-jdSOUpSIA",
    "Back Stack Management": "l-jdSOUpSIA",
    "Navigation Best Practices": "l-jdSOUpSIA",

    /* Module 7 — Data Storage */
    "SharedPreferences": "jjGjkElvcfc",
    "Internal Storage": "jjGjkElvcfc",
    "External Storage": "jjGjkElvcfc",
    "SQLite Database": "jjGjkElvcfc",
    "Room Database": "jjGjkElvcfc",
    "CRUD Operations": "jjGjkElvcfc",
    "Data Persistence": "jjGjkElvcfc",
    "Offline Storage": "jjGjkElvcfc",

    /* Module 8 — Firebase */
    "Introduction to Firebase": "HYzw8LFvmw4",
    "Firebase Authentication": "HYzw8LFvmw4",
    "Firestore Database": "HYzw8LFvmw4",
    "Firebase Realtime Database": "HYzw8LFvmw4",
    "Firebase Storage": "HYzw8LFvmw4",
    "Cloud Messaging (Push Notifications)": "HYzw8LFvmw4",
    "Firebase Analytics": "HYzw8LFvmw4",
    "Firebase Hosting Overview": "HYzw8LFvmw4",

    /* Module 9 — Networking */
    "Introduction to REST APIs": "Qk-Tej0ZQas",
    "JSON": "Qk-Tej0ZQas",
    "Retrofit": "Qk-Tej0ZQas",
    "Fetching Data": "Qk-Tej0ZQas",
    "Sending Data": "Qk-Tej0ZQas",
    "Error Handling": "Qk-Tej0ZQas",
    "API Authentication": "Qk-Tej0ZQas",
    "Consuming Third-Party APIs": "Qk-Tej0ZQas",

    /* Module 10 — Media */
    "Camera Integration": "ondCeqlAwEI",
    "Photo Capture": "ondCeqlAwEI",
    "Image Gallery": "ondCeqlAwEI",
    "Audio Playback": "ondCeqlAwEI",
    "Video Playback": "ondCeqlAwEI",
    "GPS & Location Services": "ondCeqlAwEI",
    "Maps Integration": "ondCeqlAwEI",
    "Sensors": "ondCeqlAwEI",
    "Permissions Management": "ondCeqlAwEI",

    /* Module 11 — Material Design */
    "Material Design Principles": "BEvOBTaYUm0",
    "Themes": "BEvOBTaYUm0",
    "Colors": "BEvOBTaYUm0",
    "Typography": "BEvOBTaYUm0",
    "Buttons": "BEvOBTaYUm0",
    "Cards": "BEvOBTaYUm0",
    "Animations": "BEvOBTaYUm0",
    "Responsive Layouts": "BEvOBTaYUm0",
    "Dark Mode": "BEvOBTaYUm0",

    /* Module 12 — Auth & Security */
    "User Registration": "dsst_TKgClY",
    "Login System": "dsst_TKgClY",
    "Password Security": "dsst_TKgClY",
    "Biometric Authentication": "dsst_TKgClY",
    "Secure Data Storage": "dsst_TKgClY",
    "App Permissions": "ondCeqlAwEI",
    "Security Best Practices": "dsst_TKgClY",

    /* Module 13 — Testing */
    "Debugging Apps": "2I6fuD20qlY",
    "Unit Testing": "2I6fuD20qlY",
    "UI Testing": "2I6fuD20qlY",
    "Performance Testing": "2I6fuD20qlY",
    "Crash Analysis": "2I6fuD20qlY",
    "Memory Management": "2I6fuD20qlY",
    "App Optimization": "2I6fuD20qlY",

    /* Module 14 — Publishing */
    "Preparing for Release": "WOKrelHPefc",
    "App Signing": "WOKrelHPefc",
    "Versioning": "WOKrelHPefc",
    "Creating App Icons": "WOKrelHPefc",
    "Feature Graphics": "WOKrelHPefc",
    "Screenshots": "WOKrelHPefc",
    "Writing App Descriptions": "WOKrelHPefc",
    "Publishing to Google Play": "WOKrelHPefc",
    "App Updates": "WOKrelHPefc",

    /* Module 15 — AI Tools */
    "Using ChatGPT for Coding": "RKbmqSRc0z0",
    "GitHub Copilot": "RKbmqSRc0z0",
    "Firebase AI Features": "HYzw8LFvmw4",
    "AI Code Debugging": "RKbmqSRc0z0",
    "Productivity Tools": "RKbmqSRc0z0",
    "AI-Assisted UI Design": "RKbmqSRc0z0",

    /* Module 16 — Career */
    "Building a Developer Portfolio": "XdcdCZoYRL8",
    "Publishing Projects on GitHub": "XdcdCZoYRL8",
    "Writing Technical Documentation": "XdcdCZoYRL8",
    "Creating a Resume": "XdcdCZoYRL8",
    "Preparing for Interviews": "XdcdCZoYRL8",
    "Freelancing Platforms": "XdcdCZoYRL8",
    "Working with Clients": "XdcdCZoYRL8",
    "Pricing Mobile App Projects": "XdcdCZoYRL8",

    /* Module 17 — Real-World Projects */
    "Calculator App": "0kwcXtAq4Yo",
    "To-Do List App": "0kwcXtAq4Yo",
    "Notes App": "0kwcXtAq4Yo",
    "Quiz App": "0kwcXtAq4Yo",
    "Weather App": "Qk-Tej0ZQas",
    "Expense Tracker": "jjGjkElvcfc",
    "News App": "Qk-Tej0ZQas",
    "Chat Application": "HYzw8LFvmw4",
    "E-commerce App": "0kwcXtAq4Yo",
    "School Management App": "0kwcXtAq4Yo",

    /* Module 18 — Capstone */
    "Project Planning": "0kwcXtAq4Yo",
    "UI Design": "UKI-mpESErQ",
    "Database Design": "jjGjkElvcfc",
    "Authentication": "HYzw8LFvmw4",
    "API Integration": "Qk-Tej0ZQas",
    "Testing": "2I6fuD20qlY",
    "Deployment": "WOKrelHPefc",
    "Final Presentation": "XdcdCZoYRL8"
  };

  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project|🛠️|📝|🧪|🏆):\s*/i, '')
      .replace(/^🛠️\s*/, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  COURSES_DB.android.modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      if (MAP[key]) { lesson.v = MAP[key]; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[ANDROID videos] applied specific video to ' + applied + ' lessons');
  }
})();
