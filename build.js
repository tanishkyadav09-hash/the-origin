const fs=require('node:fs');
let html=fs.readFileSync('src/index.html','utf8');
for(const [marker,file] of [['STYLE','style.css'],['DATA','data.js'],['CORE','core.js'],['APP','app.js']])html=html.replace('/*'+marker+'*/',()=>fs.readFileSync('src/'+file,'utf8'));
fs.mkdirSync('dist',{recursive:true});fs.writeFileSync('dist/index.html',html);
fs.writeFileSync('dist/catalog.json',JSON.stringify(require('./src/data.js'),null,2));
console.log('Built portable HTML and catalog.');
