---
title: BPMN, EPK & ITSM
description: Prozessmodellierung, SLA, Incident Management, Service Request
sidebar:
  badge:
    text: 4/7 Prüfungen
    variant: note
---

## Worum geht es bei Prozessmodellierung und ITSM?

Unternehmen versuchen, Arbeitsabläufe möglichst klar und nachvollziehbar zu gestalten. Dafür werden Prozesse oft grafisch modelliert. Zwei bekannte Darstellungsformen sind **EPK** und **BPMN**.

Im Bereich **IT Service Management (ITSM)** geht es dagegen darum, IT-Dienstleistungen strukturiert zu betreiben: Störungen bearbeiten, Anfragen einordnen, Änderungen steuern und Servicequalität messbar machen.

Diese beiden Themen treffen sich häufig dort, wo IT-Prozesse beschrieben und verbessert werden sollen.

---

## 1. Was ist ein Geschäftsprozess?

Ein **Geschäftsprozess** besteht aus mehreren zusammenhängenden Aktivitäten, die ein bestimmtes Ergebnis erzeugen.

Beispiel:

1. Kunde meldet eine Störung.
2. Service Desk nimmt die Meldung auf.
3. Ticket wird kategorisiert.
4. Störung wird bearbeitet.
5. Lösung wird dokumentiert.
6. Ticket wird geschlossen.

Eine Prozessdarstellung hilft dabei zu erkennen:

- welche Schritte durchgeführt werden,
- wer für welchen Schritt verantwortlich ist,
- wo Entscheidungen getroffen werden,
- wo Wartezeiten oder unnötige Schleifen entstehen.

---

## 2. EPK — Ereignisgesteuerte Prozesskette

Eine **EPK** stellt einen Prozess als Abfolge von **Ereignissen** und **Funktionen** dar.

### Ereignis

Ein Ereignis beschreibt einen Zustand oder Auslöser.

Beispiele:

- „Bestellung ist eingegangen“
- „Rechnung ist geprüft“
- „Störung ist behoben“

### Funktion

Eine Funktion beschreibt eine Tätigkeit.

Beispiele:

- „Bestellung prüfen“
- „Rechnung freigeben“
- „Ticket bearbeiten“

Typisch für EPK ist der Wechsel:

> **Ereignis → Funktion → Ereignis → Funktion**

### Verknüpfungsoperatoren

Mit Konnektoren werden Verzweigungen dargestellt:

- **UND**: alle Pfade werden ausgeführt
- **XOR**: genau ein Pfad wird gewählt
- **OR**: ein oder mehrere Pfade können gewählt werden

### Einfaches Beispiel

```text
Bestellung eingegangen
        ↓
Bestellung prüfen
        ↓
      XOR
     /   \
korrekt  fehlerhaft
  ↓         ↓
freigeben  Rückfrage senden
```

---

## 3. BPMN — Business Process Model and Notation

**BPMN** ist ebenfalls eine Sprache zur Modellierung von Geschäftsprozessen, bietet aber mehr Möglichkeiten zur Darstellung von Verantwortlichkeiten und komplexen Abläufen.

### Wichtige BPMN-Elemente

**Event:** Ein Ereignis, zum Beispiel Start oder Ende eines Prozesses.

**Task/Aktivität:** Eine Aufgabe, die durchgeführt wird.

**Gateway:** Eine Verzweigung oder Zusammenführung.

**Sequence Flow:** Pfeil, der den Ablauf zeigt.

**Pool/Lane:** Zeigt, wer verantwortlich ist.

### Swimlanes verstehen

Swimlanes sind besonders nützlich, wenn mehrere Abteilungen beteiligt sind.

Beispiel:

```text
Kunde       | Störung melden
------------|-----------------
ServiceDesk | Ticket aufnehmen → kategorisieren
------------|-----------------
IT-Abteilung| Fehler analysieren → beheben
```

Dadurch sieht man nicht nur **was** passiert, sondern auch **wer** etwas tut.

### BPMN-Gateways

