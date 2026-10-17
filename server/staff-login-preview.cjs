'use strict';
const {createHash,createHmac,randomBytes}=require('node:crypto');
const {staffSessionCookie}=require('./preview-session.cjs');
function createStaffLoginHandler({env=process.env,fetchImpl=fetch,makeDatabase}={}){
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_STAFF_LOGIN_DATABASE_URL));
  return async(req,res)=>{
    res.setHeader('Cache-Control','private, no-store');res.setHeader('X-Content-Type-Options','nosniff');
    const send=(s,b)=>res.status(s).json(b);
    if(env.TIH_NEON_STAFF_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(req.method!=='POST'){res.setHeader('Allow','POST');return send(405,{error:'Method not allowed'});}
    if(!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||''))return send(415,{error:'JSON required'});
    const body=req.body;if(!body||typeof body!=='object'||Array.isArray(body)||Object.keys(body).some(k=>!['username','password'].includes(k))||typeof body.username!=='string'||!body.username.trim()||body.username.length>128||typeof body.password!=='string'||!body.password||body.password.length>512)return send(400,{error:'Enter your administrator username and password'});
    if(!env.TIH_PREVIEW_STAFF_LOGIN_DATABASE_URL||!env.TIH_AUTH_PUBLISHABLE_KEY||typeof env.TIH_STAFF_RATE_KEY!=='string'||env.TIH_STAFF_RATE_KEY.length<32||typeof env.TIH_PREVIEW_STAFF_SESSION_KEY!=='string'||env.TIH_PREVIEW_STAFF_SESSION_KEY.length<32||env.TIH_AUTH_URL!=='https://oracluubhmxobcnsvcxz.supabase.co')return send(503,{error:'Staff preview is not configured'});
    let sql;
    try{sql=database();const key=createHmac('sha256',env.TIH_STAFF_RATE_KEY).update('staff:'+body.username.trim().toLowerCase()).digest('hex');const r=await sql`INSERT INTO migration_runtime.legacy_login_attempts(identity_key,time_bucket,attempts) VALUES(${key},floor(extract(epoch FROM now())/300)::bigint,1) ON CONFLICT(identity_key,time_bucket) DO UPDATE SET attempts=LEAST(legacy_login_attempts.attempts+1,7) RETURNING attempts`;const n=Number(r[0]?.attempts);if(!Number.isInteger(n)||n<1)throw Error();if(n>5){res.setHeader('Retry-After','300');return send(429,{error:'Too many attempts. Wait five minutes before trying again'});}}
    catch{return send(503,{error:'Staff sign-in is temporarily unavailable'});}
    try{
      const response=await fetchImpl(env.TIH_AUTH_URL+'/rest/v1/rpc/admin_login',{method:'POST',headers:{apikey:env.TIH_AUTH_PUBLISHABLE_KEY,'Content-Type':'application/json'},body:JSON.stringify({p_user:body.username.trim(),p_hash:createHash('sha256').update(body.password,'utf8').digest('hex')}),signal:AbortSignal.timeout(5000),redirect:'error'});
      if(!response.ok)throw Error();const verified=await response.json();if(verified!==true)return send(401,{error:'Administrator credentials were not accepted'});
      const token=randomBytes(32).toString('hex'),sessionHash=createHash('sha256').update(token).digest('hex');
      const rows=await sql.transaction([sql`SELECT set_config('app.staff_login_user',${body.username.trim()},true)`,sql`SELECT username FROM public.app_admins WHERE lower(username)=lower(${body.username.trim()}) LIMIT 1`,sql`INSERT INTO migration_runtime.staff_sessions(session_hash,actor,expires_at) SELECT ${sessionHash},username,now()+interval '15 minutes' FROM public.app_admins WHERE lower(username)=lower(${body.username.trim()})`]);
      if(!rows[1]?.length)return send(403,{error:'The verified staff account needs reconciliation in the copied database'});
      res.setHeader('Set-Cookie',staffSessionCookie(token,env.TIH_PREVIEW_STAFF_SESSION_KEY));return send(200,{ok:true,mode:'isolated staff preview',cutover:false});
    }catch{return send(503,{error:'The existing staff sign-in service is temporarily unavailable'});}
    finally{body.password='';}
  };
}
module.exports={createStaffLoginHandler};
