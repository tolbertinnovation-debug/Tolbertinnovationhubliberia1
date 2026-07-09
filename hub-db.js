/* ============================================================
   TIH LEARNING HUB — SHARED DATA LAYER
   localStorage-backed store for applications, students, course
   assignments, notifications and the admin audit log.
   Every read/write goes through this file so the storage engine
   can be swapped for a real backend API without touching pages.
   ============================================================ */
var HubDB = (function () {
  'use strict';

  var KEYS = {
    applications: 'tih_hub_applications',
    students: 'tih_hub_students',
    adminAccount: 'tih_hub_admin_account',
    adminSession: 'tih_hub_admin_session',
    studentSession: 'tih_hub_student_session',
    audit: 'tih_hub_audit_log',
    messages: 'tih_hub_message_log',
    settings: 'tih_hub_settings',
    certRequests: 'tih_hub_cert_requests'
  };

  var WHATSAPP_NUMBER = '231880559227';

  // Paid-access settings. Every course and WASSCE subject is locked until the
  // learner pays and an administrator issues a matching access code.
  var PAYMENT = {
    amountUSD: 2,
    momoNumber: '0880559227',
    momoName: 'Samuel Tolbert',
    currencyNote: 'US$2 (or the Liberian dollar equivalent)'
  };

  // Per-item price overrides (USD). Anything not listed uses PAYMENT.amountUSD (US$2).
  // The premium exam-prep courses are priced higher because of their depth.
  var PRICE_OVERRIDES = { 'ielts': 20, 'toefl': 20, 'sat': 20 };
  function priceFor(itemId) {
    var id = String(itemId || '').toLowerCase();
    return PRICE_OVERRIDES.hasOwnProperty(id) ? PRICE_OVERRIDES[id] : PAYMENT.amountUSD;
  }
  // Human-friendly payment note for a specific item (used by the paywall overlay).
  function currencyNoteFor(itemId) {
    return 'US$' + priceFor(itemId) + ' (or the Liberian dollar equivalent)';
  }

  function getJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function setJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* ---- Cloud bridge (Supabase, optional) ----
     Returns the HubCloud module when a Supabase config is present, else
     null. Every cloud call is best-effort and fire-and-forget: the local
     write always happens first, so the site never blocks on the network
     and works fully offline / when the cloud is unconfigured. */
  function cloud() {
    return (typeof HubCloud !== 'undefined' && HubCloud.isEnabled()) ? HubCloud : null;
  }
  function cloudEnabled() { return !!cloud(); }
  function fire(promise) { if (promise && promise.catch) promise.catch(function () {}); }

  /* ---- SHA-256 hashing (same approach as classroom.js) ---- */
  function sha256(text) {
    if (window.crypto && window.crypto.subtle && window.TextEncoder) {
      var data = new TextEncoder().encode(String(text));
      return window.crypto.subtle.digest('SHA-256', data).then(function (buf) {
        var arr = Array.prototype.slice.call(new Uint8Array(buf));
        return arr.map(function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
      });
    }
    // Fallback for very old browsers / non-secure contexts: simple DJB2-style hash.
    return new Promise(function (resolve) {
      var h = 5381, s = String(text);
      for (var i = 0; i < s.length; i++) { h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; }
      resolve('fb_' + h.toString(16));
    });
  }

  /* ---- ID + password generators ---- */
  function randChunk(len, alphabet) {
    var out = '';
    for (var i = 0; i < len; i++) out += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    return out;
  }
  function genAppId() {
    return 'TIH-APP-' + randChunk(6, 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789');
  }
  function genStudentId() {
    return 'TIH-STU-' + randChunk(6, 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789');
  }
  function genTempPassword() {
    return 'TIH-' + randChunk(4, 'ABCDEFGHJKLMNPQRSTUVWXYZ') + '-' + randChunk(4, '23456789');
  }
  function nowISO() { return new Date().toISOString(); }

  /* ---- Applications ---- */
  function getApplications() { return getJSON(KEYS.applications, []); }
  function saveApplications(list) { setJSON(KEYS.applications, list); }
  function findApplication(id) {
    id = String(id || '').trim().toUpperCase();
    var list = getApplications();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }
  function submitApplication(data) {
    var list = getApplications();
    var app = {
      id: genAppId(),
      submittedAt: nowISO(),
      status: 'pending', // pending | review | approved | rejected | info-needed
      statusMessage: '',
      notes: [],
      name: data.name, email: data.email, phone: data.phone,
      location: data.location, dob: data.dob,
      education: data.education, occupation: data.occupation,
      goals: data.goals, tracks: data.tracks || [],
      referral: data.referral
    };
    list.unshift(app);
    saveApplications(list);
    if (cloud()) fire(cloud().pushApplication(app)); // mirror to central DB
    return app;
  }
  function updateApplication(id, changes) {
    var list = getApplications();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        for (var k in changes) { if (changes.hasOwnProperty(k)) list[i][k] = changes[k]; }
        list[i].updatedAt = nowISO();
        saveApplications(list);
        if (cloud()) fire(cloud().updateApplication(id, changes)); // proper UPDATE keeps cloud in sync
        return list[i];
      }
    }
    return null;
  }

  /* ---- Students ---- */
  // Assigned courses must be objects: [{id, assignedAt, deadline, priority}].
  // Older self-registered accounts stored bare id strings — coerce them so the
  // dashboard and course player can read c.id (fixes blank "Course not found").
  // WASSCE subjects (wassce-*) are handled by their own grid, not assigned cards.
  function normCourses(courses) {
    if (!Array.isArray(courses)) return [];
    var out = [];
    courses.forEach(function (c) {
      var id = (c && typeof c === 'object') ? c.id : c;
      if (!id) return;
      if (String(id).indexOf('wassce-') === 0) return; // shown in the WASSCE grid
      if (c && typeof c === 'object') out.push(c);
      else out.push({ id: String(id), assignedAt: nowISO() });
    });
    return out;
  }
  function getStudents() {
    var list = getJSON(KEYS.students, []);
    var changed = false;
    list.forEach(function (s) {
      if (!s) return;
      var before = JSON.stringify(s.courses || []);
      s.courses = normCourses(s.courses);
      if (JSON.stringify(s.courses) !== before) changed = true;
    });
    if (changed) setJSON(KEYS.students, list); // self-heal legacy records once
    return list;
  }
  function saveStudents(list) { setJSON(KEYS.students, list); }
  function findStudent(idOrEmail) {
    var q = String(idOrEmail || '').trim().toLowerCase();
    var list = getStudents();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id.toLowerCase() === q || (list[i].email || '').toLowerCase() === q) return list[i];
    }
    return null;
  }
  // Creates a student account (from an approved application or manually).
  // Returns {student, tempPassword} — the plain temp password exists only here
  // so the admin can deliver it via WhatsApp/email.
  function createStudent(data) {
    var tempPassword = genTempPassword();
    return sha256(tempPassword).then(function (hash) {
      var student = {
        id: genStudentId(),
        createdAt: nowISO(),
        status: 'active', // active | inactive | suspended
        name: data.name, email: data.email, phone: data.phone || '',
        location: data.location || '',
        applicationId: data.applicationId || null,
        passwordHash: hash,
        mustChangePassword: true,
        courses: [],           // [{id, assignedAt, deadline, priority}]
        lastLoginAt: null,
        loginHistory: [],
        adminNotes: []
      };
      var list = getStudents();
      list.unshift(student);
      saveStudents(list);
      if (cloud()) fire(cloud().pushStudent(student)); // mirror to central DB
      return { student: student, tempPassword: tempPassword };
    });
  }
  // Self-registration: the learner sets their OWN password on the application
  // form and can log in immediately with their email. Creates an active account
  // (no admin-issued temp password needed). Returns {ok, student, error}.
  function registerStudent(data) {
    var email = String(data.email || '').trim();
    if (!email) return Promise.resolve({ ok: false, error: 'Email is required.' });
    if (findStudent(email)) {
      return Promise.resolve({ ok: false, error: 'An account with this email already exists. Please log in instead.' });
    }
    if (!data.password || String(data.password).length < 8) {
      return Promise.resolve({ ok: false, error: 'Password must be at least 8 characters.' });
    }
    return sha256(data.password).then(function (hash) {
      var student = {
        id: genStudentId(),
        createdAt: nowISO(),
        status: 'active',
        name: data.name, email: email, phone: data.phone || '',
        location: data.location || '',
        applicationId: data.applicationId || null,
        passwordHash: hash,
        mustChangePassword: false,   // they chose their own password
        courses: normCourses(data.courses), // pre-assigned tracks as {id} objects
        lastLoginAt: null,
        loginHistory: [],
        adminNotes: []
      };
      var list = getStudents();
      list.unshift(student);
      saveStudents(list);
      if (cloud()) fire(cloud().pushStudent(student)); // central DB → cross-device login
      return { ok: true, student: student };
    });
  }
  function updateStudent(id, changes) {
    var list = getStudents();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        for (var k in changes) { if (changes.hasOwnProperty(k)) list[i][k] = changes[k]; }
        list[i].updatedAt = nowISO();
        saveStudents(list);
        if (cloud()) fire(cloud().pushStudent(list[i])); // keep cloud row current
        return list[i];
      }
    }
    return null;
  }
  function deleteStudent(id) {
    var list = getStudents().filter(function (s) { return s.id !== id; });
    saveStudents(list);
  }
  function assignCourse(studentId, courseId, opts) {
    opts = opts || {};
    var s = findStudent(studentId);
    if (!s) return null;
    var already = s.courses.some(function (c) { return c.id === courseId; });
    if (!already) {
      s.courses.push({
        id: courseId,
        assignedAt: nowISO(),
        deadline: opts.deadline || null,
        priority: opts.priority || 'medium'
      });
      return updateStudent(s.id, { courses: s.courses });
    }
    return s;
  }
  function removeCourse(studentId, courseId) {
    var s = findStudent(studentId);
    if (!s) return null;
    s.courses = s.courses.filter(function (c) { return c.id !== courseId; });
    return updateStudent(s.id, { courses: s.courses });
  }
  function resetStudentPassword(studentId) {
    var tempPassword = genTempPassword();
    return sha256(tempPassword).then(function (hash) {
      updateStudent(studentId, { passwordHash: hash, mustChangePassword: true });
      return tempPassword;
    });
  }

  /* ---- Student auth ---- */
  // Finalise a successful login: refresh local cache, set session keys.
  function completeStudentLogin(s) {
    s.courses = normCourses(s.courses); // coerce cloud/legacy course shapes
    var list = getStudents();
    var found = false;
    for (var i = 0; i < list.length; i++) { if (list[i].id === s.id) { list[i] = s; found = true; break; } }
    if (!found) list.unshift(s);
    var history = (s.loginHistory || []).slice(0, 9);
    history.unshift(nowISO());
    s.lastLoginAt = nowISO(); s.loginHistory = history;
    saveStudents(list);
    setJSON(KEYS.studentSession, { id: s.id, name: s.name, email: s.email, at: nowISO() });
    setJSON('tih_student_session', { name: s.name, email: s.email });
    try { localStorage.setItem('tih_student_name', s.name); } catch (e) {}
    if (cloud()) fire(cloud().touchStudentLogin(s.id));
    return { ok: true, student: s, mustChangePassword: s.mustChangePassword };
  }
  function studentLogin(idOrEmail, password) {
    return sha256(password).then(function (hash) {
      // 1) Try the central database first (works from any device).
      var cloudTry = cloud()
        ? cloud().studentLogin(idOrEmail, hash).catch(function () { return null; })
        : Promise.resolve(null);
      return cloudTry.then(function (cloudStudent) {
        if (cloudStudent) return completeStudentLogin(cloudStudent);
        // 2) Fall back to the local account (offline / cloud unconfigured).
        var s = findStudent(idOrEmail);
        if (!s) return { ok: false, error: 'No account found. Check your Student ID or email.' };
        if (s.status === 'suspended') return { ok: false, error: 'This account is suspended. Contact TIH support.' };
        if (hash !== s.passwordHash) return { ok: false, error: 'Incorrect password. Try again or contact support on WhatsApp.' };
        return completeStudentLogin(s);
      });
    });
  }
  function studentSession() { return getJSON(KEYS.studentSession, null); }
  function studentLogout() {
    try { localStorage.removeItem(KEYS.studentSession); } catch (e) {}
  }
  function changeStudentPassword(studentId, newPassword) {
    return sha256(newPassword).then(function (hash) {
      updateStudent(studentId, { passwordHash: hash, mustChangePassword: false });
      return true;
    });
  }

  /* ---- Admin auth ---- */
  var DEFAULT_ADMIN_USER = 'tihadmin';
  var DEFAULT_ADMIN_PASS = 'TIH-Admin-2026';
  function ensureAdminAccount() {
    var acct = getJSON(KEYS.adminAccount, null);
    if (acct) return Promise.resolve(acct);
    return sha256(DEFAULT_ADMIN_PASS).then(function (hash) {
      var fresh = { username: DEFAULT_ADMIN_USER, passwordHash: hash, isDefaultPassword: true, createdAt: nowISO() };
      setJSON(KEYS.adminAccount, fresh);
      return fresh;
    });
  }
  function adminLogin(username, password) {
    return ensureAdminAccount().then(function (acct) {
      return sha256(password).then(function (hash) {
        if (String(username).trim().toLowerCase() !== acct.username.toLowerCase() || hash !== acct.passwordHash) {
          return { ok: false, error: 'Invalid admin credentials.' };
        }
        setJSON(KEYS.adminSession, { username: acct.username, at: nowISO() });
        return { ok: true, isDefaultPassword: !!acct.isDefaultPassword };
      });
    });
  }
  function adminSession() { return getJSON(KEYS.adminSession, null); }
  function adminLogout() { try { localStorage.removeItem(KEYS.adminSession); } catch (e) {} }
  function changeAdminPassword(newPassword) {
    return sha256(newPassword).then(function (hash) {
      var acct = getJSON(KEYS.adminAccount, null) || { username: DEFAULT_ADMIN_USER, createdAt: nowISO() };
      acct.passwordHash = hash;
      acct.isDefaultPassword = false;
      setJSON(KEYS.adminAccount, acct);
      return true;
    });
  }

  /* ---- Audit log ---- */
  function audit(action, target) {
    var log = getJSON(KEYS.audit, []);
    var session = adminSession();
    log.unshift({ at: nowISO(), by: session ? session.username : 'system', action: action, target: target || '' });
    if (log.length > 500) log = log.slice(0, 500);
    setJSON(KEYS.audit, log);
  }
  function getAudit() { return getJSON(KEYS.audit, []); }

  /* ---- Message log (records what was sent via WhatsApp/email links) ---- */
  function logMessage(entry) {
    var log = getJSON(KEYS.messages, []);
    entry.at = nowISO();
    log.unshift(entry);
    if (log.length > 500) log = log.slice(0, 500);
    setJSON(KEYS.messages, log);
  }
  function getMessages() { return getJSON(KEYS.messages, []); }

  /* ---- Progress helpers (bridge to course-player storage) ---- */
  function courseProgress(courseId) {
    // Returns {completed, total, pct} using COURSES_DB + tih_progress_ keys.
    var total = 0;
    if (typeof COURSES_DB !== 'undefined' && COURSES_DB[courseId] && COURSES_DB[courseId].modules) {
      COURSES_DB[courseId].modules.forEach(function (m) { total += (m.lessons || []).length; });
    }
    var done = getJSON('tih_progress_' + courseId, []);
    var completed = Array.isArray(done) ? done.length : 0;
    var pct = total ? Math.min(100, Math.round(completed / total * 100)) : 0;
    return { completed: completed, total: total, pct: pct };
  }
  function courseCertificate(courseId) {
    return getJSON('tih_cert_' + courseId, null);
  }
  // Push a progress snapshot for the current student to the central DB so
  // the admin can see live learning activity across devices (best effort).
  function pushProgressSnapshot(courseId, activityType, score) {
    if (!cloud()) return;
    var sess = studentSession();
    var studentId = sess && sess.id;
    if (!studentId) return;
    var p = courseProgress(courseId);
    fire(cloud().pushProgress({
      student_id: studentId, course_id: courseId,
      completed_lessons: p.completed, total_lessons: p.total, pct: p.pct,
      last_activity_at: nowISO()
    }));
    fire(cloud().logActivity({
      student_id: studentId, course_id: courseId,
      activity_type: activityType || 'lesson_complete',
      detail: '', score: (typeof score === 'number' ? score : null)
    }));
  }

  /* ---- Cloud pull (admin) ----
     Refreshes the local caches from the central database so the admin
     panel shows applications/students/requests submitted on any device.
     Resolves to a summary; safe no-op (all zeros) when cloud is off. */
  // Merge a cloud list with the local list by id. Cloud wins on conflict
  // (it is the shared source of truth); local-only rows are KEPT and pushed
  // up to the cloud (back-fill) so nothing is ever lost and records made
  // before the cloud was configured still arrive centrally.
  function mergeById(cloudList, localList, backfill, sortKey) {
    var byId = {};
    (cloudList || []).forEach(function (c) { byId[c.id] = c; });
    (localList || []).forEach(function (l) {
      if (!byId[l.id]) { byId[l.id] = l; if (backfill) fire(backfill(l)); } // local-only → upload
    });
    var merged = [];
    for (var k in byId) { if (byId.hasOwnProperty(k)) merged.push(byId[k]); }
    if (sortKey) {
      merged.sort(function (a, b) { return String(b[sortKey] || '').localeCompare(String(a[sortKey] || '')); });
    }
    return merged;
  }

  function syncFromCloud() {
    if (!cloud()) return Promise.resolve({ enabled: false, applications: 0, students: 0, certRequests: 0 });
    var C = cloud();
    return Promise.all([
      C.fetchApplications().catch(function () { return null; }),
      C.fetchStudents().catch(function () { return null; }),
      C.fetchCertRequests().catch(function () { return null; })
    ]).then(function (r) {
      var apps = r[0], studs = r[1], reqs = r[2];
      var out = { enabled: true, applications: 0, students: 0, certRequests: 0 };
      if (Array.isArray(apps)) {
        var mergedApps = mergeById(apps, getApplications(), C.pushApplication, 'submittedAt');
        saveApplications(mergedApps); out.applications = mergedApps.length;
      }
      if (Array.isArray(studs)) {
        // Preserve any local-only login history the cloud row lacks.
        var localById = {};
        getStudents().forEach(function (s) { localById[s.id] = s; });
        studs.forEach(function (s) {
          var loc = localById[s.id];
          if (loc && (!s.loginHistory || !s.loginHistory.length)) s.loginHistory = loc.loginHistory || [];
        });
        var mergedStuds = mergeById(studs, getStudents(), C.pushStudent, 'createdAt');
        saveStudents(mergedStuds); out.students = mergedStuds.length;
      }
      if (Array.isArray(reqs)) {
        var mergedReqs = mergeById(reqs, getCertRequests(), C.pushCertRequest, 'requestedAt');
        saveCertRequests(mergedReqs); out.certRequests = mergedReqs.length;
      }
      return out;
    }).catch(function () { return { enabled: true, applications: 0, students: 0, certRequests: 0, error: true }; });
  }

  /* ---- Certificate requests & approval codes ----
     Cross-device flow for the static site: the student's request reaches
     the admin via WhatsApp (includes Student ID). The admin generates a
     deterministic approval code for (studentId, courseId) and sends it
     back; the student's device recomputes and verifies the code, then
     unlocks certificate issuance locally. */
  function certCode(studentId, courseId) {
    return sha256('TIH-CERT-APPROVE|' + String(studentId).toUpperCase() + '|' + String(courseId).toLowerCase()).then(function (hex) {
      return hex.replace(/[^a-z0-9]/gi, '').slice(0, 6).toUpperCase();
    });
  }
  function getCertRequests() { return getJSON(KEYS.certRequests, []); }
  function saveCertRequests(list) { setJSON(KEYS.certRequests, list); }
  function requestCertificate(studentId, courseId, courseTitle) {
    var list = getCertRequests();
    for (var i = 0; i < list.length; i++) {
      if (list[i].studentId === studentId && list[i].courseId === courseId && list[i].status === 'pending') return list[i];
    }
    var req = {
      id: 'TIH-CRQ-' + randChunk(6, 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'),
      studentId: studentId, courseId: courseId, courseTitle: courseTitle || courseId,
      requestedAt: nowISO(), status: 'pending', // pending | approved | declined
      reason: ''
    };
    list.unshift(req);
    saveCertRequests(list);
    if (cloud()) fire(cloud().pushCertRequest(req)); // mirror to central DB
    return req;
  }
  function updateCertRequest(id, changes) {
    var list = getCertRequests();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        for (var k in changes) { if (changes.hasOwnProperty(k)) list[i][k] = changes[k]; }
        list[i].decidedAt = nowISO();
        saveCertRequests(list);
        if (cloud()) fire(cloud().pushCertRequest(list[i]));
        return list[i];
      }
    }
    return null;
  }
  // Student side: verify the code the admin sent; on success record the
  // local approval flag that unlocks certificate issuance in the player.
  function verifyCertCode(studentId, courseId, code) {
    return certCode(studentId, courseId).then(function (expected) {
      var ok = String(code || '').replace(/[^a-z0-9]/gi, '').toUpperCase() === expected;
      if (ok) {
        try { localStorage.setItem('tih_hub_cert_ok_' + courseId, JSON.stringify({ studentId: studentId, at: nowISO() })); } catch (e) {}
        var list = getCertRequests();
        for (var i = 0; i < list.length; i++) {
          if (list[i].studentId === studentId && list[i].courseId === courseId && list[i].status === 'pending') {
            list[i].status = 'approved'; list[i].decidedAt = nowISO();
          }
        }
        saveCertRequests(list);
      }
      return ok;
    });
  }
  function certApprovedLocal(courseId) {
    return !!getJSON('tih_hub_cert_ok_' + courseId, null);
  }
  function pendingCertRequest(studentId, courseId) {
    var list = getCertRequests();
    for (var i = 0; i < list.length; i++) {
      if (list[i].studentId === studentId && list[i].courseId === courseId) return list[i];
    }
    return null;
  }

  /* ---- Course access control ---- */
  function courseAssignedTo(student, courseId) {
    if (!student || !student.courses) return false;
    return student.courses.some(function (c) { return c.id === courseId; });
  }

  /* ---- PAID ACCESS (deterministic access codes) ----
     Each locked item (a course id or a WASSCE subject id) is unlocked with a
     6-character code the admin generates for (studentId, itemId) after the
     learner pays via mobile money. The code is deterministic, so the admin can
     generate it on their device and the learner verifies it on theirs — no
     shared backend required. Verified access is stored locally so the learner
     stays unlocked. */
  function accessCode(studentId, itemId) {
    return sha256('TIH-ACCESS|' + String(studentId).toUpperCase() + '|' + String(itemId).toLowerCase()).then(function (hex) {
      return hex.replace(/[^a-z0-9]/gi, '').slice(0, 6).toUpperCase();
    });
  }
  function hasAccess(itemId) {
    return !!getJSON('tih_access_' + itemId, null);
  }
  function verifyAccessCode(studentId, itemId, code) {
    return accessCode(studentId, itemId).then(function (expected) {
      var ok = String(code || '').replace(/[^a-z0-9]/gi, '').toUpperCase() === expected;
      if (ok) {
        try { localStorage.setItem('tih_access_' + itemId, JSON.stringify({ studentId: studentId, at: nowISO() })); } catch (e) {}
        recordEnrollment(studentId, itemId, true); // central record of the unlock
      }
      return ok;
    });
  }
  function grantAccess(itemId, studentId) {
    // Admin-side same-device grant (also used by tests/back-office).
    try { localStorage.setItem('tih_access_' + itemId, JSON.stringify({ studentId: studentId || '', at: nowISO() })); } catch (e) {}
    recordEnrollment(studentId, itemId, true);
  }

  // Central record of a paid enrollment / access grant (best effort).
  function recordEnrollment(studentId, itemId, confirmed) {
    if (!cloud() || !studentId) return;
    var title = (typeof COURSES_DB !== 'undefined' && COURSES_DB[itemId] && COURSES_DB[itemId].title)
      ? COURSES_DB[itemId].title
      : (itemId === 'wassce-all' ? 'WASSCE PRO — All 23 Subjects' : itemId);
    fire(cloud().pushEnrollment({
      student_id: studentId, item_id: itemId, item_title: title,
      payment_status: confirmed ? 'confirmed' : 'pending',
      access_granted: !!confirmed, granted_at: confirmed ? nowISO() : null
    }));
    if (confirmed) {
      fire(cloud().pushPayment({
        student_id: studentId, item_id: itemId, amount: PAYMENT.amountUSD,
        method: 'Mobile Money', status: 'success', confirmed_by: 'admin'
      }));
    }
  }

  /* ---- WhatsApp / email helpers ---- */
  function waLink(phone, text) {
    var num = String(phone || WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
    return 'https://wa.me/' + num + '?text=' + encodeURIComponent(text);
  }
  function mailtoLink(email, subject, body) {
    return 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---- Professional, mistake-proof date/time formatting ----
     One shared implementation so every page shows dates the same,
     correct way. Empty or invalid values return a clean dash instead
     of "Invalid Date" or the 1970 epoch. */
  function _toDate(iso) {
    if (!iso) return null;
    var d = new Date(iso);
    return (d && !isNaN(d.getTime())) ? d : null;
  }
  function fmtDate(iso) {
    var d = _toDate(iso);
    return d ? d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';
  }
  function fmtDateTime(iso) {
    var d = _toDate(iso);
    if (!d) return '—';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      + ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }
  // Live relative time, e.g. "just now", "5 minutes ago", "3 days ago";
  // falls back to an absolute date after 30 days.
  function timeAgo(iso) {
    var d = _toDate(iso);
    if (!d) return '—';
    var s = Math.floor((Date.now() - d.getTime()) / 1000);
    if (s < 0) s = 0;
    if (s < 45) return 'just now';
    if (s < 90) return '1 minute ago';
    var m = Math.floor(s / 60);
    if (m < 60) return m + ' minute' + (m === 1 ? '' : 's') + ' ago';
    var h = Math.floor(m / 60);
    if (h < 24) return h + ' hour' + (h === 1 ? '' : 's') + ' ago';
    var dy = Math.floor(h / 24);
    if (dy < 30) return dy + ' day' + (dy === 1 ? '' : 's') + ' ago';
    return fmtDate(iso);
  }

  return {
    KEYS: KEYS,
    WHATSAPP_NUMBER: WHATSAPP_NUMBER,
    sha256: sha256,
    esc: esc,
    fmtDate: fmtDate,
    fmtDateTime: fmtDateTime,
    timeAgo: timeAgo,
    // applications
    getApplications: getApplications,
    findApplication: findApplication,
    submitApplication: submitApplication,
    updateApplication: updateApplication,
    // students
    getStudents: getStudents,
    findStudent: findStudent,
    createStudent: createStudent,
    registerStudent: registerStudent,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent,
    assignCourse: assignCourse,
    removeCourse: removeCourse,
    resetStudentPassword: resetStudentPassword,
    // student auth
    studentLogin: studentLogin,
    studentSession: studentSession,
    studentLogout: studentLogout,
    changeStudentPassword: changeStudentPassword,
    // admin auth
    ensureAdminAccount: ensureAdminAccount,
    adminLogin: adminLogin,
    adminSession: adminSession,
    adminLogout: adminLogout,
    changeAdminPassword: changeAdminPassword,
    // logs
    audit: audit,
    getAudit: getAudit,
    logMessage: logMessage,
    getMessages: getMessages,
    // progress
    courseProgress: courseProgress,
    courseCertificate: courseCertificate,
    pushProgressSnapshot: pushProgressSnapshot,
    // cloud
    cloudEnabled: cloudEnabled,
    syncFromCloud: syncFromCloud,
    // certificate requests / approval
    certCode: certCode,
    getCertRequests: getCertRequests,
    requestCertificate: requestCertificate,
    updateCertRequest: updateCertRequest,
    verifyCertCode: verifyCertCode,
    certApprovedLocal: certApprovedLocal,
    pendingCertRequest: pendingCertRequest,
    courseAssignedTo: courseAssignedTo,
    // paid access
    PAYMENT: PAYMENT,
    priceFor: priceFor,
    currencyNoteFor: currencyNoteFor,
    accessCode: accessCode,
    hasAccess: hasAccess,
    verifyAccessCode: verifyAccessCode,
    grantAccess: grantAccess,
    // comms
    waLink: waLink,
    mailtoLink: mailtoLink
  };
})();
