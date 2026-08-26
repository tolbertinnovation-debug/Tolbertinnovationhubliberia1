/* TIH Complete AgriTech & Digital Agriculture Professional Certificate —
   one distinct educational YouTube video per topic (no two topics share one).
   Course id: agritech.

   Replaces a map where 176 lessons shared just 6 videos — a single video
   played on 124 of them, the worst case in the whole catalogue. Every ID
   here was sourced from a web search for that topic area and matched to
   the individual lesson.

   Titles taught in more than one module are keyed "M<n>:Title", since a
   plain title key lets one module overwrite the other and hands both
   lessons the same video.

   Quiz, exam and the text-only Certificate Requirements resource carry
   no video by design. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['agritech'] || !COURSES_DB['agritech'].modules) return;
  var MAP = {
    /* Module 1: Course Orientation */
    "Welcome to the Course": "h4iCUEc0JTI",
    "What is AgriTech?": "lKma8lrIMzg",
    "What is Digital Agriculture?": "Ghympu2zFYo",
    "Careers in AgriTech": "tBEJSe_Wneg",
    "The Future of Agriculture": "aQYlr5T8LnE",
    "Course Roadmap": "cJrEGwE6ub8",
    "Learning Resources": "lyOH0-2uygk",
    "Final Capstone Project": "3KtoH_Cp2KQ",

    /* Module 2: Introduction to Agriculture */
    "Fundamentals of Agriculture": "NCp93xbSwWM",
    "Crop Production": "khXPo_QY0B8",
    "Livestock Production": "8hS_Bv6eUco",
    "Agricultural Systems": "9aGLVfFIqVo",
    "Soil Science Basics": "sIFLZGDmle4",
    "Plant Biology": "N4gkVbnjS48",
    "Farm Ecosystems": "n95k-nG_xqY",
    "Agricultural Terminology": "i73PKiv4loA",
    "Food Security": "DWjjLMjxYDs",
    "Sustainable Agriculture": "jtKPWZAndws",

    /* Module 3: Digital Transformation in Agriculture */
    "Digital Agriculture Overview": "aI2rsTZBwMA",
    "Smart Farming Concepts": "SwpHCk39i10",
    "Precision Agriculture": "zZuTzOj-_ps",
    "Digital Farm Management": "VPdFeclF7bQ",
    "Agricultural Innovation": "q1j2RV7n7Ao",
    "Data-Driven Farming": "LJyXIwYUSgM",
    "Farm Automation": "R-Ugjn6pmts",
    "Agricultural Information Systems": "Lczn_J1_m-M",
    "Emerging Technologies": "Hc8hxwDbiAw",
    "AgriTech Trends": "cErlGSz-obo",

    /* Module 4: Climate-Smart Agriculture */
    "Climate Change and Agriculture": "8SbTzVob15g",
    "Climate-Smart Farming": "MX97GhUKE_8",
    "Water Conservation": "yCZ5vn-tyfU",
    "Soil Conservation": "EjrML7vurR0",
    "Sustainable Irrigation": "0wARk2RBetY",
    "Crop Rotation": "fyvsd6P-eAo",
    "Organic Farming": "-eGmGuFEtmE",
    "Carbon Farming": "zPONltbUWrc",
    "Biodiversity Conservation": "Jm8L3GX2dVw",
    "Environmental Stewardship": "7lxTOVXMHGI",

    /* Module 5: Farm Management */
    "Farm Planning": "2Kb0IudK7t4",
    "Resource Management": "4skm27nyY98",
    "M5:Farm Budgeting": "PzCECkbnOMY",
    "Record Keeping": "cwZXdGPxUmg",
    "Farm Productivity": "CeLP9QIrvGU",
    "Labor Management": "LNvuyzWdUPk",
    "Farm Safety": "RQH2wbaBYik",
    "Agricultural Risk Management": "5Teow1LcEPE",
    "Farm Performance Evaluation": "xRU2x47Rmco",
    "Farm Business Planning": "a1sFOvXaAIo",

    /* Module 6: Precision Agriculture */
    "GPS in Agriculture": "hSJfXNPq12w",
    "Geographic Information Systems (GIS)": "erbW8JAiYiY",
    "Remote Sensing": "Tl1YkbdcEgU",
    "Yield Monitoring": "ycCHcvHs2kw",
    "Variable Rate Technology": "l2dw7HUnedg",
    "Precision Irrigation": "f90QAEBU_Gg",
    "Soil Mapping": "wmy0F4ruSaY",
    "Precision Crop Management": "PkmpBVXke-g",
    "Precision Livestock Farming": "GxX5E7tcTvw",
    "Precision Agriculture Project": "K_kfk86OhU0",

    /* Module 7: Internet of Things (IoT) in Agriculture */
    "Introduction to IoT": "M05zsh5MUmY",
    "Smart Sensors": "J2q4s4HUPYI",
    "Soil Moisture Sensors": "ko0VDt41xCM",
    "Weather Stations": "Uo5rLt3hDsg",
    "Smart Irrigation Systems": "lX36WupIkQg",
    "Livestock Monitoring": "8VAVMyjhaI8",
    "Greenhouse Automation": "MmbmNIKxfEI",
    "IoT Data Collection": "Y6ulNEPW_i4",
    "IoT Farm Management": "OL7TNx9RquE",
    "IoT Case Studies": "pgGpuws7f9o",

    /* Module 8: Drones & Remote Monitoring */
    "Drone Technology": "DRYsGOpVsZk",
    "Agricultural Drone Applications": "eKWZrNPO8nQ",
    "Crop Monitoring": "wUBxcXSM6wc",
    "Field Mapping": "rP2nnKWFRR0",
    "Crop Health Assessment": "RBAXZlvC9AQ",
    "Pest Detection": "VAf5FvOst2U",
    "Drone Safety": "czuCVHIJgOM",
    "Drone Regulations": "iCitINfJGys",
    "Drone Data Analysis": "fiOBJf9YorE",
    "Drone Demonstration Project": "PUY1kn0Nwc0",

    /* Module 9: Farm Data & Analytics */
    "Data Collection": "8qR2dwEYWBY",
    "Farm Management Software": "0nUmcKzEAWg",
    "Spreadsheet Analysis": "2Nv3lcgyT4c",
    "Agricultural Dashboards": "3S600_dNbWk",
    "Data Visualization": "lxwANnzI6bw",
    "Yield Analysis": "fFsBdaoUk_k",
    "Financial Analysis": "7lx3jnI6mE0",
    "Decision-Making Using Data": "2gM0rG7UTIA",
    "Predictive Agriculture": "cpn9EBJlDXg",
    "M9:Data Analytics Project": "BwZMJmX3SDw",

    /* Module 10: Agribusiness & Entrepreneurship */
    "Agribusiness Fundamentals": "6lG43au0EaA",
    "Agricultural Value Chains": "pEtcLaQoFB4",
    "Market Research": "FOetbqOIeiE",
    "Business Model Development": "XyGtTvH_NXY",
    "Financial Planning": "ICJvm41iYPw",
    "Agricultural Marketing": "sa8McHomaZA",
    "Branding Farm Products": "HUKr0MSBJXU",
    "Accessing Agricultural Finance": "rLDi8F2sTes",
    "Agribusiness Innovation": "njaTTbmqRvY",
    "Business Plan Development": "-JEcH-9X50Y",

    /* Module 11: Digital Marketing for Agriculture */
    "Social Media Marketing": "9ji3WXizw7Y",
    "Farm Branding": "jZzJafV7wEo",
    "E-Commerce for Agriculture": "uqKglmS8I_4",
    "Online Marketplaces": "fjKCi1Lu9AQ",
    "Customer Relationship Management": "3fruLFvXZxY",
    "Digital Advertising": "1EdsgxL5mv0",
    "Content Marketing": "oV6_K53Xydk",
    "Agricultural Storytelling": "17Auwkk8-pU",
    "Sales Strategies": "oWnz6zJJUMQ",
    "Marketing Campaign Project": "CaieNzMxO4M",

    /* Module 12: Food Safety & Quality Management */
    "Food Safety Principles": "-dwVCKk4oLs",
    "Good Agricultural Practices (GAP)": "BNs4P_wzDw8",
    "Post-Harvest Handling": "rBMdyCYcMUc",
    "Food Storage": "aK_9tx0BVQ4",
    "Food Processing Basics": "hAJnRAiMNuA",
    "Quality Assurance": "0eqkUqYmq5M",
    "Traceability Systems": "5TwMJYLAvgA",
    "Food Standards & Compliance": "GdS8P9eNfpw",

    /* Module 13: Agricultural Finance & Investment */
    "Agricultural Economics": "s-kiaeeVbxA",
    "M13:Farm Budgeting": "aVcQp-WQbF0",
    "Financial Statements": "A4WUNvwqxIs",
    "Investment Planning": "4VyKWz-G9CQ",
    "Agricultural Loans": "qmf1TEu17ZI",
    "Insurance in Agriculture": "TkCy4UP0zvY",
    "Grant Opportunities": "8XT9pUGxnxM",
    "Financial Risk Management": "F_R6V7bVpOU",

    /* Module 14: AI & Emerging Technologies in Agriculture */
    "Artificial Intelligence in Agriculture": "Et2gHFzKCNk",
    "Machine Learning Basics": "_Fp04KOMWhI",
    "Computer Vision for Farming": "T9gRqUMU7PI",
    "Predictive Analytics": "UlJPgbUzBok",
    "Robotics in Agriculture": "0rWqCdziCy8",
    "Blockchain in Agriculture": "iitODsd4Co4",
    "AI Farm Management Tools": "rXUwsabG86I",
    "Future Trends in AgriTech": "JQMgCSXlH-M",

    /* Module 15: Agricultural Policies & Sustainability */
    "Agricultural Policies": "qpSMLOuvDI8",
    "Land Use Management": "zDQTx1k2TLo",
    "Sustainable Development Goals (SDGs)": "o087rCs6-YU",
    "Environmental Regulations": "UoWBheYvHBE",
    "Agricultural Cooperatives": "TXJG_UScDEM",
    "Rural Development": "Wgu4XVw8B9s",
    "Gender in Agriculture": "I3Xyojh_ZfI",
    "Agricultural Extension Services": "nmIj-HL960s",

    /* Module 16: Professional Skills */
    "Business Communication": "da8-vJ_eEpI",
    "Leadership": "W_kgoOt9GQ8",
    "Project Management": "GJTWzuq1muU",
    "Proposal Writing": "_yRF18a0Z-g",
    "Report Writing": "MegLf3dAUho",
    "Teamwork": "Q0aD4Cm0pWo",
    "Problem Solving": "lZLzHcliaps",
    "Professional Ethics": "wuf84Ou02pg",

    /* Module 17: Real-World AgriTech Projects */
    "Smart Farm Design": "6JwFIXS-JiM",
    "Precision Farming Plan": "UyE8y2H_qAA",
    "Digital Farm Record System": "EEwEVsJSR_Q",
    "Irrigation Management Plan": "obSTqEv6W48",
    "Agribusiness Startup Plan": "elUwyKEH97U",
    "Farm Marketing Campaign": "zZ5FvIgbqq4",
    "Climate-Smart Agriculture Project": "IDaDI18u3Fw",
    "M17:Data Analytics Project": "YDxAKKVdMVM",
    "Community Agriculture Initiative": "3TRKluRUgug",
    "Agricultural Innovation Pitch": "H4WCwNCRHq4",

    /* Module 18: Career Development */
    "Building an AgriTech Portfolio": "s7hyL4Jysrw",
    "Resume Writing": "CgWdIAFEFz4",
    "LinkedIn Optimization": "GXGlO1NORB4",
    "Interview Preparation": "MylEHNnc3ho",
    "Freelancing Opportunities": "XYzSs7ENwZs",
    "Consulting Opportunities": "8DZFQlrv3Iw",
    "Professional Certifications": "lMLM4Pjy-PA",
    "Career Growth Plan": "I-xulhVIbn8",

    /* Module 19: Capstone Project */
    "Identify an Agricultural Challenge": "rPAwu4xDPTY",
    "Conduct Farm Research": "SJA0Ihi7U2U",
    "Design a Digital Agriculture Solution": "H8gdxfbsu0M",
    "Develop an Agribusiness Plan": "rYw0IRDlVeQ",
    "Present a Precision Farming Strategy": "rK5meBGHneo",
    "Prepare a Budget": "cLMALnDc87E",
    "Final Presentation": "GMAqnH1L5UY",
    "Project Evaluation": "IFpM7viaGog",

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
  COURSES_DB['agritech'].modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[AGRITECH videos] applied specific video to ' + applied + ' lessons');
  }
})();
