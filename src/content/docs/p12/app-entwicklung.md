---
title: Apps, digitale Geschäftsmodelle & Kundennutzen
description: Apps, UI/UX, RPA, digitale Geschäftsmodelle, Kundennutzen, Marktanalyse und Lizenzen
sidebar:
  badge:
    text: 3/7 Prüfungen
    variant: note
---

## Worum geht es in dieser Themenwelt?

Bei digitalen Geschäftsmodellen reicht es nicht, nur eine technische Lösung zu entwickeln. Die Lösung muss für die Nutzer verständlich sein, zum Einsatzzweck passen und sich wirtschaftlich betreiben lassen. Deshalb gehören Themen wie **App-Entwicklung, UI/UX, Automatisierung durch RPA, KI und digitaler Reifegrad** zusammen.

In Prüfungsaufgaben geht es häufig darum, verschiedene technische Möglichkeiten zu vergleichen und zu begründen, welche Variante zu einem konkreten Szenario passt.

---

## 1. UI-Design und UX-Design

Die Begriffe **UI** und **UX** werden oft zusammen genannt, meinen aber nicht dasselbe.

### UI = User Interface

Das **User Interface** ist die sichtbare Bedienoberfläche eines Systems. Dazu gehören zum Beispiel:

- Farben
- Schriftarten
- Buttons
- Icons
- Eingabefelder
- Abstände und Layout

UI-Design beantwortet also vor allem die Frage:

> **Wie sieht die Anwendung aus und wie sind die Bedienelemente gestaltet?**

### UX = User Experience

Die **User Experience** beschreibt die gesamte Erfahrung, die ein Nutzer bei der Verwendung einer Anwendung macht.

Dabei geht es zum Beispiel um Fragen wie:

- Findet der Nutzer schnell, was er sucht?
- Sind die Abläufe logisch?
- Muss er unnötig viele Schritte durchführen?
- Versteht er Fehlermeldungen?
- Fühlt sich die Nutzung schnell und angenehm an?

UX-Design beantwortet daher eher die Frage:

> **Wie gut lässt sich die Anwendung benutzen?**

### Beispiel

Eine Banking-App kann optisch sehr modern aussehen: schöne Farben, klare Icons, moderne Schrift. Das wäre gutes **UI-Design**.

Wenn der Nutzer aber sechs Menüs öffnen muss, um eine Überweisung zu starten, ist die **UX** trotzdem schlecht.

| | UI-Design | UX-Design |
|---|---|---|
| **Fokus** | Visuelle Gestaltung | Gesamte Nutzererfahrung |
| **Kernfrage** | Wie sieht es aus? | Wie gut lässt es sich benutzen? |
| **Typische Themen** | Farben, Schriften, Buttons, Layout | Nutzerführung, Verständlichkeit, Effizienz, Tests |
| **Ziel** | Übersichtliche und ansprechende Oberfläche | Intuitive, effiziente und angenehme Nutzung |

> **Merksatz:** UI = Oberfläche. UX = Nutzungserlebnis.

### Prüfungslogik

Wenn die Aufgabe nach **UI** fragt, solltest du konkrete Gestaltungselemente nennen. Wenn sie nach **UX** fragt, geht es eher um Bedienbarkeit, Nutzerführung und Nutzerzufriedenheit.

---

## 2. Native App, Web-App und Hybrid-App

Nicht jede App wird technisch gleich umgesetzt. Welche Variante sinnvoll ist, hängt von Anforderungen wie Performance, Kosten, Wartung und Hardwarezugriff ab.

### Native App

Eine **native App** wird speziell für ein bestimmtes Betriebssystem entwickelt, zum Beispiel für iOS oder Android.

Vorteile:

- hohe Performance
- sehr guter Zugriff auf Gerätefunktionen wie Kamera, GPS oder Push-Nachrichten
- gute Integration in das Betriebssystem

Nachteile:

