/* TIH BUSINESS LEADERSHIP — one distinct YouTube video per topic.
   Course id: leadership

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 19 videos across 165 lessons; the six most-reused of them
   covered 68 lessons between them.

   Keys are the lesson title with its numeric prefix stripped. Titles that
   occur in more than one module -- Business Growth Strategies, Continuous
   Improvement, Digital Transformation, Financial Planning, Performance
   Reviews and Strategic Planning -- are keyed "M<n>:Title", because a plain
   title key would collapse each set onto one video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB.leadership || !COURSES_DB.leadership.modules) return;
  var MAP = {
    'Welcome to the Course': 'ocj8J7_vRO8',
    'What is Leadership?': 'W0YLTzab6Uc',
    'Leadership vs. Management': 'x-Cml1ftcBI',
    'Characteristics of Great Leaders': 'WHXAYWcsFoA',
    'Leadership Styles': 'p4uNIirSPaE',
    'The Role of a Business Leader': 'Tddlkly1cC0',
    'Course Roadmap': 'FxS5n_gP4PM',
    'Professional Ethics': 'DgNrcJAshI4',
    'Final Leadership Project': '7XLVY6EoUgA',
    'Leadership Principles': 'bHS-lAoEnsk',
    'Self-Leadership': 'cJpBiaSD5Bc',
    'Emotional Intelligence': 'fSRBX70UPts',
    'Personal Values': 'iFnWbA-O3nU',
    'Building Trust': '8Z8f-YInraI',
    'Decision-Making': 'LAMnw9ufTR8',
    'Accountability': 'D5auahx76ow',
    'Developing Leadership Confidence': 'hzNWC84b1ko',
    'Leadership Action Plan': 'psUqC5RQfFo',
    'M3:Strategic Planning': 'G0dR4nI9dsQ',
    'Vision and Mission': 'pIXEVaVClrU',
    'Setting Business Goals': 'MgWZuFr8Z2c',
    'SWOT Analysis': 'UqPKdl8TfZI',
    'PESTLE Analysis': 'bmxYKA9Lge8',
    'Competitive Advantage': 'PuEX8XjThaw',
    'M3:Business Growth Strategies': '57MjthpaPsg',
    'Strategic Decision-Making': '3wqIyDNQNIE',
    'Scenario Planning': '6y3kT_RuTQA',
    'Strategic Leadership Workshop': '-bsMH6ZAQrk',
    'Effective Communication': 'a_hCcFhQ9Ss',
    'Public Speaking': 'F0UW99pyCLk',
    'Business Writing': 'qbbubcxQTwg',
    'Active Listening': '-To0iomoXYw',
    'Giving and Receiving Feedback': 'KxiBfbQCnnI',
    'Persuasive Communication': 'qi85eDL0h34',
    'Presentation Skills': 'FSGvRvb4FfY',
    'Executive Communication': 'Qhu3CSfOIjk',
    'Crisis Communication': 'pH5FtonB8H0',
    'Building High-Performing Teams': 't1OXSyWLiJo',
    'Hiring the Right People': 'q-q549OMoSs',
    'Delegation Skills': 'IMnKUFIHBDI',
    'Team Motivation': 'o087rCs6-YU',
    'Employee Engagement': 'Yjflk_MuQNM',
    'Coaching and Mentoring': 'x6eSCTL-Z9I',
    'Performance Management': 'ozUso6Kwa4I',
    'Team Conflict Resolution': 'wioJwOPeAUQ',
    'Remote Team Leadership': 'VqVz8h93COA',
    'Team Development Project': '-8M1bSCId1M',
    'Understanding Organizational Culture': 'J6Y61qshVv8',
    'Creating Core Values': '4e5aMWj254Q',
    'Business Processes': '4xxbr6JwDAo',
    'Operational Planning': 'zpp0biwTUSg',
    'Productivity Improvement': '8xlU6O_FZkQ',
    'Process Optimization': 'hSpER0pfM1c',
    'Resource Management': '4L7cxvCEOhQ',
    'Supply Chain Basics': 'ejVv7dlGyns',
    'Performance Metrics': '7SpGl2Od6Gc',
    'Operational Excellence': '2lIbLRgnBe8',
    'Financial Literacy for Leaders': 'OPt4ry5QSVQ',
    'Reading Financial Statements': 'WCtQ0wuuexE',
    'Budgeting': 'E8ZS6pgxVO4',
    'Cash Flow Management': 'QI_2oCDBfd8',
    'Profit and Loss': 'YZ3NGi1BotI',
    'Financial Decision-Making': 'KlozMovKHVg',
    'Cost Control': 'YKI6nzaxk_g',
    'Business Performance Analysis': 'gThwsJQScPI',
    'M8:Financial Planning': 'Twghff5tK-s',
    'Financial Leadership Assignment': '4BbG-ndoFRQ',
    'Marketing Fundamentals': 'vGDW57Iv6V0',
    'Branding': 'YlKhNsq-9Vw',
    'Customer Experience': '5zA1SAB0peA',
    'Digital Marketing': 'VviMeAGZJpw',
    'Sales Leadership': 'LQ-MW9aOl4g',
    'Customer Relationship Management': '6lfDozHP51M',
    'Market Positioning': 'YTgIlYEyPhQ',
    'M9:Business Growth Strategies': 'df8sHYPu6wE',
    'Innovation in Business': 'EOVI9bhopZ8',
    'Creative Thinking': 'UNKw2i8svGk',
    'Managing Change': '7oqFhxXHI7A',
    'M10:Digital Transformation': 'Dum2p5RxMrs',
    'Business Process Innovation': 'Bdzsf13GInw',
    'Leading Organizational Change': 'GVg1HgYDWAM',
    'Managing Resistance': 'ChYI-8uTinc',
    'M10:Continuous Improvement': 'TbdcUPG2p5o',
    'Negotiation Skills': 'VgLmfCplWng',
    'Business Negotiation Strategies': 'Mgi4Onnn1sc',
    'Conflict Resolution': 'zglEXWlqb7w',
    'Mediation Techniques': 'EGJbLq9-1rQ',
    'Handling Difficult Conversations': '4eW4Uroqe0w',
    'Workplace Disputes': 'PDaJIf1btvg',
    'Win-Win Solutions': '8zm9sEST79A',
    'Negotiation Practice': '9XCjEF-COYo',
    'Human Resource Fundamentals': 'UgOs20ECB_I',
    'Recruitment Strategies': 'ZyPxaQSmgSc',
    'Talent Management': 'sksY5zEpEj4',
    'Employee Development': 'l8gp2OK8BVM',
    'Succession Planning': 'QGgxt9fVnUM',
    'M12:Performance Reviews': 'yCK2DtWWm-w',
    'Compensation & Benefits': '4E9Yr0IWDeY',
    'Employment Law Basics': 'K4oHR2OnBwo',
    'Goal Setting': 'zg_QfauRfng',
    'Key Performance Indicators (KPIs)': 'K1g_ZSQiwMg',
    'Project Planning': 'brO0nmNUo28',
    'Monitoring Performance': 'KuLXYxfLYXk',
    'Time Management': 'fIz8Mi9Jhls',
    'Productivity Systems': 'QULWaxmdcdI',
    'M13:Performance Reviews': 'lq9FEFwXa9g',
    'M13:Continuous Improvement': 'OugmfDDMFCs',
    'Entrepreneurial Leadership': 'ZW2yE27BkWw',
    'Business Model Innovation': 'sQD4EdMUWgM',
    'Scaling a Business': 'NQ2G63nEdKE',
    'Business Expansion': 'AlaU2bjEWeg',
    'Strategic Partnerships': 'tZcnpNV-lic',
    'Investment Readiness': 'HOhWDFBWyhY',
    'Corporate Entrepreneurship': 'B_V7-lb4cVs',
    'Sustainable Growth': 'PGjWeE14lJU',
    'M15:Digital Transformation': 'YCfZncpAR8w',
    'Artificial Intelligence in Business': 'D1nUxSzdMes',
    'Data-Driven Decision Making': 'KmXP6h7h690',
    'Business Intelligence': '2ukP991M-4Y',
    'Automation': 'jhSejeNslP8',
    'Cybersecurity Awareness': '_ewyqzRN-PA',
    'Cloud Computing Basics': 'wOg8mVU1vYw',
    'Future Business Trends': 'Jl-VMhq3MCg',
    'Corporate Governance': '1r2L9J7bKaM',
    'Business Ethics': 'LKMwgDWD4TI',
    'Compliance': 'yz8lRz_SuuY',
    'Risk Management': 'asbFsFa39aU',
    'Corporate Social Responsibility (CSR)': 'DjIGRb8Vx5Y',
    'Sustainability': 'OcUyI2y8k7o',
    'Environmental, Social & Governance (ESG)': '1-zwNJ0YvKI',
    'Responsible Leadership': 'OJBCpynUjNk',
    'Executive Presence': '2cgZ6RhBOw0',
    'Personal Branding': 'D-AUhHFHGvg',
    'Professional Networking': 'Y0aMKb9HBZ4',
    'Building a Leadership Portfolio': 'fBTfruxCTJ0',
    'Resume & LinkedIn Optimization': 'uUEgaYGAom4',
    'Executive Interviews': 'CoImPrXTDu4',
    'Career Planning': 'JNS-T2om-8c',
    'Lifelong Learning': 'kQvTBjL5d5M',
    'Strategic Business Plan': 'vEPVIO7MccA',
    'Team Leadership Project': 'woa3076GRS8',
    'Organizational Improvement Plan': 'fo9u9ffME04',
    'Change Management Strategy': '3iJiuDnuAfw',
    'Marketing Growth Plan': 's6jNI5twWfM',
    'Financial Performance Review': 'TROitlzgFyU',
    'Business Expansion Proposal': 'DPUr35Xw5T4',
    'Executive Presentation': 'QFEJk32WenQ',
    'Leadership Case Study': 'u4aLKuE-Yy0',
    'Board Meeting Simulation': 'uoEadnwc90I',
    'Leadership Challenge Selection': '2w37cNlS_vk',
    'Business Analysis': 'L2bcNh5ZhRU',
    'M19:Strategic Planning': 'i83r7RYfyxk',
    'Team Leadership': 'bS61ZN-K6fs',
    'M19:Financial Planning': 'xdRENrTVs1Y',
    'Implementation Strategy': 'cM48mvhTbWQ',
    'Final Presentation': 'KVjx05Mn678',
    'Executive Review': '_9dG0lU62ik',
    'Certificate Requirements': 'caU-a6fQjiE',
    'Communication Practice': 'I81xVYG1Yrc',
    'Building a Positive Work Environment': 'NwRTEMQZrFk',
    'Diversity and Inclusion': '6oogGj5pjr0',
    'Employee Well-Being': 'PxzwOupFChM',
    'Organizational Behavior': 'Jn6u0K8Tbug',
    'Culture Change': '5JVFQMY9tg8',
    'Ethical Leadership': 'MPKw6jAFGfw'
  };
  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  COURSES_DB.leadership.modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[LEADERSHIP videos] distinct video applied to ' + applied + ' lessons');
  }
})();
