// ============================================================
// Tolbert Innovation Hub, main.js
// ============================================================

// News data
const newsPosts = [
  {
    title: '2026 Scholarship Intake Opens for Qualified Applicants',
    date: 'March 8, 2026',
    category: 'Scholarships',
    summary: 'Applications are now open with updated document requirements, guidance sessions, and admission support timelines.',
    href: 'news-scholarship-2026',
    image: 'https://i.ibb.co/QF6t7Ywj/file-00000000253c72468d9345d66d15e843.png',
    imageAlt: 'Students celebrating scholarship opportunities'
  },
  {
    title: 'IELTS Mock Exam Certificate Request System Launched',
    date: 'March 8, 2026',
    category: 'Learning Hub',
    summary: 'Students who complete IELTS mock exams can now request certificate processing through the new dedicated certificate workflow.',
    href: 'news-ielts-certificate-system',
    image: 'https://i.ibb.co/cK8tRmqb/file-00000000ea6c71f4be003abaad44bbd5.png',
    imageAlt: 'IELTS Mock Exam Certificate Request System Launched'
  },
  {
    title: 'Healthcare Referral Program Expansion Update',
    date: 'March 8, 2026',
    category: 'Healthcare Programs',
    summary: 'Tolbert Innovation Hub has expanded healthcare referral support pathways for families seeking treatment coordination in India.',
    href: 'news-healthcare-referral-expansion',
    image: 'https://i.ibb.co/pjbMSz8W/file-00000000d1cc720ca76d4cc0e3dec03c.png',
    imageAlt: 'Healthcare support and treatment coordination update'
  },
  {
    title: 'Technology Innovation Support for Liberian Businesses',
    date: 'March 8, 2026',
    category: 'Technology Programs',
    summary: 'New technology consultation support helps businesses modernize operations with websites, platforms, and digital process tools.',
    href: 'news-technology-support-2026',
    image: 'https://i.ibb.co/B5ppVkyg/file-000000000ee07243ae0c4219a8d5f5e5.png',
    imageAlt: 'Technology innovation and software support update'
  }
];

// ============================================================
// Form submission handler, sends all form-card submissions to
// tolbertinnovationhub@gmail.com via Formsubmit.co
// ============================================================
const TIH_CONTACT_EMAIL = 'tolbertinnovationhub@gmail.com';

async function submitFormToEmail(form) {
  const feedback   = form.querySelector('.form-feedback');
  const submitBtn  = form.querySelector('[type="submit"]');
  const origLabel  = submitBtn ? submitBtn.textContent : '';
  const successMsg = form.dataset.successMessage || 'Thank you! We will get back to you soon.';

  // Validate first
  if (!form.checkValidity()) {
    if (feedback) {
      feedback.textContent = 'Please complete all required fields before submitting.';
      feedback.style.cssText = 'color:#b8181d;background:#fef2f2;display:block;';
    }
    form.reportValidity();
    return;
  }

  // Loading state
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
  if (feedback)  { feedback.style.display = 'none'; feedback.textContent = ''; }

  // Collect all field values
  const data = {};
  new FormData(form).forEach((val, key) => { data[key] = val; });

  // Subject line from the form's heading or page title
  const heading = form.querySelector('h3,h2')?.textContent?.trim();
  data['_subject']  = (heading || document.title) + ', Tolbert Innovation Hub';
  data['_template'] = 'table';
  data['_captcha']  = 'false';

  try {
    const res  = await fetch('https://formsubmit.co/ajax/' + TIH_CONTACT_EMAIL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (json.success === true || json.success === 'true') {
      if (feedback) {
        feedback.textContent = successMsg;
        feedback.style.cssText = 'color:#065f46;background:#ecfdf5;display:block;';
      }
      form.reset();
    } else {
      throw new Error('rejected');
    }
  } catch (_) {
    if (feedback) {
      feedback.textContent =
        'Your message could not be sent automatically. Please email us directly: ' +
        'tolbertinnovationhub@gmail.com or WhatsApp +231 880 559 227';
      feedback.style.cssText = 'color:#b8181d;background:#fef2f2;display:block;';
    }
  } finally {
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = origLabel; }
  }
}

