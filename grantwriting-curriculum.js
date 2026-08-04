/* TIH Complete Grant Writing & Fundraising Professional Certificate.
   Rebuilds COURSES_DB['grant-writing'] into the full 20-module program taking a
   beginner to professional grant writer & fundraising specialist: finding
   funding, organizational readiness, needs assessment, proposal writing,
   project planning, budgeting, review & submission, fundraising, digital
   fundraising, donor relations, grant management, M&E, technology & AI,
   career, real-world proposals, a capstone and a graduation module. Every
   content lesson has a video + printable notes; project lessons carry briefs
   and downloadable templates. Modelled on projectmgmt-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'grant-writing';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._grantFullBuilt) return;

  var V = ['GMsl-wR-wmM', 'tL6V3hNdbVY', 'VCvIlKM39-w', 'lYi30bL0AMo', 'GH7lLHcshqQ', 'ENxQLZO0sRw', '0nIf9hqrBzc', 'ByQRri_LTUE', 'Yp9VxTWMj7g', 'emhvQrFbNBA', 'mW4JgyCQ8EI', 'a1uKxBaq3Jk', 'hvFx_gocMug', '_OQ-qVLkJ0Y', '_1PAOSCbzqE', 'cyRF479o1iU'];
  var VIDEOS = {
    orientation: [V[0], V[1]], grants: [V[1], V[2]], finding: [V[2], V[3]], readiness: [V[3], V[4]],
    needs: [V[4], V[5]], proposal: [V[5], V[6]], planning: [V[6], V[7]], budget: [V[7], V[8]],
    review: [V[8], V[9]], fundraising: [V[9], V[10]], fundstrategy: [V[10], V[11]], digital: [V[11], V[12]],
    donor: [V[12], V[13]], management: [V[13], V[14]], mande: [V[14], V[15]], tech: [V[0], V[11]],
    career: [V[1], V[15]], projects: [V[5], V[9]], capstone: [V[0], V[6]], assessment: [V[0]]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Grant Writing?', 'What is Fundraising?', 'Career Opportunities', 'Types of Funding Organizations', 'Ethics in Grant Writing', 'Course Roadmap', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'Introduction to Grants', '📜', 'grants', 'content', ['Understanding Grants', 'Types of Grants', 'Government Grants', 'NGO Grants', 'Foundation Grants', 'Corporate Grants', 'International Development Grants', 'Small Business Grants', 'Grant Life Cycle', 'Grant Terminology']],
    [3, 'Finding Funding Opportunities', '🔎', 'finding', 'content', ['Researching Donors', 'Grant Databases', 'Foundation Directories', 'Government Funding Portals', 'Corporate Giving Programs', 'Reading Grant Guidelines', 'Eligibility Requirements', 'Grant Opportunity Assessment', 'Building a Funding Pipeline', 'Funding Research Assignment']],
    [4, 'Organizational Readiness', '🏛️', 'readiness', 'content', ['Mission & Vision', 'Organizational Capacity', 'Governance Structure', 'Financial Readiness', 'Registration & Legal Documents', 'Organizational Profile', 'Strategic Planning', 'Preparing Supporting Documents']],
    [5, 'Needs Assessment', '📋', 'needs', 'content', ['Identifying Community Problems', 'Conducting Research', 'Collecting Data', 'Stakeholder Consultation', 'Problem Statement', 'Root Cause Analysis', 'Target Beneficiaries', 'Community Assessment Report']],
    [6, 'Proposal Writing Fundamentals', '✍️', 'proposal', 'content', ['Anatomy of a Grant Proposal', 'Executive Summary', 'Organizational Background', 'Statement of Need', 'Goals and Objectives', 'Project Design', 'Activities and Timeline', 'Expected Outcomes', 'Sustainability Plan', 'Proposal Checklist']],
    [7, 'Project Planning', '🗓️', 'planning', 'content', ['Project Scope', 'Work Plan', 'Logical Framework (Logframe)', 'Results Framework', 'Risk Assessment', 'Monitoring Indicators', 'Evaluation Plan', 'Project Timeline (Gantt Chart)']],
    [8, 'Budget Development', '💵', 'budget', 'content', ['Budget Basics', 'Personnel Costs', 'Equipment Costs', 'Operational Costs', 'Indirect Costs', 'Budget Justification', 'Cost Sharing', 'Financial Sustainability', 'Budget Review', 'Budget Assignment']],
    [9, 'Proposal Review & Submission', '🖊️', 'review', 'content', ['Editing Techniques', 'Proofreading', 'Compliance Checks', 'Proposal Formatting', 'Attachments', 'Submission Portals', 'Submission Deadlines', 'Follow-Up Strategies']],
    [10, 'Fundraising Fundamentals', '🎁', 'fundraising', 'content', ['Principles of Fundraising', 'Fundraising Ethics', 'Individual Giving', 'Corporate Sponsorship', 'Major Donors', 'Membership Programs', 'Planned Giving', 'Annual Giving Campaigns']],
    [11, 'Fundraising Strategies', '📣', 'fundstrategy', 'content', ['Fundraising Planning', 'Campaign Design', 'Donor Segmentation', 'Donor Stewardship', 'Relationship Building', 'Volunteer Fundraising', 'Peer-to-Peer Fundraising', 'Community Fundraising', 'Online Fundraising', 'Mobile Giving']],
    [12, 'Digital Fundraising', '📱', 'digital', 'content', ['Social Media Fundraising', 'Crowdfunding Campaigns', 'Email Fundraising', 'Website Donation Pages', 'SMS Fundraising', 'Online Payment Platforms', 'Digital Storytelling', 'Campaign Analytics']],
    [13, 'Donor Relations & Communication', '🤝', 'donor', 'content', ['Building Donor Relationships', 'Donor Communication', 'Thank-You Letters', 'Donor Recognition', 'Stewardship Reports', 'Donor Retention', 'Managing Donor Databases', 'CRM Systems']],
    [14, 'Grant Management', '📂', 'management', 'content', ['Award Acceptance', 'Grant Agreements', 'Financial Management', 'Procurement', 'Compliance', 'Monitoring Activities', 'Risk Management', 'Reporting Requirements']],
    [15, 'Monitoring, Evaluation & Reporting', '📊', 'mande', 'content', ['Monitoring & Evaluation Basics', 'Performance Indicators', 'Data Collection', 'Progress Reports', 'Financial Reports', 'Impact Measurement', 'Final Reports', 'Lessons Learned']],
    [16, 'Technology & AI for Grant Writers', '🤖', 'tech', 'content', ['AI for Proposal Drafting', 'ChatGPT for Grant Writing', 'Grant Management Software', 'CRM Software', 'Microsoft Excel for Budgets', 'Canva for Proposal Graphics', 'Productivity Tools', 'Document Collaboration']],
    [17, 'Freelancing & Career Development', '💼', 'career', 'content', ['Becoming a Freelance Grant Writer', 'Building a Portfolio', 'Finding Clients', 'Proposal Pricing', 'Writing Contracts', 'Personal Branding', 'LinkedIn Optimization', 'Interview Preparation']],
    [18, 'Real-World Projects', '🏗️', 'projects', 'projects', ['NGO Grant Proposal', 'Education Grant Proposal', 'Health Project Proposal', 'Youth Development Proposal', "Women's Empowerment Proposal", 'Agriculture Project Proposal', 'Small Business Grant Proposal', 'Community Development Proposal', 'Fundraising Campaign Plan', 'Donor Presentation']],
    [19, 'Capstone Project', '🎓', 'capstone', 'projects', ['Identify a Funding Opportunity', 'Conduct a Needs Assessment', 'Develop a Project Plan', 'Prepare a Budget', 'Write a Complete Grant Proposal', 'Design a Fundraising Strategy', 'Present the Proposal', 'Final Review']],
    [20, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['Grant Writing Fundamentals Assessment', 'Budget Development Assessment', 'Fundraising Assessment', 'Donor Relations Assessment', 'Grant Management Assessment', 'Monitoring & Evaluation Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'grant writing & fundraising foundations', grants: 'understanding grants', finding: 'finding funding opportunities', readiness: 'organizational readiness', needs: 'needs assessment', proposal: 'proposal writing', planning: 'project planning', budget: 'budget development', review: 'proposal review & submission', fundraising: 'fundraising fundamentals', fundstrategy: 'fundraising strategies', digital: 'digital fundraising', donor: 'donor relations', management: 'grant management', mande: 'monitoring, evaluation & reporting', tech: 'technology & AI for grant writers', career: 'freelancing & career', projects: 'real-world proposals', capstone: 'your capstone grant proposal', assessment: 'your knowledge' };

  var TEMPLATES = {
    proposal: '<h4>📥 Template: Grant Proposal</h4><ol><li>Executive Summary</li><li>Organizational Background</li><li>Statement of Need (with data)</li><li>Goals &amp; SMART Objectives</li><li>Project Design / Activities</li><li>Timeline &amp; Work Plan</li><li>Expected Outcomes &amp; Indicators</li><li>Budget &amp; Justification</li><li>Sustainability Plan</li><li>Monitoring &amp; Evaluation</li></ol>',
    budget: '<h4>📥 Template: Budget</h4><ul><li>Personnel (roles, % time, cost)</li><li>Equipment &amp; supplies</li><li>Operational/programme costs</li><li>Indirect/overhead costs</li><li>Cost sharing / co-funding</li><li>Budget justification (why each cost)</li><li>Totals per year and grand total</li></ul>',
    logframe: '<h4>📥 Template: Logical Framework (Logframe)</h4><p>A 4×4 matrix:</p><ul><li>Rows: Goal · Outcomes · Outputs · Activities</li><li>Columns: Narrative · Indicators · Means of Verification · Assumptions</li></ul>',
    concept: '<h4>📥 Template: Concept Note</h4><ul><li>Title &amp; organization</li><li>Problem / need (brief)</li><li>Proposed solution &amp; objectives</li><li>Target beneficiaries</li><li>Approximate budget &amp; duration</li><li>Expected impact</li></ul>',
    needs: '<h4>📥 Template: Needs Assessment</h4><ul><li>Problem statement</li><li>Evidence &amp; data (who is affected, how much)</li><li>Root causes</li><li>Stakeholder input</li><li>Target beneficiaries</li><li>Gap the project will address</li></ul>',
    gantt: '<h4>📥 Template: Gantt Chart / Timeline</h4><p>Columns: Activity · Responsible · Start · End · Milestone. Bars on a monthly timeline; mark key milestones and reporting points.</p>',
    donorreport: '<h4>📥 Template: Donor Report</h4><ul><li>Progress against objectives &amp; indicators</li><li>Activities completed this period</li><li>Beneficiaries reached</li><li>Financial report (budget vs actual)</li><li>Challenges &amp; lessons learned</li><li>Plans for next period</li></ul>',
    fundplan: '<h4>📥 Template: Fundraising Plan</h4><ul><li>Fundraising goal &amp; timeline</li><li>Audience/donor segments</li><li>Channels (events, online, major donors, grants)</li><li>Campaign calendar</li><li>Budget &amp; expected return</li><li>Stewardship &amp; follow-up</li></ul>',
    me: '<h4>📥 Template: Monitoring &amp; Evaluation Framework</h4><ul><li>Indicators (output &amp; outcome)</li><li>Baseline &amp; target</li><li>Data source &amp; collection method</li><li>Frequency &amp; responsible person</li><li>Use of the data (reporting/decisions)</li></ul>'
  };
  function templateFor(name) {
    if (/Anatomy of a Grant Proposal|Grant Proposal|Write a Complete Grant Proposal/i.test(name)) return TEMPLATES.proposal;
    if (/Budget/i.test(name)) return TEMPLATES.budget;
    if (/Logical Framework|Logframe|Results Framework/i.test(name)) return TEMPLATES.logframe;
    if (/Executive Summary/i.test(name)) return TEMPLATES.concept;
    if (/Needs Assessment|Community Assessment|Problem Statement|Conduct a Needs Assessment/i.test(name)) return TEMPLATES.needs;
    if (/Gantt|Project Timeline/i.test(name)) return TEMPLATES.gantt;
    if (/Donor|Stewardship Reports|Progress Reports|Final Reports/i.test(name)) return TEMPLATES.donorreport;
    if (/Fundraising Planning|Fundraising Campaign Plan|Campaign Design|Design a Fundraising Strategy/i.test(name)) return TEMPLATES.fundplan;
    if (/Monitoring & Evaluation|Monitoring Indicators|Evaluation Plan|Impact Measurement/i.test(name)) return TEMPLATES.me;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'grant writing skills';
    var focus = position % 2 ? 'practical technique, real examples and donor-ready writing' : 'understanding the concept, applying it to a real proposal and reviewing the result';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Grant Writing &amp; Fundraising · ' + esc(moduleTitle) + '</strong><span>Win funding</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and why donors care about it.</li>' +
      '<li>Learn how to do it well and the mistakes that lose funding.</li>' +
      '<li>Apply it to a real or sample proposal for an NGO, school, church or business.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real Liberian community, NGO or organization funding need.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Draft <em>' + esc(name) + '</em> for a sample project.</li>' +
      '<li><strong>Exercise 2:</strong> Review it against donor guidelines and improve one weakness.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming a professional grant writer &amp; fundraiser.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Produce the deliverable for a real or realistic organization and add it to your grant writing portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Identify the funder, need and beneficiaries.</li><li>Develop the document (proposal, budget, plan) using the course method.</li><li>Review it against donor guidelines and finalise it to a professional standard.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A complete, donor-ready document for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Grant writing is the process of:', opts: ['Writing novels', 'Preparing proposals to secure funding from donors', 'Selling products', 'Filing taxes'], correct: 1, exp: 'Grant writing seeks funding through written proposals.' },
      { q: 'Fundraising is:', opts: ['Only grants', 'Raising money from various sources for a cause', 'Only sales', 'Only loans'], correct: 1, exp: 'Fundraising mobilises resources from donors and the public.' },
      { q: 'Ethics in grant writing requires:', opts: ['Exaggerating impact', 'Honesty, accuracy and using funds as intended', 'Hiding costs', 'Copying proposals'], correct: 1, exp: 'Grant writers must be honest and transparent.' },
      { q: 'A funder is more likely to give when a proposal is:', opts: ['Vague', 'Clear, evidence-based and aligned to their priorities', 'Very long', 'Emotional only'], correct: 1, exp: 'Alignment, clarity and evidence win funding.' },
      { q: 'The best proposals start by understanding the:', opts: ['Budget only', 'Funder’s guidelines and the real need', 'Logo', 'Deadline only'], correct: 1, exp: 'Read the guidelines and evidence the need first.' },
      { q: 'The capstone helps you:', opts: ['Skip work', 'Produce a complete, fundable grant proposal', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates the whole program into one proposal.' }
    ],
    grants: [
      { q: 'A grant is:', opts: ['A loan to repay', 'Funds given (usually not repaid) for a specific purpose', 'A salary', 'An investment for equity'], correct: 1, exp: 'Grants fund a purpose and generally are not repaid.' },
      { q: 'Which is a common source of grants?', opts: ['Governments and foundations', 'Only banks', 'Only individuals', 'Only stock markets'], correct: 0, exp: 'Governments, foundations, corporates and NGOs give grants.' },
      { q: 'The grant life cycle includes:', opts: ['Only writing', 'Finding, applying, managing and reporting', 'Only spending', 'Only closing'], correct: 1, exp: 'It spans finding, applying, implementing and reporting.' },
      { q: 'Foundation grants come from:', opts: ['Government only', 'Philanthropic foundations', 'Banks only', 'Customers'], correct: 1, exp: 'Foundations are philanthropic grant-makers.' },
      { q: 'Restricted funds must be used:', opts: ['Anyhow', 'For the specific purpose the donor set', 'For salaries only', 'For anything urgent'], correct: 1, exp: 'Restricted grants must be used as the donor specifies.' },
      { q: 'A key grant term "eligibility" means:', opts: ['The deadline', 'Whether you qualify to apply', 'The budget', 'The logo'], correct: 1, exp: 'Eligibility defines who may apply.' }
    ],
    finding: [
      { q: 'Donor research helps you:', opts: ['Waste time', 'Find funders that match your mission', 'Ignore guidelines', 'Skip proposals'], correct: 1, exp: 'Research targets funders aligned to your work.' },
      { q: 'Before applying you should always:', opts: ['Guess', 'Read the grant guidelines and eligibility carefully', 'Copy another proposal', 'Ignore the deadline'], correct: 1, exp: 'Guidelines and eligibility determine fit and requirements.' },
      { q: 'A funding pipeline is:', opts: ['A water pipe', 'A tracked list of prospective funding opportunities', 'A budget', 'A logo'], correct: 1, exp: 'A pipeline tracks prospects through the funding cycle.' },
      { q: 'Applying to a funder you are not eligible for usually:', opts: ['Wins money', 'Wastes effort and is rejected', 'Is required', 'Guarantees funding'], correct: 1, exp: 'Check eligibility to avoid wasted, rejected applications.' },
      { q: 'Grant databases and directories help you:', opts: ['Nothing', 'Discover relevant funding opportunities', 'Write budgets', 'Design logos'], correct: 1, exp: 'They aggregate opportunities to search.' },
      { q: 'Matching a proposal to a funder’s priorities:', opts: ['Hurts your chances', 'Greatly improves your chances', 'Is illegal', 'Is optional always'], correct: 1, exp: 'Alignment with priorities is a top success factor.' }
    ],
    needs: [
      { q: 'A statement of need should be:', opts: ['Opinion only', 'Backed by data and evidence', 'Vague', 'About your org only'], correct: 1, exp: 'Evidence and data make the need compelling.' },
      { q: 'A needs assessment identifies:', opts: ['Your logo', 'The real problem and who it affects', 'Your salary', 'The deadline'], correct: 1, exp: 'It defines the problem, causes and beneficiaries.' },
      { q: 'Root cause analysis helps you:', opts: ['Treat symptoms', 'Address the underlying cause of a problem', 'Ignore the problem', 'Add scope'], correct: 1, exp: 'Addressing causes creates lasting change.' },
      { q: 'Target beneficiaries are:', opts: ['The donors', 'The people the project will help', 'The staff only', 'Competitors'], correct: 1, exp: 'Beneficiaries are those the project serves.' },
      { q: 'Stakeholder consultation improves a proposal by:', opts: ['Slowing it', 'Grounding it in real community input', 'Hiding needs', 'Adding cost only'], correct: 1, exp: 'Community input makes the project relevant and credible.' },
      { q: 'Good data for a needs statement can come from:', opts: ['Guesses', 'Surveys, official statistics and interviews', 'Nothing', 'Only the internet ads'], correct: 1, exp: 'Use credible primary and secondary data.' }
    ],
    proposal: [
      { q: 'The executive summary should:', opts: ['Be the longest part', 'Briefly summarise the whole proposal', 'Only list costs', 'Be skipped'], correct: 1, exp: 'It gives a concise overview of the entire proposal.' },
      { q: 'SMART objectives are:', opts: ['Vague goals', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Only budgets', 'Only activities'], correct: 1, exp: 'SMART objectives are clear and measurable.' },
      { q: 'A sustainability plan explains how the project will:', opts: ['End immediately', 'Continue or maintain impact after the grant', 'Spend faster', 'Avoid reporting'], correct: 1, exp: 'Funders want impact to last beyond their money.' },
      { q: 'Goals differ from objectives in that goals are:', opts: ['More specific', 'Broad; objectives are specific and measurable', 'The budget', 'The timeline'], correct: 1, exp: 'Goals are broad; objectives are specific steps.' },
      { q: 'The project design/methodology describes:', opts: ['The logo', 'How you will achieve the objectives', 'Only the budget', 'The deadline'], correct: 1, exp: 'It explains the activities and approach.' },
      { q: 'A proposal checklist helps ensure you:', opts: ['Forget attachments', 'Meet all requirements before submitting', 'Miss the deadline', 'Skip the budget'], correct: 1, exp: 'A checklist prevents missing required elements.' }
    ],
    planning: [
      { q: 'A logframe (logical framework) links:', opts: ['Only costs', 'Goal, outcomes, outputs, activities with indicators', 'Only staff', 'Only the logo'], correct: 1, exp: 'The logframe maps results, indicators and assumptions.' },
      { q: 'Monitoring indicators should be:', opts: ['Vague', 'Measurable signs of progress', 'Secret', 'Optional'], correct: 1, exp: 'Indicators measure progress toward results.' },
      { q: 'A work plan sets out:', opts: ['Only the budget', 'Activities, responsibilities and timing', 'The logo', 'Only risks'], correct: 1, exp: 'It schedules who does what and when.' },
      { q: 'A risk assessment in a project identifies:', opts: ['Nothing', 'What could go wrong and how to respond', 'Only strengths', 'Only the budget'], correct: 1, exp: 'It plans responses to potential problems.' },
      { q: 'An evaluation plan defines how you will:', opts: ['Ignore results', 'Measure whether the project achieved its objectives', 'Spend money', 'Avoid reporting'], correct: 1, exp: 'Evaluation assesses results and impact.' },
      { q: 'A Gantt chart shows:', opts: ['Only costs', 'Activities against a timeline', 'Only risks', 'Donor names'], correct: 1, exp: 'It visualises the schedule of activities.' }
    ],
    budget: [
      { q: 'A grant budget should:', opts: ['Be vague', 'Match the activities and be justified', 'Hide costs', 'Exceed reason'], correct: 1, exp: 'Budgets must align with activities and be justified.' },
      { q: 'A budget justification explains:', opts: ['Nothing', 'Why each cost is needed', 'Only totals', 'The logo'], correct: 1, exp: 'It defends each line item to the funder.' },
      { q: 'Indirect (overhead) costs are:', opts: ['Direct project costs', 'Shared costs like admin/rent not tied to one activity', 'Salaries only', 'Zero always'], correct: 1, exp: 'Indirect costs support the organisation broadly.' },
      { q: 'Cost sharing (co-funding) means:', opts: ['The donor pays nothing', 'Your org contributes part of the cost', 'Double the budget', 'No budget'], correct: 1, exp: 'Cost sharing shows commitment and leverages funds.' },
      { q: 'Personnel costs should reflect:', opts: ['Random numbers', 'Roles, time and fair rates', 'Only the director', 'Nothing'], correct: 1, exp: 'Base personnel costs on roles and % of time.' },
      { q: 'A realistic budget improves credibility by:', opts: ['Padding costs', 'Being accurate and tied to the work', 'Hiding items', 'Being vague'], correct: 1, exp: 'Accurate, justified budgets build funder trust.' }
    ],
    fundraising: [
      { q: 'Fundraising ethics require:', opts: ['Pressuring donors', 'Honesty, transparency and respecting donor intent', 'Hiding use of funds', 'Ignoring receipts'], correct: 1, exp: 'Ethical fundraising is honest and transparent.' },
      { q: 'Donor stewardship means:', opts: ['Ignoring donors after giving', 'Thanking, updating and retaining donors', 'Only asking for more', 'Deleting donors'], correct: 1, exp: 'Stewardship nurtures ongoing donor relationships.' },
      { q: 'A major donor is:', opts: ['Anyone', 'A donor who gives a significant amount', 'A volunteer only', 'A supplier'], correct: 1, exp: 'Major donors give large, high-value gifts.' },
      { q: 'A fundraising plan should include:', opts: ['Nothing', 'Goals, audiences, channels, calendar and budget', 'Only a logo', 'Only one event'], correct: 1, exp: 'A plan coordinates goals, channels and timing.' },
      { q: 'Donor retention matters because:', opts: ['New donors are always cheaper', 'Keeping donors is usually cheaper than finding new ones', 'It has no value', 'It lowers trust'], correct: 1, exp: 'Retained donors give more over time at lower cost.' },
      { q: 'Peer-to-peer fundraising uses:', opts: ['Only staff', 'Supporters raising funds from their own networks', 'Only grants', 'No people'], correct: 1, exp: 'Supporters fundraise among their networks.' }
    ],
    digital: [
      { q: 'Crowdfunding raises money from:', opts: ['One donor', 'Many people, often online', 'Only government', 'Only banks'], correct: 1, exp: 'Crowdfunding pools small gifts from many people.' },
      { q: 'Digital storytelling helps fundraising by:', opts: ['Confusing donors', 'Connecting donors emotionally to the cause', 'Hiding impact', 'Only listing numbers'], correct: 1, exp: 'Stories make the impact real and relatable.' },
      { q: 'Campaign analytics let you:', opts: ['Ignore results', 'See what works and improve the campaign', 'Guess', 'Avoid data'], correct: 1, exp: 'Analytics guide data-driven improvements.' },
      { q: 'A good donation page is:', opts: ['Long and confusing', 'Simple, trustworthy and mobile-friendly', 'Hidden', 'Without payment'], correct: 1, exp: 'Easy, secure donation pages convert better.' },
      { q: 'Email fundraising works best when messages are:', opts: ['Generic spam', 'Personalised and clear with a call to action', 'Rare and vague', 'Only text'], correct: 1, exp: 'Personalisation and a clear CTA drive gifts.' },
      { q: 'Online payment platforms are needed to:', opts: ['Design logos', 'Securely accept donations', 'Write proposals', 'Avoid donors'], correct: 1, exp: 'They process donations securely online.' }
    ],
    donor: [
      { q: 'A thank-you letter should be:', opts: ['Delayed and generic', 'Prompt, personal and specific', 'Skipped', 'Only a receipt'], correct: 1, exp: 'Prompt, personal thanks strengthen relationships.' },
      { q: 'A stewardship report tells donors:', opts: ['Nothing', 'How their gift was used and the impact', 'Only ask for more', 'The staff salaries only'], correct: 1, exp: 'It reports impact and use of the donor’s gift.' },
      { q: 'A CRM system helps you:', opts: ['Cook', 'Manage donor data and relationships', 'Write budgets only', 'Design logos'], correct: 1, exp: 'CRM tracks donors, gifts and communications.' },
      { q: 'Donor recognition means:', opts: ['Ignoring donors', 'Acknowledging donors appropriately', 'Publishing private data', 'Nothing'], correct: 1, exp: 'Appropriate recognition honours and retains donors.' },
      { q: 'Building donor relationships is about:', opts: ['One-time asks', 'Ongoing trust, communication and gratitude', 'Pressure', 'Silence'], correct: 1, exp: 'Relationships, not transactions, sustain giving.' },
      { q: 'Managing a donor database helps you:', opts: ['Lose track', 'Segment, communicate and steward donors well', 'Ignore donors', 'Only ask once'], correct: 1, exp: 'A good database powers targeted stewardship.' }
    ],
    management: [
      { q: 'A grant agreement sets out:', opts: ['Nothing', 'The terms, deliverables and reporting the funder requires', 'Only the logo', 'The salary'], correct: 1, exp: 'It defines obligations for both parties.' },
      { q: 'Compliance in grant management means:', opts: 'Ignoring rules,Following the funder’s rules and regulations,Spending freely,Skipping reports'.split(','), correct: 1, exp: 'You must comply with the grant’s terms and laws.' },
      { q: 'Financial management of a grant requires:', opts: ['No records', 'Accurate tracking of income and expenditure', 'Mixing funds', 'Guessing'], correct: 1, exp: 'Track grant funds accurately and separately.' },
      { q: 'Reporting requirements are:', opts: ['Optional', 'Mandatory updates the funder expects', 'Only at the start', 'A logo'], correct: 1, exp: 'Funders require progress and financial reports.' },
      { q: 'Poor grant management can lead to:', opts: ['More funding', 'Loss of funding and reputation', 'Nothing', 'Automatic renewal'], correct: 1, exp: 'Non-compliance risks funding and credibility.' },
      { q: 'Procurement under a grant should be:', opts: ['Secret', 'Transparent and value-for-money', 'To friends only', 'Undocumented'], correct: 1, exp: 'Fair, documented procurement protects integrity.' }
    ],
    mande: [
      { q: 'Monitoring is:', opts: ['One-time', 'Ongoing tracking of activities and progress', 'Only at the end', 'Optional'], correct: 1, exp: 'Monitoring is continuous tracking during the project.' },
      { q: 'Evaluation assesses:', opts: ['Nothing', 'Whether the project achieved its objectives and impact', 'Only the budget', 'The logo'], correct: 1, exp: 'Evaluation judges results, relevance and impact.' },
      { q: 'A performance indicator is:', opts: ['A guess', 'A measurable sign of progress toward a result', 'A logo', 'A donor'], correct: 1, exp: 'Indicators quantify progress.' },
      { q: 'Impact measurement looks at:', opts: ['Activities only', 'The lasting change the project created', 'The logo', 'Only spending'], correct: 1, exp: 'Impact is the real, lasting change achieved.' },
      { q: 'A final report to a donor should include:', opts: ['Nothing', 'Results, financials, lessons and impact', 'Only thanks', 'Only the date'], correct: 1, exp: 'Final reports summarise results and accountability.' },
      { q: 'Lessons learned help you:', opts: ['Repeat mistakes', 'Improve future projects and proposals', 'Ignore feedback', 'Hide problems'], correct: 1, exp: 'Capturing lessons strengthens future work.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', grants: 'grants', finding: 'finding', readiness: 'general', needs: 'needs', proposal: 'proposal', planning: 'planning', budget: 'budget', review: 'proposal', fundraising: 'fundraising', fundstrategy: 'fundraising', digital: 'digital', donor: 'donor', management: 'management', mande: 'mande', tech: 'general', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.grants, BANK.finding, BANK.needs, BANK.proposal, BANK.planning, BANK.budget, BANK.fundraising, BANK.digital, BANK.donor, BANK.management, BANK.mande);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Budget/i.test(name)) return 'budget';
    if (/Fundraising/i.test(name)) return 'fundraising';
    if (/Donor/i.test(name)) return 'donor';
    if (/Grant Management/i.test(name)) return 'management';
    if (/Monitoring|Evaluation/i.test(name)) return 'mande';
    if (/Grant Writing|Fundamentals/i.test(name)) return 'proposal';
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
        var qid = 'gw-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Complete the real-world proposals in Module 18 (10 projects).</li><li>Complete the capstone grant proposal in Module 19 and present it.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'gw-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
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
      var pqid = 'gw-m' + num + '-q' + flat;
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
    title: 'Complete Grant Writing & Fundraising Professional Certificate',
    shortDesc: 'A full 20-module program from beginner to professional grant writer & fundraising specialist: finding funding, organizational readiness, needs assessment, proposal writing, project planning, budgeting, review & submission, fundraising, digital fundraising, donor relations, grant management, M&E, technology & AI, career, 10 real-world proposals, a capstone and a Certificate of Completion.',
    category: 'Business & Fundraising',
    icon: ex.icon || '💰',
    gradient: ex.gradient || 'linear-gradient(135deg,#065f46,#10b981)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH grant writers',
    duration: '150h+',
    level: 'Beginner → Professional',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$150',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-GRANT-0001',
    learn: [
      'Identify funding opportunities and read grant guidelines',
      'Conduct needs assessments and write winning grant proposals',
      'Develop logframes, work plans, budgets and budget justifications',
      'Design fundraising strategies and run digital fundraising campaigns',
      'Build donor relationships and manage grant-funded projects',
      'Monitor, evaluate and report to donors — and build a portfolio & career'
    ],
    requirements: [
      'No prior experience required — we start from the basics',
      'A device with a word processor and spreadsheet',
      'Willingness to write real or sample proposals and budgets'
    ],
    about: [
      'This is the complete TIH Grant Writing & Fundraising Professional Certificate, rebuilt into twenty modules that take you from the basics to professional practice.',
      'Every content lesson has a video and printable notes; downloadable templates cover the Grant Proposal, Budget, Logframe, Concept Note, Needs Assessment, Gantt chart, Donor Report, Fundraising Plan and M&E Framework, and ten real-world proposals plus a capstone build your portfolio.',
      'Software & tools: Microsoft Word/Excel/PowerPoint, Google Docs/Sheets/Forms, Canva, ChatGPT, Trello, Asana, Notion and Salesforce for Nonprofits. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _grantFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[GRANT] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
