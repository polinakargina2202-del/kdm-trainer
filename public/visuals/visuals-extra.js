(() => {
  const BASE = '/kdm-trainer';

  const styles = `
    .kdm-extra-visual-pack{margin:1.5rem 0 2rem;display:grid;gap:1rem}
    .kdm-extra-visual-title{margin:.2rem 0 .25rem;font-size:1.25rem;font-weight:800}
    .kdm-extra-visual-lead{margin:0 0 .4rem;color:var(--sl-color-gray-3);font-size:.94rem}
    .kdm-xcard{border:1px solid var(--sl-color-gray-5);border-radius:16px;padding:1rem;background:linear-gradient(180deg,var(--sl-color-gray-7),var(--sl-color-bg));overflow:auto}
    .kdm-xcard h3{margin:.1rem 0 .8rem;font-size:1.05rem}
    .kdm-xcaption{margin:.8rem 0 0;color:var(--sl-color-gray-3);font-size:.9rem}
    .kdm-xgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.8rem}
    .kdm-xmini{border:1px solid var(--sl-color-gray-5);border-radius:12px;padding:.85rem;background:var(--sl-color-bg)}
    .kdm-xmini>strong{display:block;margin-bottom:.55rem}
    .kdm-xflow{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.42rem}
    .kdm-xstep{border:1px solid var(--sl-color-accent);background:var(--sl-color-accent-low);color:var(--sl-color-accent-high);border-radius:10px;padding:.62rem .72rem;text-align:center;font-weight:800;min-width:112px}
    .kdm-xstep small{display:block;font-weight:600;color:var(--sl-color-gray-3);margin-top:.2rem}
    .kdm-xarrow{font-size:1.3rem;font-weight:900;color:var(--sl-color-accent-high)}
    .kdm-xformula{margin:.7rem auto 0;max-width:620px;border-radius:12px;padding:.8rem 1rem;background:var(--sl-color-gray-7);font-weight:800;text-align:center}
    .kdm-bilanz{display:grid;grid-template-columns:1fr 1fr;min-width:560px;border:2px solid var(--sl-color-accent);border-radius:14px;overflow:hidden;background:var(--sl-color-bg)}
    .kdm-bcol:first-child{border-right:2px solid var(--sl-color-accent)}
    .kdm-bhead{padding:.65rem .8rem;background:var(--sl-color-accent-low);color:var(--sl-color-accent-high);font-weight:900;text-align:center}
    .kdm-bitem{display:flex;justify-content:space-between;gap:1rem;padding:.5rem .75rem;border-top:1px solid var(--sl-color-gray-6);font-size:.9rem}
    .kdm-bsum{font-weight:900;background:var(--sl-color-gray-7)}
    .kdm-ratio-row{display:grid;grid-template-columns:1.4fr 1fr;gap:.55rem;align-items:center;margin:.55rem 0}
    .kdm-ratio-label{font-size:.86rem}
    .kdm-ratio-bar{height:26px;border-radius:999px;background:var(--sl-color-gray-6);overflow:hidden;position:relative}
    .kdm-ratio-fill{height:100%;display:flex;align-items:center;justify-content:flex-end;padding-right:.5rem;background:var(--sl-color-accent);color:white;font-size:.75rem;font-weight:900;border-radius:999px}
    .kdm-loan-table{display:grid;grid-template-columns:1.15fr repeat(3,1fr);min-width:620px;border:1px solid var(--sl-color-gray-5);border-radius:12px;overflow:hidden}
    .kdm-loan-cell{padding:.58rem .68rem;border-right:1px solid var(--sl-color-gray-6);border-top:1px solid var(--sl-color-gray-6);font-size:.83rem}
    .kdm-loan-cell:nth-child(-n+4){border-top:0;font-weight:900;background:var(--sl-color-gray-7)}
    .kdm-loan-cell:nth-child(4n){border-right:0}
    .kdm-money-bars{display:grid;gap:.5rem;min-width:520px}
    .kdm-money-row{display:grid;grid-template-columns:120px 1fr 90px;gap:.6rem;align-items:center}
    .kdm-money-track{height:30px;border-radius:8px;background:var(--sl-color-gray-6);overflow:hidden}
    .kdm-money-fill{height:100%;background:var(--sl-color-accent);border-radius:8px}
    .kdm-money-row b{text-align:right;font-size:.82rem}
    .kdm-cycle{display:grid;grid-template-columns:repeat(4,minmax(130px,1fr));gap:.55rem;min-width:620px}
    .kdm-cycle-phase{position:relative;border:1px solid var(--sl-color-accent);border-radius:12px;padding:.8rem;background:var(--sl-color-bg);text-align:center}
    .kdm-cycle-phase b{display:block;color:var(--sl-color-accent-high);margin-bottom:.3rem}
    .kdm-cycle-phase span{font-size:.8rem;color:var(--sl-color-gray-3)}
    .kdm-cycle-phase:not(:last-child)::after{content:'→';position:absolute;right:-.48rem;top:50%;transform:translateY(-50%);z-index:2;font-size:1.1rem;font-weight:900;color:var(--sl-color-accent-high)}
    .kdm-market{position:relative;height:250px;min-width:470px;margin:.5rem auto 0;max-width:620px;border-left:2px solid var(--sl-color-gray-3);border-bottom:2px solid var(--sl-color-gray-3)}
    .kdm-market::before{content:'Preis';position:absolute;left:-2.4rem;top:-.1rem;font-size:.75rem;font-weight:800}
    .kdm-market::after{content:'Menge';position:absolute;right:0;bottom:-1.5rem;font-size:.75rem;font-weight:800}
    .kdm-line-a,.kdm-line-b{position:absolute;left:12%;width:76%;height:3px;top:49%;transform-origin:center;background:var(--sl-color-accent)}
    .kdm-line-a{transform:rotate(-25deg)}
    .kdm-line-b{transform:rotate(25deg)}
    .kdm-line-label{position:absolute;font-size:.78rem;font-weight:900;color:var(--sl-color-accent-high)}
    .kdm-lab-a{left:73%;top:28%}.kdm-lab-b{left:73%;top:68%}
    .kdm-eq{position:absolute;left:49%;top:46%;width:13px;height:13px;border-radius:50%;background:var(--sl-color-text-accent);transform:translate(-50%,-50%);box-shadow:0 0 0 4px var(--sl-color-bg)}
    .kdm-eq-label{position:absolute;left:51%;top:38%;font-size:.78rem;font-weight:900}
    @media(max-width:800px){.kdm-xgrid{grid-template-columns:1fr}.kdm-cycle{justify-content:flex-start}.kdm-xcard{padding:.85rem}.kdm-ratio-row{grid-template-columns:1fr}.kdm-ratio-label{font-weight:800}}
  `;

  const visualData = {
    '/p13/kalkulation/': {
      title: 'Visuelle Merkhilfen: Kalkulation & Deckungsbeitrag',
      lead: 'Rechenwege werden sicherer, wenn du erkennst, von welcher Preisstufe zur nächsten gerechnet wird.',
      html: `
        <div class="kdm-xcard">
          <h3>Handelskalkulation als Rechenkette</h3>
          <div class="kdm-xflow">
            <div class="kdm-xstep">Listeneinkaufspreis<small>Ausgangspunkt Einkauf</small></div><span class="kdm-xarrow">−</span>
            <div class="kdm-xstep">Liefererrabatt</div><span class="kdm-xarrow">=</span>
            <div class="kdm-xstep">Zieleinkaufspreis</div><span class="kdm-xarrow">−</span>
            <div class="kdm-xstep">Liefererskonto</div><span class="kdm-xarrow">=</span>
            <div class="kdm-xstep">Bareinkaufspreis</div><span class="kdm-xarrow">+</span>
            <div class="kdm-xstep">Bezugskosten</div><span class="kdm-xarrow">=</span>
            <div class="kdm-xstep">Bezugspreis<small>Einstandspreis</small></div>
          </div>
          <div class="kdm-xformula">Einkaufsseite: Rabatt und Skonto werden abgezogen, Bezugskosten werden addiert.</div>
        </div>
        <div class="kdm-xcard">
          <div class="kdm-xgrid">
            <div class="kdm-xmini"><strong>Deckungsbeitrag</strong><div class="kdm-xflow"><div class="kdm-xstep">Verkaufspreis</div><span class="kdm-xarrow">−</span><div class="kdm-xstep">variable Kosten</div><span class="kdm-xarrow">=</span><div class="kdm-xstep">Deckungsbeitrag</div></div><p class="kdm-xcaption">Der Deckungsbeitrag steht zur Deckung der Fixkosten und danach für Gewinn zur Verfügung.</p></div>
            <div class="kdm-xmini"><strong>Break-even-Logik</strong><div class="kdm-xflow"><div class="kdm-xstep">Fixkosten</div><span class="kdm-xarrow">÷</span><div class="kdm-xstep">DB je Stück</div><span class="kdm-xarrow">=</span><div class="kdm-xstep">Break-even-Menge</div></div><p class="kdm-xcaption">Unterhalb: Verlust. Am Break-even: Ergebnis 0. Oberhalb: Gewinn.</p></div>
          </div>
        </div>`
    },
    '/p13/rechnungswesen/': {
      title: 'Visuelle Merkhilfen: Bilanz & Kennzahlen',
      lead: 'Die Bilanz zeigt zwei Perspektiven: Vermögensverwendung auf der Aktivseite und Kapitalherkunft auf der Passivseite.',
      html: `
        <div class="kdm-xcard">
          <h3>Bilanz-Grundstruktur</h3>
          <div class="kdm-bilanz">
            <div class="kdm-bcol"><div class="kdm-bhead">AKTIVA · Wo steckt das Geld?</div><div class="kdm-bitem"><span>Anlagevermögen</span><b>langfristig</b></div><div class="kdm-bitem"><span>Umlaufvermögen</span><b>kurzfristig</b></div><div class="kdm-bitem kdm-bsum"><span>Summe Aktiva</span><b>1.000</b></div></div>
            <div class="kdm-bcol"><div class="kdm-bhead">PASSIVA · Woher kommt das Geld?</div><div class="kdm-bitem"><span>Eigenkapital</span><b>250</b></div><div class="kdm-bitem"><span>Fremdkapital</span><b>750</b></div><div class="kdm-bitem kdm-bsum"><span>Summe Passiva</span><b>1.000</b></div></div>
          </div>
          <p class="kdm-xcaption"><strong>Merke:</strong> Aktiva = Mittelverwendung. Passiva = Mittelherkunft. Beide Summen sind immer gleich groß.</p>
        </div>
        <div class="kdm-xcard">
          <h3>Kennzahlen aus derselben Bilanz</h3>
          <div class="kdm-ratio-row"><div class="kdm-ratio-label"><strong>Eigenkapitalquote</strong><br>250 / 1.000 × 100</div><div class="kdm-ratio-bar"><div class="kdm-ratio-fill" style="width:25%">25 %</div></div></div>
          <div class="kdm-ratio-row"><div class="kdm-ratio-label"><strong>Fremdkapitalquote</strong><br>750 / 1.000 × 100</div><div class="kdm-ratio-bar"><div class="kdm-ratio-fill" style="width:75%">75 %</div></div></div>
          <p class="kdm-xcaption">Kennzahlen sind keine isolierten Formeln: Sie verdichten Bilanzwerte, damit Unternehmen verglichen und Entwicklungen beurteilt werden können.</p>
        </div>`
    },
    '/p13/finanzierung/': {
      title: 'Visuelle Merkhilfen: Finanzierung & Darlehen',
      lead: 'Bei Darlehen solltest du immer getrennt auf Restschuld, Tilgung, Zinsen und Gesamtbelastung schauen.',
      html: `
        <div class="kdm-xcard">
          <h3>Annuitätendarlehen vs. Tilgungsdarlehen</h3>
          <div class="kdm-loan-table">
            <div class="kdm-loan-cell">Merkmal</div><div class="kdm-loan-cell">Start</div><div class="kdm-loan-cell">Verlauf</div><div class="kdm-loan-cell">Folge</div>
            <div class="kdm-loan-cell"><b>Annuitätendarlehen</b></div><div class="kdm-loan-cell">Rate bleibt gleich</div><div class="kdm-loan-cell">Zinsanteil ↓, Tilgungsanteil ↑</div><div class="kdm-loan-cell">planbare konstante Rate</div>
            <div class="kdm-loan-cell"><b>Tilgungsdarlehen</b></div><div class="kdm-loan-cell">Tilgung bleibt gleich</div><div class="kdm-loan-cell">Zinsen ↓, Rate ↓</div><div class="kdm-loan-cell">anfangs höhere Belastung</div>
          </div>
        </div>
        <div class="kdm-xcard">
          <h3>Warum sinken die Zinsen?</h3>
          <div class="kdm-money-bars">
            <div class="kdm-money-row"><span>Jahr 1</span><div class="kdm-money-track"><div class="kdm-money-fill" style="width:100%"></div></div><b>100 % Restschuld</b></div>
            <div class="kdm-money-row"><span>Jahr 2</span><div class="kdm-money-track"><div class="kdm-money-fill" style="width:78%"></div></div><b>78 %</b></div>
            <div class="kdm-money-row"><span>Jahr 3</span><div class="kdm-money-track"><div class="kdm-money-fill" style="width:55%"></div></div><b>55 %</b></div>
            <div class="kdm-money-row"><span>Jahr 4</span><div class="kdm-money-track"><div class="kdm-money-fill" style="width:30%"></div></div><b>30 %</b></div>
          </div>
          <p class="kdm-xcaption">Zinsen werden auf die jeweilige Restschuld berechnet. Sinkt die Restschuld, sinkt bei gleichem Zinssatz auch der Zinsbetrag.</p>
        </div>`
    },
    '/wiso/vwl/': {
      title: 'Visuelle Merkhilfen: Konjunktur & Markt',
      lead: 'Bei VWL-Aufgaben hilft es, zuerst die Richtung der Veränderung zu erkennen: steigt oder sinkt Nachfrage, Angebot, Preisniveau oder Wirtschaftsleistung?',
      html: `
        <div class="kdm-xcard">
          <h3>Konjunkturzyklus</h3>
          <div class="kdm-cycle">
            <div class="kdm-cycle-phase"><b>Aufschwung</b><span>Nachfrage ↑ · Produktion ↑ · Beschäftigung ↑</span></div>
            <div class="kdm-cycle-phase"><b>Boom</b><span>hohe Auslastung · Preise/Löhne steigen eher</span></div>
            <div class="kdm-cycle-phase"><b>Abschwung</b><span>Nachfrage ↓ · Investitionen schwächer</span></div>
            <div class="kdm-cycle-phase"><b>Rezession / Tief</b><span>geringe Auslastung · Arbeitslosigkeit eher ↑</span></div>
          </div>
          <p class="kdm-xcaption">Der Zyklus wiederholt sich nicht exakt gleich, aber die typischen Merkmale der Phasen sind prüfungsrelevant.</p>
        </div>
        <div class="kdm-xcard">
          <div class="kdm-xgrid">
            <div><h3>Angebot und Nachfrage</h3><div class="kdm-market"><div class="kdm-line-a"></div><div class="kdm-line-b"></div><span class="kdm-line-label kdm-lab-a">Angebot</span><span class="kdm-line-label kdm-lab-b">Nachfrage</span><span class="kdm-eq"></span><span class="kdm-eq-label">Gleichgewicht</span></div></div>
            <div class="kdm-xmini"><strong>Prüfungslogik</strong><p><b>Nachfrage steigt</b>, Angebot bleibt gleich → Gleichgewichtspreis und Gleichgewichtsmenge steigen typischerweise.</p><p><b>Angebot steigt</b>, Nachfrage bleibt gleich → Preis sinkt typischerweise, Menge steigt.</p><p><b>EZB erhöht Zinsen</b> → Kredite werden tendenziell teurer, Nachfrage und Inflation können gedämpft werden.</p></div>
          </div>
        </div>`
    }
  };

  function injectStyles() {
    if (document.getElementById('kdm-extra-visual-styles')) return;
    const style = document.createElement('style');
    style.id = 'kdm-extra-visual-styles';
    style.textContent = styles;
    document.head.appendChild(style);
  }

  function normalizedPath() {
    let path = location.pathname.replace(BASE, '');
    if (!path.endsWith('/')) path += '/';
    return path;
  }

  function render() {
    const data = visualData[normalizedPath()];
    if (!data || document.querySelector('.kdm-extra-visual-pack')) return;
    const content = document.querySelector('.sl-markdown-content');
    if (!content) return;
    injectStyles();
    const section = document.createElement('section');
    section.className = 'kdm-extra-visual-pack';
    section.innerHTML = `<div><h2 class="kdm-extra-visual-title">${data.title}</h2><p class="kdm-extra-visual-lead">${data.lead}</p></div>${data.html}`;
    const firstH2 = content.querySelector('h2');
    if (firstH2) content.insertBefore(section, firstH2);
    else content.appendChild(section);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
