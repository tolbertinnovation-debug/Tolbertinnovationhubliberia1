'use strict';
function createCertificateHandler({env=process.env,makeDatabase}={}){
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_VERIFY_DATABASE_URL));
  return async(req,res)=>{
    res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
    const send=(s,b)=>res.status(s).json(b);
    if(env.TIH_NEON_PUBLIC_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(req.method!=='GET'){res.setHeader('Allow','GET');return send(405,{error:'Method not allowed'});}
    const certId=typeof req.query?.certId==='string'?req.query.certId.trim().toUpperCase():'';
    if(!/^[A-Z0-9_-]{8,128}$/.test(certId))return send(400,{error:'Enter a valid certificate ID'});
    if(!env.TIH_PREVIEW_VERIFY_DATABASE_URL)return send(503,{error:'Verification preview is not configured'});
    try{const sql=database();const rows=await sql.transaction([sql`SELECT set_config('app.verify_cert_id',${certId},true)`,sql`SELECT cert_id,student_name,course_title,category,issue_date,verified FROM public.certificates WHERE cert_id=${certId} AND verified=true LIMIT 1`]);
      if(!rows[1]?.length)return send(404,{error:'Certificate not found in this preview'});
      return send(200,{certificate:rows[1][0],mode:'isolated verification preview',cutover:false});
    }catch{return send(503,{error:'Certificate verification is temporarily unavailable'});}
  };
}
module.exports={createCertificateHandler};
