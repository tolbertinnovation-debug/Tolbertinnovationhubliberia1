#!/usr/bin/env python3
"""Redesign all 18 IELTS module and learning pages with the same modern design as classroom-ielts.html."""
import os

WORKDIR = "/home/user/Tolbertinnovationhubliberia1"

# ── MODULE COLORS ────────────────────────────────────────────────────────────
MC = {
    "1":  ("#2563eb", "#1d4ed8", "#eff6ff"),
    "1a": ("#2563eb", "#1d4ed8", "#eff6ff"),
    "1b": ("#2563eb", "#1d4ed8", "#eff6ff"),
    "2":  ("#0891b2", "#0e7490", "#ecfeff"),
    "3":  ("#16a34a", "#15803d", "#f0fdf4"),
    "4":  ("#d97706", "#b45309", "#fffbeb"),
    "5":  ("#dc2626", "#b91c1c", "#fef2f2"),
    "6":  ("#7c3aed", "#6d28d9", "#f5f3ff"),
    "hub": ("#002868", "#001440", "#eff6ff"),
    "lesson": ("#0f172a", "#0f172a", "#f8fafc"),
    "cert": ("#002868", "#001440", "#eff6ff"),
}

def css(mc, mc_dark, mc_light):
    return f"""  <style>
    :root{{--mc:{mc};--mc-dark:{mc_dark};--mc-light:{mc_light};}}
    *,*::before,*::after{{box-sizing:border-box;}}
    body{{font-family:'Inter','Helvetica Neue',Arial,sans-serif;color:#0f172a;background:#f8fafc;line-height:1.65;margin:0;}}
    .skip-link{{position:absolute;left:-9999px;top:1rem;background:#002868;color:#fff;padding:.5rem 1rem;border-radius:4px;z-index:999;text-decoration:none;}}
    .skip-link:focus{{left:1rem;}}
    .container{{max-width:1200px;margin:0 auto;padding:0 1.25rem;}}
    /* ── NAV ── */
    .site-header{{background:#0f172a;border-bottom:1px solid rgba(255,255,255,.08);position:sticky;top:0;z-index:900;}}
    .nav-wrap{{display:flex;align-items:center;justify-content:space-between;padding:.85rem 1.25rem;gap:1rem;}}
    .brand{{display:flex;align-items:center;gap:.65rem;text-decoration:none;}}
    .brand img{{width:36px;height:36px;border-radius:8px;object-fit:cover;}}
    .brand span{{font-family:'Poppins',sans-serif;font-weight:700;font-size:1rem;color:#fff;white-space:nowrap;}}
    .nav-links{{display:flex;align-items:center;gap:.15rem;flex-wrap:wrap;}}
    .nav-links a{{color:rgba(255,255,255,.72);text-decoration:none;font-size:.84rem;font-weight:500;padding:.38rem .75rem;border-radius:8px;transition:all .18s;}}
    .nav-links a:hover,.nav-links a.active{{color:#fff;background:rgba(255,255,255,.1);}}
    /* ── HERO ── */
    .mod-hero{{background:linear-gradient(135deg,#001435 0%,{mc_dark} 50%,{mc} 100%);padding:clamp(3.5rem,7vw,6rem) 0 clamp(2.5rem,5vw,4.5rem);position:relative;overflow:hidden;color:#fff;}}
    .mod-hero::before{{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 80% 20%,rgba(255,255,255,.06) 0%,transparent 60%);pointer-events:none;}}
    .mod-hero::after{{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:60px 60px;pointer-events:none;}}
    .mod-hero-inner{{position:relative;z-index:2;}}
    .mod-eyebrow{{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);backdrop-filter:blur(8px);padding:.35rem 1rem;border-radius:100px;font-size:.74rem;font-weight:700;color:rgba(255,255,255,.9);letter-spacing:.07em;text-transform:uppercase;margin-bottom:1.3rem;}}
    .mod-hero h1{{font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(1.9rem,4.2vw,3.2rem);line-height:1.1;color:#fff;margin:0 0 .9rem;}}
    .mod-hero-lead{{font-size:clamp(.9rem,1.5vw,1.05rem);color:rgba(255,255,255,.78);max-width:60ch;margin-bottom:1.5rem;line-height:1.75;}}
    .mod-chips{{display:flex;flex-wrap:wrap;gap:.55rem;margin-bottom:1.5rem;}}
    .mod-chip{{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(8px);padding:.35rem .85rem;border-radius:10px;font-size:.76rem;font-weight:600;color:rgba(255,255,255,.88);}}
    .mod-hero-prog{{background:rgba(255,255,255,.2);border-radius:100px;height:6px;width:min(380px,100%);overflow:hidden;margin-top:1.2rem;}}
    .mod-hero-prog-fill{{height:100%;background:#fff;border-radius:100px;}}
    .mod-prog-label{{font-size:.76rem;color:rgba(255,255,255,.6);margin-top:.45rem;}}
    /* ── MAIN CONTENT ── */
    .mod-main{{padding:2.5rem 0 4rem;}}
    /* Override .card for module pages */
    .card,.u-mb-1.card{{background:#fff;border-radius:16px;padding:1.85rem 2rem;box-shadow:0 1px 3px rgba(0,0,0,.06),0 4px 12px rgba(0,0,0,.04);margin-bottom:1.5rem;border:1px solid #f1f5f9;}}
    .card h1.page-title{{font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(1.5rem,3vw,2.2rem);color:#0f172a;margin-bottom:.75rem;}}
    .card h2{{font-family:'Poppins',sans-serif;font-weight:800;color:#0f172a;font-size:1.35rem;margin:0 0 1.1rem;padding-bottom:.65rem;border-bottom:2px solid {mc};display:block;}}
    .card h3{{font-family:'Poppins',sans-serif;font-weight:700;color:{mc};font-size:1.05rem;margin:1.4rem 0 .5rem;}}
    .card h4{{font-family:'Poppins',sans-serif;font-weight:600;color:#1e293b;font-size:.95rem;margin:1rem 0 .4rem;}}
    .card p,.section-lead{{color:#334155;font-size:.97rem;line-height:1.8;margin-bottom:.9rem;}}
    .card strong{{color:#0f172a;font-weight:700;}}
    .card a{{color:{mc};text-decoration:none;font-weight:500;}}
    .card a:hover{{text-decoration:underline;}}
    /* ── RESOURCE LIST ── */
    .resource-list{{list-style:none;padding:0;margin:.5rem 0 1rem;}}
    .resource-list li{{padding:.38rem 0 .38rem 1.3rem;position:relative;color:#334155;font-size:.97rem;line-height:1.75;}}
    .resource-list li::before{{content:'•';position:absolute;left:0;color:{mc};font-weight:700;}}
    /* ── VIDEO ── */
    .video-wrap{{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;background:#f1f5f9;margin:.9rem 0 1.1rem;}}
    .video-wrap iframe{{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:12px;}}
    /* ── QUIZ ── */
    .quiz-item{{border:1px solid #e2e8f0;border-radius:12px;padding:1.1rem 1.4rem;margin-bottom:.9rem;background:#fdfdfd;}}
    .quiz-item legend{{font-weight:700;color:#1e293b;font-size:.92rem;line-height:1.4;padding:0 .35rem;}}
    .quiz-option{{margin-top:.65rem;}}
    .quiz-option label{{display:flex;align-items:center;gap:.7rem;border:1.5px solid #e2e8f0;border-radius:9px;padding:.6rem .9rem;cursor:pointer;transition:all .15s;font-size:.88rem;color:#475569;font-weight:500;}}
    .quiz-option label:hover{{border-color:{mc};background:{mc_light};color:#1e293b;}}
    .quiz-option input[type=radio]{{width:15px;height:15px;accent-color:{mc};flex-shrink:0;cursor:pointer;}}
    /* Module 2 quiz style (label wrapping input) */
    .form-stack fieldset.quiz-item>label{{display:flex;align-items:center;gap:.7rem;border:1.5px solid #e2e8f0;border-radius:9px;padding:.6rem .9rem;cursor:pointer;transition:all .15s;font-size:.88rem;color:#475569;font-weight:500;margin-top:.55rem;}}
    .form-stack fieldset.quiz-item>label:hover{{border-color:{mc};background:{mc_light};color:#1e293b;}}
    .form-stack fieldset.quiz-item>label input[type=radio]{{width:15px;height:15px;accent-color:{mc};flex-shrink:0;}}
    /* ── CHECKLIST ── */
    [data-module-checklist] label{{display:flex;align-items:center;gap:.65rem;border:1.5px solid #e2e8f0;border-radius:9px;padding:.6rem .9rem;cursor:pointer;margin-bottom:.45rem;font-size:.88rem;color:#475569;transition:all .15s;}}
    [data-module-checklist] label:hover{{border-color:{mc};background:{mc_light};}}
    [data-module-checklist] input[type=checkbox]{{width:15px;height:15px;accent-color:{mc};flex-shrink:0;}}
    /* ── PROGRESS ── */
    .progress-wrap{{margin:.65rem 0;}}
    .progress-bar{{background:#e2e8f0;border-radius:100px;height:8px;overflow:hidden;}}
    .progress-fill{{height:100%;background:linear-gradient(90deg,{mc_dark},{mc});border-radius:100px;transition:width .4s;}}
    .progress-label{{font-size:.78rem;color:#64748b;margin-top:.38rem;}}
    /* ── BUTTONS ── */
    .btn{{display:inline-flex;align-items:center;gap:.45rem;font-family:'Inter',sans-serif;font-weight:600;font-size:.88rem;padding:.68rem 1.5rem;border-radius:100px;text-decoration:none;cursor:pointer;border:none;transition:all .18s;line-height:1.3;}}
    .btn-primary{{background:{mc};color:#fff;}}
    .btn-primary:hover{{filter:brightness(1.12);transform:translateY(-1px);}}
    .btn-secondary{{background:#0f172a;color:#fff;}}
    .btn-secondary:hover{{background:#1e293b;transform:translateY(-1px);}}
    .btn-outline,.btn-outline-inline{{background:transparent;border:1.5px solid #e2e8f0;color:#64748b;padding:.65rem 1.4rem;border-radius:100px;font-size:.875rem;font-weight:600;text-decoration:none;transition:all .18s;display:inline-flex;align-items:center;cursor:pointer;}}
    .btn-outline:hover,.btn-outline-inline:hover{{border-color:{mc};color:{mc};background:{mc_light};}}
    .lesson-toolbar,.module-pagination{{display:flex;flex-wrap:wrap;gap:.65rem;align-items:center;margin:.75rem 0;}}
    .module-pagination{{padding:1.4rem 0;border-top:1px solid #e2e8f0;margin-top:.75rem;}}
    /* ── FEEDBACK / FORM ── */
    .form-feedback{{font-size:.86rem;font-weight:600;padding:.6rem .9rem;border-radius:8px;margin-top:.5rem;min-height:1.2em;}}
    .form-feedback:not(:empty){{background:#eff6ff;color:#1d4ed8;}}
    .form-stack{{display:flex;flex-direction:column;gap:.7rem;}}
    .form-stack>label:not(.quiz-item label){{display:flex;flex-direction:column;gap:.3rem;font-weight:600;color:#334155;font-size:.88rem;}}
    .form-stack input,.form-stack select,.form-stack textarea{{padding:.6rem .85rem;border:1.5px solid #e2e8f0;border-radius:8px;font-family:'Inter',sans-serif;font-size:.88rem;color:#0f172a;background:#fff;transition:border-color .15s;width:100%;}}
    .form-stack input:focus,.form-stack select:focus,.form-stack textarea:focus{{border-color:{mc};outline:none;box-shadow:0 0 0 3px {mc_light};}}
    /* ── DETAILS/ANSWER ── */
    details{{border:1px solid #e2e8f0;border-radius:10px;padding:.7rem .95rem;margin:.65rem 0;}}
    details summary{{font-weight:600;cursor:pointer;color:{mc};font-size:.9rem;}}
    details[open] summary{{margin-bottom:.55rem;}}
    .answer-key{{background:#f0fdf4;border-color:#86efac;}}
    .answer-key summary{{color:#16a34a;}}
    /* ── TABLE ── */
    table{{width:100%;border-collapse:collapse;margin:.8rem 0;font-size:.88rem;}}
    th,td{{border:1px solid #e2e8f0;padding:.55rem .8rem;text-align:left;}}
    th{{background:#f8fafc;font-weight:700;color:#1e293b;}}
    td{{color:#334155;}}
    /* ── GRID ── */
    .grid-2{{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.1rem;}}
    .do-dont-box{{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem;margin:.75rem 0;}}
    .question-type-grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:.9rem;margin-top:.65rem;}}
    .question-type-card{{background:#f8fafc;border:1px solid #e2e8f0;border-radius:11px;padding:1rem;}}
    .question-type-card h3{{font-size:.88rem;font-weight:700;margin-bottom:.35rem;color:#1e293b;}}
    .question-type-card p{{font-size:.82rem;color:#64748b;margin:0;}}
    .score-grid{{display:grid;grid-template-columns:1fr 1fr;gap:.55rem;margin-top:.65rem;}}
    .score-grid div{{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:.55rem .8rem;font-size:.86rem;color:#475569;}}
    /* ── BADGE ── */
    .badge{{display:inline-block;background:{mc_light};color:{mc};border:1px solid color-mix(in srgb,{mc} 30%,transparent);font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.22rem .7rem;border-radius:100px;margin-bottom:.75rem;}}
    /* ── CERT FORM ── */
    .cert-form{{display:grid;gap:1rem;margin-top:1rem;}}
    .cert-form-row{{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}}
    @media(max-width:600px){{.cert-form-row{{grid-template-columns:1fr;}}}}
    .cert-form label{{display:grid;gap:.3rem;font-weight:600;color:#334155;font-size:.88rem;}}
    .cert-form label.full{{grid-column:1/-1;}}
    .cert-form input,.cert-form select,.cert-form textarea{{padding:.6rem .85rem;border:1.5px solid #e2e8f0;border-radius:8px;font-size:.88rem;color:#0f172a;background:#fff;border-transition:border-color .15s;width:100%;font-family:'Inter',sans-serif;}}
    .cert-form input:focus,.cert-form select:focus,.cert-form textarea:focus{{border-color:{mc};outline:none;box-shadow:0 0 0 3px {mc_light};}}
    .cert-form-actions{{display:flex;gap:.75rem;align-items:center;flex-wrap:wrap;margin-top:.5rem;}}
    .cert-form-feedback{{font-size:.88rem;font-weight:600;padding:.7rem 1rem;border-radius:8px;display:none;}}
    .cert-form-feedback.success{{background:#e6f7f0;color:#0b7444;display:block;}}
    .cert-form-feedback.error{{background:#fde8ec;color:#9f2431;display:block;}}
    .resource-grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:1rem;margin-top:.75rem;}}
    .resource-card{{background:#f8fafc;border:1px solid #e2e8f0;border-radius:11px;padding:1rem;}}
    .resource-card h3{{font-size:.9rem;font-weight:700;color:#1e293b;margin-bottom:.35rem;}}
    .resource-card p{{font-size:.83rem;color:#64748b;margin:0;}}
    /* ── WHATSAPP FLOAT ── */
    .wa-float{{position:fixed;bottom:1.75rem;right:1.75rem;background:#25D366;color:#fff;border-radius:50%;width:52px;height:52px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(37,211,102,.45);z-index:800;transition:transform .2s;text-decoration:none;}}
    .wa-float:hover{{transform:scale(1.1);}}
    /* ── FOOTER ── */
    .site-footer{{background:#0f172a;color:rgba(255,255,255,.65);padding:2.5rem 0 1.5rem;margin-top:2rem;}}
    .footer-grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-bottom:1.5rem;}}
    .footer-grid p{{font-size:.84rem;margin-bottom:.28rem;}}
    .footer-grid a{{color:rgba(255,255,255,.6);text-decoration:none;transition:color .15s;}}
    .footer-grid a:hover{{color:#fff;}}
    .copyright-note{{font-size:.76rem;color:rgba(255,255,255,.32);text-align:center;margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.08);}}
    /* ── SKILL HUB CARDS ── */
    .skill-hub-grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.3rem;margin-top:1rem;}}
    .skill-hub-card{{background:#fff;border:1px solid #f1f5f9;border-radius:16px;padding:1.6rem;box-shadow:0 1px 3px rgba(0,0,0,.05),0 4px 12px rgba(0,0,0,.04);transition:transform .2s,box-shadow .2s;}}
    .skill-hub-card:hover{{transform:translateY(-4px);box-shadow:0 12px 35px rgba(0,40,104,.1);}}
    .skill-hub-card h3{{font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;color:#0f172a;margin-bottom:.5rem;}}
    .skill-hub-card p{{font-size:.86rem;color:#64748b;margin-bottom:1rem;line-height:1.65;}}
    /* ── AUDIO ── */
    .audio-playback{{width:100%;margin:.75rem 0;border-radius:8px;}}
    /* ── MISC ── */
    .u-mt-1{{margin-top:1rem;}}
    .u-mt-06{{margin-top:.6rem;}}
    .u-mt-075{{margin-top:.75rem;}}
    .u-mt-08{{margin-top:.8rem;}}
    .u-w-0{{width:0%;}}
    .u-w-16{{width:16%;}}
    .u-w-33{{width:33%;}}
    .u-w-50{{width:50%;}}
    .u-w-66{{width:66%;}}
    .u-w-75{{width:75%;}}
    .u-w-83{{width:83%;}}
    .u-w-100{{width:100%;}}
    .score-goal-card,.score-grid div{{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:.55rem .8rem;}}
    .timer-display{{font-family:'Poppins',sans-serif;font-size:2.5rem;font-weight:900;color:{mc};margin:.5rem 0;}}
    /* ── RESPONSIVE ── */
    @media(max-width:768px){{
      .nav-wrap{{flex-wrap:wrap;}}
      .card{{padding:1.4rem 1.1rem;}}
      .footer-grid{{grid-template-columns:1fr;}}
      .module-pagination,.lesson-toolbar{{flex-direction:column;align-items:flex-start;}}
      .do-dont-box{{grid-template-columns:1fr;}}
    }}
    /* ── DARK MODE ── */
    @media(prefers-color-scheme:dark){{
      body{{background:#0f172a;color:#e2e8f0;}}
      .card{{background:#1e293b;border-color:#334155;}}
      .card h1,.card h2,.card h3,.card h4{{color:#f1f5f9;}}
      .card p,.resource-list li{{color:#cbd5e1;}}
      .card strong{{color:#f1f5f9;font-weight:700;}}
      .card h3{{color:{mc};}}
      .quiz-item{{background:#1e293b;border-color:#334155;}}
      .quiz-item legend{{color:#f1f5f9;}}
      .quiz-option label,.form-stack fieldset.quiz-item>label{{border-color:#334155;color:#94a3b8;}}
      .quiz-option label:hover,.form-stack fieldset.quiz-item>label:hover{{background:rgba(37,99,235,.12);border-color:{mc};}}
      [data-module-checklist] label{{border-color:#334155;color:#94a3b8;}}
      th{{background:#1e293b;color:#e2e8f0;border-color:#334155;}}
      td{{color:#94a3b8;border-color:#334155;}}
      .question-type-card,.resource-card,.skill-hub-card,.score-grid div{{background:#1e293b;border-color:#334155;}}
      .question-type-card h3,.resource-card h3,.skill-hub-card h3{{color:#f1f5f9;}}
      .form-stack input,.form-stack select,.form-stack textarea,.cert-form input,.cert-form select,.cert-form textarea{{background:#1e293b;border-color:#334155;color:#e2e8f0;}}
      details{{border-color:#334155;}}
    }}
  </style>"""

def head(title, meta_desc, mc, mc_dark, mc_light, body_attrs=""):
    extra = f' {body_attrs}' if body_attrs else ''
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content="{meta_desc}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
{css(mc, mc_dark, mc_light)}
</head>
<body{extra}>
  <a class="skip-link" href="#main-content">Skip to main content</a>"""

NAV = """<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="classroom-ielts.html"><img src="https://i.ibb.co/SXJKRq0S/Tolbert-Innovation-Logo.jpg" alt="Tolbert logo"/><span>Tolbert Classroom</span></a>
    <nav class="nav-links" aria-label="Classroom navigation">
      <a href="classroom.html">Classroom</a>
      <a href="classroom-ielts.html">IELTS Path</a>
      <a href="classroom-dashboard.html">Dashboard</a>
      <a href="classroom-resource-center.html">Resources</a>
    </nav>
  </div>
