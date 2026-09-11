import { QUESTION_BANK, TOPIC_LABELS, SECTION_LABELS } from './questions.js';

const BASE = '/kdm-trainer';
const STATS_KEY = 'kdmTrainerStatsV1';

const fmt = (n, digits = 2) => new Intl.NumberFormat('de-DE', { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(Number(n));
const money = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 }).format(Number(n));
const pct = (n, digits = 2) => `${fmt(n, digits)} %`;
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const sameArray = (a, b) => a.length === b.length && [...a].sort().every((v, i) => v === [...b].sort()[i]);

function loadStats() {
  try { return JSON.parse(localStorage.getItem(STATS_KEY)) || { topics: {}, exams: {}, examTopics: {} }; }
  catch { return { topics: {}, exams: {}, examTopics: {} }; }
}
function saveStats(stats) { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); }
function recordTopicResult(topic, correct) {
  const s = loadStats();
  const t = s.topics[topic] || { correct: 0, total: 0, attempts: 0 };
  t.correct += correct ? 1 : 0; t.total += 1; t.attempts += 1;
  s.topics[topic] = t; saveStats(s);
}
function recordExam(section, result, topicBreakdown) {
  const s = loadStats();
  s.exams[section] ||= [];
  s.exams[section].push({ date: new Date().toISOString(), score: result.score, correct: result.correct, total: result.total });
  s.exams[section] = s.exams[section].slice(-12);
  Object.entries(topicBreakdown).forEach(([topic, r]) => {
    const t = s.examTopics[topic] || { correct: 0, total: 0 };
    t.correct += r.correct; t.total += r.total; s.examTopics[topic] = t;
  });
  saveStats(s);
}

function feedbackBox(correct, explanation) {
  const div = document.createElement('div');
  div.className = `kdm-feedback ${correct ? 'ok' : 'bad'}`;
  div.innerHTML = `<strong>${correct ? '✓ Richtig' : '✗ Noch nicht richtig'}</strong><div>${explanation || ''}</div>`;
  return div;
}

function renderQuestion(q, { exam = false, onChecked = null } = {}) {
  const card = document.createElement('article');
  card.className = 'kdm-question';
  card.dataset.id = q.id;
  const title = document.createElement('div');
  title.className = 'kdm-question-title';
  title.textContent = q.prompt;
  card.appendChild(title);

  const body = document.createElement('div');
  body.className = 'kdm-question-body';
  card.appendChild(body);
  let getAnswer;

  if (q.type === 'single') {
    const groupName = `${q.id}-${Math.random().toString(36).slice(2)}`;
    q.options.forEach((opt, i) => {
      const label = document.createElement('label'); label.className = 'kdm-choice';
      label.innerHTML = `<input type="radio" name="${groupName}" value="${i}"><span>${opt}</span>`;
      body.appendChild(label);
    });
    getAnswer = () => {
      const checked = body.querySelector('input:checked');
      return checked ? Number(checked.value) : null;
    };
  } else if (q.type === 'multi') {
    q.options.forEach((opt, i) => {
      const label = document.createElement('label'); label.className = 'kdm-choice';
      label.innerHTML = `<input type="checkbox" value="${i}"><span>${opt}</span>`;
      body.appendChild(label);
    });
    getAnswer = () => [...body.querySelectorAll('input:checked')].map(x => Number(x.value));
  } else if (q.type === 'numeric') {
    const label = document.createElement('label'); label.className = 'kdm-field kdm-numeric-answer';
    label.innerHTML = `<span>Deine Antwort</span><div class="kdm-input-wrap"><input type="number" step="any" placeholder="Ergebnis"><em>${q.unit || ''}</em></div>`;
    body.appendChild(label);
    getAnswer = () => {
      const input = body.querySelector('input');
      return input.value === '' ? null : Number(input.value);
    };
  } else if (q.type === 'match') {
    const rights = shuffle(q.pairs.map(p => p[1]));
    q.pairs.forEach(([left]) => {
      const row = document.createElement('label'); row.className = 'kdm-match-row';
      const select = document.createElement('select'); select.innerHTML = `<option value="">— auswählen —</option>` + rights.map(r => `<option value="${r}">${r}</option>`).join('');
      row.innerHTML = `<span>${left}</span>`; row.appendChild(select); body.appendChild(row);
    });
    getAnswer = () => [...body.querySelectorAll('select')].map(s => s.value);
  } else if (q.type === 'order') {
    const list = document.createElement('div'); list.className = 'kdm-order-list';
    shuffle(q.items).forEach(item => {
      const row = document.createElement('div'); row.className = 'kdm-order-item'; row.dataset.value = item;
      row.innerHTML = `<span>${item}</span><span class="kdm-order-actions"><button type="button" aria-label="nach oben">↑</button><button type="button" aria-label="nach unten">↓</button></span>`;
      const [up, down] = row.querySelectorAll('button');
      up.onclick = () => { if (row.previousElementSibling) list.insertBefore(row, row.previousElementSibling); };
      down.onclick = () => { if (row.nextElementSibling) list.insertBefore(row.nextElementSibling, row); };
      list.appendChild(row);
    }); body.appendChild(list);
    getAnswer = () => [...list.children].map(x => x.dataset.value);
  }

  const evaluate = () => {
    const a = getAnswer();
    if (a === null || (Array.isArray(a) && a.length === 0) || (q.type === 'match' && a.some(v => !v))) return { answered: false, correct: false };
    let correct = false;
    if (q.type === 'single') correct = a === q.answer;
    if (q.type === 'multi') correct = sameArray(a, q.answer);
    if (q.type === 'numeric') correct = Number.isFinite(a) && Math.abs(a - q.answer) <= (q.tolerance ?? Math.max(0.02, Math.abs(q.answer) * 0.005));
    if (q.type === 'match') correct = a.every((v, i) => v === q.pairs[i][1]);
    if (q.type === 'order') correct = a.every((v, i) => v === q.answer[i]);
    return { answered: true, correct };
  };
  card.__evaluate = evaluate;

  if (!exam) {
    const actions = document.createElement('div'); actions.className = 'kdm-question-actions';
    const btn = document.createElement('button'); btn.className = 'kdm-btn'; btn.type = 'button'; btn.textContent = 'Prüfen';
    btn.onclick = () => {
      const r = evaluate();
      if (!r.answered) { btn.insertAdjacentHTML('afterend', '<span class="kdm-inline-hint">Bitte zuerst antworten.</span>'); return; }
      card.querySelector('.kdm-feedback')?.remove(); card.querySelector('.kdm-inline-hint')?.remove();
      card.appendChild(feedbackBox(r.correct, q.explanation));
      btn.disabled = true; body.querySelectorAll('input,select,button').forEach(el => el.disabled = true);
      recordTopicResult(q.topic, r.correct); onChecked?.(r.correct);
    };
    actions.appendChild(btn); card.appendChild(actions);
  }
  return card;
}

