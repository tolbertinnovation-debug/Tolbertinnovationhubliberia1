'use strict';
function transformPreviewHtml(html, name) {
  html = html.replace(/<head([^>]*)>/i, '<head$1><script src="/hub-neon-guard.js"></script>');
  // Load after the final persistence module, before any consumer inline scripts.
  const moduleName = /src=["'][^"']*hub-db\.js/.test(html) ? 'hub-db' : 'hub-cloud';
  const pattern = new RegExp('(<script\\b[^>]*src=["\'][^"\']*' + moduleName + '\\.js[^"\']*["\'][^>]*>\\s*</script>)', 'i');
  html = html.replace(pattern, '$1<script src="/hub-neon-preview.js"></script>');
  if (name === 'course-player.html') {
    const marker = 'function start() {\n      if (typeof WassceCourse';
    if (!html.includes(marker)) throw Error('Course bootstrap changed; preview review required');
    html = html.replace(marker, "function start(verified) {\n      if (verified !== true) { HubDB.verifyStudentSession().then(function (student) { if (student) start(true); else location.replace('/hub-dashboard?next=' + encodeURIComponent(bootId)); }).catch(function () { location.replace('/hub-dashboard'); }); return; }\n      if (typeof WassceCourse");
  }
  if (name === 'my-certificates.html') {
    html = html.replace('</head>', '<style>@media(max-width:600px){.locked-grid{grid-template-columns:minmax(0,1fr)}.locked-info,.locked-title,.cert-card{min-width:0;overflow-wrap:anywhere}.locked-card{min-width:0;max-width:100%}}</style></head>');
    // Existing handlers stay global inside an async classic script; only its startup is deferred.
    const marker = "  var session = (typeof HubDB !== 'undefined') ? HubDB.studentSession() : null;";
    if (!html.includes(marker)) throw Error('Certificate bootstrap changed; preview review required');
    html = html.replace(marker, "  await HubDB.verifyStudentSession();\n" + marker);
    const index = html.indexOf('  await HubDB.verifyStudentSession();');
    const start = html.lastIndexOf('<script', index), close = html.indexOf('>', start), end = html.indexOf('</script>', index);
    const body = html.slice(close + 1, end);
    const names = [...body.matchAll(/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g)].map(m => m[1]);
    html = html.slice(0, close + 1) + '(async function(){\n' + body + '\n' + names.map(n=>'window.'+n+'='+n+';').join('\n') + '\n})().catch(function(){location.replace("/hub-dashboard?next=my-certificates");});' + html.slice(end);
  }
  return html;
}
module.exports = {transformPreviewHtml};
