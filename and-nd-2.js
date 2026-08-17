/* TIH Android formal notes — Modules 4–6 */
(function(){
if(typeof window==='undefined')return;
window.TIH_AND_NOTES_DATA=window.TIH_AND_NOTES_DATA||[];
var D=window.TIH_AND_NOTES_DATA;
function a(t,m,d,b){D.push([t,m,d,b]);}

a("XML Layouts","Module 4: Android User Interface (UI)","XML layouts declare the structure and hierarchy of UI elements that Android inflates into Views at runtime.","<p>Layouts live under <code>res/layout</code>. Prefer ConstraintLayout for flexible modern screens.</p>");

a("TextView","Module 4: Android User Interface (UI)","A TextView displays read-only text on screen—titles, labels, and messages.","<p>Style text with attributes or themes; avoid stuffing long logic into the layout file.</p>");

a("EditText","Module 4: Android User Interface (UI)","An EditText is an editable text field for user input such as names, emails, and search queries.","<p>Set <code>inputType</code> for keyboards (number, email, password). Validate before use.</p>");

a("Button","Module 4: Android User Interface (UI)","A Button is a clickable control that triggers an action when the user taps it.","<p>Wire clicks in code with <code>setOnClickListener</code>. Give accessible text labels.</p>");

a("ImageView","Module 4: Android User Interface (UI)","An ImageView displays drawable resources or loaded images on the screen.","<p>Use appropriate densities; consider scaling and contentDescription for accessibility.</p>");

a("RecyclerView","Module 4: Android User Interface (UI)","RecyclerView efficiently displays large scrolling lists by recycling item views as the user scrolls.","<p>Requires an Adapter and LayoutManager. Prefer it over older ListView for new work.</p>");

a("ScrollView","Module 4: Android User Interface (UI)","A ScrollView allows content taller than the screen to scroll vertically (or horizontally with HorizontalScrollView).","<p>Do not nest scrolling views carelessly; prefer RecyclerView for long lists of similar items.</p>");

a("ConstraintLayout","Module 4: Android User Interface (UI)","ConstraintLayout positions views using constraints to parents and siblings—flexible and efficient for complex screens.","<p>It is the default choice for many modern Android layouts.</p>");

a("LinearLayout","Module 4: Android User Interface (UI)","LinearLayout arranges children in a single row or column (horizontal or vertical orientation).","<p>Simple and useful for toolbars of actions or stacked form fields.</p>");

a("RelativeLayout","Module 4: Android User Interface (UI)","RelativeLayout positions children relative to each other or the parent. Newer projects often prefer ConstraintLayout instead.","<p>Understand it when maintaining older codebases.</p>");

a("CardView","Module 4: Android User Interface (UI)","CardView presents content in a material-style card with elevation and rounded corners—ideal for list items and summaries.","<p>Often used inside RecyclerView item layouts.</p>");

a("Material Design Components","Module 4: Android User Interface (UI)","Material Design Components are ready-made UI widgets (buttons, text fields, FABs, etc.) that follow Google’s Material guidelines.","<p>They speed up polished UI and improve consistency across the app.</p>");

a("Click Events","Module 5: User Interaction","Click events are callbacks that run when the user taps a view—most commonly via <code>setOnClickListener</code>.","<p>Keep listeners short; move heavy work off the main thread when needed.</p>");

a("Input Validation","Module 5: User Interaction","Input validation checks user-entered data for required fields, formats, and ranges before processing or saving.","<p>Show clear error messages on the field that failed. Never trust input alone on a server.</p>");

a("Toast Messages","Module 5: User Interaction","A Toast is a short, non-blocking popup message that appears briefly to confirm an action or show simple feedback.","<p>Use for lightweight notices; prefer Snackbars when action is needed.</p>");

a("Dialog Boxes","Module 5: User Interaction","Dialog boxes are modal windows that require a decision or display important information before the user continues.","<p>Use for confirmations (delete, logout). Keep copy clear and buttons explicit.</p>");

a("Menus","Module 5: User Interaction","Menus present secondary actions—options menu, context menu, or popup menu—without crowding the main layout.","<p>Define menu XML under <code>res/menu</code> and handle item clicks in code.</p>");

a("Navigation Drawer","Module 5: User Interaction","A navigation drawer is a side panel of destinations, typically opened from a hamburger icon on larger information architectures.","<p>Pair with Navigation Component for consistent back behaviour.</p>");

a("Bottom Navigation","Module 5: User Interaction","Bottom navigation provides three to five top-level destinations with icons and labels along the bottom of the screen.","<p>Best for peer destinations the user switches between often.</p>");

a("Intents","Module 5: User Interaction","An Intent is a messaging object used to start activities, services, or deliver data—explicit within your app or implicit to other apps.","<p>Pass extras carefully; validate data when receiving.</p>");

a("Activities","Module 5: User Interaction","An Activity is a single focused screen with a lifecycle. Most traditional Android UIs are one or more activities hosting fragments.","<p>Declare activities in the manifest. Understand onCreate, onStart, onResume, and counterparts.</p>");

a("Fragments","Module 5: User Interaction","A Fragment is a reusable UI portion with its own lifecycle, hosted inside an activity—central to modern multi-screen design.","<p>Prefer one activity with multiple fragments for many apps.</p>");

a("Activity Lifecycle","Module 6: App Navigation","The activity lifecycle is the sequence of callback methods Android calls as an activity is created, started, resumed, paused, stopped, and destroyed.","<p>Save transient state appropriately; release resources in matching teardown callbacks.</p>");

a("Fragment Lifecycle","Module 6: App Navigation","The fragment lifecycle parallels the activity lifecycle with additional attach/createView/destroyView stages tied to the view hierarchy.","<p>Do view setup in the right callback; avoid holding view references after destroyView.</p>");

a("Navigation Component","Module 6: App Navigation","The Navigation Component is Jetpack’s framework for defining destinations and actions in a navigation graph, with safe argument passing and consistent back stack behaviour.","<p>Use NavHostFragment and navigate via directions or IDs.</p>");

a("Passing Data Between Screens","Module 6: App Navigation","Passing data between screens uses Intent extras, Navigation arguments, shared ViewModels, or other architecture components—never global mutable state as a first resort.","<p>Prefer type-safe navigation args where possible.</p>");

a("Deep Links","Module 6: App Navigation","Deep links open a specific app screen from a URL or notification, routing users directly to relevant content.","<p>Declare links in the navigation graph or manifest and handle missing data safely.</p>");

a("Back Stack Management","Module 6: App Navigation","Back stack management controls how destinations are added, popped, and restored when the user presses Back.","<p>Incorrect stack handling confuses users; test Back from every major screen.</p>");

a("Navigation Best Practices","Module 6: App Navigation","Navigation best practices include a single activity where suitable, a clear graph, predictable Back behaviour, and avoiding deep hierarchies without an exit path.","<p>Name destinations clearly; keep arguments minimal.</p>");
})();
