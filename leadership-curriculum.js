/* TIH Complete Business Leadership Masterclass curriculum.
   Rebuilds COURSES_DB.leadership into the full 20-module program taking an
   aspiring leader to a confident business leader/executive: leadership
   fundamentals, strategic thinking, communication, team leadership, culture,
   operations, finance, marketing, innovation & change, negotiation, HR,
   performance, entrepreneurship, technology & AI, ethics & governance, career
   & executive development, real-world projects, a capstone and a graduation
   module. Every content lesson has a video and written notes; project lessons
   carry briefs and editable template outlines. Modelled on
   projectmgmt-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.leadership || COURSES_DB.leadership._leadFullBuilt) return;

  var V = ['tYW6X5qwnMw', 'Q-JClqIR5a4', 'kKbTi9_1lTg', 'L4UTybPoyn4', 'SI6cOkDOoyE', 'o0w1941xkjY', 'LerIITWNgvI', '0X1FiNxlHh0', 'AAZgoKAqGE0', 'XjiRF_6cvcA', 'cyGuic7_ivo', 'f8uw94S-yc4', '_TMM0lhukBg', 't3GjwVWapGo', 'GsRgHt4IIBU', 'eBXm0_8-rwU', 'mBRHe1sRiZM', '_zAiKx69kE0'];
  var VIDEOS = {
    orientation: ['V3VYtT4Fw2g'],
    fundamentals: ['qwN5Zx7Fusc'],
    strategy: ['wsICRlfpq4I'],
    comms: ['9OljCrnnFTc'],
    team: ['UOgrO2OfSxE'],
    culture: ['6uLN9dVfOBI'],
    operations: ['vVXMUfUUZqA'],
    finance: ['aJsmJsd6GIw'],
    marketing: ['SBbXgupLut8'],
    innovation: ['xGsxO2VAT9I'],
    negotiation: ['UfBV9eLWoN0'],
    hr: ['bI9RZjF-538'],
    performance: ['VgW5wlu4lM0'],
    entrepreneur: ['74G18CucAFA'],
    tech: ['1SbW4ibmMso'],
    ethics: ['j8E_zcLMTLw'],
    career: ['G94F9HGiYwY'],
    projects: ['Fnp6gsSjWpE'],
    capstone: ['Fnp6gsSjWpE'],
    assessment: ['Fnp6gsSjWpE']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Leadership?', 'Leadership vs. Management', 'Characteristics of Great Leaders', 'Leadership Styles', 'The Role of a Business Leader', 'Course Roadmap', 'Professional Ethics', 'Final Leadership Project']],
    [2, 'Leadership Fundamentals', '🌟', 'fundamentals', 'content', ['Leadership Principles', 'Self-Leadership', 'Emotional Intelligence', 'Personal Values', 'Building Trust', 'Decision-Making', 'Accountability', 'Developing Leadership Confidence', 'Leadership Assessment', 'Leadership Action Plan']],
    [3, 'Strategic Thinking', '♟️', 'strategy', 'content', ['Strategic Planning', 'Vision and Mission', 'Setting Business Goals', 'SWOT Analysis', 'PESTLE Analysis', 'Competitive Advantage', 'Business Growth Strategies', 'Strategic Decision-Making', 'Scenario Planning', 'Strategic Leadership Workshop']],
    [4, 'Communication Skills', '💬', 'comms', 'content', ['Effective Communication', 'Public Speaking', 'Business Writing', 'Active Listening', 'Giving and Receiving Feedback', 'Persuasive Communication', 'Presentation Skills', 'Executive Communication', 'Crisis Communication', 'Communication Practice']],
    [5, 'Team Leadership', '👥', 'team', 'content', ['Building High-Performing Teams', 'Hiring the Right People', 'Delegation Skills', 'Team Motivation', 'Employee Engagement', 'Coaching and Mentoring', 'Performance Management', 'Team Conflict Resolution', 'Remote Team Leadership', 'Team Development Project']],
    [6, 'Organizational Culture', '🏛️', 'culture', 'content', ['Understanding Organizational Culture', 'Creating Core Values', 'Building a Positive Work Environment', 'Diversity and Inclusion', 'Employee Well-Being', 'Organizational Behavior', 'Culture Change', 'Ethical Leadership']],
    [7, 'Business Operations', '⚙️', 'operations', 'content', ['Business Processes', 'Operational Planning', 'Productivity Improvement', 'Process Optimization', 'Resource Management', 'Supply Chain Basics', 'Performance Metrics', 'Operational Excellence']],
    [8, 'Financial Leadership', '💰', 'finance', 'content', ['Financial Literacy for Leaders', 'Reading Financial Statements', 'Budgeting', 'Cash Flow Management', 'Profit and Loss', 'Financial Decision-Making', 'Cost Control', 'Business Performance Analysis', 'Financial Planning', 'Financial Leadership Assignment']],
    [9, 'Marketing Leadership', '📣', 'marketing', 'content', ['Marketing Fundamentals', 'Branding', 'Customer Experience', 'Digital Marketing', 'Sales Leadership', 'Customer Relationship Management', 'Market Positioning', 'Business Growth Strategies']],
    [10, 'Innovation & Change Management', '💡', 'innovation', 'content', ['Innovation in Business', 'Creative Thinking', 'Managing Change', 'Digital Transformation', 'Business Process Innovation', 'Leading Organizational Change', 'Managing Resistance', 'Continuous Improvement']],
    [11, 'Negotiation & Conflict Resolution', '🤝', 'negotiation', 'content', ['Negotiation Skills', 'Business Negotiation Strategies', 'Conflict Resolution', 'Mediation Techniques', 'Handling Difficult Conversations', 'Workplace Disputes', 'Win-Win Solutions', 'Negotiation Practice']],
    [12, 'Human Resource Leadership', '🧑‍💼', 'hr', 'content', ['Human Resource Fundamentals', 'Recruitment Strategies', 'Talent Management', 'Employee Development', 'Succession Planning', 'Performance Reviews', 'Compensation & Benefits', 'Employment Law Basics']],
    [13, 'Project & Performance Management', '📈', 'performance', 'content', ['Goal Setting', 'Key Performance Indicators (KPIs)', 'Project Planning', 'Monitoring Performance', 'Time Management', 'Productivity Systems', 'Performance Reviews', 'Continuous Improvement']],
    [14, 'Entrepreneurship & Business Growth', '🚀', 'entrepreneur', 'content', ['Entrepreneurial Leadership', 'Business Model Innovation', 'Scaling a Business', 'Business Expansion', 'Strategic Partnerships', 'Investment Readiness', 'Corporate Entrepreneurship', 'Sustainable Growth']],
    [15, 'Technology & AI for Business Leaders', '🤖', 'tech', 'content', ['Digital Transformation', 'Artificial Intelligence in Business', 'Data-Driven Decision Making', 'Business Intelligence', 'Automation', 'Cybersecurity Awareness', 'Cloud Computing Basics', 'Future Business Trends']],
    [16, 'Ethics, Governance & Corporate Responsibility', '⚖️', 'ethics', 'content', ['Corporate Governance', 'Business Ethics', 'Compliance', 'Risk Management', 'Corporate Social Responsibility (CSR)', 'Sustainability', 'Environmental, Social & Governance (ESG)', 'Responsible Leadership']],
    [17, 'Career & Executive Development', '🎓', 'career', 'content', ['Executive Presence', 'Personal Branding', 'Professional Networking', 'Building a Leadership Portfolio', 'Resume & LinkedIn Optimization', 'Executive Interviews', 'Career Planning', 'Lifelong Learning']],
    [18, 'Real-World Business Leadership Projects', '🏗️', 'projects', 'projects', ['Strategic Business Plan', 'Team Leadership Project', 'Organizational Improvement Plan', 'Change Management Strategy', 'Marketing Growth Plan', 'Financial Performance Review', 'Business Expansion Proposal', 'Executive Presentation', 'Leadership Case Study', 'Board Meeting Simulation']],
    [19, 'Capstone Leadership Project', '🏆', 'capstone', 'projects', ['Leadership Challenge Selection', 'Business Analysis', 'Strategic Planning', 'Team Leadership', 'Financial Planning', 'Implementation Strategy', 'Final Presentation', 'Executive Review']],
    [20, 'Assessments & Graduation', '🎓', 'assessment', 'assessment', ['Leadership Fundamentals Assessment', 'Strategic Thinking Assessment', 'Financial Leadership Assessment', 'Marketing Leadership Assessment', 'Team Leadership Assessment', 'Change Management Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Leadership Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'leadership foundations', fundamentals: 'leadership fundamentals', strategy: 'strategic thinking', comms: 'communication skills', team: 'team leadership', culture: 'organizational culture', operations: 'business operations', finance: 'financial leadership', marketing: 'marketing leadership', innovation: 'innovation & change management', negotiation: 'negotiation & conflict resolution', hr: 'human resource leadership', performance: 'project & performance management', entrepreneur: 'entrepreneurial leadership', tech: 'technology & AI for leaders', ethics: 'ethics, governance & responsibility', career: 'career & executive development', projects: 'applied leadership projects', capstone: 'your capstone project', assessment: 'your knowledge' };

  var TEMPLATES = {
    strategic: '<h4>📥 Template: Strategic Plan</h4><ul><li>Vision &amp; mission</li><li>Strategic objectives (3–5)</li><li>SWOT summary</li><li>Key initiatives &amp; owners</li><li>Milestones &amp; KPIs</li><li>Resources &amp; budget</li></ul>',
    swot: '<h4>📥 Template: SWOT Analysis</h4><p>Fill a 2×2 grid:</p><ul><li><strong>Strengths</strong> (internal, positive)</li><li><strong>Weaknesses</strong> (internal, negative)</li><li><strong>Opportunities</strong> (external, positive)</li><li><strong>Threats</strong> (external, negative)</li></ul>',
    kpi: '<h4>📥 Template: KPI Dashboard</h4><p>Columns: KPI · Target · Actual · Trend · Owner · Status (R/A/G). Group by finance, customer, operations and people.</p>',
    budget: '<h4>📥 Template: Budget</h4><ul><li>Revenue lines</li><li>Cost lines (fixed &amp; variable)</li><li>Gross &amp; net profit</li><li>Baseline vs actual vs variance</li></ul>',
    review: '<h4>📥 Template: Performance Review Form</h4><ul><li>Goals set vs achieved</li><li>Strengths &amp; achievements</li><li>Areas to develop</li><li>Ratings against competencies</li><li>Development plan &amp; next goals</li></ul>',
    agenda: '<h4>📥 Template: Meeting Agenda</h4><ul><li>Date, time, attendees, objective</li><li>Agenda items (with time-boxes &amp; owners)</li><li>Decisions required</li><li>Action items (owner + due date)</li></ul>',
    devplan: '<h4>📥 Template: Leadership Development Plan</h4><ul><li>Leadership strengths &amp; gaps</li><li>Development goals (SMART)</li><li>Actions, learning &amp; mentors</li><li>Timeline &amp; success measures</li></ul>',
    growth: '<h4>📥 Template: Business Growth Plan</h4><ul><li>Growth objective &amp; target market</li><li>Strategy (product, market, partnerships)</li><li>Marketing &amp; sales plan</li><li>Resources, budget &amp; KPIs</li></ul>'
  };
  function templateFor(name) {
    if (/Strategic Planning|Strategic Business Plan/i.test(name)) return TEMPLATES.strategic;
    if (/SWOT/i.test(name)) return TEMPLATES.swot;
    if (/Key Performance Indicators|KPI/i.test(name)) return TEMPLATES.kpi;
    if (/Budgeting|Budget|Financial Planning/i.test(name)) return TEMPLATES.budget;
    if (/Performance Reviews|Performance Management|Performance Review/i.test(name)) return TEMPLATES.review;
    if (/Meeting/i.test(name)) return TEMPLATES.agenda;
    if (/Leadership Action Plan|Leadership Development|Building a Leadership Portfolio/i.test(name)) return TEMPLATES.devplan;
    if (/Business Growth|Scaling a Business|Marketing Growth Plan/i.test(name)) return TEMPLATES.growth;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'leadership skills';
    var focus = position % 2 ? 'practical technique, real examples and confident execution' : 'understanding the principle, applying it as a leader and reflecting on results';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Business Leadership · ' + esc(moduleTitle) + '</strong><span>Lead with impact</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> means for a business leader.</li>' +
      '<li>See how effective leaders apply it in real organizations.</li>' +
      '<li>Apply it to your own team, business or a case study and note one decision it changes.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real Liberian business, NGO, government or startup leadership situation.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Apply <em>' + esc(name) + '</em> to your own leadership context or a case study.</li>' +
      '<li><strong>Exercise 2:</strong> Reflect on one action you will take this week and how you will measure it.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to confident, effective business leadership.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on leadership project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical leadership project. Produce the deliverable for a real or realistic organization and add it to your leadership portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Analyse the situation and set clear objectives.</li><li>Develop your plan/strategy using the tools from the course.</li><li>Present it as an executive would — with recommendations, risks and measures of success.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A professional leadership document/presentation for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  function cloneQ(q) { return {q:q.q,opts:q.opts.slice(),correct:q.correct,exp:q.exp}; }
  function topicQuestions(num,name) {
    var bank=window.TIH_LEADERSHIP_QUESTIONS;
    var rows=bank&&bank.topics['M'+num+':'+name];
    if(!rows||rows.length!==4)throw new Error('Incomplete Leadership topic M'+num+':'+name);
    return rows;
  }
  function practiceQuiz(num,name) { return {title:'Practice: '+name,moduleNum:num,questionCount:3,questions:topicQuestions(num,name).slice(0,3).map(cloneQ)}; }
  function assessmentQuiz(num,name,count) { return {title:name,moduleNum:num,questionCount:count,questions:[]}; }

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
        var qid = 'lead-m' + num + '-final';
        quizzes[qid] = assessmentQuiz(num, 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Use it to check your learning. Official course completion and certificates are managed in the TIH Learning Hub.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Complete the real-world leadership projects in Module 18.</li><li>Complete the executive capstone in Module 19 and present it.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Leadership Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'lead-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(num, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'lead-m' + num + '-a' + flat;
        quizzes[qk] = assessmentQuiz(num, name, 8);
        lessons.push({ t: '📝 ' + name, d: '8 questions', isQuiz: true, quizId: qk });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Quiz</span></div><h3>' + esc(name) + '</h3><p>Answer this module assessment, then review each explanation to check your understanding.</p></div>';
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
      var pqid = 'lead-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(num, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB.leadership;
  COURSES_DB.leadership = {
    id: 'leadership',
    title: 'Complete Business Leadership Masterclass',
    shortDesc: 'A full 20-module masterclass from aspiring leader to confident business executive: leadership fundamentals, strategy, communication, team leadership, culture, operations, finance, marketing, innovation & change, negotiation, HR, performance, entrepreneurship, technology & AI, ethics & governance, executive development, 10 real-world projects, a capstone and a Certificate of Completion.',
    category: 'Leadership',
    icon: ex.icon || '🎯',
    gradient: ex.gradient || 'linear-gradient(135deg,#78350f,#b45309)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH leaders',
    duration: '150h+',
    level: 'Beginner → Executive',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$180',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-LEAD-0001',
    learn: [
      'Lead yourself and others with emotional intelligence and integrity',
      'Think strategically and make sound business decisions',
      'Communicate powerfully and build high-performing teams and culture',
      'Lead finance, marketing, operations, innovation and change',
      'Negotiate, resolve conflict, and lead HR and performance',
      'Lead ethically with governance, technology and executive presence'
    ],
    requirements: [
      'No prior leadership title required — for aspiring and current leaders',
      'A willingness to apply lessons to a real team or business',
      'A device to complete templates and projects'
    ],
    about: [
      'This is the complete TIH Business Leadership Masterclass, rebuilt into twenty modules that take you from aspiring leader to confident business executive.',
      'Every teaching lesson has a video and written notes with worked examples and practice activities. Template outlines cover strategic plans, SWOT, KPIs, budgets, reviews, agendas and development plans; ten real-world projects plus a capstone build your leadership portfolio.',
      'Software & tools: Microsoft Excel, PowerPoint and Word, Google Workspace, Trello, Asana, Notion, Canva, ChatGPT and Zoom/Microsoft Teams. You finish with a leadership portfolio. Official TIH certificates are managed in the Learning Hub after its current completion requirements are met.'
    ],
    modules: modules,
    quizzes: quizzes,
    _leadFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.leadership = notes;


  window.tihApplyLeadershipTopicQuizzes=function(){
    var bank=window.TIH_LEADERSHIP_QUESTIONS,course=COURSES_DB.leadership;
    if(!bank||!course)throw new Error('Missing Leadership question bank');
    var reserves=[],papers=[],used={};
    course.modules.forEach(function(m,mi){m.lessons.forEach(function(l){
      if(!l.isQuiz)return;
      var q=course.quizzes[l.quizId];q.moduleNum=mi+1;
      if(q.title.indexOf('Practice: ')===0){
        var rows=topicQuestions(mi+1,q.title.slice(10));q.questions=rows.slice(0,3).map(cloneQ);reserves.push(rows[3]);
      }else papers.push(q);
    });});
    var pool=reserves.concat(bank.exams.filter(function(q){return q.module<=17;}));
    function issue(rows,count){
      var buckets={},nums=[],out=[];
      rows.forEach(function(q){if(used[q.q])return;if(!buckets[q.module]){buckets[q.module]=[];nums.push(q.module);}buckets[q.module].push(q);});
      nums.sort(function(a,b){return a-b;});
      var changed=true;
      while(out.length<count&&changed){changed=false;nums.forEach(function(n){if(out.length>=count||!buckets[n].length)return;var q=buckets[n].shift();used[q.q]=true;out.push(cloneQ(q));changed=true;});}
      if(out.length!==count)throw new Error('Exhausted Leadership assessment pool');
      return out;
    }
    function paper(title){var q=papers.filter(function(q){return q.title===title;})[0];if(!q)throw new Error('Missing Leadership assessment '+title);return q;}
    // Protect explicit full-syllabus coverage before allocating narrow papers.
    var protectedItems={},midCoverage=[],finalCoverage=[];
    for(var n=1;n<=17;n++){
      var rows=pool.filter(function(q){return q.module===n;});
      if(rows.length<(n<=10?2:1))throw new Error('No Leadership coverage reserve for module '+n);
      var f=rows[rows.length-1];protectedItems[f.q]=true;finalCoverage.push(f);
      if(n<=10){var m=rows[rows.length-2];protectedItems[m.q]=true;midCoverage.push(m);}
    }
    var subjects={'Leadership Assessment':[2],'Leadership Fundamentals Assessment':[2],'Strategic Thinking Assessment':[3],'Financial Leadership Assessment':[8],'Marketing Leadership Assessment':[9],'Team Leadership Assessment':[5],'Change Management Assessment':[10]};
    Object.keys(subjects).forEach(function(title){var q=paper(title),nums=subjects[title];q.questions=issue(pool.filter(function(r){return nums.indexOf(r.module)>=0&&!protectedItems[r.q];}),q.questionCount);});
    var mid=paper('Midterm Examination');mid.questions=issue(midCoverage,10).concat(issue(pool.filter(function(r){return r.module<=10&&!protectedItems[r.q];}),mid.questionCount-10));
    var final=paper('Final Examination');final.questions=issue(finalCoverage,17).concat(issue(pool.filter(function(r){return !protectedItems[r.q];}),final.questionCount-17));
    var projectPool=bank.exams.filter(function(q){return q.module>=18;});
    ['Capstone Project Evaluation','Leadership Portfolio Review'].forEach(function(title){var q=paper(title);q.questions=issue(projectPool,q.questionCount);});
    var graduation=paper('Graduation Assessment');graduation.questions=issue(pool,graduation.questionCount);
    papers.forEach(function(q){if(q.questions.length!==q.questionCount)throw new Error('Incomplete Leadership paper '+q.title);});
  };
  window.tihApplyLeadershipTopicQuizzes();

  if (typeof console !== 'undefined' && console.log) {
    console.log('[LEAD] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
