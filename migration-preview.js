'use strict';
(() => {
  const form=document.getElementById('check-form');
  const email=document.getElementById('email');
  const password=document.getElementById('password');
  const submit=document.getElementById('submit');
  const result=document.getElementById('result');
  let config=null;
  function message(text,state=''){result.textContent=text;result.dataset.state=state;}
  const request=(url,options={})=>fetch(url,{...options,cache:'no-store',redirect:'error',signal:AbortSignal.timeout(20000)});
  async function prepare(){
    try{
      const response=await request('/api/neon-preview?action=config');
      if(!response.ok)throw Error();
      config=await response.json();
      if(config.authUrl!=='https://oracluubhmxobcnsvcxz.supabase.co'||typeof config.publishableKey!=='string')throw Error();
      submit.disabled=false;submit.textContent='Sign in & check my records';
      message('Ready. Only your own learner records will be checked.');
    }catch{config=null;submit.textContent='Preview unavailable';message('This preview is unavailable. Open the latest preview link while signed into Vercel.','error');}
  }
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(!config||submit.disabled)return;
    submit.disabled=true;email.disabled=true;password.disabled=true;
    message('Signing in and checking your copied records…');
    try{
      const body=JSON.stringify({email:email.value.trim(),password:password.value});
      password.value='';
      const auth=await request(config.authUrl+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:config.publishableKey,'Content-Type':'application/json'},body,credentials:'omit'});
      if(!auth.ok){message(auth.status===429?'Too many sign-in attempts. Please wait before trying again.':'Sign-in failed. Check your email and password. Older learner accounts may not yet be linked to Supabase Auth.','error');return;}
      let session=await auth.json();
      if(typeof session.access_token!=='string')throw Error();
      const response=await request('/api/neon-preview?action=account',{headers:{Authorization:'Bearer '+session.access_token}});
      session=null;
      const data=await response.json();
      if(!response.ok){message(response.status===404?'Sign-in worked, but no active learner profile is linked in the copied data. Report this message so the account link can be checked.':response.status===401?'Your session could not be verified. Please try again.':'Sign-in worked, but the new database could not be read. Report this message.','error');return;}
      const counts=[['enrollments',data.enrollments],['progress records',data.progress],['certificate requests',data.certRequests]];
      if(!data.student||counts.some(([,rows])=>!Array.isArray(rows)))throw Error();
      message('Check passed. Your learner profile loaded from the new database: '+counts.map(([label,rows])=>rows.length+' '+label).join(', ')+'. This was a read-only check; the live website has not switched.','success');
    }catch{message('The check could not finish. Please check your connection and try again.','error');}
    finally{password.value='';submit.disabled=false;email.disabled=false;password.disabled=false;}
  });
  document.getElementById('clear').addEventListener('click',()=>{if(submit.disabled&&config)return;form.reset();message('Cleared. Ready for another check.');});
  window.addEventListener('pagehide',()=>form.reset());
  prepare();
})();
