/* TIH LEARNING HUB — VIDEO OVERRIDES
   Base maps from last known-good commit, then AI topic overrides. */
(function () {
  function load(src, next) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = function () { if (next) next(); };
    s.onerror = function () { if (next) next(); };
    (document.head || document.documentElement).appendChild(s);
  }
  load('https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@383699a19ec382dfb7179a93c3df9dbde75e3c53/topic-videos.js', function () {
    load('ai-topic-videos.js?v=2');
  });
})();
