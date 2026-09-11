export const CASE_EXAMS = [
  {id:'p12-a',section:'p12',title:'Probeprüfung §12 A · Digitale Serviceplattform',minutes:90,scenario:'Die Nordlicht Service GmbH bearbeitet Kundenanfragen heute per E-Mail, Excel-Liste und mehreren Fachanwendungen. Daten werden teilweise doppelt erfasst. Das Unternehmen möchte eine zentrale webbasierte Serviceplattform mit Self-Service, automatischer Ticketklassifikation und Schnittstelle zum CRM einführen. Monatlich werden rund 6.000 Anfragen bearbeitet.',tasks:[
    {title:'1. Prozessanalyse (25 P)',questions:[
      {prompt:'a) Erläutern Sie drei Schwachstellen des Ist-Prozesses und jeweils eine mögliche Auswirkung.',points:9,rubric:[['drei fallbezogene Schwachstellen',3],['jeweils plausible Auswirkung',3],['Zusammenhang Schwachstelle → Auswirkung erläutert',3]],model:'Manuelle Übertragung kann Eingabefehler erzeugen; Doppelerfassung erhöht Bearbeitungszeit; fehlende zentrale Statussicht erzeugt Rückfragen und Wartezeit.'},
      {prompt:'b) Nennen Sie vier Kennzahlen für den Ist-Soll-Vergleich.',points:4,rubric:[['Durchlaufzeit',1],['Fehlerquote',1],['Kosten je Vorgang',1],['Automatisierungsgrad oder gleichwertig',1]],model:'Durchlaufzeit, Fehlerquote, Kosten je Vorgang, Automatisierungsgrad.'},
      {prompt:'c) Beschreiben Sie zwei digitale Optimierungsmaßnahmen und begründen Sie deren Nutzen.',points:8,rubric:[['Maßnahme 1 + Nutzen',4],['Maßnahme 2 + Nutzen',4]],model:'CRM-Schnittstelle vermeidet Doppelerfassung; Self-Service übernimmt standardisierte Anliegen.'},
      {prompt:'d) Nennen Sie zwei Aspekte, die trotz Digitalisierung gegen eine Umsetzung sprechen könnten.',points:4,rubric:[['wirtschaftlich/organisatorisch',2],['Sicherheit/Datenschutz/technisch',2]],model:'Hohe Kosten/fehlende Ressourcen oder Datenschutz-, Sicherheits- bzw. Integrationsprobleme.'}
    ]},
    {title:'2. Daten und SQL (25 P)',questions:[
      {prompt:'a) Erläutern Sie Validität, Reliabilität und Vollständigkeit der Kundendaten.',points:6,rubric:[['Validität',2],['Reliabilität',2],['Vollständigkeit',2]],model:'Validität = sachlich passend, Reliabilität = zuverlässig/reproduzierbar, Vollständigkeit = benötigte Werte fehlen nicht.'},
      {prompt:'b) Beschreiben Sie ETL bei der Migration aus Excel und Altsystem.',points:6,rubric:[['Extract',2],['Transform',2],['Load',2]],model:'Daten extrahieren, bereinigen/vereinheitlichen und ins Zielsystem laden.'},
      {prompt:'c) Formulieren Sie SQL: je Kategorie Anzahl Tickets aus ticket(category,status), nur Kategorien mit mindestens 100 Tickets.',points:8,rubric:[['SELECT category, COUNT(*)',2],['FROM ticket',1],['GROUP BY category',2],['HAVING COUNT(*) >= 100',3]],model:'SELECT category, COUNT(*) AS anzahl FROM ticket GROUP BY category HAVING COUNT(*) >= 100;'},
      {prompt:'d) Warum beweist Korrelation zwischen Bearbeitungszeit und Kundenzufriedenheit keine Kausalität?',points:5,rubric:[['statistischer Zusammenhang',2],['keine automatische Ursache-Wirkung',2],['Drittvariablen/weitere Prüfung',1]],model:'Korrelation zeigt gemeinsames Verhalten, aber andere Faktoren können beide Größen beeinflussen.'}
    ]},
    {title:'3. Geschäftsmodell und Wirtschaftlichkeit (25 P)',questions:[
      {prompt:'a) Nennen und erläutern Sie zwei geeignete Erlösmodelle.',points:6,rubric:[['Modell 1 + Erklärung',3],['Modell 2 + Erklärung',3]],model:'Z. B. Subscription und Pay-per-Use.'},
      {prompt:'b) 600 Stunden à 35 €, 4.000 € Fehlerkosten gespart, 7.000 € laufende Mehrkosten. Netto-Nutzen?',points:5,rubric:[['600×35=21.000',2],['+4.000−7.000',1],['18.000 €',2]],model:'18.000 € pro Jahr.'},
      {prompt:'c) Investition 45.000 €. Amortisationsdauer mit b)?',points:4,rubric:[['45.000/18.000',2],['2,5 Jahre',2]],model:'2,5 Jahre.'},
      {prompt:'d) Nennen Sie fünf nicht monetäre Nutzenaspekte.',points:5,rubric:[['je sinnvoller Aspekt',5]],model:'Transparenz, Wartezeit, Datenqualität, Kundenzufriedenheit, Nachvollziehbarkeit, Skalierbarkeit.'},
      {prompt:'e) Begründen Sie ein Lizenzmodell für 1.000 Nutzer, max. 150 gleichzeitig.',points:5,rubric:[['Concurrent User',2],['gleichzeitige Nutzung begründet',2],['Kapazitätsgrenze/Nachteil',1]],model:'Concurrent User kann passen, weil nur gleichzeitig aktive Nutzer zählen; Kapazität muss ausreichend sein.'}
    ]},
    {title:'4. Datenschutz und Sicherheit (25 P)',questions:[
      {prompt:'a) Nennen und erläutern Sie drei DSGVO-Grundsätze.',points:9,rubric:[['Grundsatz 1',3],['Grundsatz 2',3],['Grundsatz 3',3]],model:'Z. B. Zweckbindung, Datenminimierung, Integrität/Vertraulichkeit.'},
      {prompt:'b) Erläutern Sie vier Maßnahmen für sichere externe Zugriffe.',points:8,rubric:[['MFA',2],['Least Privilege/RBAC',2],['VPN/verschlüsselte Verbindung/Segmentierung',2],['Logging/Rezertifizierung/JML/Patching',2]],model:'MFA, minimale Rechte, sichere Verbindung/Segmentierung, Protokollierung/Berechtigungsprüfung.'},
      {prompt:'c) Erläutern Sie Privacy by Design und Privacy by Default.',points:4,rubric:[['Design',2],['Default',2]],model:'Datenschutz von Beginn an konzipieren; datenschutzfreundliche Voreinstellungen.'},
      {prompt:'d) Nennen Sie zwei Gründe, warum eine DSFA zu prüfen sein kann.',points:4,rubric:[['hohes Risiko/sensible Daten',2],['neue/eingriffsintensive Technologie/Überwachung',2]],model:'Voraussichtlich hohes Risiko, sensible Daten oder eingriffsintensive Verarbeitung.'}
    ]}
  ]},
  {id:'p12-b',section:'p12',title:'Probeprüfung §12 B · Digitale Wartungsplattform',minutes:90,scenario:'Die HanseWerk Technik GmbH wartet technische Anlagen bei Geschäftskunden. Einsatzberichte werden auf Papier ausgefüllt, später eingescannt und manuell im ERP nacherfasst. Geplant sind mobile Endgeräte, digitale Formulare, Plausibilitätsprüfungen, eine API zum ERP sowie ein Kundenportal.',tasks:[
    {title:'1. Projekt und Soll-Konzept (25 P)',questions:[
      {prompt:'a) Erläutern Sie drei Inhalte einer Machbarkeitsanalyse.',points:9,rubric:[['technisch',3],['wirtschaftlich',3],['rechtlich/organisatorisch/marktlich',3]],model:'Integration/Endgeräte/API, Kosten-Nutzen/Budget sowie Datenschutz/Ressourcen/Organisation.'},
      {prompt:'b) Formulieren Sie drei messbare Soll-Ziele.',points:6,rubric:[['drei messbare fallbezogene Ziele',6]],model:'Z. B. Nacherfassungszeit −70 %, Fehlerquote <1 %, 95 % Berichte am Einsatztag digital.'},
      {prompt:'c) Begründen Sie agil oder klassisch bei noch unklaren Technikeranforderungen.',points:6,rubric:[['agil sinnvoll',2],['iteratives Feedback',2],['unsichere Anforderungen als Bezug',2]],model:'Agil ist naheliegend, weil Anforderungen iterativ mit Nutzerfeedback konkretisiert werden können.'},
      {prompt:'d) Nennen Sie zwei Risiken und je eine Gegenmaßnahme.',points:4,rubric:[['Risiko+Maßnahme 1',2],['Risiko+Maßnahme 2',2]],model:'Offline-Verbindung → lokale Zwischenspeicherung; geringe Akzeptanz → Pilot/Schulung/User-Tests.'}
    ]},
    {title:'2. Datenmodell und Datenanalyse (25 P)',questions:[
      {prompt:'a) Nennen Sie je zwei Stamm- und Bewegungsdaten.',points:4,rubric:[['2 Stammdaten',2],['2 Bewegungsdaten',2]],model:'Stamm: Kunde, Anlage, Techniker. Bewegung: Einsatz, Wartungsbericht, Messwert.'},
      {prompt:'b) Erläutern Sie referentielle Integrität Kunde–Anlage–Wartungsbericht.',points:5,rubric:[['FK auf existierenden PK',2],['fallbezogene Beziehung',2],['Konsistenznutzen',1]],model:'Bericht verweist nur auf existierende Anlage; Anlage auf existierenden Kunden.'},
      {prompt:'c) Geeignetes Diagramm für monatliche Entwicklung durchschnittlicher Bearbeitungszeit?',points:4,rubric:[['Liniendiagramm',2],['Zeitverlauf begründet',2]],model:'Liniendiagramm, weil ein Zeitverlauf betrachtet wird.'},
      {prompt:'d) Erläutern Sie zwei Datenqualitätsprüfungen für Messwerte.',points:4,rubric:[['Plausibilitäts-/Wertebereich',2],['Vollständigkeit/Datentyp/Zeitstempel/Dubletten',2]],model:'Wertebereich/Plausibilität sowie Vollständigkeit, Datentyp, Zeitstempel oder Dubletten prüfen.'},
      {prompt:'e) SQL: alle Anlagen ohne Bericht. Tabellen anlage(id,name), bericht(id,anlage_id).',points:8,rubric:[['SELECT aus anlage',1],['LEFT JOIN bericht',3],['ON a.id=b.anlage_id',2],['WHERE b.id IS NULL',2]],model:'SELECT a.id,a.name FROM anlage a LEFT JOIN bericht b ON a.id=b.anlage_id WHERE b.id IS NULL;'}
    ]},
    {title:'3. Cloud, Betrieb und Tests (25 P)',questions:[
      {prompt:'a) Erläutern Sie IaaS, PaaS und SaaS.',points:6,rubric:[['IaaS',2],['PaaS',2],['SaaS',2]],model:'IaaS = Infrastruktur, PaaS = Plattform/Laufzeitumgebung, SaaS = fertige Anwendung.'},
      {prompt:'b) Nennen Sie drei Kriterien für Cloud vs. On-Premises.',points:6,rubric:[['Kosten/Skalierung',2],['Datenschutz/Sicherheit',2],['SLA/Integration/Lock-in/Know-how',2]],model:'TCO/Skalierung, Schutzbedarf sowie Verfügbarkeit/Integration/Abhängigkeit.'},
      {prompt:'c) Beschreiben Sie Unit-, Integrations- und UAT-Test am Projekt.',points:6,rubric:[['Unit',2],['Integration',2],['UAT',2]],model:'Unit: Formularvalidierung; Integration: App↔API↔ERP; UAT: Techniker testen reale Abläufe.'},
      {prompt:'d) Erläutern Sie zwei SLA-Kennzahlen.',points:4,rubric:[['Kennzahl 1',2],['Kennzahl 2',2]],model:'Z. B. Verfügbarkeit und Reaktions-/Wiederherstellungszeit.'},
      {prompt:'e) Warum ersetzt RAID kein Backup?',points:3,rubric:[['Plattenausfall-Schutz',1],['kein Schutz gegen Löschen/Ransomware/Brand',2]],model:'RAID erhöht Verfügbarkeit bei bestimmten Plattenausfällen, ist aber keine unabhängige Sicherung.'}
    ]},
    {title:'4. Nutzen und Geschäftsmodell (25 P)',questions:[
      {prompt:'a) Unterscheiden Sie digitales Produkt und digitales Geschäftsmodell.',points:4,rubric:[['Produkt',2],['Geschäftsmodell',2]],model:'App = Produkt; Geschäftsmodell beschreibt zusätzlich Zielgruppe, Kundennutzen, Leistungserbringung und Erlöslogik.'},
      {prompt:'b) Nennen Sie fünf Bausteine des Business Model Canvas.',points:5,rubric:[['je Baustein',5]],model:'Kundensegmente, Wertangebot, Kanäle, Beziehungen, Erlösquellen, Ressourcen, Aktivitäten, Partner, Kostenstruktur.'},
      {prompt:'c) Nennen Sie je zwei monetäre und nicht monetäre Nutzenaspekte.',points:4,rubric:[['2 monetäre',2],['2 nicht monetäre',2]],model:'Monetär: Arbeitszeit/Fehlerkosten; nicht monetär: Transparenz/Datenqualität/Kundenzufriedenheit.'},
      {prompt:'d) Investition 30.000 €, Einsparung 14.000 €, Mehrkosten 2.000 €. Netto-Nutzen und Amortisation?',points:6,rubric:[['12.000 €/Jahr',3],['2,5 Jahre',3]],model:'14.000−2.000=12.000; 30.000/12.000=2,5 Jahre.'},
      {prompt:'e) Nennen Sie drei Gründe für spätere Anpassung des Geschäftsmodells.',points:6,rubric:[['Markt/Kunden',2],['Technologie/Wettbewerb',2],['rechtlich/wirtschaftlich/Datenlage',2]],model:'Kunden-/Marktänderungen, neue Technologie/Wettbewerber, rechtliche oder wirtschaftliche Änderungen.'}
    ]}
  ]},
  {id:'p13-a',section:'p13',title:'Probeprüfung §13 A · IT-Ausstattung und Fremdleistung',minutes:90,scenario:'Die ElbData GmbH richtet neue Arbeitsplätze ein und beauftragt für Installation und Verkabelung einen externen Dienstleister. Zusätzlich sollen 40 Notebooks beschafft und über Darlehen oder Leasing finanziert werden.',tasks:[
    {title:'1. Beschaffung (25 P)',questions:[
      {prompt:'a) Nennen Sie vier Kriterien für die Lieferantenauswahl neben dem Preis.',points:4,rubric:[['je Kriterium',4]],model:'Qualität, Lieferzuverlässigkeit, Support, Zertifizierungen, Reklamationsverhalten, Nachhaltigkeit.'},
      {prompt:'b) Beschreiben Sie Wareneingangskontrolle und vier Inhalte eines Warenannahmeprotokolls.',points:8,rubric:[['Identität/Menge/Qualität',4],['vier Protokollinhalte',4]],model:'Bestellung/Lieferschein, Menge und Zustand prüfen; z. B. Datum, Lieferant, Bestellnummer, Menge, Zustand, Schäden, Unterschrift.'},
      {prompt:'c) Erläutern Sie gesetzliche Mängelrechte und Garantie.',points:5,rubric:[['gesetzliche Mängelrechte',3],['Garantie freiwilliges Versprechen',2]],model:'Mängelrechte folgen dem Gesetz; Garantie ist ein freiwilliges zusätzliches Leistungsversprechen.'},
      {prompt:'d) Nennen Sie vier IT-spezifische Beschaffungskriterien.',points:8,rubric:[['Kompatibilität/Schnittstellen',2],['Sicherheit/Datenschutz',2],['Support/Updates/Lizenzen',2],['TCO/Skalierung/Lock-in/Nachhaltigkeit',2]],model:'Kompatibilität, Sicherheit, Support/Lizenz und TCO/Abhängigkeit.'}
    ]},
    {title:'2. Vertrag und Leistungskontrolle (25 P)',questions:[
      {prompt:'a) Begründen Sie die Vertragsart für vollständig funktionsfähige Verkabelung.',points:5,rubric:[['Werkvertrag',2],['konkreter Erfolg',3]],model:'Werkvertrag, weil ein abnahmefähiger Erfolg geschuldet wird.'},
      {prompt:'b) Nennen Sie vier Vertragsinhalte, die Leistung prüfbar machen.',points:8,rubric:[['Leistungsumfang',2],['Qualitäts-/Abnahmekriterien',2],['Termine',2],['Vergütung/SLA/Dokumentation',2]],model:'Leistungsbeschreibung, Abnahmekriterien, Termine, Vergütung/Nachweise/SLA.'},
      {prompt:'c) Unterscheiden Sie ausdrückliche und stillschweigende Abnahme.',points:4,rubric:[['ausdrücklich',2],['stillschweigend',2]],model:'Ausdrücklich durch klare Erklärung; stillschweigend durch eindeutiges Verhalten.'},
      {prompt:'d) Nennen Sie vier Nachweise zur Kontrolle einer IT-Dienstleistung.',points:8,rubric:[['Abnahmeprotokoll',2],['Testprotokoll',2],['Leistungsnachweis',2],['SLA-Report/Mängeldokumentation',2]],model:'Abnahme-, Test-, Leistungsnachweis und SLA-Report/Mängelliste.'}
    ]},
    {title:'3. Finanzierung (25 P)',questions:[
      {prompt:'a) Unterscheiden Sie Außen- und Innenfinanzierung und nennen Sie je zwei Beispiele.',points:6,rubric:[['außen + Beispiele',3],['innen + Beispiele',3]],model:'Außen: Darlehen/Beteiligung. Innen: einbehaltene Gewinne/Abschreibungsgegenwerte.'},
      {prompt:'b) Erläutern Sie Ratendarlehen und Fälligkeitsdarlehen hinsichtlich Zins und Liquidität.',points:6,rubric:[['Rate korrekt',3],['Fälligkeit korrekt',3]],model:'Ratendarlehen: konstante Tilgung, sinkende Zinsen/Rate. Fällig: laufende Zinsen, Tilgung am Ende.'},
      {prompt:'c) Nennen Sie zwei Vorteile und zwei Nachteile von Leasing gegenüber Kauf.',points:8,rubric:[['2 Vorteile',4],['2 Nachteile',4]],model:'Vorteile z. B. geringere Anfangsbelastung/Flexibilität; Nachteile Bindung, mögliche höhere Gesamtkosten, kein automatischer Eigentumserwerb.'},
      {prompt:'d) Warum ist „Ratendarlehen immer am günstigsten“ zu pauschal?',points:5,rubric:[['Konditionen vergleichen',2],['Zins/Laufzeit/Gebühren etc.',2],['schneller sinkende Restschuld unter gleichen Bedingungen',1]],model:'Gesamtkosten hängen von Konditionen ab; unter gleichen Bedingungen sinkt die Restschuld beim Ratendarlehen typischerweise schneller.'}
    ]},
    {title:'4. KLR und Rechnungswesen (25 P)',questions:[
      {prompt:'a) Unterscheiden Sie Einzel- und Gemeinkosten mit Beispiel.',points:4,rubric:[['Einzelkosten',2],['Gemeinkosten',2]],model:'Einzelkosten direkt zurechenbar; Gemeinkosten indirekt.'},
      {prompt:'b) Erläutern Sie Zweck eines BAB.',points:4,rubric:[['Gemeinkosten verteilen',2],['Zuschlagssätze/Steuerung',2]],model:'BAB verteilt Gemeinkosten auf Kostenstellen und ermöglicht Zuschlagssätze.'},
      {prompt:'c) Preis 250 €, variable Kosten 170 €, 400 Stück. DB?',points:5,rubric:[['80 € je Stück',2],['32.000 € gesamt',3]],model:'80 € je Stück; 32.000 € Gesamt-DB.'},
      {prompt:'d) Erläutern Sie vier Grundtypen der Bilanzveränderung mit Beispiel.',points:8,rubric:[['Aktivtausch',2],['Passivtausch',2],['Mehrung',2],['Minderung',2]],model:'Aktivtausch, Passivtausch, Aktiv-Passiv-Mehrung und -Minderung.'},
      {prompt:'e) Nennen Sie zwei Kennzahlen und erläutern Sie deren Aussage.',points:4,rubric:[['Kennzahl 1',2],['Kennzahl 2',2]],model:'Z. B. Eigenkapitalquote und Umsatzrentabilität.'}
    ]}
  ]},
  {id:'p13-b',section:'p13',title:'Probeprüfung §13 B · Softwarebeschaffung und Kalkulation',minutes:90,scenario:'Die WeserCloud GmbH möchte ein neues Ticketsystem einführen. Drei Anbieter stehen zur Wahl. Neben Lizenz- und Einführungskosten spielen Integration, Support, Datenschutz und Skalierbarkeit eine Rolle. Die Einführung soll teilweise fremdfinanziert werden.',tasks:[
    {title:'1. Angebots- und Nutzwertvergleich (25 P)',questions:[
      {prompt:'a) Erläutern Sie quantitativen und qualitativen Angebotsvergleich.',points:4,rubric:[['quantitativ Preis/Kosten',2],['qualitativ nicht monetäre Kriterien',2]],model:'Quantitativ werden messbare Kostenwerte verglichen; qualitativ z. B. Support, Integration und Sicherheit.'},
      {prompt:'b) Beschreiben Sie fünf Schritte einer Nutzwertanalyse.',points:5,rubric:[['Kriterien',1],['Gewichtung',1],['Bewertung',1],['gewichtete Punkte',1],['Summen/Vergleich',1]],model:'Kriterien, Gewichtung, Bewertung, gewichtete Punkte, Summenvergleich.'},
      {prompt:'c) Nennen Sie vier qualitative Kriterien und begründen Sie zwei.',points:8,rubric:[['4 Kriterien',4],['2 Begründungen',4]],model:'Integration, Datenschutz/Sicherheit, Support, Skalierbarkeit, Usability, Zuverlässigkeit.'},
      {prompt:'d) Erläutern Sie TCO und vier Kostenbestandteile.',points:8,rubric:[['TCO Lebenszyklus',2],['4 Kostenbestandteile',6]],model:'Lizenz, Einführung, Betrieb, Support, Schulung, Updates, Migration, Exit.'}
    ]},
    {title:'2. Lizenz und Vertrag (25 P)',questions:[
      {prompt:'a) Vergleichen Sie Named User und Concurrent User; Auswahl für 500 Beschäftigte, max. 120 gleichzeitig.',points:8,rubric:[['Named User',2],['Concurrent',2],['Concurrent naheliegend',2],['Begründung/Kapazität',2]],model:'Named User personenbezogen; Concurrent begrenzt parallele Nutzung. Bei max. 120 gleichzeitig kann Concurrent passend sein.'},
      {prompt:'b) Drei Vorteile Abo-Lizenz für Kunde, ein Vorteil Anbieter.',points:8,rubric:[['3 Kundenvorteile',6],['1 Anbietervorteil',2]],model:'Geringere Anfangsinvestition, planbare laufende Kosten, häufig Updates/Support; Anbieter erhält wiederkehrende Erlöse.'},
      {prompt:'c) Nennen Sie drei Inhalte einer Exit-Strategie gegen Vendor Lock-in.',points:6,rubric:[['Datenexport/-format',2],['Migration/Fristen',2],['Löschung/Doku/Schnittstellen',2]],model:'Datenexport, Migrationsunterstützung/Fristen, Löschung und Dokumentations-/Schnittstellenpflichten.'},
      {prompt:'d) Wie kommt ein Vertrag grundsätzlich zustande?',points:3,rubric:[['Angebot',1.5],['Annahme',1.5]],model:'Durch Angebot und Annahme.'}
    ]},
    {title:'3. Finanzierung und Skonto (25 P)',questions:[
      {prompt:'a) Erklären Sie Factoring und je einen Vorteil/Nachteil.',points:6,rubric:[['Forderungsverkauf',2],['Vorteil',2],['Nachteil',2]],model:'Forderungen werden verkauft; Vorteil Liquidität, Nachteil Gebühren/Kundenkontakt.'},
      {prompt:'b) Warum kann Verzicht auf 2 % Skonto für 20 zusätzliche Tage teuer sein?',points:5,rubric:[['Finanzierungskosten verstanden',2],['auf Jahr hochgerechnet',2],['Vergleich Kreditzins',1]],model:'Ein kleiner Nachlass wird für wenige zusätzliche Kredittage aufgegeben; annualisiert kann der Satz hoch sein.'},
      {prompt:'c) Nennen Sie vier Faktoren für Kreditkonditionen.',points:4,rubric:[['je Faktor',4]],model:'Bonität, Sicherheiten, Cashflow/Verschuldung, Laufzeit, Tilgung, Marktzinssatz.'},
      {prompt:'d) Erläutern Sie Außen- und Innenfinanzierung mit je zwei Beispielen.',points:6,rubric:[['außen',3],['innen',3]],model:'Außen: Darlehen/Beteiligung; innen: Gewinne/Abschreibungsgegenwerte.'},
      {prompt:'e) Zwei Punkte neben Nominalzins beim Finanzierungsvergleich.',points:4,rubric:[['je sinnvoller Punkt',4]],model:'Gebühren, Laufzeit, Sondertilgung, Schlussrate, Sicherheiten, Flexibilität.'}
    ]},
    {title:'4. Kostenrechnung und Steuerung (25 P)',questions:[
      {prompt:'a) Unterscheiden Sie Aufwand/Kosten und Ertrag/Leistung.',points:8,rubric:[['Aufwand vs Kosten',4],['Ertrag vs Leistung',4]],model:'Aufwand/Ertrag gehören zur Fibu; Kosten/Leistung beziehen sich auf den betrieblichen Zweck in der KLR.'},
      {prompt:'b) Erläutern Sie Prozesskostenrechnung und berechnen Sie 36.000 € / 1.200 Vorgänge.',points:6,rubric:[['prozessbezogene Zuordnung/Kostentreiber',3],['30 € je Vorgang',3]],model:'Kosten werden Prozessen/Kostentreibern zugeordnet; Satz = 30 € je Vorgang.'},
      {prompt:'c) Einstand 80 €, Nettoverkauf 100 €. Handelsspanne und Kalkulationszuschlag?',points:5,rubric:[['20 %',2.5],['25 %',2.5]],model:'Handelsspanne 20 %, Kalkulationszuschlag 25 %.'},
      {prompt:'d) Drei Ursachen negativer Soll-Ist-Abweichung und je passende Maßnahme.',points:6,rubric:[['3 Ursache-Maßnahme-Paare',6]],model:'Mehrstunden → Planung/Scope; höhere Preise → Lieferantenvergleich; Nacharbeit → Qualität/Test verbessern.'}
    ]}
  ]}
];
