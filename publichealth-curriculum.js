/* TIH "Career Success for Public Health Graduates" program.
   Creates COURSES_DB['ph-career'] from scratch: an 8-module career course that
   takes a public-health graduate in Liberia/West Africa from job-market
   orientation to landing and growing a public-health career — core skills,
   professional documents, the job search, interviews, on-the-job skills,
   professional communication, and career advancement, plus a final project +
   certificate. Every content lesson has written notes and a short quiz;
   per-topic teaching notes (ph-notes.js), per-topic quizzes (topic-quizzes.js)
   and per-topic videos (topic-videos.js) layer on top without editing this
   file. Modelled on englishsuccess-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'ph-career';
  if (COURSES_DB[CID] && COURSES_DB[CID]._phBuilt) return;

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|assessment
  var curriculum = [
    [1, 'Launch Your Public Health Career', '🚀', 'orientation', 'content', ['Welcome to the Course', 'The Public Health Job Market', 'Career Pathways in Public Health', 'Key Public Health Job Roles', 'Assessing Your Skills and Strengths', 'Setting SMART Career Goals', 'Building Your Career Plan']],
    [2, 'Core Public Health Skills Employers Want', '🔬', 'skills', 'content', ['Epidemiology Essentials', 'Biostatistics and Data Literacy', 'Disease Surveillance', 'Health Promotion and Education', 'Health Systems and Policy', 'Environmental and Occupational Health', 'Global Health and One Health']],
    [3, 'Your Professional Documents', '📄', 'documents', 'content', ['Writing a Public Health CV', 'Writing a Cover Letter', 'Personal Statements and Motivation Letters', 'Building a Professional Portfolio', 'Creating a Strong LinkedIn Profile', 'References and Recommendation Letters']],
    [4, 'Finding the Right Job', '🔎', 'jobsearch', 'content', ['Where to Find Public Health Jobs', 'Working with NGOs and INGOs', 'Ministry of Health and Government Roles', 'WHO, UN and International Agencies', 'Fellowships, Internships and Volunteering', 'Networking for Public Health Professionals', 'Using Job Boards and Alerts']],
    [5, 'Winning the Interview', '🎤', 'interview', 'content', ['Preparing for a Public Health Interview', 'Common Interview Questions and Answers', 'Behavioral (STAR) Interviews', 'Technical and Case Interviews', 'Virtual and Panel Interviews', 'Salary Negotiation', 'Following Up After an Interview']],
    [6, 'Skills You Use on the Job', '🛠️', 'onjob', 'content', ['Monitoring and Evaluation (M&E)', 'Project and Program Management', 'Grant and Proposal Writing', 'Report Writing', 'Data Collection Tools (KoBoToolbox & ODK)', 'Data Analysis with Excel and SPSS', 'Community Engagement and Mobilization', 'Building Data Dashboards']],
    [7, 'Communicating Like a Professional', '🗣️', 'comm', 'content', ['Scientific and Technical Writing', 'Presenting Data and Findings', 'Writing Policy Briefs', 'Public Speaking and Presentations', 'Facilitating Meetings and Trainings', 'Working with the Media and the Public']],
    [8, 'Grow and Advance Your Career', '📈', 'advance', 'content', ['Continuing Education and Certifications', 'Applying for an MPH or PhD Abroad', 'Leadership and Management Skills', 'Professional Ethics and Integrity', 'Mentorship: Finding and Being a Mentor', 'Work-Life Balance and Avoiding Burnout', 'Building a Lasting Professional Network']],
    [9, 'Final Project & Certificate', '🏆', 'assessment', 'assessment', ['Career Portfolio Project', 'Mock Interview Simulation', 'Final Examination', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }

  var skillLabel = { orientation: 'career foundations', skills: 'core public-health skills', documents: 'your professional documents', jobsearch: 'the job search', interview: 'interview skills', onjob: 'on-the-job skills', comm: 'professional communication', advance: 'career advancement', assessment: 'your career readiness' };

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'public-health career skills';
    var focus = position % 2 ? 'clear steps, real examples and practice you can use in a real job search' : 'understanding the skill, applying it to your own career and reviewing your work';
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Public Health Careers · ' + esc(moduleTitle) + '</strong><span>Career-ready</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Read the notes, then complete the two tasks before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> means and why it matters for your public-health career.</li>' +
      '<li>See how it is used by real professionals in NGOs, the Ministry of Health and international agencies.</li>' +
      '<li>Apply it to your own situation, then review and improve.</li></ul>' +
      '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to your own career — your CV, a real job advert, or a health programme in your community.</div>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to a successful public-health career.</p>' +
      '</div>';
  }

  // Fallback question banks (authored per-topic quizzes override these).
  var BANK = {
    general: [
      { q: 'The main goal of this course is to help you:', opts: ['Avoid working', 'Launch and grow a public-health career', 'Only pass exams', 'Memorise terms'], correct: 1, exp: 'The course builds practical, job-ready public-health career skills.' },
      { q: 'A strong public-health professional keeps learning by:', opts: ['Never reviewing work', 'Reflecting, seeking feedback and updating skills', 'Avoiding new tools', 'Working alone always'], correct: 1, exp: 'Reflection, feedback and continuous learning drive career growth.' },
      { q: 'Setting clear career goals helps you to:', opts: ['Waste time', 'Focus your effort and measure progress', 'Avoid planning', 'Skip networking'], correct: 1, exp: 'Clear goals guide focused, measurable action.' },
      { q: 'Public-health work in Liberia and West Africa often involves:', opts: ['Only lab work', 'NGOs, the Ministry of Health, communities and partners', 'No teamwork', 'Only office work'], correct: 1, exp: 'PH careers span government, NGOs, agencies and community work.' },
      { q: 'Professional integrity means:', opts: ['Cutting corners', 'Being honest, ethical and accountable in your work', 'Ignoring rules', 'Hiding data'], correct: 1, exp: 'Ethics and accountability are core to public-health practice.' },
      { q: 'Reviewing your mistakes is valuable because it:', opts: ['Wastes time', 'Turns errors into learning and growth', 'Lowers your skill', 'Is optional'], correct: 1, exp: 'Reviewing errors is how practice becomes real improvement.' }
    ]
  };
  function bankKey(skill) { return 'general'; }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var out = [];
    for (var i = 0; i < count; i++) { out.push(pool[i % pool.length]); }
    return out;
  }
  function cloneQ(q) { return { q: q.q, opts: q.opts.slice(), correct: q.correct, exp: q.exp }; }
  // Authored per-topic quiz questions take priority; fall back to the bank.
  function normQ(s) { return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase(); }
  var TQ = (typeof window !== 'undefined' && window.TIH_TOPIC_QUIZZES && window.TIH_TOPIC_QUIZZES[CID]) || null;
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
  function practiceQuiz(key, name) { return { title: 'Practice: ' + name, moduleNum: 1, questions: topicQuestions(name) || pickQuestions(key, 3).map(cloneQ) }; }
  function assessmentQuiz(key, name, count) {
    var pool = allAuthoredQuestions();
    var qs = pool ? spreadPick(pool, count).map(cloneQ) : pickQuestions(key, count).map(cloneQ);
    return { title: name, moduleNum: 1, questions: qs };
  }

  function projectBrief(moduleTitle, name) {
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical project. Complete it to a professional standard and keep it in your career portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Plan your work, audience and purpose.</li><li>Produce the piece using what you have learned.</li><li>Edit or rehearse, get feedback, and finalise it for your portfolio.</li></ol>' +
      '<div class="study-callout"><strong>Deliverable:</strong> A polished, real piece of work you can show to an employer.</div>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work offline.</p></div>';
  }

  var modules = [], quizzes = {}, notes = {};
  var flat = 0, notePos = 0;
  var videoCount = 0, quizCount = 0, projectCount = 0, examCount = 0;

  curriculum.forEach(function (mod) {
    var num = mod[0], title = mod[1], icon = mod[2], skill = mod[3], type = mod[4], names = mod[5];
    var moduleTitle = 'Module ' + num + ': ' + title;
    var key = bankKey(skill);
    var lessons = [], idx = 0;

    names.forEach(function (name) {
      if (type === 'assessment') {
        if (/^Certificate of Completion$/i.test(name)) {
          var qid = 'ph-m' + num + '-final';
          quizzes[qid] = assessmentQuiz('general', 'Graduation Assessment', 15);
          quizzes[qid].isFinal = true;
          lessons.push({ t: '🏆 ' + name, d: '15 questions', isQuiz: true, quizId: qid, isFinal: true });
          notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>This is the final graduation assessment. Pass it to complete the course and unlock your TIH Certificate of Completion.</p></div>';
          flat += 1; quizCount += 1;
          return;
        }
        if (/Examination|Exam$/i.test(name)) {
          var eid = 'ph-m' + num + '-a' + flat;
          quizzes[eid] = assessmentQuiz('general', name, 20);
          lessons.push({ t: '🧪 ' + name, d: '20 questions', isQuiz: true, quizId: eid });
          notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Final examination</span></div><h3>' + esc(name) + '</h3><p>Complete this final examination under timed conditions, then review every answer explanation to close your gaps.</p></div>';
          flat += 1; quizCount += 1; examCount += 1;
          return;
        }
        // Project / simulation (hands-on, no quiz)
        lessons.push({ t: '🛠️ ' + name, d: 'Project', isProject: true, v: null });
        notes[String(flat)] = projectBrief(moduleTitle, name);
        flat += 1; projectCount += 1;
        return;
      }
      // Content lesson: a written lesson (reading) now; a per-topic video is
      // layered on via topic-videos.js, which flips it to a video lesson.
      idx += 1;
      lessons.push({ t: num + '.' + idx + ' ' + name, d: 'Lesson', v: null, isQuiz: false });
      notes[String(flat)] = note(moduleTitle, skill, name, notePos++);
      flat += 1; videoCount += 1;
      var pqid = 'ph-m' + num + '-q' + flat;
      quizzes[pqid] = practiceQuiz(key, name);
      lessons.push({ t: '📝 Practice: ' + name, d: '3 questions', isQuiz: true, quizId: pqid });
      notes[String(flat)] = '<p><strong>Quick check:</strong> Review the notes and complete the two tasks, then answer these to confirm you understood <em>' + esc(name) + '</em>.</p>';
      flat += 1; quizCount += 1;
    });

    modules.push({ title: moduleTitle, icon: icon, meta: lessons.length + ' lessons', lessons: lessons });
  });

  COURSES_DB[CID] = {
    id: CID,
    title: 'Career Success for Public Health Graduates',
    shortDesc: 'A practical 8-module career course for public-health graduates: core skills employers want, a standout resume/CV and portfolio, the job search across government agencies (CDC, NIH, state and local health departments), NGOs and UN agencies, winning interviews, on-the-job skills (M&E, proposals, data), professional communication, and career advancement — with a final project and Certificate of Completion.',
    category: 'Health & Career',
    icon: '🩺',
    image: 'ph-career-banner.jpg',
    cardImage: 'ph-career-card.jpg',
    gradient: 'linear-gradient(135deg,#065f46,#0d9488,#14b8a6)',
    instructor: 'Samuel Tolbert',
    instructorTitle: 'Founder & CEO, Tolbert Innovation Hub',
    instructorBio: 'Samuel Tolbert founded TIH to help graduates build careers that change their communities. This course brings practical, employer-focused career preparation to public-health graduates targeting the United States and other developed countries.',
    rating: 4.9,
    reviewCount: 0,
    students: 'TIH learners',
    duration: '40h+',
    level: 'Beginner → Professional',
    price: '$100',
    origPrice: '$250',
    isFree: false,
    badge: 'new',
    certId: 'TIH-2026-PHCAREER-0001',
    learn: [
      'Map public-health career pathways and the US and developed-country job market',
      'Show the core skills employers want: epidemiology, data, M&E and more',
      'Write a standout public-health resume, CV, cover letter and portfolio',
      'Find and win jobs with government agencies (CDC, NIH, health departments), NGOs and UN agencies',
      'Prepare for and pass public-health interviews with confidence',
      'Use on-the-job skills: M&E, proposal writing, data collection and analysis',
      'Communicate like a professional and keep advancing your career'
    ],
    requirements: [
      'A public-health background or strong interest in a public-health career',
      'A device for writing tasks (CV, cover letter, portfolio)',
      'Willingness to apply each lesson to your own real job search'
    ],
    about: [
      'This is a practical career course built for public-health graduates who want to turn their degree into a real, growing career in the United States and other developed countries.',
      'Across eight modules you move from understanding the job market and the skills employers want, to building your professional documents, running an effective job search, winning interviews, mastering on-the-job skills like M&E and proposal writing, communicating professionally, and advancing your career.',
      'Every content lesson has written notes and a short quiz. You finish with a career portfolio project, a mock interview, a final examination and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _phBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[PH-CAREER] modules=' + modules.length + ' contentLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