</header>"""

WA = """<a class="wa-float" href="https://wa.me/231880559227" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>"""

TAIL = """<script src="classroom.js"></script>
<script src="chatbot.js"></script>
</body>
</html>"""

def hero(badge, title, lead, chips, prog_w="", prog_id="module-progress-fill", lbl_id="module-progress-label", lbl_text=""):
    prog = ""
    if prog_w:
        prog = f"""
      <div class="mod-hero-prog"><div class="mod-hero-prog-fill" id="{prog_id}" style="width:{prog_w}"></div></div>
      <p class="mod-prog-label" id="{lbl_id}">{lbl_text}</p>"""
    chips_html = "".join(f'<span class="mod-chip">{c}</span>' for c in chips)
    return f"""<section class="mod-hero">
  <div class="container">
    <div class="mod-hero-inner">
      <div class="mod-eyebrow">{badge}</div>
      <h1>{title}</h1>
      <p class="mod-hero-lead">{lead}</p>
      <div class="mod-chips">{chips_html}</div>{prog}
    </div>
  </div>
</section>"""

def footer(name, l1h, l1t, l2h, l2t):
    return f"""<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div><p><strong style="color:#fff;">{name}</strong></p></div>
      <div><p><a href="{l1h}">{l1t}</a></p></div>
      <div><p><a href="{l2h}">{l2t}</a></p></div>
    </div>
    <p class="copyright-note">© 2026 Tolbert Innovation Hub. All rights reserved.</p>
  </div>
</footer>"""

def write(fname, content):
    path = os.path.join(WORKDIR, fname)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  ✓ {fname}")

# ═══════════════════════════════════════════════════════════════════════════════
# MODULE 1: FOUNDATION
# ═══════════════════════════════════════════════════════════════════════════════
def gen_module1():
    mc, mcd, mcl = MC["1"]
    content = f"""{head("IELTS Module 1 — Foundation | Tolbert Classroom",
        "Build IELTS exam awareness, grammar essentials, and vocabulary habits.", mc, mcd, mcl,
        'data-ielts-module-page data-module-id="1" data-total-modules="6"')}
{NAV}
{hero("IELTS Module 1 of 6", "Module 1: Foundation",
    "Build exam awareness, grammar essentials, and vocabulary habits.",
    ["📖 Foundation", "⏱ 60–90 min", "📝 15 Quiz Questions", "🎯 Module 1/6"],
    "16%", "module-progress-fill", "module-progress-label", "Module 1 of 6")}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Module Objectives</h2>
      <ul class="resource-list"><li>Understand IELTS format and band scoring rules.</li><li>Apply core grammar rules to short examples.</li><li>Create a daily academic vocabulary routine.</li></ul>
    </article>
    <article class="card u-mb-1">
      <h2>Module 1 Quick Start</h2>
      <ul class="resource-list">
        <li><strong>Set your target:</strong> Confirm Academic or General Training and your target band (for example 6.5+).</li>
        <li><strong>Check your level:</strong> Complete one timed diagnostic before intensive practice.</li>
        <li><strong>Build fundamentals:</strong> Focus on grammar accuracy, topic vocabulary, and paraphrasing.</li>
        <li><strong>Follow daily consistency:</strong> Study all 4 skills in short, repeatable sessions.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Foundation Study Roadmap (7-Day Plan)</h2>
      <p>This module gives you a complete beginner foundation. Follow this plan in order and track your work daily.</p>
      <h3>Day 1: Understand the IELTS System</h3>
      <p>IELTS measures performance in four skills. Review timing, task types, and band descriptors before practice.</p>
      <ul class="resource-list">
        <li><strong>Listening</strong> (30 minutes)</li><li><strong>Reading</strong> (60 minutes)</li>
        <li><strong>Writing</strong> (60 minutes)</li><li><strong>Speaking</strong> (11–14 minutes)</li>
      </ul>
      <p>Confirm the format you need: IELTS Academic (university) or IELTS General Training (work/migration).</p>
      <h3>Day 2: Take a Diagnostic Test</h3>
      <p>Complete one timed test to identify your starting band and weak areas. Record your score and top three mistakes in each skill.</p>
      <h3>Day 3–4: Build Grammar and Vocabulary Core</h3>
      <p>Focus on sentence structure, verb tenses, articles, connectors, and topic-based academic vocabulary.</p>
      <ul class="resource-list">
        <li>Grammar drills: 30–40 minutes daily</li>
        <li>Vocabulary notebook: 20 new words per day with example sentences</li>
        <li>Paraphrasing practice: 10 sentences per day</li>
      </ul>
      <h3>Day 5–6: Apply Skills in Guided Practice</h3>
      <ul class="resource-list">
        <li>Listening: keyword spotting and spelling accuracy</li>
        <li>Reading: skimming, scanning, and synonym matching</li>
        <li>Writing: paragraph organization and clear task response</li>
        <li>Speaking: fluency practice with cue-card responses</li>
      </ul>
      <h3>Day 7: Review and Improve</h3>
      <p>Review all mistakes, identify patterns, and set your correction plan for Module 2.</p>
      <h3>Recommended Daily Study Split</h3>
      <ul class="resource-list">
        <li>30 minutes Listening</li><li>30 minutes Reading</li><li>30 minutes Writing</li>
        <li>20 minutes Speaking</li><li>10 minutes error log update</li>
      </ul>
      <h3>Common Beginner Mistakes to Avoid</h3>
      <ul class="resource-list">
        <li>Practicing without checking answers and understanding mistakes</li>
        <li>Memorizing complex vocabulary without correct usage</li>
        <li>Ignoring timing and leaving sections unfinished</li>
        <li>Focusing on one skill while neglecting others</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Video Lesson</h2>
      <p>Watch the playlist starter and recommended lessons for this module.</p>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/3gvJ_0qi_Tc?si=Boz_uSVM2g_XEko5" title="IELTS Foundation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <ul class="resource-list">
        <li><a href="classroom-video-lessons.html" target="_blank" rel="noopener noreferrer">Open full video lessons library</a></li>
        <li><a href="https://ieltsliz.com/" target="_blank" rel="noopener noreferrer">IELTS Liz video guidance</a></li>
        <li><a href="https://www.e2language.com/" target="_blank" rel="noopener noreferrer">E2 IELTS lesson recommendations</a></li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Practice</h2>
      <ul class="resource-list">
        <li>Complete 2 grammar worksheets (tenses + sentence structure).</li>
        <li>Create a 30-word academic vocabulary list with definitions and example sentences.</li>
        <li>Do one 15-minute diagnostic practice set under timed conditions.</li>
        <li>Write a short reflection: 3 strengths + 3 areas to improve this week.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Mini Quiz — Instant Feedback</h2>
      <form class="form-stack" data-ielts-quiz data-module-id="1">
        <fieldset class="quiz-item" data-explanation="IELTS has four tested skills: Listening, Reading, Writing, and Speaking.">
          <legend>1) IELTS has how many skill sections?</legend>
          <div class="quiz-option"><input id="m1q1a" type="radio" name="q1" data-correct="false"/><label for="m1q1a">2</label></div>
          <div class="quiz-option"><input id="m1q1b" type="radio" name="q1" data-correct="true"/><label for="m1q1b">4</label></div>
          <div class="quiz-option"><input id="m1q1c" type="radio" name="q1" data-correct="false"/><label for="m1q1c">6</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="IELTS uses band scores (0 to 9) rather than percentages.">
          <legend>2) What is the IELTS overall score type?</legend>
          <div class="quiz-option"><input id="m1q2a" type="radio" name="q2" data-correct="false"/><label for="m1q2a">Percent</label></div>
          <div class="quiz-option"><input id="m1q2b" type="radio" name="q2" data-correct="true"/><label for="m1q2b">Band score</label></div>
          <div class="quiz-option"><input id="m1q2c" type="radio" name="q2" data-correct="false"/><label for="m1q2c">GPA</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="A balanced daily plan with vocabulary, grammar, and revision builds strong fundamentals.">
          <legend>3) Best daily foundation routine?</legend>
          <div class="quiz-option"><input id="m1q3a" type="radio" name="q3" data-correct="true"/><label for="m1q3a">Vocabulary + grammar + review</label></div>
          <div class="quiz-option"><input id="m1q3b" type="radio" name="q3" data-correct="false"/><label for="m1q3b">Only mock tests</label></div>
          <div class="quiz-option"><input id="m1q3c" type="radio" name="q3" data-correct="false"/><label for="m1q3c">Skip review</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Core grammar includes tenses, articles, and sentence structure.">
          <legend>4) Which is a core grammar area to study?</legend>
          <div class="quiz-option"><input id="m1q4a" type="radio" name="q4" data-correct="true"/><label for="m1q4a">Tenses and sentence structure</label></div>
          <div class="quiz-option"><input id="m1q4b" type="radio" name="q4" data-correct="false"/><label for="m1q4b">Advanced calculus</label></div>
          <div class="quiz-option"><input id="m1q4c" type="radio" name="q4" data-correct="false"/><label for="m1q4c">Medical terms</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Topic-based vocabulary means learning words by theme (education, work, health).">
          <legend>5) Best way to learn vocabulary for IELTS?</legend>
          <div class="quiz-option"><input id="m1q5a" type="radio" name="q5" data-correct="true"/><label for="m1q5a">Learn by topic and use words in sentences</label></div>
          <div class="quiz-option"><input id="m1q5b" type="radio" name="q5" data-correct="false"/><label for="m1q5b">Memorize random long words</label></div>
          <div class="quiz-option"><input id="m1q5c" type="radio" name="q5" data-correct="false"/><label for="m1q5c">Only study slang</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Paraphrasing is essential for Reading and Listening when questions use synonyms.">
          <legend>6) Paraphrasing helps you to:</legend>
          <div class="quiz-option"><input id="m1q6a" type="radio" name="q6" data-correct="true"/><label for="m1q6a">Recognize answers with different wording</label></div>
          <div class="quiz-option"><input id="m1q6b" type="radio" name="q6" data-correct="false"/><label for="m1q6b">Avoid learning new words</label></div>
          <div class="quiz-option"><input id="m1q6c" type="radio" name="q6" data-correct="false"/><label for="m1q6c">Only useful for speaking</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Consistency means daily short practices rather than occasional long sessions.">
          <legend>7) Which practice habit gives steady improvement?</legend>
          <div class="quiz-option"><input id="m1q7a" type="radio" name="q7" data-correct="true"/><label for="m1q7a">Short daily practice sessions</label></div>
          <div class="quiz-option"><input id="m1q7b" type="radio" name="q7" data-correct="false"/><label for="m1q7b">One long session per month</label></div>
          <div class="quiz-option"><input id="m1q7c" type="radio" name="q7" data-correct="false"/><label for="m1q7c">No practice at all</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Reviewing mistakes is how you convert practice into lasting skill gains.">
          <legend>8) Most important after a practice test?</legend>
          <div class="quiz-option"><input id="m1q8a" type="radio" name="q8" data-correct="true"/><label for="m1q8a">Analyze mistakes and revise</label></div>
          <div class="quiz-option"><input id="m1q8b" type="radio" name="q8" data-correct="false"/><label for="m1q8b">Ignore wrong answers</label></div>
          <div class="quiz-option"><input id="m1q8c" type="radio" name="q8" data-correct="false"/><label for="m1q8c">Only celebrate the score</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="IELTS has Academic and General Training versions for different goals.">
          <legend>9) IELTS versions include:</legend>
          <div class="quiz-option"><input id="m1q9a" type="radio" name="q9" data-correct="true"/><label for="m1q9a">Academic and General Training</label></div>
          <div class="quiz-option"><input id="m1q9b" type="radio" name="q9" data-correct="false"/><label for="m1q9b">Computer and Oral only</label></div>
          <div class="quiz-option"><input id="m1q9c" type="radio" name="q9" data-correct="false"/><label for="m1q9c">Beginner and Advanced only</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="A diagnostic test helps identify weaknesses and set a practical plan.">
          <legend>10) Why take a diagnostic test early?</legend>
          <div class="quiz-option"><input id="m1q10a" type="radio" name="q10" data-correct="true"/><label for="m1q10a">To identify weak areas and current level</label></div>
          <div class="quiz-option"><input id="m1q10b" type="radio" name="q10" data-correct="false"/><label for="m1q10b">To skip all practice later</label></div>
          <div class="quiz-option"><input id="m1q10c" type="radio" name="q10" data-correct="false"/><label for="m1q10c">To avoid time management</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Listening, Reading, Writing, and Speaking all contribute to performance.">
          <legend>11) Which skill set should be trained?</legend>
          <div class="quiz-option"><input id="m1q11a" type="radio" name="q11" data-correct="true"/><label for="m1q11a">All four IELTS skills</label></div>
          <div class="quiz-option"><input id="m1q11b" type="radio" name="q11" data-correct="false"/><label for="m1q11b">Speaking only</label></div>
          <div class="quiz-option"><input id="m1q11c" type="radio" name="q11" data-correct="false"/><label for="m1q11c">Reading only</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Time management is essential because each section is strictly timed.">
          <legend>12) Time management is important because:</legend>
          <div class="quiz-option"><input id="m1q12a" type="radio" name="q12" data-correct="true"/><label for="m1q12a">IELTS sections are strictly timed</label></div>
          <div class="quiz-option"><input id="m1q12b" type="radio" name="q12" data-correct="false"/><label for="m1q12b">You can always replay audio</label></div>
          <div class="quiz-option"><input id="m1q12c" type="radio" name="q12" data-correct="false"/><label for="m1q12c">Questions are untimed</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Core grammar accuracy directly affects writing and speaking scores.">
          <legend>13) Grammar accuracy mainly helps:</legend>
          <div class="quiz-option"><input id="m1q13a" type="radio" name="q13" data-correct="true"/><label for="m1q13a">Writing and Speaking performance</label></div>
          <div class="quiz-option"><input id="m1q13b" type="radio" name="q13" data-correct="false"/><label for="m1q13b">Only test registration</label></div>
          <div class="quiz-option"><input id="m1q13c" type="radio" name="q13" data-correct="false"/><label for="m1q13c">Only passport verification</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="A study plan should be consistent and realistic rather than extreme.">
          <legend>14) Best preparation schedule is:</legend>
          <div class="quiz-option"><input id="m1q14a" type="radio" name="q14" data-correct="true"/><label for="m1q14a">Daily consistent sessions</label></div>
          <div class="quiz-option"><input id="m1q14b" type="radio" name="q14" data-correct="false"/><label for="m1q14b">One long session monthly</label></div>
          <div class="quiz-option"><input id="m1q14c" type="radio" name="q14" data-correct="false"/><label for="m1q14c">No schedule needed</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Strong foundations in vocabulary and grammar support all later modules.">
          <legend>15) Foundation study should prioritize:</legend>
          <div class="quiz-option"><input id="m1q15a" type="radio" name="q15" data-correct="true"/><label for="m1q15a">Grammar + vocabulary + review</label></div>
          <div class="quiz-option"><input id="m1q15b" type="radio" name="q15" data-correct="false"/><label for="m1q15b">Only random practice</label></div>
          <div class="quiz-option"><input id="m1q15c" type="radio" name="q15" data-correct="false"/><label for="m1q15c">Only memorized answers</label></div>
        </fieldset>
        <button class="btn btn-primary" type="submit">Check Answers</button>
      </form>
      <p class="form-feedback" data-quiz-feedback></p>
      <div class="quiz-explanations" data-quiz-explanations></div>
    </article>
    <article class="card u-mb-1">
      <h2>Assignment</h2>
      <p>Submit your 7-day foundation study plan with daily tasks, vocabulary goals, and review checkpoints before marking complete.</p>
      <div class="form-stack" data-module-checklist>
        <label><input type="checkbox" data-complete-item/> I finished the lesson notes.</label>
        <label><input type="checkbox" data-complete-item/> I completed practice work.</label>
        <label><input type="checkbox" data-complete-item/> I reviewed quiz feedback and revised errors.</label>
      </div>
      <div class="lesson-toolbar u-mt-1">
        <button class="btn btn-primary" type="button" data-mark-module-complete>Mark Complete</button>
      </div>
      <p class="form-feedback" data-module-feedback></p>
    </article>
    <div class="lesson-toolbar module-pagination">
      <a class="btn btn-secondary" href="classroom-ielts.html">← IELTS Overview</a>
      <a class="btn btn-outline-inline" href="classroom-ielts-module-computer-vs-paper.html">More: Computer vs Paper</a>
      <a class="btn btn-primary" href="classroom-ielts-module-2.html" data-next-module="2">Next Module →</a>
    </div>
  </div>
