import { OPEN_QUESTIONS } from './open-questions.js';
import { TOPIC_LABELS, SECTION_LABELS } from './questions.js';

const KEY='kdmOpenTrainingV1';
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{};}catch{return {};}};
const save=x=>localStorage.setItem(KEY,JSON.stringify(x));

function renderCard(q, onDone){
  const card=document.createElement('article');
  card.className='kdm-open-card';
  card.innerHTML=`
    <div class="kdm-open-meta"><span>${SECTION_LABELS[q.section]||q.section}</span><span>${TOPIC_LABELS[q.topic]||q.topic}</span><strong>${q.points} P</strong></div>
    <div class="kdm-operator">${q.operator}</div>
    <h3>${q.prompt}</h3>
    <textarea rows="7" placeholder="Schreibe deine Antwort so, wie du sie in der IHK-Prüfung formulieren würdest …"></textarea>
    <div class="kdm-open-actions"><button class="kdm-btn reveal" type="button">Musterlösung & Bewertung öffnen</button></div>
    <div class="kdm-rubric" hidden></div>`;
  const rub=card.querySelector('.kdm-rubric');
  card.querySelector('.reveal').onclick=()=>{
    rub.hidden=false;
    rub.innerHTML=`<div class="kdm-model"><strong>Musterlösung</strong><p>${q.model}</p></div><h4>Punkte selbst vergeben</h4><div class="kdm-rubric-items"></div><div class="kdm-self-score">0 / ${q.points} Punkte</div><button class="kdm-btn finish" type="button">Bewertung speichern</button>`;
    const list=rub.querySelector('.kdm-rubric-items');
    q.rubric.forEach(([text,pts])=>{const l=document.createElement('label');l.className='kdm-rubric-item';l.innerHTML=`<input type="checkbox" data-points="${pts}"><span>${text}</span><strong>${pts} P</strong>`;list.appendChild(l);});
    const update=()=>{const score=[...rub.querySelectorAll('input:checked')].reduce((a,x)=>a+Number(x.dataset.points),0);rub.querySelector('.kdm-self-score').textContent=`${score} / ${q.points} Punkte`;return score;};
    rub.querySelectorAll('input').forEach(x=>x.onchange=update);
    rub.querySelector('.finish').onclick=()=>{const score=update();const st=load();st[q.id]={score,max:q.points,date:new Date().toISOString(),topic:q.topic};save(st);rub.querySelectorAll('input').forEach(x=>x.disabled=true);rub.querySelector('.finish').disabled=true;onDone(score,q.points);};
    card.querySelector('.reveal').disabled=true;
  };
  return card;
}

function init(root){
  const sections=['all','p12','p13','wiso'];
  root.innerHTML=`<section class="kdm-open-head"><span class="kdm-kicker">IHK-ANTWORTTRAINING</span><h2>Offene Aufgaben wie in der echten Prüfung</h2><p>Erst selbst formulieren, danach Musterlösung öffnen und Punkte anhand der Bewertungskriterien vergeben.</p><div class="kdm-open-controls"><label>Bereich <select class="sec">${sections.map(s=>`<option value="${s}">${s==='all'?'Alle Bereiche':SECTION_LABELS[s]}</option>`).join('')}</select></label><label>Anzahl <select class="count"><option>5</option><option selected>8</option><option>12</option></select></label><button class="kdm-btn start" type="button">Neue Runde</button></div><div class="kdm-open-score"></div></section><div class="kdm-open-list"></div>`;
  const render=()=>{const sec=root.querySelector('.sec').value,count=Number(root.querySelector('.count').value);const pool=OPEN_QUESTIONS.filter(q=>sec==='all'||q.section===sec);const chosen=shuffle(pool).slice(0,Math.min(count,pool.length));const list=root.querySelector('.kdm-open-list');list.innerHTML='';let done=0,score=0,max=0;const scorebox=root.querySelector('.kdm-open-score');scorebox.textContent=`0 von ${chosen.length} bewertet`;chosen.forEach(q=>list.appendChild(renderCard(q,(s,m)=>{done++;score+=s;max+=m;scorebox.innerHTML=done===chosen.length?`<strong>${score} / ${max} Punkte (${Math.round(score/max*100)} %)</strong>`:`${done} von ${chosen.length} bewertet · ${score}/${max} Punkte`;})));};
  root.querySelector('.start').onclick=render;render();
}

document.querySelectorAll('.kdm-open-root').forEach(init);
