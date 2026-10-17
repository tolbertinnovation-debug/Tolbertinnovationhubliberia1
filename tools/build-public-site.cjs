// Build only intended public website assets. Never copy backend data or SQL.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'public');
const publicDirectories = ['assets','books','content','coursequiz','home-cards','materials','notes','quizzes','videos'];
const extensions = new Set(['.html','.js','.css','.svg','.ico','.png','.jpg','.jpeg','.webp','.gif','.mp3','.mp4','.pdf','.woff','.woff2','.ttf','.otf','.webmanifest','.xml']);
const explicitFiles = new Set(['robots.txt','app-updates.json']);
function copy(source, destination) {
  const info = fs.lstatSync(source);
  if (info.isSymbolicLink()) throw new Error('Symlinks are not published: '+path.relative(root,source));
  const name = path.basename(source);
  if (name.startsWith('.')) return;
  if (info.isDirectory()) {
    fs.mkdirSync(destination,{recursive:true});
    for (const entry of fs.readdirSync(source)) copy(path.join(source,entry),path.join(destination,entry));
  } else if (extensions.has(path.extname(name).toLowerCase()) || explicitFiles.has(name)) {
    fs.mkdirSync(path.dirname(destination),{recursive:true});
    fs.copyFileSync(source,destination);
  }
}
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
for (const entry of fs.readdirSync(root)) {
  const source=path.join(root,entry);
  if (fs.lstatSync(source).isDirectory()) {
    if(publicDirectories.includes(entry)) copy(source,path.join(out,entry));
  } else copy(source,path.join(out,entry));
}
if(!fs.existsSync(path.join(out,'index.html'))) throw new Error('Missing home page');
for (const forbidden of ['backend','supabase','tools','supabase-schema.sql','SECURITY-AUDIT.md']) {
  if(fs.existsSync(path.join(out,forbidden))) throw new Error('Non-public file in output: '+forbidden);
}
console.log('Public site built; server code, database files, SQL and internal reports excluded.');