</main>
{WA}
{footer("IELTS Module 1 — Foundation", "classroom-ielts.html", "Back to IELTS Path", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-module-1.html", content)


# ── ADDITIONAL NAV VARIANTS ──────────────────────────────────────────────────
NAV_COURSE = """<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="classroom.html"><img src="https://i.ibb.co/SXJKRq0S/Tolbert-Innovation-Logo.jpg" alt="Tolbert logo"/><span>Tolbert Classroom</span></a>
    <nav class="nav-links" aria-label="Classroom navigation">
      <a href="index.html">Home</a>
      <a href="classroom.html">Classroom</a>
      <a href="classroom-dashboard.html">Dashboard</a>
      <a class="active" href="classroom-course-ielts.html">IELTS Course</a>
    </nav>
  </div>
</header>"""

NAV_SKILL = """<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="classroom.html"><img src="https://i.ibb.co/SXJKRq0S/Tolbert-Innovation-Logo.jpg" alt="Tolbert logo"/><span>Tolbert Classroom</span></a>
    <nav class="nav-links" aria-label="Classroom navigation">
      <a href="classroom.html">Classroom</a>
      <a href="classroom-dashboard.html">Dashboard</a>
      <a href="classroom-resource-center.html">Resource Center</a>
    </nav>
  </div>
</header>"""

NAV_SKILL_HOME = """<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="classroom.html"><img src="https://i.ibb.co/SXJKRq0S/Tolbert-Innovation-Logo.jpg" alt="Tolbert logo"/><span>Tolbert Classroom</span></a>
    <nav class="nav-links" aria-label="Classroom navigation">
      <a href="index.html">Home</a>
      <a href="classroom.html">Classroom</a>
      <a href="classroom-dashboard.html">Dashboard</a>
      <a href="classroom-resource-center.html">Resource Center</a>
    </nav>
  </div>
</header>"""

NAV_HUB = """<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="classroom.html"><img src="https://i.ibb.co/SXJKRq0S/Tolbert-Innovation-Logo.jpg" alt="Tolbert logo"/><span>Tolbert Classroom</span></a>
    <nav class="nav-links" aria-label="Classroom navigation">
      <a href="classroom.html">Classroom</a>
      <a href="classroom-dashboard.html">Dashboard</a>
      <a class="active" href="classroom-ielts-home.html">IELTS Home</a>
    </nav>
  </div>
</header>"""

LESSON_BODY_CSS = """<style>
  .skill-layout,.lesson-layout{display:grid;grid-template-columns:230px 1fr;gap:1.5rem;align-items:start;}
  @media(max-width:860px){.skill-layout,.lesson-layout{grid-template-columns:1fr;}}
  .lesson-sidebar-static{position:sticky;top:5.5rem;}
  .lesson-large{min-width:0;}
  .roadmap{padding-left:1.4rem;margin:.4rem 0;color:#475569;font-size:.88rem;line-height:2;}
  .download-list{list-style:none;padding:0;margin:.35rem 0;}
  .download-list li{padding:.3rem 0 .3rem 1.3rem;position:relative;color:#475569;font-size:.88rem;}
  .download-list li::before{content:"\2193";position:absolute;left:0;color:var(--mc);}
  .download-list a{color:var(--mc);text-decoration:none;font-weight:500;}
  @media(prefers-color-scheme:dark){.roadmap,.download-list li{color:#94a3b8;}}
</style>"""

CERT_FORM_CSS = """<style>
  .cert-form{display:grid;gap:1rem;margin-top:1rem;}
  .cert-form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}
  @media(max-width:600px){.cert-form-row{grid-template-columns:1fr;}}
  .cert-form label{display:grid;gap:.35rem;font-weight:600;color:#334155;}
  .cert-form label.full{grid-column:1/-1;}
  .cert-form-actions{display:flex;gap:.75rem;align-items:center;flex-wrap:wrap;margin-top:.5rem;}
  .cert-form-feedback{font-size:.9rem;font-weight:600;padding:.75rem 1rem;border-radius:8px;display:none;}
  .cert-form-feedback.success{background:#e6f7f0;color:#0b7444;display:block;}
  .cert-form-feedback.error{background:#fde8ec;color:#9f2431;display:block;}
</style>"""

CERT_JS = '''<script>
  document.getElementById('ielts-cert-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    var fb  = document.getElementById('ielts-cert-feedback');
    var btn = this.querySelector('button[type="submit"]');
    var required = this.querySelectorAll('[required]');
    var valid = true;
    required.forEach(function(el) { if (!el.value.trim()) valid = false; });
    if (!valid) {
      fb.className = 'cert-form-feedback error';
      fb.textContent = 'Please fill in all required fields before submitting.';
      return;
    }
    var origLabel = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    fb.className = ''; fb.textContent = '';
    var data = { _subject: 'IELTS Certificate Request — Tolbert Innovation Hub', _captcha: 'false', _template: 'table' };
    new FormData(this).forEach(function(v, k) { data[k] = v; });
    try {
      var res = await fetch('https://formsubmit.co/ajax/tolbertinnovationhub@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      var json = await res.json();
      if (json.success === true || json.success === 'true') {
        fb.className = 'cert-form-feedback success';
        fb.textContent = '✓ Your certificate request has been submitted! Our team will verify your payment and prepare your IELTS completion certificate within 24–48 hours.';
        this.querySelectorAll('input, select, textarea').forEach(function(el) { el.value = ''; });
      } else { throw new Error(); }
    } catch(_) {
      fb.className = 'cert-form-feedback error';
      fb.textContent = 'Could not send automatically. Please WhatsApp us: +231 880 559 227 or email tolbertinnovationhub@gmail.com';
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = origLabel; }
    }
  });
</script>'''

# ═══════════════════════════════════════════════════════════════════════════════
# MODULE 2: LISTENING
# ═══════════════════════════════════════════════════════════════════════════════
def gen_module2():
    mc, mcd, mcl = MC["2"]
    content = f"""{head("IELTS Module 2 — Listening | Tolbert Classroom",
        "Train listening strategies, answer transfer accuracy, and speed for IELTS.", mc, mcd, mcl,
        'data-ielts-module-page data-module-id="2" data-total-modules="6"')}
{NAV}
{hero("IELTS Module 2 of 6", "Module 2: Listening (Sections 1–4)",
    "Train listening strategies, answer transfer accuracy, and speed.",
    ["🎧 Listening", "⏱ 70–90 min", "📝 15 Quiz Questions", "🎯 Module 2/6"],
    "33%", "module-progress-fill", "module-progress-label", "Module 2 of 6")}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Module Objectives</h2>
      <ul class="resource-list"><li>Differentiate Section 1–4 task styles.</li><li>Use signpost words and note-taking symbols.</li><li>Avoid distractor answers in conversations and lectures.</li></ul>
    </article>
    <article class="card u-mb-1">
      <h2>Module 2 Quick Start</h2>
      <ul class="resource-list">
        <li><strong>Preview first:</strong> Scan the question set and underline keywords before audio starts.</li>
        <li><strong>Track signposts:</strong> Listen for transitions such as first, however, finally, and in contrast.</li>
        <li><strong>Control distractions:</strong> Expect speakers to change details and confirm final answers.</li>
        <li><strong>Review errors smartly:</strong> Record wrong answers by question type for targeted practice.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>IELTS Listening: Complete Guide</h2>
      <p>The IELTS Listening test lasts about 30 minutes and includes four recordings that get progressively more challenging. You will answer a total of 40 questions.</p>
      <h3>Section Structure</h3>
      <ul class="resource-list">
        <li><strong>Section 1:</strong> Everyday social conversation (e.g. booking arrangements) — factual details.</li>
        <li><strong>Section 2:</strong> Monologue in social context (e.g. local event speech).</li>
        <li><strong>Section 3:</strong> Educational or training conversation (e.g. student–tutor discussion).</li>
        <li><strong>Section 4:</strong> Academic monologue (e.g. lecture). Denser content, signpost tracking essential.</li>
      </ul>
      <h3>Scoring</h3>
      <p>Each correct answer earns one mark. Your raw score out of 40 converts to an IELTS band score. There is no penalty for wrong answers — always make an educated guess.</p>
      <h3>Key Tips</h3>
      <ul class="resource-list">
        <li>Scan questions before each recording to predict answers.</li>
        <li>Focus on dates, names, numbers, and places.</li>
        <li>Take quick notes — audio plays once only.</li>
        <li>If you miss an answer, keep going immediately.</li>
        <li>Check spelling — incorrect spelling can lower your score.</li>
      </ul>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/f-4FRJQtDWk?si=Qe8fHB5Fi6p2VWDp" title="IELTS Listening Guide" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </article>
    <article class="card u-mb-1">
      <h2>Video Lesson</h2>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/q8qmJeBxk4Q?si=-MDYEz417BD-dfIq" title="IELTS Module 2 Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <ul class="resource-list">
        <li><a href="classroom-video-lessons.html" target="_blank" rel="noopener noreferrer">Open full video lessons library</a></li>
        <li><a href="https://ieltsliz.com/" target="_blank" rel="noopener noreferrer">IELTS Liz listening strategy videos</a></li>
        <li><a href="https://www.e2language.com/" target="_blank" rel="noopener noreferrer">E2 IELTS listening recommendations</a></li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Practice</h2>
      <ul class="resource-list">
        <li>Complete 3 short recordings and write a one-line summary for each section.</li>
        <li>Run one 20-minute timed drill (mixed question types) with no replay.</li>
        <li>Create an error log: spelling errors, distractors, and missed signposts.</li>
        <li>Repeat 10 weak items and explain why the correct option is right.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Mini Quiz — Instant Feedback</h2>
      <form class="form-stack" data-ielts-quiz data-module-id="2">
        <fieldset class="quiz-item" data-explanation="Section 4 is an academic monologue, so information is denser and signpost tracking is essential.">
          <legend>1) Section 4 is usually...</legend>
          <label><input type="radio" name="q1" value="1" data-correct="false"/> Casual chat</label>
          <label><input type="radio" name="q1" value="2" data-correct="true"/> Academic monologue</label>
          <label><input type="radio" name="q1" value="3" data-correct="false"/> No audio</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="When uncertain, make your best guess and move on so you do not miss upcoming answers.">
          <legend>2) Best action when unsure?</legend>
          <label><input type="radio" name="q2" value="1" data-correct="true"/> Guess and move on</label>
          <label><input type="radio" name="q2" value="2" data-correct="false"/> Leave blank forever</label>
          <label><input type="radio" name="q2" value="3" data-correct="false"/> Replay audio</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Idea-level notes keep you aligned with the lecture structure and reduce memory overload.">
          <legend>3) Key listening skill?</legend>
          <label><input type="radio" name="q3" value="1" data-correct="false"/> Word-for-word transcription</label>
          <label><input type="radio" name="q3" value="2" data-correct="true"/> Idea-level note-taking</label>
          <label><input type="radio" name="q3" value="3" data-correct="false"/> Ignoring signposts</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Scanning the questions first helps you to predict answers and spot keywords.">
          <legend>4) Before a recording starts, you should:</legend>
          <label><input type="radio" name="q4" value="1" data-correct="true"/> Quickly scan the questions</label>
          <label><input type="radio" name="q4" value="2" data-correct="false"/> Close your eyes and wait</label>
          <label><input type="radio" name="q4" value="3" data-correct="false"/> Start writing full sentences</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Keywords like numbers, names, and places are often directly tested.">
          <legend>5) Focus on which details?</legend>
          <label><input type="radio" name="q5" value="1" data-correct="true"/> Dates, names, numbers, and places</label>
          <label><input type="radio" name="q5" value="2" data-correct="false"/> Only adjectives</label>
          <label><input type="radio" name="q5" value="3" data-correct="false"/> Background music</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="If you miss an answer, avoid freezing — continue to capture upcoming answers.">
          <legend>6) If you miss an answer you should:</legend>
          <label><input type="radio" name="q6" value="1" data-correct="true"/> Keep listening and move on</label>
          <label><input type="radio" name="q6" value="2" data-correct="false"/> Stop others from proceeding</label>
          <label><input type="radio" name="q6" value="3" data-correct="false"/> Replay the recording</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Spelling and word form count — incorrect spellings can drop marks.">
          <legend>7) Spelling matters because:</legend>
          <label><input type="radio" name="q7" value="1" data-correct="true"/> Incorrect spelling can lose marks</label>
          <label><input type="radio" name="q7" value="2" data-correct="false"/> It is irrelevant</label>
          <label><input type="radio" name="q7" value="3" data-correct="false"/> Only grammar matters</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Practice with varied audio sources builds robust listening skills.">
          <legend>8) Best long-term listening practice?</legend>
          <label><input type="radio" name="q8" value="1" data-correct="true"/> Listening to lectures, podcasts, and conversations</label>
          <label><input type="radio" name="q8" value="2" data-correct="false"/> Listening to one short clip only</label>
          <label><input type="radio" name="q8" value="3" data-correct="false"/> Only reading transcripts</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Signpost words (first, however, finally) show structure and help predict answers.">
          <legend>9) Signpost words help you:</legend>
          <label><input type="radio" name="q9" value="1" data-correct="true"/> Follow structure and transitions</label>
          <label><input type="radio" name="q9" value="2" data-correct="false"/> Ignore meaning</label>
          <label><input type="radio" name="q9" value="3" data-correct="false"/> Skip note-taking</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Distractors are common; the speaker may correct or change details after first mention.">
          <legend>10) A common distractor is:</legend>
          <label><input type="radio" name="q10" value="1" data-correct="true"/> A changed answer after initial mention</label>
          <label><input type="radio" name="q10" value="2" data-correct="false"/> Clear repeated final answer only</label>
          <label><input type="radio" name="q10" value="3" data-correct="false"/> No audio variation</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Listening tasks test both gist and specific detail comprehension.">
          <legend>11) IELTS Listening checks ability to:</legend>
          <label><input type="radio" name="q11" value="1" data-correct="true"/> Understand main ideas and details</label>
          <label><input type="radio" name="q11" value="2" data-correct="false"/> Translate every sentence</label>
          <label><input type="radio" name="q11" value="3" data-correct="false"/> Memorize scripts perfectly</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Map and diagram tasks require spatial attention and keyword tracking.">
          <legend>12) For map-label questions, you should:</legend>
          <label><input type="radio" name="q12" value="1" data-correct="true"/> Track direction words and landmarks</label>
          <label><input type="radio" name="q12" value="2" data-correct="false"/> Ignore location vocabulary</label>
          <label><input type="radio" name="q12" value="3" data-correct="false"/> Wait for exact sentence repeats</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="In Section 1, practical details like names, addresses, and numbers are frequently tested.">
          <legend>13) Section 1 usually focuses on:</legend>
          <label><input type="radio" name="q13" value="1" data-correct="true"/> Everyday factual information</label>
          <label><input type="radio" name="q13" value="2" data-correct="false"/> Advanced academic theory only</label>
          <label><input type="radio" name="q13" value="3" data-correct="false"/> Silent reading passages</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Answer limits matter: if it says one word, writing two words is wrong.">
          <legend>14) Why read instructions carefully?</legend>
          <label><input type="radio" name="q14" value="1" data-correct="true"/> To follow word-limit rules</label>
          <label><input type="radio" name="q14" value="2" data-correct="false"/> They are optional in IELTS</label>
          <label><input type="radio" name="q14" value="3" data-correct="false"/> Limits only apply to writing</label>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Post-test review identifies repeated errors and strengthens future performance.">
          <legend>15) After each listening practice, best next step is:</legend>
          <label><input type="radio" name="q15" value="1" data-correct="true"/> Review errors and note patterns</label>
          <label><input type="radio" name="q15" value="2" data-correct="false"/> Ignore incorrect responses</label>
          <label><input type="radio" name="q15" value="3" data-correct="false"/> Start new test without reflection</label>
        </fieldset>
        <button class="btn btn-primary" type="submit">Check Answers</button>
      </form>
      <p class="form-feedback" data-quiz-feedback></p>
      <div class="quiz-explanations" data-quiz-explanations></div>
    </article>
    <article class="card u-mb-1">
      <h2>Assignment</h2>
      <div class="form-stack" data-module-checklist>
        <label><input type="checkbox" data-complete-item/> I finished the lesson notes.</label>
        <label><input type="checkbox" data-complete-item/> I completed practice work.</label>
        <label><input type="checkbox" data-complete-item/> I reviewed quiz feedback and revised errors.</label>
      </div>
      <div class="lesson-toolbar u-mt-1">
        <button class="btn btn-primary" type="button" data-mark-module-complete>Mark Complete</button>
      </div>
      <p class="form-feedback" data-module-feedback></p>
    </article>
    <div class="lesson-toolbar module-pagination">
      <a class="btn btn-secondary" href="classroom-ielts-module-1.html">← Module 1</a>
      <a class="btn btn-primary" href="classroom-ielts-module-3.html" data-next-module="3">Next Module →</a>
    </div>
  </div>
</main>
{WA}
{footer("IELTS Module 2 — Listening", "classroom-ielts.html", "Back to IELTS Path", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-module-2.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# MODULE 3: READING
# ═══════════════════════════════════════════════════════════════════════════════
def gen_module3():
    mc, mcd, mcl = MC["3"]
    content = f"""{head("IELTS Module 3 — Reading | Tolbert Classroom",
        "Passage strategy, question types, and time management for IELTS Reading.", mc, mcd, mcl,
        'data-ielts-module-page data-module-id="3" data-total-modules="6"')}
{NAV}
{hero("IELTS Module 3 of 6", "Module 3: Reading",
    "Passage Strategy • Question Types • Time Management",
    ["📖 Reading", "⏱ 90–120 min", "📝 15 Quiz Questions", "🎯 Module 3/6"],
    "50%", "module-progress-fill", "module-progress-label", "Module 3 of 6")}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Objectives</h2>
      <ul class="resource-list">
        <li>Understand IELTS Reading structure: 3 passages, 40 questions, 60 minutes.</li>
        <li>Apply skimming and scanning to find ideas and evidence quickly.</li>
        <li>Use keyword mapping and paraphrase recognition to match questions accurately.</li>
        <li>Handle key question types with a repeatable strategy.</li>
        <li>Avoid common timing and accuracy mistakes that reduce band score.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Module 3 Quick Start</h2>
      <ul class="resource-list">
        <li><strong>Set timing blocks:</strong> Use a 20-minute cap per passage to protect overall score.</li>
        <li><strong>Read by meaning:</strong> Match ideas and paraphrases, not only exact words.</li>
        <li><strong>Prioritize evidence:</strong> Underline the line that proves each answer.</li>
        <li><strong>Analyze patterns:</strong> Log repeated errors (TFNG, headings, completion, MCQ).</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Reading Accuracy Framework</h2>
      <p>IELTS Reading gives you 60 minutes for all 3 passages and 40 questions. A smart approach is to skim each passage first for topic flow, then scan for evidence when answering each question. Most wrong answers happen because students match exact words instead of matching meaning (paraphrase).</p>
      <h3>Step 1: Skim for Structure (2–3 min)</h3>
      <ul class="resource-list"><li>Read the title and first sentence of each paragraph.</li><li>Mark paragraph purpose (definition, example, contrast, result).</li></ul>
      <h3>Step 2: Map Keywords and Paraphrases</h3>
      <ul class="resource-list"><li>Underline names, dates, quantities, and technical terms in questions.</li><li>Search by meaning, not by exact repeated words.</li></ul>
      <h3>Step 3: Choose by Evidence</h3>
      <ul class="resource-list"><li>Confirm the exact line that supports each answer.</li><li>For TFNG: False = contradicted; Not Given = absent from text.</li></ul>
      <h3>Step 4: Time Management</h3>
      <ul class="resource-list"><li>Target ~20 minutes per passage.</li><li>If a question stalls you &gt;90 seconds, mark and move on.</li></ul>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/apOCnYpR-9g?si=utgS-X0Rzi-7wIYy" title="IELTS Reading Strategy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <ul class="resource-list">
        <li><a href="https://ieltsliz.com/" target="_blank" rel="noopener noreferrer">IELTS Liz reading strategy videos</a></li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Practice Exercise</h2>
      <p><strong>Short Passage:</strong> Urban planners increasingly design "15-minute cities," where residents can access schools, shops, clinics, and green spaces within a short walk or bicycle ride. Supporters argue this reduces traffic and improves public health. Critics warn that implementation can be uneven if housing costs rise near upgraded neighborhoods.</p>
      <ol class="resource-list">
        <li>Multiple Choice: What is the main goal of a 15-minute city?</li>
        <li>True/False/Not Given: All residents currently live within a 15-minute walk of essential services.</li>
        <li>Sentence Completion: Supporters say the model can reduce ______ and improve health.</li>
      </ol>
      <details class="answer-key">
        <summary>Show Practice Answer Key</summary>
        <ul class="resource-list">
          <li><strong>Q1:</strong> Improve access to essential services nearby.</li>
          <li><strong>Q2:</strong> Not Given — passage describes the concept, not current universal reality.</li>
          <li><strong>Q3:</strong> traffic.</li>
        </ul>
      </details>
    </article>
    <article class="card u-mb-1">
      <h2>Interactive Quiz</h2>
      <form class="form-stack" data-ielts-quiz data-module-id="3">
        <fieldset class="quiz-item" data-explanation="IELTS Reading has 3 passages and 40 questions in 60 minutes.">
          <legend>1) IELTS Reading duration is:</legend>
          <div class="quiz-option"><input id="m3q1a" type="radio" name="q1" data-correct="false"/><label for="m3q1a">30 minutes</label></div>
          <div class="quiz-option"><input id="m3q1b" type="radio" name="q1" data-correct="true"/><label for="m3q1b">60 minutes</label></div>
          <div class="quiz-option"><input id="m3q1c" type="radio" name="q1" data-correct="false"/><label for="m3q1c">75 minutes</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Skimming helps identify structure and main idea quickly before deep search.">
          <legend>2) Best first action on a new passage:</legend>
          <div class="quiz-option"><input id="m3q2a" type="radio" name="q2" data-correct="true"/><label for="m3q2a">Skim for structure</label></div>
          <div class="quiz-option"><input id="m3q2b" type="radio" name="q2" data-correct="false"/><label for="m3q2b">Translate every sentence</label></div>
          <div class="quiz-option"><input id="m3q2c" type="radio" name="q2" data-correct="false"/><label for="m3q2c">Skip to last paragraph</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Scan uses target words/synonyms to locate evidence fast.">
          <legend>3) Scanning is mainly used to:</legend>
          <div class="quiz-option"><input id="m3q3a" type="radio" name="q3" data-correct="false"/><label for="m3q3a">Memorize full passage</label></div>
          <div class="quiz-option"><input id="m3q3b" type="radio" name="q3" data-correct="true"/><label for="m3q3b">Locate specific information quickly</label></div>
          <div class="quiz-option"><input id="m3q3c" type="radio" name="q3" data-correct="false"/><label for="m3q3c">Improve handwriting</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Not Given means the text does not provide enough evidence to confirm or deny.">
          <legend>4) In True/False/Not Given, "Not Given" means:</legend>
          <div class="quiz-option"><input id="m3q4a" type="radio" name="q4" data-correct="false"/><label for="m3q4a">The statement is definitely false</label></div>
          <div class="quiz-option"><input id="m3q4b" type="radio" name="q4" data-correct="true"/><label for="m3q4b">The text does not clearly say</label></div>
          <div class="quiz-option"><input id="m3q4c" type="radio" name="q4" data-correct="false"/><label for="m3q4c">The question is wrong</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="IELTS often paraphrases question language; matching exact words alone is risky.">
          <legend>5) Why is paraphrase awareness important?</legend>
          <div class="quiz-option"><input id="m3q5a" type="radio" name="q5" data-correct="true"/><label for="m3q5a">Ideas are often reworded in the passage</label></div>
          <div class="quiz-option"><input id="m3q5b" type="radio" name="q5" data-correct="false"/><label for="m3q5b">There are no synonyms in IELTS</label></div>
          <div class="quiz-option"><input id="m3q5c" type="radio" name="q5" data-correct="false"/><label for="m3q5c">It only matters in listening</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Matching Headings checks whether you can identify main ideas, not detail lists.">
          <legend>6) Matching Headings focuses on:</legend>
          <div class="quiz-option"><input id="m3q6a" type="radio" name="q6" data-correct="false"/><label for="m3q6a">Number details</label></div>
          <div class="quiz-option"><input id="m3q6b" type="radio" name="q6" data-correct="true"/><label for="m3q6b">Main idea of paragraph</label></div>
          <div class="quiz-option"><input id="m3q6c" type="radio" name="q6" data-correct="false"/><label for="m3q6c">Grammar only</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Strong time control means move on when stuck and return if time remains.">
          <legend>7) If one question takes too long, you should:</legend>
          <div class="quiz-option"><input id="m3q7a" type="radio" name="q7" data-correct="true"/><label for="m3q7a">Move on and return later</label></div>
          <div class="quiz-option"><input id="m3q7b" type="radio" name="q7" data-correct="false"/><label for="m3q7b">Spend all remaining time on it</label></div>
          <div class="quiz-option"><input id="m3q7c" type="radio" name="q7" data-correct="false"/><label for="m3q7c">Leave the test</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Completion items require careful grammar and word-form accuracy.">
          <legend>8) Sentence completion errors often happen because of:</legend>
          <div class="quiz-option"><input id="m3q8a" type="radio" name="q8" data-correct="false"/><label for="m3q8a">Too much skimming</label></div>
          <div class="quiz-option"><input id="m3q8b" type="radio" name="q8" data-correct="true"/><label for="m3q8b">Wrong word form/grammar</label></div>
          <div class="quiz-option"><input id="m3q8c" type="radio" name="q8" data-correct="false"/><label for="m3q8c">Fast reading speed</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="The order of information in reading may differ from question sequence in some task types.">
          <legend>9) Question order in reading always matches paragraph order:</legend>
          <div class="quiz-option"><input id="m3q9a" type="radio" name="q9" data-correct="false"/><label for="m3q9a">Always true</label></div>
          <div class="quiz-option"><input id="m3q9b" type="radio" name="q9" data-correct="true"/><label for="m3q9b">Not always, depends on task type</label></div>
          <div class="quiz-option"><input id="m3q9c" type="radio" name="q9" data-correct="false"/><label for="m3q9c">Only true in listening</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Headings should match overall paragraph purpose, not isolated details.">
          <legend>10) For Matching Headings, choose based on:</legend>
          <div class="quiz-option"><input id="m3q10a" type="radio" name="q10" data-correct="true"/><label for="m3q10a">Main idea of the whole paragraph</label></div>
          <div class="quiz-option"><input id="m3q10b" type="radio" name="q10" data-correct="false"/><label for="m3q10b">Single number in one sentence</label></div>
          <div class="quiz-option"><input id="m3q10c" type="radio" name="q10" data-correct="false"/><label for="m3q10c">Longest heading available</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Keywords in questions often appear as synonyms in passages.">
          <legend>11) When scanning for evidence, also look for:</legend>
          <div class="quiz-option"><input id="m3q11a" type="radio" name="q11" data-correct="true"/><label for="m3q11a">Synonyms and paraphrases</label></div>
          <div class="quiz-option"><input id="m3q11b" type="radio" name="q11" data-correct="false"/><label for="m3q11b">Only exact repeated words</label></div>
          <div class="quiz-option"><input id="m3q11c" type="radio" name="q11" data-correct="false"/><label for="m3q11c">Only punctuation marks</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Time allocation avoids rushing the final passage, which is often hardest.">
          <legend>12) Good reading time strategy is to:</legend>
          <div class="quiz-option"><input id="m3q12a" type="radio" name="q12" data-correct="true"/><label for="m3q12a">Set section time targets and move on</label></div>
          <div class="quiz-option"><input id="m3q12b" type="radio" name="q12" data-correct="false"/><label for="m3q12b">Spend 45 minutes on first passage</label></div>
          <div class="quiz-option"><input id="m3q12c" type="radio" name="q12" data-correct="false"/><label for="m3q12c">Ignore the clock completely</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="In IELTS reading, answers must follow exact word-limit instructions.">
          <legend>13) If instruction says "NO MORE THAN TWO WORDS", you should:</legend>
          <div class="quiz-option"><input id="m3q13a" type="radio" name="q13" data-correct="true"/><label for="m3q13a">Write one or two words only</label></div>
          <div class="quiz-option"><input id="m3q13b" type="radio" name="q13" data-correct="false"/><label for="m3q13b">Write any number of words</label></div>
          <div class="quiz-option"><input id="m3q13c" type="radio" name="q13" data-correct="false"/><label for="m3q13c">Write full sentence answers</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Eliminating clearly wrong options improves accuracy in difficult MCQs.">
          <legend>14) A smart MCQ method is to:</legend>
          <div class="quiz-option"><input id="m3q14a" type="radio" name="q14" data-correct="true"/><label for="m3q14a">Eliminate wrong choices first</label></div>
          <div class="quiz-option"><input id="m3q14b" type="radio" name="q14" data-correct="false"/><label for="m3q14b">Pick fastest option without reading</label></div>
          <div class="quiz-option"><input id="m3q14c" type="radio" name="q14" data-correct="false"/><label for="m3q14c">Choose the longest option always</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Post-practice analysis helps convert mistakes into targeted improvement tasks.">
          <legend>15) Best post-test reading habit is:</legend>
          <div class="quiz-option"><input id="m3q15a" type="radio" name="q15" data-correct="true"/><label for="m3q15a">Review wrong answers and locate evidence</label></div>
          <div class="quiz-option"><input id="m3q15b" type="radio" name="q15" data-correct="false"/><label for="m3q15b">Only check total score</label></div>
          <div class="quiz-option"><input id="m3q15c" type="radio" name="q15" data-correct="false"/><label for="m3q15c">Skip error analysis</label></div>
        </fieldset>
        <button class="btn btn-primary" type="button" id="checkAnswers">Check Answers</button>
      </form>
      <div id="quizResult" class="form-feedback u-mt-06"></div>
      <p class="form-feedback" data-quiz-feedback></p>
      <div class="quiz-explanations" data-quiz-explanations></div>
    </article>
    <article class="card u-mb-1">
      <h2>Assignment</h2>
      <div class="form-stack" data-module-checklist>
        <label><input type="checkbox" data-complete-item/> I finished the lesson notes.</label>
        <label><input type="checkbox" data-complete-item/> I completed practice work.</label>
        <label><input type="checkbox" data-complete-item/> I reviewed quiz feedback and revised errors.</label>
      </div>
      <div class="lesson-toolbar u-mt-1">
        <button class="btn btn-primary" type="button" data-mark-module-complete>Mark Complete</button>
      </div>
      <p class="form-feedback" data-module-feedback></p>
    </article>
    <div class="lesson-toolbar module-pagination">
      <a class="btn btn-secondary" href="classroom-ielts-module-2.html">← Module 2</a>
      <a class="btn btn-primary" href="classroom-ielts-module-4.html" data-next-module="4">Next Module →</a>
    </div>
  </div>
