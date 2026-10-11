const {test}=require('node:test'),assert=require('node:assert/strict');
const {unlocked}=require('../src/study-model.js');
const course={lessons:[{id:'read',kind:'lesson'},{id:'quiz',kind:'quiz'},{id:'project',kind:'project'},{id:'next',kind:'lesson'}]};
test('topics unlock in order after reading, passing and project completion',()=>{
 const state={completed:[],quizScores:{},projects:{}};
 assert.equal(unlocked(course,state,'read'),true);assert.equal(unlocked(course,state,'quiz'),false);
 state.completed.push('read');assert.equal(unlocked(course,state,'quiz'),true);
 state.quizScores.quiz={best:69};assert.equal(unlocked(course,state,'project'),false);
 state.quizScores.quiz.best=70;assert.equal(unlocked(course,state,'project'),true);
 assert.equal(unlocked(course,state,'next'),false);state.projects.project={complete:true};
 assert.equal(unlocked(course,state,'next'),true);assert.equal(unlocked(course,state,'read'),true);
});
test('legacy progress cannot skip gaps and unknown topics stay locked',()=>{
 const state={completed:[],quizScores:{quiz:{best:100}},projects:{project:{complete:true}}};
 assert.equal(unlocked(course,state,'next'),false);assert.equal(unlocked(course,state,'missing'),false);
});