document.querySelectorAll('form.form-card').forEach((form) => {
  form.addEventListener('submit', (e) => { e.preventDefault(); submitFormToEmail(form); });
});

// ============================================================
// Newsletter form handler, also forwards email to TIH inbox
// ============================================================
document.querySelectorAll('.newsletter-form, #newsletter-form').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn      = form.querySelector('button[type="submit"]');
    const input    = form.querySelector('input[type="email"]');
    const feedback = form.querySelector('.newsletter-feedback') || form.nextElementSibling;
    const email    = input?.value?.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (feedback) feedback.textContent = 'Please enter a valid email address.';
      return;
    }

    if (btn) { btn.disabled = true; btn.textContent = 'Subscribing…'; }

    try {
      await fetch('https://formsubmit.co/ajax/' + TIH_CONTACT_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'Newsletter Subscription, Tolbert Innovation Hub',
          _captcha: 'false'
        })
      });
    } catch (_) { /* silent, still show success to user */ }

    if (btn) { btn.textContent = '✓ Subscribed!'; }
    if (input) input.value = '';
    if (feedback) feedback.textContent = 'Thank you! You will receive updates from Tolbert Innovation Hub.';
  });
});

// ============================================================
// Dark mode
// ============================================================
function updateToggleIcon(btn, isDark) {
  btn.innerHTML = isDark ? '☀️' : '🌙';
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  btn.setAttribute('title', isDark ? 'Light mode' : 'Dark mode');
}

function initDarkMode() {
  const saved = localStorage.getItem('tih-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

  document.querySelectorAll('.dark-mode-toggle').forEach((btn) => {
    updateToggleIcon(btn, theme === 'dark');
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('tih-theme', 'light');
        document.querySelectorAll('.dark-mode-toggle').forEach((b) => updateToggleIcon(b, false));
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('tih-theme', 'dark');
        document.querySelectorAll('.dark-mode-toggle').forEach((b) => updateToggleIcon(b, true));
      }
    });
  });
}

// ============================================================
// Animated counters
// ============================================================
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1500;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = target * easeOut(progress);
      const display = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
      el.textContent = prefix + display + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((el) => observer.observe(el));
}

// ============================================================
// Scroll reveal
// ============================================================
function initReveal() {
  // Auto-tag common cards so every page gets scroll-reveal without markup edits.
  document.querySelectorAll(
    '.section .card:not(.reveal), .spotlight-card:not(.reveal), .news-card:not(.reveal), .program-card:not(.reveal), .stat-card:not(.reveal)'
  ).forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 3 === 1) el.classList.add('reveal-delay-1');
    if (i % 3 === 2) el.classList.add('reveal-delay-2');
  });
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((el) => observer.observe(el));
}

