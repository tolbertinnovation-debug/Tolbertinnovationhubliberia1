// Optional headless validation. Requires an existing Android 35 x86_64 AVD.
// node android-app/tools/emulator-smoke.mjs /absolute/sdk/path avd-name
import {spawn, execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {root} from './export-learning.mjs';
const sdk = process.argv[2] || process.env.ANDROID_HOME;
const avd = process.argv[3];
if (!sdk || !avd) throw new Error('Supply Android SDK directory and existing AVD name.');
const adb = path.join(sdk, 'platform-tools/adb');
const report = path.join(root, 'android-app/app/build/reports/device');
fs.mkdirSync(report, {recursive: true});
const env = {...process.env, ANDROID_HOME: sdk, ANDROID_SDK_ROOT: sdk};
const call = (args, timeout=15000) => execFileSync(adb, args, {encoding:'utf8',timeout,env});
call(['start-server']);
const logfile=fs.openSync(path.join(report,'emulator.log'),'w');
const imageRoot=path.join(sdk,'system-images/android-35/default/x86_64');
const systemImage=fs.existsSync(path.join(imageRoot,'kernel-ranchu')) ? imageRoot : path.join(imageRoot,'x86_64');
const emulator=spawn(path.join(sdk,'emulator/emulator'),['-avd',avd,'-sysdir',systemImage,
  '-no-window','-no-audio','-no-boot-anim','-no-snapshot','-no-metrics','-read-only','-accel','off','-gpu','swiftshader_indirect','-memory','2048','-cores','2'],
  {env,stdio:['ignore',logfile,logfile]});
try {
  console.log('Starting isolated Android emulator (software rendering).');
  let booted=false;
  for(let i=0;i<90;i++) {
    if(emulator.exitCode!==null) throw new Error('Emulator exited: '+emulator.exitCode);
    await new Promise(resolve=>setTimeout(resolve,5000));
    try {if(call(['shell','getprop','sys.boot_completed'],5000).trim()==='1'){booted=true;break;}}catch{}
    if(i%6===0) console.log('Waiting for Android to finish booting…');
  }
  if(!booted)throw new Error('Emulator boot timed out; see emulator.log.');
  console.log('Android booted. Installing preview and instrumentation test APKs.');
  for(const setting of ['window_animation_scale','transition_animation_scale','animator_duration_scale'])call(['shell','settings','put','global',setting,'0']);
  call(['shell','input','keyevent','82']);
  call(['install','-r',path.join(root,'android-app/app/build/outputs/apk/debug/app-debug.apk')],120000);
  call(['install','-r',path.join(root,'android-app/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk')],120000);
  const results=call(['shell','am','instrument','-w','org.tolbertinnovationhub.learning.preview.test/androidx.test.runner.AndroidJUnitRunner'],240000);
  fs.writeFileSync(path.join(report,'instrumentation.txt'),results);
  console.log(results);
  const pulled=spawn(adb,['pull','/sdcard/Android/data/org.tolbertinnovationhub.learning.preview/files/screenshots',report],{env,stdio:'inherit'});
  await new Promise(resolve=>pulled.on('exit',resolve));
  if(!/OK \(\d+ tests?\)/.test(results))throw new Error('Device tests did not pass.');
} finally {
  try {call(['emu','kill'],5000);}catch{}
  emulator.kill('SIGTERM');fs.closeSync(logfile);
}
