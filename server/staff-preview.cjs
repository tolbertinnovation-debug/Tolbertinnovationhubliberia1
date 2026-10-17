'use strict';
const {createHash}=require('node:crypto');
const {staffSessionUser,clearStaffSessionCookie}=require('./preview-session.cjs');
const catalog=require('./course-metadata.json');
const metadata=JSON.stringify(catalog);
function createStaffHandler({env=process.env,makeDatabase}={}){
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_STAFF_DATABASE_URL));
  return async(req,res)=>{
    res.setHeader('Cache-Control','private, no-store');res.setHeader('Vary','Cookie');res.setHeader('X-Content-Type-Options','nosniff');
    const send=(s,b)=>res.status(s).json(b);
    if(env.TIH_NEON_STAFF_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(!['GET','POST'].includes(req.method)){res.setHeader('Allow','GET, POST');return send(405,{error:'Method not allowed'});}
    const token=staffSessionUser(req.headers.cookie,env.TIH_PREVIEW_STAFF_SESSION_KEY);if(!token||!/^[0-9a-f]{64}$/.test(token))return send(401,{error:'Administrator sign-in required'});
    const sessionHash=createHash('sha256').update(token).digest('hex');
    if(!env.TIH_PREVIEW_STAFF_DATABASE_URL)return send(503,{error:'Staff preview is not configured'});
    let body=req.body;
    if(req.method==='POST'){
      if(req.headers.origin!=='https://'+req.headers.host)return send(403,{error:'Use the staff preview website to make changes'});
      if(!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||''))return send(415,{error:'JSON required'});
      if(!body||typeof body!=='object'||Array.isArray(body)||typeof body.action!=='string')return send(400,{error:'Choose a staff action'});
      if(body.action==='logout'){
        try{const sql=database();await sql.transaction([sql`SELECT set_config('app.staff_session',${sessionHash},true)`,sql`UPDATE migration_runtime.staff_sessions SET revoked_at=now() WHERE session_hash=${sessionHash} AND revoked_at IS NULL`]);res.setHeader('Set-Cookie',clearStaffSessionCookie());return send(200,{ok:true});}catch{return send(503,{error:'Staff sign-out could not be completed'});}
      }
      const fields={grantAccess:['action','studentId','courseId','reason'],revokeAccess:['action','studentId','courseId','reason'],reviewApplication:['action','id','decision','reason'],reviewCertificate:['action','id','decision','reason'],issueCertificate:['action','id','reason']};
      if(!Object.hasOwn(fields,body.action)||Object.keys(body).some(k=>!fields[body.action].includes(k))||typeof body.reason!=='string'||!body.reason.trim()||body.reason.length>1000)return send(400,{error:'A valid staff action and audit reason are required'});
      if(['grantAccess','revokeAccess'].includes(body.action)){
        if(typeof body.studentId!=='string'||!body.studentId||body.studentId.length>128||typeof body.courseId!=='string'||!Object.hasOwn(catalog,body.courseId))return send(400,{error:'Choose a valid learner and listed course'});
      }else if(typeof body.id!=='string'||!body.id||body.id.length>128)return send(400,{error:'A valid request or application ID is required'});
      if(body.action==='reviewApplication'&&!['pending','approved','rejected'].includes(body.decision))return send(400,{error:'Invalid application decision'});
      if(body.action==='reviewCertificate'&&!['approved','declined'].includes(body.decision))return send(400,{error:'Invalid certificate decision'});
    }
    try{
      const sql=database();const base=[sql`SELECT set_config('app.staff_session',${sessionHash},true)`,sql`SELECT actor AS username FROM migration_runtime.staff_sessions WHERE session_hash=${sessionHash} AND expires_at>now() AND revoked_at IS NULL`];
      const verified=await sql.transaction(base);if(!verified[1]?.length)return send(401,{error:'The staff session expired or was revoked'});const actor=verified[1][0].username;
      if(req.method==='GET'){
        const view=req.query?.view||'summary';const offset=Number(req.query?.offset||0);if(!Number.isSafeInteger(offset)||offset<0||offset>100000)return send(400,{error:'Invalid page offset'});
        const queries={
          summary:()=>sql`SELECT (SELECT count(*) FROM public.students) AS students,(SELECT count(*) FROM public.applications) AS applications,(SELECT count(*) FROM public.enrollments WHERE access_granted=false) AS access_requests,(SELECT count(*) FROM public.cert_requests WHERE status='pending') AS certificate_requests,(SELECT count(*) FROM public.payments) AS payments`,
          students:()=>sql`SELECT id,name,email,phone,status,courses,application_id,created_at,updated_at FROM public.students ORDER BY created_at DESC,id LIMIT 50 OFFSET ${offset}`,
          applications:()=>sql`SELECT * FROM public.applications ORDER BY submitted_at DESC,id LIMIT 50 OFFSET ${offset}`,
          enrollments:()=>sql`SELECT * FROM public.enrollments ORDER BY created_at DESC,id LIMIT 50 OFFSET ${offset}`,
          requests:()=>sql`SELECT * FROM public.cert_requests ORDER BY requested_at DESC,id LIMIT 50 OFFSET ${offset}`,
          certificates:()=>sql`SELECT * FROM public.certificates ORDER BY created_at DESC,cert_id LIMIT 50 OFFSET ${offset}`,
          payments:()=>sql`SELECT * FROM public.payments ORDER BY created_at DESC,id LIMIT 50 OFFSET ${offset}`,
          audit:()=>sql`SELECT * FROM migration_runtime.staff_audit ORDER BY created_at DESC,id LIMIT 50 OFFSET ${offset}`
        };
        if(!Object.hasOwn(queries,view))return send(400,{error:'Unknown staff view'});
        const rows=await sql.transaction([...base,queries[view]()]);if(!rows[1]?.length)return send(403,{error:'Staff account is unavailable in the copied database'});
        return send(200,{view,rows:rows[2],offset,nextOffset:rows[2].length===50?offset+50:null,courses:catalog,mode:'isolated staff preview',cutover:false});
      }
      const reason=body.reason.trim(),action=body.action;let operation,extra,lock;
      if(action==='grantAccess'){
        operation=sql`WITH changed AS (INSERT INTO public.enrollments(student_id,item_id,item_title,payment_status,access_granted,granted_at) SELECT id,${body.courseId},${catalog[body.courseId].title},'pending',true,now() FROM public.students WHERE id=${body.studentId} AND status='active' ON CONFLICT(student_id,item_id) DO UPDATE SET access_granted=true,granted_at=now() RETURNING student_id,item_id,access_granted,payment_status),audited AS (INSERT INTO migration_runtime.staff_audit(actor,action,target,reason) SELECT ${actor},'grant_access',student_id||':'||item_id,${reason} FROM changed) SELECT * FROM changed`;
      }else if(action==='revokeAccess'){
        operation=sql`WITH changed AS (UPDATE public.enrollments SET access_granted=false,granted_at=NULL WHERE student_id=${body.studentId} AND item_id=${body.courseId} RETURNING student_id,item_id,access_granted,payment_status),audited AS (INSERT INTO migration_runtime.staff_audit(actor,action,target,reason) SELECT ${actor},'revoke_access',student_id||':'||item_id,${reason} FROM changed) SELECT * FROM changed`;
      }else if(action==='reviewApplication'){
        operation=sql`WITH changed AS (UPDATE public.applications a SET status=${body.decision},status_message=${reason},updated_at=now() WHERE id=${body.id} AND (${body.decision}<>'approved' OR EXISTS(SELECT 1 FROM public.students s WHERE s.application_id=a.id AND s.status='active')) RETURNING id,status,status_message),audited AS (INSERT INTO migration_runtime.staff_audit(actor,action,target,reason) SELECT ${actor},'review_application',id,${reason} FROM changed) SELECT * FROM changed`;
      }else if(action==='reviewCertificate'){
        operation=sql`WITH changed AS (UPDATE public.cert_requests r SET status=${body.decision},reason=${reason},decided_at=now() WHERE id=${body.id} AND status='pending' AND (${body.decision}<>'approved' OR (EXISTS(SELECT 1 FROM public.students s WHERE s.id=r.student_id AND s.status='active') AND EXISTS(SELECT 1 FROM public.enrollments e WHERE e.student_id=r.student_id AND e.item_id=r.course_id AND e.access_granted=true) AND EXISTS(SELECT 1 FROM public.progress p WHERE p.student_id=r.student_id AND p.course_id=r.course_id AND p.pct=100 AND p.completed_lessons>=(${metadata}::jsonb -> r.course_id ->> 'total')::int))) RETURNING id,status,reason),audited AS (INSERT INTO migration_runtime.staff_audit(actor,action,target,reason) SELECT ${actor},'review_certificate',id,${reason} FROM changed) SELECT * FROM changed`;
      }else{
        const certId='TIH-CERT-'+createHash('sha256').update('tih-certificate-request:'+body.id).digest('hex').slice(0,24).toUpperCase();
        lock=sql`SELECT pg_advisory_xact_lock(hashtext(student_id),hashtext(course_id)) FROM public.cert_requests WHERE id=${body.id}`;
        operation=sql`WITH changed AS (INSERT INTO public.certificates(cert_id,student_id,student_name,course_id,course_title,category,issue_date,verified) SELECT ${certId},s.id,s.name,r.course_id,(${metadata}::jsonb -> r.course_id ->> 'title'),'Course completion',to_char(current_date,'YYYY-MM-DD'),true FROM public.cert_requests r JOIN public.students s ON s.id=r.student_id WHERE r.id=${body.id} AND r.status='approved' AND s.status='active' AND EXISTS(SELECT 1 FROM public.enrollments e WHERE e.student_id=s.id AND e.item_id=r.course_id AND e.access_granted=true) AND EXISTS(SELECT 1 FROM public.progress p WHERE p.student_id=s.id AND p.course_id=r.course_id AND p.pct=100 AND p.completed_lessons>=(${metadata}::jsonb -> r.course_id ->> 'total')::int) AND NOT EXISTS(SELECT 1 FROM public.certificates c WHERE c.student_id=s.id AND c.course_id=r.course_id AND c.verified=true) ON CONFLICT(cert_id) DO NOTHING RETURNING cert_id),audited AS (INSERT INTO migration_runtime.staff_audit(actor,action,target,reason) SELECT ${actor},'issue_certificate',cert_id,${reason} FROM changed) SELECT * FROM changed`;
        extra=sql`SELECT c.cert_id,c.student_name,c.course_title,c.issue_date,c.verified FROM public.certificates c JOIN public.cert_requests r ON r.student_id=c.student_id AND r.course_id=c.course_id WHERE r.id=${body.id} AND c.verified=true ORDER BY c.created_at,c.cert_id LIMIT 1`;
      }
      const operationIndex=lock?3:2;
      const rows=await sql.transaction([...base,...(lock?[lock]:[]),operation,...(extra?[extra]:[])]);if(!rows[1]?.length)return send(403,{error:'Staff account is unavailable in the copied database'});
      if(extra&&rows[operationIndex+1]?.length)return send(200,{created:rows[operationIndex].length>0,certificate:rows[operationIndex+1][0],cutover:false});
      if(!rows[operationIndex]?.length)return send(409,{error:action==='reviewApplication'?'Application not found, or approval requires an existing active learner account':action==='reviewCertificate'?'Request is no longer pending, or access/completion requirements are not met':action==='issueCertificate'?'An approved request, active learner, granted access and complete course progress are required':'The learner or enrollment was not found'});
      return send(200,{result:rows[operationIndex][0],paymentRecorded:false,cutover:false});
    }catch{return send(503,{error:'The isolated staff preview is temporarily unavailable'});}
  };
}
module.exports={createStaffHandler};
