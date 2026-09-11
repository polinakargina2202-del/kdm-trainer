---
title: Datenbanken, Datenanalyse & SQL
description: Relationale Datenbanken, Datenqualität, Datenaufbereitung, Analyse, Visualisierung und prüfungsrelevante SQL-Syntax
sidebar:
  badge:
    text: 7/7 Prüfungen
    variant: danger
---

> **Prüfungsrelevanz:** Datenbanken und Datenverarbeitung gehören zu den wichtigsten Themen im §12-Bereich. In aktuellen Prüfungen werden nicht nur einfache SELECT-Abfragen, sondern auch Migration, referentielle Integrität und erweiterte SQL-Syntax geprüft.

## 1. Stammdaten und Bewegungsdaten

**Stammdaten** beschreiben grundlegende Eigenschaften eines Objekts und ändern sich vergleichsweise selten, z. B. Kunden-ID, Name, Artikelnummer oder E-Mail-Adresse.

**Bewegungsdaten** entstehen durch laufende Geschäftsvorgänge, z. B. Bestellung, Buchung, Zahlung oder Lagerbewegung.

> **Prüfungstipp:** Beispiele immer aus der vorgegebenen Situation ableiten. In einem Reservierungssystem ist der Kunde Stammdatum, die konkrete Reservierung Bewegungsdatum.

---

## 2. Relationale Datenbanken: Tabelle, Datensatz, Attribut

Eine relationale Datenbank speichert Daten in Tabellen.

- **Tabelle / Relation:** Sammlung gleichartiger Datensätze.
- **Datensatz / Zeile:** ein konkretes Objekt, z. B. ein Kunde.
- **Attribut / Spalte:** eine Eigenschaft, z. B. Nachname.
- **Primärschlüssel (PK):** identifiziert einen Datensatz eindeutig.
- **Fremdschlüssel (FK):** verweist auf einen Primärschlüssel einer anderen Tabelle.

```text
KUNDE
kunden_id (PK) | name
1              | Anna

BUCHUNG
buchung_id (PK) | kunden_id (FK) | datum
101             | 1              | 11.09.2026
```

### Referentielle Integrität

Ein Fremdschlüssel darf nur auf einen zulässigen Datensatz der referenzierten Tabelle verweisen. Existiert Kunde 99 nicht, darf eine Buchung nicht einfach `kunden_id = 99` enthalten.

Mögliche Regeln beim Löschen sind z. B. Löschen verhindern, abhängige Datensätze mitlöschen (`CASCADE`) oder – wenn fachlich und technisch zulässig – den Fremdschlüssel auf `NULL` setzen.

---

## 3. Kardinalitäten und ER-Modell

| Beziehung | Bedeutung | Beispiel |
|---|---|---|
| **1:1** | ein Datensatz gehört genau zu einem anderen | Mitarbeiter ↔ Dienstausweis |
| **1:n** | ein Datensatz kann viele andere haben | Kunde → Buchungen |
| **m:n** | viele stehen mit vielen in Beziehung | Nutzer ↔ Rollen |

Eine m:n-Beziehung wird in relationalen Datenbanken normalerweise mit einer **Zwischentabelle** aufgelöst.

```text
NUTZER 1 ── n NUTZER_ROLLE n ── 1 ROLLE
```

Bei einer 1:n-Beziehung liegt der Fremdschlüssel normalerweise auf der **n-Seite**.

---

## 4. Normalisierung und Anomalien

Ziel der Normalisierung ist es, unnötige Redundanz zu reduzieren und Daten konsistent pflegen zu können.

### Typische Anomalien

- **Änderungsanomalie:** dieselbe Information steht mehrfach und wird nicht überall geändert.
- **Einfügeanomalie:** ein Datensatz kann nur gespeichert werden, wenn eigentlich noch nicht benötigte Daten mitgespeichert werden.
- **Löschanomalie:** beim Löschen gehen unbeabsichtigt zusätzliche Informationen verloren.

### Normalformen