// ============================================================
// Render latest news
// ============================================================
function renderLatestUpdates() {
  const container = document.querySelector('[data-latest-news]');
  if (!container) return;

  const slides = newsPosts.map((post, i) => `
    <div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${newsPosts.length}">
      <article class="card news-card">
        <img class="news-card-image" src="${post.image}" alt="${post.imageAlt}" loading="lazy" />
        <p class="news-meta">${post.date}</p>
        <p class="news-category">${post.category}</p>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <a class="card-link" href="${post.href}">Read More</a>
      </article>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="swiper-wrapper">${slides}</div>
    <div class="swiper-pagination" role="tablist" aria-label="Select a news slide"></div>
    <button class="swiper-button-prev" aria-label="Previous news item"></button>
    <button class="swiper-button-next" aria-label="Next news item"></button>
  `;

  if (typeof Swiper !== 'undefined') {
    new Swiper(container, {
      loop: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: container.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: container.querySelector('.swiper-button-next'),
        prevEl: container.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      },
      a11y: {
        prevSlideMessage: 'Previous news item',
        nextSlideMessage: 'Next news item',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    });
  }
}

// ============================================================
// Footer featured news injection
// ============================================================
function injectFooterFeaturedNews() {
  const footer = document.querySelector('.site-footer');
  if (!footer || footer.querySelector('[data-featured-news-footer]')) return;
  const footerGrid = footer.querySelector('.footer-grid-main');
  if (footerGrid) {
    const card = document.createElement('div');
    card.setAttribute('data-featured-news-footer', 'true');
    card.innerHTML = '<h3 style="color:#fff;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.75rem;">Latest News</h3><p><a href="news" style="color:#90bfff">Read the latest updates from Tolbert Innovation Hub →</a></p>';
    footerGrid.appendChild(card);
  }
}

// ============================================================
// Header auto-hide + scroll class
// ============================================================
function wireAutoHideHeader() {
  const siteHeader = document.querySelector('.site-header');
  if (!siteHeader) return;
  let lastScrollY = window.scrollY;
  const threshold = 8;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    const delta = currentY - lastScrollY;
    const menuOpen = document.querySelector('.nav-wrap')?.classList.contains('nav-open');

    // Add/remove header-scrolled class
    if (currentY > 10) {
      siteHeader.classList.add('header-scrolled');
    } else {
      siteHeader.classList.remove('header-scrolled');
    }

    // Auto-hide logic
    if (currentY <= 40 || menuOpen) {
      siteHeader.classList.remove('header-hidden');
      lastScrollY = currentY;
      return;
    }

    if (delta > threshold) {
      siteHeader.classList.add('header-hidden');
    } else if (delta < -threshold) {
      siteHeader.classList.remove('header-hidden');
    }

    lastScrollY = currentY;
  }, { passive: true });
}

// ============================================================
// Nav setup
// ============================================================
function initNav() {
  const navWrap = document.querySelector('.nav-wrap');
  const navLinks = navWrap?.querySelector('.nav-links');
  if (!navWrap || !navLinks) return;

  if (!navLinks.id) navLinks.id = 'primary-navigation';

  // Add news link if missing
  if (!navLinks.querySelector('a[href="news"]')) {
    const newsLink = document.createElement('a');
    newsLink.href = 'news';
    newsLink.textContent = 'News';
    const homeLink = navLinks.querySelector('a[href="/"]');
    if (homeLink?.nextSibling) {
      homeLink.insertAdjacentElement('afterend', newsLink);
    } else {
      navLinks.append(newsLink);
    }
  }

  // Active state for news
  const isNewsPage = /^news([-.]|$)/i.test(window.location.pathname.split('/').pop() || '');
  if (isNewsPage) {
    navLinks.querySelectorAll('a').forEach((l) => {
      l.classList.remove('active');
      l.removeAttribute('aria-current');
    });
    const newsNav = navLinks.querySelector('a[href="news"]');
    if (newsNav) {
      newsNav.classList.add('active');
      newsNav.setAttribute('aria-current', 'page');
    }
  }

  // Brand logo injection
  const brand = navWrap.querySelector('.brand');
  if (brand && !brand.querySelector('.brand-logo')) {
    const brandText = brand.textContent.trim();
    brand.textContent = '';
    const logo = document.createElement('img');
    logo.className = 'brand-logo';
    logo.src = 'assets/tih-logo.png';
    logo.alt = 'Tolbert Innovation Hub logo';
    logo.width = 48;
    logo.height = 48;
    const text = document.createElement('span');
    text.className = 'brand-text';
    text.textContent = brandText || 'Tolbert Innovation Hub';
    brand.append(logo, text);
  }

  // Menu toggle button
  let menuButton = navWrap.querySelector('.menu-toggle');
  if (!menuButton) {
    menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.className = 'menu-toggle';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', navLinks.id);
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    menuButton.innerHTML = '<span aria-hidden="true">☰</span> Menu';
    if (brand) {
      brand.insertAdjacentElement('afterend', menuButton);
    } else {
      navWrap.prepend(menuButton);
    }
  }

  const closeMenu = () => {
    navWrap.classList.remove('nav-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.innerHTML = '<span aria-hidden="true">☰</span> Menu';
  };

  menuButton.addEventListener('click', () => {
    const shouldOpen = !navWrap.classList.contains('nav-open');
    navWrap.classList.toggle('nav-open', shouldOpen);
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
    menuButton.innerHTML = shouldOpen
      ? '<span aria-hidden="true">✕</span> Close'
      : '<span aria-hidden="true">☰</span> Menu';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 920) closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 920) closeMenu();
  });
}

