/* TIH: Force 3-week completion target for all courses */
(function () {
  var TARGET = '3 weeks';
  function apply(db) {
    if (!db || typeof db !== 'object') return;
    Object.keys(db).forEach(function (id) {
      var c = db[id];
      if (c && typeof c === 'object') {
        c.duration = TARGET;
        if (c.meta && typeof c.meta === 'object') c.meta.duration = TARGET;
      }
    });
  }
  if (typeof COURSES_DB !== 'undefined') apply(COURSES_DB);
  if (typeof window !== 'undefined') {
    window.TIH_COURSE_DURATION_WEEKS = 3;
    window.TIH_COURSE_DURATION_LABEL = TARGET;
    var _db = window.COURSES_DB;
    try {
      Object.defineProperty(window, 'COURSES_DB', {
        configurable: true,
        enumerable: true,
        get: function () { return _db; },
        set: function (v) { _db = v; apply(_db); }
      });
    } catch (e) {
      apply(window.COURSES_DB);
    }
    document.addEventListener('DOMContentLoaded', function () {
      apply(typeof COURSES_DB !== 'undefined' ? COURSES_DB : window.COURSES_DB);
      document.querySelectorAll('[data-duration], .course-duration, .duration, .meta-duration').forEach(function (el) {
        if (/\d+\s*h|\d+\s*hours?|\d+\s*weeks?/i.test(el.textContent || '')) {
          el.textContent = TARGET;
        }
      });
    });
  }
})();
