/* TIH — on-demand loader for the large authored note bundles.

   Five courses ship hand-written textbook-style notes instead of the
   generated ones. Those bundles are big:

     complit-notes.js  183 KB   (computer-literacy)
     eng-notes.js      208 KB   (english-success)
     ielts-notes.js    155 KB   (ielts)
     toefl-notes.js    131 KB   (toefl)
     ph-notes.js        85 KB   (ph-career)
                       ------
                       762 KB

   course-player.html used to load all five with plain <script> tags on every
   lesson view, so a learner opening AgriTech still downloaded and parsed the
   IELTS, TOEFL, English, Public Health and Computer Literacy notes — 762 KB
   of JavaScript that page could never use. On the ~1-16 KB/s connections many
   learners here are on that is minutes of blank screen before a lesson
   appears, and it undoes the same lazy-loading care already taken with the
   dashboard's course catalog.

   This fetches only the bundle belonging to the course actually open, then
   asks the player to repaint so the authored note replaces the generated one.
   A course with no authored bundle simply loads nothing. */
(function () {
  if (typeof window === 'undefined') return;

  // courseId -> bundle filename. Keep in step with the files themselves;
  // each one registers exactly one window.TIH_LESSON_NOTES[<courseId>].
  var BUNDLES = {
    'computer-literacy': 'complit-notes.js?v=2',
    'english-success':   'eng-notes.js?v=1',
    'ielts':             'ielts-notes.js?v=2',
    'toefl':             'toefl-notes.js?v=2',
    'ph-career':         'ph-notes.js?v=2',
    'sat':               'sat-notes.js?v=1',
    'ai-cybersecurity':  'aicyber-notes.js?v=1',
    'android':           'android-notes.js?v=1'
  };

  /* A course may also ship its own per-topic quiz bank. Unlike the notes, the
     curriculum builder consumes these, so the file carries a re-apply hook it
     calls once the bank lands. Keeping them out of topic-quizzes.js means the
     other 24 courses never download SAT's questions. */
  var QUIZ_BUNDLES = {
    'sat':              { src: 'sat-topic-quizzes.js?v=1',     apply: 'tihApplySatTopicQuizzes' },
    'ai-cybersecurity': { src: 'aicyber-topic-quizzes.js?v=1', apply: 'tihApplyAicyberTopicQuizzes' },
    'android':          { src: 'android-topic-quizzes.js?v=1', apply: 'tihApplyAndroidTopicQuizzes' }
  };

  window.TIH_LESSON_NOTES = window.TIH_LESSON_NOTES || {};

  function repaint() {
    // The player exposes this once its lesson list is built; if the bundle
    // wins the race and lands first there is nothing to repaint yet, and the
    // first render will already see the notes.
    try {
      if (typeof window.tihApplyAuthoredNotes === 'function') window.tihApplyAuthoredNotes();
    } catch (e) {}
  }

  function loadFor(courseId) {
    if (!courseId) return;
    var src = BUNDLES[courseId];
    if (!src) return;                                   // no authored bundle
    if (window.TIH_LESSON_NOTES[courseId]) { repaint(); return; }  // already here
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = repaint;
    s.onerror = function () { /* fall back to the generated notes */ };
    (document.head || document.documentElement).appendChild(s);
  }

  function loadQuizzesFor(courseId) {
    var spec = QUIZ_BUNDLES[courseId];
    if (!spec) return;
    var s = document.createElement('script');
    s.src = spec.src;
    s.async = true;
    s.onload = function () {
      try {
        if (typeof window[spec.apply] === 'function') window[spec.apply]();
      } catch (e) {}
    };
    s.onerror = function () { /* fall back to the curriculum's own questions */ };
    (document.head || document.documentElement).appendChild(s);
  }

  window.tihLoadAuthoredNotes = loadFor;

  var m = /[?&]id=([^&]+)/.exec(location.search);
  var cid = m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  if (cid) { loadFor(cid); loadQuizzesFor(cid); }
})();