- für mehrere Plattformen kann mehr Entwicklungs- und Pflegeaufwand entstehen
- Veröffentlichung und Updates laufen häufig über App Stores

### Web-App

Eine **Web-App** läuft im Browser. Sie muss nicht klassisch über einen App Store installiert werden.

Vorteile:

- meist eine gemeinsame Codebasis
- einfache Verteilung über eine URL
- Updates stehen direkt für alle Nutzer bereit

Nachteile:

- teilweise eingeschränkter Zugriff auf Gerätefunktionen
- stärker von Browser und Internetverbindung abhängig

### Hybrid-/Cross-Platform-App

Bei einer **Hybrid- oder Cross-Platform-Lösung** wird ein großer Teil des Codes gemeinsam genutzt und für mehrere Plattformen bereitgestellt.

Das Ziel ist, Vorteile beider Welten zu verbinden: geringerer Entwicklungsaufwand als bei vollständig getrennten nativen Apps, aber stärkere Integration in das Gerät als bei einer reinen Web-App.

| | Native App | Web-App | Hybrid/Cross-Platform |
|---|---|---|---|
| **Entwicklung** | Plattformspezifisch | Webtechnologien, Browser | Große gemeinsame Codebasis für mehrere Plattformen |
| **Performance** | Sehr hoch | Mittel | Mittel bis hoch |
| **Hardwarezugriff** | Sehr gut | Eingeschränkt bis gut | Meist gut, abhängig vom Framework |
| **App Store** | Typischerweise ja | Nein | Häufig ja |
| **Wartung** | Höher bei mehreren Plattformen | Vergleichsweise gering | Mittel |
| **Kosten** | Häufig höher | Häufig niedriger | Mittel |

### Wie entscheidet man sich?

Beispiel: Eine App soll dauerhaft GPS-Daten erfassen, Push-Nachrichten senden und sehr flüssig laufen. Dann spricht viel für eine native oder leistungsfähige Cross-Platform-Lösung.

Wenn dagegen nur Formulare und Informationen bereitgestellt werden sollen, kann eine Web-App wirtschaftlich sinnvoller sein.

### Erfolgsfaktoren für Apps

Unabhängig von der technischen Variante sind häufig wichtig:

- einfache Bedienung
- kurze Ladezeiten
- möglichst wenige Schritte bis zum Ziel
- klare Fehlermeldungen
- konsistentes Design
- Datenschutz und Sicherheit
- gute Darstellung auf verschiedenen Bildschirmgrößen

### Prüfungslogik

Bei einer Vergleichsaufgabe reicht es nicht, nur „Native ist besser“ zu schreiben. Nenne immer ein **Kriterium** und leite daraus die Eignung für das Szenario ab.

Beispiel:

> Da die App intensiv auf Kamera und GPS zugreifen soll, ist eine native Lösung besonders geeignet, weil sie einen direkten Zugriff auf Gerätefunktionen ermöglicht.

---

## 3. RPA — Robotic Process Automation

**RPA** bedeutet, dass Software-Roboter wiederkehrende Arbeitsschritte in vorhandenen Anwendungen automatisiert ausführen.

Wichtig: Ein RPA-Bot ist kein physischer Roboter. Es handelt sich um Software, die zum Beispiel Felder ausliest, Daten überträgt, Dateien ablegt oder standardisierte Eingaben durchführt.

### Beispiel

Ein Mitarbeiter erhält jeden Morgen eine Excel-Datei mit Kundendaten und muss diese Werte manuell in ein anderes System übertragen.

Ein RPA-Bot könnte:

1. die Datei öffnen,
2. die Datensätze lesen,
3. das Zielsystem öffnen,
4. die Werte in die richtigen Felder eintragen,
5. das Ergebnis protokollieren.

### Welche Prozesse eignen sich?

Besonders geeignet sind Prozesse, die:

- häufig wiederholt werden,
- klare Regeln haben,
- nur wenige Ausnahmen enthalten,
- mit strukturierten Daten arbeiten,
- in relativ stabilen Anwendungen stattfinden.

