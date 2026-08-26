/* TIH ANDROID DEVELOPMENT — one distinct YouTube video per topic.
   Course id: android

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 42 videos across 158 lessons, the worst of them playing on
   twelve.

   Keys are the lesson title with its numeric prefix stripped. No title
   repeats across modules in this course, so no module-qualified keys are
   needed; the apply hook still resolves "M<n>:Title" first should one
   appear later. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.android || !COURSES_DB.android.modules) return;
  var MAP = {
    'Welcome to the Course': 'ayIR5a51Ohg',
    'What is Android App Development?': 'O3-DcAPhbno',
    'Career Opportunities in Android Development': 'smOzLSTaso0',
    'Android Ecosystem Overview': 'vnt2hmmVxKc',
    'Installing Android Studio': 'eLWHwEgD0MU',
    'Setting Up the Development Environment': 'C2gau7opieA',
    'Creating Your First Android Project': 'X5GoYFRicmk',
    'Course Roadmap': 'NNcs9tDdszI',
    'Final Capstone Project': 'dQGzkmN0PLM',
    'Introduction to Kotlin': 'aad8aJe9zsk',
    'Variables and Data Types': 'sV7R7EN3UkA',
    'Operators': 'fJXlpiUfKOE',
    'User Input': 'wCwCsJSCy8Y',
    'Conditional Statements': 'yqX3GV2ycIw',
    'Loops': 'Jplb0Y2Aogs',
    'Functions': '8fxLZPcXr2o',
    'Arrays': 'yEBTiH_KK44',
    'Lists': 'H6Edy4o14xE',
    'Object-Oriented Programming Basics': 'rOs1ERCsbG0',
    'Classes and Objects': 'Je_YXshSFmY',
    'Practice Exercises': 'rIfk6-AybJA',
    'Android Studio Interface': 'nBaL78HC0ls',
    'Project Structure': 'in4plqDNuhU',
    'Emulator Setup': '7kMvjeNkz2g',
    'Running Your First App': 'kL3MCQV2M2s',
    'Gradle Basics': 'lZ8Yx0Azx_A',
    'Android Manifest': '-5jXP4UnF00',
    'Logcat': '78RHCvTQnE0',
    'Debugging Basics': 'j8jQq-kYgDU',
    'Project Organization': 'KZ4DHw1p8hE',
    'Best Practices': '8Wjo1Xw75No',
    'XML Layouts': 'uULYpY4S9_E',
    'TextView': 'Ih74BPiycF8',
    'EditText': 'vUJIHMCoEDU',
    'Button': 'Nw9JF55LDzE',
    'ImageView': 'btBp9xQpLOs',
    'RecyclerView': 'A2_6mI7drVQ',
    'ScrollView': 'MuxRE8sh9mg',
    'ConstraintLayout': 'SGjIEcErSE0',
    'LinearLayout': 'A4_0qhhQzGY',
    'RelativeLayout': 'MeCjfgR86MU',
    'CardView': 'FSxgFKlbV9Y',
    'Material Design Components': '4OO_Evk0jHI',
    'Click Events': 'zYrncPzx2tE',
    'Input Validation': 'AxjKfZr3Crk',
    'Toast Messages': 'L_6poZGNXOo',
    'Dialog Boxes': '3VIzc_uhUCQ',
    'Menus': 'ttkkigp74ds',
    'Navigation Drawer': 'bqC0y_VLq5Q',
    'Bottom Navigation': 'jj5Rd_GCQkY',
    'Intents': 'bjYstsO1PgI',
    'Activities': 'YlIHxIAoHzU',
    'Fragments': 'VL_ccRojUTI',
    'Activity Lifecycle': 'Y88dr_BzYMQ',
    'Fragment Lifecycle': 'Dk00XKVwPC0',
    'Navigation Component': 'EzUl88tzxH0',
    'Passing Data Between Screens': 'GrPAVBOp_fk',
    'Deep Links': 'AvEjbdqyjXw',
    'Back Stack Management': 'H_ItzJp5yVE',
    'Navigation Best Practices': '_aMEOCwb5Ls',
    'SharedPreferences': 'YjgvNzsJYko',
    'Internal Storage': '-LNg-K7SncM',
    'External Storage': 'REISQd3I4RU',
    'SQLite Database': 'IWUXbzfuHvE',
    'Room Database': 'p0nhM5irW7Y',
    'CRUD Operations': 'XyM_BL-fkGM',
    'Data Persistence': 'ODcYBwGOsOI',
    'Offline Storage': 'gztLyRShg2I',
    'Introduction to Firebase': 'uB7WeED1d1w',
    'Firebase Authentication': 'cG26G8WNv-0',
    'Firestore Database': 'eHA9jGT_87Q',
    'Firebase Realtime Database': 'NybmemQxdts',
    'Firebase Storage': 'sXLpkGHbKRY',
    'Cloud Messaging (Push Notifications)': '8I5gCLaS25w',
    'Firebase Analytics': 'LFlE8yV7lJY',
    'Firebase Hosting Overview': 'KiJy5Oi4rRo',
    'Introduction to REST APIs': 'KQgiwIV938A',
    'JSON': 'sRLunCZX2Uc',
    'Retrofit': 'iby1dW_Ze0U',
    'Fetching Data': 'Piomca1b1yA',
    'Sending Data': 'irVP4SKHFZE',
    'Error Handling': 'cu4VueZgCAQ',
    'API Authentication': 'FW7sY7M_E8k',
    'Consuming Third-Party APIs': 'vO9TM9qF0iE',
    'Camera Integration': 'MG8KtxaCKJ8',
    'Photo Capture': 'qKQH0ObuwAw',
    'Image Gallery': '0Zfbi-yAnFQ',
    'Audio Playback': '8sKAiQBFl8Y',
    'Video Playback': 'EGFBKChfn8Y',
    'GPS & Location Services': '5eAqrfdncEM',
    'Maps Integration': 'cBS_qL3BUnM',
    'Sensors': '3bhCSLUE2R4',
    'Permissions Management': 'dKCmyGw_e1Q',
    'Material Design Principles': 'I3eT32LXAKc',
    'Themes': '7pxcL5m7hu4',
    'Colors': 'hbJmm-d94FA',
    'Typography': 'QDp8X43oFy8',
    'Buttons': 'XBeBn0p1X6k',
    'Cards': 'wi-BmgIl6t0',
    'User Registration': 'mgyteUk1Wpc',
    'Login System': 'VgZZemAwLTk',
    'Debugging Apps': 'K2i1LEiJVTw',
    'Unit Testing': 'hCFZv0I9TUk',
    'UI Testing': 'YDU_3WdfkxA',
    'Performance Testing': 'GqH5PyOcoMM',
    'Crash Analysis': '2cQrI8njdgc',
    'Memory Management': 'VvkRe9vP5Oc',
    'App Optimization': 'BgAS5Lx_7ik',
    'Preparing for Release': 'L9sU_aGeQEY',
    'App Signing': 'WOKrelHPefc',
    'Versioning': 'wcexBIANCCk',
    'Creating App Icons': 'lwUo2LAb_F4',
    'Feature Graphics': '1PsByMlw_zE',
    'Screenshots': 'itY1VXp9pkc',
    'Writing App Descriptions': 'Ormjb-BX1sw',
    'Publishing to Google Play': 'GPeTuR_9JwI',
    'App Updates': 'viZuCYJC82w',
    'Using ChatGPT for Coding': '3xu_QrZRYRw',
    'GitHub Copilot': '9QAfAEiN7Gc',
    'Firebase AI Features': 'Vj13SdN6OxU',
    'AI Code Debugging': '98HKq-YQHl4',
    'Productivity Tools': 'IavOJI5OV7g',
    'AI-Assisted UI Design': 'bsSAywnqptc',
    'Building a Developer Portfolio': 'aNVhyN7Dg3Q',
    'Publishing Projects on GitHub': '20JT-wIwTlw',
    'Writing Technical Documentation': 'iCrQFrfq0H0',
    'Creating a Resume': 'GXnGZsucKGI',
    'Preparing for Interviews': 'MDwdcRVFWcY',
    'Freelancing Platforms': '5YHLSQDJmYs',
    'Working with Clients': '_TXQA3HiDkw',
    'Pricing Mobile App Projects': 'VFThizI2c28',
    'Calculator App': '2hSHgungOKI',
    'To-Do List App': 'b21fiIyOW4A',
    'Notes App': 'sv6tsU3mlHg',
    'Quiz App': 'pXZR0QiwvrU',
    'Weather App': 'gj0g1a75Lmo',
    'Expense Tracker': '1V9EAcW0MZQ',
    'News App': 'tloFc8yarBA',
    'Chat Application': 'BCuVHEp6Ihc',
    'E-commerce App': 'Scw4t8Ag-YA',
    'School Management App': 'u7Xm5TeEUNM',
    'Project Planning': 'LfHkAUzup5E',
    'UI Design': 'XxTaVK0oZFU',
    'Database Design': '2ECwPYq1Sl4',
    'Authentication': 'QrNhz5QgrU4',
    'API Integration': 'h8Zh5MCZGqc',
    'Testing': 'C3cVD8Jq2gY',
    'Deployment': 'fOi3U8oGpb8',
    'Final Presentation': 'PcwIcKo9DEU',
    'Certificate Requirements': '2JbdGXxh1V0',
    'Animations': 'l9ui4Lfgr-E',
    'Responsive Layouts': 'Lr62GxuChaM',
    'Dark Mode': 'aQP-mUGWh1U',
    'Password Security': 'iIjHHZNb_Qk',
    'Biometric Authentication': 'uOx286VTAwM',
    'Secure Data Storage': 'Qh7F1yftnHg',
    'App Permissions': 'n0NlxUyA7FI',
    'Security Best Practices': 'BRyR5cv6VNg'
  };
  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  COURSES_DB.android.modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[ANDROID videos] distinct video applied to ' + applied + ' lessons');
  }
})();