// ============================================================
// Back-to-top button
// ============================================================
function initBackToTop() {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  btn.style.cssText = [
    'position:fixed', 'bottom:5.5rem', 'right:1.5rem', 'z-index:800',
    'width:44px', 'height:44px', 'border-radius:50%',
    'background:#002868', 'color:#fff', 'border:none',
    'font-size:1.25rem', 'font-weight:700', 'cursor:pointer',
    'box-shadow:0 4px 14px rgba(0,0,0,0.25)',
    'transition:opacity 0.25s,transform 0.25s,background 0.2s',
    'opacity:0', 'pointer-events:none', 'transform:translateY(8px)',
    'display:flex', 'align-items:center', 'justify-content:center',
  ].join(';');
  document.body.appendChild(btn);

  const toggle = () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
    btn.style.transform = show ? 'translateY(0)' : 'translateY(8px)';
  };
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  btn.addEventListener('mouseenter', () => { btn.style.background = '#E31E24'; });
  btn.addEventListener('mouseleave', () => { btn.style.background = '#002868'; });
}

// ============================================================
// Init
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Run each initializer in isolation so a failure in one does not
  // cascade and leave later features (news render, counters) stuck.
  const safe = (fn) => { try { fn(); } catch (e) { /* keep other inits running */ } };

  safe(initDarkMode);
  safe(initNav);
  safe(wireAutoHideHeader);
  safe(renderLatestUpdates);
  safe(injectFooterFeaturedNews);
  safe(initCounters);
  safe(initReveal);
  safe(initBackToTop);
  safe(initInnerHero);
  safe(initHeroNetwork);
  safe(initHeroParallax);
  safe(initWelcomeAudio);

  // Announcement bar close button
  const announcementClose = document.getElementById('announcement-close');
  if (announcementClose) {
    announcementClose.addEventListener('click', function() {
      const bar = document.getElementById('announcement-bar');
      if (bar) bar.style.display = 'none';
    });
  }

  safe(initCookieConsent);
});

// ============================================================
// Cookie Consent
// ============================================================
function initCookieConsent() {
  if (localStorage.getItem('tih_cookie_consent')) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML = `
    <div class="cookie-banner-text">
      <strong>🍪 We use cookies</strong> to improve your experience and analyze site traffic.
      By continuing to use this site, you agree to our
      <a href="privacy">Privacy Policy</a> and <a href="terms">Terms of Service</a>.
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn-reject" id="cookieReject">Decline</button>
      <button class="cookie-btn-accept" id="cookieAccept">Accept All</button>
    </div>
  `;
  document.body.appendChild(banner);

  // Trigger visible state after paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { banner.classList.add('visible'); });
  });

  function dismiss(accepted) {
    localStorage.setItem('tih_cookie_consent', accepted ? 'accepted' : 'declined');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  }

  document.getElementById('cookieAccept').addEventListener('click', () => dismiss(true));
  document.getElementById('cookieReject').addEventListener('click', () => dismiss(false));
}