function chooseBalanced(pool, count, expandedShare = 0.4) {
  const n = Math.min(count, pool.length);
  const expanded = shuffle(pool.filter(q => q.expanded));
  const regular = shuffle(pool.filter(q => !q.expanded));
  const targetExpanded = expanded.length ? Math.min(expanded.length, Math.max(1, Math.round(n * expandedShare))) : 0;
  const first = expanded.slice(0, targetExpanded);
  const remainder = shuffle([...regular, ...expanded.slice(targetExpanded)]).slice(0, n - first.length);
  return shuffle([...first, ...remainder]);
}

function initTopicPractice(root) {
  const topic = root.dataset.topic;
  const pool = QUESTION_BANK.filter(q => q.topic === topic);
  if (!pool.length) return;
  root.classList.add('kdm-widget');
  const render = () => {
    const chosen = chooseBalanced(pool, Math.min(5, pool.length), 0.4);
    let checked = 0, correct = 0;
    root.innerHTML = `<div class="kdm-widget-head"><div><span class="kdm-kicker">WISSENSCHECK</span><h2>Prüfe dich selbst</h2><p>Gemischte Aufgaben zu Basiswissen und zusätzlichen prüfbaren Aspekten. Die Aufgaben werden beim Neustart neu zusammengestellt.</p></div><div class="kdm-score-pill">0 / ${chosen.length}</div></div><div class="kdm-questions"></div><div class="kdm-summary" hidden></div><button type="button" class="kdm-btn secondary kdm-new">Neue Aufgaben</button>`;
    const list = root.querySelector('.kdm-questions'); const pill = root.querySelector('.kdm-score-pill'); const summary = root.querySelector('.kdm-summary');
    chosen.forEach(q => list.appendChild(renderQuestion(q, { onChecked: (ok) => {
      checked++; correct += ok ? 1 : 0; pill.textContent = `${correct} / ${chosen.length}`;
      if (checked === chosen.length) {
        const percent = Math.round(correct / chosen.length * 100);
        summary.hidden = false; summary.innerHTML = `<strong>${percent}% richtig.</strong> ${percent >= 80 ? 'Sehr gut – Thema sitzt schon ziemlich sicher.' : percent >= 60 ? 'Solide Basis. Schau dir die falschen Punkte noch einmal an.' : 'Hier lohnt sich eine Wiederholung der Lernseite.'}`;
      }
    }})));
    root.querySelector('.kdm-new').onclick = render;
  };
  render();
}

// ---------- Calculator framework ----------
function nInput(label, value, step = 'any', min = null, max = null, suffix = '') {
  const wrap = document.createElement('label'); wrap.className = 'kdm-field';
  wrap.innerHTML = `<span>${label}</span><div class="kdm-input-wrap"><input type="number" value="${value}" step="${step}" ${min !== null ? `min="${min}"` : ''} ${max !== null ? `max="${max}"` : ''}><em>${suffix}</em></div>`;
  return wrap;
}
function selectInput(label, values, selected) {
  const wrap = document.createElement('label'); wrap.className = 'kdm-field';
  wrap.innerHTML = `<span>${label}</span><select>${values.map(v => `<option ${v === selected ? 'selected' : ''}>${v}</option>`).join('')}</select>`;
  return wrap;
}
function calcShell(title, intro) {
  const box = document.createElement('section'); box.className = 'kdm-calc-card';
  box.innerHTML = `<div class="kdm-calc-head"><span class="kdm-kicker">INTERAKTIVER RECHENWEG</span><h3>${title}</h3><p>${intro}</p></div><div class="kdm-calc-inputs"></div><div class="kdm-steps"></div><div class="kdm-variant"><div><strong>Varianten-Training</strong><p>Dieselbe Formel, aber eine andere Größe ist gesucht.</p></div><div class="kdm-variant-task"></div></div>`;
  return box;
}
function variantUI(container, makeVariant) {
  const draw = () => {
    const v = makeVariant();
    container.innerHTML = `<div class="kdm-variant-prompt">${v.prompt}</div><div class="kdm-variant-answer"><input type="number" step="any" placeholder="Deine Antwort"><span>${v.unit || ''}</span><button type="button" class="kdm-btn">Prüfen</button><button type="button" class="kdm-btn secondary">Neue Variante</button></div><div class="kdm-variant-feedback"></div>`;
    const [check, next] = container.querySelectorAll('button'); const input = container.querySelector('input'); const fb = container.querySelector('.kdm-variant-feedback');
    check.onclick = () => {
      const val = Number(input.value); const tol = v.tolerance ?? Math.max(0.02, Math.abs(v.answer) * 0.005);
      const ok = Number.isFinite(val) && Math.abs(val - v.answer) <= tol;
      fb.className = `kdm-variant-feedback ${ok ? 'ok' : 'bad'}`;
      fb.innerHTML = `${ok ? '✓ Richtig.' : `✗ Erwartet: <strong>${fmt(v.answer, v.digits ?? 2)} ${v.unit || ''}</strong>.`} <span>${v.explanation || ''}</span>`;
    };
    next.onclick = draw;
  }; draw();
}
function updateOnInputs(box, fn) { box.querySelectorAll('input,select').forEach(x => x.addEventListener('input', fn)); fn(); }

