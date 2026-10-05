/* TIH Complete Grant Writing & Fundraising Professional Certificate.
   Full 20-module program. Every content lesson has a video + formal detailed
   study notes + unique practice quiz. Projects carry briefs and templates. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'grant-writing';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._grantFullBuilt) return;

  var V = ['GMsl-wR-wmM', 'tL6V3hNdbVY', 'VCvIlKM39-w', 'lYi30bL0AMo', 'GH7lLHcshqQ', 'ENxQLZO0sRw', '0nIf9hqrBzc', 'ByQRri_LTUE', 'Yp9VxTWMj7g', 'emhvQrFbNBA', 'mW4JgyCQ8EI', 'a1uKxBaq3Jk', 'hvFx_gocMug', '_OQ-qVLkJ0Y', '_1PAOSCbzqE', 'cyRF479o1iU'];
  var VIDEOS = {
    orientation: ['GMsl-wR-wmM', 'tL6V3hNdbVY', 'VCvIlKM39-w'],
    grants: ['syYVRUHK9MA', 'GMsl-wR-wmM', 'lYi30bL0AMo'],
    finding: ['OsX8OF6gEj0', 'GH7lLHcshqQ', 'ENxQLZO0sRw'],
    readiness: ['zFJO5ZEyEZY', 'ByQRri_LTUE'],
    needs: ['FoDljgKE-v8', 'Yp9VxTWMj7g'],
    proposal: ['fDVkTSHTzzY', 'emhvQrFbNBA', 'mW4JgyCQ8EI'],
    planning: ['CEgiENI_mtc', 'a1uKxBaq3Jk'],
    budget: ['0nIf9hqrBzc', 'hvFx_gocMug'],
    review: ['muF9DIjfmtE', '_OQ-qVLkJ0Y'],
    fundraising: ['EfHqXRydAzY', '_1PAOSCbzqE'],
    fundstrategy: ['hJdvu00XiF0', 'cyRF479o1iU'],
    digital: ['yAJ_HrYCf6Y', 'EfHqXRydAzY'],
    donor: ['hI2VBkyldbk', 'hJdvu00XiF0'],
    management: ['hvFx_gocMug', 'muF9DIjfmtE'],
    mande: ['HaKuRzN4k9A', 'CEgiENI_mtc'],
    tech: ['hMCmcIMkI8U', 'fDVkTSHTzzY'],
    career: ['CdQyQusFNP8', 'tL6V3hNdbVY'],
    projects: ['e48RvBlnLfM', 'fDVkTSHTzzY', '0nIf9hqrBzc'],
    capstone: ['e48RvBlnLfM', 'fDVkTSHTzzY', 'CEgiENI_mtc'],
    assessment: ['e48RvBlnLfM']
  };

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

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch];
    });
  }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = {
    orientation: 'grant writing and fundraising foundations',
    grants: 'understanding grants and the funding landscape',
    finding: 'finding and assessing funding opportunities',
    readiness: 'organizational readiness for funding',
    needs: 'needs assessment and problem analysis',
    proposal: 'professional proposal writing',
    planning: 'project planning and results frameworks',
    budget: 'budget development and financial planning',
    review: 'proposal review and submission',
    fundraising: 'fundraising fundamentals',
    fundstrategy: 'fundraising strategies and campaigns',
    digital: 'digital fundraising',
    donor: 'donor relations and stewardship',
    management: 'grant management and compliance',
    mande: 'monitoring, evaluation and reporting',
    tech: 'technology and AI tools for grant writers',
    career: 'freelancing and career development',
    projects: 'real-world proposal development',
    capstone: 'capstone grant proposal',
    assessment: 'professional assessment'
  };

  var TOPIC_DEF = {
    'Welcome to the Course': 'The Complete Grant Writing & Fundraising Professional Certificate is a structured programme that trains learners to identify funding opportunities, write competitive proposals, manage grants, and design effective fundraising strategies.',
    'What is Grant Writing?': 'Grant writing is the professional practice of preparing formal written proposals that request financial support from governments, foundations, corporations, or other funding bodies for specific projects or programmes.',
    'What is Fundraising?': 'Fundraising is the organised process of soliciting and gathering voluntary financial contributions from individuals, corporations, foundations, and the public to support the mission and activities of an organisation.',
    'Career Opportunities': 'Career opportunities in grant writing and fundraising include roles such as grant writer, fundraising officer, resource mobilisation specialist, development director, and independent consultant.',
    'Types of Funding Organizations': 'Funding organisations include government agencies, private foundations, corporate giving programmes, international development agencies, and community foundations, each with distinct priorities and application processes.',
    'Ethics in Grant Writing': 'Ethics in grant writing refers to the professional obligation to present accurate information, respect donor intent, avoid misrepresentation, and use awarded funds solely for the purposes approved by the funder.',
    'Understanding Grants': 'A grant is a sum of money awarded by a funding body to an eligible organisation or individual for a specified purpose, usually without the requirement of repayment, provided that the terms of the award are met.',
    'Types of Grants': 'Grants are commonly classified by source (government, foundation, corporate), purpose (project, operating, capital, research), and conditions (restricted or unrestricted).',
    'Government Grants': 'Government grants are funds provided by national, regional, or local public authorities to support activities that advance public policy objectives such as health, education, agriculture, or economic development.',
    'Foundation Grants': 'Foundation grants are philanthropic awards made by private or public foundations from their endowment or income to organisations whose work aligns with the foundation’s mission and funding priorities.',
    'Corporate Grants': 'Corporate grants are financial contributions made by businesses, often through corporate social responsibility or corporate foundation programmes, to support community projects that align with the company’s values or interests.',
    'Grant Life Cycle': 'The grant life cycle comprises the sequential stages of identifying opportunities, preparing and submitting proposals, receiving an award, implementing the project, reporting, and closing the grant.',
    'Researching Donors': 'Donor research is the systematic process of identifying and analysing potential funders whose interests, geographic focus, and eligibility criteria match an organisation’s mission and proposed activities.',
    'Reading Grant Guidelines': 'Grant guidelines are the official instructions issued by a funder that specify eligibility, priorities, required documents, budget rules, deadlines, and evaluation criteria for an application.',
    'Eligibility Requirements': 'Eligibility requirements are the formal conditions that an applicant must satisfy in order to be considered for a particular grant, such as legal status, geographic location, or type of activity.',
    'Building a Funding Pipeline': 'A funding pipeline is a managed list of prospective funding opportunities at different stages of research, cultivation, application, and decision, used to plan and prioritise resource-mobilisation efforts.',
    'Mission & Vision': 'A mission statement defines an organisation’s core purpose and reason for existence, while a vision statement describes the long-term change or future state the organisation aspires to achieve.',
    'Organizational Capacity': 'Organisational capacity refers to the combination of people, systems, resources, and processes that enable an organisation to plan, deliver, and account for programmes effectively.',
    'Identifying Community Problems': 'Identifying community problems involves systematically recognising and defining the social, economic, or environmental issues that affect a target population and that a proposed project seeks to address.',
    'Problem Statement': 'A problem statement is a clear, evidence-based description of the specific issue a project will address, including who is affected, the scale of the problem, and why it requires intervention.',
    'Root Cause Analysis': 'Root cause analysis is a structured method for identifying the underlying factors that produce a problem, rather than merely treating its visible symptoms.',
    'Target Beneficiaries': 'Target beneficiaries are the specific individuals, groups, or communities who will directly receive the benefits of a funded project or programme.',
    'Anatomy of a Grant Proposal': 'The anatomy of a grant proposal refers to the standard structural sections that most funders expect, including executive summary, organisational background, statement of need, goals and objectives, methodology, budget, and evaluation plan.',
    'Executive Summary': 'An executive summary is a concise overview, usually one page or less, that presents the essential elements of a proposal so that a reviewer can quickly grasp the request and its importance.',
    'Statement of Need': 'A statement of need is the section of a proposal that presents the evidence-based case for why a particular problem requires funding and why the proposed organisation is well placed to address it.',
    'Goals and Objectives': 'Goals are broad statements of the long-term change a project seeks to achieve, while objectives are specific, measurable, achievable, relevant, and time-bound (SMART) results that contribute to those goals.',
    'Project Design': 'Project design is the process of defining the activities, methods, sequencing, and resources through which a project will achieve its stated objectives.',
    'Sustainability Plan': 'A sustainability plan explains how the benefits or activities of a project will continue after the grant funding period ends, through local ownership, alternative funding, or institutionalisation.',
    'Logical Framework (Logframe)': 'A logical framework (logframe) is a matrix that links a project’s goal, outcomes, outputs, and activities with measurable indicators, means of verification, and key assumptions.',
    'Risk Assessment': 'Risk assessment is the systematic identification and analysis of potential events that could threaten the successful delivery of a project, together with planned mitigation measures.',
    'Budget Basics': 'A project budget is a detailed financial plan that itemises the estimated costs required to implement the proposed activities and that demonstrates to the funder how the requested resources will be used.',
    'Budget Justification': 'A budget justification is a narrative explanation that accompanies the budget tables and explains why each major cost is necessary and how the amount was calculated.',
    'Indirect Costs': 'Indirect costs (also called overhead or administrative costs) are expenses that support the organisation as a whole and cannot be attributed exclusively to a single project, such as rent, utilities, or central administration.',
    'Cost Sharing': 'Cost sharing (or matching) is the portion of project costs that is contributed by the applicant organisation or other partners rather than requested from the primary funder.',
    'Principles of Fundraising': 'The principles of fundraising include donor-centred communication, transparency, ethical solicitation, stewardship of gifts, and alignment of fundraising activities with the organisation’s mission.',
    'Fundraising Ethics': 'Fundraising ethics comprises the standards of honesty, respect for donor intent, confidentiality, and accountability that govern how organisations solicit, accept, and use charitable contributions.',
    'Major Donors': 'Major donors are individuals or entities whose gifts are significantly larger than the organisation’s average donation and who often require personalised cultivation and stewardship.',
    'Donor Stewardship': 'Donor stewardship is the ongoing process of thanking, recognising, reporting to, and cultivating relationships with donors after a gift has been received, with the aim of retaining their support.',
    'Crowdfunding Campaigns': 'Crowdfunding is a method of raising relatively small amounts of money from a large number of people, typically through an online platform, for a specific project or cause.',
    'Digital Storytelling': 'Digital storytelling is the use of narrative, images, video, and other media to communicate the human impact of an organisation’s work in a way that motivates online audiences to give.',
    'Building Donor Relationships': 'Building donor relationships is the intentional practice of developing trust, mutual understanding, and long-term engagement between an organisation and its supporters.',
    'Thank-You Letters': 'A thank-you letter is a prompt, personalised written expression of gratitude sent to a donor after a gift, acknowledging the contribution and reinforcing the relationship.',
    'CRM Systems': 'A Constituent Relationship Management (CRM) system is software used to store, organise, and analyse information about donors, prospects, and interactions in order to support effective fundraising and stewardship.',
    'Grant Agreements': 'A grant agreement is the formal contract between a funder and a recipient that specifies the amount awarded, the approved activities, reporting obligations, and the conditions under which funds must be used.',
    'Compliance': 'Compliance in grant management means adhering to the legal, financial, and programmatic requirements set out in the grant agreement and in applicable regulations.',
    'Monitoring & Evaluation Basics': 'Monitoring is the continuous tracking of project activities and outputs, while evaluation is the periodic assessment of whether the project is achieving its intended outcomes and impact.',
    'Performance Indicators': 'Performance indicators are specific, measurable signs used to track progress toward project outputs and outcomes.',
    'Impact Measurement': 'Impact measurement is the systematic process of assessing the longer-term changes in people’s lives or conditions that can reasonably be attributed to a project or programme.',
    'AI for Proposal Drafting': 'AI for proposal drafting refers to the responsible use of artificial-intelligence tools to assist with research, outlining, drafting, and refining grant proposals while maintaining human oversight and accuracy.',
    'Becoming a Freelance Grant Writer': 'A freelance grant writer is an independent professional who is contracted by organisations to research funding opportunities and prepare grant proposals on a fee-for-service basis.'
  };

  var TEMPLATES = {
    proposal: '<h4>📥 Template: Grant Proposal</h4><ol><li>Executive Summary</li><li>Organizational Background</li><li>Statement of Need (with data)</li><li>Goals & SMART Objectives</li><li>Project Design / Activities</li><li>Timeline & Work Plan</li><li>Expected Outcomes & Indicators</li><li>Budget & Justification</li><li>Sustainability Plan</li><li>Monitoring & Evaluation</li></ol>',
    budget: '<h4>📥 Template: Budget</h4><ul><li>Personnel (roles, % time, cost)</li><li>Equipment & supplies</li><li>Operational/programme costs</li><li>Indirect/overhead costs</li><li>Cost sharing / co-funding</li><li>Budget justification (why each cost)</li><li>Totals per year and grand total</li></ul>',
    logframe: '<h4>📥 Template: Logical Framework (Logframe)</h4><p>A 4×4 matrix:</p><ul><li>Rows: Goal · Outcomes · Outputs · Activities</li><li>Columns: Narrative · Indicators · Means of Verification · Assumptions</li></ul>',
    concept: '<h4>📥 Template: Concept Note</h4><ul><li>Title & organization</li><li>Problem / need (brief)</li><li>Proposed solution & objectives</li><li>Target beneficiaries</li><li>Approximate budget & duration</li><li>Expected impact</li></ul>',
    needs: '<h4>📥 Template: Needs Assessment</h4><ul><li>Problem statement</li><li>Evidence & data (who is affected, how much)</li><li>Root causes</li><li>Stakeholder input</li><li>Target beneficiaries</li><li>Gap the project will address</li></ul>',
    gantt: '<h4>📥 Template: Gantt Chart / Timeline</h4><p>Columns: Activity · Responsible · Start · End · Milestone. Bars on a monthly timeline; mark key milestones and reporting points.</p>',
    donorreport: '<h4>📥 Template: Donor Report</h4><ul><li>Progress against objectives & indicators</li><li>Activities completed this period</li><li>Beneficiaries reached</li><li>Financial report (budget vs actual)</li><li>Challenges & lessons learned</li><li>Plans for next period</li></ul>',
    fundplan: '<h4>📥 Template: Fundraising Plan</h4><ul><li>Fundraising goal & timeline</li><li>Audience/donor segments</li><li>Channels (events, online, major donors, grants)</li><li>Campaign calendar</li><li>Budget & expected return</li><li>Stewardship & follow-up</li></ul>',
    me: '<h4>📥 Template: Monitoring & Evaluation Framework</h4><ul><li>Indicators (output & outcome)</li><li>Baseline & target</li><li>Data source & collection method</li><li>Frequency & responsible person</li><li>Use of the data (reporting/decisions)</li></ul>'
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
    var label = skillLabel[skill] || 'grant writing and fundraising';
    var def = TOPIC_DEF[name] || (name + ' is a practical skill used to plan, finance, communicate, or manage mission-driven work.');
    var tpl = templateFor(name);
    var action = /Budget|Cost|Financial/i.test(name)
      ? 'List each necessary cost, calculate it from clear units and rates, and confirm that every cost supports an activity.'
      : /Donor|Fundraising|Giving|Sponsor|Stewardship|Relationship/i.test(name)
      ? 'Identify the audience, understand what they care about, make a clear and respectful request, and plan how the relationship will be maintained.'
      : /Need|Problem|Research|Data|Beneficiar|Stakeholder|Cause/i.test(name)
      ? 'Define the problem with evidence, identify who is affected, separate causes from symptoms, and explain why action is needed now.'
      : /Objective|Outcome|Indicator|Monitoring|Evaluation|Report|Impact|Result/i.test(name)
      ? 'State the intended change, choose measurable evidence, assign responsibility, and decide when and how progress will be checked.'
      : /Proposal|Summary|Background|Design|Plan|Timeline|Scope|Logframe/i.test(name)
      ? 'Connect the need, objectives, activities, timeline, results and budget so that each section tells one consistent story.'
      : /Grant|Funding|Foundation|Government|Corporate|Eligibility|Guideline|Portal|Pipeline/i.test(name)
      ? 'Check alignment and eligibility first, record every requirement and deadline, then decide whether the opportunity is worth pursuing.'
      : 'Understand the purpose, follow a clear process, apply it to a realistic organisation, and check the work against professional standards.';
    var example = /Budget|Cost|Financial/i.test(name)
      ? 'A youth skills project plans to train 50 learners. Instead of writing “training: US$2,000,” the writer shows 2 trainers × 5 days × US$100 = US$1,000, materials at US$10 × 50 learners = US$500, and venue at US$100 × 5 days = US$500.'
      : /Need|Problem|Research|Data|Beneficiar|Stakeholder|Cause/i.test(name)
      ? 'A community group should not write only “young people need jobs.” A stronger version states who is affected, where they live, the evidence available, the main causes, and the consequences if the problem is not addressed.'
      : /Objective|Outcome|Indicator|Monitoring|Evaluation|Report|Impact|Result/i.test(name)
      ? 'Weak: “Empower young people.” Stronger: “By December 2027, 120 unemployed youths in Montserrado County will complete certified digital-skills training, and at least 75 will enter paid work or self-employment.”'
      : /Donor|Fundraising|Giving|Sponsor|Stewardship|Relationship/i.test(name)
      ? 'A Liberian education organisation researches a company’s community priorities before requesting support, presents a specific student-learning result, thanks the donor promptly, and later reports what the contribution achieved.'
      : 'A community organisation in Monrovia reads the funder’s instructions, confirms that its education project is eligible, uses local evidence, writes measurable results, and checks that the work plan and budget agree before submission.';
    var weak = 'Uses vague claims, copies general language, ignores the funder’s instructions, or leaves important decisions unexplained.';
    var strong = 'Uses specific evidence, plain language, realistic figures, clear responsibility, and content tailored to the funder and community.';
    return '<article class="tih-gw-note">' +
      '<div class="revision-banner"><strong>Grant Writing &amp; Fundraising</strong><span>' + esc(moduleTitle) + '</span></div>' +
      '<div class="lesson-note-label">LESSON NOTE: ' + esc(name.toUpperCase()) + '</div>' +
      '<table class="gw-meta"><tr><th>Subject</th><td>Grant Writing &amp; Fundraising</td></tr><tr><th>Topic</th><td>' + esc(name) + '</td></tr><tr><th>Level</th><td>Beginner to Professional</td></tr><tr><th>Lesson duration</th><td>45–60 minutes</td></tr></table>' +
      '<h4>Learning objectives</h4><p>By the end of this lesson, you should be able to:</p><ul><li>Explain <strong>' + esc(name) + '</strong> in clear, simple language.</li><li>Describe why it matters in ' + esc(label) + '.</li><li>Apply the correct process to a realistic organisation or community project.</li><li>Recognise weak practice and improve it to a professional standard.</li></ul>' +
      '<h4>1. Introduction</h4><p>Winning support is not about using impressive words. It is about helping a funder understand a real need, trust the proposed solution, and see that the applicant can deliver and account for the money. This lesson explains <strong>' + esc(name) + '</strong> as a practical skill you can use.</p>' +
      '<h4>2. Meaning and definition</h4><div class="gw-definition"><strong>Definition:</strong> ' + esc(def) + '</div><p>In simple terms, this topic answers an important professional question: <em>what must the writer or fundraiser know, decide, show, or do at this stage?</em></p>' +
      '<h4>3. How to apply it</h4><ol><li><strong>Understand the purpose.</strong> Identify the decision the funder, donor, manager, or community must make.</li><li><strong>Gather reliable information.</strong> Use guidelines, organisational records, credible data, quotations, or consultation instead of guesses.</li><li><strong>Prepare the work.</strong> ' + esc(action) + '</li><li><strong>Check alignment.</strong> Make sure the information agrees with the proposal’s need, objectives, activities, results, timeline and budget.</li><li><strong>Review for clarity and ethics.</strong> Remove exaggeration, explain assumptions and verify names, dates, figures and claims.</li></ol>' +
      '<h4>4. Worked example</h4><div class="gw-example"><strong>Example:</strong> ' + esc(example) + '</div>' +
      '<h4>5. Weak practice and professional practice</h4><table class="gw-compare"><thead><tr><th>Weak approach</th><th>Professional approach</th></tr></thead><tbody><tr><td>' + esc(weak) + '</td><td>' + esc(strong) + '</td></tr></tbody></table>' +
      (tpl ? '<h4>6. Practical template</h4><div class="study-callout">' + tpl + '<p><strong>Offline use:</strong> Choose Print → Save as PDF to keep a copy.</p></div>' : '<h4>6. Practical task</h4><div class="study-callout"><strong>Apply it:</strong> Prepare a short example of ' + esc(name) + ' for a real or realistic Liberian NGO, school, community group, social enterprise, health project, agriculture project, or youth programme.</div>') +
      '<h4>7. How to answer a professional or assessment question</h4><p>Begin with a direct definition. Explain the purpose and the steps in a logical order. Add one realistic example and show how the work connects to donor requirements. If the question says <em>compare</em>, give both similarities and differences; if it says <em>evaluate</em>, give strengths, weaknesses and a justified conclusion.</p>' +
      '<h4>8. Summary</h4><ul><li>' + esc(name) + ' is part of ' + esc(label) + '.</li><li>Good work is specific, evidence-based, ethical and aligned.</li><li>Every claim, activity and cost should be understandable and verifiable.</li><li>Professional writers revise their work against the funder’s exact instructions.</li></ul>' +
      '<h4>9. Key terms</h4><table class="gw-terms"><tr><th>Term</th><th>Meaning</th></tr><tr><td>' + esc(name) + '</td><td>' + esc(def) + '</td></tr><tr><td>Alignment</td><td>The match between the project, the applicant and the funder’s priorities.</td></tr><tr><td>Evidence</td><td>Reliable information used to support a statement or decision.</td></tr><tr><td>Compliance</td><td>Following the funder’s rules, conditions and required format.</td></tr></table>' +
      '<h4>10. Review questions</h4><details class="gw-mcq"><summary>1. Which approach is most professional?</summary><p><strong>Answer:</strong> Use evidence, follow the guidelines, explain decisions and tailor the work to the funder. <strong>Why:</strong> Donors need clear, credible and relevant information.</p></details><details class="gw-mcq"><summary>2. Why should this topic connect to the rest of the proposal?</summary><p><strong>Answer:</strong> Because the need, objectives, activities, results, timeline and budget must describe the same project. Contradictions reduce confidence.</p></details><ol><li>Define ' + esc(name) + ' in your own words.</li><li>Give one example of weak practice and explain how you would improve it.</li><li>How could a Liberian community organisation apply this lesson?</li></ol>' +
      '<h4>11. Class activities</h4><ol><li><strong>Improve the weak version:</strong> Write a vague two-sentence example, exchange it with a classmate, and improve it by adding evidence, clarity and alignment.</li><li><strong>Funder review:</strong> Choose a real or sample funding guideline and identify where this topic appears in the requirements or scoring criteria.</li></ol>' +
      '<h4>12. Assignment</h4><p>Prepare a one-page application of <strong>' + esc(name) + '</strong> for a realistic project. Include the organisation, target group, location, evidence used, your main decisions, and a short checklist showing how your work meets professional standards.</p>' +
      '</article>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on Project Brief</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<h4>Project Definition</h4>' +
      '<p>This project requires you to produce a complete, donor-ready document that demonstrates professional competence in grant writing or fundraising.</p>' +
      '<h4>Objectives</h4>' +
      '<ol><li>Identify a realistic funder, need, and set of beneficiaries.</li><li>Apply the methods taught in the preceding modules.</li><li>Produce a polished deliverable suitable for inclusion in a professional portfolio.</li><li>Review the work against typical donor guidelines before finalising it.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A complete, donor-ready document for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  /* ========== EXPANDED QUESTION BANKS ========== */
  function cloneQ(q) { return {q:q.q,opts:q.opts.slice(),correct:q.correct,exp:q.exp}; }
  function topicQuestions(num,name) {
    var bank=window.TIH_GRANT_QUESTIONS;
    var rows=bank&&bank.topics['M'+num+':'+name];
    if(!rows||rows.length!==4)throw new Error('Incomplete Grant topic M'+num+':'+name);
    return rows;
  }
  function practiceQuiz(num,name) { return {title:'Practice: '+name,moduleNum:num,questionCount:3,questions:topicQuestions(num,name).slice(0,3).map(cloneQ)}; }
  function assessmentQuiz(num,name,count) { return {title:name,moduleNum:num,questionCount:count,questions:[]}; }

  var modules = [], quizzes = {}, notes = {}, authoredNotes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'gw-m' + num + '-final';
        quizzes[qid] = assessmentQuiz(num, 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Use it to check your learning. Official completion and certificates are managed in the TIH Learning Hub.</p></div>';
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
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'gw-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(num, name, count);
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
      authoredNotes['M' + num + ':' + name] = notes[String(flat)];
      flat += 1; videoCount += 1;
      var pqid = 'gw-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(num, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the formal study notes and complete the two exercises, then answer these questions to confirm you understood <em>' + esc(name) + '</em>.</p>';
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
      'Conduct needs assessments and write well-supported grant proposals',
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
      'Every teaching lesson has a video, written notes, worked examples and practice. Editable written outlines support proposals, budgets, logframes, needs assessments, timelines, donor reports, fundraising plans and evaluation. Ten real-world projects plus a capstone build your portfolio.',
      'Software & tools: Microsoft Word/Excel/PowerPoint, Google Docs/Sheets/Forms, Canva, ChatGPT, Trello, Asana, Notion and Salesforce for Nonprofits. You finish with a portfolio. Official TIH certificates are managed in the Learning Hub after its current requirements are met.'
    ],
    modules: modules,
    quizzes: quizzes,
    _grantFullBuilt: true
  };

  if (typeof window !== 'undefined') {
    // The on-demand authored bundle registers complete, module-qualified notes.
    // Keep generated LESSON_CONTENT as the fallback until that bundle loads.
    if (typeof document !== 'undefined' && !document.getElementById('tih-gw-note-styles')) {
      var noteStyle = document.createElement('style');
      noteStyle.id = 'tih-gw-note-styles';
      noteStyle.textContent = '.tih-gw-note{font-size:1rem;line-height:1.75;color:#26364a}.tih-gw-note h4{color:#073b74;margin:1.7rem 0 .65rem;font-size:1.15rem}.lesson-note-label{display:inline-block;margin:1rem 0;padding:.45rem .8rem;border-radius:999px;background:#eaf2ff;color:#073b74;font-weight:800;letter-spacing:.04em}.gw-meta,.gw-compare,.gw-terms{width:100%;border-collapse:collapse;margin:1rem 0;display:table}.gw-meta th,.gw-meta td,.gw-compare th,.gw-compare td,.gw-terms th,.gw-terms td{border:1px solid #dbe5f1;padding:.7rem;text-align:left;vertical-align:top}.gw-meta th,.gw-compare th,.gw-terms th{background:#eef5ff;color:#073b74}.gw-definition,.gw-example{padding:1rem;border-left:4px solid #e31e24;background:#f7faff;border-radius:0 10px 10px 0}.gw-example{border-left-color:#15803d;background:#f0fdf4}.gw-mcq{margin:.7rem 0;border:1px solid #dbe5f1;border-radius:10px;padding:.75rem}.gw-mcq summary{cursor:pointer;font-weight:700;color:#073b74}@media(max-width:600px){.gw-meta,.gw-compare,.gw-terms{font-size:.9rem}.gw-meta th,.gw-meta td,.gw-compare th,.gw-compare td,.gw-terms th,.gw-terms td{padding:.55rem}}';
      document.head.appendChild(noteStyle);
    }
  }

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;


  window.tihApplyGrantTopicQuizzes=function(){
    var bank=window.TIH_GRANT_QUESTIONS,course=COURSES_DB['grant-writing'];
    if(!bank||!course)throw new Error('Missing Grant question bank');
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
      if(out.length!==count)throw new Error('Exhausted Grant assessment pool');
      return out;
    }
    function paper(title){var q=papers.filter(function(q){return q.title===title;})[0];if(!q)throw new Error('Missing Grant assessment '+title);return q;}
    // Protect explicit full-syllabus coverage before allocating narrow papers.
    var protectedItems={},midCoverage=[],finalCoverage=[];
    for(var n=1;n<=17;n++){
      var rows=pool.filter(function(q){return q.module===n;});
      if(rows.length<(n<=10?2:1))throw new Error('No Grant coverage reserve for module '+n);
      var f=rows[rows.length-1];protectedItems[f.q]=true;finalCoverage.push(f);
      if(n<=10){var m=rows[rows.length-2];protectedItems[m.q]=true;midCoverage.push(m);}
    }
    var subjects={'Grant Writing Fundamentals Assessment':[2,6],'Budget Development Assessment':[8],'Fundraising Assessment':[10,11,12],'Donor Relations Assessment':[13],'Grant Management Assessment':[14],'Monitoring & Evaluation Assessment':[15]};
    Object.keys(subjects).forEach(function(title){var q=paper(title),nums=subjects[title];q.questions=issue(pool.filter(function(r){return nums.indexOf(r.module)>=0&&!protectedItems[r.q];}),q.questionCount);});
    var mid=paper('Midterm Examination');mid.questions=issue(midCoverage,10).concat(issue(pool.filter(function(r){return r.module<=10&&!protectedItems[r.q];}),mid.questionCount-10));
    var final=paper('Final Examination');final.questions=issue(finalCoverage,17).concat(issue(pool.filter(function(r){return !protectedItems[r.q];}),final.questionCount-17));
    var projectPool=bank.exams.filter(function(q){return q.module>=18;});
    ['Capstone Project Evaluation','Portfolio Review'].forEach(function(title){var q=paper(title);q.questions=issue(projectPool,q.questionCount);});
    var graduation=paper('Graduation Assessment');graduation.questions=issue(pool,graduation.questionCount);
    papers.forEach(function(q){if(q.questions.length!==q.questionCount)throw new Error('Incomplete Grant paper '+q.title);});
  };
  window.tihApplyGrantTopicQuizzes();

  if (typeof console !== 'undefined' && console.log) {
    console.log('[GRANT] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
