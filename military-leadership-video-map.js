/* Search-verified, distinct lesson videos for Military Organization and Leadership. */
(function(){
  if(typeof window==='undefined')return;
  var map={
    'Armed Forces in Constitutional Service':'wcMqauz71ic',
    'The Military Profession, Values and Public Trust':'PzeouJ2vlDU',
    'Units, Formations and the Chain of Command':'3pJGGadJy9g',
    'Leader Character, Presence and Intellect':'W5sE1gzUkH0',
    'Leadership, Command and Management':'5MYGG2KP4yw',
    'Leadership Styles and Situational Judgment':'qQRFe4xHkds',
    'Ethical Decision-Making in Military Service':'wKZGoHVJqu4',
    'International Humanitarian Law and Civilian Protection':'ESwfxu_1Ko0',
    'Lawful Orders, Accountability and Command Responsibility':'wE19Czg96_U',
    'Commander, Deputy and Staff Responsibilities':'vHUi3bbxkp0',
    'Staff Functions, Coordination and Battle Rhythm':'HN_hQx2vsCU',
    'Decision Support, Risk Management and Recommendations':'-Y0aCuqoJD4',
    'Clear Orders, Briefings and Military Writing':'V4ZTEL4hdO4',
    'Listening, Feedback and Difficult Conversations':'Ra6L83XwLko',
    'Cohesion, Inclusion and Conflict Management':'hJGqFAXkcB0',
    'Standards, Discipline and Fair Corrective Action':'XuATmaxSWr4',
    'Personnel Welfare, Mental Health and Resilience':'U_Yh831xz_U',
    'Safeguarding, Harassment Prevention and Duty of Care':'aPxZNAwoE3k',
    'Training Needs, Objectives and Standards':'b7ZZbJaYYE4',
    'Training Management and After-Action Reviews':'OZY7iwhxHHI',
    'Coaching, Mentoring and Developing NCOs':'tz9QCWg7lz8',
    'Logistics Principles and Sustainment Planning':'MNdjLf3Fd-E',
    'Supply, Property Accountability and Anti-Corruption':'NzRs0WQs7aY',
    'Maintenance, Readiness and Responsible Budgeting':'WEseO9Ysmko',
    'Principles of United Nations Peacekeeping':'-WKcM2lIQk4',
    'Protection of Civilians and Conduct in the Field':'lfsIgrqS9Ro',
    'Civil-Military Cooperation and Community Trust':'ZwTDi0GngdU',
    'Leading Organizational Change':'-kNwZtHqkRY',
    'Crisis Leadership and Continuity':'ye4_dz6DTrI',
    'Performance, Lessons Learned and Institutional Improvement':'yCrij1hbFUE'
  };
  function clean(v){return String(v||'').replace(/^\d+\.\s*/, '');}
  window.TIH_TOPIC_VIDEOS=window.TIH_TOPIC_VIDEOS||{};window.TIH_TOPIC_VIDEOS['military-leadership']=map;
  var c=window.COURSES_DB&&window.COURSES_DB['military-leadership'];if(c)c.modules.forEach(function(m){m.lessons.forEach(function(l){var v=map[clean(l.t)];if(v)l.v=v;});});
})();
