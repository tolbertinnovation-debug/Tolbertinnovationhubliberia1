/* ============================================================
   TIH LEARNING HUB, OFFICIAL CERTIFICATE TEMPLATE
   Shared by course-player.html and my-certificates.html.
   Renders the printable A4-landscape certificate with the official
   Tolbert Innovation Hub logo, seal, and CEO signature.

   The backdrop borrows the home-page hero: drifting blue and rose
   radial washes, soft blurred orbs and the faint circuit pattern.
   Those layers are painted statically so they survive printing, and
   the motion is added on screen only, then switched off under
   @media print and prefers-reduced-motion.
   ============================================================ */
var TIH_LOGO_URL = 'assets/tih-logo.png';
// Self-hosted first. The signature previously lived only on a third-party image
// host, so every certificate lost its signature if that host was unreachable.
// The remote copy stays as a fallback until assets/tih-signature.png is added.
var TIH_SIGNATURE_URL = 'assets/tih-signature.png';
var TIH_SIGNATURE_FALLBACK = 'https://i.ibb.co/ymwHr8G1/signature-3.png';

// Same circuit motif as .hero-modern::before, redrawn at a lighter stroke so it
// reads as security tint on paper rather than as decoration.
var TIH_CERT_PATTERN = "url(\"data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23002868' stroke-opacity='0.05' stroke-width='1.6'%3E%3Cpath d='M6 6h24v24H6zM14 14h8v8h-8z'/%3E%3Cpath d='M42 42h24v24H42zM50 50h8v8h-8z'/%3E%3Cpath d='M42 6h24M42 14h16M42 22h24M6 42h24M6 50h16M6 58h24'/%3E%3C/g%3E%3C/svg%3E\")";

/* ---------------------------------------------------------------
   Every certificate carries a rosette and a fingerprint derived from
   its own Credential ID, so no two sheets are identical and a copied
   design cannot be paired with a different ID without the mismatch
   showing. Both are pure functions of the ID: reissuing the same
   credential reproduces the same mark exactly.
   --------------------------------------------------------------- */
/* Facts printed under the course title. Only figures that can be stated
   accurately from the course object: module and lesson counts are counted
   directly, duration and level are the course's own. The video count is
   deliberately excluded, because TIH_TOPIC_VIDEOS overrides lesson.v at
   runtime and counting lesson.v would understate it. */
function tihCourseFacts(course) {
  if (!course) return null;
  var mods = course.modules || [], lessons = 0;
  for (var i = 0; i < mods.length; i++) lessons += (mods[i].lessons || []).length;
  var bits = [];
  if (mods.length) bits.push(mods.length + (mods.length === 1 ? ' Module' : ' Modules'));
  if (lessons)     bits.push(lessons + (lessons === 1 ? ' Lesson' : ' Lessons'));
  if (course.duration) bits.push(String(course.duration));
  if (course.level)    bits.push(String(course.level) + ' Level');
  return bits.length ? bits : null;
}

