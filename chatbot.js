// Tolbert Innovation Hub — Chat Assistant v2
// Comprehensive knowledge base + scoring-based matching
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
    @keyframes tih-pulse { 0%,100%{transform:scale(1)}50%{transform:scale(1.2)} }
    #tih-chat-win {
      position: fixed; bottom: 5.5rem; left: 1.5rem; z-index: 950;
      width: 370px; max-width: calc(100vw - 2rem);
      height: 540px; max-height: calc(100vh - 7rem);
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
      font-size: 0.62rem; font-weight: 800;
    }
    .tih-bub { padding: 9px 13px; border-radius: 16px; line-height: 1.6; max-width: 100%; }
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
    .tih-dot { width: 7px; height: 7px; border-radius: 50%; background: #94a3b8; animation: tih-boun 1.2s infinite; }
    .tih-dot:nth-child(2){animation-delay:.2s} .tih-dot:nth-child(3){animation-delay:.4s}
    @keyframes tih-boun { 0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)} }
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
    .tih-prog { align-self: flex-start; font-size: 0.74rem; color: #64748b; padding: 0 0 2px 45px; }
    @media (max-width: 420px) { #tih-chat-win { left: 0.5rem; right: 0.5rem; width: auto; } }
  `;
  document.head.appendChild(styleEl);

  // ── COMPREHENSIVE KNOWLEDGE BASE ─────────────────────────────────────────
  // Each entry: { id, keywords[], reply, qr[] }
  // keywords = words/phrases to score against user input
  const KB = [

    // ── GREETING ──
    {
      id: 'greet',
      keywords: ['hello','hi','hey','good morning','good evening','good afternoon','howdy','greetings','what can you do','who are you','help me','assist'],
      reply: `Hello! 👋 Welcome to <strong>Tolbert Innovation Hub</strong>!<br><br>
I'm TIH Assistant — I can answer questions about our programs, application process, fees, team, and more. What would you like to know?`,
      qr: ['🎓 Scholarships','📚 IELTS/TOEFL','🏥 Healthcare','💻 Software','📝 Apply Now','📞 Contact']
    },

    // ── WHAT IS TIH ──
    {
      id: 'about_tih',
      keywords: ['what is tih','what is tolbert','about tolbert','tell me about','what does tih do','who is tolbert innovation','organization','ngo','nonprofit','what you do','what do you offer','what programs','overview'],
      reply: `🏛️ <strong>About Tolbert Innovation Hub</strong><br><br>
Tolbert Innovation Hub (TIH) is a Liberian organization founded by <strong>Mr. Samuel S. Tolbert</strong> that empowers youth through:<br>
• 🎓 <strong>Scholarship & Study Abroad</strong> — guidance, document prep, admission letters<br>
• 🏥 <strong>Healthcare Exposure Program</strong> — international medical referrals<br>
• 💻 <strong>Software & Digital Innovation</strong> — websites, apps, business systems<br>
• 📚 <strong>Free IELTS/TOEFL Classroom</strong> — 6 modules, 100% free<br><br>
📍 Based in <strong>Liberia, West Africa</strong> | 📞 +231 880 559 227`,
      qr: ['🎓 Scholarships','🏥 Healthcare','💻 Software','📚 Free Classroom','👤 Our Founder','📞 Contact']
    },

    // ── FOUNDER ──
    {
      id: 'founder',
      keywords: ['founder','founded','samuel','tolbert','samuel tolbert','who started','who created','ceo','chief executive','leadership','who runs','who is in charge','mr tolbert','mr samuel'],
      reply: `👤 <strong>Our Founder — Mr. Samuel S. Tolbert</strong><br><br>
Tolbert Innovation Hub was founded by <strong>Mr. Samuel S. Tolbert</strong>, who serves as CEO. He established TIH with a mission to bridge the gap between Liberian talent and global opportunity.<br><br>
Under his leadership, TIH has:<br>
• Supported 500+ students with scholarship guidance<br>
• Coordinated healthcare referrals to India<br>
• Delivered digital solutions to Liberian businesses<br>
• Built a free IELTS/TOEFL classroom for all students`,
      qr: ['📄 Leadership Page','👥 Meet the Team','📞 Contact Mr. Tolbert','🔙 Main Menu']
    },

    // ── TEAM ──
    {
      id: 'team',
      keywords: ['team','staff','employees','members','who works','esther','alieu','christlove','feature cartee','precelia','administrative','officer','manager'],
      reply: `👥 <strong>The TIH Team</strong><br><br>
• <strong>Samuel S. Tolbert</strong> — Founder & CEO<br>
• <strong>Esther Boakai</strong> — Chief Administrative Officer<br>
• <strong>Alieu Saysay</strong> — General Manager<br>
• <strong>Christlove P. Jaye</strong> — Financial Officer<br>
• <strong>Feature A. Cartee</strong> — Administrative Assistant<br>
• <strong>Precelia Jallah</strong> — Media & Communications Officer`,
      qr: ['👥 View Full Team Page','👤 Our Founder','📞 Contact','🔙 Main Menu']
    },

    // ── SCHOLARSHIP (GENERAL) ──
    {
      id: 'scholarship',
      keywords: ['scholarship','study abroad','international school','university abroad','admission','study overseas','apply school','foreign university','higher education','bachelor','master','phd','postgraduate','undergraduate','degree','academic','enroll university'],
      reply: `🎓 <strong>Scholarship & Study Abroad Program</strong><br><br>
TIH offers two scholarship pathways:<br><br>
<strong>1. Study Abroad Program</strong><br>
Eligibility guidance, document preparation, and admission letter issuance for international universities.<br><br>
<strong>2. ICCR Fully Funded Scholarship</strong><br>
India-Africa Maitri initiative — covers <em>full tuition, monthly stipend, return airfare, visa support, hostel</em>.<br>
Eligibility: Liberian citizens, age 18–40 (UG/PG) or up to 50 (PhD).<br><br>
📅 <strong>2026 deadline: July 15, 2026</strong>`,
      qr: ['📝 Apply for Scholarship','🏆 ICCR Fully Funded','✅ Requirements','📋 Documents Needed','🔙 Main Menu']
    },

    // ── ICCR SCHOLARSHIP ──
    {
      id: 'iccr',
      keywords: ['iccr','fully funded','india scholarship','india africa','maitri','free scholarship','government scholarship','india government','tuition free','stipend','airfare covered','hostel','living allowance'],
      reply: `🏆 <strong>ICCR Fully Funded Scholarship (2026–2027)</strong><br><br>
Offered by the <strong>Government of India</strong> under the India-Africa Maitri initiative.<br><br>
✅ <strong>What's covered:</strong><br>
• Full tuition (paid to university)<br>
• Monthly living stipend<br>
• Return airfare (economy)<br>
• Visa support through Indian Mission<br>
• Hostel accommodation (subject to availability)<br>
• Personal medical insurance (arranged by student)<br><br>
✅ <strong>Eligibility:</strong> Liberian citizen · Age 18–40 (UG/PG), up to 50 (PhD) · English proficiency · Strong academics<br><br>
📅 Application deadline: <strong>21 April 2026</strong>`,
      qr: ['📝 Apply ICCR Scholarship','📋 Documents Needed','📞 Contact TIH','🔙 Main Menu']
    },

    // ── REQUIREMENTS / DOCUMENTS ──
    {
      id: 'requirements',
      keywords: ['requirements','documents','eligible','eligibility','qualify','who can apply','criteria','passport','transcript','certificate','reference letter','personal statement','photo','what do i need','what is needed','can i apply','do i qualify'],
      reply: `📋 <strong>Scholarship Requirements & Documents</strong><br><br>
<strong>General documents:</strong><br>
• National ID or valid Passport<br>
• Academic transcripts / certificates<br>
• Personal statement (500–800 words)<br>
• 2 recommendation/reference letters<br>
• Passport-size photograph<br>
• IELTS/TOEFL score (recommended)<br><br>
<strong>ICCR specific:</strong><br>
• Liberian citizenship proof<br>
• Age 18–40 (UG/PG) or up to 50 (PhD)<br>
• English proficiency (essay, TOEFL, IELTS, or Duolingo)`,
      qr: ['📝 Apply Now','📚 Get IELTS/TOEFL Prep','📞 Get Help','🔙 Main Menu']
    },

    // ── APPLICATION PROCESS ──
    {
      id: 'apply_process',
      keywords: ['how to apply','application process','steps to apply','how do i apply','apply online','submit application','what are the steps','how long does it take','application procedure','how to register','sign up','enrollment process','apply for'],
      reply: `📝 <strong>How to Apply — Step by Step</strong><br><br>
<strong>Step 1:</strong> Check your eligibility (age, education level, nationality)<br>
<strong>Step 2:</strong> Prepare your documents (transcripts, ID, personal statement, references)<br>
<strong>Step 3:</strong> Take IELTS or TOEFL (use our free classroom to prepare)<br>
<strong>Step 4:</strong> Submit via the Study Abroad portal or this chat<br>
<strong>Step 5:</strong> TIH reviews your application within 5–7 business days<br>
<strong>Step 6:</strong> Receive your admission letter or scholarship guidance<br><br>
📌 Apply directly on our website or start the application here in chat.`,
      qr: ['📝 Start Application in Chat','🌐 Go to Application Form','📋 Requirements','🔙 Main Menu']
    },

    // ── IELTS CLASSROOM ──
    {
      id: 'ielts',
      keywords: ['ielts','ielts prep','ielts preparation','ielts class','ielts module','ielts band','ielts score','ielts test','ielts exam','band score','reading writing listening speaking','general training','academic ielts','british council'],
      reply: `📚 <strong>Free IELTS Preparation Classroom</strong><br><br>
Our IELTS classroom has <strong>6 structured modules</strong>:<br>
• Module 1: IELTS Orientation & Overview<br>
• Module 2: Reading Skills<br>
• Module 3: Writing Skills<br>
• Module 4: Listening Skills<br>
• Module 5: Speaking Skills<br>
• Module 6: Full Mock Exam<br><br>
🆓 <strong>100% free</strong> for all students. Access immediately — no signup required.<br>
🏅 Complete Module 6 to request your <strong>Certificate of Completion</strong> ($5 fee).`,
      qr: ['📖 Go to IELTS Classroom','🏅 Request IELTS Certificate','📖 TOEFL Classroom','🔙 Main Menu']
    },

    // ── TOEFL CLASSROOM ──
    {
      id: 'toefl',
      keywords: ['toefl','toefl prep','toefl preparation','toefl class','toefl module','toefl score','toefl test','toefl exam','ets','ibt','toefl ibt'],
      reply: `📚 <strong>Free TOEFL Preparation Classroom</strong><br><br>
Our TOEFL classroom has <strong>6 structured modules</strong>:<br>
• Module 1: TOEFL Orientation<br>
• Module 2: Reading Section<br>
• Module 3: Listening Section<br>
• Module 4: Speaking Section<br>
• Module 5: Writing Section<br>
• Module 6: Full Mock Exam<br><br>
🆓 <strong>100% free</strong> for all students — access instantly.<br>
🏅 Complete Module 6 to request your <strong>Certificate of Completion</strong> ($5 fee).`,
      qr: ['📖 Go to TOEFL Classroom','🏅 Request TOEFL Certificate','📖 IELTS Classroom','🔙 Main Menu']
    },

    // ── CLASSROOM GENERAL ──
    {
      id: 'classroom',
      keywords: ['classroom','free class','free course','online learning','study platform','modules','lesson','practice test','mock exam','exam preparation','english exam','exam prep','language test','free training','online course'],
      reply: `🏫 <strong>TIH Free Classroom</strong><br><br>
We offer two free exam preparation tracks:<br><br>
📗 <strong>IELTS Preparation</strong> — 6 modules covering all 4 skills + mock exam<br>
📘 <strong>TOEFL Preparation</strong> — 6 modules covering Reading, Listening, Speaking, Writing + mock exam<br><br>
Also available:<br>
• Practice tests<br>
• Video lessons<br>
• Study materials & resource center<br>
• Certificate of Completion ($5 after mock exam)<br><br>
🆓 <strong>Everything is completely free.</strong>`,
      qr: ['📖 IELTS Classroom','📖 TOEFL Classroom','🏅 Get a Certificate','📁 Resource Center','🔙 Main Menu']
    },

    // ── CERTIFICATE ──
    {
      id: 'certificate',
      keywords: ['certificate','certification','completion certificate','how to get certificate','certificate request','cert request','certificate fee','get certified','proof of completion','certificate after exam'],
      reply: `🏅 <strong>Certificate of Completion</strong><br><br>
After completing the <strong>mock exam</strong> (Module 6) you can request a TIH Certificate of Completion.<br><br>
📋 <strong>Process:</strong><br>
1. Complete the IELTS or TOEFL mock exam<br>
2. Pay the <strong>$5 certificate processing fee</strong><br>
3. Submit the certificate request form<br><br>
📦 <strong>Delivery options:</strong> Email or collect in person at TIH office<br>
⏱️ Processing time: <strong>24–48 hours</strong> after payment verification<br><br>
The certificate includes: your name, score, course title, institution, completion date, certificate ID, and official signature/seal.`,
      qr: ['📝 Request IELTS Certificate','📝 Request TOEFL Certificate','💰 Payment Methods','🔙 Main Menu']
    },

    // ── HEALTHCARE ──
    {
      id: 'healthcare',
      keywords: ['healthcare','medical','hospital','treatment','doctor','patient','health','specialist','india treatment','referral','surgery','medical care','sick','illness','disease','hospital referral','healthcare program','medical abroad','india hospital'],
      reply: `🏥 <strong>International Healthcare Exposure Program</strong><br><br>
TIH connects Liberian patients and families to quality medical treatment abroad:<br><br>
• Medical case intake & assessment<br>
• Specialist referrals to partner hospitals (India & beyond)<br>
• Hospital coordination & appointment support<br>
• Travel guidance & visa assistance<br>
• Ongoing patient follow-up support<br><br>
🏨 <strong>Partner hospitals</strong> in India include top specialist centers in cardiology, oncology, orthopedics, neurology, and more.<br><br>
To submit a healthcare inquiry, contact us or apply through the form.`,
      qr: ['📝 Submit Healthcare Request','🏨 Partner Hospitals','📞 WhatsApp Us','🔙 Main Menu']
    },

    // ── PARTNER HOSPITALS ──
    {
      id: 'hospitals',
      keywords: ['hospital','partner hospital','which hospital','hospital in india','medical center','clinic','specialist center','which doctor','surgery in india','treatment india','cancer treatment','heart surgery','orthopedic','neurology'],
      reply: `🏨 <strong>Our Partner Hospital Network</strong><br><br>
TIH works with leading hospitals in India offering specialist care including:<br>
• Cardiology & heart surgery<br>
• Oncology (cancer treatment)<br>
• Orthopedics & joint replacement<br>
• Neurology & neurosurgery<br>
• Fertility & reproductive health<br>
• General surgery & diagnostics<br><br>
We coordinate appointments, medical records translation, visa support, and local assistance in India.<br><br>
Visit our <strong>Healthcare page</strong> for the full hospital network list.`,
      qr: ['🌐 View Healthcare Page','📝 Submit Healthcare Request','📞 Contact Us','🔙 Main Menu']
    },

    // ── SOFTWARE ──
    {
      id: 'software',
      keywords: ['software','website','web app','web development','mobile app','digital','technology','business system','platform','it service','build website','create app','develop','programming','coding','tech solution','digital solution','e-commerce','management system','pos system','inventory'],
      reply: `💻 <strong>Software & Digital Innovation Services</strong><br><br>
We help Liberian businesses modernize with:<br>
• Custom websites & web applications<br>
• Business management systems (POS, inventory, HR)<br>
• Mobile application development<br>
• E-commerce platforms<br>
• Digital strategy & consultation<br>
• Process automation & optimization<br><br>
📦 <strong>Service packages:</strong><br>
• <strong>Starter</strong> — $150 (basic website)<br>
• <strong>Professional</strong> — $400 (full web app)<br>
• <strong>Enterprise</strong> — Custom quote`,
      qr: ['📝 Request Consultation','💰 View Full Pricing','🗂️ View Portfolio','🔙 Main Menu']
    },

    // ── PRICING ──
    {
      id: 'pricing',
      keywords: ['price','pricing','cost','fee','how much','payment','pay','charge','rate','package','affordable','expensive','free','discount','budget','amount','money'],
      reply: `💰 <strong>TIH Fees & Pricing</strong><br><br>
<strong>Education:</strong><br>
• Scholarship guidance — <strong>Free</strong><br>
• IELTS/TOEFL classroom — <strong>100% Free</strong><br>
• Completion certificate — <strong>$5 USD</strong><br><br>
<strong>Software Services:</strong><br>
• Starter package — <strong>$150</strong> (basic website)<br>
• Professional package — <strong>$400</strong> (full web application)<br>
• Enterprise — <strong>Custom quote</strong><br><br>
<strong>Healthcare:</strong><br>
• Program coordination — Contact us for details<br><br>
<strong>Donation to TIH:</strong> From $5 — any amount helps!`,
      qr: ['💻 Software Details','🎓 Apply Free','❤️ Donate','📞 Contact','🔙 Main Menu']
    },

    // ── CONTACT ──
    {
      id: 'contact',
      keywords: ['contact','phone','email','whatsapp','reach us','get in touch','office','location','address','hours','call','where are you','how to reach','contact details','monrovia','liberia office'],
      reply: `📞 <strong>Contact Tolbert Innovation Hub</strong><br><br>
📱 <strong>Phone/WhatsApp:</strong> +231 880 559 227<br>
📱 <strong>Alt Phone:</strong> +231 778 956 979<br>
📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com<br>
📍 <strong>Office:</strong> Spriggs Payne Airport, Sinkor, Monrovia, Liberia<br><br>
🕐 <strong>Operating hours:</strong><br>
Mon–Fri: 8:00 AM – 6:00 PM (GMT)<br>
Saturday: 9:00 AM – 3:00 PM (GMT)<br>
Sunday: Closed<br><br>
💬 <strong>WhatsApp is the fastest way to reach us!</strong>`,
      qr: ['💬 Open WhatsApp','📧 Send Email','📝 Contact Form','🔙 Main Menu']
    },

    // ── WHATSAPP ──
    {
      id: 'whatsapp',
      keywords: ['whatsapp','chat whatsapp','message us','text us','wa','wa.me','instant message','dm','direct message'],
      reply: `💬 <strong>Chat with Us on WhatsApp</strong><br><br>
The fastest way to reach TIH is via WhatsApp:<br>
📱 <strong>+231 880 559 227</strong><br><br>
Our team monitors WhatsApp during business hours (Mon–Sat) and responds to all messages promptly.<br><br>
Click the button below to open WhatsApp directly:`,
      qr: ['💬 Open WhatsApp Now','📞 Contact Info','🔙 Main Menu']
    },

    // ── DONATION ──
    {
      id: 'donate',
      keywords: ['donat','donation','support tih','contribute','fund','give money','help tih','mobile money','bank transfer','western union','moneygram','how to donate','where to donate','sponsor','fundraise'],
      reply: `❤️ <strong>Support Tolbert Innovation Hub</strong><br><br>
Your donation helps us provide free education, healthcare referrals, and scholarship guidance to Liberian youth.<br><br>
💵 <strong>Suggested amounts:</strong> $5 · $10 · $25 · $50 · $100 · Custom<br><br>
💳 <strong>Payment methods:</strong><br>
• Mobile Money (Orange Money / MTN)<br>
• Bank Transfer<br>
• WhatsApp-coordinated payment<br>
• Western Union / MoneyGram<br><br>
All donations are allocated to: 60% Education · 20% Scholarship Guidance · 12% Healthcare · 8% Operations.`,
      qr: ['💳 Go to Donate Page','📞 Donate via WhatsApp','🔙 Main Menu']
    },

    // ── EVENTS ──
    {
      id: 'events',
      keywords: ['event','events','upcoming','workshop','seminar','webinar','schedule','deadline','next event','when','july 15','scholarship deadline','information session','register event','join event','calendar'],
      reply: `📅 <strong>Upcoming Events & Deadlines</strong><br><br>
• 🎓 <strong>Jul 15, 2026</strong> — Scholarship Application Deadline (submit via portal)<br>
• 📚 <strong>Jul 20, 2026</strong> — IELTS Prep Workshop: Module 3 Writing Skills (online, free, 24/7)<br>
• 💻 <strong>Aug 1, 2026</strong> — Technology Consultation Open Day for Businesses (by appointment)<br>
• 🎓 <strong>Aug 15, 2026</strong> — ICCR Scholarship Information Session (WhatsApp group)<br><br>
⏱️ Countdown to scholarship deadline is live on our <strong>Events page</strong>.`,
      qr: ['📝 Register for Event','🌐 View Events Page','🎓 Apply Before Deadline','🔙 Main Menu']
    },

    // ── NEWS ──
    {
      id: 'news',
      keywords: ['news','announcement','update','latest','blog','press','article','new program','launch','expansion','what\'s new','recent'],
      reply: `📰 <strong>Latest News from TIH</strong><br><br>
Recent announcements:<br>
• 🎓 <strong>2026 Scholarship Intake Now Open</strong> — updated requirements & guidance sessions<br>
• 🏅 <strong>IELTS Mock Exam Certificate System Launched</strong> — students can now request certificates online<br>
• 🏥 <strong>Healthcare Referral Program Expanded</strong> — more pathways for families seeking treatment in India<br>
• 💻 <strong>Technology Innovation Support for Liberian Businesses</strong> — new digital consultation services<br><br>
Visit our News page for full articles.`,
      qr: ['🌐 View All News','📝 Apply Now','🔙 Main Menu']
    },

    // ── PORTAL ──
    {
      id: 'portal',
      keywords: ['portal','student portal','login','sign in','register','account','dashboard','my account','log in','student account','classroom login','username','password','create account'],
      reply: `🔐 <strong>Student Portal</strong><br><br>
The TIH student portal gives you access to:<br>
• Your application status<br>
• Classroom progress tracking<br>
• Documents and resources<br>
• Announcements<br><br>
🔗 <strong>Portal links:</strong><br>
• <a href="portal-login.html" style="color:#002868;font-weight:700;">Login to Portal →</a><br>
• <a href="portal-register.html" style="color:#002868;font-weight:700;">Create Account →</a><br>
• <a href="portal-dashboard.html" style="color:#002868;font-weight:700;">Dashboard →</a>`,
      qr: ['🔐 Login to Portal','📝 Create Account','🔙 Main Menu']
    },

    // ── VOLUNTEER ──
    {
      id: 'volunteer',
      keywords: ['volunteer','volunteering','internship','intern','work with tih','join team','help tih','contribute time','pro bono','community service','mentor','tutor'],
      reply: `🤝 <strong>Volunteer with TIH</strong><br><br>
TIH welcomes volunteers who are passionate about education, healthcare access, and technology in Africa.<br><br>
<strong>Volunteer roles available:</strong><br>
• Academic mentors & tutors (IELTS/TOEFL)<br>
• Scholarship counselors<br>
• Healthcare case assistants<br>
• Digital/software volunteers<br>
• Community outreach<br><br>
Visit our <strong>Volunteer page</strong> or contact us directly to express your interest.`,
      qr: ['🌐 Go to Volunteer Page','📞 Contact Us','🔙 Main Menu']
    },

    // ── PARTNER ──
    {
      id: 'partner',
      keywords: ['partner','partnership','collaborate','collaboration','sponsor','sponsorship','corporate','ngo partner','institutional partner','work together','mou','agreement','business partner'],
      reply: `🤝 <strong>Partner With TIH</strong><br><br>
We welcome partnerships with organizations, institutions, businesses, and governments that share our mission of empowering Liberian youth.<br><br>
<strong>Partnership types:</strong><br>
• Academic institutions & universities<br>
• Healthcare organizations & hospitals<br>
• Technology companies<br>
• NGOs & development organizations<br>
• Government & embassy offices<br>
• Corporate sponsors & donors<br><br>
Contact us to discuss partnership opportunities.`,
      qr: ['🌐 Partner With Us Page','📞 Contact Us','💬 WhatsApp Us','🔙 Main Menu']
    },

    // ── IMPACT ──
    {
      id: 'impact',
      keywords: ['impact','statistics','how many','achievement','result','beneficiary','success rate','numbers','what have you done','track record','proven','500','12 countries','50 healthcare'],
      reply: `📊 <strong>TIH Impact Statistics</strong><br><br>
• 🎓 <strong>500+</strong> students supported with scholarship guidance<br>
• 🌍 <strong>12+</strong> countries reached through partnership networks<br>
• 🏥 <strong>50+</strong> healthcare cases referred to international specialists<br>
• 💻 <strong>30+</strong> businesses supported with digital solutions<br>
• 📚 <strong>2</strong> exam tracks (IELTS & TOEFL) — 100% free<br>
• 🎓 <strong>3</strong> core programs: Education, Healthcare & Technology<br><br>
See the full report on our <strong>Impact page</strong>.`,
      qr: ['🌐 View Impact Report','📰 Success Stories','🔙 Main Menu']
    },

    // ── SUCCESS STORIES ──
    {
      id: 'success',
      keywords: ['success story','testimonial','success','case study','student story','beneficiary story','real story','example','results','people helped','who helped','lives changed'],
      reply: `⭐ <strong>Success Stories</strong><br><br>
Here's what TIH beneficiaries say:<br><br>
<em>"TIH guided me through the entire scholarship process. I am now pursuing my studies abroad because of them."</em><br>— Moses S., Scholarship Beneficiary<br><br>
<em>"The free IELTS classroom is genuinely world-class. I prepared confidently and passed."</em><br>— Fatima K., IELTS Student<br><br>
<em>"When my family needed specialized treatment, TIH coordinated everything — referrals, hospital contacts, travel."</em><br>— Joseph T., Healthcare Beneficiary`,
      qr: ['🌐 More Success Stories','🎓 Apply for Scholarship','🔙 Main Menu']
    },

    // ── PROCESS / HOW TIH WORKS ──
    {
      id: 'process',
      keywords: ['how does it work','how it works','process','procedure','what happens after','timeline','what to expect','step by step','workflow','how long','turnaround','response time','review time'],
      reply: `⚙️ <strong>How TIH Works</strong><br><br>
<strong>Scholarship Process:</strong><br>
1. Submit application → 2. TIH reviews (5–7 days) → 3. Eligibility confirmed → 4. Document prep & submission → 5. Admission/scholarship confirmation<br><br>
<strong>Healthcare Process:</strong><br>
1. Submit inquiry → 2. Case intake & assessment → 3. Specialist referral → 4. Hospital coordination → 5. Travel support<br><br>
<strong>Software Process:</strong><br>
1. Submit consultation request → 2. Discovery call → 3. Proposal → 4. Development → 5. Delivery<br><br>
⏱️ General response time: <strong>24–48 hours</strong>`,
      qr: ['📝 Apply Now','📞 Contact','🔙 Main Menu']
    },

    // ── RESOURCE CENTER ──
    {
      id: 'resources',
      keywords: ['resource','resource center','study material','material','pdf','book','guide','study guide','practice material','download','reading material','preparation material','vocab','grammar'],
      reply: `📁 <strong>Resource Center</strong><br><br>
The TIH Resource Center provides free study materials for IELTS & TOEFL preparation:<br>
• Vocabulary lists & grammar guides<br>
• Reading & listening practice passages<br>
• Writing templates & sample essays<br>
• Speaking topic banks<br>
• Full practice tests<br>
• Video lesson library<br><br>
Everything is accessible for free through the classroom portal.`,
      qr: ['🌐 Resource Center','📖 IELTS Classroom','📖 TOEFL Classroom','🔙 Main Menu']
    },

    // ── LOCATION / ADDRESS ──
    {
      id: 'location',
      keywords: ['where','location','address','where is tih','monrovia','sinkor','spriggs payne','liberia','office address','visit','come in person','directions','physical location','walk in'],
      reply: `📍 <strong>TIH Office Location</strong><br><br>
<strong>Tolbert Innovation Hub</strong><br>
Spriggs Payne Airport, Sinkor<br>
Monrovia, Liberia, West Africa<br><br>
🕐 <strong>Office Hours:</strong><br>
Mon–Fri: 8:00 AM – 6:00 PM<br>
Saturday: 9:00 AM – 3:00 PM<br>
Sunday: Closed<br><br>
📞 Call ahead: <strong>+231 880 559 227</strong>`,
      qr: ['📞 Call Us','💬 WhatsApp Us','📧 Email Us','🔙 Main Menu']
    },

    // ── SOCIAL MEDIA / ONLINE ──
    {
      id: 'social',
      keywords: ['social media','facebook','instagram','twitter','youtube','linkedin','follow','online','website','webpage','url','link','page','find online'],
      reply: `🌐 <strong>Find TIH Online</strong><br><br>
🖥️ <strong>Website:</strong> www.tolbertinnovationhub.org<br>
📧 <strong>Email:</strong> tolbertinnovationhub@gmail.com<br>
💬 <strong>WhatsApp:</strong> +231 880 559 227<br>
📞 <strong>Phone:</strong> +231 880 559 227<br><br>
For the fastest response, reach us on <strong>WhatsApp</strong> or through the <strong>Contact page</strong> on the website.`,
      qr: ['💬 Open WhatsApp','📧 Email Us','🌐 Contact Page','🔙 Main Menu']
    },

    // ── LANGUAGES / ENGLISH ──
    {
      id: 'language',
      keywords: ['english','language','speak english','english requirement','how good english','english level','language test','proficiency','ielts score needed','minimum band','minimum score','what score do i need'],
      reply: `🗣️ <strong>English Language Requirements</strong><br><br>
For most international scholarships and universities, you'll need to demonstrate English proficiency. Common requirements:<br><br>
• <strong>IELTS:</strong> Band 6.0–7.0 (varies by university)<br>
• <strong>TOEFL iBT:</strong> Score 79–100+ (varies)<br>
• <strong>Duolingo:</strong> Also accepted by some programs<br>
• <strong>Essay test:</strong> Some scholarships (like ICCR) accept a written essay instead<br><br>
💡 Use TIH's <strong>free IELTS/TOEFL classroom</strong> to prepare!`,
      qr: ['📖 Start IELTS Prep','📖 Start TOEFL Prep','🎓 Scholarship Requirements','🔙 Main Menu']
    },

    // ── INDIA STUDY ──
    {
      id: 'india',
      keywords: ['india','study in india','india university','indian university','india scholarship','india student','visa india','indian college','india education','india medical','iit','nit','india admission'],
      reply: `🇮🇳 <strong>Studying & Healthcare in India</strong><br><br>
TIH has strong connections with India for both education and healthcare:<br><br>
🎓 <strong>Education:</strong><br>
The <strong>ICCR Fully Funded Scholarship</strong> covers studies at Indian universities — full tuition, stipend, airfare, and hostel.<br><br>
🏥 <strong>Healthcare:</strong><br>
TIH works with partner hospitals in India offering specialist treatment in cardiology, oncology, orthopedics, neurology, and more.<br><br>
Both pathways are coordinated end-to-end by TIH.`,
      qr: ['🏆 ICCR Scholarship','🏥 Healthcare in India','📝 Apply','🔙 Main Menu']
    },

    // ── DEADLINE ──
    {
      id: 'deadline',
      keywords: ['deadline','when to apply','last date','closing date','by when','application close','due date','expiry','how long do i have','cut off','submission date','final date'],
      reply: `📅 <strong>Important Deadlines</strong><br><br>
• 🎓 <strong>Study Abroad / General Scholarship:</strong> July 15, 2026<br>
• 🏆 <strong>ICCR Fully Funded Scholarship:</strong> April 21, 2026<br>
• 📚 <strong>IELTS/TOEFL Classroom:</strong> Open year-round — no deadline<br>
• 🏥 <strong>Healthcare Program:</strong> Rolling — apply anytime<br>
• 💻 <strong>Software Consultation:</strong> Rolling — apply anytime<br><br>
⚠️ Don't wait! Apply early to allow time for document preparation.`,
      qr: ['📝 Apply for Scholarship','🏆 ICCR Scholarship','📚 Free Classroom','🔙 Main Menu']
    },

    // ── FAQ ──
    {
      id: 'faq',
      keywords: ['faq','frequently asked','common question','question and answer','general question','queries','popular question'],
      reply: `❓ <strong>Frequently Asked Questions</strong><br><br>
Here are some common topics I can answer:<br>
• How do I apply for a scholarship?<br>
• What documents do I need?<br>
• Is the IELTS/TOEFL classroom really free?<br>
• How much does a certificate cost?<br>
• How does the healthcare referral work?<br>
• What software services do you offer?<br>
• Who founded TIH?<br>
• Where is TIH located?<br><br>
Just ask me anything! Or visit our <strong>FAQ page</strong> for full answers.`,
      qr: ['🌐 Go to FAQ Page','🎓 Scholarship','📚 Classroom','📞 Contact','🔙 Main Menu']
    },

    // ── APPLY (menu) ──
    {
      id: 'apply_menu',
      keywords: ['apply','application','i want to apply','start application','apply now','sign up','enroll','register','join','submit form','application form','apply here','chat apply'],
      reply: `📝 <strong>Apply with TIH</strong><br><br>
I can collect your application right here in this chat! Which program are you applying for?`,
      qr: ['🎓 Scholarship / Study Abroad','🏥 Healthcare Request','💻 Software Consultation','📚 IELTS/TOEFL Classroom']
    },

    // ── THANK YOU ──
    {
      id: 'thanks',
      keywords: ['thank you','thanks','thank','appreciate','helpful','great','wonderful','awesome','nice','good job','excellent','perfect'],
      reply: `You're very welcome! 😊 It's our pleasure to help. Is there anything else you'd like to know about TIH's programs?`,
      qr: ['🎓 Scholarships','📚 Free Classroom','🏥 Healthcare','💻 Software','📝 Apply Now']
    },

    // ── FALLBACK ──
    {
      id: 'fallback',
      keywords: [],
      reply: `I want to make sure I give you the right answer. Could you rephrase or choose a topic below? I can answer questions about scholarships, IELTS/TOEFL prep, healthcare, software services, fees, the team, and more.`,
      qr: ['🎓 Scholarships','📚 IELTS/TOEFL','🏥 Healthcare','💻 Software','📞 Contact','❓ FAQ']
    }
  ];

  // ── Apply-flow steps ──────────────────────────────────────────────────────
  const FLOWS = {
    scholarship: {
      title: '🎓 Scholarship / Study Abroad',
      subject: 'Chat Application — Scholarship / Study Abroad',
      steps: [
        { key:'name',  label:'Full Name',          type:'text',   ph:'As it should appear on documents' },
        { key:'email', label:'Email Address',       type:'email',  ph:'you@example.com' },
        { key:'phone', label:'Phone / WhatsApp',    type:'tel',    ph:'+231 880 ...' },
        { key:'level', label:'Target Study Level',  type:'select', opts:['Undergraduate (Bachelor\'s)','Postgraduate (Master\'s)','Doctoral (PhD)','Diploma / Certificate'] },
        { key:'field', label:'Field of Study',      type:'text',   ph:'e.g. Medicine, Engineering, Business' }
      ]
    },
    healthcare: {
      title: '🏥 Healthcare Program',
      subject: 'Chat Application — Healthcare Request',
      steps: [
        { key:'name',      label:'Patient / Contact Name',  type:'text',  ph:'Full name' },
        { key:'email',     label:'Email Address',            type:'email', ph:'you@example.com' },
        { key:'phone',     label:'Phone / WhatsApp',         type:'tel',   ph:'+231 880 ...' },
        { key:'condition', label:'Medical Condition / Need', type:'text',  ph:'Brief description of the condition or treatment needed' }
      ]
    },
    software: {
      title: '💻 Software Consultation',
      subject: 'Chat Application — Software Consultation',
      steps: [
        { key:'name',     label:'Your Name',         type:'text',   ph:'Full name' },
        { key:'email',    label:'Email Address',      type:'email',  ph:'you@example.com' },
        { key:'phone',    label:'Phone / WhatsApp',   type:'tel',    ph:'+231 880 ...' },
        { key:'business', label:'Business / Project', type:'text',   ph:'Your business or project name' },
        { key:'service',  label:'Service Needed',     type:'select', opts:['Website Development','Business Management System','Mobile App','Digital Strategy / Consulting','Other'] }
      ]
    },
    classroom: {
      title: '📚 IELTS / TOEFL Classroom',
      subject: 'Chat Registration — IELTS/TOEFL Classroom',
      steps: [
        { key:'name',  label:'Full Name',    type:'text',   ph:'Your full name' },
        { key:'email', label:'Email Address', type:'email',  ph:'you@example.com' },
        { key:'phone', label:'Phone',         type:'tel',    ph:'+231 880 ...' },
        { key:'exam',  label:'Exam Track',    type:'select', opts:['IELTS','TOEFL','Both IELTS & TOEFL'] }
      ]
    }
  };

  // ── Scoring-based matching ────────────────────────────────────────────────
  function findBestMatch(text) {
    const t = text.toLowerCase();
    const words = t.split(/[\s,?!.]+/).filter(w => w.length > 2);
    let best = { score: 0, entry: KB[KB.length - 1] };

    for (const entry of KB) {
      if (!entry.keywords.length) continue;
      let score = 0;
      for (const kw of entry.keywords) {
        if (t.includes(kw)) score += kw.split(' ').length * 2; // multi-word = higher score
      }
      for (const w of words) {
        if (entry.keywords.some(kw => kw.includes(w) || w.includes(kw.split(' ')[0]))) score += 1;
      }
      if (score > best.score) best = { score, entry };
    }
    return best.score >= 1 ? best.entry : KB[KB.length - 1];
  }

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
      <input class="tih-inp" id="tih-inp" type="text" placeholder="Ask me anything about TIH…" autocomplete="off" maxlength="300" />
      <button class="tih-send" id="tih-send" aria-label="Send">➤</button>
    </div>
  `;

  document.body.appendChild(chatBtn);
  document.body.appendChild(chatWin);

  const msgsEl = document.getElementById('tih-msgs');
  const inpEl  = document.getElementById('tih-inp');
  const sendEl = document.getElementById('tih-send');

  let busy = false;
  let flow = null;

  // ── Helpers ───────────────────────────────────────────────────────────────
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const scroll = () => { msgsEl.scrollTop = msgsEl.scrollHeight; };

  function botMsg(html, qrs) {
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
      type(700, () => { const g = KB[0]; botMsg(g.reply, g.qr); });
    }
    setTimeout(() => inpEl.focus(), 250);
  }

  chatBtn.addEventListener('click', () =>
    chatWin.classList.contains('open') ? chatWin.classList.remove('open') : openChat()
  );
  chatWin.querySelector('.tih-hdr-close').addEventListener('click', () => chatWin.classList.remove('open'));

  // ── Quick-reply routing ───────────────────────────────────────────────────
  function onQR(label) {
    const l = label.toLowerCase();

    if (l.includes('main menu') || l.includes('🔙')) {
      type(450, () => { const g = KB[0]; botMsg(g.reply, g.qr); }); return;
    }
    // External links
    const nav = {
      'open whatsapp': 'https://wa.me/231880559227',
      'ielts classroom': 'classroom-ielts.html',
      'start ielts': 'classroom-ielts.html',
      'go to ielts': 'classroom-ielts.html',
      'toefl classroom': 'classroom-toefl.html',
      'start toefl': 'classroom-toefl.html',
      'go to toefl': 'classroom-toefl.html',
      'ielts certificate': 'classroom-ielts-certificate-request.html',
      'request ielts': 'classroom-ielts-certificate-request.html',
      'toefl certificate': 'classroom-toefl-certificate-request.html',
      'request toefl': 'classroom-toefl-certificate-request.html',
      'view pricing': 'software.html#pricing',
      'full pricing': 'software.html#pricing',
      'view portfolio': 'software.html#portfolio',
      'partner hospitals': 'healthcare.html',
      'view healthcare': 'healthcare.html',
      'healthcare page': 'healthcare.html',
      'donate page': 'donate.html#donate-now',
      'donate now': 'donate.html#donate-now',
      'events page': 'events.html',
      'view events': 'events.html',
      'register for event': 'events.html#register',
      'all news': 'news.html',
      'view all news': 'news.html',
      'faq page': 'faq.html',
      'go to faq': 'faq.html',
      'contact form': 'contact.html#contact-form',
      'contact page': 'contact.html',
      'resource center': 'classroom-resource-center.html',
      'success stories': 'success-stories.html',
      'more success': 'success-stories.html',
      'impact report': 'impact.html',
      'view impact': 'impact.html',
      'leadership page': 'leadership.html',
      'volunteer page': 'volunteer.html',
      'partner with us': 'partner-with-us.html',
      'login to portal': 'portal-login.html',
      'create account': 'portal-register.html',
      'full team': 'team.html',
      'full team page': 'team.html',
      'meet the team': 'team.html',
      'view team': 'team.html',
      'application form': 'study-abroad.html#application-form',
      'go to application': 'study-abroad.html#application-form',
      'iccr scholarship': 'fully-funded-scholarship.html',
      'fully funded': 'fully-funded-scholarship.html',
      'apply before deadline': 'study-abroad.html#application-form',
      'send email': 'mailto:tolbertinnovationhub@gmail.com',
    };
    for (const [key, url] of Object.entries(nav)) {
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

    // Fall through — use the knowledge base to answer
    const entry = findBestMatch(label);
    type(Math.min(700 + label.length * 5, 1100), () => botMsg(entry.reply, entry.qr));
  }

  // ── Apply flow ─────────────────────────────────────────────────────────────
  function startFlow(key) {
    const f = FLOWS[key];
    flow = { key, step: 0, data: { Program: f.title } };
    type(600, () => {
      botMsg(`Let's get your <strong>${f.title}</strong> application started. I'll collect your details one step at a time. 📋`);
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
      ctrl = Object.assign(document.createElement('input'), { type: s.type, placeholder: s.ph || '' });
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
    const payload = { ...flow.data, _subject: f.subject + ' — Tolbert Innovation Hub', _template: 'table', _captcha: 'false', Source: 'TIH Chatbot' };
    flow = null;
    type(900, async () => {
      botMsg('Submitting your application… ⏳');
      try {
        const res  = await fetch('https://formsubmit.co/ajax/tolbertinnovationhub@gmail.com', { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify(payload) });
        const json = await res.json();
        if (json.success === true || json.success === 'true') {
          type(600, () => botMsg(`✅ <strong>Application Submitted!</strong><br><br>Thank you! The TIH team will review your application and contact you within <strong>24–48 hours</strong> by email or WhatsApp.<br><br>Is there anything else I can help you with?`,
            ['🎓 Scholarships','📚 Free Classroom','📞 Contact','🔙 Main Menu']));
        } else throw new Error();
      } catch (_) {
        type(400, () => botMsg(`Your details were noted. To confirm delivery, please also WhatsApp us at <strong>+231 880 559 227</strong> or email <strong>tolbertinnovationhub@gmail.com</strong>.`,['💬 Open WhatsApp','🔙 Main Menu']));
      }
    });
  }

  // ── Text send ─────────────────────────────────────────────────────────────
  function send() {
    const text = inpEl.value.trim();
    if (!text || busy) return;
    inpEl.value = '';
    if (flow) { userMsg(text); return; }
    userMsg(text);
    const entry = findBestMatch(text);
    const delay = Math.min(600 + text.length * 10, 1400);
    type(delay, () => botMsg(entry.reply, entry.qr));
  }

  sendEl.addEventListener('click', send);
  inpEl.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

})();
