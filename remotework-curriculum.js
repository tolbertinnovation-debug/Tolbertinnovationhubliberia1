/* TIH Remote Work & Freelancing: loader + formal notes for ALL modules. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'remote-work';
  if (COURSES_DB[CID] && COURSES_DB[CID]._rwFullBuilt && COURSES_DB[CID]._rwAllNotes) return;

  var BETTER_VIDEOS = {
    intro: ['KR1WYQEehwc', '7oM-Nfl8CtQ', 'Tn6-PIqc4UM'],
    workspace: ['SZqos8wheEg', '9NzTAZPra3A', '8gNUUK6fwX4'],
    platforms: ['X9HzntPbFdg', 'rErBcmM1wDk', 'DvMNG6MUlGI'],
    clients: ['Jp1vCz2xjWI', '2GzslyLAD1E', '9uU-i5ZI-_U'],
    mgmt: ['fwOYp6Csfno', 'FTOpohYyn1o', 'cZ_nqaptW88'],
    tools: ['8FmTGAtXvKA', 'vSsVueEptN4', 'gw428ygPNiY'],
    branding: ['nViAim00B9M', 'rk9nCnLpreU', 'd7Ms-a2Z9mY'],
    finance: ['gw428ygPNiY', 'Oos9UXRvr28', 'KR1WYQEehwc'],
    ai: ['KcLTXee0iPc', '7oM-Nfl8CtQ'],
    capstone: ['jv3KcY-jIyI', 'KR1WYQEehwc']
  };

  var TOPIC_DEF = {
    'What is Remote Work?': 'Remote work is employment or professional work performed outside a traditional office, typically from home or another location, using digital tools to communicate and deliver results.',
    'What is Freelancing?': 'Freelancing is self-employment in which an individual offers services to clients on a project or contract basis rather than as a permanent salaried employee.',
    'Benefits & Challenges': 'Remote and freelance work offer flexibility, global clients, and autonomy, while presenting challenges such as self-discipline, irregular income, isolation, and the need for strong time management.',
    'Remote Career Opportunities': 'Remote career opportunities are roles and freelance services that can be delivered fully or partly online across fields such as writing, design, development, marketing, support, and consulting.',
    'Digital Work Ethics': 'Digital work ethics are professional standards of honesty, reliability, confidentiality, and clear communication that build trust with clients and remote teams.',
    'Course Overview': 'This course overview outlines the ten modules of the Remote Work & Freelancing Professional Certificate from foundations through platforms, clients, tools, branding, finance, AI, and capstone.',
    'Home Office Essentials': 'Home office essentials are the physical setup—desk, chair, lighting, and quiet space—that support focused, healthy remote work.',
    'Internet & Equipment': 'Internet and equipment requirements for remote work include reliable connectivity, a suitable computer or device, and any peripherals needed for meetings and production.',
    'Productivity Tools': 'Productivity tools are software applications that help plan tasks, track time, organise files, and reduce friction in daily remote work.',
    'Time Management': 'Time management is the deliberate planning and prioritisation of work periods so that deadlines are met and deep work is protected from distraction.',
    'Work-Life Balance': 'Work-life balance is the practice of setting boundaries between professional and personal time so that remote workers remain productive without burnout.',
    'Cybersecurity Basics': 'Cybersecurity basics for remote workers include strong unique passwords, multi-factor authentication, secure networks, and careful handling of client data.',
    'Upwork': 'Upwork is a major freelance marketplace where clients post jobs and freelancers bid with proposals, profiles, and portfolios to win contracts.',
    'Fiverr': 'Fiverr is a freelance platform organised around productised services ("gigs") that freelancers package at fixed prices for clients to purchase.',
    'Freelancer.com': 'Freelancer.com is an online marketplace that connects freelancers with clients through contests, project postings, and hourly or fixed contracts.',
    'PeoplePerHour': 'PeoplePerHour is a freelance platform that emphasises hourly and fixed-price work, especially for creative and professional services.',
    'Contra': 'Contra is a freelance platform focused on independent professionals, often with commission-free models and portfolio-centred discovery.',
    'Creating a Professional Profile': 'A professional freelance profile is a clear presentation of skills, experience, samples, and positioning that helps clients decide to hire you.',
    'Building a Portfolio': 'A freelance portfolio is a curated set of work samples and results that demonstrates capability and relevance to target clients.',
    'Writing Winning Proposals': 'Winning proposals are tailored written offers that restate the client’s goal, explain your approach, list deliverables and price, and invite a clear next step.',
    'Pricing Your Services': 'Pricing services means setting rates—hourly, per project, or value-based—that reflect skill, market demand, and the outcomes you deliver.',
    'Client Communication': 'Client communication is prompt, clear, and professional exchange that sets expectations, reports progress, and resolves issues before they escalate.',
    'Negotiation Skills': 'Negotiation skills are the ability to discuss scope, price, and terms so that both freelancer and client reach a fair, sustainable agreement.',
    'Closing Deals': 'Closing deals is the process of moving from discussion to confirmed agreement—scope, price, timeline, and payment terms—so work can begin.',
    'Project Planning': 'Project planning defines tasks, milestones, deliverables, and deadlines so that freelance work is organised and trackable.',
    'Managing Deadlines': 'Managing deadlines is the discipline of estimating time realistically, prioritising work, and communicating early when risks appear.',
    'Client Expectations': 'Managing client expectations means agreeing in writing what will be delivered, by when, at what price, and how revisions will be handled.',
    'Handling Revisions': 'Handling revisions is the professional response to client feedback within an agreed policy so that quality improves without unlimited unpaid work.',
    'Customer Service': 'Customer service for freelancers is responsive, respectful support that protects reputation and encourages repeat business and referrals.',
    'Long-Term Client Relationships': 'Long-term client relationships are ongoing partnerships that provide steady work, higher trust, and lower cost of finding new clients.',
    'Google Workspace': 'Google Workspace is a suite of cloud tools—Docs, Sheets, Drive, Meet, and Gmail—used for document collaboration and remote communication.',
    'Microsoft Teams': 'Microsoft Teams is a collaboration platform for chat, meetings, files, and integration with Microsoft 365 used by many remote organisations.',
    'Zoom': 'Zoom is a widely used video-conferencing tool for client calls, team meetings, and webinars in remote work.',
    'Slack': 'Slack is a messaging platform organised by channels that supports real-time team communication and integrations with other work tools.',
    'Trello': 'Trello is a visual task and project board tool based on cards and lists that helps freelancers and teams track work stages.',
    'Notion': 'Notion is an all-in-one workspace for notes, databases, wikis, and project tracking used by freelancers and remote teams.',
    'LinkedIn Optimization': 'LinkedIn optimization is the improvement of a professional profile and activity so that recruiters and clients can find and trust your expertise.',
    'Resume & CV Writing': 'Resume and CV writing is the craft of presenting experience, skills, and achievements clearly and relevantly for target roles or clients.',
    'Personal Portfolio Website': 'A personal portfolio website is an online home for your services, samples, and contact details that you control beyond any single platform.',
    'Networking': 'Networking is the intentional building of professional relationships that lead to opportunities, referrals, and learning.',
    'Interview Preparation': 'Interview preparation is research and practice that helps you present skills and fit clearly in conversations with clients or employers.',
    'Career Development': 'Career development is the ongoing plan to grow skills, rates, and positioning over time as a remote professional or freelancer.',
    'Pricing Strategies': 'Pricing strategies are approaches—hourly, fixed, package, or value-based—that align how you charge with the work and the market.',
    'Invoicing': 'Invoicing is the formal request for payment that lists work done, amounts, due dates, and payment methods.',
    'International Payments': 'International payments are cross-border transfers of freelance earnings using services such as bank transfer, Payoneer, or Wise.',
    'Budgeting': 'Budgeting for freelancers is planning income and expenses across variable months so that taxes, savings, and living costs are covered.',
    'Taxes for Freelancers': 'Taxes for freelancers are the legal obligations to report and pay tax on self-employment income according to the rules of your jurisdiction.',
    'Business Planning': 'Business planning for freelancers is defining services, clients, pricing, marketing, and financial targets so growth is intentional.',
    'ChatGPT for Productivity': 'ChatGPT for productivity is the use of AI language tools to draft, summarise, brainstorm, and accelerate routine writing under human review.',
    'AI Writing Tools': 'AI writing tools assist with drafting, editing, and idea generation while the freelancer remains responsible for accuracy and originality.',
    'AI Meeting Assistants': 'AI meeting assistants transcribe, summarise, and extract action items from calls to reduce note-taking burden.',
    'Workflow Automation': 'Workflow automation connects apps so that repetitive steps—such as saving files or notifying clients—run without manual effort.',
    'AI for Research': 'AI for research helps gather and organise information quickly; results must still be verified against reliable sources.',
    'Responsible AI Use': 'Responsible AI use means reviewing outputs, protecting client confidentiality, being transparent where expected, and not presenting AI work as fully human without disclosure when required.'
  };

  var DEEP_BODY = {
    'What is Remote Work?': '<p>Remote work separates job performance from a fixed office. Communication, file sharing, and meetings happen through digital tools. Success depends on clear expectations, reliable technology, and self-management rather than physical presence.</p>',
    'What is Freelancing?': '<p>Freelancers sell services—writing, design, development, marketing, support—to multiple clients. Income is project- or contract-based. Freedom comes with responsibility for finding work, pricing, delivery, and finances.</p>',
    'Building a Portfolio': '<p>Show your best relevant work with context: problem, your role, and result. Quality beats quantity. Update samples as your skills grow. Public portfolios and platform profiles should stay consistent.</p>',
    'Writing Winning Proposals': '<p>Read the brief carefully. Restate the client’s goal, outline your approach, list deliverables and timeline, state price and terms, and include one relevant sample. Personalised proposals outperform generic templates.</p>',
    'Pricing Your Services': '<p>Research market rates for your skill and region. Factor in taxes, tools, and unpaid time. Start with clear packages or hourly rates; raise prices as results and demand grow. Underpricing can signal low value.</p>',
    'Client Communication': '<p>Confirm scope in writing. Give progress updates before clients ask. Respond promptly even if only to set a later reply time. Professional tone and documented agreements prevent most disputes.</p>',
    'Invoicing': '<p>Issue invoices promptly with clear line items, due dates, and payment methods. Keep copies for records. Late payment policies should be stated in advance. International freelancers often use Payoneer, Wise, or bank transfer.</p>',
    'Cybersecurity Basics': '<p>Use unique strong passwords and multi-factor authentication. Prefer secure networks over public Wi-Fi for sensitive work. Keep software updated. Never share client data in unapproved channels.</p>',
    'Work-Life Balance': '<p>Define start and end times for the workday. Take breaks. Separate workspace from living space when possible. Sustainable routines protect health and long-term earning capacity.</p>',
    'LinkedIn Optimization': '<p>Use a clear headline that states what you do and for whom. Write a summary focused on outcomes. List experience with achievements, not only duties. Engage thoughtfully to stay visible.</p>',
    'Responsible AI Use': '<p>AI speeds drafting and research but can be wrong or biased. Always review before sending client work. Protect confidential information—do not paste sensitive client data into public tools without approval. Be transparent when clients or platforms require it.</p>',
    'Creating a Professional Profile': '<p>A strong profile has a professional photo, a specific headline, a benefit-focused overview, skills, and portfolio samples. Platforms rank and filter by completeness and relevance—fill every required field carefully.</p>'
  };

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch];
    });
  }

  function formalNote(moduleTitle, name) {
    var def = TOPIC_DEF[name] || (name + ' is an essential concept within remote work and freelancing that every professional should understand thoroughly.');
    var deep = DEEP_BODY[name] || ('<p>In professional remote and freelance practice, <strong>' + esc(name) + '</strong> supports reliable delivery, client trust, and sustainable income when applied with clear processes and ethics.</p>');
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Remote Work & Freelancing · ' + esc(moduleTitle) + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<h4>1. Definition</h4><p>' + esc(def) + '</p>' +
      '<h4>2. Detailed Explanation</h4>' + deep +
      '<h4>3. Why This Topic Matters</h4><ul>' +
      '<li>Remote and freelance careers depend on clear skills, tools, and professional habits.</li>' +
      '<li>Strong profiles, proposals, and delivery win and retain clients.</li>' +
      '<li>Finance, security, and boundaries protect income and wellbeing.</li>' +
      '<li>Skills transfer across platforms, industries, and global clients.</li></ul>' +
      '<h4>4. Key Concepts</h4><ul>' +
      '<li>Definition and scope of <em>' + esc(name) + '</em>.</li>' +
      '<li>How it supports finding work, delivering projects, or managing a freelance business.</li>' +
      '<li>Practical tools, templates, and standards used in the field.</li>' +
      '<li>Steps you can apply to your own profile, client, or workflow.</li>' +
      '<li>Common mistakes that cost clients, time, or reputation.</li></ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>After the video, apply <strong>' + esc(name) + '</strong> to your real or sample freelance situation. Document one concrete improvement.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> Apply <em>' + esc(name) + '</em> to your profile, a sample client project, or your weekly remote routine and note the expected benefit.</div>' +
      '<h4>6. Common Mistakes</h4><ul>' +
      '<li>Generic proposals that ignore the client’s brief.</li>' +
      '<li>Underpricing without accounting for taxes, tools, and unpaid time.</li>' +
      '<li>Poor communication or missed deadlines without early notice.</li>' +
      '<li>Weak security habits with client data or account access.</li>' +
      '<li>Relying on AI output without review before client delivery.</li></ul>' +
      '<h4>7. Summary</h4>' +
      '<p><strong>' + esc(name) + '</strong> is foundational for a sustainable remote and freelance career. Mastery supports the Complete Remote Work & Freelancing Professional Certificate.</p>' +
      '<h4>8. Study Actions</h4><ol>' +
      '<li>Watch the video and note tools, examples, and processes.</li>' +
      '<li>Write the definition in your own words.</li>' +
      '<li>Complete the practical task for your own career or a sample scenario.</li>' +
      '<li>Take the practice quiz that follows this lesson.</li></ol>' +
      '<p><strong>Module context:</strong> This lesson belongs to <em>' + esc(moduleTitle) + '</em>.</p></div>';
  }

  function applyEnhancements() {
    if (!COURSES_DB[CID] || !COURSES_DB[CID]._rwFullBuilt) return;
    var course = COURSES_DB[CID];
    var notes = (typeof LESSON_CONTENT !== 'undefined' && LESSON_CONTENT[CID]) ? LESSON_CONTENT[CID] : {};
    var skillKeys = ['intro','workspace','platforms','clients','mgmt','tools','branding','finance','ai','capstone'];

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
          var modTitle = modMatch ? modMatch[0].replace(/<[^>]+>/g, '').trim() : 'Remote Work & Freelancing';
          notes[k] = formalNote(modTitle, title);
          replaced = true;
        }
      });
      if (!replaced && n.indexOf('1. Definition') === -1 && n.indexOf('<h3>') !== -1) {
        var hm = n.match(/<h3>([^<]+)<\/h3>/);
        if (hm) {
          var modMatch2 = n.match(/Module \d+:[^<]+/);
          var modTitle2 = modMatch2 ? modMatch2[0].replace(/<[^>]+>/g, '').trim() : 'Remote Work & Freelancing';
          notes[k] = formalNote(modTitle2, hm[1].trim());
        }
      }
    });

    course._rwAllNotes = true;
    console.log('[REMOTEWORK] Formal notes applied for ALL modules');
  }

  function loadAndEnhance() {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@10b1439d3c094556b67750ecfccee8f3b1d91e29/remotework-curriculum.js';
    s.onload = function () {
      try { applyEnhancements(); } catch (e) { console.warn('[REMOTEWORK] enhance', e); }
      console.log('[REMOTEWORK] Full curriculum + all-module formal notes ready');
    };
    s.onerror = function () { console.error('[REMOTEWORK] CDN load failed'); };
    document.head.appendChild(s);
  }

  if (COURSES_DB[CID] && COURSES_DB[CID]._rwFullBuilt) {
    try { applyEnhancements(); } catch (e) {}
  } else {
    loadAndEnhance();
  }
})();
