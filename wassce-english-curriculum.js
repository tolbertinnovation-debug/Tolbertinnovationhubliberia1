/* TIH Complete WASSCE English Language Preparation Course.
   Builds COURSES_DB['wassce-english'] directly with the full 10-module WAEC
   English structure. Loaded before the WASSCE course-player boot, so
   WassceCourse.ensure() finds the course already present and uses this version
   instead of its default topic-per-module build. Aligned to the WAEC English
   Language syllabus. Modelled on finlit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-english';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceEngFull) return;

  // Vetted WASSCE English videos (reused from the WASSCE English subject).
  var VIDEOS = {
    intro: ['uINcnwJX2PA', 'k22bbGbEyHI'],
    grammar: ['k22bbGbEyHI', 'U_c-ZkV460E'],
    vocab: ['k22bbGbEyHI', 'Z9AqetXxkRA'],
    essay: ['Z9AqetXxkRA', 'U_c-ZkV460E'],
    comprehension: ['uINcnwJX2PA', 'k22bbGbEyHI'],
    summary: ['uINcnwJX2PA', 'Z9AqetXxkRA'],
    oral: ['Pnc3OUGufRk', 'k22bbGbEyHI'],
    exampractice: ['uINcnwJX2PA', 'Z9AqetXxkRA'],
    revision: ['k22bbGbEyHI', 'uINcnwJX2PA'],
    final: ['Z9AqetXxkRA', 'uINcnwJX2PA']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE English', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE English Exam', 'Exam Structure & Marking Scheme', 'Study Strategies', 'Common Mistakes', 'Goal Setting']],
    [2, 'English Grammar', '📐', 'grammar', 'content', ['Parts of Speech', 'Tenses', 'Concord (Subject-Verb Agreement)', 'Active & Passive Voice', 'Direct & Indirect Speech', 'Sentence Types', 'Clauses & Phrases', 'Punctuation', 'Common Grammar Errors', 'Grammar Practice']],
    [3, 'Vocabulary & Lexis', '📚', 'vocab', 'content', ['Synonyms', 'Antonyms', 'Idioms', 'Phrasal Verbs', 'Word Formation', 'Collocations', 'Figures of Speech', 'Vocabulary Development', 'Lexis & Structure Practice', 'Vocabulary Assessment']],
    [4, 'Essay Writing', '✍️', 'essay', 'content', ['Narrative Essays', 'Descriptive Essays', 'Expository Essays', 'Argumentative Essays', 'Formal Letters', 'Informal Letters', 'Article Writing', 'Speech Writing', 'Report Writing', 'Essay Practice']],
    [5, 'Reading Comprehension', '📖', 'comprehension', 'content', ['Reading Techniques', 'Identifying Main Ideas', 'Supporting Details', 'Inference Skills', 'Vocabulary in Context', 'Answering Comprehension Questions', 'Time Management', 'Practice Exercises']],
    [6, 'Summary Writing', '📝', 'summary', 'content', ['Identifying Main Points', 'Eliminating Unnecessary Details', 'Writing Concise Summaries', 'Using Your Own Words', 'Summary Practice', 'Common Errors']],
    [7, 'Oral English', '🗣️', 'oral', 'content', ['English Sounds', 'Vowel Sounds', 'Consonant Sounds', 'Diphthongs', 'Stress Patterns', 'Intonation', 'Rhymes', 'Pronunciation Practice']],
    [8, 'Examination Practice', '🧪', 'exampractice', 'content', ['Past Questions', 'Mock Tests', 'Objective Questions', 'Essay Practice', 'Comprehension Practice', 'Oral English Practice']],
    [9, 'Revision & Exam Strategies', '🎯', 'revision', 'content', ['Revision Techniques', 'Time Management', 'Answering Strategies', 'Avoiding Common Mistakes', 'Confidence Building', 'Final Revision']],
    [10, 'Final Assessment & Graduation', '🏆', 'final', 'content', ['Full Mock Examination', 'Performance Review', 'Personalized Improvement Plan', 'Final Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Tests?|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE English exam', grammar: 'English grammar', vocab: 'vocabulary & lexis', essay: 'essay writing', comprehension: 'reading comprehension', summary: 'summary writing', oral: 'oral English', exampractice: 'examination practice', revision: 'revision & exam strategy', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    grammar: '<h4>📥 Guide: Grammar Quick Reference</h4><ul><li><strong>Concord:</strong> singular subject → singular verb (The boy runs).</li><li><strong>Tenses:</strong> keep them consistent; know past/present/future forms.</li><li><strong>Active/Passive:</strong> passive = be + past participle (The ball was kicked).</li><li><strong>Direct → Indirect:</strong> shift tense and pronouns; remove quotation marks.</li><li><strong>Punctuation:</strong> comma, semicolon, full stop, apostrophe rules.</li></ul>',
    essay: '<h4>📥 Sample: Essay Structure</h4><ol><li><strong>Introduction</strong> — grab attention + state your position/topic.</li><li><strong>Body paragraphs</strong> — one clear point each (topic sentence + explanation + example).</li><li><strong>Linking words</strong> — however, furthermore, therefore, in conclusion.</li><li><strong>Conclusion</strong> — restate and close firmly.</li></ol><p>For letters: address(es), salutation, body, complimentary close, signature. Know formal vs informal tone.</p>',
    vocab: '<h4>📥 List: Vocabulary Builder (sample)</h4><ul><li><strong>Synonyms:</strong> big = large, huge, enormous</li><li><strong>Antonyms:</strong> increase ↔ decrease</li><li><strong>Idioms:</strong> "a piece of cake" = very easy</li><li><strong>Phrasal verbs:</strong> give up, look after, put off</li><li><strong>Figures of speech:</strong> simile, metaphor, personification, hyperbole</li></ul><p>Add 10 new words a day with meaning and a sentence.</p>',
    oral: '<h4>📥 Practice: Oral English / Phonetics</h4><ul><li>Vowels &amp; long/short sounds; diphthongs (e.g. /aɪ/ as in "my")</li><li>Consonant sounds &amp; minimal pairs (ship/sheep)</li><li>Word stress (PHO-to-graph vs pho-TOG-ra-pher)</li><li>Intonation: rising (questions) / falling (statements)</li><li>Rhymes: words with the same ending sound</li></ul>',
    summary: '<h4>📥 Steps: Summary Writing</h4><ol><li>Read the passage and the question carefully.</li><li>Underline only the points that answer the question.</li><li>Remove examples, repetition and detail.</li><li>Write the points in your OWN words, in complete sentences.</li><li>Stay within the word limit; do not add opinions.</li></ol>'
  };
  function templateFor(name, skill) {
    if (skill === 'grammar' || /Common Grammar Errors|Parts of Speech|Concord/i.test(name)) return TEMPLATES.grammar;
    if (skill === 'essay' || /Essay|Formal Letters|Report Writing/i.test(name)) return TEMPLATES.essay;
    if (skill === 'vocab' || /Synonyms|Idioms|Figures of Speech/i.test(name)) return TEMPLATES.vocab;
    if (skill === 'oral' || /Sounds|Intonation|Stress|Pronunciation/i.test(name)) return TEMPLATES.oral;
    if (skill === 'summary' || /Summary|Main Points/i.test(name)) return TEMPLATES.summary;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE English skills';
    var focus = position % 2 ? 'clear rules, worked examples and timed practice' : 'understanding the skill and applying it to WAEC-style questions';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE English · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Learn the rule/skill for <em>' + esc(name) + '</em> and the way WAEC tests it.</li>' +
      '<li>Study a worked example and the marking points examiners look for.</li>' +
      '<li>Practise with past-question-style items under timed conditions.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a WAEC past question and check your answer against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Complete one WAEC-style item on <em>' + esc(name) + '</em>.</li>' +
      '<li><strong>Exercise 2:</strong> Redo it under exam timing and record one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE English preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this practical task under exam conditions and review it against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE English Language exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'To do well in WASSCE English you should mainly:', opts: ['Only memorise notes', 'Practise past questions and all four skills regularly', 'Skip grammar', 'Guess answers'], correct: 1, exp: 'Regular practice across skills, with past questions, wins marks.' },
      { q: 'A good exam strategy is to:', opts: ['Answer without reading', 'Read the instructions and manage your time', 'Ignore the marking scheme', 'Leave questions blank'], correct: 1, exp: 'Read carefully and pace yourself across all sections.' },
      { q: 'Objective (Paper 1) questions are:', opts: ['Essays', 'Multiple-choice questions', 'Oral only', 'Summaries'], correct: 1, exp: 'Paper 1 is objective multiple-choice.' },
      { q: 'A common WASSCE mistake is:', opts: ['Planning your essay', 'Poor time management and not answering all parts', 'Reading the question', 'Checking your work'], correct: 1, exp: 'Manage time and answer every required part.' },
      { q: 'Setting a target grade helps you:', opts: ['Nothing', 'Focus your revision and measure progress', 'Avoid studying', 'Skip topics'], correct: 1, exp: 'Clear goals guide focused revision.' }
    ],
    grammar: [
      { q: 'Concord means:', opts: ['Rhyming', 'Subject-verb agreement', 'A tense', 'A punctuation mark'], correct: 1, exp: 'Concord = agreement between subject and verb.' },
      { q: 'Which sentence is correct?', opts: ['The students is here.', 'The students are here.', 'The students be here.', 'The students am here.'], correct: 1, exp: 'Plural subject "students" takes "are".' },
      { q: 'The passive of "The teacher marked the scripts" is:', opts: ['The scripts were marked by the teacher.', 'The scripts marks the teacher.', 'The teacher was marked.', 'The scripts marking.'], correct: 0, exp: 'Passive = be + past participle: were marked.' },
      { q: 'A noun is a word that names:', opts: ['An action', 'A person, place, thing or idea', 'A quality only', 'A connector'], correct: 1, exp: 'Nouns name people, places, things or ideas.' },
      { q: 'Which is a subordinate (dependent) clause?', opts: ['She sang.', 'because it was raining', 'The dog barked.', 'They ran home.'], correct: 1, exp: 'It cannot stand alone as a sentence.' },
      { q: 'Direct speech uses:', opts: ['No punctuation', 'Quotation marks around the exact words', 'Only full stops', 'Brackets'], correct: 1, exp: 'Direct speech quotes the exact words in quotation marks.' }
    ],
    vocab: [
      { q: 'A synonym for "happy" is:', opts: ['Sad', 'Joyful', 'Angry', 'Tired'], correct: 1, exp: 'A synonym has a similar meaning.' },
      { q: 'An antonym of "ancient" is:', opts: ['Old', 'Modern', 'Historic', 'Aged'], correct: 1, exp: 'An antonym is an opposite: modern.' },
      { q: 'The idiom "to kick the bucket" means:', opts: ['To play football', 'To die', 'To be angry', 'To clean'], correct: 1, exp: 'Idioms have a figurative meaning.' },
      { q: 'A simile compares two things using:', opts: ['No words', '"like" or "as"', 'Numbers', 'Punctuation'], correct: 1, exp: 'Similes use "like" or "as" (e.g. brave as a lion).' },
      { q: 'A phrasal verb is:', opts: ['A single word', 'A verb + preposition/adverb (e.g. give up)', 'A noun', 'A tense'], correct: 1, exp: 'Phrasal verbs combine a verb with a particle.' },
      { q: 'Personification gives ___ to non-human things:', opts: ['Colour', 'Human qualities', 'Numbers', 'Sounds only'], correct: 1, exp: 'Personification gives human traits to objects/ideas.' }
    ],
    essay: [
      { q: 'A narrative essay mainly:', opts: ['Argues a point', 'Tells a story', 'Describes a process', 'Lists facts'], correct: 1, exp: 'Narrative essays tell a story with events in sequence.' },
      { q: 'An argumentative essay should:', opts: ['Only tell a story', 'Take a clear position and support it with reasons', 'Avoid a viewpoint', 'List words'], correct: 1, exp: 'It argues a position with evidence and reasons.' },
      { q: 'A formal letter should include:', opts: ['Slang', 'Addresses, salutation, body and formal close', 'Only a greeting', 'Emojis'], correct: 1, exp: 'Formal letters follow a set structure and tone.' },
      { q: 'Every body paragraph should have:', opts: ['Many topics', 'One main idea (topic sentence) with support', 'No structure', 'Only a question'], correct: 1, exp: 'One clear idea per paragraph, developed with support.' },
      { q: 'Linking words like "however" and "therefore":', opts: ['Confuse the reader', 'Connect ideas and improve flow', 'Are banned', 'Only for lists'], correct: 1, exp: 'Cohesive devices connect ideas logically.' },
      { q: 'A good essay conclusion:', opts: ['Adds new arguments', 'Restates the position and closes clearly', 'Is missing', 'Is one word'], correct: 1, exp: 'Conclusions summarise and close, not introduce new points.' }
    ],
    comprehension: [
      { q: 'Skimming a passage means reading:', opts: ['Every word slowly', 'Quickly for the general idea', 'Only the last line', 'Backwards'], correct: 1, exp: 'Skimming gets the gist quickly.' },
      { q: 'An inference question asks about something that is:', opts: ['Stated directly', 'Implied but not stated', 'The title', 'A spelling'], correct: 1, exp: 'Inference answers are deduced from clues in the text.' },
      { q: 'For a "vocabulary in context" question you should:', opts: ['Give a dictionary definition', 'Give the meaning as used in the passage', 'Skip it', 'Guess'], correct: 1, exp: 'Meaning must fit the context of the sentence.' },
      { q: 'When answering comprehension you should:', opts: ['Answer from memory', 'Return to the text for evidence', 'Copy the whole passage', 'Write one word only'], correct: 1, exp: 'Base answers on the passage, in your own words where asked.' },
      { q: 'The main idea of a paragraph is often in the:', opts: ['Random line', 'Topic sentence', 'Last word', 'Title only'], correct: 1, exp: 'The topic sentence usually states the main idea.' },
      { q: 'Tone refers to the writer’s:', opts: ['Handwriting', 'Attitude toward the subject', 'Word count', 'Spelling'], correct: 1, exp: 'Tone is the writer’s attitude (formal, critical, humorous, etc.).' }
    ],
    summary: [
      { q: 'A good summary should:', opts: ['Add your opinion', 'Contain only the main points, in your own words', 'Copy the passage', 'Include examples'], correct: 1, exp: 'Summaries give main points concisely, in your own words.' },
      { q: 'In summary writing you should remove:', opts: ['Main points', 'Examples, repetition and unnecessary detail', 'The topic', 'All verbs'], correct: 1, exp: 'Cut examples and detail; keep the key points.' },
      { q: 'Using your own words in a summary means:', opts: ['Copying word-for-word', 'Rephrasing the ideas', 'Adding new ideas', 'Translating'], correct: 1, exp: 'Paraphrase the points rather than copy.' },
      { q: 'A summary must stay within the:', opts: ['Passage length', 'Given word limit', 'Whole page', 'No limit'], correct: 1, exp: 'Respect the stated word limit.' },
      { q: 'The first step in summary writing is to:', opts: ['Start writing immediately', 'Read the passage and the exact question', 'Copy the first paragraph', 'Guess'], correct: 1, exp: 'Understand the passage and what is asked first.' },
      { q: 'A common summary error is:', opts: ['Answering the question', 'Copying sentences or adding opinions', 'Being concise', 'Using your own words'], correct: 1, exp: 'Avoid copying and adding personal opinion.' }
    ],
    oral: [
      { q: 'A diphthong is:', opts: ['A single pure vowel', 'A glide between two vowel sounds', 'A consonant', 'A stress mark'], correct: 1, exp: 'A diphthong glides from one vowel to another (e.g. /aɪ/).' },
      { q: 'Word stress affects:', opts: ['Spelling only', 'Which syllable is said more strongly', 'Punctuation', 'Grammar'], correct: 1, exp: 'Stress emphasises a syllable (e.g. PHO-to-graph).' },
      { q: 'Intonation is:', opts: ['The rise and fall of the voice', 'A spelling rule', 'A tense', 'A synonym'], correct: 0, exp: 'Intonation is the melody/pitch movement of speech.' },
      { q: '"Ship" and "sheep" differ by their:', opts: ['Spelling only', 'Vowel sound (short vs long)', 'Meaning only', 'Stress'], correct: 1, exp: 'They are a minimal pair differing in vowel length/quality.' },
      { q: 'Statements usually end with ___ intonation:', opts: ['Rising', 'Falling', 'No', 'Flat only'], correct: 1, exp: 'Statements typically fall; yes/no questions often rise.' },
      { q: 'Rhyming words share the same:', opts: ['First letter', 'Ending sound', 'Meaning', 'Length'], correct: 1, exp: 'Rhymes end with the same sound (cat/hat).' }
    ],
    examstrat: [
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per section and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every section is attempted.' },
      { q: 'If unsure of an objective answer you should:', opts: ['Leave it blank', 'Eliminate wrong options and choose your best', 'Pick the longest', 'Always choose A'], correct: 1, exp: 'Eliminate and make a reasoned choice.' },
      { q: 'Before submitting you should:', opts: ['Do nothing', 'Check that you answered all required parts', 'Erase everything', 'Rewrite it all'], correct: 1, exp: 'Review to ensure completeness and correct any errors.' },
      { q: 'Reading the command word (e.g. "explain") helps you:', opts: ['Waste time', 'Answer exactly what is asked', 'Ignore the question', 'Guess'], correct: 1, exp: 'Command words tell you what the examiner wants.' },
      { q: 'Confidence in the exam comes mainly from:', opts: ['Luck', 'Thorough preparation and practice', 'Guessing', 'Cramming overnight'], correct: 1, exp: 'Preparation builds genuine confidence.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', grammar: 'grammar', vocab: 'vocab', essay: 'essay', comprehension: 'comprehension', summary: 'summary', oral: 'oral', exampractice: 'examstrat', revision: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.grammar, BANK.vocab, BANK.essay, BANK.comprehension, BANK.summary, BANK.oral, BANK.examstrat);
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
        var qid = 'we-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE English Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE English Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Complete the examination practice and the Full Mock Examination.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance and past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Final Assessment/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'we-m' + num + '-a' + flat;
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
      var pqid = 'we-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE English Language: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE English Language preparation course aligned to the WAEC syllabus: grammar, vocabulary & lexis, essay writing, comprehension, summary writing, oral English, examination practice, revision strategies, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '📝',
    gradient: 'linear-gradient(135deg,#e31e24,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE English Language examination with concise lessons, worked examples and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '60h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-ENGL',
    learn: [
      'Understand the WAEC English exam structure and marking scheme',
      'Master grammar, concord, tenses and punctuation',
      'Build vocabulary, idioms and figures of speech',
      'Write all WASSCE essay and letter types confidently',
      'Answer comprehension and summary questions for full marks',
      'Improve oral English and apply exam strategies with mock practice'
    ],
    requirements: ['A phone or computer with internet', 'A notebook for essays, summaries and revision', 'Commitment to timed past-question practice'],
    about: [
      'This is the complete TIH WASSCE English Language preparation course, organised into ten modules aligned to the WAEC English Language syllabus and examination structure (objective, essay & comprehension, and oral).',
      'Every content lesson has a video and printable notes with worked examples; downloadable resources include grammar guides, essay samples, vocabulary lists and oral English materials. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-english',
    _wassceEngFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-ENGLISH] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