function tihCertHash(str) {
  var h = 0x811c9dc5;                       // FNV-1a, 32-bit
  for (var i = 0; i < String(str).length; i++) {
    h ^= String(str).charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h >>> 0;
}

// A hypotrochoid, the curve engine-turning machines cut into share
// certificates and banknotes. The ID picks the gear ratio and pen offset.
function tihGuillochePath(seed, R, cx, cy, turns) {
  var r = 3 + (seed % 7);                   // inner gear teeth
  var d = 0.45 + ((seed >>> 3) % 40) / 100; // pen offset, 0.45..0.84
  var pts = [], steps = 320 * turns;
  for (var i = 0; i <= steps; i++) {
    var t = (i / steps) * turns * 2 * Math.PI;
    var k = (R - r) / r;
    var x = cx + (R - r) * Math.cos(t) + R * d * Math.cos(k * t);
    var y = cy + (R - r) * Math.sin(t) - R * d * Math.sin(k * t);
    pts.push((i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1));
  }
  return pts.join('');
}

function tihRosetteSVG(certId) {
  var seed = tihCertHash(certId), S = 200, c = S / 2;
  var rings = [
    { R: 92, w: 0.5,  o: 0.34, s: seed },
    { R: 74, w: 0.42, o: 0.26, s: (seed >>> 5) ^ 0x9e37 },
    { R: 56, w: 0.36, o: 0.20, s: (seed >>> 11) ^ 0x85eb }
  ], out = '';
  for (var i = 0; i < rings.length; i++) {
    var g = rings[i];
    out += '<path d="' + tihGuillochePath(g.s, g.R, c, c, 5) + '" fill="none" stroke="#c8960c" ' +
           'stroke-width="' + g.w + '" stroke-opacity="' + g.o + '"/>';
  }
  return '<svg class="rosette" viewBox="0 0 ' + S + ' ' + S + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + out + '</svg>';
}

// Grouped hex digest shown beside the QR. Not a secret, just a short
// human-comparable restatement of the ID that is awkward to fake by hand.
function tihFingerprint(certId) {
  var a = tihCertHash(certId), b = tihCertHash(certId + '\u00a7tih');
  var hex = function (n) { return ('0000' + (n & 0xffff).toString(16).toUpperCase()).slice(-4); };
  return hex(a >>> 16) + '\u00b7' + hex(a) + '\u00b7' + hex(b >>> 16);
}

// SVG so it stays sharp at any print resolution. Absent library -> no QR,
// and the printed credential ID still carries the verification.
function tihVerifyQR(url) {
  if (typeof qrcode !== 'function') return '';
  try {
    var qr = qrcode(0, 'M');
    qr.addData(url);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  } catch (e) { return ''; }
}

function buildCertHTML(name, title, certId, certDate, course) {
  var esc = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var facts = tihCourseFacts(course);
  var verifyUrl = 'https://tolbertinnovationhub.org/certificate-verify?id=' + encodeURIComponent(certId);
  var qrSvg = tihVerifyQR(verifyUrl);
  var micro = '';
  for (var i = 0; i < 26; i++) micro += 'TOLBERT INNOVATION HUB &middot; VERIFIED CREDENTIAL &middot; ';

  return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/>' +
  '<title>Certificate: ' + esc(title) + ' | TIH Learning Hub</title>' +
  '<link href="assets/tih-cert-fonts.css" rel="stylesheet"/>' +
  // The faces are mirrored into assets/fonts. A certificate has to look the same
  // offline, behind a restrictive network and years from now, so it no longer
  // depends on Google Fonts being reachable at the moment it is printed.

  '<style>' + `
@page{size:A4 landscape;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:297mm;height:210mm;background:#e8edf5;display:flex;align-items:center;justify-content:center;
  font-family:Inter,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}

/* ---- sheet + frame ---------------------------------------------------- */
.cert{width:287mm;height:200mm;position:relative;overflow:hidden;display:flex;flex-direction:column;
  background:#fffdf8;border:4mm solid #002868;box-shadow:0 6mm 18mm rgba(11,31,58,.22)}
.cert::before{content:"";position:absolute;inset:2.6mm;border:.7mm solid #c8960c;pointer-events:none;z-index:6}
.cert::after{content:"";position:absolute;inset:4.4mm;border:.22mm solid rgba(200,150,12,.5);pointer-events:none;z-index:6}
.frame-red{position:absolute;inset:5.6mm;border:.2mm solid rgba(227,30,36,.22);pointer-events:none;z-index:6}

/* ---- hero backdrop, painted for print, animated on screen ------------- */
.wash{position:absolute;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(ellipse 90% 70% at 86% 8%, rgba(190,221,255,.34) 0%, transparent 58%),
    radial-gradient(ellipse 70% 60% at 4% 96%, rgba(255,205,208,.30) 0%, transparent 58%),
    linear-gradient(160deg,#fffefb 0%,#fbfdff 55%,#fffdf6 100%);
  background-size:160% 160%,160% 160%,100% 100%;
  animation:hmDrift 16s ease-in-out infinite alternate}
@keyframes hmDrift{0%{background-position:0% 0%,100% 100%,0 0}100%{background-position:100% 40%,0% 60%,0 0}}
.pattern{position:absolute;inset:0;z-index:0;pointer-events:none;background:${TIH_CERT_PATTERN}}
.orb{position:absolute;border-radius:50%;filter:blur(58px);pointer-events:none;z-index:0}
.o1{width:92mm;height:92mm;background:#9cc4ff;opacity:.22;top:-30mm;right:2%;animation:hmBob 11s ease-in-out infinite alternate}
.o2{width:62mm;height:62mm;background:#ffb3b6;opacity:.20;bottom:-18mm;left:-12mm;animation:hmBob 13s 1s ease-in-out infinite alternate-reverse}
.o3{width:46mm;height:46mm;background:#cfe4ff;opacity:.18;top:6mm;left:16%;animation:hmBob 9s .5s ease-in-out infinite alternate}
@keyframes hmBob{from{transform:translateY(-4mm)}to{transform:translateY(5mm)}}
.watermark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:112mm;height:112mm;
  object-fit:contain;opacity:.05;z-index:1;filter:grayscale(60%)}

/* ---- corner flourishes ------------------------------------------------ */
.corner{position:absolute;width:17mm;height:17mm;z-index:5}
.corner::before{content:"";position:absolute;inset:0;border-color:#c8960c;border-style:solid;border-width:0}
.corner::after{content:"";position:absolute;width:2.4mm;height:2.4mm;background:#c8960c;transform:rotate(45deg)}
.tl{top:7.5mm;left:7.5mm}.tl::before{border-top-width:1mm;border-left-width:1mm}.tl::after{top:3.4mm;left:3.4mm}
.tr{top:7.5mm;right:7.5mm}.tr::before{border-top-width:1mm;border-right-width:1mm}.tr::after{top:3.4mm;right:3.4mm}
.bl{bottom:7.5mm;left:7.5mm}.bl::before{border-bottom-width:1mm;border-left-width:1mm}.bl::after{bottom:3.4mm;left:3.4mm}
.br{bottom:7.5mm;right:7.5mm}.br::before{border-bottom-width:1mm;border-right-width:1mm}.br::after{bottom:3.4mm;right:3.4mm}

/* ---- header ----------------------------------------------------------- */
.hd{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;gap:7mm;padding:8mm 20mm 0;text-align:left}
.hd-logo{width:25mm;height:25mm;object-fit:contain;background:#fff;border-radius:50%;border:.9mm solid #c8960c;
  box-shadow:0 1mm 4mm rgba(0,40,104,.18);flex-shrink:0}
.hd-logo-fb{display:none;width:25mm;height:25mm;border-radius:50%;background:#002868;color:#f5b31a;font-size:24pt;
  align-items:center;justify-content:center;border:.9mm solid #c8960c;flex-shrink:0}
.org-name{font-family:Poppins,sans-serif;font-size:18.5pt;font-weight:800;color:#002868;letter-spacing:.02em;line-height:1.12}
.org-name span{color:#E31E24}
.org-sub{font-size:7pt;letter-spacing:.32em;color:#6b7280;text-transform:uppercase;margin-top:1.4mm;font-weight:600}

/* ---- title ------------------------------------------------------------ */
.cert-heading{position:relative;z-index:2;text-align:center;margin-top:3mm}
.cert-heading h1{font-family:"Playfair Display",Georgia,serif;font-size:27pt;font-weight:700;color:#002868;
  letter-spacing:.19em;text-transform:uppercase;line-height:1}
.rule{display:flex;align-items:center;gap:3.5mm;justify-content:center;margin-top:2.6mm;color:#c8960c}
.rule::before,.rule::after{content:"";width:54mm;height:.4mm;background:linear-gradient(90deg,transparent,#c8960c)}
.rule::after{background:linear-gradient(90deg,#c8960c,transparent)}
.rule .dia{width:2.6mm;height:2.6mm;background:#c8960c;transform:rotate(45deg)}

/* ---- body ------------------------------------------------------------- */
.body{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:0 26mm;text-align:center}
.certifies{font-size:7.6pt;letter-spacing:.26em;text-transform:uppercase;color:#7a8699;font-weight:600}
.student-name{font-family:"Great Vibes",Georgia,cursive;font-size:40pt;color:#002868;line-height:1.1;margin:2mm 0 1mm}
.name-rule{width:132mm;height:.35mm;background:linear-gradient(90deg,transparent,#c8960c 22%,#c8960c 78%,transparent);margin:0 auto 4mm}
.completed{font-size:9.5pt;color:#4b5563;margin-bottom:3mm}
.course-title{font-family:"Playfair Display",Georgia,serif;font-size:17pt;font-weight:700;color:#0f1b2e;
  max-width:210mm;line-height:1.32}
.desc{font-size:8pt;color:#6b7280;margin-top:3mm;max-width:180mm;line-height:1.62}
.facts{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:0 3mm;margin-top:2.6mm;font-size:7.4pt;font-weight:600;letter-spacing:.1em;color:#54627a}
.facts i{font-style:normal;color:#c8960c;font-weight:400}

/* ---- footer ----------------------------------------------------------- */
.footer{position:relative;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;
  padding:0 24mm 3mm;flex-shrink:0}
.sig-block{width:64mm;text-align:center}
.sig-img{height:15mm;object-fit:contain;display:block;margin:0 auto -2.5mm;max-width:56mm}
.sig-line{border-bottom:.45mm solid #1f2937;margin-bottom:1.8mm}
.sig-name{font-size:10pt;font-weight:700;color:#111827;font-family:Poppins,sans-serif}
.sig-role{font-size:7.2pt;color:#6b7280;margin-top:.7mm}
.date-val{height:15mm;display:flex;align-items:flex-end;justify-content:center;font-family:"Playfair Display",Georgia,serif;
  font-size:13pt;font-weight:700;color:#111827;padding-bottom:1.8mm;letter-spacing:.02em}

/* Seal on a guilloche rosette, the fine concentric ruling of security print */
.seal-wrap{position:relative;display:flex;align-items:center;justify-content:center;width:30mm;height:30mm;flex-shrink:0;margin-bottom:2mm}
.rosette{position:absolute;inset:-7mm;width:auto;height:auto;pointer-events:none;overflow:visible;opacity:.85}
.seal{position:relative;width:30mm;height:30mm;border-radius:50%;
  background:radial-gradient(circle at 35% 30%,#f3d27a,#c8960c 58%,#a87a08);
  display:flex;flex-direction:column;align-items:center;justify-content:center;color:#4a3403;text-align:center;padding:0 3mm;
  box-shadow:0 1.5mm 4mm rgba(168,122,8,.45),inset 0 0 0 1mm rgba(255,255,255,.35)}
.seal::before{content:"";position:absolute;inset:2.2mm;border:.35mm dashed rgba(74,52,3,.55);border-radius:50%}
.seal .s-star{font-size:10pt;line-height:1}
.seal .s-t1{font-size:5pt;line-height:1.3;font-weight:800;letter-spacing:.14em;margin-top:.8mm}
.seal .s-t2{font-size:4.6pt;font-weight:700;letter-spacing:.1em;opacity:.85}
.seal .s-check{font-size:8.5pt;font-weight:800;margin-top:.6mm}

/* ---- security microtext + credential strip ---------------------------- */
.microtext{position:relative;z-index:2;text-align:center;font-size:3.5pt;letter-spacing:.2em;
  color:rgba(0,40,104,.28);white-space:nowrap;overflow:hidden;padding:0 30mm;text-transform:uppercase;margin-bottom:2mm}
.verify-bar{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;gap:4mm;
  padding:0 20mm 3mm}
.qr-box{display:flex;flex-direction:column;align-items:center;gap:.8mm;flex-shrink:0}
.qr-box svg{width:16mm;height:16mm;display:block;shape-rendering:crispEdges}
.qr-cap{font-size:4.6pt;letter-spacing:.14em;text-transform:uppercase;color:#7a8699;font-weight:700}
.verify-text{font-size:7pt;color:#6b7280;line-height:1.55;text-align:left}
.verify-text b{color:#002868;font-size:7.6pt;letter-spacing:.06em}
.verify-text .fp{font-size:6.4pt;color:#8b93a3;letter-spacing:.08em}
.verify-text .fp b{color:#7a6a2e;font-size:6.6pt}
.fineprint{position:relative;z-index:2;text-align:center;font-size:5.8pt;color:#9aa1ad;padding:0 20mm 4mm;letter-spacing:.02em}

/* ---- screen chrome ---------------------------------------------------- */
.print-btn{position:fixed;top:15px;right:15px;background:#002868;color:#fff;border:none;padding:10px 22px;border-radius:8px;
  font-size:14px;font-weight:700;cursor:pointer;font-family:Poppins,sans-serif;box-shadow:0 4px 12px rgba(0,40,104,.3);z-index:9999}
.print-btn:hover{background:#001a45}
.print-note{position:fixed;top:60px;right:15px;background:#fffbeb;border:1px solid #f59e0b;color:#92400e;padding:8px 14px;
  border-radius:8px;font-size:12px;font-family:Inter,sans-serif;max-width:240px;line-height:1.5;z-index:9999}

/* Motion is decoration only: the printed sheet and reduced-motion users get
   the same layout with every layer held still. */
@media print{.print-btn,.print-note{display:none!important}
  html,body{width:297mm;height:210mm;background:#fff}
  .cert{box-shadow:none}
  .wash,.orb{animation:none!important}}
@media (prefers-reduced-motion:reduce){.wash,.orb{animation:none!important}}
` + '</style></head><body>' +
  '<button class="print-btn" onclick="window.print()">&#11015; Save as PDF / Print</button>' +
  '<div class="print-note">&#128161; To save as PDF: click the button, then choose "Save as PDF" as the printer.</div>' +
  '<div class="cert">' +
    '<div class="wash"></div><div class="pattern"></div>' +
    '<div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div>' +
    '<div class="frame-red"></div>' +
    '<div class="corner tl"></div><div class="corner tr"></div><div class="corner bl"></div><div class="corner br"></div>' +
    '<img class="watermark" src="' + TIH_LOGO_URL + '" alt="" onerror="this.style.display=\'none\'"/>' +
    '<div class="hd">' +
      '<img class="hd-logo" src="' + TIH_LOGO_URL + '" alt="Tolbert Innovation Hub logo" onerror="this.style.display=\'none\';var f=document.getElementById(\'logoFb\');if(f)f.style.display=\'flex\'"/>' +
      '<span class="hd-logo-fb" id="logoFb">&#127891;</span>' +
      '<div><div class="org-name">TOLBERT <span>INNOVATION</span> HUB</div>' +
      '<div class="org-sub">TIH Learning Hub &middot; Monrovia, Liberia</div></div>' +
    '</div>' +
    '<div class="cert-heading"><h1>Certificate of Completion</h1>' +
      '<div class="rule"><span class="dia"></span></div></div>' +
    '<div class="body">' +
      '<div class="certifies">This is to certify that</div>' +
      '<div class="student-name">' + esc(name) + '</div>' +
      '<div class="name-rule"></div>' +
      '<div class="completed">has successfully completed all lessons, assessments and requirements of</div>' +
      '<div class="course-title">' + esc(title) + '</div>' +
      (facts ? '<div class="facts">' + facts.map(esc).join('<i>&#9670;</i>') + '</div>' : '') +
      '<div class="desc">Awarded in recognition of dedication, skill development and successful mastery of the course curriculum through the TIH Learning Hub, the official learning platform of Tolbert Innovation Hub.</div>' +
    '</div>' +
    '<div class="footer">' +
      '<div class="sig-block">' +
        '<img class="sig-img" src="' + TIH_SIGNATURE_URL + '" alt="Signature of Samuel S. Tolbert" onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src=\'' + TIH_SIGNATURE_FALLBACK + '\';}else{this.style.display=\'none\';}"/>' +
        '<div class="sig-line"></div>' +
        '<div class="sig-name">Samuel S. Tolbert</div>' +
        '<div class="sig-role">Chief Executive Officer, Tolbert Innovation Hub</div>' +
      '</div>' +
      '<div class="seal-wrap">' + tihRosetteSVG(certId) +
        '<div class="seal"><span class="s-star">&#9733;</span><span class="s-t1">TOLBERT INNOVATION HUB</span>' +
        '<span class="s-t2">OFFICIAL SEAL &middot; LIBERIA</span><span class="s-check">&#10003; VERIFIED</span></div>' +
      '</div>' +
      '<div class="sig-block">' +
        '<div class="date-val">' + esc(certDate) + '</div>' +
        '<div class="sig-line"></div>' +
        '<div class="sig-name">Date of Issue</div>' +
        '<div class="sig-role">Tolbert Innovation Hub &middot; Monrovia, Liberia</div>' +
      '</div>' +
    '</div>' +
    '<div class="microtext">' + micro + '</div>' +
    '<div class="verify-bar">' +
      (qrSvg ? '<div class="qr-box">' + qrSvg + '<span class="qr-cap">Scan to verify</span></div>' : '') +
      '<div class="verify-text">' +
        '<div>Credential ID: <b>' + esc(certId) + '</b></div>' +
        '<div>Verify at <b>tolbertinnovationhub.org/certificate-verify</b></div>' +
        '<div class="fp">Security fingerprint <b>' + tihFingerprint(certId) + '</b></div>' +
      '</div>' +
    '</div>' +
    '<div class="fineprint">Issued by Tolbert Innovation Hub only after completion and administrator approval. This credential is recorded in the official TIH register and can be verified by anyone using the Credential ID above.</div>' +
  '</div>' +
  '<script>window.onload=function(){setTimeout(function(){window.print();},900)};<\/script>' +
  '</body></html>';
}
