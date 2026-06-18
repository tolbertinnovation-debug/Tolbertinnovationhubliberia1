// Tolbert Innovation Hub — Chat Assistant
(function () {
  'use strict';

  // ── CSS ──────────────────────────────────────────────────────────────────
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    #tih-chat-btn {
      position: fixed; bottom: 1.5rem; left: 1.5rem; z-index: 950;
      width: 60px; height: 60px; border-radius: 50%;
      background: #002868; color: #fff; border: none; cursor: pointer;
      font-size: 1.5rem; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 18px rgba(0,40,104,0.35);
      transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    }
    #tih-chat-btn:hover { background: #BF0A30; transform: scale(1.08); box-shadow: 0 6px 24px rgba(191,10,48,0.4); }
    #tih-chat-badge {
      position: absolute; top: -3px; right: -3px;
      width: 18px; height: 18px; background: #BF0A30;
      border-radius: 50%; border: 2px solid #fff;
      font-size: 0.62rem; font-weight: 800;
      display: flex; align-items: center; justify-content: center;
      animation: tih-pulse 2s infinite;
    }
    @keyframes tih-pulse {
      0%,100% { transform: scale(1); } 50% { transform: scale(1.2); }
    }
    #tih-chat-win {
      position: fixed; bottom: 5.5rem; left: 1.5rem; z-index: 950;
      width: 360px; max-width: calc(100vw - 2rem);
      height: 530px; max-height: calc(100vh - 7rem);
      background: #fff; border-radius: 18px;
      box-shadow: 0 12px 48px rgba(0,0,0,0.22);
      display: flex; flex-direction: column; overflow: hidden;
      transform: scale(0.9) translateY(24px); opacity: 0; pointer-events: none;
      transition: opacity 0.22s cubic-bezier(.4,0,.2,1), transform 0.22s cubic-bezier(.4,0,.2,1);
      font-family: 'Inter', 'Segoe UI', sans-serif; font-size: 14px;
    }
    #tih-chat-win.open { opacity: 1; pointer-events: all; transform: scale(1) translateY(0); }
    .tih-hdr {
      background: linear-gradient(135deg, #002868 0%, #1a3d8a 100%);
      color: #fff; padding: 14px 16px;
      display: flex; align-items: center; gap: 10px; flex-shrink: 0;
    }
    .tih-hdr-av {
      width: 38px; height: 38px; border-radius: 50%;
      background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; flex-shrink: 0;
    }
    .tih-hdr-info { flex: 1; }
    .tih-hdr-name { font-weight: 700; font-size: 0.92rem; }
    .tih-hdr-status { font-size: 0.74rem; opacity: 0.82; display: flex; align-items: center; gap: 4px; }
    .tih-hdr-status::before { content:''; width:7px; height:7px; background:#4ade80; border-radius:50%; display:inline-block; }
    .tih-hdr-close {
      background: none; border: none; color: #fff; font-size: 1.1rem;
      cursor: pointer; padding: 4px 7px; border-radius: 7px;
      opacity: 0.75; transition: opacity 0.15s, background 0.15s; line-height: 1;
    }
    .tih-hdr-close:hover { opacity: 1; background: rgba(255,255,255,0.15); }
    .tih-msgs {
      flex: 1; overflow-y: auto; padding: 14px 12px;
      display: flex; flex-direction: column; gap: 8px;
      scroll-behavior: smooth;
    }
    .tih-msgs::-webkit-scrollbar { width: 4px; }
    .tih-msgs::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .tih-row { display: flex; align-items: flex-end; gap: 7px; max-width: 92%; }
    .tih-row.bot { align-self: flex-start; }
    .tih-row.user { align-self: flex-end; flex-direction: row-reverse; }
    .tih-av {
      width: 26px; height: 26px; border-radius: 50%;
      background: #002868; color: #fff; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.62rem; font-weight: 800; letter-spacing: 0;
    }
    .tih-bub {
      padding: 9px 13px; border-radius: 16px;
      line-height: 1.6; max-width: 100%;
    }
    .bot .tih-bub { background: #f1f5f9; color: #1e293b; border-bottom-left-radius: 4px; }
    .user .tih-bub { background: #002868; color: #fff; border-bottom-right-radius: 4px; }
    .tih-qrs {
      display: flex; flex-wrap: wrap; gap: 5px;
      padding: 2px 6px 6px 45px; align-self: flex-start;
    }
    .tih-qr {
      background: #fff; border: 1.5px solid #002868; color: #002868;
      font-size: 0.78rem; font-weight: 600; padding: 4px 11px;
      border-radius: 20px; cursor: pointer;
      transition: background 0.14s, color 0.14s;
      white-space: nowrap; font-family: inherit;
    }
    .tih-qr:hover { background: #002868; color: #fff; }
    .tih-typing { display: flex; align-items: center; gap: 7px; align-self: flex-start; }
    .tih-dots {
      background: #f1f5f9; border-radius: 16px; border-bottom-left-radius: 4px;
      padding: 10px 14px; display: flex; gap: 4px; align-items: center;
    }
    .tih-dot {
      width: 7px; height: 7px; border-radius: 50%; background: #94a3b8;
      animation: tih-boun 1.2s infinite;
    }
    .tih-dot:nth-child(2) { animation-delay:.2s; }
    .tih-dot:nth-child(3) { animation-delay:.4s; }
    @keyframes tih-boun { 0%,60%,100% { transform:translateY(0); } 30% { transform:translateY(-6px); } }
    .tih-foot {
      padding: 10px; border-top: 1px solid #e5e7eb;
      display: flex; gap: 7px; flex-shrink: 0; background: #fff;
    }
    .tih-inp {
      flex: 1; border: 1.5px solid #d1d5db; border-radius: 22px;
      padding: 9px 14px; font-size: 0.875rem; font-family: inherit;
      outline: none; background: #f9fafb; color: #1e293b;
      transition: border-color 0.15s, background 0.15s;
    }
    .tih-inp:focus { border-color: #002868; background: #fff; }
    .tih-inp::placeholder { color: #9ca3af; }
    .tih-send {
      width: 40px; height: 40px; border-radius: 50%; border: none;
      background: #002868; color: #fff; font-size: 0.95rem; cursor: pointer;
      flex-shrink: 0; display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, transform 0.15s;
    }
    .tih-send:hover { background: #BF0A30; transform: scale(1.07); }
    .tih-field {
      align-self: flex-start; width: 96%; background: #f8fafc;
      border: 1px solid #e2e8f0; border-radius: 10px;
      padding: 10px 12px; display: flex; flex-direction: column; gap: 6px;
    }
    .tih-field label { font-size: 0.78rem; font-weight: 700; color: #64748b; }
    .tih-field input, .tih-field select {
      border: 1.5px solid #d1d5db; border-radius: 7px;
      padding: 7px 10px; font-size: 0.875rem; font-family: inherit;
      background: #fff; outline: none; width: 100%; box-sizing: border-box;
      transition: border-color 0.15s;
    }
    .tih-field input:focus, .tih-field select:focus { border-color: #002868; }
    .tih-field-btn {
      background: #002868; color: #fff; border: none; border-radius: 7px;
      padding: 7px 14px; font-size: 0.84rem; font-weight: 700;
      cursor: pointer; align-self: flex-start; font-family: inherit;
      transition: background 0.15s;
    }
    .tih-field-btn:hover { background: #BF0A30; }
    .tih-prog {
      align-self: flex-start; font-size: 0.74rem; color: #64748b;
      padding: 0 0 2px 45px;
    }
    @media (max-width: 420px) {
      #tih-chat-win { left: 0.5rem; right: 0.5rem; width: auto; }
    }
  `;
  document.head.appendChild(styleEl);

  // ── Knowledge Base ────────────────────────────────────────────────────────
  const KB = [
    {
      id: 'greet',
      pat: ['hello','hi ','hey ','good morning','good evening','good afternoon','howdy','greet','start'],
      reply: `Hello! 👋 Welcome to <strong>Tolbert Innovation Hub</strong>.<br>I'm TIH Assistant — here to help with scholarships, IELTS/TOEFL prep, healthcare, software services, and applications.<br><br>What can I help you with today?`,
      qr: ['🎓 Scholarships','📚 IELTS / TOEFL','🏥 Healthcare','💻 Software','📝 Apply Now','📞 Contact Info']
    },
    {
      id: 'scholarship',
      pat: ['scholarship','study abroad','study in india','iccr','fully funded','admission letter','international education','apply for school','university'],
      reply: `🎓 <strong>Scholarship & Study Abroad Program</strong><br><br>
TIH helps Liberian students access international education through:<br>
• <strong>Study Abroad Portal</strong> — eligibility guidance, document prep, admission letters<br>
• <strong>ICCR Fully Funded Scholarship</strong> — India-Africa Maitri: covers tuition, housing & stipend<br><br>
📅 <strong>2026 intake is open — deadline July 15, 2026.</strong><br><br>Ready to apply or need more info?`,
      qr: ['📝 Apply for Scholarship','✅ Check Requirements','📋 Required Documents','🔙 Main Menu']
    },
    {
      id: 'ielts',
      pat: ['ielts','toefl','classroom','exam prep','english test','band score','mock exam','certificate','reading','writing','listening','speaking','module'],
      reply: `📚 <strong>Free IELTS & TOEFL Classroom</strong><br><br>
Our free online classroom includes:<br>
• 6 structured modules per exam track (IELTS & TOEFL)<br>
• Reading, Writing, Listening & Speaking lessons<br>
• Practice tests & full mock exams<br>
• Certificate of Completion ($5 fee after mock exam)<br><br>
<strong>100% free</strong> for all students in Liberia!`,
      qr: ['📖 Start IELTS Prep','📖 Start TOEFL Prep','🏅 Request Certificate','🔙 Main Menu']
    },
    {
      id: 'healthcare',
      pat: ['healthcare','medical','hospital','treatment','doctor','patient','health','specialist','india treatment','referral','surgery'],
      reply: `🏥 <strong>International Healthcare Exposure Program</strong><br><br>
TIH connects patients & families to quality medical care abroad:<br>
• Medical case intake & specialist referrals<br>
• Partner hospital network in India<br>
• Hospital coordination & travel guidance<br>
• Ongoing patient support services<br><br>
Need to submit a healthcare inquiry?`,
      qr: ['📝 Submit Healthcare Request','🏨 View Partner Hospitals','📞 Contact Us','🔙 Main Menu']
    },
    {
      id: 'software',
      pat: ['software','website','web app','digital','technology','business','platform','consultation','proposal','it service','development'],
      reply: `💻 <strong>Software & Digital Innovation</strong><br><br>
We help Liberian businesses modernize operations with:<br>
• Custom websites & web applications<br>
• Business management systems & platforms<br>
• Digital strategy & consultation<br>
• Process automation & optimization<br><br>
📦 Packages from <strong>$150 (Starter)</strong> — <strong>$400 (Professional)</strong> — <strong>Custom (Enterprise)</strong>`,
      qr: ['📝 Request Consultation','💰 View Pricing','🗂️ View Portfolio','🔙 Main Menu']
    },
    {
      id: 'pricing',
      pat: ['price','pricing','cost','fee','how much','payment','pay','charge','rate','package'],
      reply: `💰 <strong>Fees & Pricing</strong><br><br>
• <strong>Scholarship guidance</strong> — Free<br>
• <strong>IELTS/TOEFL classroom</strong> — 100% Free<br>
• <strong>Completion certificate</strong> — $5 USD<br>
• <strong>Donation to TIH</strong> — From $5 (any amount welcome)<br>
• <strong>Software Starter</strong> — $150<br>
• <strong>Software Professional</strong> — $400<br>
• <strong>Software Enterprise</strong> — Custom quote<br>
• <strong>Healthcare coordination</strong> — Contact us`,
      qr: ['📝 Apply Now','💻 Software Details','📞 Contact','🔙 Main Menu']
    },
    {
      id: 'contact',
      pat: ['contact','phone','email','whatsapp','reach','office','location','address','hours','call us'],
      reply: `📞 <strong>Contact Tolbert Innovation Hub</strong><br><br>
📱 <strong>WhatsApp / Phone:</strong> +231 880 559 227<br>
📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com<br>
📍 <strong>Location:</strong> Liberia, West Africa<br>
🕐 <strong>Hours:</strong> Mon–Fri 8am–6pm · Sat 9am–3pm (GMT)<br><br>
💬 WhatsApp is the fastest way to reach us!`,
      qr: ['💬 Open WhatsApp','📝 Send a Message','🔙 Main Menu']
    },
    {
      id: 'requirements',
      pat: ['eligible','eligibility','qualify','requirement','who can apply','criteria','document','passport','transcript'],
      reply: `✅ <strong>Scholarship Requirements</strong><br><br>
General documents needed:<br>
• National ID or valid Passport<br>
• Academic transcripts / certificates<br>
• Personal statement (500–800 words)<br>
• 2 recommendation letters<br>
• Passport-size photo<br>
• IELTS / TOEFL score (recommended)<br><br>
Each scholarship has specific criteria — contact us for your program.`,
      qr: ['📝 Apply Now','📚 IELTS / TOEFL','📞 Contact','🔙 Main Menu']
    },
    {
      id: 'donate',
      pat: ['donat','support us','contribute','fund','give','help tih'],
      reply: `❤️ <strong>Support TIH</strong><br><br>
Your donation helps us provide free education, healthcare referrals, and scholarship guidance to Liberian youth.<br><br>
Donation options: <strong>$5 / $10 / $25 / $50 / $100+</strong><br>
Payment via: Mobile Money, Bank Transfer, WhatsApp coordination, or Western Union.`,
      qr: ['💳 Donate Now','📞 Contact','🔙 Main Menu']
    },
    {
      id: 'apply_menu',
      pat: ['apply','application','register','sign up','submit','enroll','start application','how do i apply','i want to apply'],
      reply: `📝 <strong>Apply with TIH</strong><br><br>
I can process your application right here in this chat! Which program are you applying for?`,
      qr: ['🎓 Scholarship / Study Abroad','🏥 Healthcare Request','💻 Software Consultation','📚 Join IELTS/TOEFL Classroom']
    },
    {
      id: 'fallback',
      pat: [],
      reply: `I didn't quite catch that. Here's what I can help with — please choose a topic:`,
      qr: ['🎓 Scholarships','📚 IELTS / TOEFL','🏥 Healthcare','💻 Software','📝 Apply Now','📞 Contact Info']
    }
  ];

  // ── Apply-flow steps ──────────────────────────────────────────────────────
  const FLOWS = {
    scholarship: {
      title: '🎓 Scholarship / Study Abroad',
      subject: 'Chat Application — Scholarship / Study Abroad',
      steps: [
        { key:'name',  label:'Full Name',           type:'text',   ph:'As it should appear on documents' },
        { key:'email', label:'Email Address',        type:'email',  ph:'you@example.com' },
        { key:'phone', label:'Phone / WhatsApp',     type:'tel',    ph:'+231 880 ...' },
        { key:'level', label:'Target Study Level',   type:'select', opts:['Undergraduate (Bachelor\'s)','Postgraduate (Master\'s)','Doctoral (PhD)','Diploma / Certificate'] },
        { key:'field', label:'Field of Study',       type:'text',   ph:'e.g. Medicine, Engineering, Business' }
      ]
    },
    healthcare: {
      title: '🏥 Healthcare Program',
      subject: 'Chat Application — Healthcare Request',
      steps: [
        { key:'name',      label:'Patient / Contact Name', type:'text',  ph:'Full name' },
        { key:'email',     label:'Email Address',           type:'email', ph:'you@example.com' },
        { key:'phone',     label:'Phone / WhatsApp',        type:'tel',   ph:'+231 880 ...' },
        { key:'condition', label:'Medical Need / Condition',type:'text',  ph:'Brief description of the condition or treatment needed' }
      ]
    },
    software: {
      title: '💻 Software Consultation',
      subject: 'Chat Application — Software Consultation',
      steps: [
        { key:'name',     label:'Your Name',          type:'text',   ph:'Full name' },
        { key:'email',    label:'Email Address',       type:'email',  ph:'you@example.com' },
        { key:'phone',    label:'Phone / WhatsApp',    type:'tel',    ph:'+231 880 ...' },
        { key:'business', label:'Business / Project',  type:'text',   ph:'Your business or project name' },
        { key:'service',  label:'Service Needed',      type:'select', opts:['Website Development','Business Management System','Mobile App','Digital Strategy / Consulting','Other'] }
      ]
    },
    classroom: {
      title: '📚 IELTS / TOEFL Classroom',
      subject: 'Chat Registration — IELTS/TOEFL Classroom',
      steps: [
        { key:'name',  label:'Full Name',     type:'text',   ph:'Your full name' },
        { key:'email', label:'Email Address',  type:'email',  ph:'you@example.com' },
        { key:'phone', label:'Phone',          type:'tel',    ph:'+231 880 ...' },
        { key:'exam',  label:'Exam Track',     type:'select', opts:['IELTS','TOEFL','Both IELTS & TOEFL'] }
      ]
    }
  };

  // ── DOM ───────────────────────────────────────────────────────────────────
  const chatBtn = document.createElement('button');
  chatBtn.id = 'tih-chat-btn';
  chatBtn.setAttribute('aria-label', 'Open TIH chat assistant');
  chatBtn.innerHTML = '💬<span id="tih-chat-badge">1</span>';

  const chatWin = document.createElement('div');
  chatWin.id = 'tih-chat-win';
  chatWin.setAttribute('role', 'dialog');
  chatWin.setAttribute('aria-modal', 'true');
  chatWin.setAttribute('aria-label', 'TIH Chat Assistant');
  chatWin.innerHTML = `
    <div class="tih-hdr">
      <div class="tih-hdr-av">🤖</div>
      <div class="tih-hdr-info">
        <div class="tih-hdr-name">TIH Assistant</div>
        <div class="tih-hdr-status">Online — Tolbert Innovation Hub</div>
      </div>
      <button class="tih-hdr-close" aria-label="Close chat">✕</button>
    </div>
    <div class="tih-msgs" id="tih-msgs" aria-live="polite"></div>
    <div class="tih-foot">
      <input class="tih-inp" id="tih-inp" type="text" placeholder="Type a message or question…" autocomplete="off" maxlength="300" />
      <button class="tih-send" id="tih-send" aria-label="Send message">➤</button>
    </div>
  `;

  document.body.appendChild(chatBtn);
  document.body.appendChild(chatWin);

  const msgsEl = document.getElementById('tih-msgs');
  const inpEl  = document.getElementById('tih-inp');
  const sendEl = document.getElementById('tih-send');

  let busy = false;
  let flow = null; // { key, step, data }

  // ── Helpers ───────────────────────────────────────────────────────────────
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const scroll = () => msgsEl.scrollTop = msgsEl.scrollHeight;

  function addBotBubble(html, qrs) {
    const wrap = document.createElement('div');
    wrap.style.display = 'contents';

    const row = document.createElement('div');
    row.className = 'tih-row bot';
    row.innerHTML = `<div class="tih-av">TI</div><div class="tih-bub">${html}</div>`;
    wrap.appendChild(row);

    if (qrs && qrs.length) {
      const bar = document.createElement('div');
      bar.className = 'tih-qrs';
      qrs.forEach(label => {
        const b = document.createElement('button');
        b.className = 'tih-qr';
        b.textContent = label;
        b.addEventListener('click', () => { bar.remove(); onQR(label); });
        bar.appendChild(b);
      });
      wrap.appendChild(bar);
    }
    msgsEl.appendChild(wrap);
    scroll();
  }

  function addUserBubble(text) {
    const row = document.createElement('div');
    row.className = 'tih-row user';
    row.innerHTML = `<div class="tih-bub">${esc(text)}</div>`;
    msgsEl.appendChild(row);
    scroll();
  }

  function type(delay, cb) {
    if (busy) return;
    busy = true;
    const t = document.createElement('div');
    t.className = 'tih-typing';
    t.innerHTML = `<div class="tih-av">TI</div><div class="tih-dots"><div class="tih-dot"></div><div class="tih-dot"></div><div class="tih-dot"></div></div>`;
    msgsEl.appendChild(t);
    scroll();
    setTimeout(() => { t.remove(); busy = false; cb(); scroll(); }, delay);
  }

  // ── Toggle ────────────────────────────────────────────────────────────────
  function openChat() {
    chatWin.classList.add('open');
    document.getElementById('tih-chat-badge').style.display = 'none';
    if (!msgsEl.children.length) {
      type(700, () => {
        const g = KB[0];
        addBotBubble(g.reply, g.qr);
      });
    }
    setTimeout(() => inpEl.focus(), 250);
  }

  chatBtn.addEventListener('click', () => chatWin.classList.contains('open') ? chatWin.classList.remove('open') : openChat());
  chatWin.querySelector('.tih-hdr-close').addEventListener('click', () => chatWin.classList.remove('open'));

  // ── Response lookup ────────────────────────────────────────────────────────
  function findEntry(text) {
    const t = text.toLowerCase();
    for (const e of KB) {
      if (e.pat.length && e.pat.some(p => t.includes(p))) return e;
    }
    return KB[KB.length - 1];
  }

  // ── Quick-reply actions ───────────────────────────────────────────────────
  function onQR(label) {
    const l = label.toLowerCase();

    if (l.includes('main menu') || l.includes('back')) {
      type(500, () => { const g = KB[0]; addBotBubble(g.reply, g.qr); }); return;
    }
    if (l.includes('open whatsapp')) {
      window.open('https://wa.me/231880559227', '_blank');
      type(600, () => addBotBubble('Opening WhatsApp — <strong>+231 880 559 227</strong>. Our team will respond promptly. 💬', ['🔙 Main Menu'])); return;
    }
    if (l.includes('start ielts prep') || l === '📖 start ielts prep') {
      window.location.href = 'classroom-ielts.html'; return;
    }
    if (l.includes('start toefl prep') || l === '📖 start toefl prep') {
      window.location.href = 'classroom-toefl.html'; return;
    }
    if (l.includes('request certificate') || l.includes('get certificate')) {
      type(700, () => addBotBubble(`To request a certificate, complete the mock exam, pay the $5 processing fee, then submit the request form:<br><br>
<a href="classroom-ielts-certificate-request.html" style="color:#002868;font-weight:700;">→ IELTS Certificate Request</a><br>
<a href="classroom-toefl-certificate-request.html" style="color:#002868;font-weight:700;">→ TOEFL Certificate Request</a>`, ['🔙 Main Menu'])); return;
    }
    if (l.includes('view partner hospital')) {
      window.location.href = 'healthcare.html'; return;
    }
    if (l.includes('view pricing')) {
      window.location.href = 'software.html#pricing'; return;
    }
    if (l.includes('view portfolio')) {
      window.location.href = 'software.html#portfolio'; return;
    }
    if (l.includes('check requirement') || l.includes('check eligibility')) {
      const e = findEntry('requirements'); type(750, () => addBotBubble(e.reply, e.qr)); return;
    }
    if (l.includes('required documents')) {
      const e = findEntry('document'); type(750, () => addBotBubble(e.reply, e.qr)); return;
    }
    if (l.includes('donate now')) {
      window.location.href = 'donate.html#donate-now'; return;
    }
    if (l.includes('send a message')) {
      window.location.href = 'contact.html#contact-form'; return;
    }

    // Apply-flow starters
    if (l.includes('scholarship') || l.includes('study abroad')) {
      if (l.includes('apply') || l.includes('scholarship / study abroad')) { startFlow('scholarship'); return; }
    }
    if (l.includes('healthcare request') || l.includes('healthcare program')) { startFlow('healthcare'); return; }
    if (l.includes('software consultation') || l.includes('request consultation')) { startFlow('software'); return; }
    if (l.includes('ielts/toefl classroom') || l.includes('join ielts')) { startFlow('classroom'); return; }
    if (l.includes('apply now') || l.includes('apply for scholarship')) {
      type(600, () => addBotBubble('Which program are you applying for?', ['🎓 Scholarship / Study Abroad','🏥 Healthcare Request','💻 Software Consultation','📚 Join IELTS/TOEFL Classroom'])); return;
    }

    // Fall through to keyword matching
    const entry = findEntry(label);
    type(800, () => addBotBubble(entry.reply, entry.qr));
  }

  // ── Apply flow ─────────────────────────────────────────────────────────────
  function startFlow(key) {
    const f = FLOWS[key];
    flow = { key, step: 0, data: { Program: f.title } };
    type(600, () => {
      addBotBubble(`Let's get your <strong>${f.title}</strong> application started. I'll collect your details one step at a time. 📋`);
      setTimeout(renderStep, 500);
    });
  }

  function renderStep() {
    if (!flow) return;
    const steps = FLOWS[flow.key].steps;
    if (flow.step >= steps.length) { submitFlow(); return; }

    const s = steps[flow.step];
    const prog = document.createElement('div');
    prog.className = 'tih-prog';
    prog.textContent = `Step ${flow.step + 1} of ${steps.length}`;

    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'tih-field';

    const lbl = document.createElement('label');
    lbl.textContent = s.label;
    fieldDiv.appendChild(lbl);

    let ctrl;
    if (s.type === 'select') {
      ctrl = document.createElement('select');
      const blank = new Option('Select…', ''); blank.disabled = true; blank.selected = true;
      ctrl.appendChild(blank);
      s.opts.forEach(o => ctrl.appendChild(new Option(o, o)));
    } else {
      ctrl = document.createElement('input');
      ctrl.type = s.type;
      ctrl.placeholder = s.ph || '';
    }
    fieldDiv.appendChild(ctrl);

    const isLast = flow.step === steps.length - 1;
    const btn2 = document.createElement('button');
    btn2.className = 'tih-field-btn';
    btn2.textContent = isLast ? '✓ Submit Application' : 'Next →';
    btn2.addEventListener('click', () => {
      const val = ctrl.value.trim();
      if (!val) { ctrl.style.borderColor = '#BF0A30'; ctrl.focus(); return; }
      ctrl.style.borderColor = '';
      flow.data[s.label] = val;
      prog.remove(); fieldDiv.remove();
      addUserBubble(val);
      flow.step++;
      setTimeout(renderStep, 350);
    });
    fieldDiv.appendChild(btn2);

    msgsEl.appendChild(prog);
    msgsEl.appendChild(fieldDiv);
    scroll();
    if (s.type !== 'select') setTimeout(() => ctrl.focus(), 100);
  }

  async function submitFlow() {
    const f = FLOWS[flow.key];
    const payload = {
      ...flow.data,
      _subject: f.subject + ' — Tolbert Innovation Hub',
      _template: 'table',
      _captcha: 'false',
      Source: 'TIH Chatbot'
    };
    flow = null;

    type(900, async () => {
      addBotBubble('Submitting your application… ⏳');
      try {
        const res  = await fetch('https://formsubmit.co/ajax/tolbertinnovationhub@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        const json = await res.json();
        if (json.success === true || json.success === 'true') {
          type(600, () => addBotBubble(`✅ <strong>Application Submitted!</strong><br><br>
Thank you! The TIH team will review your application and contact you within <strong>24–48 hours</strong> by email or WhatsApp.<br><br>
Is there anything else I can help you with?`, ['🎓 Scholarships','📚 IELTS / TOEFL','📞 Contact Info','🔙 Main Menu']));
        } else throw new Error();
      } catch (_) {
        type(400, () => addBotBubble(`Your details have been noted. To confirm delivery, also reach us on WhatsApp at <strong>+231 880 559 227</strong> or email <strong>tolbertinnovationhub@gmail.com</strong>.`, ['💬 Open WhatsApp','🔙 Main Menu']));
      }
    });
  }

  // ── Text input handler ────────────────────────────────────────────────────
  function send() {
    const text = inpEl.value.trim();
    if (!text || busy) return;
    inpEl.value = '';
    if (flow) { addUserBubble(text); return; } // ignore free text during form steps
    addUserBubble(text);
    const entry = findEntry(text);
    type(Math.min(600 + text.length * 8, 1200), () => addBotBubble(entry.reply, entry.qr));
  }

  sendEl.addEventListener('click', send);
  inpEl.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

})();
