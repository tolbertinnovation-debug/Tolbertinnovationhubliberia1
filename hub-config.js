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
document.write('<script src="course-duration-3weeks.js?v=1"><\/script>');
/* Per-topic videos for all mapped courses */
document.write('<script src="webdev-video-map.js?v=2"><\/script>');
document.write('<script src="data-video-map.js?v=2"><\/script>');
document.write('<script src="ai-video-map.js?v=3"><\/script>');
document.write('<script src="ai-topic-videos.js?v=3"><\/script>');
document.write('<script src="design-video-map.js?v=1"><\/script>');
document.write('<script src="android-video-map.js?v=1"><\/script>');
document.write('<script src="cyber-video-map.js?v=1"><\/script>');
document.write('<script src="marketing-video-map.js?v=5"><\/script>');
document.write('<script src="entrepreneurship-video-map.js?v=1"><\/script>');
document.write('<script src="office-video-map.js?v=1"><\/script>');
