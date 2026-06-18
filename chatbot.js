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

  // ── KNOWLEDGE BASE ────────────────────────────────────────────────────────────
  const KB = [

    { id:'greet',
      keywords:['hello','hi','hey','good morning','good evening','good afternoon','howdy','greetings','what can you do','who are you','help me','assist','start','begin'],
      reply:`Hello! 👋 Welcome to <strong>Tolbert Innovation Hub</strong>!<br><br>
I'm the TIH Assistant — here to help with scholarships, free IELTS/TOEFL prep, healthcare referrals, software services, and more.<br><br>
What would you like to know today?`,
      qr:['🎓 Scholarships','📚 Free Classroom','🏥 Healthcare','💻 Software','📝 Apply Now','📞 Contact'] },

    { id:'about_tih',
      keywords:['what is tih','what is tolbert','about tolbert','tell me about','what does tih do','who is tolbert innovation','organization','ngo','nonprofit','what you do','what do you offer','what programs','overview','mission'],
      reply:`🏛️ <strong>About Tolbert Innovation Hub (TIH)</strong><br><br>
TIH is a Liberian organization founded by <strong>Mr. Samuel S. Tolbert</strong> that empowers youth through four pillars:<br><br>
🎓 <strong>Scholarship & Study Abroad</strong> — guidance, document prep &amp; admission support<br>
🏥 <strong>Healthcare Referral Program</strong> — specialist referrals to India &amp; beyond<br>
💻 <strong>Software &amp; Digital Innovation</strong> — websites, apps, business systems<br>
📚 <strong>Free IELTS/TOEFL Classroom</strong> — 6-module courses, 100% free<br><br>
📍 Based in Monrovia, Liberia · 📞 +231 880 559 227`,
      qr:['🎓 Scholarships','🏥 Healthcare','💻 Software','📚 Free Classroom','👤 Our Founder','📞 Contact'] },

    { id:'founder',
      keywords:['founder','founded','samuel','tolbert','samuel tolbert','who started','who created','ceo','chief executive','leadership','who runs','who is in charge','mr tolbert','mr samuel'],
      reply:`👤 <strong>Our Founder — Mr. Samuel S. Tolbert</strong><br><br>
Tolbert Innovation Hub was founded by <strong>Mr. Samuel S. Tolbert</strong>, who serves as CEO. He built TIH with a mission to bridge the gap between Liberian talent and global opportunity.<br><br>
Under his leadership, TIH has:<br>
• Supported <strong>500+</strong> students with scholarship guidance<br>
• Coordinated healthcare referrals to specialist hospitals in India<br>
• Delivered digital solutions to Liberian businesses<br>
• Built a completely free IELTS/TOEFL classroom for all students`,
      qr:['📄 Leadership Page','👥 Meet the Team','📞 Contact Us','🔙 Main Menu'] },

    { id:'team',
      keywords:['team','staff','employees','members','who works','esther','alieu','christlove','feature cartee','precelia','administrative','officer','manager','who is on'],
      reply:`👥 <strong>The TIH Team</strong><br><br>
• <strong>Samuel S. Tolbert</strong> — Founder &amp; CEO<br>
• <strong>Esther Boakai</strong> — Chief Administrative Officer<br>
• <strong>Alieu Saysay</strong> — General Manager<br>
• <strong>Christlove P. Jaye</strong> — Financial Officer<br>
• <strong>Feature A. Cartee</strong> — Administrative Assistant<br>
• <strong>Precelia Jallah</strong> — Media &amp; Communications Officer`,
      qr:['👥 View Full Team Page','👤 Our Founder','📞 Contact','🔙 Main Menu'] },

    { id:'scholarship',
      keywords:['scholarship','study abroad','international school','university abroad','admission','study overseas','apply school','foreign university','higher education','bachelor','master','phd','postgraduate','undergraduate','degree','academic','enroll','university'],
      reply:`🎓 <strong>Scholarship &amp; Study Abroad Program</strong><br><br>
TIH offers two main scholarship pathways:<br><br>
<strong>1. Study Abroad Guidance</strong><br>
Document prep, eligibility guidance, and admission letter issuance for universities worldwide.<br><br>
<strong>2. ICCR Fully Funded Scholarship</strong> 🏆<br>
India–Africa Maitri initiative. Covers <em>full tuition, monthly stipend, return airfare, visa support &amp; hostel</em>.<br>
<strong>Eligibility:</strong> Liberian citizens, age 18–40 (UG/PG) or up to 50 (PhD)<br><br>
📅 <strong>2026 deadline: July 15, 2026</strong><br><br>
Also available: Chevening (UK), Fulbright (USA), DAAD (Germany), Mastercard Foundation, PAU.`,
      qr:['📝 Apply for Scholarship','🏆 ICCR Details','✅ Requirements','🇬🇧 Chevening','🇺🇸 Fulbright','🔙 Main Menu'] },

    { id:'iccr',
      keywords:['iccr','fully funded','india scholarship','india africa','maitri','free scholarship','government scholarship','india government','tuition free','stipend','airfare','hostel','living allowance'],
      reply:`🏆 <strong>ICCR Fully Funded Scholarship 2026–2027</strong><br><br>
Offered by the <strong>Government of India</strong> under the India–Africa Maitri initiative.<br><br>
✅ <strong>Coverage:</strong><br>
• Full tuition fees (paid directly to university)<br>
• Monthly living stipend (₹15,000–₹20,000)<br>
• Return economy airfare<br>
• Visa support through Indian Mission<br>
• Hostel accommodation<br>
• Personal medical insurance (arranged by student)<br><br>
✅ <strong>Eligibility:</strong> Liberian citizen · Age 18–40 (UG/PG), up to 50 (PhD) · Strong academics<br><br>
📅 Application deadline: <strong>April 21, 2026</strong>`,
      qr:['📝 Apply ICCR Scholarship','📋 Documents Needed','📞 Contact TIH','🔙 Main Menu'] },

    { id:'requirements',
      keywords:['requirements','documents','eligible','eligibility','qualify','who can apply','criteria','passport','transcript','certificate','reference letter','personal statement','photo','what do i need','what is needed','can i apply','do i qualify'],
      reply:`📋 <strong>Scholarship Requirements &amp; Documents</strong><br><br>
<strong>General documents:</strong><br>
• National ID or valid Passport<br>
• Academic transcripts / certificates<br>
• Personal statement (500–800 words)<br>
• 2 recommendation / reference letters<br>
• Passport-size photograph<br>
• IELTS/TOEFL score (strongly recommended)<br><br>
<strong>ICCR specific:</strong><br>
• Liberian citizenship proof<br>
• Age 18–40 (UG/PG) or up to 50 (PhD)<br>
• English proficiency (IELTS, TOEFL, Duolingo, or essay)`,
      qr:['📝 Apply Now','📚 Get IELTS/TOEFL Prep','📞 Get Help','🔙 Main Menu'] },

    { id:'apply_process',
      keywords:['how to apply','application process','steps to apply','how do i apply','apply online','submit application','what are the steps','how long does it take','application procedure','how to register','enrollment process','apply for'],
      reply:`📝 <strong>How to Apply — Step by Step</strong><br><br>
<strong>Step 1:</strong> Check your eligibility (age, education, nationality)<br>
<strong>Step 2:</strong> Prepare documents (transcripts, ID, personal statement, references)<br>
<strong>Step 3:</strong> Prepare your IELTS/TOEFL score — use our <em>free classroom</em><br>
<strong>Step 4:</strong> Submit your application on our website or right here in chat<br>
<strong>Step 5:</strong> TIH reviews your application within <strong>5–7 business days</strong><br>
<strong>Step 6:</strong> Receive admission letter or scholarship guidance<br><br>
Ready to start? Click Apply below!`,
      qr:['📝 Start Application in Chat','🌐 Go to Application Form','📋 Requirements','🔙 Main Menu'] },

    { id:'ielts',
      keywords:['ielts','ielts prep','ielts preparation','ielts class','ielts module','ielts band','ielts score','ielts test','ielts exam','band score','reading writing listening speaking','general training','academic ielts','british council'],
      reply:`📚 <strong>Free IELTS Preparation Classroom</strong><br><br>
Our IELTS classroom has <strong>6 structured modules</strong>:<br>
• <strong>Module 1:</strong> Orientation &amp; IELTS Overview<br>
• <strong>Module 2:</strong> Reading Skills<br>
• <strong>Module 3:</strong> Writing Skills (Task 1 &amp; 2)<br>
• <strong>Module 4:</strong> Listening Skills<br>
• <strong>Module 5:</strong> Speaking Skills<br>
• <strong>Module 6:</strong> Full Mock Exam<br><br>
🆓 <strong>100% free</strong> — no signup required.<br>
🏅 Complete Module 6 to request your <strong>Certificate of Completion</strong> ($5 fee).`,
      qr:['📖 Go to IELTS Classroom','🏅 Request IELTS Certificate','📖 TOEFL Classroom','🔙 Main Menu'] },

    { id:'toefl',
      keywords:['toefl','toefl prep','toefl preparation','toefl class','toefl module','toefl score','toefl test','toefl exam','ets','ibt','toefl ibt'],
      reply:`📚 <strong>Free TOEFL Preparation Classroom</strong><br><br>
Our TOEFL classroom has <strong>6 structured modules</strong>:<br>
• <strong>Module 1:</strong> TOEFL Orientation<br>
• <strong>Module 2:</strong> Reading Section<br>
• <strong>Module 3:</strong> Listening Section<br>
• <strong>Module 4:</strong> Speaking Section<br>
• <strong>Module 5:</strong> Writing Section<br>
• <strong>Module 6:</strong> Full Mock Exam<br><br>
🆓 <strong>100% free</strong> — access instantly, no account needed.<br>
🏅 Complete Module 6 to request your <strong>Certificate of Completion</strong> ($5 fee).`,
      qr:['📖 Go to TOEFL Classroom','🏅 Request TOEFL Certificate','📖 IELTS Classroom','🔙 Main Menu'] },

    { id:'ielts_tips',
      keywords:['ielts tip','study tip','how to pass ielts','improve ielts','ielts strategy','band 7','band 8','ielts trick','ace ielts','how to score','improve score','reading tip','writing tip','listening tip','speaking tip'],
      reply:`💡 <strong>IELTS Study Tips from TIH</strong><br><br>
📖 <strong>Reading:</strong> Practice skimming &amp; scanning. Don't read every word — locate keywords fast.<br><br>
✍️ <strong>Writing:</strong> Task 1 — describe data clearly. Task 2 — structure with intro, 2 body paragraphs, conclusion. Aim for 250+ words.<br><br>
🎧 <strong>Listening:</strong> Read questions before audio plays. Write answers exactly as you hear them.<br><br>
🗣️ <strong>Speaking:</strong> Speak fluently, don't pause excessively. Use a range of vocabulary. It's OK to self-correct.<br><br>
⏱️ <strong>General:</strong> Take a full mock exam weekly. Review every mistake.`,
      qr:['📖 IELTS Module 2 — Reading','✍️ IELTS Module 3 — Writing','🎧 IELTS Module 4 — Listening','🗣️ IELTS Module 5 — Speaking','🔙 Main Menu'] },

    { id:'classroom',
      keywords:['classroom','free class','free course','online learning','study platform','modules','lesson','practice test','mock exam','exam preparation','english exam','exam prep','language test','free training','online course'],
      reply:`🏫 <strong>TIH Free Classroom</strong><br><br>
We offer two completely free exam preparation tracks:<br><br>
📗 <strong>IELTS Preparation</strong> — 6 modules covering all 4 skills + mock exam<br>
📘 <strong>TOEFL Preparation</strong> — 6 modules covering Reading, Listening, Speaking, Writing + mock exam<br><br>
Also available:<br>
• Practice tests &amp; quizzes<br>
• Video lessons<br>
• Study materials &amp; resource center<br>
• Certificate of Completion ($5 after mock exam)<br><br>
🆓 <strong>Everything is free. No account needed.</strong>`,
      qr:['📖 IELTS Classroom','📖 TOEFL Classroom','🏅 Get a Certificate','📁 Resource Center','🔙 Main Menu'] },

    { id:'certificate',
      keywords:['certificate','certification','completion certificate','how to get certificate','certificate request','cert request','certificate fee','get certified','proof of completion','certificate after exam'],
      reply:`🏅 <strong>Certificate of Completion</strong><br><br>
After completing the <strong>Mock Exam (Module 6)</strong>, you can request your TIH Certificate of Completion.<br><br>
📋 <strong>Process:</strong><br>
1️⃣ Complete IELTS or TOEFL Module 6 (mock exam)<br>
2️⃣ Pay the <strong>$5 certificate processing fee</strong><br>
3️⃣ Submit the certificate request form (on the classroom page)<br><br>
📦 <strong>Delivery:</strong> Email or in-person pickup at TIH office<br>
⏱️ <strong>Processing time:</strong> 24–48 hours after payment<br><br>
Your certificate includes: name, score, course title, completion date, certificate ID &amp; official seal.`,
      qr:['📝 Request IELTS Certificate','📝 Request TOEFL Certificate','💰 Payment Methods','🔙 Main Menu'] },

    { id:'healthcare',
      keywords:['healthcare','medical','hospital','treatment','doctor','patient','health','specialist','india treatment','referral','surgery','medical care','sick','illness','disease','hospital referral','medical abroad'],
      reply:`🏥 <strong>International Healthcare Referral Program</strong><br><br>
TIH connects Liberian patients and families to quality specialist medical treatment abroad:<br><br>
• Medical case intake &amp; assessment<br>
• Specialist referrals to partner hospitals in India<br>
• Hospital coordination &amp; appointment scheduling<br>
• Travel guidance &amp; visa assistance<br>
• Ongoing patient follow-up support<br><br>
🏨 <strong>Partner hospitals</strong> specialise in cardiology, oncology, orthopedics, neurology, fertility &amp; more.<br><br>
To submit a healthcare request, contact us via WhatsApp or the application form.`,
      qr:['📝 Submit Healthcare Request','🏨 Partner Hospitals','📞 WhatsApp Us','🔙 Main Menu'] },

    { id:'hospitals',
      keywords:['hospital','partner hospital','which hospital','hospital in india','medical center','clinic','specialist','surgery in india','treatment india','cancer','heart surgery','orthopedic','neurology'],
      reply:`🏨 <strong>Partner Hospital Network</strong><br><br>
TIH works with leading hospitals in India offering specialist care:<br>
• ❤️ Cardiology &amp; heart surgery<br>
• 🔬 Oncology (cancer treatment)<br>
• 🦴 Orthopedics &amp; joint replacement<br>
• 🧠 Neurology &amp; neurosurgery<br>
• 🍼 Fertility &amp; reproductive health<br>
• 🔍 General surgery &amp; diagnostics<br><br>
We coordinate appointments, medical records, visa support, and assistance in India.<br><br>
Visit the <strong>Healthcare page</strong> for the full hospital network.`,
      qr:['🌐 View Healthcare Page','📝 Submit Healthcare Request','📞 Contact Us','🔙 Main Menu'] },

    { id:'software',
      keywords:['software','website','web app','web development','mobile app','digital','technology','business system','platform','it service','build website','create app','develop','programming','coding','tech solution','e-commerce','management system','pos','inventory'],
      reply:`💻 <strong>Software &amp; Digital Innovation Services</strong><br><br>
We help Liberian businesses and organisations modernise with:<br>
• Custom websites &amp; web applications<br>
• Business management systems (POS, inventory, HR)<br>
• Mobile application development<br>
• E-commerce platforms<br>
• Digital strategy &amp; consultation<br>
• Process automation &amp; optimisation<br><br>
📦 <strong>Service packages:</strong><br>
• <strong>Starter</strong> — $150 (basic website)<br>
• <strong>Professional</strong> — $400 (full web application)<br>
• <strong>Enterprise</strong> — Custom quote`,
      qr:['📝 Request Consultation','💰 View Full Pricing','🗂️ View Portfolio','🔙 Main Menu'] },

    { id:'pricing',
      keywords:['price','pricing','cost','fee','how much','payment','pay','charge','rate','package','affordable','expensive','free','discount','budget','amount','money'],
      reply:`💰 <strong>TIH Fees &amp; Pricing</strong><br><br>
<strong>Education:</strong><br>
• Scholarship guidance — <strong>Free</strong><br>
• IELTS/TOEFL classroom — <strong>100% Free</strong><br>
• Completion certificate — <strong>$5 USD</strong><br><br>
<strong>Software Services:</strong><br>
• Starter package — <strong>$150</strong><br>
• Professional package — <strong>$400</strong><br>
• Enterprise — <strong>Custom quote</strong><br><br>
<strong>Healthcare:</strong><br>
• Program coordination — Contact us for details<br><br>
<strong>Donation to TIH:</strong> From $5 — any amount helps!`,
      qr:['💻 Software Details','🎓 Apply Free','❤️ Donate','📞 Contact','🔙 Main Menu'] },

    { id:'contact',
      keywords:['contact','phone','email','whatsapp','reach us','get in touch','office','location','address','hours','call','where are you','how to reach','contact details','monrovia','liberia office'],
      reply:`📞 <strong>Contact Tolbert Innovation Hub</strong><br><br>
📱 <strong>Phone/WhatsApp:</strong> +231 880 559 227<br>
📱 <strong>Alt Phone:</strong> +231 778 956 979<br>
📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com<br>
📍 <strong>Office:</strong> Spriggs Payne Airport, Sinkor, Monrovia, Liberia<br><br>
🕐 <strong>Office Hours:</strong><br>
Mon–Fri: 8:00 AM – 6:00 PM (GMT)<br>
Sat: 9:00 AM – 3:00 PM (GMT) · Sun: Closed<br><br>
💬 <strong>WhatsApp is the fastest way to reach us!</strong>`,
      qr:['💬 Open WhatsApp','📧 Send Email','📝 Contact Form','🔙 Main Menu'] },

    { id:'whatsapp',
      keywords:['whatsapp','chat whatsapp','message us','text us','wa','instant message','dm','direct message'],
      reply:`💬 <strong>Chat on WhatsApp</strong><br><br>
The fastest way to reach TIH is via WhatsApp:<br>
📱 <strong>+231 880 559 227</strong><br><br>
Our team monitors WhatsApp during business hours (Mon–Sat) and responds promptly to all messages.`,
      qr:['💬 Open WhatsApp Now','📞 Contact Info','🔙 Main Menu'] },

    { id:'donate',
      keywords:['donat','donation','support tih','contribute','fund','give money','help tih','mobile money','bank transfer','western union','moneygram','how to donate','sponsor','fundraise'],
      reply:`❤️ <strong>Support Tolbert Innovation Hub</strong><br><br>
Your donation helps provide free education, healthcare referrals, and scholarship guidance to Liberian youth.<br><br>
💵 <strong>Suggested amounts:</strong> $5 · $10 · $25 · $50 · $100 · Custom<br><br>
💳 <strong>Payment methods:</strong><br>
• Mobile Money (Orange Money / MTN)<br>
• Bank Transfer<br>
• WhatsApp-coordinated payment<br>
• Western Union / MoneyGram<br><br>
📊 <strong>Allocation:</strong> 60% Education · 20% Scholarship · 12% Healthcare · 8% Operations`,
      qr:['💳 Go to Donate Page','📞 Donate via WhatsApp','🔙 Main Menu'] },

    { id:'events',
      keywords:['event','events','upcoming','workshop','seminar','webinar','schedule','deadline','next event','when','scholarship deadline','information session','register event','join event','calendar'],
      reply:`📅 <strong>Upcoming Events &amp; Deadlines</strong><br><br>
• 🏆 <strong>Apr 21, 2026</strong> — ICCR Fully Funded Scholarship deadline<br>
• 🎓 <strong>Jul 15, 2026</strong> — General Scholarship Application Deadline<br>
• 📚 <strong>Ongoing</strong> — IELTS/TOEFL classroom open 24/7, no deadline<br>
• 🏥 <strong>Rolling</strong> — Healthcare referral applications open any time<br>
• 💻 <strong>Rolling</strong> — Software consultations available any time<br><br>
⚠️ Apply early — document preparation takes time!`,
      qr:['📝 Apply Before Deadline','🌐 View Events Page','🎓 ICCR Scholarship','🔙 Main Menu'] },

    { id:'news',
      keywords:['news','announcement','update','latest','blog','press','article','new program','launch','expansion','what\'s new','recent'],
      reply:`📰 <strong>Latest News from TIH</strong><br><br>
• 🎓 <strong>2026 Scholarship Intake Now Open</strong> — updated requirements &amp; guidance sessions available<br>
• 🏅 <strong>IELTS Certificate System Launched</strong> — students can now request certificates online<br>
• 🏥 <strong>Healthcare Program Expanded</strong> — more pathways to specialist treatment in India<br>
• 💻 <strong>Tech Innovation Support</strong> — new digital consultation services for Liberian businesses<br><br>
Visit our News page for full articles and announcements.`,
      qr:['🌐 View All News','📝 Apply Now','🔙 Main Menu'] },

    { id:'volunteer',
      keywords:['volunteer','volunteering','internship','intern','work with tih','join team','help tih','contribute time','pro bono','community service','mentor','tutor'],
      reply:`🤝 <strong>Volunteer with TIH</strong><br><br>
TIH welcomes passionate volunteers in:<br>
• Academic mentors &amp; tutors (IELTS/TOEFL)<br>
• Scholarship counselors<br>
• Healthcare case assistants<br>
• Digital / software volunteers<br>
• Community outreach coordinators<br><br>
Visit our <strong>Volunteer page</strong> or contact us directly to express interest.`,
      qr:['🌐 Go to Volunteer Page','📞 Contact Us','🔙 Main Menu'] },

    { id:'partner',
      keywords:['partner','partnership','collaborate','collaboration','sponsor','sponsorship','corporate','ngo partner','institutional partner','work together','mou','agreement','business partner'],
      reply:`🤝 <strong>Partner With TIH</strong><br><br>
We welcome partnerships with organizations, institutions, and governments that share our mission.<br><br>
<strong>Partnership types:</strong><br>
• Academic institutions &amp; universities<br>
• Healthcare organizations &amp; hospitals<br>
• Technology companies<br>
• NGOs &amp; development organizations<br>
• Government &amp; embassy offices<br>
• Corporate sponsors &amp; donors<br><br>
Contact us to explore partnership opportunities.`,
      qr:['🌐 Partner With Us Page','📞 Contact Us','💬 WhatsApp Us','🔙 Main Menu'] },

    { id:'impact',
      keywords:['impact','statistics','how many','achievement','result','beneficiary','success rate','numbers','what have you done','track record','proven','500','12 countries','50 healthcare'],
      reply:`📊 <strong>TIH Impact at a Glance</strong><br><br>
• 🎓 <strong>500+</strong> students supported with scholarship guidance<br>
• 🌍 <strong>12+</strong> countries reached through our networks<br>
• 🏥 <strong>50+</strong> healthcare cases referred to international specialists<br>
• 💻 <strong>30+</strong> businesses supported with digital solutions<br>
• 📚 <strong>2</strong> exam tracks (IELTS &amp; TOEFL) — 100% free<br>
• 🎓 <strong>3</strong> core programs: Education, Healthcare &amp; Technology<br><br>
Full report on our <strong>Impact page</strong>.`,
      qr:['🌐 View Impact Report','📰 Success Stories','🔙 Main Menu'] },

    { id:'success',
      keywords:['success story','testimonial','success','case study','student story','beneficiary','real story','example','results','people helped','who helped','lives changed'],
      reply:`⭐ <strong>Student &amp; Beneficiary Stories</strong><br><br>
<em>"TIH guided me through the entire scholarship process. I am now studying abroad because of them."</em><br>— <strong>Moses S.</strong>, Scholarship Beneficiary<br><br>
<em>"The free IELTS classroom is genuinely world-class. I prepared confidently and passed."</em><br>— <strong>Fatima K.</strong>, IELTS Student<br><br>
<em>"When my family needed specialist treatment, TIH coordinated everything — referrals, hospital contacts, travel."</em><br>— <strong>Joseph T.</strong>, Healthcare Beneficiary`,
      qr:['🌐 More Success Stories','🎓 Apply for Scholarship','🔙 Main Menu'] },

    { id:'process',
      keywords:['how does it work','how it works','process','procedure','what happens after','timeline','what to expect','step by step','workflow','how long','turnaround','response time','review time'],
      reply:`⚙️ <strong>How TIH Works</strong><br><br>
🎓 <strong>Scholarship:</strong><br>
Submit → TIH reviews (5–7 days) → Eligibility confirmed → Document prep → Admission/scholarship confirmed<br><br>
🏥 <strong>Healthcare:</strong><br>
Submit inquiry → Case assessment → Specialist referral → Hospital coordination → Travel support<br><br>
💻 <strong>Software:</strong><br>
Consultation request → Discovery call → Proposal → Development → Delivery<br><br>
⏱️ General response time: <strong>24–48 hours</strong>`,
      qr:['📝 Apply Now','📞 Contact','🔙 Main Menu'] },

    { id:'resources',
      keywords:['resource','resource center','study material','material','pdf','book','guide','study guide','practice material','download','reading material','preparation material','vocab','grammar'],
      reply:`📁 <strong>Resource Center</strong><br><br>
The TIH Resource Center provides free study materials for IELTS &amp; TOEFL preparation:<br>
• Vocabulary lists &amp; grammar guides<br>
• Reading &amp; listening practice passages<br>
• Writing templates &amp; sample essays<br>
• Speaking topic banks<br>
• Full practice tests<br>
• Video lesson library<br><br>
All resources are freely accessible — no account required.`,
      qr:['🌐 Resource Center','📖 IELTS Classroom','📖 TOEFL Classroom','🔙 Main Menu'] },

    { id:'location',
      keywords:['where','location','address','where is tih','monrovia','sinkor','spriggs payne','liberia','office address','visit','come in person','directions','physical location','walk in'],
      reply:`📍 <strong>TIH Office Location</strong><br><br>
<strong>Tolbert Innovation Hub</strong><br>
Spriggs Payne Airport, Sinkor<br>
Monrovia, Liberia, West Africa<br><br>
🕐 <strong>Office Hours:</strong><br>
Mon–Fri: 8:00 AM – 6:00 PM<br>
Sat: 9:00 AM – 3:00 PM · Sun: Closed<br><br>
📞 Call ahead: <strong>+231 880 559 227</strong>`,
      qr:['📞 Call Us','💬 WhatsApp Us','📧 Email Us','🔙 Main Menu'] },

    { id:'social',
      keywords:['social media','facebook','instagram','twitter','youtube','linkedin','follow','online','website','webpage','url','link','page','find online'],
      reply:`🌐 <strong>Find TIH Online</strong><br><br>
🖥️ <strong>Website:</strong> tolbertinnovationhub.org<br>
📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com<br>
💬 <strong>WhatsApp:</strong> +231 880 559 227<br>
📞 <strong>Phone:</strong> +231 880 559 227 / +231 778 956 979<br><br>
For the fastest response, reach us on <strong>WhatsApp</strong>.`,
      qr:['💬 Open WhatsApp','📧 Email Us','🌐 Contact Page','🔙 Main Menu'] },

    { id:'language',
      keywords:['english','language','speak english','english requirement','how good english','english level','language test','proficiency','ielts score needed','minimum band','minimum score','what score do i need'],
      reply:`🗣️ <strong>English Language Requirements</strong><br><br>
For international scholarships and universities:<br><br>
• <strong>IELTS:</strong> Band 6.0–7.0 (varies by university)<br>
• <strong>TOEFL iBT:</strong> Score 79–100+ (varies)<br>
• <strong>Duolingo:</strong> Also accepted by some programs<br>
• <strong>Essay test:</strong> Accepted by ICCR instead of IELTS/TOEFL<br><br>
💡 Use TIH's <strong>free IELTS/TOEFL classroom</strong> to prepare — completely free!`,
      qr:['📖 Start IELTS Prep','📖 Start TOEFL Prep','🎓 Scholarship Requirements','🔙 Main Menu'] },

    { id:'india',
      keywords:['india','study in india','india university','indian university','india scholarship','india student','visa india','indian college','india education','india medical'],
      reply:`🇮🇳 <strong>India — Education &amp; Healthcare via TIH</strong><br><br>
TIH has strong India connections for both education and healthcare:<br><br>
🎓 <strong>Education:</strong><br>
The <strong>ICCR Fully Funded Scholarship</strong> covers studies at top Indian universities — full tuition, stipend, airfare, and hostel.<br><br>
🏥 <strong>Healthcare:</strong><br>
TIH works with partner hospitals in India offering specialist treatment in cardiology, oncology, orthopedics, neurology &amp; more.<br><br>
Both are coordinated end-to-end by TIH.`,
      qr:['🏆 ICCR Scholarship','🏥 Healthcare in India','📝 Apply','🔙 Main Menu'] },

    { id:'deadline',
      keywords:['deadline','when to apply','last date','closing date','by when','application close','due date','expiry','how long do i have','cut off','submission date','final date'],
      reply:`📅 <strong>Key Application Deadlines</strong><br><br>
• 🏆 <strong>ICCR Fully Funded (India):</strong> <em>April 21, 2026</em><br>
• 🎓 <strong>Study Abroad / General:</strong> <em>July 15, 2026</em><br>
• 📚 <strong>IELTS/TOEFL Classroom:</strong> Open year-round — no deadline<br>
• 🏥 <strong>Healthcare Program:</strong> Rolling — apply anytime<br>
• 💻 <strong>Software Consultation:</strong> Rolling — apply anytime<br><br>
⚠️ <strong>Apply early</strong> — document preparation takes time!`,
      qr:['📝 Apply for Scholarship','🏆 ICCR Scholarship','📚 Free Classroom','🔙 Main Menu'] },

    { id:'chevening',
      keywords:['chevening','uk scholarship','british scholarship','foreign commonwealth','fcdo','study uk','master uk','uk master','uk government scholarship'],
      reply:`🇬🇧 <strong>Chevening Scholarship (UK)</strong><br><br>
The UK Government's flagship international scholarship — <strong>Liberia is eligible!</strong><br><br>
✅ <strong>Coverage:</strong> Full tuition · Monthly allowance · Return airfare · Arrival/departure grant · Thesis grant<br><br>
✅ <strong>Requirements:</strong><br>
• Liberian citizen<br>
• Bachelor's degree<br>
• <strong>2+ years relevant work experience</strong><br>
• Apply to 3 UK university courses<br>
• Commit to return to Liberia after completion<br><br>
📅 <strong>Applications: August – November each year</strong>`,
      qr:['🌐 View All Scholarships','🏆 ICCR Scholarship','📝 Apply Now','🔙 Main Menu'] },

    { id:'fulbright',
      keywords:['fulbright','us scholarship','usa scholarship','american scholarship','study usa','study america','study united states','fulbright foreign','us government scholarship'],
      reply:`🇺🇸 <strong>Fulbright Foreign Student Program (USA)</strong><br><br>
The US Government's premier exchange program — <strong>Liberia is eligible!</strong><br><br>
✅ <strong>Coverage:</strong> Full tuition · Monthly stipend · Airfare · Health insurance · Professional development<br><br>
✅ <strong>Requirements:</strong><br>
• Liberian citizen residing in Liberia<br>
• Bachelor's degree with strong academic record<br>
• TOEFL iBT ≥ 79 or IELTS ≥ 6.5<br>
• Leadership potential &amp; community commitment<br><br>
📅 Deadline: <strong>February – May (varies by year)</strong>`,
      qr:['🌐 View All Scholarships','📚 IELTS/TOEFL Prep','📝 Apply Now','🔙 Main Menu'] },

    { id:'mastercard',
      keywords:['mastercard','mastercard foundation','mcf','mastercard scholar','mastercard scholarship','foundation scholarship'],
      reply:`🌍 <strong>Mastercard Foundation Scholars Program</strong><br><br>
One of Africa's largest scholarship networks — <strong>Liberian students are eligible!</strong><br><br>
✅ <strong>Coverage:</strong> Full tuition at 40+ partner universities · Accommodation &amp; stipend · Mentorship · Return travel<br><br>
✅ <strong>Requirements:</strong><br>
• African citizen (Liberia ✓)<br>
• Demonstrated financial need<br>
• Strong leadership &amp; community service record<br>
• Commitment to give back to Africa<br><br>
📅 Deadlines vary by partner university.`,
      qr:['🌐 View All Scholarships','🎓 ICCR Scholarship','📝 Apply','🔙 Main Menu'] },

    { id:'daad',
      keywords:['daad','germany scholarship','german scholarship','study germany','study in germany','bmz','german academic'],
      reply:`🇩🇪 <strong>DAAD In-Country / In-Region Programme</strong><br><br>
Funded by Germany's Federal Ministry — <strong>Sub-Saharan Africa including Liberia!</strong><br><br>
✅ <strong>Coverage:</strong> Full tuition · Stipend up to €8,920/year · Health insurance · Research allowance · Travel subsidy<br><br>
✅ <strong>Requirements:</strong><br>
• Sub-Saharan African citizen (Liberia ✓)<br>
• Bachelor's degree (max 6 years post-graduation)<br>
• English or French proficiency<br><br>
📅 New calls published each <strong>autumn</strong>`,
      qr:['🌐 View All Scholarships','📚 IELTS/TOEFL Prep','🔙 Main Menu'] },

    { id:'pau',
      keywords:['pan african university','pau','african union scholarship','au scholarship','pan african','continental university','african union'],
      reply:`🌐 <strong>Pan African University (PAU) Scholarship</strong><br><br>
An African Union initiative — full scholarships across Africa. <strong>Liberia is eligible!</strong><br><br>
✅ <strong>Coverage:</strong> Full tuition · Monthly stipend · On-campus accommodation · Return air ticket · Medical insurance<br><br>
✅ <strong>Requirements:</strong><br>
• AU member state citizen (Liberia ✓)<br>
• Bachelor's degree with strong GPA<br>
• Under 35 (Master's) or under 40 (PhD)<br><br>
📅 Applications: <strong>November – December each year</strong>`,
      qr:['🌐 View All Scholarships','🎓 Scholarships','📝 Apply','🔙 Main Menu'] },

    { id:'visa',
      keywords:['visa','visa application','student visa','get visa','visa requirements','how to get visa','india visa','uk visa','us visa','visa process','visa help','visa support','travel document','study permit'],
      reply:`✈️ <strong>Visa Support for Liberian Students</strong><br><br>
TIH provides <strong>visa guidance and document support</strong>:<br><br>
🇮🇳 <strong>India (ICCR):</strong> Indian Mission processes student visas. TIH coordinates your visa application alongside scholarship letters.<br><br>
🇬🇧 <strong>UK (Chevening):</strong> Chevening provides visa guidance. Note: You may need to travel to a neighboring country to apply at a UK visa center.<br><br>
🇺🇸 <strong>USA (Fulbright):</strong> US Embassy in Monrovia handles F1/J1 visas.<br><br>
💡 TIH helps you prepare all required documents for every visa process.`,
      qr:['🏆 ICCR Scholarship','🇬🇧 Chevening Details','📞 Contact TIH','🔙 Main Menu'] },

    { id:'duration',
      keywords:['how long','duration','years','months','program length','how many years','study duration','length of course','time to complete','when does it start'],
      reply:`⏱️ <strong>Program Durations</strong><br><br>
• 🎓 <strong>Undergraduate:</strong> 3–5 years<br>
• 🎓 <strong>Postgraduate (Master's):</strong> 1–2 years<br>
• 🔬 <strong>PhD:</strong> 3–5 years<br>
• 📚 <strong>IELTS/TOEFL Classroom:</strong> Self-paced — complete any time<br>
• 🏥 <strong>Healthcare referral:</strong> Ongoing, case-by-case<br>
• 💻 <strong>Software project:</strong> 2 weeks – 3 months (by scope)`,
      qr:['🎓 Apply for Scholarship','📚 Free Classroom','🔙 Main Menu'] },

    { id:'age',
      keywords:['age','how old','age requirement','age limit','minimum age','maximum age','am i too old','am i too young','age criteria','over 40','year old','years old'],
      reply:`📅 <strong>Age Requirements by Scholarship</strong><br><br>
• 🇮🇳 <strong>ICCR:</strong> UG/PG → 18–40 · PhD → up to 50<br>
• 🇬🇧 <strong>Chevening:</strong> No official upper age limit (2+ years work experience required)<br>
• 🇺🇸 <strong>Fulbright:</strong> No hard limit — typically recent graduates or early career<br>
• 🌍 <strong>Mastercard Foundation:</strong> Typically under 35<br>
• 🌐 <strong>Pan African University:</strong> Master's → under 35 · PhD → under 40`,
      qr:['📋 Full Requirements','🏆 ICCR Scholarship','📝 Apply Now','🔙 Main Menu'] },

    { id:'fields',
      keywords:['what can i study','study field','field of study','course','subject','discipline','available courses','which course','study medicine','study engineering','study law','study business','study agriculture','study computer'],
      reply:`📚 <strong>Available Fields of Study</strong><br><br>
🔬 <strong>Sciences:</strong> Medicine, Pharmacy, Nursing, Biology, Chemistry<br>
⚙️ <strong>Engineering:</strong> Civil, Electrical, Mechanical, Computer Science, IT<br>
💼 <strong>Business:</strong> MBA, Accounting, Economics, Finance, Marketing<br>
⚖️ <strong>Law &amp; Social Sciences:</strong> Law, Political Science, Public Administration<br>
🌾 <strong>Agriculture:</strong> Agronomy, Food Science, Environmental Studies<br>
🎨 <strong>Arts &amp; Education:</strong> Education, Literature, Journalism, History<br><br>
Exact courses depend on your chosen country and university.`,
      qr:['🏆 ICCR Scholarship','📝 Apply Now','📋 Requirements','🔙 Main Menu'] },

    { id:'statement',
      keywords:['personal statement','essay','motivation letter','cover letter','statement of purpose','write essay','how to write','application essay','why do you want','motivation','what to write','sop'],
      reply:`✍️ <strong>Writing Your Personal Statement</strong><br><br>
A strong personal statement covers 5 key points:<br><br>
1️⃣ <strong>Who you are</strong> — background, education, experience<br>
2️⃣ <strong>Why this program</strong> — why this scholarship, country, field<br>
3️⃣ <strong>Your goals</strong> — career plans and how this degree fits<br>
4️⃣ <strong>Your impact</strong> — how you'll contribute to Liberia after graduating<br>
5️⃣ <strong>Why you</strong> — what makes you the strongest candidate<br><br>
📌 Aim for <strong>500–800 words</strong>. Be specific — avoid generic statements.<br><br>
💡 <strong>TIH can review your personal statement — contact us!</strong>`,
      qr:['📞 Get Help from TIH','💬 WhatsApp for Guidance','📋 Requirements','🔙 Main Menu'] },

    { id:'rejection',
      keywords:['rejected','rejection','not selected','failed application','what if i fail','not successful','denied','not accepted','reapply','try again','second chance'],
      reply:`💪 <strong>If You're Not Selected — Don't Give Up</strong><br><br>
Many successful scholars were rejected before winning their scholarship!<br><br>
✅ <strong>What to do:</strong><br>
• <strong>Reapply next cycle</strong> — most scholarships accept re-applications<br>
• <strong>Strengthen weak areas</strong> — improve your IELTS/TOEFL score, GPA, or personal statement<br>
• <strong>Apply for multiple scholarships</strong> simultaneously — ICCR, Chevening, Fulbright, DAAD<br>
• <strong>Consult TIH</strong> — we review applications and give feedback<br><br>
📌 TIH offers <strong>free application feedback</strong>. Contact us today!`,
      qr:['📞 Get Application Feedback','🎓 Other Scholarships','📚 Improve IELTS Score','🔙 Main Menu'] },

    { id:'cost_living',
      keywords:['cost of living','living cost','expenses in india','money needed','cost india','afford india','monthly expenses','india expensive','stipend enough','how much stipend'],
      reply:`💵 <strong>Cost of Living in India (ICCR Scholars)</strong><br><br>
The ICCR scholarship includes a <strong>monthly stipend</strong> to cover living costs:<br><br>
• UG/PG: <strong>₹15,000–₹18,000/month</strong> (~$180–$215 USD)<br>
• PhD: <strong>₹18,000–₹20,000/month</strong><br><br>
The stipend covers food, local transport, and study materials. Hostel is provided separately by the university.<br><br>
💡 India is generally <strong>very affordable</strong> compared to Western countries.`,
      qr:['🏆 ICCR Full Details','📝 Apply ICCR Scholarship','🔙 Main Menu'] },

    { id:'can_apply',
      keywords:['can i apply','am i eligible','can liberian apply','do you accept','can i join','can i register','is it open','open to liberians','open for liberia','is liberia included','liberia eligible'],
      reply:`✅ <strong>Yes — Liberian Students Can Apply!</strong><br><br>
All TIH programs are designed to serve <strong>Liberian citizens</strong>:<br><br>
• 🏆 <strong>ICCR Scholarship</strong> — Liberian citizens age 18–50<br>
• 🇬🇧 <strong>Chevening (UK)</strong> — Liberian citizens, 2+ years work experience<br>
• 🇺🇸 <strong>Fulbright (USA)</strong> — Liberian citizens residing in Liberia<br>
• 🌍 <strong>Mastercard Foundation</strong> — African citizens (Liberia ✓)<br>
• 📚 <strong>Free Classroom</strong> — <strong>Open to everyone, no restrictions!</strong><br>
• 🏥 <strong>Healthcare</strong> — Open to all Liberians<br>
• 💻 <strong>Software</strong> — Open to any individual or business`,
      qr:['📝 Apply for Scholarship','🏆 ICCR Scholarship','📚 Free Classroom','🔙 Main Menu'] },

    { id:'page_info',
      keywords:['what is on this page','what does this page','explain this page','what is this','what is here','tell me about this page','what can i find here','page content','this page','what page','summary of page'],
      reply:``,  // handled dynamically
      qr:[] },

    { id:'faq',
      keywords:['faq','frequently asked','common question','question and answer','general question','queries','popular question'],
      reply:`❓ <strong>Frequently Asked Questions</strong><br><br>
I can answer questions on:<br>
• How to apply for a scholarship<br>
• What documents are required<br>
• Is the IELTS/TOEFL classroom really free?<br>
• How much does a certificate cost?<br>
• How does the healthcare referral work?<br>
• What software services are offered?<br>
• Who founded TIH? Where is TIH located?<br><br>
Just type your question — or visit our <strong>FAQ page</strong> for full written answers.`,
      qr:['🌐 Go to FAQ Page','🎓 Scholarship','📚 Classroom','📞 Contact','🔙 Main Menu'] },

    { id:'apply_menu',
      keywords:['apply','application','i want to apply','start application','apply now','sign up','enroll','register','join','submit form','application form','apply here','chat apply'],
      reply:`📝 <strong>Apply with TIH</strong><br><br>
I can collect your application right here in this chat. Which program are you applying for?`,
      qr:['🎓 Scholarship / Study Abroad','🏥 Healthcare Request','💻 Software Consultation','📚 IELTS/TOEFL Classroom'] },

    { id:'thanks',
      keywords:['thank you','thanks','thank','appreciate','helpful','great','wonderful','awesome','nice','good job','excellent','perfect','amazing'],
      reply:`You're very welcome! 😊 Happy to help. Is there anything else I can assist you with?`,
      qr:['🎓 Scholarships','📚 Free Classroom','🏥 Healthcare','💻 Software','📝 Apply Now'] },

    { id:'fallback', keywords:[], reply:``, qr:[] }
  ];

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

  // ── MATCHING ──────────────────────────────────────────────────────────────────
  let _fallbackIdx = 0;
  const FALLBACK_MSGS = [
    u => `I don't have a specific answer for "<em>${esc(u)}</em>" in my knowledge base, but our team can help immediately:`,
    u => `Good question! For the most accurate answer on "<em>${esc(u)}</em>", please reach our team directly:`,
    u => `I want to make sure you get accurate information on "<em>${esc(u)}</em>". Here's how to reach someone who knows:`,
    u => `That's outside my current knowledge. For "<em>${esc(u)}</em>", contact us here:`,
    u => `Let me connect you with a real answer for "<em>${esc(u)}</em>":`,
  ];

  function normalize(raw) {
    return raw.toLowerCase()
      .replace(/scholarshp|scholarsip|schlarship/g,'scholarship')
      .replace(/helthcare|helth\b/g,'health')
      .replace(/softwar[^e]/g,'software ')
      .replace(/clasroom|classrom/g,'classroom')
      .replace(/liberria|libera\b/g,'liberia')
      .replace(/applic[ae]tion/g,'application')
      .replace(/univers[ia]ty/g,'university')
      .replace(/toelf|tefl\b/g,'toefl')
      .replace(/ielts?/g,'ielts')
      .replace(/watsapp|whatsaap/g,'whatsapp')
      .replace(/donat[ei]/g,'donate');
  }

  function findBestMatch(text) {
    const t = normalize(text);
    const words = t.split(/[\s,?!.;:'"()\[\]]+/).filter(w => w.length > 2);
    let best = { score:0, entry:null };

    for (const entry of KB) {
      if (!entry.keywords.length) continue;
      let score = 0;
      for (const kw of entry.keywords) {
        if (t.includes(kw)) score += kw.split(' ').length * 3;
      }
      for (const w of words) {
        for (const kw of entry.keywords) {
          const kwFirst = kw.split(' ')[0];
          if (kw.includes(w) && w.length >= 4) score += 1;
          if (w.includes(kwFirst) && kwFirst.length >= 4) score += 1;
        }
      }
      if (score > best.score) best = { score, entry };
    }

    if (best.score >= 4) return { confidence:'high',   entry:best.entry };
    if (best.score >= 1) return { confidence:'medium', entry:best.entry };
    return                       { confidence:'low',    entry:KB[KB.length-1] };
  }

  function smartFallback(userText) {
    const pageHits = searchPage(userText);
    let msg = FALLBACK_MSGS[_fallbackIdx % FALLBACK_MSGS.length](userText);
    _fallbackIdx++;
    if (pageHits.length) {
      msg = `Here's what I found on this page related to "<em>${esc(userText)}</em>":<br><br>` +
        pageHits.map(h => {
          const sec = h.section && h.section !== h.text ? `<strong>${esc(h.section)}:</strong> ` : '';
          return `• ${sec}${esc(h.text.slice(0,180))}${h.text.length>180?'…':''}`;
        }).join('<br><br>') + `<br><br>For more help, reach our team:`;
    }
    return msg + `<br><br>
💬 <strong>WhatsApp (fastest):</strong> <a href="https://wa.me/231880559227" target="_blank" style="color:#002868;font-weight:700;">+231 880 559 227</a><br>
📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com<br>
📞 <strong>Call:</strong> +231 778 956 979<br><br>
Or choose a topic below:`;
  }

  // ── DOM ───────────────────────────────────────────────────────────────────────
  const LOGO_URL = 'https://i.ibb.co/SXJKRq0S/Tolbert-Innovation-Logo.jpg';

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
  const esc   = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const scroll = () => { msgsEl.scrollTop = msgsEl.scrollHeight; };

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

    // Fall through — use knowledge base
    const { confidence, entry } = findBestMatch(label);
    type(Math.min(700 + label.length * 5, 1100), () => {
      if (confidence !== 'low' && entry.reply) {
        botMsg(entry.reply, entry.qr);
      } else {
        botMsg(smartFallback(label), ['🎓 Scholarships','📚 IELTS/TOEFL','🏥 Healthcare','💻 Software','💬 Talk to Human','📞 Contact Info']);
      }
    });
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

    // Check for "what is on this page" intent
    const tLow = text.toLowerCase();
    const isPageQuery = tLow.includes('this page') || tLow.includes('on this page') || tLow.includes('what is here') ||
      tLow.includes('explain this') || tLow.includes('what will i learn') || tLow.includes('what does this') ||
      tLow.includes('what is this about') || tLow.includes('summarize') || tLow.includes('what topic') ||
      tLow.includes('what subject') || tLow.includes('what cover') || tLow.includes('overview of this');
    if (isPageQuery) {
      const overview = buildPageOverview();
      if (overview.length) {
        type(700, () => {
          const lines = overview.map(s => {
            const bullets = s.bullets.length
              ? `<br><span style="font-size:.82rem;color:#475569;padding-left:12px;">↳ ${s.bullets.map(b => esc(b.slice(0,100))).join('<br>↳ ')}</span>`
              : '';
            return `<strong>${esc(s.heading)}</strong>${bullets}`;
          }).join('<br><br>');
          botMsg(`📄 <strong>Here's what this page covers:</strong><br><br>${lines}<br><br>Ask me anything about any of these topics!`, getPageCtx().qr);
        });
        return;
      }
    }

    const { confidence, entry } = findBestMatch(text);
    const delay = Math.min(600 + text.length * 10, 1400);

    type(delay, () => {
      if (confidence === 'high' && entry.reply) {
        botMsg(entry.reply, entry.qr);
      } else if (confidence === 'medium' && entry.reply) {
        const note = `<span style="font-size:.78rem;color:#64748b;display:block;margin-top:8px;border-top:1px solid #e2e8f0;padding-top:6px;">💡 Not exactly what you needed? <a href="https://wa.me/231880559227" target="_blank" style="color:#002868;font-weight:700;">WhatsApp us</a> for a precise answer.</span>`;
        const qrs = [...(entry.qr || [])];
        if (!qrs.includes('💬 Talk to Human')) qrs.push('💬 Talk to Human');
        botMsg(entry.reply + note, qrs);
      } else {
        // Try page content as last resort
        const hits = searchPage(text);
        if (hits.length) {
          const pageAnswer = hits.map(h => {
            const sec = h.section && h.section !== h.text ? `<strong>${esc(h.section)}:</strong> ` : '';
            return `• ${sec}${esc(h.text.slice(0,200))}${h.text.length>200?'…':''}`;
          }).join('<br><br>');
          botMsg(`📄 <strong>From this page:</strong><br><br>${pageAnswer}` +
            `<br><br><span style="font-size:.78rem;color:#64748b;">Need more help? <a href="https://wa.me/231880559227" target="_blank" style="color:#002868;font-weight:700;">WhatsApp us</a></span>`,
            getPageCtx().qr);
        } else {
          botMsg(smartFallback(text), ['🎓 Scholarships','📚 IELTS/TOEFL','🏥 Healthcare','💻 Software','💬 Talk to Human','📞 Contact Info']);
        }
      }
    });
  }

  sendEl.addEventListener('click', send);
  inpEl.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

})();
