/* TIH LEARNING HUB CONFIG + forced per-topic video maps */
window.TIH_SUPABASE_CONFIG = {
  url: "https://oracluubhmxobcnsvcxz.supabase.co",
  anonKey: "sb_publishable_tPiTlfiFlSJedb1VMsrjNA_sZ10Bri8"
};
window.TIH_PAYMENTS_CONFIG = {
  enabled: false,
  provider: "flutterwave",
  publicKey: "",
  functionsBase: "https://oracluubhmxobcnsvcxz.supabase.co/functions/v1",
  currency: "USD"
};
/* All courses: 3 weeks to complete */
window.TIH_COURSE_DURATION_WEEKS = 3;
window.TIH_COURSE_DURATION_LABEL = '3 weeks';
window.TIH_COURSE_DURATION_FULL = '3 weeks to complete';

/* Per-topic videos for all mapped courses.
   Each video-map file (e.g. webdev-video-map.js) mutates
   COURSES_DB.<id>.modules directly and requires that course's curriculum
   builder to have already run, so this waits for DOMContentLoaded — which
   fires only after every script on the page has executed, including ones
   loaded with `defer` (some pages defer their heavy curriculum scripts so
   a slow connection can't freeze the page before it, which delays exactly
   when those builders finish relative to a plain blocking script here).
   Scripts are appended with async=false so they still execute in this
   fixed order relative to each other, but appending only happens after
   DOMContentLoaded so none of them block the parser beforehand — the
   original document.write() version forced the browser to fetch and run
   each one synchronously, one at a time, stalling the rest of the page
   (including a login form's own script) behind eleven network round trips. */
document.addEventListener('DOMContentLoaded', function () {
  var files = [
    'course-duration-3weeks.js?v=2',
    'webdev-video-map.js?v=2',
    'data-video-map.js?v=2',
    'ai-video-map.js?v=3',
    'ai-topic-videos.js?v=3',
    'design-video-map.js?v=1',
    'android-video-map.js?v=1',
    'cyber-video-map.js?v=1',
    'marketing-video-map.js?v=5',
    'entrepreneurship-video-map.js?v=1',
    'office-video-map.js?v=1'
  ];
  files.forEach(function (src) {
    var s = document.createElement('script');
    s.src = src;
    s.async = false; // preserve load order among themselves
    document.head.appendChild(s);
  });
});