</main>
{WA}
{footer("IELTS Module 3 — Reading", "classroom-ielts.html", "Back to IELTS Path", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-module-3.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# MODULE 4: WRITING
# ═══════════════════════════════════════════════════════════════════════════════
def gen_module4():
    mc, mcd, mcl = MC["4"]
    content = f"""{head("IELTS Module 4 — Writing | Tolbert Classroom",
        "Master task response, organization, and language range for IELTS Writing.", mc, mcd, mcl,
        'data-ielts-module-page data-module-id="4" data-total-modules="6"')}
{NAV}
{hero("IELTS Module 4 of 6", "Module 4: Writing (Task 1 & Task 2)",
    "Master task response, organization, and language range.",
    ["✍ Writing", "⏱ 90–120 min", "📝 15 Quiz Questions", "🎯 Module 4/6"],
    "66%", "module-progress-fill", "module-progress-label", "Module 4 of 6")}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Module Objectives</h2>
      <ul class="resource-list"><li>Differentiate Task 1 vs Task 2 requirements.</li><li>Use strong paragraph structure and cohesion.</li><li>Apply band descriptors for self-checking.</li></ul>
    </article>
    <article class="card u-mb-1">
      <h2>Module 4 Quick Start</h2>
      <ul class="resource-list">
        <li><strong>Task split:</strong> Plan 20 minutes for Task 1 and 40 minutes for Task 2.</li>
        <li><strong>Score priorities:</strong> Focus on task response, coherence, lexical range, and grammar accuracy.</li>
        <li><strong>Write then improve:</strong> Build a draft, then edit for clarity and precision.</li>
        <li><strong>Use evidence:</strong> In Task 1 report key trends only; in Task 2 support claims with examples.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Writing Task Guide</h2>
      <h3>Task 1</h3>
      <p>Write an introduction, overview, and two detail paragraphs with comparisons. Summarize the main trend from the visual data — do not add opinions.</p>
      <ul class="resource-list">
        <li><strong>Pattern 1:</strong> Paraphrase + Overview — "The chart demonstrates… The data compares…"</li>
        <li><strong>Pattern 2:</strong> Paraphrase + Context + Overview — "The diagram illustrates… Between X and Y…"</li>
      </ul>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/1IVFRWCpNxE?si=Db8VAlf_TDdee9Og" title="IELTS Writing Task 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <h3>Task 2</h3>
      <p>State a clear position, develop two focused body paragraphs, and conclude logically. Each body paragraph: topic sentence + explanation + example + link back.</p>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/1PfIr5trddo?si=H4ciSEdhkVD97waL" title="IELTS Writing Task 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <ul class="resource-list">
        <li><a href="classroom-video-lessons.html" target="_blank" rel="noopener noreferrer">Open full video lessons library</a></li>
        <li><a href="https://ieltsliz.com/" target="_blank" rel="noopener noreferrer">IELTS Liz Writing guidance</a></li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Interactive Quiz</h2>
      <form class="form-stack" data-ielts-quiz data-module-id="4">
        <fieldset class="quiz-item" data-explanation="Task 2 requires a clear position supported by reasons and examples.">
          <legend>1) Task 2 requires...</legend>
          <div class="quiz-option"><input id="m4q1a" type="radio" name="q1" value="a" data-correct="false"/><label for="m4q1a">No opinion</label></div>
          <div class="quiz-option"><input id="m4q1b" type="radio" name="q1" value="b" data-correct="true"/><label for="m4q1b">Clear position with support</label></div>
          <div class="quiz-option"><input id="m4q1c" type="radio" name="q1" value="c" data-correct="false"/><label for="m4q1c">Only bullet points</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Task 1 should summarize major trends and comparisons, not personal stories.">
          <legend>2) Task 1 should focus on...</legend>
          <div class="quiz-option"><input id="m4q2a" type="radio" name="q2" value="a" data-correct="false"/><label for="m4q2a">Personal stories</label></div>
          <div class="quiz-option"><input id="m4q2b" type="radio" name="q2" value="b" data-correct="true"/><label for="m4q2b">Trends and comparisons</label></div>
          <div class="quiz-option"><input id="m4q2c" type="radio" name="q2" value="c" data-correct="false"/><label for="m4q2c">Random details</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Improvement comes from feedback and revision, not memorization alone.">
          <legend>3) Band improvement comes from...</legend>
          <div class="quiz-option"><input id="m4q3a" type="radio" name="q3" value="a" data-correct="false"/><label for="m4q3a">Template memorization only</label></div>
          <div class="quiz-option"><input id="m4q3b" type="radio" name="q3" value="b" data-correct="true"/><label for="m4q3b">Feedback + revision cycle</label></div>
          <div class="quiz-option"><input id="m4q3c" type="radio" name="q3" value="c" data-correct="false"/><label for="m4q3c">Ignoring grammar</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="A strong essay needs logical progression and clear paragraphing.">
          <legend>4) Strong IELTS Writing organization means...</legend>
          <div class="quiz-option"><input id="m4q4a" type="radio" name="q4" value="a" data-correct="false"/><label for="m4q4a">One long paragraph only</label></div>
          <div class="quiz-option"><input id="m4q4b" type="radio" name="q4" value="b" data-correct="true"/><label for="m4q4b">Clear intro, body paragraphs, and conclusion</label></div>
          <div class="quiz-option"><input id="m4q4c" type="radio" name="q4" value="c" data-correct="false"/><label for="m4q4c">No planning before writing</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Task 1 responses highlight major trends and comparisons in data.">
          <legend>5) Task 1 should emphasize:</legend>
          <div class="quiz-option"><input id="m4q5a" type="radio" name="q5" value="a" data-correct="false"/><label for="m4q5a">Personal opinion</label></div>
          <div class="quiz-option"><input id="m4q5b" type="radio" name="q5" value="b" data-correct="true"/><label for="m4q5b">Major trends and comparisons</label></div>
          <div class="quiz-option"><input id="m4q5c" type="radio" name="q5" value="c" data-correct="false"/><label for="m4q5c">Irrelevant details</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Cohesive devices (linkers) help connect ideas but should be used naturally.">
          <legend>6) Use linking words to:</legend>
          <div class="quiz-option"><input id="m4q6a" type="radio" name="q6" value="a" data-correct="true"/><label for="m4q6a">Connect ideas and signal relationships</label></div>
          <div class="quiz-option"><input id="m4q6b" type="radio" name="q6" value="b" data-correct="false"/><label for="m4q6b">Replace main ideas</label></div>
          <div class="quiz-option"><input id="m4q6c" type="radio" name="q6" value="c" data-correct="false"/><label for="m4q6c">Avoid punctuation</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Planning an essay before writing improves coherence and organisation.">
          <legend>7) Before writing Task 2 you should:</legend>
          <div class="quiz-option"><input id="m4q7a" type="radio" name="q7" value="a" data-correct="true"/><label for="m4q7a">Make a short plan for ideas and examples</label></div>
          <div class="quiz-option"><input id="m4q7b" type="radio" name="q7" value="b" data-correct="false"/><label for="m4q7b">Write immediately without a plan</label></div>
          <div class="quiz-option"><input id="m4q7c" type="radio" name="q7" value="c" data-correct="false"/><label for="m4q7c">Copy from memory</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Checking word count and coherence before submission avoids basic band losses.">
          <legend>8) Final check should include:</legend>
          <div class="quiz-option"><input id="m4q8a" type="radio" name="q8" value="a" data-correct="true"/><label for="m4q8a">Word count and paragraph flow</label></div>
          <div class="quiz-option"><input id="m4q8b" type="radio" name="q8" value="b" data-correct="false"/><label for="m4q8b">Adding random facts</label></div>
          <div class="quiz-option"><input id="m4q8c" type="radio" name="q8" value="c" data-correct="false"/><label for="m4q8c">Delete the conclusion</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Task 2 essays should include clear introduction, body paragraphs, and conclusion.">
          <legend>9) A balanced Task 2 structure is:</legend>
          <div class="quiz-option"><input id="m4q9a" type="radio" name="q9" value="a" data-correct="true"/><label for="m4q9a">Introduction, body paragraphs, conclusion</label></div>
          <div class="quiz-option"><input id="m4q9b" type="radio" name="q9" value="b" data-correct="false"/><label for="m4q9b">Only body paragraph</label></div>
          <div class="quiz-option"><input id="m4q9c" type="radio" name="q9" value="c" data-correct="false"/><label for="m4q9c">Bullet points only</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Task achievement improves when all parts of the question are addressed directly.">
          <legend>10) To avoid Task Response loss, you should:</legend>
          <div class="quiz-option"><input id="m4q10a" type="radio" name="q10" value="a" data-correct="true"/><label for="m4q10a">Answer all parts of the question</label></div>
          <div class="quiz-option"><input id="m4q10b" type="radio" name="q10" value="b" data-correct="false"/><label for="m4q10b">Write a memorized essay regardless of prompt</label></div>
          <div class="quiz-option"><input id="m4q10c" type="radio" name="q10" value="c" data-correct="false"/><label for="m4q10c">Ignore the essay topic</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="A topic sentence introduces the main idea of a paragraph clearly.">
          <legend>11) The first sentence in a body paragraph should:</legend>
          <div class="quiz-option"><input id="m4q11a" type="radio" name="q11" value="a" data-correct="true"/><label for="m4q11a">State the paragraph's key idea</label></div>
          <div class="quiz-option"><input id="m4q11b" type="radio" name="q11" value="b" data-correct="false"/><label for="m4q11b">Repeat the question exactly</label></div>
          <div class="quiz-option"><input id="m4q11c" type="radio" name="q11" value="c" data-correct="false"/><label for="m4q11c">Add unrelated facts only</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Examples should be relevant and clearly connected to your argument.">
          <legend>12) Strong supporting examples are:</legend>
          <div class="quiz-option"><input id="m4q12a" type="radio" name="q12" value="a" data-correct="true"/><label for="m4q12a">Specific and linked to your main point</label></div>
          <div class="quiz-option"><input id="m4q12b" type="radio" name="q12" value="b" data-correct="false"/><label for="m4q12b">Random and unrelated</label></div>
          <div class="quiz-option"><input id="m4q12c" type="radio" name="q12" value="c" data-correct="false"/><label for="m4q12c">Copied from the prompt only</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Lexical range and accuracy are both considered in IELTS Writing band scores.">
          <legend>13) Lexical Resource improves when you:</legend>
          <div class="quiz-option"><input id="m4q13a" type="radio" name="q13" value="a" data-correct="true"/><label for="m4q13a">Use varied, accurate vocabulary</label></div>
          <div class="quiz-option"><input id="m4q13b" type="radio" name="q13" value="b" data-correct="false"/><label for="m4q13b">Repeat basic words constantly</label></div>
          <div class="quiz-option"><input id="m4q13c" type="radio" name="q13" value="c" data-correct="false"/><label for="m4q13c">Avoid topic vocabulary</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Grammar range and control support higher scores when errors do not block meaning.">
          <legend>14) Grammar score improves with:</legend>
          <div class="quiz-option"><input id="m4q14a" type="radio" name="q14" value="a" data-correct="true"/><label for="m4q14a">Varied sentence structures used accurately</label></div>
          <div class="quiz-option"><input id="m4q14b" type="radio" name="q14" value="b" data-correct="false"/><label for="m4q14b">Only very short simple sentences</label></div>
          <div class="quiz-option"><input id="m4q14c" type="radio" name="q14" value="c" data-correct="false"/><label for="m4q14c">Ignoring punctuation and tense</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Editing at the end helps catch spelling, grammar, and coherence issues.">
          <legend>15) Final 2–3 minutes are best used to:</legend>
          <div class="quiz-option"><input id="m4q15a" type="radio" name="q15" value="a" data-correct="true"/><label for="m4q15a">Proofread and fix key errors</label></div>
          <div class="quiz-option"><input id="m4q15b" type="radio" name="q15" value="b" data-correct="false"/><label for="m4q15b">Rewrite the whole essay from start</label></div>
          <div class="quiz-option"><input id="m4q15c" type="radio" name="q15" value="c" data-correct="false"/><label for="m4q15c">Delete examples to save space</label></div>
        </fieldset>
        <button class="btn btn-primary" type="button" id="checkAnswers">Check Answers</button>
      </form>
      <div id="quizResult" class="form-feedback u-mt-06"></div>
      <p class="form-feedback" data-quiz-feedback></p>
      <div class="quiz-explanations" data-quiz-explanations></div>
    </article>
    <article class="card u-mb-1">
      <h2>Assignment</h2>
      <div class="form-stack" data-module-checklist>
        <label><input type="checkbox" data-complete-item/> I finished the lesson notes.</label>
        <label><input type="checkbox" data-complete-item/> I completed practice work.</label>
        <label><input type="checkbox" data-complete-item/> I reviewed quiz feedback and revised errors.</label>
      </div>
      <div class="lesson-toolbar u-mt-1">
        <button class="btn btn-primary" type="button" data-mark-module-complete>Mark Complete</button>
      </div>
      <p class="form-feedback" data-module-feedback></p>
    </article>
    <div class="lesson-toolbar module-pagination">
      <a class="btn btn-secondary" href="classroom-ielts-module-3.html">← Module 3</a>
      <a class="btn btn-primary" href="classroom-ielts-module-5.html" data-next-module="5">Next Module →</a>
    </div>
  </div>
</main>
{WA}
{footer("IELTS Module 4 — Writing", "classroom-ielts.html", "Back to IELTS Path", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-module-4.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# MODULE 5: SPEAKING
# ═══════════════════════════════════════════════════════════════════════════════
def gen_module5():
    mc, mcd, mcl = MC["5"]
    content = f"""{head("IELTS Module 5 — Speaking | Tolbert Classroom",
        "Improve fluency, coherence, pronunciation, and idea development for IELTS Speaking.", mc, mcd, mcl,
        'data-ielts-module-page data-module-id="5" data-total-modules="6"')}
{NAV}
{hero("IELTS Module 5 of 6", "Module 5: Speaking (Parts 1–3)",
    "Improve fluency, coherence, pronunciation, and idea development.",
    ["🎤 Speaking", "⏱ 60–80 min", "📝 15 Quiz Questions", "🎯 Module 5/6"],
    "83%", "module-progress-fill", "module-progress-label", "Module 5 of 6")}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Module Objectives</h2>
      <ul class="resource-list"><li>Handle Part 1 personal questions naturally.</li><li>Develop Part 2 cue card response with structure.</li><li>Discuss Part 3 abstract ideas with examples.</li></ul>
    </article>
    <article class="card u-mb-1">
      <h2>Module 5 Quick Start</h2>
      <ul class="resource-list">
        <li><strong>Part 1:</strong> Give short natural answers and extend with one reason or example.</li>
        <li><strong>Part 2:</strong> Use 1-minute planning to note 4–5 keywords before speaking.</li>
        <li><strong>Part 3:</strong> Build answers with opinion + reason + example + mini conclusion.</li>
        <li><strong>Daily speaking:</strong> Record, review, and correct fluency and pronunciation errors.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Speaking Strategy Guide</h2>
      <h3>Part 1: Introduction &amp; Interview</h3>
      <p>Give brief, natural, and relevant answers. Extend with one reason or example. Do not over-prepare memorized scripts — natural fluency scores higher.</p>
      <h3>Part 2: Cue Card (Long Turn)</h3>
      <p>Use preparation time to jot 4–5 keywords. Structure: intro → main points → example → short conclusion. Speak for the full 1–2 minutes.</p>
      <h3>Part 3: Discussion</h3>
      <p>Give reasoned, developed answers. Pattern: Opinion + Reason + Example + Compare or Contrast. Avoid one-word replies — Part 3 rewards depth.</p>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/2oC-dXJUYqY?si=HbdswuAMAhOSNFLw" title="IELTS Speaking Guide" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/YWqU_QwCYCQ?si=qXrR1sc-1PYYj0Lk" title="IELTS Speaking Part 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <ul class="resource-list">
        <li><a href="classroom-video-lessons.html" target="_blank" rel="noopener noreferrer">Open full video lessons library</a></li>
        <li><a href="https://ieltsliz.com/" target="_blank" rel="noopener noreferrer">IELTS Liz speaking guidance</a></li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Mini Quiz — Instant Feedback</h2>
      <form class="form-stack" data-ielts-quiz data-module-id="5">
        <fieldset class="quiz-item" data-explanation="Part 2 is a cue-card task with preparation time and a longer individual response.">
          <legend>1) Part 2 includes...</legend>
          <div class="quiz-option"><input id="m5q1a" type="radio" name="q1" data-correct="true"/><label for="m5q1a">Cue card + long turn</label></div>
          <div class="quiz-option"><input id="m5q1b" type="radio" name="q1" data-correct="false"/><label for="m5q1b">Essay writing</label></div>
          <div class="quiz-option"><input id="m5q1c" type="radio" name="q1" data-correct="false"/><label for="m5q1c">No speaking</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Part 3 rewards developed answers with reasons, examples, and comparisons.">
          <legend>2) Strong Part 3 answers include...</legend>
          <div class="quiz-option"><input id="m5q2a" type="radio" name="q2" data-correct="false"/><label for="m5q2a">One-word replies</label></div>
          <div class="quiz-option"><input id="m5q2b" type="radio" name="q2" data-correct="true"/><label for="m5q2b">Reasoned explanation</label></div>
          <div class="quiz-option"><input id="m5q2c" type="radio" name="q2" data-correct="false"/><label for="m5q2c">Memorized script only</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Recording and reviewing answers helps identify fluency and pronunciation weaknesses.">
          <legend>3) Speaking score improves with...</legend>
          <div class="quiz-option"><input id="m5q3a" type="radio" name="q3" data-correct="true"/><label for="m5q3a">Regular recording review</label></div>
          <div class="quiz-option"><input id="m5q3b" type="radio" name="q3" data-correct="false"/><label for="m5q3b">Avoiding practice</label></div>
          <div class="quiz-option"><input id="m5q3c" type="radio" name="q3" data-correct="false"/><label for="m5q3c">Ignoring fluency</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Part 1 should be natural and brief answers to personal questions.">
          <legend>4) Part 1 responses should be:</legend>
          <div class="quiz-option"><input id="m5q4a" type="radio" name="q4" data-correct="true"/><label for="m5q4a">Brief, natural, and relevant</label></div>
          <div class="quiz-option"><input id="m5q4b" type="radio" name="q4" data-correct="false"/><label for="m5q4b">Long memorized speeches</label></div>
          <div class="quiz-option"><input id="m5q4c" type="radio" name="q4" data-correct="false"/><label for="m5q4c">Silent answers</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Use examples and reasons to extend Part 3 answers effectively.">
          <legend>5) Good Part 3 answers include:</legend>
          <div class="quiz-option"><input id="m5q5a" type="radio" name="q5" data-correct="true"/><label for="m5q5a">Reasons and short examples</label></div>
          <div class="quiz-option"><input id="m5q5b" type="radio" name="q5" data-correct="false"/><label for="m5q5b">One-word replies</label></div>
          <div class="quiz-option"><input id="m5q5c" type="radio" name="q5" data-correct="false"/><label for="m5q5c">Reading from notes</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Pronunciation clarity helps examiners understand and reward higher bands.">
          <legend>6) Pronunciation matters because:</legend>
          <div class="quiz-option"><input id="m5q6a" type="radio" name="q6" data-correct="true"/><label for="m5q6a">It improves examiner comprehension</label></div>
          <div class="quiz-option"><input id="m5q6b" type="radio" name="q6" data-correct="false"/><label for="m5q6b">It is irrelevant</label></div>
          <div class="quiz-option"><input id="m5q6c" type="radio" name="q6" data-correct="false"/><label for="m5q6c">Only vocabulary matters</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Fluency is shown by speaking at a natural pace with minimal long pauses.">
          <legend>7) Fluency is shown by:</legend>
          <div class="quiz-option"><input id="m5q7a" type="radio" name="q7" data-correct="true"/><label for="m5q7a">Natural pace and few long pauses</label></div>
          <div class="quiz-option"><input id="m5q7b" type="radio" name="q7" data-correct="false"/><label for="m5q7b">Speaking only one word answers</label></div>
          <div class="quiz-option"><input id="m5q7c" type="radio" name="q7" data-correct="false"/><label for="m5q7c">Reading scripts</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Confidence and controlled vocabulary range together raise band scores.">
          <legend>8) To improve speaking band, focus on:</legend>
          <div class="quiz-option"><input id="m5q8a" type="radio" name="q8" data-correct="true"/><label for="m5q8a">Fluency, pronunciation, and idea development</label></div>
          <div class="quiz-option"><input id="m5q8b" type="radio" name="q8" data-correct="false"/><label for="m5q8b">Only memorized answers</label></div>
          <div class="quiz-option"><input id="m5q8c" type="radio" name="q8" data-correct="false"/><label for="m5q8c">Avoid practicing</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Part 1 answers should be natural and developed, not single-word replies.">
          <legend>9) In Speaking Part 1, best response style is:</legend>
          <div class="quiz-option"><input id="m5q9a" type="radio" name="q9" data-correct="true"/><label for="m5q9a">Short but developed personal answers</label></div>
          <div class="quiz-option"><input id="m5q9b" type="radio" name="q9" data-correct="false"/><label for="m5q9b">One-word answers only</label></div>
          <div class="quiz-option"><input id="m5q9c" type="radio" name="q9" data-correct="false"/><label for="m5q9c">Reading prepared scripts</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="In Part 2, structuring talk by time or points helps coherence.">
          <legend>10) A good Part 2 strategy is to:</legend>
          <div class="quiz-option"><input id="m5q10a" type="radio" name="q10" data-correct="true"/><label for="m5q10a">Use quick notes to organize points</label></div>
          <div class="quiz-option"><input id="m5q10b" type="radio" name="q10" data-correct="false"/><label for="m5q10b">Stay silent for planning time</label></div>
          <div class="quiz-option"><input id="m5q10c" type="radio" name="q10" data-correct="false"/><label for="m5q10c">Memorize unrelated paragraphs</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Part 3 requires opinion, analysis, and examples at a deeper level.">
          <legend>11) Speaking Part 3 usually tests:</legend>
          <div class="quiz-option"><input id="m5q11a" type="radio" name="q11" data-correct="true"/><label for="m5q11a">Abstract discussion and justification</label></div>
          <div class="quiz-option"><input id="m5q11b" type="radio" name="q11" data-correct="false"/><label for="m5q11b">Only personal biography facts</label></div>
          <div class="quiz-option"><input id="m5q11c" type="radio" name="q11" data-correct="false"/><label for="m5q11c">Spelling correction exercises</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Fillers are normal, but frequent long pauses reduce fluency scores.">
          <legend>12) Too many long pauses can lower:</legend>
          <div class="quiz-option"><input id="m5q12a" type="radio" name="q12" data-correct="true"/><label for="m5q12a">Fluency and coherence band</label></div>
          <div class="quiz-option"><input id="m5q12b" type="radio" name="q12" data-correct="false"/><label for="m5q12b">Writing task achievement only</label></div>
          <div class="quiz-option"><input id="m5q12c" type="radio" name="q12" data-correct="false"/><label for="m5q12c">Listening transfer time</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Range and precision in vocabulary support stronger speaking scores.">
          <legend>13) Better lexical resource means:</legend>
          <div class="quiz-option"><input id="m5q13a" type="radio" name="q13" data-correct="true"/><label for="m5q13a">Using varied and accurate vocabulary</label></div>
          <div class="quiz-option"><input id="m5q13b" type="radio" name="q13" data-correct="false"/><label for="m5q13b">Repeating simple words constantly</label></div>
          <div class="quiz-option"><input id="m5q13c" type="radio" name="q13" data-correct="false"/><label for="m5q13c">Avoiding descriptive language</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Recording practice sessions helps identify pronunciation and grammar errors.">
          <legend>14) One effective speaking practice method is:</legend>
          <div class="quiz-option"><input id="m5q14a" type="radio" name="q14" data-correct="true"/><label for="m5q14a">Record, review, and correct your responses</label></div>
          <div class="quiz-option"><input id="m5q14b" type="radio" name="q14" data-correct="false"/><label for="m5q14b">Practice without feedback forever</label></div>
          <div class="quiz-option"><input id="m5q14c" type="radio" name="q14" data-correct="false"/><label for="m5q14c">Memorize model answers word-for-word</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Natural confidence, eye contact, and clear pacing improve examiner perception.">
          <legend>15) On test day, strong speaking delivery includes:</legend>
          <div class="quiz-option"><input id="m5q15a" type="radio" name="q15" data-correct="true"/><label for="m5q15a">Clear pace, confidence, and direct engagement</label></div>
          <div class="quiz-option"><input id="m5q15b" type="radio" name="q15" data-correct="false"/><label for="m5q15b">Very fast speech with no pauses</label></div>
          <div class="quiz-option"><input id="m5q15c" type="radio" name="q15" data-correct="false"/><label for="m5q15c">Minimal response length</label></div>
        </fieldset>
        <button class="btn btn-primary" type="submit">Check Answers</button>
      </form>
      <p class="form-feedback" data-quiz-feedback></p>
      <div class="quiz-explanations" data-quiz-explanations></div>
    </article>
    <article class="card u-mb-1">
      <h2>Assignment</h2>
      <div class="form-stack" data-module-checklist>
        <label><input type="checkbox" data-complete-item/> I finished the lesson notes.</label>
        <label><input type="checkbox" data-complete-item/> I completed practice work.</label>
        <label><input type="checkbox" data-complete-item/> I reviewed quiz feedback and revised errors.</label>
      </div>
      <div class="lesson-toolbar u-mt-1">
        <button class="btn btn-primary" type="button" data-mark-module-complete>Mark Complete</button>
      </div>
      <p class="form-feedback" data-module-feedback></p>
    </article>
    <div class="lesson-toolbar module-pagination">
      <a class="btn btn-secondary" href="classroom-ielts-module-4.html">← Module 4</a>
      <a class="btn btn-primary" href="classroom-ielts-module-6.html" data-next-module="6">Next Module →</a>
    </div>
  </div>
