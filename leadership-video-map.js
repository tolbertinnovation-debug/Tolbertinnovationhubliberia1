/* TIH Complete Business Leadership Masterclass — one educational YouTube video per topic.
   Course id: leadership */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.leadership || !COURSES_DB.leadership.modules) return;
  var MAP = {
    "Welcome to the Course": "V3VYtT4Fw2g",
    "What is Leadership?": "V3VYtT4Fw2g",
    "Leadership vs. Management": "V3VYtT4Fw2g",
    "Characteristics of Great Leaders": "V3VYtT4Fw2g",
    "Leadership Styles": "V3VYtT4Fw2g",
    "The Role of a Business Leader": "V3VYtT4Fw2g",
    "Course Roadmap": "V3VYtT4Fw2g",
    "Professional Ethics": "j8E_zcLMTLw",
    "Final Leadership Project": "Fnp6gsSjWpE",

    "Leadership Principles": "qwN5Zx7Fusc",
    "Self-Leadership": "qwN5Zx7Fusc",
    "Emotional Intelligence": "qwN5Zx7Fusc",
    "Personal Values": "qwN5Zx7Fusc",
    "Building Trust": "qwN5Zx7Fusc",
    "Decision-Making": "qwN5Zx7Fusc",
    "Accountability": "qwN5Zx7Fusc",
    "Developing Leadership Confidence": "qwN5Zx7Fusc",
    "Leadership Assessment": "qwN5Zx7Fusc",
    "Leadership Action Plan": "qwN5Zx7Fusc",

    "Strategic Planning": "wsICRlfpq4I",
    "Vision and Mission": "wsICRlfpq4I",
    "Setting Business Goals": "wsICRlfpq4I",
    "SWOT Analysis": "wsICRlfpq4I",
    "PESTLE Analysis": "wsICRlfpq4I",
    "Competitive Advantage": "wsICRlfpq4I",
    "Business Growth Strategies": "wsICRlfpq4I",
    "Strategic Decision-Making": "wsICRlfpq4I",
    "Scenario Planning": "wsICRlfpq4I",
    "Strategic Leadership Workshop": "wsICRlfpq4I",

    "Effective Communication": "9OljCrnnFTc",
    "Public Speaking": "9OljCrnnFTc",
    "Business Writing": "9OljCrnnFTc",
    "Active Listening": "9OljCrnnFTc",
    "Giving and Receiving Feedback": "9OljCrnnFTc",
    "Persuasive Communication": "9OljCrnnFTc",
    "Presentation Skills": "9OljCrnnFTc",
    "Executive Communication": "9OljCrnnFTc",
    "Crisis Communication": "9OljCrnnFTc",
    "Communication Practice": "9OljCrnnFTc",

    "Building High-Performing Teams": "UOgrO2OfSxE",
    "Hiring the Right People": "UOgrO2OfSxE",
    "Delegation Skills": "UOgrO2OfSxE",
    "Team Motivation": "UOgrO2OfSxE",
    "Employee Engagement": "UOgrO2OfSxE",
    "Coaching and Mentoring": "UOgrO2OfSxE",
    "Performance Management": "UOgrO2OfSxE",
    "Team Conflict Resolution": "UOgrO2OfSxE",
    "Remote Team Leadership": "UOgrO2OfSxE",
    "Team Development Project": "UOgrO2OfSxE",

    "Understanding Organizational Culture": "6uLN9dVfOBI",
    "Creating Core Values": "6uLN9dVfOBI",
    "Building a Positive Work Environment": "6uLN9dVfOBI",
    "Diversity and Inclusion": "6uLN9dVfOBI",
    "Employee Well-Being": "6uLN9dVfOBI",
    "Organizational Behavior": "6uLN9dVfOBI",
    "Culture Change": "6uLN9dVfOBI",
    "Ethical Leadership": "j8E_zcLMTLw",

    "Business Processes": "vVXMUfUUZqA",
    "Operational Planning": "vVXMUfUUZqA",
    "Productivity Improvement": "vVXMUfUUZqA",
    "Process Optimization": "vVXMUfUUZqA",
    "Resource Management": "vVXMUfUUZqA",
    "Supply Chain Basics": "vVXMUfUUZqA",
    "Performance Metrics": "vVXMUfUUZqA",
    "Operational Excellence": "vVXMUfUUZqA",

    "Financial Literacy for Leaders": "aJsmJsd6GIw",
    "Reading Financial Statements": "aJsmJsd6GIw",
    "Budgeting": "aJsmJsd6GIw",
    "Cash Flow Management": "aJsmJsd6GIw",
    "Profit and Loss": "aJsmJsd6GIw",
    "Financial Decision-Making": "aJsmJsd6GIw",
    "Cost Control": "aJsmJsd6GIw",
    "Business Performance Analysis": "aJsmJsd6GIw",
    "Financial Planning": "aJsmJsd6GIw",
    "Financial Leadership Assignment": "aJsmJsd6GIw",

    "Marketing Fundamentals": "SBbXgupLut8",
    "Branding": "SBbXgupLut8",
    "Customer Experience": "SBbXgupLut8",
    "Digital Marketing": "SBbXgupLut8",
    "Sales Leadership": "SBbXgupLut8",
    "Customer Relationship Management": "SBbXgupLut8",
    "Market Positioning": "SBbXgupLut8",

    "Innovation in Business": "xGsxO2VAT9I",
    "Creative Thinking": "xGsxO2VAT9I",
    "Managing Change": "xGsxO2VAT9I",
    "Digital Transformation": "1SbW4ibmMso",
    "Business Process Innovation": "xGsxO2VAT9I",
    "Leading Organizational Change": "xGsxO2VAT9I",
    "Managing Resistance": "xGsxO2VAT9I",
    "Continuous Improvement": "xGsxO2VAT9I",

    "Negotiation Skills": "UfBV9eLWoN0",
    "Business Negotiation Strategies": "UfBV9eLWoN0",
    "Conflict Resolution": "UfBV9eLWoN0",
    "Mediation Techniques": "UfBV9eLWoN0",
    "Handling Difficult Conversations": "UfBV9eLWoN0",
    "Workplace Disputes": "UfBV9eLWoN0",
    "Win-Win Solutions": "UfBV9eLWoN0",
    "Negotiation Practice": "UfBV9eLWoN0",

    "Human Resource Fundamentals": "bI9RZjF-538",
    "Recruitment Strategies": "bI9RZjF-538",
    "Talent Management": "bI9RZjF-538",
    "Employee Development": "bI9RZjF-538",
    "Succession Planning": "bI9RZjF-538",
    "Performance Reviews": "bI9RZjF-538",
    "Compensation & Benefits": "bI9RZjF-538",
    "Employment Law Basics": "bI9RZjF-538",

    "Goal Setting": "VgW5wlu4lM0",
    "Key Performance Indicators (KPIs)": "VgW5wlu4lM0",
    "Project Planning": "VgW5wlu4lM0",
    "Monitoring Performance": "VgW5wlu4lM0",
    "Time Management": "VgW5wlu4lM0",
    "Productivity Systems": "VgW5wlu4lM0",

    "Entrepreneurial Leadership": "74G18CucAFA",
    "Business Model Innovation": "74G18CucAFA",
    "Scaling a Business": "74G18CucAFA",
    "Business Expansion": "74G18CucAFA",
    "Strategic Partnerships": "74G18CucAFA",
    "Investment Readiness": "74G18CucAFA",
    "Corporate Entrepreneurship": "74G18CucAFA",
    "Sustainable Growth": "74G18CucAFA",

    "Artificial Intelligence in Business": "1SbW4ibmMso",
    "Data-Driven Decision Making": "1SbW4ibmMso",
    "Business Intelligence": "1SbW4ibmMso",
    "Automation": "1SbW4ibmMso",
    "Cybersecurity Awareness": "1SbW4ibmMso",
    "Cloud Computing Basics": "1SbW4ibmMso",
    "Future Business Trends": "1SbW4ibmMso",

    "Corporate Governance": "j8E_zcLMTLw",
    "Business Ethics": "j8E_zcLMTLw",
    "Compliance": "j8E_zcLMTLw",
    "Risk Management": "j8E_zcLMTLw",
    "Corporate Social Responsibility (CSR)": "j8E_zcLMTLw",
    "Sustainability": "j8E_zcLMTLw",
    "Environmental, Social & Governance (ESG)": "j8E_zcLMTLw",
    "Responsible Leadership": "j8E_zcLMTLw",

    "Executive Presence": "G94F9HGiYwY",
    "Personal Branding": "G94F9HGiYwY",
    "Professional Networking": "G94F9HGiYwY",
    "Building a Leadership Portfolio": "G94F9HGiYwY",
    "Resume & LinkedIn Optimization": "G94F9HGiYwY",
    "Executive Interviews": "G94F9HGiYwY",
    "Career Planning": "G94F9HGiYwY",
    "Lifelong Learning": "G94F9HGiYwY",

    "Strategic Business Plan": "wsICRlfpq4I",
    "Team Leadership Project": "UOgrO2OfSxE",
    "Organizational Improvement Plan": "vVXMUfUUZqA",
    "Change Management Strategy": "xGsxO2VAT9I",
    "Marketing Growth Plan": "SBbXgupLut8",
    "Financial Performance Review": "aJsmJsd6GIw",
    "Business Expansion Proposal": "74G18CucAFA",
    "Executive Presentation": "9OljCrnnFTc",
    "Leadership Case Study": "Fnp6gsSjWpE",
    "Board Meeting Simulation": "Fnp6gsSjWpE",

    "Leadership Challenge Selection": "Fnp6gsSjWpE",
    "Business Analysis": "wsICRlfpq4I",
    "Team Leadership": "UOgrO2OfSxE",
    "Implementation Strategy": "Fnp6gsSjWpE",
    "Final Presentation": "Fnp6gsSjWpE",
    "Executive Review": "Fnp6gsSjWpE"
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
  COURSES_DB.leadership.modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      if (MAP[key]) { lesson.v = MAP[key]; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[LEAD videos] applied specific video to ' + applied + ' lessons');
  }
})();
