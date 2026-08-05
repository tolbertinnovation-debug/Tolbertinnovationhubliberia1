/* TIH Complete Healthcare Technology & Telehealth Professional Certificate.
   Rebuilds COURSES_DB.healthtech into the full 10-module program taking a
   beginner to a healthcare-technology & telehealth professional: healthcare
   technology intro, healthcare systems & medical fundamentals, EHR, telehealth
   & remote care, health IT, data privacy & cybersecurity, AI & emerging tech,
   healthcare administration, practical projects, and a capstone & graduation
   module. Educational only — not medical advice. Every content lesson has a
   video + printable notes; project lessons carry briefs and downloadable
   templates. Modelled on finlit-curriculum.js. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'healthtech';
  if (!COURSES_DB[CID] || COURSES_DB[CID]._htFullBuilt) return;

  var V = ['_EqfLDZc28Q', 'HoWvf76JdX8', '9ewgr1BD0Rw', '2xuNOPU3zhg', 'Qus5MFg-tDk', 'Lfhl0ip14CI', 'V0Nt395JQQg', 'n4ga1YzwWNY', 'WOXrMOzK_A4', 'SkzILojGPos', 'MRLAyC5L2Rg', 'GWiiZWb69Sw', 'aofsdpjvK7w', 'NAFSRKYJTjM', '7oqFhxXHI7A', '_5nWyEAFl2M'];
  var VIDEOS = {
    intro: [V[0], V[1]], systems: [V[1], V[2]], ehr: [V[2], V[3]], telehealth: [V[3], V[4]],
    hit: [V[4], V[5]], security: [V[5], V[6]], ai: [V[6], V[7]], admin: [V[7], V[8]],
    projects: [V[9], V[10]], capstone: [V[11], V[12]]
  };

  // [moduleNum, title, icon, skillKey, type, [lesson names]]  type: content|projects
  var curriculum = [
    [1, 'Introduction to Healthcare Technology', '🧭', 'intro', 'content', ['What is Healthcare Technology?', 'Introduction to Telehealth', 'Digital Transformation in Healthcare', 'Careers in Health Technology', 'Healthcare Ethics', 'Course Overview']],
    [2, 'Healthcare Systems & Medical Fundamentals', '🩺', 'systems', 'content', ['Overview of Healthcare Systems', 'Medical Terminology', 'Healthcare Professionals & Their Roles', 'Patient Care Basics', 'Healthcare Workflow', 'Health Services Delivery']],
    [3, 'Electronic Health Records (EHR)', '📋', 'ehr', 'content', ['Introduction to EHR', 'Patient Registration', 'Medical Documentation', 'Health Information Management', 'Data Entry Best Practices', 'EHR Privacy & Security']],
    [4, 'Telehealth & Remote Patient Care', '💻', 'telehealth', 'content', ['Telemedicine Fundamentals', 'Virtual Consultations', 'Telehealth Platforms', 'Remote Patient Monitoring', 'Patient Communication', 'Telehealth Best Practices']],
    [5, 'Health Information Technology', '🖥️', 'hit', 'content', ['Health Information Systems', 'Digital Health Records', 'Health Data Management', 'Clinical Decision Support Systems', 'Health Informatics Basics', 'Interoperability']],
    [6, 'Healthcare Data Privacy & Cybersecurity', '🔒', 'security', 'content', ['Patient Data Protection', 'Cybersecurity in Healthcare', 'Password & Access Management', 'Secure Data Sharing', 'Data Backup & Recovery', 'Ethical Use of Health Data']],
    [7, 'AI & Emerging Technologies in Healthcare', '🤖', 'ai', 'content', ['Artificial Intelligence in Healthcare', 'AI Clinical Decision Support', 'Wearable Health Devices', 'Internet of Medical Things (IoMT)', 'Robotics in Healthcare', 'Future Trends in Digital Health']],
    [8, 'Healthcare Administration & Communication', '🏢', 'admin', 'content', ['Healthcare Administration Basics', 'Appointment Scheduling', 'Medical Billing Overview', 'Patient Communication Skills', 'Professional Documentation', 'Team Collaboration']],
    [9, 'Practical Projects', '🏗️', 'projects', 'projects', ['Electronic Health Record Simulation', 'Telehealth Consultation Simulation', 'Patient Data Management', 'Healthcare Workflow Improvement', 'Digital Health Project', 'Professional Portfolio']],
    [10, 'Capstone Project & Graduation', '🏆', 'capstone', 'projects', ['Design a Telehealth Service Plan', 'Healthcare Technology Case Study', 'Final Assessment', 'Capstone Project Presentation', 'Certificate Requirements', 'Certificate of Completion']]
  ];

  function esc(v) { return String(v).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
  function isAssessment(name) { return /(?:Test|Quiz|Exam|Examination|Assessment)$/.test(name.trim()); }
  function isProjectName(name) { return /(?:Project|Assignment|Presentation|Simulation)$/.test(name.trim()); }

  var skillLabel = { intro: 'healthcare technology foundations', systems: 'healthcare systems & medical fundamentals', ehr: 'electronic health records (EHR)', telehealth: 'telehealth & remote patient care', hit: 'health information technology', security: 'healthcare data privacy & cybersecurity', ai: 'AI & emerging technologies in healthcare', admin: 'healthcare administration & communication', projects: 'applied healthcare technology projects', capstone: 'your capstone project' };

  var TEMPLATES = {
    intake: '<h4>📥 Template: Patient Intake Form</h4><ul><li>Patient name, ID, date of birth, contact</li><li>Reason for visit</li><li>Medical history &amp; allergies (as recorded)</li><li>Current medications</li><li>Consent &amp; privacy acknowledgement</li></ul><p><em>For training/simulation with sample (non-real) data only.</em></p>',
    doc: '<h4>📥 Template: Medical Documentation (SOAP note)</h4><ul><li><strong>S</strong>ubjective — what the patient reports</li><li><strong>O</strong>bjective — measurements/observations</li><li><strong>A</strong>ssessment — clinician’s assessment</li><li><strong>P</strong>lan — next steps</li></ul><p><em>Educational template — always follow your facility’s real standards.</em></p>',
    telehealth: '<h4>📥 Checklist: Telehealth Consultation</h4><ul><li>Confirm patient identity &amp; consent</li><li>Check connection, audio &amp; video</li><li>Ensure a private, secure setting</li><li>Verify platform is secure/approved</li><li>Document the consultation</li><li>Agree follow-up &amp; next steps</li></ul>',
    scheduler: '<h4>📥 Template: Appointment Scheduler</h4><p>Columns: Date · Time · Patient ID · Provider · Type (in-person/telehealth) · Status · Notes. Avoid double-booking and send reminders.</p>',
    ehr: '<h4>📥 Resource: EHR Practice File</h4><ul><li>Sample (fictional) patient records to practise data entry</li><li>Registration → documentation → retrieval workflow</li><li>Never use real patient data in training</li></ul>',
    workflow: '<h4>📥 Template: Healthcare Workflow</h4><ul><li>Step · Responsible role · System used · Time</li><li>Map: registration → triage → consultation → documentation → follow-up</li><li>Identify bottlenecks &amp; improvements</li></ul>'
  };
  function templateFor(name) {
    if (/Patient Registration|Patient Data Management/i.test(name)) return TEMPLATES.intake;
    if (/Medical Documentation|Professional Documentation/i.test(name)) return TEMPLATES.doc;
    if (/Virtual Consultations|Telehealth Best Practices|Telehealth Consultation Simulation|Design a Telehealth Service Plan/i.test(name)) return TEMPLATES.telehealth;
    if (/Appointment Scheduling/i.test(name)) return TEMPLATES.scheduler;
    if (/Introduction to EHR|Electronic Health Record Simulation|Data Entry Best Practices/i.test(name)) return TEMPLATES.ehr;
    if (/Healthcare Workflow|Healthcare Workflow Improvement/i.test(name)) return TEMPLATES.workflow;
    return '';
  }

  function note(moduleTitle, skill, name, position) {
    var label = skillLabel[skill] || 'healthcare technology skills';
    var focus = position % 2 ? 'practical understanding and safe, ethical use of health technology' : 'understanding the concept and applying it in a digital healthcare setting';
    var tpl = templateFor(name);
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Healthcare Technology · ' + esc(moduleTitle) + '</strong><span>Safe &amp; ethical digital care</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This lesson builds <strong>' + esc(label) + '</strong> through ' + focus + '. Watch the video, study the notes, then complete the two exercises before the short quiz.</p>' +
      '<h4>Key points</h4><ul>' +
      '<li>Understand what <em>' + esc(name) + '</em> means in modern healthcare.</li>' +
      '<li>See how it is used to improve patient care safely and ethically.</li>' +
      '<li>Practise with sample (non-real) data and protect patient privacy at all times.</li></ul>' +
      (tpl ? '<div class="study-callout">' + tpl + '<p style="margin-top:.5rem"><strong>Downloadable:</strong> Print → Save as PDF to keep this template.</p></div>' : '<div class="study-callout"><strong>TIH task:</strong> Apply <em>' + esc(name) + '</em> to a realistic clinic or telehealth scenario using sample data only.</div>') +
      '<h4>Exercises</h4><ol>' +
      '<li><strong>Exercise 1:</strong> Practise <em>' + esc(name) + '</em> in a simulation with sample data.</li>' +
      '<li><strong>Exercise 2:</strong> Note one way it improves care, efficiency or data safety.</li></ol>' +
      '<div class="study-callout"><strong>⚖️ Important:</strong> This course is educational and is <strong>not medical advice</strong>. Always follow your facility’s policies, patient-privacy laws, and professional/clinical guidelines, and never use real patient data in practice exercises.</div>' +
      '<p><strong>Printable notes:</strong> Use your browser’s Print → Save as PDF to keep an offline copy for revision.</p>' +
      '<p><strong>Module connection:</strong> This lesson is part of <em>' + esc(moduleTitle) + '</em> on your path to becoming a healthcare-technology &amp; telehealth professional.</p>' +
      '</div>';
  }

  function projectBrief(moduleTitle, name) {
    var tpl = templateFor(name);
    return '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Hands-on simulation project</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<p>This is a practical, simulation-based project. Complete it with <strong>sample (fictional) data only</strong> and add it to your healthcare-technology portfolio.</p>' +
      '<h4>What to do</h4><ol><li>Set up the scenario (clinic, patient, or service) with sample data.</li><li>Carry out <em>' + esc(name) + '</em> using the tools and workflow from the course.</li><li>Document it, note privacy/ethical safeguards, and finalise it for your portfolio.</li></ol>' +
      (tpl ? '<div class="study-callout">' + tpl + '</div>' : '<div class="study-callout"><strong>Deliverable:</strong> A documented simulation/plan (sample data only) for your portfolio.</div>') +
      '<div class="study-callout"><strong>⚖️ Reminder:</strong> Educational simulation only — never use real patient data; follow privacy laws and facility policy.</div>' +
      '<p><strong>Downloadable:</strong> Print → Save as PDF to keep your work and templates offline.</p></div>';
  }

  var BANK = {
    general: [
      { q: 'Healthcare technology (health tech) refers to:', opts: ['Only hospitals', 'Using technology to improve healthcare delivery', 'Only medicine', 'Avoiding computers'], correct: 1, exp: 'Health tech applies digital tools to improve care.' },
      { q: 'Telehealth allows patients to:', opts: ['Only visit in person', 'Receive care remotely using technology', 'Avoid doctors', 'Only call'], correct: 1, exp: 'Telehealth delivers care remotely via technology.' },
      { q: 'Healthcare ethics require professionals to:', opts: ['Share patient data freely', 'Protect privacy and act in the patient’s best interest', 'Ignore consent', 'Hide errors'], correct: 1, exp: 'Ethics center on privacy, consent and patient welfare.' },
      { q: 'This course is:', opts: ['Medical advice', 'Educational, not medical advice', 'A licence to practise medicine', 'A prescription tool'], correct: 1, exp: 'It is educational; always follow professional guidelines.' },
      { q: 'In practice exercises you should use:', opts: ['Real patient data', 'Sample (fictional) data only', 'Any data you find', 'Colleagues’ records'], correct: 1, exp: 'Never use real patient data in training.' },
      { q: 'Digital transformation in healthcare aims to:', opts: ['Slow care', 'Improve access, efficiency and quality of care', 'Remove doctors', 'Ignore patients'], correct: 1, exp: 'It improves access, efficiency and outcomes.' }
    ],
    systems: [
      { q: 'Medical terminology helps healthcare workers:', opts: ['Confuse patients', 'Communicate clearly and accurately', 'Avoid records', 'Hide information'], correct: 1, exp: 'Shared terminology ensures accurate communication.' },
      { q: 'A patient-care workflow describes:', opts: ['Random steps', 'The ordered steps a patient goes through in care', 'Only billing', 'Only registration'], correct: 1, exp: 'Workflow maps the patient journey through services.' },
      { q: 'Different healthcare professionals:', opts: ['Do the same job', 'Have distinct roles that work together', 'Never collaborate', 'Only do admin'], correct: 1, exp: 'Roles (nurses, doctors, admins) collaborate in care.' },
      { q: 'Health services delivery refers to:', opts: ['Selling products', 'How care is organised and provided to patients', 'Only marketing', 'Only IT'], correct: 1, exp: 'It is how care reaches patients.' },
      { q: 'Patient care basics include:', opts: ['Ignoring patients', 'Safety, dignity, communication and hygiene', 'Only paperwork', 'Only technology'], correct: 1, exp: 'Care basics prioritise safety, dignity and communication.' },
      { q: 'An efficient healthcare system aims to:', opts: ['Waste resources', 'Deliver quality care effectively and safely', 'Delay care', 'Ignore quality'], correct: 1, exp: 'Efficiency plus quality and safety is the goal.' }
    ],
    ehr: [
      { q: 'An Electronic Health Record (EHR) is:', opts: ['A paper file only', 'A digital record of a patient’s health information', 'A billing app only', 'A social network'], correct: 1, exp: 'EHRs store patient health data digitally.' },
      { q: 'A key benefit of EHRs is:', opts: ['Lost records', 'Quick, shareable, accurate patient information', 'More paperwork', 'Less safety'], correct: 1, exp: 'EHRs improve access, accuracy and coordination.' },
      { q: 'Accurate data entry in an EHR matters because:', opts: ['It does not', 'Errors can affect patient safety and care', 'Speed is all that matters', 'Records are ignored'], correct: 1, exp: 'Data quality directly affects patient safety.' },
      { q: 'Access to EHR data should be:', opts: ['Open to everyone', 'Restricted to authorised staff on a need-to-know basis', 'Public', 'Shared freely'], correct: 1, exp: 'Least-privilege access protects patient privacy.' },
      { q: 'Health Information Management involves:', opts: ['Nothing', 'Organising, protecting and maintaining health data', 'Only billing', 'Only scheduling'], correct: 1, exp: 'HIM keeps records accurate, secure and available.' },
      { q: 'Patient registration in an EHR captures:', opts: ['Nothing', 'Identity and key details to start the record', 'Only payment', 'Only allergies'], correct: 1, exp: 'Registration creates the patient record accurately.' }
    ],
    telehealth: [
      { q: 'Telemedicine is:', opts: ['In-person only', 'Delivering clinical care remotely via technology', 'A social app', 'Only phone calls'], correct: 1, exp: 'Telemedicine provides clinical care at a distance.' },
      { q: 'Before a telehealth visit you should:', opts: ['Skip consent', 'Confirm identity, consent and a private, secure setting', 'Use public wifi openly', 'Ignore the platform'], correct: 1, exp: 'Verify identity/consent and ensure privacy and security.' },
      { q: 'Remote patient monitoring uses devices to:', opts: ['Do nothing', 'Track health data (e.g. blood pressure) from home', 'Replace all care', 'Sell products'], correct: 1, exp: 'RPM tracks vitals remotely to support care.' },
      { q: 'A benefit of telehealth is:', opts: ['Less access', 'Improved access to care, especially for remote areas', 'More travel', 'Worse records'], correct: 1, exp: 'Telehealth expands access, saving travel and time.' },
      { q: 'Patient communication in telehealth should be:', opts: ['Rushed', 'Clear, respectful and confirmed for understanding', 'Skipped', 'One-way'], correct: 1, exp: 'Clear, respectful, confirmed communication is key.' },
      { q: 'Telehealth platforms must be:', opts: ['Any random app', 'Secure and appropriate for health data', 'Public chat rooms', 'Unencrypted'], correct: 1, exp: 'Use secure, approved platforms for privacy.' }
    ],
    hit: [
      { q: 'Interoperability means health systems can:', opts: ['Never connect', 'Share and use data across systems', 'Only print', 'Delete data'], correct: 1, exp: 'Interoperability lets systems exchange data safely.' },
      { q: 'A Health Information System (HIS) manages:', opts: ['Only email', 'Healthcare data and processes digitally', 'Only social media', 'Nothing'], correct: 1, exp: 'HIS manages clinical/administrative data and workflows.' },
      { q: 'Clinical Decision Support Systems help clinicians by:', opts: ['Making all decisions alone', 'Providing data/alerts to support decisions', 'Replacing doctors', 'Hiding data'], correct: 1, exp: 'CDSS supports (not replaces) clinical judgement.' },
      { q: 'Health informatics is about:', opts: ['Only hardware', 'Using data and IT to improve health outcomes', 'Only billing', 'Only marketing'], correct: 1, exp: 'It applies data/IT to improve care.' },
      { q: 'Good health data management ensures data is:', opts: ['Lost', 'Accurate, secure and available when needed', 'Public', 'Ignored'], correct: 1, exp: 'Quality, security and availability matter.' },
      { q: 'Digital health records improve on paper by:', opts: ['Being slower', 'Being searchable, shareable and backed up', 'Getting lost easily', 'Being less secure'], correct: 1, exp: 'Digital records are searchable, shareable and backed up.' }
    ],
    security: [
      { q: 'Patient data must be kept:', opts: ['Public', 'Private and secure (confidential)', 'On social media', 'Unprotected'], correct: 1, exp: 'Confidentiality is a core duty in healthcare.' },
      { q: 'A strong access-control practice is:', opts: ['Shared logins', 'Unique logins and least-privilege access', 'No passwords', 'Public accounts'], correct: 1, exp: 'Individual accounts and least privilege protect data.' },
      { q: 'Phishing in healthcare can lead to:', opts: ['Nothing', 'Data breaches of patient information', 'Faster care', 'Better security'], correct: 1, exp: 'Phishing can expose sensitive patient data.' },
      { q: 'Data backup protects against:', opts: ['Nothing', 'Loss from failure, ransomware or error', 'Faster care', 'More paperwork'], correct: 1, exp: 'Backups guard against data loss.' },
      { q: 'Sharing patient data should be:', opts: ['Free and open', 'Secure, authorised and only when necessary', 'On any app', 'Public'], correct: 1, exp: 'Share securely, with authorisation and need-to-know.' },
      { q: 'Ethical use of health data means:', opts: ['Using it for anything', 'Using it lawfully, for care, with consent and privacy', 'Selling it', 'Ignoring consent'], correct: 1, exp: 'Use data lawfully, ethically and with consent.' }
    ],
    ai: [
      { q: 'AI in healthcare is best used to:', opts: ['Replace all clinicians', 'Support clinicians and improve efficiency', 'Make final diagnoses alone', 'Ignore data'], correct: 1, exp: 'AI supports professionals; humans stay accountable.' },
      { q: 'A wearable health device can:', opts: ['Do nothing', 'Track vitals like heart rate and steps', 'Only play music', 'Replace doctors'], correct: 1, exp: 'Wearables monitor health metrics for patients/clinicians.' },
      { q: 'IoMT (Internet of Medical Things) refers to:', opts: ['Social media', 'Connected medical devices sharing data', 'Only phones', 'Paper records'], correct: 1, exp: 'IoMT is networked medical devices and sensors.' },
      { q: 'AI clinical decision support should be:', opts: ['Trusted blindly', 'Verified by a qualified professional', 'Ignored', 'Kept secret'], correct: 1, exp: 'Clinicians must verify AI suggestions.' },
      { q: 'A risk of AI in healthcare is:', opts: ['None', 'Bias or errors if data/oversight are poor', 'Too much accuracy', 'Nothing at all'], correct: 1, exp: 'Bias, errors and privacy risks require oversight.' },
      { q: 'Robotics in healthcare can assist with:', opts: ['Nothing', 'Surgery support, logistics and repetitive tasks', 'Only cleaning floors', 'Replacing all staff'], correct: 1, exp: 'Robotics assist procedures and operations.' }
    ],
    admin: [
      { q: 'Appointment scheduling should avoid:', opts: ['Reminders', 'Double-booking and long waits', 'Organisation', 'Records'], correct: 1, exp: 'Good scheduling prevents conflicts and delays.' },
      { q: 'Medical billing involves:', opts: ['Nothing', 'Recording services and processing payments/claims', 'Only marketing', 'Only clinical care'], correct: 1, exp: 'Billing records services and manages payment/claims.' },
      { q: 'Professional documentation should be:', opts: ['Vague', 'Accurate, timely and complete', 'Optional', 'Hidden'], correct: 1, exp: 'Accurate, timely records support care and compliance.' },
      { q: 'Good patient communication is:', opts: ['Rushed and unclear', 'Clear, empathetic and respectful', 'Only technical', 'One-way'], correct: 1, exp: 'Clear, empathetic communication improves care.' },
      { q: 'Team collaboration in healthcare improves:', opts: ['Errors', 'Coordination, safety and patient outcomes', 'Confusion', 'Delays'], correct: 1, exp: 'Collaboration improves coordination and outcomes.' },
      { q: 'Healthcare administration keeps a facility:', opts: ['Disorganised', 'Running efficiently and compliantly', 'Closed', 'Unsafe'], correct: 1, exp: 'Administration keeps operations efficient and compliant.' }
    ]
  };

  function bankKey(skill) {
    var map = { intro: 'general', systems: 'systems', ehr: 'ehr', telehealth: 'telehealth', hit: 'hit', security: 'security', ai: 'ai', admin: 'admin', projects: 'general', capstone: 'general' };
    return map[skill] || 'general';
  }
  function pickQuestions(key, count) {
    var pool = BANK[key] || BANK.general;
    var mixed = BANK.general.concat(BANK.systems, BANK.ehr, BANK.telehealth, BANK.hit, BANK.security, BANK.ai, BANK.admin);
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
        var qid = 'ht-m' + num + '-final';
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
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Graduation</span></div><h3>' + esc(name) + '</h3><p>To graduate and earn your TIH Certificate of Completion you must:</p><ul><li>Complete the lessons in Modules 1–8.</li><li>Complete the practical simulations/projects in Module 9.</li><li>Complete the capstone (telehealth service plan + case study) and present it.</li><li>Pass the module quizzes and the Final Assessment.</li><li>Pass the final Certificate of Completion assessment.</li></ul></div>';
        flat += 1;
        return;
      }
      if (isAssessment(name)) {
        var big = /Final/i.test(name);
        var aid = 'ht-m' + num + '-a' + flat;
        quizzes[aid] = assessmentQuiz(key, name, big ? 15 : 8);
        lessons.push({ t: (big ? '🧪 ' : '📝 ') + name, d: (big ? 15 : 8) + ' questions', isQuiz: true, quizId: aid });
        notes[String(flat)] = '<div class="study-note"><div class="revision-banner"><strong>' + esc(moduleTitle) + '</strong><span>Assessment</span></div><h3>' + esc(name) + '</h3><p>Complete this assessment, then review every answer explanation to strengthen your weak areas.</p></div>';
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
      var pqid = 'ht-m' + num + '-q' + flat;
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
    title: 'Complete Healthcare Technology & Telehealth Professional Certificate',
    shortDesc: 'A full 10-module program from beginner to healthcare-technology & telehealth professional: health tech intro, healthcare systems & medical fundamentals, EHR, telehealth & remote care, health IT, data privacy & cybersecurity, AI & emerging tech, healthcare administration, practical simulations and a capstone with a Certificate of Completion. Educational, not medical advice.',
    category: 'Healthcare Technology',
    icon: ex.icon || '🏥',
    gradient: ex.gradient || 'linear-gradient(135deg,#9f1239,#f43f5e)',
    instructor: ex.instructor,
    instructorTitle: ex.instructorTitle,
    instructorBio: ex.instructorBio,
    rating: ex.rating || 4.9,
    reviewCount: ex.reviewCount || 0,
    students: ex.students || 'TIH health learners',
    duration: '60h+',
    level: 'Beginner → Professional',
    price: ex.price || 'FREE',
    origPrice: ex.origPrice || '$150',
    isFree: (ex.isFree !== false),
    badge: ex.badge || 'free',
    certId: 'TIH-2026-HEALTHTECH-0001',
    learn: [
      'Understand healthcare technology, telehealth and digital health systems',
      'Work with Electronic Health Records (EHR) and health information management',
      'Support telehealth visits and remote patient monitoring',
      'Apply health IT, interoperability and clinical decision support concepts',
      'Protect patient data with privacy and cybersecurity best practices',
      'Use AI/emerging tech responsibly and handle healthcare administration'
    ],
    requirements: [
      'No prior experience required — open to health workers, students and others',
      'A computer with internet access for tools and simulations',
      'A commitment to privacy, ethics and using sample data only in practice'
    ],
    about: [
      'This is the complete TIH Healthcare Technology & Telehealth Professional Certificate, rebuilt into ten modules that take a beginner to professional level in digital healthcare.',
      'It is educational and is not medical advice: every lesson emphasises patient privacy, ethics and following professional guidelines, and all practice uses sample (non-real) data. Downloadable templates cover a Patient Intake Form, Medical Documentation (SOAP), Telehealth Consultation Checklist, Appointment Scheduler, EHR Practice File and Healthcare Workflow.',
      'Software & tools: EHR training software, Microsoft Word/Excel/Teams, Zoom, Google Workspace/Meet, ChatGPT, telehealth platform demonstrations and basic Health Information Systems. You finish with a portfolio and — after the graduation assessment — a Certificate of Completion.'
    ],
    modules: modules,
    quizzes: quizzes,
    _htFullBuilt: true
  };

  if (typeof LESSON_CONTENT !== 'undefined') LESSON_CONTENT[CID] = notes;

  if (typeof console !== 'undefined' && console.log) {
    console.log('[HEALTHTECH] modules=' + modules.length + ' videoLessons=' + videoCount + ' projects=' + projectCount + ' quizzes=' + quizCount + ' exams=' + examCount);
  }
})();