// ============================================================
// Hero mouse parallax, elements with [data-depth] drift subtly
// toward the cursor. Skipped on touch devices & reduced motion.
// ============================================================
function initHeroParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Attach cursor parallax to the home hero AND every inner-page hero that
  // received the ambient FX layer (data-hero-fx).
  document.querySelectorAll('.hero-modern, [data-hero-fx]').forEach((hero) => {
    const layers = hero.querySelectorAll('[data-depth]');
    if (!layers.length) return;

    let mx = 0, my = 0, raf = null;
    const apply = () => {
      raf = null;
      layers.forEach((el) => {
        const d = parseFloat(el.dataset.depth) || 10;
        el.style.translate = `${mx * d}px ${my * d}px`;
      });
    };
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 0.9;
      my = ((e.clientY - r.top) / r.height - 0.5) * 0.9;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    hero.addEventListener('mouseleave', () => {
      mx = 0; my = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    });
  });
}

// ============================================================
// Hero particle network, a live "constellation" canvas that drifts
// behind the hero content: glowing brand-blue nodes joined by thin
// lines that form and break as the points move, plus a soft cursor
// spotlight. Attaches to every hero, sits at z-index 0 (content is
// lifted above it in CSS). Skipped for reduced-motion; pauses when the
// hero scrolls out of view so it never wastes CPU.
// ============================================================
function initHeroNetwork() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('requestAnimationFrame' in window)) return;

  document.querySelectorAll('.hero-modern, .page-hero, .hero:not(.hero-modern)').forEach((hero) => {
    if (hero.querySelector('canvas.hero-net')) return;      // idempotent
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-net';
    canvas.setAttribute('aria-hidden', 'true');
    hero.insertBefore(canvas, hero.firstChild);
    buildHeroNetwork(hero, canvas);
  });
}

function buildHeroNetwork(hero, canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Light heroes (hero-modern) get brand blue on a pale background; dark
  // heroes get a brighter, airier blue so the nodes read as "glowing".
  const light = hero.classList.contains('hero-modern');
  const rgb = light ? '21,101,216' : '150,195,255';
  const LINE_MAX = light ? 0.26 : 0.34;   // peak line opacity
  const NODE_A   = light ? 0.55 : 0.7;    // node core opacity
  const HALO_A   = light ? 0.10 : 0.16;   // node glow opacity

  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const LINK_DIST = 132;                   // max distance to draw a link (css px)

  let W = 0, H = 0, nodes = [], raf = null, running = false;
  const pointer = { x: -9999, y: -9999, on: false };

  function seed() {
    // Node count scales with hero area; capped for performance / touch.
    const area = W * H;
    let n = Math.round(area / 8000);
    n = Math.max(26, Math.min(n, isCoarse ? 60 : 150));
    nodes = [];
    for (let i = 0; i < n; i++) {
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
    const rect = hero.getBoundingClientRect();
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

    // Move + wrap-bounce nodes.
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20; else if (p.y > H + 20) p.y = -20;
    }

    // Links between nearby nodes.
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          const alpha = (1 - d / LINK_DIST) * LINE_MAX;
          ctx.strokeStyle = 'rgba(' + rgb + ',' + alpha.toFixed(3) + ')';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      // Cursor spotlight, brighter links from the pointer to nearby nodes.
      if (pointer.on) {
        const dx = a.x - pointer.x, dy = a.y - pointer.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const R = LINK_DIST * 1.35;
        if (d < R) {
          const alpha = (1 - d / R) * (LINE_MAX + 0.12);
          ctx.strokeStyle = 'rgba(' + rgb + ',' + alpha.toFixed(3) + ')';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }

    // Nodes: soft halo + solid core (the "bokeh" glow).
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];
      ctx.fillStyle = 'rgba(' + rgb + ',' + HALO_A + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(' + rgb + ',' + NODE_A + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(step);
  }

  function start() { if (!running) { running = true; raf = requestAnimationFrame(step); } }
  function stop() { running = false; if (raf) { cancelAnimationFrame(raf); raf = null; } }

  // Pointer spotlight (skipped on touch, no hover there).
  if (!isCoarse) {
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.on = true;
    });
    hero.addEventListener('mouseleave', () => { pointer.on = false; pointer.x = pointer.y = -9999; });
  }

  // Only animate while the hero is on screen.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      entries.forEach((en) => { en.isIntersecting ? start() : stop(); });
    }, { threshold: 0 }).observe(hero);
  } else {
    start();
  }

  // Keep the canvas matched to the hero's size.
  let rt = null;
  const onResize = () => { clearTimeout(rt); rt = setTimeout(resize, 150); };
  window.addEventListener('resize', onResize);
  if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(hero);

  resize();
  start();
}

