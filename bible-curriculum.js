/* TIH Complete Bible School & Christian Ministry Certificate curriculum.
   Merges the three separate Bible courses (bible-foundations, bible-ot,
   bible-nt) into ONE master course on the id `bible-foundations`, rebuilt into
   the full 10-module program, and removes the two extra course ids so only one
   Bible course appears. Every content lesson has a video + printable notes;
   project lessons carry briefs and downloadable ministry resources. Modelled
   on finlit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'bible-foundations';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._bibleMerged) return;

  // Vetted Bible-teaching videos reused from the three original courses.
  var VIDEOS = {
    faith: ['eAvYmE2YYIU', 'ak06MSETeo4'],
    ot: ['ALsluAKBZ-c', 'F4isSyennFo', 'jH_aojNJM3E', 'tp5MIrMZFqo', 'JqOqJlFF_eU', 'xQwnH8th_fs'],
    nt: ['Q0BrP8bqj0c', 'XIb_dCIxzr0', 'CGbNw855ksw', 'ej_6dVdJSIU', 'lXF2nBEkgUE', '5nvVVcYD-0w'],
    herm: ['GQI72THyO5I', 'QxOeq3of3O4'],
    doctrine: ['G_OlRWGLdnw', 'B0O525zOstQ', 'Kq3-bwr25j4'],
    prayer: ['7_CGP-12AE0', '3Dv4-n6OYGI'],
    evangelism: ['Zy2AQlK6C5k', 'e5LBsYy_4EM'],
    leadership: ['AzmYV8GNAIM', 'QJOju5Dw0V0'],
    preaching: ['d0A6Uchb1F8', 'qjbYnCadoGw'],
    capstone: ['FwZejz71UrA', 'MkETkRv9tG8']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Foundations of the Christian Faith', '🕊️', 'faith', 'content', ['Introduction to the Bible', 'The Story of Redemption', 'The Nature of God', 'Salvation by Grace', 'Faith and Repentance', 'Christian Growth']],
    [2, 'Old Testament Survey', '📜', 'ot', 'content', ['The Pentateuch', 'Historical Books', 'Wisdom Literature', 'Major Prophets', 'Minor Prophets', 'Old Testament Themes']],
    [3, 'New Testament Survey', '✝️', 'nt', 'content', ['The Gospels', 'The Life of Jesus Christ', 'The Book of Acts', "Paul's Epistles", 'General Epistles', 'The Book of Revelation']],
    [4, 'Bible Interpretation (Hermeneutics)', '🔍', 'herm', 'content', ['Principles of Bible Interpretation', 'Context and Background', 'Literary Genres', 'Word Studies', 'Applying Scripture', 'Avoiding Misinterpretation']],
    [5, 'Christian Doctrine', '📖', 'doctrine', 'content', ['Doctrine of God', 'Doctrine of Christ', 'Doctrine of the Holy Spirit', 'Doctrine of Salvation', 'Doctrine of the Church', 'Doctrine of the Last Things']],
    [6, 'Prayer & Spiritual Formation', '🙏', 'prayer', 'content', ['Developing a Prayer Life', 'Fasting', 'Worship', 'Spiritual Disciplines', "Hearing God's Voice", 'Spiritual Growth']],
    [7, 'Evangelism & Discipleship', '🌍', 'evangelism', 'content', ['The Great Commission', 'Personal Evangelism', 'Making Disciples', 'Church Planting Basics', 'Missions', 'Community Outreach']],
    [8, 'Christian Leadership & Ministry', '🤝', 'leadership', 'content', ['Servant Leadership', 'Biblical Leadership', 'Church Administration', 'Team Building', 'Conflict Resolution', 'Ministry Ethics']],
    [9, 'Preaching & Teaching', '📢', 'preaching', 'content', ['Preparing Bible Studies', 'Sermon Preparation', 'Public Speaking', 'Teaching Methods', "Children's & Youth Ministry", 'Practical Ministry']],
    [10, 'Capstone Project & Graduation', '🎓', 'capstone', 'projects', ['Ministry Project', 'Bible Teaching Presentation', 'Evangelism Project', 'Final Examination', 'Ministry Portfolio', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { faith: 'the foundations of the Christian faith', ot: 'the Old Testament', nt: 'the New Testament', herm: 'Bible interpretation (hermeneutics)', doctrine: 'Christian doctrine', prayer: 'prayer & spiritual formation', evangelism: 'evangelism & discipleship', leadership: 'Christian leadership & ministry', preaching: 'preaching & teaching', capstone: 'your capstone ministry project' };

  var TEMPLATES = {
    study: '<h4>📥 Guide: Bible Study Preparation</h4><ol><li>Choose the passage &amp; pray</li><li>Observe: what does it say? (who, what, when, where)</li><li>Interpret: what did it mean to the first readers?</li><li>Apply: what does it mean for us today?</li><li>Key verse &amp; discussion questions</li></ol>',
    sermon: '<h4>📥 Template: Sermon</h4><ol><li>Text &amp; main idea (one sentence)</li><li>Introduction (grab attention)</li><li>Point 1 · Point 2 · Point 3 (with Scripture)</li><li>Illustration/application for each</li><li>Conclusion &amp; call to response</li></ol>',
    disciple: '<h4>📥 Manual: Discipleship Plan</h4><ul><li>Who you are discipling &amp; goal</li><li>Foundational topics (assurance, prayer, the Word, church)</li><li>Weekly meeting &amp; Scripture reading</li><li>Accountability &amp; growth steps</li><li>Multiplication: they disciple others</li></ul>',
    prayer: '<h4>📥 Prayer Journal</h4><ul><li>Date &amp; Scripture read</li><li>Praise / thanksgiving</li><li>Confession</li><li>Requests (self &amp; others)</li><li>What God is teaching me</li></ul>',
    ministry: '<h4>📥 Template: Ministry Plan</h4><ul><li>Vision &amp; purpose (Scripture basis)</li><li>Goals &amp; target group</li><li>Activities &amp; schedule</li><li>Team &amp; roles</li><li>Resources &amp; follow-up</li></ul>'
  };
  function templateFor(name) {
    if (/Preparing Bible Studies|Bible Teaching Presentation|Teaching Methods/i.test(name)) return TEMPLATES.study;
    if (/Sermon Preparation/i.test(name)) return TEMPLATES.sermon;
    if (/Making Disciples|Personal Evangelism|Evangelism Project/i.test(name)) return TEMPLATES.disciple;
    if (/Developing a Prayer Life|Spiritual Disciplines|Fasting/i.test(name)) return TEMPLATES.prayer;
    if (/Church Administration|Ministry Project|Practical Ministry|Ministry Portfolio/i.test(name)) return TEMPLATES.ministry;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'biblical knowledge and ministry skills';
    var focus = position % 2 ? 'careful Bible study, understanding and practical application' : 'understanding the truth of Scripture and living and ministering it out';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Bible School · ' + esc(moduleTitle) + '</strong><span>Word &amp; ministry</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes with your Bible open, then complete the two study exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what the Bible teaches about <em>' + esc(name) + '</em>.</li>' +
      '<li>Read the related Scripture passages for yourself and take notes.</li>' +
      '<li>Apply the truth to your own walk with God and your ministry.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this resource.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Look up the key Scriptures on <em>' + esc(name) + '</em>, write what you learn, and share it with your group or mentor.</div>') +
      '<h4>Study exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Read the relevant passages and summarise <em>' + esc(name) + '</em> in your own words.</li>' +
      '<li><strong>Exercise 2:</strong> Write one way you will apply or teach this truth.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision and ministry.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your journey from believer to confident Christian leader and Bible teacher.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on ministry project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical ministry project. Complete it in a real or realistic ministry setting and keep it in your ministry portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Pray and plan the project with a clear Scripture basis.</li><li>Prepare and carry out <em>' + esc(name) + '</em> (a study, sermon, outreach or plan).</li><li>Reflect on what happened, gather feedback, and add it to your portfolio.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A completed ministry work (study, sermon, outreach or plan) for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  var BANK = {
    faith: [
      { q: 'The Bible is divided into two main parts:', opts: ['Law and Gospel', 'The Old Testament and the New Testament', 'Genesis and Revelation', 'Psalms and Proverbs'], correct: 1, exp: 'The Bible has the Old and New Testaments.' },
      { q: 'According to Ephesians 2:8-9, salvation is by:', opts: ['Works alone', 'Grace through faith', 'Good deeds', 'Church membership'], correct: 1, exp: '"By grace you have been saved through faith… not of works."' },
      { q: 'Repentance means:', opts: ['Doing more good works', 'Turning from sin to God', 'Attending church only', 'Nothing'], correct: 1, exp: 'Repentance is a turning from sin toward God.' },
      { q: 'The central theme running through the whole Bible is:', opts: ['Politics', 'God’s plan of redemption in Christ', 'Farming', 'Geography'], correct: 1, exp: 'Scripture unfolds God’s redemption plan, fulfilled in Jesus.' },
      { q: 'Christian growth (discipleship) happens through:', opts: ['Nothing', 'The Word, prayer, fellowship and obedience', 'Isolation', 'Wealth'], correct: 1, exp: 'Believers grow through the Word, prayer, fellowship and obedience.' },
      { q: 'Faith in the Bible is best described as:', opts: ['Blind guessing', 'Trust in God and His Word', 'A feeling only', 'Doing rituals'], correct: 1, exp: 'Biblical faith is trust in God and His promises.' }
    ],
    ot: [
      { q: 'The first five books of the Bible are called the:', opts: ['Gospels', 'Pentateuch', 'Prophets', 'Epistles'], correct: 1, exp: 'Genesis–Deuteronomy are the Pentateuch (the Law).' },
      { q: 'The book of Genesis begins with:', opts: ['The Exodus', 'Creation', 'The kings', 'The exile'], correct: 1, exp: 'Genesis opens with God creating the heavens and the earth.' },
      { q: 'Psalms and Proverbs are part of the:', opts: ['Law', 'Wisdom literature', 'Gospels', 'Epistles'], correct: 1, exp: 'They belong to the Old Testament wisdom books.' },
      { q: 'Isaiah, Jeremiah and Ezekiel are:', opts: ['Minor Prophets', 'Major Prophets', 'Gospels', 'Kings'], correct: 1, exp: 'They are among the Major Prophets.' },
      { q: 'The Exodus records God delivering Israel from slavery in:', opts: ['Babylon', 'Egypt', 'Rome', 'Persia'], correct: 1, exp: 'God delivered Israel out of Egypt through Moses.' },
      { q: 'A major Old Testament theme is God’s:', opts: ['Absence', 'Covenant faithfulness to His people', 'Silence', 'Indifference'], correct: 1, exp: 'The OT highlights God’s covenant and faithfulness.' }
    ],
    nt: [
      { q: 'The four Gospels are Matthew, Mark, Luke and:', opts: ['Acts', 'John', 'Paul', 'James'], correct: 1, exp: 'The Gospels are Matthew, Mark, Luke and John.' },
      { q: 'The book of Acts records:', opts: ['The creation', 'The early church and the spread of the gospel', 'The exile', 'The law'], correct: 1, exp: 'Acts tells the story of the early church and the Spirit’s work.' },
      { q: 'Many New Testament letters (epistles) were written by:', opts: ['Moses', 'Paul', 'David', 'Elijah'], correct: 1, exp: 'Paul wrote many of the NT epistles.' },
      { q: 'The last book of the Bible is:', opts: ['Jude', 'Revelation', 'Acts', 'Romans'], correct: 1, exp: 'Revelation is the final book of the Bible.' },
      { q: 'The Gospels focus on the life, death and resurrection of:', opts: ['Paul', 'Jesus Christ', 'Peter', 'Moses'], correct: 1, exp: 'The Gospels center on Jesus Christ.' },
      { q: 'The Great Commission (Matthew 28) commands believers to:', opts: ['Stay silent', 'Make disciples of all nations', 'Build temples', 'Keep the gospel secret'], correct: 1, exp: 'Jesus commands making disciples of all nations.' }
    ],
    herm: [
      { q: 'Hermeneutics is the study of:', opts: ['Music', 'How to interpret the Bible', 'Church buildings', 'Money'], correct: 1, exp: 'Hermeneutics is the science/art of biblical interpretation.' },
      { q: 'A key principle of interpretation is to read a verse in its:', opts: ['Isolation', 'Context', 'Original language only', 'Any way you like'], correct: 1, exp: 'Context (literary and historical) guards meaning.' },
      { q: 'Recognising literary genre (poetry, narrative, letter) helps you:', opts: ['Ignore the text', 'Interpret it correctly', 'Skip it', 'Change it'], correct: 1, exp: 'Genre shapes how a passage should be read.' },
      { q: 'A word study examines:', opts: ['Nothing', 'The meaning/use of key biblical words', 'Only the page number', 'The cover'], correct: 1, exp: 'Word studies clarify meaning of important terms.' },
      { q: 'Sound interpretation moves from:', opts: ['Application to observation', 'Observation to interpretation to application', 'Guessing to certainty', 'Opinion to fact'], correct: 1, exp: 'Observe → interpret → apply is the basic method.' },
      { q: 'To avoid misinterpretation you should:', opts: ['Ignore context', 'Consider context, genre and the whole of Scripture', 'Read one verse only', 'Use personal feelings only'], correct: 1, exp: 'Let context and Scripture interpret Scripture.' }
    ],
    doctrine: [
      { q: 'Christian doctrine of God includes belief in the:', opts: ['Many gods', 'Trinity — one God in three persons', 'No God', 'A distant god only'], correct: 1, exp: 'Historic Christianity teaches one God: Father, Son and Spirit.' },
      { q: 'The doctrine of Christ affirms Jesus is:', opts: ['Only a man', 'Fully God and fully man', 'An angel', 'A myth'], correct: 1, exp: 'Christ is both fully divine and fully human.' },
      { q: 'The Holy Spirit is:', opts: ['A force only', 'God, the third person of the Trinity', 'An angel', 'A feeling'], correct: 1, exp: 'The Spirit is a divine person, not merely a force.' },
      { q: 'The doctrine of salvation (soteriology) centers on:', opts: ['Human effort', 'God saving sinners through Christ', 'Good luck', 'Wealth'], correct: 1, exp: 'Salvation is God’s work through Jesus Christ.' },
      { q: 'The doctrine of the Church (ecclesiology) concerns:', opts: ['A building only', 'The body of believers and its life/mission', 'A business', 'A government'], correct: 1, exp: 'The Church is the community of believers.' },
      { q: 'The doctrine of last things (eschatology) deals with:', opts: ['The past only', 'Christ’s return, resurrection and eternity', 'Farming', 'Politics'], correct: 1, exp: 'Eschatology studies future/eternal realities.' }
    ],
    prayer: [
      { q: 'Prayer is fundamentally:', opts: ['A ritual only', 'Communication and relationship with God', 'A performance', 'Optional and pointless'], correct: 1, exp: 'Prayer is talking with and listening to God.' },
      { q: 'Fasting in the Bible is usually paired with:', opts: ['Feasting', 'Prayer and seeking God', 'Sleeping', 'Nothing'], correct: 1, exp: 'Fasting accompanies focused prayer and seeking God.' },
      { q: 'Worship is:', opts: ['Only singing', 'Honouring God with our whole lives', 'A concert', 'A duty only'], correct: 1, exp: 'Worship is giving God worth in all of life.' },
      { q: 'Spiritual disciplines include:', opts: ['Nothing', 'Prayer, Bible reading, fasting and worship', 'Only giving', 'Only fasting'], correct: 1, exp: 'Disciplines are practices that help us grow in Christ.' },
      { q: 'Believers grow spiritually mainly by:', opts: ['Isolation', 'Abiding in Christ through Word, prayer and obedience', 'Wealth', 'Fame'], correct: 1, exp: 'Growth comes from abiding in Christ.' },
      { q: 'Hearing God’s voice is tested by:', opts: ['Feelings alone', 'Agreement with Scripture', 'Popularity', 'Dreams only'], correct: 1, exp: 'God never contradicts His written Word.' }
    ],
    evangelism: [
      { q: 'Evangelism means:', opts: ['Keeping faith private', 'Sharing the good news of Jesus with others', 'Judging people', 'Nothing'], correct: 1, exp: 'Evangelism is sharing the gospel of Jesus.' },
      { q: 'Discipleship (making disciples) involves:', opts: ['A one-time event', 'Helping believers grow and follow Jesus over time', 'Only baptism', 'Nothing after conversion'], correct: 1, exp: 'Discipleship is ongoing growth in following Christ.' },
      { q: 'The Great Commission is found in:', opts: ['Genesis 1', 'Matthew 28:18-20', 'Psalm 23', 'Exodus 20'], correct: 1, exp: 'Matthew 28:18-20 records the Great Commission.' },
      { q: 'Missions refers to:', opts: ['Staying home only', 'Taking the gospel to other places/peoples', 'Building only', 'Politics'], correct: 1, exp: 'Missions carries the gospel across cultures and places.' },
      { q: 'Effective personal evangelism includes:', opts: ['Arguing to win', 'Sharing your testimony and the gospel with love', 'Forcing people', 'Hiding your faith'], correct: 1, exp: 'Share the gospel humbly and lovingly.' },
      { q: 'Community outreach serves people while:', opts: ['Ignoring the gospel', 'Showing Christ’s love and sharing the good news', 'Seeking fame', 'Doing nothing'], correct: 1, exp: 'Outreach shows love and opens doors for the gospel.' }
    ],
    leadership: [
      { q: 'Jesus taught that the greatest leader is:', opts: ['The most powerful', 'The servant of all', 'The richest', 'The loudest'], correct: 1, exp: 'Jesus modelled and taught servant leadership.' },
      { q: 'Biblical leadership is based on:', opts: ['Control and pride', 'Character, integrity and service', 'Wealth', 'Fame'], correct: 1, exp: 'Godly leadership flows from character and service.' },
      { q: 'Church administration helps a ministry:', opts: ['Waste resources', 'Run in an orderly, faithful way', 'Ignore people', 'Avoid stewardship'], correct: 1, exp: 'Good administration stewards people and resources well.' },
      { q: 'Handling conflict biblically means:', opts: ['Ignoring it', 'Addressing it with truth, grace and reconciliation', 'Taking revenge', 'Gossiping'], correct: 1, exp: 'Scripture calls for truthful, gracious reconciliation.' },
      { q: 'Ministry ethics require leaders to be:', opts: ['Dishonest', 'Trustworthy, pure and accountable', 'Proud', 'Secretive'], correct: 1, exp: 'Leaders must be above reproach and accountable.' },
      { q: 'Team building in ministry values:', opts: ['One person doing all', 'Using each member’s gifts together', 'Excluding people', 'Competition'], correct: 1, exp: 'The body ministers together using varied gifts.' }
    ],
    preaching: [
      { q: 'A good sermon is built on:', opts: ['Opinion only', 'A biblical text and its main idea', 'Random stories', 'Politics'], correct: 1, exp: 'Faithful preaching explains and applies the text.' },
      { q: 'Preparing a Bible study should begin with:', opts: ['Your conclusion', 'Prayer and studying the passage in context', 'Guessing', 'Someone else’s notes only'], correct: 1, exp: 'Start with prayer and careful study of the text.' },
      { q: 'Good teaching aims to:', opts: ['Impress people', 'Help hearers understand and apply Scripture', 'Confuse', 'Entertain only'], correct: 1, exp: 'Teaching serves understanding and obedience.' },
      { q: 'Children’s and youth ministry should be:', opts: ['An afterthought', 'Age-appropriate, engaging and Bible-centred', 'Only games', 'Only lectures'], correct: 1, exp: 'Reach young people with clear, engaging, biblical teaching.' },
      { q: 'A sermon should end with:', opts: ['No point', 'A clear application/call to respond', 'A new topic', 'Silence only'], correct: 1, exp: 'Move hearers to respond to God’s Word.' },
      { q: 'Public speaking in ministry is helped by:', opts: ['No preparation', 'Preparation, clarity and dependence on God', 'Reading fast', 'Mumbling'], correct: 1, exp: 'Prepare well and rely on God for clear delivery.' }
    ]
  };

  function bankKey(skill) {
    var map = { faith: 'faith', ot: 'ot', nt: 'nt', herm: 'herm', doctrine: 'doctrine', prayer: 'prayer', evangelism: 'evangelism', leadership: 'leadership', preaching: 'preaching', capstone: 'faith' };
    return map[skill] || 'faith';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.faith;
    var mixed = BANK.faith.concat(BANK.ot, BANK.nt, BANK.herm, BANK.doctrine, BANK.prayer, BANK.evangelism, BANK.leadership, BANK.preaching);
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
    var pool = VIDEOS[skill] || VIDEOS.faith;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'bib-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('faith', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the certificate and unlock your TIH Bible School Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Final/i.test(name);
        var aid = 'bib-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, big ? 15 : 8);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: (big ? 15 : 8) + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this assessment, then review every answer explanation and the related Scriptures.</p></div>';
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
      var pqid = 'bib-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and the Scriptures, complete the two study exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete Bible School & Christian Ministry Certificate',
    shortDesc: 'One complete 10-module Bible school program from new believer to confident Christian leader and Bible teacher: foundations of the faith, Old & New Testament surveys, hermeneutics, Christian doctrine, prayer & spiritual formation, evangelism & discipleship, leadership & ministry, preaching & teaching, and a capstone ministry project with a Certificate of Completion.',
    category: 'Bible School & Ministry',
    icon: ex.icon || '🕊️',
    gradient: ex.gradient || 'linear-gradient(135deg,#1565D8,#0B1F3A)',
    instructor: ex.instructor || 'TIH Bible School',
    instructorTitle: ex.instructorTitle || 'Bible School & Ministry Faculty',
    instructorBio: ex.instructorBio || 'The TIH Bible School faculty trains believers in the Word of God for effective Christian living and ministry.',
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH Bible School students',
    duration: '60h+',
    level: 'Beginner → Ministry Leader',
    price: ex.price || '$3',
    origPrice: ex.origPrice || '$95',
    isFree: (ex.isFree === true),
    badge: ex.badge || 'premium',
    certId: 'TIH-2026-BIBLE-0001',
    learn: [
      'Understand the whole Bible — Old and New Testaments — and its story of redemption',
      'Interpret Scripture faithfully using sound hermeneutics',
      'Know core Christian doctrine (God, Christ, Spirit, salvation, church, last things)',
      'Grow in prayer, worship and spiritual formation',
      'Do evangelism and discipleship and lead in ministry with integrity',
      'Prepare and deliver Bible studies and sermons, and build a ministry portfolio'
    ],
    requirements: [
      'A Bible (any reliable translation) and a teachable heart',
      'A notebook or device for study notes and journaling',
      'A desire to grow as a believer and serve in ministry'
    ],
    about: [
      'This is the complete TIH Bible School & Christian Ministry Certificate — the three former Bible courses combined into one full ten-module program.',
      'It follows the core subjects taught in Bible colleges worldwide: Bible surveys, interpretation, doctrine, spiritual formation, evangelism, leadership, and preaching and teaching. Every content lesson has a video and printable notes; downloadable resources include Bible study guides, sermon templates, discipleship manuals, prayer journals and ministry planning tools.',
      'Recommended resources: The Holy Bible, a Study Bible, Bible dictionary/atlas/concordance, Blue Letter Bible and the YouVersion Bible App. A capstone ministry project builds your portfolio, and after the graduation assessment you receive a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _bibleMerged: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  // Merge the three Bible courses into one: remove the two extra course ids so
  // only the single combined Bible School certificate appears in the hub.
  ['bible-ot', 'bible-nt'].forEach(function (extraId) {
    if (COURSES_DB[extraId]) delete COURSES_DB[extraId];
    if (typeof LESSON_CONTENT !== 'undefined' && LESSON_CONTENT[extraId]) delete LESSON_CONTENT[extraId];
    if (typeof PRACTICE_TESTS !== 'undefined' && PRACTICE_TESTS[extraId]) delete PRACTICE_TESTS[extraId];
  });

  if (typeof console !== 'undefined' && console.log) {
    console.log('[BIBLE] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' (bible-ot/bible-nt removed)');
  }
})();
