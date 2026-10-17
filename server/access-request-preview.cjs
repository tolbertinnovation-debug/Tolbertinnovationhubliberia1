'use strict';
const catalog=require('./course-catalog.json');
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function createAccessRequestHandler({env=process.env,fetchImpl=fetch,makeDatabase}={}){
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_REQUEST_DATABASE_URL));
  return async(req,res)=>{
    res.setHeader('Cache-Control','private, no-store');res.setHeader('Vary','Authorization');res.setHeader('X-Content-Type-Options','nosniff');
    const send=(status,body)=>res.status(status).json(body);
    if(env.TIH_NEON_WRITES_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(req.method==='GET'&&req.query?.action==='config')return send(200,{authUrl:env.TIH_AUTH_URL,publishableKey:env.TIH_AUTH_PUBLISHABLE_KEY,courses:catalog});
    if(req.method!=='POST'){res.setHeader('Allow','POST');return send(405,{error:'Method not allowed'});}
    const authorization=req.headers.authorization||'';
    if(typeof authorization!=='string'||!/^Bearer [^\s]{20,8192}$/.test(authorization))return send(401,{error:'Sign in required'});
    if(!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||''))return send(415,{error:'JSON required'});
    const body=req.body;
    if(!body||typeof body!=='object'||Array.isArray(body)||Object.keys(body).length!==1||typeof body.courseId!=='string'||!Object.hasOwn(catalog,body.courseId))return send(400,{error:'Choose a listed course; no other fields are accepted'});
    if(!env.TIH_PREVIEW_REQUEST_DATABASE_URL||!env.TIH_AUTH_URL||!env.TIH_AUTH_PUBLISHABLE_KEY)return send(503,{error:'Preview is not configured'});
    let user;
    try{
      if(env.TIH_AUTH_URL!=='https://oracluubhmxobcnsvcxz.supabase.co')throw Error();
      const auth=await fetchImpl(env.TIH_AUTH_URL+'/auth/v1/user',{headers:{Authorization:authorization,apikey:env.TIH_AUTH_PUBLISHABLE_KEY},signal:AbortSignal.timeout(5000),redirect:'error'});
      if(auth.status===401||auth.status===403)return send(401,{error:'Sign in again'});
      if(!auth.ok)throw Error();user=await auth.json();
      if(!UUID.test(user?.id))return send(401,{error:'Invalid session'});
    }catch{return send(503,{error:'Authentication is temporarily unavailable'});}
    try{
      const sql=database();
      const rows=await sql.transaction([
        sql`SELECT set_config('app.user_id',${user.id},true)`,
        sql`SELECT id FROM public.students WHERE auth_user_id=${user.id}::uuid AND status='active' LIMIT 1`,
        sql`INSERT INTO public.enrollments (student_id,item_id,item_title,payment_status,access_granted) SELECT id,${body.courseId},${catalog[body.courseId]},'requested',false FROM public.students WHERE auth_user_id=${user.id}::uuid AND status='active' ON CONFLICT (student_id,item_id) DO NOTHING RETURNING item_id`,
        sql`SELECT e.item_id,e.payment_status,e.access_granted FROM public.enrollments e JOIN public.students s ON s.id=e.student_id WHERE s.auth_user_id=${user.id}::uuid AND s.status='active' AND e.item_id=${body.courseId}`
      ]);
      if(!rows[1]?.length)return send(404,{error:'No active learner profile is linked'});
      if(!rows[3]?.length)throw Error();
      return send(200,{mode:'isolated write preview',cutover:false,created:rows[2].length>0,enrollment:rows[3][0]});
    }catch{return send(503,{error:'Preview request could not be saved'});}
  };
}
module.exports={createAccessRequestHandler};
