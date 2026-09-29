import fs from 'node:fs';
import path from 'node:path';
import {root} from './export-learning.mjs';
import {organization} from './organization.mjs';

const info = organization(root);
const out = path.join(root, 'android-app/release/output');
fs.mkdirSync(out, {recursive: true});
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sections = list => list.map(s => `<section><h2>${escape(s.title)}</h2>${s.paragraphs.map(p => `<p>${escape(p)}</p>`).join('')}</section>`).join('\n');
const page = (title, body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src 'self'; base-uri 'none'; form-action 'none'"><title>${escape(title)} | TIH Learning</title><style>body{margin:0;background:#f5f8fd;color:#172943;font:17px/1.7 system-ui,sans-serif}main{max-width:780px;margin:0 auto;padding:36px 22px 64px}header{border-bottom:4px solid #c62235;padding-bottom:18px}h1{line-height:1.2}h2{font-size:1.2rem;color:#142a50}section{background:white;border:1px solid #dce4ef;border-radius:16px;padding:20px;margin-top:20px}a{color:#164e92;overflow-wrap:anywhere}p{margin:12px 0}.label{font-weight:700;letter-spacing:.08em;color:#c62235}footer{margin-top:28px;font-size:.9rem}</style></head><body><main><header><p class="label">TOLBERT INNOVATION HUB</p><h1>${escape(title)}</h1></header>${body}<footer>${escape(info.name)} · ${escape(info.address)}<br><a href="mailto:${escape(info.email)}">${escape(info.email)}</a> · ${escape(info.phone)}</footer></main></body></html>`;
fs.writeFileSync(path.join(out, 'app-privacy.html'), page('TIH Learning privacy notice', `<p>This notice describes the TIH Learning Android app. TIH contact information and privacy rights are taken from its published policy, last updated ${escape(info.policyUpdated)}.</p>${sections(info.privacy)}${sections([info.audience])}<p><a href="account-deletion.html">Request deletion of your TIH account</a></p>`));
const subject = 'TIH Learning account deletion request';
const body = 'Please delete my TIH Learning account and associated personal data.\n\nRegistered email: [enter your email]\nStudent ID: [if known]\n\nPlease tell me how to verify ownership and confirm any retained records, the reason, and the retention period.';
const mailto = `mailto:${info.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
fs.writeFileSync(path.join(out, 'account-deletion.html'), page('Delete your TIH Learning account', `<section><h2>Request deletion without the app</h2><p>Email <a href="mailto:${escape(info.email)}">${escape(info.email)}</a> with the subject <strong>${escape(subject)}</strong>. Include your registered email and student ID if known. Do not send your password.</p><p><a href="${escape(mailto)}">Prepare a deletion request in your email app</a></p><p>If you use webmail, send the request directly to the email address above. You do not need to reinstall or sign in to the Android app.</p></section><section><h2>What happens next</h2><p>TIH verifies account ownership before processing deletion of your shared TIH account and associated personal data. TIH’s published privacy policy says privacy requests receive a response within 30 days, subject to legal retention requirements. The support team must explain any records that must be retained, why, and for how long.</p><p>Opening the email draft does not send it or delete your account. You must review and send the email.</p></section><section><h2>Records on your phone</h2><p>You can separately clear the signed-in account’s study records from the app’s You screen. Uninstalling the app removes all local records. Clearing phone data does not delete the server account, and a server deletion request does not remotely erase an offline phone.</p></section><p><a href="app-privacy.html">Read the Android app privacy notice</a></p>`));
const short = 'Build digital skills and prepare for exams with Tolbert Innovation Hub.';
const description = `Learn with TIH, wherever your next opportunity takes you.

TIH Learning brings the existing Tolbert Innovation Hub course library to Android. Explore 57 learning paths, including computer literacy, artificial intelligence, business, digital skills, and WASSCE exam preparation.

• Browse and search the course catalog before signing in.
• Use your existing TIH account to access your approved courses.
• Read written lessons and teaching diagrams offline after access is verified.
• Practice with quizzes and explanations.
• Save lessons, take personal notes, and track progress on your phone.
• Choose a light or dark appearance and adjust the reading size.
• Reach TIH support and access privacy information inside the app.

Written materials and quizzes are included in the app. Approved offline access lasts up to seven days after verification; reconnect to refresh it. Videos open online in YouTube or your browser when you choose to watch them.

App study records remain on this phone and do not currently sync to the website. Practice results do not issue official certificates or change website completion. Official TIH completion and certificate decisions remain with the Learning Hub.

This app is for learners with existing TIH accounts and approved course access. No course purchases are available inside the app. Guest users can explore the catalog.

Tolbert Innovation Hub, Liberia
${info.email}`;
if(short.length>80||description.length>4000)throw new Error('Store text exceeds Play limits');
fs.writeFileSync(path.join(out, 'store-listing.txt'), `App name: TIH Learning\nCategory: Education\nPublisher: ${info.name}\nSupport email: ${info.email}\nSupport phone: ${info.phone}\nWebsite: ${info.website}\n\nSHORT DESCRIPTION\n${short}\n\nFULL DESCRIPTION\n${description}\n`);
fs.copyFileSync(path.join(root,'assets/tih-logo.png'),path.join(out,'store-icon-512.png'));
// Code-native artwork reuses the existing TIH logo; it invents no testimonials or course imagery.
const logo=fs.readFileSync(path.join(root,'assets/tih-logo.png')).toString('base64');
fs.writeFileSync(path.join(out,'feature-graphic.svg'), `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1024" height="500" viewBox="0 0 1024 500"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#142a50"/><stop offset="1" stop-color="#265a91"/></linearGradient></defs><rect width="1024" height="500" fill="url(#bg)"/><circle cx="895" cy="250" r="230" fill="#ffffff" fill-opacity=".05"/><rect x="60" y="62" width="72" height="7" rx="3" fill="#e73b4d"/><text x="60" y="120" fill="#c4e1ff" font-family="DejaVu Sans" font-size="20" letter-spacing="3">TOLBERT INNOVATION HUB</text><text x="60" y="203" fill="white" font-family="DejaVu Sans" font-weight="bold" font-size="55">TIH Learning</text><text x="60" y="280" fill="white" font-family="DejaVu Sans" font-size="32">Build skills.</text><text x="60" y="327" fill="white" font-family="DejaVu Sans" font-size="32">Build your future.</text><text x="60" y="413" fill="#c4e1ff" font-family="DejaVu Sans" font-size="21">Courses · Practice · Progress</text><circle cx="803" cy="244" r="140" fill="white"/><image x="688" y="129" width="230" height="230" xlink:href="data:image/png;base64,${logo}"/></svg>`);
fs.writeFileSync(path.join(out,'README.txt'), 'RELEASE PREPARATION — NOT PUBLISHED\n\nThe HTML pages are standalone documents with no scripts, analytics, checkout links, or login requirement. The owner must confirm the support/deletion process and publish these at public HTTPS URLs before entering them in Play Console. No website deployment was performed.\n\nThe store texts describe the implemented local-progress app. Review rights to every bundled course/image and linked video. Select audience and content-rating answers from the actual material. Do not advertise cloud synchronization or official in-app certification.\n\nUse the tested device screenshots from Android-validation-reports. Feature graphic is authored as SVG; rasterize to a 1024x500 PNG for Play Console. The copied TIH store icon is already 512x512.\n\nThe release AAB is unsigned until the owner supplies the correct package identity and signing configuration. Do not upload the preview APK as a production release. See android-app/release/PUBLISHING.md.\n');
console.log(`Prepared ${fs.readdirSync(out).length} store files in ${out}`);
