/* TIH — Fix YouTube Error 153 (Video unavailable / player configuration error).
   YouTube requires a valid HTTP Referer + origin for embeds (policy since 2025). */
(function () {
  try {
    var m = document.querySelector('meta[name="referrer"]');
    if (!m) {
      m = document.createElement('meta');
      m.setAttribute('name', 'referrer');
      document.head.appendChild(m);
    }
    m.setAttribute('content', 'strict-origin-when-cross-origin');
  } catch (e) {}

  function wrapPlayer() {
    if (!window.YT || !window.YT.Player || window.YT.Player.__tihPatched) return false;
    var Orig = window.YT.Player;
    function Patched(el, opts) {
      opts = opts || {};
      opts.host = 'https://www.youtube.com';
      opts.playerVars = Object.assign({}, opts.playerVars || {}, {
        origin: window.location.origin,
        enablejsapi: 1
      });
      return new Orig(el, opts);
    }
    Patched.prototype = Orig.prototype;
    Patched.__tihPatched = true;
    window.YT.Player = Patched;
    if (typeof console !== 'undefined') console.log('[TIH] YouTube Error 153 fix applied');
    return true;
  }

  var n = 0;
  var iv = setInterval(function () {
    if (wrapPlayer() || ++n > 80) clearInterval(iv);
  }, 100);

  try {
    var obs = new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        m.addedNodes && m.addedNodes.forEach(function (node) {
          if (node && node.tagName === 'IFRAME' && node.src && node.src.indexOf('youtube') !== -1) {
            node.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            if (node.src.indexOf('youtube-nocookie.com') !== -1) {
              node.src = node.src.replace('youtube-nocookie.com', 'youtube.com');
            }
            if (node.src.indexOf('origin=') === -1 && window.location && window.location.origin) {
              node.src += (node.src.indexOf('?') >= 0 ? '&' : '?') + 'origin=' + encodeURIComponent(window.location.origin);
            }
          }
        });
      });
    });
    if (document.documentElement) {
      obs.observe(document.documentElement, { childList: true, subtree: true });
    }
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    var poster = document.getElementById('videoPoster');
    if (!poster) return;
    poster.addEventListener('click', function () {
      setTimeout(function () {
        var host = document.getElementById('ytPlayer');
        if (!host) return;
        var id = window.currentVideoId;
        if (!id) return;
        setTimeout(function () {
          try {
            if (window.ytPlayer && window.ytPlayer.getPlayerState && window.ytPlayer.getPlayerState() === 1) return;
          } catch (e) {}
          var wrap = document.getElementById('videoContainer');
          if (wrap) {
            wrap.classList.add('playing');
            wrap.classList.add('fallback');
          }
          host.innerHTML =
            '<iframe title="Course Lesson" referrerpolicy="strict-origin-when-cross-origin" ' +
            'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
            'allowfullscreen src="https://www.youtube.com/embed/' +
            id +
            '?autoplay=1&rel=0&modestbranding=1&playsinline=1&fs=1&enablejsapi=1&origin=' +
            encodeURIComponent(window.location.origin) +
            '"></iframe>';
        }, 2800);
      }, 100);
    }, true);
  });
})();
