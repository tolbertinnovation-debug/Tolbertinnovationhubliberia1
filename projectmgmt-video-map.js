/* TIH Complete Project Management Professional Certificate —
   one distinct educational YouTube video per topic (no two topics share one).
   Course id: project-mgmt.

   Replaces a map where 159 lessons shared just 17 videos, one of them
   reused across 15 lessons. Every ID here was sourced from a web search
   for that topic area and matched to the individual lesson.

   A title taught in two different modules ("Professional Ethics" appears
   in Module 1 and Module 17) is keyed "M<n>:Title", since a plain title
   key would let one module's entry overwrite the other's and hand both
   lessons the same video.

   Quiz, exam and the text-only Certificate Requirements resource
   deliberately carry no video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['project-mgmt'] || !COURSES_DB['project-mgmt'].modules) return;
  var MAP = {
    /* Module 1: Course Orientation */
    "Welcome to the Course": "8h2vAWK8Kd0",
    "What is Project Management?": "ZrJHEe2YHkE",
    "Career Opportunities in Project Management": "A4ikQ4S7YSA",
    "Project Manager Roles & Responsibilities": "JQMgCSXlH-M",
    "Project Life Cycle": "gu-z9EbIZ5k",
    "Types of Projects": "Cra9WRMd4rM",
    "Course Roadmap": "xS0aXBtQ00Q",
    "M1:Professional Ethics": "ehrABB3bKJM",
    "Final Capstone Project": "rFixX_-EO8c",

    /* Module 2: Project Management Fundamentals */
    "Project vs. Operations": "aTAb7b_KhH8",
    "Project Constraints": "qLQ7k2ZKHPY",
    "Project Success Criteria": "CVF-akhip9w",
    "Organizational Structures": "zAaTIkuAbH4",
    "Project Governance": "rTIxNtnjujQ",
    "Business Case": "D2XDQrU-LSk",
    "Project Charter": "AoA-_ecLzPQ",
    "Project Management Frameworks": "-XC0__JC-ZU",
    "Project Management Processes": "xc-p-g6mXO0",

    /* Module 3: Project Initiation */
    "Identifying Business Needs": "euyaqbBFGCE",
    "Defining Project Objectives": "6AzCB6i7cbc",
    "Stakeholder Identification": "vQbgPZths-s",
    "Stakeholder Analysis": "cslRJOjwdeI",
    "Scope Definition": "zYl_HHzA0RQ",
    "Creating the Project Charter": "3_32wzt8cvY",
    "Project Approval Process": "B_qoLCsHy-s",
    "Initiation Case Study": "obSTqEv6W48",

    /* Module 4: Project Planning */
    "Work Breakdown Structure (WBS)": "YDxAKKVdMVM",
    "Project Scheduling": "3TRKluRUgug",
    "Gantt Charts": "4SCDkdn8dJE",
    "Milestones": "H4WCwNCRHq4",
    "Critical Path Method (CPM)": "MylEHNnc3ho",
    "Resource Planning": "XYzSs7ENwZs",
    "Budget Planning": "8DZFQlrv3Iw",
    "Cost Estimation": "lMLM4Pjy-PA",
    "Procurement Planning": "I-xulhVIbn8",
    "Project Planning Workshop": "zZ5FvIgbqq4",

    /* Module 5: Project Scope Management */
    "Collecting Requirements": "HHey0EXZR0w",
    "Defining Scope": "bqFsjIm6pU8",
    "Creating Scope Statements": "kQ9VxKLMHSQ",
    "Scope Baseline": "kw3LckoEeNo",
    "Scope Verification": "a2DFLdJBtVc",
    "Scope Control": "n4B_-YgcSSY",
    "Preventing Scope Creep": "pTtt4Ui1OA4",
    "Scope Management Project": "elUwyKEH97U",

    /* Module 6: Time Management */
    "Activity Definition": "I2UioplEAJA",
    "Activity Sequencing": "zPtI8q9gvX8",
    "Time Estimation": "f7LpbdxiCMw",
    "Schedule Development": "MYGP9Tj-wY0",
    "Schedule Control": "scOu4l2ZvQs",
    "Time Tracking": "V-POYsOpFes",
    "Productivity Tools": "cYz0RMJVNK8",
    "Time Management Exercises": "M8uZIXZGi64",

    /* Module 7: Cost Management */
    "Project Budgeting": "lTtCFay6qXQ",
    "Cost Estimation Methods": "wc7tkNyHYDk",
    "Budget Baseline": "KSCEVlhAogo",
    "Cost Control": "yIr5PbffuxM",
    "Earned Value Management (EVM)": "9g55AwVQS64",
    "Financial Reporting": "VOURtMtmWZs",
    "Cost Performance Analysis": "QOlUizjnON4",
    "Budget Management Assignment": "iVO8p-7DCfA",

    /* Module 8: Quality Management */
    "Quality Planning": "ayTTNvj0JBs",
    "Quality Assurance": "IV9LRXCgtK0",
    "Quality Control": "DDi_yMGMy94",
    "Continuous Improvement": "1PKfoQICX3Y",
    "Root Cause Analysis": "baKLPXEKoHo",
    "Quality Audits": "hsTxU01HkO4",
    "Customer Satisfaction": "lcXj3hoKmp4",
    "Quality Improvement Project": "eYSc0ff29Ps",

    /* Module 9: Risk Management */
    "Risk Identification": "Crzo6HnGPO4",
    "Risk Analysis": "r1szmmkUPH8",
    "Risk Response Planning": "4JdeOYS7pw4",
    "Risk Monitoring": "NTW5_L4OET0",
    "Risk Register": "voR0FBnC2ZU",
    "Opportunity Management": "WqmV7_NwCdE",
    "Risk Management Workshop": "9tbe9tAwnCk",

    /* Module 10: Communication & Stakeholder Management */
    "Communication Planning": "vg3A3JLWByI",
    "Stakeholder Engagement": "uvNoN2uuXbY",
    "Meeting Management": "wPwG0FStyiM",
    "Conflict Resolution": "JkrWDx8CB_w",
    "Negotiation Skills": "mGEqC-BDQU0",
    "Presentation Skills": "VgLmfCplWng",
    "Status Reporting": "SJc7aMhbHdM",
    "Communication Assignment": "bV9yUQV6D60",

    /* Module 11: Team Leadership & Human Resource Management */
    "Building High-Performing Teams": "o087rCs6-YU",
    "Leadership Styles": "rXUwsabG86I",
    "Motivation Techniques": "vB56s2qdMQg",
    "Delegation": "FulkBRIOErw",
    "Team Development": "CTX18g9faJ4",
    "Performance Management": "NtOh58qBnRU",
    "Coaching & Mentoring": "PneWu0tuaQ4",
    "Managing Remote Teams": "jxmaWU2IXHE",

    /* Module 12: Agile Project Management */
    "Introduction to Agile": "8dGdIcyDk1w",
    "Agile Principles": "YFjlqQ_v-QA",
    "Scrum Framework": "n6q62DsxYXQ",
    "Scrum Roles": "oCVTjmkuCH4",
    "Scrum Events": "Ovevm3AI8lw",
    "Scrum Artifacts": "OvZDjJoUods",
    "Kanban": "dp2I_8TUeWM",
    "Agile Estimation": "VsSaolMtkKU",
    "Agile Project Simulation": "49AsFDJKjVo",

    /* Module 13: Project Monitoring & Control */
    "Monitoring Progress": "8E__KWakBIg",
    "Performance Measurement": "5WA_yKDSf14",
    "Change Management": "k2y0DqEVw38",
    "Issue Tracking": "_TcU1CZ0pJo",
    "Project Dashboards": "RXoJg1mXYoc",
    "KPI Monitoring": "gcqboabswDY",
    "Variance Analysis": "81fJ2ALmxOk",
    "Corrective Actions": "Q97ZHpzplEE",

    /* Module 14: Project Closure */
    "Closing a Project": "0HVtpstAT7M",
    "Final Deliverables": "WnyVoGjgb_o",
    "Project Evaluation": "9dxovMQ_Ric",
    "Lessons Learned": "gSOdc2Y5tTk",
    "Client Acceptance": "y0oBVRh1hJU",
    "Final Documentation": "qXEq6ITyTIk",
    "Project Handover": "FUioBWHxE8E",
    "Project Closure Checklist": "jDSmwr_kGz8",

    /* Module 15: Project Management Software */
    "Microsoft Project": "OWk6Obdul8k",
    "Trello": "NOxY1OoRZyg",
    "Asana": "xbQXjU-zRxo",
    "Jira": "wM0whXcXZHU",
    "Monday.com": "K5m8WR7wLt8",
    "ClickUp": "oPKFA51-5Po",
    "Notion": "7qbjKRua6uk",
    "Smartsheet": "hOyup0qyn_I",
    "Google Workspace for Project Teams": "d9NcbSPFIp4",
    "Software Practice Exercises": "gkRhz79vNnQ",

    /* Module 16: Business Analysis & Strategic Planning */
    "Business Analysis Basics": "bmxYKA9Lge8",
    "SWOT Analysis": "zby0Wfipj2Q",
    "PESTLE Analysis": "RguiqpreaII",
    "Feasibility Studies": "VF6mFGlcXk4",
    "Strategic Planning": "G0dR4nI9dsQ",
    "Organizational Change Management": "V5AQHWLkNSw",
    "Decision-Making Techniques": "4k2KUtN3E3o",
    "Business Case Development": "NgNjFgcHhgs",

    /* Module 17: Professional Skills */
    "Business Communication": "iitODsd4Co4",
    "Report Writing": "zDQTx1k2TLo",
    "Proposal Writing": "qpSMLOuvDI8",
    "M17:Professional Ethics": "TXJG_UScDEM",
    "Emotional Intelligence": "Ig-sTu14QfY",
    "Problem-Solving": "UoWBheYvHBE",
    "Critical Thinking": "ktIifNQ7e7M",
    "Networking Skills": "MegLf3dAUho",

    /* Module 18: Career Development */
    "Building a Professional Resume": "Wgu4XVw8B9s",
    "LinkedIn Optimization": "I3Xyojh_ZfI",
    "Interview Preparation": "nmIj-HL960s",
    "PMP Certification Overview": "GJTWzuq1muU",
    "CAPM Certification Overview": "GXGlO1NORB4",
    "Freelancing as a Project Manager": "da8-vJ_eEpI",
    "Consulting Opportunities": "W_kgoOt9GQ8",
    "Career Growth Roadmap": "_yRF18a0Z-g",

    /* Module 19: Practical Projects */
    "Community Development Project": "EEwEVsJSR_Q",
    "Construction Project Plan": "IDaDI18u3Fw",
    "IT Project Management": "lZLzHcliaps",
    "Event Planning Project": "wuf84Ou02pg",
    "NGO Project Management": "6JwFIXS-JiM",
    "Business Expansion Project": "UyE8y2H_qAA",
    "Risk Assessment Project": "vkEPGFVVwfM",
    "Complete Project Management Plan": "Q0aD4Cm0pWo",

  };

  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project|Presentation):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  COURSES_DB['project-mgmt'].modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      // Module-qualified key wins, so a title taught twice gets its own video.
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[PM videos] applied specific video to ' + applied + ' lessons');
  }
})();
