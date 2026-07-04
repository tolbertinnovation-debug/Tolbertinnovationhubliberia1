/* ============================================================
   TIH LEARNING HUB — CERTIFICATE REGISTRY
   ------------------------------------------------------------
   A thin layer over the certificate store. It now uses the SAME
   central database as the rest of the hub (Supabase — see
   hub-config.js and hub-cloud.js): issued certificates are
   published to the public `certificates` table and can be verified
   from any device. When no Supabase config is present, everything
   degrades safely to local-only behaviour — no errors, no blocking.

   Requires hub-cloud.js to be loaded first (HubCloud). If it isn't,
   the module still loads and simply reports cloud as disabled.

   Public API (unchanged — all safe to call unconfigured):
     CertRegistry.isCloudEnabled()          -> boolean
     CertRegistry.publish(certRecord)       -> Promise<boolean>  (best effort)
     CertRegistry.lookup(certId)            -> Promise<record|null>
   A certRecord is: { certId, studentName, courseTitle, date, courseId, category }
   ============================================================ */
var CertRegistry = (function () {
  'use strict';

  function cloud() {
    return (typeof HubCloud !== 'undefined' && HubCloud.isEnabled()) ? HubCloud : null;
  }

  function isCloudEnabled() { return !!cloud(); }

  // Best-effort publish. Never throws; resolves false when cloud is off.
  function publish(rec) {
    var C = cloud();
    if (!C) return Promise.resolve(false);
    return C.publishCertificate(rec).catch(function () { return false; });
  }

  // Look up a certificate in the central database. Resolves to the record or null.
  function lookup(certId) {
    var C = cloud();
    if (!C) return Promise.resolve(null);
    return C.lookupCertificate(certId).catch(function () { return null; });
  }

  return {
    isCloudEnabled: isCloudEnabled,
    publish: publish,
    lookup: lookup
  };
})();
if (typeof module !== 'undefined' && module.exports) { module.exports = CertRegistry; }
