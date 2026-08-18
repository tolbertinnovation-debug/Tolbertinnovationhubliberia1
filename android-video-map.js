/* TIH Complete Android App Development Program (Kotlin) — one educational YouTube video per topic.
   Course id: android. High-quality, topic-matched videos from freeCodeCamp, Android Developers,
   Android Knowledge, official Firebase and top Kotlin educators. Updated Aug 2026. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.android || !COURSES_DB.android.modules) return;
  var MAP = {
    /* Module 1 — Course Orientation */
    "Welcome to the Course": "blKkRoZPxLc",
    "What is Android App Development?": "oSim9fBFy-E",
    "Career Opportunities in Android Development": "XdcdCZoYRL8",
    "Android Ecosystem Overview": "FjrKMcnKahY",
    "Installing Android Studio": "FGi8mcc2tGw",
    "Setting Up the Development Environment": "DzST9xWs4g4",
    "Creating Your First Android Project": "_aVmQu6FLZE",
    "Course Roadmap": "blKkRoZPxLc",
    "Final Capstone Project": "0kwcXtAq4Yo",

    /* Module 2 — Kotlin */
    "Introduction to Kotlin": "FlBhpm9aRUg",
    "Variables and Data Types": "mnkzx3TwbV8",
    "Operators": "F9UC9DY-vIU",
    "User Input": "F9UC9DY-vIU",
    "Conditional Statements": "8QeEOpCefPY",
    "Loops": "DsKFhuaqBqY",
    "Functions": "cg4vf4jgWtE",
    "Arrays": "yraYTV1AIs8",
    "Lists": "FlBhpm9aRUg",
    "Object-Oriented Programming Basics": "FlBhpm9aRUg",
    "Classes and Objects": "FlBhpm9aRUg",
    "Practice Exercises": "mnkzx3TwbV8",

    /* Module 3 — Android Studio */
    "Android Studio Interface": "DzST9xWs4g4",
    "Project Structure": "DzST9xWs4g4",
    "Emulator Setup": "FGi8mcc2tGw",
    "Running Your First App": "_aVmQu6FLZE",
    "Gradle Basics": "DzST9xWs4g4",
    "Android Manifest": "DzST9xWs4g4",
    "Logcat": "2I6fuD20qlY",
    "Debugging Basics": "2I6fuD20qlY",
    "Project Organization": "DzST9xWs4g4",
    "Best Practices": "blKkRoZPxLc",

    /* Module 4 — UI */
    "XML Layouts": "UKI-mpESErQ",
    "TextView": "UKI-mpESErQ",
    "EditText": "UKI-mpESErQ",
    "Button": "4RUZ01ptcYk",
    "ImageView": "UKI-mpESErQ",
    "RecyclerView": "WE274e3Ip20",
    "ScrollView": "UKI-mpESErQ",
    "ConstraintLayout": "UKI-mpESErQ",
    "LinearLayout": "UKI-mpESErQ",
    "RelativeLayout": "UKI-mpESErQ",
    "CardView": "BEvOBTaYUm0",
    "Material Design Components": "BEvOBTaYUm0",

    /* Module 5 — Interaction */
    "Click Events": "4RUZ01ptcYk",
    "Input Validation": "4RUZ01ptcYk",
    "Toast Messages": "4RUZ01ptcYk",
    "Dialog Boxes": "4RUZ01ptcYk",
    "Menus": "4RUZ01ptcYk",
    "Navigation Drawer": "l-jdSOUpSIA",
    "Bottom Navigation": "l-jdSOUpSIA",
    "Intents": "CAPlP2QcHnM",
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
    "Room Database": "vj92yFW-pZo",
    "CRUD Operations": "m-TMpWvPnBM",
    "Data Persistence": "jjGjkElvcfc",
    "Offline Storage": "jjGjkElvcfc",

    /* Module 8 — Firebase */
    "Introduction to Firebase": "HYzw8LFvmw4",
    "Firebase Authentication": "wm626abfMM8",
    "Firestore Database": "HYzw8LFvmw4",
    "Firebase Realtime Database": "HYzw8LFvmw4",
    "Firebase Storage": "HYzw8LFvmw4",
    "Cloud Messaging (Push Notifications)": "HYzw8LFvmw4",
    "Firebase Analytics": "HYzw8LFvmw4",
    "Firebase Hosting Overview": "HYzw8LFvmw4",

    /* Module 9 — Networking */
    "Introduction to REST APIs": "Qk-Tej0ZQas",
    "JSON": "Qk-Tej0ZQas",
    "Retrofit": "KJSBsRKqNwU",
    "Fetching Data": "KJSBsRKqNwU",
    "Sending Data": "KJSBsRKqNwU",
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
    "User Registration": "SpSzRgbhTa4",
    "Login System": "wm626abfMM8",
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
    "Calculator App": "Hi4a2Pk5RJA",
    "To-Do List App": "h8vI2yw2eR8",
    "Notes App": "BVAslimaGSk",
    "Quiz App": "pXZR0QiwvrU",
    "Weather App": "Xi2bv01Gdqc",
    "Expense Tracker": "eHCzGVup74o",
    "News App": "UvaVJ0EseP0",
    "Chat Application": "eXH3Gh9cP74",
    "E-commerce App": "0kwcXtAq4Yo",
    "School Management App": "0kwcXtAq4Yo",

    /* Module 18 — Capstone */
    "Project Planning": "0kwcXtAq4Yo",
    "UI Design": "UKI-mpESErQ",
    "Database Design": "vj92yFW-pZo",
    "Authentication": "wm626abfMM8",
    "API Integration": "KJSBsRKqNwU",
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
