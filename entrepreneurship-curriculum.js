/* TIH Complete Entrepreneurship & Startup Launch Program curriculum.
   Rebuilds COURSES_DB.entrepreneurship into the full 20-module program:
   mindset, ideas, market research, business models, product, branding &
   marketing, sales, finance, funding, legal, operations, HR, technology & AI,
   communication, business planning, launch, growth, practical projects and a
   graduation module with exams and a Certificate of Completion. Every content
   lesson has a video + printable notes; project lessons carry briefs and
   downloadable templates (Business Model Canvas, Business Plan, Financial
   Model, Pitch Deck, Marketing Plan). Modelled on sat-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.entrepreneurship || COURSES_DB.entrepreneurship._entFullBuilt) return;

  // Vetted entrepreneurship videos reused from the core course, grouped by theme.
  var V = ['4hshq-o0vSI', 'Th8JoIan4dg', 'KCEWgq8S9gM', 'ReM1uqmVfP0', 'XK9XYa5-MCw', 'fj6zbwAXpzE', 'Cw58F0k8BDg', '7Ljc6NoNg6M', 'Tk-RdCFSrKU', 'UWqzT95Lkno', '8_6uU6KgexE', 'HL80lXafRL0', 'hZI83oKyDq0', 'hFJQjlMEcqk', 'Wzwpou8d7v4', '4OO3MXzqNII', '9B-gyOi8CZs', '71TriLlszpU'];
  var VIDEOS = {
    orientation: ['UEngvxZ11sw'],
    mindset: ['kQcJEFPbabs'],
    ideas: ['9jIbsTLyC0c'],
    research: ['gfnxXtV8P4U'],
    model: ['QoAOzMTLP5s'],
    product: ['V0tIpLcEoLo'],
    marketing: ['tvYDYtQhreo'],
    sales: ['Ak53spL0e-A'],
    finance: ['cSuH88mDAFs'],
    funding: ['xCeiGfIvQkA'],
    legal: ['spbmT61D6Bk'],
    operations: ['DEuzzLled6k'],
    hr: ['4YRchaXY2-M'],
    tech: ['GUQNQnJrabk'],
    communication: ['10YgTqd9M9Y'],
    planning: ['yf59-oV-4Bw'],
    launch: ['EBFWu2ze12Q'],
    growth: ['bu0WBMavBgE'],
    projects: ['Ri0Pe1Y6lwM'],
    assessment: ['Ri0Pe1Y6lwM']
  };

  // [moduleNum, title, icon, skillKey, [lesson names]]
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', ['Welcome to the Program', 'How to Study This Course', 'What is Entrepreneurship?', 'What is a Startup?', 'Entrepreneur vs. Business Owner', 'Types of Entrepreneurs', 'Startup Success Stories', 'Course Roadmap', 'Final Capstone Project']],
    [2, 'Entrepreneurial Mindset', '🧠', 'mindset', ['Developing an Entrepreneurial Mindset', 'Creativity and Innovation', 'Identifying Opportunities', 'Solving Real Problems', 'Growth Mindset', 'Leadership Skills', 'Decision Making', 'Critical Thinking', 'Time Management', 'Personal Productivity']],
    [3, 'Idea Generation & Validation', '💡', 'ideas', ['Finding Business Ideas', 'Problem Identification', 'Brainstorming Techniques', 'Market Gap Analysis', 'Design Thinking', 'Customer Discovery', 'Customer Interviews', 'Idea Validation', 'Product-Market Fit', 'Selecting the Best Business Idea']],
    [4, 'Market Research', '🔎', 'research', ['Introduction to Market Research', 'Primary Research', 'Secondary Research', 'Customer Personas', 'Target Market', 'Industry Analysis', 'Competitor Analysis', 'SWOT Analysis', 'Market Trends', 'Research Report']],
    [5, 'Business Models', '🧩', 'model', ['Business Model Basics', 'Business Model Canvas', 'Value Proposition', 'Customer Segments', 'Customer Relationships', 'Channels', 'Revenue Streams', 'Cost Structure', 'Key Resources', 'Key Activities', 'Key Partners', 'Business Model Review']],
    [6, 'Product Development', '🛠️', 'product', ['Product Design', 'Service Design', 'Minimum Viable Product (MVP)', 'Product Testing', 'Gathering Customer Feedback', 'Product Improvements', 'Quality Control', 'Product Launch Planning']],
    [7, 'Branding & Marketing', '📣', 'marketing', ['Branding Fundamentals', 'Choosing a Business Name', 'Logo Design', 'Brand Identity', 'Marketing Fundamentals', 'Digital Marketing', 'Social Media Marketing', 'Email Marketing', 'Content Marketing', 'Search Engine Optimization (SEO)', 'Advertising', 'Customer Acquisition']],
    [8, 'Sales & Customer Service', '🤝', 'sales', ['Sales Fundamentals', 'Sales Funnel', 'Pricing Strategies', 'Negotiation Skills', 'Customer Service', 'Customer Retention', 'CRM Basics', 'Closing Sales']],
    [9, 'Business Finance', '💰', 'finance', ['Financial Literacy', 'Startup Costs', 'Budgeting', 'Bookkeeping', 'Cash Flow', 'Profit & Loss', 'Balance Sheet', 'Break-even Analysis', 'Pricing', 'Financial Forecasting']],
    [10, 'Funding Your Startup', '🏦', 'funding', ['Bootstrapping', 'Friends & Family Funding', 'Angel Investors', 'Venture Capital', 'Crowdfunding', 'Business Loans', 'Government Grants', 'Investor Pitch Preparation']],
    [11, 'Legal & Business Registration', '⚖️', 'legal', ['Choosing a Business Structure', 'Sole Proprietorship', 'Partnership', 'Corporation', 'LLC', 'Business Registration', 'Licenses & Permits', 'Taxes', 'Intellectual Property', 'Trademarks & Copyrights', 'Contracts']],
    [12, 'Operations Management', '⚙️', 'operations', ['Business Operations', 'Supply Chain', 'Inventory Management', 'Procurement', 'Business Systems', 'Standard Operating Procedures (SOPs)', 'Risk Management', 'Business Continuity']],
    [13, 'Human Resource Management', '👥', 'hr', ['Hiring Employees', 'Recruitment', 'Team Building', 'Leadership', 'Company Culture', 'Employee Performance', 'Payroll Basics', 'Conflict Resolution']],
    [14, 'Technology & AI for Entrepreneurs', '🤖', 'tech', ['AI in Business', 'ChatGPT for Entrepreneurs', 'Business Automation', 'Website Creation', 'E-commerce', 'Online Payment Systems', 'CRM Software', 'Productivity Tools', 'Cybersecurity Basics']],
    [15, 'Business Communication', '💬', 'communication', ['Professional Communication', 'Business Writing', 'Email Communication', 'Proposal Writing', 'Presentation Skills', 'Networking', 'Public Speaking', 'Negotiation']],
    [16, 'Business Planning', '📝', 'planning', ['Executive Summary', 'Company Description', 'Market Analysis', 'Products & Services', 'Marketing Plan', 'Operations Plan', 'Financial Plan', 'Risk Analysis', 'Exit Strategy', 'Writing a Complete Business Plan']],
    [17, 'Startup Launch', '🚀', 'launch', ['Launch Strategy', 'Product Launch', 'Marketing Campaign', 'Sales Launch', 'Customer Support', 'Measuring Success', 'Growth Planning', 'Scaling the Business']],
    [18, 'Business Growth', '📈', 'growth', ['Scaling Operations', 'Expansion Strategies', 'Franchising', 'Partnerships', 'International Expansion', 'Innovation Management', 'Business Sustainability', 'Exit Planning']],
    [19, 'Practical Projects', '🧪', 'projects', ['Business Idea Assignment', 'Customer Interview Assignment', 'Market Research Project', 'Business Model Canvas Project', 'Branding Project', 'Financial Plan Project', 'Business Plan Project', 'Pitch Deck Project']],
    [20, 'Assessments & Graduation', '🎓', 'assessment', ['Entrepreneurship Quiz', 'Marketing Quiz', 'Finance Quiz', 'Legal Quiz', 'Midterm Examination', 'Final Examination', 'Startup Pitch Competition', 'Capstone Business Plan Presentation', 'Graduation Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }

  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)(?:\s+\d+)?$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Competition)$/.test(name.trim()); }

  var skillLabel = { orientation: 'entrepreneurship foundations', mindset: 'the entrepreneurial mindset', ideas: 'idea generation and validation', research: 'market research', model: 'business modelling', product: 'product development', marketing: 'branding and marketing', sales: 'sales and customer service', finance: 'business finance', funding: 'startup funding', legal: 'legal and registration', operations: 'operations management', hr: 'human resource management', tech: 'technology and AI for business', communication: 'business communication', planning: 'business planning', launch: 'launching a startup', growth: 'scaling and growth', projects: 'applied startup projects', assessment: 'your knowledge' };

  // Downloadable, printable templates injected into relevant lessons.
  var TEMPLATES = {
    canvas: '<h4>📥 Template: Business Model Canvas</h4><p>Copy this canvas into your notebook or Print → Save as PDF, then fill each block for your own idea:</p><ol><li><strong>Customer Segments</strong> – who you serve</li><li><strong>Value Proposition</strong> – the problem you solve</li><li><strong>Channels</strong> – how you reach customers</li><li><strong>Customer Relationships</strong> – how you keep them</li><li><strong>Revenue Streams</strong> – how you earn</li><li><strong>Key Resources</strong> – what you need</li><li><strong>Key Activities</strong> – what you do</li><li><strong>Key Partners</strong> – who helps you</li><li><strong>Cost Structure</strong> – what you spend</li></ol>',
    plan: '<h4>📥 Template: Business Plan</h4><p>Structure your complete business plan with these sections (Print → Save as PDF to keep the template):</p><ol><li>Executive Summary</li><li>Company Description</li><li>Market Analysis</li><li>Products &amp; Services</li><li>Marketing &amp; Sales Plan</li><li>Operations Plan</li><li>Management &amp; Team</li><li>Financial Plan &amp; Projections</li><li>Risk Analysis</li><li>Appendix</li></ol>',
    financial: '<h4>📥 Template: Financial Model</h4><p>Build a simple 12-month financial model with these rows:</p><ul><li><strong>Revenue</strong> (units × price)</li><li><strong>Cost of Goods Sold</strong></li><li><strong>Gross Profit</strong> (Revenue − COGS)</li><li><strong>Operating Expenses</strong> (rent, salaries, marketing)</li><li><strong>Net Profit</strong> (Gross Profit − Expenses)</li><li><strong>Cash Flow</strong> (opening + net + funding)</li><li><strong>Break-even</strong> (Fixed Costs ÷ contribution margin)</li></ul>',
    pitch: '<h4>📥 Template: Investor Pitch Deck</h4><p>A 10-slide investor-ready pitch deck:</p><ol><li>Problem</li><li>Solution</li><li>Market Size</li><li>Product</li><li>Business Model</li><li>Traction</li><li>Competition</li><li>Team</li><li>Financials &amp; Ask</li><li>Contact</li></ol>',
    marketing: '<h4>📥 Template: Marketing Plan</h4><p>Draft your marketing plan with:</p><ul><li><strong>Target audience</strong> &amp; personas</li><li><strong>Positioning</strong> &amp; key message</li><li><strong>Channels</strong> (social, email, content, SEO, ads)</li><li><strong>Budget</strong> &amp; calendar</li><li><strong>Goals</strong> &amp; KPIs (reach, leads, sales)</li></ul>'
  };
  function templateFor(name) {
    if (/Business Model Canvas/i.test(name)) return TEMPLATES.canvas;
    if (/Business Plan|Writing a Complete Business Plan/i.test(name)) return TEMPLATES.plan;
    if (/Financial Plan|Financial Forecasting|Financial Model/i.test(name)) return TEMPLATES.financial;
    if (/Pitch Deck|Investor Pitch Preparation|Pitch Competition/i.test(name)) return TEMPLATES.pitch;
    if (/Marketing Plan/i.test(name)) return TEMPLATES.marketing;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'business skills';
    var focus = position % 2 ? 'practical application, real examples and confident execution' : 'understanding the concept, planning your action and learning from results';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Entrepreneurship Program · ' + esc(moduleTitle) + '</strong><span>Build a real business</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two action steps before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand the core idea behind <em>' + esc(name) + '</em> and why it matters for founders.</li>' +
      '<li>See how successful startups apply it in the real world.</li>' +
      '<li>Apply it to your own business idea and note one decision it changes.</li></ul>' +
      '<h4>Action steps</h4><ol>' +
      '<li><strong>Step 1:</strong> Write how <em>' + esc(name) + '</em> applies to your business idea.</li>' +
      '<li><strong>Step 2:</strong> Take one concrete action this week and record the result.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a Liberian market example and share it with your cohort or mentor.</div>') +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your journey from idea to launched, growing business.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Complete it for your own business idea and save your work — these deliverables build directly into your final business plan and pitch.</p>' +
      '<h4>What to do</h4><ol><li>Follow the video and notes for the method.</li><li>Produce the deliverable for <em>' + esc(name) + '</em>.</li><li>Review it with a mentor or peer, then improve it.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A completed, written document you can add to your startup portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and any template offline.</p></div>';
  }

  // Question banks (general + theme-specific). Skills without a dedicated bank
  // fall back to BANK.general.
  function topicQuestions(num, name) {
    var bank = window.TIH_ENTREPRENEURSHIP_QUESTIONS, key = 'M'+num+':'+name;
    if(!bank || !bank.topics[key] || bank.topics[key].length!==4) throw new Error('Incomplete Entrepreneurship topic '+key);
    return bank.topics[key];
  }
  function cloneQ(q) {return {q:q.q,opts:q.opts.slice(),correct:q.correct,exp:q.exp};}
  function practiceQuiz(skill, name, num, quizId) {return {title:'Practice: '+name,moduleNum:num,questions:topicQuestions(num,name).slice(0,3).map(cloneQ)};}
  function assessmentQuiz(skill, name, count, num, quizId) {return {title:name,moduleNum:num,questionCount:count,questions:[]};}
  function assessmentSkill(name) {
    if (/Marketing/i.test(name)) return 'marketing';
    if (/Finance/i.test(name)) return 'finance';
    if (/Legal/i.test(name)) return 'legal';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], names = mod[4];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      // Final graduation assessment gates the certificate.
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'ent-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15, num, qid);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Graduation Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the core lessons in Modules 1–18.</li><li>Submit the practical projects in Module 19 (idea, interviews, market research, business model canvas, branding, financial plan, business plan, pitch deck).</li><li>Attempt the quizzes and the Midterm and Final Examinations.</li><li>Deliver your Startup Pitch and Capstone Business Plan Presentation.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var askill = (num === 20) ? assessmentSkill(name) : skill;
        var big = /Examination|Exam/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'ent-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(askill, name, count, num, aid);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'quiz') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isProjectName(name)) {
        idx += 1;
        var pv = pool[idx % pool.length];
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: pv });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      // Content lesson: video + note + paired practice quiz.
      idx += 1;
      var v = pool[idx % pool.length];
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video Lesson', v: v, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'ent-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(skill, name, num, pqid);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two action steps, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB.entrepreneurship;
  COURSES_DB.entrepreneurship = {
    id: 'entrepreneurship',
    title: 'Complete Entrepreneurship & Startup Launch Program',
    shortDesc: 'A full 20-module program that takes you from idea to launched, growing business: mindset, market research, business models, product, marketing, sales, finance, funding, legal, operations, HR, technology & AI, planning, launch, growth, 10 hands-on projects, a complete business plan, an investor pitch deck and a Certificate of Completion.',
    category: 'Entrepreneurship',
    icon: ex.icon || '💡',
    gradient: ex.gradient || 'linear-gradient(135deg,#92400e,#f59e0b)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH founders',
    duration: '120h+',
    level: 'All Levels',
    price: '$5',
    origPrice: ex.origPrice || '$150',
    isFree: false,
    badge: 'premium',
    certId: 'TIH-2026-ENT-0001',
    learn: [
      'Build an entrepreneurial mindset and find validated business ideas',
      'Do market research and design a business model with the Canvas',
      'Develop a product, brand and marketing and sales engine',
      'Master business finance, funding options and investor pitching',
      'Handle legal registration, operations, HR, technology and AI tools',
      'Write a complete business plan, build a pitch deck and launch & grow'
    ],
    requirements: [
      'A business idea or the willingness to develop one',
      'A notebook or device to complete projects and templates',
      'Consistent weekly action on your own venture'
    ],
    about: [
      'This is the complete TIH Entrepreneurship & Startup Launch Program, rebuilt into twenty modules that take you from mindset and idea all the way to a launched, growing business.',
      'Every content lesson has a video and printable notes; ten practical projects build your real deliverables, and downloadable templates cover the Business Model Canvas, Business Plan, Financial Model, Pitch Deck and Marketing Plan.',
      'You finish with a complete business plan, an investor-ready pitch deck, a startup launch project, and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _entFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.entrepreneurship = notes;

  window.tihApplyEntrepreneurshipTopicQuizzes = function () {
    var bank = window.TIH_ENTREPRENEURSHIP_QUESTIONS, course = COURSES_DB.entrepreneurship;
    if (!bank || !course) throw new Error('Missing Entrepreneurship question bank');
    var reserves = [];
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
      if(out.length !== count) throw new Error('Exhausted Entrepreneurship assessment pool');
      return out;
    }
    var papers = Object.keys(course.quizzes).map(function(k){return course.quizzes[k];}).filter(function(q){return q.title.indexOf('Practice: ')!==0;});
    var subjects = {'Entrepreneurship Quiz':[1,2,3], 'Marketing Quiz':[7], 'Finance Quiz':[9], 'Legal Quiz':[11]};
    papers.filter(function(q){return !!subjects[q.title];}).forEach(function(q) {
      q.questions = take(reserves.filter(function(r){return subjects[q.title].indexOf(r.module)>=0;}), q.questionCount);
    });
    ['Midterm Examination','Final Examination','Graduation Assessment'].forEach(function(title) {
      var q = papers.filter(function(q){return q.title===title;})[0];
      if(!q) throw new Error('Missing Entrepreneurship assessment '+title);
      var pool = reserves.filter(function(r){return r.module <= (title==='Midterm Examination' ? 10 : 18);});
      // The Finance Quiz leaves two reserves: keep one for the final's coverage.
      if(title==='Midterm Examination') {
        var finance = reserves.filter(function(r){return r.module===9 && !used[r.q];});
        var finalFinance = finance[finance.length-1];
        pool = pool.filter(function(r){return r!==finalFinance;});
      }
      q.questions=take(pool,q.questionCount);
    });
  };
  window.tihApplyEntrepreneurshipTopicQuizzes();

  if (typeof console !== 'undefined' && console.log) {
    console.log('[ENT] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
