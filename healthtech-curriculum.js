/* TIH Healthcare Technology & Telehealth: formal notes ALL modules + deep IoMT security. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'healthtech';
  if (COURSES_DB[CID] && COURSES_DB[CID]._htFullBuilt && COURSES_DB[CID]._htIoMTDeep) return;

  var BETTER_VIDEOS = {
    intro: ['sKivn2q4DBc', 't7GB8CG4EoE', 'XCgwfv0DUoc', 'i-SRBFzJvV0'],
    systems: ['aqgSgzikh0g', 'MB_yyDerwGs'],
    ehr: ['HoWvf76JdX8', 'EBGZdfdZDuU', 'W0w31NPCu0g'],
    telehealth: ['sKivn2q4DBc', 't7GB8CG4EoE', '4iSElJn4490'],
    hit: ['MB_yyDerwGs', 'jd29oxyGKcE', 'ZvqhcsttxRQ'],
    security: ['DW5TQGADwcQ', 'HoWvf76JdX8'],
    ai: ['6oDBRbU1Zqg', 'MB_yyDerwGs'],
    admin: ['5f8pA9YFMYk', 'aqgSgzikh0g'],
    projects: ['4KYqqrWIS68', 'sKivn2q4DBc'],
    capstone: ['4KYqqrWIS68', 't7GB8CG4EoE']
  };

  var TOPIC_DEF = {
    'What is Healthcare Technology?': 'Healthcare technology is the application of devices, software, and digital systems to prevent, diagnose, treat, and manage disease and to support the delivery and administration of care.',
    'Introduction to Telehealth': 'Telehealth is the use of telecommunications and digital technologies to deliver health-related services and information when the patient and provider are not in the same place.',
    'Digital Transformation in Healthcare': 'Digital transformation in healthcare is the systematic adoption of digital tools and data to redesign care delivery, improve access, efficiency, quality, and patient experience.',
    'Careers in Health Technology': 'Careers in health technology include roles such as health informatics specialist, EHR analyst, telehealth coordinator, clinical systems trainer, and digital health project manager.',
    'Healthcare Ethics': 'Healthcare ethics are the moral principles—including autonomy, beneficence, non-maleficence, and justice—that guide decisions about patient care, privacy, and the use of health technology.',
    'Course Overview': 'This course overview outlines the ten modules of the Healthcare Technology & Telehealth Professional Certificate from foundations through EHR, telehealth, privacy, AI, administration, projects, and graduation.',
    'Overview of Healthcare Systems': 'A healthcare system is the organisation of people, institutions, and resources that deliver health services to meet the needs of a population.',
    'Medical Terminology': 'Medical terminology is the standardised vocabulary of roots, prefixes, and suffixes used to describe the body, conditions, procedures, and care accurately.',
    'Healthcare Professionals & Their Roles': 'Healthcare professionals include clinicians and support staff with defined roles—such as physicians, nurses, pharmacists, and administrators—who collaborate to deliver patient care.',
    'Patient Care Basics': 'Patient care basics are the fundamental practices of safety, dignity, communication, hygiene, and respect that underpin every interaction with patients.',
    'Healthcare Workflow': 'A healthcare workflow is the ordered sequence of steps a patient and staff follow from registration through care, documentation, and follow-up.',
    'Health Services Delivery': 'Health services delivery is how care is organised, financed, and provided to individuals and communities across primary, secondary, and specialised settings.',
    'Introduction to EHR': 'An Electronic Health Record (EHR) is a digital, longitudinal record of a patient’s health information that is designed to be shared across authorised providers and settings.',
    'Patient Registration': 'Patient registration is the process of capturing identity and key demographic and administrative details to create or update the patient’s record in the system.',
    'Medical Documentation': 'Medical documentation is the accurate, timely recording of clinical observations, assessments, and plans—often using structures such as SOAP notes—in the patient record.',
    'Health Information Management': 'Health Information Management (HIM) is the practice of acquiring, analysing, protecting, and maintaining health data so that it remains accurate, secure, and available for care and compliance.',
    'Data Entry Best Practices': 'Data entry best practices are methods that ensure health data is entered completely, accurately, and consistently to support safe care and reliable reporting.',
    'EHR Privacy & Security': 'EHR privacy and security are the technical and organisational controls that restrict access to electronic records and protect them from unauthorised use, disclosure, or loss.',
    'Telemedicine Fundamentals': 'Telemedicine is the delivery of clinical care at a distance using telecommunications technology, typically involving real-time or store-and-forward exchange of clinical information.',
    'Virtual Consultations': 'Virtual consultations are real-time audio or video encounters between a patient and a clinician when they are in different locations.',
    'Telehealth Platforms': 'Telehealth platforms are secure software systems that support scheduling, video or audio visits, documentation, and sometimes remote monitoring and messaging.',
    'Remote Patient Monitoring': 'Remote patient monitoring (RPM) is the collection of health data from a patient outside a traditional clinical setting—often via devices—and transmission to the care team for review.',
    'Patient Communication': 'Patient communication in digital care is clear, respectful, two-way exchange that confirms identity, consent, understanding, and next steps.',
    'Telehealth Best Practices': 'Telehealth best practices include verifying identity and consent, ensuring privacy and connection quality, documenting the encounter, and arranging appropriate follow-up.',
    'Health Information Systems': 'Health Information Systems (HIS) are digital systems that collect, store, manage, and transmit data to support clinical care, administration, and public health.',
    'Digital Health Records': 'Digital health records are electronic stores of patient and operational health data that replace or complement paper charts and enable search, sharing, and backup.',
    'Health Data Management': 'Health data management is the disciplined handling of health data across its lifecycle—creation, storage, use, sharing, archiving, and disposal—with quality and security controls.',
    'Clinical Decision Support Systems': 'Clinical Decision Support Systems (CDSS) provide clinicians with knowledge and patient-specific information, intelligently filtered, to enhance decision-making at the point of care.',
    'Health Informatics Basics': 'Health informatics is the interdisciplinary field that uses data, information, and knowledge with information technology to improve health and healthcare delivery.',
    'Interoperability': 'Interoperability is the ability of different health information systems to exchange, interpret, and use data in a coordinated way for better care.',
    'Patient Data Protection': 'Patient data protection is the legal and practical duty to keep personal health information confidential and secure against unauthorised access or disclosure.',
    'Cybersecurity in Healthcare': 'Cybersecurity in healthcare is the set of practices and technologies that protect systems, networks, and data from cyber threats such as ransomware, phishing, and unauthorised access.',
    'Password & Access Management': 'Password and access management ensures that only authorised individuals can reach health systems and data, using unique credentials, least privilege, and secure authentication.',
    'Secure Data Sharing': 'Secure data sharing is the authorised transmission of health information using encryption, approved channels, and need-to-know limits.',
    'Data Backup & Recovery': 'Data backup and recovery are processes that copy critical health data and restore it after loss, failure, or attack so that care can continue.',
    'Ethical Use of Health Data': 'Ethical use of health data means processing information lawfully, for legitimate care or research purposes, with consent where required, and with respect for privacy and fairness.',
    'Artificial Intelligence in Healthcare': 'Artificial intelligence in healthcare is the use of algorithms that learn from data to support tasks such as image analysis, risk prediction, triage, and administrative automation.',
    'AI Clinical Decision Support': 'AI clinical decision support applies machine learning or similar methods to suggest diagnoses, alerts, or treatment options that a qualified clinician must still verify.',
    'Wearable Health Devices': 'Wearable health devices are sensors worn by patients that measure metrics such as heart rate, activity, or glucose and can share data with care teams.',
    'Internet of Medical Things (IoMT)': 'The Internet of Medical Things (IoMT) is the network of connected medical devices and sensors—including wearables, monitors, infusion pumps, imaging systems, and home-care equipment—that collect and exchange health data for monitoring, diagnosis support, and care delivery.',
    'Robotics in Healthcare': 'Robotics in healthcare includes machines that assist surgery, logistics, rehabilitation, or disinfection under human supervision.',
    'Future Trends in Digital Health': 'Future trends in digital health include wider telehealth, AI-assisted care, home-based monitoring, interoperable records, and patient-facing digital tools.',
    'Healthcare Administration Basics': 'Healthcare administration is the management of operations, staff, resources, and compliance so that a facility can deliver care efficiently and safely.',
    'Appointment Scheduling': 'Appointment scheduling is the organisation of patient visits by time, provider, and type (in-person or telehealth) to avoid conflicts and reduce waiting.',
    'Medical Billing Overview': 'Medical billing is the process of recording services provided, coding them where required, and submitting claims or invoices for payment.',
    'Patient Communication Skills': 'Patient communication skills are the abilities to listen, explain, and confirm understanding in a clear, empathetic, and culturally appropriate way.',
    'Professional Documentation': 'Professional documentation is accurate, complete, and timely recording of care activities and decisions for clinical, legal, and administrative purposes.',
    'Team Collaboration': 'Team collaboration is coordinated work among clinical and administrative roles to achieve safe, continuous care for the patient.'
  };

  var DEEP_BODY = {
    'What is Healthcare Technology?': '<p>Healthcare technology ranges from simple digital records to advanced imaging, telehealth platforms, and AI tools. Its purpose is safer, more accessible, and more efficient care—not technology for its own sake. Adoption should follow clinical need, privacy rules, and staff training.</p>',
    'Introduction to Telehealth': '<p>Telehealth includes virtual visits, remote monitoring, and digital communication between patients and providers. It can expand access for rural patients and reduce travel. Success depends on reliable connectivity, secure platforms, clear consent, and appropriate case selection.</p>',
    'Introduction to EHR': '<p>EHRs store demographics, problems, medications, allergies, notes, labs, and imaging in a shareable digital form. Benefits include legibility, availability, and decision support. Risks include data entry burden and privacy breaches if access is poorly controlled.</p>',
    'Telemedicine Fundamentals': '<p>Telemedicine focuses on clinical services at a distance. Modalities include real-time video, audio-only where allowed, and store-and-forward (e.g. images reviewed later). Licensing, reimbursement, and privacy rules vary by jurisdiction and must be followed.</p>',
    'Virtual Consultations': '<p>Prepare the environment: private space, tested audio/video, verified identity, and documented consent. Confirm what can and cannot be assessed remotely. Document the encounter and arrange in-person follow-up when needed.</p>',
    'Remote Patient Monitoring': '<p>Devices measure blood pressure, glucose, weight, or oxygen and send data to the care team. RPM supports chronic disease management when thresholds, alerts, and response protocols are clear. Patient training and data quality matter. RPM devices are part of the broader IoMT and must be secured like other connected medical devices.</p>',
    'Patient Data Protection': '<p>Health data is highly sensitive. Protect it with access controls, encryption, staff training, and need-to-know sharing. Never use real patient data in training exercises. Report suspected breaches according to policy and law. Connected devices that hold or transmit patient data extend the same duty of protection to the device and its network path.</p>',
    'Cybersecurity in Healthcare': '<p>Healthcare is a frequent target for ransomware and phishing. Defences include strong authentication, patching, backups, network segmentation, and continuous staff awareness. One compromised account or device can expose many records or disrupt care. IoMT devices often share networks with IT systems; isolating them reduces the blast radius of an incident.</p>',
    'Password & Access Management': '<p>Use unique accounts, strong passwords, and multi-factor authentication where possible. Never share logins. Apply least privilege so staff and devices only access what they need. Default or hardcoded passwords on medical devices are a major risk and must be changed at deployment.</p>',
    'Secure Data Sharing': '<p>Share health information only through authorised, encrypted channels and only with those who need it for care. Avoid consumer messaging apps for clinical data unless the facility has approved a secure solution. Document disclosures according to policy.</p>',
    'Data Backup & Recovery': '<p>Regular, tested backups protect against ransomware, hardware failure, and accidental deletion. Recovery plans should prioritise systems that affect patient safety. Know how long restoration takes and what manual workarounds apply during downtime.</p>',
    'Ethical Use of Health Data': '<p>Process data lawfully, for legitimate care or approved research, with consent where required. Avoid secondary uses that patients would not expect. Fairness matters when algorithms or analytics influence care decisions.</p>',
    'Clinical Decision Support Systems': '<p>CDSS may flag allergies, suggest dosing, or highlight abnormal results. Alerts should be relevant and not excessive. Clinicians remain accountable for final decisions; CDSS supports, it does not replace, professional judgement.</p>',
    'Interoperability': '<p>When systems cannot exchange data, care is fragmented and tests are repeated. Standards and interfaces allow labs, pharmacies, and clinics to share information securely. True interoperability requires both technical links and agreed meaning of data.</p>',
    'Artificial Intelligence in Healthcare': '<p>AI can assist with imaging, risk scores, and workflow automation. Models reflect their training data and can be biased or wrong. Use AI with validation, human oversight, and clear accountability for patient safety.</p>',
    'Healthcare Ethics': '<p>Respect patient autonomy (consent and choice), promote benefit, avoid harm, and treat people fairly. Technology decisions—who gets access, how data is used—must align with these principles and with applicable law.</p>',
    'Wearable Health Devices': '<p>Wearables measure activity, heart rate, sleep, or glucose and may sync to phones or clinical platforms. They improve engagement and remote monitoring but introduce privacy and security questions: who owns the data, how it is encrypted, and whether the device can be updated. Treat clinical-grade wearables as IoMT assets with appropriate access control and patching.</p>',
    'Internet of Medical Things (IoMT)':
      '<p>IoMT includes wearables, bedside monitors, infusion pumps, imaging systems, implantable devices, and home-care sensors that connect to networks to exchange health data. Connectivity enables continuous monitoring and remote care, but it also creates cybersecurity and patient-safety risks that traditional IT security alone does not fully address.</p>' +
      '<p><strong>Why IoMT security is different:</strong> Compromised devices can affect therapy (dose, stimulation, alarms), not only data confidentiality. Many devices have limited CPU, memory, and battery, making strong security hard. They often remain in service for years on outdated software. Home and bedside placement increases physical access risk. Flat networks allow a weak device to become a path into hospital systems.</p>' +
      '<p><strong>Main threats:</strong> (1) Device-level — default/hardcoded passwords, insecure firmware updates, physical tampering, battery-drain attacks, rogue devices. (2) Network — unencrypted traffic, lateral movement, weak remote access. (3) Data — unauthorised access, interception of vitals or commands. (4) Supply chain — compromised components, missing Software Bill of Materials (SBOM), end-of-life devices without patches. (5) Clinical impact — altered readings, ransomware downtime, delayed care.</p>' +
      '<p><strong>Core controls:</strong> Full inventory of connected devices; network micro-segmentation (isolate IoMT from general IT); change all default credentials; unique identity and least privilege; managed firmware updates; disable unused ports; encrypt data in transit; monitor for anomalous behaviour; demand SBOM and security commitments from vendors; staff training and patient-safety–aware incident plans. Prefer devices designed with secure boot and signed updates where available.</p>' +
      '<p><strong>Practical checklist:</strong> Know every connected medical device; segment the network; eliminate default passwords; patch on a controlled schedule; encrypt traffic; monitor behaviour; require vendor security evidence; train staff; use sample data only in training. Align with facility policy and applicable regulation (e.g. medical device cybersecurity guidance in your jurisdiction).</p>' +
      '<p>This course is educational and is not medical advice. Security decisions for real devices must follow facility policy, manufacturer instructions, and professional/regulatory requirements.</p>',
    'EHR Privacy & Security':
      '<p>EHR systems hold comprehensive patient histories. Protect them with role-based access, audit logs, encryption, and session timeouts. Staff must not share passwords or leave sessions open. Physical access to workstations and removable media also matters. Breaches can harm patients and trigger legal and regulatory consequences.</p>'
  };

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch];
    });
  }

  function formalNote(moduleTitle, name) {
    var def = TOPIC_DEF[name] || (name + ' is an essential concept within healthcare technology and telehealth practice that every professional should understand thoroughly.');
    var deep = DEEP_BODY[name] || ('<p>In professional digital healthcare, <strong>' + esc(name) + '</strong> supports safer, more accessible, and more efficient care when applied with privacy, ethics, and clinical accountability.</p><p>This course is educational and is not medical advice. Always follow facility policy, professional guidelines, and privacy law. Use sample data only in practice.</p>');
    var isIoMT = (name === 'Internet of Medical Things (IoMT)');
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Healthcare Technology & Telehealth · ' + esc(moduleTitle) + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<h4>1. Definition</h4><p>' + esc(def) + '</p>' +
      '<h4>2. Detailed Explanation</h4>' + deep +
      '<h4>3. Why This Topic Matters</h4><ul>' +
      '<li>Digital tools shape access, quality, and safety of care.</li>' +
      '<li>Privacy and cybersecurity are non-negotiable when handling health data and connected devices.</li>' +
      '<li>Well-designed workflows and network controls reduce errors and limit the impact of incidents.</li>' +
      '<li>Skills transfer across clinics, hospitals, telehealth programmes, and health IT roles.</li></ul>' +
      '<h4>4. Key Concepts</h4><ul>' +
      '<li>Definition and scope of <em>' + esc(name) + '</em>.</li>' +
      '<li>Links to patient safety, privacy, and care quality.</li>' +
      (isIoMT ? '<li>Threat categories: device, network, data, supply chain, clinical impact.</li><li>Controls: inventory, segmentation, credentials, updates, encryption, monitoring, vendor requirements.</li>' : '<li>Tools, standards, and workflows used in practice.</li>') +
      '<li>Practical application with sample (non-real) data only.</li>' +
      '<li>Common errors that risk privacy, safety, or compliance.</li></ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>After the video, apply <strong>' + esc(name) + '</strong> in a simulation using fictional patient data only. Document steps and privacy/security safeguards.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> ' +
      (isIoMT
        ? 'List three IoMT device types that might appear in a Liberian clinic or hospital, note one security risk for each, and propose one practical control (e.g. change default password, isolate on a separate network). Use sample scenarios only—never real patient or facility credentials.'
        : 'Apply <em>' + esc(name) + '</em> to a realistic clinic or telehealth scenario with sample data only. Never use real patient data.') +
      '</div>' +
      '<h4>6. Common Mistakes</h4><ul>' +
      '<li>Using real patient data in training or demos.</li>' +
      '<li>Leaving default passwords on devices or sharing staff logins.</li>' +
      '<li>Connecting medical devices to flat, unsegmented networks.</li>' +
      '<li>Skipping identity verification, consent, or private settings in telehealth.</li>' +
      '<li>Treating AI or decision support as a substitute for clinical judgement.</li>' +
      '<li>Ignoring vendor end-of-support dates for connected equipment.</li></ul>' +
      '<h4>7. Summary</h4>' +
      '<p><strong>' + esc(name) + '</strong> is foundational for healthcare technology practice. Mastery supports the Complete Healthcare Technology & Telehealth Professional Certificate—always within ethics, privacy, cybersecurity, and professional standards.</p>' +
      '<h4>8. Study Actions</h4><ol>' +
      '<li>Watch the video and note tools, workflows, threats, and controls.</li>' +
      '<li>Write the definition in your own words.</li>' +
      '<li>Complete the practice task with sample data only.</li>' +
      '<li>Take the practice quiz that follows this lesson.</li></ol>' +
      '<div class="study-callout"><strong>Important:</strong> This course is educational and is not medical advice. Follow facility policy, privacy law, manufacturer guidance, and clinical guidelines for any real system or device.</div>' +
      '<p><strong>Module context:</strong> This lesson belongs to <em>' + esc(moduleTitle) + '</em>.</p></div>';
  }

  function applyEnhancements() {
    if (!COURSES_DB[CID] || !COURSES_DB[CID]._htFullBuilt) return;
    var course = COURSES_DB[CID];
    var notes = (typeof LESSON_CONTENT !== 'undefined' && LESSON_CONTENT[CID]) ? LESSON_CONTENT[CID] : {};
    var skillKeys = ['intro','systems','ehr','telehealth','hit','security','ai','admin','projects','capstone'];

    if (course.modules && course.modules.length) {
      course.modules.forEach(function (mod, mi) {
        var pool = BETTER_VIDEOS[skillKeys[mi] || 'intro'] || BETTER_VIDEOS.intro;
        var vi = 0;
        if (!mod.lessons) return;
        mod.lessons.forEach(function (les) {
          if (les.v && !les.isQuiz) { les.v = pool[vi % pool.length]; vi++; }
        });
      });
    }

    Object.keys(notes).forEach(function (k) {
      var n = notes[k];
      if (typeof n !== 'string') return;
      var replaced = false;
      Object.keys(TOPIC_DEF).forEach(function (title) {
        if (!replaced && n.indexOf(title) !== -1) {
          var modMatch = n.match(/Module \d+:[^<]+/);
          var modTitle = modMatch ? modMatch[0].replace(/<[^>]+>/g, '').trim() : 'Healthcare Technology';
          notes[k] = formalNote(modTitle, title);
          replaced = true;
        }
      });
      if (!replaced && n.indexOf('1. Definition') === -1 && n.indexOf('<h3>') !== -1) {
        var hm = n.match(/<h3>([^<]+)<\/h3>/);
        if (hm) {
          var modMatch2 = n.match(/Module \d+:[^<]+/);
          var modTitle2 = modMatch2 ? modMatch2[0].replace(/<[^>]+>/g, '').trim() : 'Healthcare Technology';
          notes[k] = formalNote(modTitle2, hm[1].trim());
        }
      }
    });

    course._htAllNotes = true;
    course._htIoMTDeep = true;
    console.log('[HEALTHTECH] Deep IoMT security notes + Module 6-7 security expansions applied');
  }

  function loadAndEnhance() {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@17b8ccf2b6be305143484f91230590cafc608858/healthtech-curriculum.js';
    s.onload = function () {
      try { applyEnhancements(); } catch (e) { console.warn('[HEALTHTECH] enhance', e); }
      console.log('[HEALTHTECH] Full curriculum + IoMT deep notes ready');
    };
    s.onerror = function () { console.error('[HEALTHTECH] CDN load failed'); };
    document.head.appendChild(s);
  }

  if (COURSES_DB[CID] && COURSES_DB[CID]._htFullBuilt) {
    try { applyEnhancements(); } catch (e) {}
  } else {
    loadAndEnhance();
  }
})();