// ============================================================
// Spoken welcome, greets a visitor with "Welcome to Tolbert
// Innovation Hub" using the browser's built-in speech synthesis.
// Browsers block audio until the user interacts, so we speak on the
// first tap/click/scroll/key, and only once per browsing session.
// ============================================================
// Recorded welcome greeting (professional voice-over). Loaded on demand so
// it costs no data until it actually plays.
var tihWelcomeEl = null;
function tihWelcomeAudioEl() {
  if (!tihWelcomeEl) {
    // A page may override the greeting by setting window.TIH_WELCOME_AUDIO
    // before the first interaction (e.g. the scholarship page).
    var src = window.TIH_WELCOME_AUDIO || 'welcome-message.mp3?v=1';
    tihWelcomeEl = new Audio(src);
    tihWelcomeEl.preload = 'none';
  }
  return tihWelcomeEl;
}
// Play the recorded greeting; fall back to speech synthesis if it can't play.
function tihSpeakWelcome() {
  try {
    const a = tihWelcomeAudioEl();
    a.currentTime = 0;
    const p = a.play();
    if (p && typeof p.catch === 'function') p.catch(() => tihSpeakWelcomeTTS());
    return;
  } catch (e) { /* fall through to TTS */ }
  tihSpeakWelcomeTTS();
}
// Stop whatever is currently greeting (recording or TTS).
function tihStopWelcome() {
  try { if (tihWelcomeEl) { tihWelcomeEl.pause(); tihWelcomeEl.currentTime = 0; } } catch (e) {}
  try { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch (e) {}
}
// Is the welcome greeting (recording or TTS) currently playing?
function tihWelcomeIsPlaying() {
  try { if (tihWelcomeEl && !tihWelcomeEl.paused && !tihWelcomeEl.ended && tihWelcomeEl.currentTime > 0) return true; } catch (e) {}
  try { if ('speechSynthesis' in window && window.speechSynthesis.speaking) return true; } catch (e) {}
  return false;
}
// Fallback voice if the recording is unavailable (older/unsupported browsers).
function tihPickVoice() {
  const voices = (window.speechSynthesis && window.speechSynthesis.getVoices()) || [];
  if (!voices.length) return null;
  return voices.find(v => /en[-_]?(US|GB)/i.test(v.lang) &&
           /google|samantha|zira|aria|jenny|natural|female/i.test(v.name))
      || voices.find(v => /^en/i.test(v.lang))
      || voices[0];
}
function tihSpeakWelcomeTTS() {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance('Welcome to Tolbert Innovation Hub, where innovators, entrepreneurs, and students connect with endless opportunities to learn, create, grow, and succeed.');
    u.lang = 'en-US'; u.rate = 0.95; u.pitch = 1; u.volume = 1;
    const v = tihPickVoice();
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  } catch (e) { /* ignore */ }
}
function tihWelcomeMuted() {
  try { return localStorage.getItem('tih_audio_muted') === '1'; } catch (e) { return false; }
}

function initWelcomeAudio() {
  buildAudioControl();                                        // replay/mute button, every page

  const KEY = 'tih_welcomed';
  let already = false;
  try { already = !!sessionStorage.getItem(KEY); } catch (e) { /* private mode */ }
  if (already) return;                                        // greet once per session

  // Real gestures only (tap/click/key) so the recording is allowed to play.
  const events = ['pointerdown', 'touchstart', 'keydown'];
  let done = false;
  const trigger = () => {
    if (done) return;
    done = true;
    try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
    events.forEach(ev => window.removeEventListener(ev, trigger));
    if (tihWelcomeMuted()) return;                            // visitor chose silence
    tihSpeakWelcome();
  };
  events.forEach(ev => window.addEventListener(ev, trigger, { once: false, passive: true }));
}

