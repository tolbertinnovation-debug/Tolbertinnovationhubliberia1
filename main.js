// ============================================================
// Tolbert Innovation Hub — main.js
// ============================================================

// News data
const newsPosts = [
  {
    title: '2026 Scholarship Intake Opens for Qualified Applicants',
    date: 'March 8, 2026',
    category: 'Scholarships',
    summary: 'Applications are now open with updated document requirements, guidance sessions, and admission support timelines.',
    href: 'news-scholarship-2026.html',
    image: 'https://i.ibb.co/JW664n2y/Chat-GPT-Image-Mar-8-2026-12-00-34-PM.png',
    imageAlt: 'Students celebrating scholarship opportunities'
  },
  {
    title: 'IELTS Mock Exam Certificate Request System Launched',
    date: 'March 8, 2026',
    category: 'Announcements',
    summary: 'Students who complete IELTS mock exams can now request certificate processing through the new dedicated certificate workflow.',
    href: 'news-ielts-certificate-system.html',
    image: 'https://i.ibb.co/5W4FhDnH/Chat-GPT-Image-Mar-8-2026-08-38-03-PM-1.png',
    imageAlt: 'IELTS classroom completion and certificate announcement'
  },
  {
    title: 'Healthcare Referral Program Expansion Update',
    date: 'March 8, 2026',
    category: 'Healthcare Programs',
    summary: 'Tolbert Innovation Hub has expanded healthcare referral support pathways for families seeking treatment coordination in India.',
    href: 'news-healthcare-referral-expansion.html',
    image: 'https://i.ibb.co/PZtxGS1X/Chat-GPT-Image-Mar-8-2026-01-03-34-PM.png',
    imageAlt: 'Healthcare support and treatment coordination update'
  },
  {
    title: 'Technology Innovation Support for Liberian Businesses',
    date: 'March 8, 2026',
    category: 'Technology Programs',
    summary: 'New technology consultation support helps businesses modernize operations with websites, platforms, and digital process tools.',
    href: 'news-technology-support-2026.html',
    image: 'https://i.ibb.co/wFnGC1NQ/Chat-GPT-Image-Mar-8-2026-12-25-09-PM.png',
    imageAlt: 'Technology innovation and software support update'
  }
];

// ============================================================
// Form submission handler — sends all form-card submissions to
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
  data['_subject']  = (heading || document.title) + ' — Tolbert Innovation Hub';
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
// Newsletter form handler — also forwards email to TIH inbox
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
          _subject: 'Newsletter Subscription — Tolbert Innovation Hub',
          _captcha: 'false'
        })
      });
    } catch (_) { /* silent — still show success to user */ }

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
    card.innerHTML = '<h3 style="color:#fff;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.75rem;">Latest News</h3><p><a href="news.html" style="color:#90bfff">Read the latest updates from Tolbert Innovation Hub →</a></p>';
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
  if (!navLinks.querySelector('a[href="news.html"]')) {
    const newsLink = document.createElement('a');
    newsLink.href = 'news.html';
    newsLink.textContent = 'News';
    const homeLink = navLinks.querySelector('a[href="index.html"]');
    if (homeLink?.nextSibling) {
      homeLink.insertAdjacentElement('afterend', newsLink);
    } else {
      navLinks.append(newsLink);
    }
  }

  // Active state for news
  const isNewsPage = /news(.*)?\.html$/i.test(window.location.pathname.split('/').pop() || '');
  if (isNewsPage) {
    navLinks.querySelectorAll('a').forEach((l) => {
      l.classList.remove('active');
      l.removeAttribute('aria-current');
    });
    const newsNav = navLinks.querySelector('a[href="news.html"]');
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
  safe(initHeroParallax);

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
      <a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms of Service</a>.
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
// Hero mouse parallax — elements with [data-depth] drift subtly
// toward the cursor. Skipped on touch devices & reduced motion.
// ============================================================
function initHeroParallax() {
  const hero = document.querySelector('.hero-modern');
  if (!hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const layers = hero.querySelectorAll('[data-depth]');
  if (!layers.length) return;

  let mx = 0, my = 0, raf = null;
  const apply = () => {
    raf = null;
    layers.forEach((el) => {
      const d = parseFloat(el.dataset.depth) || 10;
      const x = mx * d, y = my * d;
      // preserve the emblem's centering transform
      if (el.classList.contains('hm-emblem')) {
        el.style.translate = `${x}px ${y}px`;
      } else {
        el.style.translate = `${x}px ${y}px`;
      }
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
}
