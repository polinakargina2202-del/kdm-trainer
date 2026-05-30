---
title: Datenbanken & SQL
description: Relationale Datenbanken, ER-Modell, Normalisierung, SQL-Abfragen
sidebar:
  badge:
    text: 7/7 Prüfungen
    variant: danger
---

> **Prüfungsrelevanz:** In JEDER Session vorhanden. SQL-Abfragen müssen fehlerlos geschrieben werden können.

## 1. Stammdaten vs. Bewegungsdaten

| | Stammdaten | Bewegungsdaten |
|---|---|---|
| **Definition** | Grundlegende Daten, die sich selten ändern | Entstehen durch den laufenden Geschäftsprozess |
| **Gültigkeit** | Langfristig | Zeitlich begrenzt |
| **Beispiele (Reservierungssystem)** | Kunden-ID, Name, E-Mail, Restaurantname, Tischanzahl | Buchungsdatum, Reservierungszeit, Anzahl Personen, Essensbestellung |
| **Beispiele (Fuhrpark)** | Fahrzeug-ID, Kennzeichen, Modell, Baujahr | Fahrtdatum, Kilometerstand, Fahrer, Tankfüllung |

---

## 2. Relationale Datenbank

Eine **relationale Datenbank** speichert Daten in Tabellen (Relationen), die durch Schlüsselbeziehungen miteinander verbunden sind.

**Grundbegriffe:**

| Begriff | Erklärung |
|---|---|
| **Tabelle (Relation)** | Speichert Datensätze einer Entität |
| **Primärschlüssel (PK)** | Eindeutiger Bezeichner jedes Datensatzes |
| **Fremdschlüssel (FK)** | Verweist auf PK einer anderen Tabelle (Beziehung) |
| **Kardinalität** | Beschreibt die Art der Beziehung (1:1, 1:n, m:n) |

**Kardinalitäten:**

- **1:1** — Ein Mitarbeiter hat genau einen Ausweis
- **1:n** — Ein Kunde hat mehrere Bestellungen
- **m:n** — Ein Student belegt mehrere Kurse, ein Kurs hat mehrere Studenten

---

## 3. Datenbanktypen

| Typ | Beschreibung | Geeignet für |
|---|---|---|
| **Relationale DB** (SQL) | Tabellen mit festen Schemata | Strukturierte Daten, Transaktionen |
| **NoSQL (Dokument)** | JSON-ähnliche Dokumente | Flexible Strukturen, Web-Apps |
| **NoSQL (Key-Value)** | Einfache Schlüssel-Wert-Paare | Caching, Sessions |
| **Graph-DB** | Knoten und Kanten | Soziale Netzwerke, Empfehlungen |
| **Spaltenorientiert** | Optimiert für lesende Abfragen | Analytics, Data Warehouse |

**Big Data — 3V:**

| V | Bedeutung | Beispiel |
|---|---|---|
| **Volume** | Sehr große Datenmenge | Petabytes an Sensordaten |
| **Variety** | Verschiedene Datentypen | Bilder, Videos, Texte, Sensordaten |
| **Velocity** | Hohe Entstehungsgeschwindigkeit | Echtzeit-Transaktionen |

> Für Big Data → NoSQL ist besser geeignet (horizontale Skalierung, flexible Strukturen)

---

## 4. Normalisierung

### Anomalie-Typen (W21, S22):

| Anomalie | Problem |
|---|---|
| **Einfügeanomalie** | Datensatz kann nicht eingefügt werden, ohne redundante Daten zu erfassen |
| **Änderungsanomalie** | Änderung muss an mehreren Stellen erfolgen → Inkonsistenz |
| **Löschanomalie** | Löschen eines Datensatzes vernichtet ungewollt andere Informationen |

### Normalformen:

| NF | Bedingung | Beispiel-Problem |
|---|---|---|
| **1NF** | Keine Wiederholungsgruppen, atomare Werte | Mehrere Telefonnummern in einem Feld |
| **2NF** | 1NF + volle funktionale Abhängigkeit vom gesamten PK | Attribut hängt nur von Teil-PK ab |
| **3NF** | 2NF + keine transitiven Abhängigkeiten | PLZ bestimmt Ort, aber PK ist Kunden-ID |

> **Transitive Abhängigkeit:** A → B → C, dabei A = PK. B hängt von A ab, C hängt von B ab — C sollte in eigene Tabelle.

---

## 5. Datenmigration

Methoden zur Übertragung von Daten in ein neues System:

| Methode | Beschreibung | Vorteil | Nachteil |
|---|---|---|---|
| **Datenbankdump** | Export als SQL/CSV, Import ins neue System | Einfach, schnell | Downtime nötig |
| **ETL-Prozess** | Extract → Transform → Load | Komplexe Transformationen möglich | Aufwändig zu entwickeln |
| **Replikation** | Beide Systeme laufen parallel, synchronisiert | Kein Datenverlust, kein Downtime | Hoher Aufwand |

