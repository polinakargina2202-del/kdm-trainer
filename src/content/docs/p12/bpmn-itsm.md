---
title: BPMN, EPK & ITSM
description: Prozessmodellierung, SLA, Incident Management, Service Request
sidebar:
  badge:
    text: 4/7 Prüfungen
    variant: note
---

## 1. EPK vs. BPMN

| Kriterium | EPK (Ereignisgesteuerte Prozesskette) | BPMN (Business Process Model and Notation) |
|---|---|---|
| **Darstellung** | Abwechselnd Ereignisse ↔ Funktionen | Flexible Reihenfolge, Swimlanes für Verantwortlichkeiten |
| **Organisationseinheiten** | Als Annotation an Funktionen | Pools und Swimlanes |
| **Konnektoren** | XOR, OR, UND (mit spez. Symbolen) | Gateways: exklusiv (X), parallel (+), inklusiv (O) |
| **Events** | Start- und Endereignisse | Start-, Zwischen- und Endereignisse |
| **Toolunterstützung** | SAP, Aris | Camunda, Signavio, Visio |

### EPK-Symbole:

| Symbol | Bedeutung |
|---|---|
| Sechseck (liegend) | Ereignis (Auslöser oder Ergebnis) |
| Abgerundetes Rechteck | Funktion (Aktivität/Aufgabe) |
| Kreis mit Symbol | Verknüpfungsoperator (XOR/OR/AND) |
| Pfeil | Kontrollfluss |

### BPMN-Gateways:

| Gateway | Symbol | Bedeutung |
|---|---|---|
| **Exklusiv (XOR)** | X | Nur ein Pfad wird gewählt (entweder-oder) |
| **Parallel (+)** | + | Alle Pfade werden gleichzeitig ausgeführt |
| **Inklusiv (O)** | O | Mindestens ein Pfad wird gewählt |
| **Ereignis** | Pentagramm | Basierend auf eingetretenem Ereignis |

---

## 2. ITSM — IT Service Management

### Incident vs. Major Incident:

| | Incident | Major Incident |
|---|---|---|
| **Definition** | Störung, die normalen Betrieb beeinträchtigt | Kritischer Ausfall produktiver Systeme |
| **Auswirkung** | Eingeschränkter Betrieb | Kompletter Systemausfall, Sicherheitsrisiko |
| **Priorität** | Normal | Höchste Priorität, Sonderverfahren |
| **Eskalation** | Standard-Prozess | Sofortige Managementbenachrichtigung |

### Service Request vs. Change Request:

| | Service Request | Change Request |
|---|---|---|
| **Definition** | Anfrage für Standard-Leistung | Anfrage für Änderung an IT-System |
| **Beispiel** | Neues Passwort, Softwareinstallation | Neues Feature, Systemkonfiguration |
| **Genehmigung** | Oft automatisch | Prüfung + Genehmigung nötig |

---

## 3. SLA (Service Level Agreement)

**Definition:** Vertragliche Vereinbarung über Qualität und Umfang einer IT-Dienstleistung.

**Typische SLA-Inhalte:**
- **Verfügbarkeit (Up-Time)** in Prozent
- **Reaktionszeit** (wie schnell wird auf Incident reagiert)
- **Wiederherstellungszeit** (wie schnell ist System wiederhergestellt)
- Eskalationspfade
- Vertragsstrafen bei Nichteinhaltung
- Reporting-Intervalle

### Up-Time-Berechnung:

| Up-Time | Ausfallzeit/Jahr | Ausfallzeit/Monat |
|---|---|---|
| 99 % | 87,6 Stunden | 7,3 Stunden |
| 99,9 % | 8,76 Stunden | 43,8 Minuten |
| 99,99 % | **52,6 Minuten** | 4,4 Minuten |
| 99,999 % | 5,26 Minuten | 26 Sekunden |

**Berechnung 99,99%:**
365 Tage × 24 Std. = 8.760 Std./Jahr
8.760 × 0,0001 = **0,876 Std. = 52,56 Minuten**

---

## 4. SPOC — Single Point of Contact

Einzige Anlaufstelle für alle IT-bezogenen Anfragen (= Service Desk / Helpdesk).

**Vorteile:**
- Klare Zuständigkeit für Kunden
- Effizientes Ticket-Management
- Keine „Direktanrufe" beim Fachexperten
- Qualitätssicherung durch Protokollierung

---

## 5. Proaktives Problemmanagement

- **Incident:** aktuelles Problem wird behoben (reaktiv)
- **Problem Management:** Ursache dauerhaft beseitigen, damit Incident nicht wiederkehrt
- **Known-Error-Datenbank:** bekannte Fehler + Workarounds dokumentiert

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| EPK vs. BPMN | „Nennen Sie 2 Unterschiede zwischen EPK und BPMN." |
| Diagramm ergänzen | Fehlende Symbole/Elemente in BPMN/EPK eintragen |
| SLA-Berechnung | „Wie viele Minuten Ausfall sind bei 99,99% Up-Time erlaubt?" |
| Incident/Major | „Erläutern Sie den Unterschied zwischen Incident und Major Incident." |
| SPOC | „Was versteht man unter SPOC?" |
