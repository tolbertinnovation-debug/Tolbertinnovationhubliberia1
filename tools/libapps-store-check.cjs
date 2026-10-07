const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

(async () => {
  const root = process.cwd();
  const server = http.createServer((req, res) => {
    let name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (name === '/libapps') name = '/libapps.html';
    const file = path.resolve(root, '.' + name);
    if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
    const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.png':'image/png' };
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({headless:true,executablePath:process.env.CHROME_BIN || '/usr/bin/google-chrome'});
  fs.mkdirSync('/tmp/libapps-preview', {recursive:true});
  try {
    const page = await browser.newPage();
    await page.route('**/libapps-db.js*', route => route.fulfill({contentType:'text/javascript',body:'window.LibApps={browse:()=>Promise.resolve([]),categories:()=>Promise.resolve([]),session:()=>null,canUpload:()=>false};'}));
    for (const width of [390, 1440]) {
      await page.setViewportSize({width,height:900});
      await page.goto('http://127.0.0.1:' + server.address().port + '/libapps');
      await page.waitForFunction(() => document.querySelector('#laCount').textContent.includes('2 official apps'));
      assert.equal(await page.locator('[data-official-app]:visible').count(), 2);
      assert.equal(await page.locator('.la-empty').count(), 0);
      assert.equal(await page.locator('body').evaluate(el => el.scrollWidth > innerWidth), false, 'Horizontal overflow');
      await page.screenshot({path:'/tmp/libapps-preview/store-' + width + '.png',fullPage:true});
      await page.locator('#laSearch').fill('Windows');
      await page.waitForFunction(() => document.querySelector('[data-search*="android"]').hidden);
      assert.equal(await page.locator('[data-official-app]:visible').count(), 1);
      await page.locator('#laSearch').fill('no-such-app');
      await page.waitForFunction(() => document.querySelector('[data-search*="windows"]').hidden);
      assert.equal(await page.locator('[data-official-app]:visible').count(), 0);
      await page.locator('#laSearch').fill('');
      await page.waitForFunction(() => !document.querySelector('[data-search*="windows"]').hidden);
      await page.locator('.la-install summary').first().click();
      assert.equal(await page.locator('.la-install').first().getAttribute('open'), '');
      await page.evaluate(() => document.documentElement.dataset.theme = 'dark');
      await page.screenshot({path:'/tmp/libapps-preview/store-dark-' + width + '.png',fullPage:true});
      const windows = await page.locator('a.la-download').nth(1).getAttribute('href');
      const response = await page.request.get('http://127.0.0.1:' + server.address().port + '/' + windows);
      assert.equal(response.status(), 200);
      const bytes = await response.body();
      assert.equal(bytes.subarray(0, 2).toString(), 'MZ');
    }
    console.log('LibApps: mobile/desktop layout, search, empty state, installation guide, dark theme and Windows installer passed.');
  } finally { await browser.close(); server.closeAllConnections(); server.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