Weniger geeignet sind Prozesse, bei denen ständig menschliche Einschätzung oder kreative Entscheidungen notwendig sind.

### Vorteile

- hohe Geschwindigkeit bei Routineaufgaben
- gleichbleibende Ausführung
- Entlastung von Mitarbeitern
- Skalierbarkeit bei hohem Volumen
- Prozesse können auch außerhalb normaler Arbeitszeiten laufen

### Nachteile

- Änderungen an Masken oder Abläufen können den Bot stören
- Ausnahmefälle müssen gesondert behandelt werden
- Einführung und Wartung verursachen Aufwand
- ein schlecht definierter Prozess wird durch Automatisierung nicht automatisch besser

> **Merksatz:** RPA eignet sich vor allem für **regelbasierte, wiederkehrende und stabile Prozesse**.

### Prüfungslogik

Wenn gefragt wird, ob ein Prozess für RPA geeignet ist, begründe mit seinen Eigenschaften. Beispiel: „geeignet, weil standardisiert, häufig wiederholt und mit strukturierten Daten“.

---

## 4. KI im Unternehmenskontext

Künstliche Intelligenz kann Unternehmen zum Beispiel bei Recherche, Textanalyse, Klassifikation oder Prognosen unterstützen. Sie sollte aber nicht unkritisch eingesetzt werden.

### Typische Risiken

**Halluzinationen:** Das System erzeugt eine plausibel klingende, aber falsche Information.

**Bias:** Trainingsdaten können Verzerrungen enthalten. Dadurch können Ergebnisse bestimmte Gruppen oder Sachverhalte systematisch benachteiligen.

**Datenschutz:** Vertrauliche oder personenbezogene Informationen dürfen nicht unüberlegt an externe Systeme übertragen werden.

**Fehlende Aktualität:** Ein Modell kennt möglicherweise neue Gesetze, Preise oder technische Entwicklungen nicht.

**Mangelnde Nachvollziehbarkeit:** Nicht jedes Ergebnis lässt sich einfach auf eine überprüfbare Quelle zurückführen.

### Beispiel

Eine KI schlägt für einen Einkauf einen bestimmten Anbieter vor. Diese Empfehlung sollte nicht allein übernommen werden. Preise, Vertragsbedingungen, Datenschutz und technische Anforderungen müssen zusätzlich anhand verlässlicher Quellen geprüft werden.

### Prüfungslogik

Bei „Nennen Sie Risiken“ solltest du nicht nur Schlagwörter nennen, sondern möglichst kurz die Konsequenz erklären:

> Halluzinationen: Die KI kann falsche Informationen erzeugen, die zu einer Fehlentscheidung führen.

---

## 5. Digitaler Reifegrad

Der **digitale Reifegrad** beschreibt, wie weit ein Unternehmen seine Prozesse, Technologien und Arbeitsweisen bereits digitalisiert hat.

Es geht also nicht darum, ob ein Unternehmen einfach „Computer benutzt“, sondern wie systematisch digitale Technologien in den Geschäftsalltag integriert sind.

### Mögliche Kriterien

- Grad der Prozessdigitalisierung
- digitale Dokumentenverarbeitung
- Nutzung von Cloud-Diensten
- Datenqualität und Datenanalyse
- digitale Kundenschnittstellen
- Automatisierung
- digitale Zusammenarbeit
- Vernetzung mit Lieferanten und Partnern

### Beispiel

Unternehmen A bearbeitet Bestellungen per Papier, überträgt Daten manuell in Excel und archiviert Rechnungen in Ordnern.

Unternehmen B nutzt ein ERP-System, digitale Workflows, automatisierte Freigaben und ein zentrales Reporting.

Unternehmen B besitzt in diesen Bereichen einen höheren digitalen Reifegrad.

### Wozu wird der Reifegrad ermittelt?

Die Bewertung zeigt:

