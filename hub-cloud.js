/* ============================================================
   TIH LEARNING HUB, CLOUD SYNC (Supabase)
   ------------------------------------------------------------
   A thin, best-effort layer over Supabase (PostgreSQL). When a
   Supabase config is present (see hub-config.js) it mirrors the
   local data to a central database so applications, students,
   enrollments, payments, progress and certificate requests are
   tracked across devices in real time. When no config is present,
   every function degrades safely to a local-only no-op, no
   errors, no blocking, the site behaves exactly as before.

   Nothing here ever throws. Reads resolve to [] / null on failure;
   writes resolve to false. The synchronous HubDB interface is
   untouched, pages keep calling HubDB as they always did, and
   HubDB pushes to / pulls from the cloud through this module.

   Public API (all safe to call unconfigured):
     HubCloud.isEnabled()                       -> boolean
     HubCloud.ready()                            -> Promise<client|null>
     -- admin (Supabase Auth) --
     HubCloud.adminSignIn(email, password)       -> Promise<{ok,error}>
     HubCloud.adminSignOut()                     -> Promise<void>
     HubCloud.adminUser()                        -> Promise<user|null>
     -- applications --
     HubCloud.pushApplication(app)               -> Promise<bool>
     HubCloud.updateApplication(id, changes)     -> Promise<bool>
     HubCloud.fetchApplications()                -> Promise<array>
     -- students --
     HubCloud.pushStudent(student)               -> Promise<bool>
     HubCloud.fetchStudents()                    -> Promise<array>
     HubCloud.studentLogin(login, passwordHash)  -> Promise<student|null>
     HubCloud.touchStudentLogin(id)              -> Promise<void>
     -- enrollments / payments --
     HubCloud.pushEnrollment(row)                -> Promise<bool>
     HubCloud.pushPayment(row)                   -> Promise<bool>
     HubCloud.fetchEnrollments()                 -> Promise<array>
     -- progress / activity --
     HubCloud.pushProgress(row)                  -> Promise<bool>
     HubCloud.logActivity(row)                   -> Promise<bool>
     HubCloud.fetchProgress()                    -> Promise<array>
     -- certificate requests --
     HubCloud.pushCertRequest(req)               -> Promise<bool>
     HubCloud.updateCertRequest(id, changes)     -> Promise<bool>
     HubCloud.fetchCertRequests()                -> Promise<array>
     -- realtime --
     HubCloud.subscribe(table, cb)               -> unsubscribe fn
   ============================================================ */
