/* TIH Complete Remote Work & Freelancing Professional Certificate curriculum.
   Rebuilds COURSES_DB['remote-work'] into the full 10-module program taking a
   beginner to a successful remote worker & freelancer: remote work intro,
   remote workspace setup, freelancing platforms, finding clients & winning
   projects, project & client management, collaboration & productivity tools,
   personal branding & career growth, finance & business for freelancers, AI
   for remote work, and a capstone & graduation module. Every content lesson
   has a video + printable notes; project lessons carry briefs and downloadable
   templates. Modelled on finlit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'remote-work';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._rwFullBuilt) return;

  var V = ['7oM-Nfl8CtQ', 'Tn6-PIqc4UM', '9NzTAZPra3A', '8gNUUK6fwX4', 'rErBcmM1wDk', 'DvMNG6MUlGI', '2GzslyLAD1E', '9uU-i5ZI-_U', 'FTOpohYyn1o', 'cZ_nqaptW88', 'vSsVueEptN4', 'gw428ygPNiY', 'rk9nCnLpreU', 'd7Ms-a2Z9mY', 'Oos9UXRvr28'];
  var VIDEOS = {
    intro: [V[0], V[2]], workspace: [V[2], V[3]], platforms: [V[3], V[4]], clients: [V[4], V[5]],
    mgmt: [V[5], V[6]], tools: [V[6], V[7]], branding: [V[7], V[8]], finance: [V[8], V[9]],
    ai: [V[9], V[10]], capstone: [V[11], V[12]]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to Remote Work', '🧭', 'intro', 'content', ['What is Remote Work?', 'What is Freelancing?', 'Benefits & Challenges', 'Remote Career Opportunities', 'Digital Work Ethics', 'Course Overview']],
    [2, 'Setting Up Your Remote Workspace', '🏠', 'workspace', 'content', ['Home Office Essentials', 'Internet & Equipment', 'Productivity Tools', 'Time Management', 'Work-Life Balance', 'Cybersecurity Basics']],
    [3, 'Freelancing Platforms', '🌐', 'platforms', 'content', ['Upwork', 'Fiverr', 'Freelancer.com', 'PeoplePerHour', 'Contra', 'Creating a Professional Profile']],
    [4, 'Finding Clients & Winning Projects', '🎯', 'clients', 'content', ['Building a Portfolio', 'Writing Winning Proposals', 'Pricing Your Services', 'Client Communication', 'Negotiation Skills', 'Closing Deals']],
    [5, 'Project & Client Management', '📋', 'mgmt', 'content', ['Project Planning', 'Managing Deadlines', 'Client Expectations', 'Handling Revisions', 'Customer Service', 'Long-Term Client Relationships']],
    [6, 'Collaboration & Productivity Tools', '🧰', 'tools', 'content', ['Google Workspace', 'Microsoft Teams', 'Zoom', 'Slack', 'Trello', 'Notion']],
    [7, 'Personal Branding & Career Growth', '🌟', 'branding', 'content', ['LinkedIn Optimization', 'Resume & CV Writing', 'Personal Portfolio Website', 'Networking', 'Interview Preparation', 'Career Development']],
    [8, 'Finance & Business for Freelancers', '💰', 'finance', 'content', ['Pricing Strategies', 'Invoicing', 'International Payments', 'Budgeting', 'Taxes for Freelancers', 'Business Planning']],
    [9, 'AI for Remote Work', '🤖', 'ai', 'content', ['ChatGPT for Productivity', 'AI Writing Tools', 'AI Meeting Assistants', 'Workflow Automation', 'AI for Research', 'Responsible AI Use']],
    [10, 'Capstone Project & Graduation', '🏆', 'capstone', 'projects', ['Build a Professional Portfolio', 'Create a Freelance Business Plan', 'Complete a Client Project Simulation', 'Final Assessment', 'Portfolio Presentation', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'remote work & freelancing foundations', workspace: 'your remote workspace', platforms: 'freelancing platforms', clients: 'finding clients & winning projects', mgmt: 'project & client management', tools: 'collaboration & productivity tools', branding: 'personal branding & career growth', finance: 'finance & business for freelancers', ai: 'AI for remote work', capstone: 'your capstone freelance project' };

  var TEMPLATES = {
    portfolio: '<h4>📥 Template: Freelance Portfolio</h4><ul><li>Headline: what you do + who you help</li><li>3–6 best work samples (with results)</li><li>Services &amp; skills</li><li>Client testimonials</li><li>Clear contact / call to action</li></ul>',
    proposal: '<h4>📥 Template: Client Proposal</h4><ol><li>Restate the client’s goal/problem</li><li>Your proposed solution &amp; approach</li><li>Deliverables &amp; timeline</li><li>Price &amp; terms</li><li>Why you (relevant sample) + call to action</li></ol>',
    invoice: '<h4>📥 Template: Invoice</h4><ul><li>Your name/business &amp; contact</li><li>Client &amp; invoice number/date</li><li>Description of work, quantity, rate, amount</li><li>Subtotal, taxes (if any), total</li><li>Payment method (Payoneer/Wise/bank) &amp; due date</li></ul>',
    contract: '<h4>📥 Template: Freelance Contract</h4><ul><li>Parties &amp; scope of work</li><li>Deliverables &amp; deadlines</li><li>Price, milestones &amp; payment terms</li><li>Revisions policy</li><li>Ownership/IP &amp; confidentiality</li><li>Termination terms &amp; signatures</li></ul>',
    resume: '<h4>📥 Template: Resume / CV</h4><ul><li>Contact &amp; professional headline</li><li>Profile summary</li><li>Experience (achievements, not just duties)</li><li>Skills &amp; tools</li><li>Education &amp; certifications</li></ul>',
    plan: '<h4>📥 Template: Freelance Business Plan</h4><ol><li>Services &amp; niche</li><li>Target clients</li><li>Pricing &amp; income goal</li><li>Marketing (platforms, portfolio, networking)</li><li>Tools &amp; workflow</li><li>Monthly targets &amp; review</li></ol>',
    productivity: '<h4>📥 Checklist: Productivity</h4><ul><li>Plan the day’s top 3 tasks</li><li>Time-block deep work</li><li>Use a task board (Trello/Notion)</li><li>Limit distractions; take breaks</li><li>Review progress &amp; update clients</li></ul>'
  };
  function templateFor(name) {
    if (/Building a Portfolio|Personal Portfolio Website|Build a Professional Portfolio/i.test(name)) return TEMPLATES.portfolio;
    if (/Writing Winning Proposals/i.test(name)) return TEMPLATES.proposal;
    if (/Invoicing/i.test(name)) return TEMPLATES.invoice;
    if (/Closing Deals|Client Expectations/i.test(name)) return TEMPLATES.contract;
    if (/Resume & CV Writing/i.test(name)) return TEMPLATES.resume;
    if (/Business Planning|Create a Freelance Business Plan/i.test(name)) return TEMPLATES.plan;
    if (/Productivity Tools|Time Management/i.test(name)) return TEMPLATES.productivity;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'remote work skills';
    var focus = position % 2 ? 'practical steps and real freelancing examples' : 'understanding the concept and applying it to your remote career';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Remote Work & Freelancing · ' + esc(moduleTitle) + '</strong><span>Build an online career</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> means for remote workers and freelancers.</li>' +
      '<li>See a real example you can copy.</li>' +
      '<li>Apply it to your own freelance profile, client or workflow.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real or sample freelance situation (a profile, proposal or project).</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Practise <em>' + esc(name) + '</em> with a real example.</li>' +
      '<li><strong>Exercise 2:</strong> Decide one action to improve your remote/freelance career.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to a sustainable remote/freelance career.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Complete it for your own real freelance career (or a realistic scenario) and keep it in your portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Set the goal and gather what you need (profile, samples, client brief).</li><li>Build <em>' + esc(name) + '</em> using the templates and what you learned.</li><li>Review it, get feedback, and publish/finalise it for real use.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A real, usable freelance asset (portfolio, plan or completed project) for your career.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Remote work means:', opts: ['Only office work', 'Working from anywhere using technology', 'No work', 'Only travelling'], correct: 1, exp: 'Remote work is done from anywhere via digital tools.' },
      { q: 'Freelancing means:', opts: ['A permanent salaried job', 'Working for yourself, serving clients on projects', 'Unemployment', 'Only volunteering'], correct: 1, exp: 'Freelancers are self-employed, serving clients per project.' },
      { q: 'A key benefit of remote/freelance work is:', opts: ['No income', 'Flexibility and access to global clients', 'More commuting', 'Fewer skills'], correct: 1, exp: 'It offers flexibility and worldwide opportunities.' },
      { q: 'A common remote-work challenge is:', opts: ['Nothing', 'Staying disciplined and managing time', 'Too much structure', 'No tools'], correct: 1, exp: 'Self-discipline and time management are key challenges.' },
      { q: 'Digital work ethics include:', opts: ['Missing deadlines', 'Honesty, reliability and clear communication', 'Ignoring clients', 'Copying work'], correct: 1, exp: 'Reliability, honesty and communication build a reputation.' },
      { q: 'The capstone project helps you:', opts: ['Skip learning', 'Build a real portfolio and freelance business plan', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone builds your real freelance foundation.' }
    ],
    workspace: [
      { q: 'A good remote workspace needs:', opts: ['Nothing', 'Reliable internet, a device and a quiet setup', 'Only a phone', 'A busy environment'], correct: 1, exp: 'Reliable internet and a focused setup are essential.' },
      { q: 'Time management for remote workers is important because:', opts: ['It is not', 'You must self-manage without a boss watching', 'Bosses do it for you', 'Time is unlimited'], correct: 1, exp: 'Remote workers manage their own time and output.' },
      { q: 'Work-life balance helps you:', opts: ['Burn out', 'Stay productive and avoid burnout', 'Work 24/7', 'Ignore health'], correct: 1, exp: 'Boundaries protect wellbeing and long-term productivity.' },
      { q: 'Cybersecurity basics for remote work include:', opts: ['Sharing passwords', 'Strong passwords, 2FA and secure wifi', 'Public wifi for banking', 'No updates'], correct: 1, exp: 'Protect accounts and data with good security habits.' },
      { q: 'Productivity tools help you:', opts: ['Lose track', 'Organise tasks and work efficiently', 'Avoid work', 'Waste time'], correct: 1, exp: 'Tools like task boards keep you organised.' },
      { q: 'A distraction-free routine improves:', opts: ['Nothing', 'Focus and quality of work', 'Procrastination', 'Delays'], correct: 1, exp: 'Focus routines raise output and quality.' }
    ],
    platforms: [
      { q: 'Upwork and Fiverr are:', opts: ['Banks', 'Freelance marketplaces to find clients', 'Games', 'Email apps'], correct: 1, exp: 'They connect freelancers with clients.' },
      { q: 'A strong freelancer profile has:', opts: ['No photo or bio', 'A clear headline, skills, samples and a professional photo', 'Only a name', 'Random text'], correct: 1, exp: 'A complete, professional profile attracts clients.' },
      { q: 'On Fiverr, freelancers usually sell:', opts: ['Nothing', 'Packaged services ("gigs")', 'Only hourly', 'Products only'], correct: 1, exp: 'Fiverr is built around productised "gigs".' },
      { q: 'Good reviews on a platform help you:', opts: ['Nothing', 'Win more clients and higher rates', 'Get banned', 'Lose work'], correct: 1, exp: 'Positive reviews build trust and win work.' },
      { q: 'Before bidding on a job you should:', opts: ['Ignore the brief', 'Read the requirements and tailor your proposal', 'Copy-paste one proposal', 'Skip the details'], correct: 1, exp: 'Tailored, relevant proposals win more jobs.' },
      { q: 'A professional profile photo should be:', opts: ['A blurry selfie', 'Clear, friendly and professional', 'A logo of a rival', 'Missing'], correct: 1, exp: 'A clear, professional photo builds trust.' }
    ],
    clients: [
      { q: 'A winning proposal focuses on:', opts: ['You only', 'The client’s problem and how you solve it', 'Nothing', 'Only price'], correct: 1, exp: 'Address the client’s needs and outcomes first.' },
      { q: 'A portfolio should show:', opts: ['Nothing', 'Your best relevant work and results', 'Only text', 'Other people’s work'], correct: 1, exp: 'Show relevant, high-quality samples with results.' },
      { q: 'Pricing your services should reflect:', opts: ['A random number', 'Your value, skill and the market', 'Always the cheapest', 'The client’s mood'], correct: 1, exp: 'Price on value, skill and market rates.' },
      { q: 'Good client communication is:', opts: ['Rare and vague', 'Prompt, clear and professional', 'Only at the end', 'Rude'], correct: 1, exp: 'Clear, timely communication builds trust.' },
      { q: 'When negotiating, aim for:', opts: ['You win, client loses', 'A fair deal both sides accept', 'No deal', 'Only your gain'], correct: 1, exp: 'Fair, mutually beneficial deals sustain relationships.' },
      { q: 'Closing a deal means:', opts: ['Ending contact', 'Getting the client to agree and start', 'Deleting the chat', 'Lowering price only'], correct: 1, exp: 'Closing secures agreement to begin the work.' }
    ],
    mgmt: [
      { q: 'Managing deadlines means:', opts: ['Ignoring dates', 'Planning and delivering work on time', 'Missing them', 'Guessing'], correct: 1, exp: 'On-time delivery protects your reputation.' },
      { q: 'Setting clear client expectations helps:', opts: ['Cause disputes', 'Prevent misunderstandings and revisions', 'Nothing', 'Delay work'], correct: 1, exp: 'Clarity up front prevents conflict later.' },
      { q: 'Handling revisions professionally means:', opts: ['Refusing all changes', 'Agreeing a fair revisions policy and responding calmly', 'Ignoring feedback', 'Arguing'], correct: 1, exp: 'Set a revisions policy and handle feedback well.' },
      { q: 'Great customer service leads to:', opts: ['Lost clients', 'Repeat work and referrals', 'Bad reviews', 'Nothing'], correct: 1, exp: 'Good service drives repeat business and referrals.' },
      { q: 'Long-term client relationships are valuable because:', opts: ['They are not', 'Repeat clients are cheaper than finding new ones', 'They lower quality', 'They waste time'], correct: 1, exp: 'Retained clients provide steady, lower-cost income.' },
      { q: 'A simple project plan includes:', opts: ['Nothing', 'Tasks, deadlines and deliverables', 'Only the price', 'Only your name'], correct: 1, exp: 'Plan tasks, timing and deliverables clearly.' }
    ],
    tools: [
      { q: 'Zoom and Microsoft Teams are used for:', opts: ['Spreadsheets', 'Video meetings and calls', 'Only email', 'Only files'], correct: 1, exp: 'They host video meetings and collaboration.' },
      { q: 'Trello and Notion help you:', opts: ['Nothing', 'Organise tasks and projects', 'Only chat', 'Only video'], correct: 1, exp: 'They manage tasks, boards and notes.' },
      { q: 'Slack is mainly used for:', opts: ['Video editing', 'Team messaging and channels', 'Accounting', 'Printing'], correct: 1, exp: 'Slack organises team chat by channels.' },
      { q: 'Google Workspace lets you:', opts: ['Nothing', 'Create and share docs, sheets and slides online', 'Only email', 'Only store files'], correct: 1, exp: 'It supports online docs and collaboration.' },
      { q: 'Choosing a collaboration tool depends on:', opts: ['The logo', 'The client’s/team’s needs and workflow', 'Random choice', 'The colour'], correct: 1, exp: 'Match the tool to the team and task.' },
      { q: 'Cloud tools help remote teams by:', opts: ['Losing files', 'Enabling shared, always-available work', 'Working offline only', 'Blocking sharing'], correct: 1, exp: 'Cloud tools keep work shared and accessible.' }
    ],
    branding: [
      { q: 'A strong LinkedIn profile includes:', opts: ['Nothing', 'A clear headline, summary and experience', 'Only a photo', 'Random text'], correct: 1, exp: 'Headline, summary and achievements attract opportunities.' },
      { q: 'Personal branding means:', opts: ['Copying others', 'How you present your skills and reputation consistently', 'Hiding your work', 'A logo only'], correct: 1, exp: 'It is your consistent professional reputation.' },
      { q: 'A portfolio website helps you:', opts: ['Nothing', 'Showcase work and win clients', 'Hide skills', 'Avoid clients'], correct: 1, exp: 'A portfolio site displays your work professionally.' },
      { q: 'Networking helps freelancers by:', opts: ['Isolating them', 'Building relationships that lead to work/referrals', 'Wasting time', 'Nothing'], correct: 1, exp: 'Relationships bring referrals and opportunities.' },
      { q: 'A resume/CV should highlight:', opts: ['Everything ever done', 'Relevant skills and achievements clearly', 'Secrets', 'Only hobbies'], correct: 1, exp: 'Focus on relevant, achievement-based content.' },
      { q: 'Continuous learning helps your career by:', opts: ['Nothing', 'Keeping your skills current and competitive', 'Making you outdated', 'Lowering value'], correct: 1, exp: 'Ongoing learning keeps you competitive.' }
    ],
    finance: [
      { q: 'An invoice is:', opts: ['A receipt only', 'A request for payment listing work and amount', 'A contract', 'A tax'], correct: 1, exp: 'Invoices bill clients for work done.' },
      { q: 'International freelancers often get paid via:', opts: ['Cash only', 'Payoneer, Wise or bank transfer', 'Nothing', 'Only cheques'], correct: 1, exp: 'Payoneer/Wise enable cross-border payments.' },
      { q: 'Pricing strategies for freelancers include:', opts: ['Random guessing', 'Hourly, per-project or value-based pricing', 'Free always', 'One price forever'], correct: 1, exp: 'Choose hourly, fixed or value-based pricing.' },
      { q: 'Budgeting as a freelancer helps with:', opts: ['Nothing', 'Managing irregular income and expenses', 'Spending freely', 'Ignoring money'], correct: 1, exp: 'Budgeting smooths variable freelance income.' },
      { q: 'Freelancers should set aside money for:', opts: ['Nothing', 'Taxes and slow periods', 'Only holidays', 'Only gadgets'], correct: 1, exp: 'Save for taxes and income gaps.' },
      { q: 'A freelance business plan helps you:', opts: ['Nothing', 'Set services, pricing, target clients and goals', 'Avoid clients', 'Lose money'], correct: 1, exp: 'A plan guides your freelance business growth.' }
    ],
    ai: [
      { q: 'AI writing tools can help freelancers:', opts: ['Do nothing', 'Draft and improve content faster', 'Only play games', 'Replace all thinking'], correct: 1, exp: 'AI speeds drafting; you review and refine.' },
      { q: 'AI meeting assistants can:', opts: ['Nothing', 'Transcribe and summarise meetings', 'Attend for you always', 'Delete meetings'], correct: 1, exp: 'They transcribe and summarise for follow-up.' },
      { q: 'Workflow automation (e.g. Zapier) helps by:', opts: ['Adding manual work', 'Connecting apps to automate repetitive tasks', 'Slowing work', 'Nothing'], correct: 1, exp: 'Automation handles repetitive steps between apps.' },
      { q: 'You should always ___ AI output before sending to a client:', opts: ['Trust it blindly', 'Review and verify it', 'Ignore it', 'Publish instantly'], correct: 1, exp: 'AI can be wrong — always review client work.' },
      { q: 'Responsible AI use for freelancers includes:', opts: ['Hiding AI use where honesty is expected', 'Being transparent and protecting client data', 'Ignoring rights', 'Sharing client secrets'], correct: 1, exp: 'Be transparent, protect data and respect rights.' },
      { q: 'AI is best treated as a:', opts: ['Replacement for your skill', 'Productivity assistant you supervise', 'Magic solution', 'Useless tool'], correct: 1, exp: 'AI boosts productivity; you stay in control.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', workspace: 'workspace', platforms: 'platforms', clients: 'clients', mgmt: 'mgmt', tools: 'tools', branding: 'branding', finance: 'finance', ai: 'ai', capstone: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.workspace, BANK.platforms, BANK.clients, BANK.mgmt, BANK.tools, BANK.branding, BANK.finance, BANK.ai);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.intro;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'rw-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Final/i.test(name);
        var aid = 'rw-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, big ? 15 : 8);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: (big ? 15 : 8) + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this assessment, then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
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
      var pqid = 'rw-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete Remote Work & Freelancing Professional Certificate',
    shortDesc: 'A full 10-module program from beginner to successful remote worker & freelancer: remote work & freelancing basics, workspace setup, freelancing platforms, finding clients & winning projects, project & client management, collaboration tools, personal branding, freelance finance, AI for remote work, and a capstone portfolio & business plan with a Certificate of Completion.',
    category: 'Remote Work & Freelancing',
    icon: ex.icon || '💼',
    gradient: ex.gradient || 'linear-gradient(135deg,#c2410c,#e31e24)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH freelancers',
    duration: '60h+',
    level: 'Beginner → Professional',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$140',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-REMOTE-0001',
    learn: [
      'Understand remote work and freelancing and set up your workspace',
      'Create winning profiles on Upwork, Fiverr and other platforms',
      'Find clients, write winning proposals and price your services',
      'Manage projects, clients, deadlines and long-term relationships',
      'Use collaboration tools, build a personal brand and manage freelance finances',
      'Use AI for productivity and build a portfolio and freelance business plan'
    ],
    requirements: [
      'A computer with reliable internet',
      'A skill or service you can offer (or willingness to develop one)',
      'Consistency in applying the lessons to your own freelance career'
    ],
    about: [
      'This is the complete TIH Remote Work & Freelancing Professional Certificate, rebuilt into ten modules that take a beginner to a successful remote worker and freelancer.',
      'Every content lesson has a video and printable notes; downloadable templates cover a Resume, Proposal, Invoice, Freelance Contract, Portfolio, Business Plan and Productivity checklists. A capstone builds your real portfolio and freelance business plan.',
      'Software & tools: Google Workspace, Microsoft Office, Zoom, Teams, Slack, Trello, Notion, ChatGPT, Canva, LinkedIn, Upwork, Fiverr, Freelancer.com, Payoneer and Wise. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _rwFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[REMOTEWORK] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
