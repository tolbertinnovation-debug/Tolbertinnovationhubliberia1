/* TIH Business Plan Mastery curriculum.
   Adds a focused full-course program that teaches learners how to build a
   credible, fundable business plan from idea to pitch. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (COURSES_DB['business-plan'] && COURSES_DB['business-plan']._businessPlanFullBuilt) return;

  var VIDEO_MAP = {
    'Welcome to the Course': '',
    'Why Business Plans Matter': '',
    'Business Plan Types': '',
    'Course Roadmap': '',
    'Finding the Right Business Idea': '',
    'Problem Identification': '',
    'Customer Discovery': '',
    'Market Opportunity': '',
    'Validating the Idea': '',
    'Research Planning': '',
    'Primary Market Research': '',
    'Competitor Analysis': '',
    'Target Market': '',
    'SWOT Analysis': '',
    'Value Proposition': '',
    'Business Model Basics': '',
    'Revenue Streams': '',
    'Cost Structure': '',
    'Customer Segments': '',
    'Marketing Fundamentals': '',
    'Brand Positioning': '',
    'Sales Strategy': '',
    'Customer Journey': '',
    'Operations Plan': '',
    'Management Structure': '',
    'Technology and Tools': '',
    'Startup Budget': '',
    'Cash Flow Projections': '',
    'Break-even Analysis': '',
    'Funding Sources': '',
    'Financial Assumptions': '',
    'Legal and Compliance': '',
    'Risk Management': '',
    'Milestones and Timeline': '',
    'Writing the Executive Summary': '',
    'Drafting the Full Plan': '',
    'Pitching the Plan': '',
    'Capstone Business Plan': '',
    'Final Assessment': ''
  };

  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'Why Business Plans Matter', 'Business Plan Types', 'Course Roadmap', 'Business Plan Toolkit', 'How to Study This Course']],
    [2, 'Business Idea & Problem', '💡', 'idea', 'content', ['Finding the Right Business Idea', 'Problem Identification', 'Customer Pain Points', 'Customer Discovery', 'Market Opportunity', 'Validating the Idea']],
    [3, 'Market Research', '🔎', 'research', 'content', ['Research Planning', 'Primary Market Research', 'Secondary Research', 'Competitor Analysis', 'Target Market', 'SWOT Analysis', 'Research Summary']],
    [4, 'Value Proposition & Business Model', '🧩', 'model', 'content', ['Value Proposition', 'Business Model Basics', 'Customer Segments', 'Revenue Streams', 'Cost Structure', 'Key Resources', 'Business Model Review']],
    [5, 'Marketing & Sales', '📣', 'marketing', 'content', ['Marketing Fundamentals', 'Brand Positioning', 'Customer Journey', 'Marketing Channels', 'Sales Strategy', 'Promotion Planning', 'Sales Forecast']],
    [6, 'Operations & Team', '⚙️', 'operations', 'content', ['Operations Plan', 'Production and Delivery', 'Management Structure', 'Roles and Responsibilities', 'Technology and Tools', 'Supplier and Partner Management', 'Operating Risks']],
    [7, 'Finance & Funding', '💰', 'finance', 'content', ['Startup Budget', 'Cash Flow Projections', 'Break-even Analysis', 'Profitability Forecast', 'Funding Sources', 'Financial Assumptions', 'Financial Plan Review']],
    [8, 'Legal, Risk & Milestones', '⚖️', 'risk', 'content', ['Legal and Compliance', 'Risk Management', 'Insurance and Safety', 'Milestones and Timeline', 'Implementation Roadmap', 'Contingency Planning', 'Business Readiness Check']],
    [9, 'Writing the Full Business Plan', '📝', 'plan', 'projects', ['Writing the Executive Summary', 'Drafting the Company Description', 'Market Analysis Section', 'Marketing and Sales Section', 'Operations Section', 'Financial Section', 'Risk and Appendix']],
    [10, 'Capstone & Graduation', '🎓', 'capstone', 'assessment', ['Capstone Business Plan', 'Pitching the Plan', 'Investor Q&A', 'Final Assessment', 'Certificate of Completion']]
  ];

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  var skillLabel = {
    orientation: 'business planning foundations',
    idea: 'idea generation and validation',
    research: 'market research',
    model: 'business model design',
    marketing: 'marketing and sales planning',
    operations: 'operations and team planning',
    finance: 'financial planning',
    risk: 'risk, legal and implementation planning',
    plan: 'business-plan writing',
    capstone: 'your capstone project'
  };

  var TEMPLATES = {
    plan: '<h4>📥 Template: Business Plan</h4><ol><li>Executive Summary</li><li>Business Description</li><li>Market Opportunity</li><li>Product or Service</li><li>Marketing and Sales Strategy</li><li>Operations Plan</li><li>Management and Team</li><li>Financial Plan</li><li>Risk Management</li><li>Appendix</li></ol>',
    financial: '<h4>📥 Template: Financial Plan</h4><ul><li>Startup costs</li><li>Monthly revenue forecast</li><li>Variable and fixed costs</li><li>Cash flow</li><li>Break-even point</li><li>Funding requirement</li></ul>',
    marketing: '<h4>📥 Template: Marketing Plan</h4><ul><li>Target market</li><li>Customer pain points</li><li>Brand message</li><li>Channels and tactics</li><li>Sales funnel</li><li>Budget and KPIs</li></ul>',
    risk: '<h4>📥 Template: Risk Register</h4><ul><li>Risk</li><li>Impact</li><li>Likelihood</li><li>Mitigation</li><li>Owner</li><li>Trigger/response</li></ul>'
  };

  function templateFor(name) {
    if (/Executive Summary|Business Plan|Full Business Plan|Company Description|Drafting the Full Plan/i.test(name)) return TEMPLATES.plan;
    if (/Financial|Budget|Cash Flow|Break-even|Funding/i.test(name)) return TEMPLATES.financial;
    if (/Marketing|Sales|Customer Journey|Brand/i.test(name)) return TEMPLATES.marketing;
    if (/Risk|Legal|Milestone|Contingency/i.test(name)) return TEMPLATES.risk;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'business planning';
    var focus = position % 2 ? 'practical application with a real business idea' : 'conceptual understanding and plain-language planning';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Business Plan Mastery · ' + esc(moduleTitle) + '</strong><span>Write a practical plan</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, review the steps, and complete the action task before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand the decision or document that <em>' + esc(name) + '</em> supports.</li>' +
      '<li>Use the lesson to improve your own business idea or a case study.</li>' +
      '<li>Write one clear sentence explaining how this section changes your plan.</li></ul>' +
      '<h4>Action task</h4><ol>' +
      '<li><strong>Task 1:</strong> Draft how <em>' + esc(name) + '</em> applies to your chosen business.</li>' +
      '<li><strong>Task 2:</strong> Write one improvement you will make before you finish the plan.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real business example from Liberia or your community.</div>') +
      '<p><strong>Printable notes:</strong> Use Print → Save as PDF to keep a copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your journey from idea to a fundable business plan.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical business planning exercise. Complete it for one real or realistic business idea and save it in your portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Use the lesson method to draft the section.</li><li>Write the information using simple, clear business language.</li><li>Review it for realism, numbers, and consistency with the rest of the plan.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A clear written section you can later merge into your complete business plan.</div>') +
      '<p><strong>Downloadable:</strong> Save or print the result for future revision.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'A business plan is mainly used to:', opts: ['Avoid all decisions', 'Guide a business and help others understand the opportunity', 'Replace marketing', 'Only record taxes'], correct: 1, exp: 'A business plan helps a founder and supports communication with lenders, partners, or investors.' },
      { q: 'The best business plans are:', opts: ['Very long but vague', 'Clear, realistic and backed by evidence', 'Full of jargon only', 'Written after launch'], correct: 1, exp: 'Good plans are understandable, realistic, and grounded in evidence.' },
      { q: 'A strong business plan should begin with:', opts: ['Only the financial figures', 'A clear understanding of the problem, idea and opportunity', 'A long product list', 'The founder’s personal story only'], correct: 1, exp: 'The plan should start with the opportunity and why it matters.' },
      { q: 'A realistic business plan usually includes:', opts: ['Only a dream', 'Customer value, operations, marketing, risk and finances', 'Only a logo', 'Only a slogan'], correct: 1, exp: 'A credible plan covers the whole business, not only a banner headline.' },
      { q: 'The capstone in this course helps you:', opts: ['Skip the work', 'Build one complete business plan you can use in real life', 'Only memorize terms', 'Avoid discussion'], correct: 1, exp: 'The capstone turns learning into a practical, usable plan.' }
    ],
    idea: [
      { q: 'A good business idea usually solves:', opts: ['A problem people do not feel', 'A real customer problem or unmet need', 'Only the founder’s boredom', 'A random trend with no evidence'], correct: 1, exp: 'Successful businesses are built around genuine needs or frustrations.' },
      { q: 'Customer discovery helps you learn:', opts: ['Only your own opinion', 'What customers really need and how they behave', 'The price of your competitor’s office', 'A list of raw ideas'], correct: 1, exp: 'Customer discovery tests assumptions before the business is built.' },
      { q: 'A problem statement should describe:', opts: ['Only the product features', 'The pain, inconvenience or opportunity the customer experiences', 'The founder’s age', 'The company’s social media handle'], correct: 1, exp: 'It connects the business to the customer's real problem.' },
      { q: 'Validation means:', opts: ['Ignoring feedback', 'Checking whether the problem and idea have real demand', 'Hiring staff early', 'Launching without testing'], correct: 1, exp: 'Validation reduces risk by testing demand before major spending.' }
    ],
    research: [
      { q: 'Primary research is data you:', opts: ['Find in a report', 'Collect yourself from interviews or surveys', 'Guess without asking', 'Copy from a competitor'], correct: 1, exp: 'Primary research is original information gathered from the market.' },
      { q: 'Competitor analysis helps you understand:', opts: ['Who is offering something similar and how you differ', 'Only your own business name', 'The tax code', 'Your office size'], correct: 0, exp: 'It identifies key rivals and your possible edge.' },
      { q: 'A target market is:', opts: ['Everyone on earth', 'The group of customers most likely to buy your offer', 'A logo', 'A venue'], correct: 1, exp: 'Targeting improves marketing efficiency and product fit.' },
      { q: 'SWOT analysis is useful because it:', opts: ['Randomly lists words', 'Shows strengths, weaknesses, opportunities and threats', 'Avoids planning', 'Only checks the price'], correct: 1, exp: 'SWOT gives a balanced view of the business environment.' }
    ],
    model: [
      { q: 'A value proposition says:', opts: ['How much the founder earns', 'Why customers should choose your product or service', 'Only the business name', 'The location of the office'], correct: 1, exp: 'It explains the unique value for the customer.' },
      { q: 'Revenue streams are:', opts: ['The ways money enters the business', 'The names of employees', 'The location of suppliers', 'A business slogan'], correct: 0, exp: 'Revenue streams are the sources of income.' },
      { q: 'Cost structure helps you see:', opts: ['Only the founder’s salary', 'What the business must pay to operate', 'The office design only', 'The tax rate only'], correct: 1, exp: 'It shows the essential costs behind the business.' },
      { q: 'A business model explains:', opts: ['How the business creates and captures value', 'Only how to advertise', 'Only how to count sales', 'Only how to design a logo'], correct: 1, exp: 'The model links value, operations and income.' }
    ],
    marketing: [
      { q: 'A marketing plan should cover:', opts: ['Only the founder’s hobbies', 'Customers, channels, message, budget and sales goals', 'Only the legal structure', 'Only the product price'], correct: 1, exp: 'Marketing needs a clear customer, message, route to market, and budget.' },
      { q: 'Brand positioning is about:', opts: ['How you want the customer to see you in the market', 'How many employees you hire', 'The office rent', 'Your taxes'], correct: 0, exp: 'Positioning shapes perception versus the competition.' },
      { q: 'A sales strategy should answer:', opts: ['How the business will attract and convert customers', 'Why the founder likes the business', 'Only the legal structure', 'Only the file names'], correct: 1, exp: 'Sales strategy connects the offer to actual customer conversion.' },
      { q: 'The customer journey maps:', opts: ['The path from awareness to purchase and after-sales support', 'Only design work', 'Only tax forms', 'Only supplier contacts'], correct: 0, exp: 'The journey covers the full buying experience.' }
    ],
    operations: [
      { q: 'An operations plan explains:', opts: ['How the product or service is created and delivered', 'Only the founder’s biography', 'Only the office layout', 'Only the logo'], correct: 0, exp: 'Operations covers delivery, process, and service quality.' },
      { q: 'Management structure should clarify:', opts: ['Who does what and who is accountable', 'Only the names of vendors', 'Only the product colour', 'Only the website domain'], correct: 0, exp: 'Roles and responsibilities reduce confusion and gaps.' },
      { q: 'Technology in a business plan is relevant when it helps:', opts: ['The business run more efficiently or serve customers better', 'Only by adding cost with no benefit', 'Only to increase jargon', 'Only for entertainment'], correct: 0, exp: 'Technology should support value, efficiency, and scale.' },
      { q: 'A supplier and partner strategy matters because it affects:', opts: ['Only the logo', 'Reliability, costs, quality, and risk', 'Only the founder’s mood', 'Only the product name'], correct: 1, exp: 'Partners and suppliers shape delivery and cost.' }
    ],
    finance: [
      { q: 'A startup budget estimates:', opts: ['How much the business needs to start and operate', 'Only the founder’s profit later', 'Only the office chairs', 'Only the brand name'], correct: 0, exp: 'A budget shows the upfront and running costs required to launch and operate.' },
      { q: 'Break-even analysis shows:', opts: ['The point where revenue covers costs', 'The founder’s salary target', 'Only legal fees', 'Only taxes'], correct: 0, exp: 'Break-even tells you the sales level needed to stop losing money.' },
      { q: 'Cash flow is important because:', opts: ['It tracks money coming in and going out over time', 'It does not matter in a business plan', 'It only measures brand awareness', 'It is the same as profit always'], correct: 0, exp: 'Cash flow helps a business survive and plan for timing gaps.' },
      { q: 'Funding sources can include:', opts: ['Bootstrapping, grants, loans, investors, or sales revenue', 'Only the founder’s personal dreams', 'Only ad spending', 'Only legal paperwork'], correct: 0, exp: 'Funding can come from multiple sources depending on the business model and stage.' }
    ],
    risk: [
      { q: 'Risk management in a plan should:', opts: ['Hide all weaknesses', 'Identify major threats and how they will be handled', 'Ignore operations', 'Only discuss competition'], correct: 1, exp: 'A good plan acknowledges risk and shows a response.' },
      { q: 'A legal and compliance section matters because it helps the business:', opts: ['Avoid regulations', 'Operate properly and reduce avoidable penalties', 'Skip all records', 'Ignore taxes'], correct: 1, exp: 'Compliance reduces legal and operational risk.' },
      { q: 'A milestone plan is useful because it:', opts: ['Shows the sequence of actions and timing needed to launch', 'Hides the timeline', 'Does not matter', 'Only lists names'], correct: 0, exp: 'Milestones turn the plan into an executable roadmap.' },
      { q: 'An appendix can include:', opts: ['Support data, charts, CVs, and extra documents', 'Only the logo', 'Only the founder’s story', 'Only one sentence'], correct: 0, exp: 'Appendices provide evidence and backup information without cluttering the main plan.' }
    ]
  };

  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.idea, BANK.research, BANK.model, BANK.marketing, BANK.operations, BANK.finance, BANK.risk);
    var out = [];
    for (var i = 0; i < count; i++) {
      out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]);
    }
    return out;
  }

  function buildModules() {
    return curriculum.map(function (entry, index) {
      var moduleNum = entry[0];
      var title = entry[1];
      var icon = entry[2];
      var skill = entry[3];
      var type = entry[4];
      var lessonNames = entry[5] || [];
      return {
        num: moduleNum,
        title: title,
        icon: icon,
        skill: skill,
        type: type,
        lessons: lessonNames.map(function (name, pos) {
          var v = VIDEO_MAP[name] || '';
          return { t: (moduleNum + '.' + (pos + 1) + ' ' + name), d: '08:00', v: v, title: name, module: title, skill: skill };
        })
      };
    });
  }

  var course = {
    id: 'business-plan',
    title: 'Business Plan Mastery',
    shortDesc: 'Learn how to research, design, write, and present a realistic business plan that attracts customers, lenders, and investors.',
    category: 'Business & Planning',
    icon: '📄',
    gradient: 'linear-gradient(135deg,#b45309,#f59e0b)',
    instructor: 'Samuel Tolbert',
    instructorTitle: 'Founder & CEO, Tolbert Innovation Hub',
    instructorBio: 'Samuel Tolbert leads TIH programs that help learners turn ideas into practical, fundable ventures with clear business strategy and realistic planning.',
    rating: 4.8,
    reviewCount: 215,
    students: '1,400+',
    duration: '18h',
    level: 'Beginner',
    price: 'FREE',
    origPrice: '$90',
    isFree: true,
    badge: 'free',
    certId: 'TIH-2026-BP-0001',
    learn: [
      'Understand why a business plan matters and what it should achieve',
      'Research the problem, market, and customer opportunity',
      'Design a value proposition and a realistic business model',
      'Write practical sections for marketing, operations, and finance',
      'Create a credible funding and risk plan',
      'Draft and pitch a complete business plan for a real idea'
    ],
    requirements: [
      'No prior business experience required',
      'A business idea or a case study to work on',
      'A notebook or digital document for writing and planning'
    ],
    about: [
      'A business plan turns a good idea into a real, manageable venture. It helps founders understand their market, test assumptions, set priorities, and communicate clearly with partners, lenders, and investors.',
      'This course makes business planning practical and accessible. You will move from understanding the core business problem to writing each section of the plan, from the market and operations to finance, risks, and funding.',
      'By the end of the course, you will be able to create a complete business plan for an idea you can actually use in the real world.'
    ],
    modules: buildModules(),
    _businessPlanFullBuilt: true
  };

  var existing = COURSES_DB['business-plan'] || {};
  for (var key in course) {
    if (Object.prototype.hasOwnProperty.call(course, key)) existing[key] = course[key];
  }
  COURSES_DB['business-plan'] = existing;

  if (typeof window !== 'undefined') {
    window.TIH_LESSON_NOTES = window.TIH_LESSON_NOTES || {};
    window.TIH_LESSON_NOTES['business-plan'] = window.TIH_LESSON_NOTES['business-plan'] || {};

    curriculum.forEach(function (entry, idx) {
      var moduleTitle = entry[1];
      var skill = entry[3];
      (entry[5] || []).forEach(function (name, pos) {
        window.TIH_LESSON_NOTES['business-plan'][name] = note(moduleTitle, skill, name, idx + pos + 1);
      });
    });
  }

  if (typeof window !== 'undefined') {
    window.TIH_BUSINESS_PLAN_QUIZ_BANK = window.TIH_BUSINESS_PLAN_QUIZ_BANK || {};
    var quizBank = {};
    for (var skillKey in BANK) {
      if (Object.prototype.hasOwnProperty.call(BANK, skillKey)) {
        quizBank[skillKey] = pickQuestions(skillKey, 5);
      }
    }
    window.TIH_BUSINESS_PLAN_QUIZ_BANK = quizBank;
  }
})();
