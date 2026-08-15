/* TIH course cover art.

   Maps every course to its banner (course hero, 1200x800) and card thumbnail
   (catalog + dashboard, 680x453).

   This runs AFTER every *-curriculum.js file on purpose. Several builders
   (toefl, complit, sat, and most of the professional-certificate courses)
   rebuild COURSES_DB[id] as a brand-new object rather than editing it in
   place, so any image field set earlier in courses-db.js is silently dropped.
   Assigning the art here, last, means a builder can never lose it and new
   courses only need one line in this file. Load it after the curriculum
   scripts and before any page code that renders cards. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;

  // course id -> image basename ("<base>-banner.jpg" / "<base>-card.jpg")
  var ART = {
    'ielts': 'ielts',
    'toefl': 'toefl',
    'computer-literacy': 'complit',
    'ph-career': 'ph-career',
    'ai': 'ai',
    'data': 'data',
    'webdev': 'webdev',
    'design': 'design',
    'android': 'android',
    'marketing': 'marketing',
    'cybersecurity': 'cybersecurity',
    'entrepreneurship': 'entrepreneurship',
    'project-mgmt': 'project-mgmt',
    'office': 'office',
    'leadership': 'leadership',
    'grant-writing': 'grant-writing',
    'financial-literacy': 'financial-literacy',
    'english-success': 'english-success',
    'agritech': 'agritech',
    'healthtech': 'healthtech',
    'remote-work': 'remote-work',
    'sat': 'sat',
    'bible-foundations': 'bible-foundations',
    'accounting-bookkeeping': 'accounting-bookkeeping',
    'ai-cybersecurity': 'ai-cybersecurity'
  };

  var applied = 0;
  Object.keys(ART).forEach(function (id) {
    var course = COURSES_DB[id];
    if (!course) return; // page may not load every curriculum file
    course.image = ART[id] + '-banner.jpg';
    course.cardImage = ART[id] + '-card.jpg';
    applied += 1;
  });

  if (typeof console !== 'undefined' && console.log) {
    console.log('[COURSE-IMAGES] cover art applied to ' + applied + ' courses');
  }
})();
