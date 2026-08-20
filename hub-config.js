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

/* Course duration config, applied on every page that shows a course.

   This block used to append ten per-topic video maps as well, on all ten pages
   that include hub-config.js -- a dashboard or a certificate page has no use
   for lesson videos, and the player was already loading five of the same files
   through topic-videos.js. Those maps now live in tih-course-loader.js and are
   fetched only for the course actually open. */
document.addEventListener('DOMContentLoaded', function () {
  var s = document.createElement('script');
  s.src = 'course-duration-3weeks.js?v=2';
  s.async = false;
  document.head.appendChild(s);
});
