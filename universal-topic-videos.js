/* TIH UNIVERSAL TOPIC VIDEOS v3
   - topicId on every lesson
   - ONLY fills missing lesson.v (never overwrites curriculum/map IDs)
   - All YouTube IDs verified embeddable (oembed 200) as of 2026-08-17 */
(function () {
  if (typeof COURSES_DB === 'undefined') return;

  function normTitle(s) {
    return String(s || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  var GLOBAL_RULES = [
    [['computer', 'hardware', 'software', 'keyboard', 'mouse', 'desktop', 'windows', 'file', 'folder', 'operating system'], 'y2kg3MOk1sY'],
    [['seo', 'keyword research', 'backlink', 'on-page', 'off-page', 'link building'], 'xsVTqzratPs'],
    [['google ads', 'sem', 'search campaign', 'display campaign'], 'zN8YNNHcaZc'],
    [['facebook', 'instagram', 'linkedin', 'tiktok', 'social media'], 'zN8YNNHcaZc'],
    [['email', 'gmail', 'newsletter', 'mailchimp'], 'S-nHYzK-BVg'],
    [['html', 'css', 'flexbox', 'grid', 'javascript', 'react', 'node', 'express', 'mongodb', 'web development'], 'zN8YNNHcaZc'],
    [['python', 'machine learning', 'neural', 'deep learning', 'chatgpt', 'generative ai', 'llm', 'artificial intelligence'], 'aircAruvnKk'],
    [['excel', 'spreadsheet', 'pivot', 'power bi', 'google sheets', 'data analysis', 'dashboard'], 'rwbho0CgEAE'],
    [['photoshop', 'canva', 'graphic design', 'typography', 'color theory', 'logo'], 'UmHMVU6dceA'],
    [['android', 'kotlin', 'android studio', 'firebase'], 'FjrKMcnKahY'],
    [['cyber', 'security', 'hacking', 'firewall', 'encryption', 'malware', 'phishing'], 'XBkzBrXlle0'],
    [['entrepreneur', 'startup', 'business model', 'mvp', 'lean', 'pitch'], 'WN9Mks1s4tM'],
    [['word', 'powerpoint', 'outlook', 'microsoft office', 'teams'], 'S-nHYzK-BVg'],
    [['ielts', 'toefl', 'sat', 'listening', 'reading comprehension'], 'zN8YNNHcaZc'],
    [['leadership', 'management', 'project management', 'agile', 'scrum'], 'zN8YNNHcaZc'],
    [['accounting', 'bookkeeping', 'finance', 'budget', 'cash flow'], 'WN9Mks1s4tM'],
    [['bible', 'scripture', 'gospel', 'theology'], 'zN8YNNHcaZc'],
    [['git', 'github'], 'RGOj5yH7evk'],
    [['resume', 'interview', 'freelance', 'portfolio', 'career'], 'S-nHYzK-BVg'],
    [['internet', 'browser', 'online safety', 'wifi'], '7_LPdttKXPc']
  ];

  var COURSE_DEFAULTS = {
    webdev: 'zN8YNNHcaZc',
    ai: 'aircAruvnKk',
    data: 'rwbho0CgEAE',
    design: 'UmHMVU6dceA',
    android: 'FjrKMcnKahY',
    cybersecurity: 'XBkzBrXlle0',
    marketing: 'xsVTqzratPs',
    entrepreneurship: 'WN9Mks1s4tM',
    office: 'S-nHYzK-BVg',
    ielts: 'zN8YNNHcaZc',
    toefl: 'zN8YNNHcaZc',
    sat: 'zN8YNNHcaZc',
    leadership: 'zN8YNNHcaZc',
    'project-mgmt': 'zN8YNNHcaZc',
    'financial-literacy': 'WN9Mks1s4tM',
    'accounting-bookkeeping': 'WN9Mks1s4tM',
    'english-success': 'zN8YNNHcaZc',
    agritech: '7_LPdttKXPc',
    healthtech: 'XBkzBrXlle0',
    'remote-work': 'S-nHYzK-BVg',
    'grant-writing': 'S-nHYzK-BVg',
    'computer-literacy': 'y2kg3MOk1sY',
    'bible-ot': 'zN8YNNHcaZc',
    'bible-nt': 'zN8YNNHcaZc',
    'bible-foundations': 'zN8YNNHcaZc'
  };
  var GLOBAL_DEFAULT = 'y2kg3MOk1sY';

  function pickVideo(title, courseId) {
    var t = normTitle(title);
    for (var i = 0; i < GLOBAL_RULES.length; i++) {
      var keys = GLOBAL_RULES[i][0], vid = GLOBAL_RULES[i][1];
      for (var j = 0; j < keys.length; j++) {
        if (t.indexOf(keys[j]) !== -1) return vid;
      }
    }
    if (COURSE_DEFAULTS[courseId]) return COURSE_DEFAULTS[courseId];
    return GLOBAL_DEFAULT;
  }

  function looksLikeVideoId(v) {
    return typeof v === 'string' && /^[A-Za-z0-9_-]{6,20}$/.test(v);
  }

  if (typeof window.TIH_TOPIC_VIDEOS !== 'object' || !window.TIH_TOPIC_VIDEOS) window.TIH_TOPIC_VIDEOS = {};
  if (typeof window.TIH_TOPIC_ID_VIDEOS !== 'object' || !window.TIH_TOPIC_ID_VIDEOS) window.TIH_TOPIC_ID_VIDEOS = {};

  var totalLessons = 0, totalWithVideo = 0, coursesTouched = 0, filled = 0, kept = 0;

  Object.keys(COURSES_DB).forEach(function (courseId) {
    var course = COURSES_DB[courseId];
    if (!course || !course.modules || !course.modules.length) return;
    coursesTouched += 1;
    if (!window.TIH_TOPIC_VIDEOS[courseId]) window.TIH_TOPIC_VIDEOS[courseId] = {};
    if (!window.TIH_TOPIC_ID_VIDEOS[courseId]) window.TIH_TOPIC_ID_VIDEOS[courseId] = {};

    course.modules.forEach(function (mod, mi) {
      (mod.lessons || []).forEach(function (lesson, li) {
        var topicId = courseId + ':m' + (mi + 1) + ':l' + (li + 1);
        lesson.id = topicId;
        totalLessons += 1;
        if (lesson.isQuiz) return;

        if (looksLikeVideoId(lesson.v)) {
          kept += 1;
        } else {
          lesson.v = pickVideo(lesson.t || lesson.title, courseId);
          filled += 1;
        }

        totalWithVideo += 1;
        var nt = normTitle(lesson.t || lesson.title);
        var vid = lesson.v;
        window.TIH_TOPIC_VIDEOS[courseId][nt] = vid;
        window.TIH_TOPIC_VIDEOS[courseId][topicId] = vid;
        window.TIH_TOPIC_ID_VIDEOS[courseId][topicId] = vid;
      });
    });
  });

  if (typeof console !== 'undefined' && console.log) {
    console.log('[TIH universal videos v3] courses=' + coursesTouched +
      ' lessons=' + totalLessons + ' withVideo=' + totalWithVideo +
      ' kept=' + kept + ' filled=' + filled);
  }
})();
