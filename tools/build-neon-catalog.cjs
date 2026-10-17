'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const context={window:null,COURSES_DB:{},console:{log(){},warn(){}},setTimeout(){}};context.window=context;vm.createContext(context);
const execute=file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{timeout:10000});
execute('courses-lite.js');
execute('wassce-data.js');
execute('wassce-course.js');
const loader=fs.readFileSync(path.join(root,'tih-course-loader.js'),'utf8');
for(const [,id,file]of loader.matchAll(/"(wassce-[^"]+)": "(wassce-[^"]+curriculum\.js)"/g)){execute(file);if(!context.COURSES_DB[id])throw Error('Missing curriculum: '+id);}
for(const id of ['wassce-integrated-science','wassce-social-studies'])context.WassceCourse.build(id);
const metadata={};for(const [id,c]of Object.entries(context.COURSES_DB)){const total=c.modules.reduce((n,m)=>n+(m.lessons||[]).length,0);if(!c.title||!Number.isInteger(total)||total<1)throw Error('Invalid course metadata: '+id);metadata[id]={title:c.title,total};}
fs.writeFileSync(path.join(root,'server/course-metadata.json'),JSON.stringify(metadata,null,2)+'\n');
fs.writeFileSync(path.join(root,'server/course-catalog.json'),JSON.stringify(Object.fromEntries(Object.entries(metadata).map(([id,c])=>[id,c.title])),null,2)+'\n');
console.log('Prepared '+Object.keys(metadata).length+' course metadata records.');