| Gateway | Bedeutung | Beispiel |
|---|---|---|
| **Exklusiv (XOR)** | Genau ein Pfad | Rechnung korrekt: ja oder nein |
| **Parallel (AND)** | Alle Pfade gleichzeitig | Bestellung buchen und Lager informieren |
| **Inklusiv (OR)** | Ein oder mehrere Pfade | Kunde bekommt E-Mail und ggf. SMS |

> **Merksatz:** XOR = genau einer. AND = alle. OR = mindestens einer möglich.

---

## 4. EPK und BPMN vergleichen

| Kriterium | EPK | BPMN |
|---|---|---|
| **Grundidee** | Wechsel von Ereignissen und Funktionen | Flexible Prozessnotation |
| **Verantwortlichkeiten** | Organisationseinheiten ergänzend | Pools und Lanes direkt im Diagramm |
| **Verzweigungen** | UND, ODER, XOR | Gateways |
| **Komplexe Abläufe** | Eher einfacher | Sehr gut darstellbar |
| **Typischer Fokus** | Geschäftsprozesse | Geschäfts- und IT-Prozesse |

### Prüfungslogik

Wenn du Unterschiede nennen sollst, verwende klare Vergleichskriterien. Zum Beispiel:

> BPMN stellt Verantwortlichkeiten direkt über Pools und Lanes dar, während bei der EPK Organisationseinheiten typischerweise Funktionen zugeordnet werden.

---

## 5. ITSM — IT Service Management

**IT Service Management** beschreibt die strukturierte Planung, Bereitstellung und Verbesserung von IT-Services.

Ein IT-Service ist zum Beispiel:

- E-Mail
- Arbeitsplatz-PC
- Onlinebanking
- Druckservice
- VPN-Zugang

ITSM soll dafür sorgen, dass solche Services zuverlässig betrieben werden und Nutzer bei Problemen einen klaren Prozess haben.

---

## 6. Incident, Major Incident, Service Request und Change

Diese Begriffe werden in Prüfungen gerne verwechselt.

### Incident

Ein **Incident** ist eine ungeplante Störung oder Beeinträchtigung eines IT-Services.

Beispiel:

> Ein Mitarbeiter kann sich nicht mehr am E-Mail-System anmelden.

Ziel des Incident Managements ist vor allem:

> **Den normalen Betrieb möglichst schnell wiederherstellen.**

Die Ursache muss dabei nicht sofort vollständig bekannt sein.

### Major Incident

Ein **Major Incident** ist eine besonders schwerwiegende Störung mit hoher Auswirkung und hoher Dringlichkeit.

Beispiel:

> Das zentrale Onlinebanking ist für alle Kunden ausgefallen.

Hier gelten häufig beschleunigte Eskalations- und Kommunikationswege.

### Service Request

Ein **Service Request** ist keine Störung, sondern eine standardisierte Anfrage.

Beispiele:

- Passwort zurücksetzen
- neue Software installieren
- Berechtigung beantragen
- neuen Arbeitsplatz bereitstellen

### Change Request

Ein **Change** ist eine geplante Änderung an einem IT-System oder Service.

Beispiele:

- Firewall-Regel ändern
- neue Softwareversion einführen
- Serverkonfiguration anpassen

| Begriff | Kernfrage |
|---|---|
| **Incident** | Etwas funktioniert nicht. |
| **Major Incident** | Etwas Wichtiges funktioniert massiv nicht. |
| **Service Request** | Ich brauche eine Standardleistung. |
| **Change** | Etwas am System soll geplant verändert werden. |

---

## 7. Problem Management

Incident Management behebt zunächst die akute Störung. **Problem Management** beschäftigt sich stärker mit der zugrunde liegenden Ursache.

Beispiel:

Jeden Montag fällt derselbe Druckserver aus.

- Incident Management: Server neu starten, damit wieder gedruckt werden kann.
- Problem Management: Herausfinden, warum der Server regelmäßig ausfällt, und die Ursache dauerhaft beseitigen.

Eine **Known Error Database** kann bekannte Ursachen und Workarounds dokumentieren.

> **Merksatz:** Incident = schnell wieder arbeitsfähig. Problem = Ursache finden und dauerhaft reduzieren.

---

## 8. SLA — Service Level Agreement

