---
title: IoT, RFID & Sensorik
description: Sensoren, Aktoren, RFID, Ereignisse und automatisierte Datenerfassung
---

# IoT, RFID und Sensorik verstehen

In Digitalisierungsprojekten müssen Daten häufig nicht von Menschen eingegeben werden, sondern entstehen **direkt in der realen Welt**: Ein Temperatursensor misst die Kühlkette, ein RFID-Tag identifiziert ein Buch oder eine Palette, ein Aktor schaltet eine Anlage ein oder aus.

Für die Prüfung ist wichtig, nicht nur die Begriffe zu kennen, sondern den **Informationsfluss** erklären zu können: *Was erfasst etwas? Wo werden Daten übertragen? Was passiert anschließend im System?*

## 1. Sensor und Aktor – Eingang und Ausgang

Ein **Sensor** erfasst einen Zustand oder Messwert aus der Umgebung und liefert Daten an ein IT-System.

Beispiele:
- Temperaturfühler,
- Helligkeitssensor,
- Bewegungssensor,
- GPS-Empfänger bzw. Positionsdatenquelle,
- Füllstandssensor.

Ein **Aktor** setzt dagegen ein digitales Steuersignal in eine physische Aktion um.

Beispiele:
- Motor startet,
- Ventil öffnet,
- Lampe wird gedimmt,
- Türschloss entriegelt,
- Kühlaggregat wird geregelt.

> **Merksatz:** Sensor = Realität → Daten. Aktor = Steuerbefehl → Aktion in der Realität.

### Beispiel

Ein Kühlraum soll automatisch geregelt werden:

1. Der Sensor misst 9 °C.
2. Das System vergleicht den Wert mit dem Sollbereich.
3. Der Wert ist zu hoch.
4. Das System sendet einen Befehl.
5. Der Aktor schaltet die Kühlung stärker ein.

Damit entsteht ein **Regelkreis** aus Messen, Bewerten und Steuern.

---

## 2. Was ist RFID?

**RFID = Radio Frequency Identification.**

RFID dient dazu, Objekte über Funk eindeutig zu identifizieren. Typische Bestandteile sind:

| Bestandteil | Aufgabe |
|---|---|
| **RFID-Tag / Transponder** | trägt die Kennung bzw. gespeicherte Informationen |
| **RFID-Reader / Lesegerät** | erzeugt das Funkfeld und liest den Tag |
| **Antenne** | überträgt das Funksignal |
| **Backend / Anwendung** | verarbeitet die gelesene Kennung und verbindet sie mit Fachdaten |

Bei vielen Anwendungen enthält der Tag **nicht alle Geschäftsdaten**. Häufig liefert er nur eine eindeutige ID; Details wie Titel, Kunde, Lagerort oder Status stehen in der Datenbank.

## 3. RFID-Lesevorgang Schritt für Schritt

Ein typischer Ablauf:

1. Das Lesegerät erzeugt ein elektromagnetisches Feld.
2. Ein passiver RFID-Tag wird dadurch mit Energie versorgt.
3. Der Tag antwortet mit seiner gespeicherten Kennung.
4. Das Lesegerät empfängt die Antwort.
5. Die Anwendung übergibt die Kennung an das Backend.
6. Das Backend ordnet die Kennung einem Datensatz zu und löst gegebenenfalls einen Prozess aus.

**Beispiel Bibliothek:** Ein Buch wird in die Rückgabe gelegt. Der RFID-Tag wird erkannt, die Medien-ID an das Bibliothekssystem übergeben und der Ausleihstatus aktualisiert.

## 4. RFID gegenüber Barcode

| RFID | Barcode |
|---|---|
| Funkübertragung | optische Erfassung |
| kein direkter Sichtkontakt zwingend erforderlich | Code muss sichtbar sein |
| mehrere Tags können je nach Technik schnell erfasst werden | meist nacheinander scannen |
| Tag kann in/auf einem Objekt angebracht sein | Code muss optisch lesbar bleiben |
| höhere Kosten möglich | sehr günstig |
| Funkumgebung kann Probleme verursachen | empfindlich gegen Verschmutzung/Beschädigung |

Typische RFID-Vorteile:
- schnellere Erfassung,
- weniger manuelle Eingaben,
- geringerer Medienbruch,
- bessere Prozessautomatisierung,
- automatische Identifikation.

Mögliche Nachteile:
- zusätzliche Hardwarekosten,
- Funkstörungen,
- Metall oder Flüssigkeiten können die Erfassung beeinflussen,
- Datenschutzfragen bei personenbeziehbarer Nutzung,
- Tags und Leser müssen zum Einsatzfall passen.

## 5. Information, Warning und Error

Monitoring-Systeme klassifizieren Ereignisse oft nach ihrer Bedeutung.

### Information
Normalzustand oder Hinweis ohne unmittelbaren Handlungsbedarf.

**Beispiel:** Temperatur beträgt −25 °C und liegt im Sollbereich.

### Warning
Ein Grenzwert nähert sich einem kritischen Bereich. Das System funktioniert noch, aber Handeln kann bald nötig werden.

**Beispiel:** Die Kühltemperatur steigt ungewöhnlich schnell.

### Error / Critical
Ein Fehler ist eingetreten oder ein Grenzwert wurde überschritten. Eine Funktion ist beeinträchtigt oder ein Eingreifen ist erforderlich.

**Beispiel:** Temperatursensor liefert keine Werte mehr.

> **Prüfungslogik:** Nicht nur die Bezeichnung nennen. Erkläre immer, **welcher Zustand vorliegt und welche Reaktion daraus folgt**.

---

## 6. Medienbruch und Automatisierung

Ein **Medienbruch** entsteht, wenn Informationen zwischen unterschiedlichen Medien oder Systemen manuell übertragen werden müssen.

Beispiel:
- Daten werden auf Papier notiert,
- später von einem Mitarbeiter in eine Anwendung eingetippt.

Folgen können sein:
- zusätzlicher Zeitaufwand,
- Übertragungsfehler,
- doppelte Arbeit,
- verzögerte Datenverfügbarkeit.

RFID, Sensorik und Schnittstellen können solche Medienbrüche reduzieren, wenn Daten automatisch in das Zielsystem gelangen.

**Vollständige Automatisierung** bedeutet aber mehr als nur digitale Datenerfassung. Auch die nachfolgenden Entscheidungen und Prozessschritte müssen ohne unnötige manuelle Übertragung ausgeführt werden können.

## 7. Typische Prüfungsfragen

Du solltest beantworten können:

- Sensor und Aktor unterscheiden.
- RFID-Komponenten und Lesevorgang erklären.
- Vorteile von RFID gegenüber manueller/optischer Erfassung nennen.
- Information, Warning und Error unterscheiden.
- einen Medienbruch erkennen und eine digitale Gegenmaßnahme begründen.
- erklären, warum automatisierte Datenerfassung die Datenqualität verbessern **kann**, aber falsche Sensorwerte trotzdem kontrolliert werden müssen.

## Kurz zusammengefasst

- **Sensor** erfasst Daten; **Aktor** führt eine Aktion aus.
- RFID identifiziert Objekte über Funk.
- Tag → Reader → Anwendung/Backend → Datensatz/Prozess.
- RFID kann Sichtkontakt und manuelle Erfassung reduzieren.
- **Information** = normaler Hinweis, **Warning** = kritische Annäherung, **Error** = Fehler/Handlungsbedarf.
- Automatisierung soll Medienbrüche und manuelle Übertragung reduzieren.

<div class="kdm-practice" data-topic="p12/iot-rfid-sensorik"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
