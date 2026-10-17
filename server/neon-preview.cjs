'use strict';
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function createPreviewHandler({env=process.env,fetchImpl=fetch,makeDatabase}={}) {
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_DATABASE_URL));
  return async function handler(req,res) {
    res.setHeader('Cache-Control','private, no-store');
    res.setHeader('Vary','Authorization');
    res.setHeader('X-Content-Type-Options','nosniff');
    const send=(status,body)=>res.status(status).json(body);
    if(env.TIH_NEON_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(req.method!=='GET'){res.setHeader('Allow','GET');return send(405,{error:'Method not allowed'});}
    const action=typeof req.query?.action==='string'?req.query.action:'status';
    if(action==='status')return send(200,{mode:'read-only preview',authentication:'supabase',cutover:false});
    if(action!=='account')return send(404,{error:'Not found'});
    const authorization=req.headers.authorization||'';
    if(typeof authorization!=='string'||!/^Bearer [^\s]{20,8192}$/.test(authorization))return send(401,{error:'Sign in required'});
    if(!env.TIH_PREVIEW_DATABASE_URL||!env.TIH_AUTH_URL||!env.TIH_AUTH_PUBLISHABLE_KEY)return send(503,{error:'Preview is not configured'});
    let user;
    try {
      const authURL=new URL(env.TIH_AUTH_URL);
      if(authURL.protocol!=='https:'||!authURL.hostname.endsWith('.supabase.co')||authURL.pathname!=='/')throw new Error('Invalid authentication configuration');
      const response=await fetchImpl(new URL('/auth/v1/user',authURL),{headers:{Authorization:authorization,apikey:env.TIH_AUTH_PUBLISHABLE_KEY},signal:AbortSignal.timeout(5000),redirect:'error'});
      if(response.status===401||response.status===403)return send(401,{error:'Session expired; sign in again'});
      if(!response.ok)return send(503,{error:'Authentication is temporarily unavailable'});
      user=await response.json();
      if(!user||!UUID.test(user.id))return send(401,{error:'Invalid session'});
    } catch {return send(503,{error:'Authentication is temporarily unavailable'});}
    try {
      const sql=database();
      const results=await sql.transaction([
        sql`SELECT set_config('app.user_id',${user.id},true)`,
        sql`SELECT id,name,email,status,courses,created_at,updated_at FROM public.students WHERE auth_user_id=${user.id}::uuid AND status='active' LIMIT 1`,
        sql`SELECT e.* FROM public.enrollments e JOIN public.students s ON s.id=e.student_id WHERE s.auth_user_id=${user.id}::uuid AND s.status='active' ORDER BY e.created_at DESC`,
        sql`SELECT p.* FROM public.progress p JOIN public.students s ON s.id=p.student_id WHERE s.auth_user_id=${user.id}::uuid AND s.status='active'`,
        sql`SELECT c.* FROM public.cert_requests c JOIN public.students s ON s.id=c.student_id WHERE s.auth_user_id=${user.id}::uuid AND s.status='active'`
      ]);
      if(!results[1]?.length)return send(404,{error:'No active learner profile is linked to this account'});
      return send(200,{student:results[1][0],enrollments:results[2],progress:results[3],certRequests:results[4],mode:'read-only preview'});
    }catch {return send(503,{error:'Preview data is temporarily unavailable'});}
  };
}
module.exports={createPreviewHandler};
