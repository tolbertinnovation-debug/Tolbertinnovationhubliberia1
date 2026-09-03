/* ============================================================
   LIBAPPS, DATA LAYER
   ------------------------------------------------------------
   LibApps is the APK store inside the Tolbert Innovation Hub site.
   It runs on the same Supabase project as the Learning Hub and on
   the same accounts, so a learner who signed up at hub-apply.html
   signs in once and can browse, upload, like, comment and download.

   The site is static, so the anon key in hub-config.js is public.
   Nothing here talks to a table directly -- every call goes to a
   SECURITY DEFINER function in libapps-schema.sql that re-checks the
   learner's id and password hash server-side. Sending a forged id
   from the console gets a LIBAPPS_AUTH_REQUIRED back, not data.

   Requires, in this order:
     hub-config.js   (Supabase url + anon key)
     hub-db.js       (HubDB: the account + session)
     hub-cloud.js    (HubCloud: the shared Supabase client)
     libapps-db.js   (this file)

   Public API:
     LibApps.isEnabled()                  -> boolean
     LibApps.session()                    -> {id,name,hash} | null
     LibApps.guard(opts)                  -> session, or sends them to sign in
     LibApps.stats()                      -> {app_count,download_count,uploader_count}
     LibApps.browse(opts)                 -> [app]
     LibApps.get(appId)                   -> app | null
     LibApps.byOwner(ownerId)             -> [app]
     LibApps.categories()                 -> [{category,n}]
     LibApps.profile(ownerId)             -> profile | null
     LibApps.comments(appId)              -> [comment]
     LibApps.publish(app)                 -> appId
     LibApps.update(appId, changes)       -> true
     LibApps.remove(appId)                -> true
     LibApps.toggleLike(appId)            -> {liked,like_count}
     LibApps.addComment(appId, text)      -> comment
     LibApps.deleteComment(commentId)     -> true
     LibApps.download(appId)              -> {url,filename,download_count}
     LibApps.report(appId, reason, note)  -> true
     LibApps.checkApk(file)               -> Promise (rejects with a reason)
     LibApps.uploadApk(file, onProgress)  -> storage path
     LibApps.uploadImage(file, onProgress)-> public URL
     LibApps.admin.*                      -> moderation calls
     LibApps.message(err)                 -> a sentence a learner can act on
   ============================================================ */
