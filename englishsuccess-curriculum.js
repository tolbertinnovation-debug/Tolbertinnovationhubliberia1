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

  function cloneQ(q) { return {q:q.q,opts:q.opts.slice(),correct:q.correct,exp:q.exp}; }
  function topicQuestions(num,name) {
    var bank=window.TIH_ENGLISH_QUESTIONS,rows=bank&&bank.topics['M'+num+':'+name];
    if(!rows||rows.length!==4)throw new Error('Incomplete English topic M'+num+':'+name);
    return rows;
  }
  function practiceQuiz(num,name) { return {title:'Practice: '+name,moduleNum:num,questionCount:3,questions:topicQuestions(num,name).slice(0,3).map(cloneQ)}; }
  function assessmentQuiz(num,name,count) { return {title:name,moduleNum:num,questionCount:count,questions:[]}; }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var pool = VIDEOS[skill] || VIDEOS.assessment;
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (/^Certificate of Completion$/i.test(name)) {
        var qid = 'en-m' + num + '-final';
        quizzes[qid] = assessmentQuiz(num, 'Graduation Assessment', 15);
        quizzes[qid].isFinal = true;
        lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Review your answers and confirm official completion requirements in the TIH Learning Hub. Local practice scores do not issue certificates.</p></div>';
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
        var big = /Examination|Exam|Evaluation|Review/i.test(name);
        var count = big ? (/Final/i.test(name) ? 20 : 15) : 8;
        var aid = 'en-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(num, name, count);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: count + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this ' + (big ? 'examination/review' : 'assessment') + ', then review every answer explanation to strengthen your weak areas.</p></div>';
        flat += 1; quizCount += 1; if (big) examCount += 1;
        return;
      }
      if (isAssessment(name)) {
        var qk = 'en-m' + num + '-a' + flat;
        quizzes[qk] = assessmentQuiz(num, name, 8);
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
      quizzes[pqid] = practiceQuiz(num, name);
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
    shortDesc: 'A 20-module program developing English for study and work: grammar, vocabulary, reading, listening, speaking, writing, academic & professional writing, presentations, workplace & international communication, research, digital literacy, career, exam prep (TOEFL/IELTS/SAT overview), 10 projects, a capstone and a Certificate of Completion.',
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
      'Develop English for academic and professional situations through twenty modules covering language foundations, communication, research, practical projects and a capstone portfolio.',
      'Written notes, worked examples and local knowledge checks support study. Actual listening and speaking practice, original writing, feedback and revisions are needed to demonstrate communication skills. Videos require an internet connection; written lessons work offline in the app.',
      'TOEFL, IELTS and SAT lessons are introductory overviews. Verify current official provider guidance and the receiving institution’s requirements. TIH practice results do not certify a CEFR level or create an official admission-test score. Official TIH certificates remain managed through the Learning Hub.'
    ],
    modules: modules,
    quizzes: quizzes,
    _engFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  window.tihApplyEnglishTopicQuizzes=function(){
    var bank=window.TIH_ENGLISH_QUESTIONS,course=COURSES_DB['english-success'];
    if(!bank||!course)throw new Error('Missing English question bank');
    var reserves=[],papers=[],used={};
    course.modules.forEach(function(m,mi){m.lessons.forEach(function(l){
      if(!l.isQuiz)return;
      var q=course.quizzes[l.quizId];q.moduleNum=mi+1;
      if(q.title.indexOf('Practice: ')===0){
        var rows=topicQuestions(mi+1,q.title.slice(10));q.questions=rows.slice(0,3).map(cloneQ);reserves.push(rows[3]);
      }else papers.push(q);
    });});
    var pool=reserves.concat(bank.exams.filter(function(q){return q.module!==17&&q.module!==19;}));
    function issue(rows,count){
      var buckets={},nums=[],out=[];
      rows.forEach(function(q){if(used[q.q])return;if(!buckets[q.module]){buckets[q.module]=[];nums.push(q.module);}buckets[q.module].push(q);});
      nums.sort(function(a,b){return a-b;});
      var changed=true;
      while(out.length<count&&changed){changed=false;nums.forEach(function(n){if(out.length>=count||!buckets[n].length)return;var q=buckets[n].shift();used[q.q]=true;out.push(cloneQ(q));changed=true;});}
      if(out.length!==count)throw new Error('Exhausted English assessment pool');
      return out;
    }
    function paper(title,module){var q=papers.filter(function(q){return q.title===title&&q.moduleNum===module;})[0];if(!q)throw new Error('Missing English assessment '+title);return q;}
    // Protect explicit full-syllabus coverage before allocating narrow papers.
    var protectedItems={},midCoverage=[],finalCoverage=[];
    var teachingModules=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18];
    teachingModules.forEach(function(n){
      var rows=pool.filter(function(q){return q.module===n;});
      if(rows.length<(n<=10?2:1))throw new Error('No English coverage reserve for module '+n);
      var f=rows[rows.length-1];protectedItems[f.q]=true;finalCoverage.push(f);
      if(n<=10){var m=rows[rows.length-2];protectedItems[m.q]=true;midCoverage.push(m);}
    });
    var localSubjects={'Grammar Assessment':2,'Reading Assessment':4,'Listening Assessment':5,'Speaking Assessment':6,'Writing Assessment':7,'Presentation Assessment':10,'Exam Readiness Assessment':18};
    Object.keys(localSubjects).forEach(function(title){var num=localSubjects[title],q=paper(title,num);q.questions=issue(pool.filter(function(r){return r.module===num&&!protectedItems[r.q];}),q.questionCount);});
    var subjects={'Grammar Assessment':[2],'Vocabulary Assessment':[3],'Reading Assessment':[4],'Listening Assessment':[5],'Speaking Assessment':[6],'Writing Assessment':[7,8,9]};
    Object.keys(subjects).forEach(function(title){var q=paper(title,20),nums=subjects[title];q.questions=issue(pool.filter(function(r){return nums.indexOf(r.module)>=0&&!protectedItems[r.q];}),q.questionCount);});
    var mid=paper('Midterm Examination',20);mid.questions=issue(midCoverage,10).concat(issue(pool.filter(function(r){return r.module<=10&&!protectedItems[r.q];}),mid.questionCount-10));
    var final=paper('Final Examination',20);final.questions=issue(finalCoverage,17).concat(issue(pool.filter(function(r){return !protectedItems[r.q];}),final.questionCount-17));
    var projectPool=bank.exams.filter(function(q){return q.module===17||q.module===19;});
    ['Capstone Project Evaluation','Professional Portfolio Review'].forEach(function(title){var q=paper(title,20);q.questions=issue(projectPool,q.questionCount);});
    var graduation=paper('Graduation Assessment',20);graduation.questions=issue(pool,graduation.questionCount);
    papers.forEach(function(q){if(q.questions.length!==q.questionCount)throw new Error('Incomplete English paper '+q.title);});
  };
  window.tihApplyEnglishTopicQuizzes();

  if (typeof console !== 'undefined' && console.log) {
    console.log('[ENGLISH] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
