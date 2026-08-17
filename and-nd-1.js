/* TIH Android formal notes — Modules 1–3 */
(function(){
if(typeof window==='undefined')return;
window.TIH_AND_NOTES_DATA=window.TIH_AND_NOTES_DATA||[];
var D=window.TIH_AND_NOTES_DATA;
function a(t,m,d,b){D.push([t,m,d,b]);}

a("Welcome to the Course","Module 1: Course Orientation","The Complete Android App Development Program (Kotlin) is a structured path from beginner programming to publishing real Android apps on Google Play.","<p>You will learn Kotlin, Android Studio, UI, data, Firebase, networking, security, testing, publishing, and portfolio-building through hands-on projects.</p><h4>Key points</h4><ul><li>Build every example in Android Studio—watching alone is not enough.</li><li>Push projects to GitHub for your portfolio.</li><li>Print notes and code for offline revision.</li></ul>");

a("What is Android App Development?","Module 1: Course Orientation","Android app development is creating software that runs on Android devices using the Android SDK, a programming language (Kotlin preferred), and tools such as Android Studio.","<p>Apps are packaged as APK/AAB files and distributed through Google Play or other channels. Development covers UI, logic, data, networking, and device features.</p>");

a("Career Opportunities in Android Development","Module 1: Course Orientation","Android development careers include mobile developer roles in companies, freelance app projects, startup product teams, and related paths such as QA for mobile and technical support for app products.","<ul><li>Junior/mid Android developer</li><li>Freelance mobile contractor</li><li>Cross-platform or product engineer with Android focus</li></ul>");

a("Android Ecosystem Overview","Module 1: Course Orientation","The Android ecosystem includes the OS versions, device form factors, Google Play distribution, Jetpack libraries, and the developer tooling centred on Android Studio.","<p>Apps must handle fragmentation (screen sizes, OS versions) with modern support libraries and careful testing.</p>");

a("Installing Android Studio","Module 1: Course Orientation","Installing Android Studio means downloading Google’s official IDE, installing the Android SDK components, and verifying that the IDE can create and run a sample project.","<p>Allow time for SDK downloads. Stable internet and disk space are required.</p>");

a("Setting Up the Development Environment","Module 1: Course Orientation","Setting up the development environment configures JDK/SDK paths, emulator images, and any required plugins so projects build and run reliably.","<p>Confirm SDK location, create a virtual device, and run the default template app once before coding lessons.</p>");

a("Creating Your First Android Project","Module 1: Course Orientation","Creating your first Android project uses the New Project wizard to generate a minimal app with a main activity, layout, and Gradle configuration.","<p>Choose Empty Activity (or similar), set package name carefully, and run on the emulator to confirm the toolchain works.</p>");

a("Course Roadmap","Module 1: Course Orientation","The course roadmap sequences Kotlin foundations, Studio skills, UI and interaction, navigation, storage, Firebase, APIs, media, Material Design, security, testing, publishing, AI tools, career skills, ten apps, and a capstone.","<p>Each module feeds the next; projects consolidate skills into portfolio pieces.</p>");

a("Final Capstone Project","Module 1: Course Orientation","The final capstone is a full app that integrates UI, data, auth, and (where relevant) networking—planned, built, tested, and presented as evidence of job-ready skill.","<p>Treat every earlier project as practice for this deliverable.</p>");

a("Introduction to Kotlin","Module 2: Programming Fundamentals with Kotlin","Kotlin is a modern, statically typed language that runs on the JVM and is the preferred language for Android development—concise, null-safe by design, and fully interoperable with Java.","<h4>Why Kotlin</h4><ul><li>Less boilerplate than classic Java</li><li>Null safety reduces common crashes</li><li>Official Google recommendation for Android</li></ul>");

a("Variables and Data Types","Module 2: Programming Fundamentals with Kotlin","Variables store values; Kotlin uses <code>val</code> (read-only) and <code>var</code> (mutable). Common types include Int, Double, Boolean, and String.","<pre style=\"background:#0f172a;color:#e2e8f0;padding:.8rem;border-radius:8px;overflow:auto\"><code>val name = \"TIH\"\nvar count = 0\ncount += 1</code></pre>");

a("Operators","Module 2: Programming Fundamentals with Kotlin","Operators perform arithmetic, comparison, and logical operations on values—essential for conditions, calculations, and control flow.","<p>Examples: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>==</code>, <code>!=</code>, <code>&&</code>, <code>||</code>.</p>");

a("User Input","Module 2: Programming Fundamentals with Kotlin","User input in console Kotlin is often read via <code>readLine()</code>; in Android apps, input comes from UI widgets such as EditText.","<p>Always validate and convert input (e.g., string to Int) before using it in logic.</p>");

a("Conditional Statements","Module 2: Programming Fundamentals with Kotlin","Conditional statements branch program flow based on Boolean conditions—using <code>if</code>/<code>else</code> and Kotlin’s powerful <code>when</code> expression.","<pre style=\"background:#0f172a;color:#e2e8f0;padding:.8rem;border-radius:8px;overflow:auto\"><code>val grade = when {\n  score >= 70 -> \"A\"\n  score >= 50 -> \"B\"\n  else -> \"F\"\n}</code></pre>");

a("Loops","Module 2: Programming Fundamentals with Kotlin","Loops repeat a block of code—<code>for</code>, <code>while</code>, and <code>do-while</code>—to process ranges, collections, or conditions.","<p>Prefer clear ranges and collection iteration; avoid infinite loops without an exit condition.</p>");

a("Functions","Module 2: Programming Fundamentals with Kotlin","Functions encapsulate reusable logic. In Kotlin they are declared with <code>fun</code>, optional parameters, and an optional return type.","<pre style=\"background:#0f172a;color:#e2e8f0;padding:.8rem;border-radius:8px;overflow:auto\"><code>fun add(a: Int, b: Int): Int = a + b</code></pre>");

a("Arrays","Module 2: Programming Fundamentals with Kotlin","Arrays store fixed-size sequences of elements of a given type, accessed by index.","<p>For most app data that grows or shrinks, prefer Lists over raw arrays.</p>");

a("Lists","Module 2: Programming Fundamentals with Kotlin","Lists are ordered collections. <code>listOf()</code> is read-only; <code>mutableListOf()</code> allows add/remove operations.","<p>Lists are the everyday collection for most Android app logic.</p>");

a("Object-Oriented Programming Basics","Module 2: Programming Fundamentals with Kotlin","Object-oriented programming models software as interacting objects that combine state (properties) and behaviour (methods), organised through classes and inheritance where useful.","<p>Android UI and many libraries are built around classes and objects.</p>");

a("Classes and Objects","Module 2: Programming Fundamentals with Kotlin","A class is a blueprint; an object is an instance of that class. Kotlin supports primary constructors and concise property declarations.","<pre style=\"background:#0f172a;color:#e2e8f0;padding:.8rem;border-radius:8px;overflow:auto\"><code>class Student(val name: String, var score: Int)\nval s = Student(\"Ama\", 72)</code></pre>");

a("Practice Exercises","Module 2: Programming Fundamentals with Kotlin","Practice exercises reinforce Kotlin syntax and problem-solving by writing small programs you run and debug yourself.","<p>Type code by hand; do not only copy-paste. Predict output before running.</p>");

a("Android Studio Interface","Module 3: Android Studio Basics","The Android Studio interface is the IDE workspace—editor, project tool window, toolbar, emulator controls, and tool windows such as Logcat and Build.","<p>Learn where to open layouts, Kotlin files, Gradle scripts, and the device manager.</p>");

a("Project Structure","Module 3: Android Studio Basics","Project structure organises manifests, Java/Kotlin sources, resources (layouts, drawables, values), and Gradle modules that define how the app is built.","<p>Know <code>app/src/main</code>, <code>res/layout</code>, and <code>AndroidManifest.xml</code>.</p>");

a("Emulator Setup","Module 3: Android Studio Basics","Emulator setup creates a virtual Android device (AVD) with a system image so you can run apps without a physical phone.","<p>Choose a recent API level your machine can run smoothly; enable hardware acceleration if available.</p>");

a("Running Your First App","Module 3: Android Studio Basics","Running your first app builds the project and installs it on an emulator or device, launching the main activity.","<p>Use the green Run button; watch Build and Logcat for errors.</p>");

a("Gradle Basics","Module 3: Android Studio Basics","Gradle is the build system that compiles code, merges resources, and manages dependencies declared in <code>build.gradle</code> files.","<p>When you add libraries, sync Gradle. Read error messages carefully when sync fails.</p>");

a("Android Manifest","Module 3: Android Studio Basics","The Android Manifest declares the app’s components, permissions, and essential metadata required by the system.","<p>Activities, services, and many permissions are registered here.</p>");

a("Logcat","Module 3: Android Studio Basics","Logcat displays system and app log messages—essential for debugging crashes, print statements, and runtime behaviour.","<p>Filter by package name. Use <code>Log.d</code> / <code>Log.e</code> thoughtfully; remove noisy logs before release.</p>");

a("Debugging Basics","Module 3: Android Studio Basics","Debugging basics include breakpoints, stepping through code, inspecting variables, and reading stack traces when the app crashes.","<p>Reproduce the bug, isolate the cause, fix, and retest.</p>");

a("Project Organization","Module 3: Android Studio Basics","Project organization keeps packages, resources, and modules tidy so features remain findable as the app grows.","<p>Group by feature or layer; name resources consistently.</p>");

a("Best Practices","Module 3: Android Studio Basics","Best practices in Studio include version control, meaningful commit messages, avoiding hard-coded secrets, and testing on more than one API level when possible.","<p>Small, frequent builds beat rare large merges of broken code.</p>");
})();
