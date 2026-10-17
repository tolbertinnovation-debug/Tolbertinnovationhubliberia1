import { createAuthClient } from '@neondatabase/auth';
import { BetterAuthVanillaAdapter } from '@neondatabase/auth/vanilla/adapters';
let client,setup;
async function getClient(){
  if(client)return client;
  if(!setup)setup=(async()=>{const r=await fetch('/api/signup-preview?action=config',{cache:'no-store'});if(!r.ok)throw Error('New account preview is unavailable');const c=await r.json();client=createAuthClient(c.authUrl,{adapter:BetterAuthVanillaAdapter({fetchOptions:{credentials:'include'}})});return client;})().catch(error=>{setup=null;throw error;});
  return setup;
}
window.TIHNeonAuth={getClient};
const form=document.getElementById('signup-form');
if(form){
  const byId=id=>document.getElementById(id),result=byId('result');let busy=false;
  function message(text,state=''){result.textContent=text;result.dataset.state=state;}
  async function action(work){if(busy)return;busy=true;for(const b of document.querySelectorAll('button'))b.disabled=true;try{await work();}catch(error){message(error.message||'The test account action failed','error');}finally{busy=false;for(const b of document.querySelectorAll('button'))b.disabled=false;byId('password').value='';}}
  function unwrap(response){if(response.error)throw Error(response.error.message||'Authentication failed');return response.data;}
  async function activate(){const auth=await getClient(),token=unwrap(await auth.token());if(!token?.token)throw Error('Your browser could not restore the new account session. Sign in again and allow the authentication cookie.');const r=await fetch('/api/signup-preview',{method:'POST',headers:{Authorization:'Bearer '+token.token,'Content-Type':'application/json'},body:'{}',cache:'no-store',credentials:'same-origin'}),data=await r.json();if(!r.ok)throw Error(data.error||'Activation failed');message('Test learner profile ready: '+data.student.id+'. Course access remains locked until staff grants it.','success');byId('workspace-link').hidden=false;}
  form.addEventListener('submit',event=>{event.preventDefault();action(async()=>{message('Creating your isolated test identity…');const auth=await getClient();unwrap(await auth.signUp.email({name:byId('name').value.trim(),email:byId('email').value.trim(),password:byId('password').value}));message('Identity created. Request a verification code, then enter it below. Your learner profile is not active yet.','success');});});
  byId('sign-in').addEventListener('click',()=>action(async()=>{const auth=await getClient();unwrap(await auth.signIn.email({email:byId('email').value.trim(),password:byId('password').value}));await activate();}));
  byId('send-code').addEventListener('click',()=>action(async()=>{const auth=await getClient();unwrap(await auth.emailOtp.sendVerificationOtp({email:byId('email').value.trim(),type:'email-verification'}));message('Verification code requested. Check the inbox for the email you entered.','success');}));
  byId('verify-form').addEventListener('submit',event=>{event.preventDefault();action(async()=>{const auth=await getClient();unwrap(await auth.emailOtp.verifyEmail({email:byId('email').value.trim(),otp:byId('otp').value.trim()}));byId('otp').value='';await activate();});});
  byId('restore').addEventListener('click',()=>action(activate));
  byId('sign-out').addEventListener('click',()=>action(async()=>{const response=await fetch('/api/learner-preview',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'logout'}),credentials:'same-origin'});if(!response.ok&&response.status!==401)throw Error('Learner sign-out failed');const auth=await getClient();unwrap(await auth.signOut());byId('workspace-link').hidden=true;message('Signed out of the new test account.','success');}));
}
