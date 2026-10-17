'use strict';
const {createHmac,timingSafeEqual}=require('node:crypto');
const NAME='__Host-tih_preview';
const lifetime=900;
function signature(value,key){return createHmac('sha256',key).update('tih-learner-preview:'+value).digest('base64url');}
function sessionCookie(studentId,key,now=Math.floor(Date.now()/1000)){
  if(typeof key!=='string'||key.length<32)throw Error('Session configuration missing');
  const payload=Buffer.from(JSON.stringify({studentId,iat:now,exp:now+lifetime})).toString('base64url');
  return `${NAME}=${payload}.${signature(payload,key)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${lifetime}`;
}
function sessionStudent(cookie,key,now=Math.floor(Date.now()/1000)){
  try{
    if(typeof cookie!=='string'||typeof key!=='string'||key.length<32)return null;
    const matches=cookie.split(';').map(x=>x.trim()).filter(x=>x.startsWith(NAME+'='));if(matches.length!==1)return null;
    const token=matches[0].slice(NAME.length+1);if(token.length>1024)return null;
    const parts=token.split('.');if(parts.length!==2)return null;
    const expected=Buffer.from(signature(parts[0],key)),actual=Buffer.from(parts[1]);
    if(expected.length!==actual.length||!timingSafeEqual(expected,actual))return null;
    const data=JSON.parse(Buffer.from(parts[0],'base64url').toString('utf8'));
    if(typeof data.studentId!=='string'||!data.studentId||data.studentId.length>128||!Number.isInteger(data.iat)||!Number.isInteger(data.exp)||data.iat>now+30||data.exp<=now||data.exp-data.iat!==lifetime)return null;
    return data.studentId;
  }catch{return null;}
}
function clearSessionCookie(){return `${NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;}
const STAFF_NAME='__Host-tih_staff_preview';
function staffKey(key){if(typeof key!=='string'||key.length<32)throw Error('Staff session configuration missing');return createHmac('sha256',key).update('tih-staff-session-domain').digest('hex');}
function staffSessionCookie(username,key,now){return sessionCookie(username,staffKey(key),now).replace(NAME+'=',STAFF_NAME+'=');}
function staffSessionUser(cookie,key,now){
  try{if(typeof cookie!=='string')return null;const parts=cookie.split(';').map(x=>x.trim()).filter(x=>x.startsWith(STAFF_NAME+'='));if(parts.length!==1)return null;return sessionStudent(parts[0].replace(STAFF_NAME+'=',NAME+'='),staffKey(key),now);}catch{return null;}
}
function clearStaffSessionCookie(){return clearSessionCookie().replace(NAME+'=',STAFF_NAME+'=');}
module.exports={sessionCookie,sessionStudent,clearSessionCookie,staffSessionCookie,staffSessionUser,clearStaffSessionCookie};
