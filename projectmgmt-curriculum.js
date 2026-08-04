/* TIH Complete Project Management Professional Certificate curriculum.
   Rebuilds COURSES_DB['project-mgmt'] into the full 20-module program taking a
   beginner to project management professional: fundamentals, initiation,
   planning, scope/time/cost/quality/risk, communication & stakeholders,
   leadership, Agile & Scrum, monitoring & control, closure, PM software,
   business analysis, professional & career skills, practical projects, a
   capstone and a graduation module. Every content lesson has a video +
   printable notes; project lessons carry briefs and downloadable templates
   (Charter, WBS, Gantt, Risk Register, Budget, Status Report, Meeting Minutes,
   Closure Report). Modelled on android-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'project-mgmt';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._pmFullBuilt) return;

  var V = ['iopMMoHstJM', 'SPj-Luod9tI', 'PyR2VLP3xnA', 'YDxAKKVdMVM', 'EyPFi0YO32M', 'r1szmmkUPH8', '1rQT1R3S2BQ', 'boIRGwGJ-Ds', 'KmEMtUzMlIk', 'gSOdc2Y5tTk', 'bV9yUQV6D60', 'vzqDTSZOTic', 'C5b_4aFeF2E', '00Rbll3ZNk0', 'ktSzxVEnTZ8', '521iU9T4TBg', 'fAC7up3jc3k', 'UQ71PhWRDEQ'];
  var VIDEOS = {
    orientation: [V[0], V[1]], fundamentals: [V[1], V[2]], initiation: [V[3], V[4]], planning: [V[4], V[5]],
    scope: [V[6], V[7]], time: [V[7], V[8]], cost: [V[8], V[9]], quality: [V[9], V[10]], risk: [V[10], V[11]],
    comms: [V[11], V[12]], leadership: [V[12], V[13]], agile: [V[13], V[14]], monitoring: [V[14], V[15]],
    closure: [V[15], V[16]], software: [V[16], V[17]], analysis: [V[2], V[6]], professional: [V[0], V[12]],
    career: [V[1], V[17]], projects: [V[3], V[10]], assessment: [V[0]]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Project Management?', 'Career Opportunities in Project Management', 'Project Manager Roles & Responsibilities', 'Project Life Cycle', 'Types of Projects', 'Course Roadmap', 'Professional Ethics', 'Final Capstone Project']],
    [2, 'Project Management Fundamentals', '📘', 'fundamentals', 'content', ['Project vs. Operations', 'Project Constraints', 'Project Success Criteria', 'Organizational Structures', 'Project Governance', 'Business Case', 'Project Charter', 'Project Management Frameworks', 'Project Management Processes', 'Introduction Quiz']],
    [3, 'Project Initiation', '🚀', 'initiation', 'content', ['Identifying Business Needs', 'Defining Project Objectives', 'Stakeholder Identification', 'Stakeholder Analysis', 'Scope Definition', 'Creating the Project Charter', 'Project Approval Process', 'Initiation Case Study']],
    [4, 'Project Planning', '🗓️', 'planning', 'content', ['Work Breakdown Structure (WBS)', 'Project Scheduling', 'Gantt Charts', 'Milestones', 'Critical Path Method (CPM)', 'Resource Planning', 'Budget Planning', 'Cost Estimation', 'Procurement Planning', 'Project Planning Workshop']],
    [5, 'Project Scope Management', '🎯', 'scope', 'content', ['Collecting Requirements', 'Defining Scope', 'Creating Scope Statements', 'Scope Baseline', 'Scope Verification', 'Scope Control', 'Preventing Scope Creep', 'Scope Management Project']],
    [6, 'Time Management', '⏱️', 'time', 'content', ['Activity Definition', 'Activity Sequencing', 'Time Estimation', 'Schedule Development', 'Schedule Control', 'Time Tracking', 'Productivity Tools', 'Time Management Exercises']],
    [7, 'Cost Management', '💰', 'cost', 'content', ['Project Budgeting', 'Cost Estimation Methods', 'Budget Baseline', 'Cost Control', 'Earned Value Management (EVM)', 'Financial Reporting', 'Cost Performance Analysis', 'Budget Management Assignment']],
    [8, 'Quality Management', '✅', 'quality', 'content', ['Quality Planning', 'Quality Assurance', 'Quality Control', 'Continuous Improvement', 'Root Cause Analysis', 'Quality Audits', 'Customer Satisfaction', 'Quality Improvement Project']],
    [9, 'Risk Management', '⚠️', 'risk', 'content', ['Risk Identification', 'Risk Assessment', 'Risk Analysis', 'Risk Response Planning', 'Risk Monitoring', 'Risk Register', 'Opportunity Management', 'Risk Management Workshop']],
    [10, 'Communication & Stakeholder Management', '💬', 'comms', 'content', ['Communication Planning', 'Stakeholder Engagement', 'Meeting Management', 'Conflict Resolution', 'Negotiation Skills', 'Presentation Skills', 'Status Reporting', 'Communication Assignment']],
    [11, 'Team Leadership & Human Resource Management', '👥', 'leadership', 'content', ['Building High-Performing Teams', 'Leadership Styles', 'Motivation Techniques', 'Delegation', 'Team Development', 'Performance Management', 'Coaching & Mentoring', 'Managing Remote Teams']],
    [12, 'Agile Project Management', '🔁', 'agile', 'content', ['Introduction to Agile', 'Agile Principles', 'Scrum Framework', 'Scrum Roles', 'Scrum Events', 'Scrum Artifacts', 'Kanban', 'Agile Estimation', 'Agile Project Simulation']],
    [13, 'Project Monitoring & Control', '📈', 'monitoring', 'content', ['Monitoring Progress', 'Performance Measurement', 'Change Management', 'Issue Tracking', 'Project Dashboards', 'KPI Monitoring', 'Variance Analysis', 'Corrective Actions']],
    [14, 'Project Closure', '🏁', 'closure', 'content', ['Closing a Project', 'Final Deliverables', 'Project Evaluation', 'Lessons Learned', 'Client Acceptance', 'Final Documentation', 'Project Handover', 'Project Closure Checklist']],
    [15, 'Project Management Software', '🧰', 'software', 'content', ['Microsoft Project', 'Trello', 'Asana', 'Jira', 'Monday.com', 'ClickUp', 'Notion', 'Smartsheet', 'Google Workspace for Project Teams', 'Software Practice Exercises']],
    [16, 'Business Analysis & Strategic Planning', '📊', 'analysis', 'content', ['Business Analysis Basics', 'SWOT Analysis', 'PESTLE Analysis', 'Feasibility Studies', 'Strategic Planning', 'Organizational Change Management', 'Decision-Making Techniques', 'Business Case Development']],
    [17, 'Professional Skills', '🌟', 'professional', 'content', ['Business Communication', 'Report Writing', 'Proposal Writing', 'Professional Ethics', 'Emotional Intelligence', 'Problem-Solving', 'Critical Thinking', 'Networking Skills']],
    [18, 'Career Development', '💼', 'career', 'content', ['Building a Professional Resume', 'LinkedIn Optimization', 'Interview Preparation', 'PMP Certification Overview', 'CAPM Certification Overview', 'Freelancing as a Project Manager', 'Consulting Opportunities', 'Career Growth Roadmap']],
    [19, 'Practical Projects', '🏗️', 'projects', 'projects', ['Community Development Project', 'Construction Project Plan', 'IT Project Management', 'Event Planning Project', 'NGO Project Management', 'Business Expansion Project', 'Risk Assessment Project', 'Complete Project Management Plan']],
    [20, 'Assessments & Graduation', '🏆', 'assessment', 'assessment', ['Project Management Fundamentals Assessment', 'Planning Assessment', 'Budgeting Assessment', 'Risk Management Assessment', 'Agile & Scrum Assessment', 'Software Tools Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Presentation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'project management foundations', fundamentals: 'PM fundamentals', initiation: 'project initiation', planning: 'project planning', scope: 'scope management', time: 'time management', cost: 'cost management', quality: 'quality management', risk: 'risk management', comms: 'communication & stakeholder management', leadership: 'team leadership', agile: 'Agile & Scrum', monitoring: 'monitoring & control', closure: 'project closure', software: 'PM software', analysis: 'business analysis & strategy', professional: 'professional skills', career: 'PM careers & certification', projects: 'applied PM projects', assessment: 'your knowledge' };

  var TEMPLATES = {
    charter: '<h4>📥 Template: Project Charter</h4><ul><li>Project title &amp; sponsor</li><li>Business case / justification</li><li>Objectives &amp; success criteria</li><li>High-level scope &amp; deliverables</li><li>Key stakeholders</li><li>High-level budget &amp; timeline</li><li>Risks &amp; assumptions</li><li>Project manager &amp; authority</li></ul>',
    wbs: '<h4>📥 Template: Work Breakdown Structure (WBS)</h4><p>Break the project into deliverables, then work packages:</p><ul><li>1.0 Project → 1.1 Phase → 1.1.1 Work package → tasks</li><li>Each work package: owner, estimate, dependencies</li><li>Rule: 100% of the work, no more, no less</li></ul>',
    gantt: '<h4>📥 Template: Gantt Chart</h4><p>Columns: Task · Start · End · Duration · Owner · % Complete · Dependencies. Bars on a timeline show overlap; mark milestones as diamonds and the critical path in a distinct colour.</p>',
    risk: '<h4>📥 Template: Risk Register</h4><p>Columns: ID · Risk description · Category · Probability (L/M/H) · Impact (L/M/H) · Score · Response (avoid/mitigate/transfer/accept) · Owner · Status.</p>',
    budget: '<h4>📥 Template: Budget</h4><ul><li>Cost line items (labour, materials, tools, contingency)</li><li>Estimate method &amp; assumptions</li><li>Baseline vs actual vs variance</li><li>Earned Value: PV, EV, AC, CPI, SPI</li></ul>',
    status: '<h4>📥 Template: Status Report</h4><ul><li>Overall status (Green/Amber/Red)</li><li>Accomplishments this period</li><li>Planned next period</li><li>Schedule &amp; budget vs baseline</li><li>Risks/issues &amp; decisions needed</li></ul>',
    minutes: '<h4>📥 Template: Meeting Minutes</h4><ul><li>Date, attendees, agenda</li><li>Decisions made</li><li>Action items (owner + due date)</li><li>Follow-ups / next meeting</li></ul>',
    closure: '<h4>📥 Template: Project Closure Report</h4><ul><li>Objectives vs results</li><li>Final scope, schedule &amp; budget performance</li><li>Deliverables &amp; client acceptance</li><li>Lessons learned</li><li>Handover &amp; sign-off</li></ul>'
  };
  function templateFor(name) {
    if (/Project Charter|Creating the Project Charter/i.test(name)) return TEMPLATES.charter;
    if (/Work Breakdown Structure|WBS/i.test(name)) return TEMPLATES.wbs;
    if (/Gantt/i.test(name)) return TEMPLATES.gantt;
    if (/Risk Register/i.test(name)) return TEMPLATES.risk;
    if (/Budget|Cost Estimation|Earned Value/i.test(name)) return TEMPLATES.budget;
    if (/Status Reporting|Financial Reporting/i.test(name)) return TEMPLATES.status;
    if (/Meeting Management/i.test(name)) return TEMPLATES.minutes;
    if (/Closure|Project Handover|Final Documentation/i.test(name)) return TEMPLATES.closure;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'project management skills';
    var focus = position % 2 ? 'practical technique, real examples and confident delivery' : 'understanding the process, applying the tool and reviewing the result';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Project Management · ' + esc(moduleTitle) + '</strong><span>PMBOK &amp; Agile aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and where it fits in the project life cycle.</li>' +
      '<li>Learn the tool/technique and the process that uses it.</li>' +
      '<li>Apply it to a real project scenario and record one decision it drives.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real Liberian business, NGO, construction, IT or community project.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Complete <em>' + esc(name) + '</em> for a sample project.</li>' +
      '<li><strong>Exercise 2:</strong> Explain how it affects scope, schedule, cost, quality or risk.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to CAPM®/PMP® readiness.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Produce the deliverable for a real or realistic scenario and add it to your portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Initiate: charter, objectives and stakeholders.</li><li>Plan: WBS, schedule, budget and risk register.</li><li>Show how you would execute, monitor/control and close it, with the key documents.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A complete set of project documents (charter, WBS, schedule, budget, risk register) for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your plan and templates offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'A project is best defined as:', opts: ['Ongoing daily operations', 'A temporary effort to create a unique result', 'A permanent department', 'A type of software'], correct: 1, exp: 'Projects are temporary and produce a unique product/service/result.' },
      { q: 'The project life cycle phases are broadly:', opts: ['Start and stop', 'Initiate, plan, execute, monitor & control, close', 'Only planning', 'Only execution'], correct: 1, exp: 'These are the five PM process groups.' },
      { q: 'Professional ethics for a PM require:', opts: ['Hiding bad news', 'Honesty, responsibility, respect and fairness', 'Ignoring stakeholders', 'Padding budgets'], correct: 1, exp: 'PMs uphold honesty, responsibility, respect and fairness.' },
      { q: 'A project manager is mainly responsible for:', opts: ['Doing all the work alone', 'Leading the team to meet objectives within constraints', 'Only paperwork', 'Only coding'], correct: 1, exp: 'The PM leads planning, execution and delivery within constraints.' },
      { q: 'The best measure of project success is:', opts: ['Being busy', 'Meeting objectives, scope, time, cost and quality and satisfying stakeholders', 'Spending the whole budget', 'The most meetings'], correct: 1, exp: 'Success = meeting agreed objectives and stakeholder needs.' },
      { q: 'A capstone project helps you:', opts: ['Skip learning', 'Apply the whole method to a real project end to end', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates every skill into one real project.' }
    ],
    fundamentals: [
      { q: 'The classic "triple constraint" is:', opts: ['People, place, time', 'Scope, time and cost (with quality)', 'Risk, quality, ethics', 'Plan, do, check'], correct: 1, exp: 'Scope, time and cost balance around quality.' },
      { q: 'A business case justifies a project by showing:', opts: ['Only cost', 'The value/benefit versus the cost and risk', 'The logo', 'The team names'], correct: 1, exp: 'The business case shows why the project is worth doing.' },
      { q: 'A project charter formally:', opts: ['Ends the project', 'Authorizes the project and names the PM', 'Pays the team', 'Designs the product'], correct: 1, exp: 'The charter authorizes the project and empowers the PM.' },
      { q: 'Projects differ from operations because they are:', opts: ['Permanent and repetitive', 'Temporary and unique', 'Never planned', 'Only IT'], correct: 1, exp: 'Operations are ongoing; projects are temporary and unique.' },
      { q: 'Project governance provides:', opts: ['Random decisions', 'A framework for decisions, roles and oversight', 'No structure', 'Only budgets'], correct: 1, exp: 'Governance defines decision rights and oversight.' },
      { q: 'A functional vs projectized structure differs in:', opts: ['The logo', 'How much authority the PM has', 'The country', 'The software'], correct: 1, exp: 'PM authority is low in functional, high in projectized structures.' }
    ],
    planning: [
      { q: 'A Work Breakdown Structure (WBS) decomposes:', opts: ['The budget only', 'The total scope into manageable work packages', 'The team', 'The risks'], correct: 1, exp: 'The WBS breaks scope into deliverables and work packages.' },
      { q: 'The Critical Path is:', opts: ['The cheapest tasks', 'The longest sequence of dependent tasks (sets minimum duration)', 'Any random path', 'The shortest task'], correct: 1, exp: 'The critical path determines the project’s minimum duration.' },
      { q: 'A milestone is:', opts: ['A long task', 'A significant point/event with zero duration', 'A budget line', 'A risk'], correct: 1, exp: 'Milestones mark key events, not work with duration.' },
      { q: 'A Gantt chart shows:', opts: ['Only costs', 'Tasks against a timeline with durations and dependencies', 'Only risks', 'Team photos'], correct: 1, exp: 'Gantt charts visualise the schedule.' },
      { q: 'Scope creep is:', opts: ['Good practice', 'Uncontrolled expansion of scope without control', 'A closing step', 'A budget method'], correct: 1, exp: 'Scope creep is uncontrolled, unapproved scope growth.' },
      { q: 'Requirements should be collected from:', opts: ['Only the PM', 'Stakeholders and users', 'No one', 'Competitors only'], correct: 1, exp: 'Gather requirements from stakeholders and end users.' }
    ],
    cost: [
      { q: 'Earned Value Management compares:', opts: ['Only actual cost', 'Planned value, earned value and actual cost', 'Only the schedule', 'Team size'], correct: 1, exp: 'EVM uses PV, EV and AC to measure performance.' },
      { q: 'A Cost Performance Index (CPI) below 1 means:', opts: ['Under budget', 'Over budget (cost overrun)', 'On budget', 'No data'], correct: 1, exp: 'CPI < 1 indicates you are over budget.' },
      { q: 'The budget baseline is:', opts: ['A guess', 'The approved, time-phased project budget', 'The final cost', 'The salary'], correct: 1, exp: 'The baseline is the approved budget you measure against.' },
      { q: 'Cost control aims to:', opts: ['Spend faster', 'Manage costs against the baseline and control changes', 'Ignore the budget', 'Increase scope'], correct: 1, exp: 'Cost control keeps spending aligned to the baseline.' },
      { q: 'Analogous estimating uses:', opts: ['No data', 'Costs from similar past projects', 'Only guessing', 'The team’s mood'], correct: 1, exp: 'Analogous estimating draws on similar past projects.' },
      { q: 'Contingency reserve covers:', opts: ['Unknown-unknowns only', 'Identified (known) risks', 'Salaries only', 'Nothing'], correct: 1, exp: 'Contingency covers identified risks; management reserve covers unknowns.' }
    ],
    quality: [
      { q: 'Quality assurance focuses on:', opts: ['Inspecting final output only', 'The processes that produce quality', 'The budget', 'The schedule'], correct: 1, exp: 'QA improves processes; QC inspects outputs.' },
      { q: 'Quality control involves:', opts: ['Planning only', 'Measuring/inspecting deliverables against standards', 'Hiring', 'Marketing'], correct: 1, exp: 'QC checks deliverables meet quality requirements.' },
      { q: 'Root cause analysis aims to:', opts: ['Blame people', 'Find and fix the underlying cause of a problem', 'Ignore issues', 'Add scope'], correct: 1, exp: 'RCA addresses causes, not just symptoms.' },
      { q: 'Continuous improvement (Kaizen) means:', opts: ['One big change', 'Ongoing incremental improvement', 'No change', 'Only audits'], correct: 1, exp: 'Small, ongoing improvements compound over time.' },
      { q: 'Quality should be:', opts: ['Inspected in at the end', 'Planned in from the start', 'Ignored', 'Optional'], correct: 1, exp: 'Quality is planned and built in, not inspected in later.' },
      { q: 'Customer satisfaction depends on meeting:', opts: ['Only the budget', 'Stated and implied requirements', 'Only the deadline', 'The PM’s wishes'], correct: 1, exp: 'Satisfaction means fitness for use and meeting requirements.' }
    ],
    risk: [
      { q: 'A risk is:', opts: ['A certain event', 'An uncertain event that could affect objectives', 'A finished task', 'A budget line'], correct: 1, exp: 'Risks are uncertain events with positive or negative impact.' },
      { q: 'A risk register records:', opts: ['Only costs', 'Risks, their analysis, responses and owners', 'Team names only', 'The logo'], correct: 1, exp: 'The register tracks risks and how they are managed.' },
      { q: 'Risk responses for threats include:', opts: ['Avoid, mitigate, transfer, accept', 'Only accept', 'Only ignore', 'Only exploit'], correct: 0, exp: 'Threats: avoid, mitigate, transfer or accept.' },
      { q: 'Qualitative risk analysis ranks risks by:', opts: ['Alphabet', 'Probability and impact', 'Cost only', 'Team preference'], correct: 1, exp: 'It scores risks by probability × impact.' },
      { q: 'Opportunity management treats positive risks with:', opts: ['Avoid only', 'Exploit, enhance, share or accept', 'Nothing', 'Deletion'], correct: 1, exp: 'Opportunities: exploit, enhance, share or accept.' },
      { q: 'Risk monitoring means:', opts: ['One-time only', 'Tracking risks and responses throughout the project', 'Ignoring risks', 'Only at closure'], correct: 1, exp: 'Risks are monitored continuously across the project.' }
    ],
    comms: [
      { q: 'Most of a project manager’s time is spent:', opts: ['Coding', 'Communicating', 'Sleeping', 'Filing'], correct: 1, exp: 'PMs spend the majority of their time communicating.' },
      { q: 'A stakeholder is:', opts: ['Only the sponsor', 'Anyone affected by or who can affect the project', 'Only the team', 'Only the client'], correct: 1, exp: 'Stakeholders include anyone with an interest in the project.' },
      { q: 'A status report should include:', opts: ['Only good news', 'Progress, issues, risks and next steps', 'Nothing', 'Only the budget'], correct: 1, exp: 'Reports give an honest, complete status picture.' },
      { q: 'Good conflict resolution seeks:', opts: ['One winner', 'A constructive, collaborative outcome', 'Avoidance always', 'Blame'], correct: 1, exp: 'Collaboration/problem-solving usually gives the best outcome.' },
      { q: 'A communication plan defines:', opts: ['Nothing', 'Who needs what information, when and how', 'Only meetings', 'The budget'], correct: 1, exp: 'It sets the audience, content, frequency and channel.' },
      { q: 'Effective meetings need:', opts: ['No agenda', 'An agenda, the right people, and action items', 'Only the PM', 'No follow-up'], correct: 1, exp: 'Agenda, right attendees and clear actions make meetings work.' }
    ],
    agile: [
      { q: 'Agile values working software/results over:', opts: ['Comprehensive documentation', 'Customers', 'Teams', 'Delivery'], correct: 0, exp: 'Agile values working results over exhaustive documentation.' },
      { q: 'In Scrum, the Product Owner is responsible for:', opts: ['Writing all code', 'The product backlog and value', 'Running servers', 'HR'], correct: 1, exp: 'The Product Owner owns and prioritises the backlog.' },
      { q: 'A Scrum sprint is:', opts: ['A year long', 'A short, fixed time-box (e.g. 1–4 weeks)', 'Unlimited', 'One hour'], correct: 1, exp: 'Sprints are short, fixed iterations delivering increments.' },
      { q: 'The Scrum Master mainly:', opts: ['Commands the team', 'Facilitates and removes impediments', 'Owns the backlog', 'Signs contracts'], correct: 1, exp: 'The Scrum Master is a servant-leader/facilitator.' },
      { q: 'Kanban focuses on:', opts: ['Fixed sprints', 'Visualising work and limiting work in progress', 'No board', 'Only estimation'], correct: 1, exp: 'Kanban visualises flow and limits WIP.' },
      { q: 'A daily stand-up is for:', opts: ['Long reports', 'A short sync on progress, plan and blockers', 'Performance reviews', 'Budgeting'], correct: 1, exp: 'The daily scrum is a brief team synchronisation.' }
    ],
    monitoring: [
      { q: 'Monitoring & controlling compares:', opts: ['Nothing', 'Actual performance against the plan/baseline', 'Only team mood', 'Only the logo'], correct: 1, exp: 'You measure actuals against the baseline and act on variances.' },
      { q: 'Integrated change control ensures changes are:', opts: ['Made instantly by anyone', 'Reviewed, approved and documented', 'Ignored', 'Hidden'], correct: 1, exp: 'Changes go through a formal review/approval process.' },
      { q: 'A KPI is:', opts: ['A random number', 'A key metric that measures performance', 'A team member', 'A risk'], correct: 1, exp: 'KPIs quantify progress toward objectives.' },
      { q: 'Variance analysis looks at:', opts: ['Only good news', 'The difference between planned and actual', 'The logo', 'Team size'], correct: 1, exp: 'Variance = planned vs actual; it triggers corrective action.' },
      { q: 'A corrective action is taken to:', opts: ['Do nothing', 'Bring performance back in line with the plan', 'Expand scope', 'Cancel the project'], correct: 1, exp: 'Corrective actions realign performance to the plan.' },
      { q: 'Lessons learned should be captured:', opts: ['Never', 'Throughout and at closure', 'Only if it fails', 'Only by the sponsor'], correct: 1, exp: 'Capture lessons continuously and formalise at closure.' }
    ],
    software: [
      { q: 'Trello, Asana and Jira are primarily:', opts: ['Accounting apps', 'Project/task management tools', 'Photo editors', 'Databases'], correct: 1, exp: 'They manage tasks, boards and workflows.' },
      { q: 'A Kanban board in these tools shows:', opts: ['Only costs', 'Tasks moving across columns (e.g. To Do → Doing → Done)', 'Team salaries', 'The logo'], correct: 1, exp: 'Boards visualise task flow across stages.' },
      { q: 'Microsoft Project is strong for:', opts: ['Photo editing', 'Detailed scheduling, Gantt charts and resources', 'Email only', 'Chatting'], correct: 1, exp: 'MS Project excels at scheduling and resource planning.' },
      { q: 'Jira is especially popular for:', opts: ['Construction only', 'Agile/software teams (sprints, backlogs)', 'Cooking', 'Music'], correct: 1, exp: 'Jira is widely used for Agile software delivery.' },
      { q: 'Choosing a PM tool should depend on:', opts: ['The logo colour', 'Team size, methodology and needs', 'Random choice', 'The weather'], correct: 1, exp: 'Match the tool to your team, method and needs.' },
      { q: 'Google Workspace helps project teams by:', opts: ['Nothing', 'Enabling shared docs, sheets and collaboration', 'Only email', 'Only storage'], correct: 1, exp: 'Docs/Sheets/Slides/Drive support collaboration.' }
    ],
    analysis: [
      { q: 'SWOT analysis examines:', opts: ['Strengths, Weaknesses, Opportunities, Threats', 'Sales only', 'Software only', 'Schedules only'], correct: 0, exp: 'SWOT reviews internal and external factors.' },
      { q: 'PESTLE analysis looks at:', opts: ['Only price', 'Political, Economic, Social, Technological, Legal, Environmental factors', 'Only the team', 'Only risk'], correct: 1, exp: 'PESTLE scans the external macro-environment.' },
      { q: 'A feasibility study assesses whether a project is:', opts: ['Fun', 'Viable technically, financially and operationally', 'Popular', 'Colourful'], correct: 1, exp: 'Feasibility checks if the project is workable and worthwhile.' },
      { q: 'Business analysis mainly defines:', opts: ['The logo', 'Needs and requirements to deliver value', 'Salaries', 'The office'], correct: 1, exp: 'BA identifies needs and requirements for value.' },
      { q: 'Organizational change management focuses on:', opts: ['Ignoring people', 'Helping people adopt the change', 'Only tools', 'Only budgets'], correct: 1, exp: 'Change management supports people through transition.' },
      { q: 'A strong decision-making technique is to:', opts: ['Guess', 'Weigh options against clear criteria', 'Avoid deciding', 'Copy competitors'], correct: 1, exp: 'Structured criteria improve decision quality.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', fundamentals: 'fundamentals', initiation: 'fundamentals', planning: 'planning', scope: 'planning', time: 'planning', cost: 'cost', quality: 'quality', risk: 'risk', comms: 'comms', leadership: 'comms', agile: 'agile', monitoring: 'monitoring', closure: 'monitoring', software: 'software', analysis: 'analysis', professional: 'general', career: 'general', projects: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.planning, BANK.cost, BANK.quality, BANK.risk, BANK.comms, BANK.agile, BANK.software, BANK.monitoring, BANK.analysis);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Planning/i.test(name)) return 'planning';
    if (/Budgeting|Cost/i.test(name)) return 'cost';
    if (/Risk/i.test(name)) return 'risk';
    if (/Agile|Scrum/i.test(name)) return 'agile';
    if (/Software|Tools/i.test(name)) return 'software';
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
        var qid = 'pm-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–18.</li><li>Complete the practical projects in Module 19 (incl. a Complete Project Management Plan).</li><li>Deliver the Capstone Project Presentation and pass the Portfolio Review.</li><li>Pass the skill assessments, the Midterm and Final Examinations.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Presentation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'pm-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'pm-m' + num + '-a' + flat;
        quizzes[qk] = assessmentQuiz(key, name, 8);
        lessons.push({ t: '📝 ' + name, d: '8 questions', isQuiz: true, quizId: qk });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Quiz</span></div><h3>' + esc(name) + '</h3><p>Answer this module quiz, then review each explanation to check your understanding.</p></div>';
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
      var pqid = 'pm-m' + num + '-q' + flat;
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
    title: 'Complete Project Management Professional Certificate',
    shortDesc: 'A full 20-module program from beginner to project management professional: initiation, planning, scope/time/cost/quality/risk, communication & stakeholders, leadership, Agile & Scrum, monitoring & control, closure, PM software, business analysis, professional & career skills, 8 practical projects, a capstone and a Certificate of Completion. Prepares you for CAPM®/PMP®.',
    category: 'Project Management',
    icon: ex.icon || '📋',
    gradient: ex.gradient || 'linear-gradient(135deg,#064e3b,#047857)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH project managers',
    duration: '150h+',
    level: 'Beginner → Professional',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$200',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-PM-0001',
    learn: [
      'Initiate, plan, execute, monitor & control, and close projects',
      'Build charters, WBS, schedules (Gantt/CPM), budgets and risk registers',
      'Manage scope, time, cost, quality and risk using proven techniques',
      'Communicate with stakeholders and lead high-performing teams',
      'Apply Agile & Scrum and use PM software (MS Project, Jira, Trello, Asana)',
      'Prepare for CAPM®/PMP® and build a project management portfolio'
    ],
    requirements: [
      'No prior experience required — we start from the fundamentals',
      'A device to use PM software and complete templates',
      'Willingness to apply each technique to a real or sample project'
    ],
    about: [
      'This is the complete TIH Project Management Professional Certificate, rebuilt into twenty modules that take you from the basics to professional-level practice.',
      'Every content lesson has a video and printable notes; downloadable templates cover the Project Charter, WBS, Gantt chart, Risk Register, Budget, Status Report, Meeting Minutes and Closure Report, and eight practical projects plus a capstone build your portfolio.',
      'Software & tools: Microsoft Project, Trello, Asana, Jira, Monday.com, ClickUp, Notion, Smartsheet, Excel and Google Workspace. You finish with a full project plan and — after the graduation assessment — a Certificate of Completion, ready for CAPM®/PMP®.'
    ],
    modules: modules,
    quizzes: quizzes,
    _pmFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[PM] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
