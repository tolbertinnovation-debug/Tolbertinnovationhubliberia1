/* TIH — Authored per-topic quiz questions for the Android app development course.
   android-curriculum.js prefers these over its generic skill pools, so every
   topic gets its own three questions rather than the first three of a shared
   bank. Keyed by topic title, matched case- and punctuation-insensitively. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['android'] = {
  "Welcome to the Course": [
    {"q": "Which language does this course use for Android development?", "opts": ["Kotlin", "Swift", "Python", "Java"], "correct": 0, "exp": "Kotlin has been Google's recommended language for Android since 2019."},
    {"q": "What is Android Studio?", "opts": ["A phone model", "The official Android development environment", "A design tool", "An app store"], "correct": 1, "exp": "Android Studio is the official IDE for building Android applications."},
    {"q": "Why do Modules 17 and 18 matter beyond the certificate?", "opts": ["They replace the quizzes", "They are the shortest modules", "They produce the portfolio a client or employer will look at", "They are optional"], "correct": 2, "exp": "Completed apps demonstrate ability more directly than a certificate does."}
  ],
  "What is Android App Development?": [
    {"q": "What is Android built on?", "opts": ["iOS", "A proprietary kernel with no base", "The Windows kernel", "The Linux kernel"], "correct": 3, "exp": "Android is an open-source OS built on the Linux kernel."},
    {"q": "What does 'native' Android development mean?", "opts": ["Building with Kotlin or Java for Android directly", "Using a web browser", "Writing in Swift", "Building only for one device"], "correct": 0, "exp": "Native development targets Android directly in Kotlin or Java rather than through a cross-platform layer."},
    {"q": "Why does device variety matter when building an app?", "opts": ["It affects the app's price", "The app must work on older, smaller and slower devices too", "It changes the language used", "It only affects the icon"], "correct": 1, "exp": "Android runs on an enormous range of hardware and OS versions, which the app has to accommodate."}
  ],
  "Career Opportunities in Android Development": [
    {"q": "Why is freelancing often the most accessible entry route?", "opts": ["It is the only remote option", "It pays the most", "It needs no relocation and clients judge the portfolio", "It requires no skill"], "correct": 2, "exp": "Remote freelance clients assess demonstrable work rather than location or local credentials."},
    {"q": "What do employers most commonly ask to see?", "opts": ["University transcripts", "Years of attendance", "Certificates alone", "Published apps and readable code"], "correct": 3, "exp": "Demonstrable working software is the strongest evidence of ability."},
    {"q": "Which is a common first freelance job?", "opts": ["Fixing, updating or re-publishing an existing app", "Designing a logo", "Writing documentation only", "Building a large app from scratch"], "correct": 0, "exp": "Maintenance and update work on existing apps is frequent and accessible entry-level work."}
  ],
  "Android Ecosystem Overview": [
    {"q": "What does minSdk specify?", "opts": ["The newest Android version supported", "The oldest Android version the app supports", "The app's file size", "The Play Store category"], "correct": 1, "exp": "minSdk sets the lowest API level, and therefore the oldest devices, the app will install on."},
    {"q": "What does Firebase provide?", "opts": ["A design system", "A phone operating system", "Backend services such as database, auth and storage", "A programming language"], "correct": 2, "exp": "Firebase supplies managed backend services so you need not run your own servers."},
    {"q": "What is the risk of setting minSdk too high?", "opts": ["The app cannot be published", "It increases file size", "The app becomes slower", "It excludes users on older devices"], "correct": 3, "exp": "A high minimum locks out older phones, which are common in many markets."}
  ],
  "Installing Android Studio": [
    {"q": "Where should Android Studio be downloaded from?", "opts": ["developer.android.com", "The Play Store", "A torrent", "Any download site"], "correct": 0, "exp": "Only the official site guarantees an unmodified installer and the correct bundled SDK."},
    {"q": "What is the better option on a 4 GB RAM machine?", "opts": ["Use the emulator anyway", "Test on a physical phone over USB", "Reduce the screen resolution", "Use an older Android Studio"], "correct": 1, "exp": "A real device avoids the emulator's substantial memory cost and runs faster."},
    {"q": "What does the emulator require from the host machine?", "opts": ["A Google account", "A second monitor", "Hardware virtualisation enabled", "An internet connection at all times"], "correct": 2, "exp": "The Android emulator relies on hardware virtualisation support being enabled."}
  ],
  "Setting Up the Development Environment": [
    {"q": "How do you enable Developer Options on an Android phone?", "opts": ["Call the manufacturer", "Factory reset the device", "Install an app", "Tap Build Number seven times in Settings"], "correct": 3, "exp": "Repeatedly tapping Build Number unlocks Developer Options, where USB debugging lives."},
    {"q": "What must complete before a project will build?", "opts": ["Gradle sync", "A Play Store upload", "A device factory reset", "The emulator boot"], "correct": 0, "exp": "Gradle sync resolves dependencies and configures the build; nothing compiles until it finishes."},
    {"q": "What does the SDK Manager do?", "opts": ["Manages your apps on the Play Store", "Installs Android platforms and build tools", "Creates emulators", "Debugs running code"], "correct": 1, "exp": "The SDK Manager handles platform versions and build tooling; Device Manager handles emulators."}
  ],
  "Course Roadmap": [
    {"q": "Why does the course teach Kotlin before the user interface?", "opts": ["It matches the Play Store order", "Kotlin is easier", "Interface code is Kotlin code, so the language comes first", "The UI module is optional"], "correct": 2, "exp": "Layouts are wired up in Kotlin, so the language is a prerequisite rather than a parallel topic."},
    {"q": "In what order does the course cover data?", "opts": ["Firebase only", "Networking only", "Networking, then Firebase, then local storage", "Local storage, then Firebase, then networking"], "correct": 3, "exp": "The course moves from local storage outward to remote services."},
    {"q": "What do Modules 17 and 18 consist of?", "opts": ["Eleven portfolio apps that reuse earlier material", "Certification exams only", "Optional reading", "Theory revision"], "correct": 0, "exp": "Those modules are the real-world projects and capstone that form the portfolio."}
  ],
  "Introduction to Kotlin": [
    {"q": "What is Kotlin's headline safety feature?", "opts": ["Automatic memory management", "Null safety enforced by the type system", "Built-in encryption", "Automatic testing"], "correct": 1, "exp": "The type system separates nullable from non-nullable types, catching null errors at compile time."},
    {"q": "Can Kotlin and Java code coexist in one project?", "opts": ["Only with a converter", "No, never", "Yes, they interoperate fully", "Only in separate modules"], "correct": 2, "exp": "Kotlin is fully interoperable with Java, which is how existing projects migrate gradually."},
    {"q": "What does 'String?' mean in Kotlin?", "opts": ["An uninitialised string", "A string constant", "A string that must be non-empty", "A string that may be null"], "correct": 3, "exp": "The question mark marks the type as nullable, requiring explicit handling before use."}
  ],
  "Variables and Data Types": [
    {"q": "What is the difference between val and var?", "opts": ["val is read-only; var can be reassigned", "var is for numbers only", "There is no difference", "val is faster"], "correct": 0, "exp": "val creates an unchangeable reference; var allows reassignment."},
    {"q": "Is 'val list = mutableListOf(1,2); list.add(3)' legal?", "opts": ["No, val forbids it", "Yes, val prevents reassignment but not modifying contents", "Only for Int lists", "Only inside a function"], "correct": 1, "exp": "val fixes the reference, not the mutability of the object it points to."},
    {"q": "How do you insert a variable into a string in Kotlin?", "opts": ["\"Hello, %name\"", "\"Hello, \" + name only", "\"Hello, $name\"", "\"Hello, {name}\""], "correct": 2, "exp": "String templates use $name, or ${expression} for more complex values."}
  ],
  "Operators": [
    {"q": "What does the Elvis operator ?: do?", "opts": ["Declares a nullable type", "Performs integer division", "Compares two values", "Provides a default when the left side is null"], "correct": 3, "exp": "?: returns its right operand when the left is null."},
    {"q": "What is the result of 7 / 2 in Kotlin when both are Int?", "opts": ["3", "4", "An error", "3.5"], "correct": 0, "exp": "Integer division truncates toward zero, so the result is 3."},
    {"q": "In Kotlin, what does == compare?", "opts": ["References", "Values", "Types only", "Memory addresses"], "correct": 1, "exp": "Kotlin's == compares values; === compares references."}
  ],
  "User Input": [
    {"q": "Which conversion is safe for user input?", "opts": ["toDouble()", "toInt()", "toIntOrNull()", "toString()"], "correct": 2, "exp": "toIntOrNull() returns null on invalid input rather than throwing an exception."},
    {"q": "In what form does text arrive from an EditText?", "opts": ["Boolean", "Double", "Int", "String"], "correct": 3, "exp": "EditText content is always a String and must be converted explicitly."},
    {"q": "What does setting inputType on a field do?", "opts": ["Shows the appropriate keyboard for the expected data", "Encrypts the input", "Limits the length", "Validates the value"], "correct": 0, "exp": "inputType selects the keyboard layout, which reduces but does not remove the need for validation."}
  ],
  "Conditional Statements": [
    {"q": "Which construct handles multiple branches most cleanly in Kotlin?", "opts": ["A long if-else chain", "when", "for", "try"], "correct": 1, "exp": "when is designed for multi-branch logic and supports ranges, types and conditions."},
    {"q": "What is special about Kotlin's if?", "opts": ["It requires braces", "It cannot have an else", "It is an expression that returns a value", "It only accepts booleans"], "correct": 2, "exp": "if returns a value, so it can be assigned directly to a variable."},
    {"q": "When is 'else' required in a when block?", "opts": ["Never", "Only with ranges", "Always", "When when is used as an expression"], "correct": 3, "exp": "Used as an expression, when must be exhaustive, which usually means an else branch."}
  ],
  "Loops": [
    {"q": "What does 'for (i in 1 until 5)' iterate over?", "opts": ["1,2,3,4", "2,3,4,5", "1,3,5", "1,2,3,4,5"], "correct": 0, "exp": "until excludes the upper bound, so it covers 1 through 4."},
    {"q": "Which range expression counts backwards?", "opts": ["1..5", "5 downTo 1", "1 until 5", "1 step 5"], "correct": 1, "exp": "downTo produces a descending range."},
    {"q": "What should you avoid while iterating a collection?", "opts": ["Using break", "Reading its values", "Modifying the collection", "Calling forEach"], "correct": 2, "exp": "Structural modification during iteration causes a concurrent modification error."}
  ],
  "Functions": [
    {"q": "What keyword declares a function in Kotlin?", "opts": ["func", "function", "def", "fun"], "correct": 3, "exp": "Kotlin uses fun to declare functions."},
    {"q": "What does a return type of Unit mean?", "opts": ["The function returns no meaningful value", "The function is private", "The function is asynchronous", "The function returns an integer"], "correct": 0, "exp": "Unit is Kotlin's equivalent of void and can be omitted from the declaration."},
    {"q": "What is the benefit of named arguments?", "opts": ["Faster execution", "Calls with several parameters become readable and order-independent", "Smaller file size", "Automatic validation"], "correct": 1, "exp": "Naming arguments at the call site makes the meaning of each value explicit."}
  ],
  "Arrays": [
    {"q": "What is the index of the first element of an array?", "opts": ["It varies", "1", "0", "-1"], "correct": 2, "exp": "Kotlin arrays, like most languages, are zero-indexed."},
    {"q": "What is the last valid index of an array of size 5?", "opts": ["6", "0", "5", "4"], "correct": 3, "exp": "Valid indices run from 0 to size - 1, so 4 is the last."},
    {"q": "When should you prefer a List over an Array?", "opts": ["When the number of items can change", "Only for strings", "Only for numbers", "Never"], "correct": 0, "exp": "Arrays are fixed size; Lists handle collections whose length varies."}
  ],
  "Lists": [
    {"q": "Which creates a list you can add items to?", "opts": ["listOf()", "mutableListOf()", "arrayOf()", "setOf()"], "correct": 1, "exp": "mutableListOf() produces a modifiable list; listOf() is read-only."},
    {"q": "What does filter { } do?", "opts": ["Removes duplicates", "Transforms each element", "Selects elements matching a condition", "Sorts the list"], "correct": 2, "exp": "filter returns a new list containing only elements for which the condition is true."},
    {"q": "Which is safe on a possibly empty list?", "opts": ["list.first()", "list.get(0)", "list[0]", "firstOrNull()"], "correct": 3, "exp": "firstOrNull() returns null rather than throwing when the list is empty."}
  ],
  "Object-Oriented Programming Basics": [
    {"q": "What is the difference between a class and an object?", "opts": ["A class is the blueprint; an object is an instance of it", "A class is smaller", "An object contains classes", "They are the same"], "correct": 0, "exp": "The class defines structure and behaviour; each object is a concrete instance."},
    {"q": "Kotlin classes are final by default. What allows inheritance?", "opts": ["The public keyword", "The open keyword", "The data keyword", "The abstract keyword only"], "correct": 1, "exp": "A class must be marked open before another class can extend it."},
    {"q": "What does encapsulation mean?", "opts": ["Inheriting from a parent", "Combining two classes", "Keeping data private and exposing controlled access", "Copying an object"], "correct": 2, "exp": "Encapsulation hides internal state behind a defined interface."}
  ],
  "Classes and Objects": [
    {"q": "What does 'data class' generate automatically?", "opts": ["Network code", "UI layouts", "Database tables", "equals, hashCode, toString and copy"], "correct": 3, "exp": "Data classes generate the standard value-semantics methods from the constructor properties."},
    {"q": "How do you create an instance of a class in Kotlin?", "opts": ["User(\"Musu\", 30)", "User.create(\"Musu\", 30)", "make User(\"Musu\", 30)", "new User(\"Musu\", 30)"], "correct": 0, "exp": "Kotlin has no new keyword; you call the constructor directly."},
    {"q": "What does copy() do on a data class?", "opts": ["Deletes the original", "Creates a duplicate with optionally changed properties", "Copies to the clipboard", "Saves to disk"], "correct": 1, "exp": "copy() returns a new instance, changing only the named properties."}
  ],
  "M2:Practice Exercises": [
    {"q": "What is the best way to practise Kotlin from this module?", "opts": ["Watch the videos again", "Read the examples carefully", "Write and run the code yourself", "Memorise the syntax"], "correct": 2, "exp": "Running code and fixing the errors is what turns recognition into ability."},
    {"q": "Which refactor does this module recommend for three or more branches?", "opts": ["A while loop", "Multiple functions", "Nested ifs", "A when block"], "correct": 3, "exp": "when is designed for multi-branch logic and reads far more clearly than a long if-chain."},
    {"q": "What should you model your data as before writing UI code?", "opts": ["A data class", "An Array", "A Boolean", "A String"], "correct": 0, "exp": "A data class gives a clear model with value semantics that the UI can bind to."}
  ],
  "Android Studio Interface": [
    {"q": "Where do you find the reason an app crashed while running?", "opts": ["The Project panel", "Logcat", "The layout editor", "The SDK Manager"], "correct": 1, "exp": "Logcat shows runtime output including the stack trace of a crash."},
    {"q": "A red underline in the editor indicates:", "opts": ["A missing device", "A runtime crash", "A compile error that prevents building", "A style warning"], "correct": 2, "exp": "Compile errors are shown in the editor and stop the build before the app runs."},
    {"q": "What does the Debug button do differently from Run?", "opts": ["It skips installation", "It clears Logcat", "It builds faster", "It attaches a debugger so you can pause and inspect"], "correct": 3, "exp": "Debug runs the app with a debugger attached, enabling breakpoints and inspection."}
  ],
  "Project Structure": [
    {"q": "Where do XML layout files belong?", "opts": ["res/layout/", "java/", "res/values/", "res/drawable/"], "correct": 0, "exp": "Layouts live in res/layout/, which is where the build system expects them."},
    {"q": "What does AndroidManifest.xml declare?", "opts": ["Only the app icon", "App components, permissions and metadata", "The Kotlin version", "The Play Store price"], "correct": 1, "exp": "The manifest declares activities, services, permissions and other app-level configuration."},
    {"q": "Why put user-visible text in res/values/strings.xml?", "opts": ["It reduces app size", "It loads faster", "It makes translation and reuse straightforward", "It is required to compile"], "correct": 2, "exp": "Centralised strings can be translated by adding a qualified values folder rather than editing layouts."}
  ],
  "Emulator Setup": [
    {"q": "What does the Device Manager create?", "opts": ["A Play Store listing", "A Gradle build", "A new project", "An Android Virtual Device (emulator)"], "correct": 3, "exp": "Device Manager configures emulators from a device profile and system image."},
    {"q": "Why might a physical phone be better than the emulator?", "opts": ["It is faster, uses no extra RAM and shows real performance", "It needs no cable", "It builds the app", "It is more accurate for colours"], "correct": 0, "exp": "Real hardware avoids the emulator's memory cost and reflects genuine device performance."},
    {"q": "Which emulator feature helps test poor connectivity?", "opts": ["Screen rotation", "Network speed throttling", "Battery simulation", "Camera emulation"], "correct": 1, "exp": "Throttling the network reveals loading and error states hidden by a fast connection."}
  ],
  "Gradle Basics": [
    {"q": "Which file holds an app module's dependencies?", "opts": ["strings.xml", "AndroidManifest.xml", "The module-level build.gradle", "settings.gradle"], "correct": 2, "exp": "Dependencies are declared in the dependencies block of the module-level build.gradle."},
    {"q": "What is versionCode used for?", "opts": ["The Kotlin version", "The minimum SDK", "Display to users", "An integer Google Play uses to order releases"], "correct": 3, "exp": "versionCode is an internal integer; versionName is the human-readable string."},
    {"q": "Why is the first build much slower than later ones?", "opts": ["Gradle downloads and caches dependencies", "The code is larger", "Logcat initialises", "The emulator starts"], "correct": 0, "exp": "Dependencies are fetched once and then served from the local cache."}
  ],
  "Android Manifest": [
    {"q": "What happens if an activity is not declared in the manifest?", "opts": ["It runs normally", "The app crashes when you try to launch it", "It becomes the launcher", "It is compiled out"], "correct": 1, "exp": "Android refuses to start an undeclared activity and throws an error naming the class."},
    {"q": "Which permission must be declared for network access?", "opts": ["VIBRATE", "CAMERA", "INTERNET", "READ_CONTACTS"], "correct": 2, "exp": "Without the INTERNET permission all network calls fail with a security exception."},
    {"q": "Is declaring a dangerous permission in the manifest sufficient?", "opts": ["Only on old versions", "Only for the camera", "Yes, always", "No, it must also be requested at runtime"], "correct": 3, "exp": "Dangerous permissions require an explicit runtime request in addition to the manifest entry."}
  ],
  "Logcat": [
    {"q": "Which method writes a debug message to Logcat?", "opts": ["Log.d", "print", "System.out", "Log.e"], "correct": 0, "exp": "Log.d writes at debug level; Log.e is for errors."},
    {"q": "Where in a stack trace do you find the origin of a crash?", "opts": ["The last line", "The 'Caused by' line naming your file", "The device name", "The timestamp"], "correct": 1, "exp": "The 'Caused by' section typically points to the line in your own code."},
    {"q": "What should never be written to Logcat?", "opts": ["Timestamps", "Variable values", "Passwords, tokens or personal data", "Method names"], "correct": 2, "exp": "Device logs are readable by other tooling, so secrets must never be logged."}
  ],
  "Debugging Basics": [
    {"q": "What does a breakpoint do?", "opts": ["Deletes a line of code", "Clears Logcat", "Stops the app permanently", "Pauses execution so you can inspect variables"], "correct": 3, "exp": "Breakpoints suspend the running app at a chosen line for inspection."},
    {"q": "What is the difference between step over and step into?", "opts": ["Step over runs the line; step into enters a function call", "Step into is faster", "Step over skips the line entirely", "None"], "correct": 0, "exp": "Step into descends into the called function; step over executes it and moves on."},
    {"q": "When is a conditional breakpoint most useful?", "opts": ["Always", "When a problem occurs only on a specific iteration or value", "When the app will not compile", "When Logcat is empty"], "correct": 1, "exp": "Conditions avoid stepping through many irrelevant iterations to reach the failing case."}
  ],
  "Project Organization": [
    {"q": "How should resource ids be named?", "opts": ["By file size", "By position, such as button2", "By purpose, such as btnSubmitOrder", "By colour"], "correct": 2, "exp": "Purpose-based names remain meaningful as the layout changes."},
    {"q": "What is the convention for layout file names?", "opts": ["camelCase", "ALL CAPS", "PascalCase", "lowercase with underscores"], "correct": 3, "exp": "Android resource files use lowercase with underscores, such as activity_main.xml."},
    {"q": "Why does project organisation matter for freelance work?", "opts": ["You will often read and extend other people's projects, and they yours", "It is required by Gradle", "It speeds up compilation", "It reduces app size"], "correct": 0, "exp": "Maintenance work depends on being able to find things quickly in an unfamiliar codebase."}
  ],
  "Best Practices": [
    {"q": "What must never run on the main thread?", "opts": ["UI updates", "Network calls and disk access", "Setting text on a view", "Reading a variable"], "correct": 1, "exp": "Slow work on the main thread freezes the interface and can trigger an ANR."},
    {"q": "Where should user-visible text live?", "opts": ["In build.gradle", "Hard-coded in the layout", "In res/values/strings.xml", "In the manifest"], "correct": 2, "exp": "Centralised strings support translation and reuse."},
    {"q": "What happens if the main thread is blocked too long?", "opts": ["Logcat clears", "The build fails", "The app runs faster", "Android shows an 'application not responding' dialog"], "correct": 3, "exp": "Blocking the UI thread triggers an ANR, which users experience as a frozen app."}
  ],
  "XML Layouts": [
    {"q": "Which unit should be used for text size?", "opts": ["sp", "dp", "pt", "px"], "correct": 0, "exp": "sp scales with both density and the user's font size preference, which dp does not."},
    {"q": "What does layout_width=\"wrap_content\" do?", "opts": ["Fills the parent", "Sizes the view to fit its content", "Sets a fixed width", "Hides the view"], "correct": 1, "exp": "wrap_content sizes the view to exactly what it contains."},
    {"q": "Why use dp rather than px?", "opts": ["dp allows decimals", "dp is shorter to type", "dp scales with screen density so sizes look consistent", "px is deprecated"], "correct": 2, "exp": "Density-independent pixels keep physical size consistent across different screen densities."}
  ],
  "TextView": [
    {"q": "How do you set a TextView's text from Kotlin?", "opts": ["textView.string = \"Hi\"", "textView.write(\"Hi\")", "textView.setValue(\"Hi\")", "textView.text = \"Hi\""], "correct": 3, "exp": "Kotlin property syntax assigns directly to text."},
    {"q": "What prevents long text from breaking a row layout?", "opts": ["maxLines with ellipsize", "textColor", "gravity", "textSize"], "correct": 0, "exp": "Limiting lines and ellipsizing keeps the view a predictable height and width."},
    {"q": "What is the difference between gravity and layout_gravity?", "opts": ["They are identical", "gravity positions content inside the view; layout_gravity positions the view in its parent", "gravity is for text only", "layout_gravity sets size"], "correct": 1, "exp": "One aligns content within a view, the other aligns the view within its parent."}
  ],
  "EditText": [
    {"q": "How do you read the value of an EditText in Kotlin?", "opts": ["editText.content", "editText.value", "editText.text.toString()", "editText.getString()"], "correct": 2, "exp": "The text property returns an Editable, which is converted with toString()."},
    {"q": "What does the hint attribute do?", "opts": ["Validates the input", "Sets the keyboard type", "Sets the permanent text", "Shows guidance that disappears when the user types"], "correct": 3, "exp": "A hint is placeholder guidance, unlike text which pre-fills the field."},
    {"q": "Does setting inputType=\"number\" guarantee numeric input?", "opts": ["No, it only changes the keyboard; validation is still needed", "Only on newer devices", "Yes, if combined with maxLength", "Yes, completely"], "correct": 0, "exp": "inputType is a convenience; values can still arrive by paste or autofill."}
  ],
  "Button": [
    {"q": "What is the recommended minimum touch target size?", "opts": ["24dp", "48dp", "16dp", "64dp"], "correct": 1, "exp": "48dp is the accessibility guideline for reliably tappable targets."},
    {"q": "How should a button behave during a slow network call?", "opts": ["Change colour only", "Stay enabled", "Be disabled until the operation completes", "Be hidden permanently"], "correct": 2, "exp": "Disabling prevents repeated taps from submitting the same action multiple times."},
    {"q": "What belongs inside setOnClickListener?", "opts": ["The layout definition", "Database schema", "All the business logic", "A short call to a named function that does the work"], "correct": 3, "exp": "Short listeners that delegate are easier to read and to test."}
  ],
  "ImageView": [
    {"q": "Why can loading a full-resolution photo crash an app?", "opts": ["It can exhaust the memory available to the app", "ImageView cannot show photos", "It requires a permission", "The file format is unsupported"], "correct": 0, "exp": "Decoding a multi-megapixel image into memory can exceed the app's heap."},
    {"q": "What does scaleType=\"centerCrop\" do?", "opts": ["Fits the whole image inside the view", "Fills the view, cropping the overflow", "Stretches the image", "Centres without scaling"], "correct": 1, "exp": "centerCrop scales to fill and crops whatever does not fit."},
    {"q": "Why use a library such as Glide or Coil for network images?", "opts": ["It removes the need for internet permission", "It is required by Android", "It handles downloading, resizing and caching correctly", "It makes images larger"], "correct": 2, "exp": "These libraries solve resizing, caching and lifecycle cancellation, which are easy to get wrong by hand."}
  ],
  "RecyclerView": [
    {"q": "Why is RecyclerView efficient for long lists?", "opts": ["It compresses the data", "It limits lists to 100 items", "It loads all rows at once", "It recycles a small number of row views as you scroll"], "correct": 3, "exp": "Only visible rows plus a small buffer exist at any time, regardless of data size."},
    {"q": "What does onBindViewHolder do?", "opts": ["Fills an existing row view with data for a position", "Counts the items", "Sets the layout manager", "Creates the row layout"], "correct": 0, "exp": "onCreateViewHolder inflates; onBindViewHolder populates a recycled view."},
    {"q": "What causes stuttering while scrolling a RecyclerView?", "opts": ["Too few items", "Slow work inside onBindViewHolder", "Using a LinearLayoutManager", "Setting an id on rows"], "correct": 1, "exp": "That method runs for every row scrolling into view, so anything slow there is felt directly."}
  ],
  "ScrollView": [
    {"q": "How many direct children can a ScrollView have?", "opts": ["Up to five", "Any number", "Exactly one", "Two"], "correct": 2, "exp": "A ScrollView takes a single child, which is usually a layout containing the rest."},
    {"q": "Why should a RecyclerView not be nested in a ScrollView?", "opts": ["It is not allowed to compile", "It disables scrolling entirely", "It looks wrong", "It defeats recycling, so all rows are created at once"], "correct": 3, "exp": "Nesting forces the RecyclerView to full height, eliminating the view recycling it depends on."},
    {"q": "What problem does a missing ScrollView cause on small screens?", "opts": ["Content below the fold is unreachable", "Images fail to load", "The app crashes", "Text becomes blurry"], "correct": 0, "exp": "Without scrolling, fields and buttons beyond the screen height cannot be reached."}
  ],
  "ConstraintLayout": [
    {"q": "What happens to a view with no constraints at runtime?", "opts": ["It centres itself", "It appears at the top-left corner", "It is not drawn", "The app crashes"], "correct": 1, "exp": "Unconstrained views default to position 0,0 when the layout is actually rendered."},
    {"q": "What does a width of 0dp mean in ConstraintLayout?", "opts": ["An error", "Invisible", "Match constraints, filling the space between them", "Wrap content"], "correct": 2, "exp": "0dp tells the layout to size the view to its constraints."},
    {"q": "What is the main advantage over nested layouts?", "opts": ["Automatic colours", "Built-in scrolling", "Smaller XML files only", "A flat hierarchy that is easier to read and faster to draw"], "correct": 3, "exp": "Fewer nesting levels means fewer layout passes and clearer structure."}
  ],
  "LinearLayout": [
    {"q": "What must be set alongside layout_weight for horizontal distribution?", "opts": ["layout_width to 0dp", "gravity to center", "orientation to vertical", "layout_height to 0dp"], "correct": 0, "exp": "Setting the axis dimension to 0dp lets weight control the distribution."},
    {"q": "Two children with layout_weight=\"1\" each receive:", "opts": ["All the space each", "Half the remaining space each", "A fixed 100dp each", "No space"], "correct": 1, "exp": "Equal weights divide the leftover space equally."},
    {"q": "When should you prefer ConstraintLayout over LinearLayout?", "opts": ["Only for text", "Always", "When the arrangement would require several nested LinearLayouts", "Only for lists"], "correct": 2, "exp": "Deep nesting is where LinearLayout becomes slow and hard to read."}
  ],
  "RelativeLayout": [
    {"q": "How does RelativeLayout position a child?", "opts": ["By weight", "Always centred", "In a fixed grid", "Relative to the parent or a sibling view"], "correct": 3, "exp": "Children are placed using relationships such as below, or aligned to the parent."},
    {"q": "What happens with a circular positioning reference?", "opts": ["It throws at runtime", "It is ignored", "The views overlap", "It is caught at compile time"], "correct": 0, "exp": "RelativeLayout cannot resolve circular dependencies and raises a runtime exception."},
    {"q": "Why learn RelativeLayout at all?", "opts": ["It is the modern default", "It appears in existing projects you may maintain", "It is faster than ConstraintLayout", "It is required for lists"], "correct": 1, "exp": "Maintenance work frequently involves older layouts written before ConstraintLayout."}
  ],
  "CardView": [
    {"q": "What does cardElevation control?", "opts": ["The card width", "The corner rounding", "The shadow depth", "The background colour"], "correct": 2, "exp": "Elevation determines how raised the card appears via its shadow."},
    {"q": "Where is CardView most commonly used?", "opts": ["Inside a ScrollView only", "For toolbars", "As the app's root layout", "As the root of a RecyclerView row"], "correct": 3, "exp": "Cards are the standard container for a discrete list item."},
    {"q": "What is a common mistake when using CardView?", "opts": ["Omitting internal padding so content touches the edge", "Using it in a list", "Setting a background colour", "Setting a corner radius"], "correct": 0, "exp": "Without padding the content looks cramped against the card boundary."}
  ],
  "M4:Material Design Components": [
    {"q": "What does TextInputLayout add to an EditText?", "opts": ["Faster input", "Floating label, helper text, counter and error display", "Encryption", "Automatic validation"], "correct": 1, "exp": "It provides the surrounding affordances; validation logic is still yours to write."},
    {"q": "How do Material components get their colours?", "opts": ["From Gradle", "Hard-coded per view", "From the app theme", "From the manifest"], "correct": 2, "exp": "Theming the app once propagates colours to every Material component."},
    {"q": "Which component marks a screen's primary action?", "opts": ["TextInputLayout", "MaterialCardView", "Chip", "FloatingActionButton"], "correct": 3, "exp": "The FAB is Material's convention for the single most important action on a screen."}
  ]
  };
})();
