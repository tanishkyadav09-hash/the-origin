const fs=require('node:fs');
let html=fs.readFileSync('src/index.html','utf8');
for(const [marker,file] of [['STYLE','style.css'],['DATA','data.js'],['CORE','core.js'],['EXPERIMENTS','experiments.js'],['APP','app.js']])html=html.replace('/*'+marker+'*/',()=>fs.readFileSync('src/'+file,'utf8'));
html=html.replace('/*EXPERIMENT_DATA*/',()=> 'const EXPERIMENT_DATA = '+fs.readFileSync('data/experiments.json','utf8')+';');
html=html.replaceAll('/*BRAND_IMAGE*/','data:image/jpeg;base64,'+fs.readFileSync('assets/the-origin-logo.jpg').toString('base64'));
fs.mkdirSync('dist',{recursive:true});fs.writeFileSync('dist/index.html',html);
fs.writeFileSync('dist/catalog.json',JSON.stringify(require('./src/data.js'),null,2));
console.log('Built portable HTML and catalog.');

fs.copyFileSync('data/experiments.json','dist/experiments.json');
const vm=require('node:vm'); const ctx={EXPERIMENT_DATA:JSON.parse(fs.readFileSync('data/experiments.json','utf8')),module:{exports:{}}};vm.runInNewContext(fs.readFileSync('src/experiments.js','utf8'),ctx);fs.writeFileSync('dist/experiments.csv',ctx.module.exports.csv(ctx.EXPERIMENT_DATA.runs));
