/* TIH AI & CYBERSECURITY — one distinct YouTube video per topic.
   Course id: ai-cybersecurity

   Policy: one topic, one video. Every content lesson in this course gets its
   own video; none is shared with another lesson here. Before this file the
   course ran on 15 videos across 133 lessons, six of them carrying ten
   lessons each.

   The AI, Python and cloud modules are what make this course different from
   the standalone Cybersecurity course, so those were sourced fresh. The
   networking, Linux, ethical-hacking, web, SOC and forensics modules teach
   the same ground, and draw on the pool sourced for that course -- a learner
   taking both will meet some of the same videos twice, which the
   one-topic-one-video policy allows: it is about reuse WITHIN a course.

   Keys are the lesson title with its numeric prefix stripped. No title
   repeats across modules in this course, so no module-qualified keys are
   needed; the apply hook still resolves "M<n>:Title" first should one
   appear later. */
(function () {
  var C = (typeof COURSES_DB === 'undefined') ? null : COURSES_DB['ai-cybersecurity'];
  if (!C || !C.modules) return;
  var MAP = {
    'What Is Artificial Intelligence?': 'WYkbKzDfgqo',
    'What Is Cybersecurity?': 'wLgdhrZMGKE',
    'Why AI and Cybersecurity Matter': 'GRakLY9Q0ko',
    'Types of Cyber Threats': 'EdFiH_BfEH4',
    'Cybersecurity Roles and Careers': '97KDdOSO4Sc',
    'How AI Is Used in Cybersecurity': 'fnQQ6Rr1AOk',
    'Computer Hardware and Software': 'mXw9ruZaxzQ',
    'Operating Systems': '-fgB5sqzQAg',
    'Files, Processes, and Services': 'sWbUDq4S6Y8',
    'What Is a Computer Network?': 'Jo4j4w92K_Q',
    'IP Addresses': '9GDX-IyZ_C8',
    'MAC Addresses': 'UTXS0wywFks',
    'DNS and DHCP': 'ka7VoWf_aSI',
    'Ports and Protocols': 'AM3QRBnbqp8',
    'TCP/IP Fundamentals': 'ROjZy1WbCIA',
    'How the Internet Works': 'dOiA2nNJpc0',
    'CIA Triad: Confidentiality, Integrity and Availability': '_cFxNYDp5qU',
    'Authentication and Authorization': 'Q6nQk_aTGb4',
    'Password Security': 'UwujuV9K-OE',
    'Multi-Factor Authentication': 'kpXc3qERFE4',
    'Encryption Basics': 'hxpuYtMQgf0',
    'Firewalls': '6IjtM7uhP3s',
    'Antivirus and Endpoint Security': 'MlnrD_um28c',
    'Security Policies': 'egDb4DxP7hQ',
    'Risk Management': 'X5yqPFp__rc',
    'Security Awareness': 'noew0Lhksj8',
    'What Is Linux?': 'NNAxqSyTsUI',
    'Installing a Linux Virtual Machine': 'QBlENrp2wns',
    'Linux Terminal Basics': 'D3YY1RJKzrA',
    'Linux File System': '5UZ76TCaHr4',
    'Users and Permissions': 'jID3dFxuFR8',
    'Managing Processes': '4eYzeqhi15I',
    'Installing Software': 'WhCIuGjhH-0',
    'Networking Commands': 'BmVmJi5dR9c',
    'Bash Fundamentals': 'BneQWEe_B2w',
    'Linux Security Basics': 'EvQLXtnb5mE',
    'What Is Ethical Hacking?': 'wlqUO09J-nw',
    'Legal and Ethical Responsibilities': 'WvSEkPU1n0I',
    'Reconnaissance': 'rE9TIi_-h5U',
    'Information Gathering': '038uGW0ZrpQ',
    'Vulnerability Scanning': 'tF9ImrHHyx0',
    'Network Scanning': 'LOK5dsw_5qI',
    'Understanding Common Vulnerabilities': '8fFL6lIJMk0',
    'Web Security Fundamentals': 'QqsGgVSvXDk',
    'Password Security Testing': 'rY-yaAS6Pks',
    'Writing a Security Assessment': 'MWPCege957c',
    'How Websites Work': '0ypF803ScD0',
    'HTTP and HTTPS': '0FwHjRQoQKU',
    'Cookies and Sessions': '6ZiDyRgtMvA',
    'Authentication Security': 'ZPQz2Im12A8',
    'Access Control': '9axMEzeTBic',
    'SQL Injection Concepts': 'Rm1GoSYqaUA',
    'Cross-Site Scripting (XSS)': 'Jzr0Jdnq_EI',
    'Cross-Site Request Forgery (CSRF)': '4zg2kpCMMqg',
    'Secure Web Development': 'HJZ_zHGFpes',
    'OWASP Top 10': 'cR4gw-cPZOA',
    'Introduction to Python': 'cjdIIwUZsAg',
    'Installing Python': '1NeJvF_DTTI',
    'Python Variables and Data Types': '8XC_fkmcEec',
    'Conditions and Loops': 'AFMcuH-rXxM',
    'Functions': '4pe1fn3Gus0',
    'Working With Files': 'FBSisR_3rJs',
    'Python and Networking': 'jAb7wN7cT_4',
    'Working With APIs': 'U7fXas-ce_c',
    'Automating Security Tasks': 'Qnagf4K4Ju8',
    'Building a Simple Security Tool': 'xgk_ESxKei0',
    'AI vs. Machine Learning': 'stMVdUJaNfI',
    'Generative AI': 'vwncYfhxbR0',
    'Large Language Models': 'deQ7ltRsCzw',
    'How ChatGPT and Similar AI Systems Work': 'N-fV4T3MUBc',
    'Prompt Engineering': 'AqwaIe397eU',
    'AI for Security Research': 'zjkBMFhNj_g',
    'AI for Log Analysis': 'tUpPh4bPpLo',
    'AI for Threat Detection': 'y_utxpDVKbg',
    'AI-Assisted Security Automation': '1iiC_2SA0ao',
    'Limitations of AI in Cybersecurity': 'gnZ_Yg8qBDs',
    'Understanding Security Logs': 'ANHiHvO6n10',
    'Identifying Suspicious Activity': 'tnOKD0Kp8cQ',
    'Detecting Anomalies': 'MN9qxfPI7cQ',
    'AI-Based Malware Detection': 'N0Ea4jEbFxs',
    'Phishing Detection With AI': '8w9sQeJs7oc',
    'Threat Intelligence': 'dB-pcHTj3hQ',
    'Indicators of Compromise (IOCs)': 'D9XAZ2ou4Ik',
    'Security Event Analysis': 'tZ2NtQq7nN4',
    'Building a Basic Threat Detection Workflow': 'e-fIQME9f64',
    'Evaluating AI Security Tools': 'n8mbzU0X2nQ',
    'What Is a SOC?': '9IXM05BJ5kk',
    'SOC Analyst Responsibilities': 'x7ONHADL4uw',
    'Security Information and Event Management (SIEM)': 'qjoQ53nh9Iw',
    'Log Collection': '8zezBC4Xn6w',
    'Alert Monitoring': 'JVh6nBinq54',
    'Alert Triage': 'wJXhSfznidY',
    'Incident Investigation': 'lXPtuSZ9P-A',
    'Threat Hunting': '_n2csnroPaU',
    'Incident Documentation': 'h9b-ZJJn4kI',
    'SOC Automation': 'iAx4PgYoWD4',
    'Introduction to Digital Forensics': 'Cap9LgT7314',
    'Evidence Collection': '3aoZ0Phg_cM',
    'Evidence Preservation': 'vimQuaC3RYM',
    'File and Disk Analysis': '9sJkM0bUF3c',
    'Understanding System Logs': 'RcWtxWDHeD8',
    'Investigating Suspicious Activity': 'z_x7gCtntIc',
    'Malware Incident Response': 'QorvAip9Qu0',
    'Phishing Incident Response': 'a8A2z5QA6Jc',
    'Incident Recovery': 'rWye8Hvf6sI',
    'Writing an Incident Report': 'b6sT5CeB46k',
    'AI-Generated Phishing': 'satkgjltgo0',
    'Deepfakes and Identity Fraud': 'fCpAr2OylDw',
    'AI-Powered Social Engineering': 'Sv5OLj2nVAQ',
    'Adversarial Machine Learning': '7jx5ioieg44',
    'Prompt Injection': 'ptZZeeb2oLk',
    'AI Data Privacy': 'ZhwVxxzhNCA',
    'Securing AI Applications': '7btwLasFVtU',
    'AI Model Security': 'aP8j9dgpAs0',
    'Responsible AI': 'BgEKZEBU8uE',
    'Future of AI and Cybersecurity': 'q2phcnesXvY',
    'What Is Cloud Computing?': 'tRPE_FWV4QI',
    'Cloud Security Fundamentals': 'YymEQ5ULQRs',
    'Identity and Access Management': '2CGTMuTQoaE',
    'Cloud Data Protection': 'T7p8IN5Hjo4',
    'Cloud Network Security': 'dabbsZ_sDX0',
    'Securing Cloud Applications': '7tqDUl8KjKk',
    'AI Services in the Cloud': 'BmkVTOsUadE',
    'Cloud Security Monitoring': 'mPWEhbcy5rk',
    'Common Cloud Security Risks': 'q79kFxwUEqM',
    'Cloud Security Best Practices': '59cDG202M5c',
    'Security Assessment Project': '3hRnTtMhAro',
    'Phishing Detection Project': 'ga2SHmMWL0s',
    'Log Analysis Project': 'I_sjnPG_-vI',
    'AI Security Assistant Project': 'S3oJCxNhRtE',
    'Incident Response Project': 'sfjQ4KIfL-U',
    'Final Capstone Project': 'Yes4oc046hY',
    'Certificate Requirements': 'iRmqOrcAm0o'
  };
  function cleanTitle(t) {
    return String(t || '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(/^\s*[\d]+(?:\.[\d]+)*\s+/, '')
      .replace(/^(Practice|Project):\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  var applied = 0;
  C.modules.forEach(function (mod, i) {
    var num = (String(mod.title).match(/Module\s+(\d+)/) || [])[1] || (i + 1);
    (mod.lessons || []).forEach(function (lesson) {
      if (lesson.isQuiz || lesson.isFinal) return;
      var key = cleanTitle(lesson.t);
      var v = MAP['M' + num + ':' + key] || MAP[key];
      if (v) { lesson.v = v; applied += 1; }
    });
  });
  if (typeof console !== 'undefined' && console.log) {
    console.log('[AI-CYBERSECURITY videos] distinct video applied to ' + applied + ' lessons');
  }
})();
