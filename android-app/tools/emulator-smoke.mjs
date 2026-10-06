// Headless validation. Requires an existing AOSP x86_64 AVD.
// node android-app/tools/emulator-smoke.mjs /absolute/sdk/path avd-name
import {spawn, execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {root} from './export-learning.mjs';
const sdk = process.argv[2] || process.env.ANDROID_HOME;
const avd = process.argv[3];
const api = process.argv[4] || '36';
if (!sdk || !avd) throw new Error('Supply Android SDK directory and existing AVD name.');
const adb = path.join(sdk, 'platform-tools/adb');
const report = path.join(root, 'android-app/app/build/reports/device');
fs.mkdirSync(report, {recursive: true});
const env = {...process.env, ANDROID_HOME: sdk, ANDROID_SDK_ROOT: sdk};
const call = (args, timeout=15000) => execFileSync(adb, args, {encoding:'utf8',timeout,env,maxBuffer:16*1024*1024});
call(['start-server']);
const logfile=fs.openSync(path.join(report,'emulator.log'),'w');
const imageRoot=path.join(sdk,`system-images/android-${api}/default/x86_64`);
const systemImage=fs.existsSync(path.join(imageRoot,'kernel-ranchu')) ? imageRoot : path.join(imageRoot,'x86_64');
const acceleration=fs.existsSync('/dev/kvm') ? 'auto' : 'off';
const emulator=spawn(path.join(sdk,'emulator/emulator'),['-avd',avd,'-sysdir',systemImage,
  '-no-window','-no-audio','-no-boot-anim','-no-snapshot','-no-metrics','-read-only','-accel',acceleration,'-gpu','swiftshader_indirect','-memory','2048','-cores','2'],
  {env,stdio:['ignore',logfile,logfile]});
try {
  console.log('Starting isolated Android emulator (acceleration: '+acceleration+').');
  let booted=false;
  for(let i=0;i<90;i++) {
    if(emulator.exitCode!==null) throw new Error('Emulator exited: '+emulator.exitCode+'\n'+fs.readFileSync(path.join(report,'emulator.log'),'utf8').split('\n').slice(-25).join('\n'));
    await new Promise(resolve=>setTimeout(resolve,5000));
    try {if(call(['shell','getprop','sys.boot_completed'],5000).trim()==='1'){booted=true;break;}}catch{}
    if(i%6===0) console.log('Waiting for Android to finish booting…');
  }
  if(!booted)throw new Error('Emulator boot timed out; see emulator.log.');
  // Capture genuine 9:16 phone screens within Play's maximum 2:1 aspect ratio.
  call(['shell','wm','size','1080x1920']);
  call(['shell','wm','density','420']);
  console.log('Android booted. Installing preview and instrumentation test APKs.');
  for(const setting of ['window_animation_scale','transition_animation_scale','animator_duration_scale'])call(['shell','settings','put','global',setting,'0']);
  // Dismiss keyguard through WindowManager, not a key sent to the launcher.
  // sys.boot_completed can precede the launcher's first focused window. A key
  // sent at that point causes a Quickstep input ANR dialog that covers the app
  // and intercepts all real touchscreen tests, even while Compose tests pass.
  call(['shell','wm','dismiss-keyguard']);
  call(['install','-r',path.join(root,'android-app/app/build/outputs/apk/debug/app-debug.apk')],120000);
  call(['install','-r',path.join(root,'android-app/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk')],120000);
  // Keep every device test, but isolate WebView-heavy video checks from the
  // many offline readers in a fresh instrumentation process. AOSP WebView's
  // native renderer teardown crashed after the combined run on API 36.
  const namespace='org.tolbertinnovationhub.learning';
  const testDirectory=path.join(root,'android-app/app/src/androidTest/java/org/tolbertinnovationhub/learning');
  const testClasses=fs.readdirSync(testDirectory).filter(name=>name.endsWith('Test.kt')).map(name=>name.replace(/\.kt$/,''));
  const groups=[testClasses.filter(name=>name!=='LessonVideoUiTest'),['LessonVideoUiTest']];
  const reports=[];
  for(const classes of groups) {
    call(['shell','am','force-stop','org.tolbertinnovationhub.learning.preview']);
    const result=call(['shell','am','instrument','-w','-e','class',classes.map(c=>namespace+'.'+c).join(','),
      'org.tolbertinnovationhub.learning.preview.test/androidx.test.runner.AndroidJUnitRunner'],480000);
    reports.push(result);
    fs.writeFileSync(path.join(report,'instrumentation.txt'),reports.join('\n'));
    console.log(result);
  }
  const results=reports.join('\n');
  const pulled=spawn(adb,['pull','/sdcard/Android/data/org.tolbertinnovationhub.learning.preview/files/screenshots',report],{env,stdio:'inherit'});
  await new Promise(resolve=>pulled.on('exit',resolve));
  if(reports.length!==groups.length || reports.some(result=>!/OK \(\d+ tests?\)/.test(result)))throw new Error('Device tests did not pass.');
  const screenshots=fs.readdirSync(path.join(report,'screenshots')).filter(name=>name.endsWith('.png'));
  for(const name of screenshots) {
    const png=fs.readFileSync(path.join(report,'screenshots',name));
    const width=png.readUInt32BE(16), height=png.readUInt32BE(20), colorType=png[25];
    if(width!==1080 || height!==1920 || colorType!==2) throw new Error(`Store capture must be 1080x1920 RGB PNG: ${name} (${width}x${height}, type ${colorType})`);
  }
  console.log(`Validated ${screenshots.length} original RGB phone screenshots at 1080x1920.`);
  // Exercise the actual R8-minified release code using a temporary debug signature.
  // This test signature is never used for the release AAB and is not a publishing key.
  const buildTools=fs.readdirSync(path.join(sdk,'build-tools')).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).at(-1);
  const signed=path.join(root,'android-app/app/build/intermediates/release-validation.apk');
  const testKey=process.env.TIH_PREVIEW_KEYSTORE || path.join(root,'android-app/app/build/intermediates/release-validation.keystore');
  if(!fs.existsSync(testKey)) {
    fs.mkdirSync(path.dirname(testKey),{recursive:true});
    execFileSync('keytool',['-genkeypair','-noprompt','-keystore',testKey,'-storepass','android','-keypass','android','-alias','androiddebugkey',
      '-keyalg','RSA','-keysize','2048','-validity','10000','-dname','CN=TIH Validation,O=Android,C=LR'],{env,timeout:30000});
  }
  execFileSync(path.join(sdk,'build-tools',buildTools,'apksigner'),['sign','--ks',testKey,
    '--ks-pass','pass:android','--out',signed,path.join(root,'android-app/app/build/outputs/apk/release/app-release-unsigned.apk')],{env,timeout:30000});
  call(['install','-r',signed],120000);
  call(['shell','am','start','-W','-n','org.tolbertinnovationhub.learning/.MainActivity'],30000);
  await new Promise(resolve=>setTimeout(resolve,5000));
  if(!call(['shell','pidof','org.tolbertinnovationhub.learning']).trim())throw new Error('Minified release did not stay running.');
  call(['shell','uiautomator','dump','/sdcard/tih-release.xml'],30000);
  const releaseUi=call(['shell','cat','/sdcard/tih-release.xml']);
  fs.writeFileSync(path.join(report,'release-ui.xml'),releaseUi);
  if(!releaseUi.includes('Sign in securely') || !releaseUi.includes('Create account'))throw new Error('Minified release welcome screen did not load.');
  console.log('Minified release launched with sign-in and account creation.');
} finally {
  try {fs.writeFileSync(path.join(report,'logcat.txt'),call(['logcat','-d','-v','threadtime'],15000));}catch{}
  try {call(['emu','kill'],5000);}catch{}
  emulator.kill('SIGTERM');fs.closeSync(logfile);
}
