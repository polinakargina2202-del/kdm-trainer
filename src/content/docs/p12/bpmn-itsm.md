---
title: Prozesse, BPMN, EPK & ITSM
description: Geschäftsprozessanalyse, Ist/Soll, Digitalisierungsgrad, Prozesskennzahlen, BPMN/EPK und IT-Service-Management
sidebar:
  badge:
    text: 4/7 Prüfungen
    variant: note
---

> **Prüfungsrelevanz:** Für KDM reicht es nicht, BPMN-Symbole zu kennen. Du musst einen realen Geschäftsprozess analysieren, Optimierungspotenzial erkennen, einen Soll-Zustand entwickeln und den Nutzen der Digitalisierung begründen können.

# Geschäftsprozesse analysieren und digital weiterentwickeln

## 1. Geschäftsprozess und Prozesslandschaft

Ein **Geschäftsprozess** besteht aus zusammenhängenden Aktivitäten, die ein bestimmtes Ergebnis für einen internen oder externen Kunden erzeugen.

Eine **Prozesslandschaft** zeigt die großen Zusammenhänge eines Unternehmens:

- **Führungs-/Managementprozesse:** Strategie, Controlling, Unternehmenssteuerung.
- **Kernprozesse:** erzeugen den zentralen Kundennutzen, z. B. Beratung, Verkauf, Leistungserstellung.
- **Unterstützungsprozesse:** ermöglichen Kernprozesse, z. B. IT, Personal, Einkauf, Rechnungswesen.

> **IHK-Falle:** Prozesslandschaft = Überblicksebene. BPMN eines einzelnen Ablaufs = Detailebene.

---

## 2. Erwartungen der Prozessbeteiligten ermitteln

Vor einer Optimierung werden die Anforderungen von **internen** und **externen** Beteiligten erfasst.

Beispiele:
- Kunde: kurze Wartezeit, einfache Bedienung, transparente Information.
- Service-Mitarbeiter: klare Zuständigkeiten und wenig Doppelerfassung.
- IT: sichere Schnittstellen und wartbare Lösung.
- Datenschutz: zulässige und sparsame Datenverarbeitung.
- Management: Wirtschaftlichkeit und messbarer Nutzen.

Mögliche Methoden: Interview, Workshop, Beobachtung, Dokumentenanalyse, Auswertung von Tickets/Beschwerden und Kennzahlen.

---

## 3. Ist-Prozess aufnehmen

Beim **Ist-Zustand** wird nicht beschrieben, wie der Prozess „eigentlich sein sollte“, sondern wie er **wirklich abläuft**.

Erfasse:
1. Start und Ende.
2. Rollen/Abteilungen.
3. Schritte und Entscheidungen.
4. verwendete Daten/Dokumente.
5. Systeme und Schnittstellen.
6. Bearbeitungs- und Wartezeiten.
7. Fehler, Rückfragen, Schleifen und Medienbrüche.
8. Kosten und vorhandene Kennzahlen.

**Medienbruch:** Informationen wechseln z. B. von Papier zu Excel und werden manuell neu erfasst. Das erhöht Aufwand und Fehlerrisiko.

---

## 4. Schwachstellen und Verschwendung erkennen

Typische Optimierungshinweise:
- doppelte Datenerfassung,
- unnötige Freigaben,
- lange Warte-/Liegezeiten,
- manuelle Übertragung zwischen Systemen,
- unklare Zuständigkeit,
- viele Rückfragen,
- hohe Fehler-/Nacharbeitsquote,
- fehlende Schnittstelle,
- wiederkehrende regelbasierte Routinetätigkeit.

### Wertschöpfung

**Wertschöpfende Schritte** erzeugen aus Sicht des Kunden einen Nutzen.  
**Nicht wertschöpfende Schritte** verursachen Aufwand, ohne den Kundennutzen zu erhöhen.

Nicht jeder nicht wertschöpfende Schritt kann entfernt werden: gesetzliche oder sicherheitsrelevante Kontrollen können notwendig sein.

---

## 5. Digitalisierungsgrad beurteilen

Digitalisierung kann verschiedene Stufen haben:

```text
analog → digital erfasst → systemgestützt → integriert → automatisiert → datenbasiert optimiert
```

Mögliche Kriterien:
- Anteil digitaler Prozessschritte,
- Medienbrüche,
- automatisierter Datenaustausch,
- Automatisierungsgrad,
- digitale Kundenschnittstelle,
- Datenqualität und Auswertbarkeit.