**1NF:** jedes Feld enthält einen atomaren Einzelwert.  
**2NF:** 1NF + jedes Nichtschlüsselattribut hängt vom gesamten zusammengesetzten Schlüssel ab.  
**3NF:** 2NF + keine unerwünschten transitiven Abhängigkeiten zwischen Nichtschlüsselattributen.

> **Prüfungslogik:** Suche nicht nur nach Definitionen, sondern nach mehrfach gespeicherten Informationen und falschen Abhängigkeiten.

---

## 5. Datenbanktypen und strukturierte Daten

| Typ | Grundidee | Typischer Einsatz |
|---|---|---|
| **Relationale DB** | Tabellen und definierte Beziehungen | Geschäftsdaten, Transaktionen |
| **Dokumentdatenbank** | flexible Dokumente, häufig JSON-ähnlich | variable Datenstrukturen |
| **Key-Value** | Schlüssel → Wert | Sessions, Cache |
| **Graphdatenbank** | Knoten und Beziehungen | Netzwerke, Empfehlungen |
| **Spaltenorientiert** | analyseorientierte Spaltenspeicherung | große Auswertungen |

Bei Big Data werden häufig die **3V** genannt: Volume, Variety, Velocity.

---

# Daten aufbereiten und analysieren

## 6. Datenqualität: Validität, Reliabilität, Vollständigkeit

| Kriterium | Bedeutung | Beispiel für Problem |
|---|---|---|
| **Validität** | Daten bilden den beabsichtigten Sachverhalt korrekt ab | Feld „Alter“ enthält das Geburtsjahr |
| **Reliabilität** | Erhebung ist zuverlässig und reproduzierbar | Sensor liefert bei gleicher Situation stark schwankende Werte |
| **Vollständigkeit** | erforderliche Daten fehlen nicht | bei 20 % der Datensätze fehlt die PLZ |

Weitere Qualitätsprobleme sind Dubletten, veraltete Werte, falsche Datentypen, unzulässige Wertebereiche und uneinheitliche Schreibweisen.

### Vorgehen bei einer Qualitätsprüfung

1. Zweck der Daten bestimmen.
2. Pflichtfelder und zulässige Werte definieren.
3. Dubletten/Fehlwerte suchen.
4. Werte auf Plausibilität und Datentyp prüfen.
5. Bereinigung nachvollziehbar dokumentieren.
6. Nach der Bereinigung erneut kontrollieren.

---

## 7. Datenquellen, Formate und Zusammenführung

**Interne Quellen:** ERP, CRM, Ticketsystem, Datenbank, Logfiles, Rechnungswesen.  
**Externe Quellen:** Open Data, Marktdaten, Studien, Lieferanten-/Partnerdaten, APIs.

| Format | Eigenschaft | Typischer Einsatz |
|---|---|---|
| **CSV** | einfache Tabelle als Text | Import/Export |
| **JSON** | hierarchische Schlüssel-Wert-Struktur | Web-APIs |
| **XML** | hierarchisch mit Tags | standardisierter Datenaustausch |
| **relationale Tabelle** | festes Schema und Beziehungen | operative Geschäftsdaten |
| **unstrukturiert** | kein festes Tabellenschema | Freitext, Bilder, Audio, PDFs |

Beim Zusammenführen von Quellen besonders prüfen: gemeinsame Schlüssel, Datentypen, Zeichensätze, Einheiten, Zeitbezug, Datenschutz und Aktualisierungsintervall.

---

## 8. ETL und Data Cleansing

**ETL = Extract → Transform → Load**

1. **Extract:** Daten aus den Quellsystemen lesen.
2. **Transform:** Formate vereinheitlichen, Dubletten/Fehler behandeln, Werte ableiten.
3. **Load:** aufbereitete Daten in das Zielsystem laden.

Typische Transformationsschritte:
- Datums- und Zahlenformate vereinheitlichen,
- Dubletten zusammenführen,
- fehlende Werte fachlich begründet behandeln,
- ungültige Werte markieren,
- personenbezogene Daten ggf. pseudonymisieren oder anonymisieren,
- Herkunft und Änderungen dokumentieren.

