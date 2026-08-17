/* TIH Complete Entrepreneurship & Startup Launch Program — one educational YouTube video per topic.
   Course id: entrepreneurship. Professional, practical founder education. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.entrepreneurship || !COURSES_DB.entrepreneurship.modules) return;
  var MAP = {
    /* Module 1 — Course Orientation */
    "Welcome to the Program": "UEngvxZ11sw",
    "How to Study This Course": "UEngvxZ11sw",
    "What is Entrepreneurship?": "pC5l5j2u9SQ",
    "What is a Startup?": "Th8JoIan4dg",
    "Entrepreneur vs. Business Owner": "pC5l5j2u9SQ",
    "Types of Entrepreneurs": "Xcsp0486olY",
    "Startup Success Stories": "9jIbsTLyC0c",
    "Course Roadmap": "UEngvxZ11sw",
    "Final Capstone Project": "Ri0Pe1Y6lwM",

    /* Module 2 — Entrepreneurial Mindset */
    "Developing an Entrepreneurial Mindset": "4hshq-o0vSI",
    "Creativity and Innovation": "kQcJEFPbabs",
    "Identifying Opportunities": "9jIbsTLyC0c",
    "Solving Real Problems": "9jIbsTLyC0c",
    "Growth Mindset": "tkhewBmDm-A",
    "Leadership Skills": "4YRchaXY2-M",
    "Decision Making": "kQcJEFPbabs",
    "Critical Thinking": "kQcJEFPbabs",
    "Time Management": "Wzwpou8d7v4",
    "Personal Productivity": "Wzwpou8d7v4",

    /* Module 3 — Idea Generation & Validation */
    "Finding Business Ideas": "9jIbsTLyC0c",
    "Problem Identification": "9jIbsTLyC0c",
    "Brainstorming Techniques": "kQcJEFPbabs",
    "Market Gap Analysis": "gfnxXtV8P4U",
    "Design Thinking": "KCEWgq8S9gM",
    "Customer Discovery": "1hHMwLxN6EM",
    "Customer Interviews": "1hHMwLxN6EM",
    "Idea Validation": "1hHMwLxN6EM",
    "Product-Market Fit": "1hHMwLxN6EM",
    "Selecting the Best Business Idea": "9jIbsTLyC0c",

    /* Module 4 — Market Research */
    "Introduction to Market Research": "gfnxXtV8P4U",
    "Primary Research": "gfnxXtV8P4U",
    "Secondary Research": "gfnxXtV8P4U",
    "Customer Personas": "gfnxXtV8P4U",
    "Target Market": "gfnxXtV8P4U",
    "Industry Analysis": "gfnxXtV8P4U",
    "Competitor Analysis": "gfnxXtV8P4U",
    "SWOT Analysis": "gfnxXtV8P4U",
    "Market Trends": "gfnxXtV8P4U",
    "Research Report": "gfnxXtV8P4U",

    /* Module 5 — Business Models */
    "Business Model Basics": "QoAOzMTLP5s",
    "Business Model Canvas": "QoAOzMTLP5s",
    "Value Proposition": "QoAOzMTLP5s",
    "Customer Segments": "QoAOzMTLP5s",
    "Customer Relationships": "QoAOzMTLP5s",
    "Channels": "QoAOzMTLP5s",
    "Revenue Streams": "QoAOzMTLP5s",
    "Cost Structure": "QoAOzMTLP5s",
    "Key Resources": "8bu1Ltpeiu4",
    "Key Activities": "8bu1Ltpeiu4",
    "Key Partners": "QoAOzMTLP5s",
    "Business Model Review": "QoAOzMTLP5s",

    /* Module 6 — Product Development */
    "Product Design": "V0tIpLcEoLo",
    "Service Design": "V0tIpLcEoLo",
    "Minimum Viable Product (MVP)": "1hHMwLxN6EM",
    "Product Testing": "V0tIpLcEoLo",
    "Gathering Customer Feedback": "1hHMwLxN6EM",
    "Product Improvements": "V0tIpLcEoLo",
    "Quality Control": "V0tIpLcEoLo",
    "Product Launch Planning": "EBFWu2ze12Q",

    /* Module 7 — Branding & Marketing */
    "Branding Fundamentals": "tvYDYtQhreo",
    "Choosing a Business Name": "tvYDYtQhreo",
    "Logo Design": "tvYDYtQhreo",
    "Brand Identity": "tvYDYtQhreo",
    "Marketing Fundamentals": "tvYDYtQhreo",
    "Digital Marketing": "tvYDYtQhreo",
    "Social Media Marketing": "tvYDYtQhreo",
    "Email Marketing": "tvYDYtQhreo",
    "Content Marketing": "tvYDYtQhreo",
    "Search Engine Optimization (SEO)": "tvYDYtQhreo",
    "Advertising": "tvYDYtQhreo",
    "Customer Acquisition": "tvYDYtQhreo",

    /* Module 8 — Sales & Customer Service */
    "Sales Fundamentals": "Ak53spL0e-A",
    "Sales Funnel": "Ak53spL0e-A",
    "Pricing Strategies": "Ak53spL0e-A",
    "Negotiation Skills": "Ak53spL0e-A",
    "Customer Service": "Ak53spL0e-A",
    "Customer Retention": "Ak53spL0e-A",
    "CRM Basics": "Ak53spL0e-A",
    "Closing Sales": "Ak53spL0e-A",

    /* Module 9 — Business Finance */
    "Financial Literacy": "cSuH88mDAFs",
    "Startup Costs": "cSuH88mDAFs",
    "Budgeting": "cSuH88mDAFs",
    "Bookkeeping": "cSuH88mDAFs",
    "Cash Flow": "cSuH88mDAFs",
    "Profit & Loss": "cSuH88mDAFs",
    "Balance Sheet": "cSuH88mDAFs",
    "Break-even Analysis": "cSuH88mDAFs",
    "Pricing": "cSuH88mDAFs",
    "Financial Forecasting": "cSuH88mDAFs",

    /* Module 10 — Funding Your Startup */
    "Bootstrapping": "xCeiGfIvQkA",
    "Friends & Family Funding": "xCeiGfIvQkA",
    "Angel Investors": "GzrmqPMjxHY",
    "Venture Capital": "GzrmqPMjxHY",
    "Crowdfunding": "xCeiGfIvQkA",
    "Business Loans": "xCeiGfIvQkA",
    "Government Grants": "xCeiGfIvQkA",
    "Investor Pitch Preparation": "xCeiGfIvQkA",

    /* Module 11 — Legal & Business Registration */
    "Choosing a Business Structure": "spbmT61D6Bk",
    "Sole Proprietorship": "spbmT61D6Bk",
    "Partnership": "spbmT61D6Bk",
    "Corporation": "spbmT61D6Bk",
    "LLC": "spbmT61D6Bk",
    "Business Registration": "spbmT61D6Bk",
    "Licenses & Permits": "spbmT61D6Bk",
    "Taxes": "spbmT61D6Bk",
    "Intellectual Property": "spbmT61D6Bk",
    "Trademarks & Copyrights": "spbmT61D6Bk",
    "Contracts": "spbmT61D6Bk",

    /* Module 12 — Operations Management */
    "Business Operations": "DEuzzLled6k",
    "Supply Chain": "DEuzzLled6k",
    "Inventory Management": "DEuzzLled6k",
    "Procurement": "DEuzzLled6k",
    "Business Systems": "DEuzzLled6k",
    "Standard Operating Procedures (SOPs)": "DEuzzLled6k",
    "Risk Management": "DEuzzLled6k",
    "Business Continuity": "DEuzzLled6k",

    /* Module 13 — Human Resource Management */
    "Hiring Employees": "4YRchaXY2-M",
    "Recruitment": "4YRchaXY2-M",
    "Team Building": "4YRchaXY2-M",
    "Leadership": "4YRchaXY2-M",
    "Company Culture": "4YRchaXY2-M",
    "Employee Performance": "4YRchaXY2-M",
    "Payroll Basics": "4YRchaXY2-M",
    "Conflict Resolution": "4YRchaXY2-M",

    /* Module 14 — Technology & AI for Entrepreneurs */
    "AI in Business": "GUQNQnJrabk",
    "ChatGPT for Entrepreneurs": "GUQNQnJrabk",
    "Business Automation": "GUQNQnJrabk",
    "Website Creation": "GUQNQnJrabk",
    "E-commerce": "GUQNQnJrabk",
    "Online Payment Systems": "GUQNQnJrabk",
    "CRM Software": "GUQNQnJrabk",
    "Productivity Tools": "GUQNQnJrabk",
    "Cybersecurity Basics": "GUQNQnJrabk",

    /* Module 15 — Business Communication */
    "Professional Communication": "10YgTqd9M9Y",
    "Business Writing": "10YgTqd9M9Y",
    "Email Communication": "10YgTqd9M9Y",
    "Proposal Writing": "10YgTqd9M9Y",
    "Presentation Skills": "10YgTqd9M9Y",
    "Networking": "10YgTqd9M9Y",
    "Public Speaking": "10YgTqd9M9Y",
    "Negotiation": "10YgTqd9M9Y",

    /* Module 16 — Business Planning */
    "Executive Summary": "yf59-oV-4Bw",
    "Company Description": "yf59-oV-4Bw",
    "Market Analysis": "yf59-oV-4Bw",
    "Products & Services": "yf59-oV-4Bw",
    "Marketing Plan": "yf59-oV-4Bw",
    "Operations Plan": "yf59-oV-4Bw",
    "Financial Plan": "yf59-oV-4Bw",
    "Risk Analysis": "yf59-oV-4Bw",
    "Exit Strategy": "yf59-oV-4Bw",
    "Writing a Complete Business Plan": "yf59-oV-4Bw",

    /* Module 17 — Startup Launch */
    "Launch Strategy": "EBFWu2ze12Q",
    "Product Launch": "EBFWu2ze12Q",
    "Marketing Campaign": "EBFWu2ze12Q",
    "Sales Launch": "EBFWu2ze12Q",
    "Customer Support": "EBFWu2ze12Q",
    "Measuring Success": "EBFWu2ze12Q",
    "Growth Planning": "bu0WBMavBgE",
    "Scaling the Business": "bu0WBMavBgE",

    /* Module 18 — Business Growth */
    "Scaling Operations": "bu0WBMavBgE",
    "Expansion Strategies": "bu0WBMavBgE",
    "Franchising": "bu0WBMavBgE",
    "Partnerships": "bu0WBMavBgE",
    "International Expansion": "bu0WBMavBgE",
    "Innovation Management": "bu0WBMavBgE",
    "Business Sustainability": "bu0WBMavBgE",
    "Exit Planning": "bu0WBMavBgE",

    /* Module 19 — Practical Projects (shared method videos) */
    "Business Idea Assignment": "9jIbsTLyC0c",
    "Customer Interview Assignment": "1hHMwLxN6EM",
    "Market Research Project": "gfnxXtV8P4U",
    "Business Model Canvas Project": "QoAOzMTLP5s",
    "Branding Project": "tvYDYtQhreo",
    "Financial Plan Project": "cSuH88mDAFs",
    "Business Plan Project": "yf59-oV-4Bw",
    "Pitch Deck Project": "xCeiGfIvQkA"
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
  COURSES_DB.entrepreneurship.modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      if (MAP[key]) { lesson.v = MAP[key]; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[ENT videos] applied specific video to ' + applied + ' lessons');
  }
})();
