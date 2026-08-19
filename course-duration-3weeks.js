/* TIH: Force 3-week completion target for all courses — data + visible UI */
(function () {
  var TARGET = '3 weeks';
  var LABEL = '3 weeks to complete';

  function apply(db) {
    if (!db || typeof db !== 'object') return;
    Object.keys(db).forEach(function (id) {
      var c = db[id];
      if (c && typeof c === 'object') {
        c.duration = TARGET;
        c.durationLabel = LABEL;
        if (c.meta && typeof c.meta === 'object') {
          c.meta.duration = TARGET;
          c.meta.durationLabel = LABEL;
        }
      }
    });
  }

  function injectIntoCards() {
    // Course cards on dashboard / home / course lists
    var selectors = [
      '.course-card',
      '[data-course-id]',
      '.hub-course-card',
      '.stu-course-card',
      '.course-item',
      '.card-course',
      'article.course',
      '.course-tile'
    ];
    var cards = document.querySelectorAll(selectors.join(','));
    cards.forEach(function (card) {
      if (card.querySelector('.tih-duration-badge')) return;
      var badge = document.createElement('div');
      badge.className = 'tih-duration-badge';
      badge.setAttribute('data-duration', TARGET);
      badge.style.cssText = 'display:inline-flex;align-items:center;gap:0.3rem;margin-top:0.45rem;font-size:0.78rem;font-weight:600;color:#0B3D91;background:#E8F0FE;padding:0.28rem 0.6rem;border-radius:999px;border:1px solid #C5D0E0;';
      badge.innerHTML = '<span style="font-size:0.9em">⏱</span> ' + LABEL;
      // Prefer inserting near progress / Continue area
      var progress = card.querySelector('.progress, .progress-bar, .lesson-count, [class*="progress"]');
      var continueBtn = card.querySelector('a.btn, button.btn, .continue, [class*="continue"]');
      if (progress && progress.parentNode) {
        progress.parentNode.insertBefore(badge, progress.nextSibling);
      } else if (continueBtn && continueBtn.parentNode) {
        continueBtn.parentNode.insertBefore(badge, continueBtn);
      } else {
        card.appendChild(badge);
      }
    });

    // Any existing duration text nodes
    document.querySelectorAll('[data-duration], .course-duration, .duration, .meta-duration, .course-meta').forEach(function (el) {
      var t = (el.textContent || '').trim();
      if (/\d+\s*h|\d+\s*hours?|\d+\s*weeks?|\d+\s*min/i.test(t) || t === '' || /duration/i.test(el.className || '')) {
        el.textContent = LABEL;
        el.setAttribute('data-duration', TARGET);
      }
    });
  }

  if (typeof COURSES_DB !== 'undefined') apply(COURSES_DB);

  if (typeof window !== 'undefined') {
    window.TIH_COURSE_DURATION_WEEKS = 3;
    window.TIH_COURSE_DURATION_LABEL = TARGET;
    window.TIH_COURSE_DURATION_FULL = LABEL;

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

    function run() {
      apply(typeof COURSES_DB !== 'undefined' ? COURSES_DB : window.COURSES_DB);
      injectIntoCards();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
    // Re-run after dynamic dashboard renders
    setTimeout(run, 800);
    setTimeout(run, 2000);
    setTimeout(run, 4000);

    // Observe DOM for SPA / late-rendered cards
    if (typeof MutationObserver !== 'undefined') {
      var obs = new MutationObserver(function () {
        injectIntoCards();
      });
      if (document.body) {
        obs.observe(document.body, { childList: true, subtree: true });
      } else {
        document.addEventListener('DOMContentLoaded', function () {
          obs.observe(document.body, { childList: true, subtree: true });
        });
      }
    }
  }
})();
