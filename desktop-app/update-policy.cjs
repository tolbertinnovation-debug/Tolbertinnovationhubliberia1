const PERIOD=14*24*60*60*1000;
function version(value){if(typeof value!=='string'||!/^\d+\.\d+\.\d+$/.test(value))throw Error('Invalid app version');return value.split('.').map(Number);}
function newer(a,b){const x=version(a),y=version(b);for(let i=0;i<3;i++){if(x[i]!==y[i])return x[i]>y[i];}return false;}
function validate(raw){const p=raw?.windows;if(raw?.schema!==1||!p||!Number.isFinite(Date.parse(p.requiredAfter)))throw Error('Invalid update policy');version(p.latest);return {latest:p.latest,requiredAfter:Date.parse(p.requiredAfter)};}
function status(current,cached,now=Date.now()){
  const verified=Number(cached?.verifiedAt),valid=Number.isFinite(verified)&&verified>0&&now>=verified&&now-verified<PERIOD;
  if(!valid)return {blocked:true,reason:'verification',message:'Connect to the internet to check for required updates. TIH checks your app version every 14 days.'};
  const p=cached.policy,available=newer(p.latest,current),blocked=available&&now>=p.requiredAfter;
  return {blocked,available,latest:p.latest,reason:blocked?'upgrade':null,message:available?(blocked?'A required TIH Learning update is ready. Install it from LibApps to continue.':'A TIH Learning update is available. Upgrade from LibApps by '+new Date(p.requiredAfter).toLocaleDateString()+'.'):null};
}
module.exports={PERIOD,newer,validate,status};
