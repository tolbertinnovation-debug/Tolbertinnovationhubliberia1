/* TIH Practice Test — exam-mode engine (real computer-test look) */
(function () {
  function getUrlParam(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
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

  function sectionList() {
    var list = [];
    (T.sections || []).forEach(function (sec) {
      var id = sec.id || String(sec.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
      list.push({
        id: id,
        name: sec.name,
        durationMin: sec.durationMin || T.durationMin,
        qCount: (sec.questions || []).length,
        type: 'mcq',
        sec: sec
      });
    });
    if ((T.writing || []).length) {
      list.push({ id: 'writing', name: 'Writing', durationMin: null, qCount: (T.writing || []).length, type: 'self', items: T.writing });
    }
    if ((T.speaking || []).length) {
      list.push({ id: 'speaking', name: 'Speaking', durationMin: null, qCount: (T.speaking || []).length, type: 'self', items: T.speaking });
    }
    return list;
  }

  function buildFlat(fromSections) {
    flat = [];
    (fromSections || []).forEach(function (sec) {
      (sec.questions || []).forEach(function (qq) {
        var sh = shuffleQ(qq);
        flat.push({ section: sec.name, q: qq.q, opts: sh.opts, correct: sh.correct, exp: qq.exp });
      });
    });
  }

  function initPractice() {
    document.getElementById('examEyebrow').textContent = courseTitle.split(':')[0] + ' · Practice Test';
    document.getElementById('examTitle').textContent = T.title;
    document.getElementById('examIntro').textContent = T.intro;
    document.getElementById('backCourseBtn').href = 'course-player?id=' + encodeURIComponent(exam);
    var bs = document.getElementById('backSectionsBtn');
    if (bs) bs.href = 'practice-test?exam=' + encodeURIComponent(exam);
    var bc2 = document.getElementById('backCourseBtn2');
    if (bc2) bc2.href = 'course-player?id=' + encodeURIComponent(exam);

    document.getElementById('startBtn').addEventListener('click', startTest);
    document.getElementById('submitBtn').addEventListener('click', showReviewScreen);
    document.getElementById('finalSubmitBtn').addEventListener('click', function () {
      if (confirm('Submit your final answers? You cannot change them after this.')) finishTest();
    });
    document.getElementById('backToTestBtn').addEventListener('click', function () {
      document.getElementById('reviewView').classList.add('hidden');
      document.getElementById('testView').classList.remove('hidden');
      document.getElementById('examBottom').classList.remove('hidden');
      renderQ();
      renderNav();
    });
    document.getElementById('retakeBtn').addEventListener('click', function () { location.reload(); });
    document.getElementById('prevBtn').addEventListener('click', function () {
      if (current > 0) { current--; renderQ(); renderNav(); }
    });
    document.getElementById('nextBtn').addEventListener('click', function () {
      if (current < flat.length - 1) {
        current++;
        renderQ();
        renderNav();
      } else {
        showReviewScreen();
      }
    });
    document.getElementById('flagBtn').addEventListener('click', function () {
      flags[current] = !flags[current];
      renderNav();
      updateFlagBtn();
    });

    var sections = sectionList();
    var hasSectionIds = (T.sections || []).some(function (s) { return !!s.id; }) ||
      (T.writing || []).length || (T.speaking || []).length;

    if (sectionParam && sectionParam !== 'full') {
      var match = sections.filter(function (s) { return s.id === sectionParam; })[0];
      if (match) { selectSection(match); return; }
    }
    if (sectionParam === 'full' || !hasSectionIds) {
      selectSection({ id: 'full', name: 'Full Test', type: 'mcq', sec: null, durationMin: T.durationMin });
      return;
    }
    renderSectionPicker(sections);
  }

  function renderSectionPicker(sections) {
    var icons = { listening: '🎧', reading: '📖', grammar: '✍️', academic: '📝', writing: '✍️', speaking: '🗣️', full: '🎯' };
    var h = '<p style="font-size:.88rem;color:var(--exam-muted);margin-bottom:.6rem;">Select a section (or Full Test) — same structure as the real computer exam:</p><div class="sec-grid">';
    var totalQ = 0;
    (T.sections || []).forEach(function (s) { totalQ += (s.questions || []).length; });
    h += '<button type="button" class="sec-card full" data-sid="full"><h4>🎯 Full Test</h4><p>All scored sections · ~' + T.durationMin + ' min · ' + totalQ + ' Q</p></button>';
    sections.forEach(function (s) {
      var meta = s.type === 'self'
        ? (s.qCount + ' prompt' + (s.qCount === 1 ? '' : 's') + ' · Self-check')
        : (s.qCount + ' questions · ' + (s.durationMin || '?') + ' min');
      h += '<button type="button" class="sec-card" data-sid="' + esc(s.id) + '"><h4>' + (icons[s.id] || '📌') + ' ' + esc(s.name) + '</h4><p>' + esc(meta) + '</p></button>';
    });
    h += '</div>';
    var picker = document.getElementById('sectionPicker');
    picker.innerHTML = h;
    picker.querySelectorAll('.sec-card').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sid = btn.getAttribute('data-sid');
        if (sid === 'full') {
          selectSection({ id: 'full', name: 'Full Test', type: 'mcq', sec: null, durationMin: T.durationMin });
          return;
        }
        var match = sections.filter(function (s) { return s.id === sid; })[0];
        if (match) selectSection(match);
      });
    });
  }

  function selectSection(sel) {
    activeSection = sel.id;
    selfCheckMode = (sel.type === 'self');
    document.getElementById('sectionPicker').innerHTML = '';
    document.getElementById('examTitle').textContent = T.title + (sel.id === 'full' ? '' : ' — ' + sel.name);
    document.getElementById('examEyebrow').textContent = courseTitle.split(':')[0] + ' · ' + (sel.id === 'full' ? 'Full Practice Test' : sel.name + ' Practice');
    var topSec = document.getElementById('topSecLabel');
    if (topSec) topSec.textContent = sel.id === 'full' ? 'FULL TEST' : sel.name.toUpperCase();

    if (selfCheckMode) {
      document.getElementById('startBtn').classList.add('hidden');
      var sc = document.getElementById('selfCheckView');
      sc.classList.remove('hidden');
      renderExtras(sc);
      return;
    }

    var secs = sel.id === 'full' ? (T.sections || []) : (sel.sec ? [sel.sec] : []);
    buildFlat(secs);
    remaining = (sel.durationMin || T.durationMin || 30) * 60;

    var mr = document.getElementById('metaRow');
    if (mr) {
      mr.style.display = 'block';
      mr.textContent = flat.length + ' questions · ' + (sel.durationMin || T.durationMin) + ' minutes · Auto-scored';
    }
    document.getElementById('startBtn').classList.remove('hidden');
    document.getElementById('startBtn').style.display = 'inline-flex';
  }

  function startTest() {
    if (!flat.length) { alert('No questions available for this section.'); return; }
    document.getElementById('introView').classList.add('hidden');
    document.getElementById('testView').classList.remove('hidden');
    document.getElementById('examBottom').classList.remove('hidden');
    document.getElementById('timer').style.display = 'inline-block';
    document.getElementById('submitBtn').classList.remove('hidden');
    current = 0; answers = {}; flags = {}; submitted = false;
    renderQ();
    renderNav();
    startTimer();
  }

  function startTimer() {
    var el = document.getElementById('timer');
    function tick() {
      var m = Math.floor(remaining / 60), s = remaining % 60;
      el.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      if (remaining <= 300) el.classList.add('warn');
      if (remaining <= 0) {
        clearInterval(timerInt);
        finishTest();
        return;
      }
      remaining--;
    }
    tick();
    timerInt = setInterval(tick, 1000);
  }

  function renderNav() {
    var g = document.getElementById('navGrid');
    var h = '';
    for (var i = 0; i < flat.length; i++) {
      var cls = 'nav-btn' +
        (i === current ? ' current' : '') +
        (answers[i] !== undefined ? ' answered' : '') +
        (flags[i] ? ' flagged' : '');
      h += '<button type="button" class="' + cls + '" data-i="' + i + '">' + (i + 1) + '</button>';
    }
    g.innerHTML = h;
    g.querySelectorAll('.nav-btn').forEach(function (b) {
      b.onclick = function () {
        current = parseInt(b.getAttribute('data-i'), 10);
        renderQ();
        renderNav();
      };
    });
    var nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.textContent = (current >= flat.length - 1) ? 'Review →' : 'Next →';
    updateFlagBtn();
  }

  function updateFlagBtn() {
    var fb = document.getElementById('flagBtn');
    if (!fb) return;
    if (flags[current]) {
      fb.classList.add('on');
      fb.textContent = '⚑ Flagged';
    } else {
      fb.classList.remove('on');
      fb.textContent = '⚑ Flag';
    }
  }

  function renderQ() {
    var qq = flat[current];
    if (!qq) return;
    document.getElementById('qProgress').textContent = 'Question ' + (current + 1) + ' of ' + flat.length;
    var tag = document.getElementById('qSecTag');
    if (tag) tag.textContent = qq.section || '';
    var topQ = document.getElementById('topQCount');
    if (topQ) topQ.textContent = 'Q ' + (current + 1) + ' / ' + flat.length;

    var h = '<div class="q-stem">' + esc(qq.q) + '</div>';
    (qq.opts || []).forEach(function (o, i) {
      var sel = (answers[current] === i) ? ' selected' : '';
      h += '<div class="opt' + sel + '" data-i="' + i + '">' +
        '<span class="letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="txt">' + esc(o) + '</span></div>';
    });
    document.getElementById('questionArea').innerHTML = h;
    document.getElementById('questionArea').querySelectorAll('.opt').forEach(function (el) {
      el.onclick = function () {
        answers[current] = parseInt(el.getAttribute('data-i'), 10);
        renderQ();
        renderNav();
      };
    });
  }

  function showReviewScreen() {
    document.getElementById('testView').classList.add('hidden');
    document.getElementById('examBottom').classList.add('hidden');
    document.getElementById('reviewView').classList.remove('hidden');
    var g = document.getElementById('reviewGrid');
    var h = '';
    for (var i = 0; i < flat.length; i++) {
      var cls = 'review-cell';
      if (flags[i]) cls += ' flagged';
      else if (answers[i] !== undefined) cls += ' answered';
      else cls += ' unanswered';
      h += '<button type="button" class="' + cls + '" data-i="' + i + '">' + (i + 1) + '</button>';
    }
    g.innerHTML = h;
    g.querySelectorAll('.review-cell').forEach(function (b) {
      b.onclick = function () {
        current = parseInt(b.getAttribute('data-i'), 10);
        document.getElementById('reviewView').classList.add('hidden');
        document.getElementById('testView').classList.remove('hidden');
        document.getElementById('examBottom').classList.remove('hidden');
        renderQ();
        renderNav();
      };
    });
  }

  function finishTest() {
    if (timerInt) clearInterval(timerInt);
    submitted = true;
    document.getElementById('reviewView').classList.add('hidden');
    document.getElementById('testView').classList.add('hidden');
    document.getElementById('examBottom').classList.add('hidden');
    document.getElementById('timer').style.display = 'none';

    var correct = 0;
    flat.forEach(function (qq, i) { if (answers[i] === qq.correct) correct++; });
    var pct = flat.length ? (correct / flat.length * 100) : 0;
    var conv = bandFromPct(pct);

    document.getElementById('resultView').classList.remove('hidden');
    document.getElementById('scoreBig').textContent = conv.big;
    document.getElementById('scoreDetail').textContent =
      correct + ' / ' + flat.length + ' correct (' + Math.round(pct) + '%) · ' + conv.detail;

    var rev = '';
    flat.forEach(function (qq, i) {
      var ok = answers[i] === qq.correct;
      rev += '<div class="rev-item ' + (ok ? 'ok' : 'bad') + '">';
      rev += '<strong>Q' + (i + 1) + '</strong> ' + (ok ? '✓' : '✗') + ' ' + esc(qq.q) + '<br>';
      if (qq.opts) {
        rev += '<span style="font-size:.85rem">Your answer: ' +
          (answers[i] !== undefined ? esc(qq.opts[answers[i]]) : '—') + '</span><br>';
        rev += '<span style="font-size:.85rem">Correct: ' + esc(qq.opts[qq.correct]) + '</span>';
      }
      if (qq.exp) rev += '<div class="exp">' + esc(qq.exp) + '</div>';
      rev += '</div>';
    });
    document.getElementById('reviewList').innerHTML = rev;

    try {
      var key = 'tih_practice_best_' + exam + (activeSection && activeSection !== 'full' ? '_' + activeSection : '');
      var prev = null;
      try { prev = JSON.parse(localStorage.getItem(key)); } catch (e) {}
      var cur = { pct: Math.round(pct), display: conv.big, at: new Date().toISOString() };
      if (!prev || cur.pct > prev.pct) localStorage.setItem(key, JSON.stringify(cur));
    } catch (e) {}

    try {
      if (typeof HubCloud !== 'undefined' && HubCloud.isEnabled() && typeof HubDB !== 'undefined') {
        var sess = HubDB.studentSession();
        if (sess && sess.id) {
          HubCloud.logActivity({
            student_id: sess.id,
            course_id: exam,
            activity_type: 'practice_test',
            detail: (activeSection && activeSection !== 'full' ? activeSection + ' · ' : '') + conv.big,
            score: Math.round(pct)
          });
        }
      }
    } catch (e) {}
  }

  function bandFromPct(pct) {
    if (T.scoreType === 'band') {
      var band = pct >= 90 ? 8.5 : pct >= 80 ? 7.5 : pct >= 70 ? 6.5 : pct >= 60 ? 5.5 : pct >= 50 ? 4.5 : pct >= 40 ? 3.5 : pct >= 30 ? 2.5 : 1.5;
      return { big: 'Band ~' + band, detail: 'Estimated IELTS band (practice only)' };
    }
    if (T.scoreType === 'toefl120') {
      var sc = Math.round(pct / 100 * 120);
      return { big: sc + '/120', detail: 'Estimated TOEFL iBT scale' };
    }
    if (T.scoreType === 'sat1600') {
      var sc = Math.round(400 + pct / 100 * 1200);
      return { big: sc + '/1600', detail: 'Estimated Digital SAT scale' };
    }
    return { big: Math.round(pct) + '%', detail: 'Score' };
  }

  function renderExtras(container) {
    if (!container) return;
    var h = '';
    if ((T.writing && T.writing.length) || (T.speaking && T.speaking.length)) {
      h += '<h3 style="color:var(--exam-blue);margin-bottom:.3rem;font-family:Poppins,sans-serif">Writing & Speaking Practice</h3>';
      h += '<p style="font-size:.85rem;color:var(--exam-muted);margin-bottom:1rem">Not auto-scored. Practise, then reveal a model answer and self-check against the criteria.</p>';
    }
    (T.writing || []).forEach(function (w) {
      h += '<div class="prompt-box"><div class="p-q">' + esc(w.prompt) + '</div>';
      if (w.checklist) {
        h += '<div style="margin:.5rem 0">';
        w.checklist.forEach(function (c) { h += '<div class="check">' + esc(c) + '</div>'; });
        h += '</div>';
      }
      h += '<button class="reveal-btn" onclick="toggleModel(this)">Show model answer</button>';
      h += '<div class="model">' + esc(w.model) + '</div></div>';
    });
    (T.speaking || []).forEach(function (s) {
      h += '<div class="prompt-box"><div class="p-q">' + esc(s.prompt) + '</div>';
      if (s.tips) h += '<div class="tips">💡 ' + esc(s.tips) + '</div>';
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
