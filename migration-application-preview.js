'use strict';
(()=>{
  const byId=id=>document.getElementById(id),form=byId('application-form'),result=byId('result'),trackResult=byId('tracking-result');let receipt=null,busy=false;
  const message=(element,text,state='')=>{element.textContent=text;element.dataset.state=state;};
  async function request(body){const response=await fetch('/api/application-preview',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),cache:'no-store',credentials:'omit',redirect:'error',signal:AbortSignal.timeout(20000)});const data=await response.json();if(!response.ok)throw Error(data.error||'The application could not be loaded');return data;}
  function generate(){const bytes=crypto.getRandomValues(new Uint8Array(32));return Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');}
  async function setup(){try{const response=await fetch('/api/application-preview?action=catalog',{cache:'no-store',credentials:'omit',redirect:'error'});if(!response.ok)throw Error('Courses could not be loaded');const data=await response.json();for(const [id,course]of Object.entries(data.courses)){const option=document.createElement('option');option.value=id;option.textContent=course.title;byId('course').append(option);}}catch(e){message(result,e.message,'error');byId('submit').disabled=true;}}
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(busy)return;busy=true;byId('submit').disabled=true;
    if(!receipt)receipt=generate();byId('receipt').value=receipt;byId('tracking-code').value=receipt;byId('receipt-section').hidden=false;
    message(result,'Saving your test application…');
    try{const data=await request({action:'submit',receipt,name:byId('name').value,email:byId('email').value,phone:byId('phone').value,goals:byId('goals').value,courseId:byId('course').value});message(result,(data.created?'Test application saved. ':'Your existing test application was preserved. ')+'Application: '+data.application.id+'. Status: '+data.application.status+'. No account or payment was created.','success');form.hidden=true;}
    catch(e){message(result,e.message+'. Keep this code and retry; using the same code prevents duplicates.','error');}
    finally{busy=false;byId('submit').disabled=false;}
  });
  byId('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(byId('receipt').value);message(result,'Tracking code copied. Keep it private.','success');}catch{byId('receipt').focus();byId('receipt').select();message(result,'Select and copy the tracking code above.');}});
  byId('tracking-form').addEventListener('submit',async event=>{event.preventDefault();byId('track').disabled=true;message(trackResult,'Checking your test application…');try{const data=await request({action:'track',receipt:byId('tracking-code').value.trim().toLowerCase()}),app=data.application;message(trackResult,'Application: '+app.id+'. Status: '+app.status+'.'+(app.status_message?' Message from TIH: '+app.status_message:''),'success');}catch(e){message(trackResult,e.message,'error');}finally{byId('track').disabled=false;}});
  setup();
})();