- wo bereits gut digitalisiert wurde,
- wo Medienbrüche existieren,
- wo Investitionen sinnvoll sein könnten,
- welche Maßnahmen zuerst umgesetzt werden sollten.

---

## Kurz zusammengefasst

- **UI** beschreibt die sichtbare Oberfläche, **UX** die gesamte Nutzungserfahrung.
- **Native Apps** bieten starke Geräteintegration, **Web-Apps** sind leicht zu verteilen, **Hybrid/Cross-Platform** versucht Entwicklungsaufwand zu reduzieren.
- **RPA** automatisiert regelbasierte Routineprozesse.
- KI-Ergebnisse müssen wegen Risiken wie Halluzinationen, Bias und Datenschutz geprüft werden.
- Der **digitale Reifegrad** zeigt, wie weit Digitalisierung in einem Unternehmen umgesetzt ist.

---

## 6. Digitale Geschäftsmodelle und Erlöslogik

Ein **digitales Produkt** ist noch nicht automatisch ein digitales Geschäftsmodell. Ein Geschäftsmodell erklärt, **welchen Kundennutzen** ein Unternehmen schafft, **für wen**, **wie die Leistung erbracht wird** und **womit Geld verdient wird**.

| Modell | Grundidee | Typisches Beispiel | Prüfungs-Hinweis |
|---|---|---|---|
| **Subscription / Abo** | Regelmäßige Gebühr | SaaS, Streaming | planbare Erlöse, laufende Kundenbindung |
| **Freemium** | Basis kostenlos, Premium kostenpflichtig | Cloud-App | große Nutzerbasis, Conversion entscheidend |
| **Pay-per-Use** | Zahlung je Nutzung | API-Aufrufe, Cloud-Rechenleistung | Kosten folgen dem Verbrauch |
| **Transaktions-/Plattformmodell** | Vermittler erhält Gebühr/Provision | Marktplatz, Buchungsplattform | verbindet mehrere Nutzergruppen; Netzwerkeffekte möglich |
| **Werbefinanziert** | Nutzung günstig/kostenlos, Finanzierung durch Werbung | Onlineportal | Reichweite und Daten sind wichtig |
| **Datenbasiert** | Datenanalyse erzeugt Zusatznutzen oder neue Leistung | Predictive Maintenance | Datenschutz, Datenqualität und Datenhoheit beachten |

> **Prüfungstipp:** Nicht nur den Namen nennen. Begründe, **warum das Modell zum Szenario passt**: z. B. schwankende Nutzung → Pay-per-Use; regelmäßige Leistung/Updates → Subscription.

## 7. Kundennutzen kalkulieren

Der Kundennutzen kann **monetär** und **nicht monetär** sein.

**Monetär:** eingesparte Arbeitszeit, weniger Fehlerkosten, geringere Lizenz-/Betriebskosten, zusätzlicher Deckungsbeitrag.

**Nicht monetär:** schnellere Bearbeitung, bessere Datenqualität, höhere Kundenzufriedenheit, Transparenz, geringeres Risiko. Diese Vorteile werden beschrieben; sie dürfen nicht einfach ohne Grundlage in Euro umgerechnet werden.

**Typische Rechnung:**
```text
jährlicher Netto-Nutzen
= jährliche Einsparungen + zusätzlicher wirtschaftlicher Nutzen
  − zusätzliche laufende Kosten

Amortisationsdauer
= einmalige Investition / jährlicher Netto-Nutzen
```

**Beispiel:** Eine Lösung kostet einmalig 18.000 €. Sie spart jährlich 300 Arbeitsstunden à 40 € und zusätzlich 2.000 € Fehlerkosten. Laufende Mehrkosten: 2.000 €/Jahr.

```text
Einsparung Arbeitszeit = 300 × 40 € = 12.000 €
Netto-Nutzen/Jahr       = 12.000 + 2.000 − 2.000 = 12.000 €
Amortisation            = 18.000 / 12.000 = 1,5 Jahre
```

