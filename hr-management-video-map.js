/* TIH — Human Resource Management: one distinct, real video per content lesson.

   Runs AFTER hr-management-curriculum.js (see EXTRAS in tih-course-loader.js), so it can
   write straight onto the built course. Every id below came from a real search
   result; none was written from memory. */
(function () {
  if (typeof window === 'undefined') return;
  var MAP = {
    // Module 1: Foundations of Human Resource Management
    "Welcome to the Course": "4YRchaXY2-M",
    "What Is Human Resource Management?": "bI9RZjF-538",
    "The Evolution of HR": "OYE8wpLL3_k",
    "The Role of the HR Professional": "2A1Lejga3zo",
    "HR and Organizational Strategy": "f48ad9HixZo",
    "HR Structures and Operating Models": "T2j2tRvOUtY",
    "Course Roadmap": "Qz2RubP95ao",
    // Module 2: Human Resource Planning
    "Introduction to HR Planning": "TDdrUTGhp44",
    "Job Analysis": "R2LlW6OLAxA",
    "Writing Job Descriptions": "OlDvggrtL9E",
    "Workforce Forecasting": "PDytR9t1FcY",
    "Succession Planning": "ij4IwMs8N_w",
    "Organizational Design and Structure": "mXgZyhWHfjc",
    "HR Budgeting": "aaJm_OHbbnU",
    // Module 3: Recruitment and Selection
    "The Recruitment Process": "SoibI0P4bg8",
    "Sourcing Candidates": "YGxdZHUgOXg",
    "Writing Job Adverts": "41cUy_U08Qo",
    "Screening Applications and CVs": "eR9I3JTNLVA",
    "Interviewing Techniques": "_UNzWNXC4Do",
    "Selection Tests and Assessments": "yfywPwz4pb4",
    "Reference and Background Checks": "ytwQQyDxPew",
    "Making the Job Offer": "IftfH7xCeCo",
    // Module 4: Onboarding and Employee Orientation
    "Why Onboarding Matters": "0TehiwwRahk",
    "Designing an Onboarding Program": "KZ3BQnqdMW4",
    "The First Day and First Week": "DFoLFC_WCeI",
    "Probation Periods": "r8fNtwuJNM8",
    "Employee Handbooks": "tvBeUHPkUss",
    "Buddy Systems and Peer Support": "gNrYTyVx3cc",
    "Onboarding Remote Employees": "JWdVt_4AeD4",
    // Module 5: Training and Development
    "Introduction to Training and Development": "ps09Fv_BCrw",
    "Training Needs Analysis": "d0HPcpSnCyc",
    "Designing a Training Program": "JB6aDdq3HTI",
    "Delivery Methods and Learning Styles": "DHJuL7Ipheo",
    "Coaching and Mentoring": "cHF8Rc8cT2c",
    "Evaluating Training Effectiveness": "vlppV94ZLII",
    "Career Development Planning": "RXySlIUKM3g",
    // Module 6: Performance Management
    "Introduction to Performance Management": "SyOZ_4rWWiY",
    "Setting SMART Objectives": "0yro6B2-uNk",
    "Key Performance Indicators": "qgzscWaAmtY",
    "Conducting Appraisal Meetings": "AbTza-1wn_A",
    "Giving Constructive Feedback": "QLbOG-mJ5Ho",
    "Managing Underperformance": "Q3ICbLhl2BY",
    "Performance Improvement Plans": "zAuBwm3gwaM",
    // Module 7: Compensation and Benefits
    "Introduction to Compensation": "wZoRId6ADuo",
    "Job Evaluation and Grading": "w-oEnqmtSak",
    "Designing a Salary Structure": "86eZTDFt_aY",
    "Employee Benefits": "5fX9eQubzEE",
    "Incentives and Bonus Schemes": "_ll5Fwn_s_M",
    "Payroll Fundamentals": "O2noMeKavUE",
    "Pay Equity and Transparency": "5z6agLRBhSA",
    // Module 8: Employee Relations
    "Introduction to Employee Relations": "j2WsfhSIEHI",
    "The Employment Contract": "uuf1DU0Bg2E",
    "Workplace Policies and Procedures": "9lxzKZfHFR4",
    "Handling Grievances": "MjZtHEZYqTE",
    "Disciplinary Procedures": "gVaiEb8HBBw",
    "Conflict Resolution and Mediation": "8zm9sEST79A",
    "Trade Unions and Collective Bargaining": "lFQMtkBfyNU",
    // Module 9: Employment Law and Compliance
    "Introduction to Employment Law": "CJhRXBpXTPI",
    "Contracts of Employment and Terms": "ztQF4Xu27N0",
    "Discrimination and Equal Opportunity": "3lRjzlnR1i0",
    "Termination and Redundancy": "TYsqZEfQtKg",
    "Working Time, Leave and Holidays": "D4yFQFVk4hA",
    "Data Protection and Employee Records": "J6oE5l-lqJk",
    "Liberia Labour Law Essentials": "4snigs-ItYM",
    // Module 10: Health, Safety and Wellbeing
    "Occupational Health and Safety Basics": "dPupXa-PXHA",
    "Risk Assessment in the Workplace": "BzkhrD33YvI",
    "Accident Reporting and Investigation": "npziUtfqBeo",
    "Safety Training and Drills": "ooXK2WyQTn4",
    "Mental Health and Wellbeing at Work": "0ragRvn8jH8",
    "Workplace Harassment Prevention": "DP1sa4N87hA",
    "Employee Assistance Programs": "6ueLrtLipqg",
    // Module 11: HR Strategy, Culture and Change
    "Strategic Human Resource Management": "XQXpye1VuTY",
    "Organizational Culture": "6uLN9dVfOBI",
    "Employee Engagement": "g9HjuA1JF18",
    "Managing Change": "8mVrDT9Atfc",
    "Diversity, Equity and Inclusion": "vojMkk1hN4U",
    "Employer Branding": "IRWQ2VKW5WU",
    "Employee Retention and Turnover": "R4dkgkDWntg",
    // Module 12: HR Analytics and Technology
    "Introduction to HR Analytics": "eQ3z4W8pK0A",
    "Key HR Metrics": "qb8Oq9bYYdM",
    "HR Information Systems (HRIS)": "wGUzhf3TMys",
    "Using Excel for HR Data": "uUQlNHHCcF0",
    "AI and Automation in HR": "w-hE1dzuQt0",
    "Data Privacy in HR Analytics": "OLcAzEhOGMo",
    "HR Reporting and Dashboards": "0IFYY7a5pAo"
  };
  function norm(t) {
    return String(t || '').replace(/^\s*\d+(?:\.\d+)*\s*/, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }
  var BY_NORM = {};
  Object.keys(MAP).forEach(function (k) { BY_NORM[norm(k)] = MAP[k]; });

  window.TIH_TOPIC_VIDEOS = window.TIH_TOPIC_VIDEOS || {};
  window.TIH_TOPIC_VIDEOS['hr-management'] = BY_NORM;

  var db = window.COURSES_DB && window.COURSES_DB['hr-management'];
  if (!db || !db.modules) return;
  var applied = 0;
  db.modules.forEach(function (m) {
    (m.lessons || []).forEach(function (l) {
      if (l.isQuiz || l.isProject) return;
      var v = BY_NORM[norm(l.t)];
      if (v) { l.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[HRM-VIDEOS] applied ' + applied + ' of ' + Object.keys(MAP).length);
  }
})();
