/* TIH Complete Web Development (Full-Stack) Program curriculum.
   Rebuilds COURSES_DB.webdev into the full 20-module program: internet
   fundamentals, HTML5, CSS3, JavaScript, Git, UI/UX, React, Node/Express,
   databases, auth & security, APIs, deployment, testing, AI tools, SEO,
   freelancing, 10 real-world apps, an industry capstone and a graduation
   module with exams and a Certificate of Completion. Every content lesson has
   a video + printable notes (with code snippets); project lessons carry briefs
   and downloadable starter code. Modelled on entrepreneurship-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.webdev || COURSES_DB.webdev._webdevFullBuilt) return;

  // Each ID below is a well-known, topic-matched YouTube tutorial for that skill
  // (freeCodeCamp / Traversy / Net Ninja / Web Dev Simplified full courses).
  var V = {
    orientation: 'dzRSvcJ_qZs', // Web Development Explained: Frontend/Backend/Full-Stack
    internet: 'zN8YNNHcaZc',    // How does the internet work? (Full Course)
    internet2: '7_LPdttKXPc',   // How the Internet Works in 5 Minutes
    html: 'pQN-pnXPaVg',   // freeCodeCamp — HTML Full Course
    css: 'OXGznpKZ_sA',    // freeCodeCamp — CSS Full Course
    js: 'PkZNo7MFNFg',     // freeCodeCamp — JavaScript Full Course
    git: 'RGOj5yH7evk',    // freeCodeCamp — Git & GitHub for Beginners
    git2: 'SWYqp7iY_Tc',   // Traversy — Git & GitHub Crash Course
    uiux: 'jwCmIBJ8Jtc',   // freeCodeCamp — Figma UI Design Course for Beginners
    react: 'x4rFhThSX04',  // freeCodeCamp — Learn React JS Full Tutorial
    react2: 'TtPXvEcE11E', // React Full Course — Beginner to Pro
    node: 'Oe421EPjeBE',   // freeCodeCamp — Node.js & Express Full Course
    db: 'Www6cTUymCY',     // MongoDB Tutorial for Beginners — Full Course
    auth: 'SnoAwLP1a-0',   // Net Ninja — Node Auth (JWT)
    auth2: 'mbsmsi7l3r4',  // Web Dev Simplified — JWT Authentication
    api: 'zmIv9fpg9u0',    // REST API in Node & Express (CRUD)
    api2: 'l8WPWK9mS5M',   // Build a REST API with Node & Express
    deploy: 'NBrQp6-721c', // How To Deploy a Website (to the internet)
    deploy2: 'Dt9BVYjBLpg',// How To Deploy a Website on Netlify
    testing: 'H0XScE08hy8',// Debugging JavaScript — Chrome DevTools 101
    testing2: 'Y3u2groOG-A',// Chrome DevTools Complete Course
    ai: '2pFPJYdPM7Q',     // Introduction to GitHub Copilot — Tutorial for Beginners
    ai2: 'n0NlxUyA7FI',    // Getting started with GitHub Copilot
    seo: 'xsVTqzratPs',    // Complete SEO Course for Beginners (Ahrefs)
    seo2: 'kaWZXRts9ls',   // SEO Full Course for Beginners
    career: 'TCgKGPr0trA', // How to get clients as a freelance web developer
    career2: 'UFu7Ydow3TA' // Build a Freelance Portfolio Website (beginners)
  };
  // Every module now has its own on-topic video, so learners see video from
  // Module 1 onward. Modules with two ids alternate them across their lessons.
  var VIDEOS = {
    orientation: [V.orientation], internet: [V.internet, V.internet2],
    html: [V.html], css: [V.css], js: [V.js], git: [V.git, V.git2],
    uiux: [V.uiux], react: [V.react, V.react2], node: [V.node], db: [V.db],
    auth: [V.auth, V.auth2], api: [V.api, V.api2],
    deploy: [V.deploy, V.deploy2], testing: [V.testing, V.testing2],
    ai: [V.ai, V.ai2], seo: [V.seo, V.seo2], career: [V.career, V.career2],
    projects: [V.react, V.html], capstone: [V.react, V.node]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Web Development?', 'Frontend vs Backend vs Full Stack', 'How the Internet Works', 'Setting Up Your Development Environment', 'Installing VS Code', 'Installing Git', 'Installing Node.js', 'Course Roadmap', 'Final Capstone Project']],
    [2, 'Internet Fundamentals', '🌐', 'internet', 'content', ['How Websites Work', 'Domain Names', 'Web Hosting', 'HTTP & HTTPS', 'Web Browsers', 'Client-Server Architecture', 'DNS', 'APIs Explained', 'JSON Basics', 'Developer Tools']],
    [3, 'HTML5', '📄', 'html', 'content', ['Introduction to HTML', 'HTML Document Structure', 'Headings & Paragraphs', 'Links', 'Images', 'Lists', 'Tables', 'Forms', 'Input Types', 'Semantic HTML', 'Audio & Video', 'Iframes', 'HTML Best Practices', 'Accessibility Basics', 'HTML Project']],
    [4, 'CSS3', '🎨', 'css', 'content', ['Introduction to CSS', 'Selectors', 'Colors', 'Typography', 'Backgrounds', 'Borders', 'Margins & Padding', 'Box Model', 'Display', 'Positioning', 'Flexbox', 'CSS Grid', 'Animations', 'Transitions', 'Responsive Design', 'Media Queries', 'CSS Variables', 'Bootstrap', 'Tailwind CSS', 'CSS Project']],
    [5, 'JavaScript Fundamentals', '📜', 'js', 'content', ['Introduction to JavaScript', 'Variables', 'Data Types', 'Operators', 'Functions', 'Arrays', 'Objects', 'Loops', 'Conditions', 'Events', 'DOM Manipulation', 'ES6 Features', 'Modules', 'Error Handling', 'Local Storage', 'Fetch API', 'Async & Await', 'Promises', 'JavaScript Project']],
    [6, 'Version Control', '🔀', 'git', 'content', ['Git Basics', 'GitHub', 'Branches', 'Merging', 'Pull Requests', 'Collaboration', 'GitHub Pages']],
    [7, 'UI/UX Design', '🎯', 'uiux', 'content', ['UI Principles', 'UX Basics', 'Wireframing', 'Figma', 'Color Theory', 'Typography', 'Responsive Layouts', 'Accessibility']],
    [8, 'React.js', '⚛️', 'react', 'content', ['Introduction to React', 'JSX', 'Components', 'Props', 'State', 'Events', 'Forms', 'Hooks', 'React Router', 'API Integration', 'Context API', 'Project Structure', 'React Project']],
    [9, 'Backend Development (Node.js)', '🟢', 'node', 'content', ['Introduction to Node.js', 'npm', 'Modules', 'File System', 'HTTP Server', 'Environment Variables', 'Express.js', 'Routing', 'Middleware', 'REST APIs', 'Authentication Basics', 'File Uploads', 'Backend Project']],
    [10, 'Databases', '🗄️', 'db', 'content', ['Database Basics', 'SQL vs NoSQL', 'MongoDB', 'CRUD Operations', 'Mongoose', 'MySQL Basics', 'Database Relationships', 'Database Design', 'Connecting Frontend & Backend']],
    [11, 'Authentication & Security', '🔐', 'auth', 'content', ['User Registration', 'Login System', 'Password Hashing', 'JWT Authentication', 'Session Authentication', 'Authorization', 'Security Best Practices', 'Preventing Common Attacks']],
    [12, 'APIs', '🔌', 'api', 'content', ['REST API', 'CRUD API', 'API Testing', 'Postman', 'Third-Party APIs', 'API Documentation', 'Building Your Own API']],
    [13, 'Deployment', '🚀', 'deploy', 'content', ['Preparing for Production', 'Domain Names', 'Hosting Websites', 'Deploying Frontend', 'Deploying Backend', 'Database Hosting', 'SSL Certificates', 'CI/CD Basics']],
    [14, 'Testing & Debugging', '🧪', 'testing', 'content', ['Browser DevTools', 'Debugging JavaScript', 'Error Logging', 'Unit Testing', 'API Testing', 'Performance Optimization', 'Website Auditing']],
    [15, 'AI Tools for Developers', '🤖', 'ai', 'content', ['Using ChatGPT for Coding', 'GitHub Copilot', 'AI Debugging', 'AI Code Review', 'AI Website Generation', 'AI Productivity Tips']],
    [16, 'SEO & Performance', '⚡', 'seo', 'content', ['SEO Fundamentals', 'Technical SEO', 'Page Speed Optimization', 'Image Optimization', 'Lazy Loading', 'Core Web Vitals', 'Structured Data']],
    [17, 'Freelancing & Career Development', '💼', 'career', 'content', ['Building a Portfolio', 'Creating a Resume', 'GitHub Portfolio', 'LinkedIn Profile', 'Freelancing Platforms', 'Client Communication', 'Pricing Your Services', 'Interview Preparation']],
    [18, 'Real-World Projects', '🏗️', 'projects', 'projects', ['Personal Portfolio Website', 'Business Website', 'School Management System', 'E-commerce Website', 'Blog Website', 'Restaurant Website', 'Hotel Booking Website', 'Learning Management System', 'Chat Application', 'Admin Dashboard']],
    [19, 'Capstone Project', '🎓', 'capstone', 'projects', ['Project Planning', 'UI Design', 'Frontend Development', 'Backend Development', 'Database Integration', 'Testing', 'Deployment', 'Final Presentation']],
    [20, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['HTML Assessment', 'CSS Assessment', 'JavaScript Assessment', 'React Assessment', 'Backend Assessment', 'Database Assessment', 'API Assessment', 'Midterm Examination', 'Final Examination', 'Full-Stack Capstone Evaluation', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment|Evaluation)(?:\s+\d+)?$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'web development foundations', internet: 'how the web works', html: 'HTML5', css: 'CSS3', js: 'JavaScript', git: 'Git & version control', uiux: 'UI/UX design', react: 'React.js', node: 'Node.js & Express backend', db: 'databases', auth: 'authentication & security', api: 'building APIs', deploy: 'deployment', testing: 'testing & debugging', ai: 'AI developer tools', seo: 'SEO & performance', career: 'freelancing & career', projects: 'building real applications', capstone: 'your capstone project', assessment: 'your skills' };

  // Downloadable starter code snippets for representative lessons.
  function codeFor(name) {
    var C = null;
    if (/Introduction to HTML|HTML Document Structure/i.test(name)) C = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n</body>\n</html>';
    else if (/Box Model|Margins & Padding/i.test(name)) C = '.card {\n  margin: 16px;\n  border: 1px solid #ccc;\n  padding: 16px;\n  box-sizing: border-box;\n}';
    else if (/Flexbox/i.test(name)) C = '.row {\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n}';
    else if (/^Variables$|Data Types/i.test(name)) C = 'const name = "TIH";\nlet count = 0;\ncount = count + 1;\nconsole.log(name, count);';
    else if (/^Functions$/i.test(name)) C = 'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3)); // 5';
    else if (/Fetch API|REST API|CRUD API/i.test(name)) C = "fetch('/api/items')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));";
    else if (/Introduction to React|JSX|Components/i.test(name)) C = 'function Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\nexport default Welcome;';
    else if (/Express\.js|HTTP Server|Routing/i.test(name)) C = "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);";
    else if (/CRUD Operations|Mongoose/i.test(name)) C = "const Item = mongoose.model('Item', { name: String });\nawait Item.create({ name: 'Book' });\nconst all = await Item.find();";
    if (!C) return '';
    return '<h4>💾 Starter code</h4><pre style="background:#0f172a;color:#e2e8f0;padding:.9rem;border-radius:8px;overflow:auto;font-size:.82rem;line-height:1.5"><code>' + esc(C) + '</code></pre><p>Copy this snippet and Print → Save as PDF to keep it with your notes.</p>';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'web development skills';
    var focus = position % 2 ? 'hands-on coding, real examples and clean, working code' : 'understanding the concept, building it step by step and debugging your result';
    var code = codeFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Web Development · ' + esc(moduleTitle) + '</strong><span>Build real websites</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two coding exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and when developers use it.</li>' +
      '<li>See a working example and the syntax or pattern involved.</li>' +
      '<li>Type it yourself — never just read code — and run it to confirm it works.</li></ul>' +
      (code ? '<div class="study-callout">' + code + '</div>' : '') +
      '<h4>Coding exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Recreate the example for <em>' + esc(name) + '</em> from scratch and run it.</li>' +
      '<li><strong>Exercise 2:</strong> Change one thing (a value, a tag, a function) and predict, then check, the result.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy of these notes and code.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your journey to becoming a full-stack developer.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on build</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical build. Follow the video and notes, then create <em>' + esc(name) + '</em> yourself and push it to GitHub for your portfolio.</p>' +
      '<h4>What to build</h4><ol><li>Plan the pages/features and the data you need.</li><li>Build the frontend, then wire up any backend/data.</li><li>Test on mobile and desktop, then deploy and add the live link to your portfolio.</li></ol>' +
      '<div class="study-callout"><strong>Deliverable:</strong> A working, deployed project with its source code on GitHub — a portfolio-ready application.</div>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep the brief, and commit your source code to your own repository.</p></div>';
  }

  function cloneQ(q) { return {q:q.q, opts:q.opts.slice(), correct:q.correct, exp:q.exp}; }
  function topicQuestions(num, name) {
    var bank = window.TIH_WEBDEV_QUESTIONS;
    var key = 'M' + num + ':' + name;
    if (!bank || !bank.topics[key] || bank.topics[key].length !== 4) throw new Error('Incomplete Web topic: ' + key);
    return bank.topics[key];
  }
  function practiceQuiz(num, name) {
    return {title:'Practice: ' + name, moduleNum:num, questions:topicQuestions(num,name).slice(0,3).map(cloneQ)};
  }
  function assessmentQuiz(skill, name, count) { return {title:name, moduleNum:20, questions:[], questionCount:count}; }
  function assessmentSkill(name) {
    if (/HTML/i.test(name)) return 'html';
    if (/CSS/i.test(name)) return 'css';
    if (/JavaScript/i.test(name)) return 'js';
    if (/React/i.test(name)) return 'react';
    if (/Backend/i.test(name)) return 'node';
    if (/Database/i.test(name)) return 'db';
    if (/API/i.test(name)) return 'api';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || null;   // null → reading lessons (no video)
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'web-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Build the projects in Module 18 (10 portfolio-ready applications).</li><li>Complete the industry capstone in Module 19 and present it.</li><li>Pass the skill assessments, the Midterm and Final Examinations and the Full-Stack Capstone Evaluation.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment' && isAssessment(name)) {
        var askill = assessmentSkill(name);
        var big = /Examination|Exam|Evaluation/i.test(name);
        var count = big ? (/Final|Capstone/i.test(name) ? 20 : 15) : 8;
        var aid = 'web-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(askill, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (type === 'projects' || isProjectName(name)) {
        idx += 1;
        var pv = (pool && pool.length) ? pool[idx % pool.length] : null;
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: pv });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      // Content lesson: video (when the module has an on-topic one) or a reading
      // lesson (no video) + note + paired practice quiz.
      idx += 1;
      var v = (pool && pool.length) ? pool[idx % pool.length] : null;
      lessons.push({ t: num + '.' + idx + ' ' + name, d: v ? 'Video Lesson' : 'Reading Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; if (v) videoCount += 1;
      var pqid = 'web-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(num, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes, type out the code and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB.webdev;
  COURSES_DB.webdev = {
    id: 'webdev',
    title: 'Complete Full-Stack Web Development Program',
    shortDesc: 'A full 20-module program from beginner to job-ready full-stack developer: HTML5, CSS3, JavaScript, Git, UI/UX, React, Node/Express, databases, auth & security, APIs, deployment, testing, AI tools, SEO, freelancing, 10 real-world apps, an industry capstone and a Certificate of Completion.',
    category: 'Web Development',
    icon: ex.icon || '🌐',
    gradient: ex.gradient || 'linear-gradient(135deg,#0284c7,#0ea5e9)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH developers',
    duration: '160h+',
    level: 'Beginner → Advanced',
    price: '$20',
    origPrice: ex.origPrice || '$200',
    isFree: false,
    badge: 'premium',
    certId: 'TIH-2026-WEB-0001',
    learn: [
      'Build responsive websites with HTML5, CSS3 and modern JavaScript',
      'Use Git/GitHub and apply UI/UX design principles',
      'Build interactive frontends with React (components, hooks, routing)',
      'Build backends and REST APIs with Node.js, Express and databases',
      'Add authentication, security, testing, deployment and CI/CD',
      'Use AI dev tools, apply SEO, and build a portfolio to get hired or freelance'
    ],
    requirements: [
      'A computer with internet access',
      'No prior coding experience required — we start from the basics',
      'Willingness to type out and run the code in every lesson'
    ],
    about: [
      'This is the complete TIH Full-Stack Web Development Program, rebuilt into twenty modules that take you from your first line of HTML to deploying full-stack applications.',
      'Every content lesson has a video and printable notes with code snippets; ten real-world applications and an industry-level capstone build your portfolio, and you learn Git, testing, deployment, security, AI tools and SEO along the way.',
      'You finish with a portfolio of deployed projects and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _webdevFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.webdev = notes;

  window.tihApplyWebdevTopicQuizzes = function () {
    var bank = window.TIH_WEBDEV_QUESTIONS, course = COURSES_DB.webdev;
    if (!bank || !course) throw new Error('Missing Web question bank');
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
    bank.exams.forEach(function (q) {
      if (q.module === 10 || q.module === 12) reserves.push(q);
      else projects.push(q);
    });
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
      if(out.length !== count) throw new Error('Exhausted Web assessment pool');
      return out;
    }
    var papers = Object.keys(course.quizzes).map(function(k){return course.quizzes[k];}).filter(function(q){return q.title.indexOf('Practice: ')!==0;});
    var subjects = {'HTML Assessment':[3], 'CSS Assessment':[4], 'JavaScript Assessment':[5], 'React Assessment':[8], 'Backend Assessment':[9], 'Database Assessment':[10], 'API Assessment':[12]};
    papers.filter(function(q){return !!subjects[q.title];}).forEach(function(q) {
      q.questions = take(reserves.filter(function(r){return subjects[q.title].indexOf(r.module)>=0;}), q.questionCount);
    });
    ['Midterm Examination','Final Examination','Full-Stack Capstone Evaluation','Graduation Assessment'].forEach(function(title) {
      var q = papers.filter(function(q){return q.title===title;})[0];
      if(!q) throw new Error('Missing Web assessment '+title);
      var pool = title==='Full-Stack Capstone Evaluation' ? projects : reserves.filter(function(r){return r.module <= (title==='Midterm Examination' ? 10 : 17);});
      q.questions=take(pool,q.questionCount);
    });
  };
  window.tihApplyWebdevTopicQuizzes();


  if (typeof console !== 'undefined' && console.log) {
    console.log('[WEB] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
