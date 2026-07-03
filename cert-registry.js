/* ============================================================
   TIH LEARNING HUB — CERTIFICATE REGISTRY
   ------------------------------------------------------------
   A thin layer over the certificate store. When a Firebase config
   is present (see hub-config.js) it publishes issued certificates
   to a public Firestore collection and looks them up from any
   device. When no config is present, everything degrades safely to
   local-only behaviour — no errors, no blocking.

   Public API (all safe to call unconfigured):
     CertRegistry.isCloudEnabled()          -> boolean
     CertRegistry.publish(certRecord)       -> Promise<boolean>  (best effort)
     CertRegistry.lookup(certId)            -> Promise<record|null>
   A certRecord is: { certId, studentName, courseTitle, date, courseId, category }
   ============================================================ */
var CertRegistry = (function () {
  'use strict';

  var COLLECTION = 'certificates';
  var _initPromise = null;      // resolves to a Firestore instance or null
  var _cfg = (typeof window !== 'undefined' && window.TIH_FIREBASE_CONFIG) || null;

  function isConfigured() {
    return !!(_cfg && _cfg.apiKey && _cfg.projectId);
  }

  // Load a script once, resolving when ready (rejects on error/timeout).
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[data-tih="' + src + '"]');
      if (existing) {
        if (existing.getAttribute('data-loaded') === '1') return resolve();
        existing.addEventListener('load', function () { resolve(); });
        existing.addEventListener('error', reject);
        return;
      }
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.setAttribute('data-tih', src);
      s.onload = function () { s.setAttribute('data-loaded', '1'); resolve(); };
      s.onerror = reject;
      document.head.appendChild(s);
      setTimeout(function () { reject(new Error('timeout loading ' + src)); }, 12000);
    });
  }

  // Lazily initialise Firebase (compat SDK) and return a Firestore handle,
  // or null if it cannot be initialised for any reason.
  function init() {
    if (_initPromise) return _initPromise;
    if (!isConfigured()) { _initPromise = Promise.resolve(null); return _initPromise; }
    _initPromise = loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js')
      .then(function () { return loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js'); })
      .then(function () {
        if (!window.firebase) throw new Error('firebase global missing');
        if (!window.firebase.apps || !window.firebase.apps.length) {
          window.firebase.initializeApp(_cfg);
        }
        return window.firebase.firestore();
      })
      .catch(function () { return null; }); // network/CSP/misconfig → local-only
    return _initPromise;
  }

  function isCloudEnabled() { return isConfigured(); }

  // Best-effort publish. Never throws; returns true only on confirmed write.
  function publish(rec) {
    if (!rec || !rec.certId) return Promise.resolve(false);
    return init().then(function (db) {
      if (!db) return false;
      var id = String(rec.certId).toUpperCase();
      var payload = {
        certId: id,
        studentName: rec.studentName || '',
        courseTitle: rec.courseTitle || '',
        courseId: rec.courseId || '',
        date: rec.date || '',
        category: rec.category || '',
        issuer: 'Tolbert Innovation Hub · TIH Learning Hub'
      };
      // create-only: don't clobber an existing record (rules also enforce this)
      return db.collection(COLLECTION).doc(id).get().then(function (snap) {
        if (snap && snap.exists) return true;
        return db.collection(COLLECTION).doc(id).set(payload).then(function () { return true; });
      }).catch(function () { return false; });
    }).catch(function () { return false; });
  }

  // Look up a certificate in the cloud. Resolves to the record or null.
  function lookup(certId) {
    if (!certId) return Promise.resolve(null);
    return init().then(function (db) {
      if (!db) return null;
      var id = String(certId).trim().toUpperCase();
      return db.collection(COLLECTION).doc(id).get().then(function (snap) {
        return (snap && snap.exists) ? snap.data() : null;
      }).catch(function () { return null; });
    }).catch(function () { return null; });
  }

  return {
    isCloudEnabled: isCloudEnabled,
    publish: publish,
    lookup: lookup
  };
})();
