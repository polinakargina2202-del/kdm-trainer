---
title: Datenbanken & SQL
description: Relationale Datenbanken, ER-Modell, Normalisierung, SQL-Abfragen
sidebar:
  badge:
    text: 7/7 Prüfungen
    variant: danger
---

> **Prüfungsrelevanz:** In jeder analysierten Session vorhanden. Besonders wichtig sind das Verständnis von Tabellenbeziehungen, Schlüsselbegriffen und SQL-Abfragen.

## Worum geht es bei Datenbanken?

Eine Datenbank speichert Informationen so, dass sie strukturiert abgelegt, gesucht, verändert und miteinander verknüpft werden können.

Statt alle Informationen in einer einzigen großen Tabelle zu speichern, werden Daten häufig auf mehrere logisch zusammengehörige Tabellen verteilt. Dadurch lassen sich Redundanzen reduzieren und Beziehungen sauber abbilden.

Beispiel: In einem Reservierungssystem könnten Kunden, Restaurants, Tische und Buchungen getrennt gespeichert werden. Eine Buchung verweist dann über Schlüssel auf den passenden Kunden und Tisch.

---

## 1. Stammdaten und Bewegungsdaten

### Stammdaten

**Stammdaten** beschreiben grundlegende Eigenschaften eines Objekts und ändern sich vergleichsweise selten.

Beispiele:

- Kunden-ID
- Name
- E-Mail-Adresse
- Artikelnummer
- Fahrzeugmodell

### Bewegungsdaten

**Bewegungsdaten** entstehen durch laufende Geschäftsprozesse.

Beispiele:

- Bestellung
- Buchung
- Zahlung
- Fahrt
- Lagerbewegung

### Beispiel

Ein Kunde mit Kunden-ID 4711 ist ein Stammdatensatz. Wenn dieser Kunde heute eine Reservierung für 18:00 Uhr anlegt, ist diese Reservierung ein Bewegungsdatensatz.

| | Stammdaten | Bewegungsdaten |
|---|---|---|
| **Charakter** | Grunddaten | Prozessdaten |
| **Änderung** | Eher selten | Entstehen laufend |
| **Beispiel** | Kunde, Artikel, Fahrzeug | Bestellung, Buchung, Fahrt |

### Prüfungslogik

Nenne bei Aufgaben möglichst Beispiele direkt aus dem beschriebenen Szenario. Das zeigt, dass du nicht nur die Definition kennst, sondern anwenden kannst.

---

## 2. Relationale Datenbanken

Eine **relationale Datenbank** speichert Daten in Tabellen. Tabellen können über Schlüssel miteinander verbunden werden.

### Grundbegriffe

**Tabelle/Relation:** Sammlung gleichartiger Datensätze.

**Datensatz/Zeile:** Ein konkretes Objekt, zum Beispiel ein Kunde.

**Attribut/Spalte:** Eine Eigenschaft, zum Beispiel Name oder E-Mail.

**Primärschlüssel (Primary Key, PK):** Identifiziert einen Datensatz eindeutig.

**Fremdschlüssel (Foreign Key, FK):** Verweist auf den Primärschlüssel einer anderen Tabelle.

### Beispiel

```text
KUNDE
kunden_id | name
----------|------
1         | Anna
2         | Max

BUCHUNG
buchung_id | kunden_id | datum
-----------|-----------|------------
101        | 1         | 2026-09-10
102        | 1         | 2026-09-11
```

In `KUNDE` ist `kunden_id` der Primärschlüssel. In `BUCHUNG` ist `kunden_id` ein Fremdschlüssel.

So weiß die Datenbank, dass beide Buchungen zum Kunden Anna gehören.

---

## 3. Kardinalitäten

Kardinalitäten beschreiben, wie viele Datensätze zweier Tabellen miteinander verbunden sein können.

### 1:1

Ein Datensatz steht genau einem Datensatz gegenüber.

Beispiel: Ein Mitarbeiter hat genau einen persönlichen Dienstausweis.

### 1:n

Ein Datensatz kann mit vielen anderen verbunden sein.

