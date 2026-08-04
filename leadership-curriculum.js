/* TIH Complete Business Leadership Masterclass curriculum.
   Rebuilds COURSES_DB.leadership into the full 20-module program taking an
   aspiring leader to a confident business leader/executive: leadership
   fundamentals, strategic thinking, communication, team leadership, culture,
   operations, finance, marketing, innovation & change, negotiation, HR,
   performance, entrepreneurship, technology & AI, ethics & governance, career
   & executive development, real-world projects, a capstone and a graduation
   module. Every content lesson has a video + printable notes; project lessons
   carry briefs and downloadable leadership templates. Modelled on
   projectmgmt-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.leadership || COURSES_DB.leadership._leadFullBuilt) return;

  var V = ['tYW6X5qwnMw', 'Q-JClqIR5a4', 'kKbTi9_1lTg', 'L4UTybPoyn4', 'SI6cOkDOoyE', 'o0w1941xkjY', 'LerIITWNgvI', '0X1FiNxlHh0', 'AAZgoKAqGE0', 'XjiRF_6cvcA', 'cyGuic7_ivo', 'f8uw94S-yc4', '_TMM0lhukBg', 't3GjwVWapGo', 'GsRgHt4IIBU', 'eBXm0_8-rwU', 'mBRHe1sRiZM', '_zAiKx69kE0'];
  var VIDEOS = {
    orientation: [V[0], V[1]], fundamentals: [V[1], V[2]], strategy: [V[3], V[4]], comms: [V[5], V[6]],
    team: [V[7], V[8]], culture: [V[8], V[9]], operations: [V[9], V[10]], finance: [V[10], V[11]],
    marketing: [V[11], V[12]], innovation: [V[12], V[13]], negotiation: [V[13], V[14]], hr: [V[14], V[15]],
    performance: [V[15], V[16]], entrepreneur: [V[3], V[16]], tech: [V[16], V[17]], ethics: [V[2], V[5]],
    career: [V[1], V[17]], projects: [V[4], V[10]], capstone: [V[0], V[8]], assessment: [V[0]]
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

  var BANK = {
    general: [
      { q: 'Leadership is best described as:', opts: ['Controlling people', 'Influencing and enabling people to achieve shared goals', 'Doing all the work yourself', 'Avoiding decisions'], correct: 1, exp: 'Leadership is about influence toward a shared vision.' },
      { q: 'Leadership differs from management in that leadership focuses more on:', opts: ['Processes and control', 'Vision, people and change', 'Only budgets', 'Only schedules'], correct: 1, exp: 'Leaders set direction and inspire; managers plan and control.' },
      { q: 'Ethical leadership means:', opts: ['Winning at any cost', 'Leading with honesty, fairness and responsibility', 'Ignoring stakeholders', 'Hiding information'], correct: 1, exp: 'Ethical leaders act with integrity and responsibility.' },
      { q: 'A great leader mostly develops through:', opts: ['Birth only', 'Practice, feedback and reflection', 'Luck', 'Avoiding challenges'], correct: 1, exp: 'Leadership is a learnable skill built by practice and reflection.' },
      { q: 'The capstone leadership project helps you:', opts: ['Skip work', 'Apply the whole program to a real leadership challenge', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates the program into one real challenge.' },
      { q: 'A leader builds credibility mainly by:', opts: ['Talking most', 'Doing what they say and delivering results', 'Titles alone', 'Avoiding accountability'], correct: 1, exp: 'Credibility comes from integrity and consistent delivery.' }
    ],
    fundamentals: [
      { q: 'Emotional intelligence includes:', opts: ['Only IQ', 'Self-awareness, self-regulation, empathy and social skill', 'Only technical skill', 'Only speed'], correct: 1, exp: 'EI covers awareness and management of emotions in self and others.' },
      { q: 'Self-leadership means:', opts: ['Leading others only', 'Managing your own mindset, habits and growth', 'Ignoring feedback', 'Avoiding goals'], correct: 1, exp: 'You lead yourself before you can lead others well.' },
      { q: 'Trust is built primarily through:', opts: ['Promises alone', 'Consistency, honesty and competence over time', 'Authority', 'Secrecy'], correct: 1, exp: 'Trust grows from reliable, honest, capable behaviour.' },
      { q: 'Accountability means a leader:', opts: ['Blames others', 'Takes ownership of results and decisions', 'Avoids responsibility', 'Hides mistakes'], correct: 1, exp: 'Accountable leaders own outcomes, good or bad.' },
      { q: 'Good decision-making under pressure relies on:', opts: ['Guessing', 'Clear values, information and sound judgement', 'Avoiding decisions', 'Copying others'], correct: 1, exp: 'Values plus evidence produce better decisions.' },
      { q: 'Leadership confidence grows from:', opts: ['Never failing', 'Preparation, small wins and learning from setbacks', 'Arrogance', 'Avoiding risk'], correct: 1, exp: 'Competence and experience build genuine confidence.' }
    ],
    strategy: [
      { q: 'A vision statement describes:', opts: ['Daily tasks', 'The desired future the organization aims for', 'The budget', 'The office rules'], correct: 1, exp: 'Vision paints the aspirational future state.' },
      { q: 'SWOT analysis reviews:', opts: ['Strengths, Weaknesses, Opportunities, Threats', 'Only sales', 'Only staff', 'Only software'], correct: 0, exp: 'SWOT covers internal and external factors.' },
      { q: 'PESTLE analysis scans the:', opts: ['Internal team', 'External macro-environment (Political, Economic, Social, Tech, Legal, Environmental)', 'Budget only', 'Logo'], correct: 1, exp: 'PESTLE examines external forces.' },
      { q: 'Competitive advantage is:', opts: ['Copying rivals', 'What lets you outperform competitors sustainably', 'A logo', 'A slogan'], correct: 1, exp: 'It is a durable edge customers value.' },
      { q: 'Scenario planning helps leaders:', opts: ['Predict exactly', 'Prepare for multiple possible futures', 'Ignore risk', 'Avoid strategy'], correct: 1, exp: 'It builds readiness for different plausible futures.' },
      { q: 'Strategic goals should be:', opts: ['Vague', 'Clear, measurable and aligned to the vision', 'Secret', 'Random'], correct: 1, exp: 'Good goals are specific, measurable and aligned.' }
    ],
    comms: [
      { q: 'Active listening means:', opts: ['Waiting to talk', 'Fully focusing, understanding and responding to the speaker', 'Interrupting', 'Ignoring'], correct: 1, exp: 'Active listening seeks to understand before responding.' },
      { q: 'Effective feedback should be:', opts: ['Vague and late', 'Specific, timely and constructive', 'Only negative', 'Only praise'], correct: 1, exp: 'Good feedback is specific, timely and actionable.' },
      { q: 'Executive communication is usually:', opts: ['Long and unfocused', 'Clear, concise and outcome-focused', 'Full of jargon', 'Avoided'], correct: 1, exp: 'Executives value clarity and brevity.' },
      { q: 'Crisis communication should be:', opts: ['Delayed and hidden', 'Prompt, honest and consistent', 'Blaming', 'Silent'], correct: 1, exp: 'In a crisis, communicate quickly, honestly and consistently.' },
      { q: 'Persuasive communication relies on:', opts: ['Force', 'Credibility, logic and emotional connection', 'Confusion', 'Length'], correct: 1, exp: 'Ethos, logos and pathos persuade effectively.' },
      { q: 'A strong presentation focuses on:', opts: ['Reading slides', 'A clear message tailored to the audience', 'Many slides', 'Jargon'], correct: 1, exp: 'Know your message and your audience.' }
    ],
    team: [
      { q: 'High-performing teams need:', opts: ['No goals', 'Clear goals, trust and defined roles', 'Constant conflict', 'One person doing everything'], correct: 1, exp: 'Clarity, trust and roles drive performance.' },
      { q: 'Delegation means:', opts: ['Dumping work', 'Assigning responsibility with authority and support', 'Doing it yourself', 'Avoiding it'], correct: 1, exp: 'Effective delegation gives authority and support, not just tasks.' },
      { q: 'Employee engagement improves when leaders:', opts: ['Ignore staff', 'Give purpose, recognition and growth', 'Micromanage', 'Withhold feedback'], correct: 1, exp: 'Purpose, recognition and development drive engagement.' },
      { q: 'Coaching differs from managing because it:', opts: ['Commands', 'Develops people through questions and support', 'Ignores growth', 'Only evaluates'], correct: 1, exp: 'Coaching develops capability, not just directs tasks.' },
      { q: 'Team conflict is best handled by:', opts: ['Ignoring it', 'Addressing it early and constructively', 'Taking sides', 'Punishment'], correct: 1, exp: 'Early, fair, constructive resolution keeps teams healthy.' },
      { q: 'Leading remote teams requires extra focus on:', opts: ['Nothing', 'Clear communication, trust and outcomes', 'Surveillance', 'Longer meetings'], correct: 1, exp: 'Remote leadership relies on clarity, trust and results.' }
    ],
    finance: [
      { q: 'The income statement (P&L) shows:', opts: ['Assets only', 'Revenue, costs and profit over a period', 'Only cash', 'The logo'], correct: 1, exp: 'The P&L summarises income and expenses over time.' },
      { q: 'Cash flow is critical because a business can be profitable yet:', opts: ['Never fail', 'Run out of cash and fail', 'Have no costs', 'Ignore it'], correct: 1, exp: 'Cash flow, not just profit, keeps a business alive.' },
      { q: 'A balance sheet shows:', opts: ['Only sales', 'Assets, liabilities and equity at a point in time', 'Only marketing', 'Only staff'], correct: 1, exp: 'It is a snapshot of what you own and owe.' },
      { q: 'Budgeting helps leaders:', opts: ['Spend randomly', 'Plan and control income and expenses', 'Avoid finance', 'Ignore costs'], correct: 1, exp: 'Budgets plan and control financial performance.' },
      { q: 'Cost control means:', opts: ['Cutting everything', 'Managing costs without harming value', 'Ignoring spend', 'Spending more'], correct: 1, exp: 'Control costs while protecting value and quality.' },
      { q: 'Financial literacy lets a leader:', opts: ['Ignore numbers', 'Make informed, data-based decisions', 'Guess', 'Avoid budgets'], correct: 1, exp: 'Understanding the numbers drives better decisions.' }
    ],
    marketing: [
      { q: 'A brand is:', opts: ['Just a logo', 'The overall perception and promise of a business', 'A price', 'A product only'], correct: 1, exp: 'Brand is the promise and perception, not only a logo.' },
      { q: 'Customer experience refers to:', opts: ['One ad', 'The whole journey a customer has with a business', 'The office', 'The logo only'], correct: 1, exp: 'CX is the sum of all customer interactions.' },
      { q: 'Market positioning defines:', opts: ['The office location', 'How your offer is perceived vs competitors', 'The budget', 'The team'], correct: 1, exp: 'Positioning is the distinct place you occupy in customers’ minds.' },
      { q: 'A CRM system helps leaders:', opts: ['Cook', 'Manage customer relationships and data', 'Only pay tax', 'Design logos'], correct: 1, exp: 'CRM manages customers, sales and relationships.' },
      { q: 'Sales leadership focuses on:', opts: ['Ignoring targets', 'Coaching a team to meet revenue goals', 'Only discounts', 'Avoiding customers'], correct: 1, exp: 'Sales leaders enable teams to achieve revenue goals.' },
      { q: 'Digital marketing lets businesses:', opts: ['Reach no one', 'Reach and engage customers online measurably', 'Avoid data', 'Only print'], correct: 1, exp: 'Digital channels enable targeted, measurable reach.' }
    ],
    innovation: [
      { q: 'Innovation in business means:', opts: ['Doing nothing new', 'Creating new value through ideas, products or processes', 'Copying only', 'Avoiding change'], correct: 1, exp: 'Innovation turns ideas into new value.' },
      { q: 'Leading change successfully requires:', opts: ['Ignoring people', 'A clear vision, communication and support for people', 'Force only', 'Secrecy'], correct: 1, exp: 'People-focused, communicated change succeeds.' },
      { q: 'Resistance to change is best handled by:', opts: ['Ignoring concerns', 'Listening, involving people and showing the benefit', 'Threats', 'Hiding the change'], correct: 1, exp: 'Engagement and empathy reduce resistance.' },
      { q: 'Digital transformation is:', opts: ['Only buying software', 'Using technology to fundamentally improve how a business operates', 'A logo change', 'Avoiding tech'], correct: 1, exp: 'It reshapes operations and value with technology.' },
      { q: 'Continuous improvement means:', opts: ['One big change', 'Ongoing incremental improvement', 'No change', 'Only audits'], correct: 1, exp: 'Small, ongoing improvements compound over time.' },
      { q: 'Creative thinking is boosted by:', opts: ['Fear of failure', 'Curiosity, diverse input and safe experimentation', 'Rigidity', 'Isolation'], correct: 1, exp: 'Curiosity and psychological safety fuel creativity.' }
    ],
    negotiation: [
      { q: 'A win-win negotiation aims for:', opts: ['One winner', 'An outcome that benefits both sides', 'No deal', 'Only your gain'], correct: 1, exp: 'Sustainable deals create mutual value.' },
      { q: 'Preparation for a negotiation should include knowing your:', opts: ['Nothing', 'Objectives, limits and alternatives (BATNA)', 'Only price', 'The other side’s lunch'], correct: 1, exp: 'Know your goals, walk-away point and BATNA.' },
      { q: 'Handling a difficult conversation works best when you:', opts: ['Attack the person', 'Focus on the issue, stay calm and listen', 'Avoid it', 'Raise your voice'], correct: 1, exp: 'Address the issue, not the person, calmly.' },
      { q: 'Mediation involves:', opts: ['Taking sides', 'A neutral third party helping reach agreement', 'Ignoring the dispute', 'Punishment'], correct: 1, exp: 'A mediator facilitates a mutually acceptable solution.' },
      { q: 'Conflict, handled well, can:', opts: ['Only harm', 'Lead to better ideas and stronger relationships', 'Be ignored', 'Always be avoided'], correct: 1, exp: 'Constructive conflict can improve outcomes.' },
      { q: 'A strong negotiator listens in order to:', opts: ['Interrupt', 'Understand interests behind positions', 'Win by force', 'Confuse'], correct: 1, exp: 'Understanding interests unlocks better deals.' }
    ],
    hr: [
      { q: 'Talent management focuses on:', opts: ['Ignoring staff', 'Attracting, developing and retaining good people', 'Only firing', 'Only payroll'], correct: 1, exp: 'It covers the full talent lifecycle.' },
      { q: 'Succession planning ensures:', opts: ['No future leaders', 'Ready candidates for key roles in future', 'Only current staff', 'Random promotions'], correct: 1, exp: 'It prepares people to fill critical roles later.' },
      { q: 'A good recruitment process is:', opts: ['Biased and rushed', 'Fair, structured and role-focused', 'Random', 'Secretive'], correct: 1, exp: 'Structured, fair hiring finds the right people.' },
      { q: 'Employee development benefits the business by:', opts: ['Wasting money', 'Building skills, engagement and retention', 'Nothing', 'Increasing turnover'], correct: 1, exp: 'Development builds capability and loyalty.' },
      { q: 'Performance reviews should be:', opts: ['A surprise attack', 'Fair, evidence-based and development-focused', 'Only negative', 'Skipped'], correct: 1, exp: 'Reviews should be fair and help people grow.' },
      { q: 'Understanding employment law basics helps leaders:', opts: ['Break rules', 'Treat staff fairly and stay compliant', 'Ignore rights', 'Avoid HR'], correct: 1, exp: 'Legal awareness protects staff and the business.' }
    ],
    ethics: [
      { q: 'Corporate governance is:', opts: ['Daily tasks', 'The system of rules and oversight directing a company', 'Marketing', 'A logo'], correct: 1, exp: 'Governance sets accountability and oversight structures.' },
      { q: 'CSR (Corporate Social Responsibility) means a business:', opts: ['Ignores society', 'Acts responsibly toward society and the environment', 'Only profits', 'Avoids ethics'], correct: 1, exp: 'CSR balances profit with social and environmental responsibility.' },
      { q: 'ESG stands for:', opts: ['Earnings, Sales, Growth', 'Environmental, Social and Governance', 'Ethics, Safety, Goals', 'Equity, Stock, Gains'], correct: 1, exp: 'ESG measures sustainability and responsibility factors.' },
      { q: 'Compliance means:', opts: ['Ignoring laws', 'Following laws, regulations and internal policies', 'Random behaviour', 'Only marketing'], correct: 1, exp: 'Compliance ensures the business follows the rules.' },
      { q: 'Responsible leadership balances:', opts: ['Only profit', 'Profit with people, society and the environment', 'Only cost', 'Only speed'], correct: 1, exp: 'Responsible leaders consider all stakeholders.' },
      { q: 'Business ethics guide leaders to:', opts: ['Cut corners', 'Do what is right even when it is hard', 'Ignore stakeholders', 'Hide problems'], correct: 1, exp: 'Ethics guide right action under pressure.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', fundamentals: 'fundamentals', strategy: 'strategy', comms: 'comms', team: 'team', culture: 'team', operations: 'general', finance: 'finance', marketing: 'marketing', innovation: 'innovation', negotiation: 'negotiation', hr: 'hr', performance: 'general', entrepreneur: 'strategy', tech: 'innovation', ethics: 'ethics', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.strategy, BANK.comms, BANK.team, BANK.finance, BANK.marketing, BANK.innovation, BANK.negotiation, BANK.hr, BANK.ethics);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Strategic/i.test(name)) return 'strategy';
    if (/Financial/i.test(name)) return 'finance';
    if (/Marketing/i.test(name)) return 'marketing';
    if (/Team/i.test(name)) return 'team';
    if (/Change/i.test(name)) return 'innovation';
    if (/Fundamentals/i.test(name)) return 'fundamentals';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'lead-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the masterclass and unlock your TIH Certificate of Completion.</p></div>';
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
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'lead-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'lead-m' + num + '-a' + flat;
        quizzes[qk] = assessmentQuiz(key, name, 8);
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
      quizzes[pqid] = practiceQuiz(key, name);
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
      'Every content lesson has a video and printable notes; downloadable templates cover the Strategic Plan, SWOT, KPI Dashboard, Budget, Performance Review Form, Meeting Agenda, Leadership Development Plan and Business Growth Plan, and ten real-world projects plus a capstone build your leadership portfolio.',
      'Software & tools: Microsoft Excel, PowerPoint and Word, Google Workspace, Trello, Asana, Notion, Canva, ChatGPT and Zoom/Microsoft Teams. You finish with a leadership portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _leadFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.leadership = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[LEAD] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
