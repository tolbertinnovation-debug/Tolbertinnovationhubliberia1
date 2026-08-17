/* TIH LEARNING HUB — VIDEO OVERRIDES
   Restored base maps from last known-good commit, then AI map merges from ai-topic-videos.js */
(function () {
  function load(src, next) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = function () { if (next) next(); };
    s.onerror = function () { if (next) next(); };
    (document.head || document.documentElement).appendChild(s);
  }
  /* Base topic maps (english-success, toefl, computer-literacy, ai-cybersecurity, ph-career) */
  load('https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@383699a19ec382dfb7179a93c3df9dbde75e3c53/topic-videos.js', function () {
    /* AI course per-topic unique videos */
    load('ai-topic-videos.js?v=1');
  });
})();
