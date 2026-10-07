// Course progress and scores are local study records, never official credentials.
function grade(questions,answers){
  if(!Array.isArray(questions)||!questions.length||!Array.isArray(answers)||answers.length!==questions.length||answers.some((a,i)=>!Number.isInteger(a)||a<0||a>=questions[i].options.length))throw Error('Answer every question before submitting.');
  const correct=answers.filter((a,i)=>a===questions[i].answer).length;
  const score=Math.floor(correct*100/questions.length);
  return {score,correct,total:questions.length,passed:score>=70};
}
function progress(course,state){
  const lessons=course.lessons||course.modules.flatMap(m=>m.lessons);
  const done=l=>l.kind==='quiz'?(state.quizScores?.[l.id]?.best||0)>=70:l.kind==='project'?state.projects?.[l.id]?.complete===true:state.completed.includes(l.id);
  const count=kind=>{const list=lessons.filter(l=>l.kind===kind);return {done:list.filter(done).length,total:list.length};};
  const read=count('lesson'),quizzes=count('quiz'),projects=count('project'),completed=lessons.filter(done).length;
  return {read,quizzes,projects,completed,total:lessons.length,percent:Math.floor(completed*100/lessons.length),finished:completed===lessons.length};
}
if(typeof module!=='undefined'&&module.exports)module.exports={grade,progress};else globalThis.TIHStudy={grade,progress};
