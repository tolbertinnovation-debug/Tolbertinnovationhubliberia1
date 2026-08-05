/* TIH Complete Digital Marketing Professional Certificate curriculum.
   Rebuilds COURSES_DB.marketing into the full 20-module program taking a
   complete beginner to a job-ready digital marketer: marketing fundamentals,
   branding & content, social media, SEO, SEM, email, content creation,
   websites & landing pages, analytics, e-commerce, AI marketing, advertising,
   CRM, strategy & growth, freelancing/agency, career, real-world campaigns, a
   capstone and a graduation module. Every content lesson has a video +
   printable notes; project lessons carry briefs and downloadable templates.
   Modelled on complit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'marketing';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._mktFullBuilt) return;

  var V = ['iRjXccj4yRo', 'gqRdIEIlzNs', '8LX60gToxrM', 'WR_5_gJVA2c', 'VPDe8XL7Mh8', 'C5ddo63kHHI', '-CsBl3tv-X0', 'u0r3y1q0fLQ', '2fBxrhV3Nk0', 'mKu6FI53BxE', 'xGpwhYiDCSg', '1pejHrRIzAY', 'mGJyCH5BIi8', 'K6AEFYA5QuM', 'yLNSQyExhTU', 'gxz13n0CGzo', 'RwqyuFnFzII', 'lviXtSN-iUw'];
  var VIDEOS = {
    orientation: [V[0], V[1]], fundamentals: [V[1], V[2]], branding: [V[2], V[3]], social: [V[3], V[4]],
    seo: [V[4], V[5]], sem: [V[5], V[6]], email: [V[6], V[7]], content: [V[7], V[8]],
    website: [V[8], V[9]], analytics: [V[9], V[10]], ecommerce: [V[10], V[11]], ai: [V[11], V[12]],
    ads: [V[12], V[13]], crm: [V[13], V[14]], strategy: [V[14], V[15]], freelance: [V[15], V[16]],
    career: [V[16], V[17]], projects: [V[3], V[12]], capstone: [V[0], V[9]], assessment: [V[0]]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'What is Digital Marketing?', 'Career Opportunities in Digital Marketing', 'Types of Digital Marketing', 'Digital Marketing Trends', 'Course Roadmap', 'Setting Learning Goals', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'Marketing Fundamentals', '📚', 'fundamentals', 'content', ['Principles of Marketing', 'Consumer Behavior', 'Target Audience Identification', 'Market Research', 'Competitor Analysis', 'Branding Fundamentals', 'Customer Journey', 'Marketing Funnel', 'Value Proposition', 'Marketing Strategy']],
    [3, 'Branding & Content Strategy', '🎨', 'branding', 'content', ['Building a Brand', 'Brand Identity', 'Brand Positioning', 'Brand Storytelling', 'Content Marketing Strategy', 'Content Planning', 'Editorial Calendars', 'Content Repurposing', 'Content Distribution', 'Brand Management Project']],
    [4, 'Social Media Marketing', '📱', 'social', 'content', ['Introduction to Social Media Marketing', 'Facebook Marketing', 'Instagram Marketing', 'LinkedIn Marketing', 'X (Twitter) Marketing', 'TikTok Marketing', 'YouTube Marketing', 'WhatsApp Business', 'Social Media Content Planning', 'Community Management', 'Influencer Marketing', 'Social Media Analytics', 'Social Media Campaign Project']],
    [5, 'Search Engine Optimization (SEO)', '🔍', 'seo', 'content', ['Introduction to SEO', 'Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO', 'SEO Tools', 'Content Optimization', 'Link Building', 'SEO Audit Project']],
    [6, 'Search Engine Marketing (SEM)', '💲', 'sem', 'content', ['Introduction to Google Ads', 'Keyword Targeting', 'Search Campaigns', 'Display Campaigns', 'Video Campaigns', 'Shopping Campaigns', 'Campaign Budgeting', 'Ad Copywriting', 'Campaign Optimization', 'SEM Project']],
    [7, 'Email Marketing', '✉️', 'email', 'content', ['Email Marketing Fundamentals', 'Building an Email List', 'Lead Magnets', 'Email Campaign Planning', 'Email Design', 'Automation', 'Personalization', 'Segmentation', 'A/B Testing', 'Email Analytics']],
    [8, 'Content Creation', '✍️', 'content', 'content', ['Copywriting Fundamentals', 'Blog Writing', 'Social Media Copy', 'Video Content', 'Podcast Marketing', 'Graphic Design Basics', 'Canva for Marketing', 'Visual Storytelling', 'Content Scheduling', 'Content Portfolio Project']],
    [9, 'Website & Landing Pages', '🖥️', 'website', 'content', ['Website Basics', 'WordPress Fundamentals', 'Landing Page Design', 'User Experience (UX)', 'Conversion Optimization', 'Call-to-Action (CTA)', 'Website Speed', 'Mobile Optimization', 'Lead Generation Forms', 'Website Optimization Project']],
    [10, 'Analytics & Performance Measurement', '📈', 'analytics', 'content', ['Introduction to Analytics', 'Google Analytics', 'Google Search Console', 'Key Performance Indicators (KPIs)', 'Conversion Tracking', 'Campaign Reporting', 'Dashboard Creation', 'Data Interpretation', 'ROI Measurement', 'Analytics Project']],
    [11, 'E-Commerce Marketing', '🛒', 'ecommerce', 'content', ['Introduction to E-Commerce', 'Product Listings', 'Online Store Optimization', 'Customer Reviews', 'Shopping Ads', 'Sales Funnels', 'Payment Integration', 'Customer Retention', 'E-Commerce Analytics', 'E-Commerce Project']],
    [12, 'AI for Digital Marketing', '🤖', 'ai', 'content', ['ChatGPT for Marketing', 'AI Content Creation', 'AI Image Generation', 'AI Video Creation', 'AI Copywriting', 'Marketing Automation', 'AI Analytics', 'Responsible AI Use', 'AI Marketing Workflow', 'AI Marketing Project']],
    [13, 'Advertising & Media Buying', '📣', 'ads', 'content', ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'YouTube Ads', 'TikTok Ads', 'Display Advertising', 'Retargeting Campaigns', 'Budget Management', 'Ad Performance Optimization', 'Advertising Campaign Project']],
    [14, 'Customer Relationship Management (CRM)', '🤝', 'crm', 'content', ['Introduction to CRM', 'Customer Lifecycle', 'Lead Management', 'Sales Funnels', 'Customer Retention', 'Customer Support', 'Loyalty Programs', 'CRM Software', 'Customer Experience', 'CRM Project']],
    [15, 'Marketing Strategy & Business Growth', '🚀', 'strategy', 'content', ['Marketing Planning', 'Budgeting', 'Campaign Planning', 'Product Launch Strategy', 'Market Expansion', 'Business Growth Strategies', 'Partnership Marketing', 'Crisis Communication', 'Marketing Leadership', 'Strategic Marketing Project']],
    [16, 'Freelancing & Agency Skills', '💼', 'freelance', 'content', ['Becoming a Freelance Marketer', 'Building a Portfolio', 'Pricing Services', 'Finding Clients', 'Proposal Writing', 'Client Management', 'Agency Operations', 'Service Packaging', 'Contracts & Invoicing', 'Freelancing Project']],
    [17, 'Career Development', '📋', 'career', 'content', ['Resume Writing', 'LinkedIn Optimization', 'Building a Marketing Portfolio', 'Interview Preparation', 'Professional Certifications', 'Personal Branding', 'Networking', 'Career Growth Roadmap']],
    [18, 'Real-World Projects', '🏗️', 'projects', 'projects', ['Social Media Marketing Campaign', 'SEO Optimization Project', 'Google Ads Campaign', 'Facebook Ads Campaign', 'Email Marketing Campaign', 'Content Marketing Strategy', 'Website Optimization', 'Marketing Analytics Dashboard', 'Product Launch Campaign', 'Integrated Marketing Campaign']],
    [19, 'Capstone Project', '🏆', 'capstone', 'projects', ['Market Research', 'Brand Development', 'Marketing Strategy', 'Content Creation', 'Social Media Campaign', 'Paid Advertising Plan', 'Analytics Report', 'Final Presentation']],
    [20, 'Assessments & Graduation', '🎓', 'assessment', 'assessment', ['Marketing Fundamentals Assessment', 'Social Media Assessment', 'SEO Assessment', 'Advertising Assessment', 'Analytics Assessment', 'AI Marketing Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'digital marketing foundations', fundamentals: 'marketing fundamentals', branding: 'branding & content strategy', social: 'social media marketing', seo: 'search engine optimization (SEO)', sem: 'search engine marketing (SEM)', email: 'email marketing', content: 'content creation', website: 'websites & landing pages', analytics: 'analytics & performance', ecommerce: 'e-commerce marketing', ai: 'AI for digital marketing', ads: 'advertising & media buying', crm: 'customer relationship management', strategy: 'marketing strategy & growth', freelance: 'freelancing & agency skills', career: 'marketing careers', projects: 'real-world marketing campaigns', capstone: 'your capstone campaign', assessment: 'your marketing knowledge' };

  var TEMPLATES = {
    plan: '<h4>📥 Template: Marketing Plan</h4><ol><li>Goals &amp; objectives (SMART)</li><li>Target audience &amp; personas</li><li>Positioning &amp; key message</li><li>Channels (social, SEO, email, ads)</li><li>Budget &amp; calendar</li><li>KPIs &amp; measurement</li></ol>',
    calendar: '<h4>📥 Template: Content Calendar</h4><p>Columns: Date · Channel · Topic/Title · Format · CTA · Owner · Status. Plan a month at a time and batch-create content.</p>',
    social: '<h4>📥 Template: Social Media Post</h4><ul><li>Hook (first line)</li><li>Value/body</li><li>Call to action</li><li>Hashtags &amp; visual</li><li>Best posting time per platform</li></ul>',
    seo: '<h4>📥 Checklist: SEO</h4><ul><li>Target keyword in title, H1 &amp; URL</li><li>Meta description written</li><li>Headings structured (H1–H3)</li><li>Alt text on images</li><li>Internal + external links</li><li>Mobile-friendly &amp; fast</li></ul>',
    ads: '<h4>📥 Planner: Google/Meta Ads</h4><ul><li>Objective (awareness/leads/sales)</li><li>Audience &amp; targeting</li><li>Budget &amp; bid</li><li>Ad copy &amp; creative</li><li>Landing page &amp; conversion tracking</li><li>KPIs: CTR, CPC, CPA, ROAS</li></ul>',
    budget: '<h4>📥 Template: Campaign Budget</h4><ul><li>Channel &amp; spend</li><li>Expected reach/clicks</li><li>Cost per result (CPC/CPA)</li><li>Expected conversions &amp; revenue</li><li>ROI / ROAS</li></ul>',
    email: '<h4>📥 Template: Email Campaign</h4><ul><li>Subject line (A/B test)</li><li>Preview text</li><li>Greeting &amp; value</li><li>One clear CTA</li><li>Segmentation &amp; send time</li></ul>',
    kpi: '<h4>📥 Template: KPI Dashboard</h4><ul><li>Reach, engagement, traffic</li><li>Leads &amp; conversion rate</li><li>Cost per lead / CPA</li><li>ROI / ROAS</li><li>Trend vs previous period</li></ul>',
    proposal: '<h4>📥 Template: Client Proposal</h4><ul><li>Client goals &amp; challenge</li><li>Proposed services &amp; scope</li><li>Timeline &amp; deliverables</li><li>Pricing &amp; packages</li><li>Expected results &amp; next steps</li></ul>'
  };
  function templateFor(name) {
    if (/Marketing Strategy|Marketing Planning|Strategic Marketing Project/i.test(name)) return TEMPLATES.plan;
    if (/Content Planning|Editorial Calendars|Content Scheduling|Content Marketing Strategy/i.test(name)) return TEMPLATES.calendar;
    if (/Social Media Content Planning|Social Media Copy/i.test(name)) return TEMPLATES.social;
    if (/On-Page SEO|SEO Audit|Content Optimization/i.test(name)) return TEMPLATES.seo;
    if (/Google Ads|Search Campaigns|Facebook Ads|Ad Copywriting/i.test(name)) return TEMPLATES.ads;
    if (/Campaign Budgeting|Budget Management|^Budgeting$/i.test(name)) return TEMPLATES.budget;
    if (/Email Design|Email Campaign Planning|Email Marketing Fundamentals/i.test(name)) return TEMPLATES.email;
    if (/KPI|Dashboard Creation/i.test(name)) return TEMPLATES.kpi;
    if (/Proposal Writing|Client Management/i.test(name)) return TEMPLATES.proposal;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'digital marketing skills';
    var focus = position % 2 ? 'practical technique, real campaign examples and hands-on practice' : 'understanding the concept, applying it to a campaign and measuring results';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Digital Marketing · ' + esc(moduleTitle) + '</strong><span>Grow online</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> is and how marketers use it.</li>' +
      '<li>See a real campaign example and the tools involved.</li>' +
      '<li>Apply it to a real or sample brand and track the result.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a real Liberian business, NGO or your own brand.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Apply <em>' + esc(name) + '</em> to a sample brand or campaign.</li>' +
      '<li><strong>Exercise 2:</strong> Define one metric (KPI) you would use to measure its success.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming a job-ready digital marketer.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on marketing project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical campaign project. Build it for a real or sample brand and add it to your digital marketing portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Set the goal, audience and budget.</li><li>Create the content/campaign and launch or simulate it with real tools.</li><li>Measure the KPIs, write the results and recommendations, and add it to your portfolio.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A complete campaign (assets + plan + results) for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Digital marketing is:', opts: ['Only TV ads', 'Promoting products/services through digital channels', 'Only printing', 'Avoiding customers'], correct: 1, exp: 'It uses online channels to reach and convert customers.' },
      { q: 'The best way to learn digital marketing is to:', opts: ['Only read', 'Run real or simulated campaigns and measure results', 'Avoid tools', 'Memorise terms'], correct: 1, exp: 'Hands-on campaigns with measurement build the skill.' },
      { q: 'A marketing portfolio should show:', opts: ['Nothing', 'Real campaigns, content and results', 'Only certificates', 'Only text'], correct: 1, exp: 'Employers/clients want to see real work and outcomes.' },
      { q: 'A good marketer always:', opts: ['Ignores data', 'Measures performance and optimises', 'Guesses', 'Avoids analytics'], correct: 1, exp: 'Measurement and optimisation are core to marketing.' },
      { q: 'The capstone project helps you:', opts: ['Skip learning', 'Build a full integrated campaign end to end', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates the whole program into one campaign.' },
      { q: 'Digital marketing channels include:', opts: ['Only billboards', 'Social media, SEO, email, ads and content', 'Only radio', 'Only flyers'], correct: 1, exp: 'Digital channels span social, search, email, ads and content.' }
    ],
    fundamentals: [
      { q: 'A target audience is:', opts: ['Everyone', 'The specific group most likely to buy', 'Only competitors', 'Only staff'], correct: 1, exp: 'Focus on the people most likely to convert.' },
      { q: 'The marketing funnel describes:', opts: ['A physical funnel', 'The stages from awareness to purchase (and loyalty)', 'A budget', 'A logo'], correct: 1, exp: 'Awareness → interest → consideration → conversion → loyalty.' },
      { q: 'A value proposition states:', opts: ['Your address', 'Why customers should choose you', 'Your tax rate', 'Your logo colour'], correct: 1, exp: 'It is the clear value/benefit you offer customers.' },
      { q: 'Understanding consumer behavior helps you:', opts: ['Guess', 'Create messages that match customer needs', 'Ignore customers', 'Set no price'], correct: 1, exp: 'Knowing behaviour improves targeting and messaging.' },
      { q: 'A customer persona is:', opts: ['A real single person', 'A profile of your typical customer', 'A logo', 'A price'], correct: 1, exp: 'Personas summarise the target customer’s traits and needs.' },
      { q: 'Competitor analysis helps you:', opts: ['Copy everything', 'Find your advantage and gaps in the market', 'Ignore rivals', 'Set no strategy'], correct: 1, exp: 'It reveals how to differentiate and where to compete.' }
    ],
    social: [
      { q: 'Social media content should be:', opts: ['The same on every platform always', 'Tailored to each platform and audience', 'Only text', 'Only links'], correct: 1, exp: 'Adapt format and tone to each platform.' },
      { q: 'Engagement on social media means:', opts: ['Only followers', 'Likes, comments, shares and saves', 'Only posts', 'Nothing'], correct: 1, exp: 'Engagement measures how people interact with content.' },
      { q: 'A content calendar helps you:', opts: ['Post randomly', 'Plan and post consistently', 'Avoid posting', 'Delete content'], correct: 1, exp: 'Consistent, planned posting builds an audience.' },
      { q: 'Influencer marketing works by:', opts: ['Ignoring creators', 'Partnering with trusted creators to reach their audience', 'Only paid ads', 'Deleting posts'], correct: 1, exp: 'Influencers lend trust and reach to your brand.' },
      { q: 'A strong social post usually starts with:', opts: ['A hashtag only', 'A hook that grabs attention', 'A link only', 'Nothing'], correct: 1, exp: 'The first line/hook decides if people keep reading.' },
      { q: 'Social media analytics help you:', opts: ['Guess', 'See what content works and improve', 'Ignore results', 'Post less'], correct: 1, exp: 'Analytics guide data-driven content decisions.' }
    ],
    seo: [
      { q: 'SEO aims to:', opts: ['Pay per click', 'Improve organic (unpaid) search ranking', 'Delete a site', 'Only design'], correct: 1, exp: 'SEO improves visibility in unpaid search results.' },
      { q: 'Keyword research helps you find:', opts: ['Random words', 'What your audience actually searches for', 'Only competitors', 'Nothing'], correct: 1, exp: 'It reveals the terms people search, to target them.' },
      { q: 'On-page SEO includes:', opts: ['Only backlinks', 'Titles, headings, content and meta descriptions', 'Only ads', 'Nothing'], correct: 1, exp: 'On-page optimises elements on your own pages.' },
      { q: 'Off-page SEO mainly involves:', opts: ['Your page titles', 'Backlinks and external signals', 'Your images', 'Your fonts'], correct: 1, exp: 'Off-page is about authority signals like backlinks.' },
      { q: 'Technical SEO covers:', opts: ['Only content', 'Site speed, mobile, crawlability and structure', 'Only ads', 'Only logos'], correct: 1, exp: 'It ensures search engines can crawl and index the site well.' },
      { q: 'Local SEO helps a business:', opts: ['Globally only', 'Appear in local searches and maps', 'Never', 'Only on social'], correct: 1, exp: 'Local SEO targets nearby customers (e.g. Google Business Profile).' }
    ],
    sem: [
      { q: 'SEM / Google Ads is:', opts: ['Free organic traffic', 'Paid advertising on search engines', 'Only email', 'Only SEO'], correct: 1, exp: 'SEM buys visibility via paid search ads.' },
      { q: 'A well-targeted ad uses:', opts: ['No keywords', 'Relevant keywords and audience targeting', 'Random words', 'No budget'], correct: 1, exp: 'Targeting relevant keywords/audiences improves results.' },
      { q: 'CPC stands for:', opts: ['Cost Per Click', 'Clicks Per Customer', 'Cost Per Company', 'Copy Paste Content'], correct: 0, exp: 'CPC = cost per click in paid advertising.' },
      { q: 'Good ad copy has:', opts: ['No message', 'A clear benefit and call to action', 'Only a logo', 'Only hashtags'], correct: 1, exp: 'Clear benefit + CTA drives clicks and conversions.' },
      { q: 'Campaign optimization means:', opts: ['Set and forget', 'Adjusting targeting, budget and creative based on data', 'Ignoring results', 'Deleting the campaign'], correct: 1, exp: 'Optimise using performance data to improve ROI.' },
      { q: 'A landing page for an ad should:', opts: ['Be slow', 'Match the ad and drive one clear action', 'Have no CTA', 'Be unrelated'], correct: 1, exp: 'Message match and a clear CTA lift conversions.' }
    ],
    email: [
      { q: 'Building an email list is valuable because:', opts: ['It is outdated', 'You own the audience and can reach them directly', 'It never converts', 'It is illegal'], correct: 1, exp: 'Email is a direct, owned channel you control.' },
      { q: 'A lead magnet is:', opts: ['A physical magnet', 'A free valuable offer to gain email sign-ups', 'A logo', 'A price'], correct: 1, exp: 'Lead magnets (e.g. a free guide) grow your list.' },
      { q: 'Email segmentation means:', opts: ['One email to everyone', 'Sending relevant emails to specific groups', 'No sending', 'Deleting subscribers'], correct: 1, exp: 'Segmenting improves relevance and results.' },
      { q: 'A/B testing an email helps you:', opts: ['Guess', 'Compare versions to see what performs better', 'Send once only', 'Ignore data'], correct: 1, exp: 'A/B tests reveal the better subject line/content.' },
      { q: 'The subject line’s job is to:', opts: ['Close the sale', 'Get the email opened', 'Be very long', 'List prices'], correct: 1, exp: 'A strong subject line drives the open rate.' },
      { q: 'Email automation lets you:', opts: ['Send manually only', 'Send the right message automatically based on triggers', 'Never send', 'Delete lists'], correct: 1, exp: 'Automations (e.g. welcome series) run without manual work.' }
    ],
    content: [
      { q: 'Copywriting is writing to:', opts: ['Confuse', 'Persuade and drive action', 'Fill space', 'Hide the offer'], correct: 1, exp: 'Copywriting persuades the reader to act.' },
      { q: 'Content marketing builds trust by:', opts: ['Only selling', 'Providing useful, relevant content', 'Interrupting people', 'Hiding value'], correct: 1, exp: 'Helpful content attracts and nurtures an audience.' },
      { q: 'Repurposing content means:', opts: ['Deleting it', 'Reusing one piece across formats/channels', 'Only posting once', 'Copying rivals'], correct: 1, exp: 'One idea becomes a blog, posts, video, etc.' },
      { q: 'A strong call to action (CTA):', opts: ['Is vague', 'Tells the reader exactly what to do next', 'Is hidden', 'Is missing'], correct: 1, exp: 'Clear CTAs like "Sign up now" drive action.' },
      { q: 'Canva is used by marketers to:', opts: ['Write code', 'Create graphics and visual content easily', 'Host sites', 'Send email'], correct: 1, exp: 'Canva makes on-brand visuals quick to design.' },
      { q: 'Visual storytelling helps because:', opts: ['People ignore visuals', 'Visuals grab attention and aid memory', 'Text is always better', 'It hides the message'], correct: 1, exp: 'Visuals boost attention, understanding and recall.' }
    ],
    website: [
      { q: 'A landing page is designed to:', opts: ['Do many things', 'Drive one specific action (e.g. sign up)', 'Confuse visitors', 'Have no CTA'], correct: 1, exp: 'Landing pages focus on a single conversion goal.' },
      { q: 'Conversion rate optimization (CRO) aims to:', opts: ['Lower traffic', 'Increase the % of visitors who take action', 'Slow the site', 'Hide the CTA'], correct: 1, exp: 'CRO improves how many visitors convert.' },
      { q: 'Mobile optimization matters because:', opts: ['No one uses phones', 'Most web traffic is on mobile devices', 'It slows sites', 'It is optional'], correct: 1, exp: 'A large share of visitors use mobile — sites must work there.' },
      { q: 'A clear CTA button should be:', opts: ['Hidden', 'Visible with action text (e.g. "Get Started")', 'Unlabeled', 'The same as the background'], correct: 1, exp: 'A prominent, clear CTA drives conversions.' },
      { q: 'Website speed affects:', opts: ['Nothing', 'User experience and SEO/conversions', 'Only colours', 'Only fonts'], correct: 1, exp: 'Slow sites lose visitors and rank lower.' },
      { q: 'A lead-generation form should:', opts: ['Ask everything', 'Ask only what is needed to reduce friction', 'Be hidden', 'Have no submit'], correct: 1, exp: 'Short, focused forms convert better.' }
    ],
    analytics: [
      { q: 'Google Analytics is used to:', opts: ['Design logos', 'Measure website traffic and behaviour', 'Send email', 'Host sites'], correct: 1, exp: 'GA4 tracks visitors, sources and conversions.' },
      { q: 'A KPI is a:', opts: ['Random number', 'Key metric measuring performance against a goal', 'A chart type', 'A logo'], correct: 1, exp: 'KPIs track progress toward marketing goals.' },
      { q: 'Conversion tracking measures:', opts: ['Only visits', 'Actions that matter (sign-ups, sales)', 'Only colours', 'Nothing'], correct: 1, exp: 'It tracks valuable actions, not just traffic.' },
      { q: 'ROI in marketing measures:', opts: ['Only spend', 'Return relative to what you invested', 'Only reach', 'Only clicks'], correct: 1, exp: 'ROI compares results to cost.' },
      { q: 'A marketing dashboard should:', opts: ['Hide data', 'Show key metrics clearly at a glance', 'Only have text', 'Confuse readers'], correct: 1, exp: 'Dashboards summarise KPIs for quick decisions.' },
      { q: 'Data interpretation means:', opts: ['Ignoring numbers', 'Turning data into insights and actions', 'Only collecting data', 'Deleting data'], correct: 1, exp: 'Insight and action are the point of analytics.' }
    ],
    ads: [
      { q: 'Retargeting shows ads to people who:', opts: ['Never heard of you', 'Already visited or engaged with you', 'Are competitors', 'Are staff'], correct: 1, exp: 'Retargeting re-engages warm audiences.' },
      { q: 'ROAS stands for:', opts: ['Return On Ad Spend', 'Rate Of Ad Sales', 'Reach Of All Search', 'Random Order'], correct: 0, exp: 'ROAS = revenue ÷ ad spend.' },
      { q: 'Meta Ads Manager is used to:', opts: ['Edit photos', 'Create and manage Facebook/Instagram ads', 'Host sites', 'Write code'], correct: 1, exp: 'It manages Meta (Facebook/Instagram) advertising.' },
      { q: 'A good ad campaign starts with a clear:', opts: ['Logo', 'Objective and target audience', 'Colour', 'Font'], correct: 1, exp: 'Define the goal and audience before creative/budget.' },
      { q: 'Budget management in ads means:', opts: ['Spend all at once', 'Allocating and adjusting spend for best return', 'Ignoring cost', 'No budget'], correct: 1, exp: 'Manage spend toward the best cost per result.' },
      { q: 'Ad performance is improved by:', opts: ['Never changing ads', 'Testing creatives/audiences and optimising', 'Ignoring data', 'One ad forever'], correct: 1, exp: 'Test and optimise using performance data.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', fundamentals: 'fundamentals', branding: 'content', social: 'social', seo: 'seo', sem: 'sem', email: 'email', content: 'content', website: 'website', analytics: 'analytics', ecommerce: 'website', ai: 'general', ads: 'ads', crm: 'analytics', strategy: 'fundamentals', freelance: 'general', career: 'general', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.fundamentals, BANK.social, BANK.seo, BANK.sem, BANK.email, BANK.content, BANK.website, BANK.analytics, BANK.ads);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Social Media/i.test(name)) return 'social';
    if (/SEO/i.test(name)) return 'seo';
    if (/Advertising/i.test(name)) return 'ads';
    if (/Analytics/i.test(name)) return 'analytics';
    if (/AI Marketing/i.test(name)) return 'general';
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
        var qid = 'mkt-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–17.</li><li>Complete the real-world campaigns in Module 18 (10 projects).</li><li>Complete the capstone in Module 19 and publish your marketing portfolio.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'mkt-m' + num + '-a' + flat;
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
      var pqid = 'mkt-m' + num + '-q' + flat;
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
    title: 'Complete Digital Marketing Professional Certificate',
    shortDesc: 'A full 20-module program from complete beginner to job-ready digital marketer: marketing fundamentals, branding & content, social media, SEO, SEM, email, content creation, websites & landing pages, analytics, e-commerce, AI marketing, advertising, CRM, strategy & growth, freelancing, 10 real-world campaigns, a capstone and a Certificate of Completion.',
    category: 'Digital Marketing',
    icon: ex.icon || '📢',
    gradient: ex.gradient || 'linear-gradient(135deg,#b45309,#f59e0b)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH marketers',
    duration: '160h+',
    level: 'Beginner → Job-Ready',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$180',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-MARKETING-0001',
    learn: [
      'Create and execute digital marketing campaigns across all channels',
      'Build brands, content strategies and social media presence',
      'Do SEO, run Google/Meta ads and email marketing that convert',
      'Build and optimize websites/landing pages and measure with analytics',
      'Use AI tools to boost marketing productivity responsibly',
      'Freelance or work in an agency and build a marketing portfolio'
    ],
    requirements: [
      'No prior experience required — we start from the basics',
      'A device with internet to use marketing tools',
      'Willingness to run real or simulated campaigns'
    ],
    about: [
      'This is the complete TIH Digital Marketing Professional Certificate, rebuilt into twenty modules that take you from complete beginner to job-ready digital marketer.',
      'Every content lesson has a video and printable notes; downloadable templates cover a Marketing Plan, Content Calendar, Social Media posts, SEO Checklist, Ads Planner, Campaign Budget, Email templates, KPI Dashboard and Client Proposal. Ten real-world campaigns and a capstone build your portfolio.',
      'Software & tools: Google Analytics 4, Search Console, Google Ads, Meta Business Suite & Ads Manager, LinkedIn & TikTok Ads, Canva, ChatGPT, WordPress, Mailchimp, Buffer, Hootsuite, SEMrush, Ubersuggest, Trello and Notion. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _mktFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[MARKETING] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
