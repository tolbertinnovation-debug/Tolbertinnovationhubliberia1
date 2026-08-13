/* TIH Complete TOEFL Course curriculum.
   Rebuilds COURSES_DB.toefl into the full 10-module programme:
   99 guided lessons (83 video lessons + 16 assessments), a practice quiz for
   every content lesson (50+ quizzes in total), section mock tests, 4 full mock
   exams and a final Certificate Assessment. Study notes with practice exercises
   are generated into LESSON_CONTENT.toefl. Modelled on ielts-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  if (!COURSES_DB.toefl || COURSES_DB.toefl._toeflFullBuilt) return;

  // Vetted English/TOEFL videos reused from the core course, grouped by skill.
  var VIDEOS = {
    orientation: ['1LpVb3lYaKk'],
    grammar: ['KVScWx0O2gI'],
    vocab: ['fE0W18Yz9hM'],
    reading: ['eKaVhOnMjm8'],
    listening: ['C0_sud-fw0k'],
    speaking: ['Gxyo1gSJFRM'],
    writing: ['_Hd3IwnOEfs'],
    pronunciation: ['lRkLTJTnvYw'],
    strategy: ['1LpVb3lYaKk']
  };

  // [moduleNum, title, icon, skillKey, [lesson names]]
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', ['Welcome to the Course', 'How to Study Effectively', 'What is TOEFL?', 'TOEFL Test Structure', 'Scoring System', 'Study Plan', 'Test Registration']],
    [2, 'English Grammar', '📐', 'grammar', ['Parts of Speech', 'Nouns', 'Pronouns', 'Verbs', 'Verb Tenses', 'Subject-Verb Agreement', 'Adjectives', 'Adverbs', 'Prepositions', 'Conjunctions', 'Articles', 'Active & Passive Voice', 'Direct & Indirect Speech', 'Conditional Sentences', 'Relative Clauses', 'Modals', 'Gerunds & Infinitives', 'Punctuation', 'Common Grammar Mistakes', 'Grammar Practice Test']],
    [3, 'Vocabulary', '📚', 'vocab', ['Academic Vocabulary', 'Word Formation', 'Prefixes & Suffixes', 'Synonyms', 'Antonyms', 'Collocations', 'Idioms', 'Phrasal Verbs', 'Context Clues', 'Vocabulary Review']],
    [4, 'Reading', '📖', 'reading', ['Reading Strategies', 'Skimming', 'Scanning', 'Main Ideas', 'Supporting Details', 'Vocabulary Questions', 'Inference Questions', 'Reference Questions', 'Sentence Simplification', 'Summary Questions', 'Reading Speed', 'Timed Reading Practice', 'Reading Mock Test']],
    [5, 'Listening', '🎧', 'listening', ['Listening Strategies', 'Note-Taking', 'Campus Conversations', 'Academic Lectures', 'Main Idea Questions', 'Detail Questions', 'Purpose Questions', 'Inference Questions', 'Attitude Questions', 'Listening Mock Test']],
    [6, 'Speaking', '🗣️', 'speaking', ['TOEFL Speaking Overview', 'Independent Speaking', 'Integrated Speaking', 'Organizing Responses', 'Speaking Templates', 'Pronunciation', 'Fluency', 'Speaking Practice', 'Speaking Mock Test']],
    [7, 'Writing', '✍️', 'writing', ['Writing Overview', 'Integrated Writing', 'Academic Discussion Writing', 'Essay Structure', 'Thesis Statements', 'Supporting Ideas', 'Transitions', 'Editing', 'Model Essays', 'Writing Mock Test']],
    [8, 'Pronunciation & Fluency', '🔊', 'pronunciation', ['English Sounds', 'Stress', 'Intonation', 'Connected Speech', 'Public Speaking Practice']],
    [9, 'Test Strategies', '🎯', 'strategy', ['Time Management', 'Guessing Strategies', 'Common Mistakes', 'Exam-Day Tips', 'Stress Management']],
    [10, 'Assessments', '🏆', 'strategy', ['Grammar Quiz', 'Vocabulary Quiz', 'Reading Test', 'Listening Test', 'Speaking Assessment', 'Writing Assessment', 'Midterm Exam', 'Final TOEFL Mock Test 1', 'Final TOEFL Mock Test 2', 'Final TOEFL Mock Test 3', 'Certificate Assessment']]
  ];

  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }

  // A lesson is an assessment when its name ends in Test / Quiz / Exam /
  // Assessment (optionally followed by a number, e.g. "Mock Test 1").
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Assessment)(?:\s+\d+)?$/.test(name.trim()); }
  function isMock(name) { return /Mock Test|Midterm|Reading Test|Listening Test/i.test(name); }

  var skillLabel = { orientation: 'test orientation', grammar: 'English grammar', vocab: 'academic vocabulary', reading: 'the Reading section', listening: 'the Listening section', speaking: 'the Speaking section', writing: 'the Writing section', pronunciation: 'pronunciation and fluency', strategy: 'exam strategy' };

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'TOEFL skills';
    var focus = position % 2 ? 'clear technique, accuracy and confident timing' : 'understanding the task, planning your answer and reviewing your mistakes';
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>TOEFL iBT · ' + escapeHtml(moduleTitle) + '</strong><span>Target 100+ / 120</span></div>' +
      '<h3>' + escapeHtml(name) + '</h3>' +
      '<p>This lesson strengthens <strong>' + escapeHtml(label) + '</strong> and builds ' + focus + '. Watch the video, study the notes below, then complete the two practice exercises before the short quiz.</p>' +
      '<h4>Key points</h4>' +
      '<ul>' +
      '<li>Learn the exact skill and task pattern taught in <em>' + escapeHtml(name) + '</em>.</li>' +
      '<li>Note the TOEFL-specific vocabulary and question wording used here.</li>' +
      '<li>Time yourself on one example, then review every error and record one fix.</li>' +
      '</ul>' +
      '<h4>Practice exercises</h4>' +
      '<ol>' +
      '<li><strong>Exercise 1:</strong> Complete one untimed example of <em>' + escapeHtml(name) + '</em> and check your answer against the model.</li>' +
      '<li><strong>Exercise 2:</strong> Repeat under real TOEFL timing, then write one sentence on what to improve next time.</li>' +
      '</ol>' +
      '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + escapeHtml(name) + '</em> to a university, science, campus-life or Liberia-related topic — the kind of subject TOEFL uses.</div>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF on this page to keep an offline copy of these notes for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + escapeHtml(moduleTitle) + '</em>. A high TOEFL score comes from combining every section with steady, reviewed practice.</p>' +
      '</div>';
  }

  // Skill-specific question banks used to build quizzes and mock tests.
  var BANK = {
    grammar: [
      { q: 'A complete English sentence must contain at least a:', opts: ['Noun and an adjective', 'Subject and a verb', 'Preposition and article', 'Comma and full stop'], correct: 1, exp: 'Every clause needs a subject and a verb.' },
      { q: 'Which sentence uses subject-verb agreement correctly?', opts: ['The students is ready.', 'The student are ready.', 'The students are ready.', 'The student are readies.'], correct: 2, exp: 'A plural subject takes a plural verb: students are.' },
      { q: 'Choose the correct present-perfect form:', opts: ['I have finish', 'I has finished', 'I have finished', 'I finished have'], correct: 2, exp: 'Present perfect = have/has + past participle.' },
      { q: 'The passive voice of "The team wrote the report" is:', opts: ['The report was written by the team.', 'The report wrote the team.', 'The team was written the report.', 'The report is writing.'], correct: 0, exp: 'Passive = be + past participle, with the doer after "by".' },
      { q: 'A relative clause usually begins with a word such as:', opts: ['and / but', 'who / which / that', 'very / quite', 'always / never'], correct: 1, exp: 'Relative clauses start with relative pronouns like who, which, that.' },
      { q: 'Which article fits: "___ university offers scholarships."?', opts: ['An', 'A', 'The (only)', 'No article'], correct: 1, exp: '"University" starts with a "y" (consonant) sound, so it takes "a".' }
    ],
    vocab: [
      { q: 'A TOEFL vocabulary question asks you to pick the word closest in:', opts: ['Spelling', 'Meaning in context', 'Length', 'Sound'], correct: 1, exp: 'Choose the option nearest in meaning as the word is used.' },
      { q: 'The prefix "un-" in "unlikely" means:', opts: ['Again', 'Not', 'Before', 'Very'], correct: 1, exp: '"Un-" is a negative prefix: not likely.' },
      { q: 'A "collocation" is:', opts: ['A spelling rule', 'Words that naturally go together', 'A type of essay', 'A grammar tense'], correct: 1, exp: 'Collocations are natural word partnerships, e.g. "make a decision".' },
      { q: 'Using "context clues" means you work out a word’s meaning from:', opts: ['A dictionary only', 'The surrounding sentence', 'Its first letter', 'Its length'], correct: 1, exp: 'The words and ideas around the term reveal its meaning.' },
      { q: 'The Academic Word List contains words that are:', opts: ['Slang', 'Common across academic subjects', 'Only scientific', 'Rarely used'], correct: 1, exp: 'The AWL is exactly the vocabulary TOEFL passages and lectures use.' },
      { q: 'An antonym of "increase" is:', opts: ['Grow', 'Rise', 'Decrease', 'Expand'], correct: 2, exp: 'An antonym is an opposite: decrease.' }
    ],
    reading: [
      { q: 'Best Reading strategy for timing is to:', opts: ['Read every word slowly', 'Skim for structure, then scan for answers', 'Answer without reading', 'Read only the last line'], correct: 1, exp: 'Skim to map the passage, then scan back to the relevant lines.' },
      { q: 'An inference question asks about something that is:', opts: ['Stated directly', 'Strongly implied but not stated', 'In the title', 'A vocabulary word'], correct: 1, exp: 'Inference answers are supported by the text but not written word-for-word.' },
      { q: 'The Prose/Summary question is worth 2 points because it tests:', opts: ['One detail', 'Understanding of the whole passage', 'Spelling', 'Speed'], correct: 1, exp: 'You select the choices that capture the passage’s main ideas.' },
      { q: 'A "reference" question asks what a word such as "it" or "they":', opts: ['Means in the dictionary', 'Refers back to', 'Sounds like', 'Rhymes with'], correct: 1, exp: 'Reference questions test what a pronoun points to in the text.' },
      { q: 'Sentence-simplification questions want a choice that keeps the:', opts: ['Same essential meaning, shorter', 'Longest wording', 'Most difficult words', 'Original punctuation'], correct: 0, exp: 'Pick the option that keeps the core meaning without changing it.' },
      { q: 'TOEFL Reading passages are most like:', opts: ['Text messages', 'First-year university textbooks', 'Poems', 'Adverts'], correct: 1, exp: 'They are academic, textbook-style passages.' }
    ],
    listening: [
      { q: 'During TOEFL Listening you should:', opts: ['Not take notes', 'Take structured notes', 'Close your eyes', 'Listen once then rest'], correct: 1, exp: 'Note-taking is essential; capture main ideas and signpost words.' },
      { q: 'You hear each lecture:', opts: ['Twice', 'Once', 'Three times', 'On demand'], correct: 1, exp: 'Audio plays once, so active note-taking matters.' },
      { q: 'A "function/purpose" question asks:', opts: ['The exact words used', 'Why the speaker says something', 'The speaker’s name', 'How to spell a word'], correct: 1, exp: 'Function questions test why a statement was made.' },
      { q: 'An "attitude" question tests the speaker’s:', opts: ['Exact words', 'Feeling or certainty', 'Grammar', 'Speed'], correct: 1, exp: 'Attitude questions test tone, certainty, doubt or surprise.' },
      { q: 'Signpost words like "however" and "for example" signal:', opts: ['The end of the test', 'Important structure and relationships', 'Nothing', 'A break'], correct: 1, exp: 'They flag contrasts and examples, often tested by questions.' },
      { q: 'Good notes separate:', opts: ['Colours and fonts', 'Main ideas from details/examples', 'Names from dates', 'Nothing'], correct: 1, exp: 'Split-page notes make questions easier to answer.' }
    ],
    speaking: [
      { q: 'A TOEFL independent Speaking response lasts about:', opts: ['5 seconds', '45 seconds', '5 minutes', 'No limit'], correct: 1, exp: 'Independent speaking is ~45 seconds after 15 seconds of prep.' },
      { q: 'Integrated Speaking tasks combine:', opts: ['Only speaking', 'Reading, listening and speaking', 'Only writing', 'Drawing'], correct: 1, exp: 'You read, then listen, then speak about how the sources relate.' },
      { q: 'Speaking templates help because they:', opts: ['Replace your ideas', 'Give a reliable structure so you focus on content', 'Must be word-for-word', 'Lower your score'], correct: 1, exp: 'A template frees mental effort for content and delivery.' },
      { q: 'Organising a response clearly means using:', opts: ['One long sentence', 'A clear point, reason and example', 'Random ideas', 'Only memorised phrases'], correct: 1, exp: 'State a point, give a reason, add a specific example.' },
      { q: 'The Speaking section is scored by:', opts: ['Only a computer', 'Human raters and AI', 'Other students', 'The test-taker'], correct: 1, exp: 'Responses are rated on delivery, language use and development.' },
      { q: 'Fluency improves most when you:', opts: ['Speak silently', 'Practise speaking aloud and record yourself', 'Only read grammar rules', 'Memorise the dictionary'], correct: 1, exp: 'Recording and reviewing your own speech builds real fluency.' }
    ],
    writing: [
      { q: 'The Integrated Writing task asks you to:', opts: ['Give only your opinion', 'Summarise how a lecture relates to a reading', 'Draw a chart', 'Translate'], correct: 1, exp: 'You explain how the lecture supports or challenges the reading.' },
      { q: 'The Academic Discussion task asks you to:', opts: ['Copy the professor', 'Add your own supported opinion to a discussion', 'Only agree', 'Write one sentence'], correct: 1, exp: 'Contribute a clear, well-supported point (~100+ words).' },
      { q: 'A strong thesis statement should be:', opts: ['Vague', 'A clear, arguable main idea', 'A question only', 'A list of words'], correct: 1, exp: 'The thesis states your position clearly and can be supported.' },
      { q: 'In Integrated Writing you spend most words on:', opts: ['Your opinion', 'What the lecture (professor) says', 'The introduction', 'New examples'], correct: 1, exp: 'Report what the professor argues; the lecture is central.' },
      { q: 'Transition words such as "however" and "therefore" improve:', opts: ['Spelling', 'Cohesion between ideas', 'Handwriting', 'Length only'], correct: 1, exp: 'Transitions link ideas and raise the cohesion score.' },
      { q: 'Editing your essay mainly means checking:', opts: ['Font colour', 'Grammar, word choice and clarity', 'Page count', 'The title bar'], correct: 1, exp: 'Reserve time to fix grammar and improve clarity.' }
    ],
    pronunciation: [
      { q: 'Word "stress" in English means:', opts: ['Speaking loudly', 'Emphasising one syllable in a word', 'Being nervous', 'Speaking fast'], correct: 1, exp: 'Stress puts more length/pitch on one syllable, e.g. PHO-to-graph.' },
      { q: 'Intonation refers to:', opts: ['Spelling', 'The rise and fall of the voice', 'Grammar rules', 'Vocabulary size'], correct: 1, exp: 'Intonation is the melody of speech and carries meaning.' },
      { q: '"Connected speech" is when native speakers:', opts: ['Pause after every word', 'Link sounds together between words', 'Spell each word', 'Shout'], correct: 1, exp: 'Sounds join across words, e.g. "want to" → "wanna".' },
      { q: 'Clear pronunciation on TOEFL Speaking mainly affects the:', opts: ['Reading score', 'Delivery part of the score', 'Writing score', 'Registration'], correct: 1, exp: 'Delivery covers clarity, pace and pronunciation.' },
      { q: 'The best way to improve pronunciation is to:', opts: ['Read silently', 'Listen and repeat aloud, then record yourself', 'Avoid speaking', 'Only study spelling'], correct: 1, exp: 'Imitation plus self-recording builds clearer speech.' },
      { q: 'Public-speaking practice mainly builds:', opts: ['Typing speed', 'Confidence and fluency under pressure', 'Reading speed', 'Vocabulary spelling'], correct: 1, exp: 'Speaking in front of others rehearses real test conditions.' }
    ],
    strategy: [
      { q: 'Good TOEFL time management means you:', opts: ['Spend all time on one question', 'Pace yourself and answer every question', 'Skip whole sections', 'Ignore the timer'], correct: 1, exp: 'There is no penalty for guessing, so answer everything within the time.' },
      { q: 'If you are unsure of an answer you should:', opts: ['Leave it blank', 'Eliminate wrong options and make your best guess', 'Pick the longest option', 'Always choose A'], correct: 1, exp: 'Eliminate, then guess — blank answers score zero.' },
      { q: 'The TOEFL total score ranges from:', opts: ['0 to 9', '0 to 120', '0 to 100', '200 to 800'], correct: 1, exp: 'Four sections of 0–30 combine to 0–120.' },
      { q: 'On test day you should mainly:', opts: ['Learn 200 new words', 'Bring ID, arrive early and stay calm', 'Take two mock tests', 'Change all templates'], correct: 1, exp: 'Logistics and rest protect the score you have built.' },
      { q: 'A common TOEFL mistake is:', opts: ['Taking notes', 'Spending too long on one hard item', 'Answering every question', 'Reviewing errors'], correct: 1, exp: 'Move on and return later; don’t lose easy points to one hard item.' },
      { q: 'Managing stress before the test is helped by:', opts: ['Cramming all night', 'Sleep, breathing and steady preparation', 'Skipping meals', 'Panicking'], correct: 1, exp: 'Rest and calm routines keep performance steady.' }
    ],
    orientation: [
      { q: 'TOEFL is mainly used for admission to universities in:', opts: ['Only Liberia', 'The United States and worldwide', 'Only France', 'Only online schools'], correct: 1, exp: 'TOEFL is accepted by 11,000+ institutions, especially in the US.' },
      { q: 'The "iBT" in TOEFL iBT means the test is:', opts: ['On paper', 'Internet-based on a computer', 'By phone', 'A live interview'], correct: 1, exp: 'iBT = internet-based test, taken on a computer.' },
      { q: 'How many sections does the TOEFL iBT have?', opts: ['Two', 'Three', 'Four', 'Six'], correct: 2, exp: 'Reading, Listening, Speaking and Writing.' },
      { q: 'Each section is scored out of:', opts: ['9', '30', '100', '120'], correct: 1, exp: 'Each section is 0–30; the four combine to 120.' },
      { q: 'An effective study plan should be:', opts: ['Random', 'Regular, with review of mistakes', 'Only the night before', 'Reading only'], correct: 1, exp: 'Steady, reviewed practice beats last-minute cramming.' },
      { q: 'To take the official test you must first:', opts: ['Just show up', 'Register and book a date/centre or home edition', 'Email a university', 'Take a paper test'], correct: 1, exp: 'You register with ETS and choose a date and delivery.' }
    ]
  };

  function pickQuestions(skill, count) {
    var pool = BANK[skill] || BANK.strategy;
    var out = [];
    // Draw from the skill pool first, then top up from a mixed pool for mocks.
    var mixed = BANK.orientation.concat(BANK.strategy, BANK.grammar, BANK.vocab, BANK.reading, BANK.listening, BANK.speaking, BANK.writing);
    for (var i = 0; i < count; i++) {
      out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]);
    }
    return out;
  }

  // Authored per-topic quiz questions (topic-quizzes.js) take priority so every
  // TOEFL topic has its OWN distinct questions. Falls back to the skill BANK if
  // a topic has no authored set.
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES['toefl']) || null;
  var TQ_norm = null;
  function topicQuestions(name) {
    if (!TQ) return null;
    if (!TQ_norm) { TQ_norm = {}; Object.keys(TQ).forEach(function (k) { TQ_norm[normQ(k)] = TQ[k]; }); }
    var arr = TQ_norm[normQ(name)];
    return (arr && arr.length) ? arr.map(cloneQ) : null;
  }
  function allAuthoredQuestions() {
    if (!TQ) return null;
    var out = []; Object.keys(TQ).forEach(function (k) { (TQ[k] || []).forEach(function (q) { out.push(q); }); });
    return out.length ? out : null;
  }
  function spreadPick(pool, count) {
    var out = [], n = pool.length; if (!n) return out;
    var step = Math.max(1, Math.floor(n / count));
    for (var i = 0, idx = 0; i < count; i++, idx += step) { out.push(pool[idx % n]); }
    return out;
  }
  function practiceQuiz(skill, name) {
    var authored = topicQuestions(name);
    var qs = authored || pickQuestions(skill, 3).map(cloneQ);
    return { title: 'Practice: ' + name, moduleNum: 1, questions: qs };
  }

  function assessmentQuiz(skill, name, count) {
    var pool = allAuthoredQuestions();
    var qs = pool ? spreadPick(pool, count).map(cloneQ) : pickQuestions(skill, count).map(cloneQ);
    return { title: name, moduleNum: 1, questions: qs };
  }

  var modules = [];
  var quizzes = {};
  var notes = {};
  var flat = 0;      // running flat lesson index for LESSON_CONTENT
  var notePos = 0;
  var videoCount = 0, quizCount = 0, mockCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], names = mod[4];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var lessons = [];
    var pool = VIDEOS[skill] || VIDEOS.strategy;
    var contentIdx = 0;

    names.forEach(function (name) {
      if (isAssessment(name)) {
        var isCert = /Certificate Assessment/i.test(name);
        var mock = isMock(name);
        var count = isCert ? 20 : mock ? 15 : 5;
        var quizId = 'toefl-m' + num + '-a' + flat;
        quizzes[quizId] = assessmentQuiz(skill, name, count);
        if (isCert) { quizzes[quizId].isFinal = true; }
        var badge = isCert ? '🏆 ' : mock ? '🧪 ' : '📝 ';
        var lesson = { t: badge + name, d: count + ' questions', isQuiz: true, quizId: quizId };
        if (isCert) { lesson.isFinal = true; }
        lessons.push(lesson);
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + escapeHtml(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + escapeHtml(name) + '</h3><p>' + (isCert ? 'This is the final Certificate Assessment. Pass it to complete the course and unlock your TIH Certificate of Completion.' : 'Complete this ' + (mock ? 'full-length mock test' : 'assessment') + ' under timed conditions, then review every answer explanation to close your gaps.') + '</p></div>';
        flat += 1;
        quizCount += 1;
        if (mock || isCert) mockCount += 1;
      } else {
        var video = pool[contentIdx % pool.length];
        contentIdx += 1;
        lessons.push({ t: num + '.' + contentIdx + ' ' + name, d: 'Video Lesson', v: video, isQuiz: false });
        notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
        flat += 1;
        videoCount += 1;
        // Paired short practice quiz for this content lesson.
        var pqId = 'toefl-m' + num + '-q' + flat;
        quizzes[pqId] = practiceQuiz(skill, name);
        lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqId });
        notes[String(flat)] = '<p><strong>Quick check:</strong> Review the lesson notes and complete the two practice exercises, then answer these questions to confirm you understood <em>' + escapeHtml(name) + '</em>.</p>';
        flat += 1;
        quizCount += 1;
      }
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var existing = COURSES_DB.toefl;
  COURSES_DB.toefl = {
    id: 'toefl',
    title: 'Complete TOEFL iBT Course: Grammar, Vocabulary & All Four Sections',
    shortDesc: 'A full 10-module TOEFL iBT programme: grammar, vocabulary, Reading, Listening, Speaking, Writing, pronunciation, exam strategy, 50+ quizzes, full mock tests and a final Certificate Assessment.',
    category: 'Exam Preparation',
    icon: '🎓',
    gradient: 'linear-gradient(135deg,#7c2d12,#b45309,#f59e0b)',
    instructor: existing.instructor,
    instructorTitle: existing.instructorTitle,
    instructorBio: existing.instructorBio,
    rating: existing.rating || 4.9,
    reviewCount: existing.reviewCount || 388,
    students: existing.students || '900+',
    duration: '60h+',
    level: 'Beginner → Advanced',
    price: '$25',
    origPrice: '$150',
    isFree: false,
    badge: 'premium',
    certId: 'TIH-2026-TOEFL-0001',
    learn: [
      'Master English grammar and academic vocabulary for the TOEFL iBT',
      'Apply proven strategies to Reading, Listening, Speaking and Writing',
      'Take structured notes and answer every TOEFL question type',
      'Use templates and model answers for the integrated and independent tasks',
      'Improve pronunciation, fluency and exam-day time management',
      'Practise with section tests and full-length TOEFL mock exams'
    ],
    requirements: [
      'A basic to intermediate level of English to build from',
      'A headset or quiet space to practise Speaking out loud',
      'Consistent weekly practice and review of your mistakes'
    ],
    about: [
      'This is the complete TIH TOEFL iBT course, rebuilt into ten modules that take you from grammar and vocabulary foundations to full test mastery.',
      'Every content lesson includes a video, written notes with practice exercises, and a short quiz. Each section ends with a mock test, and the course finishes with three full TOEFL mock exams and a Certificate Assessment.',
      'The TOEFL iBT is accepted by more than 11,000 universities worldwide and is often required for admission and scholarships in the United States and beyond.'
    ],
    modules: modules,
    quizzes: quizzes,
    _toeflFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT.toefl = notes;
  if (typeof PRACTICE_TESTS !== 'undefined' && PRACTICE_TESTS.toefl) { /* keep existing TOEFL practice test */ }

  // Lightweight build report (visible in console for verification).
  if (typeof console !== 'undefined' && console.log) {
    console.log('[TOEFL] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' mockExams=' + mockCount);
  }
})();