> Daten dürfen nicht „schön gerechnet“ werden. Eine Bereinigung muss fachlich begründbar und nachvollziehbar sein.

---

## 9. Daten beschreiben: Mittelwert, Median und Streuung

### Arithmetischer Mittelwert

```text
Mittelwert = Summe aller Werte / Anzahl der Werte
```

Beispiel: Bearbeitungszeiten 4, 5, 6, 5, 20 Minuten → Mittelwert = `40 / 5 = 8 Minuten`.

### Median

Der Median ist der mittlere Wert einer sortierten Reihe. Im Beispiel `4, 5, 5, 6, 20` beträgt der Median **5 Minuten**.

Der Median ist gegenüber einzelnen extremen Ausreißern robuster als der Mittelwert.

### Varianz und Standardabweichung

**Varianz** und **Standardabweichung** beschreiben, wie stark Werte um den Mittelwert streuen. Eine große Standardabweichung bedeutet stärkere Streuung.

In einer IHK-Aufgabe kann die konkrete Rechenformel vorgegeben sein oder eine SQL-Funktion wie `STDDEV()` genutzt werden. Wichtiger als das Auswendiglernen einer Statistikformel ist die **Interpretation**.

---

## 10. Korrelation richtig interpretieren

Eine Korrelation beschreibt einen statistischen Zusammenhang zwischen zwei Merkmalen.

- nahe **+1**: starker positiver Zusammenhang,
- nahe **0**: kaum linearer Zusammenhang,
- nahe **−1**: starker negativer Zusammenhang.

> **IHK-Falle:** **Korrelation ist keine Kausalität.** Auch eine hohe Korrelation beweist nicht, dass Merkmal A die Ursache von Merkmal B ist.

SQL kann je nach bereitgestellter Syntax z. B. `CORR(spalte1, spalte2)` enthalten.

---

## 11. Daten visualisieren und Diagramme beurteilen

- **Balken-/Säulendiagramm:** Kategorien vergleichen.
- **Liniendiagramm:** Entwicklung im Zeitverlauf.
- **Kreisdiagramm:** einfache Anteile eines Ganzen; bei vielen Kategorien ungeeignet.
- **Streudiagramm:** Zusammenhang zweier numerischer Größen.

Achte auf:
- Achsenbeschriftung und Einheit,
- verständliche Legende,
- passende Skalierung,
- nachvollziehbare Quelle,
- sinnvolle Anzahl von Kategorien.

Eine stark abgeschnittene Y-Achse kann kleine Unterschiede optisch übertreiben.

---

## 12. Datenmigration

Mögliche Verfahren:

- **Export/Import:** einfach, kann aber eine Unterbrechung erfordern.
- **ETL:** sinnvoll bei unterschiedlichen Strukturen/Formaten.
- **Replikation/Synchronisation:** geringe Unterbrechung möglich, technisch komplexer.

Nach einer Migration prüfen:
- Anzahl der Datensätze,
- Pflichtfelder,
- Summen/Kontrollwerte,
- Stichproben,
- referentielle Integrität,
- Protokolle und Fehlermeldungen.

---

# SQL sicher beherrschen

> **Wichtig:** SQL-Dialekte unterscheiden sich. In der Prüfung ist die bereitgestellte Syntaxübersicht maßgeblich.

## 13. SELECT, WHERE und ORDER BY

```sql
SELECT vorname, nachname
FROM kunde
WHERE aktiv = 1
ORDER BY nachname ASC;
```

Operatoren und Bedingungen, die du erkennen solltest: `=`, `<>`, `<`, `>`, `<=`, `>=`, `AND`, `OR`, `NOT`, `LIKE`, `IN`, `IS NULL`.

```sql
SELECT *
FROM kunde
WHERE nachname LIKE 'M%'
  AND ort IN ('Bremen', 'Bremerhaven');
```

`LIKE 'M%'` bedeutet: Text beginnt mit M.

---

## 14. DISTINCT und NULL

