/* TIH Practice Test — exam-mode engine (real computer-test look) */
(function () {
  function getUrlParam(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }
  function esc(s) {
    var a = String.fromCharCode(38);
    return String(s == null ? '' : s)
      .replace(/&/g, a + 'amp;')
      .replace(/</g, a + 'lt;')
      .replace(/>/g, a + 'gt;');
  }

  var PT_POS_DEP = /\b(all|none|both|any|each) of the (above|following)\b|\bthe above\b|\b(all|none) of these\b|\bboth [a-d] (and|&) [a-d]\b|\b[a-d] (and|or|&) [a-d]\b|\banswers? [a-d]\b|\boptions? [a-d]\b/i;

  var exam = (getUrlParam('exam') || 'ielts').toLowerCase();
  var sectionParam = (getUrlParam('section') || '').toLowerCase();
  var T = (typeof PRACTICE_TESTS !== 'undefined') ? PRACTICE_TESTS[exam] : null;
  var courseTitle = (typeof COURSES_DB !== 'undefined' && COURSES_DB[exam])
    ? COURSES_DB[exam].title
    : (T ? T.title : 'Practice Test');
  var activeSection = null;
  var selfCheckMode = false;
  var flat = [], answers = {}, flags = {}, current = 0, timerInt = null, remaining = 0, submitted = false;

  if (!T) {
    var et = document.getElementById('examTitle');
    if (et) et.textContent = 'Practice test not found.';
  } else {
    if (typeof HubDB !== 'undefined' && !HubDB.hasAccess(exam)) {
      if (typeof Paywall !== 'undefined') {
        Paywall.require({ itemId: exam, itemTitle: courseTitle.split(':')[0] + ', Practice Test' });
      }
    }
    if (typeof HubDB === 'undefined' || HubDB.hasAccess(exam)) {
      initPractice();
    }
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
    try {
      var raw = localStorage.getItem('tih_pt_best_' + exam + '_' + secId);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function renderProgressSummary() {
    var intro = document.getElementById('examIntro');
    if (!intro) return;
    var secs = (T.sections || []).map(function (s) { return s.id; });
    secs.push('full');
    var parts = [];
    secs.forEach(function (id) {
      var b = getBest(id);
      if (b) {
        var label = id === 'full' ? 'Full Test' : id.charAt(0).toUpperCase() + id.slice(1);
        parts.push(label + ': ' + b.display);
      }
    });
    var old = document.getElementById('progressSummary');
    if (old) old.remove();
    if (parts.length === 0) return;
    var div = document.createElement('div');
    div.id = 'progressSummary';
    div.style.cssText = 'margin:0.75rem 0 0;padding:0.65rem 0.85rem;background:#F0F5FF;border:1px solid #C5D0E0;border-radius:6px;font-size:0.85rem;color:#1A2332';
    div.innerHTML = '<strong style="color:#0B3D91">Your best scores</strong> — ' + parts.join(' · ');
    intro.parentNode.insertBefore(div, intro.nextSibling);
  }

  function renderSectionPicker() {
    var grid = document.getElementById('secGrid');
    var h = '';
    (T.sections || []).forEach(function (s) {
      var n = (s.questions || []).length;
      var best = getBest(s.id);
      var bestLine = best ? (' · Best ' + best.display) : '';
      h += '<button class="sec-card" data-id="' + esc(s.id) + '">';
      h += '<h4>' + esc(s.name) + '</h4>';
      h += '<p>' + n + ' Q · ' + (s.durationMin || 15) + ' min' + bestLine + '</p></button>';
    });
    if (T.writing && T.writing.length) {
      h += '<button class="sec-card" data-id="writing"><h4>Writing</h4><p>Self-check · models</p></button>';
    }
    if (T.speaking && T.speaking.length) {
      h += '<button class="sec-card" data-id="speaking"><h4>Speaking</h4><p>Self-check · models</p></button>';
    }
    h += '<button class="sec-card full" data-id="full"><h4>Full Test</h4><p>All scored sections</p></button>';
    grid.innerHTML = h;
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
    activeSection = sec;
    selfCheckMode = false;
    flat = buildFlat(sec.questions || []);
    answers = {}; flags = {}; current = 0; submitted = false;
    remaining = (sec.durationMin || 15) * 60;
    document.getElementById('introView').classList.add('hidden');
    document.getElementById('examView').classList.remove('hidden');
    document.getElementById('examBottom').classList.remove('hidden');
    document.getElementById('secLabel').textContent = sec.name;
    startTimer();
    renderQ();
    bindNav();
  }

  function startFull() {
    var all = [];
    (T.sections || []).forEach(function (s) {
      (s.questions || []).forEach(function (q) { all.push(Object.assign({}, q, { _sec: s.name })); });
    });
    activeSection = { id: 'full', name: 'Full Test', durationMin: T.durationMin || 45, questions: all };
    selfCheckMode = false;
    flat = buildFlat(all);
    answers = {}; flags = {}; current = 0; submitted = false;
    remaining = (activeSection.durationMin || 45) * 60;
    document.getElementById('introView').classList.add('hidden');
    document.getElementById('examView').classList.remove('hidden');
    document.getElementById('examBottom').classList.remove('hidden');
    document.getElementById('secLabel').textContent = 'Full Test';
    startTimer();
    renderQ();
    bindNav();
  }

  function startSelfCheck(kind) {
    selfCheckMode = true;
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
      return {
        idx: i,
        q: q.q,
        opts: sh.opts,
        correct: sh.correct,
        exp: q.exp || '',
        type: q.type || '',
        html: !!q.html,
        _sec: q._sec || ''
      };
    });
  }

  function startTimer() {
    clearInterval(timerInt);
    updateTimer();
    timerInt = setInterval(function () {
      remaining--;
      updateTimer();
      if (remaining <= 0) {
        clearInterval(timerInt);
        showReviewScreen();
      }
    }, 1000);
  }

  function updateTimer() {
    var m = Math.floor(Math.max(0, remaining) / 60);
    var s = Math.max(0, remaining) % 60;
    var el = document.getElementById('timer');
    el.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    el.classList.toggle('warn', remaining <= 60 && remaining > 0);
  }

  function bindNav() {
    document.getElementById('prevBtn').onclick = function () { if (current > 0) { current--; renderQ(); } };
    document.getElementById('nextBtn').onclick = function () {
      if (current < flat.length - 1) { current++; renderQ(); }
      else showReviewScreen();
    };
    document.getElementById('flagBtn').onclick = function () {
      flags[current] = !flags[current];
      renderQ();
    };
    document.getElementById('submitBtn').onclick = showReviewScreen;
    document.getElementById('backToExam').onclick = function () {
      document.getElementById('reviewView').classList.add('hidden');
      document.getElementById('examView').classList.remove('hidden');
      document.getElementById('examBottom').classList.remove('hidden');
      renderQ();
    };
    document.getElementById('confirmSubmit').onclick = finishTest;
  }

  function renderQ() {
    var qq = flat[current];
    if (!qq) return;
    document.getElementById('qNum').textContent = 'Question ' + (current + 1) + ' of ' + flat.length + (qq._sec ? ' · ' + qq._sec : '');
    document.getElementById('qCount').textContent = (current + 1) + ' / ' + flat.length;
    var typeBadge = qq.type ? ('<span class="q-type">' + esc(qq.type) + '</span>') : '';
    var stem = qq.html ? qq.q : esc(qq.q);
    var h = typeBadge + '<div class="q-stem' + (qq.html ? ' q-html' : '') + '">' + stem + '</div>';
    h += '<div class="opts">';
    (qq.opts || []).forEach(function (o, i) {
      var sel = answers[current] === i ? ' selected' : '';
      h += '<label class="opt' + sel + '"><input type="radio" name="q' + current + '" value="' + i + '"' + (sel ? ' checked' : '') + '/> <span>' + esc(o) + '</span></label>';
    });
    h += '</div>';
    document.getElementById('qContent').innerHTML = h;
    document.querySelectorAll('#qContent .opt input').forEach(function (inp) {
      inp.addEventListener('change', function () {
        answers[current] = parseInt(inp.value, 10);
        renderNav();
      });
    });
    document.getElementById('flagBtn').classList.toggle('on', !!flags[current]);
    document.getElementById('submitBtn').classList.toggle('hidden', current < flat.length - 1);
    document.getElementById('nextBtn').classList.toggle('hidden', current >= flat.length - 1);
    renderNav();
  }

  function renderNav() {
    var grid = document.getElementById('navGrid');
    var h = '';
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
    var grid = document.getElementById('reviewGrid');
    var h = '';
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
    document.getElementById('resultsView').classList.remove('hidden');
    var correct = 0;
    var feedback = [];
    flat.forEach(function (qq, i) {
      var ok = answers[i] === qq.correct;
      if (ok) correct++;
      feedback.push({ i: i, ok: ok, exp: qq.exp, type: qq.type, user: answers[i], right: qq.correct, opts: qq.opts });
    });
    var pct = flat.length ? Math.round((correct / flat.length) * 100) : 0;
    var scoreLabel = '';
    if (T.scoreType === 'band') {
      var band = pctToBand(pct);
      scoreLabel = '<div class="score-big">' + band + '</div><div class="band-badge">Estimated Band</div>';
    } else if (T.scoreType === 'toefl120') {
      var sc = Math.round(pct * 1.2);
      scoreLabel = '<div class="score-big">' + sc + '</div><div class="band-badge">Estimated / 120</div>';
    } else {
      scoreLabel = '<div class="score-big">' + pct + '%</div>';
    }
    var h = '<div class="eyebrow">Results</div><h2 style="font-family:Poppins;color:var(--exam-blue)">' + esc(activeSection.name) + '</h2>';
    h += scoreLabel;
    h += '<p style="margin:.75rem 0;color:var(--exam-muted)">' + correct + ' / ' + flat.length + ' correct (' + pct + '%)</p>';

    var byType = {};
    feedback.forEach(function (f) {
      var t = f.type || 'general';
      if (!byType[t]) byType[t] = { ok: 0, total: 0 };
      byType[t].total++;
      if (f.ok) byType[t].ok++;
    });
    var typeKeys = Object.keys(byType);
    if (typeKeys.length > 1) {
      h += '<h3 style="margin:1rem 0 .4rem;font-size:1rem">Skill breakdown</h3>';
      h += '<div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.75rem">';
      typeKeys.forEach(function (t) {
        var b = byType[t];
        var p = Math.round((b.ok / b.total) * 100);
        h += '<span style="font-size:.78rem;background:#E8EDF5;padding:.25rem .55rem;border-radius:4px">' + esc(t) + ': ' + b.ok + '/' + b.total + ' (' + p + '%)</span>';
      });
      h += '</div>';
    }

    var coach = '';
    if (pct >= 85) coach = 'Excellent. Next: practise under stricter time pressure and tackle the hardest inference items.';
    else if (pct >= 70) coach = 'Strong base. Review missed inference and vocabulary questions carefully.';
    else if (pct >= 55) coach = 'Solid foundation. Prioritise factual and main-idea questions, then add inference.';
    else coach = 'Keep going section by section. Master factual detail first, then move to inference and attitude.';
    h += '<p style="font-size:.9rem;color:var(--exam-muted);margin:.5rem 0 1rem">' + coach + '</p>';

    h += '<h3 style="margin:1rem 0 .5rem;font-size:1rem">Question feedback</h3>';
    feedback.forEach(function (f) {
      h += '<div class="feedback-item ' + (f.ok ? 'correct' : 'wrong') + '">';
      h += '<strong>Q' + (f.i + 1) + (f.type ? ' · ' + esc(f.type) : '') + '</strong> — ' + (f.ok ? 'Correct' : 'Incorrect');
      if (f.exp) h += '<div style="font-size:.85rem;margin-top:.25rem">' + esc(f.exp) + '</div>';
      if (!f.ok && f.opts) h += '<div style="font-size:.82rem;color:var(--exam-muted)">Your answer: ' + esc(f.opts[f.user] || '—') + ' · Correct: ' + esc(f.opts[f.right] || '') + '</div>';
      h += '</div>';
    });
    h += '<div style="margin-top:1.25rem"><a class="btn btn-primary" href="practice-test.html?exam=' + esc(exam) + '">Try another section</a></div>';
    document.getElementById('resultsPanel').innerHTML = h;

    try {
      var secId = (activeSection && activeSection.id) ? activeSection.id : 'full';
      var key = 'tih_pt_best_' + exam + '_' + secId;
      var prev = null;
      try { prev = JSON.parse(localStorage.getItem(key)); } catch (e) {}
      var display = (T.scoreType === 'band') ? pctToBand(pct) : (T.scoreType === 'toefl120' ? (Math.round(pct * 1.2) + '/120') : (pct + '%'));
      var cur = { pct: pct, display: display, at: new Date().toISOString() };
      if (!prev || cur.pct > prev.pct) localStorage.setItem(key, JSON.stringify(cur));
    } catch (e) {}
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
      h += '<div class="panel" style="margin-top:1rem">';
      h += '<h4 style="color:var(--exam-blue)">Task ' + (i + 1) + '</h4>';
      if (s.chartHtml) h += s.chartHtml;
      h += '<p style="white-space:pre-wrap;margin:.5rem 0">' + esc(s.prompt) + '</p>';
      if (s.checklist) {
        h += '<ul style="margin:.4rem 0 .6rem 1.1rem;font-size:.88rem">';
        s.checklist.forEach(function (c) { h += '<li>' + esc(c) + '</li>'; });
        h += '</ul>';
      }
      if (s.tips) h += '<p style="font-size:.85rem;color:var(--exam-muted)">' + esc(s.tips) + '</p>';
      h += '<button class="reveal-btn" onclick="toggleModel(this)">Show model answer</button>';
      h += '<div class="model">' + esc(s.model) + '</div></div>';
    });
    container.innerHTML = h;
  }

  window.toggleModel = function (btn) {
    var m = btn.nextElementSibling;
    var open = m.classList.toggle('show');
    btn.textContent = open ? 'Hide model answer' : 'Show model answer';
  };
})();