Ein **Service Level Agreement** legt messbare Anforderungen an eine IT-Dienstleistung fest.

Typische Inhalte:

- Verfügbarkeit
- Reaktionszeit
- Wiederherstellungszeit
- Supportzeiten
- Eskalationswege
- Reporting
- mögliche Konsequenzen bei Nichterfüllung

### Unterschied Reaktionszeit und Wiederherstellungszeit

**Reaktionszeit:** Wie schnell beginnt der Dienstleister mit der Bearbeitung?

**Wiederherstellungszeit:** Wie schnell soll der Service wieder funktionieren?

Das ist nicht dasselbe.

### Beispiel

SLA:

- Reaktionszeit bei Priorität 1: 15 Minuten
- Wiederherstellungsziel: 2 Stunden

Das bedeutet nicht, dass die Störung nach 15 Minuten behoben sein muss. Nach spätestens 15 Minuten muss die Bearbeitung begonnen haben.

---

## 9. Verfügbarkeit und Ausfallzeit berechnen

Eine Verfügbarkeit von **99,9 %** bedeutet, dass das System zu 0,1 % der betrachteten Zeit ausfallen darf.

### Rechenweg

1. Gesamtzeit bestimmen.
2. Nichtverfügbarkeit berechnen.
3. In passende Einheit umrechnen.

Beispiel für ein Jahr:

```text
365 × 24 = 8.760 Stunden

99,99 % verfügbar
→ 0,01 % nicht verfügbar
→ 0,0001 als Dezimalzahl

8.760 × 0,0001 = 0,876 Stunden
0,876 × 60 = 52,56 Minuten
```

Also sind bei 99,99 % Verfügbarkeit ungefähr **52,6 Minuten Ausfall pro Jahr** zulässig.

| Verfügbarkeit | Ungefähr zulässige Ausfallzeit/Jahr |
|---|---:|
| 99 % | 87,6 Stunden |
| 99,9 % | 8,76 Stunden |
| 99,99 % | 52,6 Minuten |
| 99,999 % | 5,26 Minuten |

### Prüfungslogik

Achte auf die Bezugsdauer. Die gleiche Prozentzahl führt pro Monat, Jahr oder Woche zu unterschiedlichen absoluten Ausfallzeiten.

---

## 10. SPOC — Single Point of Contact

Ein **Single Point of Contact** ist eine zentrale Anlaufstelle für Nutzer, häufig der Service Desk.

Statt dass Mitarbeiter direkt verschiedene IT-Spezialisten anrufen, geht die Anfrage zunächst an eine zentrale Stelle.

Vorteile:

- klare Zuständigkeit
- einheitliche Erfassung von Tickets
- bessere Nachverfolgbarkeit
- Priorisierung möglich
- Wissen kann zentral dokumentiert werden

---

## Kurz zusammengefasst

- **EPK** arbeitet klassisch mit Ereignissen und Funktionen.
- **BPMN** kann Prozesse, Verantwortlichkeiten und Verzweigungen sehr detailliert darstellen.
- **Incident** = ungeplante Störung.
- **Service Request** = standardisierte Anfrage.
- **Change** = geplante Änderung.
- **Problem Management** sucht die Ursache wiederkehrender Störungen.
- Ein **SLA** macht Servicequalität messbar.
- Bei Verfügbarkeitsrechnungen immer zuerst die **Nichtverfügbarkeit** bestimmen.

---

## 6. Ist-/Soll-Prozess und Prozesslandschaft

Bei einer Prozessanalyse wird zuerst der **Ist-Zustand** aufgenommen. Danach werden Schwachstellen und Optimierungsmöglichkeiten ermittelt und ein **Soll-Prozess** entworfen.

Typische Punkte bei der Ist-Aufnahme:
- Beteiligte Rollen/Abteilungen
- Prozessschritte und Reihenfolge
- Medienbrüche (z. B. Papier → manuelle Excel-Eingabe)
- Schnittstellen zwischen Systemen
- Wartezeiten, Rückfragen und Fehlerquellen
- verwendete Daten und Verantwortlichkeiten