```sql
SELECT DISTINCT ort
FROM kunde;
```

`DISTINCT` entfernt doppelte Zeilen aus dem Ergebnis.

`NULL` bedeutet „kein Wert / unbekannt“ und wird nicht mit `= NULL`, sondern mit `IS NULL` bzw. `IS NOT NULL` geprüft.

```sql
SELECT * FROM kunde
WHERE telefon IS NULL;
```

---

## 15. Aggregatfunktionen

Typische Funktionen:

```text
COUNT()  Anzahl
SUM()    Summe
AVG()    Mittelwert
MIN()    Minimum
MAX()    Maximum
STDDEV() Standardabweichung (wenn im Syntaxblatt vorhanden)
VARIANCE() Varianz (wenn im Syntaxblatt vorhanden)
CORR()   Korrelation (wenn im Syntaxblatt vorhanden)
```

Beispiel:

```sql
SELECT COUNT(*) AS anzahl_aktive
FROM kunde
WHERE aktiv = 1;
```

---

## 16. JOIN: INNER, LEFT und RIGHT

### INNER JOIN
Nur Datensätze mit passendem Gegenstück auf beiden Seiten:

```sql
SELECT k.nachname, b.datum
FROM kunde k
INNER JOIN buchung b
  ON k.kunden_id = b.kunden_id;
```

### LEFT JOIN
Alle Datensätze der linken Tabelle; rechts ggf. `NULL`.

### RIGHT JOIN
Alle Datensätze der rechten Tabelle; links ggf. `NULL`.

> **Prüfungstipp:** Frage zuerst: „Welche Datensätze müssen **auf jeden Fall** im Ergebnis bleiben?“ Danach entscheidest du die JOIN-Richtung.

---

## 17. GROUP BY und HAVING

`GROUP BY` bildet Gruppen. `HAVING` filtert anschließend diese Gruppen.

```sql
SELECT kunde_id, COUNT(*) AS anzahl
FROM buchung
GROUP BY kunde_id
HAVING COUNT(*) >= 3;
```

Unterschied:
- `WHERE` filtert einzelne Zeilen **vor** der Gruppierung.
- `HAVING` filtert Gruppen **nach** der Gruppierung.

---

## 18. Unterabfragen, IN und EXISTS

Eine **Subquery** ist eine Abfrage innerhalb einer anderen Abfrage.

```sql
SELECT nachname
FROM kunde
WHERE kunden_id IN (
  SELECT kunden_id
  FROM buchung
  WHERE datum >= '2026-01-01'
);
```

Mit `EXISTS` wird geprüft, ob die Unterabfrage mindestens einen passenden Datensatz liefert.

```sql
SELECT k.nachname
FROM kunde k
WHERE EXISTS (
  SELECT 1
  FROM buchung b
  WHERE b.kunden_id = k.kunden_id
);
```

---

## 19. UNION

`UNION` vereinigt kompatible Abfrageergebnisse.

```sql
SELECT email FROM kunde
UNION
SELECT email FROM interessent;
```

Die SELECT-Abfragen müssen eine passende Anzahl und kompatible Struktur von Spalten liefern. `UNION` entfernt normalerweise Duplikate; SQL-Dialekte können zusätzlich `UNION ALL` kennen.

---

## 20. INSERT, UPDATE und DELETE

```sql
INSERT INTO kunde (vorname, nachname, aktiv)
VALUES ('Anna', 'Müller', 1);
```

Daten aus einer alten Tabelle übernehmen:

```sql
INSERT INTO kunde_neu (id, vorname, nachname, kundenpraeferenz)
SELECT id, vorname, nachname, NULL
FROM kunde_alt;
```

```sql
UPDATE kunde
SET aktiv = 0
WHERE kunden_id = 4711;
```

```sql
DELETE FROM kunde
WHERE kunden_id = 4711;
```

> **IHK-Falle:** Bei `UPDATE` und `DELETE` die `WHERE`-Bedingung nicht vergessen, wenn nicht alle Datensätze betroffen sein sollen.

---

