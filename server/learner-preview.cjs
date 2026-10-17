'use strict';
const {randomUUID}=require('node:crypto');
const {sessionStudent,clearSessionCookie}=require('./preview-session.cjs');
const catalog=require('./course-metadata.json');
function createLearnerHandler({env=process.env,makeDatabase}={}){
  const database=makeDatabase||(()=>require('@neondatabase/serverless').neon(env.TIH_PREVIEW_LEGACY_DATABASE_URL));
  return async(req,res)=>{
    res.setHeader('Cache-Control','private, no-store');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Vary','Cookie');
    const send=(status,body)=>res.status(status).json(body);
    if(env.TIH_NEON_LEGACY_PREVIEW_ENABLED!=='true')return send(404,{error:'Not found'});
    if(!['GET','POST'].includes(req.method)){res.setHeader('Allow','GET, POST');return send(405,{error:'Method not allowed'});}
    if(req.method==='GET'&&req.query?.action==='catalog')return send(200,{courses:catalog,mode:'isolated learner preview',cutover:false});
    const studentId=sessionStudent(req.headers.cookie,env.TIH_PREVIEW_SESSION_KEY);
    if(!studentId)return send(401,{error:'Sign in again to continue the preview'});
    let body=req.body,action='account';
    if(req.method==='POST'){
      if(req.headers.origin!=='https://'+req.headers.host)return send(403,{error:'Use the preview website to make changes'});
      if(!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||''))return send(415,{error:'JSON required'});
      if(!body||typeof body!=='object'||Array.isArray(body)||typeof body.action!=='string')return send(400,{error:'Choose an action'});
      action=body.action;
      if(action==='logout'){res.setHeader('Set-Cookie',clearSessionCookie());return send(200,{ok:true});}
      if(!['requestAccess','progress','certRequest'].includes(action))return send(400,{error:'Unknown learner action'});
      const allowed=action==='progress'?['action','courseId','completed','expectedStudentId']:['action','courseId','expectedStudentId'];
      if(body.expectedStudentId!==undefined&&body.expectedStudentId!==studentId)return send(409,{error:'The signed-in learner changed. Sign in again before syncing this account.'});
      if(Object.keys(body).some(k=>!allowed.includes(k))||typeof body.courseId!=='string'||!Object.hasOwn(catalog,body.courseId))return send(400,{error:'Choose a listed course; extra fields are not accepted'});
      if(action==='progress'&&(!Number.isInteger(body.completed)||body.completed<0||body.completed>catalog[body.courseId].total))return send(400,{error:'Invalid lesson count'});
    }
    if(!env.TIH_PREVIEW_LEGACY_DATABASE_URL)return send(503,{error:'Preview is not configured'});
    try{
      const sql=database();const queries=[
        sql`SELECT set_config('app.student_id',${studentId},true)`,
        sql`SELECT id,name,email,status,courses,created_at,updated_at FROM public.students WHERE id=${studentId} AND status='active'`
      ];
      if(action==='account'){
        queries.push(sql`SELECT e.* FROM public.enrollments e WHERE e.student_id=${studentId} ORDER BY e.created_at DESC`,sql`SELECT p.* FROM public.progress p WHERE p.student_id=${studentId}`,sql`SELECT c.* FROM public.cert_requests c WHERE c.student_id=${studentId}`,sql`SELECT cert_id,student_id,student_name,course_id,course_title,category,issue_date,verified,created_at FROM public.certificates WHERE student_id=${studentId} AND verified=true`);
        const r=await sql.transaction(queries);if(!r[1]?.length)return send(404,{error:'Active learner profile not found'});
        return send(200,{student:r[1][0],enrollments:r[2],progress:r[3],certRequests:r[4],certificates:r[5]||[],mode:'isolated learner preview',cutover:false});
      }
      const courseId=body.courseId,{title,total}=catalog[courseId];
      if(action==='requestAccess'){
        queries.push(sql`INSERT INTO public.enrollments(student_id,item_id,item_title,payment_status,access_granted) SELECT id,${courseId},${title},'requested',false FROM public.students WHERE id=${studentId} AND status='active' ON CONFLICT(student_id,item_id) DO NOTHING RETURNING item_id`,sql`SELECT item_id,payment_status,access_granted FROM public.enrollments WHERE student_id=${studentId} AND item_id=${courseId}`);
      }else if(action==='progress'){
        queries.push(sql`INSERT INTO public.progress(student_id,course_id,completed_lessons,total_lessons,pct,last_activity_at) SELECT s.id,${courseId},${body.completed},${total},${Math.round(body.completed/total*100)},now() FROM public.students s WHERE s.id=${studentId} AND s.status='active' AND EXISTS(SELECT 1 FROM public.enrollments e WHERE e.student_id=s.id AND e.item_id=${courseId} AND e.access_granted=true) ON CONFLICT(student_id,course_id) DO UPDATE SET completed_lessons=LEAST(GREATEST(progress.completed_lessons,EXCLUDED.completed_lessons),EXCLUDED.total_lessons),total_lessons=EXCLUDED.total_lessons,pct=round(LEAST(GREATEST(progress.completed_lessons,EXCLUDED.completed_lessons),EXCLUDED.total_lessons)::numeric/EXCLUDED.total_lessons*100),last_activity_at=now() RETURNING course_id,completed_lessons,total_lessons,pct`);
        queries.push(sql`INSERT INTO public.activities(student_id,course_id,activity_type,detail) SELECT s.id,${courseId},'progress_saved','Learner-reported progress saved' FROM public.students s WHERE s.id=${studentId} AND s.status='active' AND EXISTS(SELECT 1 FROM public.enrollments e WHERE e.student_id=s.id AND e.item_id=${courseId} AND e.access_granted=true)`);
      }else{
        queries.push(sql`SELECT pg_advisory_xact_lock(hashtext(${studentId}),hashtext(${courseId}))`);
        queries.push(sql`INSERT INTO public.cert_requests(id,student_id,course_id,course_title,status) SELECT ${'TIH-CRQ-'+randomUUID()},s.id,${courseId},${title},'pending' FROM public.students s WHERE s.id=${studentId} AND s.status='active' AND EXISTS(SELECT 1 FROM public.enrollments e WHERE e.student_id=s.id AND e.item_id=${courseId} AND e.access_granted=true) AND EXISTS(SELECT 1 FROM public.progress p WHERE p.student_id=s.id AND p.course_id=${courseId} AND p.completed_lessons>=${total} AND p.pct=100) AND NOT EXISTS(SELECT 1 FROM public.cert_requests c WHERE c.student_id=s.id AND c.course_id=${courseId} AND c.status IN ('pending','approved')) RETURNING id`);
        queries.push(sql`SELECT id,course_id,status,requested_at FROM public.cert_requests WHERE student_id=${studentId} AND course_id=${courseId} AND status IN ('pending','approved') ORDER BY requested_at DESC LIMIT 1`);
      }
      const r=await sql.transaction(queries);if(!r[1]?.length)return send(404,{error:'Active learner profile not found'});
      if(action==='requestAccess'){if(!r[3]?.length)throw Error();return send(200,{created:r[2].length>0,enrollment:r[3][0],cutover:false});}
      if(action==='progress')return r[2]?.length?send(200,{progress:r[2][0],cutover:false}):send(403,{error:'Course access is required before saving progress'});
      return r[4]?.length?send(200,{created:r[3].length>0,certRequest:r[4][0],cutover:false}):send(403,{error:'Course access and completed progress are required. Certificate requests remain subject to staff review'});
    }catch{return send(503,{error:'The isolated learner preview is temporarily unavailable'});}
  };
}
module.exports={createLearnerHandler};