Beispiel: Ein Kunde kann viele Buchungen haben. Jede Buchung gehört aber genau einem Kunden.

### m:n

Viele Datensätze können mit vielen anderen verbunden sein.

Beispiel: Viele Studenten besuchen viele Kurse.

Eine m:n-Beziehung wird in relationalen Datenbanken typischerweise durch eine **Zwischentabelle** aufgelöst.

Beispiel:

```text
STUDENT            STUDENT_KURS             KURS
student_id   ←     student_id               kurs_id
                   kurs_id          →        kurs_id
```

> **Merksatz:** Bei m:n brauchst du in der Regel eine zusätzliche Zuordnungstabelle.

---

## 4. Primär- und Fremdschlüssel richtig verstehen

### Primärschlüssel

Ein Primärschlüssel muss einen Datensatz eindeutig identifizieren.

Geeignet ist zum Beispiel eine künstlich vergebene Kunden-ID. Ein Nachname ist ungeeignet, weil mehrere Personen gleich heißen können.

### Fremdschlüssel

Ein Fremdschlüssel stellt die Verbindung zwischen Tabellen her.

Beispiel:

```text
kunde.kunden_id = 15
buchung.kunden_id = 15
```

Die Buchung gehört dadurch zum Kunden mit ID 15.

### Referentielle Integrität

**Referentielle Integrität** bedeutet, dass ein Fremdschlüssel nur auf einen tatsächlich vorhandenen Datensatz verweisen darf.

Wenn Kunde 99 nicht existiert, darf eine Buchung nicht einfach `kunden_id = 99` enthalten.

Je nach Datenbank können beim Löschen Regeln definiert werden, zum Beispiel:

- Löschen verhindern, solange abhängige Datensätze existieren
- abhängige Datensätze mitlöschen (`CASCADE`)
- Fremdschlüssel auf `NULL` setzen, wenn erlaubt

---

## 5. ER-Modell lesen

Ein **Entity-Relationship-Modell** stellt Entitäten und ihre Beziehungen grafisch dar.

Eine Entität ist zum Beispiel:

- Kunde
- Buchung
- Tisch
- Restaurant

Beispiel:

```text
KUNDE
- kunden_id (PK)
- name
- email

      1
      |
      | hat
      |
      n

BUCHUNG
- buchung_id (PK)
- datum
- kunden_id (FK)
- tisch_id (FK)
```

In Prüfungsaufgaben musst du oft:

- Primärschlüssel erkennen,
- Fremdschlüssel ergänzen,
- Kardinalitäten eintragen,
- fehlende Tabellen ergänzen.

### Prüfungslogik

Frage dich immer:

1. Welche Objekte gibt es?
2. Welcher Datensatz muss eindeutig identifizierbar sein?
3. Welche Tabellen stehen miteinander in Beziehung?
4. Wo muss der Fremdschlüssel liegen?

Bei 1:n liegt der Fremdschlüssel normalerweise auf der **n-Seite**.

---

## 6. Warum normalisiert man Datenbanken?

Wenn dieselben Informationen mehrfach gespeichert werden, entstehen Redundanzen und Fehlerquellen.

Beispiel einer schlechten Tabelle:

```text
bestellung_id | kunde | kundeadresse | artikel | artikelpreis
1             | Anna  | Hafenstr. 1  | Maus    | 25
2             | Anna  | Hafenstr. 1  | Tastatur| 70
```

Die Adresse von Anna steht mehrfach in der Tabelle. Zieht Anna um, müsste die Adresse an mehreren Stellen geändert werden.

Normalisierung versucht, solche Wiederholungen systematisch zu reduzieren.

---

## 7. Anomalien

### Änderungsanomalie

Eine Information ist mehrfach gespeichert und wird nicht überall geändert.

Folge: widersprüchliche Daten.

### Einfügeanomalie

Ein Datensatz kann nicht sinnvoll gespeichert werden, ohne unnötige oder noch nicht vorhandene Informationen mitzuspeichern.

### Löschanomalie

Beim Löschen eines Datensatzes gehen unbeabsichtigt andere Informationen verloren.

