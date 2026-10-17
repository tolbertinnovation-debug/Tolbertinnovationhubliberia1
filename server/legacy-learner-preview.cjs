'use strict';
const {createHash,createHmac}=require('node:crypto');
const {sessionCookie}=require('./preview-session.cjs');
function createLegacyLearnerHandler({env=process.env,fetchImpl=fetch,makeDatabase}={}){
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_LEGACY_DATABASE_URL));
  return async(req,res)=>{
    res.setHeader('Cache-Control','private, no-store');res.setHeader('X-Content-Type-Options','nosniff');
    const send=(status,body)=>res.status(status).json(body);
    if(env.TIH_NEON_LEGACY_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(req.method!=='POST'){res.setHeader('Allow','POST');return send(405,{error:'Method not allowed'});}
    if(!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||''))return send(415,{error:'JSON required'});
    const body=req.body;
    if(!body||typeof body!=='object'||Array.isArray(body)||Object.keys(body).some(k=>!['login','password'].includes(k))||typeof body.login!=='string'||!body.login.trim()||body.login.length>254||typeof body.password!=='string'||!body.password||body.password.length>512)return send(400,{error:'Enter your learner email or Student ID and password'});
    if(!env.TIH_PREVIEW_LEGACY_DATABASE_URL||!env.TIH_AUTH_PUBLISHABLE_KEY||typeof env.TIH_LEGACY_RATE_KEY!=='string'||env.TIH_LEGACY_RATE_KEY.length<32||typeof env.TIH_PREVIEW_SESSION_KEY!=='string'||env.TIH_PREVIEW_SESSION_KEY.length<32||env.TIH_AUTH_URL!=='https://oracluubhmxobcnsvcxz.supabase.co')return send(503,{error:'Preview is not configured'});
    const login=body.login.trim();let sql;
    try{
      sql=database();
      const key=createHmac('sha256',env.TIH_LEGACY_RATE_KEY).update(login.toLowerCase()).digest('hex');
      const limits=await sql`INSERT INTO migration_runtime.legacy_login_attempts(identity_key,time_bucket,attempts) VALUES (${key},floor(extract(epoch FROM now())/300)::bigint,1) ON CONFLICT(identity_key,time_bucket) DO UPDATE SET attempts=LEAST(legacy_login_attempts.attempts+1,7) RETURNING attempts`;
      const attempts=Number(limits[0]?.attempts);if(!Number.isInteger(attempts)||attempts<1)throw Error();
      if(attempts>5){res.setHeader('Retry-After','300');return send(429,{error:'Too many attempts. Wait five minutes before trying again'});}
    }catch{return send(503,{error:'Sign-in is temporarily unavailable'});}
    let verified;
    try{
      const verify=async hash=>{
        const response=await fetchImpl(env.TIH_AUTH_URL+'/rest/v1/rpc/student_login?select=id,status',{
          method:'POST',headers:{apikey:env.TIH_AUTH_PUBLISHABLE_KEY,'Content-Type':'application/json'},
          body:JSON.stringify({p_login:login,p_hash:hash}),signal:AbortSignal.timeout(5000),redirect:'error'
        });
        if(!response.ok)throw Error();const rows=await response.json();if(!Array.isArray(rows))throw Error();
        return rows.length===1&&typeof rows[0].id==='string'&&rows[0].id.length<=128&&rows[0].status==='active'?rows[0]:null;
      };
      verified=await verify(createHash('sha256').update(body.password,'utf8').digest('hex'));
      if(!verified)return send(401,{error:'Sign-in failed. Check your email or Student ID and password'});
    }catch{return send(503,{error:'The existing sign-in service is temporarily unavailable'});}
    try{
      const rows=await sql.transaction([
        sql`SELECT set_config('app.student_id',${verified.id},true)`,
        sql`SELECT id,name,email,status,courses,created_at,updated_at FROM public.students WHERE id=${verified.id} AND status='active'`,
        sql`SELECT e.* FROM public.enrollments e JOIN public.students s ON s.id=e.student_id WHERE s.id=${verified.id} AND s.status='active' ORDER BY e.created_at DESC`,
        sql`SELECT p.* FROM public.progress p JOIN public.students s ON s.id=p.student_id WHERE s.id=${verified.id} AND s.status='active'`,
        sql`SELECT c.* FROM public.cert_requests c JOIN public.students s ON s.id=c.student_id WHERE s.id=${verified.id} AND s.status='active'`
      ]);
      if(!rows[1]?.length)return send(404,{error:'Sign-in worked, but the copied learner profile needs reconciliation'});
      res.setHeader('Set-Cookie',sessionCookie(verified.id,env.TIH_PREVIEW_SESSION_KEY));
      return send(200,{student:rows[1][0],enrollments:rows[2],progress:rows[3],certRequests:rows[4],mode:'legacy login preview',authentication:'supabase legacy verification',cutover:false});
    }catch{return send(503,{error:'Copied learner records could not be read'});}
    finally{body.password='';}
  };
}
module.exports={createLegacyLearnerHandler};
