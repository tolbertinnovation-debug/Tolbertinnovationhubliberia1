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
  ],
  "Click Events": [
    {"q": "What is the advantage of ViewBinding over findViewById?", "opts": ["It is type-safe, so a wrong id fails at compile time", "It loads layouts faster", "It removes the need for ids", "It is shorter to type only"], "correct": 0, "exp": "Binding classes are generated from the layout, so mismatches surface during compilation."},
    {"q": "Where should click listeners normally be attached?", "opts": ["In the XML only", "In onCreate, after setting the layout", "In onDestroy", "In the manifest"], "correct": 1, "exp": "Listeners are attached once the view hierarchy exists, which is after setContentView."},
    {"q": "What must setOnLongClickListener return?", "opts": ["An Int", "Unit", "A Boolean indicating whether the event was consumed", "A String"], "correct": 2, "exp": "Returning true consumes the long-press event; false lets it propagate."}
  ],
  "Input Validation": [
    {"q": "What should be done to input before checking whether it is empty?", "opts": ["Encrypt it", "Log it", "Convert it to uppercase", "trim() it"], "correct": 3, "exp": "Trimming removes whitespace that would otherwise pass an emptiness check."},
    {"q": "What makes an error message useful?", "opts": ["It tells the user what to do to fix the problem", "It is red", "It appears at the top", "It is short"], "correct": 0, "exp": "Actionable messages let the user correct the input without guessing."},
    {"q": "Can client-side validation be relied on for security?", "opts": ["Yes", "No, it is for usability; the server must validate too", "Only for passwords", "Only on new devices"], "correct": 1, "exp": "Anything enforced on the device can be bypassed, so server-side checks remain necessary."}
  ],
  "Toast Messages": [
    {"q": "What is the most common mistake when using Toast?", "opts": ["Showing it in onCreate", "Wrong context", "Forgetting to call .show()", "Using LENGTH_LONG"], "correct": 2, "exp": "Without .show() the toast is created but never displayed, and no error is raised."},
    {"q": "When is a Snackbar preferable to a Toast?", "opts": ["For shorter messages", "On older devices", "Never", "When the message needs an action such as Undo"], "correct": 3, "exp": "Snackbars can carry an action and are anchored in the layout."},
    {"q": "What should never be communicated only by a Toast?", "opts": ["Critical information the user must act on", "A copy confirmation", "A short greeting", "A save confirmation"], "correct": 0, "exp": "Toasts fade quickly and are easily missed, so important messages need a persistent surface."}
  ],
  "Dialog Boxes": [
    {"q": "How should dialog buttons be labelled?", "opts": ["Yes and No", "With the action, such as Delete and Cancel", "OK and Cancel always", "With icons only"], "correct": 1, "exp": "Verb labels are understandable without re-reading the question."},
    {"q": "Which action warrants a confirmation dialog?", "opts": ["Scrolling a list", "Saving a draft", "Deleting data permanently", "Opening a screen"], "correct": 2, "exp": "Confirmation is for destructive, irreversible actions."},
    {"q": "What does setCancelable(false) do?", "opts": ["Disables the dialog", "Removes the title", "Hides the buttons", "Prevents dismissal by tapping outside or pressing back"], "correct": 3, "exp": "It forces the user to choose one of the provided actions."}
  ],
  "Menus": [
    {"q": "Where are menu items defined?", "opts": ["In an XML resource under res/menu/", "In the manifest", "In build.gradle", "In Kotlin only"], "correct": 0, "exp": "Menus are resources, inflated at runtime by the activity or fragment."},
    {"q": "What does showAsAction=\"ifRoom\" do?", "opts": ["Hides the item", "Places it in the toolbar when space allows", "Disables the item", "Moves it to a context menu"], "correct": 1, "exp": "It promotes the item from the overflow to the toolbar if there is space."},
    {"q": "What should onOptionsItemSelected return when it handles an item?", "opts": ["null", "false", "true", "Unit"], "correct": 2, "exp": "Returning true signals the event was consumed and stops further handling."}
  ],
  "Navigation Drawer": [
    {"q": "When is a navigation drawer appropriate?", "opts": ["Only for tablets", "Only for settings", "For two destinations", "For five or more top-level destinations"], "correct": 3, "exp": "Drawers suit larger numbers of destinations that would not fit a bottom bar."},
    {"q": "What is the main drawback of a drawer?", "opts": ["Its contents are hidden, so features are less discoverable", "It cannot hold icons", "It requires a tablet", "It is slow"], "correct": 0, "exp": "Users do not discover destinations they never open the drawer to see."},
    {"q": "What should the back button do when the drawer is open?", "opts": ["Leave the app", "Close the drawer first", "Do nothing", "Open the previous screen"], "correct": 1, "exp": "Back should dismiss the open drawer before navigating away."}
  ],
  "Bottom Navigation": [
    {"q": "How many destinations suit a bottom navigation bar?", "opts": ["Any number", "One or two", "Three to five", "Six to ten"], "correct": 2, "exp": "Below three the bar is wasteful; above five the labels no longer fit comfortably."},
    {"q": "What should a bottom navigation item never be?", "opts": ["A screen with its own back stack", "Labelled with an icon and text", "A section of the app", "An action such as Save"], "correct": 3, "exp": "The bar is for navigation between sections, not for performing actions."},
    {"q": "Why is a bottom bar easier to reach than a top toolbar?", "opts": ["It is within thumb reach on a large phone", "It loads faster", "It has more items", "It is larger"], "correct": 0, "exp": "Bottom placement suits one-handed use on the large screens now common."}
  ],
  "Intents": [
    {"q": "What is an explicit intent?", "opts": ["One that describes an action", "One that names the exact component to start", "One with no data", "One that opens another app"], "correct": 1, "exp": "Explicit intents name the target class, typically within your own app."},
    {"q": "What is the risk of typing extra keys as literals?", "opts": ["The app will not install", "Slower performance", "A typo silently yields null in the destination", "A compile error"], "correct": 2, "exp": "String keys are not checked, so mismatches fail quietly at runtime."},
    {"q": "Why should large objects not be passed as intent extras?", "opts": ["They cannot be serialised", "They slow the emulator", "They are encrypted", "Extras have a size limit and are not a data transfer mechanism"], "correct": 3, "exp": "Pass an identifier and re-load the data at the destination instead."}
  ],
  "Activities": [
    {"q": "What happens to an Activity when the device rotates?", "opts": ["It is destroyed and recreated by default", "It pauses only", "It moves to the background", "Nothing"], "correct": 0, "exp": "A configuration change recreates the activity, losing state held only in fields."},
    {"q": "Where must every Activity be declared?", "opts": ["build.gradle", "AndroidManifest.xml", "strings.xml", "The layout file"], "correct": 1, "exp": "Undeclared activities cannot be started and cause a runtime error."},
    {"q": "What is the modern structural preference?", "opts": ["One activity per feature module", "One activity per screen", "One activity hosting several fragments", "No activities at all"], "correct": 2, "exp": "Single-activity architecture with fragments is the pattern the Navigation Component assumes."}
  ],
  "M5:Fragments": [
    {"q": "What is destroyed before the fragment itself?", "opts": ["Its ViewModel", "Its layout file", "Its arguments", "Its view"], "correct": 3, "exp": "A fragment's view can be destroyed and recreated while the fragment instance survives."},
    {"q": "Where should a fragment's ViewBinding reference be cleared?", "opts": ["onDestroyView", "onPause", "onStop", "onCreate"], "correct": 0, "exp": "Clearing it there prevents leaking the view hierarchy after the view is destroyed."},
    {"q": "How should two fragments share data?", "opts": ["Direct references to each other", "A shared ViewModel", "Static variables", "Intent extras"], "correct": 1, "exp": "A shared ViewModel scoped to the activity avoids fragile direct coupling."}
  ],
  "Activity Lifecycle": [
    {"q": "Which callback pairs with onResume?", "opts": ["onDestroy", "onCreate", "onPause", "onStop"], "correct": 2, "exp": "onResume and onPause bracket the period in which the screen has focus."},
    {"q": "Can you rely on onDestroy always running?", "opts": ["Only on rotation", "Only in fragments", "Yes, always", "No, the process may be killed without it"], "correct": 3, "exp": "Android can terminate the process without calling onDestroy, so critical cleanup cannot depend on it."},
    {"q": "What is the consequence of unpaired lifecycle work?", "opts": ["Memory leaks and battery drain when the app is backgrounded", "Compile errors", "Layout problems", "Slower builds"], "correct": 0, "exp": "Resources acquired and never released continue consuming memory and power."}
  ],
  "Fragment Lifecycle": [
    {"q": "Which lifecycle owner should a fragment use when observing LiveData?", "opts": ["this", "viewLifecycleOwner", "requireActivity()", "applicationContext"], "correct": 1, "exp": "viewLifecycleOwner ends with the view, preventing observers from outliving it."},
    {"q": "What survives onDestroyView?", "opts": ["The activity only", "The view hierarchy", "The fragment instance", "Neither"], "correct": 2, "exp": "The fragment instance can be retained while its view is destroyed and later recreated."},
    {"q": "What must be done in onDestroyView?", "opts": ["Detach the fragment", "Stop the activity", "Save user data", "Clear view and binding references"], "correct": 3, "exp": "Holding view references past this point leaks the hierarchy or crashes on recreation."}
  ],
  "Navigation Component": [
    {"q": "What hosts the current destination in the Navigation Component?", "opts": ["A NavHostFragment", "The NavController", "The nav graph", "The activity directly"], "correct": 0, "exp": "NavHostFragment is the container the graph swaps destinations into."},
    {"q": "What does the Navigation Component manage automatically?", "opts": ["Layouts", "The back stack", "Network calls", "Permissions"], "correct": 1, "exp": "Back stack handling is one of the main reasons to adopt it."},
    {"q": "Where are destinations and actions declared?", "opts": ["In each activity", "In the manifest", "In an XML navigation graph", "In build.gradle"], "correct": 2, "exp": "The graph is a single XML resource describing the app's routes."}
  ],
  "Passing Data Between Screens": [
    {"q": "What problem does Safe Args solve?", "opts": ["Layout inflation", "Back stack management", "Slow navigation", "Untyped Bundle keys that fail silently at runtime"], "correct": 3, "exp": "Generated typed classes turn key and type mismatches into compile errors."},
    {"q": "What should be passed between screens?", "opts": ["Identifiers, with the data re-loaded at the destination", "Bitmaps", "Database cursors", "Whole objects"], "correct": 0, "exp": "Arguments have size limits and large payloads are fragile across process death."},
    {"q": "How are arguments read in the destination fragment?", "opts": ["findViewById", "by navArgs()", "getIntent()", "requireArguments().getString()"], "correct": 1, "exp": "The generated Args class is retrieved with the navArgs delegate."}
  ],
  "Deep Links": [
    {"q": "What must be handled carefully when a user arrives via a deep link?", "opts": ["The permissions", "The theme", "The back stack, so back reaches a sensible screen", "The layout"], "correct": 2, "exp": "Without a synthetic back stack, pressing back ejects the user from the app."},
    {"q": "What distinguishes an App Link from a plain deep link?", "opts": ["It works offline", "It requires no manifest entry", "It is faster", "It is verified via a file on your domain and skips the chooser"], "correct": 3, "exp": "Domain verification lets Android open your app directly without asking the user."},
    {"q": "How should deep link parameters be treated?", "opts": ["As untrusted input requiring validation", "As encrypted", "As optional", "As trusted"], "correct": 0, "exp": "Anyone can craft a link, so its parameters must be validated like any external input."}
  ],
  "Back Stack Management": [
    {"q": "What should happen to the login screen after a successful sign-in?", "opts": ["Stay on the back stack", "Be popped so back does not return to it", "Be shown again", "Be reloaded"], "correct": 1, "exp": "popUpTo with inclusive removes it, so back from Home behaves sensibly."},
    {"q": "What causes a back stack to grow indefinitely?", "opts": ["ViewModels", "Deep links", "Navigation loops such as A to B to A", "Fragments"], "correct": 2, "exp": "Each traversal adds an entry unless the previous one is popped."},
    {"q": "How should bottom-navigation tabs handle the back stack?", "opts": ["Clear it on every switch", "Disable back entirely", "Share one stack", "Each tab keeps its own"], "correct": 3, "exp": "Per-tab stacks preserve each section's position when switching between them."}
  ],
  "Navigation Best Practices": [
    {"q": "What is the recommended app structure for navigation?", "opts": ["A single activity hosting a graph of fragments", "No activities", "Activities with manual transactions", "One activity per screen"], "correct": 0, "exp": "Single-activity architecture is what the Navigation Component is designed around."},
    {"q": "Why is the nav graph described as documentation that cannot go stale?", "opts": ["It is auto-generated", "It is the definition the app actually runs on", "It is stored in the manifest", "It is versioned separately"], "correct": 1, "exp": "Because behaviour comes from the graph, it necessarily reflects reality."},
    {"q": "What should be done when a nav graph becomes large?", "opts": ["Convert to activities", "Delete unused destinations", "Split it into nested graphs by feature", "Move it to the manifest"], "correct": 2, "exp": "Nested graphs keep each feature's routes readable as the app grows."}
  ],
  "SharedPreferences": [
    {"q": "What should SharedPreferences be used for?", "opts": ["Images", "Large lists", "Structured records", "Small settings and flags"], "correct": 3, "exp": "It is a key-value store for primitives, not a database."},
    {"q": "What is the difference between apply() and commit()?", "opts": ["apply() writes asynchronously; commit() blocks and returns a result", "commit() is faster", "apply() is synchronous", "None"], "correct": 0, "exp": "apply() avoids blocking the main thread, which is why it is preferred."},
    {"q": "Is SharedPreferences suitable for storing a password?", "opts": ["Yes", "No, it is not secure; use EncryptedSharedPreferences", "Only if hashed", "Only on newer devices"], "correct": 1, "exp": "Plain preferences are readable on a compromised device, so sensitive values need encryption."}
  ],
  "Internal Storage": [
    {"q": "What permission is required for internal storage?", "opts": ["MANAGE_STORAGE", "READ_EXTERNAL_STORAGE", "None", "WRITE_EXTERNAL_STORAGE"], "correct": 2, "exp": "Internal storage belongs to the app, so no permission is involved."},
    {"q": "What may Android do to cacheDir?", "opts": ["Back it up", "Share it with other apps", "Nothing", "Clear it when storage is low"], "correct": 3, "exp": "Cache directories are reclaimable, so their contents must be regenerable."},
    {"q": "What happens to internal storage on uninstall?", "opts": ["It is deleted with the app", "It moves to external storage", "It is backed up", "It is kept"], "correct": 0, "exp": "App-private files are removed when the app is uninstalled."}
  ],
  "External Storage": [
    {"q": "How should an app save a photo to the device gallery today?", "opts": ["Write to a hard-coded path", "Insert it through MediaStore", "Use SharedPreferences", "Write to filesDir"], "correct": 1, "exp": "Scoped storage requires MediaStore for shared media, and it indexes the file automatically."},
    {"q": "From which Android version does scoped storage apply?", "opts": ["Android 5", "Android 6", "Android 10", "Android 13"], "correct": 2, "exp": "Scoped storage was introduced in Android 10 and enforced thereafter."},
    {"q": "What permission do app-specific external directories require?", "opts": ["MANAGE_EXTERNAL_STORAGE", "READ_MEDIA_IMAGES", "WRITE_EXTERNAL_STORAGE", "None"], "correct": 3, "exp": "An app's own external directory needs no runtime permission."}
  ],
  "SQLite Database": [
    {"q": "What is SQLite?", "opts": ["An embedded file-based relational database", "A key-value store", "A network protocol", "A cloud database"], "correct": 0, "exp": "SQLite runs in-process and stores everything in a single file on the device."},
    {"q": "What commonly causes a slow database-backed list?", "opts": ["Too many rows", "A missing index on the filtered column", "The device model", "Using Kotlin"], "correct": 1, "exp": "Without an index, a filter scans every row."},
    {"q": "Why does SQLite knowledge still matter when using Room?", "opts": ["Room is deprecated", "Room requires manual SQL for everything", "Room generates SQLite, so its errors and semantics are SQLite's", "SQLite is faster"], "correct": 2, "exp": "Room is an abstraction over SQLite, not a replacement for understanding it."}
  ],
  "Room Database": [
    {"q": "What is Room's principal advantage over raw SQLite?", "opts": ["It needs no schema", "It works offline", "It is faster", "It verifies SQL at compile time"], "correct": 3, "exp": "Compile-time verification catches query errors before release."},
    {"q": "What are Room's three main components?", "opts": ["Entity, DAO and Database", "Table, Index, Query", "Fragment, Activity, Service", "Model, View, Controller"], "correct": 0, "exp": "Entities describe tables, DAOs declare queries, and the Database class connects them."},
    {"q": "What should a Room query return so the UI updates automatically?", "opts": ["A List", "Flow or LiveData", "A Cursor", "An Array"], "correct": 1, "exp": "Observable return types emit again whenever the underlying data changes."}
  ],
  "CRUD Operations": [
    {"q": "Why must Room write operations avoid the main thread?", "opts": ["They cannot be tested", "They are slow to compile", "Disk work blocks the UI, and Room throws to prevent it", "They require permissions"], "correct": 2, "exp": "Room enforces this deliberately so slow writes cannot freeze the interface."},
    {"q": "Which annotation is used for a read query?", "opts": ["@Read", "@Select", "@Insert", "@Query"], "correct": 3, "exp": "@Query holds the SQL for reads and any conditional statement."},
    {"q": "What does OnConflictStrategy.REPLACE do?", "opts": ["Replaces an existing row with the same key", "Throws an error", "Creates a duplicate", "Ignores the insert"], "correct": 0, "exp": "It overwrites the conflicting row rather than failing."}
  ],
  "Data Persistence": [
    {"q": "Where should an image be stored?", "opts": ["As a byte array in Room", "On disk, with its path stored in Room", "In SharedPreferences", "In the manifest"], "correct": 1, "exp": "Large binaries bloat the database and slow every query; store the file and reference it."},
    {"q": "Which store suits structured records?", "opts": ["DataStore", "SharedPreferences", "Room", "cacheDir"], "correct": 2, "exp": "Room provides tables, queries and relationships for structured data."},
    {"q": "Why should persistence choices be made early?", "opts": ["They cannot be changed", "They affect permissions", "They affect the app icon", "Migrating storage later is expensive"], "correct": 3, "exp": "Data already written in the wrong place must be migrated, which is far more work than choosing correctly."}
  ],
  "Offline Storage": [
    {"q": "What should the UI read from in an offline-first app?", "opts": ["The local database, with the network refreshing it", "SharedPreferences", "The cache directory only", "The network directly"], "correct": 0, "exp": "Rendering from local storage means the app works regardless of connectivity."},
    {"q": "What handles deferred sync that must survive app restarts?", "opts": ["A Handler", "WorkManager", "A Thread", "An Intent"], "correct": 1, "exp": "WorkManager schedules deferrable work with guaranteed execution across restarts."},
    {"q": "What should happen to writes made while offline?", "opts": ["Block the UI", "Fail immediately", "Be queued and sent when connectivity returns", "Be discarded"], "correct": 2, "exp": "Queuing lets the user keep working and syncs when the network is available."}
  ],
  "Introduction to Firebase": [
    {"q": "What does Firebase primarily remove the need for?", "opts": ["Testing", "Publishing", "Writing an app", "Building and operating your own backend server"], "correct": 3, "exp": "It supplies hosted auth, storage, database and messaging services."},
    {"q": "Which file configures Firebase in an Android project?", "opts": ["google-services.json", "AndroidManifest.xml", "settings.gradle", "build.gradle"], "correct": 0, "exp": "The generated configuration file connects the app to its Firebase project."},
    {"q": "What is a key trade-off of adopting Firebase?", "opts": ["It cannot handle authentication", "Vendor lock-in and cost at scale", "It requires a server", "It only works offline"], "correct": 1, "exp": "Convenience comes at the price of dependence on the platform and usage-based cost."}
  ],
  "Firebase Authentication": [
    {"q": "What is the UID used for?", "opts": ["Naming the app", "Displaying the user's name", "As the stable key linking data to a user", "Encrypting the database"], "correct": 2, "exp": "The UID identifies the account consistently across sign-ins and devices."},
    {"q": "Why is delegating authentication a security decision?", "opts": ["It reduces app size", "It removes the need for HTTPS", "It is faster to write", "Password storage, reset and session handling are common vulnerability sources"], "correct": 3, "exp": "These flows are easy to implement subtly wrong and costly when they are."},
    {"q": "Where must access rules be enforced?", "opts": ["In the database security rules on the server", "In the manifest", "In the layout", "In the app code"], "correct": 0, "exp": "The client is under the user's control, so rules must be enforced server-side."}
  ],
  "Firestore Database": [
    {"q": "How is data organised in Firestore?", "opts": ["Tables and rows", "Documents grouped into collections", "Key-value pairs only", "Files"], "correct": 1, "exp": "Firestore is a document database, with collections containing documents."},
    {"q": "What does Firestore charge for that shapes data modelling?", "opts": ["Queries defined", "Storage only", "Document reads", "Connections"], "correct": 2, "exp": "Per-read pricing rewards structures that render a screen in few reads."},
    {"q": "What protects Firestore data from unauthorised access?", "opts": ["Obfuscation", "The API key", "The app's code", "Security rules on the server"], "correct": 3, "exp": "Only server-side rules can enforce access, since the client can be modified."}
  ],
  "Firebase Realtime Database": [
    {"q": "How does the Realtime Database store data?", "opts": ["A single JSON tree", "Documents in collections", "Files", "Tables"], "correct": 0, "exp": "Everything lives in one large JSON structure."},
    {"q": "Why is deep nesting a problem in the Realtime Database?", "opts": ["It is slow to write", "Reading a node downloads everything beneath it", "It cannot be indexed", "It breaks security rules"], "correct": 1, "exp": "Fetching a parent pulls the whole subtree, which can be very large."},
    {"q": "Which is the default choice for a new app?", "opts": ["Neither", "Realtime Database", "Firestore", "SQLite in the cloud"], "correct": 2, "exp": "Firestore offers better querying and scaling for most new applications."}
  ],
  "Firebase Storage": [
    {"q": "What should be stored in the database after uploading a file?", "opts": ["The file name only", "Nothing", "The file bytes", "The download URL"], "correct": 3, "exp": "Databases hold the reference; the storage service holds the file."},
    {"q": "Where must upload size and type limits be enforced?", "opts": ["In the storage security rules", "In the manifest", "In build.gradle", "In the app only"], "correct": 0, "exp": "Client-side limits can be bypassed, so the rules must enforce them."},
    {"q": "Why compress images before upload?", "opts": ["To improve quality", "To cut storage cost, transfer time and the user's data usage", "To satisfy Play Store rules", "To enable caching"], "correct": 1, "exp": "Full-resolution photos are far larger than any on-screen display requires, wasting money and bandwidth."}
  ],
  "Cloud Messaging (Push Notifications)": [
    {"q": "What identifies a specific app installation for messaging?", "opts": ["The device model", "The package name", "The FCM token", "The user's email"], "correct": 2, "exp": "Messages are addressed to the registration token for that installation."},
    {"q": "When should the notification permission be requested?", "opts": ["Never", "During installation", "At first launch", "When the value of notifications is clear to the user"], "correct": 3, "exp": "Context-free prompts are usually refused, and refusal is difficult to reverse."},
    {"q": "What must be handled when a token rotates?", "opts": ["onNewToken, updating the server with the new token", "Reinstalling the app", "Clearing the cache", "Nothing"], "correct": 0, "exp": "A stale token silently stops receiving messages."}
  ],
  "Firebase Analytics": [
    {"q": "What should never be logged as an analytics event parameter?", "opts": ["A screen name", "Personal data such as an email address", "A button identifier", "An error code"], "correct": 1, "exp": "Personal data in analytics creates privacy and regulatory exposure."},
    {"q": "What does a funnel reveal?", "opts": ["Battery use", "App size", "Where users drop out of a multi-step flow", "Crash rate"], "correct": 2, "exp": "Funnels show progression and abandonment across the steps of a flow."},
    {"q": "Why log a small number of events rather than everything?", "opts": ["It is faster", "Firebase charges per event", "Storage limits", "Unread events add noise and privacy obligations without informing decisions"], "correct": 3, "exp": "Events only have value if someone acts on them; the rest is liability."}
  ],
  "Firebase Hosting Overview": [
    {"q": "What does Google Play require for apps handling user data?", "opts": ["A publicly reachable privacy policy URL", "A blog", "A support forum", "A website"], "correct": 0, "exp": "A privacy policy URL is a submission requirement for such apps."},
    {"q": "Which file must be hosted to verify App Links?", "opts": ["manifest.json", "/.well-known/assetlinks.json", "robots.txt", "sitemap.xml"], "correct": 1, "exp": "Android checks this file on your domain to confirm the app may handle its links."},
    {"q": "What kind of content does Firebase Hosting serve?", "opts": ["Push notifications", "Server-rendered applications", "Static content over HTTPS from a CDN", "Databases"], "correct": 2, "exp": "It is a static hosting service with global distribution and automatic TLS."}
  ],
  "Introduction to REST APIs": [
    {"q": "What does a 4xx status code indicate?", "opts": ["Success", "A redirect", "Server failure", "A problem with the request the client sent"], "correct": 3, "exp": "4xx means the client's request was invalid, so retrying it unchanged will fail again."},
    {"q": "What is the correct response to a 429?", "opts": ["Back off and retry later", "Give up permanently", "Switch to HTTP", "Retry immediately"], "correct": 0, "exp": "429 signals rate limiting, so the client must slow down."},
    {"q": "Why should a secret never appear in a URL?", "opts": ["URLs have length limits", "URLs are logged by servers and proxies along the way", "It breaks HTTPS", "It slows the request"], "correct": 1, "exp": "Query strings appear in access logs and browser history, exposing the secret."}
  ],
  "JSON": [
    {"q": "How should an optional API field be declared in Kotlin?", "opts": ["As Any", "As non-nullable with a default", "As nullable", "As a String always"], "correct": 2, "exp": "A missing field maps to null, which a non-nullable type cannot hold."},
    {"q": "What is used when a JSON field name differs from the Kotlin property name?", "opts": ["A rename in the API", "A second class", "A comment", "@SerializedName or @SerialName"], "correct": 3, "exp": "Serialisation annotations map between the two names."},
    {"q": "Why can an app work in testing and crash in production on the same endpoint?", "opts": ["Production records may omit fields the test records contained", "Slower network", "Different screen sizes", "Different Android versions"], "correct": 0, "exp": "Real data varies more than test data, exposing nullability assumptions."}
  ],
  "Retrofit": [
    {"q": "What does Retrofit generate?", "opts": ["The server", "An implementation of your annotated interface", "The JSON", "The layout"], "correct": 1, "exp": "You describe the API; Retrofit produces the client that calls it."},
    {"q": "What should be returned when the status code matters?", "opts": ["Unit", "The data class directly", "Response<T>", "A String"], "correct": 2, "exp": "Response exposes the code and headers alongside the parsed body."},
    {"q": "Why should full request bodies not be logged in release builds?", "opts": ["Logs are disabled", "It breaks Retrofit", "It slows the app", "They may contain credentials and personal data"], "correct": 3, "exp": "Logged bodies can leak tokens and user data on a device or in crash reports."}
  ],
  "Fetching Data": [
    {"q": "Which states must a data-fetching screen represent?", "opts": ["Loading, success, error and empty", "Loading and success", "Error only", "Success only"], "correct": 0, "exp": "All four are distinct situations the user needs to be able to tell apart."},
    {"q": "Where should the fetch be initiated?", "opts": ["In the fragment's onCreateView", "In the ViewModel", "In the activity's onResume", "In the adapter"], "correct": 1, "exp": "ViewModel-scoped fetches survive rotation and are cancelled correctly."},
    {"q": "Why does an empty result need its own state?", "opts": ["It is required by Retrofit", "It is an error", "Otherwise it is indistinguishable from loading or failure", "It saves memory"], "correct": 2, "exp": "A blank screen gives the user no way to interpret what happened."}
  ],
  "Sending Data": [
    {"q": "Why is a network timeout ambiguous for a write?", "opts": ["Timeouts never occur on writes", "The server always rolls back", "The request was definitely lost", "The write may have succeeded with the response lost"], "correct": 3, "exp": "Without a response you cannot tell whether the server processed the request."},
    {"q": "What prevents a duplicate submission from a double tap?", "opts": ["Disabling the control while the request is in flight", "A larger button", "Retrying automatically", "A longer timeout"], "correct": 0, "exp": "Blocking further taps until the result arrives removes the duplicate entirely."},
    {"q": "What lets a server safely ignore a repeated write?", "opts": ["A longer session", "An idempotency key", "HTTPS", "A cached response"], "correct": 1, "exp": "The key lets the server recognise a retry of a request it already applied."}
  ],
  "Error Handling": [
    {"q": "Which failures are worth retrying automatically?", "opts": ["All failures", "4xx errors", "Timeouts and 5xx errors, with backoff", "Parse failures"], "correct": 2, "exp": "Server-side and transient failures may succeed on retry; client errors will not."},
    {"q": "What should be shown to the user when a call fails?", "opts": ["Nothing", "The HTTP status code", "The exception class name", "A plain explanation and, where useful, a retry action"], "correct": 3, "exp": "Users need to know what happened and what they can do about it."},
    {"q": "Why is silent failure the worst option?", "opts": ["The user cannot tell anything went wrong or report it", "It breaks the layout", "It slows the app", "It uses more battery"], "correct": 0, "exp": "An invisible failure is undiagnosable and reads as the app simply not working."}
  ],
  "API Authentication": [
    {"q": "Where should an API token be sent?", "opts": ["In the URL query string", "In the Authorization header", "In a cookie", "In the user agent"], "correct": 1, "exp": "Headers are not logged in the way URLs are along the request path."},
    {"q": "What should be assumed about a key compiled into an APK?", "opts": ["It cannot be read", "It is secure", "It can be extracted and should be treated as public", "It is encrypted"], "correct": 2, "exp": "APKs can be decompiled, so embedded keys must be restricted at the provider."},
    {"q": "Where should a token be stored on the device?", "opts": ["A text file", "The manifest", "SharedPreferences", "EncryptedSharedPreferences"], "correct": 3, "exp": "Encrypted storage protects the token if the device is compromised."}
  ],
  "Consuming Third-Party APIs": [
    {"q": "What should be checked before designing around a third-party API?", "opts": ["Rate limits, pricing and terms of use", "Its programming language", "Its release date", "Its logo"], "correct": 0, "exp": "These constraints shape whether the design is viable and affordable."},
    {"q": "Why wrap a third-party API behind your own interface?", "opts": ["It is faster", "It allows the provider to be replaced without rewriting the app", "It removes rate limits", "It avoids authentication"], "correct": 1, "exp": "An abstraction confines the dependency to one implementation class."},
    {"q": "How should responses be handled to respect rate limits?", "opts": ["Call from a background thread", "Retry more often", "Cache them so repeated needs do not repeat calls", "Use several keys"], "correct": 2, "exp": "Caching reduces call volume and improves offline behaviour at the same time."}
  ],
  "Camera Integration": [
    {"q": "What permission does delegating to the device camera app require?", "opts": ["READ_MEDIA_IMAGES", "WRITE_EXTERNAL_STORAGE", "CAMERA", "None"], "correct": 3, "exp": "The user operates their own camera app, so your app needs no camera permission."},
    {"q": "When is CameraX the right choice?", "opts": ["When you need an in-app preview or custom capture", "When avoiding permissions", "For gallery viewing", "For a single profile photo"], "correct": 0, "exp": "CameraX is for cases that require control the camera app cannot provide."},
    {"q": "What is used to share the captured file safely with the camera app?", "opts": ["A raw file path", "A FileProvider URI", "SharedPreferences", "An intent extra containing the bytes"], "correct": 1, "exp": "FileProvider grants temporary access without exposing the filesystem path."}
  ],
  "Photo Capture": [
    {"q": "Why do portrait photos often display sideways?", "opts": ["The layout is wrong", "The camera is faulty", "The file is stored landscape with a rotation flag that must be honoured", "Android rotates images"], "correct": 2, "exp": "EXIF orientation must be applied when displaying the image."},
    {"q": "What should be stored in the database for a photo?", "opts": ["A thumbnail", "The camera model", "The image bytes", "The file path"], "correct": 3, "exp": "Keeping binaries out of the database keeps queries fast and the file manageable."},
    {"q": "What risk comes from loading a full-size bitmap into a small view?", "opts": ["OutOfMemoryError", "A slow network", "A permission error", "A blurry image"], "correct": 0, "exp": "Full-resolution bitmaps consume far more memory than the display requires."}
  ],
  "Image Gallery": [
    {"q": "What permission does the Photo Picker require?", "opts": ["READ_MEDIA_IMAGES", "None", "READ_EXTERNAL_STORAGE", "MANAGE_EXTERNAL_STORAGE"], "correct": 1, "exp": "The system picker returns only the selected item, so no broad permission is needed."},
    {"q": "What does the Photo Picker return?", "opts": ["A bitmap", "All images on the device", "A URI for only the selected item", "A file path"], "correct": 2, "exp": "Access is scoped to what the user explicitly chose."},
    {"q": "What is needed to use a picked URI after an app restart?", "opts": ["A copy in SharedPreferences", "Storage permission", "Nothing", "A persistable URI permission"], "correct": 3, "exp": "Without taking persistable permission, access is lost when the process ends."}
  ],
  "Audio Playback": [
    {"q": "What must an app do when another app takes audio focus?", "opts": ["Pause or duck, and resume when appropriate", "Stop permanently", "Increase volume", "Continue playing"], "correct": 0, "exp": "Respecting focus is what stops audio from playing over calls and navigation."},
    {"q": "Where should a media player be released?", "opts": ["onCreate", "onStop", "onResume", "It never needs releasing"], "correct": 1, "exp": "Players hold significant system resources that must be freed when the screen stops."},
    {"q": "What is required for playback that continues in the background?", "opts": ["A ViewModel", "Nothing", "A foreground service with a media notification", "A broadcast receiver"], "correct": 2, "exp": "Background playback needs a foreground service so Android does not kill it."}
  ],
  "Video Playback": [
    {"q": "What does adaptive bitrate streaming do?", "opts": ["Downloads the whole video first", "Removes the audio track", "Compresses the file once", "Adjusts quality to the available bandwidth during playback"], "correct": 3, "exp": "It trades resolution for continuity rather than stalling."},
    {"q": "When should a video player be released?", "opts": ["In onStop, and recreated in onStart", "In onCreate", "After playback finishes only", "Never"], "correct": 0, "exp": "Holding a player while the screen is stopped wastes memory and battery."},
    {"q": "What should an app do before a large download on a metered connection?", "opts": ["Proceed silently", "Warn the user", "Cancel it", "Switch to audio"], "correct": 1, "exp": "Data costs money, and unexpected usage is a common complaint."}
  ],
  "GPS & Location Services": [
    {"q": "Which accuracy should an app request?", "opts": ["Whichever is faster", "Always fine", "The coarsest that satisfies the feature", "Always background"], "correct": 2, "exp": "Requesting more than needed increases refusals and battery cost."},
    {"q": "What is true of background location since Android 10?", "opts": ["It is unavailable", "It needs no prompt", "It is automatic", "It is a separate permission requiring justification for Play"], "correct": 3, "exp": "Background access is granted separately and reviewed by Play."},
    {"q": "What must an app handle when the user grants approximate location only?", "opts": ["The feature must work with reduced accuracy", "The app should exit", "Fine location is granted anyway", "Nothing changes"], "correct": 0, "exp": "Users can downgrade to approximate, and the app must still function."}
  ],
  "Maps Integration": [
    {"q": "How should an API key for Maps be protected?", "opts": ["Obfuscated in code", "Restricted by package name and signing certificate", "Stored in SharedPreferences", "Sent over HTTP"], "correct": 1, "exp": "Restriction at the provider makes an extracted key useless elsewhere."},
    {"q": "What should be done with a large number of map markers?", "opts": ["Disable zoom", "Add them all individually", "Cluster them", "Reduce the map size"], "correct": 2, "exp": "Clustering keeps rendering responsive as the number of points grows."},
    {"q": "When is a static map image preferable?", "opts": ["On tablets", "For navigation", "Always", "When the user does not need to interact with the map"], "correct": 3, "exp": "A static image avoids the memory, battery and network cost of a live map."}
  ],
  "Sensors": [
    {"q": "Where must a sensor listener be unregistered?", "opts": ["onPause or onStop", "onCreate", "It unregisters itself", "onDestroy only"], "correct": 0, "exp": "Leaving it registered continues delivering events and draining the battery."},
    {"q": "What should be checked before using a sensor?", "opts": ["The Android version", "That the device actually has that sensor", "The screen size", "The locale"], "correct": 1, "exp": "Sensor availability varies by device and a missing sensor returns null."},
    {"q": "How does the chosen sampling delay affect the app?", "opts": ["It affects permissions", "Not at all", "A faster delay increases battery consumption", "It changes accuracy only"], "correct": 2, "exp": "More frequent events mean more CPU wake-ups and more power used."}
  ],
  "Permissions Management": [
    {"q": "When should a runtime permission be requested?", "opts": ["During installation", "In onCreate", "At first launch", "When the user activates the feature that needs it"], "correct": 3, "exp": "Context makes the reason obvious, which markedly increases grant rates."},
    {"q": "What are the three outcomes an app must handle?", "opts": ["Granted, denied, and permanently denied", "Granted only", "Denied and cancelled", "Granted and denied"], "correct": 0, "exp": "Permanent denial cannot be re-prompted and requires directing the user to Settings."},
    {"q": "What must accompany every runtime permission request?", "opts": ["A toast", "A declaration in the manifest", "A dialog", "A ViewModel"], "correct": 1, "exp": "Undeclared permissions cannot be granted regardless of the runtime request."}
  ],
  "Material Design Principles": [
    {"q": "What does using Material components provide automatically?", "opts": ["Offline capability", "Faster network calls", "Correct touch targets, ripple feedback and theme support", "Smaller APK size"], "correct": 2, "exp": "The components implement the system's behaviour, including accessibility basics."},
    {"q": "What is dynamic colour in Material 3?", "opts": ["A dark mode toggle", "A gradient generator", "A random palette", "A palette derived from the user's wallpaper"], "correct": 3, "exp": "Dynamic colour personalises the app palette from the system wallpaper."},
    {"q": "What spacing scale does Material typically use?", "opts": ["Multiples of 8dp", "Pixels", "Percentages", "Multiples of 5dp"], "correct": 0, "exp": "An 8dp grid keeps spacing consistent across components and screens."}
  ],
  "Themes": [
    {"q": "Why should layouts reference theme attributes rather than literal colours?", "opts": ["It is shorter", "So the appearance changes with the theme, including dark mode", "It compiles faster", "It reduces APK size"], "correct": 1, "exp": "Attribute references resolve per theme; literals never change."},
    {"q": "Where does the dark variant of a theme live?", "opts": ["build.gradle", "themes.xml", "values-night/", "The manifest"], "correct": 2, "exp": "Resource qualifiers supply the night-mode variants automatically."},
    {"q": "What is the visible symptom of a hard-coded colour?", "opts": ["A slow layout", "A missing view", "A crash", "A panel that stays light in dark mode"], "correct": 3, "exp": "It does not respond to the theme change, so it stands out once dark mode is on."}
  ],
  "Colors": [
    {"q": "What minimum contrast ratio does body text require?", "opts": ["4.5:1", "10:1", "1.5:1", "2:1"], "correct": 0, "exp": "WCAG requires at least 4.5:1 for normal-sized body text."},
    {"q": "What does Material 3 organise colours into?", "opts": ["A gradient", "Roles such as primary, surface and error", "A single accent", "Random samples"], "correct": 1, "exp": "Roles let the same semantic colour adapt across themes."},
    {"q": "Why should colour alone never convey meaning?", "opts": ["It breaks dark mode", "It looks plain", "Users with colour vision deficiency cannot perceive the distinction", "It renders slowly"], "correct": 2, "exp": "Meaning must also be carried by text, shape or icon."}
  ],
  "Typography": [
    {"q": "Which unit should text sizes use?", "opts": ["px", "pt", "dp", "sp"], "correct": 3, "exp": "Only sp scales with the user's accessibility font-size preference."},
    {"q": "What is the consequence of setting text in dp?", "opts": ["The app ignores the user's font-size setting", "Faster rendering", "Smaller APK", "Sharper text"], "correct": 0, "exp": "Users who enlarged their system font see no change, which can make the app unusable."},
    {"q": "How many font families should a typical app use?", "opts": ["At least four", "One or two", "One per screen", "As many as the design needs"], "correct": 1, "exp": "Restraint in type families is what keeps an interface coherent."}
  ],
  "M11:Buttons": [
    {"q": "How many filled buttons should a screen typically have?", "opts": ["None", "As many as needed", "One", "Two"], "correct": 2, "exp": "A single filled button establishes the primary action unambiguously."},
    {"q": "What is the minimum touch target size?", "opts": ["16dp", "64dp", "24dp", "48dp"], "correct": 3, "exp": "48dp is the accessible minimum regardless of the button's visual size."},
    {"q": "How should a button be labelled?", "opts": ["With the verb describing the action", "With an icon only", "With the screen name", "With OK or Yes"], "correct": 0, "exp": "Verb labels are understandable without reading the surrounding text."}
  ],
  "Cards": [
    {"q": "What does elevation on a card convey?", "opts": ["Importance of the app", "That the card sits above the background as a distinct surface", "Loading state", "Selection"], "correct": 1, "exp": "Elevation communicates surface hierarchy, not decoration."},
    {"q": "What should be avoided with cards?", "opts": ["Consistent elevation", "Rounded corners", "Nesting cards inside cards", "Making them clickable"], "correct": 2, "exp": "Nested surfaces destroy the hierarchy elevation is meant to express."},
    {"q": "When should a whole card be clickable?", "opts": ["Only on tablets", "Only with a button inside", "Never", "When the card represents a single item the user can open"], "correct": 3, "exp": "A card representing one entity should behave as one tap target."}
  ],
  "Animations": [
    {"q": "What is an appropriate duration for most UI transitions?", "opts": ["200-300ms", "600ms", "1 second", "50ms"], "correct": 0, "exp": "Short transitions read as responsive; longer ones become tedious with repetition."},
    {"q": "What should animation communicate?", "opts": ["The app's personality", "What changed and where it came from", "Loading progress only", "Brand colours"], "correct": 1, "exp": "Motion is most valuable when it explains a change in state."},
    {"q": "Which accessibility setting must animations respect?", "opts": ["Screen reader", "Font size", "Reduce motion", "High contrast"], "correct": 2, "exp": "Some users experience discomfort from motion and disable it system-wide."}
  ],
  "Responsive Layouts": [
    {"q": "Which layout adapts best to varying screen sizes?", "opts": ["Fixed-width LinearLayout", "FrameLayout with fixed dp", "AbsoluteLayout", "ConstraintLayout with match-constraints"], "correct": 3, "exp": "Constraint-based sizing responds to available space rather than assuming it."},
    {"q": "What does the sw600dp qualifier target?", "opts": ["Screens whose smallest width is at least 600dp", "Foldables only", "Android 6 and above", "Landscape only"], "correct": 0, "exp": "Smallest-width qualifiers select layouts by available space."},
    {"q": "Which device should be tested to find layout problems fastest?", "opts": ["The newest flagship", "The smallest and cheapest device you support", "A tablet", "An emulator only"], "correct": 1, "exp": "Constrained screens expose clipping and overflow that large screens hide."}
  ],
  "Dark Mode": [
    {"q": "What makes dark mode straightforward to add?", "opts": ["Disabling animations", "A third-party library", "Having themed with attributes rather than literal colours", "Using fewer screens"], "correct": 2, "exp": "Attribute references resolve to the night palette automatically."},
    {"q": "Why is pure black with pure white text avoided?", "opts": ["It is not supported", "It breaks contrast rules", "It uses more battery", "It is harsh to read and makes accents appear to vibrate"], "correct": 3, "exp": "Material uses dark greys and muted accents for visual comfort."},
    {"q": "How is elevation expressed in dark mode?", "opts": ["Lighter surface colours", "Thicker borders", "It is not expressed", "Stronger shadows"], "correct": 0, "exp": "Shadows are ineffective on dark backgrounds, so elevated surfaces are lightened."}
  ],
  "User Registration": [
    {"q": "Where should password requirements be communicated?", "opts": ["After a failed submission", "Beside the field, before submission", "In the privacy policy", "In a help screen"], "correct": 1, "exp": "Stating the rule up front prevents the failure rather than explaining it."},
    {"q": "Why should an app never store passwords itself?", "opts": ["Passwords are too long", "Storage limits", "Secure hashing, reset and verification are easy to implement insecurely", "It is illegal everywhere"], "correct": 2, "exp": "Delegating to an auth provider avoids a well-known class of vulnerability."},
    {"q": "What is the effect of extra registration fields?", "opts": ["Faster sign-up", "Improved security", "Better data quality", "Fewer completed registrations"], "correct": 3, "exp": "Each additional field increases abandonment, so ask only for what is needed."}
  ],
  "Login System": [
    {"q": "Why should login errors not distinguish wrong email from wrong password?", "opts": ["Distinct messages let an attacker enumerate registered accounts", "It is faster", "Users prefer it", "It is simpler"], "correct": 0, "exp": "Identical messages prevent account enumeration."},
    {"q": "What should happen to the login screen after a successful sign-in?", "opts": ["Stay on the back stack", "Be popped from the back stack", "Be shown again", "Be cached"], "correct": 1, "exp": "Otherwise back returns the signed-in user to the login form."},
    {"q": "Why check for an existing session at startup?", "opts": ["To clear the cache", "To speed up the app", "So returning users are not forced to sign in again", "To refresh the token"], "correct": 2, "exp": "Persisted sessions are the difference between a usable app and an irritating one."}
  ],
  "M12:Password Security": [
    {"q": "What matters most in password strength?", "opts": ["Monthly rotation", "Avoiding dictionary words only", "Symbols and mixed case", "Length"], "correct": 3, "exp": "Length and unpredictability resist guessing far better than composition rules."},
    {"q": "Why should paste not be blocked on a password field?", "opts": ["It prevents password managers from working, encouraging weaker passwords", "It slows the app", "It breaks validation", "It is a bug"], "correct": 0, "exp": "Blocking paste pushes users toward passwords short enough to type by hand."},
    {"q": "Who should be responsible for hashing passwords?", "opts": ["The app", "The authentication provider or server", "The database", "The user"], "correct": 1, "exp": "Client-side hashing does not substitute for correct server-side storage."}
  ],
  "Biometric Authentication": [
    {"q": "What must always accompany biometric authentication?", "opts": ["A tutorial", "A network connection", "A fallback such as device credential or password", "A fingerprint sensor"], "correct": 2, "exp": "Sensors fail and enrolments change, so an alternative path is required."},
    {"q": "What does the app receive from BiometricPrompt?", "opts": ["The user's biometric template", "A hash of the fingerprint", "The fingerprint image", "A success or failure result only"], "correct": 3, "exp": "Biometric data stays in secure hardware; the app only learns the outcome."},
    {"q": "What is biometric unlock best used for?", "opts": ["Quickly unlocking an existing session", "Encrypting the database", "Verifying email", "Replacing authentication entirely"], "correct": 0, "exp": "It is a convenience layer over an already-established identity."}
  ],
  "Secure Data Storage": [
    {"q": "What should be used for storing a session token?", "opts": ["SharedPreferences", "EncryptedSharedPreferences", "A text file", "The manifest"], "correct": 1, "exp": "Encrypted storage with a Keystore-backed key protects the token if the device is compromised."},
    {"q": "What is the strongest available data-protection measure?", "opts": ["Frequent rotation", "Longer keys", "Not storing the data at all", "Obfuscation"], "correct": 2, "exp": "Data that is never stored cannot be exposed."},
    {"q": "What should be excluded from automatic backup?", "opts": ["Images", "Log files", "Layouts", "Sensitive files and credentials"], "correct": 3, "exp": "Backups can carry sensitive data off the device unless explicitly excluded."}
  ],
  "M12:App Permissions": [
    {"q": "What happens to permissions declared in the manifest?", "opts": ["They appear on the store listing and are reviewed", "They are removed automatically", "They only affect runtime", "They stay private"], "correct": 0, "exp": "Users and Play both see the declared permission set."},
    {"q": "What should be done with permissions before release?", "opts": ["Add more for future features", "Audit and remove any the app does not use", "Move them to code", "Nothing"], "correct": 1, "exp": "Unused permissions accumulate during development and harm the listing."},
    {"q": "What is preferable to requesting a permission?", "opts": ["Explaining it better", "Requesting it earlier", "Using an approach that needs no permission", "Requesting a broader one"], "correct": 2, "exp": "System pickers and delegation avoid the permission entirely."}
  ],
  "M12:Security Best Practices": [
    {"q": "What should be assumed about code shipped in an APK?", "opts": ["It is signed and therefore private", "It is obfuscated", "It is encrypted", "It can be decompiled and read"], "correct": 3, "exp": "Anything in the package is recoverable, so it can hold no meaningful secret."},
    {"q": "Why must validation be repeated on the server?", "opts": ["Client-side checks can be bypassed by a modified app", "It is required by Play", "To reduce app size", "For performance"], "correct": 0, "exp": "The client is under the user's control and cannot be trusted to enforce rules."},
    {"q": "What is the most common route by which vulnerabilities enter an app?", "opts": ["Custom code", "Outdated dependencies", "The manifest", "Layout files"], "correct": 1, "exp": "Most application code comes from libraries, and their flaws are inherited."}
  ],
  "Debugging Apps": [
    {"q": "Which frame in a stack trace is usually most relevant?", "opts": ["Any frame mentioning Android", "The topmost framework frame", "The first frame in your own package", "The last frame"], "correct": 2, "exp": "Framework frames are the path; your frame is where the fault occurred."},
    {"q": "Where is the underlying cause of a wrapped exception usually found?", "opts": ["In the manifest", "In Logcat warnings", "The first line", "In the 'Caused by:' section"], "correct": 3, "exp": "Caused-by chains reveal the original exception beneath the wrapper."},
    {"q": "What should be done before attempting a fix?", "opts": ["Reproduce the problem reliably", "Update dependencies", "Clear the cache", "Refactor the class"], "correct": 0, "exp": "Without reliable reproduction you cannot confirm a fix worked."}
  ],
  "Unit Testing": [
    {"q": "Where do unit tests run?", "opts": ["On a device", "On the JVM, without a device", "In the emulator", "On a server"], "correct": 1, "exp": "JVM tests are fast because they need no Android runtime."},
    {"q": "What makes logic unit-testable?", "opts": ["Making it public", "Adding comments", "Separating it from Activities and Fragments", "Using Java"], "correct": 2, "exp": "Framework-coupled logic cannot be exercised without a device."},
    {"q": "What is the standard structure of a unit test?", "opts": ["Given, when", "Init, run", "Setup, teardown", "Arrange, act, assert"], "correct": 3, "exp": "Arrange the inputs, act on the unit, assert the outcome."}
  ],
  "UI Testing": [
    {"q": "What should UI tests focus on?", "opts": ["Critical user journeys", "Individual functions", "Layout files", "Every screen"], "correct": 0, "exp": "UI tests are expensive, so they are best spent on flows that must not break."},
    {"q": "How should asynchronous work be handled in an Espresso test?", "opts": ["Thread.sleep", "Idling resources", "Longer timeouts", "Retrying the test"], "correct": 1, "exp": "Sleeps are unreliable and slow; idling resources synchronise properly."},
    {"q": "Where do Espresso tests live?", "opts": ["src/debug/", "src/test/", "src/androidTest/", "src/main/"], "correct": 2, "exp": "Instrumented tests requiring a device live in the androidTest source set."}
  ],
  "Performance Testing": [
    {"q": "What is the frame budget for 60fps?", "opts": ["1s", "50ms", "100ms", "16ms"], "correct": 3, "exp": "Roughly 16 milliseconds per frame is required to sustain 60 frames per second."},
    {"q": "What should precede any optimisation?", "opts": ["Profiling to find what is actually slow", "Updating dependencies", "Adding caching", "Refactoring"], "correct": 0, "exp": "Without measurement, effort usually goes to the wrong place."},
    {"q": "Which device best reveals performance problems?", "opts": ["The newest flagship", "A low-end device", "An emulator on a fast machine", "A tablet"], "correct": 1, "exp": "Constrained hardware exposes problems that fast devices absorb."}
  ],
  "Crash Analysis": [
    {"q": "How should crashes be prioritised?", "opts": ["By device model", "By total occurrences", "By number of users affected", "By newest first"], "correct": 2, "exp": "One user crashing repeatedly can outweigh a widespread crash in raw counts."},
    {"q": "What must be uploaded to keep release stack traces readable?", "opts": ["The manifest", "The source code", "The APK", "The mapping file"], "correct": 3, "exp": "Without the mapping, obfuscated traces cannot be deobfuscated."},
    {"q": "What is a non-fatal exception log used for?", "opts": ["Recording handled failures worth investigating", "Testing", "Reducing app size", "Crashing the app deliberately"], "correct": 0, "exp": "Non-fatals surface problems the app recovered from but should not have hit."}
  ],
  "Memory Management": [
    {"q": "What is the classic cause of an Android memory leak?", "opts": ["Too many activities", "Holding an Activity context beyond its lifecycle", "Large layouts", "Too many strings"], "correct": 1, "exp": "A retained context keeps the whole view hierarchy alive."},
    {"q": "Which tool detects leaks automatically in debug builds?", "opts": ["Profiler", "Espresso", "LeakCanary", "Crashlytics"], "correct": 2, "exp": "LeakCanary watches for retained objects and reports the reference chain."},
    {"q": "What consumes the most memory in a typical app?", "opts": ["Layout files", "Log statements", "Strings", "Bitmaps"], "correct": 3, "exp": "Images are by far the largest allocations, especially when loaded unscaled."}
  ],
  "App Optimization": [
    {"q": "What does publishing an Android App Bundle achieve?", "opts": ["Play serves only the code and resources each device needs", "Better security", "Automatic testing", "Faster builds"], "correct": 0, "exp": "Bundles let Play generate device-specific APKs, cutting download size."},
    {"q": "Which image format typically reduces app size significantly?", "opts": ["BMP", "WebP", "TIFF", "Uncompressed PNG"], "correct": 1, "exp": "WebP achieves much smaller files than PNG at equivalent quality."},
    {"q": "Why does app size matter especially in low-bandwidth markets?", "opts": ["It affects ranking only", "Play requires it", "Downloads cost money and storage is limited", "Large apps crash"], "correct": 2, "exp": "Data cost and device storage are real constraints for many users."}
  ],
  "Preparing for Release": [
    {"q": "Why must the release build be tested separately?", "opts": ["It has a different UI", "Play requires it", "It is faster", "Shrinking and obfuscation can change behaviour"], "correct": 3, "exp": "R8 may remove code that reflection relies on, which debug builds retain."},
    {"q": "What must be kept when obfuscation is enabled?", "opts": ["The mapping file", "The source code only", "The manifest", "The debug APK"], "correct": 0, "exp": "Without the mapping, release crash reports cannot be deobfuscated."},
    {"q": "What should be done with unused permissions before release?", "opts": ["Keep them for later", "Remove them", "Move them to code", "Document them"], "correct": 1, "exp": "Unused permissions appear on the listing and invite scrutiny."}
  ],
  "App Signing": [
    {"q": "Why must an update be signed with the same key?", "opts": ["To reduce size", "For encryption", "Android verifies the signature matches the installed app", "For Play ranking"], "correct": 2, "exp": "Signature matching is what proves the update comes from the original publisher."},
    {"q": "What does Play App Signing change?", "opts": ["It removes signing", "It signs automatically without a key", "Nothing", "Google holds the app signing key while you use a resettable upload key"], "correct": 3, "exp": "It makes key loss recoverable, which it previously was not."},
    {"q": "What must never be committed to a repository?", "opts": ["The keystore and its passwords", "Layout files", "The mapping file", "The manifest"], "correct": 0, "exp": "A leaked keystore allows anyone to sign builds as you."}
  ],
  "Versioning": [
    {"q": "Which value must increase with every Play upload?", "opts": ["versionName", "versionCode", "minSdk", "targetSdk"], "correct": 1, "exp": "Play uses the integer versionCode to order releases and rejects duplicates."},
    {"q": "What does versionName represent?", "opts": ["The package name", "The build number Play uses", "The human-readable version users see", "The minimum Android version"], "correct": 2, "exp": "versionName is display text and has no ordering significance."},
    {"q": "What does minSdk determine?", "opts": ["The app size", "The signing key", "The Play category", "Which devices can install the app"], "correct": 3, "exp": "Devices below minSdk cannot install the app at all."}
  ],
  "Creating App Icons": [
    {"q": "What are the two layers of an adaptive icon?", "opts": ["Foreground and background", "Vector and raster", "Small and large", "Light and dark"], "correct": 0, "exp": "The launcher masks the two layers into the device's chosen shape."},
    {"q": "At roughly what size is an app icon usually seen?", "opts": ["512dp", "48dp", "192dp", "24dp"], "correct": 1, "exp": "Launcher icons render at around 48dp, so fine detail is lost."},
    {"q": "Why must key content stay inside the safe zone?", "opts": ["Play requires it", "For file size", "Different launchers mask the icon into different shapes", "For colour accuracy"], "correct": 2, "exp": "Content outside the safe zone can be cropped by the mask."}
  ],
  "Feature Graphics": [
    {"q": "What are the required dimensions of a Play feature graphic?", "opts": ["1920 x 1080", "800 x 400", "512 x 512", "1024 x 500"], "correct": 3, "exp": "Play specifies exactly 1024 by 500 pixels for the feature graphic."},
    {"q": "Why should essential content be centred?", "opts": ["Edges may be cropped and a play button may overlay the centre", "It loads faster", "Play requires centring", "For symmetry"], "correct": 0, "exp": "Placement varies, so content near the edges can be lost."},
    {"q": "How much text should a feature graphic carry?", "opts": ["A full description", "Little, and large enough to read on a phone", "None at all", "The privacy policy"], "correct": 1, "exp": "Small text is unreadable at the size the graphic is actually displayed."}
  ],
  "Screenshots": [
    {"q": "How many phone screenshots does Play require as a minimum?", "opts": ["Eight", "One", "Two", "Four"], "correct": 2, "exp": "At least two phone screenshots are required for a listing."},
    {"q": "Which screenshots matter most?", "opts": ["All equally", "The tablet ones", "The last two", "The first two or three"], "correct": 3, "exp": "Most users decide from the first few before scrolling further."},
    {"q": "What should screenshots show?", "opts": ["The app with realistic content", "The settings screen", "The splash screen", "Empty states"], "correct": 0, "exp": "Realistic content demonstrates value; empty screens demonstrate nothing."}
  ],
  "Writing App Descriptions": [
    {"q": "How long is the Play short description?", "opts": ["40 characters", "80 characters", "200 characters", "4,000 characters"], "correct": 1, "exp": "The short description is capped at 80 characters and appears in search results."},
    {"q": "What should the description lead with?", "opts": ["The version history", "The technology stack", "What the app does for the user", "The developer's name"], "correct": 2, "exp": "Users search for outcomes, not implementations."},
    {"q": "What does Play penalise in descriptions?", "opts": ["Bullet points", "Localisation", "Long descriptions", "Keyword stuffing"], "correct": 3, "exp": "Artificial keyword repetition is treated as a policy violation."}
  ],
  "Publishing to Google Play": [
    {"q": "Which file format should be uploaded to Play?", "opts": ["Android App Bundle (.aab)", "ZIP", "JAR", "APK"], "correct": 0, "exp": "Play requires App Bundles so it can generate optimised APKs per device."},
    {"q": "What most commonly stalls a first submission?", "opts": ["Code quality", "The Data safety declaration", "App size", "The icon"], "correct": 1, "exp": "Declarations must match actual behaviour, and inaccuracy is a policy violation."},
    {"q": "What should be used before publishing to production?", "opts": ["A beta APK by email", "Nothing", "Internal and closed testing tracks", "A second account"], "correct": 2, "exp": "Testing tracks let real devices exercise the release build before public launch."}
  ],
  "App Updates": [
    {"q": "What is the purpose of a staged rollout?", "opts": ["Reducing app size", "Avoiding signing", "Faster review", "Limiting exposure so a bad release affects few users"], "correct": 3, "exp": "Releasing gradually allows a regression to be caught and halted early."},
    {"q": "Why can a database change work in testing and break for users?", "opts": ["Testers install fresh, while users upgrade from an older schema", "Play modifies the database", "Room is unreliable", "Devices differ"], "correct": 0, "exp": "A fresh install creates the new schema; an upgrade needs a migration."},
    {"q": "What must accompany every update?", "opts": ["A new signing key", "A higher versionCode", "A new package name", "New screenshots"], "correct": 1, "exp": "Play rejects uploads whose versionCode has not increased."}
  ],
  "Using ChatGPT for Coding": [
    {"q": "What are AI assistants least reliable at?", "opts": ["Interpreting stack traces", "Explaining concepts", "Specific current API details", "Drafting boilerplate"], "correct": 2, "exp": "APIs change faster than model training data, producing deprecated or invented calls."},
    {"q": "What must be done with every AI-suggested change?", "opts": ["Document it", "Obfuscate it", "Ship it", "Compile and test it"], "correct": 3, "exp": "Suggestions are drafts, not verified code."},
    {"q": "What must never be pasted into a public AI assistant?", "opts": ["API keys, credentials or client data", "Error messages", "Layout XML", "Public documentation"], "correct": 0, "exp": "Anything sent to a third-party service should be treated as disclosed."}
  ],
  "GitHub Copilot": [
    {"q": "Where is Copilot strongest?", "opts": ["Security-critical logic", "Repetitive, predictable boilerplate", "Business rules unique to your app", "Architecture decisions"], "correct": 1, "exp": "Common patterns are well represented in its training and largely determined."},
    {"q": "What is the risk of accepting suggestions without reading them?", "opts": ["Compile errors only", "Slower builds", "Subtle bugs and incorrect logic entering the codebase", "Larger APK"], "correct": 2, "exp": "Suggestions are plausible by construction, which is not the same as correct."},
    {"q": "What limits the quality of a suggestion?", "opts": ["The IDE theme", "Internet speed", "Typing speed", "The context it can see, which is limited to provided files"], "correct": 3, "exp": "It cannot reason about code it has not been shown."}
  ],
  "Firebase AI Features": [
    {"q": "What is the main advantage of on-device ML Kit models?", "opts": ["They work offline and keep data on the device", "They are free of charge", "They need no code", "Higher accuracy"], "correct": 0, "exp": "Local inference removes both the connectivity requirement and the data transfer."},
    {"q": "What must be handled when using recognition APIs?", "opts": ["Nothing", "Failure and low-confidence results", "Model training", "Server scaling"], "correct": 1, "exp": "Accuracy varies with input quality, so the app must handle poor results."},
    {"q": "What is the trade-off of bundling a model with the app?", "opts": ["Requires a server", "Lower accuracy", "Increased app size", "Slower inference"], "correct": 2, "exp": "Bundled models work immediately but add to the download size."}
  ],
  "AI Code Debugging": [
    {"q": "How should an AI debugging suggestion be treated?", "opts": ["As documentation", "As a code review", "As a verified diagnosis", "As a hypothesis to test"], "correct": 3, "exp": "The assistant cannot run your app, so its explanation must be verified."},
    {"q": "What should be included alongside the error message?", "opts": ["The stack trace and the relevant code", "The manifest only", "Screenshots", "The app icon"], "correct": 0, "exp": "Context is what makes the suggestion specific rather than generic."},
    {"q": "What does it mean if a fix works but you cannot explain why?", "opts": ["The bug is fixed", "You have not understood the problem and it may recur", "The tool was wrong", "The code is optimal"], "correct": 1, "exp": "Unexplained fixes tend to mask rather than resolve the underlying fault."}
  ],
  "Productivity Tools": [
    {"q": "Which tool has the highest impact on solo productivity?", "opts": ["A larger IDE font", "A faster emulator", "Version control with frequent commits", "A second monitor"], "correct": 2, "exp": "Committing regularly makes experimentation cheap and mistakes recoverable."},
    {"q": "When should a manual task be automated?", "opts": ["Never", "Only in teams", "Immediately", "After doing it manually about three times"], "correct": 3, "exp": "Repetition is the signal that automation will pay back the effort."},
    {"q": "What should be tested alongside the emulator?", "opts": ["At least one real low-end device", "A second emulator", "A web browser", "A tablet"], "correct": 0, "exp": "Real constrained hardware reveals performance and layout issues emulators hide."}
  ],
  "AI-Assisted UI Design": [
    {"q": "What do AI-generated layouts commonly ignore?", "opts": ["Colour", "Touch target sizes and contrast requirements", "Screen orientation", "File formats"], "correct": 1, "exp": "Generated designs optimise for appearance rather than platform accessibility rules."},
    {"q": "What must be verified before shipping generated imagery?", "opts": ["Its colour profile", "Its file size", "Its licensing", "Its resolution only"], "correct": 2, "exp": "Generated assets can carry licensing implications that affect commercial use."},
    {"q": "What is the appropriate role for AI in UI design?", "opts": ["Replacing user testing", "Setting accessibility rules", "Making final decisions", "Generating options for you to evaluate"], "correct": 3, "exp": "It broadens the option set; the judgement about fitness remains human."}
  ],
  "Building a Developer Portfolio": [
    {"q": "What matters most in a portfolio?", "opts": ["A few complete, working applications", "Use of the newest frameworks", "Lines of code", "The number of projects"], "correct": 0, "exp": "Completeness demonstrates the ability to finish, which is what employers doubt."},
    {"q": "What should accompany each portfolio project?", "opts": ["A video only", "Source code, screenshots and a description of the problem it solves", "A price", "A certificate"], "correct": 1, "exp": "Context lets a reviewer judge the work rather than guess at it."},
    {"q": "Why are locally relevant projects effective?", "opts": ["They rank higher", "They are easier", "You understand the requirement and can explain your decisions", "They need less code"], "correct": 2, "exp": "Genuine domain understanding produces better answers in an interview."}
  ],
  "Publishing Projects on GitHub": [
    {"q": "What is the most-read file in a repository?", "opts": ["build.gradle", "The manifest", "The main activity", "The README"], "correct": 3, "exp": "Most visitors judge the project from the README alone."},
    {"q": "What must be done about a secret that was committed?", "opts": ["Rotate or revoke it, because it remains in history", "Rename the file", "Make the repo private", "Delete it in a later commit"], "correct": 0, "exp": "History retains the value, so the credential itself must be invalidated."},
    {"q": "When should .gitignore be added?", "opts": ["After the first push", "Before the first commit", "Only for large projects", "At release"], "correct": 1, "exp": "Adding it first prevents secrets entering the history at all."}
  ],
  "Writing Technical Documentation": [
    {"q": "What should a code comment explain?", "opts": ["When it was added", "What the line does", "Why the code is written that way", "Who wrote it"], "correct": 2, "exp": "The code states what; comments should capture reasoning that is otherwise invisible."},
    {"q": "What is the practical test of good project documentation?", "opts": ["Whether it is formatted", "Whether it has diagrams", "Its length", "Whether a stranger can build and run the project from it"], "correct": 3, "exp": "Documentation exists to enable someone who lacks your context."},
    {"q": "Why is outdated documentation worse than none?", "opts": ["It actively misleads the reader", "It slows the build", "It cannot be deleted", "It takes space"], "correct": 0, "exp": "Readers trust it and are sent in the wrong direction."}
  ],
  "Creating a Resume": [
    {"q": "What should lead a resume when work experience is limited?", "opts": ["Education", "Projects", "Hobbies", "References"], "correct": 1, "exp": "Demonstrable work substitutes for experience the candidate does not yet have."},
    {"q": "What makes a resume claim persuasive?", "opts": ["Formatting", "Technical vocabulary", "Specific, quantified outcomes", "Length"], "correct": 2, "exp": "Numbers and specifics are checkable in a way that adjectives are not."},
    {"q": "What should accompany each listed project?", "opts": ["The IDE used", "The start date", "Its file size", "A link to the repository or store listing"], "correct": 3, "exp": "Links let a reviewer verify the claim immediately."}
  ],
  "Preparing for Interviews": [
    {"q": "What do interviewers assess when asking about your project decisions?", "opts": ["Judgement", "Typing speed", "Framework familiarity only", "Memory"], "correct": 0, "exp": "Reasoning about trade-offs is what distinguishes candidates with similar knowledge."},
    {"q": "What is a better response than a confident wrong answer?", "opts": ["Changing the subject", "Saying you would look it up and explaining how you would find out", "Guessing", "Silence"], "correct": 1, "exp": "Honesty about limits, paired with a method, reads as trustworthy."},
    {"q": "Why practise explanations aloud?", "opts": ["It reduces nerves only", "It aids memorisation", "Explaining clearly is a separate skill from knowing", "Interviewers time responses"], "correct": 2, "exp": "Many candidates know more than they can articulate under pressure."}
  ],
  "Freelancing Platforms": [
    {"q": "Why are the first freelance contracts hardest to win?", "opts": ["Fewer jobs exist", "Skills are unproven technically", "Lower pay", "Platform visibility depends on ratings you do not yet have"], "correct": 3, "exp": "Ranking algorithms favour established profiles, creating a cold-start problem."},
    {"q": "What makes a proposal effective?", "opts": ["Addressing the client's specific problem", "The lowest price", "Its length", "Listing your skills first"], "correct": 0, "exp": "Clients respond to evidence you understood their requirement."},
    {"q": "Why should early work stay inside the platform's payment system?", "opts": ["It is faster", "It provides payment protection and dispute resolution", "It is cheaper", "It is required by law"], "correct": 1, "exp": "Off-platform work forfeits the protections that make early contracts safe."}
  ],
  "Working with Clients": [
    {"q": "What is scope creep?", "opts": ["A pricing error", "A slow build", "Gradual accumulation of unagreed additions to the work", "A missed deadline"], "correct": 2, "exp": "Small requests compound until the project far exceeds what was priced."},
    {"q": "How should additional requests be handled?", "opts": ["Absorb them to keep the client happy", "Defer indefinitely", "Refuse them", "Through a written change process with a price"], "correct": 3, "exp": "Quoting each change keeps the relationship good and the project viable."},
    {"q": "What should be agreed at the outset besides price?", "opts": ["Ownership of source code and accounts", "The colour scheme", "The Android version", "The IDE"], "correct": 0, "exp": "Ownership disputes after delivery are difficult and avoidable."}
  ],
  "Pricing Mobile App Projects": [
    {"q": "Which pricing model suits a poorly defined scope?", "opts": ["Fixed price", "Hourly", "Free trial", "Revenue share"], "correct": 1, "exp": "Hourly billing protects against scope that cannot yet be estimated."},
    {"q": "What do new freelancers most commonly get wrong?", "opts": ["Quoting ranges", "Overcharging", "Underpricing by omitting revisions, communication and support", "Charging hourly"], "correct": 2, "exp": "Estimates usually cover only build time, which is a fraction of the work."},
    {"q": "What tends to result from underpricing?", "opts": ["Faster growth", "Higher ratings", "Better clients", "Demanding clients and unsustainable work"], "correct": 3, "exp": "Price signals value, and the lowest bids attract the most difficult engagements."}
  ],
  "Certificate Requirements": [
    {"q": "What pass mark does the final assessment require?", "opts": ["70%", "85%", "50%", "60%"], "correct": 0, "exp": "The final Certificate assessment requires 70% or higher, with unlimited retakes."},
    {"q": "How many portfolio apps must be built in Module 17?", "opts": ["Five", "Ten", "Three", "Two"], "correct": 1, "exp": "All ten Module 17 apps are required for graduation."},
    {"q": "What matters most to a prospective employer?", "opts": ["The number of lessons", "The certificate alone", "The published projects and their source code", "The course length"], "correct": 2, "exp": "Working applications demonstrate ability in a way a certificate cannot."}
  ]
  };
})();