</main>
{WA}
{footer("IELTS Module 5 — Speaking", "classroom-ielts.html", "Back to IELTS Path", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-module-5.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# MODULE 6: MOCK EXAMS
# ═══════════════════════════════════════════════════════════════════════════════
def gen_module6():
    mc, mcd, mcl = MC["6"]
    content = f"""{head("IELTS Module 6 — Mock Exams | Tolbert Classroom",
        "Simulate full IELTS test, identify gaps, and finalize exam readiness.", mc, mcd, mcl,
        'data-ielts-module-page data-module-id="6" data-total-modules="6"')}
{NAV}
{hero("IELTS Module 6 of 6", "Module 6: Mock Exams &amp; Exam Strategy",
    "Simulate full IELTS test and finalize exam readiness.",
    ["🧪 Mock Test", "⏱ 3+ hours", "📝 15 Quiz Questions", "🎯 Final Module"],
    "100%", "module-progress-fill", "module-progress-label", "Module 6 of 6")}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Module Objectives</h2>
      <ul class="resource-list"><li>Complete full timed mock under exam conditions.</li><li>Analyze weak areas by section and question type.</li><li>Finalize a final-week improvement plan.</li></ul>
    </article>
    <article class="card u-mb-1">
      <h2>Module 6 Quick Start</h2>
      <ul class="resource-list">
        <li><strong>Simulate reality:</strong> Run one full mock with strict timing and no interruptions.</li>
        <li><strong>Score by skill:</strong> Break performance into Listening, Reading, Writing, and Speaking actions.</li>
        <li><strong>Fix patterns first:</strong> Prioritize the top 2–3 repeated error types.</li>
        <li><strong>Final week strategy:</strong> Use targeted review, not random new material.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>IELTS Mock Exam Strategy</h2>
      <p>Mock exams are full-length practice tests designed to simulate the real IELTS exam experience. They measure your progress, build confidence, and expose score-limiting gaps before test day.</p>
      <h3>Why Mock Exams Work</h3>
      <ul class="resource-list">
        <li>Experience the full test format and timing</li>
        <li>Reduce test anxiety through repeated exposure</li>
        <li>Identify strengths and weaknesses by section</li>
        <li>Track your band score progress over time</li>
      </ul>
      <h3>How to Run an Effective Mock</h3>
      <ul class="resource-list">
        <li>Use strict time conditions — no pauses or replays</li>
        <li>Complete all four skills in one session</li>
        <li>Keep an error log by question type after each mock</li>
        <li>Target your top 2–3 error patterns before the next session</li>
      </ul>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/6-TbM0VBBtY?si=MsiMUIKtRfXBIclp" title="IELTS Mock Strategy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/ZDv9njERj0s?si=aAFOveFBOIuuEO35" title="IELTS Exam Strategy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <ul class="resource-list">
        <li><a href="classroom-video-lessons.html" target="_blank" rel="noopener noreferrer">Open full video lessons library</a></li>
        <li><a href="https://ieltsliz.com/" target="_blank" rel="noopener noreferrer">IELTS Liz exam strategy guides</a></li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Mini Quiz — Instant Feedback</h2>
      <form class="form-stack" data-ielts-quiz data-module-id="6">
        <fieldset class="quiz-item" data-explanation="Mock exams are used to assess readiness and identify score-limiting gaps.">
          <legend>1) Mock test purpose is to...</legend>
          <div class="quiz-option"><input id="m6q1a" type="radio" name="q1" data-correct="false"/><label for="m6q1a">Guess final score only</label></div>
          <div class="quiz-option"><input id="m6q1b" type="radio" name="q1" data-correct="true"/><label for="m6q1b">Measure readiness + fix gaps</label></div>
          <div class="quiz-option"><input id="m6q1c" type="radio" name="q1" data-correct="false"/><label for="m6q1c">Replace all learning</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="The biggest score gains come from analyzing mistakes and practicing targeted weak areas.">
          <legend>2) After mock, priority should be...</legend>
          <div class="quiz-option"><input id="m6q2a" type="radio" name="q2" data-correct="false"/><label for="m6q2a">Ignore mistakes</label></div>
          <div class="quiz-option"><input id="m6q2b" type="radio" name="q2" data-correct="true"/><label for="m6q2b">Error analysis and targeted drills</label></div>
          <div class="quiz-option"><input id="m6q2c" type="radio" name="q2" data-correct="false"/><label for="m6q2c">Start new random resources</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="A focused revision plan improves confidence and consistency before exam day.">
          <legend>3) Final week should include...</legend>
          <div class="quiz-option"><input id="m6q3a" type="radio" name="q3" data-correct="false"/><label for="m6q3a">No review</label></div>
          <div class="quiz-option"><input id="m6q3b" type="radio" name="q3" data-correct="true"/><label for="m6q3b">Focused revision schedule</label></div>
          <div class="quiz-option"><input id="m6q3c" type="radio" name="q3" data-correct="false"/><label for="m6q3c">Only social media</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Simulating test conditions during practice builds stamina and familiarity.">
          <legend>4) When practicing a mock test, do it:</legend>
          <div class="quiz-option"><input id="m6q4a" type="radio" name="q4" data-correct="true"/><label for="m6q4a">Under strict timed conditions</label></div>
          <div class="quiz-option"><input id="m6q4b" type="radio" name="q4" data-correct="false"/><label for="m6q4b">With unlimited pauses</label></div>
          <div class="quiz-option"><input id="m6q4c" type="radio" name="q4" data-correct="false"/><label for="m6q4c">Only using summaries</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Post-mock error analysis identifies recurring weaknesses to target.">
          <legend>5) The main use of an error log is to:</legend>
          <div class="quiz-option"><input id="m6q5a" type="radio" name="q5" data-correct="true"/><label for="m6q5a">Identify recurring weaknesses</label></div>
          <div class="quiz-option"><input id="m6q5b" type="radio" name="q5" data-correct="false"/><label for="m6q5b">Hide mistakes</label></div>
          <div class="quiz-option"><input id="m6q5c" type="radio" name="q5" data-correct="false"/><label for="m6q5c">Only count correct answers</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Final-week rest and light review help maintain focus and energy before test day.">
          <legend>6) The day before the test you should:</legend>
          <div class="quiz-option"><input id="m6q6a" type="radio" name="q6" data-correct="true"/><label for="m6q6a">Light review and rest</label></div>
          <div class="quiz-option"><input id="m6q6b" type="radio" name="q6" data-correct="false"/><label for="m6q6b">Cram all night</label></div>
          <div class="quiz-option"><input id="m6q6c" type="radio" name="q6" data-correct="false"/><label for="m6q6c">Ignore logistics</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Use targeted short drills to fix the top 2–3 errors found in mock reviews.">
          <legend>7) Best improvement after mock:</legend>
          <div class="quiz-option"><input id="m6q7a" type="radio" name="q7" data-correct="true"/><label for="m6q7a">Run targeted drills on weak areas</label></div>
          <div class="quiz-option"><input id="m6q7b" type="radio" name="q7" data-correct="false"/><label for="m6q7b">Start a new unrelated course</label></div>
          <div class="quiz-option"><input id="m6q7c" type="radio" name="q7" data-correct="false"/><label for="m6q7c">Ignore feedback</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Confidence in test day routines reduces stress and supports performance.">
          <legend>8) Good test-day routine includes:</legend>
          <div class="quiz-option"><input id="m6q8a" type="radio" name="q8" data-correct="true"/><label for="m6q8a">Arrive early with necessary documents</label></div>
          <div class="quiz-option"><input id="m6q8b" type="radio" name="q8" data-correct="false"/><label for="m6q8b">Arrive late stressed</label></div>
          <div class="quiz-option"><input id="m6q8c" type="radio" name="q8" data-correct="false"/><label for="m6q8c">Skip breakfast</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="A full mock should simulate exact exam timing and sequence.">
          <legend>9) Best way to run a mock exam is:</legend>
          <div class="quiz-option"><input id="m6q9a" type="radio" name="q9" data-correct="true"/><label for="m6q9a">Under real timed conditions</label></div>
          <div class="quiz-option"><input id="m6q9b" type="radio" name="q9" data-correct="false"/><label for="m6q9b">With unlimited breaks and pauses</label></div>
          <div class="quiz-option"><input id="m6q9c" type="radio" name="q9" data-correct="false"/><label for="m6q9c">Without completing all sections</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Error logs turn random mistakes into targeted revision actions.">
          <legend>10) Why keep an error log after mocks?</legend>
          <div class="quiz-option"><input id="m6q10a" type="radio" name="q10" data-correct="true"/><label for="m6q10a">To track patterns and fix weak points</label></div>
          <div class="quiz-option"><input id="m6q10b" type="radio" name="q10" data-correct="false"/><label for="m6q10b">To ignore repeated mistakes</label></div>
          <div class="quiz-option"><input id="m6q10c" type="radio" name="q10" data-correct="false"/><label for="m6q10c">To replace all study plans</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Band descriptors identify what to improve in each skill objectively.">
          <legend>11) Band descriptors are useful because they:</legend>
          <div class="quiz-option"><input id="m6q11a" type="radio" name="q11" data-correct="true"/><label for="m6q11a">Show criteria for each score level</label></div>
          <div class="quiz-option"><input id="m6q11b" type="radio" name="q11" data-correct="false"/><label for="m6q11b">Only apply to registration</label></div>
          <div class="quiz-option"><input id="m6q11c" type="radio" name="q11" data-correct="false"/><label for="m6q11c">Can replace practice entirely</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Targeted revision should focus on high-impact weaknesses first.">
          <legend>12) Highest priority before test day is to:</legend>
          <div class="quiz-option"><input id="m6q12a" type="radio" name="q12" data-correct="true"/><label for="m6q12a">Fix your most frequent scoring errors</label></div>
          <div class="quiz-option"><input id="m6q12b" type="radio" name="q12" data-correct="false"/><label for="m6q12b">Study only your strongest skill</label></div>
          <div class="quiz-option"><input id="m6q12c" type="radio" name="q12" data-correct="false"/><label for="m6q12c">Change strategy every day</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Sleep and routine influence concentration, memory, and exam performance.">
          <legend>13) The night before exam, best approach is:</legend>
          <div class="quiz-option"><input id="m6q13a" type="radio" name="q13" data-correct="true"/><label for="m6q13a">Rest well and keep a simple review</label></div>
          <div class="quiz-option"><input id="m6q13b" type="radio" name="q13" data-correct="false"/><label for="m6q13b">Cram all night with no sleep</label></div>
          <div class="quiz-option"><input id="m6q13c" type="radio" name="q13" data-correct="false"/><label for="m6q13c">Skip preparation entirely</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Writing timing discipline ensures both tasks are completed effectively.">
          <legend>14) In writing, time planning helps you:</legend>
          <div class="quiz-option"><input id="m6q14a" type="radio" name="q14" data-correct="true"/><label for="m6q14a">Complete both tasks with review time</label></div>
          <div class="quiz-option"><input id="m6q14b" type="radio" name="q14" data-correct="false"/><label for="m6q14b">Write one task only</label></div>
          <div class="quiz-option"><input id="m6q14c" type="radio" name="q14" data-correct="false"/><label for="m6q14c">Ignore task weighting</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Final review should be strategic, calm, and aligned with known weak areas.">
          <legend>15) Final week study should focus on:</legend>
          <div class="quiz-option"><input id="m6q15a" type="radio" name="q15" data-correct="true"/><label for="m6q15a">Targeted review and full mock reflection</label></div>
          <div class="quiz-option"><input id="m6q15b" type="radio" name="q15" data-correct="false"/><label for="m6q15b">Learning unrelated new topics</label></div>
          <div class="quiz-option"><input id="m6q15c" type="radio" name="q15" data-correct="false"/><label for="m6q15c">No revision at all</label></div>
        </fieldset>
        <button class="btn btn-primary" type="submit">Check Answers</button>
      </form>
      <p class="form-feedback" data-quiz-feedback></p>
      <div class="quiz-explanations" data-quiz-explanations></div>
    </article>
    <article class="card u-mb-1">
      <h2>Assignment</h2>
      <div class="form-stack" data-module-checklist>
        <label><input type="checkbox" data-complete-item/> I completed a full timed mock test.</label>
        <label><input type="checkbox" data-complete-item/> I analyzed my errors by section.</label>
        <label><input type="checkbox" data-complete-item/> I reviewed quiz feedback and revised errors.</label>
      </div>
      <div class="lesson-toolbar u-mt-1">
        <button class="btn btn-primary" type="button" data-mark-module-complete>Mark Complete</button>
      </div>
      <p class="form-feedback" data-module-feedback></p>
    </article>
    <div class="lesson-toolbar module-pagination">
      <a class="btn btn-secondary" href="classroom-ielts-module-5.html">← Module 5</a>
      <a class="btn btn-primary" href="classroom-ielts-certificate-request.html">Request Certificate →</a>
    </div>
  </div>
</main>
{WA}
{footer("IELTS Module 6 — Mock Exams", "classroom-ielts.html", "Back to IELTS Path", "classroom-ielts-certificate-request.html", "Request Certificate")}
{TAIL}"""
    write("classroom-ielts-module-6.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# MODULE 1a: COMPUTER vs PAPER
# ═══════════════════════════════════════════════════════════════════════════════
def gen_module1a():
    mc, mcd, mcl = MC["1a"]
    content = f"""{head("Computer vs Paper IELTS | Tolbert Classroom",
        "Understand the differences between computer-delivered and paper-based IELTS.", mc, mcd, mcl,
        'data-ielts-module-page data-module-id="1a" data-total-modules="6"')}
{NAV}
{hero("IELTS Module 1a", "Computer vs Paper IELTS",
    "Understand key differences and choose the right test mode for your goals.",
    ["💻 Test Format", "⏱ 30 min", "📝 4 Quiz Questions", "🧭 Bonus Module"],
    "16%", "module-progress-fill", "module-progress-label", "Module 1a")}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Key Differences</h2>
      <ul class="resource-list">
        <li><strong>Content and Scoring:</strong> Identical in both modes — same band score, same question difficulty.</li>
        <li><strong>Listening (Paper):</strong> Extra transfer time at the end to move answers to answer sheet.</li>
        <li><strong>Listening (Computer):</strong> Type answers directly — shorter review window.</li>
        <li><strong>Reading &amp; Writing:</strong> Computer mode lets you highlight and type; paper uses handwriting.</li>
        <li><strong>Speaking:</strong> Always face-to-face with an examiner in both modes.</li>
        <li><strong>Results:</strong> Computer results in 3–5 days; paper results in 13 days.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Which Mode Should You Choose?</h2>
      <p>Choose based on your comfort level in timed practice, not assumptions about difficulty. Both modes produce equivalent scores. If you type faster than you write, computer mode may reduce fatigue for Writing. If you prefer highlighting paper passages, paper mode may suit Reading.</p>
      <p>The best way to decide: complete one timed mock in each mode and compare your performance and comfort.</p>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/fUXyyd6mYy0?si=4HkioYwYR6GUqZNX" title="Computer vs Paper IELTS" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </article>
    <article class="card u-mb-1">
      <h2>Quick Quiz</h2>
      <form class="form-stack" data-ielts-quiz data-module-id="1a">
        <fieldset class="quiz-item" data-explanation="IELTS content, scoring, and difficulty are the same in computer and paper modes.">
          <legend>1) Computer and paper IELTS are:</legend>
          <div class="quiz-option"><input id="m1aq1a" type="radio" name="q1" data-correct="true"/><label for="m1aq1a">Equal in content and scoring</label></div>
          <div class="quiz-option"><input id="m1aq1b" type="radio" name="q1" data-correct="false"/><label for="m1aq1b">Different exams with different scores</label></div>
          <div class="quiz-option"><input id="m1aq1c" type="radio" name="q1" data-correct="false"/><label for="m1aq1c">Different speaking tests</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Paper listening includes longer transfer time, while computer mode has shorter review time.">
          <legend>2) In Listening, paper mode usually gives:</legend>
          <div class="quiz-option"><input id="m1aq2a" type="radio" name="q2" data-correct="true"/><label for="m1aq2a">Extra transfer time at the end</label></div>
          <div class="quiz-option"><input id="m1aq2b" type="radio" name="q2" data-correct="false"/><label for="m1aq2b">No answer review time</label></div>
          <div class="quiz-option"><input id="m1aq2c" type="radio" name="q2" data-correct="false"/><label for="m1aq2c">Different question types</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="All IELTS speaking tests are face-to-face with an examiner regardless of mode.">
          <legend>3) IELTS Speaking format is:</legend>
          <div class="quiz-option"><input id="m1aq3a" type="radio" name="q3" data-correct="true"/><label for="m1aq3a">Face-to-face in both test modes</label></div>
          <div class="quiz-option"><input id="m1aq3b" type="radio" name="q3" data-correct="false"/><label for="m1aq3b">Only computer interview</label></div>
          <div class="quiz-option"><input id="m1aq3c" type="radio" name="q3" data-correct="false"/><label for="m1aq3c">Only recorded answers</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="The best mode depends on personal comfort, speed, and performance in practice.">
          <legend>4) Best way to choose test mode:</legend>
          <div class="quiz-option"><input id="m1aq4a" type="radio" name="q4" data-correct="true"/><label for="m1aq4a">Use practice results and comfort level</label></div>
          <div class="quiz-option"><input id="m1aq4b" type="radio" name="q4" data-correct="false"/><label for="m1aq4b">Choose the first available option only</label></div>
          <div class="quiz-option"><input id="m1aq4c" type="radio" name="q4" data-correct="false"/><label for="m1aq4c">Follow rumors about easier mode</label></div>
        </fieldset>
        <button class="btn btn-primary" type="submit">Check Answers</button>
      </form>
      <p class="form-feedback" data-quiz-feedback></p>
      <div class="quiz-explanations" data-quiz-explanations></div>
    </article>
    <div class="lesson-toolbar module-pagination">
      <a class="btn btn-secondary" href="classroom-ielts-module-1.html">← Back to Module 1</a>
      <a class="btn btn-primary" href="classroom-ielts-module-2.html" data-next-module="2">Next Module →</a>
    </div>
  </div>
</main>
{WA}
{footer("Computer vs Paper IELTS", "classroom-ielts-module-1.html", "Back to Module 1", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-module-computer-vs-paper.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# MODULE 1b: ACADEMIC vs GENERAL
# ═══════════════════════════════════════════════════════════════════════════════
def gen_module1b():
    mc, mcd, mcl = MC["1b"]
    content = f"""{head("Academic vs General IELTS | Tolbert Classroom",
        "Understand the difference between IELTS Academic and General Training.", mc, mcd, mcl,
        'data-ielts-module-page data-module-id="1b" data-total-modules="6"')}
{NAV}
{hero("IELTS Module 1b", "Academic vs General Training IELTS",
    "Choose the right IELTS format for your goal — university, work, or migration.",
    ["🎓 Test Type", "⏱ 30 min", "📝 4 Quiz Questions", "🧭 Bonus Module"],
    "16%", "module-progress-fill", "module-progress-label", "Module 1b")}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Key Differences</h2>
      <ul class="resource-list">
        <li><strong>IELTS Academic:</strong> Required for university admission, postgraduate study, and professional registration.</li>
        <li><strong>IELTS General Training:</strong> Required for migration (Australia, Canada, UK, NZ), work permits, and vocational training.</li>
        <li><strong>Listening &amp; Speaking:</strong> Identical in both versions — same format, same scoring.</li>
        <li><strong>Reading (Academic):</strong> 3 long, complex academic texts from journals, books, and magazines.</li>
        <li><strong>Reading (General):</strong> Shorter texts from notices, advertisements, and workplace materials, plus one longer passage.</li>
        <li><strong>Writing Task 1 (Academic):</strong> Describe a graph, chart, table, map, or process diagram.</li>
        <li><strong>Writing Task 1 (General):</strong> Write a formal, semi-formal, or informal letter.</li>
        <li><strong>Writing Task 2:</strong> Essay — same in both versions.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>How to Choose Your Format</h2>
      <p>Your choice depends entirely on your goal and the institution or immigration authority's requirement. Check the official requirements before registering. Do not choose based on assumptions about difficulty — Academic and General use different scoring benchmarks.</p>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/0qgg4cK0Yo4?si=GSJxG1BGCHddGBro" title="Academic vs General IELTS" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </article>
    <article class="card u-mb-1">
      <h2>Quick Quiz</h2>
      <form class="form-stack" data-ielts-quiz data-module-id="1b">
        <fieldset class="quiz-item" data-explanation="Academic IELTS is used mainly for university and higher-education entry.">
          <legend>1) IELTS Academic is mainly for:</legend>
          <div class="quiz-option"><input id="m1bq1a" type="radio" name="q1" data-correct="true"/><label for="m1bq1a">University or higher education</label></div>
          <div class="quiz-option"><input id="m1bq1b" type="radio" name="q1" data-correct="false"/><label for="m1bq1b">Driving test preparation</label></div>
          <div class="quiz-option"><input id="m1bq1c" type="radio" name="q1" data-correct="false"/><label for="m1bq1c">Only social media communication</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="General Training is commonly required for migration and work-related pathways.">
          <legend>2) IELTS General Training is usually for:</legend>
          <div class="quiz-option"><input id="m1bq2a" type="radio" name="q2" data-correct="true"/><label for="m1bq2a">Work and migration purposes</label></div>
          <div class="quiz-option"><input id="m1bq2b" type="radio" name="q2" data-correct="false"/><label for="m1bq2b">Medical surgery licensing only</label></div>
          <div class="quiz-option"><input id="m1bq2c" type="radio" name="q2" data-correct="false"/><label for="m1bq2c">No specific purpose</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="Listening and Speaking sections are the same in both IELTS formats.">
          <legend>3) Which sections are the same in both tests?</legend>
          <div class="quiz-option"><input id="m1bq3a" type="radio" name="q3" data-correct="true"/><label for="m1bq3a">Listening and Speaking</label></div>
          <div class="quiz-option"><input id="m1bq3b" type="radio" name="q3" data-correct="false"/><label for="m1bq3b">Reading and Writing only</label></div>
          <div class="quiz-option"><input id="m1bq3c" type="radio" name="q3" data-correct="false"/><label for="m1bq3c">All sections are different</label></div>
        </fieldset>
        <fieldset class="quiz-item" data-explanation="The best format depends on your goal and requirements, not myths about difficulty.">
          <legend>4) Best way to choose your IELTS format:</legend>
          <div class="quiz-option"><input id="m1bq4a" type="radio" name="q4" data-correct="true"/><label for="m1bq4a">Match your goal and official requirement</label></div>
          <div class="quiz-option"><input id="m1bq4b" type="radio" name="q4" data-correct="false"/><label for="m1bq4b">Choose randomly</label></div>
          <div class="quiz-option"><input id="m1bq4c" type="radio" name="q4" data-correct="false"/><label for="m1bq4c">Copy your friend's choice only</label></div>
        </fieldset>
        <button class="btn btn-primary" type="submit">Check Answers</button>
      </form>
      <p class="form-feedback" data-quiz-feedback></p>
      <div class="quiz-explanations" data-quiz-explanations></div>
    </article>
    <div class="lesson-toolbar module-pagination">
      <a class="btn btn-secondary" href="classroom-ielts-module-1.html">← Back to Module 1</a>
      <a class="btn btn-primary" href="classroom-ielts-module-2.html" data-next-module="2">Next Module →</a>
    </div>
  </div>
