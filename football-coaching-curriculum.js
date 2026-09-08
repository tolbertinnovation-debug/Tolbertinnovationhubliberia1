/* TIH Football Coaching course curriculum.
   Rebuilds COURSES_DB['football-coaching'] into a full 14-module, beginner-to-
   advanced program: foundations of coaching, the Laws of the Game, core technical
   skills, coaching technical skills to players, tactics and formations, physical
   fitness and conditioning, youth player development, session planning and
   delivery, match day management, sports psychology and leadership, safeguarding
   and safety, coaching as a career, six practical projects, and a final
   assessments and graduation module.

   Every content lesson pairs an authored teaching note (football-coaching-notes.js,
   rendered through TIH_LESSON_NOTES) with its own distinct educational video
   (football-coaching-video-map.js) and a 3-question practice quiz drawn from
   football-coaching-topic-quizzes.js.

   Assessments deliberately do NOT reuse practice questions. Each content topic
   carries a fourth, reserved question in TIH_RESERVED_QUIZZES; the module
   quizzes, midterm, final and graduation assessment draw only from that reserved
   pool, through a forward-only cursor with a global issued set, so a learner
   meets every assessment question for the first time in the assessment and no
   two assessments in the course ever share an item.
   Modelled on quickbooks-curriculum.js / accounting-bookkeeping-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB['football-coaching'] || COURSES_DB['football-coaching']._fcFullBuilt) return;

  // [moduleNum, title, icon, [lesson names]]
  var curriculum = [
    [1, "Foundations of Football Coaching", "\u26bd", ["Welcome to the Course", "What Does a Football Coach Do?", "Qualities of an Effective Coach", "Coaching Philosophy and Style", "Understanding Your Players", "Coaching Ethics and Fair Play", "Course Roadmap"]],
    [2, "Laws of the Game", "\ud83d\udccb", ["The Field of Play", "The Ball and Equipment", "Number of Players and Substitutions", "Fouls and Misconduct", "Offside Explained", "Free Kicks and Penalty Kicks", "Throw-Ins, Goal Kicks and Corners", "The Role of the Referee"]],
    [3, "Core Technical Skills", "\ud83c\udfaf", ["Ball Control and First Touch", "Passing Technique", "Dribbling Technique", "Shooting Technique", "Heading Technique", "Tackling and Defending 1v1", "Goalkeeping Fundamentals", "Turning and Receiving Under Pressure"]],
    [4, "Coaching Technical Skills to Players", "\ud83e\uddd1\u200d\ud83c\udfeb", ["Teaching Passing to Beginners", "Teaching Dribbling to Beginners", "Teaching Shooting Technique", "Correcting Common Technical Errors", "Using Small-Sided Games to Teach Skills", "Progressive Drill Design", "Individual Skill Development Plans"]],
    [5, "Tactics and Formations", "\ud83e\udde9", ["Introduction to Tactics", "Common Formations Explained", "Attacking Principles of Play", "Defending Principles of Play", "Width and Depth", "Pressing and Counter-Pressing", "Transition Moments", "Set-Piece Tactics"]],
    [6, "Physical Fitness and Conditioning", "\ud83d\udcaa", ["Components of Football Fitness", "Warm-Up and Cool-Down Routines", "Speed and Agility Training", "Strength and Endurance Training", "Injury Prevention Basics", "Nutrition and Hydration for Players", "Recovery and Rest"]],
    [7, "Youth Player Development", "\ud83c\udf31", ["Long-Term Athlete Development", "Coaching Young Children (Ages 5-8)", "Coaching Pre-Teens (Ages 9-12)", "Coaching Teenagers (Ages 13-17)", "Building Confidence in Young Players", "Managing Parents and Guardians", "Fun and Enjoyment in Youth Football"]],
    [8, "Session Planning and Delivery", "\ud83d\udcdd", ["Principles of Session Planning", "Structuring a Training Session", "Setting Session Objectives", "Organizing Small-Sided Games", "Managing Time and Space", "Giving Effective Feedback", "Adapting Sessions on the Spot", "Evaluating a Training Session"]],
    [9, "Match Day Management", "\ud83c\udfdf\ufe0f", ["Pre-Match Preparation", "Team Selection and Line-Ups", "Managing Substitutions", "In-Game Tactical Adjustments", "Half-Time Team Talks", "Managing Player Emotions", "Post-Match Review and Feedback"]],
    [10, "Sports Psychology and Leadership", "\ud83e\udde0", ["Motivating Players", "Building Team Culture", "Communication as a Coach", "Handling Conflict in a Team", "Building Player Confidence", "Leadership Styles in Coaching", "Dealing with Losses and Setbacks"]],
    [11, "Safeguarding, Safety and First Aid", "\ud83d\udee1\ufe0f", ["Duty of Care in Coaching", "Safeguarding Children in Sport", "Recognizing and Responding to Injuries", "Concussion Awareness", "Emergency Action Planning", "Safe Coaching Environments", "Recordkeeping and Reporting"]],
    [12, "Coaching as a Career", "\ud83c\udf93", ["Coaching Qualifications and Pathways", "Building a Coaching Portfolio", "Volunteering and Grassroots Coaching", "Working with Clubs and Academies", "Coaching Opportunities in Liberia and West Africa", "Continuing Education for Coaches"]],
    [13, "Practical Projects", "\ud83e\uddea", ["Training Session Plan Project", "Small-Sided Game Session Project", "Formation and Tactics Board Project", "Youth Development Plan Project", "Match Day Plan Project", "Safeguarding Policy Project"]],
    [14, "Assessments and Graduation", "\ud83c\udfc6", ["Foundations and Laws of the Game Quiz", "Technical and Tactical Coaching Quiz", "Fitness and Youth Development Quiz", "Match Day and Safeguarding Quiz", "Midterm Examination", "Final Examination", "Capstone: Coaching Portfolio Presentation", "Graduation Requirements", "Certificate of Completion"]]
  ];
  /* Which modules each Module 14 subject quiz draws its reserved questions from.
     Each list must hold at least as many content lessons as the quiz has
     questions, or the quiz comes up short: there is no filler pool to top it up
     from, by design. */
  var SUBJECT_QUIZ_MODULE = {
    'Foundations and Laws of the Game Quiz': [1, 2],
    'Technical and Tactical Coaching Quiz': [3, 4, 5],
    'Fitness and Youth Development Quiz': [6, 7],
    'Match Day and Safeguarding Quiz': [8, 9, 10, 11]
  };

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Presentation)$/.test(name.trim()); }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Use a real or imagined team, club or youth group, and complete every step below before moving on.</p>' +
      '<h4>What to do</h4><ol><li>Review the relevant lesson notes and practice quizzes for this topic area.</li><li>Produce the deliverable for <em>' + esc(name) + '</em>, using the templates and frameworks covered in this course.</li><li>Check your work against the module\'s key ideas, then correct anything you find.</li></ol>' +
      '<div class="study-callout"><strong>Deliverable:</strong> A completed, organised plan or document you can keep as part of your coaching portfolio.</div>' +
      '<p><strong>Printable:</strong> Use your browser\'s Print → Save as PDF to keep an offline copy for revision.</p></div>';
  }

  // Small generic fallback pool, used only if an authored per-topic entry is ever
  // missing. Every content topic below has an authored entry in
  // football-coaching-topic-quizzes.js, so this should not normally be reached.
  var BANK_GENERAL = [
    { q: 'A good football coach is best described as someone who:', opts: ['Helps players improve, safely and enjoyably', 'Only picks the strongest starting eleven', 'Only shouts instructions from the sideline', 'Only referees matches'], correct: 0, exp: 'Coaching is fundamentally about developing players, not just match-day decisions.' },
    { q: 'A player is offside only when they:', opts: ['Become involved in active play from an offside position', 'Stand in an offside position at any point', 'Score a goal', 'Take a throw-in'], correct: 0, exp: 'Being in an offside position alone is not an offence; involvement in active play is required.' },
    { q: 'A good first touch should:', opts: ['Direct the ball into useful space for the next action', 'Always stop the ball dead', 'Always be played backward', 'Never be practised'], correct: 0, exp: 'A good first touch sets up the player\'s next action, ideally away from pressure.' },
    { q: 'Player-centred coaching prioritises:', opts: ['The athlete\'s long-term development and enjoyment', 'The coach\'s own ego and control', 'Only the scoreline', 'Only the most talented players'], correct: 0, exp: 'Player-centred coaching keeps the athlete\'s growth and enjoyment at the centre of every decision.' },
    { q: 'The FIFA 11+ programme exists to:', opts: ['Reduce injury risk through a structured warm-up', 'Replace the need for a match ball', 'Select the starting eleven', 'Teach the offside rule'], correct: 0, exp: 'FIFA 11+ is a structured warm-up specifically designed to reduce injury risk.' },
    { q: 'If in doubt about a possible concussion, a coach should:', opts: ['Sit the player out immediately, with no exceptions', 'Let the player decide whether to continue', 'Wait until half-time to decide', 'Only act if the player was knocked unconscious'], correct: 0, exp: '"If in doubt, sit them out" allows no exceptions, since most concussions do not involve loss of consciousness.' }
  ];
  function pickQuestions(count) {
    var out = [];
    for (var i = 0; i < count; i++) out.push(BANK_GENERAL[i % BANK_GENERAL.length]);
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }

  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ_plain = null, RQ_plain = null;
  function buildTopicIndex() {
    if (TQ_plain) return;
    TQ_plain = {}; RQ_plain = {};
    var src = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['football-coaching']) || {};
    Object.keys(src).forEach(function (k) { TQ_plain[normQ(k)] = src[k]; });
    var res = (typeof window !== 'undefined' && window.TIH_RESERVED_QUIZZES && window.TIH_RESERVED_QUIZZES['football-coaching']) || {};
    Object.keys(res).forEach(function (k) { RQ_plain[normQ(k)] = res[k]; });
  }
  function topicQuestions(name) {
    buildTopicIndex();
    var arr = TQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }
  function reservedQuestions(name) {
    buildTopicIndex();
    var arr = RQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }

  var practiceIndex = {};        // quizId -> { module, name }
  var assessIndex = [];          // { quizId, module, count, scope }
  var topicsByModule = {};       // moduleNum -> [content topic names]

  function practiceQuiz(name, moduleNum, quizId) {
    if (quizId) practiceIndex[quizId] = { module: moduleNum, name: name };
    var authored = topicQuestions(name);
    return { title: 'Practice: ' + name, moduleNum: 1, questions: authored || pickQuestions(3).map(cloneQ) };
  }
  function assessmentQuiz(name, count, moduleNum, quizId, scope) {
    if (quizId) assessIndex.push({ quizId: quizId, module: moduleNum, count: count, scope: scope || 'course' });
    return { title: name, moduleNum: 1, questions: pickQuestions(count).map(cloneQ) };
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0;
  var lessonCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], names = mod[3];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'fc-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('Graduation Assessment', 15, num, qid, 'course');
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH Certificate of Completion in Football Coaching.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Graduation Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion in Football Coaching you must:</p><ul><li>Complete the core lessons in Modules 1–12, from coaching foundations through building a coaching career.</li><li>Submit the practical projects in Module 13 (a training session plan, a small-sided game session, a formation and tactics board, a youth development plan, a match day plan, and a safeguarding policy).</li><li>Attempt the four subject quizzes and both the Midterm and Final Examinations.</li><li>Present your Capstone Coaching Portfolio.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Examination/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var scope = (num === 14 && !big && SUBJECT_QUIZ_MODULE[name]) ? 'module' : 'course';
        var srcModule = scope === 'module' ? SUBJECT_QUIZ_MODULE[name] : num;
        var aid = 'fc-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(name, count, srcModule, aid, scope);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'quiz') + ', then review every answer explanation to strengthen your weak areas before moving on. These questions are new: none of them appeared in the practice quizzes.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isProjectName(name)) {
        idx += 1;
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: null });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      // Content lesson: authored note + its own distinct video + paired practice quiz.
      idx += 1;
      (topicsByModule[num] = topicsByModule[num] || []).push(name);
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video + Notes', v: null, isQuiz: false });
      flat += 1; lessonCount += 1;
      var pqid = 'fc-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(name, num, pqid);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes above, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB['football-coaching'];
  COURSES_DB['football-coaching'] = {
    id: 'football-coaching',
    title: 'Football Coaching',
    shortDesc: 'A full 14-module football coaching program from beginner to advanced: coaching foundations, the Laws of the Game, core technical skills, teaching skills and tactics, fitness and youth development, session planning, match day management, sports psychology and leadership, safeguarding and safety, coaching careers, hands-on projects and a Certificate of Completion.',
    category: ex.category || 'Sports Coaching',
    icon: ex.icon || '⚽',
    gradient: ex.gradient || 'linear-gradient(135deg,#166534,#15803d)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || '800+',
    duration: '70h+',
    level: 'Beginner → Advanced',
    price: ex.price || '$5',
    origPrice: ex.origPrice || '$85',
    isFree: false,
    badge: ex.badge || 'new',
    certId: ex.certId || 'TIH-2026-FBC-0001',
    learn: [
      'Explain the Laws of the Game and perform the core technical skills of football yourself',
      'Coach passing, dribbling, shooting and other core skills to beginners using progressive drills',
      'Apply attacking and defending principles of play, common formations and set-piece tactics',
      'Build football fitness safely, including injury prevention and age-appropriate conditioning',
      'Coach players appropriately by age, from young children through teenagers',
      'Plan, deliver, adapt and evaluate a training session using a repeatable framework',
      'Manage match day: team selection, substitutions, half-time talks and post-match review',
      'Motivate players, build team culture, and lead with an appropriate coaching style',
      'Apply safeguarding, duty of care, injury response and concussion awareness principles',
      'Build a coaching portfolio and plan a realistic pathway into grassroots or academy coaching'
    ],
    requirements: ex.requirements || [
      'No formal coaching experience required, this course starts from the foundations',
      'A phone or computer with a browser and an internet connection for the videos',
      'Access to a ball and some open space for practising and coaching techniques',
      'A genuine interest in developing players, not just watching football'
    ],
    about: ex.about,
    modules: modules,
    quizzes: quizzes,
    reviews: ex.reviews,
    faqs: ex.faqs,
    _fcFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT['football-coaching'] = notes;

  /* football-coaching-topic-quizzes.js is fetched only when this course is open,
     so it can land after this builder has run. Re-apply then: the player holds a
     reference to this same quizzes object and reads it afresh each time a quiz
     opens. Practice quizzes take the three authored questions; assessments take
     ONLY reserved (fourth) questions, issued once each via a global set so no
     question is ever repeated between two assessments. */
  window.__fcRebuildAssessments = function () {
    TQ_plain = null; RQ_plain = null;
    var applied = 0;
    Object.keys(practiceIndex).forEach(function (quizId) {
      var meta = practiceIndex[quizId];
      var authored = topicQuestions(meta.name);
      if (authored && quizzes[quizId]) { quizzes[quizId].questions = authored; applied += 1; }
    });

    // Reserved pool, grouped by module, in curriculum order.
    var reservedByModule = {};
    Object.keys(topicsByModule).forEach(function (m) {
      var bag = [];
      topicsByModule[m].forEach(function (name) {
        var r = reservedQuestions(name);
        if (r) bag.push.apply(bag, r);
      });
      reservedByModule[m] = bag;
    });
    var moduleNums = Object.keys(reservedByModule).sort(function (a, b) { return a - b; });
    var coursePool = [];
    moduleNums.forEach(function (m) { coursePool.push.apply(coursePool, reservedByModule[m]); });

    // Forward-only issue: a question handed to one assessment is never handed to another.
    var issued = {};
    function take(pool, count) {
      var out = [];
      for (var i = 0; i < pool.length && out.length < count; i++) {
        var q = pool[i], key = normQ(q.q);
        if (issued[key]) continue;
        issued[key] = true;
        out.push(cloneQ(q));
      }
      return out;
    }
    // Module-scoped subject quizzes first, so they get their own module's questions.
    assessIndex.forEach(function (a) {
      if (a.scope !== 'module') return;
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var scoped = [];
      [].concat(a.module).forEach(function (m) {
        scoped.push.apply(scoped, reservedByModule[m] || []);
      });
      var picked = take(scoped, a.count);
      if (picked.length) { quiz.questions = picked; applied += 1; }
    });
    // Then course-wide exams and the graduation assessment.
    assessIndex.forEach(function (a) {
      if (a.scope === 'module') return;
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var picked = take(coursePool, a.count);
      if (picked.length) { quiz.questions = picked; applied += 1; }
    });
    return applied;
  };
  window.tihApplyFootballCoachingTopicQuizzes = window.__fcRebuildAssessments;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[FC] modules=' + modules.length + ' lessons=' + lessonCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
