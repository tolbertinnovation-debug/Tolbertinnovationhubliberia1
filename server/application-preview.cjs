'use strict';
const {createHash,createHmac}=require('node:crypto'),{isIP}=require('node:net');
const catalog=require('./course-metadata.json');
function createApplicationHandler({env=process.env,makeDatabase}={}){
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_APPLICATION_DATABASE_URL));
  return async(req,res)=>{
    res.setHeader('Cache-Control','private, no-store');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');
    const send=(status,body)=>res.status(status).json(body);
    if(env.TIH_NEON_APPLICATION_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(req.method==='GET'&&req.query?.action==='catalog')return send(200,{courses:catalog,cutover:false});
    if(req.method!=='POST'){res.setHeader('Allow','POST');return send(405,{error:'Method not allowed'});}
    if(req.headers.origin!=='https://'+req.headers.host)return send(403,{error:'Use the preview website to submit or track an application'});
    if(!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||''))return send(415,{error:'JSON required'});
    const body=req.body;
    if(!body||typeof body!=='object'||Array.isArray(body)||!['submit','track'].includes(body.action))return send(400,{error:'Choose a valid application action'});
    const allowed=body.action==='submit'?['action','receipt','name','email','phone','goals','courseId']:['action','receipt'];
    if(Object.keys(body).some(k=>!allowed.includes(k))||typeof body.receipt!=='string'||!/^[0-9a-f]{64}$/.test(body.receipt))return send(400,{error:'A complete 64-character tracking code is required; extra fields are not accepted'});
    if(body.action==='submit'){
      const limits={name:[2,120],email:[3,254],phone:[0,40],goals:[0,2000]};
      for(const [key,[min,max]]of Object.entries(limits))if(typeof body[key]!=='string'||body[key].trim().length<min||body[key].length>max||/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(body[key]))return send(400,{error:'Check your name, email, phone and learning goals'});
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())||typeof body.courseId!=='string'||!Object.hasOwn(catalog,body.courseId))return send(400,{error:'Enter a valid email and choose a listed course'});
    }
    if(!env.TIH_PREVIEW_APPLICATION_DATABASE_URL||typeof env.TIH_APPLICATION_RATE_KEY!=='string'||env.TIH_APPLICATION_RATE_KEY.length<32)return send(503,{error:'Application preview is not configured'});
    try{
      const sql=database(),forwarded=req.headers['x-vercel-forwarded-for']||req.headers['x-real-ip'];
      const ip=typeof forwarded==='string'&&isIP(forwarded.trim())?forwarded.trim():'unknown';
      const action=body.action,key=createHmac('sha256',env.TIH_APPLICATION_RATE_KEY).update('application:'+action+':'+ip).digest('hex');
      const width=action==='submit'?900:300,max=action==='submit'?5:30;
      const limits=await sql`INSERT INTO migration_runtime.application_limits(bucket_key,time_bucket,hits) VALUES(${key},floor(extract(epoch FROM now())/${width})::bigint,1) ON CONFLICT(bucket_key,time_bucket) DO UPDATE SET hits=LEAST(application_limits.hits+1,102) RETURNING hits`;
      const count=Number(limits[0]?.hits);if(!Number.isInteger(count)||count<1)throw Error();
      if(count>max){res.setHeader('Retry-After',String(width));return send(429,{error:'Too many application requests. Please wait before trying again'});}
      const hash=createHash('sha256').update(body.receipt).digest('hex'),id='TIH-PREVIEW-APP-'+hash.slice(0,24);
      const queries=[sql`SELECT set_config('app.application_receipt',${hash},true)`];
      if(action==='submit')queries.push(sql`INSERT INTO public.applications(id,name,email,phone,goals,tracks,status,preview_receipt_hash) VALUES(${id},${body.name.trim()},${body.email.trim().toLowerCase()},${body.phone.trim()},${body.goals.trim()},${JSON.stringify([body.courseId])}::jsonb,'pending',${hash}) ON CONFLICT(id) DO NOTHING RETURNING id`);
      queries.push(sql`SELECT id,submitted_at,status,status_message,updated_at FROM public.applications WHERE preview_receipt_hash=${hash} LIMIT 1`);
      const rows=await sql.transaction(queries),record=rows[rows.length-1]?.[0];
      if(!record)return send(404,{error:'No preview application matches this tracking code'});
      return send(200,{application:record,created:action==='submit'&&rows[1].length>0,accountCreated:false,cutover:false});
    }catch{return send(503,{error:'The application preview is temporarily unavailable. Keep your tracking code and retry the same submission'});}
  };
}
module.exports={createApplicationHandler};