---

## 6. SQL — Grundbefehle

### SELECT mit Bedingung:

```sql
-- Alle aktiven Kunden anzeigen
SELECT * FROM kunde WHERE aktiv = 1;

-- Anzahl aktiver Kunden
SELECT COUNT(*) AS anzahl FROM kunde WHERE aktiv = 1;

-- Fahrzeuge nach Baujahr filtern
SELECT kennzeichen, modell FROM fahrzeug WHERE baujahr < 2020;
```

### SELECT mit JOIN:

```sql
-- Alle Buchungen mit Kundenname
SELECT k.vorname, k.nachname, b.datum, b.uhrzeit
FROM buchung b
INNER JOIN kunde k ON b.kunde_id = k.kunden_id;

-- Fahrzeuge mit Fahrzeugart, absteigend nach Anzahl
SELECT fa.bezeichnung, COUNT(*) AS anzahl
FROM fahrzeug f
INNER JOIN fz_art fa ON f.fz_art_id = fa.art_id
GROUP BY fa.bezeichnung
ORDER BY anzahl DESC;
```

### SELECT mit GROUP BY:

```sql
-- Bestellungen pro Kunde
SELECT k.nachname, COUNT(b.id) AS anzahl_buchungen
FROM kunde k
LEFT JOIN buchung b ON k.kunden_id = b.kunde_id
GROUP BY k.kunden_id, k.nachname
ORDER BY anzahl_buchungen DESC;
```

### INSERT INTO:

```sql
-- Einzelnen Datensatz einfügen
INSERT INTO kunde (vorname, nachname, email, aktiv)
VALUES ('Anna', 'Müller', 'anna@example.com', 1);

-- Daten aus alter Tabelle kopieren (neues Attribut = NULL)
INSERT INTO kunde (
  kunden_id, vorname, nachname, email_adresse,
  telefonnummer, aktiv, kundenpraeferenz
)
SELECT
  id, vorname, nachname, email,
  telefonnummer, aktiv, NULL
FROM kunde_alt;
```

### UPDATE:

```sql
-- Einzelnen Datensatz aktualisieren
UPDATE fahrzeug
SET baujahr = 2023
WHERE id = 4711;

-- Alle Datensätze einer Bedingung ändern
UPDATE kunde
SET aktiv = 0
WHERE letzte_buchung < '2020-01-01';
```

### Weitere nützliche Befehle:

```sql
-- Tabelle löschen und neu erstellen
DELETE FROM tabelle WHERE bedingung;

-- Neue Tabelle erstellen
CREATE TABLE tischreservierung (
  id INT PRIMARY KEY AUTO_INCREMENT,
  datum DATE NOT NULL,
  uhrzeit TIME,
  tisch_id INT,
  kunde_id INT,
  FOREIGN KEY (tisch_id) REFERENCES tisch(id),
  FOREIGN KEY (kunde_id) REFERENCES kunde(kunden_id)
);
```

---

## 7. Referentielle Integrität

> Ein Fremdschlüssel darf **nur einen Wert enthalten**, der als Primärschlüssel in der referenzierten Tabelle existiert.

**Beispiel:**
- Tabelle `buchung` hat Feld `kunde_id` (FK → Tabelle `kunde`)
- Eine Buchung für Kunde-ID 99 darf **nicht existieren**, wenn Kunde 99 nicht in `kunde` vorhanden ist
- Beim Löschen eines Kunden → alle Buchungen dieses Kunden müssen zuerst gelöscht werden (oder Cascade Delete)

---

## 8. ER-Diagramm lesen und ergänzen

In der Prüfung: Tabellen ergänzen, Kardinalitäten einzeichnen, PK/FK markieren.

**Beispiel — Reservierungssystem:**

```
KUNDE (kunden_id PK, vorname, nachname, email)
   |
   | 1:n (ein Kunde hat mehrere Buchungen)
   |
BUCHUNG (buchung_id PK, datum, uhrzeit, kunden_id FK, tisch_id FK)
   |
   | n:1 (eine Buchung für einen Tisch)
   |
TISCH (tisch_id PK, tischnummer, kapazitaet, restaurant_id FK)
   |
RESTAURANT (restaurant_id PK, name, adresse, oeffnungszeiten)
```

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Was wird verlangt |
|---|---|
| Stamm-/Bewegungsdaten | Je 2 Beispiele aus dem Prüfungsszenario |
| Datenmigration | 1 Methode erläutern |
| SQL SELECT | Abfrage schreiben (meist mit WHERE + COUNT oder JOIN) |
| SQL INSERT | Daten aus alter Tabelle kopieren, neues Feld = NULL |
| Referentielle Integrität | Begriff erklären + Beispiel |
| ER-Modell | Tabelle/Spalten ergänzen, FK einzeichnen |
| Anomalien | 3 Arten nennen und erklären |
