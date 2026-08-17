/* TIH UNIVERSAL TOPIC VIDEOS v2
   - Assigns every content lesson a stable topicId (course:mN:lN)
   - Keyword-normalized title matching for videos
   - Default video only when no keyword matches
   - Specific course maps load AFTER this and can override */
(function () {
  if (typeof COURSES_DB === 'undefined') return;

  function normTitle(s) {
    return String(s || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\\s*[\\d]+(?:\\.[\\d]+)*\\s+/, '')
      .replace(/^(Practice|Project):\\s*/i, '')
      .replace(/\\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  var GLOBAL_RULES = [
    [['seo', 'keyword research', 'backlink', 'on-page', 'off-page', 'link building'], 'xsVTqzratPs'],
    [['google ads', 'sem', 'search campaign', 'display campaign', 'shopping campaign'], 'YJS5I3e3NZA'],
    [['facebook', 'instagram', 'linkedin', 'tiktok', 'twitter', 'social media', 'influencer'], 'qVdtkwtVL3Q'],
    [['email marketing', 'lead magnet', 'newsletter', 'mailchimp'], '0Y5eQ2v2mFQ'],
    [['html', 'css', 'flexbox', 'grid', 'web development', 'javascript', 'react', 'node', 'express', 'mongodb'], 'zN8YNNHcaZc'],
    [['python', 'machine learning', 'neural', 'deep learning', 'chatgpt', 'generative ai', 'llm'], 'aircAruvnKk'],
    [['excel', 'spreadsheet', 'pivot', 'power bi', 'google sheets', 'data analysis', 'dashboard'], 'rwbho0CgEAE'],
    [['photoshop', 'canva', 'graphic design', 'typography', 'color theory', 'logo'], 'UmHMVU6dceA'],
    [['android', 'kotlin', 'android studio', 'firebase'], 'FjrKMcnKahY'],
    [['cyber', 'security', 'hacking', 'firewall', 'encryption', 'malware', 'phishing', 'owasp', 'nmap', 'wireshark'], 'inWWhr2ihzs'],
    [['entrepreneur', 'startup', 'business model', 'mvp', 'lean', 'pitch'], 'Zk11nyT3n-M'],
    [['word', 'powerpoint', 'outlook', 'microsoft office', 'teams'], 'j-ZWL594OW8'],
    [['ielts', 'toefl', 'sat', 'listening', 'reading comprehension', 'writing task'], 'U6vXAtJx-xA'],
    [['leadership', 'management', 'project management', 'agile', 'scrum'], 'sL_EotvL8Hw'],
    [['accounting', 'bookkeeping', 'finance', 'budget', 'cash flow'], 'WN9Mks1s4tM'],
    [['bible', 'scripture', 'gospel', 'theology'], 'ALqDrvi1nlE'],
    [['git', 'github'], 'RGOj5yH7evk'],
    [['resume', 'interview', 'freelance', 'portfolio', 'career'], 'e_DvOPN8Ar4']
  ];

  var COURSE_DEFAULTS = {
    webdev: 'zN8YNNHcaZc', ai: 'aircAruvnKk', data: 'rwbho0CgEAE', design: 'UmHMVU6dceA',
    android: 'FjrKMcnKahY', cybersecurity: 'inWWhr2ihzs', marketing: 'nU-T2NPrHHI',
    entrepreneurship: 'Zk11nyT3n-M', office: 'j-ZWL594OW8', ielts: 'U6vXAtJx-xA',
    toefl: 'U6vXAtJx-xA', sat: 'U6vXAtJx-xA', leadership: 'sL_EotvL8Hw',
    'project-mgmt': 'sL_EotvL8Hw', 'financial-literacy': 'WN9Mks1s4tM',
    'accounting-bookkeeping': 'WN9Mks1s4tM', 'english-success': 'U6vXAtJx-xA',
    agritech: 'nU-T2NPrHHI', healthtech: 'inWWhr2ihzs', 'remote-work': 'e_DvOPN8Ar4',
    'grant-writing': 'HCMVSV_ztl0', 'computer-literacy': 'j-ZWL594OW8',
    'bible-ot': 'ALqDrvi1nlE', 'bible-nt': 'ALqDrvi1nlE', 'bible-foundations': 'ALqDrvi1nlE'
  };
  var GLOBAL_DEFAULT = 'nU-T2NPrHHI';

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

  if (typeof window.TIH_TOPIC_VIDEOS !== 'object' || !window.TIH_TOPIC_VIDEOS) window.TIH_TOPIC_VIDEOS = {};
  if (typeof window.TIH_TOPIC_ID_VIDEOS !== 'object' || !window.TIH_TOPIC_ID_VIDEOS) window.TIH_TOPIC_ID_VIDEOS = {};

  var totalLessons = 0, totalWithVideo = 0, coursesTouched = 0;

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
        var vid = pickVideo(lesson.t, courseId);
        lesson.v = vid;
        totalWithVideo += 1;
        var nt = normTitle(lesson.t);
        window.TIH_TOPIC_VIDEOS[courseId][nt] = vid;
        window.TIH_TOPIC_VIDEOS[courseId][topicId] = vid;
        window.TIH_TOPIC_ID_VIDEOS[courseId][topicId] = vid;
        window.TIH_TOPIC_VIDEOS[courseId]['M' + (mi + 1) + '|' + (lesson.t || '')] = vid;
      });
    });
  });

  if (typeof console !== 'undefined' && console.log) {
    console.log('[TIH universal videos] courses=' + coursesTouched +
      ' lessons=' + totalLessons + ' withVideo=' + totalWithVideo);
  }
})();
