/* TIH Computer Literacy — Detailed formal lesson notes loader
   Loads part files that define window.TIH_TOPIC_NOTES['computer-literacy']. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_NOTES = window.TIH_TOPIC_NOTES || {};
  window.TIH_TOPIC_NOTES['computer-literacy'] = window.TIH_TOPIC_NOTES['computer-literacy'] || {};
  var parts = ['complit-notes-1.js?v=1', 'complit-notes-2.js?v=1', 'complit-notes-3.js?v=1', 'complit-notes-4.js?v=1'];
  parts.forEach(function (src) {
    if (document.querySelector('script[data-tih-notes="' + src + '"]')) return;
    var s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.setAttribute('data-tih-notes', src);
    (document.head || document.documentElement).appendChild(s);
  });
})();