> **Merksatz:** Redundanz führt zu Pflegeproblemen. Normalisierung reduziert diese Probleme.

---

## 8. Normalformen einfach erklärt

### 1. Normalform (1NF)

Jedes Feld enthält einen **atomaren Einzelwert**.

Nicht gut:

```text
telefon = "0471-111, 0170-222"
```

Besser: Telefonnummern getrennt modellieren.

### 2. Normalform (2NF)

Die Tabelle ist in 1NF und jedes Nichtschlüsselattribut hängt vom **gesamten Primärschlüssel** ab.

Das ist besonders bei zusammengesetzten Primärschlüsseln wichtig.

### 3. Normalform (3NF)

Die Tabelle ist in 2NF und Nichtschlüsselattribute hängen nicht voneinander ab.

Beispiel:

```text
kunden_id → plz → ort
```

Der Ort hängt eigentlich von der PLZ ab, nicht direkt von der Kunden-ID. PLZ und Ort könnten deshalb sinnvoll separat modelliert werden.

### Prüfungslogik

Du musst Normalisierung nicht nur auswendig lernen. Suche nach:

- mehrfach gespeicherten Informationen,
- Attributen, die eigentlich zu einem anderen Objekt gehören,
- Abhängigkeiten zwischen Nichtschlüsselattributen.

---

## 9. Datenbanktypen

Nicht jede Datenbank ist relational.

| Typ | Grundidee | Geeignet für |
|---|---|---|
| **Relationale DB** | Tabellen mit festen Beziehungen | Strukturierte Geschäftsdaten, Transaktionen |
| **Dokumentdatenbank** | Dokumente, oft JSON-ähnlich | Flexible Datenstrukturen |
| **Key-Value** | Schlüssel → Wert | Caching, Sessions |
| **Graphdatenbank** | Knoten und Beziehungen | Netzwerke, Empfehlungen |
| **Spaltenorientiert** | Spaltenoptimierte Speicherung | Analysen großer Datenmengen |

### Big Data und die 3V

- **Volume** = große Datenmenge
- **Variety** = unterschiedliche Datenarten
- **Velocity** = hohe Entstehungs- oder Verarbeitungsgeschwindigkeit

Ob SQL oder NoSQL besser geeignet ist, hängt vom Anwendungsfall ab. NoSQL-Systeme können bei sehr flexiblen Strukturen oder starker horizontaler Skalierung Vorteile haben; relationale Systeme bleiben für strukturierte Daten und konsistente Transaktionen sehr wichtig.

---

## 10. Datenmigration

Bei einem Systemwechsel müssen bestehende Daten in das neue System übertragen werden.

### Dump/Export-Import

Daten werden exportiert und anschließend in das neue System importiert.

Vorteil: relativ einfach.

Nachteil: je nach Verfahren kann eine Unterbrechung nötig sein.

### ETL

**Extract → Transform → Load**

1. Daten aus dem Altsystem extrahieren.
2. Daten bereinigen oder umwandeln.
3. Daten in das Zielsystem laden.

ETL ist besonders sinnvoll, wenn Datenformate oder Strukturen zwischen Alt- und Neusystem unterschiedlich sind.

### Replikation

Daten werden zwischen Systemen laufend synchronisiert.

Vorteil: Übergang kann mit geringer Unterbrechung erfolgen.

Nachteil: technisch komplexer.

---

# SQL verstehen

SQL ist eine Sprache, mit der relationale Datenbanken abgefragt und verändert werden.

Wichtig ist, nicht nur Befehle auswendig zu lernen, sondern den Aufbau einer Abfrage zu verstehen.

---

## 11. SELECT — Daten lesen

Grundform:

```sql
SELECT spalten
FROM tabelle
WHERE bedingung;
```

Beispiel:

```sql
SELECT vorname, nachname
FROM kunde
WHERE aktiv = 1;
```

Bedeutung:

1. `FROM kunde` → aus welcher Tabelle?
2. `WHERE aktiv = 1` → welche Datensätze?
3. `SELECT vorname, nachname` → welche Spalten sollen angezeigt werden?

### Alle Spalten

```sql
SELECT *
FROM kunde;
```

