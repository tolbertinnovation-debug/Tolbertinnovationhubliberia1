const {test,expect,_electron}=require('@playwright/test');const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
let electron,page,temp,browser;
const launchOptions=()=>({...(process.env.TIH_PACKAGED_EXE?{executablePath:process.env.TIH_PACKAGED_EXE}:{}),args:[...(process.env.TIH_PACKAGED_EXE?[]:['.']),`--user-data-dir=${temp}`]});
test.beforeEach(async({playwright})=>{if(process.env.TIH_ELECTRON_TEST){temp=fs.mkdtempSync(path.join(os.tmpdir(),'tih-desktop-'));electron=await _electron.launch(launchOptions());page=await electron.firstWindow();}else{browser=await playwright.chromium.launch(process.env.PM_CHROMIUM?{executablePath:process.env.PM_CHROMIUM,args:["--no-sandbox"]}:{});page=await browser.newPage();await page.goto('http://127.0.0.1:4173');}await expect(page.getByRole('heading',{name:'A world of learning. A space of your own.'})).toBeVisible();});
test.afterEach(async()=>{if(electron){await electron.close();electron=null;}else if(browser){await browser.close();browser=null;}});
test('catalog, saved courses, notes and profile survive a restart',async()=>{await page.screenshot({path:'test-results/01-dashboard.png',fullPage:true});await page.getByLabel('Search courses',{exact:true}).fill('QuickBooks');await expect(page.locator('.course-card')).toHaveCount(1);await page.getByRole('button',{name:'Save QuickBooks Accounting',exact:true}).click();await page.getByRole('button',{name:'Saved courses',exact:true}).click();await expect(page.locator('.course-card')).toHaveCount(1);await page.getByRole('button',{name:'Create a note',exact:true}).click();await page.getByLabel('Note title',{exact:true}).fill('My first learning plan');await page.getByLabel('Note text',{exact:true}).fill('Practice a little every day. Review what I learned.');await expect(page.locator('#word-count')).toHaveText('9 words');await page.screenshot({path:'test-results/03-notebook.png',fullPage:true});await page.getByRole('button',{name:'Settings & help',exact:true}).click();await page.getByLabel('What should we call you?').fill('Samuel');await page.getByRole('button',{name:'Save profile',exact:true}).click();await expect(page.locator('#toast')).toHaveText('Your profile is saved.');if(electron){await expect.poll(()=>JSON.parse(fs.readFileSync(path.join(temp,'study-workspace.json'),'utf8')).name).toBe('Samuel');await electron.close();electron=await _electron.launch(launchOptions());page=await electron.firstWindow();}else await page.reload();await expect(page.locator('#profile-name')).toHaveText('Samuel');await page.getByRole('button',{name:'My notebook',exact:true}).click();await expect(page.getByLabel('Note title',{exact:true})).toHaveValue('My first learning plan');expect(await page.getByLabel('Note text',{exact:true}).inputValue()).toContain('Review what I learned.');});
test('course outlines, sandboxed reader and study controls work',async()=>{await page.getByRole('button',{name:'Explore the course library',exact:true}).click();await expect(page.locator('.course-card')).toHaveCount(57);await page.screenshot({path:'test-results/02-library.png',fullPage:false});await page.getByLabel('Search courses',{exact:true}).fill('Computer Literacy');await page.locator('.course-card').first().getByRole('button',{name:'Explore course',exact:true}).click();await expect(page.locator('.module-list details')).not.toHaveCount(0);await page.getByRole('button',{name:'Open reading preview',exact:true}).click();await expect(page.locator('#lesson-frame')).toHaveAttribute('sandbox','');await expect(page.frameLocator('#lesson-frame').locator('body')).toContainText('Computer');await page.getByRole('button',{name:'My notes',exact:true}).click();await page.getByLabel('Notes for this lesson',{exact:true}).fill('A computer processes information.');await page.getByRole('button',{name:'Mark as read',exact:true}).click();await page.getByLabel('Reader text size',{exact:true}).selectOption('22');await expect(page.getByRole('button',{name:'Marked as read',exact:true})).toBeVisible();await page.screenshot({path:'test-results/04-reader.png',fullPage:true});await page.getByRole('button',{name:'Overview',exact:true}).click();await page.getByRole('button',{name:'Start focus session',exact:true}).click();await expect(page.getByRole('button',{name:'Pause session',exact:true})).toBeVisible();await page.getByRole('button',{name:'Pause session',exact:true}).click();await expect(page.getByRole('button',{name:'Start focus session',exact:true})).toBeVisible();});
test('desktop layouts fit at 960 and 1440 pixels and empty search is recoverable',async()=>{for(const width of [960,1440]){if(electron)await electron.evaluate(({BrowserWindow},w)=>BrowserWindow.getAllWindows()[0].setSize(w,900),width);else await page.setViewportSize({width,height:900});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();await page.screenshot({path:`test-results/05-layout-${width}.png`});}await page.getByLabel('Search courses',{exact:true}).fill('nothingmatcheszz');await expect(page.getByRole('heading',{name:'No courses found'})).toBeVisible();await page.getByRole('button',{name:'Explore all courses',exact:true}).click();await expect(page.locator('.course-card')).toHaveCount(57);if(electron){expect(await page.evaluate(()=>typeof require)).toBe('undefined');expect(await page.evaluate(()=>Object.keys(window.tihDesktop).sort())).toEqual(['export','import','openVideo','read','write']);}});

