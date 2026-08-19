/* TIH Remote Work & Freelancing: formal notes ALL modules + deep contract topics. */
(function () {
  if (typeof COURSES_DB === 'undefined') return;
  var CID = 'remote-work';
  if (COURSES_DB[CID] && COURSES_DB[CID]._rwFullBuilt && COURSES_DB[CID]._rwContractDeep) return;

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
    'Closing Deals': 'Closing deals is the process of moving from discussion to confirmed written agreement—scope, price, timeline, payment terms, and signatures—so that work can begin with clear mutual commitments.',
    'Project Planning': 'Project planning defines tasks, milestones, deliverables, and deadlines so that freelance work is organised and trackable.',
    'Managing Deadlines': 'Managing deadlines is the discipline of estimating time realistically, prioritising work, and communicating early when risks appear.',
    'Client Expectations': 'Managing client expectations means agreeing in writing what will be delivered, by when, at what price, and how revisions and changes will be handled so that both parties share the same understanding.',
    'Handling Revisions': 'Handling revisions is the professional response to client feedback within an agreed policy so that quality improves without unlimited unpaid work or damaged relationships.',
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

  var CONTRACT_SECTIONS =
    '<p><strong>Essential freelance contract sections:</strong></p><ol>' +
    '<li><strong>Parties</strong> — full names (or business names), addresses, contacts of freelancer and client.</li>' +
    '<li><strong>Scope of work</strong> — clear deliverables; what is in and out of scope.</li>' +
    '<li><strong>Timeline</strong> — start date, milestones, final deadline.</li>' +
    '<li><strong>Fees & payment</strong> — total or rate, currency, schedule (e.g. deposit + balance), payment method.</li>' +
    '<li><strong>Revisions</strong> — how many rounds included; cost of extras.</li>' +
    '<li><strong>Ownership / IP</strong> — who owns the work after full payment; portfolio-use rights for the freelancer.</li>' +
    '<li><strong>Confidentiality</strong> — duty not to share client information.</li>' +
    '<li><strong>Termination</strong> — how either party can end the agreement; pay for work done.</li>' +
    '<li><strong>Liability</strong> — reasonable limits; originality of work.</li>' +
    '<li><strong>Signatures</strong> — dated signatures or clear e-agreement.</li></ol>';

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
    'Creating a Professional Profile': '<p>A strong profile has a professional photo, a specific headline, a benefit-focused overview, skills, and portfolio samples. Platforms rank and filter by completeness and relevance—fill every required field carefully.</p>',

    'Closing Deals':
      '<p>Closing is the step from “we are talking” to “we have agreed.” A deal is closed when scope, price, timeline, and payment terms are confirmed in writing and both parties accept them. Verbal agreement alone is weak protection if a dispute arises.</p>' +
      '<p><strong>Closing checklist:</strong> (1) Summarise the agreed scope and out-of-scope items. (2) Confirm fee, currency, and payment schedule (deposit recommended for new clients). (3) Confirm deadlines and revision policy. (4) Send a short contract or platform terms for signature or written “I agree.” (5) Do not start substantial work until deposit or written go-ahead is received, unless you consciously accept that risk.</p>' +
      CONTRACT_SECTIONS +
      '<p>Platform contracts (Upwork, Fiverr, etc.) cover many points automatically. For direct clients, use your own simple agreement. Adapt jurisdiction and tax language to local rules; seek advice for high-value projects.</p>',

    'Client Expectations':
      '<p>Most freelance conflicts come from unspoken assumptions: the client expected more revisions, a faster delivery, or a different style; the freelancer expected feedback within days, not weeks. Managing expectations means making those assumptions explicit and written.</p>' +
      '<p><strong>Agree in writing before work starts:</strong> deliverables (format and quantity), timeline, price and payment triggers, number of revision rounds, how change requests are priced, and how you will communicate progress. A one-page summary or full contract both work if they are clear.</p>' +
      CONTRACT_SECTIONS +
      '<p>When the client later asks for something outside the agreed scope, treat it as a change request: describe the extra work, quote a fee or time impact, and get written approval before doing it. That protects the relationship and your income.</p>',

    'Handling Revisions':
      '<p>Revisions are normal. Unlimited free revisions are not sustainable. A clear revisions policy—stated in the proposal and contract—sets a fair boundary: e.g. two rounds of reasonable changes included; further changes billed at an hourly or fixed rate.</p>' +
      '<p><strong>Professional process:</strong> (1) Thank the client and confirm you received the feedback. (2) Separate “within scope” tweaks from “new scope” requests. (3) Deliver included revisions promptly. (4) For extra work, send a short change note with cost and time before starting. (5) Keep a calm, solution-focused tone even if feedback is blunt.</p>' +
      '<p>Put the revisions policy in the same written agreement used when closing the deal. Essential contract sections (parties, scope, timeline, fees, revisions, IP, confidentiality, termination, signatures) keep both sides aligned when feedback arrives.</p>' +
      '<p>Good revision handling turns one project into repeat work. Poor handling—silence, arguments, or endless unpaid changes—ends relationships and hurts reviews.</p>'
  };

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[ch];
    });
  }

  function formalNote(moduleTitle, name) {
    var def = TOPIC_DEF[name] || (name + ' is an essential concept within remote work and freelancing that every professional should understand thoroughly.');
    var deep = DEEP_BODY[name] || ('<p>In professional remote and freelance practice, <strong>' + esc(name) + '</strong> supports reliable delivery, client trust, and sustainable income when applied with clear processes and ethics.</p>');
    var isContractTopic = (name === 'Closing Deals' || name === 'Client Expectations' || name === 'Handling Revisions');
    return '<div class="study-note">' +
      '<div class="revision-banner"><strong>Remote Work & Freelancing · ' + esc(moduleTitle) + '</strong><span>Formal Study Note</span></div>' +
      '<h3>' + esc(name) + '</h3>' +
      '<h4>1. Definition</h4><p>' + esc(def) + '</p>' +
      '<h4>2. Detailed Explanation</h4>' + deep +
      '<h4>3. Why This Topic Matters</h4><ul>' +
      '<li>Written agreements prevent most payment and scope disputes.</li>' +
      '<li>Clear expectations protect both client satisfaction and freelancer time.</li>' +
      '<li>Professional closing and revision handling build repeat business and referrals.</li>' +
      '<li>Skills transfer across platforms, direct clients, and global markets.</li></ul>' +
      '<h4>4. Key Concepts</h4><ul>' +
      '<li>Definition and scope of <em>' + esc(name) + '</em>.</li>' +
      (isContractTopic
        ? '<li>Contract sections: parties, scope, timeline, fees, revisions, IP, confidentiality, termination, signatures.</li><li>Deposit and written go-ahead before substantial work.</li><li>Change requests for out-of-scope work.</li>'
        : '<li>How it supports finding work, delivering projects, or managing a freelance business.</li><li>Practical tools, templates, and standards used in the field.</li>') +
      '<li>Steps you can apply to your own profile, client, or workflow.</li>' +
      '<li>Common mistakes that cost clients, time, or reputation.</li></ul>' +
      '<h4>5. Practical Application</h4>' +
      '<p>After the video, apply <strong>' + esc(name) + '</strong> to a real or sample freelance situation.</p>' +
      '<div class="study-callout"><strong>TIH practice task:</strong> ' +
      (name === 'Closing Deals'
        ? 'Draft a one-page sample freelance contract for a Liberian freelancer hired by an overseas client (e.g. logo design or website copy). Fill parties, scope, timeline, fee, deposit, revisions, IP, and signature lines. Use fictional names only.'
        : name === 'Client Expectations'
        ? 'Write a half-page “expectations summary” for a sample project: deliverables, deadline, price, two revision rounds, and how extra changes will be quoted. Share it as if sending to a new client.'
        : name === 'Handling Revisions'
        ? 'Write a short reply to a client who asks for a third major change after two free rounds were used. Acknowledge the request, state the extra fee and time, and ask for written approval before starting.'
        : 'Apply <em>' + esc(name) + '</em> to your profile, a sample client project, or your weekly remote routine and note the expected benefit.') +
      '</div>' +
      '<h4>6. Common Mistakes</h4><ul>' +
      '<li>Starting major work on a handshake only—no written scope or deposit.</li>' +
      '<li>Vague deliverables that invite unlimited reinterpretation.</li>' +
      '<li>Unlimited free revisions with no policy stated up front.</li>' +
      '<li>Arguing with clients instead of offering a clear paid change path.</li>' +
      '<li>Ignoring platform terms or local legal/tax requirements on real contracts.</li></ul>' +
      '<h4>7. Summary</h4>' +
      '<p><strong>' + esc(name) + '</strong> is foundational for a sustainable remote and freelance career. Clear written agreements and professional follow-through support the Complete Remote Work & Freelancing Professional Certificate.</p>' +
      '<h4>8. Study Actions</h4><ol>' +
      '<li>Watch the video and note closing steps, contract sections, or revision process.</li>' +
      '<li>Write the definition in your own words.</li>' +
      '<li>Complete the TIH practice task with sample (fictional) client details.</li>' +
      '<li>Take the practice quiz that follows this lesson.</li></ol>' +
      '<p><strong>Module context:</strong> This lesson belongs to <em>' + esc(moduleTitle) + '</em>. Educational template only—adapt to your jurisdiction and seek advice for high-value work.</p></div>';
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
    course._rwContractDeep = true;
    console.log('[REMOTEWORK] Deep contract notes applied: Closing Deals, Client Expectations, Handling Revisions');
  }

  function loadAndEnhance() {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/tolbertinnovation-debug/Tolbertinnovationhubliberia1@10b1439d3c094556b67750ecfccee8f3b1d91e29/remotework-curriculum.js';
    s.onload = function () {
      try { applyEnhancements(); } catch (e) { console.warn('[REMOTEWORK] enhance', e); }
      console.log('[REMOTEWORK] Full curriculum + contract deep notes ready');
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