## 21. CREATE TABLE und ALTER TABLE

```sql
CREATE TABLE buchung (
  buchung_id INTEGER PRIMARY KEY,
  kunden_id INTEGER,
  datum DATE,
  FOREIGN KEY (kunden_id) REFERENCES kunde(kunden_id)
);
```

Mit `ALTER TABLE` können Tabellenstrukturen geändert werden, z. B. Spalten oder Fremdschlüssel ergänzen. Die konkrete Syntax richtet sich nach dem in der Prüfung gegebenen Syntaxblatt.

---

## 22. Benutzer und Rechte: CREATE USER, GRANT, REVOKE

Aktuelle SQL-Syntaxblätter können auch Berechtigungen enthalten.

```sql
CREATE USER analyst IDENTIFIED BY 'Passwort';
GRANT SELECT ON datenbank.kunde TO analyst;
REVOKE SELECT ON datenbank.kunde FROM analyst;
```

- **GRANT:** Recht/Rolle vergeben.
- **REVOKE:** Recht/Rolle entziehen.
- Sicherheitsprinzip: nur die Rechte vergeben, die für die Aufgabe erforderlich sind (**Least Privilege**).

---

## 23. String- und Datumsfunktionen

Je nach Syntaxblatt können z. B. vorkommen:

- `LEFT(text, n)`, `RIGHT(text, n)`
- `NOW()`
- `YEAR()`, `MONTH()`, `DAY()`
- `HOUR()`, `MINUTE()`
- `DATEADD()` und `DATEDIFF()`

Beispiel:

```sql
SELECT YEAR(buchungsdatum) AS jahr, COUNT(*)
FROM buchung
GROUP BY YEAR(buchungsdatum);
```

---

## 24. Strategie für SQL-Aufgaben

1. **Ausgabe markieren:** Was soll am Ende angezeigt werden?
2. **Tabellen bestimmen:** Wo liegen die benötigten Felder?
3. **Beziehungen prüfen:** Brauche ich JOINs?
4. **Zeilen filtern:** Welche Bedingung gehört in `WHERE`?
5. **Gruppieren:** Wird pro Kunde/Monat/Kategorie gerechnet?
6. **Gruppen filtern:** Wird `HAVING` benötigt?
7. **Sortieren:** `ORDER BY ASC/DESC`?
8. **Syntaxblatt nutzen:** Nicht gegen die in der Prüfung vorgegebene Syntax „ankämpfen“.

---

## Kurz zusammengefasst

- Datenqualität bedeutet insbesondere **Validität, Reliabilität und Vollständigkeit**.
- Daten werden aus internen/externen Quellen gewonnen, aufbereitet und für Analysen/Visualisierungen nutzbar gemacht.
- **ETL** strukturiert die Übernahme und Transformation von Daten.
- PK/FK und referentielle Integrität bilden saubere Beziehungen ab.
- Für SQL reichen einfache SELECT-Abfragen nicht: auch JOIN, GROUP BY/HAVING, Subqueries, Rechte und Funktionen können über das bereitgestellte Syntaxblatt relevant werden.
- Bei Datenanalyse Ergebnisse immer **interpretieren**, nicht nur berechnen.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Was wird verlangt |
|---|---|
| Stamm-/Bewegungsdaten | Beispiele aus dem Szenario zuordnen |
| Datenqualität | Validität, Reliabilität, Vollständigkeit beurteilen |
| Datenaufbereitung | ETL-Schritte/Fehlerbereinigung begründen |
| Visualisierung | geeignetes Diagramm wählen und begründen |
| Statistik | Mittelwert/Median/Streuung/Korrelation interpretieren |
| ER-Modell | PK/FK und Kardinalitäten ergänzen |
| SQL | SELECT, JOIN, GROUP BY/HAVING oder Unterabfrage erstellen |
| Migration | Verfahren auswählen + Kontrollen nennen |
| Berechtigungen | GRANT/REVOKE oder Least-Privilege begründen |

---
<div class="kdm-practice" data-topic="p12/datenbanken-sql"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
