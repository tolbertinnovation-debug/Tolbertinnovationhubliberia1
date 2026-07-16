// Tolbert Innovation Hub, TIH Assistant v3.0
// Professional chatbot with page-context awareness & dynamic page learning
(function () {
  'use strict';

  // ── CSS ──────────────────────────────────────────────────────────────────────
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    #tih-chat-btn {
      position:fixed;bottom:1.5rem;left:1.5rem;z-index:950;
      width:60px;height:60px;border-radius:50%;
      background:linear-gradient(135deg,#1565d8 0%,#002868 100%);
      color:#fff;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 6px 22px rgba(21,101,216,0.45);
      transition:transform .2s,box-shadow .2s;padding:0;
    }
    #tih-chat-btn::before{content:'';position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 0 rgba(21,101,216,.45);animation:tih-ring 2.8s ease-out infinite;}
    @keyframes tih-ring{0%{box-shadow:0 0 0 0 rgba(21,101,216,.4)}70%,100%{box-shadow:0 0 0 14px rgba(21,101,216,0)}}
    #tih-chat-btn:hover{transform:scale(1.1);box-shadow:0 8px 30px rgba(21,101,216,0.6);}
    #tih-chat-btn svg{width:27px;height:27px;fill:#fff;position:relative;}
    #tih-chat-badge{
      position:absolute;top:-2px;right:-2px;
      width:20px;height:20px;background:#E31E24;
      border-radius:50%;border:2px solid #fff;
      font-size:.65rem;font-weight:800;color:#fff;
      display:flex;align-items:center;justify-content:center;
      animation:tih-pulse 2.4s infinite;
    }
    @keyframes tih-pulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(227,30,36,.5)}60%{transform:scale(1.12);box-shadow:0 0 0 6px rgba(227,30,36,0)}}
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
      background:linear-gradient(135deg,#0B1F3A 0%,#002868 52%,#1565d8 100%);
      color:#fff;padding:13px 14px 12px;
      display:flex;align-items:center;gap:10px;flex-shrink:0;
      border-bottom:3px solid #E31E24;
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
    .user .tih-bub{background:linear-gradient(135deg,#1565d8,#002868);color:#fff;border-bottom-right-radius:4px;}
    .tih-ts{font-size:.66rem;color:#94a3b8;margin-top:2px;padding:0 4px;align-self:flex-end;}
    .tih-qrs{
      display:flex;flex-wrap:wrap;gap:5px;
      padding:3px 6px 6px 47px;align-self:flex-start;max-width:100%;
    }
    .tih-qr{
      background:#fff;border:1.5px solid #1565d8;color:#1565d8;
      font-size:.76rem;font-weight:600;padding:5px 12px;
      border-radius:20px;cursor:pointer;white-space:nowrap;
      font-family:inherit;transition:all .14s;
      box-shadow:0 1px 3px rgba(21,101,216,.12);
    }
    .tih-qr:hover{background:#1565d8;color:#fff;transform:translateY(-1px);box-shadow:0 3px 10px rgba(21,101,216,.3);}
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
      background:linear-gradient(135deg,#1565d8,#002868);color:#fff;
      font-size:.92rem;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      transition:transform .15s,box-shadow .15s;
      box-shadow:0 2px 8px rgba(21,101,216,.35);
    }
    .tih-send:hover{transform:scale(1.08);box-shadow:0 4px 14px rgba(21,101,216,.45);}
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
    /* Proactive greeting bubble */
    #tih-greet{
      position:fixed;bottom:5.6rem;left:1.5rem;z-index:949;max-width:236px;
      background:#fff;color:#0b1f3a;border-radius:16px;border-bottom-left-radius:5px;
      padding:12px 30px 12px 14px;box-shadow:0 14px 36px rgba(11,31,58,.24);
      border:1px solid #e6e9f2;font-family:'Inter','Segoe UI',sans-serif;
      font-size:.82rem;line-height:1.5;cursor:pointer;
      opacity:0;transform:translateY(10px) scale(.96);pointer-events:none;
      transition:opacity .3s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.4,0,.2,1);
    }
    #tih-greet.show{opacity:1;transform:none;pointer-events:all;}
    #tih-greet strong{color:#E31E24;}
    #tih-greet::after{content:'';position:absolute;bottom:-7px;left:22px;width:13px;height:13px;
      background:#fff;border-right:1px solid #e6e9f2;border-bottom:1px solid #e6e9f2;transform:rotate(45deg);}
    #tih-greet-close{position:absolute;top:6px;right:7px;border:none;background:none;color:#94a3b8;
      font-size:.85rem;line-height:1;cursor:pointer;padding:2px 4px;border-radius:6px;}
    #tih-greet-close:hover{background:#f1f5f9;color:#475569;}
    @media(max-width:420px){#tih-greet{max-width:calc(100vw - 6rem);}}
  `;
  // v4 additions: voice input, language switch, streaming, source chips, RTL
  styleEl.textContent += `
    #tih-mic{width:40px;height:40px;border-radius:50%;border:1.5px solid #e2e8f0;flex-shrink:0;
      background:#f8fafc;cursor:pointer;display:flex;align-items:center;justify-content:center;
      transition:all .15s;padding:0;}
    #tih-mic:hover{border-color:#1565d8;background:#eff6ff;}
    #tih-mic svg{width:18px;height:18px;fill:#002868;}
    #tih-mic.on{background:#E31E24;border-color:#E31E24;animation:tih-mic-pulse 1.2s infinite;}
    #tih-mic.on svg{fill:#fff;}
    @keyframes tih-mic-pulse{0%,100%{box-shadow:0 0 0 0 rgba(227,30,36,.4)}60%{box-shadow:0 0 0 8px rgba(227,30,36,0)}}
    #tih-lang-btn{font-size:.72rem;font-weight:700;letter-spacing:.02em;white-space:nowrap;}
    .tih-src{display:inline-flex;align-items:center;gap:4px;background:#eff6ff;border:1px solid #bfdbfe;
      color:#002868;font-size:.76rem;font-weight:600;padding:4px 10px;border-radius:20px;
      text-decoration:none;margin:3px 4px 0 0;}
    .tih-src:hover{background:#dbeafe;}
    .tih-stream::after{content:'▍';color:#1565d8;animation:tih-blink .8s infinite;}
    @keyframes tih-blink{50%{opacity:0}}
    #tih-chat-win[dir="rtl"] .tih-qrs{padding:3px 47px 6px 6px;}
    #tih-chat-win[dir="rtl"] .tih-inp{text-align:right;}
    #tih-chat-win[dir="rtl"] .tih-prog{padding:0 47px 2px 0;}
    /* When the chat is open, tuck the floating WhatsApp + welcome-audio buttons
       out of the way so they never cover the chat input, they return on close. */
    body.tih-chat-open .whatsapp-float,
    body.tih-chat-open .tih-audio-ctl{
      opacity:0 !important;visibility:hidden !important;pointer-events:none !important;
      transform:translateY(12px);transition:opacity .2s ease, transform .2s ease, visibility .2s ease;
    }
  `;
  document.head.appendChild(styleEl);

  // ── PAGE CONTEXT ─────────────────────────────────────────────────────────────
  const PAGE_MAP = [
    { match:'learning-hub', label:'IELTS Module 1, Orientation',
      qr:['📚 What\'s in Module 1','💡 IELTS Study Tips','🏅 Get Certificate','🎓 Scholarship Help','📞 Contact'] },
    { match:'learning-hub', label:'IELTS Module 2, Reading',
      qr:['📖 Reading Strategies','💡 Skimming Tips','🏅 Get Certificate','🎓 Scholarship Help','📞 Contact'] },
    { match:'learning-hub', label:'IELTS Module 3, Writing',
      qr:['✍️ Writing Task 1 vs 2','💡 Band 7+ Tips','🏅 Get Certificate','🎓 Scholarship','📞 Contact'] },
    { match:'learning-hub', label:'IELTS Module 4, Listening',
      qr:['🎧 Listening Tips','💡 Note-Taking','🏅 Get Certificate','🎓 Scholarship','📞 Contact'] },
    { match:'learning-hub', label:'IELTS Module 5, Speaking',
      qr:['🗣️ Speaking Tips','💡 Fluency Advice','🏅 Get Certificate','🎓 Scholarship','📞 Contact'] },
    { match:'learning-hub', label:'IELTS Module 6, Mock Exam',
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
      qr:['🎓 India & Cyprus 50%','🇬🇧 Chevening','🇺🇸 Fulbright','🇩🇪 DAAD','📝 Apply Now'] },
    { match:'study-abroad', label:'Study Abroad',
      qr:['🎓 How to Apply','📋 Requirements','🎓 India & Cyprus 50%','📝 Apply Now','📞 Contact'] },
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
      qr:['💻 Website & Software','🎓 50% Scholarship','📚 Learning Hub','🏥 Healthcare','📝 Apply Now'] },
  ];

  function getPageCtx() {
    const path = window.location.pathname.toLowerCase();
    const href = path.split('/').pop() || 'index';
    for (const p of PAGE_MAP) {
      if (href.includes(p.match)) return p;
    }
    return { label:'Tolbert Innovation Hub', qr:['💻 Website & Software','🎓 50% Scholarship','📚 Learning Hub','🏥 Healthcare','📝 Apply Now','📞 Contact'] };
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
I'm the TIH Assistant, here to help you explore programs, scholarships, free IELTS/TOEFL prep, healthcare referrals, software services, and more.<br><br>
What would you like to do today?`,
      qr:['🎓 Browse Programs','🏆 Fully Funded Scholarships','📚 Free Learning Hub','🏥 Healthcare','💻 Software','📞 Contact'] },

    { id:'about_tih',
      keywords:['what is tih','what is tolbert','about tolbert','tell me about','what does tih do','who is tolbert innovation','organization','ngo','nonprofit','what you do','what do you offer','what programs','overview','mission'],
      reply:`🏛️ <strong>About Tolbert Innovation Hub (TIH)</strong><br><br>
TIH is a Liberian organization founded by <strong>Mr. Samuel S. Tolbert</strong>, inspired by the legacy of <strong>President William R. Tolbert</strong>, that empowers youth through five pillars:<br><br>
🎓 <strong>Scholarship & Study Abroad</strong>, guidance, document prep &amp; admission support<br>
🏥 <strong>Healthcare Referral Program</strong>, specialist referrals to India &amp; beyond<br>
💻 <strong>Software &amp; Digital Innovation</strong>, websites, apps, business systems<br>
📚 <strong>Free IELTS/TOEFL Classroom</strong>, 6-module courses, 100% free<br>
🌟 <strong>Empowerment Training</strong>, for youth, students, business owners &amp; innovators<br><br>
📍 Based in Monrovia, Liberia · 📞 +231 880 559 227`,
      qr:['🎓 Scholarships','🏥 Healthcare','💻 Software','📚 Free Learning Hub','🌟 Empowerment Training','📞 Contact'] },

    { id:'founder',
      keywords:['founder','founded','samuel','tolbert','samuel tolbert','who started','who created','ceo','chief executive','leadership','who runs','who is in charge','mr tolbert','mr samuel'],
      reply:`👤 <strong>Our Founder, Mr. Samuel S. Tolbert</strong><br><br>
Tolbert Innovation Hub was founded by <strong>Mr. Samuel S. Tolbert</strong>, who serves as CEO. He built TIH with a mission to bridge the gap between Liberian talent and global opportunity.<br><br>
Under his leadership, TIH has:<br>
• Supported <strong>500+</strong> students with scholarship guidance<br>
• Coordinated healthcare referrals to specialist hospitals in India<br>
• Delivered digital solutions to Liberian businesses<br>
• Built a completely free IELTS/TOEFL classroom for all students`,
      qr:['📄 Leadership Page','👥 Meet the Team','📞 Contact Us','🔙 Main Menu'] },

    { id:'team',
      keywords:['team','staff','employees','members','who works','eliza','jerbo','director of programs','angeline','wilah','educational referral','joseph','smith','software','technology lead','esther','alieu','christlove','feature cartee','precelia','administrative','officer','manager','who is on'],
      reply:`👥 <strong>The TIH Team</strong><br><br>
• <strong>Mr. Samuel S. Tolbert</strong>, Founder &amp; CEO<br>
• <strong>Eliza V. Jerbo</strong>, Director of Programs<br>
• <strong>Angeline Wilah</strong>, Educational Referral Manager<br>
• <strong>Joseph Smith</strong>, Head of Software &amp; Innovation<br>
• <strong>Esther Boakai</strong>, Chief Administrative Officer<br>
• <strong>Alieu Saysay</strong>, General Manager<br>
• <strong>Christlove P. Jaye</strong>, Financial Officer<br>
• <strong>Feature A. Cartee</strong>, Administrative Assistant<br>
• <strong>Precelia Jallah</strong>, Media &amp; Communications Officer`,
      qr:['👥 View Full Team Page','👤 Our Founder','📞 Contact','🔙 Main Menu'] },

    { id:'scholarship',
      keywords:['scholarship','study abroad','international school','university abroad','admission','study overseas','apply school','foreign university','higher education','bachelor','master','phd','postgraduate','undergraduate','degree','academic','enroll','university'],
      reply:`🎓 <strong>TIH Study Abroad Program</strong><br><br>
Tolbert Innovation Hub helps Liberian students study at top universities in <strong>India &amp; North Cyprus</strong>, with a <strong>50% tuition scholarship</strong> on every admission.<br><br>
<div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:12px 14px;margin:6px 0;">
🏷️ <strong>50% Scholarship Promotion, India Universities</strong><br>
With our partner universities in India you get:<br>
• <strong>50% scholarship on tuition</strong><br>
• <strong>Free accommodation</strong> (selected universities)<br>
• <strong>Feeding &amp; medical insurance</strong><br>
• <strong>US$300 support toward your flight ticket</strong><br>
• Tuition after the 50% scholarship is <strong>US$1,500–US$3,000 per year</strong><br>
• All tuition and other fees are paid <strong>directly to the university</strong>
</div><br>
🇮🇳 <strong>India</strong>, 15 universities · UG, PG &amp; PhD · $1,500–$3,000/yr after 50% scholarship<br>
🇨🇾 <strong>North Cyprus</strong>, 5 universities · English-medium<br><br>
✅ <strong>Everything TIH does FREE:</strong><br>
• University selection &amp; shortlisting<br>
• Application &amp; document review<br>
• Offer letter processing<br>
• Visa guidance &amp; pre-departure support<br><br>
👇 <strong>Where would you like to study?</strong>`,
      qr:['🎓 Browse Programs','🇮🇳 Study in India','🇨🇾 Study in Cyprus','📋 Required Documents','📞 Apply Now, Free'] },

    // ── STEP-BY-STEP PROGRAM SELECTION FLOW ──────────────────────────────────

    { id:'explore_programs',
      keywords:['programs','courses','fields','what programs','what courses','what can i study','available programs','list programs','show programs','study options','program list','courses available','study what','what to study','fields of study','discipline','browse programs','explore programs'],
      reply:`🎓 <strong>Step 1 of 3, Choose Your Destination</strong><br><br>
TIH partners with <strong>20 universities</strong> in India and Cyprus.<br>
Where would you like to study?<br><br>
🇮🇳 <strong>India</strong>, 15 universities · from <strong>$900/yr</strong> (after TIH 50% scholarship)<br>
🇨🇾 <strong>Cyprus</strong>, 5 universities · European standard · Mediterranean lifestyle<br>
🌍 <strong>Both</strong>, explore all destinations`,
      qr:['🇮🇳 Study in India','🇨🇾 Study in Cyprus','🌍 Show All Universities','📞 Talk to an Advisor'] },

    { id:'programs_india',
      keywords:['india programs','study india','india field','india courses','programs in india','study in india','what study india'],
      reply:`🇮🇳 <strong>Step 2 of 3, Choose Your Field (India)</strong><br><br>
15 partner universities in India. Select your field of study:<br><br>
🏥 Medicine &amp; Health Sciences<br>
⚙️ Engineering &amp; Technology<br>
💼 Business &amp; Management<br>
⚖️ Law &amp; Social Sciences<br>
💻 Computer Science &amp; IT<br>
🏗️ Architecture &amp; Design<br>
💊 Nursing &amp; Pharmacy<br>
🌾 Agriculture &amp; Environment<br>
📖 Education &amp; Humanities`,
      qr:['🏥 Medicine','⚙️ Engineering','💼 Business','⚖️ Law','💻 Computer Science','💊 Nursing & Pharmacy','🌾 Agriculture','📖 Education'] },

    { id:'programs_cyprus',
      keywords:['cyprus programs','study cyprus','cyprus field','cyprus courses','programs in cyprus','study in cyprus','what study cyprus'],
      reply:`🇨🇾 <strong>Step 2 of 3, Choose Your Field (Cyprus)</strong><br><br>
5 partner universities in North Cyprus. Select your field of study:<br><br>
⚙️ Engineering &amp; Technology<br>
💼 Business &amp; Management<br>
⚖️ Law &amp; Social Sciences<br>
💻 Computer Science &amp; IT<br>
🏗️ Architecture &amp; Design<br>
🏨 Hospitality &amp; Tourism<br>
🏥 Health Sciences<br>
📖 Education &amp; Humanities`,
      qr:['⚙️ Engineering','💼 Business','⚖️ Law','💻 Computer Science','🏗️ Architecture','🏨 Hospitality','🏥 Health Sciences','📖 Education'] },

    { id:'field_medicine',
      keywords:['medicine','medical','mbbs','doctor','health sciences','study medicine','medical school','faculty of medicine','dentistry','dental','bds'],
      reply:`🏥 <strong>Step 3 of 3, Medicine &amp; Health Sciences</strong><br><br>
<strong>Programs Available:</strong><br>
• MBBS, Bachelor of Medicine &amp; Surgery (6 years)<br>
• BDS, Bachelor of Dental Surgery (5 years)<br>
• B.Sc / M.Sc Medicine / Biomedical Sciences<br>
• Master's in Public Health (MPH)<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>Sharda University</strong> (NAAC A+), from <s>$3,500</s> → <strong>$1,750/yr</strong><br>
• <strong>SOA University</strong> (NAAC A+), from <s>$5,500</s> → <strong>$2,750/yr</strong><br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>Near East University (NEU)</strong>, Full Faculty of Medicine &amp; Pharmacy<br>
• <strong>Cyprus International University (CIU)</strong>, Health Sciences<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_engineering',
      keywords:['engineering','engineer','civil engineering','mechanical engineering','electrical engineering','software engineering','chemical engineering','structural','environmental engineering'],
      reply:`⚙️ <strong>Step 3 of 3, Engineering &amp; Technology</strong><br><br>
<strong>Programs Available:</strong><br>
• B.Tech / M.Tech Civil Engineering<br>
• B.Tech / M.Tech Mechanical Engineering<br>
• B.Tech / M.Tech Electrical &amp; Electronics<br>
• B.Tech / M.Tech Computer Engineering<br>
• B.Tech Environmental / Chemical Engineering<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>LPU</strong> (NAAC A++), from <s>$2,800</s> → <strong>$1,400/yr</strong><br>
• <strong>Graphic Era University</strong> (NAAC A+), from <s>$2,500</s> → <strong>$1,250/yr</strong><br>
• <strong>Marwadi University</strong> (NAAC A), from <s>$2,000</s> → <strong>$1,000/yr</strong><br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>EMU</strong>, Engineering, Civil, Computer, Electrical<br>
• <strong>NEU</strong>, 200+ programs incl. all Engineering branches<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_business',
      keywords:['business','management','mba','bba','finance','marketing','accounting','economics','entrepreneurship','international business','human resources'],
      reply:`💼 <strong>Step 3 of 3, Business &amp; Management</strong><br><br>
<strong>Programs Available:</strong><br>
• BBA, Bachelor of Business Administration<br>
• B.Com / B.Sc Finance &amp; Accounting<br>
• MBA, Master of Business Administration<br>
• M.Sc International Business / Marketing<br>
• B.Sc / M.Sc Economics<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>Amity University</strong> (NAAC A+), from <s>$4,000</s> → <strong>$2,000/yr</strong><br>
• <strong>LPU</strong> (NAAC A++), from <s>$2,800</s> → <strong>$1,400/yr</strong><br>
• <strong>Sharda University</strong> (NAAC A+), from <s>$3,500</s> → <strong>$1,750/yr</strong><br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>GAU</strong>, American-style Business, Kyrenia<br>
• <strong>NEU / CIU / EMU</strong>, Business &amp; Economics, Nicosia/Famagusta<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_law',
      keywords:['law','legal','llb','llm','lawyer','attorney','legal studies','international law','commercial law','human rights law'],
      reply:`⚖️ <strong>Step 3 of 3, Law &amp; Social Sciences</strong><br><br>
<strong>Programs Available:</strong><br>
• LLB, Bachelor of Laws (3–5 years)<br>
• LLM, Master of Laws<br>
• BA / MA International Relations<br>
• BA / MA Political Science<br>
• MA Human Rights &amp; International Law<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>Sharda University</strong> (NAAC A+), from <s>$3,500</s> → <strong>$1,750/yr</strong><br>
• <strong>SOA University</strong> (NAAC A+), from <s>$5,500</s> → <strong>$2,750/yr</strong><br>
• <strong>MATS University</strong>, LLB specialist, from <s>$1,500</s> → <strong>$750/yr</strong><br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>NEU</strong>, International Law, Commercial Law<br>
• <strong>CIU / EMU</strong>, Law, English medium<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_cs',
      keywords:['computer science','information technology','it','software development','cybersecurity','data science','artificial intelligence','ai','programming','coding','software'],
      reply:`💻 <strong>Step 3 of 3, Computer Science &amp; IT</strong><br><br>
<strong>Programs Available:</strong><br>
• B.Sc / M.Sc Computer Science<br>
• B.Sc / M.Sc Information Technology<br>
• B.Sc / M.Sc Cybersecurity<br>
• B.Sc / M.Sc Data Science &amp; AI<br>
• B.Sc Software Engineering<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>LPU</strong> (NAAC A++), from <s>$2,800</s> → <strong>$1,400/yr</strong><br>
• <strong>Graphic Era University</strong> (NAAC A+), from <s>$2,500</s> → <strong>$1,250/yr</strong><br>
• <strong>Amity University</strong> (NAAC A+), from <s>$4,000</s> → <strong>$2,000/yr</strong><br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>EMU</strong>, Computer Science, Software Engineering, Cybersecurity<br>
• <strong>NEU / CIU</strong>, IT &amp; Computer Science, Nicosia<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_architecture',
      keywords:['architecture','interior design','urban planning','fine arts','design','building','construction design'],
      reply:`🏗️ <strong>Step 3 of 3, Architecture &amp; Design</strong><br><br>
<strong>Programs Available:</strong><br>
• B.Arch / M.Arch Architecture (5 years UG)<br>
• B.Sc / M.Sc Interior Design<br>
• B.Sc Urban &amp; Regional Planning<br>
• BA Fine Arts &amp; Graphic Design<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>LPU</strong> (NAAC A++), B.Arch from <s>$2,800</s> → <strong>$1,400/yr</strong><br>
• <strong>Amity University</strong> (NAAC A+), Architecture &amp; Design<br>
• <strong>Marwadi University</strong> (NAAC A), Architecture programs<br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>NEU</strong>, Architecture, Interior Design, Fine Arts<br>
• <strong>EMU</strong>, Architecture &amp; Urban Planning<br>
• <strong>GAU</strong>, Architecture &amp; Interior Architecture<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_nursing',
      keywords:['nursing','pharmacy','pharmacist','nurse','bsc nursing','b pharm','pharmd','physiotherapy','medical lab','dietetics','nutrition'],
      reply:`💊 <strong>Step 3 of 3, Nursing &amp; Pharmacy</strong><br><br>
<strong>Programs Available:</strong><br>
• B.Sc / M.Sc Nursing (3–4 years)<br>
• B.Pharm / M.Pharm, Bachelor/Master of Pharmacy<br>
• Pharm.D, Doctor of Pharmacy (6 years)<br>
• B.Sc Physiotherapy<br>
• B.Sc Medical Lab Technology<br>
• B.Sc Nutrition &amp; Dietetics<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>Desh Bhagat University</strong>, Nursing specialist, from <s>$1,800</s> → <strong>$900/yr</strong><br>
• <strong>SOA University</strong> (NAAC A+), Pharmacy &amp; Nursing<br>
• <strong>PP Savani University</strong>, Nursing &amp; Health Sciences<br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>NEU</strong>, Full Faculty of Pharmacy + Nursing<br>
• <strong>CIU / EMU</strong>, Health Sciences programs<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_agriculture',
      keywords:['agriculture','agronomy','farming','agribusiness','food science','food technology','agricultural science','horticulture','forestry'],
      reply:`🌾 <strong>Step 3 of 3, Agriculture &amp; Environment</strong><br><br>
<strong>Programs Available:</strong><br>
• B.Sc / M.Sc Agriculture<br>
• B.Sc Agribusiness Management<br>
• B.Sc Food Science &amp; Technology<br>
• B.Sc Horticulture<br>
• B.Sc Environmental Science<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>Desh Bhagat University</strong>, Agriculture specialist, from <s>$1,800</s> → <strong>$900/yr</strong><br>
• <strong>MATS University</strong>, Agriculture &amp; Science, from <s>$1,500</s> → <strong>$750/yr</strong><br>
• <strong>Khalsa University</strong>, Agriculture &amp; Sciences, from <s>$1,800</s> → <strong>$900/yr</strong><br><br>
💡 India is one of the world's leading countries in agricultural research and education, ideal for Liberian students in this field.<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_education',
      keywords:['education','teaching','teacher','primary education','educational studies','humanities','arts','social science','counselling','guidance','english teaching'],
      reply:`📖 <strong>Step 3 of 3, Education &amp; Humanities</strong><br><br>
<strong>Programs Available:</strong><br>
• B.Ed / M.Ed, Bachelor/Master of Education<br>
• B.A / M.A English Language Teaching (ELT)<br>
• B.Sc / M.Sc Guidance &amp; Counselling<br>
• B.A / M.A Social Sciences<br>
• B.A / M.A Journalism &amp; Mass Communication<br><br>
<strong>🇮🇳 Top India Universities:</strong><br>
• <strong>Royal Global University</strong>, Education &amp; Humanities<br>
• <strong>LPU</strong> (NAAC A++), BA/MA &amp; Education programs<br>
• <strong>Amity University</strong> (NAAC A+), Media, Communication &amp; Education<br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>NEU</strong>, Primary Education, English Language Teaching<br>
• <strong>EMU</strong>, Education Faculty, Guidance &amp; Counselling<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'field_hospitality',
      keywords:['hospitality','hotel management','tourism','travel','gastronomy','event management','hotel','resort','culinary'],
      reply:`🏨 <strong>Step 3 of 3, Hospitality &amp; Tourism</strong><br><br>
<strong>Programs Available:</strong><br>
• B.Sc Hotel Management<br>
• B.Sc Tourism &amp; Travel Management<br>
• B.Sc Gastronomy &amp; Culinary Arts<br>
• MBA Hospitality Management<br>
• B.Sc Event Management<br><br>
<strong>🇨🇾 Top Cyprus Universities:</strong><br>
• <strong>GAU</strong>, Hotel Management, Tourism, Gastronomy, Kyrenia seafront campus<br>
• <strong>CWU</strong>, Specialised Hospitality School, Famagusta<br>
• <strong>NEU / EMU</strong>, Tourism programs, Nicosia &amp; Famagusta<br><br>
<strong>🇮🇳 India:</strong><br>
• <strong>LPU</strong>, Hotel Management &amp; Tourism<br><br>
💡 Cyprus is one of the Mediterranean's top tourism destinations, ideal for hospitality careers.<br><br>
📅 Deadline: <strong>July 15, 2026</strong>`,
      qr:['📝 Apply Now','📋 Documents Needed','🏛️ View Universities','🔙 Choose Another Field'] },

    { id:'choose_another_field',
      keywords:['another field','other field','different program','other program','change field','back to fields','other course'],
      reply:`🔄 <strong>Choose a Different Field</strong><br><br>
No problem! Select another area of study below:`,
      qr:['🏥 Medicine','⚙️ Engineering','💼 Business','⚖️ Law','💻 Computer Science','💊 Nursing & Pharmacy','🏗️ Architecture','🌾 Agriculture','🏨 Hospitality','📖 Education'] },

    { id:'requirements',
      keywords:['requirements','documents','eligible','eligibility','qualify','who can apply','criteria','passport','transcript','certificate','reference letter','personal statement','photo','what do i need','what is needed','can i apply','do i qualify'],
      reply:`📋 <strong>Required Documents</strong><br><br>
<strong>Undergraduate (must be authorised):</strong><br>
• High School Diploma<br>
• High School Transcript<br>
• High School WAEC / WASSCE<br>
• High School Letter of Recommendation<br>
• Passport (valid for at least 2 years)<br>
• Passport-size photo (white background)<br>
• Notarized Affidavit of Support / Bank Statement<br><br>
<strong>Graduate (all must be authorised):</strong><br>
• College Degree / Diploma<br>
• College Transcript<br>
• College Letter of Recommendation<br>
• Passport (valid for at least 2 years)<br>
• Passport-size photo (white background)<br>
• Updated CV`,
      qr:['📝 Apply Now','📞 Get Help','🔙 Main Menu'] },

    { id:'apply_process',
      keywords:['how to apply','application process','steps to apply','how do i apply','apply online','submit application','what are the steps','how long does it take','application procedure','how to register','enrollment process','apply for'],
      reply:`📝 <strong>How to Apply, Step by Step</strong><br><br>
<strong>Step 1:</strong> Check your eligibility (age, education, nationality)<br>
<strong>Step 2:</strong> Prepare documents (transcripts, ID, personal statement, references)<br>
<strong>Step 3:</strong> Prepare your IELTS/TOEFL score, use our <em>free classroom</em><br>
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
🆓 <strong>100% free</strong>, no signup required.<br>
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
🆓 <strong>100% free</strong>, access instantly, no account needed.<br>
🏅 Complete Module 6 to request your <strong>Certificate of Completion</strong> ($5 fee).`,
      qr:['📖 Go to TOEFL Classroom','🏅 Request TOEFL Certificate','📖 IELTS Classroom','🔙 Main Menu'] },

    { id:'ielts_tips',
      keywords:['ielts tip','study tip','how to pass ielts','improve ielts','ielts strategy','band 7','band 8','ielts trick','ace ielts','how to score','improve score','reading tip','writing tip','listening tip','speaking tip'],
      reply:`💡 <strong>IELTS Study Tips from TIH</strong><br><br>
📖 <strong>Reading:</strong> Practice skimming &amp; scanning. Don't read every word, locate keywords fast.<br><br>
✍️ <strong>Writing:</strong> Task 1, describe data clearly. Task 2, structure with intro, 2 body paragraphs, conclusion. Aim for 250+ words.<br><br>
🎧 <strong>Listening:</strong> Read questions before audio plays. Write answers exactly as you hear them.<br><br>
🗣️ <strong>Speaking:</strong> Speak fluently, don't pause excessively. Use a range of vocabulary. It's OK to self-correct.<br><br>
⏱️ <strong>General:</strong> Take a full mock exam weekly. Review every mistake.`,
      qr:['📖 IELTS Module 2, Reading','✍️ IELTS Module 3, Writing','🎧 IELTS Module 4, Listening','🗣️ IELTS Module 5, Speaking','🔙 Main Menu'] },

    { id:'classroom',
      keywords:['classroom','free class','free course','online learning','study platform','modules','lesson','practice test','mock exam','exam preparation','english exam','exam prep','language test','free training','online course'],
      reply:`🏫 <strong>TIH Free Learning Hub</strong><br><br>
We offer two completely free exam preparation tracks:<br><br>
📗 <strong>IELTS Preparation</strong>, 6 modules covering all 4 skills + mock exam<br>
📘 <strong>TOEFL Preparation</strong>, 6 modules covering Reading, Listening, Speaking, Writing + mock exam<br><br>
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
🎉 <strong>EVERY website package includes FREE:</strong><br>
• <strong>1-Year Domain</strong> (your own .com or .org)<br>
• <strong>Hosting</strong> &amp; <strong>Unlimited User Traffic</strong><br>
• <strong>Listed on all Search Engines</strong> (SEO)<br>
• <strong>Top Security Protection</strong> (SSL &amp; firewall)<br>
• <strong>Unlimited Professional Email</strong> (you@yourbusiness.com)<br>
• <strong>Management Training</strong> so you can run it yourself<br><br>
📦 <strong>🔥 Limited-Time Promotion, 70% OFF:</strong><br>
• <strong>Business Starter, <s>$500</s> $150</strong>, professional business website<br>
• <strong>Business Growth, <s>$670</s> $200</strong>, adds online learning platform, business management, e-commerce &amp; payment integration<br>
• <strong>Complete Digital, <s>$1,000</s> $300</strong>, adds database website, API integration &amp; mobile app development<br><br>
All one-time prices, no monthly fees. Flexible payment plans available.`,
      qr:['📝 Request Consultation','💰 View Full Pricing','🗂️ View Portfolio','🔙 Main Menu'] },

    { id:'pricing',
      keywords:['price','pricing','cost','fee','how much','payment','pay','charge','rate','package','affordable','expensive','free','discount','budget','amount','money','website price','website cost','hosting','domain','email'],
      reply:`💰 <strong>TIH Fees &amp; Pricing</strong><br><br>
<strong>Education:</strong><br>
• Scholarship guidance, <strong>Free</strong><br>
• IELTS/TOEFL classroom, <strong>100% Free</strong><br>
• Completion certificate, <strong>$5 USD</strong><br><br>
<strong>Website Development, 🔥 70% OFF Promotion:</strong><br>
• Business Starter, <s>$500</s> <strong>$150</strong>, professional website<br>
• Business Growth, <s>$670</s> <strong>$200</strong>, learning platform, business management, e-commerce &amp; payments<br>
• Complete Digital, <s>$1,000</s> <strong>$300</strong>, database, API integration &amp; mobile app<br>
🎁 EVERY package includes FREE: <strong>1-year domain · hosting · unlimited traffic · all search engines (SEO) · top security · unlimited professional email · management training</strong><br><br>
<strong>Healthcare:</strong><br>
• Program coordination, <strong>Free</strong> (you pay the hospital)<br><br>
<strong>Donation to TIH:</strong> From $5, any amount helps!`,
      qr:['💻 Website 70% OFF','🎓 Apply Free','❤️ Donate','📞 Contact','🔙 Main Menu'] },

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
• 🎓 <strong>Jul 15, 2026</strong>, Scholarship Application Deadline (India &amp; Cyprus 50%)<br>
• 📚 <strong>Ongoing</strong>, IELTS/TOEFL classroom open 24/7, no deadline<br>
• 🏥 <strong>Rolling</strong>, Healthcare referral applications open any time<br>
• 💻 <strong>Rolling</strong>, Software consultations available any time<br><br>
⚠️ Apply early, document preparation takes time!`,
      qr:['📝 Apply Before Deadline','🌐 View Events Page','🎓 India & Cyprus 50%','🔙 Main Menu'] },

    { id:'news',
      keywords:['news','announcement','update','latest','blog','press','article','new program','launch','expansion','what\'s new','recent'],
      reply:`📰 <strong>Latest News from TIH</strong><br><br>
• 🎓 <strong>2026 Scholarship Intake Now Open</strong>, updated requirements &amp; guidance sessions available<br>
• 🏅 <strong>IELTS Certificate System Launched</strong>, students can now request certificates online<br>
• 🏥 <strong>Healthcare Program Expanded</strong>, more pathways to specialist treatment in India<br>
• 💻 <strong>Tech Innovation Support</strong>, new digital consultation services for Liberian businesses<br><br>
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

    { id:'empowerment_training',
      keywords:['empowerment','training','empowerment training','youth training','student training','business training','innovator training','workshop training','leadership','skills training','capacity building','personal development','entrepreneurship training','tih training','youth empowerment','business empowerment'],
      reply:`🌟 <strong>TIH Empowerment Training Program</strong><br><br>
TIH conducts empowerment training designed to unlock potential and build real-world skills.<br><br>
<strong>Who we train:</strong><br>
• 🧑‍🎓 <strong>Students</strong>, Academic excellence, goal-setting &amp; career readiness<br>
• 👩‍💼 <strong>Youth</strong>, Leadership, confidence &amp; life skills development<br>
• 🏢 <strong>Business Owners</strong>, Growth strategies, digital tools &amp; management skills<br>
• 💡 <strong>Innovators</strong>, Entrepreneurship, tech adoption &amp; startup mindset<br><br>
<strong>Training covers:</strong><br>
• Personal development &amp; leadership<br>
• Digital skills &amp; technology<br>
• Business &amp; financial literacy<br>
• Innovation &amp; problem-solving<br><br>
📞 Contact TIH to register or schedule a training session for your group.`,
      qr:['📝 Register for Training','📞 Contact TIH','🤝 Partner With Us','🎓 Scholarships'] },

    { id:'impact',
      keywords:['impact','statistics','how many','achievement','result','beneficiary','success rate','numbers','what have you done','track record','proven','500','12 countries','50 healthcare'],
      reply:`📊 <strong>TIH Impact at a Glance</strong><br><br>
• 🎓 <strong>500+</strong> students supported with scholarship guidance<br>
• 🌍 <strong>12+</strong> countries reached through our networks<br>
• 🏥 <strong>50+</strong> healthcare cases referred to international specialists<br>
• 💻 <strong>30+</strong> businesses supported with digital solutions<br>
• 📚 <strong>2</strong> exam tracks (IELTS &amp; TOEFL), 100% free<br>
• 🎓 <strong>3</strong> core programs: Education, Healthcare &amp; Technology<br><br>
Full report on our <strong>Impact page</strong>.`,
      qr:['🌐 View Impact Report','📰 Success Stories','🔙 Main Menu'] },

    { id:'success',
      keywords:['success story','testimonial','success','case study','student story','beneficiary','real story','example','results','people helped','who helped','lives changed'],
      reply:`⭐ <strong>Student &amp; Beneficiary Stories</strong><br><br>
<em>"TIH guided me through the entire scholarship process. I am now studying abroad because of them."</em><br><strong>Moses S.</strong>, Scholarship Beneficiary<br><br>
<em>"The free IELTS classroom is genuinely world-class. I prepared confidently and passed."</em><br><strong>Fatima K.</strong>, IELTS Student<br><br>
<em>"When my family needed specialist treatment, TIH coordinated everything, referrals, hospital contacts, travel."</em><br><strong>Joseph T.</strong>, Healthcare Beneficiary`,
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
All resources are freely accessible, no account required.`,
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
💡 Use TIH's <strong>free IELTS/TOEFL classroom</strong> to prepare, completely free!`,
      qr:['📖 Start IELTS Prep','📖 Start TOEFL Prep','🎓 Scholarship Requirements','🔙 Main Menu'] },

    { id:'india',
      keywords:['india','study in india','india university','indian university','india scholarship','india student','visa india','indian college','india education','india medical'],
      reply:`🇮🇳 <strong>India, Education &amp; Healthcare via TIH</strong><br><br>
TIH has strong India connections for both education and healthcare:<br><br>
🎓 <strong>50% Scholarship Promotion:</strong> a <strong>50% tuition scholarship</strong> at our partner universities in India (Sharda, LPU, Amity, Khalsa + 13 more), plus:<br>
• <strong>Free accommodation</strong> (selected universities)<br>
• <strong>Feeding &amp; medical insurance</strong><br>
• <strong>US$300 support toward your flight ticket</strong><br>
💵 Tuition after the 50% scholarship is <strong>US$1,500–US$3,000/year</strong>, paid <strong>directly to the university</strong>.<br><br>
🏥 <strong>Healthcare:</strong><br>
TIH works with 8 partner hospitals in India offering specialist treatment in cardiology, oncology, orthopedics, neurology &amp; more.<br><br>
Both are coordinated end-to-end by TIH.`,
      qr:['🎓 India 50% Scholarship','🏥 Healthcare in India','📝 Apply','🔙 Main Menu'] },

    { id:'deadline',
      keywords:['deadline','when to apply','last date','closing date','by when','application close','due date','expiry','how long do i have','cut off','submission date','final date'],
      reply:`📅 <strong>Key Application Deadlines</strong><br><br>
• 🎓 <strong>India &amp; Cyprus 50% Scholarship:</strong> <em>July 15, 2026</em><br>
• 📚 <strong>IELTS/TOEFL Classroom:</strong> Open year-round, no deadline<br>
• 🏥 <strong>Healthcare Program:</strong> Rolling, apply anytime<br>
• 💻 <strong>Software Consultation:</strong> Rolling, apply anytime<br><br>
⚠️ <strong>Apply early</strong>, document preparation takes time!`,
      qr:['📝 Apply for Scholarship','🎓 India & Cyprus 50%','📚 Free Learning Hub','🔙 Main Menu'] },

    { id:'chevening',
      keywords:['chevening','uk scholarship','british scholarship','foreign commonwealth','fcdo','study uk','master uk','uk master','uk government scholarship'],
      reply:`🇬🇧 <strong>Chevening Scholarship (UK)</strong><br><br>
The UK Government's flagship international scholarship, <strong>Liberia is eligible!</strong><br><br>
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
The US Government's premier exchange program, <strong>Liberia is eligible!</strong><br><br>
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
One of Africa's largest scholarship networks, <strong>Liberian students are eligible!</strong><br><br>
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
Funded by Germany's Federal Ministry, <strong>Sub-Saharan Africa including Liberia!</strong><br><br>
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
An African Union initiative, full scholarships across Africa. <strong>Liberia is eligible!</strong><br><br>
✅ <strong>Coverage:</strong> Full tuition · Monthly stipend · On-campus accommodation · Return air ticket · Medical insurance<br><br>
✅ <strong>Requirements:</strong><br>
• AU member state citizen (Liberia ✓)<br>
• Bachelor's degree with strong GPA<br>
• Under 35 (Master's) or under 40 (PhD)<br><br>
📅 Applications: <strong>November – December each year</strong>`,
      qr:['🌐 View All Scholarships','🎓 Scholarships','📝 Apply','🔙 Main Menu'] },

    { id:'she_can',
      keywords:['she can','shecan','she-can','she can scholarship','women scholarship','girls scholarship','female scholarship','women leadership','young women','liberia women scholarship','woman scholarship usa'],
      reply:`👩‍🎓 <strong>SHE-CAN Scholarship Program</strong><br><br>
SHE-CAN empowers young Liberian women to earn <strong>full-ride scholarships</strong> at top U.S. colleges.<br><br>
✅ <strong>Coverage (Full Ride):</strong><br>
• Full tuition, housing &amp; meals (paid by U.S. college)<br>
• Test preparation classes &amp; costs<br>
• Passport &amp; visa fees<br>
• Round-trip flights<br>
• Textbooks &amp; health insurance<br><br>
✅ <strong>Eligibility:</strong><br>
• Young <strong>Liberian women</strong>, aged <strong>17–20</strong><br>
• Strong academic record &amp; demonstrated leadership<br>
• From a low-opportunity background<br><br>
📌 <strong>Return Commitment:</strong> Scholars must return to Liberia within 1 year of graduating and work in Liberia for at least 3 years.<br><br>
📅 Applications open annually, contact TIH for guidance!`,
      qr:['📝 Apply with TIH Help','📋 Requirements','📞 Contact TIH','🔙 More Scholarships'] },

    { id:'erasmus_mundus',
      keywords:['erasmus','erasmus mundus','erasmus scholarship','study europe','european scholarship','eu scholarship','europe masters','erasmus masters','europe fully funded'],
      reply:`🇪🇺 <strong>Erasmus Mundus Scholarship</strong><br><br>
A prestigious EU-funded scholarship for <strong>fully funded Master's degrees</strong> across multiple European universities. <strong>Liberian students are eligible!</strong><br><br>
✅ <strong>Coverage:</strong><br>
• Full tuition fees<br>
• Monthly living allowance (~€1,300/month)<br>
• Travel &amp; installation allowances<br>
• Health insurance<br><br>
✅ <strong>Requirements:</strong><br>
• Bachelor's degree (any field matching the program)<br>
• Strong academic record<br>
• English proficiency (IELTS/TOEFL)<br>
• Open to all nationalities, no country restriction<br><br>
📅 Applications: <strong>Varies by program, typically Oct – Jan</strong>`,
      qr:['📝 Apply with TIH Help','📋 Requirements','📞 Contact TIH','🔙 More Scholarships'] },

    { id:'gks_korea',
      keywords:['korea scholarship','korean scholarship','gks','kgsp','global korea scholarship','study korea','south korea scholarship','korean government scholarship'],
      reply:`🇰🇷 <strong>Global Korea Scholarship (GKS / KGSP)</strong><br><br>
The South Korean Government's flagship scholarship for international students. <strong>Liberia is eligible!</strong><br><br>
✅ <strong>Coverage (Fully Funded):</strong><br>
• Full tuition (up to KRW 5,000,000/semester)<br>
• Monthly stipend<br>
• Round-trip airfare<br>
• Korean language training (1 year, free)<br>
• Accommodation &amp; health insurance<br><br>
✅ <strong>Requirements:</strong><br>
• Under 25 (UG) or under 40 (Graduate)<br>
• Good academic record<br>
• No restrictions on field of study<br><br>
📅 Applications: <strong>February – March each year</strong> (Embassy track)`,
      qr:['📝 Apply with TIH Help','📋 Requirements','📞 Contact TIH','🔙 More Scholarships'] },

    { id:'mext_japan',
      keywords:['japan scholarship','japanese scholarship','mext','monbukagakusho','study japan','japan government scholarship','japanese government scholarship'],
      reply:`🇯🇵 <strong>Japanese Government (MEXT) Scholarship</strong><br><br>
Funded by Japan's Ministry of Education, one of the most prestigious government scholarships. <strong>Liberia is eligible</strong> (processed through the Embassy of Japan in Ghana).<br><br>
✅ <strong>Coverage (Fully Funded):</strong><br>
• Full tuition fees<br>
• Monthly living allowance<br>
• Round-trip airfare<br>
• Accommodation support<br><br>
✅ <strong>Requirements:</strong><br>
• Bachelor's degree or equivalent<br>
• Under 35 (Research students)<br>
• Strong academic record<br>
• Apply via Japanese Embassy Recommendation track<br><br>
📅 Deadlines: <strong>Check with Embassy of Japan in Ghana (accredited to Liberia)</strong>`,
      qr:['📝 Apply with TIH Help','📋 Requirements','📞 Contact TIH','🔙 More Scholarships'] },

    { id:'commonwealth_scholarship',
      keywords:['commonwealth scholarship','csc scholarship','commonwealth','commonwealth masters','uk commonwealth','commonwealth distance','commonwealth learning'],
      reply:`🌍 <strong>Commonwealth Scholarship (UK)</strong><br><br>
Funded by the UK government for students from Commonwealth countries to study in the UK.<br><br>
✅ <strong>Coverage (Fully Funded):</strong><br>
• Full tuition fees<br>
• Monthly living allowance<br>
• Return airfare to UK<br>
• Thesis &amp; study grants<br><br>
✅ <strong>Levels:</strong> Master's (taught) · Distance Learning · PhD<br><br>
✅ <strong>Requirements:</strong><br>
• Citizen of a Commonwealth member country<br>
• Strong academic record<br>
• Clear development impact plan for Liberia<br><br>
📅 Master's: <strong>Typically opens August – October</strong><br>
📅 Distance Learning: <strong>Opens February each year</strong><br><br>
💡 TIH can help you craft a strong application!`,
      qr:['📝 Apply with TIH Help','📋 Requirements','📞 Contact TIH','🇬🇧 Chevening (UK)'] },

    { id:'visa',
      keywords:['visa','visa application','student visa','get visa','visa requirements','how to get visa','india visa','uk visa','us visa','visa process','visa help','visa support','travel document','study permit'],
      reply:`✈️ <strong>Visa Support for Liberian Students</strong><br><br>
TIH provides <strong>visa guidance and document support</strong>:<br><br>
🇮🇳 <strong>India:</strong> Indian Mission processes student visas. TIH coordinates your visa application alongside your admission letter.<br><br>
🇬🇧 <strong>UK (Chevening):</strong> Chevening provides visa guidance. Note: You may need to travel to a neighboring country to apply at a UK visa center.<br><br>
🇺🇸 <strong>USA (Fulbright):</strong> US Embassy in Monrovia handles F1/J1 visas.<br><br>
💡 TIH helps you prepare all required documents for every visa process.`,
      qr:['🎓 India & Cyprus 50%','🇬🇧 Chevening Details','📞 Contact TIH','🔙 Main Menu'] },

    { id:'duration',
      keywords:['how long','duration','years','months','program length','how many years','study duration','length of course','time to complete','when does it start'],
      reply:`⏱️ <strong>Program Durations</strong><br><br>
• 🎓 <strong>Undergraduate:</strong> 3–5 years<br>
• 🎓 <strong>Postgraduate (Master's):</strong> 1–2 years<br>
• 🔬 <strong>PhD:</strong> 3–5 years<br>
• 📚 <strong>IELTS/TOEFL Classroom:</strong> Self-paced, complete any time<br>
• 🏥 <strong>Healthcare referral:</strong> Ongoing, case-by-case<br>
• 💻 <strong>Software project:</strong> 2 weeks – 3 months (by scope)`,
      qr:['🎓 Apply for Scholarship','📚 Free Learning Hub','🔙 Main Menu'] },

    { id:'age',
      keywords:['age','how old','age requirement','age limit','minimum age','maximum age','am i too old','am i too young','age criteria','over 40','year old','years old'],
      reply:`📅 <strong>Age Requirements by Scholarship</strong><br><br>
• 🇮🇳🇨🇾 <strong>India &amp; Cyprus (TIH 50%):</strong> No strict age limit, open to all qualified applicants<br>
• 🇬🇧 <strong>Chevening:</strong> No official upper age limit (2+ years work experience required)<br>
• 🇺🇸 <strong>Fulbright:</strong> No hard limit, typically recent graduates or early career<br>
• 🌍 <strong>Mastercard Foundation:</strong> Typically under 35<br>
• 🌐 <strong>Pan African University:</strong> Master's → under 35 · PhD → under 40`,
      qr:['📋 Full Requirements','🎓 India & Cyprus 50%','📝 Apply Now','🔙 Main Menu'] },

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
      qr:['🎓 India & Cyprus 50%','📝 Apply Now','📋 Requirements','🔙 Main Menu'] },

    { id:'statement',
      keywords:['personal statement','essay','motivation letter','cover letter','statement of purpose','write essay','how to write','application essay','why do you want','motivation','what to write','sop'],
      reply:`✍️ <strong>Writing Your Personal Statement</strong><br><br>
A strong personal statement covers 5 key points:<br><br>
1️⃣ <strong>Who you are</strong>, background, education, experience<br>
2️⃣ <strong>Why this program</strong>, why this scholarship, country, field<br>
3️⃣ <strong>Your goals</strong>, career plans and how this degree fits<br>
4️⃣ <strong>Your impact</strong>, how you'll contribute to Liberia after graduating<br>
5️⃣ <strong>Why you</strong>, what makes you the strongest candidate<br><br>
📌 Aim for <strong>500–800 words</strong>. Be specific, avoid generic statements.<br><br>
💡 <strong>TIH can review your personal statement, contact us!</strong>`,
      qr:['📞 Get Help from TIH','💬 WhatsApp for Guidance','📋 Requirements','🔙 Main Menu'] },

    { id:'rejection',
      keywords:['rejected','rejection','not selected','failed application','what if i fail','not successful','denied','not accepted','reapply','try again','second chance'],
      reply:`💪 <strong>If You're Not Selected, Don't Give Up</strong><br><br>
Many successful scholars were rejected before winning their scholarship!<br><br>
✅ <strong>What to do:</strong><br>
• <strong>Reapply next cycle</strong>, most scholarships accept re-applications<br>
• <strong>Strengthen weak areas</strong>, improve your IELTS/TOEFL score, GPA, or personal statement<br>
• <strong>Apply for multiple scholarships</strong> simultaneously, Chevening, Fulbright, DAAD, Erasmus, GKS, MEXT, SHE-CAN<br>
• <strong>Consult TIH</strong>, we review applications and give feedback<br><br>
📌 TIH offers <strong>free application feedback</strong>. Contact us today!`,
      qr:['📞 Get Application Feedback','🎓 Other Scholarships','📚 Improve IELTS Score','🔙 Main Menu'] },

    { id:'cost_living',
      keywords:['cost of living','living cost','expenses in india','money needed','cost india','afford india','monthly expenses','india expensive','stipend enough','how much stipend'],
      reply:`💵 <strong>Cost of Living in India &amp; Cyprus</strong><br><br>
India is one of the most <strong>affordable study destinations</strong> in the world:<br><br>
• Monthly living expenses: <strong>~$200–$400 USD</strong> (food, transport, misc.)<br>
• Hostel/accommodation: <strong>~$50–$150/month</strong> (varies by city)<br>
• Total estimated monthly budget: <strong>~$250–$550 USD</strong><br><br>
Cyprus costs are slightly higher but still affordable vs. Western Europe.<br><br>
💡 With TIH's <strong>50% tuition scholarship</strong>, your total cost of education is significantly reduced.`,
      qr:['🎓 India & Cyprus 50%','🏛️ Partner Universities','📞 Contact TIH','🔙 Main Menu'] },

    { id:'india_cyprus_scholarship',
      keywords:['india scholarship','cyprus scholarship','50 percent','50%','half tuition','india 50','cyprus 50','tih scholarship','scholarship india','scholarship cyprus','how much scholarship','what scholarship india','what scholarship cyprus','india tuition','cyprus tuition'],
      reply:`🎉 <strong>50% Scholarship Promotion, India Universities</strong><br><br>
Through our partner universities in <strong>India</strong> you get a <strong>50% scholarship on tuition</strong> plus real support to help you settle in:<br><br>
🎁 <strong>What's included:</strong><br>
• <strong>50% off tuition</strong> at partner universities<br>
• <strong>Free accommodation</strong> (selected universities)<br>
• <strong>Feeding &amp; medical insurance</strong><br>
• <strong>US$300 support toward your flight ticket</strong><br><br>
💵 <strong>Tuition after the 50% scholarship:</strong> <strong>US$1,500–US$3,000 per year</strong>.<br>
All tuition and other fees are paid <strong>directly to the university</strong>, TIH never handles your tuition.<br><br>
🇨🇾 <strong>North Cyprus</strong> partner universities also offer the 50% tuition scholarship:<br>
• Near East University (NEU), Nicosia<br>
• Girne American University (GAU), Kyrenia<br>
• Eastern Mediterranean University (EMU), Famagusta<br><br>
📅 Application deadline: <strong>July 15, 2026</strong>. TIH guidance is 100% free.`,
      qr:['📝 Apply Now','🏛️ Partner Universities','📋 Requirements','📞 Contact TIH'] },

    { id:'can_apply',
      keywords:['can i apply','am i eligible','can liberian apply','do you accept','can i join','can i register','is it open','open to liberians','open for liberia','is liberia included','liberia eligible'],
      reply:`✅ <strong>Yes, Liberian Students Can Apply!</strong><br><br>
All TIH programs are designed to serve <strong>Liberian citizens</strong>:<br><br>
• 🎓 <strong>India &amp; Cyprus 50% Scholarship</strong>, Liberian citizens, all ages<br>
• 🇬🇧 <strong>Chevening (UK)</strong>, Liberian citizens, 2+ years work experience<br>
• 🇺🇸 <strong>Fulbright (USA)</strong>, Liberian citizens residing in Liberia<br>
• 🌍 <strong>Mastercard Foundation</strong>, African citizens (Liberia ✓)<br>
• 📚 <strong>Free Learning Hub</strong>, <strong>Open to everyone, no restrictions!</strong><br>
• 🏥 <strong>Healthcare</strong>, Open to all Liberians<br>
• 💻 <strong>Software</strong>, Open to any individual or business`,
      qr:['📝 Apply for Scholarship','🏆 ICCR Scholarship','📚 Free Learning Hub','🔙 Main Menu'] },

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
Just type your question, or visit our <strong>FAQ page</strong> for full written answers.`,
      qr:['🌐 Go to FAQ Page','🎓 Scholarship','📚 Classroom','📞 Contact','🔙 Main Menu'] },

    { id:'apply_menu',
      keywords:['apply','application','i want to apply','start application','apply now','sign up','enroll','register','join','submit form','application form','apply here','chat apply'],
      reply:`📝 <strong>Apply with TIH</strong><br><br>
I can collect your application right here in this chat. Which program are you applying for?`,
      qr:['🎓 Scholarship / Study Abroad','🏥 Healthcare Request','💻 Software Consultation','📚 IELTS/TOEFL Classroom'] },

    { id:'thanks',
      keywords:['thank you','thanks','thank','appreciate','helpful','great','wonderful','awesome','nice','good job','excellent','perfect','amazing'],
      reply:`You're very welcome! 😊 Happy to help. Is there anything else I can assist you with?`,
      qr:['🎓 Scholarships','📚 Free Learning Hub','🏥 Healthcare','💻 Software','📝 Apply Now'] },

    { id:'partner_hospitals',
      keywords:['apollo','fortis','narayana','medanta','aiims','kokilaben','max healthcare','manipal','partner hospital','which hospital','hospital name','hospital list','hospital partner'],
      reply:`🏥 <strong>TIH Partner Hospitals in India</strong><br><br>
We work with India's top-ranked hospitals:<br>
• <strong>Apollo Hospitals</strong>, Chennai<br>
• <strong>Fortis Healthcare</strong>, Delhi<br>
• <strong>Narayana Health</strong>, Bangalore<br>
• <strong>Medanta – The Medicity</strong>, Gurugram<br>
• <strong>AIIMS New Delhi</strong>, Government premier institute<br>
• <strong>Kokilaben Dhirubhai Ambani Hospital</strong>, Mumbai<br>
• <strong>Max Healthcare</strong>, Delhi<br>
• <strong>Manipal Hospitals</strong>, Bangalore<br><br>
TIH coordinates your referral, you pay the hospital directly.`,
      qr:['🏥 Healthcare Process','💬 Request Consultation','📞 Contact TIH'] },

    { id:'university_sharda',
      keywords:['sharda','sharda university','sharda university india'],
      reply:`🎓 <strong>Sharda University</strong><br><br>
• NAAC Accredited: <strong>A+</strong><br>
• National Ranking: <strong>#35 in India</strong><br>
• Full tuition: $3,500 – $6,000 / year<br>
• 🎉 <strong>TIH 50% Scholarship: $1,750 – $3,000 / year</strong><br>
• Programs: MBBS, B.Tech, LLB, MBA, PhD<br>
• Located in Greater Noida, near Delhi<br><br>
TIH covers 50% of your tuition, you pay the rest!`,
      qr:['🎓 Apply for Scholarship','📋 Requirements','📞 Contact TIH'] },

    { id:'university_lpu',
      keywords:['lpu','lovely professional','lovely professional university'],
      reply:`🎓 <strong>Lovely Professional University (LPU)</strong><br><br>
• NAAC Accredited: <strong>A++</strong> (highest grade)<br>
• National Ranking: <strong>#28 in India</strong><br>
• Full tuition: $2,800 – $5,000 / year<br>
• 🎉 <strong>TIH 50% Scholarship: $1,400 – $2,500 / year</strong><br>
• 300+ programs across all disciplines<br>
• 600-acre mega-campus in Punjab<br><br>
TIH covers 50% of your tuition, you pay the rest!`,
      qr:['🎓 Apply for Scholarship','📋 Requirements','📞 Contact TIH'] },

    { id:'university_amity',
      keywords:['amity','amity university'],
      reply:`🎓 <strong>Amity University</strong><br><br>
• NAAC Accredited: <strong>A+</strong><br>
• QS World Ranking: <strong>#22 in India</strong><br>
• Full tuition: $4,000 – $7,500 / year<br>
• 🎉 <strong>TIH 50% Scholarship: $2,000 – $3,750 / year</strong><br>
• Campuses in <strong>10 countries</strong> worldwide<br>
• Noida (main campus), Delhi, Mumbai + international<br><br>
Ideal for students seeking a globally connected university.`,
      qr:['🎓 Apply for Scholarship','📋 Requirements','📞 Contact TIH'] },

    { id:'university_khalsa',
      keywords:['khalsa','khalsa university','amritsar university','golden temple university'],
      reply:`🎓 <strong>Khalsa University</strong><br><br>
• Heritage institution founded in <strong>1892</strong><br>
• Full tuition: $1,800 – $3,000 / year<br>
• 🎉 <strong>TIH 50% Scholarship: $900 – $1,500 / year</strong><br>
• Located in <strong>Amritsar</strong>, home of the Golden Temple<br>
• Strong arts, science, and commerce programs<br><br>
The most affordable option, and even more so with TIH's 50% scholarship!`,
      qr:['🎓 Apply for Scholarship','📋 Requirements','📞 Contact TIH'] },

    { id:'university_neu',
      keywords:['near east university','neu','near east','nicosia university','cyprus university','study cyprus','university in cyprus'],
      reply:`🎓 <strong>Near East University (NEU)</strong> 🇨🇾<br><br>
• Located in <strong>Nicosia, North Cyprus</strong><br>
• One of the largest and most internationally recognised universities in Cyprus<br>
• 200+ programs: Medicine, Engineering, Law, Business, Architecture, Pharmacy & more<br>
• Large international student community (100+ nationalities)<br>
• Full tuition: varies by program<br>
• 🎉 <strong>TIH 50% Scholarship on tuition</strong><br><br>
An excellent choice for Liberian students seeking a European-standard degree.`,
      qr:['🎓 Apply for Scholarship','📋 Requirements','🎓 Girne American University','📞 Contact TIH'] },

    { id:'university_gau',
      keywords:['girne american university','gau','girne','kyrenia university','american university cyprus','american style cyprus'],
      reply:`🎓 <strong>Girne American University (GAU)</strong> 🇨🇾<br><br>
• Located in <strong>Kyrenia (Girne), North Cyprus</strong><br>
• American-style education with an international curriculum<br>
• Programs: Business, Engineering, Architecture, Health Sciences, Hospitality & more<br>
• English-medium instruction throughout<br>
• Full tuition: varies by program<br>
• 🎉 <strong>TIH 50% Scholarship on tuition</strong><br><br>
Ideal for students who want an American-style degree in a Mediterranean setting.`,
      qr:['🎓 Apply for Scholarship','📋 Requirements','🎓 Near East University','🎓 EMU Cyprus','📞 Contact TIH'] },

    { id:'university_emu',
      keywords:['eastern mediterranean university','emu','eastern mediterranean','emu famagusta','state university cyprus','famagusta university'],
      reply:`🎓 <strong>Eastern Mediterranean University (EMU)</strong> 🇨🇾<br><br>
• Located in <strong>Famagusta, North Cyprus</strong><br>
• North Cyprus's <strong>oldest and most prestigious state university</strong>, established 1979<br>
• 20,000+ students from 100+ countries<br>
• 100+ programs: Engineering, Business, Law, Architecture, Education, Health Sciences, IT &amp; more<br>
• Full English-medium instruction<br>
• 🎉 <strong>TIH 50% Scholarship on tuition</strong><br><br>
The premier choice for Liberian students seeking a world-class degree in the Eastern Mediterranean.`,
      qr:['🎓 Apply for Scholarship','📋 Requirements','🎓 Near East University','🎓 Girne American University','📞 Contact TIH'] },

    { id:'universities_overview',
      keywords:['partner university','which university','university list','universities in india','where can i study','study in india university','university partner','tih university','cyprus university','study in cyprus'],
      reply:`🎓 <strong>TIH Partner Universities</strong><br><br>
We partner with 20+ universities in <strong>India &amp; Cyprus</strong>.<br>
🎉 <strong>TIH offers 50% tuition scholarship at all partner universities!</strong><br><br>
🇮🇳 <strong>India:</strong><br>
• <strong>Sharda University</strong>, NAAC A+, #35 India, from <strong>$1,750/yr</strong><br>
• <strong>LPU</strong>, NAAC A++, #28 India, from <strong>$1,400/yr</strong><br>
• <strong>Amity University</strong>, QS #22 India, from <strong>$2,000/yr</strong><br>
• <strong>Khalsa University</strong>, Heritage 1892, from <strong>$900/yr</strong><br><br>
🇨🇾 <strong>Cyprus:</strong><br>
• <strong>Near East University (NEU)</strong>, Nicosia, 200+ programs<br>
• <strong>Girne American University (GAU)</strong>, Kyrenia, American-style<br>
• <strong>Eastern Mediterranean University (EMU)</strong>, Famagusta, state university<br><br>
Tell us your field of study and we'll recommend the best match!`,
      qr:['🎓 Apply Now','📋 Requirements','🎓 NEU Cyprus','🎓 GAU Cyprus','🎓 EMU Cyprus'] },

    { id:'upcoming_events',
      keywords:['event','upcoming','schedule','workshop','session','orientation','calendar','when','next event','upcoming event','event date'],
      reply:`📅 <strong>Upcoming TIH Events (2026)</strong><br><br>
• <strong>Jul 15</strong>, Scholarship Application Deadline<br>
• <strong>Jul 20</strong>, IELTS Writing Workshop<br>
• <strong>Aug 1</strong>, Tech Consultation Day<br>
• <strong>Aug 15</strong>, Scholarship Information Session<br>
• <strong>Sep 1</strong>, Healthcare Program Orientation<br>
• <strong>Sep 15</strong>, TOEFL Mock Exam<br><br>
Don't miss out, register early to secure your spot!`,
      qr:['📝 Register Now','🎓 Scholarship Deadline','📚 IELTS Workshop','📞 Contact TIH'] },

    { id:'mastery_plan',
      keywords:['mastery plan','5 phase','five phase','study plan','ielts plan','toefl plan','120 minutes','daily plan','learning plan','phase 1','phase 2'],
      reply:`📚 <strong>TIH Mastery Plan</strong><br><br>
Our structured 5-phase program (~120 min/day):<br>
<strong>Phase 1</strong>, Foundation: Core grammar & vocabulary<br>
<strong>Phase 2</strong>, Skills Build: Listening, reading, writing, speaking<br>
<strong>Phase 3</strong>, Practice: Timed exercises per section<br>
<strong>Phase 4</strong>, Mock Tests: Full exam simulations<br>
<strong>Phase 5</strong>, Review: Targeted weak-area drilling<br><br>
Designed to get you exam-ready in 8–12 weeks.`,
      qr:['📚 Join Free Learning Hub','🎓 Scholarships','📝 Apply Now'] },

    { id:'video_lessons',
      keywords:['video','youtube','lesson video','e2 language','ielts liz','magoosh','tst prep','video lesson','watch','tutorial'],
      reply:`🎬 <strong>Free Video Lessons</strong><br><br>
Our classroom links to the best free YouTube channels:<br>
• <strong>E2 Language</strong>, IELTS strategies & live classes<br>
• <strong>IELTS Liz</strong>, Tips, lessons, practice tasks<br>
• <strong>Magoosh TOEFL</strong>, Full TOEFL prep series<br>
• <strong>TST Prep</strong>, IELTS writing & speaking breakdown<br><br>
All videos are free and curated by TIH instructors.`,
      qr:['📚 Open Classroom','🎓 Scholarship','📝 Register'] },

    { id:'study_materials',
      keywords:['study material','pdf','download','vocab pack','vocabulary','notes','handout','workbook','material'],
      reply:`📄 <strong>Downloadable Study Materials</strong><br><br>
The TIH classroom provides:<br>
• <strong>PDF lesson notes</strong>, Grammar, reading, writing<br>
• <strong>Vocabulary packs</strong>, Academic Word List + IELTS/TOEFL wordlists<br>
• <strong>Writing templates</strong>, Task 1 & Task 2 structures<br>
• <strong>Speaking cue cards</strong>, Practice prompts<br><br>
All materials are free to download from the classroom page.`,
      qr:['📚 Open Classroom','📝 Register for Classroom','🎓 Scholarships'] },

    { id:'practice_tests',
      keywords:['practice test','mock test','mock exam','timed test','auto score','practice exam','simulate exam','test simulation','full test'],
      reply:`📝 <strong>Practice Tests & Mock Exams</strong><br><br>
TIH's classroom includes:<br>
• <strong>Timed practice tests</strong>, Real exam conditions<br>
• <strong>Auto-scored exercises</strong>, Instant feedback<br>
• <strong>Full mock exams</strong>, Complete IELTS/TOEFL simulations<br>
• <strong>Progress tracking</strong>, Monitor your improvement over time<br><br>
Practice as many times as you need, it's completely free!`,
      qr:['📚 Open Classroom','🎓 Scholarship','📝 Apply Now'] },

    { id:'ucl_scholarship',
      keywords:['ucl','university college london','ucl scholarship','ucl global','global undergraduate','london scholarship'],
      reply:`🇬🇧 <strong>UCL Global Undergraduate Scholarship</strong><br><br>
University College London (UCL) offers highly competitive scholarships for outstanding international students.<br><br>
• One of the world's top 10 universities<br>
• Awards cover partial to full tuition<br>
• Requires strong academic record + personal statement<br><br>
TIH can help you prepare a competitive application. Contact us to get started!`,
      qr:['📝 Apply for Scholarship','📋 Requirements','📞 Contact TIH'] },

    { id:'entertainment',
      keywords:['entertainment','movie','film','stream','watch movie','free movie','net22','dailymotion','moviebox','gomovies','streaming','video stream'],
      reply:`🎬 <strong>Free Entertainment Resources</strong><br><br>
TIH's entertainment page lists free streaming platforms:<br>
• <strong>net22.cc</strong>, Free movies & shows<br>
• <strong>Dailymotion</strong>, Videos & clips<br>
• <strong>moviebox.ph</strong>, Movie streaming<br>
• <strong>gomovies.gg</strong>, Free film library<br><br>
Visit the Entertainment page on our website for direct links.`,
      qr:['🌐 Visit Website','📚 Free Learning Hub','🎓 Scholarships'] },

    { id:'volunteer_roles',
      keywords:['volunteer role','volunteer position','what volunteer','volunteer job','education mentor','scholarship advisor','technology trainer','healthcare coordinator','content creator','community outreach','how to volunteer','volunteer hours'],
      reply:`🤝 <strong>Volunteer Roles at TIH</strong><br><br>
• <strong>Education Mentor</strong>, 2–4 hrs/week, guide students<br>
• <strong>Scholarship Advisor</strong>, 3–5 hrs/week, help with applications<br>
• <strong>Technology Trainer</strong>, 3–6 hrs/week, teach digital skills<br>
• <strong>Healthcare Coordinator</strong>, 2–4 hrs/week, support patients<br>
• <strong>Content Creator</strong>, Flexible, create social/web content<br>
• <strong>Community Outreach</strong>, Flexible, spread the mission<br><br>
All roles are remote-friendly. Apply via our website!`,
      qr:['📝 Volunteer Now','📞 Contact TIH','🌐 Visit Website'] },

    { id:'partnership_types',
      keywords:['partnership type','types of partnership','how to partner','corporate partner','ngo partner','institutional partner','become partner','partnership program'],
      reply:`🤝 <strong>TIH Partnership Programs</strong><br><br>
We welcome partnerships from:<br>
• <strong>Corporations</strong>, CSR sponsorships & co-branded programs<br>
• <strong>NGOs & Nonprofits</strong>, Joint impact initiatives<br>
• <strong>Universities & Schools</strong>, Academic partnerships & referrals<br>
• <strong>Government Institutions</strong>, Policy alignment & outreach<br><br>
Reach out to explore a collaboration that creates lasting impact.`,
      qr:['📞 Contact TIH','📝 Partner With Us','💰 Donate'] },

    { id:'software_timeline',
      keywords:['how long','software timeline','website timeline','build time','development time','weeks','when ready','how many weeks','timeline software'],
      reply:`💻 <strong>Software Development Timelines</strong><br><br>
Typical project timelines at TIH:<br>
• <strong>Basic website</strong>, 2–4 weeks<br>
• <strong>Custom software / business systems</strong>, 4–12 weeks<br>
• <strong>Mobile app</strong>, 6–12 weeks<br><br>
🎉 <strong>Website packages are 70% OFF</strong> (limited-time promotion) and include free 1-year domain, hosting, unlimited traffic, all-search-engine listing, top security, unlimited professional email, and management training.<br><br>
We'll give you a precise timeline estimate during your free consultation.`,
      qr:['💻 Book Consultation','💰 View Pricing','📞 Contact TIH'] },

    { id:'donation_tiers',
      keywords:['donation tier','supporter','champion','transformer','monthly donation','donate tier','giving level','how much donate'],
      reply:`💰 <strong>Donation Tiers</strong><br><br>
Every gift, large or small, changes lives:<br>
• <strong>Supporter</strong>, Any amount, one-time or recurring<br>
• <strong>Champion</strong>, Monthly giving commitment<br>
• <strong>Transformer</strong>, Partnership-level investment<br><br>
100% of your donation supports Liberian students and patients. Thank you for making a difference!`,
      qr:['💰 Donate Now','🤝 Become a Partner','📞 Contact TIH'] },

    { id:'healthcare_countries',
      keywords:['ghana','uae','dubai','abu dhabi','healthcare ghana','healthcare uae','which country healthcare','healthcare country','treatment abroad country'],
      reply:`🌍 <strong>TIH Healthcare Destinations</strong><br><br>
TIH now coordinates medical referrals to:<br>
• 🇮🇳 <strong>India</strong>, 8 partner hospitals (primary destination)<br>
• 🇬🇭 <strong>Ghana</strong>, Regional medical access<br>
• 🇦🇪 <strong>UAE</strong>, Advanced specialist care<br><br>
We find the right facility, liaise with doctors, and support your travel, you pay the hospital directly.`,
      qr:['🏥 Request Healthcare','💬 Contact TIH','🏥 Partner Hospitals'] },

    { id:'success_stories',
      keywords:['success story','testimonial','real student','who benefited','moses','abigail','james k','fatima','emmanuel','princess','david','student story','patient story','example student'],
      reply:`⭐ <strong>TIH Success Stories</strong><br><br>
• <strong>Moses S.</strong>, Studying CS in India, GPA 3.5+<br>
• <strong>Abigail S.</strong>, Erasmus+ Public Health in Germany<br>
• <strong>James K.</strong>, Achieved IELTS 6.5 after TIH classroom<br>
• <strong>Fatima T.</strong>, Life-changing cardiac surgery in India<br>
• <strong>Emmanuel C.</strong>, Business revenue doubled after TIH software<br>
• <strong>Princess B.</strong>, TOEFL 87, now pursuing MBA<br>
• <strong>David W.</strong>, Won $8,000 NGO contract via digital skills<br><br>
You could be next. Let us help you take the step!`,
      qr:['🎓 Apply for Scholarship','🏥 Healthcare','💻 Software','📞 Contact TIH'] },

    { id:'healthcare_cost',
      keywords:['healthcare cost','medical cost','how much treatment','cost treatment','pay hospital','hospital payment','tih charge healthcare','free treatment','treatment cost','who pays'],
      reply:`🏥 <strong>Healthcare Cost & Payment</strong><br><br>
TIH <strong>does not charge for coordination services</strong>. Our role is to:<br>
✅ Identify the right hospital & specialist<br>
✅ Facilitate communication & logistics<br>
✅ Support you through the process<br><br>
<strong>You pay the hospital directly</strong> for all medical services. Treatment costs vary by hospital and condition, we help you get a cost estimate before you travel.`,
      qr:['🏥 Request Healthcare','💬 Ask About Hospitals','📞 Contact TIH'] },

    { id:'study_abroad_process',
      keywords:['how does study abroad work','study abroad steps','study abroad process','6 step','six step','step by step scholarship','application process','what happens after apply'],
      reply:`🎓 <strong>Study Abroad, 6-Step Process</strong><br><br>
<strong>1.</strong> Submit your application (online or in-chat)<br>
<strong>2.</strong> TIH reviews & contacts you within 48 hrs<br>
<strong>3.</strong> Document preparation & verification<br>
<strong>4.</strong> University / scholarship matching<br>
<strong>5.</strong> Application submission to institution<br>
<strong>6.</strong> Visa support & pre-departure orientation<br><br>
We guide you at every step, it's completely free!`,
      qr:['📝 Apply Now','📋 Requirements','📞 Contact TIH'] },

    { id:'classroom_structure',
      keywords:['classroom structure','how classroom works','what is in classroom','classroom content','classroom feature','free classroom overview','ielts classroom detail','toefl classroom detail'],
      reply:`📚 <strong>TIH Free Learning Hub, What's Inside</strong><br><br>
The classroom is organized into 4 sections:<br>
• <strong>Mastery Plan</strong>, 5-phase daily study schedule (~120 min/day)<br>
• <strong>Video Lessons</strong>, Curated YouTube channels (E2, IELTS Liz, Magoosh, TST)<br>
• <strong>Study Materials</strong>, Downloadable PDFs, vocab packs, templates<br>
• <strong>Practice Tests</strong>, Timed, auto-scored mock exams<br><br>
100% free. No registration needed to browse, register to track your progress.`,
      qr:['📚 Open Classroom','📝 Register','🎓 Scholarships','📞 Contact'] },

    { id:'fallback', keywords:[], reply:``, qr:[] }
  ];

  // ── APPLICATION FLOWS ─────────────────────────────────────────────────────────
  const FLOWS = {
    scholarship: {
      title:'🎓 Scholarship / Study Abroad',
      subject:'Chat Application, Scholarship / Study Abroad',
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
      subject:'Chat Application, Healthcare Request',
      steps:[
        { key:'name',      label:'Patient / Contact Name',   type:'text',  ph:'Full name' },
        { key:'email',     label:'Email Address',             type:'email', ph:'you@example.com' },
        { key:'phone',     label:'Phone / WhatsApp',          type:'tel',   ph:'+231 880 ...' },
        { key:'condition', label:'Medical Condition / Need',  type:'text',  ph:'Brief description of condition or treatment needed' }
      ]
    },
    software: {
      title:'💻 Software Consultation',
      subject:'Chat Application, Software Consultation',
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
      subject:'Chat Registration, IELTS/TOEFL Classroom',
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
    // Stop-words excluded so generic openers ("what", "how", "tell") can't
    // rack up fragment points against every keyword that contains them.
    const words = t.split(/[\s,?!.;:'"()\[\]]+/).filter(w => w.length > 2 && !STOP_WORDS.has(w));
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

    if (best.score >= 4) return { confidence:'high',   entry:best.entry, score:best.score };
    if (best.score >= 1) return { confidence:'medium', entry:best.entry, score:best.score };
    return                       { confidence:'low',    entry:KB[KB.length-1], score:0 };
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

  // ══════════════════════════════════════════════════════════════════════════════
  //  v4, self-contained smart assistant (no external AI APIs)
  //  I18N (EN/FR/AR) · SiteIndex (auto crawler + local inverted index)
  //  SiteSearch (fast ranked retrieval) · conversational answer composer
  //  History (persistent) · Voice input · streamed typing
  // ══════════════════════════════════════════════════════════════════════════════

  // ── I18N ──────────────────────────────────────────────────────────────────────
  const LANG_KEY = 'tih_chat_lang';
  let lang = 'en';
  try { const l0 = localStorage.getItem(LANG_KEY); if (['en','fr','ar'].includes(l0)) lang = l0; } catch (e) {}

  const T = {
    en: {
      flag:'EN', voice:'en-US', dir:'ltr',
      status:'Online, Ready to help',
      placeholder:'Ask me anything about TIH…',
      micTitle:'Ask by voice', langTitle:'Language: English (click to change)',
      earlier:'Earlier', today:'Today',
      welcomeBack:'Welcome back! 👋 Here is our conversation so far. What else can I help you with?',
      listening:'🎤 Listening… speak now',
      langSet:'Language set to <strong>English</strong>. How can I help you?',
      foundIntro:[
        q => `Great question! Here's what I found on our website about "<em>${q}</em>":`,
        q => `Here's the most relevant information on our website for "<em>${q}</em>":`,
        q => `I searched the whole website for "<em>${q}</em>", this matches best:`
      ],
      readMore:'Read the full page:', also:'Also related:', note:'',
      noResult: q => `I couldn't find "<em>${q}</em>" on the website yet, but our team can answer right away:`,
      contactBlock:`💬 <strong>WhatsApp (fastest):</strong> <a href="https://wa.me/231880559227" target="_blank" rel="noopener" style="color:#002868;font-weight:700;">+231 880 559 227</a><br>📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com<br>📞 <strong>Call:</strong> +231 778 956 979`
    },
    fr: {
      flag:'FR', voice:'fr-FR', dir:'ltr',
      status:'En ligne, prêt à vous aider',
      placeholder:'Posez-moi vos questions sur TIH…',
      micTitle:'Parler au lieu d’écrire', langTitle:'Langue : Français (cliquer pour changer)',
      earlier:'Plus tôt', today:'Aujourd’hui',
      welcomeBack:'Content de vous revoir ! 👋 Voici notre conversation. Que puis-je faire d’autre pour vous ?',
      listening:'🎤 Je vous écoute…',
      langSet:'Langue définie sur le <strong>français</strong>. Comment puis-je vous aider ?',
      foundIntro:[
        q => `Bonne question ! Voici ce que j’ai trouvé sur notre site à propos de « <em>${q}</em> » :`,
        q => `Voici les informations les plus pertinentes pour « <em>${q}</em> » :`
      ],
      readMore:'Lire la page complète :', also:'Voir aussi :',
      note:'ℹ️ Le contenu du site est en anglais.',
      noResult: q => `Je n’ai pas encore trouvé « <em>${q}</em> » sur le site, mais notre équipe peut vous répondre immédiatement :`,
      contactBlock:`💬 <strong>WhatsApp (le plus rapide) :</strong> <a href="https://wa.me/231880559227" target="_blank" rel="noopener" style="color:#002868;font-weight:700;">+231 880 559 227</a><br>📧 <strong>E-mail :</strong> tolbertinnovationhub@gmail.com<br>📞 <strong>Téléphone :</strong> +231 778 956 979`
    },
    ar: {
      flag:'ع', voice:'ar-SA', dir:'rtl',
      status:'متصل وجاهز للمساعدة',
      placeholder:'اسألني أي شيء عن TIH…',
      micTitle:'تحدث بدلاً من الكتابة', langTitle:'اللغة: العربية (انقر للتغيير)',
      earlier:'سابقاً', today:'اليوم',
      welcomeBack:'مرحباً بعودتك! 👋 هذه محادثتنا السابقة. كيف يمكنني مساعدتك أيضاً؟',
      listening:'🎤 أستمع إليك…',
      langSet:'تم تغيير اللغة إلى <strong>العربية</strong>. كيف يمكنني مساعدتك؟',
      foundIntro:[
        q => `سؤال رائع! هذا ما وجدته في موقعنا حول «<em>${q}</em>»:`,
        q => `إليك أنسب المعلومات في موقعنا حول «<em>${q}</em>»:`
      ],
      readMore:'اقرأ الصفحة كاملة:', also:'مواضيع ذات صلة:',
      note:'ℹ️ محتوى الموقع باللغة الإنجليزية.',
      noResult: q => `لم أجد «<em>${q}</em>» في الموقع بعد، لكن فريقنا جاهز لمساعدتك فوراً:`,
      contactBlock:`💬 <strong>واتساب (الأسرع):</strong> <a href="https://wa.me/231880559227" target="_blank" rel="noopener" style="color:#002868;font-weight:700;">+231 880 559 227</a><br>📧 <strong>البريد:</strong> tolbertinnovationhub@gmail.com<br>📞 <strong>هاتف:</strong> +231 778 956 979`
    }
  };

  // Localized mini knowledge base for the most common intents (FR / AR).
  const LKB = {
    fr: [
      { id:'greet', kw:['bonjour','salut','bonsoir','coucou','merci','aidez','aide'],
        reply:`Bonjour ! 👋 Bienvenue chez <strong>Tolbert Innovation Hub</strong> !<br><br>Je peux vous renseigner sur les bourses d’études, les cours gratuits (IELTS, TOEFL, WASSCE…), le programme de santé, les services logiciels et plus encore.<br><br>Comment puis-je vous aider ?` },
      { id:'about', kw:['propos','qui êtes','organisation','mission','tolbert','que faites'],
        reply:`🏛️ <strong>À propos de TIH</strong><br><br>Tolbert Innovation Hub est une organisation libérienne fondée par <strong>M. Samuel S. Tolbert</strong>. Nos piliers :<br>🎓 Bourses et études à l’étranger (Inde et Chypre, réduction de 50 %)<br>📚 Cours gratuits : IELTS, TOEFL, WASSCE et plus<br>🏥 Orientation médicale vers des hôpitaux partenaires en Inde<br>💻 Développement de sites web et d’applications<br><br>📍 Monrovia, Libéria · 📞 +231 880 559 227` },
      { id:'scholarship', kw:['bourse','étude','étranger','université','inde','chypre','étudier','admission','scolarité','diplôme'],
        reply:`🎓 <strong>Études à l’étranger avec TIH</strong><br><br>Nous aidons les étudiants à intégrer 20 universités partenaires en <strong>Inde et à Chypre du Nord</strong> avec une <strong>bourse de 50 %</strong> sur les frais de scolarité.<br><br>✅ Accompagnement gratuit : choix de l’université, dossier, lettre d’admission, visa.<br>🇮🇳 Inde : à partir de 900 $/an · 🇨🇾 Chypre : à partir de 1 750 $/an<br><br>Contactez-nous sur WhatsApp pour postuler : +231 880 559 227` },
      { id:'courses', kw:['cours','gratuit','ielts','toefl','wassce','apprendre','formation','classe','leçon','certificat'],
        reply:`📚 <strong>Cours gratuits TIH</strong><br><br>• Préparation IELTS et TOEFL, 6 modules chacun<br>• WASSCE PRO, 23 matières avec vidéos, notes et examens blancs<br>• 18 cours de compétences : informatique, entrepreneuriat, marketing digital…<br><br>🏅 Certificat de fin de formation disponible.<br>👉 <a href="learning-hub" style="color:#002868;font-weight:700;">Ouvrir l’espace d’apprentissage</a>` },
      { id:'healthcare', kw:['santé','médical','hôpital','traitement','malade','médecin','soins'],
        reply:`🏥 <strong>Programme d’orientation médicale</strong><br><br>TIH met en relation les patients libériens avec des hôpitaux spécialisés en Inde : cardiologie, oncologie, orthopédie, neurologie, fertilité…<br><br>Nous coordonnons le dossier médical, les rendez-vous et le visa.<br>📞 WhatsApp : +231 880 559 227` },
      { id:'software', kw:['logiciel','site web','application','développement','prix','tarif','coût','site internet'],
        reply:`💻 <strong>Services logiciels TIH</strong><br><br>Sites web, plateformes d’apprentissage, systèmes de gestion, boutiques e-commerce et applications mobiles.<br><br>📦 Promotion, 70 % DE RÉDUCTION :<br>• Starter <s>500 $</s> 150 $, site web professionnel<br>• Croissance 200 $, plateforme d’apprentissage, gestion d’entreprise, e-commerce &amp; paiements<br>• Complet 300 $, base de données, intégration API &amp; application mobile<br><br>🎁 Chaque pack inclut GRATUITEMENT : domaine 1 an, hébergement, trafic illimité, référencement, sécurité, e-mails professionnels illimités et formation.` },
      { id:'contact', kw:['contact','téléphone','email','e-mail','whatsapp','adresse','joindre','appeler'],
        reply:`📞 <strong>Contacter TIH</strong><br><br>💬 WhatsApp : <a href="https://wa.me/231880559227" target="_blank" rel="noopener" style="color:#002868;font-weight:700;">+231 880 559 227</a><br>📧 E-mail : tolbertinnovationhub@gmail.com<br>☎️ Téléphone : +231 778 956 979<br>📍 Monrovia, Libéria<br>🕐 Lun–Ven 8h–18h · Sam 9h–15h (GMT)` },
      { id:'apply', kw:['postuler','candidature','inscrire','inscription','demande','appliquer'],
        reply:`📝 <strong>Comment postuler</strong><br><br>1️⃣ Vérifiez votre éligibilité<br>2️⃣ Préparez vos documents (relevés, passeport, photo…)<br>3️⃣ Envoyez votre candidature via le <a href="study-abroad" style="color:#002868;font-weight:700;">formulaire en ligne</a> ou WhatsApp<br>4️⃣ Réponse sous 5 à 7 jours ouvrables<br><br>L’accompagnement TIH est gratuit.` }
    ],
    ar: [
      { id:'greet', kw:['مرحبا','اهلا','أهلا','السلام','صباح','مساء','شكرا','مساعدة'],
        reply:`مرحباً بك! 👋 أهلاً في <strong>Tolbert Innovation Hub</strong>!<br><br>يمكنني مساعدتك بخصوص المنح الدراسية، الدورات المجانية (IELTS، TOEFL، WASSCE)، برنامج الرعاية الصحية، وخدمات البرمجيات.<br><br>كيف يمكنني مساعدتك اليوم؟` },
      { id:'about', kw:['منظمة','مؤسسة','مهمة','تولبرت','ما هي','ماهي','من أنتم'],
        reply:`🏛️ <strong>عن TIH</strong><br><br>مؤسسة ليبيرية أسسها <strong>السيد صامويل س. تولبرت</strong>. ركائزنا:<br>🎓 المنح والدراسة في الخارج (الهند وقبرص، خصم 50٪)<br>📚 دورات مجانية: IELTS وTOEFL وWASSCE والمزيد<br>🏥 الإحالة الطبية إلى مستشفيات شريكة في الهند<br>💻 تطوير المواقع والتطبيقات<br><br>📍 مونروفيا، ليبيريا · 📞 +231 880 559 227` },
      { id:'scholarship', kw:['منحة','منح','دراسة','الخارج','جامعة','الهند','قبرص','قبول','دراسية'],
        reply:`🎓 <strong>الدراسة في الخارج مع TIH</strong><br><br>نساعد الطلاب على الالتحاق بـ 20 جامعة شريكة في <strong>الهند وشمال قبرص</strong> مع <strong>منحة 50٪</strong> من الرسوم الدراسية.<br><br>✅ خدماتنا مجانية: اختيار الجامعة، تجهيز الملف، خطاب القبول، والتأشيرة.<br>🇮🇳 الهند: من 900$ سنوياً · 🇨🇾 قبرص: من 1750$ سنوياً<br><br>للتقديم تواصل عبر واتساب: +231 880 559 227` },
      { id:'courses', kw:['دورة','دورات','مجاني','مجانية','تعلم','ايلتس','توفل','شهادة','درس','دروس'],
        reply:`📚 <strong>دورات TIH المجانية</strong><br><br>• تحضير IELTS وTOEFL، 6 وحدات لكل منهما<br>• WASSCE PRO، 23 مادة مع فيديوهات وملخصات واختبارات<br>• 18 دورة مهارات: الحاسوب، ريادة الأعمال، التسويق الرقمي…<br><br>🏅 شهادة إتمام متاحة.<br>👉 <a href="learning-hub" style="color:#002868;font-weight:700;">افتح منصة التعلم</a>` },
      { id:'healthcare', kw:['صحة','طبي','مستشفى','علاج','مريض','طبيب','صحية'],
        reply:`🏥 <strong>برنامج الإحالة الطبية</strong><br><br>يربط TIH المرضى الليبيريين بمستشفيات متخصصة في الهند: القلب، الأورام، العظام، الأعصاب، والخصوبة.<br><br>ننسق الملف الطبي والمواعيد والتأشيرة.<br>📞 واتساب: +231 880 559 227` },
      { id:'software', kw:['برمجيات','موقع','تطبيق','برنامج','تطوير','سعر','تكلفة','أسعار'],
        reply:`💻 <strong>خدمات البرمجيات</strong><br><br>مواقع إلكترونية، منصات تعليمية، أنظمة إدارة الأعمال، متاجر إلكترونية، وتطبيقات جوال.<br><br>📦 عرض ترويجي، خصم 70٪:<br>• المبتدئ <s>500$</s> 150$، موقع أعمال احترافي<br>• النمو 200$، منصة تعليمية وإدارة أعمال ومتجر إلكتروني ومدفوعات<br>• المتكامل 300$، قاعدة بيانات وتكامل API وتطبيق جوال<br><br>🎁 كل باقة تشمل مجاناً: نطاقاً لمدة سنة، استضافة، زيارات غير محدودة، أرشفة بمحركات البحث، حماية قوية، بريداً مهنياً غير محدود، وتدريباً.` },
      { id:'contact', kw:['اتصال','تواصل','هاتف','بريد','واتساب','عنوان','رقم'],
        reply:`📞 <strong>تواصل مع TIH</strong><br><br>💬 واتساب: <a href="https://wa.me/231880559227" target="_blank" rel="noopener" style="color:#002868;font-weight:700;">+231 880 559 227</a><br>📧 البريد: tolbertinnovationhub@gmail.com<br>☎️ هاتف: +231 778 956 979<br>📍 مونروفيا، ليبيريا` },
      { id:'apply', kw:['تقديم','طلب','تسجيل','سجل','قدم','التحاق'],
        reply:`📝 <strong>كيفية التقديم</strong><br><br>1️⃣ تحقق من الأهلية<br>2️⃣ جهّز مستنداتك (كشوف الدرجات، جواز السفر، صورة شخصية)<br>3️⃣ أرسل طلبك عبر <a href="study-abroad" style="color:#002868;font-weight:700;">النموذج الإلكتروني</a> أو واتساب<br>4️⃣ الرد خلال 5–7 أيام عمل<br><br>مساعدة TIH مجانية بالكامل.` }
    ]
  };

  // Localized suggested-question chips (English uses the page-context chips).
  const SUGG = {
    fr: [
      { l:'🎓 Bourses d’études', intent:'scholarship' },
      { l:'📚 Cours gratuits',        intent:'courses' },
      { l:'🏥 Santé',                 intent:'healthcare' },
      { l:'💻 Logiciels',             intent:'software' },
      { l:'📞 Contact',               intent:'contact' }
    ],
    ar: [
      { l:'🎓 المنح الدراسية',   intent:'scholarship' },
      { l:'📚 دورات مجانية',     intent:'courses' },
      { l:'🏥 الرعاية الصحية',   intent:'healthcare' },
      { l:'💻 البرمجيات',        intent:'software' },
      { l:'📞 تواصل معنا',       intent:'contact' }
    ]
  };

  const FR_HINT = /\b(bonjour|salut|merci|comment|pourquoi|quel|quelle|quels|combien|où|est-ce|vous|je|suis|veux|voudrais|besoin|aide|bourse|cours|gratuit|université|étudier|santé|prix|inscription|postuler|puis-je|c’est|c'est)\b/gi;

  function detectLang(text) {
    if (/[؀-ۿ]/.test(text)) return 'ar';
    const hits = (text.match(FR_HINT) || []).length + (/[àâçéèêëîïôùûüœ]/i.test(text) ? 2 : 0);
    if (hits >= 2) return 'fr';
    if (hits >= 1 && lang === 'fr') return 'fr';
    if (/[a-z]/i.test(text)) return 'en';
    return lang;
  }

  function matchLocal(text, lng) {
    const t = text.toLowerCase();
    let best = null, bs = 0;
    (LKB[lng] || []).forEach(e => {
      let s = 0;
      e.kw.forEach(k => { if (t.includes(k)) s += k.length > 3 ? 3 : 2; });
      if (s > bs) { bs = s; best = e; }
    });
    return bs >= 2 ? best : null;
  }

  // ── SITE INDEX, automatic crawler over the whole website ─────────────────────
  // Crawls same-origin pages in the background, extracts readable text, stores a
  // compact index in localStorage (24h freshness) and always re-indexes the page
  // the visitor is on, so newly added content appears without any manual step.
  const IDX_KEY = 'tih_site_index_v1';
  const IDX_TTL = 24 * 60 * 60 * 1000;
  const IDX_MAX_PAGES = 160, IDX_MAX_BLOCKS = 80, IDX_MAX_CHARS = 300;
  const IDX_SKIP = /^(hub-admin|hub-dashboard|cert-template|course-player|grandpa-ai)$|^books\//;
  let SITE = null;      // { t: builtAt, pages:[{u,t,blocks:[{h,x,w}]}] }
  let INV = null;       // Map(token → [[pageIdx, blockIdx], …])
  let crawling = false;
  let _introIdx = 0;

  function pageKeyOf(href) {
    try {
      const u = new URL(href, window.location.href);
      if (u.origin !== window.location.origin) return null;
      let p = u.pathname.replace(/^\/+/, '').replace(/\.html$/, '');
      return p === '' ? 'index' : p;
    } catch (e) { return null; }
  }
  function crawlAllowed(key) {
    return !!key && !IDX_SKIP.test(key) &&
      !/\.(pdf|png|jpe?g|gif|svg|ico|mp3|mp4|webp|css|js|json|xml|txt|webmanifest)$/i.test(key);
  }

  function extractFromDoc(doc, key) {
    // Collect links BEFORE stripping chrome, most cross-links live in nav/footer.
    const links = [];
    doc.querySelectorAll('a[href]').forEach(a => {
      const k = pageKeyOf(a.getAttribute('href'));
      if (crawlAllowed(k)) links.push(k);
    });
    ['script','style','noscript','nav','footer','.site-header','#tih-chat-win','#tih-chat-btn','#tih-greet','.cookie-banner']
      .forEach(sel => { try { doc.querySelectorAll(sel).forEach(n => n.remove()); } catch (e) {} });
    const title = ((doc.querySelector('title') || {}).textContent || key).trim().replace(/\s+/g, ' ');
    const blocks = [{ h:'', x:title.slice(0, 140), w:5 }];
    const desc = doc.querySelector('meta[name="description"]');
    if (desc && desc.content) blocks.push({ h:'', x:desc.content.trim().slice(0, IDX_MAX_CHARS), w:3 });
    let section = '';
    const seen = new Set();
    doc.querySelectorAll('h1,h2,h3,h4,p,li,td,dt,dd,blockquote,figcaption').forEach(el => {
      if (blocks.length >= IDX_MAX_BLOCKS) return;
      const tag = el.tagName.toLowerCase();
      const text = (el.textContent || '').trim().replace(/\s+/g, ' ');
      if (!text || seen.has(text)) return;
      if (tag[0] === 'h') {
        if (text.length > 2 && text.length < 140) { section = text; seen.add(text); blocks.push({ h:section, x:text, w:4 }); }
      } else if (text.length > 25 && text.length < 600) {
        seen.add(text); blocks.push({ h:section, x:text.slice(0, IDX_MAX_CHARS), w:1 });
      }
    });
    return { page:{ u:key, t:title.slice(0, 90), blocks }, links };
  }

  function saveIndex() {
    if (!SITE) return;
    try { localStorage.setItem(IDX_KEY, JSON.stringify(SITE)); }
    catch (e) {
      try { // storage full: keep the most important half and retry once
        SITE.pages = SITE.pages.slice(0, Math.max(20, Math.floor(SITE.pages.length / 2)));
        localStorage.setItem(IDX_KEY, JSON.stringify(SITE));
      } catch (e2) {}
    }
  }
  function loadIndexFromStorage() {
    try {
      const raw = localStorage.getItem(IDX_KEY);
      if (!raw) return null;
      const d = JSON.parse(raw);
      return (d && Array.isArray(d.pages)) ? d : null;
    } catch (e) { return null; }
  }
  function mergePage(page) {
    if (!SITE) SITE = { t:0, pages:[] };
    const i = SITE.pages.findIndex(p => p.u === page.u);
    if (i >= 0) SITE.pages[i] = page; else SITE.pages.push(page);
    INV = null;
  }
  // Always index the page the visitor is currently on (instant freshness).
  function indexCurrentPage() {
    try {
      const key = pageKeyOf(window.location.href);
      if (!crawlAllowed(key)) return;
      const clone = document.implementation.createHTMLDocument('');
      clone.documentElement.innerHTML = document.documentElement.innerHTML;
      mergePage(extractFromDoc(clone, key).page);
      saveIndex();
    } catch (e) {}
  }

  function crawlSite() {
    if (crawling) return;
    crawling = true;
    const CORE = ['index','about','academy','study-abroad','fully-funded-scholarship','learning-hub','wassce',
      'healthcare','software','contact','apply','events','news','impact','team','faq','donate','library',
      'grants','certifications','success-stories','volunteer','partner-with-us','entertainment',
      'certificate-verify','hub-apply','academy-blog','privacy','terms'];
    const seenK = new Set(), queue = [];
    const enqueue = k => { if (crawlAllowed(k) && !seenK.has(k)) { seenK.add(k); queue.push(k); } };
    CORE.forEach(enqueue);
    document.querySelectorAll('a[href]').forEach(a => enqueue(pageKeyOf(a.getAttribute('href'))));
    const pages = [];
    const parser = new DOMParser();

    function worker() {
      if (!queue.length || pages.length >= IDX_MAX_PAGES) return Promise.resolve();
      const key = queue.shift();
      return fetch('/' + (key === 'index' ? '' : key), { credentials:'same-origin' })
        .then(r => (r.ok ? r.text() : Promise.reject()))
        .then(html => {
          const out = extractFromDoc(parser.parseFromString(html, 'text/html'), key);
          pages.push(out.page);
          out.links.forEach(enqueue);
        })
        .catch(() => {})
        .then(() => new Promise(res => setTimeout(res, 30)))
        .then(worker);
    }
    Promise.all([worker(), worker(), worker()]).then(() => {
      SITE = { t: Date.now(), pages };
      indexCurrentPage(); // re-merge live page on top
      saveIndex();
      INV = null;
      crawling = false;
    });
  }

  function ensureIndex() {
    if (!SITE) SITE = loadIndexFromStorage();
    indexCurrentPage();
    const stale = !SITE || !SITE.t || (Date.now() - SITE.t > IDX_TTL) || SITE.pages.length < 6;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (stale && !saveData) crawlSite();
  }

  // ── SITE SEARCH, fast local inverted-index retrieval ─────────────────────────
  const FR_STOP = new Set(['les','des','une','est','que','qui','quoi','pour','avec','vous','nous','dans','comment','pourquoi','quel','quelle','quels','sont','avez','votre','vos','sur','pas','mais','plus','par','aux','ces','cette','tout','tous','etre','avoir','fait','faire','moi','mon','mes','elle','ils','elles','ete','suis']);
  const AR_STOP = new Set(['في','من','على','إلى','عن','ما','هل','هذا','هذه','ذلك','التي','الذي','أن','إن','كان','كيف','لماذا','أين','متى','هو','هي','أنا','أنت','نحن','لكم','لكن','مع','بعد','قبل','عند','كل','أي']);

  function tokenizeQ(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .split(/[^a-z0-9؀-ۿ]+/)
      .filter(w => w.length > 1 && !STOP_WORDS.has(w) && !FR_STOP.has(w) && !AR_STOP.has(w));
  }

  function buildINV() {
    INV = new Map();
    if (!SITE) return;
    SITE.pages.forEach((p, pi) => p.blocks.forEach((b, bi) => {
      new Set(tokenizeQ((b.h ? b.h + ' ' : '') + b.x)).forEach(tok => {
        let a = INV.get(tok);
        if (!a) { a = []; INV.set(tok, a); }
        a.push([pi, bi]);
      });
    }));
  }

  function searchSite(query) {
    if (!SITE) SITE = loadIndexFromStorage();
    if (!SITE || !SITE.pages.length) return [];
    if (!INV) buildINV();
    const toks = [...new Set(tokenizeQ(query))].slice(0, 8);
    if (!toks.length) return [];
    const scores = new Map();
    toks.forEach(tok => {
      let posts = INV.get(tok);
      if (!posts && tok.length >= 4) {           // prefix fallback for typos/partials
        for (const [k, v] of INV) { if (k.startsWith(tok)) { posts = v; break; } }
      }
      if (!posts) return;
      posts.forEach(([pi, bi]) => {
        const key = pi + ':' + bi;
        scores.set(key, (scores.get(key) || 0) + SITE.pages[pi].blocks[bi].w + 1);
      });
    });
    const qlow = query.toLowerCase();
    const cands = [...scores.entries()].sort((a, b) => b[1] - a[1]).slice(0, 40).map(([k, s]) => {
      const [pi, bi] = k.split(':').map(Number);
      const b = SITE.pages[pi].blocks[bi];
      let sc = s;
      const blow = (b.h + ' ' + b.x).toLowerCase();
      for (let i = 0; i < toks.length - 1; i++) { if (blow.includes(toks[i] + ' ' + toks[i + 1])) sc += 6; }
      if (qlow.length > 6 && blow.includes(qlow)) sc += 8;
      return { pi, score: sc, page: SITE.pages[pi], block: b };
    }).sort((a, b) => b.score - a.score);
    const byPage = new Map();
    cands.forEach(c => { const cur = byPage.get(c.pi); if (!cur || c.score > cur.score) byPage.set(c.pi, c); });
    return [...byPage.values()].sort((a, b) => b.score - a.score).slice(0, 3);
  }

  const escAttr = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const shortTitle = t => String(t).split('|')[0].split(':')[0].trim().slice(0, 48) || 'Page';

  function composeSiteAnswer(q, results, lng) {
    const L = T[lng] || T.en;
    const intro = L.foundIntro[(_introIdx++) % L.foundIntro.length](escAttr(q).slice(0, 80));
    const best = results[0];
    const sec = best.block.h && best.block.h !== best.block.x
      ? `<strong>${escAttr(best.block.h)}</strong><br>` : '';
    let html = intro + '<br><br>' + sec +
      escAttr(best.block.x) + (best.block.x.length >= IDX_MAX_CHARS ? '…' : '') + '<br><br>';
    if (lng !== 'en' && L.note) html += `<span style="font-size:.78rem;color:#64748b;">${L.note}</span><br><br>`;
    html += `${L.readMore} <a class="tih-src" href="/${escAttr(best.page.u)}">📄 ${escAttr(shortTitle(best.page.t))}</a>`;
    if (results.length > 1) {
      html += `<br>${L.also} ` + results.slice(1).map(r =>
        `<a class="tih-src" href="/${escAttr(r.page.u)}">📄 ${escAttr(shortTitle(r.page.t))}</a>`).join(' ');
    }
    return html;
  }

  // ── CONVERSATION HISTORY (persistent) ────────────────────────────────────────
  const HIST_KEY = 'tih_chat_hist_v1', HIST_MAX = 60;
  let HIST = [];
  try { HIST = JSON.parse(localStorage.getItem(HIST_KEY) || '[]'); if (!Array.isArray(HIST)) HIST = []; } catch (e) { HIST = []; }
  function histPush(w, h) {
    HIST.push({ w, h, t: Date.now() });
    if (HIST.length > HIST_MAX) HIST = HIST.slice(-HIST_MAX);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(HIST)); } catch (e) {}
  }
  function histClear() {
    HIST = [];
    try { localStorage.removeItem(HIST_KEY); } catch (e) {}
  }

  // ── DOM ───────────────────────────────────────────────────────────────────────
  const LOGO_URL = 'assets/tih-logo.png';
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
        <div class="tih-hdr-status" id="tih-hdr-status">Online, Ready to help</div>
      </div>
      <div class="tih-hdr-btns">
        <button class="tih-hdr-btn" id="tih-lang-btn" title="Language" aria-label="Change language">🌐 EN</button>
        <button class="tih-hdr-btn" id="tih-clear-btn" title="Clear chat" aria-label="Clear chat">🗑</button>
        <button class="tih-hdr-btn" id="tih-close-btn" aria-label="Close chat">✕</button>
      </div>
    </div>
    <div class="tih-page-ctx" id="tih-page-ctx">${esc(ctx.label)}</div>
    <div class="tih-msgs" id="tih-msgs" aria-live="polite"></div>
    <div class="tih-foot">
      <input class="tih-inp" id="tih-inp" type="text" placeholder="Ask me anything about TIH…" autocomplete="off" maxlength="300" />
      <button id="tih-mic" aria-label="Voice input" title="Voice input">
        <svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"/></svg>
      </button>
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

  function timeStr() {
    const d = new Date();
    return d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  }

  const AV_HTML = `<div class="tih-av bot"><img src="${LOGO_URL}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span style="display:none">TI</span></div>`;

  // Typewriter effect: reveals the reply word by word, keeping HTML intact.
  let _reduceMotion = false;
  try { _reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  function streamInto(el, html, done) {
    if (_reduceMotion || html.length > 4500) { el.innerHTML = html; if (done) done(); return; }
    const parts = html.split(/(<[^>]+>|\s+)/).filter(Boolean);
    let i = 0, acc = '';
    el.classList.add('tih-stream');
    (function step() {
      let words = 0;
      while (i < parts.length && words < 3) {
        const p = parts[i++];
        acc += p;
        if (!/^\s+$/.test(p) && p[0] !== '<') words++;
      }
      el.innerHTML = acc;
      scroll();
      if (i < parts.length) setTimeout(step, 24);
      else { el.classList.remove('tih-stream'); if (done) done(); }
    })();
  }

  // qrs items: plain string (routed through onQR) or {l:label, fn:action}.
  function botMsg(html, qrs, opts) {
    opts = opts || {};
    const wrap = document.createElement('div');
    wrap.style.display = 'contents';

    const row = document.createElement('div');
    row.className = 'tih-row bot';
    row.innerHTML = `${AV_HTML}<div class="tih-bub"></div>`;
    wrap.appendChild(row);
    const bub = row.querySelector('.tih-bub');

    const tsEl = document.createElement('div');
    tsEl.className = 'tih-ts';
    tsEl.textContent = timeStr();
    wrap.appendChild(tsEl);
    msgsEl.appendChild(wrap);
    scroll();

    const finish = () => {
      if (qrs && qrs.length) {
        const bar = document.createElement('div');
        bar.className = 'tih-qrs';
        qrs.forEach(item => {
          const isObj = item && typeof item === 'object';
          const label = isObj ? item.l : item;
          const b = document.createElement('button');
          b.className = 'tih-qr'; b.textContent = label;
          b.addEventListener('click', () => {
            bar.remove();
            if (isObj) { userMsg(label); type(500, item.fn); }
            else onQR(label);
          });
          bar.appendChild(b);
        });
        wrap.appendChild(bar);
        scroll();
      }
    };

    if (opts.stream === false) { bub.innerHTML = html; finish(); }
    else streamInto(bub, html, finish);
    if (opts.save !== false) histPush('b', html);
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
    histPush('u', esc(text));
  }

  // Suggested-question chips for the active language.
  function suggestedChips(excludeId) {
    if (lang === 'en') return getPageCtx().qr;
    return (SUGG[lang] || []).filter(c => c.intent !== excludeId).map(c => ({
      l: c.l,
      fn: () => {
        const e = (LKB[lang] || []).find(x => x.id === c.intent);
        if (e) botMsg(e.reply, suggestedChips(e.id));
      }
    }));
  }

  // Apply a language across the widget (placeholder, status, direction, labels).
  function setLang(l) {
    if (!T[l]) l = 'en';
    lang = l;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
    const L = T[l];
    chatWin.setAttribute('dir', L.dir);
    inpEl.placeholder = L.placeholder;
    const st = document.getElementById('tih-hdr-status'); if (st) st.textContent = L.status;
    const lb = document.getElementById('tih-lang-btn');   if (lb) { lb.textContent = '🌐 ' + L.flag; lb.title = L.langTitle; }
    const mic = document.getElementById('tih-mic');       if (mic) mic.title = L.micTitle;
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
  function restoreHistory() {
    divider(T[lang].earlier);
    HIST.forEach(m => {
      const row = document.createElement('div');
      row.className = 'tih-row ' + (m.w === 'b' ? 'bot' : 'user');
      row.innerHTML = m.w === 'b' ? `${AV_HTML}<div class="tih-bub">${m.h}</div>` : `<div class="tih-bub">${m.h}</div>`;
      msgsEl.appendChild(row);
    });
    scroll();
    type(500, () => botMsg(T[lang].welcomeBack, suggestedChips(), { save:false, stream:false }));
  }

  function openChat() {
    chatWin.classList.add('open');
    document.body.classList.add('tih-chat-open'); // hide floating WA/audio buttons
    document.getElementById('tih-chat-badge').style.display = 'none';
    ensureIndex(); // keep the site index warm & fresh
    if (!msgsEl.children.length) {
      if (HIST.length) { restoreHistory(); }
      else {
        divider(T[lang].today);
        buildPageIndex(); // pre-build current-page index while user reads greeting
        const pageCtx = getPageCtx();
        const localGreet = lang !== 'en' && (LKB[lang] || []).find(x => x.id === 'greet');
        const greeting = localGreet ? localGreet.reply : buildWelcome(pageCtx);
        type(800, () => { botMsg(greeting, suggestedChips(), { save:false }); });
      }
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
    return `Hello! 👋 Welcome to <strong>Tolbert Innovation Hub</strong>!<br><br>I'm your TIH Assistant, I can answer questions about scholarships, free IELTS/TOEFL prep, healthcare referrals, software services, and more.<br><br>What can I help you with today?`;
  }

  function closeChat() {
    chatWin.classList.remove('open');
    document.body.classList.remove('tih-chat-open'); // restore floating WA/audio buttons
  }
  chatBtn.addEventListener('click', () =>
    chatWin.classList.contains('open') ? closeChat() : openChat()
  );
  document.getElementById('tih-close-btn').addEventListener('click', closeChat);

  // ── Proactive greeting bubble (once per browser session) ───────────────────────
  (function () {
    try {
      if (sessionStorage.getItem('tih_greet_shown')) return;
      var greet = document.createElement('div');
      greet.id = 'tih-greet';
      greet.setAttribute('role', 'button');
      greet.setAttribute('aria-label', 'Open chat, need help?');
      greet.innerHTML = '<button id="tih-greet-close" aria-label="Dismiss">✕</button>'
        + '👋 <strong>Need help?</strong> Ask me about scholarships, courses, WASSCE or anything TIH.';
      document.body.appendChild(greet);
      var dismissed = false;
      function hideGreet() {
        if (dismissed) return;
        dismissed = true;
        greet.classList.remove('show');
        try { sessionStorage.setItem('tih_greet_shown', '1'); } catch (e) {}
        setTimeout(function () { if (greet.parentNode) greet.remove(); }, 320);
      }
      // Show after a short delay, only if the chat hasn't been opened yet.
      setTimeout(function () {
        if (!dismissed && !chatWin.classList.contains('open')) greet.classList.add('show');
      }, 4500);
      // Auto-dismiss after a while so it isn't nagging.
      setTimeout(hideGreet, 17000);
      greet.querySelector('#tih-greet-close').addEventListener('click', function (e) {
        e.stopPropagation(); hideGreet();
      });
      greet.addEventListener('click', function () { hideGreet(); openChat(); });
      chatBtn.addEventListener('click', hideGreet);
    } catch (e) { /* non-fatal */ }
  })();
  document.getElementById('tih-clear-btn').addEventListener('click', () => {
    msgsEl.innerHTML = '';
    flow = null;
    histClear();
    divider(T[lang].today);
    const pageCtx = getPageCtx();
    const localGreet = lang !== 'en' && (LKB[lang] || []).find(x => x.id === 'greet');
    type(600, () => botMsg(localGreet ? localGreet.reply : buildWelcome(pageCtx), suggestedChips(), { save:false }));
  });

  // ── Language switch (EN → FR → AR) ──────────────────────────────────────────
  document.getElementById('tih-lang-btn').addEventListener('click', () => {
    const order = ['en', 'fr', 'ar'];
    setLang(order[(order.indexOf(lang) + 1) % order.length]);
    if (chatWin.classList.contains('open')) {
      type(350, () => botMsg(T[lang].langSet, suggestedChips(), { save:false, stream:false }));
    }
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
💬 <strong>WhatsApp (fastest, replies in minutes):</strong><br>
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
      'ielts classroom':      'learning-hub',
      'start ielts':          'learning-hub',
      'go to ielts':          'learning-hub',
      'ielts module 1':       'learning-hub',
      'ielts module 2':       'learning-hub',
      'module 2, reading':   'learning-hub',
      'ielts module 3':       'learning-hub',
      'module 3, writing':   'learning-hub',
      'ielts module 4':       'learning-hub',
      'module 4, listening': 'learning-hub',
      'ielts module 5':       'learning-hub',
      'module 5, speaking':  'learning-hub',
      'ielts module 6':       'learning-hub',
      'toefl classroom':      'learning-hub',
      'start toefl':          'learning-hub',
      'go to toefl':          'learning-hub',
      'request ielts certificate': 'learning-hub',
      'ielts certificate':    'learning-hub',
      'request toefl certificate': 'learning-hub',
      'toefl certificate':    'learning-hub',
      'view full pricing':    'software#pricing',
      'full pricing':         'software#pricing',
      'view portfolio':       'software#portfolio',
      'partner hospitals':    'healthcare',
      'view healthcare page': 'healthcare',
      'healthcare page':      'healthcare',
      'donate page':          'donate#donate-now',
      'go to donate':         'donate#donate-now',
      'events page':          'events',
      'view events page':     'events',
      'register for event':   'events#register',
      'view all news':        'news',
      'all news':             'news',
      'faq page':             'faq',
      'go to faq page':       'faq',
      'contact form':         'contact#contact-form',
      'contact page':         'contact',
      'resource center':      'learning-hub',
      'success stories':      'success-stories',
      'more success stories': 'success-stories',
      'view impact report':   'impact',
      'view impact':          'impact',
      'leadership page':      'leadership',
      'volunteer page':       'volunteer',
      'partner with us page': 'partner-with-us',
      'full team page':       'team',
      'meet the team':        'team',
      'view full team page':  'team',
      'go to application form':'study-abroad#application-form',
      'application form':     'study-abroad#application-form',
      'iccr scholarship':     'fully-funded-scholarship',
      'iccr details':         'fully-funded-scholarship',
      'fully funded':         'fully-funded-scholarship',
      'apply before deadline':'study-abroad#application-form',
      'send email':           'mailto:tolbertinnovationhub@gmail.com',
      'view all scholarships':'fully-funded-scholarship#more-scholarships',
      'all scholarships':     'fully-funded-scholarship#more-scholarships',
      'other scholarships':   'fully-funded-scholarship#more-scholarships',
      'more scholarships':    'fully-funded-scholarship#more-scholarships',
      'chevening':            'fully-funded-scholarship#more-scholarships',
      'fulbright':            'fully-funded-scholarship#more-scholarships',
      'daad':                 'fully-funded-scholarship#more-scholarships',
      'application feedback': 'contact',
      'improve ielts score':  'learning-hub',
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

    // Fall through, use knowledge base
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
      if (!val) { ctrl.style.borderColor = '#E31E24'; ctrl.focus(); return; }
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
    const payload = { ...flow.data, _subject: f.subject + ', Tolbert Innovation Hub', _template:'table', _captcha:'false', Source:'TIH Chatbot' };
    flow = null;
    type(900, async () => {
      botMsg('Submitting your application… ⏳');
      try {
        const res  = await fetch('https://formsubmit.co/ajax/tolbertinnovationhub@gmail.com', { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify(payload) });
        const json = await res.json();
        if (json.success === true || json.success === 'true') {
          type(600, () => botMsg(`✅ <strong>Application Submitted!</strong><br><br>Thank you! The TIH team will contact you within <strong>24–48 hours</strong> by email or WhatsApp.<br><br>Is there anything else I can help with?`,
            ['🎓 Scholarships','📚 Free Learning Hub','📞 Contact','🔙 Main Menu']));
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

    // Detect the visitor's language and reply in it (EN / FR / AR).
    const msgLang = detectLang(text);
    if (msgLang !== lang) setLang(msgLang);

    // French / Arabic: localized intents → site-wide search → localized fallback.
    if (msgLang !== 'en') {
      const le = matchLocal(text, msgLang);
      type(Math.min(500 + text.length * 8, 1200), () => {
        if (le) { botMsg(le.reply, suggestedChips(le.id)); return; }
        const res = searchSite(text);
        if (res.length && res[0].score >= 5) {
          botMsg(composeSiteAnswer(text, res, msgLang), suggestedChips());
          return;
        }
        botMsg(T[msgLang].noResult(escAttr(text).slice(0, 80)) + '<br><br>' + T[msgLang].contactBlock, suggestedChips());
      });
      return;
    }

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

    const { confidence, entry, score: kbScore } = findBestMatch(text);
    const delay = Math.min(600 + text.length * 10, 1400);

    type(delay, () => {
      // Site-wide search over the auto-built index of every page.
      const res = searchSite(text);
      const strong = res.length && res[0].score >= 6;
      const siteVeryStrong = res.length && res[0].score >= 10;
      // Curated answers win, unless the keyword match is thin and the site
      // index has a clearly stronger, more specific answer.
      if (confidence === 'high' && entry.reply && !(kbScore < 6 && siteVeryStrong)) {
        botMsg(entry.reply, entry.qr);
        return;
      }
      if (confidence === 'medium' && entry.reply && !strong) {
        const note = `<span style="font-size:.78rem;color:#64748b;display:block;margin-top:8px;border-top:1px solid #e2e8f0;padding-top:6px;">💡 Not exactly what you needed? <a href="https://wa.me/231880559227" target="_blank" style="color:#002868;font-weight:700;">WhatsApp us</a> for a precise answer.</span>`;
        const qrs = [...(entry.qr || [])];
        if (!qrs.includes('💬 Talk to Human')) qrs.push('💬 Talk to Human');
        botMsg(entry.reply + note, qrs);
        return;
      }
      if (res.length && res[0].score >= 5) {
        botMsg(composeSiteAnswer(text, res, 'en'), getPageCtx().qr);
        return;
      }
      if (confidence === 'medium' && entry.reply) {
        botMsg(entry.reply, entry.qr);
        return;
      }
      // Current-page content as a last resort before the human fallback.
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
    });
  }

  sendEl.addEventListener('click', send);
  inpEl.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

  // ── Voice input (browser speech recognition, no external service) ────────────
  (function () {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const mic = document.getElementById('tih-mic');
    if (!mic) return;
    if (!SR) { mic.style.display = 'none'; return; }
    let rec = null, on = false;
    mic.addEventListener('click', () => {
      if (on) { try { rec.stop(); } catch (e) {} return; }
      rec = new SR();
      rec.lang = T[lang].voice;
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      on = true;
      mic.classList.add('on');
      inpEl.placeholder = T[lang].listening;
      rec.onresult = e => { inpEl.value = (e.results[0][0].transcript || '').trim(); };
      rec.onend = () => {
        on = false;
        mic.classList.remove('on');
        inpEl.placeholder = T[lang].placeholder;
        if (inpEl.value.trim()) send();
      };
      rec.onerror = () => {
        on = false;
        mic.classList.remove('on');
        inpEl.placeholder = T[lang].placeholder;
      };
      try { rec.start(); } catch (e) { on = false; mic.classList.remove('on'); }
    });
  })();

  // ── Init: apply saved language, warm the site index in the background ───────
  setLang(lang);
  if (document.readyState === 'complete') setTimeout(ensureIndex, 2500);
  else window.addEventListener('load', () => setTimeout(ensureIndex, 2500));

})();
