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
    var def = TOPIC_DEF[name] || (name + ' is an essential concept within professional grant writing and fundraising practice that every practitioner should understand thoroughly.');
    var tpl = templateFor(name);

    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Grant Writing & Fundraising · ' + esc(moduleTitle) + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + esc(name) + '</h3>' +

      '<h4>1. Definition</h4>' +
      '<p>' + esc(def) + '</p>' +

      '<h4>2. Detailed Explanation</h4>' +
      '<p>In professional resource mobilisation, <strong>' + esc(name) + '</strong> is a core competency. A precise understanding of this topic enables a grant writer or fundraiser to prepare competitive applications, build credible relationships with donors, and manage awarded funds responsibly.</p>' +
      '<p>This concept forms part of <em>' + esc(label) + '</em>. Mastery of it supports later modules in the programme and is frequently required in professional practice, consultancy work, and organisational leadership roles.</p>' +

      '<h4>3. Why This Topic Matters</h4>' +
      '<ul>' +
      '<li>Funders evaluate proposals against clear standards of need, design, budget, and accountability.</li>' +
      '<li>Strong performance in this area directly increases the probability of winning funding.</li>' +
      '<li>Ethical and accurate practice protects organisational reputation and donor trust.</li>' +
      '<li>The skill is transferable across NGOs, schools, community groups, and social enterprises.</li>' +
      '</ul>' +

      '<h4>4. Key Concepts and Sub-topics</h4>' +
      '<ul>' +
      '<li>Precise definition and professional scope of <em>' + esc(name) + '</em>.</li>' +
      '<li>Relationship to other sections of a proposal or fundraising strategy.</li>' +
      '<li>Common standards and donor expectations.</li>' +
      '<li>Practical steps for applying the concept in real organisational settings.</li>' +
      '<li>Frequent errors that weaken applications or damage donor relationships.</li>' +
      '</ul>' +

      '<h4>5. Practical Application</h4>' +
      '<p>After studying the accompanying video lesson, apply <strong>' + esc(name) + '</strong> to a real or realistic organisation in your community. Draft the relevant section, review it against typical donor guidelines, and refine it until it meets a professional standard.</p>' +

      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Use Print → Save as PDF to keep this template offline.</p></div>' :
        '<div class="study-callout"><strong>TIH practice task:</strong> Apply <em>' + esc(name) + '</em> to a real Liberian community need, NGO, school, or social enterprise.</div>') +

      '<h4>6. Common Mistakes to Avoid</h4>' +
      '<ul>' +
      '<li>Writing without first reading the funder’s guidelines and eligibility rules.</li>' +
      '<li>Making claims that are not supported by credible data or evidence.</li>' +
      '<li>Copying generic text instead of tailoring the content to the specific funder and context.</li>' +
      '<li>Neglecting the practice exercises and the short quiz that follow this lesson.</li>' +
      '</ul>' +

      '<h4>7. Summary</h4>' +
      '<p><strong>' + esc(name) + '</strong> is a foundational topic within ' + esc(label) + '. A clear grasp of its definition, purpose, and correct application is essential for progressing through the Complete Grant Writing & Fundraising Professional Certificate and for producing work that meets donor standards.</p>' +

      '<h4>8. Study Actions</h4>' +
      '<ol>' +
      '<li>Watch the video carefully and note any examples or templates shown.</li>' +
      '<li>Read this note again and write the definition in your own words.</li>' +
      '<li>Complete the two practical exercises for a sample or real organisation.</li>' +
      '<li>Take the practice quiz that follows this lesson to confirm your understanding.</li>' +
      '</ol>' +

      '<p><strong>Module context:</strong> This lesson belongs to <em>' + esc(moduleTitle) + '</em>. Use your browser’s Print → Save as PDF if you wish to keep an offline copy of these notes.</p>' +
      '</div>';
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
  var BANK = {
    general: [
      { q: 'Grant writing is the process of:', opts: ['Writing novels', 'Preparing proposals to secure funding from donors', 'Selling products', 'Filing taxes'], correct: 1, exp: 'Grant writing seeks funding through written proposals.' },
      { q: 'Fundraising is:', opts: ['Only grants', 'Raising money from various sources for a cause', 'Only sales', 'Only loans'], correct: 1, exp: 'Fundraising mobilises resources from donors and the public.' },
      { q: 'Ethics in grant writing requires:', opts: ['Exaggerating impact', 'Honesty, accuracy and using funds as intended', 'Hiding costs', 'Copying proposals'], correct: 1, exp: 'Grant writers must be honest and transparent.' },
      { q: 'A funder is more likely to give when a proposal is:', opts: ['Vague', 'Clear, evidence-based and aligned to their priorities', 'Very long', 'Emotional only'], correct: 1, exp: 'Alignment, clarity and evidence win funding.' },
      { q: 'The best proposals start by understanding the:', opts: ['Budget only', 'Funder’s guidelines and the real need', 'Logo', 'Deadline only'], correct: 1, exp: 'Read the guidelines and evidence the need first.' },
      { q: 'The capstone helps you:', opts: ['Skip work', 'Produce a complete, fundable grant proposal', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates the whole program into one proposal.' },
      { q: 'A restricted grant must be used:', opts: ['For any organisational purpose', 'Only for the specific purpose approved by the donor', 'Only for salaries', 'Only for capital costs'], correct: 1, exp: 'Restricted funds are tied to the approved purpose.' },
      { q: 'Which document usually defines the legal relationship after an award?', opts: ['A social media post', 'The grant agreement', 'A thank-you letter only', 'The organisational logo'], correct: 1, exp: 'The grant agreement sets the formal terms.' },
      { q: 'Professional grant writers should prioritise:', opts: ['Copying old proposals', 'Accuracy, alignment with funder priorities, and clear evidence', 'Maximum length', 'Emotional language only'], correct: 1, exp: 'Accuracy and alignment are decisive.' },
      { q: 'Resource mobilisation includes:', opts: ['Only writing novels', 'Grants, individual giving, corporate support and other income streams', 'Only bank loans', 'Only membership fees'], correct: 1, exp: 'It covers the full range of funding sources.' }
    ],
    grants: [
      { q: 'A grant is:', opts: ['A loan to repay', 'Funds given (usually not repaid) for a specific purpose', 'A salary', 'An investment for equity'], correct: 1, exp: 'Grants fund a purpose and generally are not repaid.' },
      { q: 'Which is a common source of grants?', opts: ['Governments and foundations', 'Only banks', 'Only individuals', 'Only stock markets'], correct: 0, exp: 'Governments, foundations, corporates and NGOs give grants.' },
      { q: 'The grant life cycle includes:', opts: ['Only writing', 'Finding, applying, managing and reporting', 'Only spending', 'Only closing'], correct: 1, exp: 'It spans finding, applying, implementing and reporting.' },
      { q: 'Foundation grants come from:', opts: ['Government only', 'Philanthropic foundations', 'Banks only', 'Customers'], correct: 1, exp: 'Foundations are philanthropic grant-makers.' },
      { q: 'Restricted funds must be used:', opts: ['Anyhow', 'For the specific purpose the donor set', 'For salaries only', 'For anything urgent'], correct: 1, exp: 'Restricted grants must be used as the donor specifies.' },
      { q: 'A key grant term "eligibility" means:', opts: ['The deadline', 'Whether you qualify to apply', 'The budget', 'The logo'], correct: 1, exp: 'Eligibility defines who may apply.' },
      { q: 'Corporate grants are typically linked to:', opts: ['Random selection', 'Corporate social responsibility or strategic community interests', 'Only political campaigns', 'Personal loans'], correct: 1, exp: 'They often support CSR or business-aligned causes.' },
      { q: 'International development grants often focus on:', opts: ['Luxury goods', 'Poverty reduction, health, education and sustainable development', 'Only sports', 'Only entertainment'], correct: 1, exp: 'They target development outcomes.' },
      { q: 'A small business grant is usually intended to:', opts: ['Replace all commercial revenue', 'Support start-up or growth activities under defined conditions', 'Pay personal expenses only', 'Avoid all reporting'], correct: 1, exp: 'They support business development under rules.' },
      { q: 'Understanding grant terminology helps you:', opts: ['Ignore guidelines', 'Communicate accurately with funders and meet requirements', 'Avoid writing', 'Skip budgets'], correct: 1, exp: 'Shared language reduces errors and misunderstandings.' }
    ],
    finding: [
      { q: 'Donor research helps you:', opts: ['Waste time', 'Find funders that match your mission', 'Ignore guidelines', 'Skip proposals'], correct: 1, exp: 'Research targets funders aligned to your work.' },
      { q: 'Before applying you should always:', opts: ['Guess', 'Read the grant guidelines and eligibility carefully', 'Copy another proposal', 'Ignore the deadline'], correct: 1, exp: 'Guidelines and eligibility determine fit and requirements.' },
      { q: 'A funding pipeline is:', opts: ['A water pipe', 'A tracked list of prospective funding opportunities', 'A budget', 'A logo'], correct: 1, exp: 'A pipeline tracks prospects through the funding cycle.' },
      { q: 'Applying to a funder you are not eligible for usually:', opts: ['Wins money', 'Wastes effort and is rejected', 'Is required', 'Guarantees funding'], correct: 1, exp: 'Check eligibility to avoid wasted, rejected applications.' },
      { q: 'Grant databases and directories help you:', opts: ['Nothing', 'Discover relevant funding opportunities', 'Write budgets', 'Design logos'], correct: 1, exp: 'They aggregate opportunities to search.' },
      { q: 'Matching a proposal to a funder’s priorities:', opts: ['Hurts your chances', 'Greatly improves your chances', 'Is illegal', 'Is optional always'], correct: 1, exp: 'Alignment with priorities is a top success factor.' },
      { q: 'Government funding portals typically publish:', opts: ['Only private foundation news', 'Official calls for proposals and application rules', 'Only social media tips', 'Only job adverts'], correct: 1, exp: 'They are the official source of public grant opportunities.' },
      { q: 'An opportunity assessment should examine:', opts: ['Only the deadline', 'Fit, eligibility, competition, and capacity to deliver', 'Only the logo colour', 'Only the funder’s address'], correct: 1, exp: 'A full assessment prevents poor applications.' },
      { q: 'Corporate giving programmes are best approached by:', opts: ['Ignoring their focus areas', 'Aligning your request with their stated community priorities', 'Sending the same letter to every company', 'Avoiding all contact'], correct: 1, exp: 'Alignment with corporate priorities improves success.' },
      { q: 'Building a funding pipeline requires:', opts: ['One application only', 'Ongoing research, prioritisation and tracking of opportunities', 'Stopping after the first rejection', 'Ignoring deadlines'], correct: 1, exp: 'A living pipeline sustains resource mobilisation.' }
    ],
    needs: [
      { q: 'A statement of need should be:', opts: ['Opinion only', 'Backed by data and evidence', 'Vague', 'About your org only'], correct: 1, exp: 'Evidence and data make the need compelling.' },
      { q: 'A needs assessment identifies:', opts: ['Your logo', 'The real problem and who it affects', 'Your salary', 'The deadline'], correct: 1, exp: 'It defines the problem, causes and beneficiaries.' },
      { q: 'Root cause analysis helps you:', opts: ['Treat symptoms', 'Address the underlying cause of a problem', 'Ignore the problem', 'Add scope'], correct: 1, exp: 'Addressing causes creates lasting change.' },
      { q: 'Target beneficiaries are:', opts: ['The donors', 'The people the project will help', 'The staff only', 'Competitors'], correct: 1, exp: 'Beneficiaries are those the project serves.' },
      { q: 'Stakeholder consultation improves a proposal by:', opts: ['Slowing it', 'Grounding it in real community input', 'Hiding needs', 'Adding cost only'], correct: 1, exp: 'Community input makes the project relevant and credible.' },
      { q: 'Good data for a needs statement can come from:', opts: ['Guesses', 'Surveys, official statistics and interviews', 'Nothing', 'Only the internet ads'], correct: 1, exp: 'Use credible primary and secondary data.' },
      { q: 'A strong problem statement usually includes:', opts: ['Only emotions', 'Who is affected, the scale of the problem, and supporting evidence', 'Only the requested budget', 'Only the organisation’s history'], correct: 1, exp: 'It quantifies and evidences the problem.' },
      { q: 'Collecting primary data may involve:', opts: ['Only copying other proposals', 'Surveys, focus groups, or interviews with affected people', 'Ignoring the community', 'Using only social media rumours'], correct: 1, exp: 'Primary data comes from direct contact with the situation.' },
      { q: 'A community assessment report should:', opts: ['Be purely promotional', 'Present findings, analysis and implications for the proposed project', 'Hide negative findings', 'Avoid all numbers'], correct: 1, exp: 'It informs design and justifies the intervention.' },
      { q: 'Identifying community problems effectively requires:', opts: ['Assuming you already know everything', 'Listening, observing and analysing evidence systematically', 'Copying problems from other countries only', 'Avoiding local voices'], correct: 1, exp: 'Systematic local analysis produces credible needs.' }
    ],
    proposal: [
      { q: 'The executive summary should:', opts: ['Be the longest part', 'Briefly summarise the whole proposal', 'Only list costs', 'Be skipped'], correct: 1, exp: 'It gives a concise overview of the entire proposal.' },
      { q: 'SMART objectives are:', opts: ['Vague goals', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Only budgets', 'Only activities'], correct: 1, exp: 'SMART objectives are clear and measurable.' },
      { q: 'A sustainability plan explains how the project will:', opts: ['End immediately', 'Continue or maintain impact after the grant', 'Spend faster', 'Avoid reporting'], correct: 1, exp: 'Funders want impact to last beyond their money.' },
      { q: 'Goals differ from objectives in that goals are:', opts: ['More specific', 'Broad; objectives are specific and measurable', 'The budget', 'The timeline'], correct: 1, exp: 'Goals are broad; objectives are specific steps.' },
      { q: 'The project design/methodology describes:', opts: ['The logo', 'How you will achieve the objectives', 'Only the budget', 'The deadline'], correct: 1, exp: 'It explains the activities and approach.' },
      { q: 'A proposal checklist helps ensure you:', opts: ['Forget attachments', 'Meet all requirements before submitting', 'Miss the deadline', 'Skip the budget'], correct: 1, exp: 'A checklist prevents missing required elements.' },
      { q: 'Organizational background should demonstrate:', opts: ['Only the founder’s biography', 'Credibility, track record and capacity to deliver', 'Only the office address', 'Only future plans'], correct: 1, exp: 'Funders need confidence in the applicant.' },
      { q: 'Expected outcomes should be:', opts: ['Vague aspirations', 'Clear results that can be observed or measured', 'Only activities', 'Only budget lines'], correct: 1, exp: 'Outcomes describe the change the project will produce.' },
      { q: 'Activities and timeline should show:', opts: ['Random tasks', 'Logical sequence of work linked to objectives', 'Only the submission date', 'Only staff names'], correct: 1, exp: 'They prove the plan is realistic and coherent.' },
      { q: 'A complete proposal package usually includes:', opts: ['Only a cover letter', 'Narrative, budget, attachments and any required forms', 'Only a logo', 'Only a video'], correct: 1, exp: 'Funders specify a full set of required documents.' }
    ],
    planning: [
      { q: 'A logframe (logical framework) links:', opts: ['Only costs', 'Goal, outcomes, outputs, activities with indicators', 'Only staff', 'Only the logo'], correct: 1, exp: 'The logframe maps results, indicators and assumptions.' },
      { q: 'Monitoring indicators should be:', opts: ['Vague', 'Measurable signs of progress', 'Secret', 'Optional'], correct: 1, exp: 'Indicators measure progress toward results.' },
      { q: 'A work plan sets out:', opts: ['Only the budget', 'Activities, responsibilities and timing', 'The logo', 'Only risks'], correct: 1, exp: 'It schedules who does what and when.' },
      { q: 'A risk assessment in a project identifies:', opts: ['Nothing', 'What could go wrong and how to respond', 'Only strengths', 'Only the budget'], correct: 1, exp: 'It plans responses to potential problems.' },
      { q: 'An evaluation plan defines how you will:', opts: ['Ignore results', 'Measure whether the project achieved its objectives', 'Spend money', 'Avoid reporting'], correct: 1, exp: 'Evaluation assesses results and impact.' },
      { q: 'A Gantt chart shows:', opts: ['Only costs', 'Activities against a timeline', 'Only risks', 'Donor names'], correct: 1, exp: 'It visualises the schedule of activities.' },
      { q: 'Project scope defines:', opts: ['Only the budget ceiling', 'What is included and excluded from the project', 'Only the staff list', 'Only the logo'], correct: 1, exp: 'Clear scope prevents uncontrolled expansion.' },
      { q: 'A results framework emphasises:', opts: ['Activities only', 'The chain from inputs to outputs, outcomes and impact', 'Only financial reports', 'Only the submission date'], correct: 1, exp: 'It focuses on results rather than activities alone.' },
      { q: 'Assumptions in a logframe are:', opts: ['Guaranteed facts', 'External conditions necessary for success but outside full control', 'Budget lines', 'Staff names'], correct: 1, exp: 'They flag conditions that must hold for results to occur.' },
      { q: 'Good project planning reduces:', opts: ['All uncertainty forever', 'The likelihood of delays, cost overruns and unmet objectives', 'The need for any monitoring', 'Donor interest'], correct: 1, exp: 'Planning anticipates and mitigates common delivery risks.' }
    ],
    budget: [
      { q: 'A grant budget should:', opts: ['Be vague', 'Match the activities and be justified', 'Hide costs', 'Exceed reason'], correct: 1, exp: 'Budgets must align with activities and be justified.' },
      { q: 'A budget justification explains:', opts: ['Nothing', 'Why each cost is needed', 'Only totals', 'The logo'], correct: 1, exp: 'It defends each line item to the funder.' },
      { q: 'Indirect (overhead) costs are:', opts: ['Direct project costs', 'Shared costs like admin/rent not tied to one activity', 'Salaries only', 'Zero always'], correct: 1, exp: 'Indirect costs support the organisation broadly.' },
      { q: 'Cost sharing (co-funding) means:', opts: ['The donor pays nothing', 'Your org contributes part of the cost', 'Double the budget', 'No budget'], correct: 1, exp: 'Cost sharing shows commitment and leverages funds.' },
      { q: 'Personnel costs should reflect:', opts: ['Random numbers', 'Roles, time and fair rates', 'Only the director', 'Nothing'], correct: 1, exp: 'Base personnel costs on roles and % of time.' },
      { q: 'A realistic budget improves credibility by:', opts: ['Padding costs', 'Being accurate and tied to the work', 'Hiding items', 'Being vague'], correct: 1, exp: 'Accurate, justified budgets build funder trust.' },
      { q: 'Equipment costs should be:', opts: ['Inflated without explanation', 'Necessary for the project and reasonably priced', 'Hidden in other lines', 'Omitted even when essential'], correct: 1, exp: 'Only justified, necessary equipment belongs in the budget.' },
      { q: 'Operational costs typically include:', opts: ['Only the director’s salary', 'Day-to-day programme expenses such as transport, materials and communications', 'Only capital buildings', 'Only bank charges'], correct: 1, exp: 'They cover the running costs of activities.' },
      { q: 'Financial sustainability planning considers:', opts: ['Only the current grant', 'How the organisation will cover costs after the grant ends', 'Only one month of expenses', 'Avoiding all future fundraising'], correct: 1, exp: 'It addresses continuity beyond the award period.' },
      { q: 'A budget review before submission should check:', opts: ['Only the total', 'Arithmetic accuracy, alignment with activities, and compliance with funder rules', 'Only the font', 'Only the cover page'], correct: 1, exp: 'Errors in the budget can disqualify an otherwise strong proposal.' }
    ],
    fundraising: [
      { q: 'Fundraising ethics require:', opts: ['Pressuring donors', 'Honesty, transparency and respecting donor intent', 'Hiding use of funds', 'Ignoring receipts'], correct: 1, exp: 'Ethical fundraising is honest and transparent.' },
      { q: 'Donor stewardship means:', opts: ['Ignoring donors after giving', 'Thanking, updating and retaining donors', 'Only asking for more', 'Deleting donors'], correct: 1, exp: 'Stewardship nurtures ongoing donor relationships.' },
      { q: 'A major donor is:', opts: ['Anyone', 'A donor who gives a significant amount', 'A volunteer only', 'A supplier'], correct: 1, exp: 'Major donors give large, high-value gifts.' },
      { q: 'A fundraising plan should include:', opts: ['Nothing', 'Goals, audiences, channels, calendar and budget', 'Only a logo', 'Only one event'], correct: 1, exp: 'A plan coordinates goals, channels and timing.' },
      { q: 'Donor retention matters because:', opts: ['New donors are always cheaper', 'Keeping donors is usually cheaper than finding new ones', 'It has no value', 'It lowers trust'], correct: 1, exp: 'Retained donors give more over time at lower cost.' },
      { q: 'Peer-to-peer fundraising uses:', opts: ['Only staff', 'Supporters raising funds from their own networks', 'Only grants', 'No people'], correct: 1, exp: 'Supporters fundraise among their networks.' },
      { q: 'Individual giving refers to:', opts: ['Only government grants', 'Donations from private persons', 'Only corporate contracts', 'Only membership fees'], correct: 1, exp: 'It is voluntary giving by individuals.' },
      { q: 'Corporate sponsorship typically involves:', opts: ['A pure gift with no recognition', 'Financial or in-kind support in exchange for agreed visibility or association', 'A bank loan', 'A government subsidy'], correct: 1, exp: 'Sponsorship usually includes mutual benefits.' },
      { q: 'Planned giving usually refers to:', opts: ['Weekly small gifts only', 'Gifts arranged in advance, often through wills or long-term instruments', 'Only cash at events', 'Only online one-off gifts'], correct: 1, exp: 'It includes bequests and other deferred gifts.' },
      { q: 'Annual giving campaigns aim to:', opts: ['Replace all major gifts', 'Secure regular, usually yearly, support from a broad base of donors', 'Avoid all communication', 'Focus only on one-time emergency appeals'], correct: 1, exp: 'They build a reliable base of recurring support.' }
    ],
    digital: [
      { q: 'Crowdfunding raises money from:', opts: ['One donor', 'Many people, often online', 'Only government', 'Only banks'], correct: 1, exp: 'Crowdfunding pools small gifts from many people.' },
      { q: 'Digital storytelling helps fundraising by:', opts: ['Confusing donors', 'Connecting donors emotionally to the cause', 'Hiding impact', 'Only listing numbers'], correct: 1, exp: 'Stories make the impact real and relatable.' },
      { q: 'Campaign analytics let you:', opts: ['Ignore results', 'See what works and improve the campaign', 'Guess', 'Avoid data'], correct: 1, exp: 'Analytics guide data-driven improvements.' },
      { q: 'A good donation page is:', opts: ['Long and confusing', 'Simple, trustworthy and mobile-friendly', 'Hidden', 'Without payment'], correct: 1, exp: 'Easy, secure donation pages convert better.' },
      { q: 'Email fundraising works best when messages are:', opts: ['Generic spam', 'Personalised and clear with a call to action', 'Rare and vague', 'Only text'], correct: 1, exp: 'Personalisation and a clear CTA drive gifts.' },
      { q: 'Online payment platforms are needed to:', opts: ['Design logos', 'Securely accept donations', 'Write proposals', 'Avoid donors'], correct: 1, exp: 'They process donations securely online.' },
      { q: 'Social media fundraising is most effective when:', opts: ['Posts are rare and generic', 'Content is regular, authentic and includes a clear ask', 'Only staff post once a year', 'Links are never included'], correct: 1, exp: 'Consistent, authentic asks perform better.' },
      { q: 'SMS fundraising is useful because:', opts: ['It replaces all other channels', 'It reaches supporters quickly on their phones', 'It requires no consent', 'It works only offline'], correct: 1, exp: 'Mobile reach can complement other channels.' },
      { q: 'Website donation pages should prioritise:', opts: ['Complex registration', 'Trust signals, clarity of purpose and ease of giving', 'Maximum number of form fields', 'Hidden costs'], correct: 1, exp: 'Friction reduces conversion.' },
      { q: 'Campaign analytics typically track:', opts: ['Only the weather', 'Reach, engagement, conversion and revenue', 'Only staff attendance', 'Only print media'], correct: 1, exp: 'These metrics show what is working.' }
    ],
    donor: [
      { q: 'A thank-you letter should be:', opts: ['Delayed and generic', 'Prompt, personal and specific', 'Skipped', 'Only a receipt'], correct: 1, exp: 'Prompt, personal thanks strengthen relationships.' },
      { q: 'A stewardship report tells donors:', opts: ['Nothing', 'How their gift was used and the impact', 'Only ask for more', 'The staff salaries only'], correct: 1, exp: 'It reports impact and use of the donor’s gift.' },
      { q: 'A CRM system helps you:', opts: ['Cook', 'Manage donor data and relationships', 'Write budgets only', 'Design logos'], correct: 1, exp: 'CRM tracks donors, gifts and communications.' },
      { q: 'Donor recognition means:', opts: ['Ignoring donors', 'Acknowledging donors appropriately', 'Publishing private data', 'Nothing'], correct: 1, exp: 'Appropriate recognition honours and retains donors.' },
      { q: 'Building donor relationships is about:', opts: ['One-time asks', 'Ongoing trust, communication and gratitude', 'Pressure', 'Silence'], correct: 1, exp: 'Relationships, not transactions, sustain giving.' },
      { q: 'Managing a donor database helps you:', opts: ['Lose track', 'Segment, communicate and steward donors well', 'Ignore donors', 'Only ask once'], correct: 1, exp: 'A good database powers targeted stewardship.' },
      { q: 'Donor retention strategies often include:', opts: ['Never contacting donors again', 'Regular updates, thanks and opportunities for deeper engagement', 'Only asking for larger gifts immediately', 'Deleting contact details'], correct: 1, exp: 'Ongoing engagement retains support.' },
      { q: 'Effective donor communication should be:', opts: ['One-way and rare', 'Two-way, respectful and tailored to the donor’s interests', 'Only mass marketing', 'Only legal notices'], correct: 1, exp: 'Dialogue builds stronger relationships.' },
      { q: 'Stewardship is complete only when:', opts: ['The gift is spent', 'The donor feels informed, valued and confident in the impact', 'The financial year ends', 'A new campaign starts'], correct: 1, exp: 'The donor’s experience of impact is central.' },
      { q: 'A well-managed CRM supports:', opts: ['Only accounting', 'Personalised cultivation, accurate records and better retention', 'Only event catering', 'Only social media ads'], correct: 1, exp: 'It underpins professional relationship management.' }
    ],
    management: [
      { q: 'A grant agreement sets out:', opts: ['Nothing', 'The terms, deliverables and reporting the funder requires', 'Only the logo', 'The salary'], correct: 1, exp: 'It defines obligations for both parties.' },
      { q: 'Compliance in grant management means:', opts: ['Ignoring rules', 'Following the funder’s rules and regulations', 'Spending freely', 'Skipping reports'], correct: 1, exp: 'You must comply with the grant’s terms and laws.' },
      { q: 'Financial management of a grant requires:', opts: ['No records', 'Accurate tracking of income and expenditure', 'Mixing funds', 'Guessing'], correct: 1, exp: 'Track grant funds accurately and separately.' },
      { q: 'Reporting requirements are:', opts: ['Optional', 'Mandatory updates the funder expects', 'Only at the start', 'A logo'], correct: 1, exp: 'Funders require progress and financial reports.' },
      { q: 'Poor grant management can lead to:', opts: ['More funding', 'Loss of funding and reputation', 'Nothing', 'Automatic renewal'], correct: 1, exp: 'Non-compliance risks funding and credibility.' },
      { q: 'Procurement under a grant should be:', opts: ['Secret', 'Transparent and value-for-money', 'To friends only', 'Undocumented'], correct: 1, exp: 'Fair, documented procurement protects integrity.' },
      { q: 'Award acceptance should include:', opts: ['Immediate spending without review', 'Careful review of terms before formal acceptance', 'Ignoring the agreement', 'Public criticism of the funder'], correct: 1, exp: 'Understand obligations before accepting.' },
      { q: 'Monitoring activities during implementation helps:', opts: ['Avoid all reporting', 'Detect problems early and stay on track', 'Increase costs deliberately', 'Hide under-performance'], correct: 1, exp: 'Ongoing monitoring supports successful delivery.' },
      { q: 'Risk management in grant implementation involves:', opts: ['Ignoring possible problems', 'Identifying risks and taking steps to reduce their impact', 'Transferring all risk to the funder only', 'Avoiding any documentation'], correct: 1, exp: 'Proactive risk management protects results.' },
      { q: 'Good grant financial management usually requires:', opts: ['Mixing grant and unrestricted funds without records', 'Separate tracking, approved expenditure and audit-ready records', 'Cash only with no receipts', 'Spending before approval'], correct: 1, exp: 'Clear records protect both the organisation and the funder.' }
    ],
    mande: [
      { q: 'Monitoring is:', opts: ['One-time', 'Ongoing tracking of activities and progress', 'Only at the end', 'Optional'], correct: 1, exp: 'Monitoring is continuous tracking during the project.' },
      { q: 'Evaluation assesses:', opts: ['Nothing', 'Whether the project achieved its objectives and impact', 'Only the budget', 'The logo'], correct: 1, exp: 'Evaluation judges results, relevance and impact.' },
      { q: 'A performance indicator is:', opts: ['A guess', 'A measurable sign of progress toward a result', 'A logo', 'A donor'], correct: 1, exp: 'Indicators quantify progress.' },
      { q: 'Impact measurement looks at:', opts: ['Activities only', 'The lasting change the project created', 'The logo', 'Only spending'], correct: 1, exp: 'Impact is the real, lasting change achieved.' },
      { q: 'A final report to a donor should include:', opts: ['Nothing', 'Results, financials, lessons and impact', 'Only thanks', 'Only the date'], correct: 1, exp: 'Final reports summarise results and accountability.' },
      { q: 'Lessons learned help you:', opts: ['Repeat mistakes', 'Improve future projects and proposals', 'Ignore feedback', 'Hide problems'], correct: 1, exp: 'Capturing lessons strengthens future work.' },
      { q: 'Data collection for M&E should be:', opts: ['Random and undocumented', 'Systematic, ethical and aligned with indicators', 'Avoided to save time', 'Based only on anecdotes'], correct: 1, exp: 'Credible data underpins credible reporting.' },
      { q: 'Progress reports are typically used to:', opts: ['Replace the final report forever', 'Inform the funder of implementation status during the project', 'Avoid all financial information', 'Change the project goal unilaterally'], correct: 1, exp: 'They provide interim accountability.' },
      { q: 'Financial reports to donors usually compare:', opts: ['Only staff opinions', 'Budget versus actual expenditure', 'Only the original proposal text', 'Only the weather'], correct: 1, exp: 'Variance analysis shows how funds were used.' },
      { q: 'A strong M&E system benefits the organisation by:', opts: ['Increasing paperwork only', 'Improving learning, accountability and future funding prospects', 'Replacing the need for any activities', 'Hiding results'], correct: 1, exp: 'Good M&E strengthens both performance and credibility.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', grants: 'grants', finding: 'finding', readiness: 'general', needs: 'needs', proposal: 'proposal', planning: 'planning', budget: 'budget', review: 'proposal', fundraising: 'fundraising', fundstrategy: 'fundraising', digital: 'digital', donor: 'donor', management: 'management', mande: 'mande', tech: 'general', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }

  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
    return Math.abs(h);
  }
  function seededShuffle(arr, seed) {
    var a = arr.slice();
    var random = function () {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pickQuestions(key, count, topicName) {
    var pool = (BANK[key] || BANK.general).slice();
    var extra = BANK.general.concat(BANK.grants || [], BANK.proposal || []);
    var combined = pool.concat(extra);
    var seen = {};
    var unique = [];
    combined.forEach(function (q) {
      if (!seen[q.q]) { seen[q.q] = true; unique.push(q); }
    });
    var seed = hashStr((topicName || key) + '|' + key);
    var shuffled = seededShuffle(unique, seed);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) {
    return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3, name).map(cloneQ) };
  }
  function assessmentQuiz(key, name, count) {
    return { title: name, moduleNum: 1, questions: pickQuestions(key, count, name).map(cloneQ) };
  }
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
      'Every content lesson has a video and formal detailed study notes; downloadable templates cover the Grant Proposal, Budget, Logframe, Concept Note, Needs Assessment, Gantt chart, Donor Report, Fundraising Plan and M&E Framework, and ten real-world proposals plus a capstone build your portfolio.',
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
