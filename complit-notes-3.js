/* TIH complit notes part 3 + applicator */
(function(){
if(typeof window==='undefined')return;
window.TIH_TOPIC_NOTES=window.TIH_TOPIC_NOTES||{};
var N=window.TIH_TOPIC_NOTES['computer-literacy']=window.TIH_TOPIC_NOTES['computer-literacy']||{};
function build(m,t,d,b){
return '<div class="study-note"><div class="revision-banner"><strong>Computer Literacy · '+m+'</strong><span>Detailed lesson note</span></div><h3>'+t+'</h3><h4>Definition</h4><p>'+d+'</p>'+b+'<blockquote><strong>Study tip:</strong> Watch the matched video, practise on a computer, then complete the interactive quiz.</blockquote><p><strong>Print:</strong> Browser Print → Save as PDF. <em>'+m+'</em></p></div>';
}
N["What Is the Internet?"]=build("Module 5: Internet Fundamentals","What Is the Internet?","The internet is a global network of interconnected computer networks that exchange information and services using shared standards.","<p>It supports the Web, email, video calls, cloud storage, and more. Access requires a connection and usually a browser or app.</p>");
N["How the Internet Works"]=build("Module 5: Internet Fundamentals","How the Internet Works","The internet sends data in packets across routers and servers using protocols such as TCP/IP.","<ul><li>Your device connects through an ISP.</li><li>Servers store websites and respond to requests.</li><li>Domain names label IP addresses for people.</li></ul>");
N["What Is a Web Browser?"]=build("Module 5: Internet Fundamentals","What Is a Web Browser?","A web browser is software used to request, display, and navigate websites—Chrome, Edge, Firefox, Safari.","<ul><li>Address bar for URLs.</li><li>Tabs, bookmarks, history, downloads.</li></ul>");
N["Using Google Chrome"]=build("Module 5: Internet Fundamentals","Using Google Chrome","Google Chrome is a popular browser for opening sites, managing tabs, bookmarks, and downloads.","<p>Type a URL or search in the omnibox. Sign in only on trusted devices.</p>");
N["Using Search Engines"]=build("Module 5: Internet Fundamentals","Using Search Engines","A search engine finds online pages matching keywords—Google, Bing, and others.","<p>Evaluate sources carefully. Prefer official and educational sites for facts.</p>");
N["Effective Google Searching"]=build("Module 5: Internet Fundamentals","Effective Google Searching","Effective searching uses clear, specific keywords to find accurate information quickly.","<ul><li>Use precise words and context.</li><li>Try alternative wording if needed.</li><li>Use quotes for exact phrases.</li></ul>");
N["Opening and Managing Web Pages"]=build("Module 5: Internet Fundamentals","Opening and Managing Web Pages","Opening and managing pages involves URLs, links, tabs, and navigation controls.","<p>Prefer https (padlock). Use tabs to compare sources.</p>");
N["Downloading Files From the Internet"]=build("Module 5: Internet Fundamentals","Downloading Files From the Internet","Downloading saves a file from a website onto your computer for offline use.","<ol><li>Use official download links.</li><li>Note the Downloads folder.</li><li>Open from File Explorer after completion.</li></ol>");
N["Internet Safety Basics"]=build("Module 6: Internet Safety and Digital Security","Internet Safety Basics","Internet safety is using online services in ways that protect personal information, devices, and well-being.","<ul><li>Think before you click.</li><li>Use strong unique passwords.</li><li>Do not share private data publicly.</li><li>Keep software updated.</li></ul>");
N["Creating Strong Passwords"]=build("Module 6: Internet Safety and Digital Security","Creating Strong Passwords","A strong password is long, unique, and hard to guess—not simple words, names, or sequences like 123456.","<ul><li>Prefer long passphrases.</li><li>Never reuse important passwords.</li><li>Store secrets securely.</li></ul>");
N["Two-Factor Authentication"]=build("Module 6: Internet Safety and Digital Security","Two-Factor Authentication","Two-factor authentication (2FA) adds a second proof of identity beyond the password.","<p>Enable 2FA on email, banking, and important accounts.</p>");
N["Recognizing Phishing Scams"]=build("Module 6: Internet Safety and Digital Security","Recognizing Phishing Scams","Phishing uses fake messages or websites to trick people into revealing passwords, money, or personal data.","<ul><li>Urgent threats and password requests.</li><li>Odd links and generic greetings.</li></ul><p>Open official sites yourself instead of clicking message links.</p>");
N["Avoiding Online Scams"]=build("Module 6: Internet Safety and Digital Security","Avoiding Online Scams","Online scams attempt to take money or information through false offers, fake jobs, or advance-fee tricks.","<ul><li>If it seems too good to be true, be suspicious.</li><li>Never pay fees to release prizes.</li></ul>");
N["Protecting Personal Information Online"]=build("Module 6: Internet Safety and Digital Security","Protecting Personal Information Online","Protecting personal information means limiting what you publish and share so identity details are not misused.","<ul><li>Review privacy settings.</li><li>Avoid posting ID numbers and home address publicly.</li></ul>");
N["Safe Downloads"]=build("Module 6: Internet Safety and Digital Security","Safe Downloads","Safe downloading means obtaining files only from trusted sources and verifying legitimacy before opening.","<ul><li>Prefer official websites.</li><li>Avoid pirated software sites.</li></ul>");
N["Computer Viruses and Malware"]=build("Module 6: Internet Safety and Digital Security","Computer Viruses and Malware","Malware is malicious software—viruses, worms, trojans, ransomware—designed to damage systems or steal data.","<ul><li>Update Windows and apps.</li><li>Do not open unknown attachments.</li><li>Backup important files regularly.</li></ul>");
N["What Is Email?"]=build("Module 7: Email and Online Communication","What Is Email?","Email is a system for sending and receiving digital messages over the internet, widely used for formal communication.","<p>Each user has an address (e.g., name@gmail.com). Messages can include attachments.</p>");
N["Creating a Gmail Account"]=build("Module 7: Email and Online Communication","Creating a Gmail Account","Creating a Gmail account means registering a free Google email address and securing it with a password and recovery options.","<ol><li>Use the official Google signup page.</li><li>Choose a professional-looking address.</li><li>Set a strong password.</li><li>Sign out on shared computers.</li></ol>");
N["Understanding the Gmail Interface"]=build("Module 7: Email and Online Communication","Understanding the Gmail Interface","The Gmail interface includes Inbox, Compose, Sent, Drafts, labels, and search.","<ul><li><strong>Inbox</strong> — incoming.</li><li><strong>Compose</strong> — new message.</li><li><strong>Sent / Drafts</strong> — sent and unfinished mail.</li></ul>");
N["Sending an Email"]=build("Module 7: Email and Online Communication","Sending an Email","Sending an email means composing a message with recipient, subject, and body, then delivering it.","<ol><li>Compose → enter To address.</li><li>Clear Subject.</li><li>Polite concise body.</li><li>Attach if needed → Send.</li></ol>");
N["Replying to an Email"]=build("Module 7: Email and Online Communication","Replying to an Email","Reply responds to the sender; Reply all includes every recipient.","<p>Use Reply all only when everyone must see the answer. Answer all questions asked.</p>");
N["Email Attachments"]=build("Module 7: Email and Online Communication","Email Attachments","An attachment is a file sent with an email, such as a PDF, Word document, or image.","<p>Use Attach / paperclip. Name files clearly. Do not open unexpected attachments from unknown senders.</p>");
N["Managing Email"]=build("Module 7: Email and Online Communication","Managing Email","Managing email means organizing with labels or folders, removing junk, and searching so the inbox stays usable.","<ul><li>Labels for School, Work, Personal.</li><li>Archive or delete what you do not need.</li></ul>");
N["Email Etiquette"]=build("Module 7: Email and Online Communication","Email Etiquette","Email etiquette is the set of professional habits for clear, respectful written communication online.","<ul><li>Meaningful subject line.</li><li>Greeting, body, closing, name.</li><li>Avoid ALL CAPS.</li><li>Proofread before sending.</li></ul>");

function tihApplyComplitNotes(){
try{
var CID='computer-literacy';
var TN=window.TIH_TOPIC_NOTES&&window.TIH_TOPIC_NOTES[CID];
if(!TN||typeof COURSES_DB==='undefined'||!COURSES_DB[CID])return false;
if(typeof LESSON_CONTENT==='undefined')window.LESSON_CONTENT={};
var notes=LESSON_CONTENT[CID]||{};
var course=COURSES_DB[CID];
var flat=0;
function norm(s){return String(s||'').replace(/[^a-z0-9]+/gi,' ').replace(/\s+/g,' ').trim().toLowerCase();}
var byNorm={};Object.keys(TN).forEach(function(k){byNorm[norm(k)]=TN[k];});
(course.modules||[]).forEach(function(mod){(mod.lessons||[]).forEach(function(L){
if(!L.isQuiz&&!L.isProject&&!L.isFinal){
var raw=String(L.t||'');
var name=raw.replace(/^\s*\d+\.\d+\s+/,'').replace(/^[^0-9A-Za-z]+/,'').trim();
var html=TN[name]||byNorm[norm(name)];
if(html)notes[String(flat)]=html;
}
flat+=1;
});});
LESSON_CONTENT[CID]=notes;
if(console&&console.log)console.log('[COMPLIT-NOTES] applied',Object.keys(notes).length);
return true;
}catch(e){return false;}
}
if(!tihApplyComplitNotes()){var tries=0;var iv=setInterval(function(){tries++;if(tihApplyComplitNotes()||tries>40)clearInterval(iv);},250);}
})();