> **Prüfungslogik:** „Digital“ ist nicht automatisch „besser“. Auch Kosten, Sicherheit, Datenschutz, Nutzbarkeit und Organisation müssen passen.

---

## 6. Prozesskennzahlen berechnen

```text
Durchlaufzeit = Bearbeitungszeit + Warte-/Liege-/Transportzeit
Fehlerquote = fehlerhafte Vorgänge / alle Vorgänge × 100 %
Automatisierungsgrad = automatisierte betrachtete Schritte / alle betrachteten Schritte × 100 %
Kosten je Vorgang = gesamte Prozesskosten / Anzahl Vorgänge
```

Beispiel: 45 von 60 betrachteten Schritten laufen automatisiert:

`45 / 60 × 100 = 75 % Automatisierungsgrad`.

Kennzahlen sind besonders wichtig für den **Ist-Soll-Vergleich**.

---

## 7. Optimierungsziele definieren

Gute Ziele sind messbar.

Beispiele:
- Durchlaufzeit von 3 Tagen auf 1 Tag reduzieren.
- Fehlerquote unter 2 % senken.
- Prozesskosten je Vorgang um 20 % reduzieren.
- 70 % der Standardfälle automatisieren.

Ein Ziel wie „Prozess verbessern“ ist für die spätere Erfolgskontrolle zu ungenau.

---

## 8. Soll-Prozess entwickeln

Beim **Soll-Zustand** wird festgelegt, wie der Prozess zukünftig ablaufen soll.

Mögliche Maßnahmen:
- Schritte streichen oder zusammenfassen,
- Reihenfolge ändern,
- Verantwortlichkeit klarer zuordnen,
- API/Schnittstelle statt manueller Übertragung,
- Self-Service für Standardfälle,
- RPA für stabile regelbasierte Routinen,
- Daten zentral bereitstellen,
- automatische Plausibilitätsprüfungen.

**Referenzprozesse** und Beispiele aus anderen Unternehmen können Ideen liefern, müssen aber an die eigene Situation angepasst werden.

---

## 9. Ist und Soll wirtschaftlich vergleichen

Die Prüfung kann verlangen, **Digitalisierungsgrad, Kosten und Wertschöpfung** des Ist- und Soll-Zustandes zu vergleichen.

Beispiel:

| Kriterium | Ist | Soll |
|---|---:|---:|
| Durchlaufzeit | 25 Min. | 10 Min. |
| Fehlerquote | 8 % | 2 % |
| Kosten/Vorgang | 12 € | 7 € |
| manuelle Übertragungen | 3 | 0 |

Zusätzlich prüfen:
- einmalige Investitionskosten,
- laufende Kosten,
- monetärer Kundennutzen,
- nicht monetärer Nutzen,
- Risiken und Abhängigkeiten,
- technische/organisatorische Machbarkeit.

---

## 10. Datenhoheit, Datenschutz und technische Umsetzung

Bei einer digitalen Prozesslösung muss geklärt werden:
- welche Daten benötigt werden,
- wer verantwortlich ist,
- wer darauf zugreifen darf,
- welche Schutz-/Nutzungsrechte gelten,
- welche Schnittstellen benötigt werden,
- wie Authentifizierung, Logging, Backup und Berechtigungen umgesetzt werden,
- wie ein Anbieterwechsel/Exit möglich bleibt.

Die technische Lösung folgt also aus den fachlichen Anforderungen – nicht umgekehrt.

---

## 11. Erfolg nach der Umsetzung kontrollieren

Nach Einführung:
1. Kennzahlen erneut messen.
2. Soll-Ist-Abweichung berechnen.
3. Ursachen für Abweichungen analysieren.
4. Rückmeldungen der Nutzer einholen.
5. weitere Verbesserungen ableiten.

Digitalisierung ist damit kein einmaliger Zustand, sondern ein kontinuierlicher Verbesserungsprozess.

---

# EPK und BPMN

## 12. EPK — Ereignisgesteuerte Prozesskette

Eine EPK arbeitet klassisch mit **Ereignissen** und **Funktionen**.

```text
Bestellung eingegangen   ← Ereignis
        ↓
Bestellung prüfen         ← Funktion
        ↓
       XOR
      /   \
 korrekt  fehlerhaft
```

Konnektoren:
- **UND:** alle Pfade.
- **XOR:** genau ein Pfad.
- **OR:** ein oder mehrere Pfade.

---

## 13. BPMN — Business Process Model and Notation

Wichtige Elemente:
- **Start-/End-Event**,
- **Task/Aktivität**,
- **Sequence Flow**,
- **Gateway**,
- **Pool/Lane** für Verantwortlichkeiten.

