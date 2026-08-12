/* ============================================================
   TIH LEARNING HUB — VIDEO OVERRIDES (module + topic)
   ------------------------------------------------------------
   MODULES[courseId][moduleNumber] = default video for a whole module.
   TOPICS[courseId]['M<n>:Topic Title'] = a specific topic (wins).
   Accepts full YouTube links OR bare 11-char ids. Playlist links are
   ignored. Title match ignores the '3.1 ' numbering, emojis and case.
   ============================================================ */
(function () {
  function vid(u) {
    u = String(u || '').trim();
    if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;
    var m = u.match(/[?&]v=([A-Za-z0-9_-]{11})/) || u.match(/youtu\.be\/([A-Za-z0-9_-]{11})/) ||
            u.match(/\/embed\/([A-Za-z0-9_-]{11})/) || u.match(/\/shorts\/([A-Za-z0-9_-]{11})/) ||
            u.match(/\/live\/([A-Za-z0-9_-]{11})/);
    return m ? m[1] : '';
  }

  // Module defaults now live in each course's curriculum builder VIDEOS map.
  var MODULES = {};

  // Per-TOPIC videos (module-qualified 'M<n>:Title'), one per topic.
  var TOPICS = {
    'computer-literacy': {
      'M2:Using Windows Icons': '26QPDBe-NB8',
      'M2:Using the Taskbar': '26QPDBe-NB8',
      'M2:Opening and Closing Programs': '26QPDBe-NB8',
      'M2:Using Windows Search': '26QPDBe-NB8',
      'M6:Creating Strong Passwords': '3NjQ9b3pgIg',
      'M6:Two-Factor Authentication': '0mvCeNsTa1g',
      'M11:Google Docs': 'eIMm6n63j8Q',
      'M11:Google Sheets': '7gVq4xA7q2Y',
      'M11:Google Slides': '8hO6M6H4JmA',
      'M12:Introduction to Zoom': 'hIkCmbvAHQQ',
      'M12:Joining a Zoom Meeting': 'hIkCmbvAHQQ',
      'M12:Using Zoom for Online Classes and Meetings': 'hIkCmbvAHQQ',
      'M14:Creating a Professional Document': 'S-nHYzK-BVg',
      'M14:Creating a Professional Spreadsheet': 'Vl0H-qTclOg',
      'M14:Creating a Professional Presentation': 'u7Tku3_RGPs',
      'M14:Professional Email Communication': 'l0eM9Vq9GJU',
      'M14:Managing Digital Files': 'gs7QvB8m0Ho',
      'M14:Online Collaboration': 'gs7QvB8m0Ho',
      'M14:Digital Workplace Safety': 'XBkzBrXlle0'
    },
    'ai-cybersecurity': {
      'M1:What Is Artificial Intelligence?': 'ad79nYk2keg',
      'M1:What Is Cybersecurity?': 'inWWhr5tnEA',
      'M1:Why AI and Cybersecurity Matter': '2ePf9rue1Ao',
      'M1:Types of Cyber Threats': '0o8axKc4j9A',
      'M1:Cybersecurity Roles and Careers': 'U_P23SqJaDc',
      'M1:How AI Is Used in Cybersecurity': '2ePf9rue1Ao',
      'M2:Computer Hardware and Software': 'Xpk67YzOn5w',
      'M2:Operating Systems': '26QPDBe-NB8',
      'M2:Files, Processes, and Services': 'ZtqBQ68cfJc',
      'M2:What Is a Computer Network?': 'IHdXfUHBBEI',
      'M2:IP Addresses': '8zEVA-Bxs-0',
      'M2:MAC Addresses': '-DxV9mluqc8',
      'M2:DNS and DHCP': 'BYN4qJjb484',
      'M2:Ports and Protocols': '4ZtZ1N5K9kM',
      'M2:TCP/IP Fundamentals': 'tnAW02zvFhU',
      'M2:How the Internet Works': '7_LPdttKXPc',
      'M3:CIA Triad: Confidentiality, Integrity and Availability': 'pAGcgMfVykg',
      'M3:Authentication and Authorization': 'pAGcgMfVykg',
      'M3:Password Security': '3NjQ9b3pgIg',
      'M3:Multi-Factor Authentication': '0mvCeNsTa1g',
      'M3:Encryption Basics': 'AQDCe585Lnc',
      'M3:Firewalls': 'kDEX1HXybrU',
      'M3:Antivirus and Endpoint Security': '4f4k3QZ7j0I',
      'M3:Security Policies': '6Z7N9R1Q1wM',
      'M3:Risk Management': '0j3J5m7W9bM',
      'M3:Security Awareness': 'XBkzBrXlle0',
      'M4:What Is Linux?': '-E97kKJTBxc',
      'M4:Installing a Linux Virtual Machine': 'wX75Z-4MEoM',
      'M4:Linux Terminal Basics': 'oxuRxtrO2Ag',
      'M4:Linux File System': 'HbgzrKJvDRw',
      'M4:Users and Permissions': 'iwolPf6kN-k',
      'M4:Managing Processes': '6gN2f3W4v7k',
      'M4:Installing Software': 'V3s6rK6s5kY',
      'M4:Networking Commands': '9GDX-IyZ_C8',
      'M4:Bash Fundamentals': 'tK9Oc6AEnR4',
      'M4:Linux Security Basics': 'J2zQmJ8b6vA',
      'M5:What Is Ethical Hacking?': 'XLvPpirlmEs',
      'M5:Legal and Ethical Responsibilities': '0Qq4j2H7G4Y',
      'M5:Reconnaissance': 'Q2J6FfV9z9k',
      'M5:Information Gathering': 'Q2J6FfV9z9k',
      'M5:Vulnerability Scanning': '5jG3h4p7n2A',
      'M5:Network Scanning': '4t4kBkMsDbQ',
      'M5:Understanding Common Vulnerabilities': 'QJ6gY1Q9v8Y',
      'M5:Web Security Fundamentals': '1w6QZ7p9n2M',
      'M5:Password Security Testing': '7U-RfR6J3jM',
      'M5:Writing a Security Assessment': 'V0p8yQ3m2Lk',
      'M6:How Websites Work': 'hJHvdBlSxug',
      'M6:HTTP and HTTPS': 'iYM2zFP3Zn0',
      'M6:Cookies and Sessions': 'IF3Z7X2Q4vM',
      'M6:Authentication Security': '9b5Z6r8m1KQ',
      'M6:Access Control': 'V6X5X3m9rYQ',
      'M6:SQL Injection Concepts': 'ciNHn38EyRc',
      'M6:Cross-Site Scripting (XSS)': 'EoaDgUgS6QA',
      'M6:Cross-Site Request Forgery (CSRF)': '3w1G7Q4Y2jA',
      'M6:Secure Web Development': 'F7Kz5Y1r9Qk',
      'M6:OWASP Top 10': 'Zp4B5m7N8xQ',
      'M7:Introduction to Python': 'rfscVS0vtbw',
      'M7:Installing Python': 'YYXdXT2l-Gg',
      'M7:Python Variables and Data Types': 'ohCDWZgNIU0',
      'M7:Conditions and Loops': '6iF8Xb7Z3wQ',
      'M7:Functions': 'NSbOtYzIQI0',
      'M7:Working With Files': 'Uh2ebFW8OYM',
      'M7:Python and Networking': 'Qnagf4K4Ju8',
      'M7:Working With APIs': 'WXsD0ZgxjRw',
      'M7:Automating Security Tasks': 'Qnagf4K4Ju8',
      'M7:Building a Simple Security Tool': 'Qnagf4K4Ju8',
      'M8:AI vs. Machine Learning': '4qVRBYAdLAo',
      'M8:Generative AI': 'G2fqAlgmoPo',
      'M8:Large Language Models': 'zjkBMFhNj_g',
      'M8:How ChatGPT and Similar AI Systems Work': 'OX2pW9n6Q0I',
      'M8:Prompt Engineering': '_ZvnD73m40o',
      'M8:AI for Security Research': '2ePf9rue1Ao',
      'M8:AI for Log Analysis': '9RfsRn7m7OE',
      'M8:AI for Threat Detection': '2ePf9rue1Ao',
      'M8:AI-Assisted Security Automation': '2ePf9rue1Ao',
      'M8:Limitations of AI in Cybersecurity': '2ePf9rue1Ao',
      'M9:Understanding Security Logs': '9RfsRn7m7OE',
      'M9:Identifying Suspicious Activity': '9RfsRn7m7OE',
      'M9:Detecting Anomalies': '9RfsRn7m7OE',
      'M9:AI-Based Malware Detection': '2ePf9rue1Ao',
      'M9:Phishing Detection With AI': 'XBkzBrXlle0',
      'M9:Threat Intelligence': '8eG4mL8Y6jA',
      'M9:Indicators of Compromise (IOCs)': '6X5V8Q4m2jA',
      'M9:Security Event Analysis': '9RfsRn7m7OE',
      'M9:Building a Basic Threat Detection Workflow': '9RfsRn7m7OE',
      'M9:Evaluating AI Security Tools': '2ePf9rue1Ao',
      'M10:What Is a SOC?': '8dR5D4Y3jQk',
      'M10:SOC Analyst Responsibilities': 'U_P23SqJaDc',
      'M10:Security Information and Event Management (SIEM)': '9RfsRn7m7OE',
      'M10:Log Collection': '9RfsRn7m7OE',
      'M10:Alert Monitoring': '9RfsRn7m7OE',
      'M10:Alert Triage': '9RfsRn7m7OE',
      'M10:Incident Investigation': '9RfsRn7m7OE',
      'M10:Threat Hunting': '6X5V8Q4m2jA',
      'M10:Incident Documentation': 'V0p8yQ3m2Lk',
      'M10:SOC Automation': '9RfsRn7m7OE',
      'M12:AI-Generated Phishing': 'XBkzBrXlle0',
      'M12:Deepfakes and Identity Fraud': '4Q7FTjhvZ7Y',
      'M12:AI-Powered Social Engineering': '2ePf9rue1Ao',
      'M12:Adversarial Machine Learning': '1KqW9v9L3rA',
      'M12:Prompt Injection': '9RfsRn7m7OE',
      'M12:AI Data Privacy': '2ePf9rue1Ao',
      'M12:Securing AI Applications': '2ePf9rue1Ao',
      'M12:AI Model Security': '2ePf9rue1Ao',
      'M12:Responsible AI': '2ePf9rue1Ao',
      'M12:Future of AI and Cybersecurity': '2ePf9rue1Ao',
      'M13:What Is Cloud Computing?': 'RWgW-CgdIk0',
      'M13:Cloud Security Fundamentals': 'K4r9Q5j7m2A',
      'M13:Identity and Access Management': 'T5c7m2L9Q1A',
      'M13:Cloud Data Protection': 'K4r9Q5j7m2A',
      'M13:Cloud Network Security': 'K4r9Q5j7m2A',
      'M13:Securing Cloud Applications': 'K4r9Q5j7m2A',
      'M13:AI Services in the Cloud': '2ePf9rue1Ao',
      'M13:Cloud Security Monitoring': '9RfsRn7m7OE',
      'M13:Common Cloud Security Risks': 'K4r9Q5j7m2A',
      'M13:Cloud Security Best Practices': 'K4r9Q5j7m2A'
    }
  };

  function normMap(src){var out={};Object.keys(src||{}).forEach(function(cid){out[cid]={};Object.keys(src[cid]).forEach(function(k){var id=vid(src[cid][k]);if(id)out[cid][k]=id;});});return out;}
  window.TIH_MODULE_VIDEOS = normMap(MODULES);
  window.TIH_TOPIC_VIDEOS = normMap(TOPICS);
})();
