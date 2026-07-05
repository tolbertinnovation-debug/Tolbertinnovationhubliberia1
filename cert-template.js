/* ============================================================
   TIH LEARNING HUB — OFFICIAL CERTIFICATE TEMPLATE
   Shared by course-player.html and my-certificates.html.
   Renders the printable A4-landscape certificate with the official
   Tolbert Innovation Hub logo, seal, and CEO signature.
   ============================================================ */
// Official brand assets (hosted images; each has a graceful fallback)
var TIH_LOGO_URL = 'https://i.ibb.co/SXJKRq0S/Tolbert-Innovation-Logo.jpg';
var TIH_SIGNATURE_URL = 'https://i.ibb.co/ymwHr8G1/signature-3.png';

function buildCertHTML(name, title, certId, certDate) {
  var esc = function(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
  return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/>' +
    '<title>Certificate: ' + esc(title) + ' | TIH Learning Hub</title>' +
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Great+Vibes&family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>' +
    '<style>' +
    '@page{size:A4 landscape;margin:0}' +
    '*{box-sizing:border-box;margin:0;padding:0}' +
    'html,body{width:297mm;height:210mm;background:#eef1f6;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}' +
    /* Outer frame: navy band + gold hairlines */
    '.cert{width:287mm;height:200mm;position:relative;background:#fdfcf7;border:4mm solid #002868;overflow:hidden;display:flex;flex-direction:column}' +
    '.cert::before{content:"";position:absolute;inset:3mm;border:.6mm solid #c8960c;pointer-events:none;z-index:3}' +
    '.cert::after{content:"";position:absolute;inset:4.6mm;border:.2mm solid rgba(200,150,12,.55);pointer-events:none;z-index:3}' +
    /* Corner flourishes */
    '.corner{position:absolute;width:16mm;height:16mm;z-index:4}' +
    '.corner::before{content:"";position:absolute;inset:0;border-color:#c8960c;border-style:solid;border-width:0}' +
    '.tl{top:6.5mm;left:6.5mm}.tl::before{border-top-width:1mm;border-left-width:1mm}' +
    '.tr{top:6.5mm;right:6.5mm}.tr::before{border-top-width:1mm;border-right-width:1mm}' +
    '.bl{bottom:6.5mm;left:6.5mm}.bl::before{border-bottom-width:1mm;border-left-width:1mm}' +
    '.br{bottom:6.5mm;right:6.5mm}.br::before{border-bottom-width:1mm;border-right-width:1mm}' +
    /* Watermark logo */
    '.watermark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:110mm;height:110mm;object-fit:contain;opacity:.055;z-index:1;filter:grayscale(60%)}' +
    /* Header */
    '.hd{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;gap:8mm;padding:11mm 20mm 5mm;text-align:left}' +
    '.hd-logo{width:26mm;height:26mm;object-fit:contain;background:#fff;border-radius:50%;border:1mm solid #c8960c;box-shadow:0 1mm 4mm rgba(0,40,104,.18);flex-shrink:0}' +
    '.hd-logo-fb{display:none;width:26mm;height:26mm;border-radius:50%;background:#002868;color:#f5b31a;font-size:24pt;align-items:center;justify-content:center;border:1mm solid #c8960c;flex-shrink:0}' +
    '.org-name{font-family:Poppins,sans-serif;font-size:19pt;font-weight:800;color:#002868;letter-spacing:.02em;line-height:1.15}' +
    '.org-name span{color:#BF0A30}' +
    '.org-sub{font-size:7.5pt;letter-spacing:.3em;color:#6b7280;text-transform:uppercase;margin-top:1.2mm;font-weight:600}' +
    /* Title */
    '.cert-heading{position:relative;z-index:2;text-align:center;margin-top:2mm}' +
    '.cert-heading h1{font-family:"Playfair Display",Georgia,serif;font-size:26pt;font-weight:700;color:#002868;letter-spacing:.18em;text-transform:uppercase}' +
    '.cert-heading .rule{display:flex;align-items:center;gap:4mm;justify-content:center;margin-top:2.2mm;color:#c8960c}' +
    '.cert-heading .rule::before,.cert-heading .rule::after{content:"";width:52mm;height:.4mm;background:linear-gradient(90deg,transparent,#c8960c)}' +
    '.cert-heading .rule::after{background:linear-gradient(90deg,#c8960c,transparent)}' +
    '.cert-heading .rule .dia{width:2.6mm;height:2.6mm;background:#c8960c;transform:rotate(45deg)}' +
    /* Body */
    '.body{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1mm 24mm 0;text-align:center}' +
    '.certifies{font-size:10pt;color:#4b5563;font-style:italic}' +
    '.student-name{font-family:"Great Vibes",Georgia,cursive;font-size:42pt;color:#002868;line-height:1.15;margin:2mm 0 1mm}' +
    '.name-rule{width:120mm;height:.35mm;background:linear-gradient(90deg,transparent,#c8960c 25%,#c8960c 75%,transparent);margin:0 auto 3mm}' +
    '.completed{font-size:10pt;color:#4b5563;margin-bottom:2.5mm}' +
    '.course-title{font-family:"Playfair Display",Georgia,serif;font-size:16pt;font-weight:700;color:#111827;max-width:210mm;line-height:1.35}' +
    '.desc{font-size:8.5pt;color:#6b7280;margin-top:2.5mm;max-width:185mm;line-height:1.6}' +
    /* Footer */
    '.footer{position:relative;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;padding:0 22mm 10mm;flex-shrink:0}' +
    '.sig-block{width:62mm;text-align:center}' +
    '.sig-img{height:15mm;object-fit:contain;display:block;margin:0 auto -2.5mm;max-width:55mm}' +
    '.sig-line{border-bottom:.45mm solid #1f2937;margin-bottom:1.6mm}' +
    '.sig-name{font-size:10pt;font-weight:700;color:#111827;font-family:Poppins,sans-serif}' +
    '.sig-role{font-size:7.5pt;color:#6b7280;margin-top:.6mm}' +
    '.date-val{height:15mm;display:flex;align-items:flex-end;justify-content:center;font-family:"Playfair Display",Georgia,serif;font-size:13pt;font-weight:700;color:#111827;padding-bottom:1.6mm;letter-spacing:.02em}' +
    /* Gold embossed seal */
    '.seal{width:30mm;height:30mm;border-radius:50%;background:radial-gradient(circle at 35% 30%,#f3d27a,#c8960c 58%,#a87a08);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#4a3403;text-align:center;padding:0 3mm;box-shadow:0 1.5mm 4mm rgba(168,122,8,.45),inset 0 0 0 1mm rgba(255,255,255,.35);position:relative}' +
    '.seal::before{content:"";position:absolute;inset:2.2mm;border:.35mm dashed rgba(74,52,3,.55);border-radius:50%}' +
    '.seal .s-star{font-size:10pt;line-height:1}' +
    '.seal .s-t1{font-size:5pt;line-height:1.3;font-weight:800;letter-spacing:.14em;margin-top:.8mm}' +
    '.seal .s-t2{font-size:4.6pt;font-weight:700;letter-spacing:.1em;opacity:.85}' +
    '.seal .s-check{font-size:8.5pt;font-weight:800;margin-top:.6mm}' +
    /* Meta strip */
    '.meta-strip{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;gap:5mm;padding:0 20mm 7mm;font-size:7.2pt;color:#6b7280}' +
    '.meta-strip b{color:#002868;font-size:7.8pt;letter-spacing:.06em}' +
    '.meta-strip .sep{color:#c8960c}' +
    '.print-btn{position:fixed;top:15px;right:15px;background:#002868;color:#fff;border:none;padding:10px 22px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:Poppins,sans-serif;box-shadow:0 4px 12px rgba(0,40,104,.3);z-index:9999}' +
    '.print-btn:hover{background:#001a45}' +
    '.print-note{position:fixed;top:60px;right:15px;background:#fffbeb;border:1px solid #f59e0b;color:#92400e;padding:8px 14px;border-radius:8px;font-size:12px;font-family:Inter,sans-serif;max-width:240px;line-height:1.5;z-index:9999}' +
    '@media print{.print-btn,.print-note{display:none!important}html,body{width:297mm;height:210mm;background:#fff}}' +
    '</style></head><body>' +
    '<button class="print-btn" onclick="window.print()">&#11015; Save as PDF / Print</button>' +
    '<div class="print-note">&#128161; To save as PDF: click the button, then choose "Save as PDF" as the printer.</div>' +
    '<div class="cert">' +
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
    '<div class="certifies">This is to proudly certify that</div>' +
    '<div class="student-name">' + esc(name) + '</div>' +
    '<div class="name-rule"></div>' +
    '<div class="completed">has successfully completed all lessons, assessments and requirements of</div>' +
    '<div class="course-title">' + esc(title) + '</div>' +
    '<div class="desc">Awarded in recognition of dedication, skill development and successful mastery of the course curriculum through the TIH Learning Hub, the official learning platform of Tolbert Innovation Hub.</div>' +
    '</div>' +
    '<div class="footer">' +
    '<div class="sig-block">' +
    '<img class="sig-img" src="' + TIH_SIGNATURE_URL + '" alt="Signature of Samuel S. Tolbert" onerror="this.style.display=\'none\'"/>' +
    '<div class="sig-line"></div>' +
    '<div class="sig-name">Samuel S. Tolbert</div>' +
    '<div class="sig-role">Chief Executive Officer, Tolbert Innovation Hub</div>' +
    '</div>' +
    '<div class="seal"><span class="s-star">&#9733;</span><span class="s-t1">TOLBERT INNOVATION HUB</span><span class="s-t2">OFFICIAL SEAL &middot; LIBERIA</span><span class="s-check">&#10003; VERIFIED</span></div>' +
    '<div class="sig-block">' +
    '<div class="date-val">' + esc(certDate) + '</div>' +
    '<div class="sig-line"></div>' +
    '<div class="sig-name">Date of Issue</div>' +
    '<div class="sig-role">Tolbert Innovation Hub &middot; Monrovia, Liberia</div>' +
    '</div>' +
    '</div>' +
    '<div class="meta-strip">' +
    '<span>Credential ID: <b>' + esc(certId) + '</b></span><span class="sep">&#9670;</span>' +
    '<span>Independently verify this certificate at <b>tolbertinnovationhub.org/certificate-verify.html?id=' + esc(certId) + '</b></span>' +
    '</div>' +
    '<div style="position:relative;z-index:2;text-align:center;font-size:6pt;color:#9aa1ad;padding:0 20mm 6mm;letter-spacing:.02em;">Issued by Tolbert Innovation Hub only after completion and administrator approval. This credential is recorded in the official TIH register and can be verified by anyone using the Credential ID above.</div>' +
    '</div>' +
    '<script>window.onload=function(){setTimeout(function(){window.print();},900)};<\/script>' +
    '</body></html>';
}