var HubCloud = (function () {
  'use strict';

  // Multiple CDNs, if one is blocked or slow (common on some mobile networks),
  // the next is tried. Reliability across devices depends on at least one loading.
  var CDNS = [
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
    'https://unpkg.com/@supabase/supabase-js@2/dist/umd/supabase.js',
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js'
  ];
  var _cfg = (typeof window !== 'undefined' && window.TIH_SUPABASE_CONFIG) || null;
  var _initPromise = null;   // resolves to a Supabase client or null
  var _client = null;

  function isConfigured() {
    return !!(_cfg && _cfg.url && _cfg.anonKey);
  }
  function isEnabled() { return isConfigured(); }

  // Load a script once, resolving when ready (rejects on error/timeout).
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (typeof document === 'undefined') return reject(new Error('no document'));
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
      setTimeout(function () { reject(new Error('timeout loading ' + src)); }, 15000);
    });
  }

  // Try each CDN in turn until one loads the supabase global (or all fail).
  function loadFromAnyCDN(list, i) {
    i = i || 0;
    if (i >= list.length) return Promise.reject(new Error('all CDNs failed'));
    return loadScript(list[i]).then(function () {
      if (window.supabase && window.supabase.createClient) return;
      throw new Error('loaded but no supabase global');
    }).catch(function () { return loadFromAnyCDN(list, i + 1); });
  }

  // Lazily create the Supabase client, or null if it can't be created.
  // A pre-existing window.supabase.createClient (e.g. injected in tests)
  // is used directly without hitting the CDN.
  function ready() {
    if (_initPromise) return _initPromise;
    if (!isConfigured()) { _initPromise = Promise.resolve(null); return _initPromise; }
    var haveGlobal = (typeof window !== 'undefined' && window.supabase && window.supabase.createClient);
    var load = haveGlobal ? Promise.resolve() : loadFromAnyCDN(CDNS, 0);
    _initPromise = load.then(function () {
      if (!(window.supabase && window.supabase.createClient)) throw new Error('supabase global missing');
      _client = window.supabase.createClient(_cfg.url, _cfg.anonKey, {
        auth: { persistSession: true, autoRefreshToken: true }
      });
      return _client;
    }).catch(function () { return null; }); // network/CSP/misconfig → local-only
    // If the client couldn't be created (all CDNs failed), forget the failed
    // attempt so a later action retries instead of failing forever this session.
    _initPromise.then(function (c) { if (!c) _initPromise = null; });
    return _initPromise;
  }

  // ---- REST layer (no CDN / no SDK needed) ----
  // Talks to Supabase's PostgREST API with the built-in fetch(). This is the
  // MOST reliable path on weak networks because it needs no external library to
  // load, used for the critical access flow (requests, grants, unlock sync).
  function restBase() { return String(_cfg.url).replace(/\/+$/, '') + '/rest/v1/'; }
  function restHeaders(extra) {
    var h = { 'apikey': _cfg.anonKey, 'Authorization': 'Bearer ' + _cfg.anonKey, 'Content-Type': 'application/json' };
    if (extra) for (var k in extra) { if (extra.hasOwnProperty(k)) h[k] = extra[k]; }
    return h;
  }
  function restUpsert(table, row, onConflict) {
    if (!isConfigured() || typeof fetch === 'undefined') return Promise.resolve(false);
    var url = restBase() + table + (onConflict ? '?on_conflict=' + encodeURIComponent(onConflict) : '');
    return fetch(url, {
      method: 'POST',
      headers: restHeaders({ 'Prefer': 'resolution=merge-duplicates,return=minimal' }),
      body: JSON.stringify(clean(row))
    }).then(function (r) { return r.ok; }).catch(function () { return false; });
  }
  function restSelect(table, query) {
    if (!isConfigured() || typeof fetch === 'undefined') return Promise.resolve([]);
    return fetch(restBase() + table + '?' + query, { headers: restHeaders() })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (d) { return Array.isArray(d) ? d : []; })
      .catch(function () { return []; });
  }
  function restInsert(table, row, prefer) {
    if (!isConfigured() || typeof fetch === 'undefined') return Promise.resolve(false);
    return fetch(restBase() + table, {
      method: 'POST',
      headers: restHeaders({ 'Prefer': prefer || 'return=minimal' }),
      body: JSON.stringify(clean(row))
    }).then(function (r) { return r.ok; }).catch(function () { return false; });
  }
  function restRpc(fn, args) {
    if (!isConfigured() || typeof fetch === 'undefined') return Promise.resolve(null);
    return fetch(restBase() + 'rpc/' + fn, {
      method: 'POST', headers: restHeaders(), body: JSON.stringify(args || {})
    }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }
  function restDelete(table, query) {
    if (!isConfigured() || typeof fetch === 'undefined') return Promise.resolve(false);
    return fetch(restBase() + table + '?' + query, {
      method: 'DELETE', headers: restHeaders({ 'Prefer': 'return=minimal' })
    }).then(function (r) { return r.ok; }).catch(function () { return false; });
  }

  // ---- helpers ----
  function ok(res) {
    if (res && res.error && typeof console !== 'undefined' && console.warn) {
      console.warn('[HubCloud] write error:', res.error.message || res.error);
    }
    return !(res && res.error);
  }
  // Strip null/undefined so NOT-NULL columns fall back to their DB default
  // (Postgres rejects an explicit null even when a default exists).
  function clean(o) {
    var r = {};
    for (var k in o) { if (o.hasOwnProperty(k) && o[k] !== null && o[k] !== undefined) r[k] = o[k]; }
    return r;
  }

  // ---- admin auth (Supabase Auth) ----
  function adminSignIn(email, password) {
    return ready().then(function (db) {
      if (!db) return { ok: false, error: 'Cloud is not configured.' };
      return db.auth.signInWithPassword({ email: String(email || '').trim(), password: password })
        .then(function (res) {
          if (res && res.error) return { ok: false, error: res.error.message || 'Sign-in failed.' };
          return { ok: true };
        }).catch(function () { return { ok: false, error: 'Network error signing in.' }; });
    });
  }
  function adminSignOut() {
    return ready().then(function (db) {
      if (!db) return;
      return db.auth.signOut().catch(function () {});
    });
  }
  function adminUser() {
    return ready().then(function (db) {
      if (!db) return null;
      return db.auth.getUser().then(function (res) {
        return (res && res.data && res.data.user) ? res.data.user : null;
      }).catch(function () { return null; });
    });
  }
  // ---- server-verified admin login (REST, no CDN / no Supabase Auth needed) ----
  // Credentials live server-side in app_admins; verification is a SECURITY
  // DEFINER RPC. Resolves true (valid), false (wrong), or null (RPC absent /
  // unreachable) so the caller can keep a local anti-lockout fallback until the
  // RPC is installed.
  function adminLoginRpc(username, hash) {
    return restRpc('admin_login', { p_user: String(username || '').trim(), p_hash: hash })
      .then(function (r) { return (r === true) ? true : (r === false ? false : null); })
      .catch(function () { return null; });
  }
  function adminSetPasswordRpc(username, oldHash, newHash) {
    return restRpc('admin_set_password', { p_user: String(username || '').trim(), p_old_hash: oldHash, p_new_hash: newHash })
      .then(function (r) { return r === true; })
      .catch(function () { return false; });
  }

  // ---- generic table writes (best effort) ----
  function upsert(table, row, onConflict) {
    return ready().then(function (db) {
      if (!db) return false;
      var q = db.from(table).upsert(row, onConflict ? { onConflict: onConflict } : undefined);
      return q.then(function (res) { return ok(res); }).catch(function () { return false; });
    }).catch(function () { return false; });
  }
  function insert(table, row) {
    return ready().then(function (db) {
      if (!db) return false;
      return db.from(table).insert(row).then(function (res) { return ok(res); }).catch(function () { return false; });
    }).catch(function () { return false; });
  }
  function update(table, id, changes, idCol) {
    return ready().then(function (db) {
      if (!db) return false;
      return db.from(table).update(changes).eq(idCol || 'id', id)
        .then(function (res) { return ok(res); }).catch(function () { return false; });
    }).catch(function () { return false; });
  }
  function fetchAll(table, orderCol, ascending) {
    return ready().then(function (db) {
      if (!db) return [];
      var q = db.from(table).select('*');
      if (orderCol) q = q.order(orderCol, { ascending: !!ascending });
      return q.then(function (res) {
        return (res && !res.error && Array.isArray(res.data)) ? res.data : [];
      }).catch(function () { return []; });
    }).catch(function () { return []; });
  }

  // ---- applications ----
  function appRow(a) {
    return clean({
      id: a.id, submitted_at: a.submittedAt || a.submitted_at || null,
      status: a.status || 'pending', status_message: a.statusMessage || '',
      name: a.name || '', email: a.email || '', phone: a.phone || '',
      location: a.location || '', dob: a.dob || '', education: a.education || '',
      occupation: a.occupation || '', goals: a.goals || '',
      tracks: a.tracks || [], referral: a.referral || '',
      notes: a.notes || [], updated_at: a.updatedAt || null
    });
  }
  function appFromRow(r) {
    return {
      id: r.id, submittedAt: r.submitted_at, status: r.status,
      statusMessage: r.status_message || '', name: r.name, email: r.email,
      phone: r.phone, location: r.location, dob: r.dob, education: r.education,
      occupation: r.occupation, goals: r.goals,
      tracks: r.tracks || [], referral: r.referral, notes: r.notes || [],
      updatedAt: r.updated_at
    };
  }
  // New submissions are a plain insert (anon-safe: the RLS insert policy
  // covers it, and a freshly-generated id never conflicts).
  function pushApplication(a) { return restInsert('applications', appRow(a)); }
  function updateApplication(id, changes, adminHash) {
    // Prefer the admin-hash RPC (REST) so decisions persist under the local
    // admin login; fall back to the authenticated SDK update if the RPC is
    // absent (older DB) or a cloud session happens to exist.
    if (adminHash) {
      return restRpc('admin_update_application', {
        p_hash: adminHash, p_id: String(id),
        p_status: ('status' in changes) ? changes.status : null,
        p_message: ('statusMessage' in changes) ? changes.statusMessage : null,
        p_notes: ('notes' in changes) ? (changes.notes || []) : null
      }).then(function (r) {
        if (r === true) return true;
        return sdkUpdateApplication(id, changes);
      }).catch(function () { return sdkUpdateApplication(id, changes); });
    }
    return sdkUpdateApplication(id, changes);
  }
  function sdkUpdateApplication(id, changes) {
    var c = {};
    if ('status' in changes) c.status = changes.status;
    if ('statusMessage' in changes) c.status_message = changes.statusMessage;
    if ('notes' in changes) c.notes = changes.notes;
    c.updated_at = new Date().toISOString();
    return update('applications', String(id), c);
  }
  // Full applications list over plain REST, gated by the admin password hash.
  // Resolves an array, or null (RPC missing / wrong hash) so the caller falls back.
  function adminListApplications(adminHash) {
    if (!adminHash) return Promise.resolve(null);
    return restRpc('admin_list_applications', { p_hash: adminHash }).then(function (data) {
      if (!Array.isArray(data)) return null;
      return data.map(appFromRow);
    }).catch(function () { return null; });
  }
  function fetchApplications() {
    return fetchAll('applications', 'submitted_at', false).then(function (rows) {
      return rows.map(appFromRow);
    });
  }

  // ---- students ----
  function stuRow(s) {
    return clean({
      id: s.id, created_at: s.createdAt || null, updated_at: s.updatedAt || null,
      status: s.status || 'active', name: s.name || '', email: s.email || '',
      phone: s.phone || '', location: s.location || '',
      application_id: s.applicationId || null, password_hash: s.passwordHash || null,
      must_change_password: s.mustChangePassword !== false,
      courses: s.courses || [], last_login_at: s.lastLoginAt || null,
      admin_notes: s.adminNotes || []
    });
  }
  function stuFromRow(r) {
    return {
      id: r.id, createdAt: r.created_at, updatedAt: r.updated_at,
      status: r.status, name: r.name, email: r.email, phone: r.phone,
      location: r.location, applicationId: r.application_id,
      passwordHash: r.password_hash, mustChangePassword: r.must_change_password !== false,
      courses: r.courses || [], lastLoginAt: r.last_login_at,
      loginHistory: [], adminNotes: r.admin_notes || []
    };
  }
  // Write a student row. In ADMIN context (adminHash present) it goes through the
  // admin_upsert_student RPC so we can drop the blanket anon UPDATE policy that
  // let anyone rewrite any account. In STUDENT context (registration / login
  // heal, no adminHash) it uses the anon INSERT path (a brand-new id), which the
  // stu_insert_anon policy still allows.
  function pushStudent(s, adminHash) {
    var row = stuRow(s);
    if (adminHash) {
      return restRpc('admin_upsert_student', { p_hash: adminHash, p_student: row }).then(function (r) {
        if (r === true) return true;
        return restUpsert('students', row, 'id'); // fallback (RPC absent / pre-migration)
      }).catch(function () { return restUpsert('students', row, 'id'); });
    }
    return restUpsert('students', row, 'id');
  }
  // Self-service password change, proving the current hash. Lets us drop the
  // blanket anon UPDATE. Resolves true / false / null(absent-or-unreachable).
  function studentSetPasswordRpc(id, oldHash, newHash) {
    return restRpc('student_set_password', { p_id: String(id || ''), p_old_hash: oldHash, p_new_hash: newHash })
      .then(function (r) { return (r === true) ? true : (r === false ? false : null); })
      .catch(function () { return null; });
  }
  // ADMIN-FINAL delete. Prefer the admin RPC (hard delete, definer rights);
  // fall back to the old REST delete / tombstone for pre-migration compatibility.
  function deleteStudent(id, adminHash) {
    if (!id) return Promise.resolve(false);
    var legacy = function () {
      return restDelete('students', 'id=eq.' + encodeURIComponent(String(id)))
        .then(function (ok) {
          if (ok) return true;
          return restUpsert('students', { id: String(id), status: 'deleted', updated_at: new Date().toISOString() }, 'id');
        }).catch(function () { return false; });
    };
    if (adminHash) {
      return restRpc('admin_delete_student', { p_hash: adminHash, p_id: String(id) })
        .then(function (r) { return (r === true) ? true : legacy(); })
        .catch(function () { return legacy(); });
    }
    return legacy();
  }
  function fetchStudents() {
    // Admin-only read (RLS): stays on the authenticated SDK.
    return fetchAll('students', 'created_at', false).then(function (rows) {
      return rows.map(stuFromRow);
    });
  }
  // Full roster over plain REST, gated by the admin password hash via the
  // admin_list_students SECURITY DEFINER RPC. Works with the local admin login
  // (no Supabase Auth session, no CDN). Resolves an array on success, or null
  // when the RPC is absent / the hash is wrong, so the caller can fall back.
  function adminListStudents(adminHash) {
    if (!adminHash) return Promise.resolve(null);
    return restRpc('admin_list_students', { p_hash: adminHash }).then(function (data) {
      if (!Array.isArray(data)) return null;
      return data.map(stuFromRow);
    }).catch(function () { return null; });
  }
  // Secure cross-device login via the SECURITY DEFINER RPC, over plain fetch.
  function studentLogin(login, passwordHash) {
    return restRpc('student_login', { p_login: String(login || ''), p_hash: passwordHash })
      .then(function (data) {
        if (Array.isArray(data) && data.length) return stuFromRow(data[0]);
        return null;
      }).catch(function () { return null; });
  }
  function touchStudentLogin(id) {
    return restRpc('student_touch_login', { p_id: String(id || '') });
  }
  // Online-authoritative account load: reads this student's enrollments,
  // progress and cert_requests directly (filtered by student_id). This is the
  // robust path, it works with simple anon SELECT policies and does not depend
  // on a custom RPC being installed. Resolves {enrollments, progress, certRequests}.
  function fetchAccountBundle(studentId) {
    var empty = { enrollments: [], progress: [], certRequests: [] };
    if (!studentId) return Promise.resolve(empty);
    var f = 'student_id=eq.' + encodeURIComponent(String(studentId)) + '&select=*';
    // REST reads, no CDN needed, so grants sync on any device.
    return Promise.all([
      restSelect('enrollments', f),
      restSelect('progress', f),
      restSelect('cert_requests', f)
    ]).then(function (r) {
      return { enrollments: r[0], progress: r[1], certRequests: r[2] };
    }).catch(function () { return empty; });
  }

  // ---- enrollments / payments ----
  // REST-first (no CDN dependency) so unlock requests/grants work on any device.
  // The row may carry denormalized student_name/student_phone so the admin can
  // show WHO requested without reading the (RLS-protected) students table. If the
  // database predates those columns the upsert 400s, so we retry once without
  // them — the request still lands, just without the inline name.
  function pushEnrollment(row) {
    return restUpsert('enrollments', row, 'student_id,item_id').then(function (ok) {
      if (ok) return true;
      if (row && (row.student_name != null || row.student_phone != null)) {
        var lean = {};
        for (var k in row) { if (row.hasOwnProperty(k) && k !== 'student_name' && k !== 'student_phone') lean[k] = row[k]; }
        return restUpsert('enrollments', lean, 'student_id,item_id');
      }
      return false;
    });
  }
  function pushPayment(row) { return restInsert('payments', row); }
  function fetchEnrollments() { return restSelect('enrollments', 'select=*&order=created_at.desc'); }

  // ---- progress / activity ---- (REST-first, no CDN dependency)
  function pushProgress(row) { return restUpsert('progress', row, 'student_id,course_id'); }
  function logActivity(row) { return restInsert('activities', row); }
  function fetchProgress() { return restSelect('progress', 'select=*&order=last_activity_at.desc'); }

  // ---- certificate requests ----
  function crqRow(r) {
    return clean({
      id: r.id, student_id: r.studentId, course_id: r.courseId,
      course_title: r.courseTitle || r.courseId, requested_at: r.requestedAt || null,
      status: r.status || 'pending', reason: r.reason || '', decided_at: r.decidedAt || null
    });
  }
  function crqFromRow(r) {
    return {
      id: r.id, studentId: r.student_id, courseId: r.course_id,
      courseTitle: r.course_title, requestedAt: r.requested_at,
      status: r.status, reason: r.reason || '', decidedAt: r.decided_at
    };
  }
  function pushCertRequest(r) { return restUpsert('cert_requests', crqRow(r), 'id'); }
  function updateCertRequest(id, changes, adminHash) {
    // Prefer the admin-hash RPC (REST) so approve/decline persists under the
    // local admin login; fall back to the SDK update if the RPC is absent.
    if (adminHash) {
      return restRpc('admin_update_cert_request', {
        p_hash: adminHash, p_id: String(id),
        p_status: ('status' in changes) ? changes.status : null,
        p_reason: ('reason' in changes) ? changes.reason : null
      }).then(function (r) {
        if (r === true) return true;
        return sdkUpdateCertRequest(id, changes);
      }).catch(function () { return sdkUpdateCertRequest(id, changes); });
    }
    return sdkUpdateCertRequest(id, changes);
  }
  function sdkUpdateCertRequest(id, changes) {
    var c = {};
    if ('status' in changes) c.status = changes.status;
    if ('reason' in changes) c.reason = changes.reason;
    c.decided_at = new Date().toISOString();
    return update('cert_requests', String(id), c);
  }
  function fetchCertRequests() {
    return restSelect('cert_requests', 'select=*&order=requested_at.desc').then(function (rows) {
      return rows.map(crqFromRow);
    });
  }

  // ---- certificates (public verification) ----
  // Publish is create-only: an issued certificate is permanent and must
  // never be overwritten. Returns true on confirmed write or existing row.
  function publishCertificate(rec) {
    if (!rec || !rec.certId) return Promise.resolve(false);
    var row = {
      cert_id: String(rec.certId).toUpperCase(),
      student_id: rec.studentId || '', student_name: rec.studentName || '',
      course_id: rec.courseId || '', course_title: rec.courseTitle || '',
      category: rec.category || '', issue_date: rec.date || '', verified: true
    };
    // REST create-only (ignore duplicates): permanent, never overwritten.
    return restInsert('certificates', row, 'resolution=ignore-duplicates,return=minimal');
  }
  // Look up a certificate anywhere. Resolves to a verify-friendly record or null.
  function lookupCertificate(certId) {
    if (!certId) return Promise.resolve(null);
    var id = String(certId).trim().toUpperCase();
    return restSelect('certificates', 'cert_id=eq.' + encodeURIComponent(id) + '&select=*&limit=1')
      .then(function (data) {
        if (Array.isArray(data) && data.length) {
          var r = data[0];
          return {
            certId: r.cert_id, studentName: r.student_name, courseTitle: r.course_title,
            date: r.issue_date, courseId: r.course_id, category: r.category, verified: r.verified
          };
        }
        return null;
      }).catch(function () { return null; });
  }

  // Fetch all certificates that belong to a given student, mapped to the
  // local certificate shape. Authoritative source for "My Certificates".
  function fetchCertificatesFor(studentId) {
    if (!studentId) return Promise.resolve([]);
    return restSelect('certificates', 'student_id=eq.' + encodeURIComponent(String(studentId)) + '&select=*')
      .then(function (data) {
        return (data || []).map(function (r) {
          return {
            certId: r.cert_id, courseId: r.course_id, courseTitle: r.course_title,
            studentName: r.student_name, studentId: r.student_id,
            category: r.category, date: r.issue_date, verified: r.verified
          };
        });
      }).catch(function () { return []; });
  }

  // ---- realtime ----
  // Returns an unsubscribe function (no-op when cloud is off).
  function subscribe(table, cb) {
    var channel = null, cancelled = false;
    ready().then(function (db) {
      if (!db || cancelled) return;
      try {
        channel = db.channel('tih-' + table + '-' + Math.floor(performance && performance.now ? performance.now() : 0))
          .on('postgres_changes', { event: '*', schema: 'public', table: table }, function (payload) {
            try { cb(payload); } catch (e) {}
          })
          .subscribe();
      } catch (e) {}
    });
    return function () {
      cancelled = true;
      try { if (channel && _client) _client.removeChannel(channel); } catch (e) {}
    };
  }

  return {
    isEnabled: isEnabled,
    ready: ready,
    adminSignIn: adminSignIn,
    adminSignOut: adminSignOut,
    adminLoginRpc: adminLoginRpc,
    adminSetPasswordRpc: adminSetPasswordRpc,
    adminUser: adminUser,
    pushApplication: pushApplication,
    updateApplication: updateApplication,
    adminListApplications: adminListApplications,
    fetchApplications: fetchApplications,
    pushStudent: pushStudent,
    deleteStudent: deleteStudent,
    fetchStudents: fetchStudents,
    adminListStudents: adminListStudents,
    studentLogin: studentLogin,
    studentSetPasswordRpc: studentSetPasswordRpc,
    touchStudentLogin: touchStudentLogin,
    fetchAccountBundle: fetchAccountBundle,
    pushEnrollment: pushEnrollment,
    pushPayment: pushPayment,
    fetchEnrollments: fetchEnrollments,
    pushProgress: pushProgress,
    logActivity: logActivity,
    fetchProgress: fetchProgress,
    pushCertRequest: pushCertRequest,
    updateCertRequest: updateCertRequest,
    fetchCertRequests: fetchCertRequests,
    publishCertificate: publishCertificate,
    lookupCertificate: lookupCertificate,
    fetchCertificatesFor: fetchCertificatesFor,
    subscribe: subscribe,
    // exposed for HubDB / tests
    _appFromRow: appFromRow,
    _stuFromRow: stuFromRow
  };
})();
if (typeof module !== 'undefined' && module.exports) { module.exports = HubCloud; }
