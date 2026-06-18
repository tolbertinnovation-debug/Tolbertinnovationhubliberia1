// Tolbert Innovation Hub — TIH Assistant v3.0
// Professional chatbot with page-context awareness & dynamic page learning
(function () {
  'use strict';

  // ── CSS ──────────────────────────────────────────────────────────────────────
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    #tih-chat-btn {
      position:fixed;bottom:1.5rem;left:1.5rem;z-index:950;
      width:58px;height:58px;border-radius:50%;
      background:linear-gradient(135deg,#002868 0%,#1a3d8a 100%);
      color:#fff;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 4px 20px rgba(0,40,104,0.4);
      transition:transform .2s,box-shadow .2s;padding:0;
    }
    #tih-chat-btn:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(0,40,104,0.55);}
    #tih-chat-btn svg{width:26px;height:26px;fill:#fff;}
    #tih-chat-badge{
      position:absolute;top:-2px;right:-2px;
      width:20px;height:20px;background:#BF0A30;
      border-radius:50%;border:2px solid #fff;
      font-size:.65rem;font-weight:800;color:#fff;
      display:flex;align-items:center;justify-content:center;
      animation:tih-pulse 2.4s infinite;
    }
    @keyframes tih-pulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(191,10,48,.5)}60%{transform:scale(1.12);box-shadow:0 0 0 6px rgba(191,10,48,0)}}
    #tih-chat-win{
      position:fixed;bottom:5.2rem;left:1.5rem;z-index:950;
      width:380px;max-width:calc(100vw - 2rem);
      height:580px;max-height:calc(100vh - 7rem);
      background:#f8fafc;border-radius:20px;
      box-shadow:0 16px 56px rgba(0,0,0,0.22),0 2px 8px rgba(0,0,0,.08);
      display:flex;flex-direction:column;overflow:hidden;
      transform:scale(0.92) translateY(20px);opacity:0;pointer-events:none;
      transition:opacity .22s cubic-bezier(.4,0,.2,1),transform .22s cubic-bezier(.4,0,.2,1);
      font-family:'Inter','Segoe UI',sans-serif;font-size:14px;
    }
    #tih-chat-win.open{opacity:1;pointer-events:all;transform:scale(1) translateY(0);}
    .tih-hdr{
      background:linear-gradient(135deg,#001440 0%,#002868 60%,#1a3d8a 100%);
      color:#fff;padding:13px 14px 12px;
      display:flex;align-items:center;gap:10px;flex-shrink:0;
    }
    .tih-hdr-av{
      width:40px;height:40px;border-radius:50%;flex-shrink:0;
      background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.3);
      display:flex;align-items:center;justify-content:center;overflow:hidden;
    }
    .tih-hdr-av img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
    .tih-hdr-av span{font-size:.7rem;font-weight:800;color:#fff;letter-spacing:.03em;}
    .tih-hdr-info{flex:1;min-width:0;}
    .tih-hdr-name{font-weight:700;font-size:.93rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .tih-hdr-sub{font-size:.72rem;opacity:.78;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .tih-hdr-status{display:inline-flex;align-items:center;gap:4px;font-size:.72rem;opacity:.85;}
    .tih-hdr-status::before{content:'';width:7px;height:7px;background:#4ade80;border-radius:50%;display:inline-block;flex-shrink:0;}
    .tih-hdr-btns{display:flex;gap:2px;flex-shrink:0;}
    .tih-hdr-btn{
      background:none;border:none;color:rgba(255,255,255,.75);font-size:1rem;
      cursor:pointer;padding:5px 8px;border-radius:8px;line-height:1;
      transition:background .15s,color .15s;
    }
    .tih-hdr-btn:hover{background:rgba(255,255,255,.15);color:#fff;}
    .tih-page-ctx{
      background:rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.08);
      padding:5px 14px;font-size:.71rem;color:rgba(255,255,255,.8);
      display:flex;align-items:center;gap:5px;flex-shrink:0;
    }
    .tih-page-ctx::before{content:'📍';font-size:.72rem;}
    .tih-msgs{
      flex:1;overflow-y:auto;padding:14px 12px 8px;
      display:flex;flex-direction:column;gap:9px;
      scroll-behavior:smooth;background:#f8fafc;
    }
    .tih-msgs::-webkit-scrollbar{width:4px;}
    .tih-msgs::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px;}
    .tih-row{display:flex;align-items:flex-end;gap:7px;max-width:94%;}
    .tih-row.bot{align-self:flex-start;}
    .tih-row.user{align-self:flex-end;flex-direction:row-reverse;}
    .tih-av{
      width:28px;height:28px;border-radius:50%;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;overflow:hidden;
    }
    .bot .tih-av{background:linear-gradient(135deg,#001440,#002868);}
    .bot .tih-av img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
    .bot .tih-av span{font-size:.58rem;font-weight:800;color:#fff;}
    .tih-bub{padding:9px 13px;border-radius:16px;line-height:1.65;max-width:100%;word-wrap:break-word;}
    .bot .tih-bub{background:#fff;color:#1e293b;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.07);}
    .user .tih-bub{background:linear-gradient(135deg,#002868,#1a3d8a);color:#fff;border-bottom-right-radius:4px;}
    .tih-ts{font-size:.66rem;color:#94a3b8;margin-top:2px;padding:0 4px;align-self:flex-end;}
    .tih-qrs{
      display:flex;flex-wrap:wrap;gap:5px;
      padding:3px 6px 6px 47px;align-self:flex-start;max-width:100%;
    }
    .tih-qr{
      background:#fff;border:1.5px solid #002868;color:#002868;
      font-size:.76rem;font-weight:600;padding:5px 12px;
      border-radius:20px;cursor:pointer;white-space:nowrap;
      font-family:inherit;transition:all .14s;
      box-shadow:0 1px 3px rgba(0,40,104,.1);
    }
    .tih-qr:hover{background:#002868;color:#fff;transform:translateY(-1px);box-shadow:0 3px 8px rgba(0,40,104,.25);}
    .tih-typing{display:flex;align-items:center;gap:7px;align-self:flex-start;}
    .tih-dots{
      background:#fff;border-radius:16px;border-bottom-left-radius:4px;
      padding:10px 14px;display:flex;gap:4px;align-items:center;
      box-shadow:0 1px 3px rgba(0,0,0,.07);
    }
    .tih-dot{width:7px;height:7px;border-radius:50%;background:#94a3b8;animation:tih-boun 1.2s infinite;}
    .tih-dot:nth-child(2){animation-delay:.2s}.tih-dot:nth-child(3){animation-delay:.4s}
    @keyframes tih-boun{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
    .tih-divider{
      align-self:center;font-size:.69rem;color:#94a3b8;
      background:#f1f5f9;padding:3px 12px;border-radius:20px;
      margin:2px 0;letter-spacing:.03em;
    }
    .tih-foot{
      padding:10px;border-top:1px solid #e2e8f0;
      display:flex;gap:7px;flex-shrink:0;background:#fff;
    }
    .tih-inp{
      flex:1;border:1.5px solid #e2e8f0;border-radius:22px;
      padding:9px 14px;font-size:.875rem;font-family:inherit;
      outline:none;background:#f8fafc;color:#1e293b;
      transition:border-color .15s,background .15s,box-shadow .15s;
    }
    .tih-inp:focus{border-color:#002868;background:#fff;box-shadow:0 0 0 3px rgba(0,40,104,.09);}
    .tih-inp::placeholder{color:#a1a8b3;}
    .tih-send{
      width:40px;height:40px;border-radius:50%;border:none;flex-shrink:0;
      background:linear-gradient(135deg,#002868,#1a3d8a);color:#fff;
      font-size:.92rem;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      transition:transform .15s,box-shadow .15s;
      box-shadow:0 2px 8px rgba(0,40,104,.3);
    }
    .tih-send:hover{transform:scale(1.08);box-shadow:0 4px 14px rgba(0,40,104,.4);}
    .tih-field{
      align-self:flex-start;width:96%;background:#fff;
      border:1px solid #e2e8f0;border-radius:12px;
      padding:11px 13px;display:flex;flex-direction:column;gap:7px;
      box-shadow:0 1px 3px rgba(0,0,0,.06);
    }
    .tih-field label{font-size:.77rem;font-weight:700;color:#475569;}
    .tih-field input,.tih-field select{
      border:1.5px solid #e2e8f0;border-radius:8px;
      padding:8px 11px;font-size:.875rem;font-family:inherit;
      background:#f8fafc;outline:none;width:100%;box-sizing:border-box;
      transition:border-color .15s,box-shadow .15s;color:#1e293b;
    }
    .tih-field input:focus,.tih-field select:focus{border-color:#002868;background:#fff;box-shadow:0 0 0 3px rgba(0,40,104,.08);}
    .tih-field-btn{
      background:linear-gradient(135deg,#002868,#1a3d8a);color:#fff;border:none;
      border-radius:8px;padding:8px 16px;font-size:.84rem;font-weight:700;
      cursor:pointer;align-self:flex-start;font-family:inherit;
      transition:transform .15s,box-shadow .15s;box-shadow:0 2px 8px rgba(0,40,104,.25);
    }
    .tih-field-btn:hover{transform:translateY(-1px);box-shadow:0 4px 14px rgba(0,40,104,.35);}
    .tih-prog{align-self:flex-start;font-size:.72rem;color:#64748b;padding:0 0 2px 47px;}
    .tih-page-answer{
      align-self:flex-start;max-width:94%;background:#eff6ff;
      border:1px solid #bfdbfe;border-radius:10px;padding:9px 12px;
      font-size:.82rem;color:#1e3a5f;margin-top:-4px;
    }
    .tih-page-answer strong{color:#002868;}
    @media(max-width:420px){#tih-chat-win{left:.5rem;right:.5rem;width:auto;}}
  `;
  document.head.appendChild(styleEl);

  // ── PAGE CONTEXT ─────────────────────────────────────────────────────────────
  const PAGE_MAP = [
    { match:'classroom-ielts-module-1.html', label:'IELTS Module 1 — Orientation',
      qr:['📚 What\'s in Module 1','💡 IELTS Study Tips','🏅 Get Certificate','🎓 Scholarship Help','📞 Contact'] },
    { match:'classroom-ielts-module-2.html', label:'IELTS Module 2 — Reading',
      qr:['📖 Reading Strategies','💡 Skimming Tips','🏅 Get Certificate','🎓 Scholarship Help','📞 Contact'] },
    { match:'classroom-ielts-module-3.html', label:'IELTS Module 3 — Writing',
      qr:['✍️ Writing Task 1 vs 2','💡 Band 7+ Tips','🏅 Get Certificate','🎓 Scholarship','📞 Contact'] },
    { match:'classroom-ielts-module-4.html', label:'IELTS Module 4 — Listening',
      qr:['🎧 Listening Tips','💡 Note-Taking','🏅 Get Certificate','🎓 Scholarship','📞 Contact'] },
    { match:'classroom-ielts-module-5.html', label:'IELTS Module 5 — Speaking',
      qr:['🗣️ Speaking Tips','💡 Fluency Advice','🏅 Get Certificate','🎓 Scholarship','📞 Contact'] },
    { match:'classroom-ielts-module-6.html', label:'IELTS Module 6 — Mock Exam',
      qr:['📝 Mock Exam Tips','🏅 Request Certificate','🎓 Scholarship','📞 Contact'] },
    { match:'classroom-ielts-module-computer', label:'Computer vs Paper IELTS',
      qr:['💻 Computer-Based Tips','📄 Paper-Based Tips','🏅 Certificate','📞 Contact'] },
    { match:'classroom-ielts-module-academic', label:'Academic vs General Training',
      qr:['🎓 Academic Path','📋 General Training','🏅 Certificate','📞 Contact'] },
    { match:'classroom-ielts', label:'IELTS Classroom',
      qr:['📚 Module Overview','🏅 Get Certificate','💡 Study Plan','🎓 Scholarship Help','📞 Contact'] },
    { match:'classroom-toefl', label:'TOEFL Classroom',
      qr:['📚 TOEFL Modules','🏅 Get Certificate','💡 Study Tips','🎓 Scholarship','📞 Contact'] },
    { match:'classroom-resource', label:'Resource Center',
      qr:['📁 Study Materials','📖 IELTS Classroom','📖 TOEFL Classroom','📞 Contact'] },
    { match:'classroom', label:'Classroom Hub',
      qr:['📗 IELTS Prep','📘 TOEFL Prep','🏅 Certificate','📁 Resources','🎓 Scholarship'] },
    { match:'fully-funded-scholarship', label:'Fully Funded Scholarships',
      qr:['🏆 ICCR Details','🇬🇧 Chevening','🇺🇸 Fulbright','🇩🇪 DAAD','📝 Apply Now'] },
    { match:'study-abroad', label:'Study Abroad',
      qr:['🎓 How to Apply','📋 Requirements','🏆 ICCR Scholarship','📝 Apply Now','📞 Contact'] },
    { match:'university-', label:'University Details',
      qr:['📝 Apply to this University','🎓 Scholarship Options','📋 Requirements','📞 Contact TIH'] },
    { match:'healthcare', label:'Healthcare Program',
      qr:['🏥 How It Works','🏨 Partner Hospitals','📝 Submit Request','📞 Contact'] },
    { match:'software', label:'Software Services',
      qr:['💻 Services Overview','💰 Pricing','📝 Request Consultation','📞 Contact'] },
    { match:'donate', label:'Donate to TIH',
      qr:['❤️ How Donations Help','💳 Payment Methods','📊 Our Impact','📞 Contact'] },
    { match:'contact', label:'Contact Us',
      qr:['📞 Phone Numbers','📧 Email','📍 Location','💬 WhatsApp Now'] },
    { match:'about', label:'About TIH',
      qr:['🏛️ Our Mission','👤 Our Founder','👥 Meet the Team','📊 Impact','📞 Contact'] },
    { match:'news', label:'TIH News',
      qr:['📰 Latest News','🎓 Apply Now','📞 Contact','🔙 Main Menu'] },
    { match:'events', label:'Events',
      qr:['📅 Upcoming Events','⏰ Deadlines','📝 Apply Now','📞 Contact'] },
    { match:'impact', label:'Impact Report',
      qr:['📊 View Stats','⭐ Success Stories','🎓 Scholarship','📞 Contact'] },
    { match:'index', label:'TIH Home',
      qr:['🎓 Scholarships','📚 Free Classroom','🏥 Healthcare','💻 Software','📝 Apply Now'] },
  ];

  function getPageCtx() {
    const path = window.location.pathname.toLowerCase();
    const href = path.split('/').pop() || 'index.html';
    for (const p of PAGE_MAP) {
      if (href.includes(p.match)) return p;
    }
    return { label:'Tolbert Innovation Hub', qr:['🎓 Scholarships','📚 Free Classroom','🏥 Healthcare','💻 Software','📝 Apply Now','📞 Contact'] };
  }

  // ── PAGE LEARNING ─────────────────────────────────────────────────────────────
  let PAGE_INDEX = null;

  function buildPageIndex() {
    if (PAGE_INDEX) return PAGE_INDEX;
    const items = [];
    const seen = new Set();
    const skipSel = ['#tih-chat-win','#tih-chat-btn','.site-header','footer','script','style','nav'];

    function shouldSkip(el) {
      return skipSel.some(s => el.closest && el.closest(s));
    }

    let currentSection = '';

    // Walk all content nodes in DOM order to preserve section context
    document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,th,dt,dd,blockquote,figcaption,caption').forEach(el => {
      if (shouldSkip(el)) return;
      const tag = el.tagName.toLowerCase();
      const text = el.textContent.trim().replace(/\s+/g,' ');
      if (!text || seen.has(text)) return;

      if (['h1','h2','h3','h4','h5'].includes(tag)) {
        if (text.length > 2) {
          currentSection = text;
          seen.add(text);
          items.push({ type:'heading', text, section:text, weight:5 });
        }
      } else if (tag === 'th') {
        if (text.length > 2) {
          seen.add(text);
          items.push({ type:'heading', text, section:currentSection, weight:3 });
        }
      } else {
        if (text.length > 18 && text.length < 700) {
          seen.add(text);
          items.push({ type:'body', text, section:currentSection, weight:1 });
        }
      }
    });

    // Capture semantic card/module/feature titles not caught by heading selectors
    document.querySelectorAll('[class*="card-title"],[class*="module-title"],[class*="lesson-title"],[class*="feature-title"],[class*="section-title"]').forEach(el => {
      if (shouldSkip(el)) return;
      const text = el.textContent.trim().replace(/\s+/g,' ');
      if (text.length > 2 && !seen.has(text)) {
        seen.add(text);
        items.push({ type:'heading', text, section:text, weight:4 });
      }
    });

    PAGE_INDEX = items;
    return items;
  }

  const STOP_WORDS = new Set(['what','that','this','with','from','have','will','your','they','been','were','about','which','when','where','there','their','more','also','some','then','than','into','only','over','just','does','like','tell','show','how','can','the','and','for','are','but','not','you','all','any','here','page','very','please','could','would','should','give','find']);

  function searchPage(query) {
    const idx = buildPageIndex();
    const raw = query.toLowerCase().replace(/[?!.]+$/, '');
    const words = raw.split(/[\s,?!.;:'"()\[\]]+/).filter(w => w.length > 2 && !STOP_WORDS.has(w));
    if (!words.length) return [];

    // Build bigrams for phrase matching
    const bigrams = [];
    for (let i = 0; i < words.length - 1; i++) bigrams.push(words[i] + ' ' + words[i+1]);

    const scored = idx.map(item => {
      const t = item.text.toLowerCase();
      let score = 0;
      bigrams.forEach(ph => { if (t.includes(ph)) score += 6 * item.weight; });
      words.forEach(w => { if (t.includes(w)) score += item.weight; });
      return { ...item, score };
    }).filter(x => x.score > 0).sort((a,b) => b.score - a.score);

    return scored.slice(0, 5);
  }

  function buildPageSummary() {
    const idx = buildPageIndex();
    return idx.filter(x => x.type === 'heading' && x.weight >= 3).slice(0, 8).map(x => x.text);
  }

  // Returns sections with heading + first 1-2 body bullets for a rich page overview
  function buildPageOverview() {
    const idx = buildPageIndex();
    const sections = [];
    let current = null;
    for (const item of idx) {
      if (item.type === 'heading' && item.weight >= 4) {
        current = { heading:item.text, bullets:[] };
        sections.push(current);
      } else if (current && item.type === 'body' && item.text.length < 160 && current.bullets.length < 2) {
        current.bullets.push(item.text);
      }
    }
    return sections.slice(0, 7);
  }

  // ── GEMINI AI ─────────────────────────────────────────────────────────────────
  const GEMINI_KEY = 'AIzaSyBSgzVMQkE6q_3CvN4WaapfQzC0WoG4NqU';
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`;

  const TIH_SYSTEM = `You are the official AI assistant for Tolbert Innovation Hub (TIH), a Liberian youth empowerment organization. Your job is to answer questions based on information available on the TIH website. Always search the page content before answering, provide accurate information, recommend relevant pages, and help users find programs, courses, events, and contact information. If information is unavailable, politely say so and offer WhatsApp contact.

ABOUT TIH:
Tolbert Innovation Hub was founded by Mr. Samuel S. Tolbert (CEO) and is headquartered at Spriggs Payne Airport, Sinkor, Monrovia, Liberia. TIH empowers Liberian youth through four pillars: Scholarship & Study Abroad, Free IELTS/TOEFL Classroom, Healthcare Referral, and Software & Digital Innovation.

TEAM:
- Samuel S. Tolbert — Founder & CEO
- Esther Boakai — Chief Administrative Officer
- Alieu Saysay — General Manager
- Christlove P. Jaye — Financial Officer
- Feature A. Cartee — Administrative Assistant
- Precelia Jallah — Media & Communications Officer

PROGRAMS & KEY FACTS:
Scholarship & Study Abroad: Guidance, document prep, eligibility checks, admission support. General deadline: July 15, 2026.
• ICCR (India) — Fully funded: tuition + ₹15,000–20,000/month stipend + airfare + hostel. Liberian citizens age 18–40 (UG/PG) or up to 50 (PhD). Deadline: April 21, 2026.
• Chevening (UK) — Full coverage, 2+ years work experience required. Applications: August–November annually.
• Fulbright (USA) — Full coverage, IELTS ≥6.5 or TOEFL iBT ≥79. Deadline: February–May.
• DAAD (Germany) — Up to €8,920/year. Sub-Saharan Africans, bachelor's degree required.
• Mastercard Foundation — 40+ partner universities, African citizens, financial need + leadership.
• Pan African University (PAU) — African Union, under 35 (Master's), under 40 (PhD). Applications: November–December.

Free IELTS/TOEFL Classroom: 6 modules each (Orientation, Reading/Listening/Writing/Speaking, Mock Exam). 100% free, no sign-up required. Certificate of Completion: $5 after completing Module 6.

Healthcare Referral: Medical case assessment, referrals to partner hospitals in India (cardiology, oncology, orthopedics, neurology, fertility), travel & visa guidance.

Software & Digital Innovation: Custom websites, web apps, mobile apps, business management systems. Starter $150 · Professional $400 · Enterprise custom.

CONTACT:
Phone/WhatsApp: +231 880 559 227 · Alt: +231 778 956 979
Email: tolbertinnovationhub@gmail.com
Office: Spriggs Payne Airport, Sinkor, Monrovia, Liberia
Hours: Mon–Fri 8am–6pm · Sat 9am–3pm GMT

IMPACT: 500+ students supported · 12+ countries reached · 50+ healthcare cases · 30+ businesses supported.

RESPONSE FORMATTING — CRITICAL RULES:
• Use HTML only: <strong>bold</strong>, <br> for line breaks, • for bullet points
• Do NOT use markdown (no **, no __, no ## headers, no - dashes for bullets)
• Keep responses under 200 words unless detail is genuinely needed
• Be warm, professional, and concise
• Always offer to help further or suggest contacting TIH on WhatsApp: +231 880 559 227
• For anything you are unsure about, say so and direct to WhatsApp`;

  let CHAT_HISTORY = [];

  async function callGemini(userMessage) {
    const pageIdx = buildPageIndex();
    const pageContent = pageIdx.slice(0, 60).map(i => {
      const sec = (i.section && i.section !== i.text) ? `[${i.section}] ` : '';
      return sec + i.text;
    }).join('\n');

    const systemFull = TIH_SYSTEM +
      (pageContent ? `\n\nCURRENT PAGE CONTENT (use this to answer page-specific questions):\n${pageContent}` : '') +
      `\n\nCURRENT PAGE: ${getPageCtx().label}`;

    const body = {
      system_instruction: { parts: [{ text: systemFull }] },
      contents: CHAT_HISTORY.concat([{ role:'user', parts:[{ text:userMessage }] }]),
      generationConfig: { temperature:0.65, maxOutputTokens:400 }
    };

    const res = await fetch(GEMINI_URL, {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || `HTTP ${res.status}`);
    }

    const data = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!reply) throw new Error('Empty response');

    CHAT_HISTORY.push(
      { role:'user',  parts:[{ text:userMessage }] },
      { role:'model', parts:[{ text:reply }] }
    );
    if (CHAT_HISTORY.length > 20) CHAT_HISTORY = CHAT_HISTORY.slice(-20);
    return reply;
  }

  // ── APPLICATION FLOWS ─────────────────────────────────────────────────────────
  const FLOWS = {
    scholarship: {
      title:'🎓 Scholarship / Study Abroad',
      subject:'Chat Application — Scholarship / Study Abroad',
      steps:[
        { key:'name',  label:'Full Name',         type:'text',   ph:'As it should appear on documents' },
        { key:'email', label:'Email Address',      type:'email',  ph:'you@example.com' },
        { key:'phone', label:'Phone / WhatsApp',   type:'tel',    ph:'+231 880 ...' },
        { key:'level', label:'Target Study Level', type:'select', opts:['Undergraduate (Bachelor\'s)','Postgraduate (Master\'s)','Doctoral (PhD)','Diploma / Certificate'] },
        { key:'field', label:'Field of Study',     type:'text',   ph:'e.g. Medicine, Engineering, Business' }
      ]
    },
    healthcare: {
      title:'🏥 Healthcare Program',
      subject:'Chat Application — Healthcare Request',
      steps:[
        { key:'name',      label:'Patient / Contact Name',   type:'text',  ph:'Full name' },
        { key:'email',     label:'Email Address',             type:'email', ph:'you@example.com' },
        { key:'phone',     label:'Phone / WhatsApp',          type:'tel',   ph:'+231 880 ...' },
        { key:'condition', label:'Medical Condition / Need',  type:'text',  ph:'Brief description of condition or treatment needed' }
      ]
    },
    software: {
      title:'💻 Software Consultation',
      subject:'Chat Application — Software Consultation',
      steps:[
        { key:'name',     label:'Your Name',        type:'text',   ph:'Full name' },
        { key:'email',    label:'Email Address',     type:'email',  ph:'you@example.com' },
        { key:'phone',    label:'Phone / WhatsApp',  type:'tel',    ph:'+231 880 ...' },
        { key:'business', label:'Business / Project',type:'text',   ph:'Your business or project name' },
        { key:'service',  label:'Service Needed',    type:'select', opts:['Website Development','Business Management System','Mobile App','Digital Strategy / Consulting','Other'] }
      ]
    },
    classroom: {
      title:'📚 IELTS / TOEFL Classroom',
      subject:'Chat Registration — IELTS/TOEFL Classroom',
      steps:[
        { key:'name',  label:'Full Name',    type:'text',   ph:'Your full name' },
        { key:'email', label:'Email Address', type:'email',  ph:'you@example.com' },
        { key:'phone', label:'Phone',         type:'tel',    ph:'+231 880 ...' },
        { key:'exam',  label:'Exam Track',    type:'select', opts:['IELTS','TOEFL','Both IELTS & TOEFL'] }
      ]
    }
  };


  // ── DOM ───────────────────────────────────────────────────────────────────────
  const LOGO_URL = 'https://i.ibb.co/SXJKRq0S/Tolbert-Innovation-Logo.jpg';
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const chatBtn = document.createElement('button');
  chatBtn.id = 'tih-chat-btn';
  chatBtn.setAttribute('aria-label','Open TIH chat assistant');
  chatBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6V10h12v2zm0-3H6V7h12v2z"/></svg><span id="tih-chat-badge">1</span>`;

  const ctx = getPageCtx();
  const chatWin = document.createElement('div');
  chatWin.id = 'tih-chat-win';
  chatWin.setAttribute('role','dialog');
  chatWin.setAttribute('aria-modal','true');
  chatWin.setAttribute('aria-label','TIH Chat Assistant');
  chatWin.innerHTML = `
    <div class="tih-hdr">
      <div class="tih-hdr-av"><img src="${LOGO_URL}" alt="TIH" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span style="display:none">TI</span></div>
      <div class="tih-hdr-info">
        <div class="tih-hdr-name">TIH Assistant</div>
        <div class="tih-hdr-status">Online — Ready to help</div>
      </div>
      <div class="tih-hdr-btns">
        <button class="tih-hdr-btn" id="tih-clear-btn" title="Clear chat" aria-label="Clear chat">🗑</button>
        <button class="tih-hdr-btn" id="tih-close-btn" aria-label="Close chat">✕</button>
      </div>
    </div>
    <div class="tih-page-ctx" id="tih-page-ctx">${esc(ctx.label)}</div>
    <div class="tih-msgs" id="tih-msgs" aria-live="polite"></div>
    <div class="tih-foot">
      <input class="tih-inp" id="tih-inp" type="text" placeholder="Ask me anything about TIH…" autocomplete="off" maxlength="300" />
      <button class="tih-send" id="tih-send" aria-label="Send message">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
  `;

  document.body.appendChild(chatBtn);
  document.body.appendChild(chatWin);

  const msgsEl  = document.getElementById('tih-msgs');
  const inpEl   = document.getElementById('tih-inp');
  const sendEl  = document.getElementById('tih-send');

  let busy = false;
  let flow = null;

  // ── Helpers ───────────────────────────────────────────────────────────────────
  const scroll = () => { msgsEl.scrollTop = msgsEl.scrollHeight; };

  async function askAI(text) {
    if (busy) return;
    busy = true;
    const typingEl = document.createElement('div');
    typingEl.className = 'tih-typing';
    typingEl.innerHTML = `<div class="tih-av bot" style="width:28px;height:28px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#001440,#002868);display:flex;align-items:center;justify-content:center;overflow:hidden;"><img src="${LOGO_URL}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span style="display:none;font-size:.58rem;font-weight:800;color:#fff;">TI</span></div><div class="tih-dots"><div class="tih-dot"></div><div class="tih-dot"></div><div class="tih-dot"></div></div>`;
    msgsEl.appendChild(typingEl);
    scroll();
    try {
      const reply = await callGemini(text);
      typingEl.remove();
      busy = false;
      botMsg(reply, getPageCtx().qr);
    } catch (err) {
      typingEl.remove();
      busy = false;
      botMsg(`I'm having trouble connecting right now. Please reach us directly:<br><br>💬 <strong>WhatsApp (fastest):</strong> <a href="https://wa.me/231880559227" target="_blank" style="color:#002868;font-weight:700;">+231 880 559 227</a><br>📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com`,
        ['💬 Open WhatsApp','📞 Contact Info']);
    }
  }


  function timeStr() {
    const d = new Date();
    return d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  }

  function botMsg(html, qrs) {
    const wrap = document.createElement('div');
    wrap.style.display = 'contents';

    const row = document.createElement('div');
    row.className = 'tih-row bot';
    row.innerHTML = `<div class="tih-av bot"><img src="${LOGO_URL}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span style="display:none">TI</span></div><div class="tih-bub">${html}</div>`;
    wrap.appendChild(row);

    const tsEl = document.createElement('div');
    tsEl.className = 'tih-ts';
    tsEl.textContent = timeStr();
    wrap.appendChild(tsEl);

    if (qrs && qrs.length) {
      const bar = document.createElement('div');
      bar.className = 'tih-qrs';
      qrs.forEach(label => {
        const b = document.createElement('button');
        b.className = 'tih-qr'; b.textContent = label;
        b.addEventListener('click', () => { bar.remove(); onQR(label); });
        bar.appendChild(b);
      });
      wrap.appendChild(bar);
    }
    msgsEl.appendChild(wrap);
    scroll();
  }

  function userMsg(text) {
    const wrap = document.createElement('div');
    wrap.style.display = 'contents';
    const row = document.createElement('div');
    row.className = 'tih-row user';
    row.innerHTML = `<div class="tih-bub">${esc(text)}</div>`;
    wrap.appendChild(row);
    const tsEl = document.createElement('div');
    tsEl.className = 'tih-ts';
    tsEl.textContent = timeStr();
    wrap.appendChild(tsEl);
    msgsEl.appendChild(wrap);
    scroll();
  }

  function type(delay, cb) {
    if (busy) return;
    busy = true;
    const t = document.createElement('div');
    t.className = 'tih-typing';
    t.innerHTML = `<div class="tih-av bot"><img src="${LOGO_URL}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span style="display:none">TI</span></div><div class="tih-dots"><div class="tih-dot"></div><div class="tih-dot"></div><div class="tih-dot"></div></div>`;
    msgsEl.appendChild(t);
    scroll();
    setTimeout(() => { t.remove(); busy = false; cb(); scroll(); }, delay);
  }

  function divider(text) {
    const d = document.createElement('div');
    d.className = 'tih-divider';
    d.textContent = text;
    msgsEl.appendChild(d);
  }

  // ── Open / Close ───────────────────────────────────────────────────────────────
  function openChat() {
    chatWin.classList.add('open');
    document.getElementById('tih-chat-badge').style.display = 'none';
    if (!msgsEl.children.length) {
      divider('Today');
      buildPageIndex(); // pre-build index while user reads greeting
      const pageCtx = getPageCtx();
      const greeting = buildWelcome(pageCtx);
      type(800, () => { botMsg(greeting, pageCtx.qr); });
    }
    setTimeout(() => inpEl.focus(), 280);
  }

  function buildWelcome(pageCtx) {
    const page = pageCtx.label;
    const headings = buildPageSummary().slice(0, 4);
    const topicsLine = headings.length >= 2
      ? `<br><br>📋 <strong>This page covers:</strong> ${headings.map(h => esc(h)).join(' &nbsp;·&nbsp; ')}`
      : '';

    if (page.includes('IELTS Module')) {
      return `Hello! 👋 I see you're on <strong>${esc(page)}</strong>.${topicsLine}<br><br>Ask me anything about the content on this page, IELTS tips, certificates, or scholarships!`;
    }
    if (page.includes('IELTS Classroom')) {
      return `Welcome to the <strong>TIH Free IELTS Classroom!</strong> 📚${topicsLine}<br><br>I can guide you through the 6 modules, give study tips, explain scoring, or help with scholarship applications.`;
    }
    if (page.includes('Study Abroad') || page.includes('Scholarship')) {
      return `Welcome! 🎓 You're exploring <strong>${esc(page)}</strong>.${topicsLine}<br><br>I can help with requirements, application steps, documents, and much more.`;
    }
    if (page.includes('Healthcare')) {
      return `Welcome to TIH's <strong>Healthcare Referral Program!</strong> 🏥${topicsLine}<br><br>I can explain how the referral process works, describe partner hospitals, and help you submit a request.`;
    }
    if (page.includes('Software')) {
      return `Welcome to <strong>TIH Software &amp; Digital Innovation!</strong> 💻${topicsLine}<br><br>I can explain our services, share pricing, and help you start a consultation.`;
    }
    if (page.includes('University')) {
      const uniName = headings.find(h => h.length > 4) || 'this university';
      return `Hello! 👋 I can see you're exploring <strong>${esc(uniName)}</strong>.${topicsLine}<br><br>I can help with the application process, scholarship options, and requirements.`;
    }
    if (topicsLine) {
      return `Hello! 👋 Welcome to <strong>Tolbert Innovation Hub</strong>!${topicsLine}<br><br>Ask me anything about this page, or about our scholarships, free classroom, healthcare, and software services.`;
    }
    return `Hello! 👋 Welcome to <strong>Tolbert Innovation Hub</strong>!<br><br>I'm your TIH Assistant — I can answer questions about scholarships, free IELTS/TOEFL prep, healthcare referrals, software services, and more.<br><br>What can I help you with today?`;
  }

  chatBtn.addEventListener('click', () =>
    chatWin.classList.contains('open') ? chatWin.classList.remove('open') : openChat()
  );
  document.getElementById('tih-close-btn').addEventListener('click', () => chatWin.classList.remove('open'));
  document.getElementById('tih-clear-btn').addEventListener('click', () => {
    msgsEl.innerHTML = '';
    flow = null;
    divider('Today');
    const pageCtx = getPageCtx();
    type(600, () => botMsg(buildWelcome(pageCtx), pageCtx.qr));
  });

  // ── Quick-reply routing ───────────────────────────────────────────────────────
  function onQR(label) {
    const l = label.toLowerCase();
    userMsg(label);

    if (l.includes('main menu') || l.includes('🔙')) {
      type(450, () => { botMsg(buildWelcome(getPageCtx()), getPageCtx().qr); }); return;
    }

    if (l.includes('talk to human') || l.includes('speak to human') || l.includes('human agent') || l.includes('real person')) {
      type(500, () => botMsg(`👋 <strong>Connect with Our Team</strong><br><br>
Our team is ready to answer any question you have!<br><br>
💬 <strong>WhatsApp (fastest — replies in minutes):</strong><br>
<a href="https://wa.me/231880559227" target="_blank" style="color:#002868;font-weight:700;">+231 880 559 227</a><br><br>
📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com<br>
📞 <strong>Call:</strong> +231 778 956 979<br><br>
🕐 Hours: Mon–Fri 8am–6pm · Sat 9am–3pm (GMT)`,
        ['💬 Open WhatsApp Now','📧 Send Email','🔙 Main Menu']));
      return;
    }

    // External link navigation
    const NAV = {
      'open whatsapp':        'https://wa.me/231880559227',
      'ielts classroom':      'classroom-ielts.html',
      'start ielts':          'classroom-ielts.html',
      'go to ielts':          'classroom-ielts.html',
      'ielts module 1':       'classroom-ielts-module-1.html',
      'ielts module 2':       'classroom-ielts-module-2.html',
      'module 2 — reading':   'classroom-ielts-module-2.html',
      'ielts module 3':       'classroom-ielts-module-3.html',
      'module 3 — writing':   'classroom-ielts-module-3.html',
      'ielts module 4':       'classroom-ielts-module-4.html',
      'module 4 — listening': 'classroom-ielts-module-4.html',
      'ielts module 5':       'classroom-ielts-module-5.html',
      'module 5 — speaking':  'classroom-ielts-module-5.html',
      'ielts module 6':       'classroom-ielts-module-6.html',
      'toefl classroom':      'classroom-toefl.html',
      'start toefl':          'classroom-toefl.html',
      'go to toefl':          'classroom-toefl.html',
      'request ielts certificate': 'classroom-ielts-certificate-request.html',
      'ielts certificate':    'classroom-ielts-certificate-request.html',
      'request toefl certificate': 'classroom-toefl-certificate-request.html',
      'toefl certificate':    'classroom-toefl-certificate-request.html',
      'view full pricing':    'software.html#pricing',
      'full pricing':         'software.html#pricing',
      'view portfolio':       'software.html#portfolio',
      'partner hospitals':    'healthcare.html',
      'view healthcare page': 'healthcare.html',
      'healthcare page':      'healthcare.html',
      'donate page':          'donate.html#donate-now',
      'go to donate':         'donate.html#donate-now',
      'events page':          'events.html',
      'view events page':     'events.html',
      'register for event':   'events.html#register',
      'view all news':        'news.html',
      'all news':             'news.html',
      'faq page':             'faq.html',
      'go to faq page':       'faq.html',
      'contact form':         'contact.html#contact-form',
      'contact page':         'contact.html',
      'resource center':      'classroom-resource-center.html',
      'success stories':      'success-stories.html',
      'more success stories': 'success-stories.html',
      'view impact report':   'impact.html',
      'view impact':          'impact.html',
      'leadership page':      'leadership.html',
      'volunteer page':       'volunteer.html',
      'partner with us page': 'partner-with-us.html',
      'full team page':       'team.html',
      'meet the team':        'team.html',
      'view full team page':  'team.html',
      'go to application form':'study-abroad.html#application-form',
      'application form':     'study-abroad.html#application-form',
      'iccr scholarship':     'fully-funded-scholarship.html',
      'iccr details':         'fully-funded-scholarship.html',
      'fully funded':         'fully-funded-scholarship.html',
      'apply before deadline':'study-abroad.html#application-form',
      'send email':           'mailto:tolbertinnovationhub@gmail.com',
      'view all scholarships':'fully-funded-scholarship.html#more-scholarships',
      'all scholarships':     'fully-funded-scholarship.html#more-scholarships',
      'other scholarships':   'fully-funded-scholarship.html#more-scholarships',
      'more scholarships':    'fully-funded-scholarship.html#more-scholarships',
      'chevening':            'fully-funded-scholarship.html#more-scholarships',
      'fulbright':            'fully-funded-scholarship.html#more-scholarships',
      'daad':                 'fully-funded-scholarship.html#more-scholarships',
      'application feedback': 'contact.html',
      'improve ielts score':  'classroom-ielts.html',
    };

    for (const [key, url] of Object.entries(NAV)) {
      if (l.includes(key)) {
        if (url.startsWith('http') || url.startsWith('mailto')) window.open(url, '_blank');
        else window.location.href = url;
        return;
      }
    }

    // Apply-flow starters
    if (l.includes('scholarship / study abroad') || (l.includes('scholarship') && l.includes('apply'))) { startFlow('scholarship'); return; }
    if (l.includes('healthcare request') || l.includes('healthcare program')) { startFlow('healthcare'); return; }
    if (l.includes('software consultation') || l.includes('request consultation')) { startFlow('software'); return; }
    if (l.includes('ielts/toefl classroom') || l.includes('join ielts')) { startFlow('classroom'); return; }
    if (l.includes('apply now') || l.includes('start application in chat')) {
      type(500, () => botMsg('Which program are you applying for?', ['🎓 Scholarship / Study Abroad','🏥 Healthcare Request','💻 Software Consultation','📚 IELTS/TOEFL Classroom'])); return;
    }

    // Fall through — ask AI
    askAI(label);
  }

  // ── Apply flow ────────────────────────────────────────────────────────────────
  function startFlow(key) {
    const f = FLOWS[key];
    flow = { key, step:0, data:{ Program:f.title } };
    type(600, () => {
      botMsg(`Let's get your <strong>${f.title}</strong> application started. I'll collect your details step by step. 📋`);
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
      ctrl.appendChild(Object.assign(new Option('Select…',''), { disabled:true, selected:true }));
      s.opts.forEach(o => ctrl.appendChild(new Option(o, o)));
    } else {
      ctrl = Object.assign(document.createElement('input'), { type:s.type, placeholder:s.ph || '' });
    }
    fieldDiv.appendChild(ctrl);

    const isLast = flow.step === steps.length - 1;
    const btn = document.createElement('button');
    btn.className = 'tih-field-btn';
    btn.textContent = isLast ? '✓ Submit Application' : 'Next →';
    btn.addEventListener('click', () => {
      const val = ctrl.value.trim();
      if (!val) { ctrl.style.borderColor = '#BF0A30'; ctrl.focus(); return; }
      ctrl.style.borderColor = '';
      flow.data[s.label] = val;
      prog.remove(); fieldDiv.remove();
      userMsg(val);
      flow.step++;
      setTimeout(renderStep, 350);
    });
    fieldDiv.appendChild(btn);

    msgsEl.appendChild(prog);
    msgsEl.appendChild(fieldDiv);
    scroll();
    if (s.type !== 'select') setTimeout(() => ctrl.focus(), 100);
  }

  async function submitFlow() {
    const f = FLOWS[flow.key];
    const payload = { ...flow.data, _subject: f.subject + ' — Tolbert Innovation Hub', _template:'table', _captcha:'false', Source:'TIH Chatbot' };
    flow = null;
    type(900, async () => {
      botMsg('Submitting your application… ⏳');
      try {
        const res  = await fetch('https://formsubmit.co/ajax/tolbertinnovationhub@gmail.com', { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify(payload) });
        const json = await res.json();
        if (json.success === true || json.success === 'true') {
          type(600, () => botMsg(`✅ <strong>Application Submitted!</strong><br><br>Thank you! The TIH team will contact you within <strong>24–48 hours</strong> by email or WhatsApp.<br><br>Is there anything else I can help with?`,
            ['🎓 Scholarships','📚 Free Classroom','📞 Contact','🔙 Main Menu']));
        } else throw new Error();
      } catch (_) {
        type(400, () => botMsg(`Your details were noted. To confirm delivery, also WhatsApp us at <strong>+231 880 559 227</strong> or email <strong>tolbertinnovationhub@gmail.com</strong>.`,['💬 Open WhatsApp','🔙 Main Menu']));
      }
    });
  }

  // ── Text send ─────────────────────────────────────────────────────────────────
  function send() {
    const text = inpEl.value.trim();
    if (!text || busy) return;
    inpEl.value = '';
    if (flow) { userMsg(text); return; }
    userMsg(text);
    askAI(text);
  }

  sendEl.addEventListener('click', send);
  inpEl.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

})();
