/* ============================================================
   Standalone hero particle-network animation — a self-initializing,
   self-contained copy of the constellation effect used site-wide via
   main.js. Load this on self-contained pages that do NOT include
   main.js (e.g. the Learning Hub) so their hero stays alive too.
   Do NOT load it together with main.js on the same page — main.js
   already builds the same effect (this would double it).
   ============================================================ */
(function () {
  function init() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('requestAnimationFrame' in window)) return;

    var heroes = document.querySelectorAll('.hero-modern, .lh-modern, .page-hero, [data-hero-net]');
    for (var i = 0; i < heroes.length; i++) {
      var hero = heroes[i];
      if (hero.querySelector('canvas.hero-net')) continue;    // idempotent
      var canvas = document.createElement('canvas');
      canvas.className = 'hero-net';
      canvas.setAttribute('aria-hidden', 'true');
      hero.insertBefore(canvas, hero.firstChild);
      build(hero, canvas);
    }
  }

  function build(hero, canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Light heroes get brand blue on a pale background; dark heroes get a
    // brighter, airier blue so the nodes read as "glowing".
    var light = hero.classList.contains('hero-modern') || hero.classList.contains('lh-modern');
    var rgb = light ? '21,101,216' : '150,195,255';
    var LINE_MAX = light ? 0.26 : 0.34;
    var NODE_A   = light ? 0.55 : 0.7;
    var HALO_A   = light ? 0.10 : 0.16;

    var isCoarse = window.matchMedia('(pointer: coarse)').matches;
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var LINK_DIST = 132;

    var W = 0, H = 0, nodes = [], raf = null, running = false;
    var pointer = { x: -9999, y: -9999, on: false };

    function seed() {
      var area = W * H;
      var n = Math.round(area / 8000);
      n = Math.max(26, Math.min(n, isCoarse ? 60 : 150));
      nodes = [];
      for (var i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          r: 1.1 + Math.random() * 1.7
        });
      }
    }

    function resize() {
      var rect = hero.getBoundingClientRect();
      W = Math.max(1, Math.round(rect.width));
      H = Math.max(1, Math.round(rect.height));
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      seed();
    }

    function step() {
      ctx.clearRect(0, 0, W, H);

      for (var i = 0; i < nodes.length; i++) {
        var p = nodes[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; else if (p.y > H + 20) p.y = -20;
      }

      ctx.lineWidth = 1;
      for (var i2 = 0; i2 < nodes.length; i2++) {
        var a = nodes[i2];
        for (var j = i2 + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            var alpha = (1 - d / LINK_DIST) * LINE_MAX;
            ctx.strokeStyle = 'rgba(' + rgb + ',' + alpha.toFixed(3) + ')';
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (pointer.on) {
          var pdx = a.x - pointer.x, pdy = a.y - pointer.y;
          var pd = Math.sqrt(pdx * pdx + pdy * pdy);
          var R = LINK_DIST * 1.35;
          if (pd < R) {
            var pa = (1 - pd / R) * (LINE_MAX + 0.12);
            ctx.strokeStyle = 'rgba(' + rgb + ',' + pa.toFixed(3) + ')';
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      for (var i3 = 0; i3 < nodes.length; i3++) {
        var q = nodes[i3];
        ctx.fillStyle = 'rgba(' + rgb + ',' + HALO_A + ')';
        ctx.beginPath();
        ctx.arc(q.x, q.y, q.r * 3.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(' + rgb + ',' + NODE_A + ')';
        ctx.beginPath();
        ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function start() { if (!running) { running = true; raf = requestAnimationFrame(step); } }
    function stop() { running = false; if (raf) { cancelAnimationFrame(raf); raf = null; } }

    if (!isCoarse) {
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        pointer.x = e.clientX - r.left;
        pointer.y = e.clientY - r.top;
        pointer.on = true;
      });
      hero.addEventListener('mouseleave', function () { pointer.on = false; pointer.x = pointer.y = -9999; });
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { en.isIntersecting ? start() : stop(); });
      }, { threshold: 0 }).observe(hero);
    } else {
      start();
    }

    var rt = null;
    var onResize = function () { clearTimeout(rt); rt = setTimeout(resize, 150); };
    window.addEventListener('resize', onResize);
    if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(hero);

    resize();
    start();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
