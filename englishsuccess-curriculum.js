/* TIH Complete English for Academic & Professional Success Certificate.
   Rebuilds COURSES_DB['english-success'] into the full 20-module program taking
   a learner to advanced English for academic studies, the workplace and
   professional communication: grammar, vocabulary, the four skills, academic &
   professional writing, presentations, workplace & international communication,
   research, digital literacy, career, exam prep, projects, a capstone and a
   graduation module. Every content lesson has a video + printable notes;
   project lessons carry briefs and downloadable templates. Modelled on
   complit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'english-success';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._engFullBuilt) return;

  var V = ['4AetJ7xJTdw', 'BBVsrdwuLeE', 'tBAbIobh3uo', 'ZNOJ1RSJa4c', 'zBLsjez-D3s', 'q8qmJeBxk4Q', 'gsEmGSVU7cA', 'edmfgGseslg', '3Tu1jN65slw', 'GlN51CS_udI', 'ralOdKh2eAw', 'A2TwNWiYIMI', '-3mFnAk9sbw', 'PAthQKLhBTs', 'u03GxFNE-5Y', 'xi2aBP0LnV4'];
  var VIDEOS = {
    orientation: ['A04SlloTmHM'],
    grammar: ['AVYfyTvc9KY'],
    vocab: ['WEh-zMurp_I'],
    reading: ['NIHmVJv9IGw'],
    listening: ['bEB8-SWMYhI'],
    speaking: ['I2ThEG1JBYM'],
    writing: ['GAJO_gpRe6c'],
    academic: ['Ycsx3yyf8zI'],
    professional: ['p_zVwrFelBQ'],
    presentation: ['eIho2S0ZahI'],
    workplace: ['nMbyWcilhpY'],
    research: ['wdmSo2_e18A'],
    digital: ['y2kg3MOk1sY'],
    career: ['ISnxs-NlRYg'],
    leadership: ['qp0HIF3SfI4'],
    international: ['FFxbvib6aVw'],
    exam: ['4V0wKH6hd30'],
    projects: ['sPlxi2n-w8o'],
    capstone: ['sPlxi2n-w8o'],
    assessment: ['sPlxi2n-w8o']
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects|assessment
  var curriculum = [
    [1, 'Course Orientation', '🧭', 'orientation', 'content', ['Welcome to the Course', 'Course Objectives', 'Assessing Your English Level', 'Learning Strategies', 'Academic vs. Professional English', 'Setting Language Goals', 'Study Plan', 'Final Capstone Project', 'Certificate Requirements']],
    [2, 'English Grammar Fundamentals', '📐', 'grammar', 'content', ['Parts of Speech', 'Sentence Structure', 'Nouns', 'Pronouns', 'Verbs', 'Verb Tenses', 'Subject-Verb Agreement', 'Adjectives', 'Adverbs', 'Articles', 'Prepositions', 'Conjunctions', 'Modals', 'Active & Passive Voice', 'Direct & Indirect Speech', 'Conditionals', 'Relative Clauses', 'Punctuation', 'Common Grammar Errors', 'Grammar Assessment']],
    [3, 'Vocabulary Development', '📚', 'vocab', 'content', ['Everyday Vocabulary', 'Academic Vocabulary', 'Professional Vocabulary', 'Business English Terms', 'Word Formation', 'Prefixes & Suffixes', 'Synonyms & Antonyms', 'Collocations', 'Idioms', 'Phrasal Verbs', 'Context Clues', 'Vocabulary Building Strategies']],
    [4, 'Reading Skills', '📖', 'reading', 'content', ['Reading Strategies', 'Skimming', 'Scanning', 'Identifying Main Ideas', 'Supporting Details', 'Making Inferences', 'Vocabulary in Context', 'Reading Academic Articles', 'Reading Business Documents', 'Reading Assessment']],
    [5, 'Listening Skills', '🎧', 'listening', 'content', ['Active Listening', 'Listening for Main Ideas', 'Listening for Details', 'Note-Taking Skills', 'Listening to Lectures', 'Listening to Business Meetings', 'Understanding Different English Accents', 'Listening Assessment']],
    [6, 'Speaking Skills', '🗣️', 'speaking', 'content', ['Pronunciation', 'Intonation', 'Fluency Development', 'Everyday Conversations', 'Academic Discussions', 'Public Speaking', 'Business Meetings', 'Telephone Communication', 'Presentation Skills', 'Speaking Assessment']],
    [7, 'Writing Fundamentals', '✍️', 'writing', 'content', ['Sentence Writing', 'Paragraph Writing', 'Essay Writing', 'Academic Writing Style', 'Writing Clearly and Concisely', 'Editing and Proofreading', 'Writing Assessment']],
    [8, 'Academic Writing', '🎓', 'academic', 'content', ['Research Essays', 'Reports', 'Literature Reviews', 'Summaries', 'Paraphrasing', 'Referencing & Citations', 'Avoiding Plagiarism', 'Academic Writing Project']],
    [9, 'Professional Writing', '💼', 'professional', 'content', ['Business Emails', 'Letters', 'Memorandums', 'Meeting Minutes', 'Reports', 'Proposals', 'Resume (CV) Writing', 'Cover Letters', 'LinkedIn Profile Writing', 'Professional Writing Project']],
    [10, 'Presentation & Public Speaking', '📽️', 'presentation', 'content', ['Structuring a Presentation', 'Creating Presentation Slides', 'Speaking with Confidence', 'Body Language', 'Audience Engagement', 'Handling Questions', 'Presentation Practice', 'Presentation Assessment']],
    [11, 'Workplace Communication', '🏢', 'workplace', 'content', ['Office Communication', 'Professional Etiquette', 'Team Collaboration', 'Giving & Receiving Feedback', 'Negotiation Skills', 'Conflict Resolution', 'Leadership Communication', 'Workplace Scenarios']],
    [12, 'Research & Critical Thinking', '🔎', 'research', 'content', ['Academic Research', 'Evaluating Sources', 'Fact vs. Opinion', 'Critical Reading', 'Critical Writing', 'Problem Solving', 'Analytical Thinking', 'Research Project']],
    [13, 'Digital Literacy & AI', '🤖', 'digital', 'content', ['Online Research', 'Microsoft Word', 'Google Docs', 'Grammarly', 'ChatGPT for Learning', 'AI Writing Tools', 'Responsible AI Use', 'Digital Collaboration']],
    [14, 'Career Development', '📈', 'career', 'content', ['Job Search Skills', 'Resume Writing', 'Cover Letters', 'Interview Preparation', 'Workplace English', 'Networking', 'Personal Branding', 'Career Planning']],
    [15, 'Leadership & Professional Skills', '🌟', 'leadership', 'content', ['Leadership Communication', 'Emotional Intelligence', 'Time Management', 'Teamwork', 'Decision Making', 'Problem Solving', 'Professional Ethics', 'Workplace Productivity']],
    [16, 'International English', '🌍', 'international', 'content', ['British English vs. American English', 'Common International Expressions', 'Cross-Cultural Communication', 'English for Travel', 'English for International Business', 'Global Workplace Communication', 'Intercultural Awareness', 'International Communication Project']],
    [17, 'Practical Projects', '🏗️', 'projects', 'projects', ['Write an Academic Essay', 'Write a Business Proposal', 'Deliver a Presentation', 'Conduct a Meeting', 'Write a Professional Email', 'Create a Resume & Cover Letter', 'Research Project', 'Group Discussion', 'Interview Simulation', 'Professional Portfolio']],
    [18, 'Exam Preparation', '📝', 'exam', 'content', ['TOEFL Introduction', 'IELTS Introduction', 'SAT Reading & Writing Overview', 'Academic Vocabulary Review', 'Grammar Review', 'Practice Tests', 'Test-Taking Strategies', 'Exam Readiness Assessment']],
    [19, 'Capstone Project', '🏆', 'capstone', 'projects', ['Select a Research Topic', 'Conduct Research', 'Write an Academic Report', 'Prepare a Business Proposal', 'Deliver a Professional Presentation', 'Participate in a Panel Discussion', 'Submit a Professional Portfolio', 'Final Evaluation']],
    [20, 'Assessments & Graduation', '🎓', 'assessment', 'assessment', ['Grammar Assessment', 'Vocabulary Assessment', 'Reading Assessment', 'Listening Assessment', 'Speaking Assessment', 'Writing Assessment', 'Midterm Examination', 'Final Examination', 'Capstone Project Evaluation', 'Professional Portfolio Review', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { orientation: 'course foundations', grammar: 'English grammar', vocab: 'vocabulary', reading: 'reading skills', listening: 'listening skills', speaking: 'speaking skills', writing: 'writing fundamentals', academic: 'academic writing', professional: 'professional writing', presentation: 'presentation & public speaking', workplace: 'workplace communication', research: 'research & critical thinking', digital: 'digital literacy & AI', career: 'career development', leadership: 'leadership & professional skills', international: 'international English', exam: 'exam preparation', projects: 'practical English projects', capstone: 'your capstone project', assessment: 'your English skills' };

  var TEMPLATES = {
    grammar: '<h4>📥 Resource: Grammar Handbook (quick reference)</h4><ul><li>Subject–verb agreement: singular subject → singular verb</li><li>Tenses: keep them consistent within a text</li><li>Articles: a/an (non-specific), the (specific)</li><li>Punctuation: comma + FANBOYS or semicolon to join clauses</li><li>Common errors: its/it’s, their/there/they’re, fewer/less</li></ul>',
    vocab: '<h4>📥 Resource: Academic Vocabulary List (sample)</h4><p>Learn each word in context:</p><ul><li>analyse, evaluate, significant, furthermore, however</li><li>demonstrate, indicate, hypothesis, framework, criteria</li><li>nevertheless, consequently, substantial, approach, context</li></ul><p>Add 10 words a day with an example sentence.</p>',
    email: '<h4>📥 Template: Business Email</h4><ul><li>Subject: clear and specific</li><li>Greeting: Dear [Name],</li><li>Opening: purpose in one line</li><li>Body: concise, one idea per paragraph</li><li>Action/close: what you need + polite close</li><li>Sign-off: Kind regards, [Name & title]</li></ul>',
    essay: '<h4>📥 Template: Academic Essay</h4><ol><li>Introduction (hook, background, thesis)</li><li>Body paragraph 1 (topic sentence, evidence, analysis)</li><li>Body paragraph 2–3 (same structure)</li><li>Counter-argument (if relevant)</li><li>Conclusion (restate thesis, summarise, closing thought)</li><li>References/citations</li></ol>',
    resume: '<h4>📥 Template: Resume &amp; Cover Letter</h4><p><strong>Resume:</strong> Contact · Profile summary · Experience (achievements) · Education · Skills · References.</p><p><strong>Cover letter:</strong> Why this role · relevant achievement · why this employer · call to action.</p>',
    presentation: '<h4>📥 Template: Presentation</h4><ol><li>Title slide</li><li>Agenda/overview</li><li>Problem/context</li><li>Key points (1 idea per slide)</li><li>Evidence/examples</li><li>Summary &amp; call to action</li><li>Q&amp;A / thank you</li></ol>',
    planner: '<h4>📥 Resource: Study Planner</h4><ul><li>Weekly goals for each skill (grammar, vocab, reading, listening, speaking, writing)</li><li>Daily 30–45 min practice slots</li><li>One writing task + one speaking task per week</li><li>Weekly self-review of errors</li></ul>'
  };
  function templateFor(name) {
    if (/Common Grammar Errors|Parts of Speech|Grammar Review/i.test(name)) return TEMPLATES.grammar;
    if (/Academic Vocabulary|Academic Vocabulary Review/i.test(name)) return TEMPLATES.vocab;
    if (/Business Emails|Professional Email|Write a Professional Email/i.test(name)) return TEMPLATES.email;
    if (/Essay Writing|Research Essays|Write an Academic Essay|Write an Academic Report/i.test(name)) return TEMPLATES.essay;
    if (/Resume|Cover Letters|Create a Resume/i.test(name)) return TEMPLATES.resume;
    if (/Structuring a Presentation|Creating Presentation Slides|Deliver a Presentation|Deliver a Professional Presentation/i.test(name)) return TEMPLATES.presentation;
    if (/Study Plan/i.test(name)) return TEMPLATES.planner;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'English skills';
    var focus = position % 2 ? 'clear rules, real examples and lots of practice' : 'understanding the skill, using it in context and reviewing your work';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>English for Success · ' + esc(moduleTitle) + '</strong><span>Academic &amp; professional</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand the rule or skill behind <em>' + esc(name) + '</em>.</li>' +
      '<li>See it used in real academic and professional English.</li>' +
      '<li>Practise it yourself in speaking or writing and review your errors.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this resource.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Use <em>' + esc(name) + '</em> in a short spoken or written English task about your studies, work or community.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Practise <em>' + esc(name) + '</em> with a short example.</li>' +
      '<li><strong>Exercise 2:</strong> Repeat under exam/real conditions and note one improvement.</li></ol>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to advanced academic &amp; professional English.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical English project. Complete it to a professional standard and add it to your communication portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Plan your content, audience and purpose.</li><li>Produce the piece (writing, speaking or presentation) using what you have learned.</li><li>Edit/rehearse, get feedback, and finalise it for your portfolio.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A polished piece of academic or professional English for your portfolio.</div>') +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Academic English is generally more:', opts: ['Casual and slangy', 'Formal, precise and evidence-based', 'Emotional', 'Random'], correct: 1, exp: 'Academic English is formal, precise and supported by evidence.' },
      { q: 'The best way to improve English is to:', opts: ['Only read grammar rules', 'Practise all four skills regularly and review errors', 'Avoid speaking', 'Memorise the dictionary'], correct: 1, exp: 'Balanced practice with error review builds real proficiency.' },
      { q: 'Setting language goals helps you:', opts: ['Waste time', 'Focus and measure your progress', 'Avoid practice', 'Skip review'], correct: 1, exp: 'Clear goals guide focused, measurable practice.' },
      { q: 'A capstone project lets you:', opts: ['Skip learning', 'Show your combined academic and professional English', 'Only take a quiz', 'Memorise terms'], correct: 1, exp: 'The capstone integrates all your English skills.' },
      { q: 'Professional English should be:', opts: ['Rude', 'Clear, polite and appropriate to the audience', 'Full of slang', 'Very long'], correct: 1, exp: 'Professional English is clear, courteous and audience-appropriate.' },
      { q: 'Reviewing your mistakes is important because it:', opts: ['Wastes time', 'Turns errors into learning and improvement', 'Lowers your level', 'Is optional'], correct: 1, exp: 'Error review is how practice becomes progress.' }
    ],
    grammar: [
      { q: 'Which sentence is correct?', opts: ['She go to school.', 'She goes to school.', 'She going school.', 'She gone school.'], correct: 1, exp: 'Third-person singular takes "goes".' },
      { q: 'The present perfect is formed with:', opts: ['do + verb', 'have/has + past participle', 'will + verb', 'be + verb'], correct: 1, exp: 'Present perfect = have/has + past participle.' },
      { q: 'Choose the correct article: "___ honest man".', opts: ['A', 'An', 'The only', 'No article'], correct: 1, exp: '"Honest" begins with a vowel sound, so "an".' },
      { q: 'A relative clause begins with words like:', opts: ['and/but', 'who/which/that', 'very/quite', 'always/never'], correct: 1, exp: 'Relative pronouns: who, which, that, whose, where.' },
      { q: 'Passive voice of "They built the house" is:', opts: ['The house was built.', 'The house builds.', 'They was built.', 'The house building.'], correct: 0, exp: 'Passive = be + past participle: was built.' },
      { q: 'A comma splice can be fixed with:', opts: ['Nothing', 'A semicolon or comma + conjunction', 'More commas', 'A dash only'], correct: 1, exp: 'Join independent clauses correctly with ; or , + FANBOYS.' }
    ],
    vocab: [
      { q: 'A collocation is:', opts: ['A spelling rule', 'Words that naturally go together', 'A tense', 'An essay'], correct: 1, exp: 'e.g. "make a decision", "heavy rain".' },
      { q: 'The prefix "re-" usually means:', opts: ['Not', 'Again', 'Before', 'Very'], correct: 1, exp: '"Re-" means again (e.g. rewrite).' },
      { q: 'A synonym for "important" is:', opts: ['Trivial', 'Significant', 'Tiny', 'Loud'], correct: 1, exp: 'Significant means important.' },
      { q: 'Context clues help you:', opts: ['Ignore words', 'Guess a word’s meaning from the surrounding text', 'Spell faster', 'Skip reading'], correct: 1, exp: 'Surrounding words reveal meaning.' },
      { q: 'Academic vocabulary is best learned:', opts: ['As isolated lists', 'In context with example sentences', 'By translation only', 'Not at all'], correct: 1, exp: 'Words stick when learned and used in context.' },
      { q: 'An antonym of "increase" is:', opts: ['Grow', 'Decrease', 'Rise', 'Expand'], correct: 1, exp: 'Decrease is the opposite of increase.' }
    ],
    reading: [
      { q: 'Skimming is reading to:', opts: ['Find one detail', 'Get the general idea quickly', 'Memorise everything', 'Translate'], correct: 1, exp: 'Skimming gets the gist quickly.' },
      { q: 'Scanning is reading to:', opts: ['Get the gist', 'Find specific information fast', 'Read every word', 'Guess'], correct: 1, exp: 'Scanning locates specific facts.' },
      { q: 'An inference is:', opts: ['Stated directly', 'Implied but not stated', 'The title', 'A vocabulary word'], correct: 1, exp: 'Inferences are supported but not written directly.' },
      { q: 'The main idea of a paragraph is often in the:', opts: ['Random line', 'Topic sentence', 'Last word', 'Title only'], correct: 1, exp: 'The topic sentence usually states the main idea.' },
      { q: '"Vocabulary in context" means choosing the meaning that:', opts: ['Sounds nice', 'Fits how the word is used in the text', 'Is longest', 'Is first in the dictionary'], correct: 1, exp: 'Pick the meaning that fits the context.' },
      { q: 'To answer a reading question you should:', opts: ['Guess from the title', 'Return to the relevant lines in the text', 'Use only memory', 'Read the last line only'], correct: 1, exp: 'Base answers on the text, not memory.' }
    ],
    listening: [
      { q: 'Active listening means:', opts: ['Waiting to talk', 'Focusing fully to understand the speaker', 'Ignoring', 'Interrupting'], correct: 1, exp: 'Active listening focuses on understanding.' },
      { q: 'Good note-taking captures:', opts: ['Every word', 'Main ideas and key details', 'Only names', 'Nothing'], correct: 1, exp: 'Capture main ideas and important details.' },
      { q: 'Signpost words like "however" signal:', opts: ['The end', 'A contrast or change in idea', 'Nothing', 'A break'], correct: 1, exp: 'They flag contrasts, examples and structure.' },
      { q: 'Understanding different accents improves with:', opts: ['Avoiding audio', 'Regular exposure to varied speakers', 'One accent only', 'Reading only'], correct: 1, exp: 'Exposure to many accents builds comprehension.' },
      { q: 'Listening for gist means listening for the:', opts: ['Exact words', 'Overall meaning', 'Spelling', 'Speed'], correct: 1, exp: 'Gist is the general meaning.' },
      { q: 'In a lecture you should note:', opts: ['Nothing', 'Main points and examples', 'Only the date', 'Only names'], correct: 1, exp: 'Record main points and supporting examples.' }
    ],
    speaking: [
      { q: 'Fluency means speaking:', opts: ['Very fast always', 'Smoothly and understandably without long pauses', 'Perfectly with no errors', 'Only memorised lines'], correct: 1, exp: 'Fluency is smooth, understandable communication.' },
      { q: 'Intonation refers to:', opts: ['Spelling', 'The rise and fall of the voice', 'Grammar', 'Vocabulary size'], correct: 1, exp: 'Intonation is the melody of speech.' },
      { q: 'To improve pronunciation you should:', opts: ['Read silently', 'Listen and repeat aloud, and record yourself', 'Avoid speaking', 'Only study spelling'], correct: 1, exp: 'Imitation and self-recording improve pronunciation.' },
      { q: 'In a business meeting you should speak:', opts: ['Over others', 'Clearly, politely and to the point', 'Only in slang', 'Very quietly always'], correct: 1, exp: 'Be clear, courteous and concise.' },
      { q: 'A good way to build confidence is to:', opts: ['Avoid practice', 'Practise speaking regularly in low-stakes settings', 'Never make mistakes', 'Memorise the dictionary'], correct: 1, exp: 'Regular practice builds real speaking confidence.' },
      { q: 'On the telephone, because there are no visual cues, you should:', opts: ['Mumble', 'Speak clearly and confirm understanding', 'Rush', 'Whisper'], correct: 1, exp: 'Clarity and confirmation matter more on calls.' }
    ],
    writing: [
      { q: 'A paragraph should usually contain:', opts: ['Many unrelated ideas', 'One main idea with support', 'Only one word', 'No topic sentence'], correct: 1, exp: 'One clear idea per paragraph, with support.' },
      { q: 'A thesis statement:', opts: ['Is a question only', 'States the main argument of an essay', 'Is the title', 'Is a list'], correct: 1, exp: 'The thesis states the essay’s central claim.' },
      { q: 'Writing clearly and concisely means:', opts: ['Using long, complex words', 'Saying it simply and directly', 'Repeating ideas', 'Adding filler'], correct: 1, exp: 'Clear, concise writing communicates best.' },
      { q: 'Editing and proofreading should be done:', opts: ['Never', 'After drafting, to fix errors and improve clarity', 'Before writing', 'Only by others'], correct: 1, exp: 'Revise for content, then proofread for errors.' },
      { q: 'Transition words (e.g. "therefore") improve:', opts: ['Spelling', 'Cohesion between ideas', 'Handwriting', 'Length only'], correct: 1, exp: 'Transitions link ideas logically.' },
      { q: 'Academic writing style avoids:', opts: ['Evidence', 'Slang and casual contractions', 'Clarity', 'Structure'], correct: 1, exp: 'Academic writing is formal and evidence-based.' }
    ],
    professional: [
      { q: 'A professional email should have:', opts: ['No subject', 'A clear subject, greeting, concise body and sign-off', 'Only emojis', 'ALL CAPS'], correct: 1, exp: 'Structure and courtesy make emails professional.' },
      { q: 'A resume (CV) should highlight:', opts: ['Everything you ever did', 'Relevant skills and achievements clearly', 'Personal secrets', 'Only hobbies'], correct: 1, exp: 'Focus on relevant, achievement-based content.' },
      { q: 'A cover letter should explain:', opts: ['Nothing', 'Why you fit the role and employer', 'Your whole life', 'Only your name'], correct: 1, exp: 'Connect your value to the specific role.' },
      { q: 'Meeting minutes record:', opts: ['Nothing', 'Decisions and action items', 'Only jokes', 'The weather'], correct: 1, exp: 'Minutes capture decisions and who does what.' },
      { q: 'A business proposal should be:', opts: ['Vague', 'Clear, structured and benefit-focused', 'Very casual', 'Hidden'], correct: 1, exp: 'Proposals are clear, structured and persuasive.' },
      { q: 'A strong LinkedIn profile includes:', opts: ['Nothing', 'A clear headline, summary and experience', 'Only a photo', 'Random text'], correct: 1, exp: 'Headline, summary and achievements matter.' }
    ],
    presentation: [
      { q: 'A good presentation structure is:', opts: ['Random slides', 'Introduction, body (key points), conclusion', 'Only text', 'One long slide'], correct: 1, exp: 'Clear structure guides the audience.' },
      { q: 'Slides should be:', opts: ['Full of text', 'Clear and visual with key points', 'All one colour', 'Blank'], correct: 1, exp: 'Concise, visual slides support the speaker.' },
      { q: 'Good body language includes:', opts: ['Avoiding eye contact', 'Eye contact, open posture and gestures', 'Turning your back', 'Reading the screen'], correct: 1, exp: 'Confident body language engages the audience.' },
      { q: 'When handling questions you should:', opts: ['Ignore them', 'Listen, then answer clearly and honestly', 'Argue', 'Change the topic'], correct: 1, exp: 'Listen and respond clearly; it’s fine to say you’ll follow up.' },
      { q: 'To engage an audience you can:', opts: ['Read slides word-for-word', 'Use stories, questions and eye contact', 'Speak in a monotone', 'Face the wall'], correct: 1, exp: 'Interaction and delivery keep attention.' },
      { q: 'Rehearsing a presentation helps you:', opts: ['Waste time', 'Build confidence and smooth delivery', 'Forget content', 'Increase nerves'], correct: 1, exp: 'Practice improves timing, flow and confidence.' }
    ],
    research: [
      { q: 'Evaluating a source means checking its:', opts: ['Colour', 'Credibility, accuracy and relevance', 'Length only', 'Font'], correct: 1, exp: 'Assess authority, accuracy, currency and relevance.' },
      { q: 'A fact differs from an opinion because a fact:', opts: ['Is a feeling', 'Can be verified with evidence', 'Is always true forever', 'Is longer'], correct: 1, exp: 'Facts are verifiable; opinions are viewpoints.' },
      { q: 'Referencing/citations are used to:', opts: ['Fill space', 'Credit sources and avoid plagiarism', 'Confuse readers', 'Make it longer'], correct: 1, exp: 'Citations credit sources and support integrity.' },
      { q: 'Paraphrasing means:', opts: ['Copying word-for-word', 'Restating an idea in your own words (with credit)', 'Ignoring the source', 'Translating only'], correct: 1, exp: 'Paraphrasing restates ideas in your own words, still cited.' },
      { q: 'Critical thinking involves:', opts: ['Accepting everything', 'Questioning, analysing and evaluating information', 'Guessing', 'Memorising only'], correct: 1, exp: 'It questions and evaluates rather than accepts blindly.' },
      { q: 'Plagiarism is:', opts: ['Good practice', 'Using others’ work without credit', 'A citation style', 'A research method'], correct: 1, exp: 'Plagiarism is presenting others’ work as your own.' }
    ]
  };

  function bankKey(skill) {
    var map = { orientation: 'general', grammar: 'grammar', vocab: 'vocab', reading: 'reading', listening: 'listening', speaking: 'speaking', writing: 'writing', academic: 'writing', professional: 'professional', presentation: 'presentation', workplace: 'professional', research: 'research', digital: 'general', career: 'professional', leadership: 'professional', international: 'speaking', exam: 'reading', projects: 'general', capstone: 'general', assessment: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.grammar, BANK.vocab, BANK.reading, BANK.listening, BANK.speaking, BANK.writing, BANK.professional, BANK.presentation, BANK.research);
    var out = [];
    for (var i = 0; i < count; i++) { out.push(i < pool.length ? pool[i] : mixed[i % mixed.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) { return { title: name, moduleNum: 1, questions: pickQuestions(key, count).map(cloneQ) }; }
  function assessmentKey(name) {
    if (/Grammar/i.test(name)) return 'grammar';
    if (/Vocabulary/i.test(name)) return 'vocab';
    if (/Reading/i.test(name)) return 'reading';
    if (/Listening/i.test(name)) return 'listening';
    if (/Speaking/i.test(name)) return 'speaking';
    if (/Writing/i.test(name)) return 'writing';
    if (/Presentation/i.test(name)) return 'presentation';
    return 'general';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'en-m' + num + '-final';
        quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the program and unlock your TIH Certificate of Completion.</p></div>';
        flat += 1; quizCount += 1;
        return;
      }
      if (/^Certificate Requirements$/i.test(name)) {
        idx += 1;
        lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Resource', v: null, isQuiz: false });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–18.</li><li>Complete the practical projects in Module 17 (10 projects) and the exam prep in Module 18.</li><li>Complete the capstone in Module 19 and submit your professional portfolio.</li><li>Pass the skill assessments, the Midterm and Final Examinations, the Capstone Evaluation and the Portfolio Review.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (type === 'assessment') {
        var akey = assessmentKey(name);
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'en-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(akey, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'en-m' + num + '-a' + flat;
        quizzes[qk] = assessmentQuiz(key, name, 8);
        lessons.push({ t: '📝 ' + name, d: '8 questions', isQuiz: true, quizId: qk });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Answer this module assessment, then review each explanation to check your understanding.</p></div>';
        flat += 1; quizCount += 1;
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
      var pqid = 'en-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two exercises, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  var ex = COURSES_DB[CID];
  COURSES_DB[CID] = {
    id: CID,
    title: 'Complete English for Academic & Professional Success Certificate',
    shortDesc: 'A full 20-module program to advanced English for study and work: grammar, vocabulary, reading, listening, speaking, writing, academic & professional writing, presentations, workplace & international communication, research, digital literacy, career, exam prep (TOEFL/IELTS/SAT overview), 10 projects, a capstone and a Certificate of Completion.',
    category: 'English & Communication',
    icon: ex.icon || '🗣️',
    gradient: ex.gradient || 'linear-gradient(135deg,#4338ca,#6366f1)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH learners',
    duration: '150h+',
    level: 'Beginner → Advanced',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$150',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-ENGLISH-0001',
    learn: [
      'Master English grammar, vocabulary and the four core skills',
      'Write academic essays, reports and professional documents',
      'Speak confidently in conversations, meetings and presentations',
      'Communicate effectively in the workplace and across cultures',
      'Research, think critically and use digital & AI writing tools well',
      'Prepare for TOEFL/IELTS/SAT and build a professional portfolio'
    ],
    requirements: [
      'A basic to intermediate level of English to build from',
      'A device for writing tasks and to record speaking practice',
      'Consistent weekly practice across reading, writing, speaking and listening'
    ],
    about: [
      'This is the complete TIH English for Academic & Professional Success Certificate, rebuilt into twenty modules that take you from beginner/intermediate to advanced English for study and work.',
      'Every content lesson has a video and printable notes; downloadable resources cover a Grammar Handbook, Academic Vocabulary List, Business Email, Essay, Resume & Cover Letter and Presentation templates, and a Study Planner. Ten projects and a capstone build your communication portfolio.',
      'Software & tools: Microsoft Word/PowerPoint/Excel, Google Docs/Slides, Grammarly, ChatGPT, Zoom, Microsoft Teams, Google Meet and Canva. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _engFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[ENGLISH] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
