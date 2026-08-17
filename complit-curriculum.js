/* TIH Computer Literacy curriculum — bootstrap restore from last good commit */
(function () {
  if (typeof window === 'undefined') return;
  if (window.__TIH_COMPLIT_BOOTSTRAPPED) return;
  window.__TIH_COMPLIT_BOOTSTRAPPED = true;
  var urls = [
    'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@25cc6ec5d47b7407cd5b9e05f1df18c853064958/complit-curriculum.js',
    'https://raw.githubusercontent.com/tolbertinnovation-debug/Tolbertinnovationhubliberia1/25cc6ec5d47b7407cd5b9e05f1df18c853064958/complit-curriculum.js'
  ];
  function load(i) {
    if (i >= urls.length) {
      if (console && console.error) console.error('[COMPLIT] Failed to restore curriculum bootstrap');
      return;
    }
    var s = document.createElement('script');
    s.src = urls[i];
    s.async = false;
    s.onload = function () { if (console && console.log) console.log('[COMPLIT] curriculum restored from backup');
    };
    s.onerror = function () { load(i + 1); };
    (document.head || document.documentElement).appendChild(s);
  }
  load(0);
})();
