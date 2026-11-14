const Experiments = (() => {
function select(program='all'){return EXPERIMENT_DATA.runs.filter(r=>program==='all'||r.source_id===program);}
function quenching(width='all'){return select('BASS2015').filter(r=>r.outcome==='Quenched'&&!r.oxygen_suspect&&(width==='all'||r.width_cm===Number(width)));}
function spread(){return select('SAFFIRE2017').filter(r=>Number.isFinite(r.spread_mm_s));}
function compatibility(a,b){if(a.source_id!==b.source_id)return 'Different studies: do not pool outcomes or infer scale effects.';if(a.oxygen_suspect||b.oxygen_suspect)return 'Flagged oxygen reading: exclude from numerical condition comparison.';if(a.reused||b.reused)return 'Reused fuel: not a matched fresh-sample comparison.';if(a.width_cm!==b.width_cm||a.direction!==b.direction)return 'Geometry or direction differs: descriptive context only.';return 'Within-study descriptive comparison; no causal inference or uncertainty estimate.';}
function csv(rows){const keys=['id','source_id','source_row','program','width_cm','length_cm','length_approx','thickness_mm','thickness_approx','pressure_atm','oxygen_start_pct','oxygen_end_pct','oxygen_approx','oxygen_suspect','flow_start_cm_s','flow_end_cm_s','flow_protocol','direction','spread_mm_s','burn_duration_s','outcome','reused','oxygen_basis','quality_note','source_pdf','source_reference'];const quote=v=>'"'+String(v??'').replace(/"/g,'""')+'"';return [keys.map(quote).join(','),...rows.map(r=>{const source=EXPERIMENT_DATA.sources.find(s=>s.id===r.source_id);return keys.map(k=>quote(k==='source_pdf'?source.pdf:k==='source_reference'?source.reference:r[k])).join(',');})].join('\r\n');}
return {select,quenching,spread,compatibility,csv};
})();
if(typeof module!=='undefined')module.exports=Experiments;