`*` bedeutet: alle Spalten.

---

## 12. WHERE — Datensätze filtern

Beispiele:

```sql
SELECT *
FROM fahrzeug
WHERE baujahr < 2020;
```

```sql
SELECT *
FROM kunde
WHERE ort = 'Bremerhaven';
```

Typische Operatoren:

- `=` gleich
- `<>` oder `!=` ungleich
- `<`, `>`, `<=`, `>=`
- `AND`
- `OR`
- `LIKE`
- `IN`
- `BETWEEN`

Beispiel:

```sql
SELECT *
FROM kunde
WHERE ort = 'Bremerhaven'
  AND aktiv = 1;
```

---

## 13. COUNT, SUM und andere Aggregatfunktionen

Mit Aggregatfunktionen werden mehrere Datensätze zusammengefasst.

```sql
SELECT COUNT(*) AS anzahl
FROM kunde
WHERE aktiv = 1;
```

Weitere Funktionen:

- `SUM()`
- `AVG()`
- `MIN()`
- `MAX()`

Beispiel:

```sql
SELECT AVG(preis) AS durchschnittspreis
FROM artikel;
```

---

## 14. JOIN — Tabellen verbinden

Ein JOIN verbindet Datensätze aus mehreren Tabellen.

Beispiel:

```sql
SELECT k.nachname, b.datum
FROM buchung b
INNER JOIN kunde k
  ON b.kunden_id = k.kunden_id;
```

### Schritt für Schritt

- `buchung b` → Tabelle Buchung erhält Alias `b`
- `kunde k` → Tabelle Kunde erhält Alias `k`
- `ON b.kunden_id = k.kunden_id` → definiert die Beziehung
- `SELECT k.nachname, b.datum` → zeigt Felder aus beiden Tabellen

### INNER JOIN

Zeigt nur Datensätze, bei denen auf beiden Seiten ein passender Eintrag existiert.

### LEFT JOIN

Zeigt alle Datensätze der linken Tabelle, auch wenn rechts kein passender Datensatz existiert.

Beispiel: Alle Kunden anzeigen, auch solche ohne Buchung.

```sql
SELECT k.nachname, COUNT(b.buchung_id) AS anzahl
FROM kunde k
LEFT JOIN buchung b
  ON k.kunden_id = b.kunden_id
GROUP BY k.kunden_id, k.nachname;
```

---

## 15. GROUP BY

`GROUP BY` fasst Datensätze nach einem Merkmal zusammen.

Beispiel: Anzahl Buchungen je Kunde.

```sql
SELECT k.nachname, COUNT(b.buchung_id) AS anzahl_buchungen
FROM kunde k
LEFT JOIN buchung b
  ON k.kunden_id = b.kunden_id
GROUP BY k.kunden_id, k.nachname
ORDER BY anzahl_buchungen DESC;
```

### Logik

Ohne `GROUP BY` würde `COUNT()` nur eine Gesamtsumme liefern. Mit `GROUP BY` entsteht eine Summe **pro Gruppe**.

---

## 16. INSERT — neue Daten speichern

```sql
INSERT INTO kunde (vorname, nachname, email, aktiv)
VALUES ('Anna', 'Müller', 'anna@example.com', 1);
```

Die Reihenfolge der Werte muss zur Reihenfolge der angegebenen Spalten passen.

### Daten aus einer anderen Tabelle übernehmen

```sql
INSERT INTO kunde (
  kunden_id,
  vorname,
  nachname,
  email_adresse,
  kundenpraeferenz
)
SELECT
  id,
  vorname,
  nachname,
  email,
  NULL
FROM kunde_alt;
```

Hier werden Daten aus `kunde_alt` übernommen. Für das neue Feld `kundenpraeferenz` wird zunächst `NULL` eingetragen.

---

## 17. UPDATE — vorhandene Daten ändern

```sql
UPDATE fahrzeug
SET baujahr = 2023
WHERE id = 4711;
```

> **Achtung:** Ohne `WHERE` werden alle Datensätze der Tabelle geändert.

Beispiel:

