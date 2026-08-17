/* TIH Complete Project Management Professional Certificate — one educational YouTube video per topic.
   Course id: project-mgmt */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['project-mgmt'] || !COURSES_DB['project-mgmt'].modules) return;
  var MAP = {
    "Welcome to the Course": "7UJBRFGLhJE",
    "What is Project Management?": "7UJBRFGLhJE",
    "Career Opportunities in Project Management": "7UJBRFGLhJE",
    "Project Manager Roles & Responsibilities": "7UJBRFGLhJE",
    "Project Life Cycle": "7UJBRFGLhJE",
    "Types of Projects": "7UJBRFGLhJE",
    "Course Roadmap": "7UJBRFGLhJE",
    "Professional Ethics": "7UJBRFGLhJE",
    "Final Capstone Project": "7UJBRFGLhJE",

    "Project vs. Operations": "cLXkOYaZ_K0",
    "Project Constraints": "cLXkOYaZ_K0",
    "Project Success Criteria": "cLXkOYaZ_K0",
    "Organizational Structures": "cLXkOYaZ_K0",
    "Project Governance": "cLXkOYaZ_K0",
    "Business Case": "cLXkOYaZ_K0",
    "Project Charter": "hIhTtzo0eBg",
    "Project Management Frameworks": "cLXkOYaZ_K0",
    "Project Management Processes": "cLXkOYaZ_K0",

    "Identifying Business Needs": "hIhTtzo0eBg",
    "Defining Project Objectives": "hIhTtzo0eBg",
    "Stakeholder Identification": "hIhTtzo0eBg",
    "Stakeholder Analysis": "hIhTtzo0eBg",
    "Scope Definition": "ZV4kTkMzl38",
    "Creating the Project Charter": "hIhTtzo0eBg",
    "Project Approval Process": "hIhTtzo0eBg",
    "Initiation Case Study": "hIhTtzo0eBg",

    "Work Breakdown Structure (WBS)": "sf-inTpymjg",
    "Project Scheduling": "UYbShgphnhA",
    "Gantt Charts": "sf-inTpymjg",
    "Milestones": "sf-inTpymjg",
    "Critical Path Method (CPM)": "UYbShgphnhA",
    "Resource Planning": "sf-inTpymjg",
    "Budget Planning": "8xxkA20ycck",
    "Cost Estimation": "8xxkA20ycck",
    "Procurement Planning": "sf-inTpymjg",
    "Project Planning Workshop": "sf-inTpymjg",

    "Collecting Requirements": "ZV4kTkMzl38",
    "Defining Scope": "ZV4kTkMzl38",
    "Creating Scope Statements": "ZV4kTkMzl38",
    "Scope Baseline": "ZV4kTkMzl38",
    "Scope Verification": "ZV4kTkMzl38",
    "Scope Control": "ZV4kTkMzl38",
    "Preventing Scope Creep": "ZV4kTkMzl38",
    "Scope Management Project": "ZV4kTkMzl38",

    "Activity Definition": "UYbShgphnhA",
    "Activity Sequencing": "UYbShgphnhA",
    "Time Estimation": "UYbShgphnhA",
    "Schedule Development": "UYbShgphnhA",
    "Schedule Control": "UYbShgphnhA",
    "Time Tracking": "UYbShgphnhA",
    "Productivity Tools": "UYbShgphnhA",
    "Time Management Exercises": "UYbShgphnhA",

    "Project Budgeting": "8xxkA20ycck",
    "Cost Estimation Methods": "8xxkA20ycck",
    "Budget Baseline": "8xxkA20ycck",
    "Cost Control": "8xxkA20ycck",
    "Earned Value Management (EVM)": "8xxkA20ycck",
    "Financial Reporting": "8xxkA20ycck",
    "Cost Performance Analysis": "8xxkA20ycck",
    "Budget Management Assignment": "8xxkA20ycck",

    "Quality Planning": "1rQT1R3S2BQ",
    "Quality Assurance": "1rQT1R3S2BQ",
    "Quality Control": "1rQT1R3S2BQ",
    "Continuous Improvement": "1rQT1R3S2BQ",
    "Root Cause Analysis": "1rQT1R3S2BQ",
    "Quality Audits": "1rQT1R3S2BQ",
    "Customer Satisfaction": "1rQT1R3S2BQ",
    "Quality Improvement Project": "1rQT1R3S2BQ",

    "Risk Identification": "52tOs1qv3Vg",
    "Risk Assessment": "52tOs1qv3Vg",
    "Risk Analysis": "52tOs1qv3Vg",
    "Risk Response Planning": "52tOs1qv3Vg",
    "Risk Monitoring": "52tOs1qv3Vg",
    "Risk Register": "52tOs1qv3Vg",
    "Opportunity Management": "52tOs1qv3Vg",
    "Risk Management Workshop": "52tOs1qv3Vg",

    "Communication Planning": "bV9yUQV6D60",
    "Stakeholder Engagement": "bV9yUQV6D60",
    "Meeting Management": "bV9yUQV6D60",
    "Conflict Resolution": "bV9yUQV6D60",
    "Negotiation Skills": "bV9yUQV6D60",
    "Presentation Skills": "bV9yUQV6D60",
    "Status Reporting": "bV9yUQV6D60",
    "Communication Assignment": "bV9yUQV6D60",

    "Building High-Performing Teams": "MUtUmwbQSkw",
    "Leadership Styles": "MUtUmwbQSkw",
    "Motivation Techniques": "MUtUmwbQSkw",
    "Delegation": "MUtUmwbQSkw",
    "Team Development": "MUtUmwbQSkw",
    "Performance Management": "MUtUmwbQSkw",
    "Coaching & Mentoring": "MUtUmwbQSkw",
    "Managing Remote Teams": "MUtUmwbQSkw",

    "Introduction to Agile": "J-psYRsMZ1A",
    "Agile Principles": "J-psYRsMZ1A",
    "Scrum Framework": "J-psYRsMZ1A",
    "Scrum Roles": "J-psYRsMZ1A",
    "Scrum Events": "J-psYRsMZ1A",
    "Scrum Artifacts": "J-psYRsMZ1A",
    "Kanban": "J-psYRsMZ1A",
    "Agile Estimation": "J-psYRsMZ1A",
    "Agile Project Simulation": "J-psYRsMZ1A",

    "Monitoring Progress": "QLCHxvyx8ZA",
    "Performance Measurement": "QLCHxvyx8ZA",
    "Change Management": "QLCHxvyx8ZA",
    "Issue Tracking": "QLCHxvyx8ZA",
    "Project Dashboards": "QLCHxvyx8ZA",
    "KPI Monitoring": "QLCHxvyx8ZA",
    "Variance Analysis": "QLCHxvyx8ZA",
    "Corrective Actions": "QLCHxvyx8ZA",

    "Closing a Project": "jDSmwr_kGz8",
    "Final Deliverables": "jDSmwr_kGz8",
    "Project Evaluation": "jDSmwr_kGz8",
    "Lessons Learned": "jDSmwr_kGz8",
    "Client Acceptance": "jDSmwr_kGz8",
    "Final Documentation": "jDSmwr_kGz8",
    "Project Handover": "jDSmwr_kGz8",
    "Project Closure Checklist": "jDSmwr_kGz8",

    "Microsoft Project": "iKsO9zx9n2Q",
    "Trello": "iKsO9zx9n2Q",
    "Asana": "iKsO9zx9n2Q",
    "Jira": "iKsO9zx9n2Q",
    "Monday.com": "iKsO9zx9n2Q",
    "ClickUp": "iKsO9zx9n2Q",
    "Notion": "iKsO9zx9n2Q",
    "Smartsheet": "iKsO9zx9n2Q",
    "Google Workspace for Project Teams": "iKsO9zx9n2Q",
    "Software Practice Exercises": "iKsO9zx9n2Q",

    "Business Analysis Basics": "68bWRSO8PYc",
    "SWOT Analysis": "68bWRSO8PYc",
    "PESTLE Analysis": "68bWRSO8PYc",
    "Feasibility Studies": "68bWRSO8PYc",
    "Strategic Planning": "68bWRSO8PYc",
    "Organizational Change Management": "68bWRSO8PYc",
    "Decision-Making Techniques": "68bWRSO8PYc",
    "Business Case Development": "68bWRSO8PYc",

    "Business Communication": "UYZaFInbQEY",
    "Report Writing": "UYZaFInbQEY",
    "Proposal Writing": "UYZaFInbQEY",
    "Emotional Intelligence": "UYZaFInbQEY",
    "Problem-Solving": "UYZaFInbQEY",
    "Critical Thinking": "UYZaFInbQEY",
    "Networking Skills": "UYZaFInbQEY",

    "Building a Professional Resume": "UYZaFInbQEY",
    "LinkedIn Optimization": "UYZaFInbQEY",
    "Interview Preparation": "UYZaFInbQEY",
    "PMP Certification Overview": "UYZaFInbQEY",
    "CAPM Certification Overview": "UYZaFInbQEY",
    "Freelancing as a Project Manager": "UYZaFInbQEY",
    "Consulting Opportunities": "UYZaFInbQEY",
    "Career Growth Roadmap": "UYZaFInbQEY",

    "Community Development Project": "7UJBRFGLhJE",
    "Construction Project Plan": "sf-inTpymjg",
    "IT Project Management": "J-psYRsMZ1A",
    "Event Planning Project": "sf-inTpymjg",
    "NGO Project Management": "7UJBRFGLhJE",
    "Business Expansion Project": "68bWRSO8PYc",
    "Risk Assessment Project": "52tOs1qv3Vg",
    "Complete Project Management Plan": "7UJBRFGLhJE"
  };

  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project|🛠️|📝|🧪|🏆):\s*/i, '')
      .replace(/^🛠️\s*/, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  COURSES_DB['project-mgmt'].modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      if (MAP[key]) { lesson.v = MAP[key]; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[PM videos] applied specific video to ' + applied + ' lessons');
  }
})();
