/* Distinct, public educational videos for National Security Fundamentals. */
(function(){
  if(typeof window==='undefined')return;
  var map={
    'Meaning, Scope and Dimensions of National Security':'Ae0g5nzo1VA','National Interests, Values and Security Objectives':'FEdpdeTzNp0','Human Security and State Security':'DhDWT2IRkig',
    'Constitution, Rule of Law and Civilian Authority':'nhsMTXEh2Jo','Security-Sector Institutions and Whole-of-Government Coordination':'92Fdrnq_s3c','Democratic Oversight, Accountability and Public Trust':'tzbE9PrRQZY',
    'Threats, Hazards, Vulnerabilities and Risk':'JIK0WLiGNqI','National Risk Assessment and Prioritization':'sTdTwDziY8s','Early Warning, Indicators and Scenario Planning':'JTz-4wIpRTw',
    'The Intelligence Cycle and Decision Requirements':'B2wRbotog-Y','Source Evaluation, Analysis and Cognitive Bias':'9j7L3xaOIko','Intelligence Oversight, Privacy and Responsible Information Handling':'O6YZFtR_4_0',
    'National Cybersecurity and Digital Dependence':'Z0C_dpwCOcY','Cyber Hygiene, Identity Protection and Institutional Controls':'J_jjl0iTl4I','Cyber Incident Response and Service Recovery':'mpsCsmM0vVQ',
    'Integrated and Rights-Respecting Border Management':'hlhBtAENdTs','Maritime Security and the Gulf of Guinea':'MR5U9DTRjn4','Transnational Organized Crime and Interagency Cooperation':'szbw7o1HfU4',
    'Critical Infrastructure and Essential Services':'XxQFNgqcJB8','Energy, Food and Supply-Chain Security':'Et3HVYzyu3c','Economic Security, Public Finance and Anti-Corruption':'fuZg_9Ag7CI',
    'Public Health Emergency Preparedness':'HJt0Bfj97kQ','Climate, Environmental and Resource Security':'KYxsiXznsdc','Disaster Risk Reduction, Community Preparedness and Recovery':'_ELfN_fXpQk',
    'Preventing Violent Extremism through Lawful, Inclusive Policy':'MdQXUN_ugKk','Human Rights, Civilian Protection and Security Operations':'ESwfxu_1Ko0','Peacebuilding, ECOWAS, African Union and United Nations Cooperation':'tM08aPSYprA',
    'National Security Strategy: Ends, Ways, Means and Risk':'WDMevepP38c','Diplomacy, Partnerships and Regional Cooperation':'n_A7YMs3ytU','Crisis Leadership, Strategic Communication and Lessons Learned':'BkcSSJemmyM'
  };
  function clean(v){return String(v||'').replace(/^\d+\.\s*/,'');}
  window.TIH_TOPIC_VIDEOS=window.TIH_TOPIC_VIDEOS||{};window.TIH_TOPIC_VIDEOS['national-security-fundamentals']=map;
  var c=window.COURSES_DB&&window.COURSES_DB['national-security-fundamentals'];if(c)c.modules.forEach(function(m){m.lessons.forEach(function(l){var v=map[clean(l.t)];if(v)l.v=v;});});
})();