```sql
UPDATE kunde
SET aktiv = 0
WHERE letzte_buchung < '2020-01-01';
```

---

## 18. DELETE — Datensätze löschen

```sql
DELETE FROM kunde
WHERE kunden_id = 4711;
```

Auch hier gilt:

> **Ohne `WHERE` werden alle Datensätze gelöscht.**

Die Tabellenstruktur bleibt dabei bestehen.

---

## 19. CREATE TABLE

Mit `CREATE TABLE` wird eine neue Tabelle angelegt.

```sql
CREATE TABLE tischreservierung (
  id INT PRIMARY KEY,
  datum DATE NOT NULL,
  uhrzeit TIME,
  tisch_id INT,
  kunde_id INT,
  FOREIGN KEY (tisch_id) REFERENCES tisch(id),
  FOREIGN KEY (kunde_id) REFERENCES kunde(kunden_id)
);
```

### Was bedeutet das?

- `id INT PRIMARY KEY` → eindeutige ID
- `datum DATE NOT NULL` → Datum ist Pflichtfeld
- `tisch_id` und `kunde_id` → Fremdschlüssel
- `REFERENCES` → Ziel der Beziehung

---

## 20. Wie gehe ich bei einer SQL-Prüfungsaufgabe vor?

1. **Ausgabe lesen:** Welche Spalten werden verlangt?
2. **Tabellen bestimmen:** Wo liegen diese Daten?
3. **Beziehungen prüfen:** Brauche ich einen JOIN?
4. **Filter markieren:** Gibt es Bedingungen für `WHERE`?
5. **Aggregation prüfen:** Wird gezählt, summiert oder gruppiert?
6. **Sortierung prüfen:** Wird eine Reihenfolge verlangt?

### Beispiel

Aufgabe:

> Geben Sie für alle aktiven Kunden den Nachnamen und die Anzahl ihrer Buchungen aus. Sortieren Sie absteigend nach Anzahl.

Gedankengang:

- Nachname liegt in `kunde`
- Buchungen liegen in `buchung`
- Tabellen verbinden → JOIN
- nur aktive Kunden → WHERE
- Anzahl → COUNT
- pro Kunde → GROUP BY
- absteigend → ORDER BY ... DESC

```sql
SELECT k.nachname, COUNT(b.buchung_id) AS anzahl
FROM kunde k
LEFT JOIN buchung b
  ON k.kunden_id = b.kunden_id
WHERE k.aktiv = 1
GROUP BY k.kunden_id, k.nachname
ORDER BY anzahl DESC;
```

---

## Kurz zusammengefasst

- Relationale Datenbanken speichern Daten in **Tabellen**.
- **PK** identifiziert einen Datensatz, **FK** verbindet Tabellen.
- Bei **1:n** liegt der Fremdschlüssel normalerweise auf der n-Seite.
- **m:n** wird meist mit einer Zwischentabelle aufgelöst.
- Normalisierung reduziert Redundanzen und Anomalien.
- `SELECT` liest, `INSERT` fügt ein, `UPDATE` ändert, `DELETE` löscht Datensätze.
- `JOIN` verbindet Tabellen.
- `GROUP BY` wird benötigt, wenn Aggregatwerte je Gruppe berechnet werden.
- Bei SQL-Aufgaben zuerst die gewünschte Ausgabe und die benötigten Tabellen analysieren.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Was wird verlangt |
|---|---|
| Stamm-/Bewegungsdaten | Beispiele aus dem Szenario zuordnen |
| ER-Modell | PK/FK und Kardinalitäten ergänzen |
| Normalisierung | Anomalien erkennen und Tabellenstruktur verbessern |
| Datenmigration | Methode erläutern oder auswählen |
| SQL SELECT | Daten mit WHERE filtern |
| SQL JOIN | Informationen aus mehreren Tabellen verbinden |
| SQL GROUP BY | Werte je Gruppe zählen/summieren |
| SQL INSERT/UPDATE | Datensätze korrekt übernehmen oder verändern |
| Referentielle Integrität | Begriff erklären und an FK-Beziehung zeigen |

---
<div class="kdm-practice" data-topic="p12/datenbanken-sql"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
