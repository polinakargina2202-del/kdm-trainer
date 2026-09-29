const KDM_RESOURCES = {
  '/p12/projektmanagement/': {
    section: '§12', topic: 'Projektmanagement', items: [
      { lang: 'DE', title: 'Projektmanagement: Methoden und Grundlagen', source: 'Atlassian', url: 'https://www.atlassian.com/de/work-management/project-management' },
      { lang: 'DE/RU/UA', title: 'Offizieller Scrum Guide – Sprachversion auswählen', source: 'Scrum Guides', url: 'https://scrumguides.org/download' },
      { lang: 'DE', title: 'Agile und Wasserfall im Vergleich', source: 'Atlassian', url: 'https://www.atlassian.com/de/agile/project-management/project-management-intro' }
    ]
  },
  '/p12/datenbanken-sql/': {
    section: '§12', topic: 'Datenbanken, SQL & Datenanalyse', items: [
      { lang: 'DE', title: 'Microsoft SQL – Dokumentation und Einstieg', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/de-de/sql/?view=sql-server-ver17' },
      { lang: 'RU', title: 'Обучающие ресурсы по SQL', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/ru-ru/sql/sql-server/educational-sql-resources?view=sql-server-ver17' },
      { lang: 'UA', title: 'Документація Microsoft SQL', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/uk-ua/sql/?view=sql-server-ver17' }
    ]
  },
  '/p12/cloud-servicemodelle/': {
    section: '§12', topic: 'Cloud & Servicemodelle', items: [
      { lang: 'DE', title: 'Cloud Computing verständlich erklärt', source: 'IBM', url: 'https://www.ibm.com/de-de/think/topics/cloud-computing' },
      { lang: 'RU', title: 'Основы облачных концепций', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/ru-ru/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/' },
      { lang: 'UA', title: 'Основи хмарних концепцій', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/uk-ua/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/' }
    ]
  },
  '/p12/raid-backup/': {
    section: '§12', topic: 'RAID & Datensicherung', items: [
      { lang: 'DE', title: 'Back-up: Grundlagen und praktische Hinweise', source: 'BSI', url: 'https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/Datensicherung-und-Datenverlust/Back-up-Doppelt-gesichert-haelt-besser/back-up-doppelt-gesichert-haelt-besser.html' },
      { lang: 'DE', title: 'Daten sichern, verschlüsseln und löschen', source: 'BSI', url: 'https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/daten-sichern-verschluesseln-und-loeschen.html' }
    ]
  },
  '/p12/bpmn-itsm/': {
    section: '§12', topic: 'Prozesse, BPMN, EPK & ITSM', items: [
      { lang: 'DE', title: 'Business Process Management – Grundlagen', source: 'IBM', url: 'https://www.ibm.com/de-de/think/topics/business-process-management' },
      { lang: 'DE', title: 'BPMN: Elemente, Pools, Lanes und Gateways', source: 'Signavio', url: 'https://www.signavio.com/de/bpmn-einfuehrung/' },
      { lang: 'RU', title: 'BPMN – обзор нотации бизнес-процессов', source: 'Wikipedia', url: 'https://ru.wikipedia.org/wiki/BPMN' }
    ]
  },
  '/p12/it-sicherheit/': {
    section: '§12', topic: 'IT-Sicherheit & Netzwerk', items: [
      { lang: 'DE', title: 'Zwei-Faktor-Authentisierung verständlich erklärt', source: 'BSI', url: 'https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/zwei-faktor-authentisierung.html' },
      { lang: 'RU', title: 'Основные понятия кибербезопасности', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/ru-ru/training/paths/describe-basic-concepts-of-cybersecurity/' },
      { lang: 'UA', title: 'Основні концепції безпеки, відповідності та ідентичності', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/uk-ua/training/paths/describe-concepts-of-security-compliance-identity/' }
    ]
  },
  '/p12/softwaretesting/': {
    section: '§12', topic: 'Softwaretesting & Debugging', items: [
      { lang: 'RU', title: 'Основы модульного тестирования', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/ru-ru/visualstudio/test/unit-test-basics?view=visualstudio' },
      { lang: 'UA', title: 'Інструменти та завдання модульного тестування', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/uk-ua/visualstudio/test/unit-test-your-code?view=vs-2022' }
    ]
  },
  '/p12/dsgvo/': {
    section: '§12', topic: 'Datenschutz & DSGVO', items: [
      { lang: 'DE', title: 'DSGVO & BDSG – ausführliche Broschüre', source: 'BfDI', url: 'https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Broschueren/INFO1.pdf?__blob=publicationFile' },
      { lang: 'DE', title: 'Datenschutz-Folgenabschätzung nach Art. 35 DSGVO', source: 'BfDI', url: 'https://www.bfdi.bund.de/SharedDocs/Downloads/DE/DSK/Kurzpapiere/20170724_Kurzpapier_5_DatenschutzFolgeabschaetzung.html' },
      { lang: 'DE', title: 'Originaltext der DSGVO', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679' }
    ]
  },
  '/p12/app-entwicklung/': {
    section: '§12', topic: 'App-Entwicklung, UI/UX & RPA', items: [
      { lang: 'DE', title: 'User Experience (UX) – Grundlagen', source: 'IBM', url: 'https://www.ibm.com/de-de/think/topics/user-experience' },
      { lang: 'DE', title: 'Robotic Process Automation (RPA) – Grundlagen', source: 'IBM', url: 'https://www.ibm.com/de-de/think/topics/rpa' }
    ]
  },
  '/p13/vertragsrecht/': {
    section: '§13', topic: 'Vertragsrecht & Abnahme', items: [
      { lang: 'DE', title: 'Kaufvertrag – § 433 BGB', source: 'Gesetze im Internet', url: 'https://www.gesetze-im-internet.de/bgb/__433.html' },
      { lang: 'DE', title: 'Dienstvertrag – § 611 BGB', source: 'Gesetze im Internet', url: 'https://www.gesetze-im-internet.de/bgb/__611.html' },
      { lang: 'DE', title: 'Werkvertrag – § 631 BGB', source: 'Gesetze im Internet', url: 'https://www.gesetze-im-internet.de/bgb/__631.html' }
    ]
  },
  '/p13/beschaffung/': {
    section: '§13', topic: 'Beschaffung & Wareneingang', items: [
      { lang: 'DE', title: 'Angebotsvergleich: quantitativ und qualitativ', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft/angebotsvergleich-6450' },
      { lang: 'DE', title: 'Bezugskalkulation Schritt für Schritt', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft/bezugskalkulation-1482' },
      { lang: 'DE', title: 'Skonto berechnen und Zahlungsziel vergleichen', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft/skonto-berechnen-2323' }
    ]
  },
  '/p13/finanzierung/': {
    section: '§13', topic: 'Finanzierung & Tilgung', items: [
      { lang: 'DE', title: 'Finanzierungsarten im Überblick', source: 'Studyflix', url: 'https://studyflix.de/wirtschaftsinformatik/finanzierungsarten-1267' },
      { lang: 'DE', title: 'Fremdkapitalfinanzierung, Leasing und Factoring', source: 'Studyflix', url: 'https://studyflix.de/wirtschaftsinformatik/fremdkapitalfinanzierung-1268' },
      { lang: 'DE', title: 'Annuität und Annuitätendarlehen', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft/annuitat-definition-1007' }
    ]
  },
  '/p13/kalkulation/': {
    section: '§13', topic: 'Kalkulation & Kostenrechnung', items: [
      { lang: 'DE', title: 'Betriebsabrechnungsbogen (BAB)', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft-schueler/betriebsabrechnungsbogen-921' },
      { lang: 'DE', title: 'Deckungsbeitrag mit Beispielen', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft/deckungsbeitrag-berechnen-5954' },
      { lang: 'DE', title: 'Break-even-Point berechnen', source: 'Studyflix', url: 'https://studyflix.de/jura-recht/break-even-point-1142' }
    ]
  },
  '/p13/rechnungswesen/': {
    section: '§13', topic: 'Rechnungswesen & Bilanz', items: [
      { lang: 'DE', title: 'Aktiva und Passiva einfach erklärt', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft/aktiva-passiva-2348' },
      { lang: 'DE', title: 'GuV – Aufbau und Zusammenhang mit der Bilanz', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft-schueler/guv-2331' },
      { lang: 'DE', title: 'Bilanzkennzahlen und Liquiditätsgrade', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft-schueler/bilanzkennzahlen-2018' }
    ]
  },
  '/wiso/bbig/': {
    section: 'WiSo', topic: 'BBiG & Ausbildungsrecht', items: [
      { lang: 'DE', title: 'Rechte, Pflichten, Probezeit und Kündigung in der Ausbildung', source: 'Handelskammer Bremen', url: 'https://www.ihk.de/bremen-bremerhaven/bilden-qualifizieren/berufliche-ausbildung/ausbildungsbetriebe/ratgeber-fuer-neue-ausbildungsbetriebe-1305150' },
      { lang: 'DE', title: 'Rechte und Pflichten in der Ausbildung – einfache Sprache', source: 'Bundesagentur für Arbeit', url: 'https://web.arbeitsagentur.de/bildung/einfach-erklaert/rechte-pflichten-ausbildung-einfach' }
    ]
  },
  '/wiso/arbeitsrecht/': {
    section: 'WiSo', topic: 'Arbeitsrecht & Kündigung', items: [
      { lang: 'DE', title: 'Arbeitsrecht – Themenübersicht', source: 'BMAS', url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/arbeitsrecht.html' },
      { lang: 'DE', title: 'Arbeitszeit: Höchstdauer, Pausen, Ruhezeiten', source: 'BMAS', url: 'https://bmas.de/DE/Arbeit/Arbeitsrecht/Arbeitnehmerrechte/Regelungen-zur-Arbeitszeit/regelungen-zur-arbeitszeit.html' },
      { lang: 'DE', title: 'Kündigungsschutz verständlich erklärt', source: 'BMAS', url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Arbeitnehmerrechte/Kuendigungsschutz/kuendigungsschutz.html' }
    ]
  },
  '/wiso/betriebsverfassung/': {
    section: 'WiSo', topic: 'Betriebsverfassung & JAV', items: [
      { lang: 'DE', title: 'Betriebsverfassungsgesetz – Originaltext', source: 'Gesetze im Internet', url: 'https://www.gesetze-im-internet.de/betrvg/' },
      { lang: 'DE', title: 'Mitbestimmung und Arbeitsrecht – Übersicht', source: 'BMAS', url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/arbeitsrecht.html' }
    ]
  },
  '/wiso/tarifvertrag/': {
    section: 'WiSo', topic: 'Tarifvertrag & Arbeitskampf', items: [
      { lang: 'DE', title: 'Tarifvertrag – Begriffe und Wirkung', source: 'bpb', url: 'https://www.bpb.de/kurz-knapp/lexika/recht-a-z/324130/tarifvertrag/' },
      { lang: 'DE', title: 'Arbeitskampf, Streik und Aussperrung', source: 'bpb', url: 'https://www.bpb.de/kurz-knapp/lexika/recht-a-z/323045/arbeitskampf/' }
    ]
  },
  '/wiso/rechtsformen/': {
    section: 'WiSo', topic: 'GmbH & Rechtsformen', items: [
      { lang: 'DE', title: 'Rechtsformen: Einzelunternehmen, OHG, KG, GmbH, AG usw.', source: 'IHK Rhein-Neckar', url: 'https://www.ihk.de/rhein-neckar/recht/wirtschaftsrecht/gesellschaftsrecht/Unternehmensformen_Rechtsformen/' }
    ]
  },
  '/wiso/organisation/': {
    section: 'WiSo', topic: 'Organisation & Leitungssysteme', items: [
      { lang: 'DE', title: 'Aufbauorganisation und Organigramme', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft/aufbauorganisation-1346' },
      { lang: 'DE', title: 'Einlinien-, Mehrlinien- und Stabliniensystem', source: 'Studyflix', url: 'https://studyflix.de/wirtschaft/organisationsformen-6736' }
    ]
  },
  '/wiso/agg/': {
    section: 'WiSo', topic: 'AGG & Gleichbehandlung', items: [
      { lang: 'DE', title: 'AGG-Wegweiser: Schutz vor Diskriminierung', source: 'Antidiskriminierungsstelle des Bundes', url: 'https://www.antidiskriminierungsstelle.de/SharedDocs/downloads/DE/publikationen/Wegweiser/agg_wegweiser_vorlese_software.pdf?__blob=publicationFile' },
      { lang: 'DE', title: 'Allgemeines Gleichbehandlungsgesetz – Originaltext', source: 'Gesetze im Internet', url: 'https://www.gesetze-im-internet.de/agg/' }
    ]
  },
  '/wiso/sozialversicherung/': {
    section: 'WiSo', topic: 'Sozialversicherung & Rente', items: [
      { lang: 'DE', title: 'Unsere Sozialversicherung – kostenloses Schulbuch', source: 'Deutsche Rentenversicherung', url: 'https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Broschueren/national/unsere_sozialversicherung' },
      { lang: 'DE', title: 'Tipps für den Berufsstart: Beiträge und Versicherungszweige', source: 'Deutsche Rentenversicherung', url: 'https://www.deutsche-rentenversicherung.de/SharedDocs/Downloads/DE/Broschueren/national/tipps_fuer_den_berufsstart.html' }
    ]
  },
  '/wiso/vwl/': {
    section: 'WiSo', topic: 'VWL: Markt, Konjunktur & Inflation', items: [
      { lang: 'DE', title: 'Wirtschaft: Angebot, Nachfrage und soziale Marktwirtschaft', source: 'bpb', url: 'https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/321443/wirtschaft-oekonomie/' }
    ]
  },
  '/wiso/umwelt/': {
    section: 'WiSo', topic: 'Umwelt- & Arbeitsschutz', items: [
      { lang: 'DE', title: 'Gefährdungsbeurteilung: Grundlagen und Prozessschritte', source: 'BAuA', url: 'https://www.baua.de/DE/Themen/Arbeitsgestaltung/Gefaehrdungsbeurteilung/Handbuch-Gefaehrdungsbeurteilung/Grundlagenwissen' }
    ]
  }
};

function resourceCard(item) {
  return `<a class="kdm-resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer"><span class="kdm-resource-lang">${item.lang}</span><span class="kdm-resource-main"><strong>${item.title}</strong><small>${item.source}</small></span><span class="kdm-resource-arrow">↗</span></a>`;
}

function renderTopicResources() {
  const path = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const base = '/kdm-trainer';
  const relative = path.startsWith(base) ? path.slice(base.length) : path;
  const cfg = KDM_RESOURCES[relative];
  const content = document.querySelector('.sl-markdown-content');
  if (!cfg || !content || content.querySelector('.kdm-resources')) return;

  const box = document.createElement('section');
  box.className = 'kdm-resources';
  box.innerHTML = `<div class="kdm-resource-head"><span class="kdm-kicker">MEHR KONTEXT</span><h2>Weiterlesen & besser verstehen</h2><p>Diese Links sind freiwillige Ergänzungen. Nutze sie, wenn dir bei einem Begriff oder Zusammenhang noch Kontext fehlt. Für den Prüfungsfokus bleibt der Trainer die Hauptstruktur.</p></div><div class="kdm-resource-grid">${cfg.items.map(resourceCard).join('')}</div><p class="kdm-resource-all"><a href="/kdm-trainer/weiterlesen/">Alle weiterführenden Quellen anzeigen →</a></p>`;

  const practice = content.querySelector('.kdm-practice, .kdm-calculators');
  if (practice) content.insertBefore(box, practice);
  else content.appendChild(box);
}

function renderLibrary() {
  const root = document.querySelector('.kdm-resource-library');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  const order = ['§12', '§13', 'WiSo'];
  root.innerHTML = order.map(section => {
    const groups = Object.values(KDM_RESOURCES).filter(x => x.section === section);
    return `<section class="kdm-resource-section"><h2>${section === 'WiSo' ? '§14 Wirtschafts- und Sozialkunde' : section}</h2>${groups.map(g => `<article class="kdm-resource-topic"><h3>${g.topic}</h3><div class="kdm-resource-grid">${g.items.map(resourceCard).join('')}</div></article>`).join('')}</section>`;
  }).join('');
}

function initResources() {
  renderTopicResources();
  renderLibrary();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initResources, { once: true });
else initResources();
document.addEventListener('astro:page-load', initResources);
