/* TIH Complete Project Management Professional Certificate curriculum.
   Rebuilds COURSES_DB['project-mgmt'] into the full 20-module program taking a
   beginner to project management professional: fundamentals, initiation,
   planning, scope/time/cost/quality/risk, communication & stakeholders,
   leadership, Agile & Scrum, monitoring & control, closure, PM software,
   business analysis, professional & career skills, practical projects, a
   capstone and a graduation module. Every content lesson has a video +
   printable notes; project lessons carry briefs and downloadable templates
   (Charter, WBS, Gantt, Risk Register, Budget, Status Report, Meeting Minutes,
   Closure Report). Modelled on android-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'project-mgmt';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._pmFullBuilt) return;

  var V = ['iopMMoHstJM', 'SPj-Luod9tI', 'PyR2VLP3xnA', 'YDxAKKVdMVM', 'EyPFi0YO32M', 'r1szmmkUPH8', '1rQT1R3S2BQ', 'boIRGwGJ-Ds', 'KmEMtUzMlIk', 'gSOdc2Y5tTk', 'bV9yUQV6D60', 'vzqDTSZOTic', 'C5b_4aFeF2E', '00Rbll3ZNk0', 'ktSzxVEnTZ8', '521iU9T4TBg', 'fAC7up3jc3k', 'UQ71PhWRDEQ'];
  var VIDEOS = {
    orientation: ['7UJBRFGLhJE'],
    fundamentals: ['cLXkOYaZ_K0'],
    initiation: ['hIhTtzo0eBg'],
    planning: ['sf-inTpymjg'],
    scope: ['ZV4kTkMzl38'],
    time: ['UYbShgphnhA'],
    cost: ['8xxkA20ycck'],
    quality: ['1rQT1R3S2BQ'],
    risk: ['52tOs1qv3Vg'],
    comms: ['bV9yUQV6D60'],
    leadership: ['MUtUmwbQSkw'],
    agile: ['J-psYRsMZ1A'],
    monitoring: ['QLCHxvyx8ZA'],
    closure: ['jDSmwr_kGz8'],
    software: ['iKsO9zx9n2Q'],
    analysis: ['68bWRSO8PYc'],
    professional: ['UYZaFInbQEY'],
    career: ['UYZaFInbQEY'],
    projects: ['7UJBRFGLhJE'],
    assessment: ['7UJBRFGLhJE']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Project Management?', 'Career Opportunities in Project Management', 'Project Manager Roles & Responsibilities', 'Project Life Cycle', 'Types of Projects', 'Course Roadmap', 'Professional Ethics', 'Final Capstone Project']],
    [2, 'Project Management Fundamentals', '📘', 'fundamentals', 'content', ['Project vs. Operations', 'Project Constraints', 'Project Success Criteria', 'Organizational Structures', 'Project Governance', 'Business Case', 'Project Charter', 'Project Management Frameworks', 'Project Management Processes', 'Introduction Quiz']],
    [3, 'Project Initiation', '🚀', 'initiation', 'content', ['Identifying Business Needs', 'Defining Project Objectives', 'Stakeholder Identification', 'Stakeholder Analysis', 'Scope Definition', 'Creating the Project Charter', 'Project Approval Process', 'Initiation Case Study']],
    [4, 'Project Planning', '🗓️', 'planning', 'content', ['Work Breakdown Structure (WBS)', 'Project Scheduling', 'Gantt Charts', 'Milestones', 'Critical Path Method (CPM)', 'Resource Planning', 'Budget Planning', 'Cost Estimation', 'Procurement Planning', 'Project Planning Workshop']],
    [5, 'Project Scope Management', '🎯', 'scope', 'content', ['Collecting Requirements', 'Defining Scope', 'Creating Scope Statements', 'Scope Baseline', 'Scope Verification', 'Scope Control', 'Preventing Scope Creep', 'Scope Management Project']],
    [6, 'Time Management', '⏱️', 'time', 'content', ['Activity Definition', 'Activity Sequencing', 'Time Estimation', 'Schedule Development', 'Schedule Control', 'Time Tracking', 'Productivity Tools', 'Time Management Exercises']],
    [7, 'Cost Management', '💰', 'cost', 'content', ['Project Budgeting', 'Cost Estimation Methods', 'Budget Baseline', 'Cost Control', 'Earned Value Management (EVM)', 'Financial Reporting', 'Cost Performance Analysis', 'Budget Management Assignment']],
    [8, 'Quality Management', '✅', 'quality', 'content', ['Quality Planning', 'Quality Assurance', 'Quality Control', 'Continuous Improvement', 'Root Cause Analysis', 'Quality Audits', 'Customer Satisfaction', 'Quality Improvement Project']],
    [9, 'Risk Management', '⚠️', 'risk', 'content', ['Risk Identification', 'Risk Assessment', 'Risk Analysis', 'Risk Response Planning', 'Risk Monitoring', 'Risk Register', 'Opportunity Management', 'Risk Management Workshop']],
    [10, 'Communication & Stakeholder Management', '💬', 'comms', 'content', ['Communication Planning', 'Stakeholder Engagement', 'Meeting Management', 'Conflict Resolution', 'Negotiation Skills', 'Presentation Skills', 'Status Reporting', 'Communication Assignment']],
    [11, 'Team Leadership & Human Resource Management', '👥', 'leadership', 'content', ['Building High-Performing Teams', 'Leadership Styles', 'Motivation Techniques', 'Delegation', 'Team Development', 'Performance Management', 'Coaching & Mentoring', 'Managing Remote Teams']],
    [12, 'Agile Project Management', '🔁', 'agile', 'content', ['Introduction to Agile', 'Agile Principles', 'Scrum Framework', 'Scrum Roles', 'Scrum Events', 'Scrum Artifacts', 'Kanban', 'Agile Estimation', 'Agile Project Simulation']],
    [13, 'Project Monitoring & Control', '📈', 'monitoring', 'content', ['Monitoring Progress', 'Performance Measurement', 'Change Management', 'Issue Tracking', 'Project Dashboards', 'KPI Monitoring', 'Variance Analysis', 'Corrective Actions']],
    [14, 'Project Closure', '🏁', 'closure', 'content', ['Closing a Project', 'Final Deliverables', 'Project Evaluation', 'Lessons Learned', 'Client Acceptance', 'Final Documentation', 'Project Handover', 'Project Closure Checklist']],
    [15, 'Project Management Software', '🧰', 'software', 'content', ['Microsoft Project', 'Trello', 'Asana', 'Jira', 'Monday.com', 'ClickUp', 'Notion', 'Smartsheet', 'Google Workspace for Project Teams', 'Software Practice Exercises']],
    [16, 'Business Analysis & Strategic Planning', '📊', 'analysis', 'content', ['Business Analysis Basics', 'SWOT Analysis', 'PESTLE Analysis', 'Feasibility Studies', 'Strategic Planning', 'Organizational Change Management', 'Decision-Making Techniques', 'Business Case Development']],
    [17, 'Professional Skills', '🌟', 'professional', 'content', ['Business Communication', 'Report Writing', 'Proposal Writing', 'Professional Ethics', 'Emotional Intelligence', 'Problem-Solving', 'Critical Thinking', 'Networking Skills']],
    [18, 'Career Development', '💼', 'career', 'content', ['Building a Professional Resume', 'LinkedIn Optimization', 'Interview Preparation', 'PMP Certification Overview', 'CAPM Certification Overview', 'Freelancing as a Project Manager', 'Consulting Opportunities', 'Career Growth Roadmap']],
    [19, 'Practical Projects', '🏗️', 'projects', 'projects', ['Community Development Project', 'Construction Project Plan', 'IT Project Management', 'Event Planning Project', 'NGO Project Management', 'Business Expansion Project', 'Risk Assessment Project', 'Complete Project Management Plan']],
    [20, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['Project Management Fundamentals Assessment', 'Planning Assessment', 'Budgeting Assessment', 'Risk Management Assessment', 'Agile & Scrum Assessment', 'Software Tools Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Presentation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'project management foundations', fundamentals: 'PM fundamentals', initiation: 'project initiation', planning: 'project planning', scope: 'scope management', time: 'time management', cost: 'cost management', quality: 'quality management', risk: 'risk management', comms: 'communication & stakeholder management', leadership: 'team leadership', agile: 'Agile & Scrum', monitoring: 'monitoring & control', closure: 'project closure', software: 'PM software', analysis: 'business analysis & strategy', professional: 'professional skills', career: 'PM careers & certification', projects: 'applied PM projects', assessment: 'your knowledge' };

  var TEMPLATES = {
    charter: '<h4>📥 Template: Project Charter</h4><ul><li>Project title &amp; sponsor</li><li>Business case / justification</li><li>Objectives &amp; success criteria</li><li>High-level scope &amp; deliverables</li><li>Key stakeholders</li><li>High-level budget &amp; timeline</li><li>Risks &amp; assumptions</li><li>Project manager &amp; authority</li></ul>',
    wbs: '<h4>📥 Template: Work Breakdown Structure (WBS)</h4><p>Break the project into deliverables, then work packages:</p><ul><li>1.0 Project → 1.1 Phase → 1.1.1 Work package → tasks</li><li>Each work package: owner, estimate, dependencies</li><li>Rule: 100% of the work, no more, no less</li></ul>',
    gantt: '<h4>📥 Template: Gantt Chart</h4><p>Columns: Task · Start · End · Duration · Owner · % Complete · Dependencies. Bars on a timeline show overlap; mark milestones as diamonds and the critical path in a distinct colour.</p>',
    risk: '<h4>📥 Template: Risk Register</h4><p>Columns: ID · Risk description · Category · Probability (L/M/H) · Impact (L/M/H) · Score · Response (avoid/mitigate/transfer/accept) · Owner · Status.</p>',
    budget: '<h4>📥 Template: Budget</h4><ul><li>Cost line items (labour, materials, tools, contingency)</li><li>Estimate method &amp; assumptions</li><li>Baseline vs actual vs variance</li><li>Earned Value: PV, EV, AC, CPI, SPI</li></ul>',
    status: '<h4>📥 Template: Status Report</h4><ul><li>Overall status (Green/Amber/Red)</li><li>Accomplishments this period</li><li>Planned next period</li><li>Schedule &amp; budget vs baseline</li><li>Risks/issues &amp; decisions needed</li></ul>',
    minutes: '<h4>📥 Template: Meeting Minutes</h4><ul><li>Date, attendees, agenda</li><li>Decisions made</li><li>Action items (owner + due date)</li><li>Follow-ups / next meeting</li></ul>',
    closure: '<h4>📥 Template: Project Closure Report</h4><ul><li>Objectives vs results</li><li>Final scope, schedule &amp; budget performance</li><li>Deliverables &amp; client acceptance</li><li>Lessons learned</li><li>Handover &amp; sign-off</li></ul>'
  };
  function templateFor(name) {
    if (/Project Charter|Creating the Project Charter/i.test(name)) return TEMPLATES.charter;
    if (/Work Breakdown Structure|WBS/i.test(name)) return TEMPLATES.wbs;
    if (/Gantt/i.test(name)) return TEMPLATES.gantt;
    if (/Risk Register/i.test(name)) return TEMPLATES.risk;
    if (/Budget|Cost Estimation|Earned Value/i.test(name)) return TEMPLATES.budget;
    if (/Status Reporting|Financial Reporting/i.test(name)) return TEMPLATES.status;
    if (/Meeting Management/i.test(name)) return TEMPLATES.minutes;
    if (/Closure|Project Handover|Final Documentation/i.test(name)) return TEMPLATES.closure;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'project management skills';
    var focus = position % 2 ? 'practical technique, real examples and confident delivery' : 'understanding the process, applying the tool and reviewing the result';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Project Management · ' + esc(moduleTitle) + '</strong><span>PMBOK &amp; Agile aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and where it fits in the project life cycle.</li>' +
      '<li>Learn the tool/technique and the process that uses it.</li>' +
      '<li>Apply it to a real project scenario and record one decision it drives.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real Liberian business, NGO, construction, IT or community project.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Complete <em>' + esc(name) + '</em> for a sample project.</li>' +
      '<li><strong>Exercise 2:</strong> Explain how it affects scope, schedule, cost, quality or risk.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to CAPM®/PMP® readiness.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Produce the deliverable for a real or realistic scenario and add it to your portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Initiate: charter, objectives and stakeholders.</li><li>Plan: WBS, schedule, budget and risk register.</li><li>Show how you would execute, monitor/control and close it, with the key documents.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A complete set of project documents (charter, WBS, schedule, budget, risk register) for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your plan and templates offline.</p></div>';
  }

  // Fail visibly if the authored bank is missing. Never fall back to a generic
  // pool: that was the source of identical quizzes throughout this course.
  var authored = window.TIH_PM_QUESTION_BANK;
  if (!authored || authored.revision !== 2) throw new Error('Project Management question bank did not load');
  var reserved = [], issued = {}, papers = {};
  curriculum.forEach(function (mod) {
    if (mod[4] === 'assessment') return;
    mod[5].forEach(function (name) {
      if (isAssessment(name)) return;
      var key = 'M' + mod[0] + ':' + name, set = authored.topics[key];
      if (!set || set.length !== 4) throw new Error('Missing authored PM topic: ' + key);
      var project = mod[4] === 'projects' || isProjectName(name);
      (project ? set : set.slice(3)).forEach(function (q) {
        reserved.push({ question: q, project: project });
      });
    });
  });
  authored.exams.forEach(function (q) { reserved.push({ question: q, project: false }); });
  function cloneQ(q) {
    return { id: q.id, topic: q.topic, module: q.module, q: q.q,
      opts: q.opts.slice(), correct: q.correct, exp: q.exp };
  }
  // Round-robin by module, then by topic. Cursors only move forward; an issued
  // question can never appear in another paper, including the graduation quiz.
  function take(count, accepts) {
    var groups = {}, modules = [], out = [];
    reserved.forEach(function (entry) {
      var q = entry.question;
      if (issued[q.id] || !accepts(entry)) return;
      if (!groups[q.module]) { groups[q.module] = {}; modules.push(q.module); }
      (groups[q.module][q.topic] = groups[q.module][q.topic] || []).push(q);
    });
    var queues = modules.map(function (m) {
      var buckets = Object.keys(groups[m]).map(function (t) { return groups[m][t]; });
      var queue = [], remaining = true;
      while (remaining) {
        remaining = false;
        buckets.forEach(function (bucket) { if (bucket.length) { queue.push(bucket.shift()); remaining = true; } });
      }
      return queue;
    });
    while (out.length < count) {
      var moved = false;
      queues.forEach(function (queue) {
        if (out.length < count && queue.length) {
          var q = queue.shift(); issued[q.id] = true; out.push(cloneQ(q)); moved = true;
        }
      });
      if (!moved) throw new Error('Insufficient unseen PM assessment questions: ' + count);
    }
    return out;
  }
  function inModules(nums) { return function (e) { return nums.indexOf(e.question.module) >= 0; }; }
  function risk(e) { return e.question.module === 9 || e.question.topic === 'M19:Risk Assessment Project'; }
  function paper(name, count, accepts) { papers[name] = take(count, accepts); }
  paper('Introduction Quiz', 8, inModules([2]));
  paper('Risk Assessment', 8, risk);
  paper('Project Management Fundamentals Assessment', 8, function (e) {
    return [1, 2, 3].indexOf(e.question.module) >= 0 && !e.project &&
      !/Welcome to the Course|Course Roadmap|Career Opportunities/.test(e.question.topic);
  });
  paper('Budgeting Assessment', 8, inModules([7]));
  paper('Planning Assessment', 8, function (e) { return [4, 5, 6].indexOf(e.question.module) >= 0 && !e.project; });
  paper('Risk Management Assessment', 8, risk);
  paper('Agile & Scrum Assessment', 8, function (e) { return e.question.module === 12 && !e.project; });
  paper('Software Tools Assessment', 8, inModules([15]));
  authored.comprehensive.forEach(function (q) { reserved.push({ question: q, project: false }); });
  paper('Midterm Examination', 15, function (e) { return e.question.module <= 10 && !e.project; });
  paper('Final Examination', 20, function (e) { return e.question.module <= 18 && !e.project; });
  paper('Capstone Project Presentation', 15, function (e) { return e.project; });
  paper('Portfolio Review', 15, function (e) { return e.project; });
  paper('Graduation Assessment', 15, function (e) { return !e.project && e.question.module >= 2 && e.question.module <= 16; });
  function practiceQuiz(module, name) {
    var key = 'M' + module + ':' + name;
    return { title: 'Practice: ' + name, moduleNum: module,
      questions: authored.topics[key].slice(0, 3).map(cloneQ) };
  }
  function assessmentQuiz(module, name, count) {
    var questions = papers[name];
    if (!questions || questions.length !== count) throw new Error('Invalid PM paper: ' + name);
    return { title: name, moduleNum: module, questions: questions };
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'pm-m' + num + '-final';
        quizzes[qid] = assessmentQuiz(num, 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–18.</li><li>Complete the practical projects in Module 19 (incl. a Complete Project Management Plan).</li><li>Deliver the Capstone Project Presentation and pass the Portfolio Review.</li><li>Pass the skill assessments, the Midterm and Final Examinations.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var big = /Examination|Exam|Evaluation|Presentation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'pm-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(num, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'pm-m' + num + '-a' + flat;
        quizzes[qk] = assessmentQuiz(num, name, 8);
        lessons.push({ t: '📝 ' + name, d: '8 questions', isQuiz: true, quizId: qk });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Quiz</span></div><h3>' + esc(name) + '</h3><p>Answer this module quiz, then review each explanation to check your understanding.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (type === 'projects' || isProjectName(name)) {
        idx += 1;
        var pv = pool[idx % pool.length];
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: pv });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      idx += 1;
      var v = pool[idx % pool.length];
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'pm-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(num, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete Project Management Professional Certificate',
    shortDesc: 'A full 20-module program from beginner to project management professional: initiation, planning, scope/time/cost/quality/risk, communication & stakeholders, leadership, Agile & Scrum, monitoring & control, closure, PM software, business analysis, professional & career skills, 8 practical projects, a capstone and a Certificate of Completion. Prepares you for CAPM®/PMP®.',
    category: 'Project Management',
    icon: ex.icon || '📋',
    gradient: ex.gradient || 'linear-gradient(135deg,#064e3b,#047857)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH project managers',
    duration: '150h+',
    level: 'Beginner → Professional',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$200',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-PM-0001',
    learn: [
      'Initiate, plan, execute, monitor & control, and close projects',
      'Build charters, WBS, schedules (Gantt/CPM), budgets and risk registers',
      'Manage scope, time, cost, quality and risk using proven techniques',
      'Communicate with stakeholders and lead high-performing teams',
      'Apply Agile & Scrum and use PM software (MS Project, Jira, Trello, Asana)',
      'Prepare for CAPM®/PMP® and build a project management portfolio'
    ],
    requirements: [
      'No prior experience required — we start from the fundamentals',
      'A device to use PM software and complete templates',
      'Willingness to apply each technique to a real or sample project'
    ],
    about: [
      'This is the complete TIH Project Management Professional Certificate, rebuilt into twenty modules that take you from the basics to professional-level practice.',
      'Every content lesson has a video and printable notes; downloadable templates cover the Project Charter, WBS, Gantt chart, Risk Register, Budget, Status Report, Meeting Minutes and Closure Report, and eight practical projects plus a capstone build your portfolio.',
      'Software & tools: Microsoft Project, Trello, Asana, Jira, Monday.com, ClickUp, Notion, Smartsheet, Excel and Google Workspace. You finish with a full project plan and — after the graduation assessment — a Certificate of Completion, ready for CAPM®/PMP®.'
    ],
    modules: modules,
    quizzes: quizzes,
    _pmFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[PM] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
