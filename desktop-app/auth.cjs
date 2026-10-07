const {boundedJson}=require('./network.cjs');
const FULL_COURSES=['computer-literacy','ielts','project-mgmt','webdev','office','accounting-bookkeeping','cybersecurity','android','design','ai-cybersecurity','data','leadership','english-success','toefl','sat','bible-foundations'];
const OFFLINE_WINDOW=7*24*60*60*1000;
class AccessError extends Error{}
class NetworkError extends Error{}
function canStudy(session,course='computer-literacy',now=Date.now()){return !!session&&now>=session.verifiedAt&&now-session.verifiedAt<OFFLINE_WINDOW&&session.grants.includes(course);}
function publicAccount(session){const approvedCourses=FULL_COURSES.filter(id=>canStudy(session,id));return session?{approvedCourses,studentId:session.studentId,name:session.name,approved:approvedCourses.length>0,verifiedAt:session.verifiedAt,expiresAt:session.verifiedAt+OFFLINE_WINDOW}:null;}
class HubApi{
  constructor(config){this.base=new URL(config.url).origin;this.key=config.anonKey;}
  async request(path,body,token){
    let response;
    try{response=await fetch(this.base+'/'+path,{method:body?'POST':'GET',headers:{apikey:this.key,...(token?{Authorization:'Bearer '+token}:{}),...(body?{'Content-Type':'application/json'}:{})},body:body?JSON.stringify(body):undefined,redirect:'error',signal:AbortSignal.timeout(25000)});}catch{throw new NetworkError('Unable to connect. Check your internet connection and try again.');}
    if(response.status===429||response.status>=500)throw new NetworkError('TIH Learning is temporarily unavailable. Try again shortly.');
    if(!response.ok)throw new AccessError('Sign-in or account verification failed. Check your email and password, or contact TIH support.');
    try{return await boundedJson(response);}catch{throw new NetworkError('TIH returned an unreadable response. Try again shortly.');}
  }
  async profile(tokens){
    if(typeof tokens.access_token!=='string'||typeof tokens.refresh_token!=='string')throw new AccessError('Account credentials could not be verified.');
    const rows=await this.request('rest/v1/rpc/student_me?select=id,name,status',{},tokens.access_token);
    if(!Array.isArray(rows)||rows.length!==1)throw new AccessError('Your account is not linked to a TIH student profile. Contact TIH support.');
    const student=rows[0];if(student.status!=='active')throw new AccessError('Your TIH account is not active. Please contact TIH support.');
    if(typeof student.id!=='string'||!/^[-a-zA-Z0-9]{1,80}$/.test(student.id))throw new AccessError('Your student identity could not be verified.');
    const query=new URLSearchParams({student_id:'eq.'+student.id,select:'student_id,item_id,access_granted,payment_status'});
    const enrollments=await this.request('rest/v1/enrollments?'+query,null,tokens.access_token);
    if(!Array.isArray(enrollments))throw new AccessError('Your course access could not be verified.');
    const grants=enrollments.filter(e=>e.student_id===student.id&&(e.access_granted===true||['paid','confirmed'].includes(e.payment_status))).map(e=>e.item_id).filter(id=>typeof id==='string');
    return {accessToken:tokens.access_token,refreshToken:tokens.refresh_token,studentId:student.id,name:String(student.name||'Learner').slice(0,80),grants:[...new Set(grants)],verifiedAt:Date.now()};
  }
  async signIn(email,password){if(typeof email!=='string'||typeof password!=='string'||!email.trim()||!password||email.length>320||password.length>1000)throw new AccessError('Enter your email and password.');return this.profile(await this.request('auth/v1/token?grant_type=password',{email:email.trim(),password}));}
  async refresh(old,onRotated){const tokens=await this.request('auth/v1/token?grant_type=refresh_token',{refresh_token:old.refreshToken});if(typeof tokens.access_token!=='string'||typeof tokens.refresh_token!=='string')throw new AccessError('Sign in again to verify your account.');onRotated({...old,accessToken:tokens.access_token,refreshToken:tokens.refresh_token});const next=await this.profile(tokens);if(next.studentId!==old.studentId)throw new AccessError('Your account changed. Please sign in again.');return next;}
}
module.exports={FULL_COURSES,HubApi,AccessError,NetworkError,canStudy,publicAccount,OFFLINE_WINDOW};


