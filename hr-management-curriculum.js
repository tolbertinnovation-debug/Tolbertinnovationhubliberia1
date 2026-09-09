/* TIH — Human Resource Management: full course builder.

   Builds the 14-module course: modules, lessons, practice quizzes and
   assessments. Reads the authored question banks that
   hr-management-topic-quizzes.js has already put on the window, and exposes a
   rebuild hook the loader calls afterwards.

   Assessments draw ONLY on the reserved fourth question of each lesson, issued
   once each through a shared set, so no question is ever seen twice across the
   course and none of them appears in a practice quiz first. */
(function () {
  if (typeof window === 'undefined') return;
  window.COURSES_DB = window.COURSES_DB || {};
  window.LESSON_CONTENT = window.LESSON_CONTENT || {};
  var ex = window.COURSES_DB['hr-management'] || {};
  if (ex._hrFullBuilt) return;

  var curriculum = [
    [1, "Foundations of Human Resource Management", "👥", ["Welcome to the Course", "What Is Human Resource Management?", "The Evolution of HR", "The Role of the HR Professional", "HR and Organizational Strategy", "HR Structures and Operating Models", "Course Roadmap"]],
    [2, "Human Resource Planning", "🗂️", ["Introduction to HR Planning", "Job Analysis", "Writing Job Descriptions", "Workforce Forecasting", "Succession Planning", "Organizational Design and Structure", "HR Budgeting"]],
    [3, "Recruitment and Selection", "🔍", ["The Recruitment Process", "Sourcing Candidates", "Writing Job Adverts", "Screening Applications and CVs", "Interviewing Techniques", "Selection Tests and Assessments", "Reference and Background Checks", "Making the Job Offer"]],
    [4, "Onboarding and Employee Orientation", "🤝", ["Why Onboarding Matters", "Designing an Onboarding Program", "The First Day and First Week", "Probation Periods", "Employee Handbooks", "Buddy Systems and Peer Support", "Onboarding Remote Employees"]],
    [5, "Training and Development", "🎓", ["Introduction to Training and Development", "Training Needs Analysis", "Designing a Training Program", "Delivery Methods and Learning Styles", "Coaching and Mentoring", "Evaluating Training Effectiveness", "Career Development Planning"]],
    [6, "Performance Management", "📈", ["Introduction to Performance Management", "Setting SMART Objectives", "Key Performance Indicators", "Conducting Appraisal Meetings", "Giving Constructive Feedback", "Managing Underperformance", "Performance Improvement Plans"]],
    [7, "Compensation and Benefits", "💰", ["Introduction to Compensation", "Job Evaluation and Grading", "Designing a Salary Structure", "Employee Benefits", "Incentives and Bonus Schemes", "Payroll Fundamentals", "Pay Equity and Transparency"]],
    [8, "Employee Relations", "🤝", ["Introduction to Employee Relations", "The Employment Contract", "Workplace Policies and Procedures", "Handling Grievances", "Disciplinary Procedures", "Conflict Resolution and Mediation", "Trade Unions and Collective Bargaining"]],
    [9, "Employment Law and Compliance", "⚖️", ["Introduction to Employment Law", "Contracts of Employment and Terms", "Discrimination and Equal Opportunity", "Termination and Redundancy", "Working Time, Leave and Holidays", "Data Protection and Employee Records", "Liberia Labour Law Essentials"]],
    [10, "Health, Safety and Wellbeing", "🛡️", ["Occupational Health and Safety Basics", "Risk Assessment in the Workplace", "Accident Reporting and Investigation", "Safety Training and Drills", "Mental Health and Wellbeing at Work", "Workplace Harassment Prevention", "Employee Assistance Programs"]],
    [11, "HR Strategy, Culture and Change", "🧭", ["Strategic Human Resource Management", "Organizational Culture", "Employee Engagement", "Managing Change", "Diversity, Equity and Inclusion", "Employer Branding", "Employee Retention and Turnover"]],
    [12, "HR Analytics and Technology", "📊", ["Introduction to HR Analytics", "Key HR Metrics", "HR Information Systems (HRIS)", "Using Excel for HR Data", "AI and Automation in HR", "Data Privacy in HR Analytics", "HR Reporting and Dashboards"]],
    [13, "Practical Projects", "🧪", ["Job Description and Person Specification Project", "Recruitment Campaign Project", "Onboarding Program Project", "Performance Appraisal System Project", "Employee Handbook Project", "HR Metrics Dashboard Project"]],
    [14, "Assessments and Graduation", "🏆", ["Foundations and HR Planning Quiz", "Recruitment and Onboarding Quiz", "Performance and Reward Quiz", "Employee Relations and Law Quiz", "Midterm Examination", "Final Examination", "Capstone: HR Strategy Presentation", "Graduation Requirements", "Certificate of Completion"]]
  ];

  /* Which modules each Module 14 subject quiz draws its reserved questions from.
     Each list must hold at least as many content lessons as the quiz has
     questions, or the quiz comes up short: there is no filler pool to top it up
     from, by design. */
  var SUBJECT_QUIZ_MODULE = {
    'Foundations and HR Planning Quiz': [1, 2],
    'Recruitment and Onboarding Quiz': [3, 4, 5],
    'Performance and Reward Quiz': [6, 7],
    'Employee Relations and Law Quiz': [8, 9, 10]
  };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function isAssessment(name) { return /(?:Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Presentation)$/.test(name.trim()); }
  function normQ(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
  function cloneQ(q) {
    return { q: q.q, options: (q.options || []).slice(), correct: q.correct, explanation: q.explanation };
  }

  var TQ_plain = null, RQ_plain = null;
  function bank(which) {
    var src = (which === 'r' ? window.TIH_RESERVED_QUIZZES : window.TIH_TOPIC_QUIZZES) || {};
    var raw = src['hr-management'] || {};
    var out = {};
    Object.keys(raw).forEach(function (k) { out[normQ(k)] = raw[k]; });
    return out;
  }
  function topicQuestions(name) {
    if (!TQ_plain) TQ_plain = bank('t');
    return TQ_plain[normQ(name)] || null;
  }
  function reservedQuestions(name) {
    if (!RQ_plain) RQ_plain = bank('r');
    return RQ_plain[normQ(name)] || null;
  }

  var BANK_GENERAL = [
    { q: 'What is the first question to ask before designing any HR practice?', options: ['What is the organisation trying to achieve?', 'What do competitors do?', 'What is cheapest?', 'What did we do last year?'], correct: 0, explanation: 'HR practice follows from organisational objectives; copying or repeating is not design.' },
    { q: 'Why must HR decisions be documented?', options: ['To show a decision was made on lawful, job-related grounds', 'To increase administrative work', 'Because employees request it', 'To satisfy the auditors only'], correct: 0, explanation: 'Without a record there is no evidence the decision was fair, whatever the reality was.' },
    { q: 'What makes an HR process fair?', options: ['Consistent criteria applied the same way to everyone, with a route to challenge', 'A senior manager approving it', 'Speed of completion', 'Written policy alone'], correct: 0, explanation: 'Fairness requires consistency, job-relatedness and the ability to appeal.' }
  ];

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle)
      + '</strong><span>Practical project</span></div><h3>' + esc(name) + '</h3>'
      + '<p>This is a portfolio project. Produce a real, usable document for an organisation you know, not a description of one.</p>'
      + '<h4>What to submit</h4><ul>'
      + '<li>The completed document itself, formatted as it would be used at work.</li>'
      + '<li>A half-page note explaining the choices you made and why.</li>'
      + '<li>One paragraph on what you would do differently with more time or information.</li></ul>'
      + '<h4>How it is judged</h4><ul>'
      + '<li>Could this be used tomorrow by the organisation it was written for?</li>'
      + '<li>Is every requirement or criterion tied to something real?</li>'
      + '<li>Is it lawful, consistent and clear to the person who has to apply it?</li></ul></div>';
  }

  var modules = [], quizzes = {}, notes = {};
  var practiceIndex = {};
  var assessIndex = [];
  var topicsByModule = {};
  var flat = 0;
  var lessonCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], names = mod[3];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'hr-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('Graduation Assessment', 15, num, qid, 'course');
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH Certificate of Completion in Human Resource Management.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Graduation Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion in Human Resource Management you must:</p><ul><li>Complete the core lessons in Modules 1&ndash;12, from HR foundations through to analytics and technology.</li><li>Submit the six practical projects in Module 13 (a job description, a recruitment campaign, an onboarding programme, an appraisal system, an employee handbook and an HR metrics dashboard).</li><li>Attempt the four subject quizzes and both the Midterm and Final Examinations.</li><li>Present your Capstone HR Strategy.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Examination/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var scope = (num === 14 && !big && SUBJECT_QUIZ_MODULE[name]) ? 'module' : 'course';
        var srcModule = scope === 'module' ? SUBJECT_QUIZ_MODULE[name] : num;
        var aid = 'hr-m' + num + '-a' + flat;
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
      var pqid = 'hr-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(name, num, pqid);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes above, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  function practiceQuiz(name, moduleNum, quizId) {
    if (quizId) practiceIndex[quizId] = { module: moduleNum, name: name };
    var authored = topicQuestions(name);
    return { title: 'Practice: ' + name, questions: authored ? authored.map(cloneQ) : BANK_GENERAL.slice(0, 3).map(cloneQ) };
  }
  function assessmentQuiz(name, count, moduleNum, quizId, scope) {
    if (quizId) assessIndex.push({ quizId: quizId, module: moduleNum, count: count, scope: scope || 'course' });
    return { title: name, questions: [] };
  }

  window.COURSES_DB['hr-management'] = {
    id: 'hr-management',
    title: 'Human Resource Management',
    shortDesc: 'A full 14-module HR programme: the HR function and workforce planning, recruitment, selection and onboarding, training and performance management, pay and benefits, employee relations, employment law including Liberian essentials, health, safety and wellbeing, HR strategy and culture, HR analytics and technology, six practical projects and a Certificate of Completion.',
    category: 'Business & Management',
    icon: '👥',
    gradient: 'linear-gradient(135deg,#1e3a8a,#3730a3)',
    instructor: ex.instructor || 'Samuel Tolbert',
    instructorTitle: ex.instructorTitle || 'Founder & CEO, Tolbert Innovation Hub',
    instructorBio: ex.instructorBio || 'Samuel Tolbert leads TIH programs that help learners build practical business, digital, and professional skills for real work opportunities across Liberia and West Africa.',
    rating: 4.9,
    reviewCount: 112,
    students: '1,100+',
    duration: '80h+',
    level: 'Beginner → Advanced',
    price: '$5',
    origPrice: '$85',
    badge: 'new',
    certId: 'TIH-2026-HRM-0001',
    learn: [
      'Explain what HR management is and how it differs from administration and personnel work',
      'Analyse a job and write a job description and person specification that stand up in law',
      'Run a full recruitment process, from advert to structured interview to offer',
      'Onboard a new employee so they become productive and stay',
      'Analyse training needs, design a programme and evaluate whether it worked',
      'Set objectives, run appraisals and manage underperformance fairly',
      'Evaluate jobs, design a salary structure and handle pay equity',
      'Handle grievances, discipline and conflict through a defensible process',
      'Apply employment law, including discrimination, dismissal and Liberian requirements',
      'Assess workplace risk and support employee health and wellbeing',
      'Shape culture, lead change and build an HR strategy tied to business objectives',
      'Calculate HR metrics and build reporting that leads to decisions'
    ],
    requirements: [
      'No prior HR experience required, the course starts from the very beginning',
      'A phone or computer with a browser and an internet connection for the videos',
      'One real organisation you can use as a case study throughout, even a small business or church',
      'A folder for the six portfolio documents you will produce'
    ],
    modules: modules,
    quizzes: quizzes,
    _hrFullBuilt: true
  };

  window.LESSON_CONTENT['hr-management'] = notes;

  /* Rebuilt after the authored banks load. The player keeps a reference to this
     same quizzes object and reads it afresh each time a quiz opens. Practice
     quizzes take the three authored questions; assessments take ONLY reserved
     (fourth) questions, issued once each via a shared set so no question is ever
     repeated between two assessments. */
  window.__hrRebuildAssessments = function () {
    TQ_plain = null; RQ_plain = null;
    var applied = 0;
    Object.keys(practiceIndex).forEach(function (quizId) {
      var meta = practiceIndex[quizId];
      var authored = topicQuestions(meta.name);
      if (authored && quizzes[quizId]) { quizzes[quizId].questions = authored.map(cloneQ); applied += 1; }
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
    // Module-scoped subject quizzes first, so they get their own modules' questions.
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
  window.tihApplyHrManagementTopicQuizzes = window.__hrRebuildAssessments;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[HRM] modules=' + modules.length + ' lessons=' + lessonCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