</main>
{WA}
{footer("Academic vs General IELTS", "classroom-ielts-module-1.html", "Back to Module 1", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-module-academic-vs-general.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# IELTS HOME (HUB)
# ═══════════════════════════════════════════════════════════════════════════════
def gen_ielts_home():
    mc, mcd, mcl = MC["hub"]
    content = f"""{head("IELTS Classroom | Tolbert Classroom",
        "Start IELTS preparation with module navigation, study guidance, and exam-focused practice resources.", mc, mcd, mcl)}
{NAV_HUB}
{hero("IELTS Classroom", "IELTS Classroom",
    "Dedicated IELTS learning track. Band Score 1–9 strategies follow IELTS-specific task formats.",
    ["🎓 IELTS", "🎯 Band 1–9", "📚 6 Modules", "📈 Full Track"])}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>IELTS Scoring &amp; Strategy</h2>
      <ul class="resource-list">
        <li><strong>Scoring:</strong> Band Score 1–9 (Listening, Reading, Writing, Speaking + Overall band).</li>
        <li><strong>Writing Strategy:</strong> Task 1 + Task 2 structure, tone, and timing.</li>
        <li><strong>Speaking Strategy:</strong> Face-to-face interview (Parts 1, 2, 3).</li>
        <li><strong>Reading Strategy:</strong> Skimming, scanning, paraphrase recognition.</li>
        <li><strong>Listening Strategy:</strong> Signpost tracking, distractor avoidance, note-taking.</li>
      </ul>
    </article>
    <article class="card u-mb-1">
      <h2>Band Score Goal Tracker</h2>
      <p class="section-lead">Set and monitor your IELTS target band by skill and overall score goal.</p>
      <div class="progress-wrap">
        <p><strong>Overall Goal:</strong> Band 7.5</p>
        <div class="progress-bar"><div class="progress-fill" style="width:75%"></div></div>
        <p class="progress-label">Current estimated progress: Band 6.0 → Goal Band 7.5</p>
      </div>
      <div class="grid-2 u-mt-1">
        <div class="card"><p>Listening Goal: Band 7.5</p></div>
        <div class="card"><p>Reading Goal: Band 7.5</p></div>
        <div class="card"><p>Writing Goal: Band 7.0</p></div>
        <div class="card"><p>Speaking Goal: Band 7.0</p></div>
      </div>
    </article>
    <article class="card u-mb-1">
      <h2>IELTS Module Path</h2>
      <div class="grid-2">
        <article class="card">
          <h3>Module 1: Foundation</h3>
          <p>Grammar essentials, vocabulary blocks, and exam orientation.</p>
          <a class="btn btn-primary" href="classroom-ielts-module-1.html">Start Module 1</a>
        </article>
        <article class="card">
          <h3>Module 2: Listening</h3>
          <p>Signpost words, note-taking, and distractor recognition.</p>
          <a class="btn btn-primary" href="classroom-ielts-module-2.html">Start Module 2</a>
        </article>
        <article class="card">
          <h3>Module 3: Reading</h3>
          <p>Skimming, scanning, and paraphrase-based answer selection.</p>
          <a class="btn btn-primary" href="classroom-ielts-module-3.html">Start Module 3</a>
        </article>
        <article class="card">
          <h3>Module 4: Writing</h3>
          <p>Task 1 and Task 2 structure, tone, and band scoring.</p>
          <a class="btn btn-primary" href="classroom-ielts-module-4.html">Start Module 4</a>
        </article>
        <article class="card">
          <h3>Module 5: Speaking</h3>
          <p>Parts 1–3 fluency, coherence, and pronunciation.</p>
          <a class="btn btn-primary" href="classroom-ielts-module-5.html">Start Module 5</a>
        </article>
        <article class="card">
          <h3>Module 6: Mock Exams</h3>
          <p>Full mock test, error analysis, and final exam strategy.</p>
          <a class="btn btn-primary" href="classroom-ielts-module-6.html">Start Module 6</a>
        </article>
      </div>
    </article>
    <article class="card u-mb-1">
      <h2>Overall Progress</h2>
      <div class="progress-wrap">
        <div class="progress-bar"><div id="ielts-course-progress-fill" class="progress-fill" style="width:0%"></div></div>
        <p id="ielts-course-progress-label" class="progress-label">0 of 6 completed (0%)</p>
      </div>
      <div class="lesson-toolbar u-mt-075">
        <a class="btn btn-secondary" id="ielts-resume-link" href="classroom-ielts-module-1.html">Resume Learning</a>
        <a class="btn btn-outline-inline" href="classroom-ielts-skills.html">Skills Training</a>
      </div>
    </article>
  </div>
</main>
{WA}
{footer("IELTS Classroom", "classroom.html", "Classroom", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-home.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# IELTS SKILLS PAGE
# ═══════════════════════════════════════════════════════════════════════════════
def gen_skills():
    mc, mcd, mcl = MC["hub"]
    content = f"""{head("IELTS Skills Training | Tolbert Classroom",
        "Access IELTS skills training, practice tests, mock exams, and progress tracking in one page.", mc, mcd, mcl)}
{NAV_SKILL}
{hero("Skills Training", "IELTS Skills Training",
    "Access targeted skill modules, practice tests, and progress tracking.",
    ["🎧 Listening", "📖 Reading", "✍ Writing", "🎤 Speaking"])}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h2>Skill Modules</h2>
      <div class="grid-2">
        <article class="card">
          <h3>Listening</h3>
          <p>Strengthen listening accuracy through structured practice covering IELTS question types. Learn note-taking techniques, recognize distractors, and transfer answers correctly.</p>
          <a class="btn btn-primary" href="classroom-listening.html">Open Listening Lessons →</a>
        </article>
        <article class="card">
          <h3>Reading</h3>
          <p>Develop skimming, scanning, and evidence-based answer selection for both Academic and General Training passages.</p>
          <a class="btn btn-primary" href="classroom-reading.html">Open Reading Practice →</a>
        </article>
        <article class="card">
          <h3>Writing</h3>
          <p>Master Task 1 and Task 2 with clear structure, logical organization, and strong grammar control that meets IELTS band scoring criteria.</p>
          <a class="btn btn-primary" href="classroom-writing.html">Open Writing Lessons →</a>
        </article>
        <article class="card">
          <h3>Speaking</h3>
          <p>Improve fluency and confidence for the IELTS speaking test. Practice Parts 1, 2, and 3 with expanded ideas and refined pronunciation.</p>
          <a class="btn btn-primary" href="classroom-speaking.html">Open Speaking Practice →</a>
        </article>
      </div>
    </article>
    <article class="card u-mb-1">
      <h2>Practice &amp; Mock Exams</h2>
      <p class="section-lead">Test your knowledge with IELTS-style questions and full mock tests to measure progress and readiness.</p>
      <div class="lesson-toolbar">
        <a class="btn btn-secondary" href="classroom-practice-tests.html">Take a Practice Test</a>
        <a class="btn btn-primary" href="classroom-ielts-module-6.html">Start Mock Exam</a>
      </div>
    </article>
    <article class="card u-mb-1">
      <h2>Progress Tracking</h2>
      <div class="progress-wrap">
        <div class="progress-bar"><div id="ielts-course-progress-fill" class="progress-fill" style="width:0%"></div></div>
        <p id="ielts-course-progress-label" class="progress-label">0 of 6 completed (0%)</p>
      </div>
      <div class="lesson-toolbar u-mt-075">
        <a class="btn btn-secondary" id="ielts-resume-link" href="classroom-ielts-module-1.html">Resume Learning</a>
      </div>
    </article>
  </div>
</main>
{WA}
{footer("IELTS Skills Training", "classroom-ielts.html", "Back to IELTS Classroom", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-skills.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# CERTIFICATE REQUEST
# ═══════════════════════════════════════════════════════════════════════════════
def gen_cert():
    mc, mcd, mcl = MC["cert"]
    content = f"""{head("Request Your IELTS Completion Certificate | Tolbert Classroom",
        "Request your IELTS Completion Certificate after mock exam completion and payment verification.", mc, mcd, mcl)}
{CERT_FORM_CSS}
{NAV}
{hero("IELTS Certificate", "Request Your IELTS Completion Certificate",
    "Complete the form below after your mock exam to request your certificate.",
    ["📜 Certificate", "💵 $5 USD", "⏱ 24–48 hrs", "📧 Email or Collect"])}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <p>Students who successfully complete the IELTS Mock Examination can request their Certificate of Completion from Tolbert Innovation Hub. A certificate preparation fee of <strong>$5 USD</strong> is required.</p>
      <p>Certificates can be sent by email or collected in person. Processing time: <strong>24–48 hours</strong> after payment and verification.</p>
    </article>
    <article class="card u-mb-1">
      <h2>Payment Instructions</h2>
      <p><strong>Certificate Processing Fee:</strong> $5 USD</p>
      <ul class="resource-list">
        <li>Mobile Money</li>
        <li>Bank Transfer</li>
        <li>Office Payment</li>
      </ul>
      <p>After making payment, include your transaction ID in the form below.</p>
    </article>
    <article class="card u-mb-1" id="certificate-request-form">
      <h2>Certificate Request Form</h2>
      <form id="ielts-cert-form" class="cert-form" novalidate>
        <div class="cert-form-row">
          <label>Full Name <span style="color:#c32d3d">*</span>
            <input type="text" name="fullName" required placeholder="As it should appear on the certificate" autocomplete="name"/>
          </label>
          <label>Email Address <span style="color:#c32d3d">*</span>
            <input type="email" name="email" required placeholder="you@example.com" autocomplete="email"/>
          </label>
        </div>
        <div class="cert-form-row">
          <label>Phone Number <span style="color:#c32d3d">*</span>
            <input type="tel" name="phone" required placeholder="+231 XXX XXX XXX" autocomplete="tel"/>
          </label>
          <label>IELTS Mock Band Score <span style="color:#c32d3d">*</span>
            <select name="bandScore" required>
              <option value="">Select your band score</option>
              <option>5.0</option><option>5.5</option><option>6.0</option>
              <option>6.5</option><option>7.0</option><option>7.5</option>
              <option>8.0</option><option>8.5</option><option>9.0</option>
            </select>
          </label>
        </div>
        <div class="cert-form-row">
          <label>Date of Mock Exam <span style="color:#c32d3d">*</span>
            <input type="date" name="examDate" required/>
          </label>
          <label>Payment Method <span style="color:#c32d3d">*</span>
            <select name="paymentMethod" required>
              <option value="">Select payment method</option>
              <option>Mobile Money</option>
              <option>Bank Transfer</option>
              <option>Office Payment</option>
            </select>
          </label>
        </div>
        <div class="cert-form-row">
          <label>Transaction ID / Payment Reference <span style="color:#c32d3d">*</span>
            <input type="text" name="transactionId" required placeholder="e.g. TXN-20260001 or N/A for office payment"/>
          </label>
          <label>Preferred Certificate Delivery <span style="color:#c32d3d">*</span>
            <select name="delivery" required>
              <option value="">Select delivery method</option>
              <option>Send by Email</option>
              <option>Collect at Office</option>
            </select>
          </label>
        </div>
        <label class="full">Additional Notes (Optional)
          <textarea name="notes" rows="3" placeholder="Any additional information for the certificate team..."></textarea>
        </label>
        <p id="ielts-cert-feedback" class="cert-form-feedback" aria-live="polite"></p>
        <div class="cert-form-actions">
          <button type="submit" class="btn btn-primary">Submit Certificate Request</button>
          <p style="font-size:0.85rem;color:#5b6778;margin:0;">Processing time: 24–48 hours after payment verification.</p>
        </div>
      </form>
    </article>
  </div>
</main>
{WA}
{CERT_JS}
{footer("IELTS Certificate Request", "classroom-ielts-module-6.html", "Back to Module 6", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-ielts-certificate-request.html", content)

# ═══════════════════════════════════════════════════════════════════════════════
# SKILL MODULES: LISTENING, READING, WRITING, SPEAKING
# ═══════════════════════════════════════════════════════════════════════════════
def gen_listening():
    mc, mcd, mcl = MC["2"]
    content = f"""{head("Listening Module | Tolbert Classroom",
        "Master signpost words, note-taking shortcuts, and distractor recognition for IELTS and TOEFL listening.", mc, mcd, mcl)}
{NAV_SKILL}
{hero("Skill Module", "Listening",
    "Master signpost words, note-taking shortcuts, and distractor recognition.",
    ["🎧 Listening", "Notes", "Video", "Practice", "Quiz"])}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h3>Listening Module</h3>
      <div class="lesson-toolbar">
        <a class="btn btn-secondary" href="#notes">Lesson Notes</a>
        <a class="btn btn-secondary" href="#video">Video Session</a>
        <a class="btn btn-secondary" href="#downloads">Downloads</a>
        <a class="btn btn-secondary" href="#practice">Practice Test</a>
        <a class="btn btn-secondary" href="#quiz">Quick Quiz</a>
      </div>
    </article>
    <article class="card u-mb-1" id="notes">
      <h1 class="page-title">Listening: Lesson Notes</h1>
      <p class="section-lead">Master signpost words, note-taking shortcuts, and distractor recognition for both IELTS and TOEFL listening.</p>
      <ul class="resource-list">
        <li><strong>Signpost words:</strong> Listen for first, however, finally, in contrast, therefore.</li>
        <li><strong>Note-taking:</strong> Use abbreviations and symbols — full sentences slow you down.</li>
        <li><strong>Distractors:</strong> Speakers often mention then correct a detail — wait for the final answer.</li>
        <li><strong>Transfer accuracy:</strong> In paper mode, copy spellings carefully during transfer time.</li>
      </ul>
    </article>
    <article class="card u-mb-1" id="video">
      <h2>Video Session</h2>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/q8qmJeBxk4Q?si=F2xVQssStl1gMVl5" title="IELTS Listening Lesson" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/SXNvRcJtoPA?si=Anmxubebc8Deoc3K" title="TOEFL Listening Lectures" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </article>
    <article class="card u-mb-1" id="downloads">
      <h2>Downloadable Materials</h2>
      <ul class="resource-list">
        <li><a href="materials/toefl-study-planner.pdf" download>TOEFL Listening Weekly Planner</a></li>
        <li><a href="materials/academic-vocabulary-pack.pdf" download>Academic Listening Vocabulary (PDF)</a></li>
      </ul>
    </article>
    <article class="card u-mb-1" id="practice">
      <h2>Practice Drill + Auto Scoring</h2>
      <form class="form-stack" data-score-type="listening">
        <label>1) What is the lecture mainly about?
          <select data-correct="ecosystem-change" required>
            <option value="">Select</option>
            <option value="ecosystem-change">Ecosystem change</option>
            <option value="space-travel">Space travel</option>
            <option value="city-history">City history</option>
          </select>
        </label>
        <label>2) Why does the speaker give an example?
          <select data-correct="support-main-idea" required>
            <option value="">Select</option>
            <option value="change-topic">To change topic</option>
            <option value="support-main-idea">To support the main idea</option>
            <option value="end-lecture">To end lecture</option>
          </select>
        </label>
        <button class="btn btn-primary" type="submit">Submit Practice</button>
      </form>
      <p class="form-feedback" data-score-feedback></p>
    </article>
    <article class="card u-mb-1" id="quiz">
      <h2>Quick Exit Quiz</h2>
      <form class="form-stack">
        <label><input type="radio" name="lquiz"/> I understood signpost word strategy</label>
        <label><input type="radio" name="lquiz"/> I need more practice on note-taking</label>
        <label><input type="radio" name="lquiz"/> Distractors are still challenging</label>
      </form>
    </article>
  </div>
</main>
{WA}
{footer("Listening Module", "classroom-ielts-skills.html", "Skills Training", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-listening.html", content)

def gen_reading():
    mc, mcd, mcl = MC["3"]
    content = f"""{head("Reading Module | Tolbert Classroom",
        "Learn passage mapping, skimming/scanning, and elimination strategy for IELTS and TOEFL reading.", mc, mcd, mcl)}
{NAV_SKILL}
{hero("Skill Module", "Reading",
    "Learn passage mapping, skimming/scanning, and elimination strategy.",
    ["📖 Reading", "Notes", "Video", "Practice", "Quiz"])}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h3>Reading Module</h3>
      <div class="lesson-toolbar">
        <a class="btn btn-secondary" href="#notes">Lesson Notes</a>
        <a class="btn btn-secondary" href="#video">Video Session</a>
        <a class="btn btn-secondary" href="#downloads">Downloads</a>
        <a class="btn btn-secondary" href="#practice">Practice Test</a>
        <a class="btn btn-secondary" href="#quiz">Quick Quiz</a>
      </div>
    </article>
    <article class="card u-mb-1" id="notes">
      <h1 class="page-title">Reading: Lesson Notes</h1>
      <p class="section-lead">Learn passage mapping, skimming/scanning, and elimination strategy for IELTS and TOEFL reading.</p>
      <ul class="resource-list">
        <li>Step 1: Preview headings and question types first.</li>
        <li>Step 2: Mark keywords and synonyms in questions.</li>
        <li>Step 3: Locate evidence in the passage before selecting an answer.</li>
        <li>Step 4: Track time by passage to avoid rushing.</li>
      </ul>
    </article>
    <article class="card u-mb-1" id="video">
      <h2>Video Session</h2>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/N0ePX99GM70?si=TlXWpGgD7zJ_5aOs" title="IELTS Reading Strategy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </article>
    <article class="card u-mb-1" id="downloads">
      <h2>Downloadable Materials</h2>
      <ul class="resource-list">
        <li><a href="materials/ielts-study-planner.pdf" download>IELTS Study Planner (PDF)</a></li>
        <li><a href="materials/academic-vocabulary-pack.pdf" download>Academic Vocabulary Pack (PDF)</a></li>
      </ul>
    </article>
    <article class="card u-mb-1" id="practice">
      <h2>Timed Practice + Auto Scoring</h2>
      <p id="practice-timer-display" class="timer-display" data-duration-minutes="20">20:00</p>
      <div class="lesson-toolbar">
        <button class="btn btn-secondary" id="practice-timer-start" type="button">Start</button>
        <button class="btn btn-secondary" id="practice-timer-pause" type="button">Pause</button>
        <button class="btn btn-primary" id="practice-timer-reset" type="button">Reset</button>
      </div>
      <form class="form-stack" data-score-type="reading">
        <label>1) Best summary of paragraph 2
          <select data-correct="urban-adaptation" required>
            <option value="">Select</option>
            <option value="rural-farming">Rural farming</option>
            <option value="urban-adaptation">Urban adaptation</option>
            <option value="energy-crisis">Energy crisis</option>
          </select>
        </label>
        <button class="btn btn-primary" type="submit">Submit Practice</button>
      </form>
      <p class="form-feedback" data-score-feedback></p>
    </article>
    <article class="card u-mb-1" id="quiz">
      <h2>Quick Exit Quiz</h2>
      <form class="form-stack">
        <label><input type="radio" name="rquiz"/> I can skim for structure confidently</label>
        <label><input type="radio" name="rquiz"/> I need more paraphrase practice</label>
        <label><input type="radio" name="rquiz"/> TFNG questions are still difficult</label>
      </form>
    </article>
  </div>
</main>
{WA}
{footer("Reading Module", "classroom-ielts-skills.html", "Skills Training", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-reading.html", content)

def gen_speaking():
    mc, mcd, mcl = MC["5"]
    content = f"""{head("Speaking Module | Tolbert Classroom",
        "Build confidence with structured speaking practice for IELTS Parts 1, 2, and 3.", mc, mcd, mcl)}
{NAV_SKILL_HOME}
{hero("Skill Module", "Speaking",
    "Build confidence with a 3-part response method: idea, example, and clear conclusion.",
    ["🎤 Speaking", "Notes", "Video", "Recording", "Quiz"])}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h3>Speaking Module</h3>
      <div class="lesson-toolbar">
        <a class="btn btn-secondary" href="#notes">Lesson Notes</a>
        <a class="btn btn-secondary" href="#video">Video Session</a>
        <a class="btn btn-secondary" href="#downloads">Downloads</a>
        <a class="btn btn-secondary" href="#practice">Speaking Recording</a>
        <a class="btn btn-secondary" href="#quiz">Quick Quiz</a>
      </div>
    </article>
    <article class="card u-mb-1" id="notes">
      <h1 class="page-title">Speaking: Lesson Notes</h1>
      <p class="section-lead">Build confidence with a 3-part response method: idea, example, and clear conclusion.</p>
      <ul class="resource-list">
        <li><strong>Part 1:</strong> Brief, natural answers extended with one reason or example.</li>
        <li><strong>Part 2:</strong> Plan 4–5 keywords during the 1-minute prep, then speak for 1–2 minutes.</li>
        <li><strong>Part 3:</strong> Opinion + Reason + Example + Mini conclusion. Develop every answer.</li>
      </ul>
    </article>
    <article class="card u-mb-1" id="video">
      <h2>Video Session</h2>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/enV9ospxayg" title="IELTS Speaking Lesson" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </article>
    <article class="card u-mb-1" id="downloads">
      <h2>Downloadable Materials</h2>
      <ul class="resource-list">
        <li><a href="materials/toefl-study-planner.pdf" download>Speaking Practice Planner (PDF)</a></li>
        <li><a href="materials/academic-vocabulary-pack.pdf" download>Useful Speaking Vocabulary (PDF)</a></li>
      </ul>
    </article>
    <article class="card u-mb-1" id="practice">
      <h2>Speaking Practice Recording</h2>
      <div class="lesson-toolbar">
        <button class="btn btn-secondary" id="record-start-btn" type="button">Start Recording</button>
        <button class="btn btn-primary" id="record-stop-btn" type="button">Stop Recording</button>
      </div>
      <p id="recording-status" class="form-feedback">Click start to record your speaking response.</p>
      <audio id="recording-playback" controls aria-label="Recording playback"></audio>
      <p><a id="recording-download" href="#" download="speaking-practice.webm">Download your recording</a></p>
      <label>Or upload speaking file
        <input id="speaking-upload-input" type="file" accept="audio/*,video/*"/>
      </label>
      <p id="speaking-upload-status" class="form-feedback"></p>
    </article>
    <article class="card u-mb-1" id="quiz">
      <h2>Quick Exit Quiz</h2>
      <p>Which speaking area needs the most practice?</p>
      <form class="form-stack">
        <label><input type="radio" name="squiz"/> Fluency</label>
        <label><input type="radio" name="squiz"/> Pronunciation</label>
        <label><input type="radio" name="squiz"/> Idea organization</label>
      </form>
    </article>
  </div>
</main>
{WA}
{footer("Speaking Module", "classroom-ielts-skills.html", "Skills Training", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-speaking.html", content)

def gen_writing():
    mc, mcd, mcl = MC["4"]
    content = f"""{head("Writing Module | Tolbert Classroom",
        "Use clear structure, relevant examples, and grammar accuracy for IELTS and TOEFL writing.", mc, mcd, mcl)}
{NAV_SKILL}
{hero("Skill Module", "Writing",
    "Use clear structure (intro-body-conclusion), relevant examples, and grammar accuracy.",
    ["✍ Writing", "Notes", "Video", "Submission", "Quiz"])}
<main id="main-content" class="mod-main">
  <div class="container">
    <article class="card u-mb-1">
      <h3>Writing Module</h3>
      <div class="lesson-toolbar">
        <a class="btn btn-secondary" href="#notes">Lesson Notes</a>
        <a class="btn btn-secondary" href="#video">Video Session</a>
        <a class="btn btn-secondary" href="#downloads">Downloads</a>
        <a class="btn btn-secondary" href="#practice">Writing Submission</a>
        <a class="btn btn-secondary" href="#quiz">Quick Quiz</a>
      </div>
    </article>
    <article class="card u-mb-1" id="notes">
      <h1 class="page-title">Writing: Lesson Notes</h1>
      <p class="section-lead">Use clear structure (intro-body-conclusion), relevant examples, and grammar accuracy under time pressure.</p>
      <ul class="resource-list">
        <li><strong>Task 1:</strong> Paraphrase + overview + two detail paragraphs. Report trends, not opinions.</li>
        <li><strong>Task 2:</strong> Clear position + two body paragraphs + conclusion. Use examples to support claims.</li>
        <li><strong>Timing:</strong> 20 minutes for Task 1; 40 minutes for Task 2.</li>
        <li><strong>Vocabulary:</strong> Use academic synonyms and avoid repetition.</li>
      </ul>
    </article>
    <article class="card u-mb-1" id="video">
      <h2>Video Session</h2>
      <div class="video-wrap"><iframe src="https://www.youtube.com/embed/corABi_WgYY" title="IELTS Writing Lesson" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </article>
    <article class="card u-mb-1" id="downloads">
      <h2>Downloadable Materials</h2>
      <ul class="resource-list">
        <li><a href="materials/grammar-essentials-guide.pdf" download>Grammar Essentials Guide (PDF)</a></li>
        <li><a href="materials/academic-vocabulary-pack.pdf" download>Academic Vocabulary Pack (PDF)</a></li>
      </ul>
    </article>
    <article class="card u-mb-1" id="practice">
      <h2>Writing Submission for Feedback</h2>
      <form id="writing-feedback-form" class="form-stack">
        <label>Exam Type
          <select name="exam" required>
            <option value="">Select exam</option>
            <option value="IELTS">IELTS</option>
            <option value="TOEFL">TOEFL</option>
          </select>
        </label>
        <label>Write your response
          <textarea name="response" rows="8" required placeholder="Write your answer here..."></textarea>
        </label>
        <button class="btn btn-primary" type="submit">Submit for Feedback</button>
      </form>
      <p id="writing-feedback-status" class="form-feedback"></p>
    </article>
    <article class="card u-mb-1" id="quiz">
      <h2>Quick Exit Quiz</h2>
      <p>What should you improve next?</p>
      <form class="form-stack">
        <label><input type="radio" name="wquiz"/> Task response quality</label>
        <label><input type="radio" name="wquiz"/> Coherence and cohesion</label>
        <label><input type="radio" name="wquiz"/> Grammar and vocabulary range</label>
      </form>
    </article>
  </div>
</main>
{WA}
{footer("Writing Module", "classroom-ielts-skills.html", "Skills Training", "classroom-dashboard.html", "Dashboard")}
{TAIL}"""
    write("classroom-writing.html", content)

def gen_lesson_orientation():
    mc, mc_dark, mc_light = MC["1"]
    content = f"""{head("Lesson: IELTS Orientation | Tolbert Classroom", "Introduction to the IELTS exam — structure, band scoring, and what to expect on test day.", mc, mc_dark, mc_light)}
{NAV_COURSE}
{LESSON_BODY_CSS}
{hero("Lesson 1 · Foundation", "IELTS Orientation", "Understand the exam structure, band scoring system, and exactly what to expect before you sit the test.", [("Foundation", mc), ("Orientation", mc), ("Band Scores", mc_dark)])}
<main class="container" style="padding-top:2.5rem;padding-bottom:3rem;">
  <div class="skill-layout">
    <!-- Sidebar -->
    <aside class="lesson-sidebar-static">
      <div class="card" style="padding:1.25rem;">
        <h3 style="font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 .75rem;">Lesson Roadmap</h3>
        <ol class="roadmap">
          <li>Introduction</li>
          <li>Study content</li>
          <li>Watch the video</li>
          <li>Practice exercises</li>
          <li>Downloads</li>
          <li>Review &amp; reflect</li>
          <li>Mark complete</li>
        </ol>
        <a href="classroom-ielts.html" class="btn" style="display:block;text-align:center;margin-top:1rem;font-size:.85rem;">&#8592; Back to Module</a>
      </div>
    </aside>
    <!-- Main content -->
    <div class="lesson-large">
      <div class="card" style="padding:2rem;margin-bottom:1.5rem;">
        <h2 style="color:#0f172a;font-size:1.4rem;font-weight:800;margin:0 0 1rem;">What is IELTS?</h2>
        <p style="color:#475569;line-height:1.8;">The International English Language Testing System (IELTS) is the world's most popular English-language proficiency test for higher education and global migration. It is jointly managed by the British Council, IDP: IELTS Australia, and Cambridge Assessment English.</p>
        <p style="color:#475569;line-height:1.8;margin-top:.75rem;">There are two versions: <strong>Academic</strong> (for university admission) and <strong>General Training</strong> (for work experience, secondary education, or migration). Both versions test four skills: Listening, Reading, Writing, and Speaking.</p>
        <h3 style="color:#0f172a;font-size:1.1rem;font-weight:700;margin:1.5rem 0 .5rem;">Band Score Overview</h3>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
            <thead>
              <tr style="background:var(--mc);color:#fff;">
                <th style="padding:.6rem 1rem;text-align:left;">Band</th>
                <th style="padding:.6rem 1rem;text-align:left;">Level</th>
                <th style="padding:.6rem 1rem;text-align:left;">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.6rem 1rem;">9</td><td style="padding:.6rem 1rem;">Expert</td><td style="padding:.6rem 1rem;">Full operational command</td></tr>
              <tr style="border-bottom:1px solid #e2e8f0;background:#f8fafc;"><td style="padding:.6rem 1rem;">8–8.5</td><td style="padding:.6rem 1rem;">Very Good</td><td style="padding:.6rem 1rem;">Occasional unsystematic errors</td></tr>
              <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.6rem 1rem;">7–7.5</td><td style="padding:.6rem 1rem;">Good</td><td style="padding:.6rem 1rem;">Handles complex language well</td></tr>
              <tr style="border-bottom:1px solid #e2e8f0;background:#f8fafc;"><td style="padding:.6rem 1rem;">6–6.5</td><td style="padding:.6rem 1rem;">Competent</td><td style="padding:.6rem 1rem;">Effective command despite inaccuracies</td></tr>
              <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.6rem 1rem;">5–5.5</td><td style="padding:.6rem 1rem;">Modest</td><td style="padding:.6rem 1rem;">Partial command of the language</td></tr>
              <tr style="background:#f8fafc;"><td style="padding:.6rem 1rem;">4–4.5</td><td style="padding:.6rem 1rem;">Limited</td><td style="padding:.6rem 1rem;">Basic competence in familiar situations</td></tr>
            </tbody>
          </table>
        </div>
        <h3 style="color:#0f172a;font-size:1.1rem;font-weight:700;margin:1.5rem 0 .5rem;">Exam Structure at a Glance</h3>
        <ul style="color:#475569;line-height:2;padding-left:1.4rem;">
          <li><strong>Listening</strong> — 40 questions, 30 min + 10 min transfer</li>
          <li><strong>Reading</strong> — 40 questions, 60 min (Academic: 3 long texts; General: shorter passages)</li>
          <li><strong>Writing</strong> — 2 tasks, 60 min</li>
          <li><strong>Speaking</strong> — 3 parts, 11–14 min (face-to-face with examiner)</li>
        </ul>
      </div>
      <!-- Video -->
      <div class="card" style="padding:1.5rem;margin-bottom:1.5rem;">
        <h3 style="color:#0f172a;font-weight:700;margin:0 0 1rem;">Watch: IELTS Overview</h3>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
          <iframe src="https://www.youtube.com/embed/LDaf2Vc6T6Q" title="IELTS Orientation" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        </div>
      </div>
      <!-- Downloads -->
      <div class="card" style="padding:1.5rem;margin-bottom:1.5rem;">
        <h3 style="color:#0f172a;font-weight:700;margin:0 0 .75rem;">Study Resources</h3>
        <ul class="download-list">
          <li><a href="#">IELTS Band Score Descriptor Chart (PDF)</a></li>
          <li><a href="#">Exam Day Checklist</a></li>
          <li><a href="#">Academic vs General Training Comparison</a></li>
        </ul>
      </div>
      <!-- Complete button -->
      <div class="card" style="padding:1.5rem;text-align:center;">
        <p style="color:#475569;margin-bottom:1rem;">Finished reading? Mark this lesson as complete to track your progress.</p>
        <button class="btn" onclick="this.textContent='&#10003; Completed!';this.style.background='#16a34a';this.disabled=true;" style="font-size:1rem;padding:.75rem 2.5rem;">Mark as Complete</button>
      </div>
    </div>
  </div>
</main>
{footer("IELTS Orientation", "Skills", "classroom-skills-ielts.html", "Full Course", "classroom-course-ielts.html")}
{WA}
{TAIL}"""
    write("classroom-lesson-ielts-orientation.html", content)


def gen_lesson_listening_reading():
    mc, mc_dark, mc_light = MC["2"]
    content = f"""{head("Lesson: Listening & Reading Practice | Tolbert Classroom", "Exam-simulation practice for IELTS Listening and Reading — strategies, timing, and scoring.", mc, mc_dark, mc_light)}
{NAV_COURSE}
{LESSON_BODY_CSS}
{hero("Lesson · Listening & Reading", "Exam-Simulation Practice", "Master exam-condition Listening and Reading sessions with proven strategies for speed, accuracy, and time control.", [("Listening", mc), ("Reading", mc), ("Exam Skills", mc_dark)])}
<main class="container" style="padding-top:2.5rem;padding-bottom:3rem;">
  <div class="lesson-layout">
    <!-- Sidebar -->
    <aside class="lesson-sidebar-static">
      <div class="card" style="padding:1.25rem;">
        <h3 style="font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 .75rem;">Downloads</h3>
        <ul class="download-list">
          <li><a href="#">Practice Transcript (PDF)</a></li>
          <li><a href="#">Reading Worksheet</a></li>
          <li><a href="#">Strategy Checklist</a></li>
          <li><a href="#">Offline Practice Pack</a></li>
        </ul>
        <a href="classroom-ielts-listening.html" class="btn" style="display:block;text-align:center;margin-top:1rem;font-size:.85rem;">&#8592; Listening Module</a>
        <a href="classroom-ielts-reading.html" class="btn btn-outline" style="display:block;text-align:center;margin-top:.5rem;font-size:.85rem;">Reading Module</a>
      </div>
    </aside>
    <!-- Main content -->
    <div class="lesson-large">
      <div class="card" style="padding:2rem;margin-bottom:1.5rem;">
        <h2 style="color:#0f172a;font-size:1.4rem;font-weight:800;margin:0 0 1rem;">Listening: Strategy &amp; Flow</h2>
        <p style="color:#475569;line-height:1.8;">The IELTS Listening test has four sections and 40 questions completed in 30 minutes, with 10 minutes to transfer answers. Each section gets progressively harder — Sections 1–2 focus on social/everyday contexts; Sections 3–4 on academic settings.</p>
        <h3 style="color:#0f172a;font-size:1.05rem;font-weight:700;margin:1.25rem 0 .5rem;">Key Listening Strategies</h3>
        <ul style="color:#475569;line-height:2;padding-left:1.4rem;">
          <li>Preview questions <em>before</em> the audio plays — underline keywords.</li>
          <li>Listen for signpost words: "however," "actually," "the main point is…"</li>
          <li>Write answers on the question paper first; transfer carefully.</li>
          <li>Spelling counts — practice common IELTS vocabulary lists.</li>
        </ul>
        <h3 style="color:#0f172a;font-size:1.05rem;font-weight:700;margin:1.25rem 0 .5rem;">Reading: Strategy &amp; Flow</h3>
        <p style="color:#475569;line-height:1.8;">Academic Reading has three long texts (around 2,150–2,750 words total). You have exactly 60 minutes — no extra transfer time.</p>
        <ul style="color:#475569;line-height:2;padding-left:1.4rem;">
          <li>Skim headings and first sentences before reading questions.</li>
          <li>Use the question type to choose your reading technique (scan vs. detailed).</li>
          <li>Don't spend more than 20 minutes per passage — keep moving.</li>
          <li>True/False/Not Given: "Not Given" means the text is silent on the topic.</li>
        </ul>
      </div>
      <!-- Videos -->
      <div class="card" style="padding:1.5rem;margin-bottom:1.5rem;">
        <h3 style="color:#0f172a;font-weight:700;margin:0 0 1rem;">Listening Practice Session</h3>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
          <iframe src="https://www.youtube.com/embed/f-4FRJQtDWk" title="IELTS Listening Practice" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        </div>
      </div>
      <div class="card" style="padding:1.5rem;margin-bottom:1.5rem;">
        <h3 style="color:#0f172a;font-weight:700;margin:0 0 1rem;">Reading Practice Session</h3>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
          <iframe src="https://www.youtube.com/embed/apOCnYpR-9g" title="IELTS Reading Practice" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        </div>
      </div>
      <div class="card" style="padding:1.5rem;text-align:center;">
        <p style="color:#475569;margin-bottom:1rem;">Done with this lesson? Mark it complete to track your progress.</p>
        <button class="btn" onclick="this.textContent='&#10003; Completed!';this.style.background='#16a34a';this.disabled=true;" style="font-size:1rem;padding:.75rem 2.5rem;">Mark as Complete</button>
      </div>
    </div>
  </div>
</main>
{footer("L&R Lesson", "Listening Module", "classroom-ielts-listening.html", "Reading Module", "classroom-ielts-reading.html")}
{WA}
{TAIL}"""
    write("classroom-lesson-ielts-listening-reading.html", content)


def gen_lesson_writing_speaking():
    mc, mc_dark, mc_light = MC["4"]
    content = f"""{head("Lesson: Writing & Speaking Practice | Tolbert Classroom", "Exam-simulation practice for IELTS Writing and Speaking — task strategies, fluency drills, and scoring criteria.", mc, mc_dark, mc_light)}
{NAV_COURSE}
{LESSON_BODY_CSS}
{hero("Lesson · Writing & Speaking", "Production Skills Practice", "Build confident, examiner-ready Writing and Speaking performance through structured drills, model answers, and live feedback techniques.", [("Writing", mc), ("Speaking", mc), ("Fluency", mc_dark)])}
<main class="container" style="padding-top:2.5rem;padding-bottom:3rem;">
  <div class="lesson-layout">
    <!-- Sidebar -->
    <aside class="lesson-sidebar-static">
      <div class="card" style="padding:1.25rem;">
        <h3 style="font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 .75rem;">Downloads</h3>
        <ul class="download-list">
          <li><a href="#">Writing Task 1 Model Answers (PDF)</a></li>
          <li><a href="#">Writing Task 2 Essay Templates</a></li>
          <li><a href="#">Speaking Part 2 Cue Cards</a></li>
          <li><a href="#">Examiner Scoring Criteria</a></li>
        </ul>
        <a href="classroom-ielts-writing.html" class="btn" style="display:block;text-align:center;margin-top:1rem;font-size:.85rem;">&#8592; Writing Module</a>
        <a href="classroom-ielts-speaking.html" class="btn btn-outline" style="display:block;text-align:center;margin-top:.5rem;font-size:.85rem;">Speaking Module</a>
      </div>
    </aside>
    <!-- Main content -->
    <div class="lesson-large">
      <div class="card" style="padding:2rem;margin-bottom:1.5rem;">
        <h2 style="color:#0f172a;font-size:1.4rem;font-weight:800;margin:0 0 1rem;">Writing: Task Breakdown</h2>
        <p style="color:#475569;line-height:1.8;">The Writing section is 60 minutes with two tasks. Task 2 carries twice the weight of Task 1, so manage your time accordingly: aim for ~20 min on Task 1 and ~40 min on Task 2.</p>
        <h3 style="color:#0f172a;font-size:1.05rem;font-weight:700;margin:1.25rem 0 .5rem;">Task 1 (150+ words)</h3>
        <ul style="color:#475569;line-height:2;padding-left:1.4rem;">
          <li>Describe a graph, chart, table, diagram, or map objectively.</li>
          <li>Identify overall trend and key data points — don't list every number.</li>
          <li>Use precise vocabulary: "peaked at," "declined sharply," "remained stable."</li>
        </ul>
        <h3 style="color:#0f172a;font-size:1.05rem;font-weight:700;margin:1.25rem 0 .5rem;">Task 2 (250+ words)</h3>
        <ul style="color:#475569;line-height:2;padding-left:1.4rem;">
          <li>Structure: Introduction → Body 1 → Body 2 → Conclusion.</li>
          <li>Address <em>all parts</em> of the prompt — partial answers drop Task Achievement.</li>
          <li>Use cohesive devices: "Furthermore," "In contrast," "As a result."</li>
        </ul>
        <h3 style="color:#0f172a;font-size:1.1rem;font-weight:700;margin:1.5rem 0 .5rem;">Speaking: Part-by-Part Strategy</h3>
        <p style="color:#475569;line-height:1.8;">The Speaking test is 11–14 minutes with a real examiner. It has three parts:</p>
        <ul style="color:#475569;line-height:2;padding-left:1.4rem;">
          <li><strong>Part 1</strong> (4–5 min) — Familiar topics: home, work, studies, interests. Give extended answers, not just yes/no.</li>
          <li><strong>Part 2</strong> (3–4 min) — 1-min preparation + 2-min talk from a cue card. Use your notes fully.</li>
          <li><strong>Part 3</strong> (4–5 min) — Abstract discussion linked to Part 2 topic. Show range: speculate, compare, evaluate.</li>
        </ul>
      </div>
      <!-- Videos -->
      <div class="card" style="padding:1.5rem;margin-bottom:1.5rem;">
        <h3 style="color:#0f172a;font-weight:700;margin:0 0 1rem;">Writing Task 2 Masterclass</h3>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
          <iframe src="https://www.youtube.com/embed/1IVFRWCpNxE" title="IELTS Writing Task 2" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        </div>
      </div>
      <div class="card" style="padding:1.5rem;margin-bottom:1.5rem;">
        <h3 style="color:#0f172a;font-weight:700;margin:0 0 1rem;">Speaking Band 7–9 Techniques</h3>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
          <iframe src="https://www.youtube.com/embed/2oC-dXJUYqY" title="IELTS Speaking High Band" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        </div>
      </div>
      <div class="card" style="padding:1.5rem;text-align:center;">
        <p style="color:#475569;margin-bottom:1rem;">Done with this lesson? Mark it complete to track your progress.</p>
        <button class="btn" onclick="this.textContent='&#10003; Completed!';this.style.background='#16a34a';this.disabled=true;" style="font-size:1rem;padding:.75rem 2.5rem;">Mark as Complete</button>
      </div>
    </div>
  </div>
</main>
{footer("W&S Lesson", "Writing Module", "classroom-ielts-writing.html", "Speaking Module", "classroom-ielts-speaking.html")}
{WA}
{TAIL}"""
    write("classroom-lesson-ielts-writing-speaking.html", content)


if __name__ == "__main__":
    gen_module1()
    print("Module 1 done")
    gen_module2()
    print("Module 2 done")
    gen_module3()
    print("Module 3 done")
    gen_module4()
    print("Module 4 done")
    gen_module5()
    print("Module 5 done")
    gen_module6()
    print("Module 6 done")
    gen_module1a()
    print("Module 1a done")
    gen_module1b()
    print("Module 1b done")
    gen_ielts_home()
    print("IELTS Home done")
    gen_skills()
    print("Skills done")
    gen_cert()
    print("Cert done")
    gen_listening()
    print("Listening done")
    gen_reading()
    print("Reading done")
    gen_speaking()
    print("Speaking done")
    gen_writing()
    print("Writing done")
    gen_lesson_orientation()
    print("Lesson Orientation done")
    gen_lesson_listening_reading()
    print("Lesson L&R done")
    gen_lesson_writing_speaking()
    print("Lesson W&S done")
    print("All 18 pages generated successfully.")