// Small floating control: a single button that plays the spoken welcome and
// stops it, one tap toggles between play and stop, and the icon follows the
// real playback state (recording or speech fallback).
function buildAudioControl() {
  if (document.querySelector('.tih-audio-ctl')) return;       // idempotent

  const PLAY = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  const STOP = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2.5"/></svg>';

  const wrap = document.createElement('div');
  wrap.className = 'tih-audio-ctl';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tih-audio-btn tih-audio-toggle';

  let playing = null;               // null forces the first paint below
  let lastStart = 0;
  const setState = (p) => {
    if (playing === p) return;
    playing = p;
    btn.innerHTML = p ? STOP : PLAY;
    btn.classList.toggle('is-playing', p);
    btn.title = p ? 'Stop welcome' : 'Play welcome';
    btn.setAttribute('aria-label', p ? 'Stop welcome greeting' : 'Play welcome greeting');
  };
  setState(false);                  // initial render: Play

  btn.addEventListener('click', () => {
    if (playing) {
      tihStopWelcome();
      setState(false);
    } else {
      try { localStorage.setItem('tih_audio_muted', '0'); } catch (e) {}
      lastStart = Date.now();
      setState(true);
      tihSpeakWelcome();
    }
  });

  // Media events drive the icon for the recording (and the auto-greeting):
  // show Stop while speaking, flip back to Play when it ends.
  const el = tihWelcomeAudioEl();
  ['play', 'playing'].forEach(ev => el.addEventListener(ev, () => { lastStart = Date.now(); setState(true); }));
  ['ended', 'pause'].forEach(ev => el.addEventListener(ev, () => setState(false)));
  // Safety net (mainly for the speech-synthesis fallback, which has no media
  // events): once nothing is playing, return to Play. A short grace after
  // starting avoids flipping back during buffering / speech spin-up.
  setInterval(() => {
    if (!playing) return;
    const idle    = !tihWelcomeIsPlaying() && Date.now() - lastStart > 1500;
    const tooLong = Date.now() - lastStart > 20000; // greeting is ~10s, hard ceiling
    if (idle || tooLong) setState(false);
  }, 500);

  wrap.appendChild(btn);
  document.body.appendChild(wrap);
}

// ============================================================
// Inner-page hero FX, inject floating orbs, sparks and a geometric
// watermark into every sub-page hero so it feels as alive as the
// Home and Learning Hub heroes. Purely decorative and idempotent;
// the hero's text/gradient/wave come from CSS and are never touched.
// ============================================================
function initInnerHero() {
  // The home hero (.hero-modern) already has its own richer FX, skip it.
  const heroes = document.querySelectorAll('.hero:not(.hero-modern), .page-hero');
  heroes.forEach((hero) => {
    if (hero.getAttribute('data-hero-fx')) return;        // already enhanced
    if (hero.querySelector('.hero-fx')) return;
    hero.setAttribute('data-hero-fx', '1');

    const fx = document.createElement('div');
    fx.className = 'hero-fx';
    fx.setAttribute('aria-hidden', 'true');
    fx.innerHTML =
      '<span class="hfx-pattern" data-depth="6"></span>' +
      '<span class="hfx-orb hfx-orb-1" data-depth="20"></span>' +
      '<span class="hfx-orb hfx-orb-2" data-depth="30"></span>' +
      '<span class="hfx-orb hfx-orb-3" data-depth="14"></span>' +
      '<span class="hfx-spark hfx-spark-1" data-depth="40">✦</span>' +
      '<span class="hfx-spark hfx-spark-2" data-depth="26">◇</span>' +
      '<span class="hfx-spark hfx-spark-3" data-depth="34">✦</span>';
    hero.insertBefore(fx, hero.firstChild);
  });
}
