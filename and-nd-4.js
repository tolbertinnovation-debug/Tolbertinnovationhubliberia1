/* TIH Android formal notes — Modules 10–13 */
(function(){
if(typeof window==='undefined')return;
window.TIH_AND_NOTES_DATA=window.TIH_AND_NOTES_DATA||[];
var D=window.TIH_AND_NOTES_DATA;
function a(t,m,d,b){D.push([t,m,d,b]);}

a("Camera Integration","Module 10: Media & Device Features","Camera integration lets the app capture photos or video using the system camera UI or CameraX APIs, subject to runtime permissions.","<p>Prefer CameraX for modern apps. Always handle permission denial gracefully.</p>");

a("Photo Capture","Module 10: Media & Device Features","Photo capture obtains a still image from the camera and saves or displays it in the app.","<p>Store images in appropriate directories; compress when uploading.</p>");

a("Image Gallery","Module 10: Media & Device Features","Image gallery access lets users pick existing photos via the system picker or MediaStore—preferred over broad storage permissions when possible.","<p>Use the photo picker APIs on recent Android versions.</p>");

a("Audio Playback","Module 10: Media & Device Features","Audio playback plays sound files or streams using MediaPlayer, ExoPlayer, or related APIs.","<p>Handle lifecycle: pause when appropriate; release players to avoid leaks.</p>");

a("Video Playback","Module 10: Media & Device Features","Video playback displays video content with controls for play, pause, and seeking—often via ExoPlayer for robust streaming support.","<p>Test on multiple API levels; respect data usage on mobile networks.</p>");

a("GPS & Location Services","Module 10: Media & Device Features","Location services provide device coordinates through Fused Location Provider or related APIs, requiring location permissions and user trust.","<p>Request the minimum accuracy needed; explain why location is required.</p>");

a("Maps Integration","Module 10: Media & Device Features","Maps integration embeds interactive maps (e.g., Google Maps SDK) to show places, markers, and routes.","<p>API keys must be restricted. Handle map lifecycle with the host fragment/activity.</p>");

a("Sensors","Module 10: Media & Device Features","Sensors expose device hardware such as accelerometer, gyroscope, and light sensor for motion and environment-aware features.","<p>Unregister listeners when the screen is not active to save battery.</p>");

a("Permissions Management","Module 10: Media & Device Features","Permissions management requests dangerous permissions at runtime, explains purpose, and degrades features if the user denies access.","<p>Request in context, not all at launch. Follow Play policy for sensitive permissions.</p>");

a("Material Design Principles","Module 11: Material Design","Material Design is Google’s design system emphasising hierarchy, motion, and adaptive layouts for consistent, usable interfaces.","<p>Apply spacing, elevation, and colour roles deliberately—not randomly.</p>");

a("Themes","Module 11: Material Design","Themes define global colours, typography, and component styles applied across activities and widgets.","<p>Use Theme.Material3 (or MaterialComponents) and colour attributes instead of hard-coded hex everywhere.</p>");

a("Colors","Module 11: Material Design","Colour systems in Material use roles (primary, secondary, surface, error) so UI remains coherent in light and dark modes.","<p>Ensure contrast for readability and accessibility.</p>");

a("Typography","Module 11: Material Design","Typography scales define text styles for headlines, titles, and body copy so hierarchy is clear without visual clutter.","<p>Limit typefaces; rely on the type scale for consistency.</p>");

a("Buttons","Module 11: Material Design","Material buttons (filled, outlined, text, FAB) communicate primary and secondary actions with standard appearance and behaviour.","<p>One primary action per screen when possible.</p>");

a("Cards","Module 11: Material Design","Cards group related content and actions in a contained surface—common for feeds and dashboards.","<p>Keep card content scannable; avoid nesting interactive elements that fight each other.</p>");

a("Animations","Module 11: Material Design","Animations guide attention and express relationships between UI states—transitions, shared elements, and micro-interactions.","<p>Keep motion short and purposeful; respect reduced-motion preferences when relevant.</p>");

a("Responsive Layouts","Module 11: Material Design","Responsive layouts adapt to phone, foldable, and tablet widths using constraints, WindowSizeClass, or alternative layouts.","<p>Test landscape and large screens early, not only on a single phone emulator.</p>");

a("Dark Mode","Module 11: Material Design","Dark mode provides a night-friendly colour palette that follows system settings and reduces glare.","<p>Define day/night resources or dynamic colour; verify contrast in both themes.</p>");

a("User Registration","Module 12: Authentication & Security","User registration creates a new account with validated credentials and stores identity via a backend such as Firebase Auth.","<p>Confirm email/phone when required; never log passwords.</p>");

a("Login System","Module 12: Authentication & Security","A login system verifies credentials and establishes an authenticated session for protected screens and API calls.","<p>Handle wrong passwords, lockouts, and network failures without leaking whether an email exists if policy requires.</p>");

a("Password Security","Module 12: Authentication & Security","Password security means strong password rules on the client where appropriate, secure transmission, and never storing plain-text passwords in the app or your own database.","<p>Prefer established auth providers that hash and protect credentials server-side.</p>");

a("Biometric Authentication","Module 12: Authentication & Security","Biometric authentication uses fingerprint or face unlock (BiometricPrompt) to confirm the user for sensitive actions after an initial secure login.","<p>Always provide a fallback method. Biometrics unlock keys—they are not a full replacement for account recovery design.</p>");

a("Secure Data Storage","Module 12: Authentication & Security","Secure data storage protects tokens and secrets using encrypted shared preferences or the Android Keystore where appropriate.","<p>Do not embed API secrets in the APK as plain strings.</p>");

a("App Permissions","Module 12: Authentication & Security","App permissions gate access to sensitive device capabilities; declare them in the manifest and request at runtime when required.","<p>Less is more: fewer permissions improve Play approval and user trust.</p>");

a("Security Best Practices","Module 12: Authentication & Security","Security best practices include HTTPS only, certificate awareness, input validation, least privilege, safe WebView use, and keeping dependencies updated.","<p>Threat-model your app: what must an attacker never read or forge?</p>");

a("Debugging Apps","Module 13: Testing & Debugging","Debugging apps is the systematic process of reproducing failures, inspecting state, and fixing root causes using Logcat, breakpoints, and crash traces.","<p>Fix one issue at a time; verify with a regression check.</p>");

a("Unit Testing","Module 13: Testing & Debugging","Unit tests verify small pieces of logic in isolation (ViewModels, pure functions) without requiring a full device UI.","<p>Fast unit tests catch regressions early. Aim for meaningful cases, not only happy paths.</p>");

a("UI Testing","Module 13: Testing & Debugging","UI tests automate interactions with screens (Espresso or Compose testing) to confirm critical user flows still work.","<p>Automate login, core navigation, and checkout-like paths when applicable.</p>");

a("Performance Testing","Module 13: Testing & Debugging","Performance testing measures startup time, frame rate, memory, and network efficiency to find jank and resource waste.","<p>Use Android Profiler. Optimise the worst offender first.</p>");

a("Crash Analysis","Module 13: Testing & Debugging","Crash analysis interprets stack traces and crash reports (Play Console, Firebase Crashlytics) to prioritise and fix stability issues.","<p>Group by root cause; ship fixes in timely updates.</p>");

a("Memory Management","Module 13: Testing & Debugging","Memory management avoids leaks (lingering activity/fragment references) and excessive allocations that cause stutter or OOM crashes.","<p>Watch for static references to Context and unbounded caches.</p>");

a("App Optimization","Module 13: Testing & Debugging","App optimization improves speed, size, and battery use through lean layouts, efficient lists, image sizing, and R8/ProGuard where appropriate.","<p>Measure before and after; do not optimise blindly.</p>");
})();
