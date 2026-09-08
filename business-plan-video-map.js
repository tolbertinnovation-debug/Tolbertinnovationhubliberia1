/* Verified, topic-specific YouTube map for Complete Business Plan Development. */
(function(){
  if(typeof window==='undefined')return;
  var map={
    'What Is a Business Plan?':'YYpDOu4Pgcw','Lean Plan vs Traditional Business Plan':'jmUVKMBOlqI','The Business Planning Process and Evidence':'429VKN_0Rqk',
    'Vision, Mission, Values and Objectives':'Ue6hxaN0YoQ','Business Profile, Ownership and Legal Structure':'sGHxNuj-4MA','Writing the Executive Summary':'11RspUkTKTw',
    'Defining the Customer Problem':'HaYL-kjxSlk','Designing the Solution and Benefits':'U4G4zTPka0s','Building a Strong Value Proposition':'XQVQJmcNlcI',
    'Market Size: TAM, SAM and SOM':'5XgjG3ziIGY','Primary and Secondary Market Research':'MXzieZ-pDKw','Competitor Analysis and SWOT':'lVGFBSJ8QKY',
    'Customer Segments and Buyer Personas':'GydcZVhnMPw','Positioning, Brand and Competitive Advantage':'Z4dGC7dn2hE','Marketing Mix and Customer Acquisition':'Y-AeOIsxSEk',
    'Business Model and Revenue Streams':'QoAOzMTLP5s','Operations, Suppliers and Quality Control':'_UsC-BvEIZk','Location, Technology and Legal Compliance':'C0Eh4JY-ic8',
    'Organizational Structure and Governance':'xuGh-jzupzc','Management Team, Staffing and Skills Gaps':'pktiCqv6gwQ','Milestones, Roles and Implementation Schedule':'v7evqOqga74',
    'Startup Costs, Funding Needs and Use of Funds':'714lwC42YAM','Pricing, Unit Economics and Sales Assumptions':'AMKgcBzK7cg','Financial Projections, Cash Flow and Break-Even':'O6nwHQ_CSN0',
    'Business Risks and Contingency Planning':'B8y85Defryw','Social Impact, Ethics and Sustainability':'uZMNyAM3Ij8','KPIs, Monitoring and Plan Updates':'H1WPHl8hUtI',
    'Assembling the Complete Business Plan':'5Jh95xDKexY','Converting the Plan into a Pitch Deck':'Tk-RdCFSrKU','Reviewing, Presenting and Launching the Plan':'O408tB0iasA'
  };
  function clean(s){return String(s||'').replace(/^\s*\d+(?:\.\d+)*\s*/,'').trim();}
  window.TIH_TOPIC_VIDEOS=window.TIH_TOPIC_VIDEOS||{};window.TIH_TOPIC_VIDEOS['business-plan']=map;
  var c=window.COURSES_DB&&window.COURSES_DB['business-plan'];if(c)c.modules.forEach(function(m){m.lessons.forEach(function(l){var id=map[clean(l.t)];if(id)l.v=id;});});
})();
