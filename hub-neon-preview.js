/* Compatibility adapter for the isolated migration preview, never production. */
(function () {
  'use strict';
  if (!window.TIH_NEON_WEBSITE_PREVIEW || !window.HubCloud) return;
  var C = window.HubCloud, D = window.HubDB, account = null, student = null, ready = null;
  var unavailable = 'This action is unavailable in the migration preview. Use the staff workspace for staff changes.';
  async function api(path, body) {
    var response = await fetch('/api/' + path, {method: body ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store', signal: window.AbortSignal && window.AbortSignal.timeout ? window.AbortSignal.timeout(20000) : undefined, headers: body ? {'Content-Type': 'application/json'} : {}, body: body ? JSON.stringify(body) : undefined});
    var data = await response.json(); if (!response.ok) { var error = new Error(data.error || 'Preview request failed'); error.status = response.status; throw error; } return data;
  }
  function camel(row) { var result = {}; Object.keys(row || {}).forEach(function (k) { if (!/password|secret|token/i.test(k)) result[k.replace(/_([a-z])/g, function (_, c) { return c.toUpperCase(); })] = row[k]; }); return result; }
  function certificate(row) { var c = camel(row); c.date = row.issue_date; return c; }
  function cleanCache() {
    try { Object.keys(localStorage).forEach(function (key) { if (/^tih_(access_|progress_|cert_|hub_cert_ok_)/.test(key) || /^tih_hub_(students|student_session|admin_session|admin_account|applications|cert_requests|outbox)$/.test(key)) localStorage.removeItem(key); }); } catch (_) {}
  }
  // Never allow legacy cached identities or credential hashes to initialize this preview.
  cleanCache();
  function receive(data, preserveProgress) {
    var same = student && student.id === data.student.id;
    if (!same) { cleanCache(); loadPending(data.student.id); }
    account = data; student = camel(data.student); student.mustChangePassword = false;
    (data.progress || []).forEach(function (p) {
      try {
        var key = 'tih_progress_' + p.course_id, cached = JSON.parse(localStorage.getItem(key) || '[]');
        var n = Math.max(0, Math.min(Number(p.completed_lessons) || 0, Number(p.total_lessons) || 0));
        var done = same && preserveProgress && Array.isArray(cached) ? cached : [];
        for (var i = 0; i < n; i++) if (done.indexOf(i) < 0) done.push(i);
        localStorage.setItem(key, JSON.stringify(done));
      } catch (_) {}
    });
    pending.forEach(function (count, id) {
      try { var key = 'tih_progress_' + id, done = JSON.parse(localStorage.getItem(key) || '[]'); if (!Array.isArray(done)) done = []; for (var i = 0; i < count; i++) if (done.indexOf(i) < 0) done.push(i); localStorage.setItem(key, JSON.stringify(done)); } catch (_) {}
    });
    if (pending.size) Promise.resolve().then(flush);
    (data.certificates || []).forEach(function (c) { try { localStorage.setItem('tih_cert_' + c.course_id, JSON.stringify(certificate(c))); } catch (_) {} });
    return student;
  }
  async function refresh(preserve) {
    try { return receive(await api('learner-preview'), preserve); } catch (error) { if (error.status === 401 || error.status === 404) { account = student = null; cleanCache(); return null; } throw error; }
  }
  function unsupported() { return Promise.resolve({ok: false, error: unavailable}); }
  // Replace every exported cloud operation so old closures cannot fall back to the source service.
  Object.keys(C).forEach(function (key) { if (typeof C[key] === 'function') C[key] = function () { return Promise.resolve(null); }; });
  C.isEnabled = function () { return true; }; C.ready = function () { return Promise.resolve(); };
  C.subscribe = C.onStudentAuthChange = function () { return function () {}; };
  C.adminUser = C.studentAuthUser = function () { return null; };
  C.lookupCertificate = async function (id) { try { return certificate((await api('certificate-preview?certId=' + encodeURIComponent(id))).certificate); } catch (error) { if (error.status === 404 || error.status === 400) return null; throw error; } };
  C.publishCertificate = function () { return Promise.resolve(false); };
  C.fetchCertificatesFor = async function (id) { await refresh(true); return student && student.id === id ? (account.certificates || []).map(certificate) : []; };
  if (!D) return;
  ['submitApplication','updateApplication','createStudent','registerStudent','updateStudent','deleteStudent','assignCourse','removeCourse','resetStudentPassword','changeStudentPassword','changeAdminPassword','adminLogin','setAdminSession','updateCertRequest','adminGrantAccess','adminRevokeAccess'].forEach(function (key) { D[key] = unsupported; });
  D.ensureAdminAccount = function () { return Promise.resolve(); }; D.adminSession = function () { return null; };
  D.getApplications = D.getAudit = D.getMessages = function () { return []; }; D.findApplication = function () { return null; };
  D.audit = D.logMessage = function () {}; D.pendingAdminOps = function () { return 0; }; D.flushOutbox = function () { return Promise.resolve(); };
  D.studentSession = function () { return student && {id: student.id, name: student.name, email: student.email}; };
  D.findStudent = function (id) { return student && student.id === id ? student : null; }; D.getStudents = function () { return student ? [student] : []; };
  D.studentLogin = async function (login, password) {
    try { await api('legacy-learner-preview', {login: login, password: password}); await refresh(false); return student ? {ok: true, student: student, mustChangePassword: false} : {ok: false, error: 'Copied account unavailable'}; } catch (error) { return {ok: false, error: error.message}; }
  };
  D.verifyStudentSession = function () { if (!ready) ready = refresh(false).finally(function () { ready = null; }); return ready; };
  D.studentLogout = function () { account = student = null; cleanCache(); return api('learner-preview', {action: 'logout'}).catch(function () {}); };
  D.hydrateAccountFromCloud = async function () { await refresh(true); return {enabled: true}; }; D.syncFromCloud = D.hydrateAccountFromCloud; D.cloudEnabled = function () { return true; };
  D.hasAccess = function (id) { return !!(student && account && (account.enrollments || []).some(function (e) { return e.item_id === id && e.access_granted === true; })); };
  D.verifyAccessCode = D.verifyCertCode = function () { return Promise.resolve(false); }; D.grantAccess = function () { return false; };
  D.accessCode = D.certCode = function () { return Promise.resolve('Unavailable in preview'); };
  D.getCertRequests = function () { return account ? (account.certRequests || []).map(camel) : []; };
  D.pendingCertRequest = function (id, courseId) { return D.getCertRequests().find(function (r) { return r.studentId === id && r.courseId === courseId && r.status === 'pending'; }) || null; };
  D.certApprovedLocal = function (id) { return !!(account && (account.certificates || []).some(function (c) { return c.course_id === id && c.verified === true; })); };
  D.courseCertificate = function (id) { var c = account && (account.certificates || []).find(function (r) { return r.course_id === id && r.verified === true; }); return c ? certificate(c) : null; };
  D.requestAccess = async function (id) { try { await api('learner-preview', {action: 'requestAccess', courseId: id, expectedStudentId: student && student.id}); await refresh(true); return {ok: true}; } catch (e) { return {ok: false, error: e.message}; } };
  D.requestCertificate = async function (_, id) { await api('learner-preview', {action: 'certRequest', courseId: id, expectedStudentId: student && student.id}); await refresh(true); return {ok: true}; };
  var pending = new Map(), sending = false, pendingOwner = null, queueDurable = true;
  var queuePrefix = 'tih_neon_pending_progress_v1:';
  function queueKey(owner) { return queuePrefix + encodeURIComponent(owner); }
  function loadPending(owner) {
    pending = new Map(); pendingOwner = owner; queueDurable = true;
    try {
      var raw = localStorage.getItem(queueKey(owner)); if (!raw) return;
      var data = JSON.parse(raw);
      if (data.version !== 1 || data.owner !== owner || !Number.isFinite(data.updatedAt) || data.updatedAt > Date.now() + 60000 || Date.now() - data.updatedAt > 7 * 86400000 || !Array.isArray(data.entries) || data.entries.length > 128) { localStorage.removeItem(queueKey(owner)); return; }
      data.entries.forEach(function (entry) { if (Array.isArray(entry) && entry.length === 2 && typeof entry[0] === 'string' && /^[a-z0-9-]{1,100}$/.test(entry[0]) && Number.isInteger(entry[1]) && entry[1] >= 0 && entry[1] <= 10000) pending.set(entry[0], entry[1]); });
    } catch (_) { queueDurable = false; }
  }
  function persistPending() {
    if (!pendingOwner) return;
    try {
      if (pending.size) localStorage.setItem(queueKey(pendingOwner), JSON.stringify({version: 1, owner: pendingOwner, updatedAt: Date.now(), entries: Array.from(pending.entries())}));
      else localStorage.removeItem(queueKey(pendingOwner));
      queueDurable = true;
    } catch (_) { queueDurable = false; }
  }
  function status(message) { var n = document.getElementById('tih-preview-save-status'); if (!n) { n = document.createElement('div'); n.id = 'tih-preview-save-status'; n.setAttribute('role', 'status'); n.style.cssText = 'position:fixed;bottom:12px;left:12px;right:12px;z-index:2147483646;padding:10px;background:#102c55;color:white;font:14px system-ui;border-radius:8px;pointer-events:none'; document.body.append(n); } n.textContent = message; }
  async function flush() {
    if (sending || !student || !pending.size || pendingOwner !== student.id) return false;
    sending = true; var owner = student.id, batch = pending;
    try {
      for (var entry of batch) {
        if (!student || student.id !== owner || batch !== pending) return false;
        await api('learner-preview', {action: 'progress', courseId: entry[0], completed: entry[1], expectedStudentId: owner});
        if (batch !== pending || !student || student.id !== owner) return false;
        if (pending.get(entry[0]) === entry[1]) pending.delete(entry[0]);
        persistPending();
      }
      status(pending.size ? 'Some test progress is waiting to sync.' : 'Test progress saved to Neon.'); return !pending.size;
    } catch (error) {
      if (batch === pending) status('Test progress has not synced: ' + error.message + (queueDurable ? '. Saved on this device for retry after sign-in.' : '. Keep this page open; this browser could not save the retry queue.'));
      return false;
    } finally { sending = false; }
  }
  D.pushProgressSnapshot = function (id) {
    if (!student || !D.hasAccess(id)) return Promise.resolve(false);
    if (pendingOwner !== student.id) loadPending(student.id);
    var p = D.courseProgress(id); if (!Number.isInteger(p.completed) || p.completed < 0 || p.completed > 10000) return Promise.resolve(false);
    pending.set(id, Math.max(p.completed, pending.get(id) || 0)); persistPending(); return flush();
  };
  var logout = D.studentLogout;
  D.studentLogout = function () { pending.clear(); persistPending(); pendingOwner = null; return logout(); };
  window.addEventListener('online', flush); setInterval(flush, 30000);
  document.addEventListener('DOMContentLoaded', function () {
    window.requestCert = async function (id) { try { await flush(); if (pending.size) throw new Error('Sync your test progress before requesting a certificate.'); await D.requestCertificate(student && student.id, id); alert('Test certificate request saved for staff review.'); location.reload(); } catch (e) { alert(e.message); } };
    // Client completion alone must never manufacture an official certificate.
    if (/\/course-player(?:\.html)?$/.test(location.pathname)) {
      window.saveCertificate = function () { return D.courseCertificate(window.courseId); };
      window.showCompletionModal = function () { var id = new URLSearchParams(location.search).get('id') || 'computer-literacy'; var issued = D.courseCertificate(id); if (issued) location.href = '/my-certificates'; else window.requestCert(id); };
      window.printCertificate = function () { location.href = '/my-certificates'; };
    }
  });
})();