Eine **Prozesslandschaft** zeigt nicht jedes Detail, sondern die großen Zusammenhänge von Führungs-, Kern- und Unterstützungsprozessen.

## 7. Prozesskennzahlen

Kennzahlen machen Verbesserungen messbar.

```text
Durchlaufzeit = Bearbeitungszeit + Wartezeit + Transport-/Liegezeit
Fehlerquote   = fehlerhafte Fälle / alle Fälle × 100 %
Automatisierungsgrad = automatisierte Schritte / betrachtete Schritte × 100 %
Kosten je Vorgang = gesamte Prozesskosten / Anzahl Vorgänge
```

**Beispiel:** 45 von 60 Schritten laufen automatisch.
`45 / 60 × 100 = 75 % Automatisierungsgrad`.

> Eine Verkürzung der reinen Bearbeitungszeit bringt wenig, wenn die meiste Zeit in Warteschlangen verloren geht. Deshalb immer den **gesamten Prozess** betrachten.

## 8. Wertschöpfung und Digitalisierungsgrad beurteilen

**Wertschöpfende Schritte** erzeugen aus Kundensicht einen Nutzen, z. B. die eigentliche Beratung oder Leistungserstellung. **Nicht wertschöpfende Schritte** wie doppelte Erfassung, unnötige Freigaben oder Suchen verursachen Aufwand ohne zusätzlichen Kundennutzen.

Digitalisierung kann bedeuten:
- analoge Daten digital erfassen,
- Medienbrüche beseitigen,
- Systeme über Schnittstellen verbinden,
- manuelle Routinetätigkeiten automatisieren,
- Daten für Entscheidungen nutzbar machen.

**Prüfungslogik:** „Digital“ ist nicht automatisch „besser“. Eine Lösung muss auch wirtschaftlich, sicher, nutzbar und organisatorisch umsetzbar sein.

## 9. Optimierung bewerten und Zielerreichung prüfen

Vor einer Änderung sollten **messbare Ziele** definiert werden, z. B.:
- Durchlaufzeit von 3 Tagen auf 1 Tag senken,
- Fehlerquote unter 2 %,
- 70 % der Standardfälle automatisieren,
- Prozesskosten pro Fall um 20 % reduzieren.

Nach der Umsetzung erfolgt ein **Soll-Ist-Vergleich**. Erst dann lässt sich beurteilen, ob die Maßnahme erfolgreich war.

## 10. Support-Level und Priorisierung

Ein Ticket wird nicht nur nach „wichtig/unwichtig“ behandelt. Häufig werden **Auswirkung (Impact)** und **Dringlichkeit (Urgency)** kombiniert.

| Beispiel | Typische Priorität |
|---|---|
| Einzelner Nutzer, kleiner Workaround vorhanden | niedrig/mittel |
| Ganze Abteilung kann Kernprozess nicht ausführen | hoch |
| Kritischer Dienst für viele Nutzer vollständig ausgefallen | sehr hoch / Major Incident |

**1st Level:** Annahme, Klassifikation, Standardlösungen.  
**2nd Level:** vertiefte Fach-/Systemanalyse.  
**3rd Level:** Hersteller/Entwicklung bzw. Spezialisten.

Die genaue Einteilung kann im Unternehmen anders heißen; entscheidend ist die **systematische Eskalation nach Kompetenz und SLA**.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| EPK vs. BPMN | „Nennen und erläutern Sie 2 Unterschiede zwischen EPK und BPMN.“ |
| Diagramm ergänzen | Fehlende Symbole, Gateways oder Verantwortlichkeiten eintragen |
| SLA-Berechnung | „Wie viele Minuten Ausfall sind bei 99,99 % Up-Time pro Jahr erlaubt?“ |
| Incident/Major | „Erläutern Sie den Unterschied zwischen Incident und Major Incident.“ |
| Service Request | „Ordnen Sie die Beispiele Incident, Service Request oder Change zu.“ |
| SPOC | „Erläutern Sie den Zweck eines SPOC.“ |

---
<div class="kdm-calculators" data-calculators="uptime"></div>
<div class="kdm-practice" data-topic="p12/bpmn-itsm"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
