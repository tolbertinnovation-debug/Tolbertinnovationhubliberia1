/* TIH Complete Microsoft Office Mastery Professional Certificate curriculum.
   Rebuilds COURSES_DB.office into the full 20-module program taking a complete
   beginner to an advanced Microsoft Office professional: Windows & files, Word,
   Excel (essentials & advanced), PowerPoint, Outlook, OneNote, Teams, OneDrive,
   Microsoft Copilot, collaboration, business documentation, data analysis,
   productivity, workplace communication, career, real-world projects, a
   capstone and a graduation module. Every content lesson has a video +
   printable notes; project lessons carry briefs and downloadable templates.
   Modelled on complit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'office';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._officeFullBuilt) return;

  var V = ['EuWTrvT_YyY', '3eIlHtHDGDs', 'rGG-In7PAEk', '7_vMFvnGTlc', 'bsuP2dD3rec', '9NUjHBNWe9M', 'QiVSIvB1xis', 'cwPaqUC1jT4', 'ycyySK5bdRg', 'nbhZE_mza2g', 'u0--Ye7bUP4', 'TzNQkMTHKuM', '4wQ0KmttgcQ', 'oT4emh72fuA', 'DQPHzp2ezpw', 'VFMPLeC7h0I', 'S0i4CdKi1i4', 'Y5waTxDKZ3c'];
  var VIDEOS = {
    orientation: ['IUAq9r5B9Go'],
    windows: ['irk0adNl5c0'],
    word: ['EuWTrvT_YyY'],
    excel: ['Vl0H-qTclOg'],
    advexcel: ['Mkkb5Bk6Z-Y'],
    ppt: ['l5Ij7nUy9UQ'],
    outlook: ['4e_ghbyXcJ0'],
    onenote: ['aSF_QAeMoD8'],
    teams: ['VDDPoYOQYfM'],
    onedrive: ['njJr751_tP4'],
    copilot: ['0_mqsU7yh5Q'],
    collab: ['z2d_qv83kiQ'],
    docs: ['vO2Mbyu4NSM'],
    data: ['iG6lN9aBrcM'],
    productivity: ['CjT6ilNc2BQ'],
    comms: ['CcesWgk_VMc'],
    career: ['xXUwu2MDaV8'],
    projects: ['iUqbhkJWt_4'],
    capstone: ['iUqbhkJWt_4'],
    assessment: ['iUqbhkJWt_4']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Microsoft Office?', 'Microsoft 365 Overview', 'Career Opportunities', 'Installing Microsoft Office', 'Course Roadmap', 'Setting Learning Goals', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'Windows & File Management', '🪟', 'windows', 'content', ['Windows Fundamentals', 'File Explorer', 'Folder Organization', 'File Types', 'File Compression (ZIP)', 'Storage Devices', 'Cloud Storage Basics', 'OneDrive Integration', 'Backup & Recovery', 'File Management Assessment']],
    [3, 'Microsoft Word Essentials', '📝', 'word', 'content', ['Introduction to Microsoft Word', 'Creating Documents', 'Text Formatting', 'Paragraph Formatting', 'Page Layout', 'Headers & Footers', 'Tables', 'Images & Shapes', 'SmartArt', 'Styles & Themes', 'Page Numbers', 'References', 'Table of Contents', 'Mail Merge', 'Track Changes', 'Comments', 'Templates', 'Printing & Exporting', 'Word Best Practices', 'Word Project']],
    [4, 'Microsoft Excel Essentials', '📗', 'excel', 'content', ['Introduction to Excel', 'Worksheets & Workbooks', 'Data Entry', 'Formatting', 'Basic Formulas', 'Functions', 'Sorting & Filtering', 'Conditional Formatting', 'Charts', 'Tables', 'Printing Worksheets', 'Excel Project']],
    [5, 'Advanced Microsoft Excel', '📈', 'advexcel', 'content', ['IF Statements', 'VLOOKUP', 'XLOOKUP', 'INDEX & MATCH', 'Pivot Tables', 'Pivot Charts', 'Slicers', 'Data Validation', 'What-If Analysis', 'Goal Seek', 'Solver', 'Dashboard Creation', 'Power Query (Introduction)', 'Power Pivot (Introduction)', 'Excel Automation with Macros (Introduction)', 'Advanced Excel Project']],
    [6, 'Microsoft PowerPoint', '📽️', 'ppt', 'content', ['Introduction to PowerPoint', 'Creating Presentations', 'Themes', 'Slide Layouts', 'Images & Icons', 'SmartArt', 'Charts', 'Audio & Video', 'Animations', 'Transitions', 'Presenter View', 'Presentation Delivery', 'PowerPoint Project']],
    [7, 'Microsoft Outlook', '📧', 'outlook', 'content', ['Setting Up Outlook', 'Sending Emails', 'Email Organization', 'Rules & Filters', 'Calendar Management', 'Scheduling Meetings', 'Contacts', 'Tasks', 'Email Etiquette', 'Outlook Productivity Tips']],
    [8, 'Microsoft OneNote', '🗒️', 'onenote', 'content', ['Introduction to OneNote', 'Creating Notebooks', 'Organizing Notes', 'Multimedia Notes', 'Tags', 'Search Features', 'Collaboration', 'Academic & Business Note-Taking']],
    [9, 'Microsoft Teams', '👥', 'teams', 'content', ['Introduction to Teams', 'Creating Teams', 'Channels', 'Chat', 'Meetings', 'File Sharing', 'Collaboration', 'Teams Integration', 'Recording Meetings', 'Teams Project']],
    [10, 'Microsoft OneDrive', '☁️', 'onedrive', 'content', ['Cloud Storage Basics', 'Uploading Files', 'File Synchronization', 'Sharing Files', 'Permission Management', 'Version History', 'Backup Strategies', 'OneDrive Security']],
    [11, 'Microsoft Copilot & AI Productivity', '🤖', 'copilot', 'content', ['Introduction to Microsoft Copilot', 'AI in Word', 'AI in Excel', 'AI in PowerPoint', 'AI in Outlook', 'AI Prompt Writing', 'Automating Office Tasks', 'Responsible AI Use', 'Copilot Productivity Project', 'AI Best Practices']],
    [12, 'Office Collaboration', '🔗', 'collab', 'content', ['Co-Authoring Documents', 'Sharing Files', 'Comments & Reviews', 'Track Changes', 'Document Approval Workflows', 'Team Collaboration', 'Version Control', 'Cloud Collaboration Project']],
    [13, 'Business Documentation', '📄', 'docs', 'content', ['Business Letters', 'Reports', 'Proposals', 'Meeting Minutes', 'Invoices', 'Resumes & CVs', 'Cover Letters', 'Professional Templates', 'Business Documentation Project', 'Document Standards']],
    [14, 'Data Analysis & Reporting', '📊', 'data', 'content', ['Data Collection', 'Data Cleaning', 'Charts', 'Dashboards', 'Business Reports', 'KPI Tracking', 'Data Visualization', 'Executive Reporting', 'Reporting Project', 'Presentation of Findings']],
    [15, 'Productivity & Time Management', '⚡', 'productivity', 'content', ['Digital Organization', 'Task Management', 'Calendar Planning', 'Workflow Optimization', 'Keyboard Shortcuts', 'Automation Tips', 'Focus Techniques', 'Productivity Systems', 'Time Management Project', 'Personal Productivity Plan']],
    [16, 'Workplace Communication', '💬', 'comms', 'content', ['Professional Email Writing', 'Business Communication', 'Presentation Skills', 'Meeting Management', 'Collaboration Skills', 'Customer Communication', 'Workplace Etiquette', 'Professional Writing']],
    [17, 'Career Development', '📋', 'career', 'content', ['Resume Writing', 'LinkedIn Optimization', 'Portfolio Development', 'Interview Preparation', 'Microsoft Office Certifications', 'Freelancing Opportunities', 'Career Planning', 'Professional Development']],
    [18, 'Real-World Projects', '🏗️', 'projects', 'projects', ['Professional Business Report', 'Financial Analysis Spreadsheet', 'Interactive Excel Dashboard', 'Corporate Presentation', 'Team Collaboration Project', 'Business Proposal', 'Outlook Productivity System', 'OneNote Knowledge Base', 'Office Automation Project', 'Executive Portfolio']],
    [19, 'Capstone Project', '🏆', 'capstone', 'projects', ['Business Scenario Analysis', 'Word Documentation', 'Excel Analysis', 'PowerPoint Presentation', 'Outlook Communication Plan', 'Teams Collaboration', 'OneDrive File Management', 'Final Project Presentation']],
    [20, 'Assessments & Graduation', '🎓', 'assessment', 'assessment', ['Microsoft Word Assessment', 'Microsoft Excel Assessment', 'Microsoft PowerPoint Assessment', 'Outlook Assessment', 'Teams Assessment', 'Copilot Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'Microsoft Office foundations', windows: 'Windows & file management', word: 'Microsoft Word', excel: 'Microsoft Excel', advexcel: 'advanced Microsoft Excel', ppt: 'Microsoft PowerPoint', outlook: 'Microsoft Outlook', onenote: 'Microsoft OneNote', teams: 'Microsoft Teams', onedrive: 'Microsoft OneDrive', copilot: 'Microsoft Copilot & AI productivity', collab: 'Office collaboration', docs: 'business documentation', data: 'data analysis & reporting', productivity: 'productivity & time management', comms: 'workplace communication', career: 'careers with Microsoft Office', projects: 'real-world Office projects', capstone: 'your capstone project', assessment: 'your skills' };

  var FILES = '<div class="study-callout"><strong>📎 Practice files:</strong> download the Word template, Excel workbook, PowerPoint template or practice file for this lesson, follow along on your own computer, then Print → Save as PDF to keep your notes.</div>';
  var TEMPLATES = {
    resume: '<h4>📥 Template: Resume &amp; Cover Letter</h4><p><strong>Resume:</strong> Contact · Profile · Experience (achievements) · Education · Skills. <strong>Cover letter:</strong> role fit · key achievement · why this employer · call to action. Use Word Styles for a clean, consistent look.</p>',
    minutes: '<h4>📥 Template: Meeting Minutes</h4><ul><li>Date, attendees, agenda</li><li>Decisions made</li><li>Action items (owner + due date)</li><li>Next meeting</li></ul>',
    budget: '<h4>📥 Template: Budget Workbook (Excel)</h4><ul><li>Income &amp; expense lines</li><li>SUM/AVERAGE totals</li><li>Actual vs budget vs variance</li><li>A chart of spending by category</li></ul>',
    dashboard: '<h4>📥 Template: Excel Dashboard</h4><ul><li>Clean data table → PivotTables</li><li>PivotCharts + Slicers for interactivity</li><li>KPI cells (targets vs actuals)</li><li>One-page summary layout</li></ul>',
    letter: '<h4>📥 Template: Business Letter</h4><ul><li>Sender &amp; date</li><li>Recipient &amp; salutation</li><li>Clear purpose &amp; body</li><li>Polite close &amp; signature</li></ul>'
  };
  function templateFor(name) {
    if (/Resumes? & CVs|Cover Letters|Resume Writing/i.test(name)) return TEMPLATES.resume;
    if (/Meeting Minutes/i.test(name)) return TEMPLATES.minutes;
    if (/Invoices|Budget/i.test(name)) return TEMPLATES.budget;
    if (/Dashboard Creation|Dashboards|Interactive Excel Dashboard/i.test(name)) return TEMPLATES.dashboard;
    if (/Business Letters/i.test(name)) return TEMPLATES.letter;
    return '';
  }
  function extraFor(skill, name) {
    var tpl = templateFor(name);
    if (tpl) return '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>';
    if (/word|excel|advexcel|ppt|outlook|onenote|teams|onedrive|copilot|collab|docs|data|projects/.test(skill)) return FILES;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'Microsoft Office skills';
    var focus = position % 2 ? 'hands-on practice in the app and real office examples' : 'understanding the feature, using it step by step and applying it to real work';
    var extra = extraFor(skill, name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Microsoft Office · ' + esc(moduleTitle) + '</strong><span>Office + Copilot</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the steps, then complete the two hands-on exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> does and when to use it.</li>' +
      '<li>Follow the step-by-step method in the Microsoft app.</li>' +
      '<li>Do it yourself on a real document/workbook and save your work.</li></ul>' +
      (extra || '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real task for your school, work or business.</div>') +
      '<h4>Hands-on exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Follow the steps for <em>' + esc(name) + '</em> on your own computer.</li>' +
      '<li><strong>Exercise 2:</strong> Repeat it on a real task and note one shortcut or tip you learned.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to Microsoft Office mastery (and MOS certification).</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on Office project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Build it in the Microsoft apps and save it to your Office portfolio (OneDrive).</p>' +
      '<h4>What to do</h4><ol><li>Plan the document/workbook/presentation and its purpose.</li><li>Build it using the features you have learned (and Copilot where helpful).</li><li>Format it professionally, proofread, and add it to your portfolio.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : FILES) +
      '<p><strong>Deliverable:</strong> A finished, professional Office file added to your portfolio.</p></div>';
  }

  function topicQuestions(num,name){
    var bank=window.TIH_OFFICE_QUESTIONS,key='M'+num+':'+name;
    if(!bank||!bank.topics[key]||bank.topics[key].length!==4)throw new Error('Incomplete Office topic '+key);
    return bank.topics[key];
  }
  function cloneQ(q){return {q:q.q,opts:q.opts.slice(),correct:q.correct,exp:q.exp};}
  function practiceQuiz(key,name,num){return {title:'Practice: '+name,moduleNum:num,questions:topicQuestions(num,name).slice(0,3).map(cloneQ)};}
  function assessmentQuiz(key,name,count,num){return {title:name,moduleNum:num,questionCount:count,questions:[]};}
  function assessmentKey(name) {
    if (/Word/i.test(name)) return 'word';
    if (/Excel/i.test(name)) return 'excel';
    if (/PowerPoint/i.test(name)) return 'ppt';
    if (/Outlook/i.test(name)) return 'outlook';
    if (/Teams/i.test(name)) return 'teams';
    if (/Copilot/i.test(name)) return 'copilot';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var key = skill;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'off-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15, num);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Complete the real-world Office projects in Module 18 (10 projects).</li><li>Complete the capstone in Module 19 and submit your Office portfolio.</li><li>Pass the app assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'off-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count, num);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'off-m' + num + '-a' + flat;
        quizzes[qk] = assessmentQuiz(key, name, 8, num);
        lessons.push({ t: '📝 ' + name, d: '8 questions', isQuiz: true, quizId: qk });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Answer this module assessment, then review each explanation to check your understanding.</p></div>';
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
      var pqid = 'off-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name, num);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two hands-on exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete Microsoft Office Mastery Professional Certificate',
    shortDesc: 'A full 20-module program from complete beginner to advanced Microsoft Office professional: Windows & files, Word, Excel (essentials & advanced), PowerPoint, Outlook, OneNote, Teams, OneDrive, Microsoft Copilot, collaboration, business documentation, data analysis, productivity, workplace communication, 10 real-world projects, a capstone and a Certificate of Completion.',
    category: 'Microsoft Office',
    icon: ex.icon || '💼',
    gradient: ex.gradient || 'linear-gradient(135deg,#d97706,#f59e0b)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH learners',
    duration: '160h+',
    level: 'Beginner → Advanced',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$120',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-OFFICE-0001',
    learn: [
      'Manage Windows and files, and use OneDrive cloud storage',
      'Create professional documents in Word and analyse data in Excel',
      'Master advanced Excel: lookups, pivot tables and dashboards',
      'Build presentations in PowerPoint and manage email/calendar in Outlook',
      'Collaborate with OneNote and Teams and use Microsoft Copilot (AI)',
      'Produce business documents and reports, and build an Office portfolio'
    ],
    requirements: [
      'No prior experience required — we start from the basics',
      'A computer with Microsoft Office (or Microsoft 365)',
      'Willingness to practise each feature hands-on',
      'Some advanced, cloud and AI features depend on the app version, license and organization settings'
    ],
    about: [
      'This is the complete TIH Microsoft Office Mastery Professional Certificate, rebuilt into twenty modules that take you from complete beginner to advanced Office professional.',
      'Every teaching lesson has a video and written notes with worked examples and practice tasks; ten real-world projects and a capstone build an Office portfolio for professional and administrative roles.',
      'Software & tools: Microsoft Windows, Word, Excel, PowerPoint, Outlook, OneNote, Teams, OneDrive, Copilot, Forms, Planner, To Do, Edge and Adobe Acrobat Reader. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion, with preparation relevant to MOS skills. Microsoft certification has its own separate official assessment requirements.'
    ],
    modules: modules,
    quizzes: quizzes,
    _officeFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  window.tihApplyOfficeTopicQuizzes = function () {
    var bank = window.TIH_OFFICE_QUESTIONS, course = COURSES_DB.office;
    if (!bank || !course) throw new Error('Missing Office question bank');
    var reserves = [], projects = [];
    course.modules.forEach(function (m, mi) {
      m.lessons.forEach(function (l) {
        if (!l.isQuiz) return;
        var quiz = course.quizzes[l.quizId];
        if (quiz.title.indexOf('Practice: ') !== 0) return;
        var rows = topicQuestions(mi+1, quiz.title.slice(10));
        quiz.questions = rows.slice(0,3).map(cloneQ);
        quiz.moduleNum = mi+1;
        reserves.push(rows[3]);
      });
    });
    projects = bank.exams.slice();
    var used = {};
    function take(pool, count) {
      var buckets = {}, out = [], nums = [];
      pool.forEach(function(q) { if (used[q.q]) return; if(!buckets[q.module]) { buckets[q.module]=[]; nums.push(q.module); } buckets[q.module].push(q); });
      nums.sort(function(a,b){return a-b;});
      var changed = true;
      while(out.length < count && changed) {
        changed = false;
        nums.forEach(function(n) {
          if(out.length >= count || !buckets[n].length) return;
          var q = buckets[n].shift(); used[q.q]=true; out.push(cloneQ(q)); changed=true;
        });
      }
      if(out.length !== count) throw new Error('Exhausted Office assessment pool');
      return out;
    }
    var papers = Object.keys(course.quizzes).map(function(k){return course.quizzes[k];}).filter(function(q){return q.title.indexOf('Practice: ')!==0;});
    var subjects={'File Management Assessment':[2],'Microsoft Word Assessment':[3],'Microsoft Excel Assessment':[4,5],'Microsoft PowerPoint Assessment':[6],'Outlook Assessment':[7],'Teams Assessment':[9],'Copilot Assessment':[11]};
    papers.filter(function(q){return !!subjects[q.title];}).forEach(function(q){
      var nums=subjects[q.title], extra=projects.filter(function(r){return nums.indexOf(r.module)>=0;});
      var count=q.questionCount-extra.length;
      q.questions=take(reserves.filter(function(r){return nums.indexOf(r.module)>=0;}),count).concat(take(extra,extra.length));
    });
    ['Midterm Examination','Final Examination','Capstone Project Evaluation','Portfolio Review','Graduation Assessment'].forEach(function(title){
      var q=papers.filter(function(q){return q.title===title;})[0];
      if(!q)throw new Error('Missing Office assessment '+title);
      var pool= title==='Capstone Project Evaluation'||title==='Portfolio Review' ? projects.filter(function(r){return r.module>=18;}) : reserves.filter(function(r){return r.module<=(title==='Midterm Examination'?10:17);});
      // Keep a question from every first-half module for the final's coverage.
      if(title==='Midterm Examination'){
        var protectedItems={};
        for(var m=1;m<=10;m++){
          var remaining=reserves.filter(function(r){return r.module===m&&!used[r.q];});
          if(!remaining.length)throw new Error('No final reserve for module '+m);
          protectedItems[remaining[remaining.length-1].q]=true;
        }
        pool=pool.filter(function(r){return !protectedItems[r.q];});
      }
      q.questions=take(pool,q.questionCount);
    });
  };
  window.tihApplyOfficeTopicQuizzes();

  if (typeof console !== 'undefined' && console.log) {
    console.log('[OFFICE] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
