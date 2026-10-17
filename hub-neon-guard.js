/* Injected only by the explicitly enabled Vercel preview build. */
(function () {
  'use strict';
  window.TIH_NEON_WEBSITE_PREVIEW = true;
  function source(input) {
    try { var u = new URL(typeof input === 'string' || input instanceof URL ? input : input.url, location.href); return /(^|\.)supabase\.(co|in)$/.test(u.hostname); } catch (_) { return false; }
  }
  var fetchOriginal = window.fetch.bind(window);
  window.fetch = function (input, options) {
    if (source(input)) return Promise.reject(new Error('Live Supabase requests are disabled in this migration preview.'));
    return fetchOriginal(input, options);
  };
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) { if (source(url)) throw new Error('Live database requests are disabled in this preview.'); return open.apply(this, arguments); };
  var Socket = window.WebSocket;
  if (Socket) { window.WebSocket = function (url, protocols) { if (source(url)) throw new Error('Live realtime is disabled in this preview.'); return protocols === undefined ? new Socket(url) : new Socket(url, protocols); }; window.WebSocket.prototype = Socket.prototype; }
  document.addEventListener('DOMContentLoaded', function () {
    var notice = document.createElement('aside'); notice.id = 'tih-migration-notice'; notice.setAttribute('role', 'status');
    notice.style.cssText = 'position:relative;z-index:2147483646;background:#eaf2ff;color:#102c55;padding:12px 18px;font:600 14px/1.5 system-ui;text-align:center;border-bottom:2px solid #134fae';
    notice.append('Migration preview · Test records only. Registration, payments and account changes are unavailable. ');
    var link = document.createElement('a'); link.href = '/migration-staff-preview'; link.textContent = 'Staff workspace'; notice.append(link); document.body.prepend(notice);
    if (/\/hub-admin(?:\.html)?\/?$/.test(location.pathname)) location.replace('/migration-staff-preview');
  });
})();
