/* TIH Human Rights and International Humanitarian Law course curriculum.
   Rebuilds COURSES_DB['human-rights-ihl'] into a full 14-module, beginner-to-
   advanced programme: foundations of human rights, history and sources, the
   International Bill of Rights, thematic treaties, regional systems, UN
   machinery, introduction to international humanitarian law, the core IHL
   principles, protected persons and objects, means and methods of warfare,
   accountability and international criminal law, human rights in practice, six
   practical projects, and a final assessments and graduation module.

   Every content lesson pairs an authored teaching note (human-rights-ihl-notes.js,
   rendered through TIH_LESSON_NOTES) with its own distinct educational video
   (human-rights-ihl-video-map.js) and a 3-question practice quiz drawn from
   human-rights-ihl-topic-quizzes.js.

   Assessments deliberately do NOT reuse practice questions. Each content topic
   carries a fourth, reserved question in TIH_RESERVED_QUIZZES; the module
   quizzes, midterm, final and graduation assessment draw only from that reserved
   pool, through a forward-only cursor with a global issued set, so a learner
   meets every assessment question for the first time in the assessment and no
   two assessments in the course ever share an item.
   Modelled on football-coaching-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB['human-rights-ihl'] || COURSES_DB['human-rights-ihl']._hrilFullBuilt) return;

  // [moduleNum, title, icon, [lesson names]]
  var curriculum = [
    [1, "Foundations of Human Rights", "\u2696\ufe0f", ["Welcome to the Course", "What Are Human Rights?", "Philosophical Foundations of Rights", "Characteristics of Human Rights", "Generations of Human Rights", "Rights, Duties and Responsibilities", "Course Roadmap"]],
    [2, "History and Sources of Human Rights Law", "\ud83d\udcdc", ["The Origins of Human Rights", "The Universal Declaration of Human Rights", "Sources of International Law", "Treaties and How They Work", "Customary International Law and Jus Cogens", "Reservations, Derogations and Limitations", "Ratification and Domestication"]],
    [3, "The International Bill of Human Rights", "\ud83d\udcd8", ["Introduction to the International Bill of Rights", "The ICCPR: Civil and Political Rights", "The ICESCR: Economic, Social and Cultural Rights", "Progressive Realisation and Minimum Core Obligations", "Equality and Non-Discrimination", "The Right to Life", "Freedom from Torture and Ill-Treatment"]],
    [4, "Thematic Human Rights Treaties", "\ud83d\udcda", ["Eliminating Racial Discrimination (ICERD)", "Women's Rights (CEDAW)", "The Rights of the Child (CRC)", "The Convention Against Torture (CAT)", "The Rights of Persons with Disabilities (CRPD)", "Refugees, Asylum and Non-Refoulement", "Enforced Disappearance and Migrant Workers", "The Rights of Indigenous Peoples"]],
    [5, "Regional Human Rights Systems", "\ud83c\udf0d", ["Introduction to Regional Systems", "The African Charter on Human and Peoples' Rights", "The African Commission and African Court", "The European Human Rights System", "The Inter-American Human Rights System", "Systems in Asia and the Arab World", "Comparing the Regional Systems"]],
    [6, "United Nations Human Rights Machinery", "\ud83c\udfdb\ufe0f", ["Overview of the UN Human Rights System", "The Human Rights Council", "The Universal Periodic Review", "Treaty Bodies and State Reporting", "Special Procedures and Rapporteurs", "The Office of the High Commissioner", "Individual Complaints Mechanisms"]],
    [7, "Introduction to International Humanitarian Law", "\ud83d\udd4a\ufe0f", ["What Is International Humanitarian Law?", "The History and Development of IHL", "The Geneva Conventions of 1949", "The Additional Protocols", "Classifying Armed Conflicts", "IHL and Human Rights Law Compared", "The Role of the ICRC"]],
    [8, "The Core Principles of IHL", "\ud83c\udfaf", ["The Principle of Distinction", "The Principle of Proportionality", "Military Necessity", "Precautions in Attack", "Humanity and the Martens Clause", "Prohibition of Unnecessary Suffering", "Applying the Principles Together"]],
    [9, "Protected Persons and Objects", "\ud83d\udee1\ufe0f", ["Civilians and Civilian Objects", "The Wounded, Sick and Shipwrecked", "Prisoners of War", "Medical Personnel and Facilities", "Detention in Armed Conflict", "Humanitarian Relief and Access", "Cultural Property and the Environment", "Journalists and Humanitarian Workers"]],
    [10, "Means and Methods of Warfare", "\u2699\ufe0f", ["Restrictions on Weapons", "Chemical and Biological Weapons", "Landmines and Cluster Munitions", "Perfidy, Ruses and Starvation", "Explosive Weapons in Populated Areas", "New Technologies and Cyber Operations", "Enforcing the Law of Weapons"]],
    [11, "Accountability and International Criminal Law", "\ud83c\udfdb", ["War Crimes", "Genocide", "Crimes Against Humanity", "The International Criminal Court", "Ad Hoc Tribunals and Hybrid Courts", "Universal Jurisdiction", "Command Responsibility"]],
    [12, "Human Rights in Practice", "\ud83d\udccb", ["Monitoring and Documentation", "Interviewing Victims and Witnesses Safely", "Report Writing and Advocacy", "Transitional Justice", "Protecting Human Rights Defenders", "Business and Human Rights", "Human Rights in Liberia and West Africa"]],
    [13, "Practical Projects", "\ud83e\uddea", ["Human Rights Monitoring Report Project", "Treaty Analysis Project", "IHL Case Study Project", "Advocacy Campaign Project", "Documentation Interview Guide Project", "Transitional Justice Proposal Project"]],
    [14, "Assessments and Graduation", "\ud83c\udfc6", ["Foundations and Sources Quiz", "Instruments and Systems Quiz", "IHL Principles and Protections Quiz", "Accountability and Practice Quiz", "Midterm Examination", "Final Examination", "Capstone: Human Rights Case Presentation", "Graduation Requirements", "Certificate of Completion"]]
  ];
  /* Which modules each Module 14 subject quiz draws its reserved questions from.
     Each list must hold at least as many content lessons as the quiz has
     questions, or the quiz comes up short: there is no filler pool to top it up
     from, by design. */
  var SUBJECT_QUIZ_MODULE = {
    'Foundations and Sources Quiz': [1, 2],
    'Instruments and Systems Quiz': [3, 4, 5, 6],
    'IHL Principles and Protections Quiz': [7, 8, 9],
    'Accountability and Practice Quiz': [10, 11, 12]
  };

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Presentation)$/.test(name.trim()); }

  var PROJECTS = {
    'Human Rights Monitoring Report Project': {
      scenario: 'Document a fictional pattern of unlawful detention affecting residents of a Liberian county. Use invented names and facts; do not collect real survivor information for this exercise.',
      deliverables: ['A one-page monitoring plan defining the allegation, legal framework, sources and safety controls', 'A five-to-seven-page report with methodology, verified findings, legal analysis and limitations', 'A recommendations table naming the responsible actor, requested action and realistic time frame'],
      standard: 'Separate verified facts, allegations and analysis. Every legal conclusion must name the applicable instrument and article.'
    },
    'Treaty Analysis Project': {
      scenario: 'Assess how a fictional national law aligns with one treaty covered in Modules 3–4 and the African Charter.',
      deliverables: ['A treaty-status and applicable-law table', 'An article-by-article comparison of the fictional law and international obligations', 'A two-page reform memorandum prioritising three practical changes'],
      standard: 'Distinguish signature, ratification, domestication and implementation; do not assume that ratification alone changes domestic practice.'
    },
    'IHL Case Study Project': {
      scenario: 'Analyse a fictional armed-conflict incident involving a military objective located near homes and a medical clinic. Do not develop or recommend operational attack tactics.',
      deliverables: ['Conflict-classification analysis with the facts supporting the threshold', 'A protected-persons and protected-objects map', 'A structured distinction, proportionality and precautions analysis, including missing facts and alternative conclusions'],
      standard: 'State what can and cannot be concluded from the available information. Apply IHL without turning the exercise into operational guidance.'
    },
    'Advocacy Campaign Project': {
      scenario: 'Design a lawful, non-partisan campaign addressing one documented access-to-education, disability-inclusion or detention-rights concern.',
      deliverables: ['A problem tree and stakeholder map', 'One specific, measurable advocacy objective and a four-week activity plan', 'A one-page policy brief plus a public message adapted for radio or social media'],
      standard: 'Base public claims on evidence, protect affected people from exposure, and match each message to the audience that can act.'
    },
    'Documentation Interview Guide Project': {
      scenario: 'Prepare a trauma-informed interview guide for a fictional witness. Do not interview a real victim or witness as part of this course.',
      deliverables: ['A pre-interview risk, consent and referral checklist', 'A neutral question guide moving from open prompts to clarification', 'A secure information-handling and post-interview follow-up plan'],
      standard: 'Use informed consent, avoid leading questions, minimise identifying data and make clear that an interviewer must never promise an outcome.'
    },
    'Transitional Justice Proposal Project': {
      scenario: 'Propose a victim-centred transitional-justice process for a fictional post-conflict county with diverse communities and limited resources.',
      deliverables: ['A consultation and stakeholder-inclusion plan', 'A proposal combining appropriate truth, justice, reparation and non-recurrence measures', 'A phased implementation plan with risks, safeguards, indicators and an estimated resource framework'],
      standard: 'Explain trade-offs, include women, youth, persons with disabilities and rural communities, and show how the proposal complements rather than replaces criminal justice.'
    },
    'Capstone: Human Rights Case Presentation': {
      scenario: 'Present a complete legal and practical response to one fictional human-rights or IHL case developed from the course themes.',
      deliverables: ['An eight-to-ten-slide case presentation', 'A two-page legal analysis citing primary instruments', 'A five-minute oral briefing followed by responses to likely questions'],
      standard: 'Move clearly from facts to issue, rule, application, conclusion and remedy; acknowledge uncertainty and avoid overstating the evidence.'
    }
  };

  function projectBrief(moduleTitle, name) {
    var p = PROJECTS[name] || {
      scenario: 'Use a realistic fictional situation connected to this project.',
      deliverables: ['A clear project plan', 'A completed professional document', 'A short reflection explaining your choices'],
      standard: 'Use the course frameworks, cite relevant law and distinguish fact from analysis.'
    };
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<div class="study-callout"><strong>Project scenario:</strong> ' + esc(p.scenario) + '</div>' +
      '<h4>Learning purpose</h4><p>This project tests whether you can turn legal knowledge into careful, ethical professional work. Review the relevant lessons before beginning and show your reasoning, not only your conclusion.</p>' +
      '<h4>Required deliverables</h4><ol>' + p.deliverables.map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('') + '</ol>' +
      '<h4>Professional standard</h4><p>' + esc(p.standard) + '</p>' +
      '<h4>Assessment rubric</h4><div class="table-wrap"><table class="study-table"><thead><tr><th>Area</th><th>What strong work shows</th><th>Weight</th></tr></thead><tbody>' +
        '<tr><td>Legal accuracy</td><td>Correct rules, sources, scope and terminology</td><td>30%</td></tr>' +
        '<tr><td>Application</td><td>Rules applied logically to facts, with uncertainty identified</td><td>25%</td></tr>' +
        '<tr><td>Evidence and method</td><td>Transparent sources, verification, limitations and organisation</td><td>20%</td></tr>' +
        '<tr><td>Ethics and safety</td><td>Consent, confidentiality, do-no-harm and inclusion safeguards</td><td>15%</td></tr>' +
        '<tr><td>Communication</td><td>Clear structure, useful recommendations and professional presentation</td><td>10%</td></tr>' +
      '</tbody></table></div>' +
      '<div class="study-callout"><strong>Safety rule:</strong> Use fictional or properly anonymised information. Do not publish names, contact details, testimony or images that could expose a victim, witness, child or human rights defender.</div>' +
      '<h4>Submission checklist</h4><ul><li>I cited the relevant instrument and article for each legal conclusion.</li><li>I separated facts, allegations, assumptions and analysis.</li><li>I explained limitations and facts still needed.</li><li>I checked consent, privacy, inclusion and do-no-harm risks.</li><li>My recommendations identify who should act and what they should do.</li></ul>' +
      '<div class="study-callout"><strong>Portfolio outcome:</strong> A completed, organised document demonstrating a practical human-rights skill.</div>' +
      '<p><strong>Printable:</strong> Use your browser\'s Print → Save as PDF to keep an offline copy for revision.</p></div>';
  }

  // Small generic fallback pool, used only if an authored per-topic entry is ever
  // missing. Every content topic below has an authored entry in
  // human-rights-ihl-topic-quizzes.js, so this should not normally be reached.
  var BANK_GENERAL = [
    { q: 'Which instrument is a General Assembly resolution rather than a treaty?', opts: ['The Universal Declaration of Human Rights', 'The ICCPR', 'The ICESCR', 'The Convention Against Torture'], correct: 0, exp: 'Its authority comes from near-universal acceptance and customary status, not from ratification.' },
    { q: 'Which right may never be derogated from, even in a declared emergency?', opts: ['Freedom from torture', 'Freedom of movement', 'Freedom of assembly', 'Freedom of expression'], correct: 0, exp: 'ICCPR Article 4(2) lists it among the non-derogable rights, and CAT Article 2(2) admits no exceptional circumstances whatsoever.' },
    { q: 'What does the principle of distinction require?', opts: ['Directing operations only against military objectives', 'Warning before every attack', 'Avoiding all civilian casualties', 'Using only precision weapons'], correct: 0, exp: 'Additional Protocol I Article 48 states the basic rule separating civilians and combatants, and civilian objects and military objectives.' },
    { q: 'What distinguishes a war crime from an ordinary crime?', opts: ['A nexus to an armed conflict', 'The number of victims', 'The rank of the perpetrator', 'The weapon used'], correct: 0, exp: 'The Kunarac test asks whether the conflict played a substantial part in the ability, decision, manner or purpose of the act.' },
    { q: 'Which element is unique to genocide?', opts: ['The intent to destroy a protected group in whole or in part', 'A widespread or systematic attack', 'A nexus to armed conflict', 'Official involvement'], correct: 0, exp: 'This special intent, dolus specialis, is what separates genocide from crimes against humanity on the same facts.' },
    { q: 'What must a limitation on a qualified right satisfy?', opts: ['Legality, a legitimate aim, necessity and proportionality', 'Approval by a majority', 'A fixed time limit', 'Registration with a treaty body'], correct: 0, exp: 'A limitation failing any one of these four requirements is unlawful however important the aim.' }
  ];
  function pickQuestions(count) {
    var out = [];
    for (var i = 0; i < count; i++) out.push(BANK_GENERAL[i % BANK_GENERAL.length]);
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }

  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ_plain = null, RQ_plain = null;
  function buildTopicIndex() {
    if (TQ_plain) return;
    TQ_plain = {}; RQ_plain = {};
    var src = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['human-rights-ihl']) || {};
    Object.keys(src).forEach(function (k) { TQ_plain[normQ(k)] = src[k]; });
    var res = (typeof window !== 'undefined' && window.TIH_RESERVED_QUIZZES && window.TIH_RESERVED_QUIZZES['human-rights-ihl']) || {};
    Object.keys(res).forEach(function (k) { RQ_plain[normQ(k)] = res[k]; });
  }
  function topicQuestions(name) {
    buildTopicIndex();
    var arr = TQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }
  function reservedQuestions(name) {
    buildTopicIndex();
    var arr = RQ_plain[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }

  var practiceIndex = {};        // quizId -> { module, name }
  var assessIndex = [];          // { quizId, module, count, scope }
  var topicsByModule = {};       // moduleNum -> [content topic names]

  function practiceQuiz(name, moduleNum, quizId) {
    if (quizId) practiceIndex[quizId] = { module: moduleNum, name: name };
    var authored = topicQuestions(name);
    return { title: 'Practice: ' + name, moduleNum: 1, questions: authored || pickQuestions(3).map(cloneQ) };
  }
  function assessmentQuiz(name, count, moduleNum, quizId, scope) {
    if (quizId) assessIndex.push({ quizId: quizId, module: moduleNum, count: count, scope: scope || 'course' });
    return { title: name, moduleNum: 1, questions: pickQuestions(count).map(cloneQ) };
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0;
  var lessonCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], names = mod[3];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'hril-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('Graduation Assessment', 15, num, qid, 'course');
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH Certificate of Completion in Human Rights and International Humanitarian Law.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Graduation Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion in Human Rights and International Humanitarian Law you must:</p><ul><li>Complete the core lessons in Modules 1–12, from the foundations of human rights through human rights in practice.</li><li>Submit the practical projects in Module 13 (a monitoring report, a treaty analysis, an IHL case study, an advocacy campaign, a documentation interview guide and a transitional justice proposal).</li><li>Attempt the four subject quizzes and both the Midterm and Final Examinations.</li><li>Present your Capstone Human Rights Case Presentation.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Examination/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var scope = (num === 14 && !big && SUBJECT_QUIZ_MODULE[name]) ? 'module' : 'course';
        var srcModule = scope === 'module' ? SUBJECT_QUIZ_MODULE[name] : num;
        var aid = 'hril-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(name, count, srcModule, aid, scope);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination' : 'quiz') + ', then review every answer explanation to strengthen your weak areas before moving on. These questions are new: none of them appeared in the practice quizzes.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isProjectName(name)) {
        idx += 1;
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: null });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      // Content lesson: authored note + its own distinct video + paired practice quiz.
      idx += 1;
      (topicsByModule[num] = topicsByModule[num] || []).push(name);
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Video + Notes', v: null, isQuiz: false });
      flat += 1; lessonCount += 1;
      var pqid = 'hril-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(name, num, pqid);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes above, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB['human-rights-ihl'];
  COURSES_DB['human-rights-ihl'] = {
    id: 'human-rights-ihl',
    title: 'Human Rights and International Humanitarian Law',
    shortDesc: 'A full 14-module programme covering the foundations and sources of human rights law, the International Bill of Rights, the thematic treaties, the regional systems, UN machinery, international humanitarian law and its core principles, protected persons and objects, weapons law, war crimes and international criminal accountability, and human rights practice including documentation, transitional justice and the Liberian and West African context.',
    category: ex.category || 'Law & Governance',
    icon: ex.icon || '⚖️',
    gradient: ex.gradient || 'linear-gradient(135deg,#1e3a8a,#0f766e)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || '600+',
    duration: '80h+',
    level: 'Beginner → Advanced',
    price: ex.price || '$5',
    origPrice: ex.origPrice || '$85',
    isFree: false,
    badge: ex.badge || 'new',
    certId: ex.certId || 'TIH-2026-HRIHL-0001',
    learn: [
      "Explain what human rights are, where they come from and how treaties bind states",
      "Apply the International Bill of Rights, including progressive realisation and the minimum core",
      "Use the thematic treaties on race, women, children, torture, disability, refugees and indigenous peoples",
      "Navigate the African, European and Inter-American systems and choose the right forum",
      "Use UN machinery: the Universal Periodic Review, treaty bodies, special procedures and individual complaints",
      "Classify an armed conflict and identify the applicable body of law",
      "Apply distinction, proportionality, precautions and military necessity to a targeting decision",
      "Identify protected persons and objects and the rules on detention, relief and cultural property",
      "Distinguish war crimes, genocide and crimes against humanity and explain command responsibility",
      "Document violations safely, interview witnesses without causing harm, and write reports that lead to change"
    ],
    requirements: ex.requirements || [
      "No legal background required; the course starts from first principles",
      "A phone or computer with a browser and an internet connection for the videos",
      "A notebook for case names, treaty articles and your own worked answers",
      "Willingness to read short extracts of treaty text closely"
    ],
    about: ex.about || [
      "Human rights law protects the dignity and freedom of every person in peace, emergency and conflict. International humanitarian law adds specific rules for armed conflict, protecting people who are not—or are no longer—taking part in hostilities and limiting how warfare may be conducted.",
      "This course moves from first principles to practical application. Learners study the international and African human rights systems, the Geneva Conventions, protected persons and objects, weapons restrictions, international crimes, monitoring, safe interviewing, report writing, advocacy and transitional justice.",
      "The lessons are designed for students, educators, civil society workers, journalists, public officials, security personnel and community leaders in Liberia and across West Africa. The course is educational and does not replace advice from a qualified lawyer or an authorised legal adviser."
    ],
    modules: modules,
    quizzes: quizzes,
    reviews: ex.reviews,
    faqs: ex.faqs || [
      { q: "Do I need a legal background?", a: "No. The course begins with the meaning and foundations of human rights, then builds gradually toward legal analysis and professional practice." },
      { q: "When does international humanitarian law apply?", a: "IHL applies only when the legal threshold for an international or non-international armed conflict is met. Human rights law continues to apply at all times, although some rights may be lawfully limited or derogated from under strict conditions." },
      { q: "Does this course provide legal advice?", a: "No. It provides legal education and practical analytical skills. Real cases should be handled with current law and advice from a qualified or authorised legal professional." },
      { q: "Will I receive a certificate?", a: "Yes. Complete the required lessons, projects and assessments, then pass the graduation assessment to earn the TIH Certificate of Completion." }
    ],
    _hrilFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT['human-rights-ihl'] = notes;

  /* human-rights-ihl-topic-quizzes.js is fetched only when this course is open,
     so it can land after this builder has run. Re-apply then: the player holds a
     reference to this same quizzes object and reads it afresh each time a quiz
     opens. Practice quizzes take the three authored questions; assessments take
     ONLY reserved (fourth) questions, issued once each via a global set so no
     question is ever repeated between two assessments. */
  window.__hrilRebuildAssessments = function () {
    TQ_plain = null; RQ_plain = null;
    var applied = 0;
    Object.keys(practiceIndex).forEach(function (quizId) {
      var meta = practiceIndex[quizId];
      var authored = topicQuestions(meta.name);
      if (authored && quizzes[quizId]) { quizzes[quizId].questions = authored; applied += 1; }
    });

    // Reserved pool, grouped by module, in curriculum order.
    var reservedByModule = {};
    Object.keys(topicsByModule).forEach(function (m) {
      var bag = [];
      topicsByModule[m].forEach(function (name) {
        var r = reservedQuestions(name);
        if (r) bag.push.apply(bag, r);
      });
      reservedByModule[m] = bag;
    });
    var moduleNums = Object.keys(reservedByModule).sort(function (a, b) { return a - b; });
    var coursePool = [];
    moduleNums.forEach(function (m) { coursePool.push.apply(coursePool, reservedByModule[m]); });

    // Forward-only issue: a question handed to one assessment is never handed to another.
    var issued = {};
    function take(pool, count) {
      var out = [];
      for (var i = 0; i < pool.length && out.length < count; i++) {
        var q = pool[i], key = normQ(q.q);
        if (issued[key]) continue;
        issued[key] = true;
        out.push(cloneQ(q));
      }
      return out;
    }
    // Module-scoped subject quizzes first, so they get their own module's questions.
    assessIndex.forEach(function (a) {
      if (a.scope !== 'module') return;
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var scoped = [];
      [].concat(a.module).forEach(function (m) {
        scoped.push.apply(scoped, reservedByModule[m] || []);
      });
      var picked = take(scoped, a.count);
      if (picked.length) { quiz.questions = picked; applied += 1; }
    });
    // Then course-wide exams and the graduation assessment.
    assessIndex.forEach(function (a) {
      if (a.scope === 'module') return;
      var quiz = quizzes[a.quizId];
      if (!quiz) return;
      var picked = take(coursePool, a.count);
      if (picked.length) { quiz.questions = picked; applied += 1; }
    });
    return applied;
  };
  window.tihApplyHumanRightsIhlTopicQuizzes = window.__hrilRebuildAssessments;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[HRIHL] modules=' + modules.length + ' lessons=' + lessonCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
