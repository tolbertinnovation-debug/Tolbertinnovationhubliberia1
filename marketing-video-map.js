/* TIH Complete Digital Marketing Professional Certificate — unique educational YouTube video per topic.
   Course id: marketing.
   Sources: HubSpot, Google Analytics, Neil Patel, Rank Math, Google Ads, Shopify, and trusted education channels.
   Each content topic has its own video so Next/Previous advances to a different lesson video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.marketing || !COURSES_DB.marketing.modules) return;
  var MAP = {
    /* ========== Module 1: Course Orientation ========== */
    "Welcome to the Course": "YhK_PGhdPe8",
    "What is Digital Marketing?": "YhK_PGhdPe8",
    "Career Opportunities in Digital Marketing": "jVgYgN0zcWs",
    "Types of Digital Marketing": "nkNHn0VqVBA",
    "Digital Marketing Trends": "KEnCy4bQR3Y",
    "Course Roadmap": "jVgYgN0zcWs",
    "Setting Learning Goals": "YhK_PGhdPe8",
    "Final Capstone Project": "0VtSDWsqJbM",
    "Certificate Requirements": "YhK_PGhdPe8",

    /* ========== Module 2: Marketing Fundamentals ========== */
    "Principles of Marketing": "avE-uvLPSN4",
    "Consumer Behavior": "yv2cp1fmSt0",
    "Target Audience Identification": "y6Gk8gwda84",
    "Market Research": "ZHZ2d271UFo",
    "Competitor Analysis": "VObGB2U9iWI",
    "Branding Fundamentals": "wMfo-F0Zdus",
    "Customer Journey": "JjQ2fa4Arxg",
    "Marketing Funnel": "YR0iITd5md0",
    "Value Proposition": "5kTOZN9p40Q",
    "Marketing Strategy": "RvFTNnOyWZ0",

    /* ========== Module 3: Branding & Content Strategy ========== */
    "Building a Brand": "wMfo-F0Zdus",
    "Brand Identity": "5kTOZN9p40Q",
    "Brand Positioning": "jDAqIFdjMFU",
    "Brand Storytelling": "zrXLEQ7mlco",
    "Content Marketing Strategy": "dKH77jn8vZA",
    "Content Planning": "zks1MFJsyUc",
    "Editorial Calendars": "cJbKV2_B-xc",
    "Content Repurposing": "cJbKV2_B-xc",
    "Content Distribution": "zks1MFJsyUc",
    "Brand Management Project": "wMfo-F0Zdus",

    /* ========== Module 4: Social Media Marketing ========== */
    "Introduction to Social Media Marketing": "oG6HXDpsu9o",
    "Facebook Marketing": "GUgVNQYiNOQ",
    "Instagram Marketing": "UBI1YIuGiUs",
    "LinkedIn Marketing": "0E-q3CpuelU",
    "X (Twitter) Marketing": "oG6HXDpsu9o",
    "TikTok Marketing": "8amu7oyZSZM",
    "YouTube Marketing": "gpredwdvi5k",
    "WhatsApp Business": "oG6HXDpsu9o",
    "Social Media Content Planning": "so_J2lTejIA",
    "Community Management": "oG6HXDpsu9o",
    "Influencer Marketing": "8amu7oyZSZM",
    "Social Media Analytics": "so_J2lTejIA",
    "Social Media Campaign Project": "UBI1YIuGiUs",

    /* ========== Module 5: Search Engine Optimization (SEO) ========== */
    "Introduction to SEO": "pIbQfOcsEsE",
    "Keyword Research": "CYicoAcAi0A",
    "On-Page SEO": "PXDPqXHLSOY",
    "Off-Page SEO": "_AsN-j85PaA",
    "Technical SEO": "utLaKIJKygA",
    "Local SEO": "cznm78evsO8",
    "SEO Tools": "Q_lySNxCag0",
    "Content Optimization": "zks1MFJsyUc",
    "Link Building": "_AsN-j85PaA",
    "SEO Audit Project": "k04rHijEPSw",

    /* ========== Module 6: Search Engine Marketing (SEM) ========== */
    "Introduction to Google Ads": "AtiAlWIw6Zg",
    "Keyword Targeting": "CYicoAcAi0A",
    "Search Campaigns": "86xAHXIo8Js",
    "Display Campaigns": "Yw6stObrrAI",
    "Video Campaigns": "gpredwdvi5k",
    "Shopping Campaigns": "maAS7DGvMxU",
    "Campaign Budgeting": "Yw6stObrrAI",
    "Ad Copywriting": "86xAHXIo8Js",
    "Campaign Optimization": "i0Pxi_Gc-Cg",
    "SEM Project": "AtiAlWIw6Zg",

    /* ========== Module 7: Email Marketing ========== */
    "Email Marketing Fundamentals": "9SjEIbud-_k",
    "Building an Email List": "KozmudtOIFE",
    "Lead Magnets": "YR0iITd5md0",
    "Email Campaign Planning": "qYzmG_7nx3Y",
    "Email Design": "dRTt69nCFlo",
    "Automation": "sjAkl8pwLgg",
    "Personalization": "JKrlUNFrhhg",
    "Segmentation": "JKrlUNFrhhg",
    "A/B Testing": "94gHaHKmD4Q",
    "Email Analytics": "-4VPi-a8jkQ",

    /* ========== Module 8: Content Creation ========== */
    "Copywriting Fundamentals": "dKH77jn8vZA",
    "Blog Writing": "zks1MFJsyUc",
    "Social Media Copy": "UBI1YIuGiUs",
    "Video Content": "gpredwdvi5k",
    "Podcast Marketing": "zrXLEQ7mlco",
    "Graphic Design Basics": "hhCPi9NJ3-I",
    "Canva for Marketing": "hhCPi9NJ3-I",
    "Visual Storytelling": "zrXLEQ7mlco",
    "Content Scheduling": "so_J2lTejIA",
    "Content Portfolio Project": "dKH77jn8vZA",

    /* ========== Module 9: Website & Landing Pages ========== */
    "Website Basics": "MnUWG3VLufI",
    "WordPress Fundamentals": "MnUWG3VLufI",
    "Landing Page Design": "HEsIfihl1E0",
    "User Experience (UX)": "HEsIfihl1E0",
    "Conversion Optimization": "HEsIfihl1E0",
    "Call-to-Action (CTA)": "YR0iITd5md0",
    "Website Speed": "cznm78evsO8",
    "Mobile Optimization": "HEsIfihl1E0",
    "Lead Generation Forms": "YR0iITd5md0",
    "Website Optimization Project": "MnUWG3VLufI",

    /* ========== Module 10: Analytics & Performance ========== */
    "Introduction to Analytics": "GG5xBwbje1E",
    "Google Analytics": "cTAMNIkNveo",
    "Google Search Console": "UuE37-MM1ws",
    "Key Performance Indicators (KPIs)": "9STi7dge0VU",
    "Conversion Tracking": "47mpnwPQ10I",
    "Campaign Reporting": "nUQEo-HXZgc",
    "Dashboard Creation": "IBDARZDJdoU",
    "Data Interpretation": "cTAMNIkNveo",
    "ROI Measurement": "9STi7dge0VU",
    "Analytics Project": "cTAMNIkNveo",

    /* ========== Module 11: E-Commerce Marketing ========== */
    "Introduction to E-Commerce": "B7yqNvFLZgY",
    "Product Listings": "EswiVDrBv_c",
    "Online Store Optimization": "B7yqNvFLZgY",
    "Customer Reviews": "B7yqNvFLZgY",
    "Shopping Ads": "UHPU1KrTPp4",
    "Sales Funnels": "JjQ2fa4Arxg",
    "Payment Integration": "B7yqNvFLZgY",
    "Customer Retention": "8VUWyMVK2Uc",
    "E-Commerce Analytics": "cTAMNIkNveo",
    "E-Commerce Project": "B7yqNvFLZgY",

    /* ========== Module 12: AI for Digital Marketing ========== */
    "ChatGPT for Marketing": "kunkYTKFNtI",
    "AI Content Creation": "kunkYTKFNtI",
    "AI Image Generation": "hhCPi9NJ3-I",
    "AI Video Creation": "gpredwdvi5k",
    "AI Copywriting": "kunkYTKFNtI",
    "Marketing Automation": "sjAkl8pwLgg",
    "AI Analytics": "cTAMNIkNveo",
    "Responsible AI Use": "kunkYTKFNtI",
    "AI Marketing Workflow": "kunkYTKFNtI",
    "AI Marketing Project": "kunkYTKFNtI",

    /* ========== Module 13: Advertising & Media Buying ========== */
    "Facebook Ads": "GUgVNQYiNOQ",
    "Instagram Ads": "UBI1YIuGiUs",
    "LinkedIn Ads": "0E-q3CpuelU",
    "YouTube Ads": "gpredwdvi5k",
    "TikTok Ads": "8amu7oyZSZM",
    "Display Advertising": "Yw6stObrrAI",
    "Retargeting Campaigns": "GUgVNQYiNOQ",
    "Budget Management": "Yw6stObrrAI",
    "Ad Performance Optimization": "GUgVNQYiNOQ",
    "Advertising Campaign Project": "GUgVNQYiNOQ",

    /* ========== Module 14: CRM ========== */
    "Introduction to CRM": "8VUWyMVK2Uc",
    "Customer Lifecycle": "JjQ2fa4Arxg",
    "Lead Management": "YR0iITd5md0",
    "Sales Funnels": "JjQ2fa4Arxg",
    "Customer Retention": "8VUWyMVK2Uc",
    "Customer Support": "8VUWyMVK2Uc",
    "Loyalty Programs": "8VUWyMVK2Uc",
    "CRM Software": "8VUWyMVK2Uc",
    "Customer Experience": "8VUWyMVK2Uc",
    "CRM Project": "8VUWyMVK2Uc",

    /* ========== Module 15: Marketing Strategy & Growth ========== */
    "Marketing Planning": "RvFTNnOyWZ0",
    "Budgeting": "Yw6stObrrAI",
    "Campaign Planning": "RvFTNnOyWZ0",
    "Product Launch Strategy": "RvFTNnOyWZ0",
    "Market Expansion": "RvFTNnOyWZ0",
    "Business Growth Strategies": "RvFTNnOyWZ0",
    "Partnership Marketing": "RvFTNnOyWZ0",
    "Crisis Communication": "RvFTNnOyWZ0",
    "Marketing Leadership": "RvFTNnOyWZ0",
    "Strategic Marketing Project": "RvFTNnOyWZ0",

    /* ========== Module 16: Freelancing & Agency ========== */
    "Becoming a Freelance Marketer": "qSNyTGuq7Q4",
    "Building a Portfolio": "qSNyTGuq7Q4",
    "Pricing Services": "qSNyTGuq7Q4",
    "Finding Clients": "qSNyTGuq7Q4",
    "Proposal Writing": "qSNyTGuq7Q4",
    "Client Management": "qSNyTGuq7Q4",
    "Agency Operations": "qSNyTGuq7Q4",
    "Service Packaging": "qSNyTGuq7Q4",
    "Contracts & Invoicing": "qSNyTGuq7Q4",
    "Freelancing Project": "qSNyTGuq7Q4",

    /* ========== Module 17: Career Development ========== */
    "Resume Writing": "kH0Wc6NBAu0",
    "LinkedIn Optimization": "0E-q3CpuelU",
    "Building a Marketing Portfolio": "qSNyTGuq7Q4",
    "Interview Preparation": "kH0Wc6NBAu0",
    "Professional Certifications": "kH0Wc6NBAu0",
    "Personal Branding": "wMfo-F0Zdus",
    "Networking": "kH0Wc6NBAu0",
    "Career Growth Roadmap": "kH0Wc6NBAu0",

    /* ========== Module 18: Real-World Projects ========== */
    "Social Media Marketing Campaign": "UBI1YIuGiUs",
    "SEO Optimization Project": "k04rHijEPSw",
    "Google Ads Campaign": "86xAHXIo8Js",
    "Facebook Ads Campaign": "GUgVNQYiNOQ",
    "Email Marketing Campaign": "qYzmG_7nx3Y",
    "Content Marketing Strategy": "zks1MFJsyUc",
    "Website Optimization": "HEsIfihl1E0",
    "Marketing Analytics Dashboard": "cTAMNIkNveo",
    "Product Launch Campaign": "RvFTNnOyWZ0",
    "Integrated Marketing Campaign": "jVgYgN0zcWs",

    /* ========== Module 19: Capstone ========== */
    "Market Research": "ZHZ2d271UFo",
    "Brand Development": "wMfo-F0Zdus",
    "Marketing Strategy": "RvFTNnOyWZ0",
    "Content Creation": "dKH77jn8vZA",
    "Social Media Campaign": "8amu7oyZSZM",
    "Paid Advertising Plan": "GUgVNQYiNOQ",
    "Analytics Report": "cTAMNIkNveo",
    "Final Presentation": "0VtSDWsqJbM"
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
  COURSES_DB.marketing.modules.forEach(function (mod) {
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      if (MAP[key]) { lesson.v = MAP[key]; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[MKT videos] applied specific video to ' + applied + ' lessons');
  }
})();
