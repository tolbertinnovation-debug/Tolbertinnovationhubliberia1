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

  function getJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function setJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

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
    return app;
  }
  function updateApplication(id, changes) {
    var list = getApplications();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        for (var k in changes) { if (changes.hasOwnProperty(k)) list[i][k] = changes[k]; }
        list[i].updatedAt = nowISO();
        saveApplications(list);
        return list[i];
      }
    }
    return null;
  }

  /* ---- Students ---- */
  function getStudents() { return getJSON(KEYS.students, []); }
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
      return { student: student, tempPassword: tempPassword };
    });
  }
  function updateStudent(id, changes) {
    var list = getStudents();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        for (var k in changes) { if (changes.hasOwnProperty(k)) list[i][k] = changes[k]; }
        list[i].updatedAt = nowISO();
        saveStudents(list);
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
  function studentLogin(idOrEmail, password) {
    var s = findStudent(idOrEmail);
    if (!s) return Promise.resolve({ ok: false, error: 'No account found. Check your Student ID or email.' });
    if (s.status === 'suspended') return Promise.resolve({ ok: false, error: 'This account is suspended. Contact TIH support.' });
    return sha256(password).then(function (hash) {
      if (hash !== s.passwordHash) return { ok: false, error: 'Incorrect password. Try again or contact support on WhatsApp.' };
      var history = (s.loginHistory || []).slice(0, 9);
      history.unshift(nowISO());
      updateStudent(s.id, { lastLoginAt: nowISO(), loginHistory: history });
      setJSON(KEYS.studentSession, { id: s.id, name: s.name, email: s.email, at: nowISO() });
      // Also set the session key the course player reads for the avatar.
      setJSON('tih_student_session', { name: s.name, email: s.email });
      try { localStorage.setItem('tih_student_name', s.name); } catch (e) {}
      return { ok: true, student: s, mustChangePassword: s.mustChangePassword };
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
    return req;
  }
  function updateCertRequest(id, changes) {
    var list = getCertRequests();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        for (var k in changes) { if (changes.hasOwnProperty(k)) list[i][k] = changes[k]; }
        list[i].decidedAt = nowISO();
        saveCertRequests(list);
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

  return {
    KEYS: KEYS,
    WHATSAPP_NUMBER: WHATSAPP_NUMBER,
    sha256: sha256,
    esc: esc,
    // applications
    getApplications: getApplications,
    findApplication: findApplication,
    submitApplication: submitApplication,
    updateApplication: updateApplication,
    // students
    getStudents: getStudents,
    findStudent: findStudent,
    createStudent: createStudent,
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
    // certificate requests / approval
    certCode: certCode,
    getCertRequests: getCertRequests,
    requestCertificate: requestCertificate,
    updateCertRequest: updateCertRequest,
    verifyCertCode: verifyCertCode,
    certApprovedLocal: certApprovedLocal,
    pendingCertRequest: pendingCertRequest,
    courseAssignedTo: courseAssignedTo,
    // comms
    waLink: waLink,
    mailtoLink: mailtoLink
  };
})();
