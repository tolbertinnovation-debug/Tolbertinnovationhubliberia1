/* TIH AI curriculum loader — restores full curriculum then applies specific per-topic videos. */
(function () {
  function load(src, next) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = function () { if (next) next(); };
    s.onerror = function () { console.error('[AI] failed to load', src); if (next) next(); };
    (document.head || document.documentElement).appendChild(s);
  }
  /* Full 20-module curriculum from last known-good commit */
  load('https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@3cadabf6f12a72d9bf6c800461924e1595e336e2/ai-curriculum.js', function () {
    /* Specific YouTube video for every topic */
    load('ai-video-map.js?v=2');
  });
})();
