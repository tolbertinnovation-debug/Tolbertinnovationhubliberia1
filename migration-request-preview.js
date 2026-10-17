'use strict';
(()=>{
const form=document.getElementById('request-form'),email=document.getElementById('email'),password=document.getElementById('password'),course=document.getElementById('course'),button=document.getElementById('submit'),result=document.getElementById('result');
let config=null;
const message=(text,state='')=>{result.textContent=text;result.dataset.state=state;};
const request=(url,options={})=>fetch(url,{...options,cache:'no-store',redirect:'error',signal:AbortSignal.timeout(20000)});
async function prepare(){try{
const response=await request('/api/access-request-preview?action=config');if(!response.ok)throw Error();config=await response.json();
if(config.authUrl!=='https://oracluubhmxobcnsvcxz.supabase.co'||typeof config.publishableKey!=='string'||!config.courses)throw Error();
for(const [id,title] of Object.entries(config.courses)){const option=document.createElement('option');option.value=id;option.textContent=title;course.append(option);}
button.disabled=false;button.textContent='Sign in & submit test request';message('Ready. This test writes only to the isolated test database.');
}catch{config=null;button.textContent='Test unavailable';message('Open the latest preview link while signed into Vercel.','error');}}
form.addEventListener('submit',async event=>{event.preventDefault();if(!config||button.disabled)return;const courseId=course.value;if(!Object.hasOwn(config.courses,courseId))return;
button.disabled=true;message('Signing in and submitting the test request…');
try{
const body=JSON.stringify({email:email.value.trim(),password:password.value});password.value='';
const auth=await request(config.authUrl+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:config.publishableKey,'Content-Type':'application/json'},body,credentials:'omit'});
if(!auth.ok){message(auth.status===429?'Too many attempts. Please wait before trying again.':'Sign-in failed. Check your credentials; older accounts may not be linked yet.','error');return;}
let session=await auth.json();if(typeof session.access_token!=='string')throw Error();
const response=await request('/api/access-request-preview',{method:'POST',headers:{Authorization:'Bearer '+session.access_token,'Content-Type':'application/json'},body:JSON.stringify({courseId})});session=null;
const data=await response.json();
if(!response.ok){message(response.status===404?'Sign-in worked, but no active learner profile is linked.':'The test request could not be saved. Report this message.','error');return;}
if(!data.enrollment||data.mode!=='isolated write preview')throw Error();
message(data.created?'Test passed. A pending course request was saved in the isolated database. No course access was granted and the live website has not switched.':'Test passed. An existing enrollment was found and preserved; no duplicate request was created. The live website has not switched.','success');
}catch{message('The test could not finish. Check your connection and try again.','error');}finally{password.value='';button.disabled=false;}
});window.addEventListener('pagehide',()=>form.reset());prepare();
})();