### Gateways

| Gateway | Bedeutung |
|---|---|
| **XOR** | genau ein Pfad |
| **Parallel / AND** | alle Pfade |
| **Inklusiv / OR** | ein oder mehrere Pfade |

### Swimlanes

```text
Kunde        | Anfrage senden
-------------|----------------------------
Service Desk | Anfrage prüfen → Ticket
-------------|----------------------------
Fachbereich  | bearbeiten → Ergebnis liefern
```

Damit wird sichtbar, **wer** welchen Schritt ausführt und wo Übergaben entstehen.

---

## 14. EPK und BPMN unterscheiden

| Kriterium | EPK | BPMN |
|---|---|---|
| Grundidee | Ereignis ↔ Funktion | flexible Prozessnotation |
| Verantwortlichkeit | Organisationseinheiten ergänzend | Pools/Lanes direkt |
| Verzweigungen | UND/OR/XOR | Gateways |
| komplexe Abläufe | eher einfacher | sehr detailliert modellierbar |

---

# IT Service Management

## 15. Incident, Problem, Service Request und Change

| Begriff | Bedeutung | Beispiel |
|---|---|---|
| **Incident** | ungeplante Störung | Outlook startet nicht |
| **Major Incident** | besonders kritische Störung | zentraler Dienst für viele Nutzer ausgefallen |
| **Problem** | zugrunde liegende Ursache wiederkehrender Incidents | Druckserver fällt jede Woche aus |
| **Service Request** | standardisierte Anfrage | Passwort-Reset |
| **Change** | geplante Änderung | neue Firewall-Regel |

**Incident Management:** Betrieb schnell wiederherstellen.  
**Problem Management:** Ursache untersuchen und nachhaltig reduzieren.

---

## 16. Priorität, Support-Level und SPOC

Priorität ergibt sich häufig aus **Impact (Auswirkung)** und **Urgency (Dringlichkeit)**.

- **1st Level:** Annahme, Klassifikation, Standardlösung.
- **2nd Level:** vertiefte Fach-/Systemanalyse.
- **3rd Level:** Spezialisten, Entwicklung oder Hersteller.

**SPOC (Single Point of Contact):** zentrale Anlaufstelle, häufig der Service Desk.

---

## 17. SLA und Verfügbarkeit

Ein **Service Level Agreement** definiert messbare Servicequalität, z. B.:
- Verfügbarkeit,
- Reaktionszeit,
- Wiederherstellungszeit,
- Supportzeiten,
- Eskalation,
- Reporting.

**Reaktionszeit** = wann die Bearbeitung beginnt.  
**Wiederherstellungszeit** = wann der Service wieder funktionieren soll.

### Up-Time

Bei 99,99 % Verfügbarkeit pro Jahr:

```text
365 × 24 = 8.760 Stunden
Nichtverfügbarkeit = 0,01 % = 0,0001
8.760 × 0,0001 = 0,876 Stunden
0,876 × 60 = 52,56 Minuten
```

→ ca. **52,6 Minuten** zulässige Ausfallzeit pro Jahr.

---

## Kurz zusammengefasst

**KDM-Prozesslogik:**

```text
Prozesslandschaft
→ Erwartungen ermitteln
→ Ist-Prozess aufnehmen
→ Schwachstellen/Daten analysieren
→ Kennzahlen + Digitalisierungsgrad bestimmen
→ Soll-Ziele definieren
→ Soll-Prozess modellieren
→ Wirtschaftlichkeit/Machbarkeit prüfen
→ technische Umsetzung planen
→ Erfolg messen und weiter verbessern
```

Genau diese Kette solltest du auf neue Prüfungssituationen übertragen können.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Prozessanalyse | „Analysieren Sie den Ist-Prozess und nennen Sie drei Optimierungspotenziale.“ |
| Soll-Prozess | „Beschreiben Sie zwei Maßnahmen zur digitalen Weiterentwicklung.“ |
| Kennzahlen | „Ermitteln Sie Durchlaufzeit/Fehlerquote/Automatisierungsgrad.“ |
| Wirtschaftlichkeit | „Beurteilen Sie die Lösung anhand von Kosten und Kundennutzen.“ |
| BPMN | „Ergänzen Sie Gateways und Verantwortlichkeiten.“ |
| ITSM | „Ordnen Sie Incident, Service Request und Change zu.“ |
| SLA | „Berechnen Sie die zulässige Ausfallzeit.“ |

---
<div class="kdm-calculators" data-calculators="uptime"></div>
<div class="kdm-practice" data-topic="p12/bpmn-itsm"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
