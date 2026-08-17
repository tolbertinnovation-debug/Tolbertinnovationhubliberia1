/* TIH LEARNING HUB CONFIG + forced video maps (cache-bust) */
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
/* Per-topic videos: force load after curricula (bypasses stale CF curriculum cache) */
document.write('<script src="webdev-video-map.js?v=2"><\/script>');
document.write('<script src="data-video-map.js?v=2"><\/script>');
document.write('<script src="ai-video-map.js?v=3"><\/script>');
document.write('<script src="ai-topic-videos.js?v=3"><\/script>');
