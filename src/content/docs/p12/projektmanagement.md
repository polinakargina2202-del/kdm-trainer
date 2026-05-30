---
title: Projektmanagement
description: Machbarkeitsanalyse, Lastenheft, PSP, Risikoanalyse, Wasserfall vs. Scrum
sidebar:
  badge:
    text: 7/7 Prüfungen
    variant: danger
---

> **Prüfungsrelevanz:** In JEDER der 7 analysierten Sessions. Kernthema AP2-1.

## 1. Projektmerkmale

Ein **Projekt** ist ein zeitlich begrenztes Vorhaben mit folgenden Merkmalen:

- Einmaligkeit (kein Routinevorgang)
- Definiertes Ziel (Qualität, Zeit, Budget — das „magische Dreieck")
- Begrenzung von Zeit, Kosten und Ressourcen
- Eigene Projektorganisation (dediziertes Team)

---

## 2. Machbarkeitsanalyse

Klärt **vor dem Projektstart**, ob ein Projekt realisierbar ist. Prüft 5 Bereiche:

| Bereich | Kernfrage | Typische Prüfpunkte |
|---|---|---|
| **Marktlich** | Gibt es Bedarf? Wettbewerb? | Marktanalyse, Zielgruppe, Preisbereitschaft |
| **Technisch** | Ist die Umsetzung technisch möglich? | Infrastruktur, Kompatibilität, Know-how |
| **Rechtlich** | Gibt es rechtliche Hürden? | DSGVO, Urheberrecht, Vertragsrecht, Compliance |
| **Wirtschaftlich** | Rechnet sich das Projekt? | ROI, Kosten-Nutzen, Break-even |
| **Organisatorisch** | Haben wir Kapazitäten? | Personal, Zeit, Kompetenzen |

> **Merksatz:** **M-T-R-W-O** — Markt · Technik · Recht · Wirtschaft · Organisation

---

## 3. Lastenheft vs. Pflichtenheft

| | Lastenheft | Pflichtenheft |
|---|---|---|
| **Erstellt von** | Auftraggeber (AG) | Auftragnehmer (AN) |
| **Beschreibt** | WAS gefordert wird | WIE es umgesetzt wird |
| **Perspektive** | Kundensicht | Lieferantensicht |
| **Typische Inhalte** | Ziele, Anforderungen, Budget, Zeitrahmen, Schnittstellen, Stakeholder | Technische Lösung, Meilensteine, Testszenarien, Abnahmekriterien |
| **Zeitpunkt** | Vor der Ausschreibung | Nach Analyse des Lastenhefts |

> **Merksatz:** Lastenheft = **Was?** (Auftraggeber schreibt) · Pflichtenheft = **Wie?** (Auftragnehmer antwortet)

---

## 4. Projektstrukturplan (PSP)

Gliedert das Projekt hierarchisch in **Teilaufgaben → Arbeitspakete**.

### Arten:

| Art | Gliederung nach |
|---|---|
| **Phasenorientiert** | Projektphasen (Planung, Entwicklung, Test, Abnahme) |
| **Objektorientiert** | Produktbestandteilen (Frontend, Backend, Datenbank) |
| **Funktionsorientiert** | Abteilungen / Zuständigkeiten |
| **Gemischtorientiert** | Kombination der oben genannten |

### Beispiel:

```
Projekt: Reservierungs-App (AMAG Soft GmbH)
├── 1. Projektmanagement
│   ├── 1.1 Anforderungsanalyse
│   └── 1.2 Ressourcenplanung
├── 2. Entwicklung
│   ├── 2.1 Backend-Entwicklung
│   ├── 2.2 Frontend-Entwicklung
│   └── 2.3 Datenbankdesign
└── 3. Qualitätssicherung
    ├── 3.1 Unittests
    └── 3.2 User Acceptance Test (UAT)
```

---

## 5. Wasserfall vs. Scrum

> **Prüfungstipp:** Tabelle mit 2 Kriterien ausfüllen war in W24, S25, W25 und W26 fast identisch. Alle Zeilen auswendig lernen!

| Kriterium | Klassisch: Wasserfall | Agil: Scrum |
|---|---|---|
| **Planung** | Vollständig zu Beginn festgelegt | Iterativ, Sprint für Sprint geplant |
| **Anforderungen** | Vor Start vollständig + vollständig dokumentiert | Im Product Backlog, jederzeit änderbar |
| **Flexibilität bei Änderungen** | Gering — erfordert aufwändige Neuplanung | Sehr hoch — Änderungen sind Teil des Prozesses |
| **Phasen** | Sequenziell, keine Überlappung | Parallele Sprints (1–4 Wochen) |
| **Kundenbeteiligung** | Nur am Anfang und Ende | Kontinuierlich in Sprint Reviews |
| **Fehlererkennung** | Oft erst spät (in Testphase) | Früh (nach jedem Sprint) |
| **Dokumentation** | Ausführlich vorab | Minimal, iterativ |
| **Geeignet für** | Klar definierte, stabile Anforderungen | Komplexe, sich verändernde Anforderungen |

### Scrum-Rollen:

| Rolle | Aufgabe |
|---|---|
| **Product Owner** | Priorisiert Product Backlog, vertritt Kundenwünsche, nimmt Sprints ab |
| **Scrum Master** | Moderiert, beseitigt Hindernisse (kein Vorgesetzter!) |
| **Entwicklungsteam** | Selbstorganisiert, cross-funktional, 3–9 Personen |

### Scrum-Ereignisse:

- **Sprint** — Zeitbox von 1–4 Wochen, liefert fertiges Inkrement
- **Sprint Planning** — Team plant Aufgaben für nächsten Sprint
- **Daily Scrum** — 15-minütiges tägliches Stand-up
- **Sprint Review** — Präsentation des Inkrements vor Stakeholdern
- **Sprint Retrospektive** — Team reflektiert Prozess

### Scrum-Artefakte:

- **Product Backlog** — priorisierte Liste aller Anforderungen (pflegt Product Owner)
- **Sprint Backlog** — Teilmenge des Backlogs für aktuellen Sprint
- **Inkrement** — fertiges, auslieferbares Produktteil nach dem Sprint
- **MVP** (Minimum Viable Product) — kleinstes marktfähiges Produkt

---

## 6. Risikoanalyse

Identifiziert und bewertet Projektrisiken mit Gegenmaßnahmen.

### Tabellenformat (Prüfungsstandard):

| Ursache | Risiko | Auswirkung | Gegenmaßnahme |
|---|---|---|---|
| Unklare Anforderungen vom Kunden | Entwicklung läuft in falsche Richtung | Zeitverzug, Mehrkosten | Agile Methode, regelmäßige Sprint Reviews |
| Personalausfall (Krankheit, Kündigung) | Entwicklung stockt | Terminverzug, Qualitätsmängel | Ressourcenpuffer, Wissenstransfer |
| Datenschutzverletzung | DSGVO-Verstoß | Bußgeld bis 4% Jahresumsatz, Reputationsschaden | DSGVO-Prüfung, Datenschutzbeauftragter einbeziehen |
| Technische Inkompatibilität | Integration schlägt fehl | Neuplanung nötig | Technische Machbarkeitsanalyse vorab |
| Budgetüberschreitung | Finanzierungslücke | Projektstopp | Regelmäßiges Kostencontrolling, Puffer einplanen |

---

## 7. Stakeholder-Analyse

Identifiziert alle vom Projekt betroffenen Personen/Gruppen und ihre Interessen.

| Stakeholder | Erwartung | Befürchtung |
|---|---|---|
| Auftraggeber / Geschäftsführung | Pünktliche Lieferung, Budget- und Qualitätseinhaltung | Verzug, Mehrkosten, schlechtes Produkt |
| IT-Abteilung | Klare technische Anforderungen, gute Dokumentation | Kurzfristige Änderungen, mangelnde Kommunikation |
| Endkunden / Nutzer | Einfache Bedienung, Zuverlässigkeit | Komplizierte Oberfläche, Datenverlust |
| Datenschutzbeauftragter | DSGVO-konforme Umsetzung | Datenschutzverletzungen, Bußgelder |
| Subunternehmer | Klare Aufgabenstellung, pünktliche Zahlung | Unklare Anforderungen, Zahlungsausfall |

---

## 8. Projektabschlussbericht

Dokumentiert das abgeschlossene Projekt. Typische Inhalte:

- **Zielerreichung** — Soll-Ist-Vergleich (Zeit, Kosten, Qualität)
- **Liefergegenstände** — was wurde tatsächlich geliefert?
- **Risiken** — welche sind eingetreten, wie wurden sie bewältigt?
- **Lessons Learned** — was lief gut? Was würde man anders machen?
- **Empfehlungen** für Folgeprojekte oder Wartungsphase

---

## 9. Weitere Konzepte

### Umfeldanalyse (S25):
Untersucht das Projektumfeld in 3 Bereichen:
- **Technisch** — verfügbare Technologien, Infrastruktur
- **Wirtschaftlich** — Marktlage, Budget, Wirtschaftlichkeit
- **Rechtlich** — Gesetze, Vorschriften, Verträge (DSGVO, Urheberrecht)

### Ausschreibung / Bieterverfahren (S25):
Kriterien für die Auswahl eines Auftragnehmers:
- Fachliche Eignung (Referenzen, Zertifizierungen)
- Preis-Leistungs-Verhältnis
- Kapazitäten und Lieferzeit
- Qualitätsmanagementsystem

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Machbarkeitsanalyse | „Nennen Sie 3 projektbezogene Aspekte, die im Rahmen der Machbarkeitsanalyse untersucht werden sollten." |
| Wasserfall vs. Scrum | „Vergleichen Sie die beiden Vorgehensmodelle hinsichtlich Projektplanung und Flexibilität." |
| Risikoanalyse | „Ergänzen Sie die Tabelle um je eine Ursache, ein Risiko und eine Gegenmaßnahme." |
| Lastenheft | „Nennen Sie 4 mögliche Inhalte eines Lastenhefts." |
| Scrum | „Erläutern Sie die Aufgabe des Product Owners." |
