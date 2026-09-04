/* TIH per-topic lesson notes — universal runtime.

   Every content topic in every course gets its own structured note with four
   teaching sections: Definition, Explanation, Key Points and Summary.

   Why a runtime instead of storing finished HTML: the note wording is fully
   determined by (topic name, module title, topic type, optional concept
   definition). Storing the assembled HTML cost ~1.8 KB per topic — ~250 KB per
   course, which is minutes of waiting on the slow connections many learners
   here are on. Storing only those four fields and building the prose in the
   browser drops a course to ~15-25 KB for identical output.

   Data files: notes/<courseId>-notes.js define
     window.TIH_NOTE_DATA[courseId] = { m: [moduleTitles...],
                                        t: [[name, moduleIndex, kind, def], ...] }
   Only the open course's file is fetched (see loadFor below).

   Applies into LESSON_CONTENT[courseId][flatLessonIndex], matching the
   existing convention used by the course player. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_NOTE_DATA = window.TIH_NOTE_DATA || {};
  window.TIH_TOPIC_NOTES = window.TIH_TOPIC_NOTES || {};

  // courseId -> [label, domain, payoff]
  var C = {
    'ai': ['AI Fundamentals', 'artificial intelligence', 'use AI tools confidently and responsibly in real work'],
    'data': ['Data Analysis', 'data analysis', 'turn raw data into decisions people can act on'],
    'webdev': ['Full-Stack Web Development', 'web development', 'build, test and deploy working web applications'],
    'design': ['Graphic Design', 'graphic design', 'produce professional visual work clients accept'],
    'android': ['Android Development', 'Android app development', 'ship a working app to the Play Store'],
    'marketing': ['Digital Marketing', 'digital marketing', 'attract real customers and prove the results'],
    'cybersecurity': ['Cybersecurity', 'cybersecurity and ethical hacking', 'secure systems and respond to incidents responsibly'],
    'entrepreneurship': ['Entrepreneurship', 'entrepreneurship and startup building', 'take an idea to a launched, funded business'],
    'project-mgmt': ['Project Management', 'project management', 'deliver on time, on budget and on scope'],
    'office': ['Microsoft Office', 'Microsoft Office productivity', 'produce professional documents, data and presentations'],
    'leadership': ['Business Leadership', 'leadership and management', 'lead people and decisions with confidence'],
    'grant-writing': ['Grant Writing', 'grant writing and fundraising', 'write proposals donors actually fund'],
    'financial-literacy': ['Financial Literacy', 'personal and business finance', 'take control of money, savings and investment'],
    'english-success': ['English for Success', 'academic and professional English', 'speak, write and present with confidence'],
    'agritech': ['AgriTech', 'digital agriculture', 'raise yields and run farming as a business'],
    'healthtech': ['Healthcare Technology', 'health technology and telehealth', 'run digital health services safely'],
    'remote-work': ['Remote Work & Freelancing', 'remote work and freelancing', 'win clients and deliver work remotely'],
    'ielts': ['IELTS Masterclass', 'IELTS exam preparation', 'score the band your university or visa requires'],
    'toefl': ['TOEFL iBT', 'TOEFL exam preparation', 'reach the TOEFL score your programme requires'],
    'sat': ['Digital SAT', 'Digital SAT preparation', 'raise your Digital SAT score'],
    'computer-literacy': ['Computer Literacy', 'everyday computer skills', 'use a computer confidently for work and study'],
    'ph-career': ['Public Health Careers', 'public health career development', 'land and grow a public health career'],
    'bible-foundations': ['Bible School & Ministry', 'biblical study and ministry', 'study Scripture faithfully and serve well'],
    'accounting-bookkeeping': ['Accounting & Bookkeeping', 'accounting and bookkeeping', 'keep clean books and read any financial statement'],
    'ai-cybersecurity': ['AI & Cybersecurity', 'applied AI and cybersecurity', 'build practical AI and security skills employers pay for']
  };
  var DEF_C = ['TIH Learning Hub', 'this subject', 'apply the skill in real work'];

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function norm(s) {
    return String(s || '').replace(/[^a-z0-9]+/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  var STOP = {a:1,an:1,the:1,to:1,of:1,and:1,or:1,'for':1,'in':1,on:1,'with':1,your:1,you:1,
              how:1,is:1,are:1,what:1,why:1,when:1,using:1,use:1,intro:1,introduction:1,
              basics:1,part:1,i:1,ii:1};

  function keywords(name) {
    var out = [], ws = norm(name).split(' ');
    for (var i = 0; i < ws.length && out.length < 4; i++) {
      if (ws[i].length > 2 && !STOP[ws[i]]) out.push(ws[i]);
    }
    return out;
  }

  /* Many lesson titles are questions or headings ("What Is a Computer?",
     "Introduction to Excel"). The heading keeps the original title, but the
     sentences need the bare subject term or they read ungrammatically
     ("What Is a Computer refers to..."). */
  function term(name) {
    var t = String(name || '').replace(/\?+$/, '').trim();
    var stripped = t
      .replace(/^(what\s+(is|are|s)|introduction\s+to|intro\s+to|understanding|overview\s+of|getting\s+started\s+with)\s+/i, '')
      .replace(/^(a|an|the)\s+/i, '')
      .trim();
    return stripped || t;
  }

  /* Build one note. kind: c=concept, i=intro, h=how-to, s=strategy, a=applied, t=topic. */
  function build(cid, name, moduleTitle, kind, conceptDef) {
    var meta = C[cid] || DEF_C;
    var label = meta[0], domain = meta[1], payoff = meta[2];
    var subject = String(name || '').replace(/\?+$/, '').trim();
    var tm = term(subject);
    var S = esc(subject), T = esc(tm), M = esc(moduleTitle || 'Course');
    var low = T.toLowerCase();   // bare subject, for mid-sentence use
    var def, expl, pts = [];

    if (conceptDef) {
      def = '<strong>' + T + '</strong> refers to ' + esc(conceptDef) + '.';
    } else if (kind === 'i') {
      def = '<strong>' + S + '</strong> is the opening lesson of <em>' + M + '</em>. It sets out what this part of '
          + domain + ' covers, the vocabulary you will need, and the standard your finished work should reach.';
    } else if (kind === 'h') {
      def = '<strong>' + T + '</strong> is a practical procedure in ' + domain
          + ': a repeatable sequence of steps you carry out yourself to produce a specific result.';
    } else if (kind === 's') {
      def = '<strong>' + T + '</strong> is a decision-making approach in ' + domain
          + ' — a considered way of choosing what to do, in what order, given limited time and resources.';
    } else if (kind === 'a') {
      def = '<strong>' + T + '</strong> is an applied task that asks you to combine what you have learned in <em>'
          + M + '</em> and demonstrate it on real work.';
    } else {
      def = '<strong>' + T + '</strong> is a core idea within ' + domain + ', studied in <em>' + M
          + '</em> because it underpins the practical work that follows.';
    }

    if (kind === 'h') {
      expl = '<p>In practice you work through ' + low + ' step by step rather than all at once. Watch the lesson '
           + 'video first to see the whole process performed, then repeat it yourself, pausing wherever the result '
           + 'differs from the example. The order matters: each step depends on the state produced by the one before it.</p>'
           + '<p>Most mistakes here are not conceptual but procedural — a step skipped, or an option left at its '
           + 'default. Doing it twice, unaided the second time, is what turns it into a skill you keep.</p>';
    } else if (kind === 'c') {
      expl = '<p>Understanding ' + low + ' matters because almost everything later in <em>' + M + '</em> assumes it. '
           + 'Once the idea is clear, the procedures built on top of it stop looking like arbitrary rules and start '
           + 'following logically.</p><p>Try to restate the idea in your own words and give one example from your own '
           + 'experience. If you can teach it to someone else in two sentences, you understand it well enough to build on.</p>';
    } else if (kind === 's') {
      expl = '<p>There is rarely one correct answer here. ' + T + ' is about judgement: weighing what you want to '
           + 'achieve against the time, money and information actually available to you.</p><p>Study the reasoning in '
           + 'the video, not just the conclusion. When you apply this to your own situation, write down why you chose '
           + 'your approach — that record is what lets you improve it later.</p>';
    } else if (kind === 'a') {
      expl = '<p>This task is assessed on the quality of the finished work, so treat it as you would a real '
           + 'deliverable. Plan first, produce carefully, then review against the requirements before you submit.</p>'
           + '<p>Keep what you produce. Work like this becomes portfolio evidence you can show an employer or client.</p>';
    } else {
      expl = '<p>This lesson sits inside <em>' + M + '</em> and connects to the topics on either side of it. Read it '
           + 'with that context in mind: notice what it assumes you already know, and what it prepares you to do next.</p>'
           + '<p>Watch the video, then return to these notes and check you can explain the idea without re-reading. '
           + 'That check is the difference between recognising the material and knowing it.</p>';
    }

    pts.push(conceptDef
      ? 'Be able to define ' + low + ' accurately and in your own words.'
      : 'Know exactly what ' + low + ' means in the context of ' + domain + '.');
    if (kind === 'h') {
      pts.push('Follow the steps in order — later steps depend on earlier ones.');
      pts.push('Perform the whole procedure yourself at least once without the video.');
    } else if (kind === 's') {
      pts.push('Understand the trade-offs, not just the recommended option.');
      pts.push('Be able to justify your choice with a reason someone else would accept.');
    } else if (kind === 'a') {
      pts.push('Meet every stated requirement before worrying about polish.');
      pts.push('Review your own work critically before submitting it.');
    } else {
      pts.push('Understand why ' + low + ' matters for the rest of ' + M + '.');
      pts.push('Connect the idea to a concrete example you have seen yourself.');
    }
    var kw = conceptDef ? [] : keywords(tm);
    if (kw.length) {
      var t = [];
      for (var i = 0; i < kw.length; i++) t.push('<em>' + esc(kw[i]) + '</em>');
      pts.push('Learn the key terms in this lesson: ' + t.join(', ') + '.');
    }
    pts.push('Apply it to your own situation so it supports the goal of this course: ' + payoff + '.');

    var li = '';
    for (var j = 0; j < pts.length; j++) li += '<li>' + pts[j] + '</li>';

    var summary = S + ' is part of <em>' + M + '</em> in ' + esc(label) + '. Watch the video, work through the steps '
      + 'or examples yourself, and check you can explain the idea unaided. Do that and you will be able to ' + payoff + '.';

    return '<div class="study-note">'
      + '<div class="revision-banner"><strong>' + esc(label) + ' · ' + M + '</strong><span>Lesson note</span></div>'
      + '<h3>' + S + '</h3>'
      + '<h4>Definition</h4><p>' + def + '</p>'
      + '<h4>Explanation</h4>' + expl
      + '<h4>Key Points</h4><ul>' + li + '</ul>'
      + '<h4>Summary</h4><p>' + summary + '</p>'
      + '<blockquote><strong>Study tip:</strong> Watch the video for this topic, read this note, then complete the '
      + 'practice quiz. Print → Save as PDF to revise offline.</blockquote>'
      + '</div>';
  }

  /* Expand a course's compact data into TIH_TOPIC_NOTES[cid] keyed by topic name. */
  function expand(cid) {
    var d = window.TIH_NOTE_DATA[cid];
    if (!d || !d.t) return null;
    var out = window.TIH_TOPIC_NOTES[cid] = window.TIH_TOPIC_NOTES[cid] || {};
    for (var i = 0; i < d.t.length; i++) {
      var row = d.t[i];                       // [name, moduleIndex, kind, def]
      if (!row || !row[0]) continue;
      if (out[row[0]]) continue;              // hand-authored note wins
      out[row[0]] = build(cid, row[0], (d.m || [])[row[1]] || 'Course', row[2], row[3]);
    }
    return out;
  }

  /* Write notes into LESSON_CONTENT[cid] against each content lesson's flat index. */
  function apply(cid) {
    try {
      if (typeof COURSES_DB === 'undefined' || !COURSES_DB[cid]) return false;
      var notes = expand(cid);
      if (!notes) return false;
      if (typeof LESSON_CONTENT === 'undefined') window.LESSON_CONTENT = {};
      var target = LESSON_CONTENT[cid] || {};
      var byNorm = {}, k;
      for (k in notes) byNorm[norm(k)] = notes[k];
      var flat = 0, n = 0;
      (COURSES_DB[cid].modules || []).forEach(function (mod) {
        (mod.lessons || []).forEach(function (L) {
          if (!L.isQuiz && !L.isProject && !L.isFinal) {
            var nm = String(L.t || '').replace(/^\s*\d+\.\d+\s+/, '').replace(/^[^0-9A-Za-z]+/, '').trim();
            var html = notes[nm] || byNorm[norm(nm)];
            if (html) { target[String(flat)] = html; n++; }
          }
          flat += 1;
        });
      });
      LESSON_CONTENT[cid] = target;
      if (console && console.log) console.log('[TIH-NOTES] ' + cid + ': ' + n + ' topic notes applied');
      return n > 0;
    } catch (e) { return false; }
  }
  window.tihApplyNotes = apply;

  /* Load just the open course's notes file, then apply (retrying until the
     curriculum builders have finished populating COURSES_DB). */
  /* Courses that actually have a notes/<id>-notes.js file. Without this the
     loader guessed from the course id, so bible-ot, bible-nt and every WASSCE
     subject fired a 404 on each lesson view. Add an id here when its file lands. */
  var HAS_NOTES = ["agritech", "ai", "bible-foundations", "cybersecurity", "design", "financial-literacy", "healthtech", "leadership", "marketing", "office", "project-mgmt", "remote-work"];
  function hasNotes(cid) {
    for (var i = 0; i < HAS_NOTES.length; i++) if (HAS_NOTES[i] === cid) return true;
    return false;
  }

  function loadFor(cid) {
    if (!cid) return;
    if (window.TIH_NOTE_DATA[cid]) { retryApply(cid); return; }
    if (!hasNotes(cid)) return;
    var s = document.createElement('script');
    s.src = 'notes/' + cid + '-notes.js?v=1';
    s.async = true;
    s.onload = function () { retryApply(cid); };
    s.onerror = function () { /* no notes file for this course — leave existing notes */ };
    document.head.appendChild(s);
  }
  function retryApply(cid) {
    if (apply(cid)) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (apply(cid) || tries > 40) clearInterval(iv);
    }, 250);
  }
  window.tihLoadNotes = loadFor;

  // Auto-start on the course player, which carries ?id=<courseId>.
  var m = /[?&]id=([^&]+)/.exec(location.search);
  var cid = m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  if (cid && !/^wassce-/.test(cid)) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { loadFor(cid); });
    } else { loadFor(cid); }
  }
})();
