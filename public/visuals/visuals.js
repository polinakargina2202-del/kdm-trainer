(() => {
  const BASE = '/kdm-trainer';

  const styles = `
    .kdm-visual-pack{margin:1.5rem 0 2rem;display:grid;gap:1rem}
    .kdm-visual-title{margin:.2rem 0 .25rem;font-size:1.25rem;font-weight:800}
    .kdm-visual-lead{margin:0 0 .4rem;color:var(--sl-color-gray-3);font-size:.94rem}
    .kdm-vcard{border:1px solid var(--sl-color-gray-5);border-radius:16px;padding:1rem;background:linear-gradient(180deg,var(--sl-color-gray-7),var(--sl-color-bg));overflow:auto}
    .kdm-vcard h3{margin:.1rem 0 .8rem;font-size:1.05rem}
    .kdm-vcaption{margin:.8rem 0 0;color:var(--sl-color-gray-3);font-size:.9rem}
    .kdm-vgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}
    .kdm-vquad{display:grid;grid-template-columns:repeat(2,minmax(240px,1fr));gap:.75rem}
    .kdm-mini{border:1px solid var(--sl-color-gray-5);border-radius:12px;padding:.8rem;background:var(--sl-color-bg)}
    .kdm-mini strong{display:block;margin-bottom:.5rem}
    .kdm-sub{font-size:.82rem;color:var(--sl-color-gray-3);margin-top:.45rem}
    .kdm-disks{display:flex;gap:.45rem;align-items:stretch;min-height:125px}
    .kdm-disk{flex:1;min-width:72px;border:2px solid var(--sl-color-accent);border-radius:10px;padding:.4rem;background:var(--sl-color-gray-7);display:grid;gap:.28rem;align-content:start;text-align:center}
    .kdm-disk-label{font-size:.75rem;font-weight:800;color:var(--sl-color-gray-3)}
    .kdm-block{border-radius:6px;padding:.28rem .32rem;font-size:.76rem;font-weight:800;color:#14263a}
    .kdm-a{background:#8ec5ff}.kdm-b{background:#f6b26b}.kdm-c{background:#93c47d}.kdm-p{background:#d9b8ff}
    .kdm-timeline{display:grid;gap:.55rem;min-width:520px}
    .kdm-day{display:grid;grid-template-columns:65px 1fr;gap:.55rem;align-items:center}
    .kdm-day>span:first-child{font-weight:800}
    .kdm-backupbar{height:34px;border-radius:8px;display:flex;align-items:center;padding:0 .65rem;font-weight:800;color:#14263a}
    .kdm-full{background:#8ec5ff}.kdm-diff{background:#f6b26b}.kdm-inc{background:#93c47d}
    .kdm-stack{display:grid;gap:.45rem;max-width:520px;margin:auto}
    .kdm-layer{border:1px solid var(--sl-color-accent);border-radius:10px;padding:.65rem .8rem;text-align:center;font-weight:800;background:var(--sl-color-accent-low);color:var(--sl-color-accent-high)}
    .kdm-cloudrow{display:grid;grid-template-columns:repeat(2,1fr);gap:.6rem}
    .kdm-cloud{border:2px solid var(--sl-color-accent);border-radius:999px;padding:.8rem;text-align:center;background:var(--sl-color-accent-low)}
    .kdm-cloud b{display:block}.kdm-cloud span{font-size:.78rem;color:var(--sl-color-gray-3)}
    .kdm-er{display:flex;gap:.65rem;align-items:center;justify-content:center;min-width:760px}
    .kdm-entity{width:160px;border:2px solid var(--sl-color-accent);border-radius:12px;background:var(--sl-color-bg);overflow:hidden}
    .kdm-entity b{display:block;padding:.55rem .65rem;background:var(--sl-color-accent-low);color:var(--sl-color-accent-high)}
    .kdm-entity span{display:block;padding:.28rem .55rem;font-size:.78rem;border-top:1px solid var(--sl-color-gray-6)}
    .kdm-pk{background:color-mix(in srgb,#8ec5ff 35%,transparent)}
    .kdm-fk{background:color-mix(in srgb,#f6b26b 30%,transparent)}
    .kdm-relation{font-weight:900;color:var(--sl-color-accent-high);white-space:nowrap}
    .kdm-flow{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;justify-content:center}
    .kdm-node{border:2px solid var(--sl-color-accent);border-radius:10px;padding:.55rem .7rem;background:var(--sl-color-bg);font-weight:750;text-align:center;min-width:110px}
    .kdm-event{border-radius:999px}.kdm-diamond{transform:rotate(45deg);width:52px;height:52px;display:grid;place-items:center;border:2px solid var(--sl-color-accent);background:var(--sl-color-accent-low);margin:0 .25rem}
    .kdm-diamond span{transform:rotate(-45deg);font-weight:900}
    .kdm-arrow{font-size:1.35rem;color:var(--sl-color-accent-high);font-weight:900}
    .kdm-lanes{border:1px solid var(--sl-color-gray-5);border-radius:12px;overflow:hidden;min-width:620px}
    .kdm-lane{display:grid;grid-template-columns:90px 1fr;min-height:86px;border-top:1px solid var(--sl-color-gray-5)}
    .kdm-lane:first-child{border-top:0}.kdm-lane-name{padding:.8rem .6rem;background:var(--sl-color-gray-7);font-weight:800}.kdm-lane-body{padding:.7rem;display:flex;gap:.45rem;align-items:center;flex-wrap:wrap}
    .kdm-factors{display:grid;grid-template-columns:repeat(3,1fr);gap:.65rem}
    .kdm-factor{border-radius:12px;padding:.85rem;text-align:center;color:#14263a}.kdm-factor b{display:block;font-size:1rem}.kdm-factor span{font-size:.8rem}
    .kdm-keyflow{display:flex;gap:.4rem;align-items:center;justify-content:center;flex-wrap:wrap}
    .kdm-keybox{border:1px solid var(--sl-color-gray-5);border-radius:10px;padding:.6rem .7rem;text-align:center;background:var(--sl-color-bg);min-width:125px}.kdm-keybox b{display:block}
    .kdm-waterfall{display:flex;gap:.35rem;align-items:center;flex-wrap:wrap}.kdm-phase{border:1px solid var(--sl-color-accent);border-radius:9px;padding:.55rem .65rem;background:var(--sl-color-accent-low);font-weight:800;color:var(--sl-color-accent-high)}
    .kdm-scrumloop{display:grid;grid-template-columns:repeat(2,minmax(120px,1fr));gap:.5rem;max-width:460px;margin:auto}.kdm-scrumloop .kdm-phase{text-align:center}.kdm-loopnote{text-align:center;margin:.55rem 0 0;font-weight:800;color:var(--sl-color-accent-high)}
    @media(max-width:800px){.kdm-vgrid,.kdm-vquad,.kdm-factors{grid-template-columns:1fr}.kdm-cloudrow{grid-template-columns:1fr}.kdm-er{justify-content:flex-start}.kdm-disks{min-width:430px}.kdm-vcard{padding:.85rem}}
  `;

  const visualData = {
    '/p12/raid-backup/': {
      title: 'Visuelle Merkhilfen: RAID & Backup',
      lead: 'Die wichtigsten Unterschiede lassen sich hier schneller sehen als auswendig lernen.',
      html: `
        <div class="kdm-vcard">
          <h3>RAID 0 / 1 / 5 / 10 im Vergleich</h3>
          <div class="kdm-vquad">
            <div class="kdm-mini"><strong>RAID 0 · Striping</strong><div class="kdm-disks"><div class="kdm-disk"><span class="kdm-disk-label">Disk 1</span><span class="kdm-block kdm-a">A1</span><span class="kdm-block kdm-b">B1</span></div><div class="kdm-disk"><span class="kdm-disk-label">Disk 2</span><span class="kdm-block kdm-a">A2</span><span class="kdm-block kdm-b">B2</span></div></div><div class="kdm-sub">100 % Kapazität · schnell · <b>keine Redundanz</b></div></div>
            <div class="kdm-mini"><strong>RAID 1 · Spiegelung</strong><div class="kdm-disks"><div class="kdm-disk"><span class="kdm-disk-label">Disk 1</span><span class="kdm-block kdm-a">A</span><span class="kdm-block kdm-b">B</span></div><div class="kdm-disk"><span class="kdm-disk-label">Disk 2</span><span class="kdm-block kdm-a">A</span><span class="kdm-block kdm-b">B</span></div></div><div class="kdm-sub">ca. 50 % nutzbar · Daten liegen doppelt vor</div></div>
            <div class="kdm-mini"><strong>RAID 5 · Striping + Parität</strong><div class="kdm-disks"><div class="kdm-disk"><span class="kdm-disk-label">D1</span><span class="kdm-block kdm-a">A1</span><span class="kdm-block kdm-b">B1</span><span class="kdm-block kdm-p">P(C)</span></div><div class="kdm-disk"><span class="kdm-disk-label">D2</span><span class="kdm-block kdm-a">A2</span><span class="kdm-block kdm-p">P(B)</span><span class="kdm-block kdm-c">C1</span></div><div class="kdm-disk"><span class="kdm-disk-label">D3</span><span class="kdm-block kdm-p">P(A)</span><span class="kdm-block kdm-b">B2</span><span class="kdm-block kdm-c">C2</span></div></div><div class="kdm-sub">Mind. 3 Disks · 1 Ausfall · Nutzbar = <b>(n − 1) × Größe</b></div></div>
            <div class="kdm-mini"><strong>RAID 10 · Mirror + Stripe</strong><div class="kdm-disks"><div class="kdm-disk"><span class="kdm-disk-label">Spiegel 1A</span><span class="kdm-block kdm-a">A1</span><span class="kdm-block kdm-b">A2</span></div><div class="kdm-disk"><span class="kdm-disk-label">Spiegel 1B</span><span class="kdm-block kdm-a">A1</span><span class="kdm-block kdm-b">A2</span></div><div class="kdm-disk"><span class="kdm-disk-label">Spiegel 2A</span><span class="kdm-block kdm-c">B1</span><span class="kdm-block kdm-p">B2</span></div><div class="kdm-disk"><span class="kdm-disk-label">Spiegel 2B</span><span class="kdm-block kdm-c">B1</span><span class="kdm-block kdm-p">B2</span></div></div><div class="kdm-sub">Mind. 4 Disks · ca. 50 % nutzbar · schnell + redundant</div></div>
          </div>
          <p class="kdm-vcaption"><strong>Merke:</strong> RAID schützt vor bestimmten Plattenausfällen, aber nicht vor Löschen, Ransomware oder Brand — deshalb ist RAID kein Backup.</p>
        </div>
        <div class="kdm-vcard">
          <h3>Vollbackup · differenziell · inkrementell</h3>
          <div class="kdm-vgrid">
            <div class="kdm-mini"><strong>Differenziell</strong><div class="kdm-timeline"><div class="kdm-day"><span>Mo</span><span class="kdm-backupbar kdm-full">Vollbackup</span></div><div class="kdm-day"><span>Di</span><span class="kdm-backupbar kdm-diff" style="width:35%">Ä1</span></div><div class="kdm-day"><span>Mi</span><span class="kdm-backupbar kdm-diff" style="width:60%">Ä1 + Ä2</span></div><div class="kdm-day"><span>Do</span><span class="kdm-backupbar kdm-diff" style="width:85%">Ä1 + Ä2 + Ä3</span></div></div><div class="kdm-sub">Immer alle Änderungen seit dem letzten <b>Vollbackup</b>.</div></div>
            <div class="kdm-mini"><strong>Inkrementell</strong><div class="kdm-timeline"><div class="kdm-day"><span>Mo</span><span class="kdm-backupbar kdm-full">Vollbackup</span></div><div class="kdm-day"><span>Di</span><span class="kdm-backupbar kdm-inc" style="width:35%">Ä1</span></div><div class="kdm-day"><span>Mi</span><span class="kdm-backupbar kdm-inc" style="width:35%">Ä2</span></div><div class="kdm-day"><span>Do</span><span class="kdm-backupbar kdm-inc" style="width:35%">Ä3</span></div></div><div class="kdm-sub">Nur Änderungen seit der <b>unmittelbar letzten Sicherung</b>.</div></div>
          </div>
        </div>`
    },
    '/p12/cloud-servicemodelle/': {
      title: 'Visuelle Merkhilfe: Cloud-Modelle',
      lead: 'Bereitstellungsmodelle und Servicemodelle sind zwei unterschiedliche Fragen.',
      html: `<div class="kdm-vcard"><div class="kdm-vgrid"><div><h3>Wo / für wen läuft die Cloud?</h3><div class="kdm-cloudrow"><div class="kdm-cloud"><b>Public Cloud</b><span>geteilte Provider-Infrastruktur</span></div><div class="kdm-cloud"><b>Private Cloud</b><span>nur für eine Organisation</span></div><div class="kdm-cloud"><b>Community Cloud</b><span>für eine gemeinsame Gruppe</span></div><div class="kdm-cloud"><b>Hybrid Cloud</b><span>Public + Private kombiniert</span></div></div></div><div><h3>Was liefert der Provider?</h3><div class="kdm-stack"><div class="kdm-layer">SaaS · fertige Software</div><div class="kdm-layer">PaaS · Plattform / Laufzeitumgebung</div><div class="kdm-layer">IaaS · virtuelle Infrastruktur</div><div class="kdm-layer">Server · Storage · Netzwerk</div></div><p class="kdm-vcaption">Je höher das Modell, desto mehr übernimmt der Provider und desto weniger verwaltet der Kunde selbst.</p></div></div></div>`
    },
    '/p12/datenbanken-sql/': {
      title: 'Visuelle Merkhilfe: ER-Modell, PK & FK',
      lead: 'Erst Primärschlüssel finden, dann Beziehungen über Fremdschlüssel herstellen.',
      html: `<div class="kdm-vcard"><div class="kdm-er"><div class="kdm-entity"><b>KUNDE</b><span class="kdm-pk">PK kunden_id</span><span>name</span><span>email</span></div><span class="kdm-relation">1 : n →</span><div class="kdm-entity"><b>BUCHUNG</b><span class="kdm-pk">PK buchung_id</span><span class="kdm-fk">FK kunden_id</span><span class="kdm-fk">FK tisch_id</span><span>datum</span></div><span class="kdm-relation">n : 1 →</span><div class="kdm-entity"><b>TISCH</b><span class="kdm-pk">PK tisch_id</span><span class="kdm-fk">FK restaurant_id</span><span>kapazitaet</span></div><span class="kdm-relation">n : 1 →</span><div class="kdm-entity"><b>RESTAURANT</b><span class="kdm-pk">PK restaurant_id</span><span>name</span><span>adresse</span></div></div><p class="kdm-vcaption"><strong>Leselogik:</strong> Ein Kunde hat viele Buchungen → die Kunden-ID steht als Fremdschlüssel in BUCHUNG. Ein Restaurant hat viele Tische → restaurant_id steht als FK in TISCH.</p></div>`
    },
    '/p12/bpmn-itsm/': {
      title: 'Visuelle Merkhilfe: EPK und BPMN',
      lead: 'Beide modellieren Prozesse, verwenden aber eine andere Symbol- und Organisationslogik.',
      html: `<div class="kdm-vcard"><div class="kdm-vgrid"><div class="kdm-mini"><strong>EPK: Ereignis ↔ Funktion</strong><div class="kdm-flow"><span class="kdm-node kdm-event">Anfrage liegt vor</span><span class="kdm-arrow">→</span><span class="kdm-node">Anfrage prüfen</span><span class="kdm-arrow">→</span><span class="kdm-node kdm-event">Anfrage geprüft</span><span class="kdm-arrow">→</span><span class="kdm-diamond"><span>XOR</span></span></div><div class="kdm-sub">Typisch: Ereignisse lösen Funktionen aus, Funktionen erzeugen neue Ereignisse.</div></div><div class="kdm-mini"><strong>BPMN: Events · Activities · Gateways · Swimlanes</strong><div class="kdm-lanes"><div class="kdm-lane"><div class="kdm-lane-name">Kunde</div><div class="kdm-lane-body"><span class="kdm-node kdm-event">Start</span><span class="kdm-arrow">→</span><span class="kdm-node">Anfrage senden</span></div></div><div class="kdm-lane"><div class="kdm-lane-name">Service</div><div class="kdm-lane-body"><span class="kdm-node">Anfrage prüfen</span><span class="kdm-arrow">→</span><span class="kdm-diamond"><span>X</span></span><span class="kdm-arrow">→</span><span class="kdm-node">Angebot / Absage</span></div></div></div></div></div></div>`
    },
    '/p12/it-sicherheit/': {
      title: 'Visuelle Merkhilfen: 2FA & Verschlüsselung',
      lead: 'Zwei häufige Prüfungsinhalte als Bildlogik.',
      html: `<div class="kdm-vcard"><h3>2FA = zwei unterschiedliche Faktor-Kategorien</h3><div class="kdm-factors"><div class="kdm-factor kdm-a"><b>Wissen</b><span>Passwort · PIN</span></div><div class="kdm-factor kdm-b"><b>Besitz</b><span>Smartphone · Token · Smartcard</span></div><div class="kdm-factor kdm-c"><b>Biometrie</b><span>Fingerabdruck · Gesicht</span></div></div><p class="kdm-vcaption">Passwort + zweite Passwortfrage wären nicht zwei Faktoren, weil beides zur Kategorie <strong>Wissen</strong> gehört.</p></div><div class="kdm-vcard"><h3>Asymmetrische Verschlüsselung in 5 Schritten</h3><div class="kdm-keyflow"><span class="kdm-keybox"><b>1</b>Empfänger erzeugt<br>Public + Private Key</span><span class="kdm-arrow">→</span><span class="kdm-keybox"><b>2</b>Public Key<br>zum Sender</span><span class="kdm-arrow">→</span><span class="kdm-keybox"><b>3</b>Sender verschlüsselt<br>mit Public Key</span><span class="kdm-arrow">→</span><span class="kdm-keybox"><b>4</b>verschlüsselte<br>Übertragung</span><span class="kdm-arrow">→</span><span class="kdm-keybox"><b>5</b>Empfänger entschlüsselt<br>mit Private Key</span></div><p class="kdm-vcaption"><strong>Merke:</strong> Public Key darf öffentlich sein; der Private Key bleibt geheim.</p></div>`
    },
    '/p12/projektmanagement/': {
      title: 'Visuelle Merkhilfe: Wasserfall vs. Scrum',
      lead: 'Der Kernunterschied ist linear vs. iterativ.',
      html: `<div class="kdm-vcard"><div class="kdm-vgrid"><div class="kdm-mini"><strong>Wasserfall · linear</strong><div class="kdm-waterfall"><span class="kdm-phase">Analyse</span><span class="kdm-arrow">→</span><span class="kdm-phase">Planung</span><span class="kdm-arrow">→</span><span class="kdm-phase">Entwicklung</span><span class="kdm-arrow">→</span><span class="kdm-phase">Test</span><span class="kdm-arrow">→</span><span class="kdm-phase">Abnahme</span></div><div class="kdm-sub">Anforderungen möglichst früh vollständig. Späte Änderungen sind aufwändiger.</div></div><div class="kdm-mini"><strong>Scrum · iterativ</strong><div class="kdm-scrumloop"><span class="kdm-phase">Product Backlog</span><span class="kdm-phase">Sprint Planning</span><span class="kdm-phase">Sprint</span><span class="kdm-phase">Review + Retro</span></div><div class="kdm-loopnote">↻ nächster Sprint mit Feedback</div><div class="kdm-sub">Nach jedem Sprint entsteht ein nutzbares Inkrement und neues Feedback kann einfließen.</div></div></div></div>`
    }
  };

  function injectStyles() {
    if (document.getElementById('kdm-visual-styles')) return;
    const style = document.createElement('style');
    style.id = 'kdm-visual-styles';
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
    if (!data || document.querySelector('.kdm-visual-pack')) return;
    const content = document.querySelector('.sl-markdown-content');
    if (!content) return;
    injectStyles();
    const section = document.createElement('section');
    section.className = 'kdm-visual-pack';
    section.innerHTML = `<div><h2 class="kdm-visual-title">${data.title}</h2><p class="kdm-visual-lead">${data.lead}</p></div>${data.html}`;
    const firstH2 = content.querySelector('h2');
    if (firstH2) content.insertBefore(section, firstH2);
    else content.appendChild(section);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
