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
  var BANK = {
    general: [
      { q: 'An entrepreneur is best described as someone who:', opts: ['Only works for a salary', 'Creates value by building and running a venture, taking on risk', 'Avoids all risk', 'Never makes decisions'], correct: 1, exp: 'Entrepreneurs create value and accept calculated risk.' },
      { q: 'The most important early focus for a startup is:', opts: ['A fancy office', 'Solving a real customer problem', 'A big logo', 'Hiring many staff'], correct: 1, exp: 'Startups succeed by solving a genuine problem customers will pay for.' },
      { q: 'A "growth mindset" means you believe ability can:', opts: ['Never change', 'Grow with effort and learning', 'Only be inherited', 'Come from luck'], correct: 1, exp: 'A growth mindset drives learning and resilience.' },
      { q: 'Good decision-making under uncertainty relies on:', opts: ['Guessing only', 'Evidence, small experiments and review', 'Ignoring data', 'Waiting forever'], correct: 1, exp: 'Test assumptions cheaply, then decide with evidence.' },
      { q: 'The best way to learn entrepreneurship is to:', opts: ['Only read theory', 'Apply each concept to a real idea and act', 'Avoid customers', 'Copy exactly one business'], correct: 1, exp: 'Applied practice with real customers builds real skill.' },
      { q: 'A capstone project in this program helps you:', opts: ['Skip the work', 'Combine every skill into a real business plan and pitch', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates the whole program into one venture.' }
    ],
    ideas: [
      { q: 'The best business ideas usually start from:', opts: ['A random guess', 'A real problem people experience', 'Copying a friend', 'A logo'], correct: 1, exp: 'Strong ideas solve a real, painful problem.' },
      { q: 'Customer discovery means you:', opts: ['Assume what customers want', 'Talk to real potential customers to learn their needs', 'Only build the product', 'Ignore feedback'], correct: 1, exp: 'You learn needs by interviewing real customers before building.' },
      { q: '"Product-market fit" is when:', opts: ['You have a website', 'Your product satisfies strong market demand', 'You hire staff', 'You register a company'], correct: 1, exp: 'Fit means the market clearly wants what you built.' },
      { q: 'Idea validation should happen:', opts: ['After spending all your money', 'Before building the full product', 'Never', 'Only after launch'], correct: 1, exp: 'Validate cheaply before heavy investment.' },
      { q: 'A market gap is:', opts: ['An unmet need in the market', 'A type of loan', 'A tax form', 'A logo colour'], correct: 0, exp: 'Gaps are unmet needs you can serve profitably.' },
      { q: 'Design thinking starts with:', opts: ['Selling', 'Empathising with users', 'Accounting', 'Advertising'], correct: 1, exp: 'It begins by understanding the user deeply.' }
    ],
    research: [
      { q: 'Primary research is data you:', opts: ['Find in existing reports', 'Collect yourself (surveys, interviews)', 'Copy from competitors', 'Never use'], correct: 1, exp: 'Primary data is gathered first-hand.' },
      { q: 'Secondary research uses:', opts: ['Your own new surveys', 'Existing sources like reports and statistics', 'Only guesses', 'Nothing'], correct: 1, exp: 'Secondary research uses already-published information.' },
      { q: 'A customer persona is:', opts: ['A real single customer', 'A profile representing your typical customer', 'A logo', 'A price'], correct: 1, exp: 'Personas summarise your target customer’s traits and needs.' },
      { q: 'SWOT analysis stands for:', opts: ['Sales, Work, Output, Time', 'Strengths, Weaknesses, Opportunities, Threats', 'Study, Write, Observe, Test', 'Simple Ways Of Trading'], correct: 1, exp: 'SWOT reviews internal and external factors.' },
      { q: 'Competitor analysis helps you:', opts: ['Ignore rivals', 'Understand rivals and find your advantage', 'Copy everything', 'Set no price'], correct: 1, exp: 'You learn how to differentiate and position.' },
      { q: 'Your target market is:', opts: ['Everyone', 'The specific group most likely to buy', 'Only competitors', 'Investors only'], correct: 1, exp: 'Focus on the customers most likely to buy.' }
    ],
    model: [
      { q: 'The Business Model Canvas has how many building blocks?', opts: ['Three', 'Nine', 'Twelve', 'Five'], correct: 1, exp: 'The canvas has nine blocks.' },
      { q: 'A value proposition explains:', opts: ['Your office address', 'Why customers choose you and the problem you solve', 'Your tax rate', 'Your logo'], correct: 1, exp: 'It states the value you deliver to customers.' },
      { q: 'Revenue streams describe:', opts: ['How you earn money', 'How you hire', 'Your logo', 'Your address'], correct: 0, exp: 'Revenue streams are how the business earns.' },
      { q: 'Cost structure lists:', opts: ['Your customers', 'Your main costs to operate', 'Your partners only', 'Your slogans'], correct: 1, exp: 'It captures the major costs of the model.' },
      { q: 'Channels are:', opts: ['How you reach and deliver to customers', 'Your staff', 'Your taxes', 'Your competitors'], correct: 0, exp: 'Channels connect your value to customers.' },
      { q: 'Key partners are:', opts: ['Customers', 'Suppliers/allies who help the model work', 'Regulators only', 'Employees only'], correct: 1, exp: 'Partners provide resources or activities you rely on.' }
    ],
    marketing: [
      { q: 'A brand is mainly:', opts: ['Just a logo', 'The overall perception customers have of you', 'A tax form', 'A product only'], correct: 1, exp: 'Brand is the promise and perception, not only a logo.' },
      { q: 'SEO helps your business by:', opts: ['Paying for every click', 'Improving how you rank in search results', 'Printing flyers', 'Hiring staff'], correct: 1, exp: 'SEO improves organic search visibility.' },
      { q: 'Content marketing works by:', opts: ['Interrupting people', 'Providing useful content that attracts customers', 'Only running ads', 'Cold calling only'], correct: 1, exp: 'Helpful content builds trust and attracts buyers.' },
      { q: 'Customer acquisition cost (CAC) is:', opts: ['Revenue per sale', 'What you spend to gain one customer', 'Your tax', 'Your rent'], correct: 1, exp: 'CAC is the cost to acquire a customer.' },
      { q: 'Social media marketing is most effective when you:', opts: ['Post randomly', 'Post consistently for your target audience', 'Never engage', 'Only sell'], correct: 1, exp: 'Consistent, audience-focused content wins.' },
      { q: 'Email marketing is valuable because:', opts: ['It is outdated', 'You own the audience and can nurture them directly', 'It is illegal', 'It never converts'], correct: 1, exp: 'Email is a direct, owned channel for nurturing leads.' }
    ],
    sales: [
      { q: 'A sales funnel describes:', opts: ['A physical funnel', 'The stages from awareness to purchase', 'A tax form', 'A logo'], correct: 1, exp: 'The funnel maps the buyer’s journey to a sale.' },
      { q: 'Good pricing should reflect:', opts: ['Only your costs', 'Value to the customer and the market', 'A random number', 'Your competitor exactly'], correct: 1, exp: 'Price on value and market, not cost alone.' },
      { q: 'Customer retention matters because:', opts: ['New customers are always cheaper', 'Keeping customers is usually cheaper than acquiring new ones', 'It has no value', 'It lowers quality'], correct: 1, exp: 'Retention is typically cheaper and more profitable.' },
      { q: 'A CRM system helps you:', opts: ['Cook food', 'Manage customer relationships and follow-ups', 'File taxes only', 'Design logos'], correct: 1, exp: 'CRM tracks contacts, deals and follow-ups.' },
      { q: 'Closing a sale means:', opts: ['Ending the business', 'Getting the customer to commit to buy', 'Deleting a contact', 'Lowering price always'], correct: 1, exp: 'Closing secures the customer’s decision to buy.' },
      { q: 'Great negotiation aims for:', opts: ['You win, they lose', 'A fair outcome both sides accept', 'No agreement', 'Only your gain'], correct: 1, exp: 'Sustainable deals are mutually beneficial.' }
    ],
    finance: [
      { q: 'Cash flow is:', opts: ['Total sales only', 'The money moving in and out of the business', 'Your logo', 'Your tax rate'], correct: 1, exp: 'Cash flow tracks money in vs money out.' },
      { q: 'Break-even is the point where:', opts: ['You make maximum profit', 'Total revenue equals total costs', 'You run out of cash', 'You pay tax'], correct: 1, exp: 'At break-even, revenue covers costs exactly.' },
      { q: 'A profit & loss statement shows:', opts: ['Only assets', 'Revenue, costs and profit over a period', 'Only cash', 'Your logo'], correct: 1, exp: 'The P&L summarises income and expenses.' },
      { q: 'A balance sheet shows:', opts: ['Assets, liabilities and equity at a point in time', 'Only sales', 'Only marketing', 'Only staff'], correct: 0, exp: 'It is a snapshot of what you own and owe.' },
      { q: 'Bookkeeping means:', opts: ['Ignoring records', 'Recording financial transactions accurately', 'Only paying tax', 'Designing products'], correct: 1, exp: 'Bookkeeping keeps accurate financial records.' },
      { q: 'Startup costs are:', opts: ['Ongoing salaries only', 'The one-off costs to start the business', 'Only taxes', 'Only rent'], correct: 1, exp: 'Startup costs are the initial costs to launch.' }
    ],
    funding: [
      { q: 'Bootstrapping means:', opts: ['Taking venture capital', 'Funding the business from your own money/revenue', 'A bank loan only', 'A government grant'], correct: 1, exp: 'Bootstrapping uses personal funds and revenue.' },
      { q: 'An angel investor is:', opts: ['A bank', 'An individual who invests early money for equity', 'A customer', 'A supplier'], correct: 1, exp: 'Angels are individuals funding early startups.' },
      { q: 'Venture capital typically suits:', opts: ['Any small shop', 'High-growth startups that can scale fast', 'Only charities', 'Only farms'], correct: 1, exp: 'VC funds scalable, high-growth companies.' },
      { q: 'Crowdfunding raises money from:', opts: ['One big bank', 'Many people, often online', 'The government only', 'One angel'], correct: 1, exp: 'Crowdfunding pools small amounts from many backers.' },
      { q: 'A grant is different from a loan because it:', opts: ['Must be repaid with interest', 'Usually does not need to be repaid', 'Is always illegal', 'Is equity'], correct: 1, exp: 'Grants generally need not be repaid.' },
      { q: 'Before pitching investors you should:', opts: ['Have no plan', 'Prepare a clear pitch, numbers and ask', 'Hide your finances', 'Avoid the market'], correct: 1, exp: 'Investors expect a clear story, traction and a specific ask.' }
    ],
    legal: [
      { q: 'A sole proprietorship is:', opts: ['Owned by many shareholders', 'Owned and run by one person', 'A charity', 'A government body'], correct: 1, exp: 'One owner, simplest structure, personal liability.' },
      { q: 'An LLC mainly offers owners:', opts: ['No structure', 'Limited liability protection', 'Guaranteed profit', 'Free taxes'], correct: 1, exp: 'An LLC limits owners’ personal liability.' },
      { q: 'A trademark protects:', opts: ['An invention', 'A brand name or logo', 'A book text', 'A building'], correct: 1, exp: 'Trademarks protect brand identifiers.' },
      { q: 'A copyright protects:', opts: ['A brand name', 'Original creative works (text, music, art)', 'A machine', 'A tax ID'], correct: 1, exp: 'Copyright protects original creative works.' },
      { q: 'Registering your business helps you:', opts: ['Avoid all customers', 'Operate legally and open a business account', 'Skip taxes', 'Hide income'], correct: 1, exp: 'Registration makes the business legal and bankable.' },
      { q: 'A contract is:', opts: ['A casual chat', 'A legally binding agreement between parties', 'A logo', 'A receipt only'], correct: 1, exp: 'Contracts define enforceable rights and duties.' }
    ],
    tech: [
      { q: 'AI tools like ChatGPT can help entrepreneurs:', opts: ['Do nothing useful', 'Draft content, ideas and plans faster', 'Only play games', 'Replace all thinking'], correct: 1, exp: 'AI speeds up drafting and ideation, with human judgement.' },
      { q: 'Business automation mainly:', opts: ['Wastes time', 'Saves time by handling repetitive tasks', 'Removes all staff', 'Is illegal'], correct: 1, exp: 'Automation frees time from repetitive work.' },
      { q: 'For a simple online store you would use:', opts: ['A spreadsheet only', 'An e-commerce platform with online payments', 'Nothing', 'Only cash'], correct: 1, exp: 'E-commerce platforms handle catalog, cart and payment.' },
      { q: 'Cybersecurity basics include:', opts: ['Sharing all passwords', 'Strong passwords and regular backups', 'No updates ever', 'Ignoring risks'], correct: 1, exp: 'Strong passwords, updates and backups reduce risk.' },
      { q: 'A CRM software is used to:', opts: ['Edit videos', 'Manage customers and sales pipelines', 'Pay taxes only', 'Design logos'], correct: 1, exp: 'CRM manages customer data and sales.' },
      { q: 'Productivity tools help teams:', opts: ['Lose track of work', 'Organise tasks and collaborate', 'Avoid communication', 'Only chat'], correct: 1, exp: 'They organise tasks and improve collaboration.' }
    ],
    planning: [
      { q: 'An executive summary is:', opts: ['The longest section', 'A short overview of the whole business plan', 'Only financials', 'A logo'], correct: 1, exp: 'It briefly summarises the entire plan.' },
      { q: 'The financial plan section includes:', opts: ['Only your logo', 'Projections, costs, revenue and break-even', 'Only staff names', 'Only competitors'], correct: 1, exp: 'It contains the numbers behind the plan.' },
      { q: 'An exit strategy describes:', opts: ['How you leave a meeting', 'How founders/investors eventually realise value (sale, IPO)', 'How to fire staff', 'How to pay tax'], correct: 1, exp: 'It plans how investors and founders exit.' },
      { q: 'Risk analysis in a plan should:', opts: ['Hide all risks', 'Identify key risks and how you will manage them', 'Ignore competitors', 'Only list strengths'], correct: 1, exp: 'It shows you understand and can manage risks.' },
      { q: 'A complete business plan is useful for:', opts: ['Nothing', 'Guiding the business and attracting funding', 'Only decoration', 'Only tax'], correct: 1, exp: 'It guides execution and supports fundraising.' },
      { q: 'Market analysis in a plan covers:', opts: ['Only your product', 'Market size, trends, customers and competitors', 'Only your logo', 'Only staff'], correct: 1, exp: 'It shows the opportunity and competition.' }
    ]
  };

  function pickQuestions(skill, count) {
    var pool = BANK[skill] || BANK.general;
    var mixed = BANK.general.concat(BANK.ideas, BANK.research, BANK.model, BANK.marketing, BANK.sales, BANK.finance, BANK.funding, BANK.legal, BANK.planning, BANK.tech);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }

  /* Authored per-topic questions (entrepreneurship-topic-quizzes.js) take priority
     over the shared pools above. pickQuestions() draws the first N of a pool keyed
     by broad skill, so quizzes across a module held very few distinct questions
     between them and the same question was asked many times over. */
  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ_plain = null, TQ_mod = null;
  function buildTopicIndex() {
    if (TQ_plain) return;
    TQ_plain = {}; TQ_mod = {};
    var src = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['entrepreneurship']) || {};
    Object.keys(src).forEach(function (k) {
      var m = String(k).match(/^\s*M(\d+)\s*[:|]\s*(.+)$/i);
      if (m) TQ_mod[m[1] + '|' + normQ(m[2])] = src[k];
      else TQ_plain[normQ(k)] = src[k];
    });
  }
  function topicQuestions(moduleNum, name) {
    buildTopicIndex();
    var arr = TQ_mod[moduleNum + '|' + normQ(name)] || TQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }

  var practiceIndex = {};   // quizId -> { module, name }
  var assessIndex = [];     // { quizId, module, count, scope }
  function practiceQuiz(skill, name, moduleNum, quizId) {
    if (quizId) practiceIndex[quizId] = { module: moduleNum, name: name };
    var authored = topicQuestions(moduleNum, name);
    if (authored) return { title: 'Practice: ' + name, moduleNum: 1, questions: authored };
    return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(skill, 3).map(cloneQ) };
  }
  function assessmentQuiz(skill, name, count, moduleNum, quizId) {
    /* Only the broad, whole-course assessments (Graduation Assessment, Midterm
       and Final Examinations -- 15+ questions) draw from the interleaved
       authored pool below. The smaller, subject-named quizzes in Module 20
       (Marketing Quiz, Finance Quiz, Legal Quiz, 8 questions each) keep their
       existing skill-specific pool so they still test that specific subject
       rather than a random slice of the whole course. */
    if (quizId && count >= 15) assessIndex.push({ quizId: quizId, module: moduleNum, count: count, scope: 'course' });
    return { title: name, moduleNum: 1, questions: pickQuestions(skill, count).map(cloneQ) };
  }
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

  /* entrepreneurship-topic-quizzes.js is fetched only when this course is open, so
     it can land after this builder has run. Re-apply then: the player holds a
     reference to this same quizzes object and reads it afresh each time a quiz
     opens. */
  window.tihApplyEntrepreneurshipTopicQuizzes = function () {
    TQ_plain = null; TQ_mod = null;
    var applied = 0;
    var byModule = {};
    Object.keys(practiceIndex).forEach(function (quizId) {
      var meta = practiceIndex[quizId];
      var authored = topicQuestions(meta.module, meta.name);
      if (!authored) return;
      if (quizzes[quizId]) { quizzes[quizId].questions = authored; applied += 1; }
      (byModule[meta.module] = byModule[meta.module] || []).push(authored);
    });
    /* Module and course assessments draw from the authored questions rather than
       the shared pools, taking one from each topic in turn so an assessment
       samples across the module instead of exhausting a single topic. */
    function interleave(groups) {
      var out = [], depth = 0, added = true;
      while (added) {
        added = false;
        for (var i = 0; i < groups.length; i++) {
          if (groups[i][depth]) { out.push(groups[i][depth]); added = true; }
        }
        depth += 1;
      }
      return out;
    }
    var moduleQs = {};
    Object.keys(byModule).forEach(function (m) { moduleQs[m] = interleave(byModule[m]); });
    var moduleNums = Object.keys(moduleQs).sort(function (a, b) { return a - b; });
    var coursePool = interleave(moduleNums.map(function (m) { return moduleQs[m]; }));
    var cursor = 0;
    assessIndex.forEach(function (a) {
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var picked = [];
      if (a.scope === 'module' && moduleQs[a.module] && moduleQs[a.module].length >= a.count) {
        picked = moduleQs[a.module].slice(0, a.count);
      } else if (coursePool.length) {
        for (var i = 0; i < a.count; i++) picked.push(coursePool[(cursor + i) % coursePool.length]);
        cursor = (cursor + a.count) % coursePool.length;
      }
      if (picked.length === a.count) { quiz.questions = picked.map(cloneQ); applied += 1; }
    });
    return applied;
  };

  if (typeof console !== 'undefined' && console.log) {
    console.log('[ENT] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
