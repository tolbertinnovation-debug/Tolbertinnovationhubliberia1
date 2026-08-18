/* TIH Practice Test — exam-mode engine */
(function () {
  function getUrlParam(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }
  function esc(s) {
    var a = String.fromCharCode(38);
    return String(s == null ? '' : s).replace(/&/g, a + 'amp;').replace(/</g, a + 'lt;').replace(/>/g, a + 'gt;');
  }
  var PT_POS_DEP = /\b(all|none|both|any|each) of the (above|following)\b|\bthe above\b|\b(all|none) of these\b|\bboth [a-d] (and|&) [a-d]\b|\b[a-d] (and|or|&) [a-d]\b|\banswers? [a-d]\b|\boptions? [a-d]\b/i;
  var exam = (getUrlParam('exam') || 'ielts').toLowerCase();
  var sectionParam = (getUrlParam('section') || '').toLowerCase();
  var T = (typeof PRACTICE_TESTS !== 'undefined') ? PRACTICE_TESTS[exam] : null;
  var courseTitle = (typeof COURSES_DB !== 'undefined' && COURSES_DB[exam]) ? COURSES_DB[exam].title : (T ? T.title : 'Practice Test');
  var activeSection = null, selfCheckMode = false, fullMode = false, fullQueue = [], fullIndex = 0, fullResults = [];
  var flat = [], answers = {}, flags = {}, current = 0, timerInt = null, remaining = 0, submitted = false;

  if (!T) {
    var et = document.getElementById('examTitle');
    if (et) et.textContent = 'Practice test not found.';
  } else {
    if (typeof HubDB !== 'undefined' && !HubDB.hasAccess(exam)) {
      if (typeof Paywall !== 'undefined') Paywall.require({ itemId: exam, itemTitle: courseTitle.split(':')[0] + ', Practice Test' });
    }
    if (typeof HubDB === 'undefined' || HubDB.hasAccess(exam)) initPractice();
  }

  function shuffleQ(qq) {
    var opts = (qq.opts || []).slice();
    var positional = opts.some(function (o) { return PT_POS_DEP.test(String(o)); });
    if (positional || opts.length < 2) return { opts: opts, correct: qq.correct };
    var idxs = opts.map(function (_, i) { return i; });
    for (var i = idxs.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = idxs[i]; idxs[i] = idxs[j]; idxs[j] = t;
    }
    return { opts: idxs.map(function (o) { return opts[o]; }), correct: idxs.indexOf(qq.correct) };
  }

  function initPractice() {
    document.getElementById('examEyebrow').textContent = (T.title || 'Practice Test').toUpperCase();
    document.getElementById('examTitle').textContent = T.title || 'Practice Test';
    document.getElementById('examIntro').textContent = T.intro || 'Choose a section to begin.';
    renderProgressSummary();
    renderSectionPicker();
    if (sectionParam) {
      var found = (T.sections || []).find(function (s) { return s.id === sectionParam; });
      if (found) startSection(found);
      else if (sectionParam === 'writing' && T.writing && T.writing.length) startSelfCheck('writing');
      else if (sectionParam === 'speaking' && T.speaking && T.speaking.length) startSelfCheck('speaking');
      else if (sectionParam === 'full') startFull();
    }
  }

  function getBest(secId) {
    try { var raw = localStorage.getItem('tih_pt_best_' + exam + '_' + secId); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }

  function renderProgressSummary() {
    var intro = document.getElementById('examIntro');
    if (!intro) return;
    var secs = (T.sections || []).map(function (s) { return s.id; });
    secs.push('full');
    var parts = [];
    secs.forEach(function (id) {
      var b = getBest(id);
      if (b) parts.push((id === 'full' ? 'Full Test' : id.charAt(0).toUpperCase() + id.slice(1)) + ': ' + b.display);
    });
    var old = document.getElementById('progressSummary');
    if (old) old.remove();
    if (!parts.length) return;
    var div = document.createElement('div');
    div.id = 'progressSummary';
    div.style.cssText = 'margin:0.75rem 0 0;padding:0.65rem 0.85rem;background:#F0F5FF;border:1px solid #C5D0E0;border-radius:6px;font-size:0.85rem';
    div.innerHTML = '<strong style="color:#0B3D91">Your best scores</strong> — ' + parts.join(' · ');
    intro.parentNode.insertBefore(div, intro.nextSibling);
  }

  function renderSectionPicker() {
    var grid = document.getElementById('secGrid');
    var h = '';
    (T.sections || []).forEach(function (s) {
      var n = (s.questions || []).length;
      var best = getBest(s.id);
      h += '<button class="sec-card" data-id="' + esc(s.id) + '"><h4>' + esc(s.name) + '</h4><p>' + n + ' Q · ' + (s.durationMin || 15) + ' min' + (best ? ' · Best ' + best.display : '') + '</p></button>';
    });
    if (T.writing && T.writing.length) h += '<button class="sec-card" data-id="writing"><h4>Writing</h4><p>Self-check · models</p></button>';
    if (T.speaking && T.speaking.length) h += '<button class="sec-card" data-id="speaking"><h4>Speaking</h4><p>Self-check · models</p></button>';
    h += '<button class="sec-card full" data-id="full"><h4>Full Test</h4><p>Section-by-section · realistic flow</p></button>';
    grid.innerHTML = h;
    if (!document.getElementById('clearProgressWrap')) {
      var w = document.createElement('div');
      w.id = 'clearProgressWrap';
      w.style.cssText = 'margin-top:0.75rem;text-align:right';
      w.innerHTML = '<button type="button" id="clearBestBtn" style="font-size:0.78rem;color:#5A6A7E;background:none;border:none;text-decoration:underline;cursor:pointer">Clear my best scores</button>';
      grid.parentNode.appendChild(w);
      document.getElementById('clearBestBtn').onclick = function () {
        if (!confirm('Clear all saved best scores for this exam on this device?')) return;
        try {
          var keys = [];
          for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf('tih_pt_best_' + exam) === 0) keys.push(k);
          }
          keys.forEach(function (k) { localStorage.removeItem(k); });
        } catch (e) {}
        renderProgressSummary();
        renderSectionPicker();
      };
    }
    grid.querySelectorAll('.sec-card').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-id');
        if (id === 'full') startFull();
        else if (id === 'writing') startSelfCheck('writing');
        else if (id === 'speaking') startSelfCheck('speaking');
        else {
          var sec = (T.sections || []).find(function (s) { return s.id === id; });
          if (sec) startSection(sec);
        }
      });
    });
  }

  function startSection(sec) {
    fullMode = false;
    activeSection = sec;
    selfCheckMode = false;
    flat = buildFlat(sec.questions || []);
    answers = {}; flags = {}; current = 0; submitted = false;
    remaining = (sec.durationMin || 15) * 60;
    document.getElementById('introView').classList.add('hidden');
    document.getElementById('examView').classList.remove('hidden');
    document.getElementById('examBottom').classList.remove('hidden');
    document.getElementById('secLabel').textContent = sec.name;
    startTimer(); renderQ(); bindNav(); showShortcutHint();
  }

  function showShortcutHint() {
    if (document.getElementById('shortcutHint')) return;
    var main = document.querySelector('.exam-main');
    if (!main) return;
    var d = document.createElement('div');
    d.id = 'shortcutHint';
    d.style.cssText = 'font-size:0.75rem;color:#5A6A7E;margin:0 0 0.75rem;padding:0.4rem 0.6rem;background:#F8FAFC;border-radius:4px';
    d.textContent = 'Keys: 1–4 select · ←/P previous · →/N next · F flag · Enter review (last Q)';
    main.insertBefore(d, main.firstChild);
  }

  function startFull() {
    fullMode = true;
    fullQueue = (T.sections || []).filter(function (s) { return (s.questions || []).length > 0; });
    fullIndex = 0; fullResults = [];
    if (!fullQueue.length) { alert('No scored sections available.'); return; }
    document.getElementById('introView').classList.add('hidden');
    startFullSection(0);
  }

  function startFullSection(idx) {
    fullIndex = idx;
    var sec = fullQueue[idx];
    activeSection = sec; selfCheckMode = false;
    flat = buildFlat(sec.questions || []);
    answers = {}; flags = {}; current = 0; submitted = false;
    remaining = (sec.durationMin || 15) * 60;
    document.getElementById('examView').classList.remove('hidden');
    document.getElementById('examBottom').classList.remove('hidden');
    document.getElementById('reviewView').classList.add('hidden');
    document.getElementById('resultsView').classList.add('hidden');
    document.getElementById('secLabel').textContent = 'Full Test · ' + sec.name + ' (' + (idx + 1) + '/' + fullQueue.length + ')';
    startTimer(); renderQ(); bindNav(); showShortcutHint();
  }

  function showSectionBreak(completedSec, nextIdx) {
    clearInterval(timerInt);
    document.getElementById('examView').classList.add('hidden');
    document.getElementById('examBottom').classList.add('hidden');
    document.getElementById('reviewView').classList.add('hidden');
    document.getElementById('resultsView').classList.remove('hidden');
    var next = fullQueue[nextIdx];
    var h = '<div class="eyebrow">Section complete</div><h2 style="font-family:Poppins;color:var(--exam-blue)">' + esc(completedSec.name) + '</h2>';
    h += '<p style="margin:.75rem 0;color:var(--exam-muted)">Take a short break, then continue.</p>';
    h += '<p style="font-size:.9rem"><strong>Next:</strong> ' + esc(next.name) + ' · ' + (next.durationMin || 15) + ' min · ' + (next.questions || []).length + ' Q</p>';
    h += '<div style="margin-top:1.25rem"><button class="btn btn-primary" id="continueFullBtn">Continue to ' + esc(next.name) + ' →</button></div>';
    document.getElementById('resultsPanel').innerHTML = h;
    document.getElementById('continueFullBtn').onclick = function () { startFullSection(nextIdx); };
  }

  function startSelfCheck(kind) {
    fullMode = false; selfCheckMode = true;
    activeSection = { id: kind, name: kind === 'writing' ? 'Writing' : 'Speaking' };
    document.getElementById('introView').classList.add('hidden');
    document.getElementById('examView').classList.add('hidden');
    document.getElementById('examBottom').classList.add('hidden');
    document.getElementById('reviewView').classList.add('hidden');
    document.getElementById('resultsView').classList.remove('hidden');
    document.getElementById('secLabel').textContent = activeSection.name;
    renderSelfCheck(kind);
  }

  function buildFlat(qs) {
    return (qs || []).map(function (q, i) {
      var sh = shuffleQ(q);
      return { idx: i, q: q.q, opts: sh.opts, correct: sh.correct, exp: q.exp || '', type: q.type || '', html: !!q.html, _sec: q._sec || '' };
    });
  }

  function startTimer() {
    clearInterval(timerInt);
    updateTimer();
    timerInt = setInterval(function () {
      remaining--;
      updateTimer();
      if (remaining <= 0) { clearInterval(timerInt); showReviewScreen(); }
    }, 1000);
  }

  function updateTimer() {
    var m = Math.floor(Math.max(0, remaining) / 60), s = Math.max(0, remaining) % 60;
    var el = document.getElementById('timer');
    el.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    el.classList.toggle('warn', remaining <= 60 && remaining > 0);
  }

  function bindNav() {
    document.getElementById('prevBtn').onclick = function () { if (current > 0) { current--; renderQ(); } };
    document.getElementById('nextBtn').onclick = function () {
      if (current < flat.length - 1) { current++; renderQ(); } else showReviewScreen();
    };
    document.getElementById('flagBtn').onclick = function () { flags[current] = !flags[current]; renderQ(); };
    document.getElementById('submitBtn').onclick = showReviewScreen;
    document.getElementById('backToExam').onclick = function () {
      document.getElementById('reviewView').classList.add('hidden');
      document.getElementById('examView').classList.remove('hidden');
      document.getElementById('examBottom').classList.remove('hidden');
      renderQ();
    };
    document.getElementById('confirmSubmit').onclick = finishTest;
    if (!window._tihKeyBound) {
      window._tihKeyBound = true;
      document.addEventListener('keydown', function (e) {
        if (submitted || selfCheckMode) return;
        var examView = document.getElementById('examView');
        if (!examView || examView.classList.contains('hidden')) return;
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        var k = e.key;
        if (k === 'ArrowRight' || k === 'n' || k === 'N') {
          e.preventDefault();
          if (current < flat.length - 1) { current++; renderQ(); } else showReviewScreen();
        } else if (k === 'ArrowLeft' || k === 'p' || k === 'P' || k === 'b' || k === 'B') {
          e.preventDefault(); if (current > 0) { current--; renderQ(); }
        } else if (k === 'f' || k === 'F') {
          e.preventDefault(); flags[current] = !flags[current]; renderQ();
        } else if (k >= '1' && k <= '4') {
          e.preventDefault();
          var idx = parseInt(k, 10) - 1, qq = flat[current];
          if (qq && qq.opts && idx < qq.opts.length) { answers[current] = idx; renderQ(); }
        } else if (k === 'Enter' && current >= flat.length - 1) {
          e.preventDefault(); showReviewScreen();
        }
      });
    }
  }

  function extractTranscript(text) {
    var m = String(text || '').match(/transcript\)?\s*:\s*["']([^"']+)["']/i);
    if (m) return m[1];
    m = String(text || '').match(/(?:Recording|Conversation|Lecture|Announcement|Advisor|Professor|Student|Tutor|Librarian|TA|Officer)[^:]*:\s*["']?([^"'\n]+)/i);
    if (m) return m[1].replace(/["']$/, '').trim();
    var t = String(text || '').replace(/^PASSAGE[—\-].*?\n+/i, '').replace(/\n.*$/, '').trim();
    return t.length > 20 ? t : '';
  }

  function speakText(text) {
    if (!window.speechSynthesis) { alert('Speech not supported. Read the transcript on screen.'); return; }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9; u.lang = 'en-US';
    window.speechSynthesis.speak(u);
  }

  function renderQ() {
    var qq = flat[current];
    if (!qq) return;
    document.getElementById('qNum').textContent = 'Question ' + (current + 1) + ' of ' + flat.length + (qq._sec ? ' · ' + qq._sec : '');
    document.getElementById('qCount').textContent = (current + 1) + ' / ' + flat.length;
    var typeBadge = qq.type ? ('<span class="q-type">' + esc(qq.type) + '</span>') : '';
    var stem = qq.html ? qq.q : esc(qq.q);
    var h = typeBadge + '<div class="q-stem' + (qq.html ? ' q-html' : '') + '">' + stem + '</div>';
    var transcript = extractTranscript(qq.q || '');
    var isListening = /listening|detail|function|attitude/i.test(qq.type || '') || /transcript|Recording|Conversation|Lecture|Announcement/i.test(qq.q || '');
    if (isListening && transcript) h += '<button type="button" class="btn btn-sm btn-line" id="listenBtn" style="margin:0.4rem 0 0.75rem">▶ Listen to transcript</button>';
    h += '<div class="opts">';
    (qq.opts || []).forEach(function (o, i) {
      var sel = answers[current] === i ? ' selected' : '';
      h += '<label class="opt' + sel + '"><input type="radio" name="q' + current + '" value="' + i + '"' + (sel ? ' checked' : '') + '/> <span>' + esc(o) + '</span></label>';
    });
    h += '</div>';
    document.getElementById('qContent').innerHTML = h;
    var listenBtn = document.getElementById('listenBtn');
    if (listenBtn) listenBtn.onclick = function () { var t = extractTranscript(flat[current].q || ''); if (t) speakText(t); };
    document.querySelectorAll('#qContent .opt input').forEach(function (inp) {
      inp.addEventListener('change', function () { answers[current] = parseInt(inp.value, 10); renderNav(); });
    });
    document.getElementById('flagBtn').classList.toggle('on', !!flags[current]);
    document.getElementById('submitBtn').classList.toggle('hidden', current < flat.length - 1);
    document.getElementById('nextBtn').classList.toggle('hidden', current >= flat.length - 1);
    renderNav();
  }

  function renderNav() {
    var grid = document.getElementById('navGrid'), h = '';
    flat.forEach(function (_, i) {
      var cls = 'nav-btn';
      if (i === current) cls += ' current';
      if (answers[i] != null) cls += ' answered';
      if (flags[i]) cls += ' flagged';
      h += '<button class="' + cls + '" data-i="' + i + '">' + (i + 1) + '</button>';
    });
    grid.innerHTML = h;
    grid.querySelectorAll('.nav-btn').forEach(function (b) {
      b.onclick = function () { current = parseInt(b.getAttribute('data-i'), 10); renderQ(); };
    });
  }

  function showReviewScreen() {
    clearInterval(timerInt);
    document.getElementById('examView').classList.add('hidden');
    document.getElementById('examBottom').classList.add('hidden');
    document.getElementById('reviewView').classList.remove('hidden');
    var grid = document.getElementById('reviewGrid'), h = '';
    flat.forEach(function (_, i) {
      var cls = 'review-cell';
      if (flags[i]) cls += ' flagged';
      else if (answers[i] != null) cls += ' answered';
      else cls += ' unanswered';
      h += '<div class="' + cls + '" data-i="' + i + '">' + (i + 1) + '</div>';
    });
    grid.innerHTML = h;
    grid.querySelectorAll('.review-cell').forEach(function (c) {
      c.onclick = function () {
        current = parseInt(c.getAttribute('data-i'), 10);
        document.getElementById('reviewView').classList.add('hidden');
        document.getElementById('examView').classList.remove('hidden');
        document.getElementById('examBottom').classList.remove('hidden');
        renderQ();
      };
    });
  }

  function finishTest() {
    submitted = true;
    document.getElementById('reviewView').classList.add('hidden');
    var correct = 0, feedback = [];
    flat.forEach(function (qq, i) {
      var ok = answers[i] === qq.correct;
      if (ok) correct++;
      feedback.push({ i: i, ok: ok, exp: qq.exp, type: qq.type, user: answers[i], right: qq.correct, opts: qq.opts });
    });
    var pct = flat.length ? Math.round((correct / flat.length) * 100) : 0;

    if (fullMode) {
      var display = (T.scoreType === 'band') ? pctToBand(pct) : (T.scoreType === 'toefl120' ? (Math.round(pct * 1.2) + '/120') : (pct + '%'));
      fullResults.push({ id: activeSection.id, name: activeSection.name, correct: correct, total: flat.length, pct: pct, display: display });
      try {
        var key = 'tih_pt_best_' + exam + '_' + activeSection.id;
        var prev = null; try { prev = JSON.parse(localStorage.getItem(key)); } catch (e) {}
        var cur = { pct: pct, display: display, at: new Date().toISOString() };
        if (!prev || cur.pct > prev.pct) localStorage.setItem(key, JSON.stringify(cur));
      } catch (e) {}
      var nextIdx = fullIndex + 1;
      if (nextIdx < fullQueue.length) { showSectionBreak(activeSection, nextIdx); return; }
      showFullTestResults(); return;
    }

    document.getElementById('resultsView').classList.remove('hidden');
    var scoreLabel = '';
    if (T.scoreType === 'band') scoreLabel = '<div class="score-big">' + pctToBand(pct) + '</div><div class="band-badge">Estimated Band</div>';
    else if (T.scoreType === 'toefl120') scoreLabel = '<div class="score-big">' + Math.round(pct * 1.2) + '</div><div class="band-badge">Estimated / 120</div>';
    else scoreLabel = '<div class="score-big">' + pct + '%</div>';
    var h = '<div class="eyebrow">Results</div><h2 style="font-family:Poppins;color:var(--exam-blue)">' + esc(activeSection.name) + '</h2>' + scoreLabel;
    h += '<p style="margin:.75rem 0;color:var(--exam-muted)">' + correct + ' / ' + flat.length + ' correct (' + pct + '%)</p>';
    var byType = {};
    feedback.forEach(function (f) {
      var t = f.type || 'general';
      if (!byType[t]) byType[t] = { ok: 0, total: 0 };
      byType[t].total++; if (f.ok) byType[t].ok++;
    });
    var typeKeys = Object.keys(byType);
    if (typeKeys.length > 1) {
      h += '<h3 style="margin:1rem 0 .4rem;font-size:1rem">Skill breakdown</h3><div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.75rem">';
      typeKeys.forEach(function (t) {
        var b = byType[t];
        h += '<span style="font-size:.78rem;background:#E8EDF5;padding:.25rem .55rem;border-radius:4px">' + esc(t) + ': ' + b.ok + '/' + b.total + ' (' + Math.round(b.ok / b.total * 100) + '%)</span>';
      });
      h += '</div>';
    }
    var coach = pct >= 85 ? 'Excellent. Next: practise under stricter time pressure.' : pct >= 70 ? 'Strong base. Review missed inference and vocabulary items.' : pct >= 55 ? 'Solid foundation. Prioritise factual and main-idea questions.' : 'Keep practising section by section.';
    h += '<p style="font-size:.9rem;color:var(--exam-muted);margin:.5rem 0 1rem">' + coach + '</p>';
    h += '<h3 style="margin:1rem 0 .5rem;font-size:1rem">Question feedback</h3>';
    feedback.forEach(function (f) {
      h += '<div class="feedback-item ' + (f.ok ? 'correct' : 'wrong') + '"><strong>Q' + (f.i + 1) + (f.type ? ' · ' + esc(f.type) : '') + '</strong> — ' + (f.ok ? 'Correct' : 'Incorrect');
      if (f.exp) h += '<div style="font-size:.85rem;margin-top:.25rem">' + esc(f.exp) + '</div>';
      if (!f.ok && f.opts) h += '<div style="font-size:.82rem;color:var(--exam-muted)">Your answer: ' + esc(f.opts[f.user] || '—') + ' · Correct: ' + esc(f.opts[f.right] || '') + '</div>';
      h += '</div>';
    });
    h += '<div style="margin-top:1.25rem;display:flex;gap:.6rem;flex-wrap:wrap"><a class="btn btn-primary" href="practice-test.html?exam=' + esc(exam) + '">Try another section</a><button class="btn btn-line" id="printResultsBtn">Print results</button></div>';
    document.getElementById('resultsPanel').innerHTML = h;
    var pb = document.getElementById('printResultsBtn');
    if (pb) pb.onclick = function () { window.print(); };
    try {
      var secId = (activeSection && activeSection.id) ? activeSection.id : 'full';
      var key2 = 'tih_pt_best_' + exam + '_' + secId;
      var prev2 = null; try { prev2 = JSON.parse(localStorage.getItem(key2)); } catch (e) {}
      var disp2 = (T.scoreType === 'band') ? pctToBand(pct) : (T.scoreType === 'toefl120' ? (Math.round(pct * 1.2) + '/120') : (pct + '%'));
      var cur2 = { pct: pct, display: disp2, at: new Date().toISOString() };
      if (!prev2 || cur2.pct > prev2.pct) localStorage.setItem(key2, JSON.stringify(cur2));
    } catch (e) {}
  }

  function showFullTestResults() {
    document.getElementById('resultsView').classList.remove('hidden');
    document.getElementById('examView').classList.add('hidden');
    document.getElementById('examBottom').classList.add('hidden');
    document.getElementById('secLabel').textContent = 'Full Test Results';
    fullMode = false;
    var totalC = 0, totalQ = 0;
    fullResults.forEach(function (r) { totalC += r.correct; totalQ += r.total; });
    var overallPct = totalQ ? Math.round((totalC / totalQ) * 100) : 0;
    var overallDisplay = (T.scoreType === 'band') ? pctToBand(overallPct) : (T.scoreType === 'toefl120' ? (Math.round(overallPct * 1.2) + '/120') : (overallPct + '%'));
    var h = '<div class="eyebrow">Full Test Results</div><h2 style="font-family:Poppins;color:var(--exam-blue)">Overall</h2>';
    if (T.scoreType === 'band') h += '<div class="score-big">' + overallDisplay + '</div><div class="band-badge">Estimated Band</div>';
    else if (T.scoreType === 'toefl120') h += '<div class="score-big">' + overallDisplay + '</div><div class="band-badge">Estimated / 120</div>';
    else h += '<div class="score-big">' + overallPct + '%</div>';
    h += '<p style="margin:.75rem 0;color:var(--exam-muted)">' + totalC + ' / ' + totalQ + ' correct (' + overallPct + '%)</p>';
    h += '<h3 style="margin:1rem 0 .5rem;font-size:1rem">By section</h3>';
    fullResults.forEach(function (r) {
      h += '<div class="feedback-item" style="border-left-color:#0B3D91"><strong>' + esc(r.name) + '</strong> — ' + r.correct + '/' + r.total + ' (' + r.pct + '%) · ' + esc(r.display) + '</div>';
    });
    try {
      var key = 'tih_pt_best_' + exam + '_full';
      var prev = null; try { prev = JSON.parse(localStorage.getItem(key)); } catch (e) {}
      var cur = { pct: overallPct, display: overallDisplay, at: new Date().toISOString() };
      if (!prev || cur.pct > prev.pct) localStorage.setItem(key, JSON.stringify(cur));
    } catch (e) {}
    h += '<div style="margin-top:1.25rem;display:flex;gap:.6rem;flex-wrap:wrap"><a class="btn btn-primary" href="practice-test.html?exam=' + esc(exam) + '">Back to sections</a><button class="btn btn-line" id="printResultsBtn">Print results</button></div>';
    document.getElementById('resultsPanel').innerHTML = h;
    var pb = document.getElementById('printResultsBtn');
    if (pb) pb.onclick = function () { window.print(); };
  }

  function pctToBand(pct) {
    if (pct >= 90) return '8.0–9.0';
    if (pct >= 80) return '7.0–7.5';
    if (pct >= 70) return '6.5–7.0';
    if (pct >= 60) return '6.0–6.5';
    if (pct >= 50) return '5.5–6.0';
    if (pct >= 40) return '5.0–5.5';
    if (pct >= 30) return '4.5–5.0';
    return 'Below 4.5';
  }

  function renderSelfCheck(kind) {
    var items = kind === 'writing' ? (T.writing || []) : (T.speaking || []);
    var container = document.getElementById('resultsPanel');
    var h = '<div class="eyebrow">Self-check</div><h2 style="font-family:Poppins;color:var(--exam-blue)">' + (kind === 'writing' ? 'Writing' : 'Speaking') + '</h2>';
    h += '<p class="lead">Use the checklist, then compare with the model answer.</p>';
    items.forEach(function (s, i) {
      h += '<div class="panel" style="margin-top:1rem"><h4 style="color:var(--exam-blue)">Task ' + (i + 1) + '</h4>';
      if (s.chartHtml) h += s.chartHtml;
      h += '<p style="white-space:pre-wrap;margin:.5rem 0">' + esc(s.prompt) + '</p>';
      if (s.checklist) {
        h += '<ul style="margin:.4rem 0 .6rem 1.1rem;font-size:.88rem">';
        s.checklist.forEach(function (c) { h += '<li>' + esc(c) + '</li>'; });
        h += '</ul>';
      }
      if (s.tips) h += '<p style="font-size:.85rem;color:var(--exam-muted)">' + esc(s.tips) + '</p>';
      h += '<button class="reveal-btn" onclick="toggleModel(this)">Show model answer</button><div class="model">' + esc(s.model) + '</div></div>';
    });
    container.innerHTML = h;
  }

  window.toggleModel = function (btn) {
    var m = btn.nextElementSibling;
    var open = m.classList.toggle('show');
    btn.textContent = open ? 'Hide model answer' : 'Show model answer';
  };
})();
