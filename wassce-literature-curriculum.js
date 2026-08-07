/* TIH Complete WASSCE Literature in English Preparation Course.
   Builds COURSES_DB['wassce-literature'] directly with the full 10-module WAEC
   Literature in English structure. Loaded before the WASSCE course-player boot,
   so WassceCourse.ensure() finds the course already present and uses this
   version. Aligned to the WAEC Literature in English syllabus. Modelled on
   wassce-economics-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'wassce-literature';
  if (COURSES_DB[CID] && COURSES_DB[CID]._wassceLitFull) return;

  // Vetted English-domain videos (reused from the WASSCE English subject).
  var VIDEOS = {
    intro: ['5K7Vdxtvd4k'],
    devices: ['YTNscPnlb-o'],
    poetry: ['fbK72UkUCV4'],
    drama: ['XJSKHwVYsvk'],
    prose: ['AbZO_rhI3qQ'],
    african: ['1-cI7N4pgB4'],
    nonafrican: ['5K7Vdxtvd4k'],
    essay: ['YTNscPnlb-o'],
    revision: ['5K7Vdxtvd4k'],
    final: ['5K7Vdxtvd4k']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to WASSCE Literature in English', '🧭', 'intro', 'content', ['Course Orientation', 'Understanding the WASSCE Literature Exam', 'Exam Structure & Marking Scheme', 'What is Literature?', 'Genres of Literature', 'Study Strategies']],
    [2, 'Literary Appreciation & Literary Devices', '🔎', 'devices', 'content', ['Theme', 'Plot', 'Setting', 'Characterization', 'Point of View', 'Mood & Tone', 'Symbolism', 'Imagery', 'Irony', 'Figures of Speech']],
    [3, 'Poetry', '🪶', 'poetry', 'content', ['Introduction to Poetry', 'Types of Poetry', 'Poetic Devices', 'Rhythm & Rhyme', 'Sound Devices', 'Theme Analysis', 'Poem Interpretation', 'WAEC Poetry Practice']],
    [4, 'Drama', '🎭', 'drama', 'content', ['Introduction to Drama', 'Elements of Drama', 'Tragedy', 'Comedy', 'Dramatic Techniques', 'Character Analysis', 'Theme Analysis', 'WAEC Drama Practice']],
    [5, 'Prose', '📖', 'prose', 'content', ['Introduction to Prose', 'Types of Prose', 'Plot Development', 'Character Analysis', 'Theme Analysis', 'Setting', 'Narrative Techniques', 'WAEC Prose Practice']],
    [6, 'African Literature', '🌍', 'african', 'content', ['Introduction to African Literature', 'African Writers', 'African Themes', 'Culture & Tradition', 'Colonial & Post-Colonial Literature', 'Contemporary African Literature', 'Text Analysis', 'Practice Questions']],
    [7, 'Non-African Literature', '🗺️', 'nonafrican', 'content', ['Introduction to World Literature', 'Shakespeare & Classical Literature', 'Modern Literature', 'Comparative Literature', 'International Literary Themes', 'Text Analysis', 'Practice Questions', 'Literary Comparisons']],
    [8, 'Essay Writing & Examination Skills', '✍️', 'essay', 'content', ['Literary Essay Writing', 'Answering WAEC Questions', 'Quoting Effectively', 'Time Management', 'Common Mistakes', 'Examination Techniques', 'Objective Questions Practice', 'Theory Questions Practice']],
    [9, 'Practical Revision', '🎯', 'revision', 'content', ['Prescribed Text Revision', 'Poetry Revision', 'Drama Revision', 'Prose Revision', 'Literary Terms Review', 'Past WAEC Questions', 'Mock Examination', 'Performance Review']],
    [10, 'Final Assessment & Graduation', '🏆', 'final', 'content', ['Complete Literature Revision', 'Full Mock Examination', 'Essay Assessment', 'Objective Assessment', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  // Match genuine assessments (incl. plurals); NOT bare "Tests".
  function isAssessment(name) { return /(?:Quiz(?:zes)?|Exams?|Examinations?|Assessments?)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'the WASSCE Literature exam', devices: 'literary appreciation & devices', poetry: 'poetry', drama: 'drama', prose: 'prose', african: 'African literature', nonafrican: 'non-African / world literature', essay: 'literary essay writing & exam skills', revision: 'revision', final: 'your final WASSCE preparation' };

  var TEMPLATES = {
    devices: '<h4>📥 Guide: Literary Terms Quick Reference</h4><ul><li><strong>Theme:</strong> the central idea/message of a text.</li><li><strong>Plot:</strong> the sequence of events (exposition, rising action, climax, falling action, resolution).</li><li><strong>Characterization:</strong> how a writer reveals a character (direct/indirect).</li><li><strong>Point of view:</strong> first person (I), third person, omniscient.</li><li><strong>Irony:</strong> verbal, situational, dramatic. <strong>Symbolism:</strong> an object standing for an idea.</li></ul>',
    poetry: '<h4>📥 Guide: Poetry Analysis</h4><ul><li><strong>Types:</strong> sonnet, ode, elegy, ballad, lyric, epic, free verse.</li><li><strong>Sound devices:</strong> alliteration, assonance, onomatopoeia, rhyme.</li><li><strong>Structure:</strong> lines, stanzas, rhythm (metre) and rhyme scheme (e.g. ABAB).</li><li><strong>Figurative language:</strong> simile, metaphor, personification, imagery.</li><li><strong>When analysing:</strong> state the theme, then show HOW devices convey it, with quotations.</li></ul>',
    drama: '<h4>📥 Guide: Drama Analysis</h4><ul><li><strong>Elements:</strong> plot, character, dialogue, setting, conflict, theme.</li><li><strong>Tragedy:</strong> a serious play ending in the downfall of the hero (a tragic flaw).</li><li><strong>Comedy:</strong> a light play with a happy ending.</li><li><strong>Techniques:</strong> soliloquy, aside, dramatic irony, stage directions.</li><li><strong>Answering:</strong> refer to specific acts/scenes and quote briefly.</li></ul>',
    prose: '<h4>📥 Guide: Prose Analysis</h4><ul><li><strong>Types:</strong> novel, novella, short story (fiction); biography, essay (non-fiction).</li><li><strong>Plot development:</strong> exposition → rising action → climax → resolution.</li><li><strong>Narrative technique:</strong> narrator, flashback, foreshadowing, point of view.</li><li><strong>Characters:</strong> protagonist, antagonist; round vs flat; dynamic vs static.</li><li><strong>Setting</strong> = time and place; it shapes mood and theme.</li></ul>',
    essay: '<h4>📥 Template: Literary Essay Structure</h4><ol><li><strong>Introduction:</strong> name the text and author; state your line of argument.</li><li><strong>Body:</strong> one point per paragraph — point → evidence (short quotation) → explanation.</li><li><strong>Use present tense</strong> and refer closely to the text.</li><li><strong>Conclusion:</strong> sum up and link back to the question.</li></ol><p>Answer the question set — do NOT just retell the story.</p>'
  };
  function templateFor(name, skill) {
    if (skill === 'devices' || /Theme|Plot|Characterization|Irony|Symbolism|Imagery|Figures of Speech|Point of View|Mood/i.test(name)) return TEMPLATES.devices;
    if (skill === 'poetry' || /Poetry|Poetic|Rhythm|Rhyme|Sound Devices|Poem/i.test(name)) return TEMPLATES.poetry;
    if (skill === 'drama' || /Drama|Tragedy|Comedy|Dramatic/i.test(name)) return TEMPLATES.drama;
    if (skill === 'prose' || /Prose|Narrative|Plot Development/i.test(name)) return TEMPLATES.prose;
    if (skill === 'essay' || /Essay|Answering WAEC|Quoting|Examination Techniques/i.test(name)) return TEMPLATES.essay;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'WASSCE Literature skills';
    var focus = position % 2 ? 'clear definitions, text examples and timed essay practice' : 'understanding the concept and applying it to WAEC-style questions with quotations';
    var tpl = templateFor(name, skill);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>WASSCE Literature · ' + esc(moduleTitle) + '</strong><span>WAEC syllabus aligned</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes and examples, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Define <em>' + esc(name) + '</em> precisely and know how WAEC tests it in objective and essay questions.</li>' +
      '<li>Study how the device/idea works in a text, and support points with short quotations.</li>' +
      '<li>Practise with past-question-style items, answering the question rather than retelling the story.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this guide in your revision folder.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Answer one WAEC past question on <em>' + esc(name) + '</em>, using textual evidence, and check it against the marking scheme.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Find and explain an example of <em>' + esc(name) + '</em> in a prescribed text or poem.</li>' +
      '<li><strong>Exercise 2:</strong> Write a short answer under exam timing, quoting evidence, and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> in your full WASSCE Literature in English preparation.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on practice</span></div><h3>' + esc(name) + '</h3>' +
      '<p>Complete this literary analysis/essay task with textual evidence, then review your work against the WAEC marking scheme.</p>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'The WASSCE Literature in English exam is set by:', opts: ['A private company', 'WAEC (West African Examinations Council)', 'A school only', 'The student'], correct: 1, exp: 'WAEC sets and marks the WASSCE.' },
      { q: 'The three main genres of literature are:', opts: ['Poetry, drama and prose', 'Nouns, verbs and adjectives', 'Past, present and future', 'Comedy only'], correct: 0, exp: 'Literature is grouped into poetry, drama and prose.' },
      { q: 'Literature is best described as:', opts: ['Only true stories', 'Imaginative written works that reflect life', 'A branch of maths', 'A list of grammar rules'], correct: 1, exp: 'Literature is imaginative writing reflecting human experience.' },
      { q: 'In the essay paper you gain marks mainly for:', opts: ['Retelling the whole story', 'Answering the question with points and textual evidence', 'Length only', 'Guessing'], correct: 1, exp: 'Answer the question with argument and quotations, not summary.' },
      { q: 'A good way to prepare for Literature is to:', opts: ['Never read the texts', 'Read the prescribed texts and practise essays', 'Only memorise summaries', 'Skip poetry'], correct: 1, exp: 'Read the set texts closely and practise essay answers.' },
      { q: 'WASSCE Literature usually has:', opts: ['Only an oral test', 'An objective paper and essay/theory papers on set texts', 'One essay only', 'A practical only'], correct: 1, exp: 'It includes objective and essay papers on prescribed texts.' }
    ],
    devices: [
      { q: 'The central idea or message of a text is its:', opts: ['Plot', 'Theme', 'Setting', 'Title'], correct: 1, exp: 'The theme is the main idea/message.' },
      { q: 'The sequence of events in a story is the:', opts: ['Theme', 'Plot', 'Tone', 'Genre'], correct: 1, exp: 'Plot is the arrangement of events.' },
      { q: 'Giving human qualities to non-human things is:', opts: ['Simile', 'Personification', 'Hyperbole', 'Irony'], correct: 1, exp: 'Personification gives human traits to objects/ideas.' },
      { q: 'A comparison using "like" or "as" is a:', opts: ['Metaphor', 'Simile', 'Symbol', 'Pun'], correct: 1, exp: 'A simile uses "like" or "as".' },
      { q: 'When the audience knows something a character does not, it is:', opts: ['Verbal irony', 'Dramatic irony', 'A metaphor', 'A theme'], correct: 1, exp: 'Dramatic irony: the audience knows more than the character.' },
      { q: 'The general atmosphere or feeling of a work is its:', opts: ['Mood', 'Plot', 'Setting only', 'Rhyme'], correct: 0, exp: 'Mood is the feeling/atmosphere created for the reader.' }
    ],
    poetry: [
      { q: 'A 14-line poem is typically a:', opts: ['Ballad', 'Sonnet', 'Ode', 'Epic'], correct: 1, exp: 'A sonnet has 14 lines.' },
      { q: 'The repetition of initial consonant sounds is:', opts: ['Assonance', 'Alliteration', 'Rhyme', 'Metaphor'], correct: 1, exp: 'Alliteration repeats initial consonant sounds.' },
      { q: 'A group of lines in a poem is called a:', opts: ['Paragraph', 'Stanza', 'Chapter', 'Scene'], correct: 1, exp: 'Poems are divided into stanzas.' },
      { q: 'Onomatopoeia refers to words that:', opts: ['Rhyme', 'Imitate sounds (e.g. buzz, hiss)', 'Are long', 'Mean the opposite'], correct: 1, exp: 'Onomatopoeic words imitate natural sounds.' },
      { q: 'The pattern of rhymes at the ends of lines is the:', opts: ['Rhyme scheme', 'Plot', 'Theme', 'Setting'], correct: 0, exp: 'Rhyme scheme is the pattern (e.g. ABAB).' },
      { q: 'A poem that mourns the dead is an:', opts: ['Ode', 'Elegy', 'Epic', 'Ballad'], correct: 1, exp: 'An elegy is a mournful poem, often for the dead.' }
    ],
    drama: [
      { q: 'A play with a serious tone that ends in the hero’s downfall is a:', opts: ['Comedy', 'Tragedy', 'Sonnet', 'Novel'], correct: 1, exp: 'Tragedy ends in the downfall of the protagonist.' },
      { q: 'A speech by a character alone on stage revealing their thoughts is a:', opts: ['Dialogue', 'Soliloquy', 'Prologue', 'Chorus'], correct: 1, exp: 'A soliloquy is spoken alone, revealing inner thoughts.' },
      { q: 'The main character of a play is the:', opts: ['Antagonist', 'Protagonist', 'Narrator', 'Chorus'], correct: 1, exp: 'The protagonist is the central character.' },
      { q: 'Conflict in drama is:', opts: ['The setting', 'The struggle between opposing forces', 'The rhyme', 'The title'], correct: 1, exp: 'Conflict drives the plot of a play.' },
      { q: 'Instructions telling actors how to move/speak are:', opts: ['Themes', 'Stage directions', 'Rhymes', 'Metaphors'], correct: 1, exp: 'Stage directions guide performance.' },
      { q: 'A play written mainly to amuse and end happily is a:', opts: ['Tragedy', 'Comedy', 'Epic', 'Elegy'], correct: 1, exp: 'Comedy is light and usually ends happily.' }
    ],
    prose: [
      { q: 'A long fictional prose narrative is a:', opts: ['Poem', 'Novel', 'Play', 'Sonnet'], correct: 1, exp: 'A novel is an extended work of prose fiction.' },
      { q: 'The character who opposes the protagonist is the:', opts: ['Narrator', 'Antagonist', 'Author', 'Hero'], correct: 1, exp: 'The antagonist opposes the protagonist.' },
      { q: 'A flashback is a technique that:', opts: ['Predicts the future', 'Returns to an earlier event', 'Ends the story', 'Rhymes lines'], correct: 1, exp: 'A flashback narrates an earlier event.' },
      { q: 'The time and place of a story is its:', opts: ['Plot', 'Setting', 'Theme', 'Tone'], correct: 1, exp: 'Setting = time and place of the action.' },
      { q: 'A "round" character is one who is:', opts: ['Simple and unchanging', 'Complex and fully developed', 'A villain only', 'Never described'], correct: 1, exp: 'Round characters are complex and developed.' },
      { q: 'Foreshadowing is used to:', opts: ['Hint at events to come', 'Rhyme words', 'End the plot', 'Describe setting only'], correct: 0, exp: 'Foreshadowing hints at what will happen later.' }
    ],
    african: [
      { q: 'A major concern of much African literature is:', opts: ['Space travel only', 'Culture, tradition and the colonial experience', 'Only romance', 'Cooking'], correct: 1, exp: 'African literature often explores culture, tradition and colonialism.' },
      { q: 'Post-colonial literature mainly examines life:', opts: ['Before writing existed', 'After independence from colonial rule', 'On other planets', 'Only in Europe'], correct: 1, exp: 'Post-colonial texts explore the era after colonial rule.' },
      { q: 'Oral tradition in African literature includes:', opts: ['Folktales, proverbs and songs', 'Only novels', 'Only English poems', 'Nothing spoken'], correct: 0, exp: 'Oral tradition covers folktales, proverbs, praise songs, etc.' },
      { q: 'Chinua Achebe is a celebrated:', opts: ['African novelist', 'Composer', 'Scientist', 'Painter'], correct: 0, exp: 'Achebe is a renowned African novelist (Things Fall Apart).' },
      { q: 'A common theme in African literature is the:', opts: ['Conflict of tradition and modernity', 'Rules of chess', 'Weather forecast', 'None'], correct: 0, exp: 'Tradition vs modernity/change is a frequent theme.' },
      { q: 'Proverbs in African writing are often used to:', opts: ['Confuse readers', 'Convey wisdom and cultural values', 'Fill space', 'Rhyme only'], correct: 1, exp: 'Proverbs carry wisdom and cultural meaning.' }
    ],
    world: [
      { q: 'William Shakespeare is best known as a:', opts: ['African novelist', 'English playwright and poet', 'Scientist', 'Composer'], correct: 1, exp: 'Shakespeare wrote plays and sonnets in English.' },
      { q: 'Comparative literature involves:', opts: ['Reading one text only', 'Comparing texts, themes or writers', 'Ignoring themes', 'Writing music'], correct: 1, exp: 'It compares works across authors/cultures.' },
      { q: 'A universal literary theme is one that:', opts: ['Applies to all humanity (e.g. love, death)', 'Only fits one town', 'Is about grammar', 'Never repeats'], correct: 0, exp: 'Universal themes (love, death, justice) cross cultures.' },
      { q: 'Classical literature refers to works from:', opts: ['This year', 'Ancient Greece and Rome (and enduring classics)', 'Only Africa', 'Only 2020'], correct: 1, exp: 'Classical works come from ancient Greek/Roman traditions.' },
      { q: 'A tragedy by Shakespeare is:', opts: ['Macbeth', 'A poem by Achebe', 'A folktale', 'A textbook'], correct: 0, exp: 'Macbeth is a Shakespearean tragedy.' },
      { q: 'Reading world literature helps a student to:', opts: ['Compare cultures and broaden understanding', 'Forget African texts', 'Avoid themes', 'Skip analysis'], correct: 0, exp: 'World literature broadens comparative understanding.' }
    ],
    examstrat: [
      { q: 'A literary essay should mainly:', opts: ['Retell the whole story', 'Answer the question with points and quotations', 'List characters only', 'Be one sentence'], correct: 1, exp: 'Argue and support with evidence; do not just summarise.' },
      { q: 'When quoting from a text you should:', opts: ['Quote whole pages', 'Use short, relevant quotations and explain them', 'Never quote', 'Change the words'], correct: 1, exp: 'Use brief, apt quotations and explain their effect.' },
      { q: 'Good time management in the exam means:', opts: ['Spending all time on one question', 'Allocating time per question and moving on', 'Ignoring the clock', 'Rushing everything'], correct: 1, exp: 'Pace yourself so every required question is attempted.' },
      { q: 'A common Literature mistake is:', opts: ['Answering the question', 'Retelling the story instead of analysing', 'Quoting evidence', 'Planning the essay'], correct: 1, exp: 'Narration without analysis loses marks.' },
      { q: 'Literary essays are usually written in the:', opts: ['Future tense', 'Present tense', 'Past tense only', 'No tense'], correct: 1, exp: 'Use the present tense to discuss texts.' },
      { q: 'A full mock examination helps you:', opts: ['Nothing', 'Practise under real conditions and find weak areas', 'Waste time', 'Avoid revision'], correct: 1, exp: 'Mocks build exam stamina and reveal gaps to fix.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', devices: 'devices', poetry: 'poetry', drama: 'drama', prose: 'prose', african: 'african', nonafrican: 'world', essay: 'examstrat', revision: 'examstrat', final: 'examstrat' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.devices, BANK.poetry, BANK.drama, BANK.prose, BANK.african, BANK.world, BANK.examstrat);
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
        var qid = 'wl-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH WASSCE Literature in English Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH WASSCE Literature in English Certificate you must:</p><ul><li>Complete the lessons in Modules 1–9.</li><li>Read the prescribed texts and complete the essay practice.</li><li>Pass the module quizzes and the Essay & Objective Assessments.</li><li>Pass the final Certificate of Completion assessment.</li></ul><p>Use this together with the official WAEC syllabus, your teacher’s guidance, the prescribed texts and past questions.</p></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Full Mock Examination|Mock Examination|Essay Assessment|Objective Assessment/i.test(name);
        var count = /Full Mock Examination/i.test(name) ? 20 : big ? 15 : 8;
        var aid = 'wl-m' + num + '-a' + flat;
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
      var pqid = 'wl-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'WASSCE Literature in English: Complete Preparation',
    shortDesc: 'A full 10-module WASSCE Literature in English preparation course aligned to the WAEC syllabus: literary appreciation & devices, poetry, drama, prose, African and non-African literature, literary essay writing & exam skills, revision, and a full mock examination with a Certificate of Completion.',
    category: 'WASSCE Exam Prep',
    icon: '📚',
    gradient: 'linear-gradient(135deg,#8A2FB0,#0B1F3A)',
    instructor: 'TIH WASSCE Faculty',
    instructorTitle: 'Tolbert Innovation Hub, WASSCE PRO',
    instructorBio: 'The TIH WASSCE PRO faculty prepares Liberian and West African students for the WASSCE Literature in English examination with close reading, literary analysis, essay coaching and past-question practice.',
    rating: 4.9, reviewCount: 0, students: 'WASSCE candidates',
    duration: '55h+', level: 'WASSCE',
    price: '$3', origPrice: '', isFree: false, badge: '',
    certId: 'TIH-2026-WAS-LITE',
    learn: [
      'Understand the WAEC Literature in English exam structure and marking scheme',
      'Identify and explain literary devices, themes and techniques',
      'Analyse poetry, drama and prose with textual evidence',
      'Study African and non-African (world) literature and their themes',
      'Write high-scoring literary essays and quote effectively',
      'Apply exam techniques with timed past-question and mock practice'
    ],
    requirements: ['A phone or computer with internet', 'The WAEC prescribed texts (poetry, drama, prose)', 'A literature notebook for terms, themes and quotations', 'Commitment to reading and timed essay practice'],
    about: [
      'This is the complete TIH WASSCE Literature in English preparation course, organised into ten modules aligned to the WAEC Literature in English syllabus and examination structure (objective and essay/theory on prescribed texts).',
      'Every content lesson has a video and printable notes with examples; downloadable resources include a literary-terms guide, essay templates and analysis worksheets. The course ends with a full mock examination and a Certificate of Completion.',
      'Use this course together with the official WAEC syllabus, the prescribed texts, your teacher’s guidance and WAEC past questions for best results.'
    ],
    modules: modules,
    quizzes: quizzes,
    mockTest: 'wassce-literature',
    _wassceLitFull: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[WASSCE-LITERATURE] modules=' + modules.length + ' videoLessons=' + videoCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
