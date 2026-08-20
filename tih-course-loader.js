/* TIH — per-course data loader for the course player.

   The player used to load every course's data on every page view: 47 curriculum
   builders, the 909 KB lesson-content.js and the 567 KB topic-quizzes.js, for a
   single lesson. Opening AgriTech fetched 4.3 MB of JavaScript across 123 files,
   of which roughly 300 KB could ever be used. On the 1-16 KB/s connections many
   learners here are on, that is the difference between a lesson appearing in
   under a minute and in most of an hour.

   This fetches only what the open course needs, in the order the data requires:

     1. content/<id>-content.js   generated notes for this course
     2. quizzes/<id>-quizzes.js   authored topic quizzes, where the course has any
     3. <id>-curriculum.js        the builder, which reads both of the above and
                                  may overwrite LESSON_CONTENT[<id>] with its own

   Order matters. The builders consume TIH_TOPIC_QUIZZES while they run, and
   several assign LESSON_CONTENT[<id>] themselves, so the static content chunk
   has to be in place first and the builder has to run last.

   Scripts are appended with async=false so they execute in that fixed order,
   and the player waits for the callback before reading COURSES_DB. */
(function () {
  if (typeof window === 'undefined') return;

  // The global the curriculum builders assign into. lesson-content.js used to
  // declare it; without this they would silently skip their assignment.
  window.LESSON_CONTENT = window.LESSON_CONTENT || {};
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};

  // courseId -> curriculum builder. One file builds exactly one course.
  var CURRICULUM = {
    "agritech": "agritech-curriculum.js",
    "ai": "ai-curriculum.js",
    "ai-cybersecurity": "aicyber-curriculum.js",
    "android": "android-curriculum.js",
    "bible-foundations": "bible-curriculum.js",
    "computer-literacy": "complit-curriculum.js",
    "cybersecurity": "cybersecurity-curriculum.js",
    "data": "data-curriculum.js",
    "design": "design-curriculum.js",
    "english-success": "englishsuccess-curriculum.js",
    "entrepreneurship": "entrepreneurship-curriculum.js",
    "financial-literacy": "finlit-curriculum.js",
    "grant-writing": "grantwriting-curriculum.js",
    "healthtech": "healthtech-curriculum.js",
    "ielts": "ielts-curriculum.js",
    "leadership": "leadership-curriculum.js",
    "marketing": "marketing-curriculum.js",
    "office": "office-curriculum.js",
    "ph-career": "publichealth-curriculum.js",
    "project-mgmt": "projectmgmt-curriculum.js",
    "remote-work": "remotework-curriculum.js",
    "sat": "sat-curriculum.js",
    "toefl": "toefl-curriculum.js",
    "wassce-accounts": "wassce-accounts-curriculum.js",
    "wassce-agriculture": "wassce-agriculture-curriculum.js",
    "wassce-biology": "wassce-biology-curriculum.js",
    "wassce-chemistry": "wassce-chemistry-curriculum.js",
    "wassce-civic-education": "wassce-civic-curriculum.js",
    "wassce-commerce": "wassce-commerce-curriculum.js",
    "wassce-computer-science": "wassce-computer-curriculum.js",
    "wassce-crs": "wassce-crs-curriculum.js",
    "wassce-economics": "wassce-economics-curriculum.js",
    "wassce-english": "wassce-english-curriculum.js",
    "wassce-food-nutrition": "wassce-foodnutrition-curriculum.js",
    "wassce-further-maths": "wassce-furthermaths-curriculum.js",
    "wassce-geography": "wassce-geography-curriculum.js",
    "wassce-government": "wassce-government-curriculum.js",
    "wassce-health-science": "wassce-healthsci-curriculum.js",
    "wassce-history": "wassce-history-curriculum.js",
    "wassce-home-economics": "wassce-homeeconomics-curriculum.js",
    "wassce-irs": "wassce-irs-curriculum.js",
    "wassce-literature": "wassce-literature-curriculum.js",
    "wassce-marketing": "wassce-marketing-curriculum.js",
    "wassce-mathematics": "wassce-mathematics-curriculum.js",
    "wassce-physics": "wassce-physics-curriculum.js",
    "wassce-technical-drawing": "wassce-techdrawing-curriculum.js",
    "webdev": "webdev-curriculum.js"
  };

  // Courses with a generated-notes chunk in content/.
  var CONTENT = ["agritech", "ai", "android", "bible-foundations", "bible-nt", "bible-ot", "computer-literacy", "cybersecurity", "data", "design", "english-success", "entrepreneurship", "financial-literacy", "grant-writing", "healthtech", "ielts", "leadership", "marketing", "office", "project-mgmt", "remote-work", "sat", "toefl", "webdev"];

  /* Courses shipping their own authored topic-quiz bank as a single file.
     The curriculum builder reads this while it builds, so it must load BEFORE
     the builder; the builder's re-apply hook rebuilds the module assessments
     from the same bank, so that must be called AFTER. Loading these through
     tih-authored-notes.js instead raced the builder: the bank sometimes landed
     first, the hook was not yet defined, and every assessment silently kept the
     old shared pool. */
  var TOPIC_QUIZ_BANKS = {
    'sat':              { src: 'sat-topic-quizzes.js?v=1',     apply: 'tihApplySatTopicQuizzes' },
    'ai-cybersecurity': { src: 'aicyber-topic-quizzes.js?v=1', apply: 'tihApplyAicyberTopicQuizzes' },
    'android':          { src: 'android-topic-quizzes.js?v=1', apply: 'tihApplyAndroidTopicQuizzes' }
  };

  // Courses with an authored topic-quiz chunk in quizzes/.
  var QUIZZES = ["computer-literacy", "english-success", "ielts", "ph-career", "toefl"];

  /* Course-scoped files that must run AFTER the builder, because they mutate the
     course it just created: per-topic video maps, and the pre-authored note sets
     a few courses ship. These used to arrive two ways at once -- topic-videos.js
     document.write()ing 49 scripts, and hub-config.js appending ten more on
     DOMContentLoaded -- which is why webdev, data, ai, entrepreneurship and
     marketing each downloaded their video map twice.

     Not listed here, deliberately:
       office-video-map.js     an empty stub containing only a comment
       aicyber-nd-1..8 +
       aicyber-notes-runtime   116 note entries now fully shadowed by the
                               authored notes in aicyber-notes.js, which cover
                               all 133 content lessons and win at render time. */
  var EXTRAS = {
    'ai':               ['ai-video-map.js?v=3', 'ai-topic-videos.js?v=3'],
    'data':             ['data-video-map.js?v=2'],
    'webdev':           ['webdev-video-map.js?v=2'],
    'design':           ['design-video-map.js?v=1'],
    'cybersecurity':    ['cyber-video-map.js?v=1'],
    'entrepreneurship': ['entrepreneurship-video-map.js?v=1',
                         'ent-nd-1.js?v=1', 'ent-nd-2.js?v=1', 'ent-nd-3.js?v=1',
                         'ent-nd-4.js?v=1', 'ent-nd-5.js?v=1', 'ent-nd-6.js?v=1',
                         'ent-notes-runtime.js?v=1'],
    'marketing':        ['marketing-video-map.js?v=5',
                         'mkt-nd-1.js?v=1', 'mkt-nd-2.js?v=1', 'mkt-nd-3.js?v=1',
                         'mkt-nd-4.js?v=1', 'mkt-nd-5.js?v=1',
                         'mkt-notes-runtime.js?v=1'],
    'project-mgmt':     ['projectmgmt-video-map.js?v=1',
                         'pm-nd-1.js?v=1', 'pm-nd-2.js?v=1', 'pm-nd-3.js?v=1',
                         'pm-nd-4.js?v=1', 'pm-nd-5.js?v=1',
                         'pm-notes-runtime.js?v=1'],
    'leadership':       ['leadership-video-map.js?v=1',
                         'lead-nd-1.js?v=1', 'lead-nd-2.js?v=1', 'lead-nd-3.js?v=1',
                         'lead-nd-4.js?v=1', 'lead-nd-5.js?v=1',
                         'lead-notes-runtime.js?v=1'],
    'android':          ['and-nd-1.js?v=1', 'and-nd-2.js?v=1', 'and-nd-3.js?v=1',
                         'and-nd-4.js?v=1', 'and-nd-5.js?v=1',
                         'and-notes-runtime.js?v=1']
  };

  function has(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i] === id) return true;
    return false;
  }

  /* Load a list of URLs in order, then call done(). async=false keeps the
     execution order of dynamically inserted scripts; a missing file is not
     fatal, since every consumer already falls back to generated content. */
  function loadInOrder(urls, done) {
    var i = 0;
    (function next() {
      if (i >= urls.length) { done(); return; }
      var s = document.createElement('script');
      s.src = urls[i++];
      s.async = false;
      s.onload = next;
      s.onerror = next;
      (document.head || document.documentElement).appendChild(s);
    })();
  }

  /* Courses whose COURSES_DB[<id>].quizzes was split out of courses-db.js.
     Loaded before the curriculum builder, because several builders merge
     their own quizzes into the object rather than replacing it. */
  var COURSE_QUIZZES = ['computer-literacy', 'ai', 'data', 'webdev', 'design',
    'android', 'marketing', 'cybersecurity', 'entrepreneurship', 'project-mgmt',
    'office', 'leadership', 'grant-writing', 'financial-literacy',
    'english-success', 'agritech', 'healthtech', 'remote-work', 'ielts',
    'toefl', 'sat', 'bible-ot', 'bible-nt', 'bible-foundations',
    'accounting-bookkeeping'];

  var VERSION = '?v=1';

  /* Ensure everything courseId needs is loaded, then call done().
     Unknown ids (including wassce-*, which WassceCourse synthesises) resolve
     immediately so the player boots normally. */
  function ensure(courseId, done) {
    done = (typeof done === 'function') ? done : function () {};
    if (!courseId) { done(); return; }
    var urls = [];
    if (has(COURSE_QUIZZES, courseId)) urls.push('coursequiz/' + courseId + '-coursequiz.js' + VERSION);
    if (has(CONTENT, courseId)) urls.push('content/' + courseId + '-content.js' + VERSION);
    if (has(QUIZZES, courseId)) urls.push('quizzes/' + courseId + '-quizzes.js' + VERSION);
    var bank = TOPIC_QUIZ_BANKS[courseId];
    if (bank) urls.push(bank.src);
    if (CURRICULUM[courseId]) urls.push(CURRICULUM[courseId] + VERSION);
    if (EXTRAS[courseId]) urls = urls.concat(EXTRAS[courseId]);
    if (!urls.length) { done(); return; }
    loadInOrder(urls, function () {
      // The builder has now run and defined its hook, so the module
      // assessments can be rebuilt from the authored bank.
      if (bank) {
        try {
          if (typeof window[bank.apply] === 'function') window[bank.apply]();
        } catch (e) {}
      }
      done();
    });
  }

  window.TihCourseLoader = { ensure: ensure, curriculumFor: function (id) { return CURRICULUM[id] || null; } };
})();
