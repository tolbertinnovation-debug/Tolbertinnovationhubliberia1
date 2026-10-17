'use strict';
const {sessionCookie}=require('./preview-session.cjs');
const catalog=require('./course-metadata.json');
const AUTH_URL='https://ep-mute-union-zaodwa48.neonauth.c-2.eu-west-2.aws.neon.tech/tih/auth';
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
let jwks;
async function verifyManagedToken(token,testKey){
  const {jwtVerify,createRemoteJWKSet}=await import('jose');
  jwks ||= createRemoteJWKSet(new URL(AUTH_URL+'/.well-known/jwks.json'),{timeoutDuration:5000,cooldownDuration:30000});
  const {payload}=await jwtVerify(token,testKey||jwks,{issuer:new URL(AUTH_URL).origin,audience:new URL(AUTH_URL).origin,algorithms:['EdDSA'],requiredClaims:['sub','exp','iat'],maxTokenAge:'16 minutes'});
  return payload;
}
function createSignupHandler({env=process.env,makeDatabase,verifyToken=verifyManagedToken}={}){
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_SIGNUP_DATABASE_URL));
  return async(req,res)=>{
    res.setHeader('Cache-Control','private, no-store');res.setHeader('Vary','Authorization');res.setHeader('X-Content-Type-Options','nosniff');
    const send=(s,b)=>res.status(s).json(b);
    if(env.TIH_NEON_SIGNUP_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(env.TIH_MANAGED_AUTH_URL!==AUTH_URL)return send(503,{error:'New account preview is not configured'});
    if(req.method==='GET'&&req.query?.action==='config')return send(200,{authUrl:AUTH_URL,cutover:false});
    if(req.method!=='POST'){res.setHeader('Allow','POST');return send(405,{error:'Method not allowed'});}
    if(req.headers.origin!=='https://'+req.headers.host)return send(403,{error:'Use the preview website to activate a test learner profile'});
    if(!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||''))return send(415,{error:'JSON required'});
    if(!req.body||typeof req.body!=='object'||Array.isArray(req.body)||Object.keys(req.body).length)return send(400,{error:'Profile details come from your verified identity, not request fields'});
    const authorization=req.headers.authorization||'';
    if(typeof authorization!=='string'||!/^Bearer [^\s]{20,8192}$/.test(authorization))return send(401,{error:'Sign in to your new test account first'});
    if(!env.TIH_PREVIEW_SIGNUP_DATABASE_URL||typeof env.TIH_PREVIEW_SESSION_KEY!=='string'||env.TIH_PREVIEW_SESSION_KEY.length<32)return send(503,{error:'New account preview is not configured'});
    let identity;
    try{identity=await verifyToken(authorization.slice(7));if(!identity||!UUID.test(identity.sub)||identity.id!==identity.sub||identity.banned===true)return send(401,{error:'Invalid or expired new account session'});}
    catch{return send(401,{error:'Invalid or expired new account session'});}
    if(identity.emailVerified!==true)return send(403,{code:'EMAIL_VERIFICATION_REQUIRED',error:'Verify your email before activating a learner profile'});
    try{
      const sql=database(),scope=sql`SELECT set_config('app.neon_auth_user',${identity.sub},true)`;
      const proof=await sql.transaction([scope,sql`SELECT id,name,email,email_verified,banned,copied_email_exists FROM migration_runtime.signup_identity`]);
      const user=proof[1]?.[0];
      if(!user||user.id!==identity.sub||user.email_verified!==true||user.banned===true)return send(403,{error:'A currently verified, active identity is required'});
      if(user.copied_email_exists)return send(409,{code:'EXISTING_ACCOUNT',error:'Use your existing learner login. This preview does not link or replace copied accounts by email'});
      if(typeof user.name!=='string'||user.name.trim().length<2||user.name.length>120||typeof user.email!=='string'||user.email.length>254)return send(400,{error:'Your verified profile needs a valid name and email'});
      const id='TIH-NEON-'+identity.sub.replaceAll('-','');
      const courses=JSON.stringify(Object.keys(catalog).filter(c=>!c.startsWith('wassce-')).map(id=>({id})));
      const rows=await sql.transaction([
        sql`SELECT set_config('app.neon_auth_user',${identity.sub},true)`,
        sql`INSERT INTO public.students(id,name,email,status,courses,must_change_password,neon_auth_user_id) SELECT ${id},u.name,u.email,'active',${courses}::jsonb,false,u.id FROM migration_runtime.signup_identity u WHERE u.id=${identity.sub}::uuid AND u.email_verified=true AND coalesce(u.banned,false)=false AND u.copied_email_exists=false ON CONFLICT(neon_auth_user_id) DO NOTHING RETURNING id`,
        sql`SELECT id,name,email,status,courses FROM public.students WHERE neon_auth_user_id=${identity.sub}::uuid`
      ]);
      const student=rows[2]?.[0];if(!student||student.status!=='active')return send(403,{error:'The learner profile is unavailable or suspended'});
      res.setHeader('Set-Cookie',sessionCookie(student.id,env.TIH_PREVIEW_SESSION_KEY));
      return send(200,{student,created:rows[1].length>0,accessGranted:false,paymentRecorded:false,cutover:false});
    }catch{return send(503,{error:'The new learner profile could not be activated. Retry after signing in; existing records will be preserved'});}
  };
}
module.exports={createSignupHandler,verifyManagedToken,AUTH_URL};
