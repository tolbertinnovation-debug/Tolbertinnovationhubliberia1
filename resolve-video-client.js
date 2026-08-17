/* TIH — client helper for Supabase resolve-video edge function.
   Load after hub-config.js. Does not replace static maps; only fills missing IDs. */
(function (global) {
  var CACHE_PREFIX = 'tih_vid_';
  var MEMORY = {};

  function functionsBase() {
    var p = global.TIH_PAYMENTS_CONFIG && global.TIH_PAYMENTS_CONFIG.functionsBase;
    var cfg = global.TIH_SUPABASE_CONFIG;
    if (p) return p.replace(/\/$/, '');
    if (cfg && cfg.url) return cfg.url.replace(/\/$/, '') + '/functions/v1';
    return '';
  }

  function anonKey() {
    return (global.TIH_SUPABASE_CONFIG && global.TIH_SUPABASE_CONFIG.anonKey) || '';
  }

  async function resolveVideo(opts) {
    opts = opts || {};
    var topicId = opts.topicId || '';
    var title = opts.title || '';
    var courseId = opts.courseId || '';
    var q = opts.q || '';

    if (topicId && MEMORY[topicId]) return MEMORY[topicId];
    if (topicId) {
      try {
        var ls = localStorage.getItem(CACHE_PREFIX + topicId);
        if (ls) {
          MEMORY[topicId] = ls;
          return ls;
        }
      } catch (e) {}
    }

    var base = functionsBase();
    if (!base) return null;

    var url =
      base +
      '/resolve-video?topicId=' +
      encodeURIComponent(topicId) +
      '&title=' +
      encodeURIComponent(title) +
      '&course=' +
      encodeURIComponent(courseId);
    if (q) url += '&q=' + encodeURIComponent(q);

    try {
      var headers = { Accept: 'application/json' };
      var key = anonKey();
      if (key) {
        headers.Authorization = 'Bearer ' + key;
        headers.apikey = key;
      }
      var res = await fetch(url, { headers: headers });
      if (!res.ok) return null;
      var data = await res.json();
      var vid = data && data.videoId;
      if (vid && topicId) {
        MEMORY[topicId] = vid;
        try {
          localStorage.setItem(CACHE_PREFIX + topicId, vid);
        } catch (e) {}
      }
      return vid || null;
    } catch (e) {
      if (typeof console !== 'undefined') console.warn('[resolve-video]', e);
      return null;
    }
  }

  async function ensureLessonVideo(lesson, courseId) {
    if (!lesson) return null;
    if (lesson.videoId) return lesson.videoId;
    var vid = await resolveVideo({
      topicId: lesson.topicId || '',
      title: lesson.title || '',
      courseId: courseId || '',
    });
    if (vid) {
      lesson.videoId = vid;
      lesson.reading = false;
    }
    return vid;
  }

  global.TIHResolveVideo = {
    resolve: resolveVideo,
    ensureLessonVideo: ensureLessonVideo,
  };
})(typeof window !== 'undefined' ? window : globalThis);
