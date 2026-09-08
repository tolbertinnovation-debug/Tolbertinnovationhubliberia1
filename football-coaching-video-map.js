/* TIH Football Coaching course — one distinct educational YouTube video per
   topic (no two topics share a video). Course id: football-coaching.
   Every ID below was sourced from a real web search for that specific topic and
   checked against the search-result title for topical fit; none were written
   from memory. Quizzes, exams, the practical projects and the text-only
   graduation resources intentionally carry no video. */
(function () {
  if (typeof COURSES_DB === 'undefined' || !COURSES_DB['football-coaching'] || !COURSES_DB['football-coaching'].modules) return;
  var MAP = {
    /* Module 1: Foundations of Football Coaching */
    "Welcome to the Course": "0mIb1f_un9U",
    "What Does a Football Coach Do?": "WvpxnPkgFss",
    "Qualities of an Effective Coach": "nH_4EwFFmhI",
    "Coaching Philosophy and Style": "JSdVZgO7QgY",
    "Understanding Your Players": "aTR8kA4RpyE",
    "Coaching Ethics and Fair Play": "MILVgF39vgc",
    "Course Roadmap": "fluytAQCjaY",

    /* Module 2: Laws of the Game */
    "The Field of Play": "MT3bzDki5RM",
    "The Ball and Equipment": "_u7ZcmgVxc4",
    "Number of Players and Substitutions": "QF_TL2G72Hk",
    "Fouls and Misconduct": "zpcZYj5B_m8",
    "Offside Explained": "LGrnWHnlUJA",
    "Free Kicks and Penalty Kicks": "G7sWHBlWaxc",
    "Throw-Ins, Goal Kicks and Corners": "eOVmKYYIQnU",
    "The Role of the Referee": "wGbiMFRph2k",

    /* Module 3: Core Technical Skills */
    "Ball Control and First Touch": "KXtGqt_HurQ",
    "Passing Technique": "Q40iC4wbMo0",
    "Dribbling Technique": "Fj3Jsn0Pa7c",
    "Shooting Technique": "vZ1G5mCAf_c",
    "Heading Technique": "_UrN-CGpFfo",
    "Tackling and Defending 1v1": "WqlyKZZxW7w",
    "Goalkeeping Fundamentals": "TF--UuHQGYY",
    "Turning and Receiving Under Pressure": "6WEazVVawpM",

    /* Module 4: Coaching Technical Skills to Players */
    "Teaching Passing to Beginners": "YDeZZWIDhbw",
    "Teaching Dribbling to Beginners": "O-njByyCFk4",
    "Teaching Shooting Technique": "D2vq7nRUGy0",
    "Correcting Common Technical Errors": "td6PgddMOcY",
    "Using Small-Sided Games to Teach Skills": "i8kSenTr6u8",
    "Progressive Drill Design": "lN2gi8fYx7c",
    "Individual Skill Development Plans": "hUYfS6wdY6o",

    /* Module 5: Tactics and Formations */
    "Introduction to Tactics": "d-X7pvrZfpc",
    "Common Formations Explained": "XnkUWuBSL2I",
    "Attacking Principles of Play": "579XxhB_sDE",
    "Defending Principles of Play": "PPejhtYB7AE",
    "Width and Depth": "OzTEOTEVMPg",
    "Pressing and Counter-Pressing": "2E10RewylsA",
    "Transition Moments": "lhCpiy9D1AM",
    "Set-Piece Tactics": "wLapFAtedtg",

    /* Module 6: Physical Fitness and Conditioning */
    "Components of Football Fitness": "Y_EUMAVOCvg",
    "Warm-Up and Cool-Down Routines": "aIj7832WHJo",
    "Speed and Agility Training": "ewfKzqMaK-I",
    "Strength and Endurance Training": "rAczOJt62Ss",
    "Injury Prevention Basics": "RSJIp7e7fyY",
    "Nutrition and Hydration for Players": "ouwFzRKwl3g",
    "Recovery and Rest": "bIhSAida-bk",

    /* Module 7: Youth Player Development */
    "Long-Term Athlete Development": "ujBOOAHEmrE",
    "Coaching Young Children (Ages 5-8)": "r9-5p0Hj74s",
    "Coaching Pre-Teens (Ages 9-12)": "BSobYW-sDHE",
    "Coaching Teenagers (Ages 13-17)": "d_mR21FWJCY",
    "Building Confidence in Young Players": "ZJQIMdHs87E",
    "Managing Parents and Guardians": "36ROSFNaiTk",
    "Fun and Enjoyment in Youth Football": "wqmKJcAJOds",

    /* Module 8: Session Planning and Delivery */
    "Principles of Session Planning": "31s06XHvE1A",
    "Structuring a Training Session": "FBExeZXlWQk",
    "Setting Session Objectives": "7dKoKr3N_PI",
    "Organizing Small-Sided Games": "9ojC_3pd-3k",
    "Managing Time and Space": "g5U_1nveJo4",
    "Giving Effective Feedback": "ASxLpmbLd2k",
    "Adapting Sessions on the Spot": "TpvYIxp2BlI",
    "Evaluating a Training Session": "f4EYMuVZ330",

    /* Module 9: Match Day Management */
    "Pre-Match Preparation": "qOoBANyvnnA",
    "Team Selection and Line-Ups": "lVgp7P9i89w",
    "Managing Substitutions": "qRr7Oyk3h9A",
    "In-Game Tactical Adjustments": "k_CVNMaIesQ",
    "Half-Time Team Talks": "qZHYsjEfD5c",
    "Managing Player Emotions": "jyQH9zi5kA4",
    "Post-Match Review and Feedback": "r4aID4HL2tw",

    /* Module 10: Sports Psychology and Leadership */
    "Motivating Players": "tXLNrOxygI0",
    "Building Team Culture": "YWH7fG_d5XY",
    "Communication as a Coach": "5DfBlFCU9FU",
    "Handling Conflict in a Team": "5dsxPjrHixw",
    "Building Player Confidence": "Mfd6LClYGBk",
    "Leadership Styles in Coaching": "1AZMiq6Mg-k",
    "Dealing with Losses and Setbacks": "7SxEhBFzx98",

    /* Module 11: Safeguarding, Safety and First Aid */
    "Duty of Care in Coaching": "laYAlnLw88w",
    "Safeguarding Children in Sport": "xtAcxaB4Pi8",
    "Recognizing and Responding to Injuries": "YLo7hF-fU-A",
    "Concussion Awareness": "jh9o6Tv-Ksw",
    "Emergency Action Planning": "vKRg0OiqYpY",
    "Safe Coaching Environments": "Jx0Utrla4YI",
    "Recordkeeping and Reporting": "cIG-eR7_-Ok",

    /* Module 12: Coaching as a Career */
    "Coaching Qualifications and Pathways": "zNsWmVXZg88",
    "Building a Coaching Portfolio": "sKPfFf65O7s",
    "Volunteering and Grassroots Coaching": "f1us24tdIIk",
    "Working with Clubs and Academies": "cGyGsSnZ4x4",
    "Coaching Opportunities in Liberia and West Africa": "Ppa4hfGgl7Q",
    "Continuing Education for Coaches": "Kmiuauzc2wM"
  };
  // Normalise a title the same way the player does: strip a numeric prefix,
  // lowercase, and collapse punctuation, so "3.5 Heading Technique" matches.
  function norm(s) {
    return String(s || '').replace(/^\s*\d+(?:\.\d+)*\s*/, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }
  var BY_NORM = {};
  for (var k in MAP) { if (MAP.hasOwnProperty(k)) BY_NORM[norm(k)] = MAP[k]; }
  window.TIH_TOPIC_VIDEOS = window.TIH_TOPIC_VIDEOS || {};
  window.TIH_TOPIC_VIDEOS['football-coaching'] = BY_NORM;
  // Apply straight onto the built course so the player never has to guess.
  COURSES_DB['football-coaching'].modules.forEach(function (m) {
    (m.lessons || []).forEach(function (les) {
      var v = BY_NORM[norm(les.t || les.title || '')];
      if (v) les.v = v;
    });
  });
})();
