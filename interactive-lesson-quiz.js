/* TIH — Interactive lesson quizzes
   After a video lesson ends (or when the learner taps Quick Quiz),
   open the matching Practice quiz so every video has an interactive check.
   Works with the existing course-player quiz engine and per-topic questions. */
(function () {
  if (typeof window === 'undefined') return;

  var PROMPT_ID = 'tihInteractiveQuizPrompt';
  var BTN_ID = 'tihQuickQuizBtn';
  var styleInjected = false;

  function ensureStyles() {
    if (styleInjected) return;
    styleInjected = true;
    var css = document.createElement('style');
    css.textContent =
      '#' + PROMPT_ID + '{' +
        'position:absolute;inset:0;z-index:20;display:none;align-items:center;justify-content:center;' +
        'background:rgba(11,31,58,.88);padding:1.25rem;text-align:center;color:#fff;' +
        'font-family:Inter,system-ui,sans-serif;' +
      '}' +
      '#' + PROMPT_ID + '.show{display:flex;}' +
      '#' + PROMPT_ID + ' .iq-card{' +
        'max-width:420px;width:100%;background:linear-gradient(160deg,#0b1f3a,#123d78);' +
        'border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:1.4rem 1.25rem;' +
        'box-shadow:0 18px 40px rgba(0,0,0,.35);' +
      '}' +
      '#' + PROMPT_ID + ' .iq-icon{font-size:2rem;margin-bottom:.5rem;}' +
      '#' + PROMPT_ID + ' .iq-title{font-family:Poppins,sans-serif;font-weight:800;font-size:1.1rem;margin-bottom:.35rem;}' +
      '#' + PROMPT_ID + ' .iq-sub{font-size:.88rem;color:rgba(255,255,255,.82);line-height:1.5;margin-bottom:1rem;}' +
      '#' + PROMPT_ID + ' .iq-actions{display:flex;flex-wrap:wrap;gap:.55rem;justify-content:center;}' +
      '#' + PROMPT_ID + ' .iq-btn{' +
        'border:none;border-radius:999px;padding:.65rem 1.1rem;font-weight:700;font-size:.88rem;' +
        'cursor:pointer;font-family:inherit;min-height:44px;' +
      '}' +
      '#' + PROMPT_ID + ' .iq-btn-primary{background:#E31E24;color:#fff;}' +
      '#' + PROMPT_ID + ' .iq-btn-primary:hover{background:#c31419;}' +
      '#' + PROMPT_ID + ' .iq-btn-ghost{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.28);}' +
      '#' + PROMPT_ID + ' .iq-btn-ghost:hover{background:rgba(255,255,255,.2);}' +
      '#' + BTN_ID + '{' +
        'display:none;align-items:center;gap:.35rem;background:#fff;color:#002868;' +
        'border:1.5px solid #bfdbfe;padding:.55rem 1rem;border-radius:10px;font-size:.8rem;' +
        'font-weight:700;cursor:pointer;font-family:Inter,sans-serif;min-height:44px;white-space:nowrap;' +
      '}' +
      '#' + BTN_ID + '.show{display:inline-flex;}' +
      '#' + BTN_ID + ':hover{background:#eff6ff;border-color:#002868;}';
    document.head.appendChild(css);
  }

  function getLessons() {
    return (typeof lessons !== 'undefined' && Array.isArray(lessons)) ? lessons : null;
  }

  function getCurrentIndex() {
    return (typeof currentLessonIndex === 'number') ? currentLessonIndex : -1;
  }

  /** Find the Practice quiz that belongs to the current video lesson. */
  function findPracticeQuizIndex(videoIndex) {
    var list = getLessons();
    if (!list || videoIndex < 0 || videoIndex >= list.length) return -1;
    var video = list[videoIndex];
    if (!video || video.isQuiz || video.isProject) return -1;

    // Prefer the next lesson if it is a Practice quiz for this topic
    var next = list[videoIndex + 1];
    if (next && next.isQuiz && /Practice\s*:/i.test(next.title || '')) return videoIndex + 1;

    // Fallback: search nearby for a matching Practice: <topic> quiz
    var topic = String(video.title || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .trim()
      .toLowerCase();
    for (var i = videoIndex + 1; i < Math.min(list.length, videoIndex + 4); i++) {
      var L = list[i];
      if (!L || !L.isQuiz) continue;
      var t = String(L.title || '').toLowerCase();
      if (t.indexOf('practice') !== -1 && t.indexOf(topic.slice(0, Math.min(18, topic.length))) !== -1) return i;
    }
    return -1;
  }

  function hidePrompt() {
    var el = document.getElementById(PROMPT_ID);
    if (el) el.classList.remove('show');
  }

  function ensurePrompt() {
    ensureStyles();
    var wrap = document.getElementById('videoContainer');
    if (!wrap) return null;
    var el = document.getElementById(PROMPT_ID);
    if (el) return el;
    el = document.createElement('div');
    el.id = PROMPT_ID;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Take the practice quiz');
    el.innerHTML =
      '<div class="iq-card">' +
        '<div class="iq-icon">📝</div>' +
        '<div class="iq-title">Video finished!</div>' +
        '<div class="iq-sub">Check what you learned with a short interactive quiz (3 questions). You need 70% to pass — you can retry anytime.</div>' +
        '<div class="iq-actions">' +
          '<button type="button" class="iq-btn iq-btn-primary" id="iqStartBtn">Start Quick Quiz →</button>' +
          '<button type="button" class="iq-btn iq-btn-ghost" id="iqLaterBtn">Maybe later</button>' +
        '</div>' +
      '</div>';
    wrap.appendChild(el);
    var start = el.querySelector('#iqStartBtn');
    var later = el.querySelector('#iqLaterBtn');
    if (start) start.addEventListener('click', function () {
      hidePrompt();
      launchPracticeQuiz();
    });
    if (later) later.addEventListener('click', hidePrompt);
    return el;
  }

  function showPrompt() {
    var quizIdx = findPracticeQuizIndex(getCurrentIndex());
    if (quizIdx < 0) return;
    // Don't re-prompt if that practice quiz is already passed
    if (typeof completedLessons !== 'undefined' && completedLessons.indexOf(quizIdx) !== -1) return;
    var el = ensurePrompt();
    if (el) el.classList.add('show');
  }

  function launchPracticeQuiz() {
    var quizIdx = findPracticeQuizIndex(getCurrentIndex());
    if (quizIdx < 0) return;
    if (typeof openQuizModal === 'function') {
      // Open quiz without requiring the learner to navigate first
      openQuizModal(quizIdx);
      return;
    }
    if (typeof selectLessonByIndex === 'function') selectLessonByIndex(quizIdx);
  }

  function ensureQuickQuizButton() {
    ensureStyles();
    var nav = document.querySelector('.lesson-nav-bar');
    if (!nav) return null;
    var btn = document.getElementById(BTN_ID);
    if (btn) return btn;
    btn = document.createElement('button');
    btn.id = BTN_ID;
    btn.type = 'button';
    btn.textContent = '📝 Quick Quiz';
    btn.title = 'Take the interactive practice quiz for this lesson';
    btn.addEventListener('click', function () {
      hidePrompt();
      launchPracticeQuiz();
    });
    // Place before the Next button when possible
    var next = document.getElementById('btnNext');
    if (next && next.parentNode === nav) nav.insertBefore(btn, next);
    else nav.appendChild(btn);
    return btn;
  }

  function updateQuickQuizButton() {
    var btn = ensureQuickQuizButton();
    if (!btn) return;
    var idx = getCurrentIndex();
    var list = getLessons();
    var lesson = (list && idx >= 0) ? list[idx] : null;
    var quizIdx = findPracticeQuizIndex(idx);
    var show = !!(lesson && lesson.videoId && !lesson.isQuiz && !lesson.isProject && quizIdx >= 0);
    btn.classList.toggle('show', show);
    if (show && typeof completedLessons !== 'undefined' && completedLessons.indexOf(quizIdx) !== -1) {
      btn.textContent = '✓ Quiz Passed';
    } else if (show) {
      btn.textContent = '📝 Quick Quiz';
    }
  }

  // Hook video end via YouTube IFrame API state changes
  function patchPlayerStateHandler() {
    // Wrap buildPlayer if present so new players get our ENDED handler
    if (typeof buildPlayer !== 'function' || buildPlayer._tihQuizPatched) return;
    var original = buildPlayer;
    buildPlayer = function () {
      original.apply(this, arguments);
      attachEndedWatcher();
    };
    buildPlayer._tihQuizPatched = true;
  }

  var endedWatchTimer = null;
  function attachEndedWatcher() {
    if (endedWatchTimer) clearInterval(endedWatchTimer);
    endedWatchTimer = setInterval(function () {
      try {
        if (typeof ytPlayer === 'undefined' || !ytPlayer || !ytPlayer.getPlayerState) return;
        var state = ytPlayer.getPlayerState();
        // 0 = ENDED
        if (state === 0) {
          clearInterval(endedWatchTimer);
          endedWatchTimer = null;
          showPrompt();
          // Re-arm after a short delay so replay can end again
          setTimeout(attachEndedWatcher, 1500);
        }
      } catch (e) {}
    }, 600);
  }

  // Keep Quick Quiz button in sync when lessons change
  function patchRenderLesson() {
    if (typeof renderLesson !== 'function' || renderLesson._tihQuizPatched) return;
    var original = renderLesson;
    renderLesson = function (index) {
      hidePrompt();
      var result = original.apply(this, arguments);
      try { updateQuickQuizButton(); attachEndedWatcher(); } catch (e) {}
      return result;
    };
    renderLesson._tihQuizPatched = true;
  }

  function boot() {
    ensureStyles();
    patchPlayerStateHandler();
    patchRenderLesson();
    updateQuickQuizButton();
    attachEndedWatcher();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 400); });
  } else {
    setTimeout(boot, 400);
  }
  // Re-try once more after course data finishes loading
  setTimeout(boot, 1800);
})();
