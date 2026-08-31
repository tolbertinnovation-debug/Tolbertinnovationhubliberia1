/* ============================================================
   LIBAPPS, SHARED UI HELPERS
   ------------------------------------------------------------
   Formatting and small widgets used by every LibApps page.
   Loaded after libapps-db.js.

   LibUI.esc(text)              -> HTML-escaped string
   LibUI.attr(url)              -> a URL safe to put in src/href, or ''
   LibUI.icon(app, big)         -> icon <img>, or the app's initials
   LibUI.initials(name)         -> up to two letters
   LibUI.size(mb)               -> "8.4 MB"
   LibUI.count(n)               -> "1.2k"
   LibUI.ago(iso)               -> "3 days ago"
   LibUI.date(iso)              -> "12 Mar 2026"
   LibUI.toast(msg, bad)        -> brief message at the bottom of the screen
   LibUI.confirm(opts)          -> Promise<boolean>
   LibUI.lightbox(url)          -> full-screen image
   ============================================================ */
var LibUI = (function () {
  'use strict';

  /* Everything a learner typed passes through here before it reaches
     innerHTML. App names, descriptions and comments are all attacker-
     controlled text, so this is the one function that must never be
     skipped. */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Image and link URLs are stored in the database, so a crafted RPC call
     could put anything in one. Only https: and the site's own relative
     paths are allowed out again. */
  function attr(url) {
    var u = String(url == null ? '' : url).trim();
    if (!u) return '';
    if (/^https:\/\//i.test(u)) return esc(u);
    if (/^[a-z0-9._~\-/]+$/i.test(u) && !/^\/\//.test(u)) return esc(u);
    return '';
  }

  function initials(name) {
    var parts = String(name || '?').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  function icon(app, big) {
    var cls = 'la-icon' + (big ? ' la-icon-lg' : '');
    var src = attr(app && app.icon_url);
    if (src) {
      return '<img class="' + cls + '" src="' + src + '" alt="" loading="lazy" decoding="async" ' +
             'onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),' +
             '{className:\'' + cls + '\',textContent:this.dataset.i}))" ' +
             'data-i="' + esc(initials(app && app.name)) + '" />';
    }
    return '<span class="' + cls + '">' + esc(initials(app && app.name)) + '</span>';
  }

  function size(mb) {
    var n = Number(mb);
    if (!isFinite(n) || n <= 0) return '—';
    if (n < 1) return Math.round(n * 1024) + ' KB';
    return (n < 10 ? n.toFixed(1) : Math.round(n)) + ' MB';
  }

  function count(n) {
    n = Number(n) || 0;
    if (n < 1000) return String(n);
    if (n < 1000000) return (n / 1000).toFixed(n < 10000 ? 1 : 0).replace(/\.0$/, '') + 'k';
    return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
  }

  function ago(iso) {
    var t = Date.parse(iso);
    if (!isFinite(t)) return '';
    var s = Math.max(0, (Date.now() - t) / 1000);
    if (s < 60) return 'just now';
    var m = s / 60;      if (m < 60) return Math.floor(m) + (Math.floor(m) === 1 ? ' minute ago' : ' minutes ago');
    var h = m / 60;      if (h < 24) return Math.floor(h) + (Math.floor(h) === 1 ? ' hour ago' : ' hours ago');
    var d = h / 24;      if (d < 30) return Math.floor(d) + (Math.floor(d) === 1 ? ' day ago' : ' days ago');
    var mo = d / 30.44;  if (mo < 12) return Math.floor(mo) + (Math.floor(mo) === 1 ? ' month ago' : ' months ago');
    var y = d / 365.25;  return Math.floor(y) + (Math.floor(y) === 1 ? ' year ago' : ' years ago');
  }

  function date(iso) {
    var t = new Date(iso);
    if (isNaN(t.getTime())) return '';
    return t.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  var _toastEl = null, _toastTimer = null;
  function toast(msg, bad) {
    if (!_toastEl) {
      _toastEl = document.createElement('div');
      _toastEl.className = 'la-toast';
      _toastEl.setAttribute('role', 'status');
      _toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(_toastEl);
    }
    _toastEl.textContent = msg;
    _toastEl.classList.toggle('bad', !!bad);
    // Reflow first, so a second toast re-runs the transition.
    void _toastEl.offsetWidth;
    _toastEl.classList.add('show');
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(function () { _toastEl.classList.remove('show'); }, 3600);
  }

  /* A real dialog rather than window.confirm, because deleting an app is
     destructive and deserves to say what it is deleting. */
  function confirmBox(opts) {
    var o = opts || {};
    return new Promise(function (resolve) {
      var back = document.createElement('div');
      back.className = 'la-modal show';
      back.innerHTML =
        '<div class="la-modal-box" role="dialog" aria-modal="true">' +
          '<h3>' + esc(o.title || 'Are you sure?') + '</h3>' +
          '<p>' + esc(o.body || '') + '</p>' +
          '<div class="la-modal-acts">' +
            '<button type="button" class="la-btn la-btn-quiet" data-no>' + esc(o.cancel || 'Cancel') + '</button>' +
            '<button type="button" class="la-btn ' + (o.danger ? 'la-btn-red' : '') + '" data-yes>' +
              esc(o.confirm || 'Confirm') + '</button>' +
          '</div>' +
        '</div>';
      function close(v) {
        document.removeEventListener('keydown', onKey);
        back.remove();
        resolve(v);
      }
      function onKey(e) { if (e.key === 'Escape') close(false); }
      back.querySelector('[data-no]').onclick = function () { close(false); };
      back.querySelector('[data-yes]').onclick = function () { close(true); };
      back.onclick = function (e) { if (e.target === back) close(false); };
      document.addEventListener('keydown', onKey);
      document.body.appendChild(back);
      back.querySelector('[data-yes]').focus();
    });
  }

  function lightbox(url) {
    var src = attr(url);
    if (!src) return;
    var back = document.createElement('div');
    back.className = 'la-modal la-lightbox show';
    back.innerHTML = '<img src="' + src + '" alt="" />';
    function close() { document.removeEventListener('keydown', onKey); back.remove(); }
    function onKey(e) { if (e.key === 'Escape') close(); }
    back.onclick = close;
    document.addEventListener('keydown', onKey);
    document.body.appendChild(back);
  }

  /* One error block for every LibApps page. When the database has refused the
     learner's credentials, an explanation on its own is a dead end, so the
     block carries the button that actually resolves it. */
  function errorBox(err, backHref, backLabel) {
    var msg = (window.LibApps && LibApps.message) ? LibApps.message(err) : 'Something went wrong.';
    var html = '<div class="la-note la-note-error">' + esc(msg) + '</div>';
    var acts = [];
    if (window.LibApps && LibApps.isAuthError && LibApps.isAuthError(err)) {
      var here = location.pathname.split('/').pop() + location.search;
      acts.push('<a class="la-btn" href="hub-dashboard?next=' + esc(encodeURIComponent(here)) +
                '">Sign in again</a>');
    }
    if (backHref) acts.push('<a class="la-btn la-btn-quiet" href="' + esc(backHref) + '">' +
                            esc(backLabel || 'Go back') + '</a>');
    if (acts.length) html += '<p style="display:flex;gap:.6rem;flex-wrap:wrap;">' + acts.join('') + '</p>';
    return html;
  }

  return {
    esc: esc, attr: attr, icon: icon, initials: initials, errorBox: errorBox,
    size: size, count: count, ago: ago, date: date,
    toast: toast, confirm: confirmBox, lightbox: lightbox
  };
})();
if (typeof window !== 'undefined') window.LibUI = LibUI;
