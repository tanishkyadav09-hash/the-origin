const Core = (() => {
const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fields = ['oxygen','pressure','airflow','extinction'];
const tokens = q => q.toLowerCase().match(/[a-z0-9]+/g)?.filter(w=>w.length>2&&!['the','what','how','does','did','are','and','for','from','with','which','nasa','research','experiments','experiment','about','this','that','can','our','into','have','has'].includes(w))||[];
function retrieve(q, records) { const terms=tokens(q); if(!terms.length)return []; return records.map(r=>{const hay=[r.program,r.experiment,r.title,r.category,r.finding,r.materials].join(' ').toLowerCase();return {r,score:terms.filter(t=>hay.includes(t)).length};}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.r); }
function filter(records,q='',program='',fuel='',environment=''){return records.filter(r=>(!program||r.program===program)&&(!fuel||r.fuel===fuel)&&(!environment||r.environment===environment)&&JSON.stringify(r).toLowerCase().includes(q.toLowerCase().trim()));}
function priority(r){const traceability=r.status==='Source checked'?2:1;const detail=r.type==='NTRS presentation'?1:0;return {score:r.relevance+traceability+detail,relevance:r.relevance,traceability,detail};}
function coverage(records){return fields.map(key=>({key,count:records.filter(r=>Number.isFinite(r[key])).length,total:records.length}));}
function validateDraft(d){if(!d||typeof d!=='object'||Array.isArray(d))throw Error('Provide a JSON object.');for(const k of ['title','program','url','summary'])if(typeof d[k]!=='string'||!d[k].trim()||d[k].length>3000)throw Error('Title, program, URL and summary must be non-empty text (up to 3,000 characters).');const u=new URL(d.url);if(u.protocol!=='https:')throw Error('Use an HTTPS source URL.');return {title:d.title.trim(),program:d.program.trim(),url:u.href,summary:d.summary.trim(),status:'Unverified draft'};}
return {esc,fields,retrieve,filter,priority,coverage,validateDraft};
})();
if(typeof module!=='undefined')module.exports=Core;