var LibApps = (function () {
  'use strict';

  var APK_BUCKET   = 'libapps-apks';
  var IMAGE_BUCKET = 'libapps-images';

  // Keep in step with libapps-schema.sql, which enforces the same numbers.
  var MAX_APK_MB   = 50;
  var MAX_IMAGE_MB = 3;
  var MAX_APPS     = 12;

  var CATEGORIES = [
    'Education', 'Business & Finance', 'Health', 'Agriculture',
    'Productivity', 'Communication', 'Entertainment', 'Games',
    'Tools & Utilities', 'Developer', 'Other'
  ];

  // ---------- plumbing ----------

  function cfg() { return window.TIH_SUPABASE_CONFIG || null; }
  function isEnabled() { var c = cfg(); return !!(c && c.url && c.anonKey); }

  function client() {
    if (!window.HubCloud || !HubCloud.ready) return Promise.resolve(null);
    return HubCloud.ready().catch(function () { return null; });
  }

  /* The signed-in learner plus the password hash the RPCs verify.
     The hash is not kept in the session blob, it comes from the account
     record HubDB caches at login, so a session left behind without its
     account (cleared storage, a half-finished login) reads as signed out
     rather than silently failing on every call. */
  function session() {
    try {
      if (!window.HubDB || !HubDB.studentSession) return null;
      var s = HubDB.studentSession();
      if (!s || !s.id) return null;
      var stu = HubDB.findStudent ? HubDB.findStudent(s.id) : null;
      var hash = stu && stu.passwordHash;
      if (!hash) return null;
      return { id: s.id, name: s.name || (stu && stu.name) || 'Learner', hash: hash };
    } catch (e) { return null; }
  }

  /* Page guard. Returns the session, or sends them to sign in and
     returns null so the caller can stop rendering. */
  function guard(opts) {
    var o = opts || {};
    var s = session();
    if (s) return s;
    if (o.redirect === false) return null;
    var here = location.pathname.split('/').pop() + location.search;
    location.replace('hub-dashboard?next=' + encodeURIComponent(here));
    return null;
  }

  function rpc(fn, args) {
    return client().then(function (c) {
      if (!c) throw new Error('LIBAPPS_OFFLINE');
      return c.rpc(fn, args);
    }).then(function (r) {
      if (r && r.error) throw r.error;
      return r ? r.data : null;
    });
  }

  // Writing carries the credentials the database re-checks, and refuses up
  // front when nobody is signed in.
  function authRpc(fn, args) {
    var s = session();
    if (!s) return Promise.reject(new Error('LIBAPPS_AUTH_REQUIRED'));
    var a = { p_student_id: s.id, p_hash: s.hash };
    for (var k in (args || {})) if (Object.prototype.hasOwnProperty.call(args, k)) a[k] = args[k];
    return rpc(fn, a);
  }

  /* Reading and downloading need no account. The credentials are still sent
     when someone is signed in, so the database can mark which apps they have
     liked; a signed-out visitor sends nulls and simply sees no hearts. */
  function openRpc(fn, args) {
    var s = session();
    var a = { p_student_id: s ? s.id : null, p_hash: s ? s.hash : null };
    for (var k in (args || {})) if (Object.prototype.hasOwnProperty.call(args, k)) a[k] = args[k];
    return rpc(fn, a);
  }

  function first(rows) { return (rows && rows.length) ? rows[0] : null; }

  // ---------- reading ----------

  function stats() {
    return rpc('libapps_public_stats', {})
      .then(first)
      .catch(function () { return null; });
  }

  function browse(opts) {
    var o = opts || {};
    return openRpc('libapps_browse', {
      p_search:   o.search   || null,
      p_category: o.category || null,
      p_sort:     o.sort     || 'recent',
      p_limit:    o.limit    || 60,
      p_offset:   o.offset   || 0
    }).then(function (rows) { return rows || []; });
  }

  function get(appId)          { return openRpc('libapps_get', { p_app_id: appId }).then(first); }
  function byOwner(ownerId)    { return openRpc('libapps_by_owner', { p_owner_id: ownerId }).then(function (r) { return r || []; }); }
  function categories()        { return openRpc('libapps_categories', {}).then(function (r) { return r || []; }); }
  function profile(ownerId)    { return openRpc('libapps_profile', { p_owner_id: ownerId }).then(first); }
  function comments(appId)     { return openRpc('libapps_comments_for', { p_app_id: appId }).then(function (r) { return r || []; }); }

  // ---------- writing ----------

  /* Publishing is administrator-only. The learner credentials still go up,
     because they are what owns the listing, but the database also wants an
     admin hash and refuses without it. Sending it from here is a convenience,
     not the control: forging one gets LIBAPPS_ADMIN_ONLY_UPLOAD back. */
  function publish(app) {
    return authRpc('libapps_publish', { p_app: app, p_admin_hash: adminHash() });
  }
  function update(appId, changes) {
    return authRpc('libapps_update', { p_app_id: appId, p_changes: changes, p_admin_hash: adminHash() });
  }
  function toggleLike(appId)            { return authRpc('libapps_toggle_like', { p_app_id: appId }).then(first); }
  function addComment(appId, text)      { return authRpc('libapps_add_comment', { p_app_id: appId, p_content: text }).then(first); }
  function deleteComment(commentId)     { return authRpc('libapps_delete_comment', { p_comment_id: commentId }); }
  function report(appId, reason, note)  { return authRpc('libapps_report', { p_app_id: appId, p_reason: reason, p_details: note || null }); }

  /* Deleting returns the storage paths, so the files go with the row
     instead of sitting in the bucket eating the 1 GB free-tier allowance. */
  function remove(appId) {
    return authRpc('libapps_delete', { p_app_id: appId }).then(function (rows) {
      var row = first(rows);
      if (row) purgeFiles(row);
      return true;
    });
  }

  function purgeFiles(row) {
    client().then(function (c) {
      if (!c || !row) return;
      if (row.apk_path) c.storage.from(APK_BUCKET).remove([row.apk_path]).catch(function () {});
      var imgs = [];
      if (row.icon_url) imgs.push(row.icon_url);
      (row.screenshot_urls || []).forEach(function (u) { imgs.push(u); });
      imgs = imgs.map(imageKeyFromUrl).filter(Boolean);
      if (imgs.length) c.storage.from(IMAGE_BUCKET).remove(imgs).catch(function () {});
    }).catch(function () {});
  }

  function imageKeyFromUrl(url) {
    if (!url) return null;
    var marker = '/' + IMAGE_BUCKET + '/';
    var i = String(url).indexOf(marker);
    return i === -1 ? null : decodeURIComponent(String(url).slice(i + marker.length));
  }

  // ---------- download ----------

  /* Counts the download and hands back a link that dies in two minutes.
     libapps_download is the only function that reveals where the file
     actually lives, and it authenticates before it does. */
  function download(appId) {
    return openRpc('libapps_download', { p_app_id: appId }).then(function (rows) {
      var row = first(rows);
      if (!row) throw new Error('LIBAPPS_NOT_FOUND');
      var filename = safeName(row.name) + (row.version ? '-' + safeName(row.version) : '') + '.apk';
      return client().then(function (c) {
        if (!c) throw new Error('LIBAPPS_OFFLINE');
        return c.storage.from(APK_BUCKET).createSignedUrl(row.apk_path, 120, { download: filename });
      }).then(function (r) {
        if (r && r.error) throw r.error;
        return {
          url: r.data.signedUrl,
          filename: filename,
          download_count: row.download_count
        };
      });
    });
  }

  function safeName(s) {
    return String(s || 'app').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'app';
  }

  // ---------- upload ----------

  function readSlice(file, start, end) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onload = function () { resolve(new Uint8Array(fr.result)); };
      fr.onerror = function () { reject(new Error('LIBAPPS_READ_FAILED')); };
      fr.readAsArrayBuffer(file.slice(start, end));
    });
  }

  function bytesContain(bytes, text) {
    var needle = [], i, j;
    for (i = 0; i < text.length; i++) needle.push(text.charCodeAt(i));
    var last = bytes.length - needle.length;
    outer:
    for (i = 0; i <= last; i++) {
      for (j = 0; j < needle.length; j++) if (bytes[i + j] !== needle[j]) continue outer;
      return true;
    }
    return false;
  }

  /* Checks the file really is an Android package, not something renamed
     to .apk. An APK is a ZIP (so it starts PK\x03\x04) and every one of
     them contains AndroidManifest.xml, whose name sits in clear text in
     both the local header near the front and the central directory at
     the back. Reading a slice off each end catches a renamed photo,
     document or Windows program before it ever reaches a student. */
  function checkApk(file) {
    if (!file) return Promise.reject(new Error('LIBAPPS_FILE_REQUIRED'));
    if (!/\.apk$/i.test(file.name || '')) return Promise.reject(new Error('LIBAPPS_NOT_APK_NAME'));
    if (!file.size) return Promise.reject(new Error('LIBAPPS_FILE_EMPTY'));
    if (file.size > MAX_APK_MB * 1024 * 1024) return Promise.reject(new Error('LIBAPPS_FILE_TOO_LARGE'));

    return readSlice(file, 0, 4).then(function (head) {
      if (!(head[0] === 0x50 && head[1] === 0x4B && head[2] === 0x03 && head[3] === 0x04)) {
        throw new Error('LIBAPPS_NOT_ZIP');
      }
      var headEnd = Math.min(file.size, 512 * 1024);
      var tailLen = Math.min(file.size, 1024 * 1024);
      return Promise.all([
        readSlice(file, 0, headEnd),
        readSlice(file, file.size - tailLen, file.size)
      ]);
    }).then(function (parts) {
      var found = bytesContain(parts[0], 'AndroidManifest.xml') ||
                  bytesContain(parts[1], 'AndroidManifest.xml');
      if (!found) throw new Error('LIBAPPS_NO_MANIFEST');
      return true;
    });
  }

  function checkImage(file) {
    if (!file) return Promise.reject(new Error('LIBAPPS_FILE_REQUIRED'));
    if (!/^image\//.test(file.type || '')) return Promise.reject(new Error('LIBAPPS_NOT_IMAGE'));
    if (file.size > MAX_IMAGE_MB * 1024 * 1024) return Promise.reject(new Error('LIBAPPS_IMAGE_TOO_LARGE'));
    return Promise.resolve(true);
  }

  function storageKey(file, kind) {
    var s = session();
    var owner = (s ? s.id : 'anon').toLowerCase().replace(/[^a-z0-9-]/g, '');
    var stem = String(file.name || kind).replace(/\.[^.]+$/, '');
    stem = safeName(stem) || kind;
    var ext = kind === 'apk'
      ? 'apk'
      : ((String(file.name || '').match(/\.([a-z0-9]+)$/i) || [null, 'png'])[1] || 'png').toLowerCase();
    var unique = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
    return owner + '/' + unique + '-' + stem + '.' + ext;
  }

  /* XMLHttpRequest rather than the SDK's upload, purely so the form can
     show a real progress bar. On a slow connection a 20 MB APK is a long
     wait, and a bar that moves is the difference between waiting and
     assuming it broke. */
  function put(bucket, key, file, contentType, onProgress) {
    var c = cfg();
    if (!c) return Promise.reject(new Error('LIBAPPS_OFFLINE'));
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var endpoint = c.url.replace(/\/+$/, '') + '/storage/v1/object/' + bucket + '/' +
                     key.split('/').map(encodeURIComponent).join('/');
      xhr.open('POST', endpoint, true);
      xhr.setRequestHeader('apikey', c.anonKey);
      xhr.setRequestHeader('Authorization', 'Bearer ' + c.anonKey);
      xhr.setRequestHeader('x-upsert', 'false');
      xhr.setRequestHeader('Content-Type', contentType);
      xhr.setRequestHeader('Cache-Control', '3600');
      if (xhr.upload && onProgress) {
        xhr.upload.onprogress = function (e) {
          if (e.lengthComputable) onProgress(Math.min(0.99, e.loaded / e.total));
        };
      }
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) { if (onProgress) onProgress(1); resolve(key); }
        else reject(new Error('LIBAPPS_UPLOAD_FAILED:' + xhr.status + ':' + (xhr.responseText || '')));
      };
      xhr.onerror = function () { reject(new Error('LIBAPPS_UPLOAD_NETWORK')); };
      xhr.ontimeout = function () { reject(new Error('LIBAPPS_UPLOAD_NETWORK')); };
      xhr.send(file);
    });
  }

  function uploadApk(file, onProgress) {
    return checkApk(file).then(function () {
      // Forced, because browsers report .apk inconsistently and the bucket
      // only accepts a known list of types.
      return put(APK_BUCKET, storageKey(file, 'apk'), file,
                 'application/vnd.android.package-archive', onProgress);
    });
  }

  function uploadImage(file, onProgress) {
    return checkImage(file).then(function () {
      var key = storageKey(file, 'image');
      return put(IMAGE_BUCKET, key, file, file.type || 'image/png', onProgress);
    }).then(function (key) {
      return client().then(function (c) {
        if (!c) throw new Error('LIBAPPS_OFFLINE');
        return c.storage.from(IMAGE_BUCKET).getPublicUrl(key).data.publicUrl;
      });
    });
  }

  // ---------- moderation ----------

  /* True when an administrator is signed in on this browser. Pages use it to
     decide whether to offer the upload form at all; the database decides
     whether the upload is actually allowed. */
  function canUpload() { return !!adminHash(); }

  function adminHash() {
    try {
      var s = window.HubDB && HubDB.adminSession ? HubDB.adminSession() : null;
      return (s && (s.hash || s.passwordHash)) || null;
    } catch (e) { return null; }
  }

  function adminRpc(fn, args) {
    var h = adminHash();
    if (!h) return Promise.reject(new Error('LIBAPPS_ADMIN_REQUIRED'));
    var a = { p_admin_hash: h };
    for (var k in (args || {})) if (Object.prototype.hasOwnProperty.call(args, k)) a[k] = args[k];
    return rpc(fn, a);
  }

  var admin = {
    apps:          function ()               { return adminRpc('libapps_admin_apps', {}).then(function (r) { return r || []; }); },
    comments:      function ()               { return adminRpc('libapps_admin_comments', {}).then(function (r) { return r || []; }); },
    reports:       function ()               { return adminRpc('libapps_admin_reports', {}).then(function (r) { return r || []; }); },
    setStatus:     function (id, st, why)    { return adminRpc('libapps_admin_set_status', { p_app_id: id, p_status: st, p_reason: why || null }); },
    deleteComment: function (id)             { return adminRpc('libapps_admin_delete_comment', { p_comment_id: id }); },
    resolveReport: function (id, st)         { return adminRpc('libapps_admin_resolve_report', { p_report_id: id, p_status: st }); },
    deleteApp:     function (id) {
      return adminRpc('libapps_admin_delete_app', { p_app_id: id }).then(function (rows) {
        purgeFiles(first(rows));
        return true;
      });
    }
  };

  // ---------- error text ----------

  /* Turns a database error code into something a learner can act on.
     Anything unrecognised falls through to a plain connection message
     rather than showing Postgres wording to a student. */
  var MESSAGES = {
    LIBAPPS_AUTH_REQUIRED:   'Your account is not recognised by the central database yet. Signing in again uploads it and fixes this.',
    LIBAPPS_ADMIN_REQUIRED:  'That action needs an administrator sign-in.',
    LIBAPPS_ADMIN_ONLY_UPLOAD: 'Only TIH administrators can publish apps at the moment.',
    LIBAPPS_NOT_OWNER:       'You can only change apps you uploaded yourself.',
    LIBAPPS_NOT_ALLOWED:     'You do not have permission to do that.',
    LIBAPPS_NOT_FOUND:       'That app is no longer available.',
    LIBAPPS_NAME_REQUIRED:   'Give your app a name.',
    LIBAPPS_NAME_TOO_LONG:   'The app name is too long. Keep it under 80 characters.',
    LIBAPPS_FILE_REQUIRED:   'Choose the .apk file for your app.',
    LIBAPPS_FILE_EMPTY:      'That file is empty. Choose the .apk again.',
    LIBAPPS_FILE_TOO_LARGE:  'That file is over ' + MAX_APK_MB + ' MB. Please upload a smaller APK.',
    LIBAPPS_IMAGE_TOO_LARGE: 'That image is over ' + MAX_IMAGE_MB + ' MB. Please choose a smaller one.',
    LIBAPPS_NOT_APK_NAME:    'That is not an .apk file. Choose the app file that ends in .apk.',
    LIBAPPS_NOT_ZIP:         'That file is not a real Android app. Choose the .apk your build produced.',
    LIBAPPS_NO_MANIFEST:     'That .apk has no Android manifest inside it, so it is not a valid app.',
    LIBAPPS_NOT_IMAGE:       'Choose a picture file (PNG, JPG or WebP).',
    LIBAPPS_EMPTY_COMMENT:   'Write something before you post.',
    LIBAPPS_UPLOAD_LIMIT:    'You already have ' + MAX_APPS + ' apps published. Delete one before uploading another.',
    LIBAPPS_BAD_STATUS:      'That is not a valid status.',
    LIBAPPS_READ_FAILED:     'That file could not be read. Try choosing it again.',
    LIBAPPS_UPLOAD_NETWORK:  'The upload stopped. Check your connection and try again.',
    LIBAPPS_OFFLINE:         'LibApps cannot reach the server right now. Try again in a moment.'
  };

  /* Before libapps-schema.sql has been run against the project, none of the
     functions exist and PostgREST answers every call with PGRST202, "Could
     not find the function ... in the schema cache". That used to fall through
     to the generic message, which told the reader to check a connection that
     was working perfectly. Name the real cause instead: it is one SQL script,
     and the message disappears the moment it is run. */
  function looksUninstalled(err, raw) {
    var code = (err && (err.code || err.error)) || '';
    if (code === 'PGRST202' || code === '42883') return true;
    return /could not find the function/i.test(raw) ||
           /function .*libapps.* does not exist/i.test(raw) ||
           /schema cache/i.test(raw);
  }

  /* True when the database refused the learner's credentials. On a static
     site this usually means the account was created on this device and never
     reached Supabase, or its password was changed elsewhere: hub-db.js signs
     people in against the local copy when the cloud lookup fails, so a learner
     can be signed in here and unknown there. Signing in again re-uploads the
     account, which is what completeStudentLogin() already does. */
  function isAuthError(err) {
    var raw = (typeof err === 'string') ? err : ((err && (err.message || err.details)) || '');
    return raw.indexOf('LIBAPPS_AUTH_REQUIRED') !== -1;
  }

  function message(err) {
    var raw = '';
    if (typeof err === 'string') raw = err;
    else if (err) raw = err.message || err.error_description || err.details || err.hint || '';
    for (var code in MESSAGES) {
      if (Object.prototype.hasOwnProperty.call(MESSAGES, code) && raw.indexOf(code) !== -1) return MESSAGES[code];
    }
    if (raw.indexOf('LIBAPPS_UPLOAD_FAILED') !== -1) return 'The upload was refused. Check the file size and try again.';
    if (looksUninstalled(err, raw)) {
      return 'LibApps is not switched on yet. The site owner still needs to run the ' +
             'one-time database setup (libapps-schema.sql) in Supabase.';
    }
    return 'Something went wrong. Please check your connection and try again.';
  }

  return {
    CATEGORIES: CATEGORIES,
    MAX_APK_MB: MAX_APK_MB,
    MAX_IMAGE_MB: MAX_IMAGE_MB,
    MAX_APPS: MAX_APPS,
    isEnabled: isEnabled,
    session: session,
    canUpload: canUpload,
    isAuthError: isAuthError,
    guard: guard,
    stats: stats,
    browse: browse,
    get: get,
    byOwner: byOwner,
    categories: categories,
    profile: profile,
    comments: comments,
    publish: publish,
    update: update,
    remove: remove,
    toggleLike: toggleLike,
    addComment: addComment,
    deleteComment: deleteComment,
    download: download,
    report: report,
    checkApk: checkApk,
    checkImage: checkImage,
    uploadApk: uploadApk,
    uploadImage: uploadImage,
    admin: admin,
    message: message
  };
})();
if (typeof window !== 'undefined') window.LibApps = LibApps;