> **Achtung:** Umsatz ist nicht automatisch Nutzen/Gewinn. Wenn die Aufgabe zusätzliche Verkäufe nennt, prüfe, ob Umsatz, Deckungsbeitrag oder Gewinn gefragt ist.

## 8. Business Model Canvas (BMC)

Mit dem **Business Model Canvas** lässt sich ein Geschäftsmodell strukturiert darstellen. Die neun Bausteine sind:

1. Kundensegmente
2. Wertangebote (**Value Proposition**)
3. Kanäle
4. Kundenbeziehungen
5. Einnahmequellen
6. Schlüsselressourcen
7. Schlüsselaktivitäten
8. Schlüsselpartner
9. Kostenstruktur

**Prüfungslogik:** Eine neue App allein ist kein vollständiges Geschäftsmodell. Du solltest zusätzlich erklären können, **welche Zielgruppe welchen Nutzen erhält, über welchen Kanal die Leistung angeboten wird und wie Erlöse entstehen**.

## 9. Informationsbeschaffung, Marktanalyse und Marktpotenzial

**Primärforschung:** Daten werden neu erhoben, z. B. Befragung, Interview, Beobachtung, Testmarkt. Vorteil: passgenau; Nachteil: Zeit/Kosten.

**Sekundärforschung:** Bereits vorhandene Daten werden genutzt, z. B. interne Verkaufszahlen, Statistiken, Studien, Branchenberichte. Vorteil: schnell/günstig; Nachteil: möglicherweise veraltet oder nicht exakt passend.

Wichtige Begriffe:
- **Marktpotenzial:** maximal mögliche Nachfrage unter bestimmten Bedingungen.
- **Marktvolumen:** tatsächlich realisierte Nachfrage/Umsatz im Markt.
- **Marktanteil:** eigener Absatz/Umsatz im Verhältnis zum Marktvolumen.

Kundendaten dürfen für Vertriebsmaßnahmen **nicht grenzenlos** verwendet werden. Zweck, Rechtsgrundlage und Datenschutz müssen zum geplanten Einsatz passen.

## 10. Lizenzmodelle bedarfsgerecht auswählen

Neben dem Erlösmodell kann die **Lizenzierung** entscheidend sein:

| Lizenz | Geeignet wenn … | Typisches Risiko |
|---|---|---|
| **Named User** | klar definierte Personen arbeiten mit der Software | teuer bei vielen seltenen Nutzern |
| **Device-Lizenz** | feste Geräte/Terminals genutzt werden | unflexibel bei mobilen Nutzern |
| **Concurrent User** | viele Nutzer, aber nur wenige gleichzeitig | Kapazität muss passend dimensioniert sein |
| **Subscription** | Updates/Support laufend benötigt werden | dauerhafte laufende Kosten |
| **Perpetual** | langfristige Nutzung derselben Version geplant ist | Updates/Wartung oft extra |
| **Open Source** | Quellcode/Flexibilität wichtig sind | Lizenzbedingungen und Supportaufwand prüfen |

**Prüfungsfrage:** „Wählen Sie ein geeignetes Lizenzmodell und begründen Sie Ihre Entscheidung.“ → immer **Bedarf + Vorteil + ggf. Nachteil** verbinden.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| UI vs. UX | „Erläutern Sie den Unterschied zwischen UI-Design und UX-Design.“ |
| App-Variante | „Begründen Sie, welche App-Variante für das Szenario geeignet ist.“ |
| RPA | „Was ist RPA? Nennen Sie 2 Vorteile und 2 Nachteile.“ |
| Geeignete Prozesse | „Nennen Sie 2 Merkmale von Prozessen, die für RPA geeignet sind.“ |
| KI-Risiken | „Nennen und erläutern Sie 2 Risiken beim Einsatz von KI.“ |

---
<div class="kdm-practice" data-topic="p12/app-entwicklung"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