test('wide learning workspace, navigation, video isolation and focus controls',async()=>{
  await page.getByRole('button',{name:'Learning space',exact:true}).click();
  await expect(page.locator('body')).toHaveClass(/nav-compact/);
  await expect(page.getByRole('button',{name:'Previous lesson',exact:true})).toBeDisabled();
  await expect(page.locator('#lesson-video')).toHaveCount(0);
  const widths=[];
  for(const width of [960,1440]){
    if(electron)await electron.evaluate(({BrowserWindow},w)=>BrowserWindow.getAllWindows()[0].setSize(w,960),width);else await page.setViewportSize({width,height:960});
    // Focus view must give the lesson almost the whole window at both laptop sizes.
    await page.getByRole('button',{name:'Focus view',exact:true}).click();
    widths.push(await page.evaluate(()=>({lesson:document.querySelector('#lesson-frame').getBoundingClientRect().width,window:innerWidth})));
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
    await page.screenshot({path:`test-results/06-learning-focus-${width}.png`,fullPage:true});
    await page.keyboard.press('Escape');await expect(page.locator('body')).not.toHaveClass(/focus-view/);
  }
  expect(widths.every(w=>w.lesson/w.window>.9)).toBeTruthy();
  // Notes and course panels must never unload/restart the lesson frame.
  await page.locator('#lesson-frame').evaluate(el=>el.dataset.mounted='yes');
  await page.getByRole('button',{name:'My notes',exact:true}).click();
  await page.getByLabel('Notes for this lesson',{exact:true}).fill('Remember how input becomes information.');
  await page.getByRole('button',{name:'Close notes',exact:true}).click();
  await expect(page.locator('#lesson-frame')).toHaveAttribute('data-mounted','yes');
  await page.getByRole('button',{name:'Next lesson',exact:true}).click();
  await expect(page.getByRole('heading',{name:'1.2 Types of Computers',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Go back',exact:true}).click();
  await expect(page.getByRole('heading',{name:'1.1 What Is a Computer?',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Go forward',exact:true}).click();
  await expect(page.getByRole('heading',{name:'1.2 Types of Computers',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Previous lesson',exact:true}).click();
  await page.getByRole('button',{name:'My notes',exact:true}).click();
  await expect(page.getByLabel('Notes for this lesson',{exact:true})).toHaveValue('Remember how input becomes information.');
  await page.getByRole('button',{name:'Close notes',exact:true}).click();
  await page.getByRole('tab',{name:'Watch video',exact:true}).click();
  await page.screenshot({path:'test-results/07-video-classroom.png',fullPage:true});
  await expect(page.locator('#lesson-video')).toHaveCount(0);
  await page.context().setOffline(true);
  await page.getByRole('button',{name:'Load lesson video',exact:true}).click();
  await expect(page.getByRole('heading',{name:'You’re offline.'})).toBeVisible();
  await page.context().setOffline(false);
  // Deterministic player plumbing test; external YouTube availability is not asserted.
  await page.route('https://www.youtube-nocookie.com/embed/**',r=>r.fulfill({contentType:'text/html',body:'<!doctype html><title>Video test surface</title><p>Player boundary verified</p>'}));
  await page.getByRole('button',{name:'Try again',exact:true}).click();
  await expect(page.locator('#lesson-video')).toHaveAttribute('src',/youtube-nocookie.com\/embed\/kBGcfVwf9aI/);
  await expect(page.frameLocator('#lesson-video').locator('body')).toContainText('Player boundary verified');
  expect(await page.frameLocator('#lesson-video').locator('body').evaluate(()=>typeof window.tihDesktop)).toBe('undefined');
  await page.locator('#lesson-video').evaluate(el=>el.dataset.mounted='yes');
  await page.getByRole('button',{name:'My notes',exact:true}).click();
  await expect(page.locator('#lesson-video')).toHaveAttribute('data-mounted','yes');
  await page.getByRole('button',{name:'Close notes',exact:true}).click();
  await page.getByRole('tab',{name:'Read lesson',exact:true}).click();
  await expect(page.locator('#lesson-video')).toHaveCount(0);
  await page.getByRole('tab',{name:'Resources',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Everything for this lesson'})).toBeVisible();
  await page.getByRole('tab',{name:'Resources',exact:true}).press('ArrowRight');
  await expect(page.getByRole('tab',{name:'Read lesson',exact:true})).toHaveAttribute('aria-selected','true');
  await page.getByRole('button',{name:'Enter full screen',exact:true}).click();
  await expect.poll(()=>page.evaluate(()=>!!document.fullscreenElement)).toBeTruthy();
  await page.getByRole('button',{name:'Exit full screen',exact:true}).click();
  await expect.poll(()=>page.evaluate(()=>!!document.fullscreenElement)).toBeFalsy();
  await page.getByRole('button',{name:'Next lesson',exact:true}).click();
  await page.getByRole('button',{name:'Overview',exact:true}).click();
  await page.getByRole('button',{name:'Learning space',exact:true}).click();
  await expect(page.getByRole('heading',{name:'1.2 Types of Computers',exact:true})).toBeVisible();
  if(electron){expect(await page.evaluate(()=>window.tihDesktop.openVideo('https://attacker.invalid').then(()=>false,()=>true))).toBeTruthy();}
});
