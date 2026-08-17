/* TIH Android notes runtime — builds formal HTML from data packs */
(function(){
if(typeof window==='undefined')return;
window.TIH_TOPIC_NOTES=window.TIH_TOPIC_NOTES||{};
var N=window.TIH_TOPIC_NOTES['android']=window.TIH_TOPIC_NOTES['android']||{};
function build(m,t,d,b){
return '<div class="study-note"><div class="revision-banner"><strong>Android Development · '+m+'</strong><span>Detailed lesson note</span></div><h3>'+t+'</h3><h4>Definition</h4><p>'+d+'</p>'+b+'<blockquote><strong>Study tip:</strong> Watch the matched video. Type the examples in Android Studio, run on the emulator, then complete the practice quiz.</blockquote><p><strong>Print:</strong> Browser Print → Save as PDF. <em>'+m+'</em></p></div>';
}
N['__course_intro__']=build('Course Overview','Complete Android App Development Program (Kotlin)','Android app development is the process of designing, coding, testing, and publishing applications that run on the Android operating system—using Kotlin (or Java), Android Studio, and the Android SDK.','<p>This 19-module TIH programme takes you from Kotlin fundamentals and Android Studio through UI, interaction, navigation, storage, Firebase, networking, media, Material Design, security, testing, Google Play publishing, AI tools, freelancing, ten real-world apps, and a capstone—ending with a Certificate of Completion.</p><h4>How to study</h4><ol><li>Watch the topic video.</li><li>Read the formal note and code examples.</li><li>Build and run the feature in Android Studio.</li><li>Complete the interactive practice quiz.</li></ol>');
function materialize(){
var data=window.TIH_AND_NOTES_DATA||[];
data.forEach(function(row){if(row&&row[0])N[row[0]]=build(row[1],row[0],row[2],row[3]);});
}
materialize();
function tihApplyAndNotes(){
try{
var CID='android';
var TN=window.TIH_TOPIC_NOTES&&window.TIH_TOPIC_NOTES[CID];
if(!TN||typeof COURSES_DB==='undefined'||!COURSES_DB[CID])return false;
if(typeof LESSON_CONTENT==='undefined')window.LESSON_CONTENT={};
var notes=LESSON_CONTENT[CID]||{};
var course=COURSES_DB[CID];
var flat=0;
function norm(s){return String(s||'').replace(/[^a-z0-9]+/gi,' ').replace(/\s+/g,' ').trim().toLowerCase();}
var byNorm={};Object.keys(TN).forEach(function(k){byNorm[norm(k)]=TN[k];});
(course.modules||[]).forEach(function(mod){(mod.lessons||[]).forEach(function(L){
if(!L.isQuiz&&!L.isFinal){
var raw=String(L.t||'');
var name=raw.replace(/^\s*\d+\.\d+\s+/,'').replace(/^[^0-9A-Za-z]+/,'').replace(/^🛠️\s*/,'').trim();
var html=TN[name]||byNorm[norm(name)];
if(html)notes[String(flat)]=html;
}
flat+=1;
});});
LESSON_CONTENT[CID]=notes;
if(console&&console.log)console.log('[AND-NOTES] applied',Object.keys(notes).length);
return true;
}catch(e){return false;}
}
if(!tihApplyAndNotes()){var tries=0;var iv=setInterval(function(){tries++;if(tihApplyAndNotes()||tries>50)clearInterval(iv);},250);}
})();
