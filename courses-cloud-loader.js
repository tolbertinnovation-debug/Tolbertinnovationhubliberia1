/* TIH — Load courses from Supabase (live) and merge into COURSES_DB.
   Include AFTER courses-db.js and hub-config.js.
   Static files remain as offline fallback; cloud wins when available. */
(function (global) {
  var cfg = global.TIH_SUPABASE_CONFIG || {};
  var base =
    (global.TIH_PAYMENTS_CONFIG && global.TIH_PAYMENTS_CONFIG.functionsBase) ||
    (cfg.url ? cfg.url.replace(/\/$/, '') + '/functions/v1' : '');

  function mergeCourses(map) {
    if (!map || typeof map !== 'object') return 0;
    if (!global.COURSES_DB) global.COURSES_DB = {};
    var n = 0;
    Object.keys(map).forEach(function (id) {
      var p = map[id];
      if (p && typeof p === 'object') {
        global.COURSES_DB[id] = p;
        n++;
      }
    });
    return n;
  }

  async function loadFromRest() {
    if (!cfg.url || !cfg.anonKey) return null;
    var url =
      cfg.url.replace(/\/$/, '') +
      '/rest/v1/hub_courses?is_published=eq.true&select=id,payload&order=sort_order.asc';
    var res = await fetch(url, {
      headers: {
        apikey: cfg.anonKey,
        Authorization: 'Bearer ' + cfg.anonKey,
        Accept: 'application/json',
      },
    });
    if (!res.ok) return null;
    var rows = await res.json();
    if (!Array.isArray(rows)) return null;
    var map = {};
    rows.forEach(function (r) {
      if (r && r.id && r.payload) map[r.id] = r.payload;
    });
    return map;
  }

  async function loadFromFunction() {
    if (!base) return null;
    var res = await fetch(base + '/get-courses', {
      headers: {
        Accept: 'application/json',
        apikey: cfg.anonKey || '',
        Authorization: 'Bearer ' + (cfg.anonKey || ''),
      },
    });
    if (!res.ok) return null;
    var data = await res.json();
    return data && data.courses ? data.courses : null;
  }

  async function loadCoursesCloud() {
    var map = null;
    try {
      map = await loadFromRest();
    } catch (e) {}
    if (!map || !Object.keys(map).length) {
      try {
        map = await loadFromFunction();
      } catch (e) {}
    }
    var n = mergeCourses(map);
    if (typeof console !== 'undefined') {
      console.log('[TIH courses-cloud] merged', n, 'courses from Supabase');
    }
    global.TIH_COURSES_CLOUD_READY = true;
    global.TIH_COURSES_CLOUD_COUNT = n;
    try {
      global.dispatchEvent(new Event('tih-courses-cloud-ready'));
    } catch (e) {}
    return n;
  }

  global.TIHCoursesCloud = {
    load: loadCoursesCloud,
    merge: mergeCourses,
  };

  if (cfg.url && cfg.anonKey) {
    loadCoursesCloud();
  }
})(typeof window !== 'undefined' ? window : globalThis);