const CALCULATORS = {
  uptime() {
    const b = calcShell('SLA / Up-Time', 'Ändere Verfügbarkeit und Zeitraum. Der Rechenweg passt sich sofort an.');
    const f1=nInput('Verfügbarkeit',99.99,0.001,0,100,'%'), f2=nInput('Zeitraum',365,1,1,null,'Tage'); b.querySelector('.kdm-calc-inputs').append(f1,f2);
    const out=b.querySelector('.kdm-steps');
    updateOnInputs(b,()=>{const up=Number(f1.querySelector('input').value), days=Number(f2.querySelector('input').value); const total=days*24*60, downPct=100-up, down=total*downPct/100; out.innerHTML=`<ol><li>Gesamtzeit: ${fmt(days)} × 24 × 60 = <strong>${fmt(total)} Minuten</strong></li><li>Ausfallanteil: 100 % − ${fmt(up,5)} % = <strong>${fmt(downPct,5)} %</strong></li><li>Erlaubte Ausfallzeit: ${fmt(total)} × ${fmt(downPct/100,6)} = <strong>${fmt(down)} Minuten</strong></li></ol><div class="kdm-result">${fmt(down)} Minuten Ausfallzeit</div>`;});
    variantUI(b.querySelector('.kdm-variant-task'),()=>{const type=Math.random()<.5?'down':'up'; const days=[30,90,365][Math.floor(Math.random()*3)], up=[99,99.9,99.99,99.999][Math.floor(Math.random()*4)], total=days*24*60, down=total*(100-up)/100; return type==='down'?{prompt:`${up}% Up-Time für ${days} Tage: Wie viele Minuten Ausfall sind erlaubt?`,answer:down,unit:'Min.',explanation:'Gesamtminuten × (100 − Up-Time) / 100'}:{prompt:`In ${days} Tagen sind maximal ${fmt(down,2)} Minuten Ausfall erlaubt. Welche Up-Time ergibt sich?`,answer:100-down/total*100,unit:'%',digits:5,explanation:'100 − (Ausfall / Gesamtzeit × 100)'};}); return b;
  },
  raid() {
    const b=calcShell('RAID-Kapazität','Vergleiche RAID 0, 1, 5 und 10 mit frei veränderbaren Platten.');
    const t=selectInput('RAID',['RAID 0','RAID 1','RAID 5','RAID 10'],'RAID 5'), n=nInput('Anzahl Platten',4,1,2,20,''), s=nInput('Größe je Platte',4,.5,.5,null,'TB'); b.querySelector('.kdm-calc-inputs').append(t,n,s); const out=b.querySelector('.kdm-steps');
    const calc=()=>{const type=t.querySelector('select').value,N=Number(n.querySelector('input').value),S=Number(s.querySelector('input').value); let use=0, formula=''; if(type==='RAID 0'){use=N*S;formula='n × Plattengröße';} if(type==='RAID 1'){use=S;formula='1 × Plattengröße (Spiegelung)';} if(type==='RAID 5'){use=(N-1)*S;formula='(n − 1) × Plattengröße';} if(type==='RAID 10'){use=N*S/2;formula='n × Plattengröße × 50 %';} out.innerHTML=`<ol><li>Rohkapazität: ${fmt(N)} × ${fmt(S)} TB = <strong>${fmt(N*S)} TB</strong></li><li>Formel ${type}: <strong>${formula}</strong></li><li>Nutzbar: <strong>${fmt(use)} TB</strong></li></ol><div class="kdm-result">${fmt(use)} TB nutzbar</div>`;}; updateOnInputs(b,calc);
    variantUI(b.querySelector('.kdm-variant-task'),()=>{const type=['RAID 5','RAID 10'][Math.floor(Math.random()*2)],N=type==='RAID 5'?[3,4,5,6][Math.floor(Math.random()*4)]:[4,6,8][Math.floor(Math.random()*3)],S=[2,4,8][Math.floor(Math.random()*3)],use=type==='RAID 5'?(N-1)*S:N*S/2,mode=Math.floor(Math.random()*3); if(mode===0)return{prompt:`${type} mit ${N} × ${S} TB: Wie viel Kapazität ist nutzbar?`,answer:use,unit:'TB'}; if(mode===1)return{prompt:`${type} mit ${N} Platten soll ${use} TB nutzbar liefern. Wie groß muss jede Platte sein?`,answer:S,unit:'TB'}; const target=use; return{prompt:`${type} mit ${S}-TB-Platten soll ${target} TB nutzbar liefern. Wie viele Platten werden benötigt?`,answer:N,unit:'Platten',tolerance:.1};}); return b;
  },
  bezugspreis() {
    const b=calcShell('Bezugspreis','Verfolge die komplette Kette vom Listeneinkaufspreis bis zum Bezugspreis.');
    const lep=nInput('Listeneinkaufspreis',1000,10,0,null,'€'), rab=nInput('Rabatt',10,.5,0,99,'%'), sko=nInput('Skonto',2,.1,0,99,'%'), bez=nInput('Bezugskosten',40,1,0,null,'€'); b.querySelector('.kdm-calc-inputs').append(lep,rab,sko,bez); const out=b.querySelector('.kdm-steps');
    const values=()=>{const L=+lep.querySelector('input').value,R=+rab.querySelector('input').value,S=+sko.querySelector('input').value,B=+bez.querySelector('input').value; const rd=L*R/100,z=L-rd,sd=z*S/100,bar=z-sd,final=bar+B; return{L,R,S,B,rd,z,sd,bar,final};};
    updateOnInputs(b,()=>{const x=values();out.innerHTML=`<ol><li>Rabatt: ${money(x.L)} × ${fmt(x.R)} % = <strong>${money(x.rd)}</strong></li><li>Zieleinkaufspreis: ${money(x.L)} − ${money(x.rd)} = <strong>${money(x.z)}</strong></li><li>Skonto: ${money(x.z)} × ${fmt(x.S)} % = <strong>${money(x.sd)}</strong></li><li>Bareinkaufspreis: ${money(x.z)} − ${money(x.sd)} = <strong>${money(x.bar)}</strong></li><li>Bezugspreis: ${money(x.bar)} + ${money(x.B)} = <strong>${money(x.final)}</strong></li></ol><div class="kdm-result">${money(x.final)}</div>`;});
    variantUI(b.querySelector('.kdm-variant-task'),()=>{const L=[800,1250,2400][Math.floor(Math.random()*3)],R=[5,10,15][Math.floor(Math.random()*3)],S=[2,3][Math.floor(Math.random()*2)],B=[20,45,80][Math.floor(Math.random()*3)],final=L*(1-R/100)*(1-S/100)+B, mode=Math.floor(Math.random()*3); if(mode===0)return{prompt:`LEP ${money(L)}, Rabatt ${R}%, Skonto ${S}%, Bezugskosten ${money(B)}. Bezugspreis?`,answer:final,unit:'€',explanation:'Rabatt → Zieleinkaufspreis → Skonto → Bareinkaufspreis → Bezugskosten.'}; if(mode===1)return{prompt:`Bezugspreis ${money(final)}, Rabatt ${R}%, Skonto ${S}%, Bezugskosten ${money(B)}. Wie hoch war der Listeneinkaufspreis?`,answer:(final-B)/((1-R/100)*(1-S/100)),unit:'€'}; return{prompt:`LEP ${money(L)}, Rabatt ${R}%, Skonto ${S}%. Der Bezugspreis ist ${money(final)}. Wie hoch waren die Bezugskosten?`,answer:B,unit:'€'};}); return b;
  },
  skonto() {
    const b=calcShell('Skonto-Vorteilhaftigkeit','Vergleiche den effektiven Skonto-Jahreszins mit einem Kontokorrentzins.');
    const s=nInput('Skonto',2,.1,.1,20,'%'), sf=nInput('Skontofrist',10,1,0,100,'Tage'), zz=nInput('Zahlungsziel',30,1,1,180,'Tage'), k=nInput('Kreditzins',8,.1,0,100,'% p.a.'); b.querySelector('.kdm-calc-inputs').append(s,sf,zz,k); const out=b.querySelector('.kdm-steps');
    const calc=()=>{const S=+s.querySelector('input').value,A=+sf.querySelector('input').value,Z=+zz.querySelector('input').value,K=+k.querySelector('input').value,days=Math.max(1,Z-A),rate=(S/(100-S))*(360/days)*100; out.innerHTML=`<ol><li>Finanzierungszeitraum: ${fmt(Z)} − ${fmt(A)} = <strong>${fmt(days)} Tage</strong></li><li>Skontofaktor: ${fmt(S)} / (${100} − ${fmt(S)}) = <strong>${fmt(S/(100-S),5)}</strong></li><li>Jahreshochrechnung: 360 / ${fmt(days)} = <strong>${fmt(360/days,2)}</strong></li><li>Effektiver Skonto-Jahreszins: <strong>${pct(rate)}</strong></li></ol><div class="kdm-result">${rate>K?'Skonto nutzen':'Kreditzins ist nicht niedriger'} · ${pct(rate)} vs. ${pct(K)}</div>`;}; updateOnInputs(b,calc);
    variantUI(b.querySelector('.kdm-variant-task'),()=>{const S=[2,3][Math.floor(Math.random()*2)],A=10,Z=[30,40][Math.floor(Math.random()*2)],rate=(S/(100-S))*(360/(Z-A))*100, mode=Math.random()<.5?'rate':'threshold'; return mode==='rate'?{prompt:`${S}% Skonto bis Tag ${A}, Zahlungsziel Tag ${Z}. Wie hoch ist der effektive Jahreszins des Skontos?`,answer:rate,unit:'% p.a.'}:{prompt:`Skonto entspricht ${fmt(rate,2)}% p.a. Bis zu welchem Kreditzins wäre die Kreditaufnahme zur Skontonutzung noch günstiger?`,answer:rate,unit:'% p.a.',explanation:'Grenzwert = effektiver Skonto-Jahreszins.'};}); return b;
  },
  loan() {
    const b=calcShell('Tilgungsplan','Ändere Darlehenssumme, Zinssatz, Laufzeit und Darlehensart. Die komplette Tabelle wird neu berechnet.');
    const type=selectInput('Darlehensart',['Ratendarlehen','Fälligkeitsdarlehen','Annuitätendarlehen'],'Ratendarlehen'), principal=nInput('Darlehen',10000,500,100,null,'€'), rate=nInput('Zinssatz',5,.1,0,50,'%'), years=nInput('Laufzeit',4,1,1,20,'Jahre'); b.querySelector('.kdm-calc-inputs').append(type,principal,rate,years); const out=b.querySelector('.kdm-steps');
    function rows(){const T=type.querySelector('select').value,P=+principal.querySelector('input').value,r=+rate.querySelector('input').value/100,n=+years.querySelector('input').value; let debt=P, arr=[], ann=0; if(T==='Annuitätendarlehen') ann=r===0?P/n:P*(r*(1+r)**n)/((1+r)**n-1); for(let y=1;y<=n;y++){const start=debt,interest=start*r; let repay=0,payment=0; if(T==='Ratendarlehen'){repay=P/n;payment=repay+interest;} else if(T==='Fälligkeitsdarlehen'){repay=y===n?P:0;payment=interest+repay;} else {payment=Math.min(ann,start+interest);repay=payment-interest;if(y===n){repay=start;payment=interest+repay;}} debt=Math.max(0,start-repay);arr.push({y,start,interest,repay,payment,debt});} return arr;}
    updateOnInputs(b,()=>{const arr=rows(),sumI=arr.reduce((a,x)=>a+x.interest,0),sumP=arr.reduce((a,x)=>a+x.payment,0); out.innerHTML=`<div class="kdm-table-wrap"><table><thead><tr><th>Jahr</th><th>Schuld Beginn</th><th>Zinsen</th><th>Tilgung</th><th>Rate</th><th>Schuld Ende</th></tr></thead><tbody>${arr.map(x=>`<tr><td>${x.y}</td><td>${money(x.start)}</td><td>${money(x.interest)}</td><td>${money(x.repay)}</td><td><strong>${money(x.payment)}</strong></td><td>${money(x.debt)}</td></tr>`).join('')}</tbody></table></div><div class="kdm-result">Gesamtzinsen ${money(sumI)} · Gesamtzahlungen ${money(sumP)}</div>`;});
    variantUI(b.querySelector('.kdm-variant-task'),()=>{const P=[10000,12000,20000][Math.floor(Math.random()*3)],r=[4,5,6][Math.floor(Math.random()*3)],n=[4,5][Math.floor(Math.random()*2)],rep=P/n,year=[1,2,3][Math.floor(Math.random()*3)],start=P-rep*(year-1),interest=start*r/100,mode=Math.floor(Math.random()*3); if(mode===0)return{prompt:`Ratendarlehen ${money(P)}, ${r}% p.a., ${n} Jahre: Wie hoch ist die jährliche Tilgung?`,answer:rep,unit:'€'}; if(mode===1)return{prompt:`Ratendarlehen ${money(P)}, ${r}% p.a., ${n} Jahre: Wie hoch sind die Zinsen im Jahr ${year}?`,answer:interest,unit:'€'}; return{prompt:`Bei einem Ratendarlehen beträgt die jährliche Tilgung ${money(rep)} über ${n} Jahre. Wie hoch war das Darlehen?`,answer:P,unit:'€'};}); return b;
  },
  breakeven() {
    const b=calcShell('Break-even','Die Formel wird nach verschiedenen Größen umgestellt.');
    const f=nInput('Fixkosten',50000,1000,0,null,'€'), p=nInput('Verkaufspreis je Einheit',10,.5,.01,null,'€'), v=nInput('Variable Kosten je Einheit',0,.5,0,null,'€'); b.querySelector('.kdm-calc-inputs').append(f,p,v); const out=b.querySelector('.kdm-steps');
    updateOnInputs(b,()=>{const F=+f.querySelector('input').value,P=+p.querySelector('input').value,V=+v.querySelector('input').value,db=P-V,q=db>0?F/db:Infinity; out.innerHTML=`<ol><li>Deckungsbeitrag je Einheit: ${money(P)} − ${money(V)} = <strong>${money(db)}</strong></li><li>Break-even-Menge: ${money(F)} / ${money(db)} = <strong>${Number.isFinite(q)?fmt(q):'nicht berechenbar'}</strong></li></ol><div class="kdm-result">${Number.isFinite(q)?`${fmt(Math.ceil(q))} Einheiten (aufgerundet)`:'Preis muss über variablen Kosten liegen'}</div>`;});
    variantUI(b.querySelector('.kdm-variant-task'),()=>{const F=[24000,50000,72000][Math.floor(Math.random()*3)],P=[10,20,25][Math.floor(Math.random()*3)],V=[0,4,5][Math.floor(Math.random()*3)],db=P-V,q=F/db,mode=Math.floor(Math.random()*4); if(mode===0)return{prompt:`Fixkosten ${money(F)}, Preis ${money(P)}, variable Kosten ${money(V)}. Break-even-Menge?`,answer:q,unit:'Stück'}; if(mode===1)return{prompt:`Break-even bei ${fmt(q)} Stück. Preis ${money(P)}, variable Kosten ${money(V)}. Wie hoch sind die Fixkosten?`,answer:F,unit:'€'}; if(mode===2)return{prompt:`Fixkosten ${money(F)}, Break-even ${fmt(q)} Stück, variable Kosten ${money(V)}. Welcher Verkaufspreis ist nötig?`,answer:P,unit:'€'}; return{prompt:`Fixkosten ${money(F)}, Break-even ${fmt(q)} Stück, Verkaufspreis ${money(P)}. Wie hoch sind die variablen Kosten je Stück?`,answer:V,unit:'€'};}); return b;
  },
  gkz() {
    const b=calcShell('Gemeinkostenzuschlagssatz','GKZ = Gemeinkosten / Bezugsgröße × 100 %.');
    const g=nInput('Gemeinkosten',56000,1000,0,null,'€'), base=nInput('Bezugsgröße',224000,1000,.01,null,'€'); b.querySelector('.kdm-calc-inputs').append(g,base); const out=b.querySelector('.kdm-steps'); updateOnInputs(b,()=>{const G=+g.querySelector('input').value,B=+base.querySelector('input').value,r=G/B*100;out.innerHTML=`<ol><li>${money(G)} / ${money(B)} = <strong>${fmt(G/B,4)}</strong></li><li>× 100 % = <strong>${pct(r)}</strong></li></ol><div class="kdm-result">GKZ ${pct(r)}</div>`;}); variantUI(b.querySelector('.kdm-variant-task'),()=>{const G=[30000,56000,75000][Math.floor(Math.random()*3)],B=[150000,224000,300000][Math.floor(Math.random()*3)],R=G/B*100,m=Math.floor(Math.random()*3);return m===0?{prompt:`Gemeinkosten ${money(G)}, Bezugsgröße ${money(B)}. GKZ?`,answer:R,unit:'%'}:m===1?{prompt:`GKZ ${fmt(R,2)}%, Bezugsgröße ${money(B)}. Gemeinkosten?`,answer:G,unit:'€'}:{prompt:`Gemeinkosten ${money(G)}, GKZ ${fmt(R,2)}%. Bezugsgröße?`,answer:B,unit:'€'};}); return b;
  },
  nwa() {
    const b=calcShell('Nutzwertanalyse','Verändere Gewichtungen und Bewertungen. Die gewichteten Werte und die Rangfolge reagieren sofort.');
    const criteria=['Preis','Support','Skalierbarkeit','Datenschutz']; const defaults=[[30,4,5],[25,5,3],[25,4,4],[20,5,3]]; const grid=document.createElement('div');grid.className='kdm-nwa-grid';grid.innerHTML='<div>Kriterium</div><div>Gewicht %</div><div>Anbieter A</div><div>Anbieter B</div>'; criteria.forEach((c,i)=>{grid.innerHTML+=`<div>${c}</div><input type="number" value="${defaults[i][0]}" min="0" max="100"><input type="number" value="${defaults[i][1]}" min="1" max="10"><input type="number" value="${defaults[i][2]}" min="1" max="10">`;}); b.querySelector('.kdm-calc-inputs').append(grid); const out=b.querySelector('.kdm-steps'); updateOnInputs(b,()=>{const inputs=[...grid.querySelectorAll('input')];let sumW=0,a=0,c=0,rows='';criteria.forEach((name,i)=>{const w=+inputs[i*3].value,va=+inputs[i*3+1].value,vb=+inputs[i*3+2].value;sumW+=w;a+=w/100*va;c+=w/100*vb;rows+=`<tr><td>${name}</td><td>${fmt(w)}%</td><td>${fmt(w/100*va,2)}</td><td>${fmt(w/100*vb,2)}</td></tr>`;});out.innerHTML=`<div class="kdm-table-wrap"><table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>A gewichtet</th><th>B gewichtet</th></tr></thead><tbody>${rows}</tbody></table></div><div class="kdm-result ${sumW!==100?'warn':''}">Gewichtsumme ${fmt(sumW)}% · A ${fmt(a,2)} · B ${fmt(c,2)} → ${a>c?'A':c>a?'B':'Gleichstand'}</div>`;}); b.querySelector('.kdm-variant').remove(); return b;
  },
  depreciation() {
    const b=calcShell('Lineare Abschreibung','Anschaffungskosten und Nutzungsdauer bestimmen Jahresbetrag und Abschreibungssatz.'); const a=nInput('Anschaffungskosten',12000,500,0,null,'€'),y=nInput('Nutzungsdauer',4,1,1,50,'Jahre');b.querySelector('.kdm-calc-inputs').append(a,y);const out=b.querySelector('.kdm-steps');updateOnInputs(b,()=>{const A=+a.querySelector('input').value,Y=+y.querySelector('input').value,d=A/Y,r=100/Y;out.innerHTML=`<ol><li>Jährliche Abschreibung: ${money(A)} / ${fmt(Y)} = <strong>${money(d)}</strong></li><li>Abschreibungssatz: 100 % / ${fmt(Y)} = <strong>${pct(r)}</strong></li></ol><div class="kdm-result">${money(d)} pro Jahr · ${pct(r)}</div>`;});variantUI(b.querySelector('.kdm-variant-task'),()=>{const A=[12000,18000,30000][Math.floor(Math.random()*3)],Y=[3,4,5,6][Math.floor(Math.random()*4)],D=A/Y,m=Math.floor(Math.random()*3);return m===0?{prompt:`Anschaffungskosten ${money(A)}, Nutzungsdauer ${Y} Jahre. Jährliche Abschreibung?`,answer:D,unit:'€'}:m===1?{prompt:`Jährliche Abschreibung ${money(D)}, Nutzungsdauer ${Y} Jahre. Anschaffungskosten?`,answer:A,unit:'€'}:{prompt:`Anschaffungskosten ${money(A)}, jährliche Abschreibung ${money(D)}. Nutzungsdauer?`,answer:Y,unit:'Jahre',tolerance:.1};});return b;
  },
  marketshare() {
    const b=calcShell('Marktanteil','Marktanteil = eigener Umsatz / Marktvolumen × 100 %.');const own=nInput('Eigener Umsatz',250000,10000,0,null,'€'),vol=nInput('Marktvolumen',2000000,10000,.01,null,'€');b.querySelector('.kdm-calc-inputs').append(own,vol);const out=b.querySelector('.kdm-steps');updateOnInputs(b,()=>{const O=+own.querySelector('input').value,V=+vol.querySelector('input').value,S=O/V*100;out.innerHTML=`<ol><li>${money(O)} / ${money(V)} = ${fmt(O/V,4)}</li><li>× 100 % = <strong>${pct(S)}</strong></li></ol><div class="kdm-result">Marktanteil ${pct(S)}</div>`;});variantUI(b.querySelector('.kdm-variant-task'),()=>{const O=[200000,350000,500000][Math.floor(Math.random()*3)],V=[1000000,2000000,2500000][Math.floor(Math.random()*3)],S=O/V*100,m=Math.floor(Math.random()*3);return m===0?{prompt:`Eigener Umsatz ${money(O)}, Marktvolumen ${money(V)}. Marktanteil?`,answer:S,unit:'%'}:m===1?{prompt:`Marktanteil ${fmt(S,2)}%, Marktvolumen ${money(V)}. Eigener Umsatz?`,answer:O,unit:'€'}:{prompt:`Eigener Umsatz ${money(O)}, Marktanteil ${fmt(S,2)}%. Marktvolumen?`,answer:V,unit:'€'};});return b;
  },
  brsize() {
    const b=calcShell('Betriebsratsgröße','Ändere die Zahl der Wahlberechtigten und sieh sofort die passende Betriebsratsgröße.'); const e=nInput('Wahlberechtigte Arbeitnehmer',556,1,5,1000,'Personen');b.querySelector('.kdm-calc-inputs').append(e);const out=b.querySelector('.kdm-steps');const size=n=>n<=20?1:n<=50?3:n<=100?5:n<=200?7:n<=400?9:n<=700?11:n<=1000?13:null;updateOnInputs(b,()=>{const N=+e.querySelector('input').value,S=size(N);out.innerHTML=`<ol><li>Wahlberechtigte: <strong>${fmt(N)}</strong></li><li>Passende Staffel aus der Tabelle: <strong>${S??'außerhalb der hinterlegten Tabelle'}</strong></li></ol><div class="kdm-result">${S?`${S} Betriebsratsmitglieder`:'Bitte Lernseite für größere Betriebe ergänzen'}</div>`;});variantUI(b.querySelector('.kdm-variant-task'),()=>{const options=[[18,1],[45,3],[88,5],[170,7],[350,9],[556,11],[850,13]],x=options[Math.floor(Math.random()*options.length)];return{prompt:`Ein Betrieb hat ${x[0]} Wahlberechtigte. Wie viele Betriebsratsmitglieder nennt die Tabelle?`,answer:x[1],unit:'Mitglieder',tolerance:.1};});return b;
  },
  profitshare() {
    const b=calcShell('GmbH-Gewinnanteil','Gewinnanteil = Einlage / Gesamtstammkapital × Gewinn.');const dep=nInput('Einlage',20000,1000,0,null,'€'),cap=nInput('Gesamtstammkapital',50000,1000,.01,null,'€'),pr=nInput('Gesamtgewinn',100000,1000,0,null,'€');b.querySelector('.kdm-calc-inputs').append(dep,cap,pr);const out=b.querySelector('.kdm-steps');updateOnInputs(b,()=>{const D=+dep.querySelector('input').value,C=+cap.querySelector('input').value,P=+pr.querySelector('input').value,A=D/C*P;out.innerHTML=`<ol><li>Anteil am Kapital: ${money(D)} / ${money(C)} = <strong>${pct(D/C*100)}</strong></li><li>Gewinnanteil: ${fmt(D/C,4)} × ${money(P)} = <strong>${money(A)}</strong></li></ol><div class="kdm-result">${money(A)}</div>`;});variantUI(b.querySelector('.kdm-variant-task'),()=>{const D=[10000,20000,30000][Math.floor(Math.random()*3)],C=50000,P=[80000,100000,120000][Math.floor(Math.random()*3)],A=D/C*P,m=Math.floor(Math.random()*3);return m===0?{prompt:`Einlage ${money(D)}, Stammkapital ${money(C)}, Gewinn ${money(P)}. Gewinnanteil?`,answer:A,unit:'€'}:m===1?{prompt:`Gewinnanteil ${money(A)}, Stammkapital ${money(C)}, Gewinn ${money(P)}. Wie hoch ist die Einlage?`,answer:D,unit:'€'}:{prompt:`Einlage ${money(D)}, Stammkapital ${money(C)}, Gewinnanteil ${money(A)}. Gesamtgewinn?`,answer:P,unit:'€'};});return b;
  },
  ratio() {
    const b=calcShell('Rentabilität & Wirtschaftlichkeit','Schalte zwischen EKR und Wirtschaftlichkeit um und verändere die Grundwerte.'); const t=selectInput('Formel',['Eigenkapitalrentabilität','Wirtschaftlichkeit'],'Eigenkapitalrentabilität'),a=nInput('Zähler (Gewinn / Ertrag)',30000,1000,0,null,'€'),d=nInput('Nenner (Eigenkapital / Aufwand)',200000,1000,.01,null,'€');b.querySelector('.kdm-calc-inputs').append(t,a,d);const out=b.querySelector('.kdm-steps');updateOnInputs(b,()=>{const T=t.querySelector('select').value,A=+a.querySelector('input').value,D=+d.querySelector('input').value,R=A/D;out.innerHTML=T.startsWith('Eigen')?`<ol><li>${money(A)} / ${money(D)} = ${fmt(R,4)}</li><li>× 100 % = <strong>${pct(R*100)}</strong></li></ol><div class="kdm-result">EKR ${pct(R*100)}</div>`:`<ol><li>Ertrag / Aufwand = ${money(A)} / ${money(D)}</li><li>= <strong>${fmt(R,3)}</strong></li></ol><div class="kdm-result">Wirtschaftlichkeit ${fmt(R,3)}</div>`;});variantUI(b.querySelector('.kdm-variant-task'),()=>{const G=[20000,30000,50000][Math.floor(Math.random()*3)],E=[100000,200000,250000][Math.floor(Math.random()*3)],R=G/E*100,m=Math.floor(Math.random()*3);return m===0?{prompt:`Gewinn ${money(G)}, Eigenkapital ${money(E)}. EKR?`,answer:R,unit:'%'}:m===1?{prompt:`EKR ${fmt(R,2)}%, Eigenkapital ${money(E)}. Gewinn?`,answer:G,unit:'€'}:{prompt:`Gewinn ${money(G)}, EKR ${fmt(R,2)}%. Eigenkapital?`,answer:E,unit:'€'};});return b;
  },
  social() {
    const b=calcShell('Sozialversicherungsbeitrag','AN-Beitrag = Bruttogehalt × (Beitragssatz / 2).');const g=nInput('Bruttogehalt',3500,100,0,null,'€'),r=nInput('Gesamtbeitragssatz',16.4,.1,0,100,'%');b.querySelector('.kdm-calc-inputs').append(g,r);const out=b.querySelector('.kdm-steps');updateOnInputs(b,()=>{const G=+g.querySelector('input').value,R=+r.querySelector('input').value,share=R/2,c=G*share/100;out.innerHTML=`<ol><li>AN-Anteil am Satz: ${fmt(R)} % / 2 = <strong>${pct(share)}</strong></li><li>Beitrag: ${money(G)} × ${fmt(share/100,4)} = <strong>${money(c)}</strong></li></ol><div class="kdm-result">AN-Beitrag ${money(c)}</div>`;});variantUI(b.querySelector('.kdm-variant-task'),()=>{const G=[3000,3500,4200][Math.floor(Math.random()*3)],R=[16.4,18.6][Math.floor(Math.random()*2)],C=G*(R/2)/100,m=Math.floor(Math.random()*3);return m===0?{prompt:`Brutto ${money(G)}, Gesamtbeitragssatz ${R}%. AN-Beitrag bei 50/50?`,answer:C,unit:'€'}:m===1?{prompt:`AN-Beitrag ${money(C)}, Gesamtbeitragssatz ${R}%. Bruttogehalt?`,answer:G,unit:'€'}:{prompt:`Brutto ${money(G)}, AN-Beitrag ${money(C)}. Wie hoch ist der Gesamtbeitragssatz?`,answer:R,unit:'%'};});return b;
  },
  notice() {
    const b=calcShell('Kündigungsfrist','Berechnung nach § 622 BGB. Entscheidend ist, wer kündigt, ob eine Probezeit vereinbart ist und wann die Kündigung zugeht.');
    const who=selectInput('Kündigung durch',['Arbeitgeber','Arbeitnehmer'],'Arbeitgeber');
    const probation=selectInput('Vereinbarte Probezeit?',['Nein','Ja'],'Nein');
    const years=nInput('Betriebszugehörigkeit',13,1,0,40,'Jahre');
    const date=document.createElement('label');date.className='kdm-field';date.innerHTML='<span>Zugang der Kündigung am</span><input type="date" value="2025-12-11">';
    b.querySelector('.kdm-calc-inputs').append(who,probation,years,date);
    const out=b.querySelector('.kdm-steps');
    function nextFourWeekTerminal(dt){const base=new Date(dt);base.setDate(base.getDate()+28);const y=base.getFullYear(),m=base.getMonth(),d=base.getDate();return d<=15?new Date(y,m,15):new Date(y,m+1,0);}
    function employerMonths(y){if(y<2)return 0;if(y<5)return 1;if(y<8)return 2;if(y<10)return 3;if(y<12)return 4;if(y<15)return 5;if(y<20)return 6;return 7;}
    function calcEnd(d,y,W,P){const dt=new Date(d+'T12:00:00');
      if(P==='Ja' && y<=0.5){const x=new Date(dt);x.setDate(x.getDate()+14);return{rule:'2 Wochen während vereinbarter Probezeit (max. 6 Monate)',end:x};}
      if(W==='Arbeitnehmer'){return{rule:'4 Wochen zum 15. oder Monatsende',end:nextFourWeekTerminal(dt)};}
      const months=employerMonths(y);
      if(months===0)return{rule:'4 Wochen zum 15. oder Monatsende',end:nextFourWeekTerminal(dt)};
      const end=new Date(dt.getFullYear(),dt.getMonth()+months+1,0);
      return{rule:`${months} Monat${months>1?'e':''} zum Monatsende`,end};
    }
    updateOnInputs(b,()=>{const Y=+years.querySelector('input').value,D=date.querySelector('input').value,W=who.querySelector('select').value,P=probation.querySelector('select').value;if(!D)return;const r=calcEnd(D,Y,W,P);out.innerHTML=`<ol><li>Kündigung durch: <strong>${W}</strong></li><li>Betriebszugehörigkeit: <strong>${fmt(Y)} Jahre</strong></li><li>Gesetzliche Grundregel: <strong>${r.rule}</strong></li><li>Ermitteltes Fristende: <strong>${r.end.toLocaleDateString('de-DE')}</strong></li></ol><div class="kdm-result">${r.end.toLocaleDateString('de-DE')}</div><p class="kdm-inline-hint">Tarifvertrag oder Arbeitsvertrag können abweichende wirksame Regelungen enthalten.</p>`;});
    b.querySelector('.kdm-variant').remove();return b;
  }};

