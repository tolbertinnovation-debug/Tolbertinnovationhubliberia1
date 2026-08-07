/* TIH Complete WASSCE Christian Religious Studies (CRS) Preparation Course.
   Builds COURSES_DB['wassce-crs'] directly with the full 10-module WAEC CRS
   structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version.
   Aligned to the WAEC Christian Religious Studies syllabus. Modelled on
   wassce-homeeconomics-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-crs';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceCRSFull) return;

  // Vetted Bible / Christian Studies videos reused from the TIH Bible course.
  // Content, notes and quizzes are fully CRS-specific.
  var VIDEOS = {
    intro: ['yEtR2ouw76c'],
    oldtestament: ['NR29yHJxnxI'],
    newtestament: ['Kahy3Hddejw'],
    earlychurch: ['onHIpArMENU'],
    doctrines: ['ez-PL1vN-Is'],
    ethics: ['4dBSGzaJnm0'],
    churchsociety: ['1mwYFj-esR0'],
    interpretation: ['NPP3hJFj7z0'],
    exampractice: ['yEtR2ouw76c'],
    final: ['yEtR2ouw76c']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Christian Religious Studies', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE CRS Exam', 'Exam Structure & Marking Scheme', 'Introduction to Christian Religious Studies', 'Importance of Biblical Studies', 'Study Strategies']],
    [2, 'The Old Testament', '📜', 'oldtestament', 'content', ['Creation and the Fall of Man', "God's Covenant with Noah", 'Abraham and the Covenant', 'Isaac, Jacob, and Joseph', 'Moses and the Exodus', 'The Ten Commandments', 'The Judges of Israel', 'The Kings of Israel (Saul, David & Solomon)', 'The Prophets', 'Lessons from the Old Testament']],
    [3, 'The New Testament', '✝️', 'newtestament', 'content', ['Background to the New Testament', 'Birth and Early Life of Jesus Christ', 'Baptism and Temptation of Jesus', 'The Ministry of Jesus', 'The Miracles of Jesus', 'The Parables of Jesus', 'The Sermon on the Mount', 'The Death and Resurrection of Jesus', 'The Great Commission', 'The Second Coming of Christ']],
    [4, 'The Early Church', '⛪', 'earlychurch', 'content', ['The Day of Pentecost', 'The Apostles', 'The Missionary Journeys of Paul', 'The Growth of the Early Church', 'Persecution of Christians', 'Church Leadership', 'Christian Fellowship', 'Lessons from the Early Church']],
    [5, 'Christian Faith & Doctrines', '🙏', 'doctrines', 'content', ['The Holy Trinity', 'Salvation', 'Faith and Grace', 'Baptism', 'Holy Communion', 'Prayer', 'The Holy Spirit', 'Heaven, Hell, and Eternal Life']],
    [6, 'Christian Ethics & Moral Living', '❤️', 'ethics', 'content', ['Love and Compassion', 'Honesty and Integrity', 'Forgiveness', 'Justice and Peace', 'Humility', 'Stewardship', 'Leadership and Service', 'Christian Family Life']],
    [7, 'The Church & Society', '🌍', 'churchsociety', 'content', ['The Mission of the Church', 'Evangelism', 'Worship and Sacraments', 'Christian Denominations', 'The Church and Social Responsibility', 'Christian Response to Contemporary Issues', 'Religious Tolerance', 'Community Development']],
    [8, 'Bible Interpretation & Examination Skills', '🔎', 'interpretation', 'content', ['Understanding Biblical Passages', 'Biblical Themes', 'Memory Verses', 'Essay Writing', 'Objective Test Strategies', 'Theory Question Techniques', 'Common WAEC Examination Questions', 'Time Management']],
    [9, 'Examination Practice', '📝', 'exampractice', 'content', ['Objective Test Practice', 'Theory Question Practice', 'Bible Passage Analysis', 'Past WAEC Questions', 'Mock Examinations', 'Performance Review']],
    [10, 'Final Revision & Graduation', '🏆', 'final', 'content', ['Complete CRS Revision', 'Key Bible Characters Review', 'Key Doctrines Review', 'Full Mock Examination', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests" or "Questions".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE CRS exam', oldtestament: 'the Old Testament', newtestament: 'the New Testament', earlychurch: 'the Early Church', doctrines: 'Christian faith & doctrines', ethics: 'Christian ethics & moral living', churchsociety: 'the Church & society', interpretation: 'Bible interpretation & exam skills', exampractice: 'examination practice', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    oldtestament: '<h4>📥 Guide: The Old Testament</h4><ul><li><strong>Creation &amp; the Fall:</strong> God creates the world; Adam and Eve disobey (Genesis 1–3).</li><li><strong>The Patriarchs:</strong> Abraham, Isaac, Jacob and Joseph — God’s covenant people.</li><li><strong>The Exodus:</strong> Moses leads Israel out of Egypt; God gives the Ten Commandments.</li><li><strong>Judges &amp; Kings:</strong> leaders like Deborah and Gideon; kings Saul, David and Solomon.</li><li><strong>The Prophets</strong> (e.g. Elijah, Isaiah, Amos) called Israel back to God and justice.</li></ul>',
    newtestament: '<h4>📥 Guide: The New Testament</h4><ul><li><strong>The Gospels</strong> (Matthew, Mark, Luke, John) record the life and teaching of Jesus.</li><li><strong>Jesus’ ministry:</strong> preaching the Kingdom of God, miracles and parables.</li><li><strong>The Sermon on the Mount</strong> (Matthew 5–7) includes the Beatitudes.</li><li><strong>Death &amp; Resurrection:</strong> crucified, buried, risen on the third day.</li><li><strong>The Great Commission:</strong> "Go and make disciples of all nations" (Matthew 28:19).</li></ul>',
    earlychurch: '<h4>📥 Guide: The Early Church</h4><ul><li><strong>Pentecost:</strong> the Holy Spirit came upon the disciples (Acts 2); the Church was born.</li><li><strong>The Apostles</strong> spread the gospel; Peter and Paul were leading figures.</li><li><strong>Paul’s missionary journeys</strong> planted churches across the Roman world.</li><li><strong>Persecution:</strong> early Christians suffered yet the Church grew.</li><li><strong>Fellowship:</strong> believers shared teaching, breaking of bread, prayer and possessions.</li></ul>',
    doctrines: '<h4>📥 Guide: Christian Faith & Doctrines</h4><ul><li><strong>The Trinity:</strong> one God in three persons — Father, Son and Holy Spirit.</li><li><strong>Salvation:</strong> deliverance from sin through faith in Jesus Christ (grace).</li><li><strong>Sacraments:</strong> Baptism and Holy Communion (the Lord’s Supper).</li><li><strong>The Holy Spirit</strong> guides, comforts and empowers believers.</li><li><strong>Prayer</strong> is communication with God; the Lord’s Prayer is the model.</li></ul>',
    ethics: '<h4>📥 Guide: Christian Ethics & Moral Living</h4><ul><li><strong>Love:</strong> love God and love your neighbour (the greatest commandments).</li><li><strong>Forgiveness:</strong> forgive others as God forgives us.</li><li><strong>Honesty &amp; integrity:</strong> truthfulness in word and deed.</li><li><strong>Justice, peace &amp; humility</strong> reflect Christ’s example.</li><li><strong>Stewardship &amp; service:</strong> use gifts and resources responsibly for others.</li></ul>',
    churchsociety: '<h4>📥 Guide: The Church & Society</h4><ul><li><strong>Mission of the Church:</strong> worship, evangelism, fellowship, teaching and service.</li><li><strong>Evangelism:</strong> sharing the good news of Jesus Christ.</li><li><strong>Worship &amp; sacraments</strong> express and nourish faith.</li><li><strong>Social responsibility:</strong> the Church cares for the poor, sick and needy.</li><li><strong>Religious tolerance</strong> respects others while living out one’s faith.</li></ul>',
    interpretation: '<h4>📥 Template: CRS Essay & Bible-Study Skills</h4><ol><li><strong>Read the passage carefully</strong> and note its context.</li><li><strong>Narrate/explain</strong> the account accurately (the "text" part of WAEC questions).</li><li><strong>Apply it:</strong> draw lessons and relate them to life today (the "application" part).</li><li><strong>Use references</strong> (book, chapter) and short memory verses to support points.</li><li><strong>Answer the question set</strong> — divide time between the text and the application.</li></ol>'
  };
  function templateFor(name, skill) {
    if (skill === 'oldtestament' || /Creation|Covenant|Abraham|Moses|Exodus|Commandments|Judges|Kings|Prophets/i.test(name)) return TEMPLATES.oldtestament;
    if (skill === 'newtestament' || /Jesus|Ministry|Miracles|Parables|Sermon|Resurrection|Great Commission|Second Coming/i.test(name)) return TEMPLATES.newtestament;
    if (skill === 'earlychurch' || /Pentecost|Apostles|Paul|Early Church|Persecution|Fellowship/i.test(name)) return TEMPLATES.earlychurch;
    if (skill === 'doctrines' || /Trinity|Salvation|Faith|Grace|Baptism|Communion|Holy Spirit|Prayer|Eternal Life/i.test(name)) return TEMPLATES.doctrines;
    if (skill === 'ethics' || /Love|Honesty|Forgiveness|Justice|Humility|Stewardship|Service|Family Life/i.test(name)) return TEMPLATES.ethics;
    if (skill === 'churchsociety' || /Mission of the Church|Evangelism|Worship|Denominations|Social Responsibility|Tolerance|Community/i.test(name)) return TEMPLATES.churchsociety;
    if (skill === 'interpretation' || /Biblical Passages|Biblical Themes|Memory Verses|Essay Writing|Examination/i.test(name)) return TEMPLATES.interpretation;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE CRS skills';
    var focus = position % 2 ? 'clear scripture, key references and timed practice' : 'understanding the passage and applying its lessons to life and WAEC-style questions';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE CRS · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, read the relevant Bible passages and notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Know the account/teaching of <em>' + esc(name) + '</em> accurately, with its Bible references.</li>' +
      '<li>Draw the lessons/applications examiners reward (WAEC asks for the text AND its application).</li>' +
      '<li>Practise with past-question-style items, narrating the passage then applying it to life today.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Read the passage on <em>' + esc(name) + '</em> and answer one WAEC past question, checking it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Summarise the passage/teaching of <em>' + esc(name) + '</em> with references in your CRS notebook.</li>' +
      '<li><strong>Exercise 2:</strong> Write a short answer under exam timing (text + application) and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE CRS preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this Bible-study/essay task — narrate the passage accurately and draw its lessons — then review it against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE CRS exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A church only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'Christian Religious Studies is based mainly on the:', opts: ['Quran', 'Bible', 'A newspaper', 'A textbook only'], correct: 1, exp: 'CRS studies the Bible and Christian teaching.' },
      { q: 'The Bible is divided into the Old Testament and the:', opts: ['New Testament', 'Middle Testament', 'Last Chapter', 'Appendix'], correct: 0, exp: 'The Bible has the Old and New Testaments.' },
      { q: 'WAEC CRS questions usually require you to state the text AND its:', opts: ['Price', 'Application/lessons for today', 'Length', 'Colour'], correct: 1, exp: 'WAEC rewards accurate narration plus application.' },
      { q: 'In the essay paper, marks are earned mainly for:', opts: ['Length only', 'Accurate scripture, references and clear application', 'Neat handwriting only', 'Guessing'], correct: 1, exp: 'Accurate text and application score marks.' },
      { q: 'A good study strategy for CRS is to:', opts: ['Never read the Bible', 'Read the set passages and practise past questions', 'Only memorise dates', 'Skip revision'], correct: 1, exp: 'Read the prescribed passages and practise answers.' }
    ],
    oldtestament: [
      { q: 'According to Genesis, God created the world in:', opts: ['Six days, resting on the seventh', 'One hour', 'A year', 'No time'], correct: 0, exp: 'Creation took six days; God rested on the seventh.' },
      { q: 'God gave the Ten Commandments to:', opts: ['Abraham', 'Moses (on Mount Sinai)', 'David', 'Noah'], correct: 1, exp: 'Moses received the Ten Commandments at Mount Sinai.' },
      { q: 'The father of the Israelite nation, called by God, was:', opts: ['Adam', 'Abraham', 'Saul', 'Joseph'], correct: 1, exp: 'Abraham is the father of the faith/nation of Israel.' },
      { q: 'Who led the Israelites out of slavery in Egypt?', opts: ['Moses', 'Solomon', 'Elijah', 'Isaac'], correct: 0, exp: 'Moses led the Exodus from Egypt.' },
      { q: 'The wise king who built the first temple in Jerusalem was:', opts: ['Saul', 'David', 'Solomon', 'Samuel'], correct: 2, exp: 'Solomon, David’s son, built the temple.' },
      { q: 'The prophets in the Old Testament mainly called Israel to:', opts: ['Worship idols', 'Return to God and practise justice', 'Start wars', 'Ignore the poor'], correct: 1, exp: 'Prophets called for repentance, faithfulness and justice.' }
    ],
    newtestament: [
      { q: 'Jesus Christ was born in:', opts: ['Nazareth', 'Bethlehem', 'Jerusalem', 'Rome'], correct: 1, exp: 'Jesus was born in Bethlehem.' },
      { q: 'The first four books of the New Testament are called the:', opts: ['Epistles', 'Gospels', 'Psalms', 'Prophets'], correct: 1, exp: 'Matthew, Mark, Luke and John are the Gospels.' },
      { q: 'The Sermon on the Mount begins with the:', opts: ['Ten Commandments', 'Beatitudes', 'Lord’s Prayer only', 'Creation story'], correct: 1, exp: 'The Beatitudes open the Sermon on the Mount.' },
      { q: 'A parable is:', opts: ['A miracle', 'An earthly story with a heavenly/spiritual meaning', 'A prophecy', 'A psalm'], correct: 1, exp: 'Parables teach spiritual truths through everyday stories.' },
      { q: 'Jesus rose from the dead on the:', opts: ['First day', 'Third day', 'Seventh day', 'Fortieth day'], correct: 1, exp: 'Jesus rose on the third day.' },
      { q: 'The Great Commission is the command to:', opts: ['Build temples', 'Go and make disciples of all nations', 'Keep silent', 'Stay home'], correct: 1, exp: 'Matthew 28:19 — make disciples of all nations.' }
    ],
    earlychurch: [
      { q: 'The Christian Church is said to have begun on the day of:', opts: ['Christmas', 'Pentecost', 'Passover', 'Easter'], correct: 1, exp: 'At Pentecost the Holy Spirit came upon the disciples (Acts 2).' },
      { q: 'The apostle known for his missionary journeys to the Gentiles was:', opts: ['Peter', 'Paul', 'John', 'Judas'], correct: 1, exp: 'Paul made several missionary journeys.' },
      { q: 'At Pentecost, the disciples were filled with the:', opts: ['Holy Spirit', 'Fear only', 'Riches', 'Anger'], correct: 0, exp: 'The Holy Spirit empowered them to preach.' },
      { q: 'Despite persecution, the early Church:', opts: ['Disappeared', 'Grew and spread', 'Stopped worship', 'Became silent'], correct: 1, exp: 'The Church grew rapidly despite persecution.' },
      { q: 'A mark of early Christian fellowship (Acts 2) was:', opts: ['Selfishness', 'Sharing, teaching, breaking of bread and prayer', 'Idol worship', 'Avoiding one another'], correct: 1, exp: 'They devoted themselves to teaching, fellowship, bread and prayer.' },
      { q: 'Peter is best known as:', opts: ['A tax collector only', 'A leading apostle who preached at Pentecost', 'A Roman soldier', 'A prophet of the Old Testament'], correct: 1, exp: 'Peter was a leading apostle and preached at Pentecost.' }
    ],
    doctrines: [
      { q: 'The Holy Trinity refers to God as:', opts: ['Three gods', 'One God in three persons: Father, Son and Holy Spirit', 'Two persons', 'A spirit only'], correct: 1, exp: 'One God in three persons.' },
      { q: 'Christians believe salvation comes through:', opts: ['Good works alone', 'Faith in Jesus Christ (by grace)', 'Money', 'Nothing'], correct: 1, exp: 'Salvation is by grace through faith in Christ.' },
      { q: 'Two sacraments recognised by most churches are Baptism and:', opts: ['Holy Communion', 'Fasting only', 'Tithing only', 'Singing only'], correct: 0, exp: 'Baptism and Holy Communion (the Lord’s Supper).' },
      { q: 'The model prayer taught by Jesus is the:', opts: ['Lord’s Prayer', 'Ten Commandments', 'Beatitudes', 'Apostles only'], correct: 0, exp: 'The Lord’s Prayer (Our Father) is the model prayer.' },
      { q: 'The Holy Spirit is described as the believer’s:', opts: ['Enemy', 'Helper/Comforter and guide', 'Judge only', 'Servant'], correct: 1, exp: 'The Spirit comforts, guides and empowers believers.' },
      { q: 'Grace is best described as:', opts: ['A payment earned', 'God’s unmerited favour', 'A punishment', 'A tax'], correct: 1, exp: 'Grace is God’s undeserved favour.' }
    ],
    ethics: [
      { q: 'The two greatest commandments are to love God and to:', opts: ['Love your neighbour', 'Hate enemies', 'Gain wealth', 'Stay silent'], correct: 0, exp: 'Love God and love your neighbour.' },
      { q: 'Jesus taught that we should forgive others:', opts: ['Never', 'Generously (e.g. seventy times seven)', 'Once only', 'Only the rich'], correct: 1, exp: 'Forgive repeatedly, as God forgives us.' },
      { q: 'Christian stewardship means:', opts: ['Wasting resources', 'Using God-given gifts and resources responsibly', 'Hoarding', 'Ignoring others'], correct: 1, exp: 'Stewardship is responsible use of gifts/resources.' },
      { q: 'A Christian leader is called to:', opts: ['Dominate others', 'Serve others humbly (servant leadership)', 'Seek only power', 'Ignore the needy'], correct: 1, exp: 'Jesus modelled servant leadership.' },
      { q: 'Honesty and integrity mean being:', opts: ['Deceitful', 'Truthful in word and action', 'Corrupt', 'Unreliable'], correct: 1, exp: 'Integrity is truthfulness and consistency.' },
      { q: 'The Good Samaritan parable teaches:', opts: ['Selfishness', 'Compassion to anyone in need', 'Revenge', 'Greed'], correct: 1, exp: 'It teaches loving compassion for any neighbour in need.' }
    ],
    churchsociety: [
      { q: 'Evangelism means:', opts: ['Hiding the gospel', 'Sharing the good news of Jesus Christ', 'Building only', 'Fund-raising only'], correct: 1, exp: 'Evangelism spreads the gospel.' },
      { q: 'The social responsibility of the Church includes:', opts: ['Ignoring the poor', 'Caring for the poor, sick and needy', 'Only collecting money', 'Avoiding society'], correct: 1, exp: 'The Church serves the needy in society.' },
      { q: 'Religious tolerance means:', opts: ['Forcing beliefs on others', 'Respecting others’ beliefs while holding your own', 'Hating other faiths', 'Banning worship'], correct: 1, exp: 'Tolerance respects others while living out one’s faith.' },
      { q: 'Worship in the Church includes:', opts: ['Prayer, praise, teaching and the sacraments', 'Only sleeping', 'Only eating', 'Nothing'], correct: 0, exp: 'Worship involves prayer, praise, the Word and sacraments.' },
      { q: 'Different Christian groups (Catholic, Protestant, etc.) are called:', opts: ['Denominations', 'Empires', 'Tribes only', 'Companies'], correct: 0, exp: 'They are Christian denominations.' },
      { q: 'The Church can help national development by:', opts: ['Encouraging honesty, education and service', 'Promoting corruption', 'Ignoring communities', 'Causing conflict'], correct: 0, exp: 'The Church promotes moral values, education and service.' }
    ],
    examstrat: [
      { q: 'A CRS essay should:', opts: ['Ignore the question', 'Narrate the passage accurately AND apply its lessons', 'Only list names', 'Be one sentence'], correct: 1, exp: 'WAEC wants accurate text plus application.' },
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'Bible references in your answers:', opts: ['Waste time', 'Strengthen the answer and earn marks', 'Are banned', 'Do not matter'], correct: 1, exp: 'Accurate references support and strengthen points.' },
      { q: 'In the objective paper, if unsure you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'A common CRS mistake is:', opts: ['Applying the passage', 'Narrating the story but forgetting the application', 'Using references', 'Planning the essay'], correct: 1, exp: 'Missing the application loses marks.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', oldtestament: 'oldtestament', newtestament: 'newtestament', earlychurch: 'earlychurch', doctrines: 'doctrines', ethics: 'ethics', churchsociety: 'churchsociety', interpretation: 'examstrat', exampractice: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.oldtestament, BANK.newtestament, BANK.earlychurch, BANK.doctrines, BANK.ethics, BANK.churchsociety, BANK.examstrat);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.intro;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'wcr-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE CRS Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE CRS Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the Bible passage analysis and examination practice.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your Bible, your teacher’s guidance and WAEC past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment|Mock Examinations/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wcr-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'assessment') + ' under timed, exam-like conditions, then review every answer explanation.</p></div>';
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
      var pqid = 'wcr-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Christian Religious Studies (CRS): Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Christian Religious Studies preparation course aligned to the WAEC syllabus: the Old Testament, the New Testament, the Early Church, Christian faith & doctrines, Christian ethics, the Church & society, Bible interpretation & exam skills, examination practice, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '✝️',
    gradient: 'linear-gradient(135deg,#6B2FB0,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Christian Religious Studies examination with clear Bible study, key references, application of lessons and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '50h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-CRS',
    learn: [
      'Understand the WAEC CRS exam structure and marking scheme',
      'Know key Old Testament people, events and covenants',
      'Understand the life, teaching, death and resurrection of Jesus Christ',
      'Explain the Early Church, Christian doctrines and the sacraments',
      'Apply Christian ethics and moral living to real situations',
      'Interpret Bible passages and write high-scoring CRS essays (text + application)'
    ],
    requirements: ['A phone or computer with internet', 'A Bible (any standard version)', 'A CRS notebook for passages, references and lessons', 'Commitment to reading and timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE Christian Religious Studies preparation course, organised into ten modules aligned to the WAEC CRS syllabus and examination structure (objective and essay/theory).',
      'Every content lesson has a video and printable notes with key Bible references; downloadable resources include Bible study guides, memory-verse booklets and lesson summaries. The course ends with a full mock examination and a Certificate of Completion.',
      'CRS answers must narrate the passage accurately AND apply its lessons. Use this course together with the official WAEC syllabus, your Bible, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-crs',
    _wassceCRSFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-CRS] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
