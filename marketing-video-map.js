/* TIH Complete Digital Marketing Professional Certificate — one educational YouTube video per topic.
   Course id: marketing. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.marketing || !COURSES_DB.marketing.modules) return;
  var MAP = {
    /* Module 1 */
    "Welcome to the Course": "cZ-5phWZujI",
    "What is Digital Marketing?": "cZ-5phWZujI",
    "Career Opportunities in Digital Marketing": "cZ-5phWZujI",
    "Types of Digital Marketing": "cZ-5phWZujI",
    "Digital Marketing Trends": "cZ-5phWZujI",
    "Course Roadmap": "cZ-5phWZujI",
    "Setting Learning Goals": "cZ-5phWZujI",
    "Final Capstone Project": "0VtSDWsqJbM",
    "Certificate Requirements": "cZ-5phWZujI",

    /* Module 2 */
    "Principles of Marketing": "avE-uvLPSN4",
    "Consumer Behavior": "avE-uvLPSN4",
    "Target Audience Identification": "avE-uvLPSN4",
    "Market Research": "avE-uvLPSN4",
    "Competitor Analysis": "avE-uvLPSN4",
    "Branding Fundamentals": "wMfo-F0Zdus",
    "Customer Journey": "avE-uvLPSN4",
    "Marketing Funnel": "avE-uvLPSN4",
    "Value Proposition": "avE-uvLPSN4",
    "Marketing Strategy": "avE-uvLPSN4",

    /* Module 3 */
    "Building a Brand": "wMfo-F0Zdus",
    "Brand Identity": "wMfo-F0Zdus",
    "Brand Positioning": "wMfo-F0Zdus",
    "Brand Storytelling": "wMfo-F0Zdus",
    "Content Marketing Strategy": "dKH77jn8vZA",
    "Content Planning": "dKH77jn8vZA",
    "Editorial Calendars": "dKH77jn8vZA",
    "Content Repurposing": "dKH77jn8vZA",
    "Content Distribution": "dKH77jn8vZA",
    "Brand Management Project": "wMfo-F0Zdus",

    /* Module 4 */
    "Introduction to Social Media Marketing": "oG6HXDpsu9o",
    "Facebook Marketing": "oG6HXDpsu9o",
    "Instagram Marketing": "oG6HXDpsu9o",
    "LinkedIn Marketing": "oG6HXDpsu9o",
    "X (Twitter) Marketing": "oG6HXDpsu9o",
    "TikTok Marketing": "oG6HXDpsu9o",
    "YouTube Marketing": "oG6HXDpsu9o",
    "WhatsApp Business": "oG6HXDpsu9o",
    "Social Media Content Planning": "oG6HXDpsu9o",
    "Community Management": "oG6HXDpsu9o",
    "Influencer Marketing": "oG6HXDpsu9o",
    "Social Media Analytics": "oG6HXDpsu9o",
    "Social Media Campaign Project": "oG6HXDpsu9o",

    /* Module 5 */
    "Introduction to SEO": "xsVTqzratPs",
    "Keyword Research": "xsVTqzratPs",
    "On-Page SEO": "xsVTqzratPs",
    "Off-Page SEO": "xsVTqzratPs",
    "Technical SEO": "xsVTqzratPs",
    "Local SEO": "xsVTqzratPs",
    "SEO Tools": "xsVTqzratPs",
    "Content Optimization": "xsVTqzratPs",
    "Link Building": "xsVTqzratPs",
    "SEO Audit Project": "xsVTqzratPs",

    /* Module 6 */
    "Introduction to Google Ads": "AtiAlWIw6Zg",
    "Keyword Targeting": "AtiAlWIw6Zg",
    "Search Campaigns": "AtiAlWIw6Zg",
    "Display Campaigns": "AtiAlWIw6Zg",
    "Video Campaigns": "AtiAlWIw6Zg",
    "Shopping Campaigns": "AtiAlWIw6Zg",
    "Campaign Budgeting": "AtiAlWIw6Zg",
    "Ad Copywriting": "AtiAlWIw6Zg",
    "Campaign Optimization": "AtiAlWIw6Zg",
    "SEM Project": "AtiAlWIw6Zg",

    /* Module 7 */
    "Email Marketing Fundamentals": "J0CEiuOfON0",
    "Building an Email List": "J0CEiuOfON0",
    "Lead Magnets": "J0CEiuOfON0",
    "Email Campaign Planning": "J0CEiuOfON0",
    "Email Design": "J0CEiuOfON0",
    "Automation": "J0CEiuOfON0",
    "Personalization": "J0CEiuOfON0",
    "Segmentation": "J0CEiuOfON0",
    "A/B Testing": "J0CEiuOfON0",
    "Email Analytics": "J0CEiuOfON0",

    /* Module 8 */
    "Copywriting Fundamentals": "dKH77jn8vZA",
    "Blog Writing": "dKH77jn8vZA",
    "Social Media Copy": "dKH77jn8vZA",
    "Video Content": "dKH77jn8vZA",
    "Podcast Marketing": "dKH77jn8vZA",
    "Graphic Design Basics": "dKH77jn8vZA",
    "Canva for Marketing": "dKH77jn8vZA",
    "Visual Storytelling": "dKH77jn8vZA",
    "Content Scheduling": "dKH77jn8vZA",
    "Content Portfolio Project": "dKH77jn8vZA",

    /* Module 9 */
    "Website Basics": "MnUWG3VLufI",
    "WordPress Fundamentals": "MnUWG3VLufI",
    "Landing Page Design": "MnUWG3VLufI",
    "User Experience (UX)": "MnUWG3VLufI",
    "Conversion Optimization": "MnUWG3VLufI",
    "Call-to-Action (CTA)": "MnUWG3VLufI",
    "Website Speed": "MnUWG3VLufI",
    "Mobile Optimization": "MnUWG3VLufI",
    "Lead Generation Forms": "MnUWG3VLufI",
    "Website Optimization Project": "MnUWG3VLufI",

    /* Module 10 */
    "Introduction to Analytics": "9STi7dge0VU",
    "Google Analytics": "9STi7dge0VU",
    "Google Search Console": "9STi7dge0VU",
    "Key Performance Indicators (KPIs)": "9STi7dge0VU",
    "Conversion Tracking": "9STi7dge0VU",
    "Campaign Reporting": "9STi7dge0VU",
    "Dashboard Creation": "9STi7dge0VU",
    "Data Interpretation": "9STi7dge0VU",
    "ROI Measurement": "9STi7dge0VU",
    "Analytics Project": "9STi7dge0VU",

    /* Module 11 */
    "Introduction to E-Commerce": "B7yqNvFLZgY",
    "Product Listings": "B7yqNvFLZgY",
    "Online Store Optimization": "B7yqNvFLZgY",
    "Customer Reviews": "B7yqNvFLZgY",
    "Shopping Ads": "B7yqNvFLZgY",
    "Sales Funnels": "B7yqNvFLZgY",
    "Payment Integration": "B7yqNvFLZgY",
    "Customer Retention": "B7yqNvFLZgY",
    "E-Commerce Analytics": "B7yqNvFLZgY",
    "E-Commerce Project": "B7yqNvFLZgY",

    /* Module 12 */
    "ChatGPT for Marketing": "kunkYTKFNtI",
    "AI Content Creation": "kunkYTKFNtI",
    "AI Image Generation": "kunkYTKFNtI",
    "AI Video Creation": "kunkYTKFNtI",
    "AI Copywriting": "kunkYTKFNtI",
    "Marketing Automation": "kunkYTKFNtI",
    "AI Analytics": "kunkYTKFNtI",
    "Responsible AI Use": "kunkYTKFNtI",
    "AI Marketing Workflow": "kunkYTKFNtI",
    "AI Marketing Project": "kunkYTKFNtI",

    /* Module 13 */
    "Facebook Ads": "uUlU5G1Nda0",
    "Instagram Ads": "uUlU5G1Nda0",
    "LinkedIn Ads": "uUlU5G1Nda0",
    "YouTube Ads": "uUlU5G1Nda0",
    "TikTok Ads": "uUlU5G1Nda0",
    "Display Advertising": "uUlU5G1Nda0",
    "Retargeting Campaigns": "uUlU5G1Nda0",
    "Budget Management": "uUlU5G1Nda0",
    "Ad Performance Optimization": "uUlU5G1Nda0",
    "Advertising Campaign Project": "uUlU5G1Nda0",

    /* Module 14 */
    "Introduction to CRM": "Ci_qMjf8JRg",
    "Customer Lifecycle": "Ci_qMjf8JRg",
    "Lead Management": "Ci_qMjf8JRg",
    "Sales Funnels": "Ci_qMjf8JRg",
    "Customer Support": "Ci_qMjf8JRg",
    "Loyalty Programs": "Ci_qMjf8JRg",
    "CRM Software": "Ci_qMjf8JRg",
    "Customer Experience": "Ci_qMjf8JRg",
    "CRM Project": "Ci_qMjf8JRg",

    /* Module 15 */
    "Marketing Planning": "RvFTNnOyWZ0",
    "Budgeting": "RvFTNnOyWZ0",
    "Campaign Planning": "RvFTNnOyWZ0",
    "Product Launch Strategy": "RvFTNnOyWZ0",
    "Market Expansion": "RvFTNnOyWZ0",
    "Business Growth Strategies": "RvFTNnOyWZ0",
    "Partnership Marketing": "RvFTNnOyWZ0",
    "Crisis Communication": "RvFTNnOyWZ0",
    "Marketing Leadership": "RvFTNnOyWZ0",
    "Strategic Marketing Project": "RvFTNnOyWZ0",

    /* Module 16 */
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

    /* Module 17 */
    "Resume Writing": "kH0Wc6NBAu0",
    "LinkedIn Optimization": "kH0Wc6NBAu0",
    "Building a Marketing Portfolio": "kH0Wc6NBAu0",
    "Interview Preparation": "kH0Wc6NBAu0",
    "Professional Certifications": "kH0Wc6NBAu0",
    "Personal Branding": "kH0Wc6NBAu0",
    "Networking": "kH0Wc6NBAu0",
    "Career Growth Roadmap": "kH0Wc6NBAu0",

    /* Module 18 projects */
    "Social Media Marketing Campaign": "oG6HXDpsu9o",
    "SEO Optimization Project": "xsVTqzratPs",
    "Google Ads Campaign": "AtiAlWIw6Zg",
    "Facebook Ads Campaign": "uUlU5G1Nda0",
    "Email Marketing Campaign": "J0CEiuOfON0",
    "Content Marketing Strategy": "dKH77jn8vZA",
    "Website Optimization": "MnUWG3VLufI",
    "Marketing Analytics Dashboard": "9STi7dge0VU",
    "Product Launch Campaign": "RvFTNnOyWZ0",
    "Integrated Marketing Campaign": "0VtSDWsqJbM",

    /* Module 19 capstone */
    "Market Research": "avE-uvLPSN4",
    "Brand Development": "wMfo-F0Zdus",
    "Marketing Strategy": "RvFTNnOyWZ0",
    "Content Creation": "dKH77jn8vZA",
    "Social Media Campaign": "oG6HXDpsu9o",
    "Paid Advertising Plan": "uUlU5G1Nda0",
    "Analytics Report": "9STi7dge0VU",
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