function initCalculators(root) {
  const names = (root.dataset.calculators || '').split(',').map(s => s.trim()).filter(Boolean);
  if (!names.length) return;
  root.classList.add('kdm-widget');
  root.innerHTML = `<div class="kdm-widget-head"><div><span class="kdm-kicker">RECHENTRAINER</span><h2>Rechnen verstehen, nicht nur auswendig lernen</h2><p>Ändere Werte frei und beobachte die komplette Rechenkette. Unter jeder Formel bekommst du zusätzlich wechselnde Umstellungsaufgaben.</p></div></div>`;
  names.forEach(name => { if (CALCULATORS[name]) root.appendChild(CALCULATORS[name]()); });
}

// ---------- Exam simulation ----------
const EXAM_CONFIG = {
  p12: { minutes: 90, count: 18 },
  p13: { minutes: 90, count: 16 },
  wiso: { minutes: 60, count: 30 }
};

function topicStatsFor(section) {
  const stats = loadStats();
  const topics = Object.keys(TOPIC_LABELS).filter(t => t.startsWith(section === 'wiso' ? 'wiso/' : `${section}/`));
  return topics.map(topic => {
    const a = stats.topics[topic] || { correct: 0, total: 0 }, b = stats.examTopics[topic] || { correct: 0, total: 0 };
    const correct = a.correct + b.correct, total = a.total + b.total;
    return { topic, correct, total, pct: total ? Math.round(correct / total * 100) : null };
  });
}
function dashboardHTML() {
  const stats = loadStats();
  return ['p12','p13','wiso'].map(section => {
    const exams = stats.exams[section] || []; const avg = exams.length ? Math.round(exams.reduce((a,x)=>a+x.score,0)/exams.length) : null;
    const topicRows = topicStatsFor(section).filter(x=>x.total).sort((a,b)=>a.pct-b.pct).slice(0,3);
    return `<div class="kdm-progress-card"><h3>${SECTION_LABELS[section]}</h3><div class="kdm-big-score">${avg===null?'—':avg+'%'}</div><p>${exams.length ? `${exams.length} Prüfung${exams.length===1?'':'en'} gespeichert` : 'Noch keine Prüfung absolviert'}</p>${topicRows.length?`<div class="kdm-weak"><strong>Aktuell schwächste Themen:</strong>${topicRows.map(x=>`<div><span>${TOPIC_LABELS[x.topic]}</span><b>${x.pct}%</b></div>`).join('')}</div>`:''}</div>`;
  }).join('');
}
function initExam(root) {
  root.classList.add('kdm-exam');
  root.innerHTML = `<section class="kdm-exam-intro"><span class="kdm-kicker">PRÜFUNGSSIMULATION</span><h1>AP2 Probeprüfung</h1><p>Automatisch auswertbare Simulation mit Basiswissen und zusätzlichen prüfbaren Aspekten aus Ausbildungsrahmenplan/Rahmenlehrplan. Rund 40 % der Fragen werden gezielt aus den erweiterten Aspekten gewählt; sie sind in der Prüfung nicht extra markiert.</p><div class="kdm-exam-controls"><button class="kdm-btn primary" data-mode="all">Gesamtprüfung starten</button><button class="kdm-btn" data-mode="p12">§12 starten</button><button class="kdm-btn" data-mode="p13">§13 starten</button><button class="kdm-btn" data-mode="wiso">WiSo starten</button></div><label class="kdm-timer-toggle"><input type="checkbox" checked> Mit Original-Zeitlimit (90 / 90 / 60 Min.)</label></section><section><h2>Dein Lernstand</h2><div class="kdm-progress-grid">${dashboardHTML()}</div><button type="button" class="kdm-link-btn kdm-reset-progress">Lernstand zurücksetzen</button></section><section class="kdm-exam-stage" hidden></section>`;
  const stage=root.querySelector('.kdm-exam-stage'); let timerId=null, sequence=[], sessionResults=[], fullMode=false;
  function start(mode){fullMode=mode==='all'; sessionResults=[]; sequence=fullMode?['p12','p13','wiso']:[mode]; runSection(sequence.shift());}
  function showOverall(){
    const avg = Math.round(sessionResults.reduce((a,x)=>a+x.score,0) / sessionResults.length);
    const weakest = [...sessionResults].sort((a,b)=>a.score-b.score)[0];
    stage.innerHTML = `<div class="kdm-exam-result"><span class="kdm-kicker">GESAMTERGEBNIS</span><h2>AP2 Probeprüfung abgeschlossen</h2><div class="kdm-result-circle">${avg}<small>Ø /100</small></div><div class="kdm-overall-grid">${sessionResults.map(x=>`<div><strong>${SECTION_LABELS[x.section]}</strong><span>${x.score}/100</span></div>`).join('')}</div><p>Der niedrigste Wert liegt aktuell bei <strong>${SECTION_LABELS[weakest.section]}</strong> (${weakest.score}/100). Dort solltest du zuerst wiederholen.</p><button class="kdm-btn primary kdm-back-dashboard">Zur Lernstandsübersicht</button></div>`;
    stage.querySelector('.kdm-back-dashboard').onclick=()=>{stage.hidden=true;root.querySelector('.kdm-progress-grid').innerHTML=dashboardHTML();root.scrollIntoView({behavior:'smooth'});};
  }
  function runSection(section){clearInterval(timerId); const cfg=EXAM_CONFIG[section], pool=chooseBalanced(QUESTION_BANK.filter(q=>q.section===section),cfg.count,0.4), timed=root.querySelector('.kdm-timer-toggle input').checked; let seconds=cfg.minutes*60; stage.hidden=false; stage.innerHTML=`<div class="kdm-exam-bar"><div><span>Teil</span><strong>${SECTION_LABELS[section]}</strong></div><div class="kdm-timer">${timed?`${cfg.minutes}:00`:'ohne Zeitlimit'}</div></div><div class="kdm-exam-meta">${pool.length} Aufgaben · Ergebnis wird auf 100 Punkte normiert</div><div class="kdm-exam-questions"></div><button type="button" class="kdm-btn primary kdm-submit-exam">Teil abgeben</button>`; stage.scrollIntoView({behavior:'smooth',block:'start'}); const list=stage.querySelector('.kdm-exam-questions'); pool.forEach((q,i)=>{const wrap=document.createElement('div');wrap.className='kdm-exam-qwrap';wrap.innerHTML=`<div class="kdm-qnum">${i+1}</div>`;wrap.appendChild(renderQuestion(q,{exam:true}));list.appendChild(wrap);});
    if(timed){const timer=stage.querySelector('.kdm-timer');timerId=setInterval(()=>{seconds--;const m=Math.floor(seconds/60),s=seconds%60;timer.textContent=`${m}:${String(s).padStart(2,'0')}`;if(seconds<=0){clearInterval(timerId);submit();}},1000);}
    stage.querySelector('.kdm-submit-exam').onclick=submit;
    function submit(){clearInterval(timerId);let correct=0,answered=0;const byTopic={};[...list.querySelectorAll('.kdm-question')].forEach((card,i)=>{const r=card.__evaluate();const q=pool[i];answered+=r.answered?1:0;correct+=r.correct?1:0;byTopic[q.topic]||={correct:0,total:0};byTopic[q.topic].total++;byTopic[q.topic].correct+=r.correct?1:0;card.appendChild(feedbackBox(r.correct,q.explanation));card.querySelectorAll('input,select,button').forEach(el=>el.disabled=true);});const score=Math.round(correct/pool.length*100);recordExam(section,{score,correct,total:pool.length},byTopic); sessionResults.push({section,score}); const breakdown=Object.entries(byTopic).map(([t,r])=>({topic:t,pct:Math.round(r.correct/r.total*100),...r})).sort((a,b)=>a.pct-b.pct); const finalButton = sequence.length ? '<button class="kdm-btn primary kdm-next-part">Nächsten Prüfungsteil starten</button>' : fullMode ? '<button class="kdm-btn primary kdm-overall">Gesamtergebnis anzeigen</button>' : '<button class="kdm-btn primary kdm-back-dashboard">Zur Übersicht</button>'; stage.innerHTML=`<div class="kdm-exam-result"><span class="kdm-kicker">ERGEBNIS</span><h2>${SECTION_LABELS[section]}</h2><div class="kdm-result-circle">${score}<small>/100</small></div><p>${correct} von ${pool.length} Aufgaben richtig · ${answered} beantwortet</p><h3>Themenanalyse</h3><div class="kdm-topic-bars">${breakdown.map(x=>`<div><span>${TOPIC_LABELS[x.topic]}</span><div class="kdm-bar"><i style="width:${x.pct}%"></i></div><b>${x.pct}%</b></div>`).join('')}</div><div class="kdm-result-actions">${finalButton}</div></div>`; if(sequence.length)stage.querySelector('.kdm-next-part').onclick=()=>runSection(sequence.shift());else if(fullMode)stage.querySelector('.kdm-overall').onclick=showOverall;else stage.querySelector('.kdm-back-dashboard').onclick=()=>{stage.hidden=true;root.querySelector('.kdm-progress-grid').innerHTML=dashboardHTML();root.scrollIntoView({behavior:'smooth'});};}
  }
  root.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>start(b.dataset.mode));
  root.querySelector('.kdm-reset-progress').onclick=()=>{if(confirm('Gesamten gespeicherten Lernstand wirklich löschen?')){localStorage.removeItem(STATS_KEY);root.querySelector('.kdm-progress-grid').innerHTML=dashboardHTML();}};
}

function init() {
  document.querySelectorAll('.kdm-practice[data-topic]').forEach(initTopicPractice);
  document.querySelectorAll('.kdm-calculators[data-calculators]').forEach(initCalculators);
  document.querySelectorAll('.kdm-exam-root').forEach(initExam);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
