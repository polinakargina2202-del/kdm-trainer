---
title: RAID & Datensicherung
description: RAID-Levels, Backup-Strategien, NAS vs. Cloud
sidebar:
  badge:
    text: 5/7 Prüfungen
    variant: caution
---

## Worum geht es bei RAID und Backups?

RAID und Backup werden häufig in einem Atemzug genannt, erfüllen aber **unterschiedliche Aufgaben**.

- **RAID** soll vor allem die Verfügbarkeit verbessern, wenn eine Festplatte ausfällt.
- **Backup** soll Daten wiederherstellbar machen, wenn sie verloren, beschädigt oder versehentlich gelöscht wurden.

Diese Unterscheidung ist besonders prüfungsrelevant.

> **Merksatz:** RAID hält ein System trotz bestimmter Plattenausfälle am Laufen. Backup hilft, verlorene Daten zurückzuholen.

---

## 1. Was ist RAID?

**RAID = Redundant Array of Independent Disks.**

Mehrere physische Festplatten werden zu einem logischen Verbund zusammengefasst.

Je nach RAID-Level verfolgt man unterschiedliche Ziele:

- mehr Geschwindigkeit,
- mehr Ausfallsicherheit,
- oder eine Kombination aus beidem.

Wichtig: RAID ersetzt kein Backup.

---

## 2. RAID 0 — Striping

Bei RAID 0 werden Datenblöcke auf mehrere Festplatten verteilt.

Beispiel mit zwei Platten:

```text
Datei A:
Block 1 → Platte 1
Block 2 → Platte 2
Block 3 → Platte 1
Block 4 → Platte 2
```

### Vorteil

Mehrere Platten können gleichzeitig arbeiten. Dadurch kann die Performance steigen.

### Nachteil

Es gibt **keine Redundanz**. Fällt eine einzige Platte aus, fehlen Teile der Daten.

### Kapazität

Bei gleich großen Platten:

```text
Nutzbare Kapazität = Anzahl Platten × Plattengröße
```

Beispiel:

```text
4 × 4 TB = 16 TB nutzbar
```

> **Merksatz:** RAID 0 = schnell, aber kein Schutz vor Plattenausfall.

---

## 3. RAID 1 — Spiegelung

Bei RAID 1 werden dieselben Daten auf zwei oder mehr Platten gespiegelt.

Beispiel:

```text
Platte 1: A B C D
Platte 2: A B C D
```

Fällt eine Platte aus, stehen die Daten weiterhin auf der anderen Platte zur Verfügung.

### Vorteil

Hohe Ausfallsicherheit bei einfachem Aufbau.

### Nachteil

Ein großer Teil der Gesamtkapazität wird für die Spiegelung verwendet.

### Typische Kapazitätsrechnung

Bei einem einfachen Spiegel aus zwei gleich großen Platten:

```text
2 × 4 TB physisch
→ 4 TB nutzbar
```

Also etwa 50 % der Rohkapazität.

### Prüfungslogik

Wenn gefragt wird, warum RAID 1 nur einen Teil der Rohkapazität liefert, lautet die Begründung:

> Die Daten werden redundant gespiegelt und liegen auf mehreren Platten identisch vor.

---

## 4. RAID 5 — Striping mit Parität

RAID 5 benötigt mindestens **3 Festplatten**.

Daten und Paritätsinformationen werden über die Platten verteilt. Die Parität ermöglicht es, die fehlenden Daten beim Ausfall **einer** Platte zu rekonstruieren.

### Warum „eine Platte geht für Parität verloren“?

Vereinfacht betrachtet entspricht die gesamte Paritätsinformation der Kapazität einer Festplatte.

Deshalb gilt bei gleich großen Platten:

```text
Nutzbare Kapazität = (Anzahl Platten - 1) × Größe der kleinsten Platte
```

### Beispiel 1

```text
4 Platten × 4 TB

(4 - 1) × 4 TB
= 3 × 4 TB
= 12 TB nutzbar
```

### Beispiel 2 — Anzahl Platten gesucht

Gesucht: mindestens 20 TB nutzbar bei 5-TB-Platten.

Formel:

```text
Nutzbar = (n - 1) × 5 TB
```

Einsetzen:

```text
20 = (n - 1) × 5
20 / 5 = n - 1
4 = n - 1
n = 5
```

Es werden also **5 Platten** benötigt.

### Was passiert bei zwei Ausfällen?

Klassisches RAID 5 verkraftet nur den Ausfall **einer** Platte. Fallen zwei Platten gleichzeitig aus, reicht die vorhandene Paritätsinformation nicht mehr für eine vollständige Rekonstruktion.

> **Merksatz:** RAID 5 = mindestens 3 Platten, eine Plattenkapazität für Parität, ein Plattenausfall tolerierbar.

---

## 5. RAID 10 — Spiegelung + Striping

RAID 10 kombiniert RAID 1 und RAID 0.

Vereinfacht:

1. Platten werden paarweise gespiegelt.
2. Über diese Spiegelpaare werden Daten verteilt.

### Beispiel mit 4 × 4 TB

```text
Rohkapazität: 16 TB
Nutzbar bei 50 %: 8 TB
```

### Formel bei gleich großen Platten

```text
Nutzbare Kapazität = Anzahl Platten × Plattengröße / 2
```

### Beispiel — Plattengröße gesucht

Gesucht: 12 TB nutzbar mit 4 Platten.

```text
12 TB = 4 × Plattengröße / 2
12 TB = 2 × Plattengröße
Plattengröße = 6 TB
```

Benötigt werden also mindestens **4 Platten à 6 TB**.

### Vorteil

- gute Performance
- hohe Verfügbarkeit

### Nachteil

- nur ungefähr 50 % der Rohkapazität nutzbar
- mehr Festplatten notwendig

---

## 6. RAID-Level im Vergleich

| Level | Prinzip | Mind. Platten | Typisch tolerierter Ausfall | Nutzbare Kapazität bei gleich großen Platten |
|---|---|---:|---:|---|
| **RAID 0** | Striping | 2 | 0 | `n × Größe` |
| **RAID 1** | Spiegelung | 2 | 1 im einfachen Spiegel | ca. 50 % |
| **RAID 5** | Striping + Parität | 3 | 1 | `(n-1) × Größe` |
| **RAID 10** | Spiegelung + Striping | 4 | abhängig von betroffenen Spiegelpaaren | ca. 50 % |

### Wie entscheide ich in einer Aufgabe?

- maximale Kapazität/Performance, Redundanz egal → RAID 0
- einfache Spiegelung und hohe Verfügbarkeit → RAID 1
- guter Kompromiss aus Kapazität und Redundanz → RAID 5
- hohe Performance und Redundanz, genügend Platten/Budget → RAID 10

---

## 7. Warum RAID kein Backup ist

Stell dir ein RAID-1-System vor. Eine Datei wird versehentlich gelöscht.

Was passiert?

Die Löschung wird sofort auf beide Spiegelplatten übernommen.

Das RAID funktioniert technisch korrekt — aber die Datei ist trotzdem weg.

Weitere Szenarien für Datenverlust trotz RAID:

- Ransomware verschlüsselt die Daten
- Benutzer löscht Dateien
- Softwarefehler beschädigt Daten
- Feuer oder Wasser zerstört das gesamte Gerät
- Diebstahl des NAS/Servers
- mehrere Platten fallen außerhalb der Toleranz aus

> **Prüfungstipp:** Wenn die Aufgabe fragt „Warum ist RAID kein Backup?“, nenne ein konkretes Szenario, bei dem alle RAID-Kopien gleichzeitig betroffen sind.

---

## 8. Was ist ein Backup?

Ein Backup ist eine zusätzliche Sicherung von Daten, aus der diese im Bedarfsfall wiederhergestellt werden können.

Ein gutes Backup-Konzept beantwortet unter anderem:

- Was wird gesichert?
- Wie oft wird gesichert?
- Wie lange werden Sicherungen aufbewahrt?
- Wo werden sie gespeichert?
- Wie schnell muss eine Wiederherstellung möglich sein?
- Werden Wiederherstellungen regelmäßig getestet?

Ein Backup, das nie getestet wurde, kann im Ernstfall wertlos sein.

---

## 9. Vollbackup

Beim **Vollbackup** werden alle vorgesehenen Daten gesichert.

### Vorteil

Die Wiederherstellung ist einfach: Man benötigt im Wesentlichen nur das gewünschte Vollbackup.

### Nachteil

- hoher Speicherbedarf
- längere Sicherungsdauer

### Beispiel

Montag: Vollbackup mit 500 GB Daten.

Dienstag: Wenn erneut ein Vollbackup erstellt wird, werden wieder alle 500+ GB gesichert, auch wenn sich nur wenige Dateien geändert haben.

---

## 10. Inkrementelles Backup

Beim inkrementellen Backup werden nur die Änderungen seit der **letzten Sicherung** gespeichert — unabhängig davon, ob diese letzte Sicherung ein Vollbackup oder ein weiteres inkrementelles Backup war.

### Beispiel

```text
Montag: Vollbackup
Dienstag: Änderungen seit Montag
Mittwoch: Änderungen seit Dienstag
Donnerstag: Änderungen seit Mittwoch
```

### Vorteil

- geringer Speicherbedarf
- schnelle Sicherung

### Nachteil

Für eine vollständige Wiederherstellung werden mehrere Sicherungssätze benötigt.

Beispiel für Donnerstag:

```text
Vollbackup Montag
+ Inkrement Dienstag
+ Inkrement Mittwoch
+ Inkrement Donnerstag
```

---

## 11. Differenzielles Backup

Beim differenziellen Backup werden immer alle Änderungen seit dem **letzten Vollbackup** gesichert.

### Beispiel

```text
Montag: Vollbackup
Dienstag: Änderungen seit Montag
Mittwoch: alle Änderungen seit Montag
Donnerstag: alle Änderungen seit Montag
```

Das differenzielle Backup wird im Laufe der Zeit größer.

### Wiederherstellung

Für Donnerstag benötigt man:

```text
Vollbackup Montag
+ differenzielles Backup Donnerstag
```

### Vergleich

| Strategie | Speicherbedarf | Sicherungsdauer | Restore-Aufwand |
|---|---|---|---|
| **Vollbackup** | hoch | hoch | gering |
| **Differenziell** | mittel, wächst | mittel | mittel |
| **Inkrementell** | gering | gering | höher |

> **Merksatz:** Inkrementell = seit letzter Sicherung. Differenziell = seit letztem Vollbackup.

---

## 12. 3-2-1-Regel

Eine bekannte Grundregel für Backups lautet:

- **3** Kopien der Daten
- auf **2** unterschiedlichen Medientypen bzw. Speicherarten
- **1** Kopie außerhalb des Hauptstandorts

Warum ist die externe Kopie wichtig?

Wenn ein Brand das Gebäude zerstört, hilft eine zweite Festplatte direkt neben dem Server möglicherweise nicht.

---

## 13. RPO und RTO verstehen

Diese Begriffe helfen bei der Planung von Sicherung und Wiederherstellung.

### RPO — Recovery Point Objective

Wie viel Datenverlust in der Zeit ist maximal akzeptabel?

Beispiel:

RPO = 1 Stunde

Dann sollte das Sicherungskonzept so ausgelegt sein, dass im schlimmsten Fall ungefähr höchstens eine Stunde Daten verloren geht.

### RTO — Recovery Time Objective

Wie lange darf die Wiederherstellung dauern?

Beispiel:

RTO = 4 Stunden

Dann muss der Service innerhalb dieses Zielzeitraums wiederhergestellt werden können.

> **Merksatz:** RPO = Wie alt darf mein letzter brauchbarer Datenstand sein? RTO = Wie lange darf die Wiederherstellung dauern?

---

## 14. NAS und Cloud-Backup vergleichen

### NAS

Ein NAS ist ein Speichergerät im Netzwerk.

Vorteile:

- schneller Zugriff im lokalen Netz
- hohe Kontrolle
- einmalige Hardwarebeschaffung

Nachteile:

- lokaler Standort kann bei Feuer, Wasser oder Diebstahl betroffen sein
- Hardware muss selbst betrieben werden

### Cloud-Backup

Daten werden extern bei einem Dienstleister gespeichert.

Vorteile:

- geografische Trennung möglich
- keine eigene Backup-Hardware am Standort notwendig
- flexibel skalierbar

Nachteile:

- laufende Kosten
- Abhängigkeit von Internet und Anbieter
- Datenschutz und Vertragsbedingungen müssen geprüft werden

| | NAS | Cloud-Backup |
|---|---|---|
| **Standort** | lokal | extern |
| **Geschwindigkeit** | lokal meist sehr hoch | abhängig von Verbindung |
| **Betrieb** | eigene Verantwortung | teilweise Anbieter |
| **Katastrophenschutz** | nur gut bei zusätzlicher räumlicher Trennung | geografische Trennung möglich |

---

## 15. Rechenstrategie für RAID-Aufgaben

### Fall A — nutzbare Kapazität gesucht

1. RAID-Level erkennen.
2. Passende Formel wählen.
3. Anzahl und Plattengröße einsetzen.

Beispiel RAID 5:

```text
5 × 8 TB
Nutzbar = (5 - 1) × 8
= 32 TB
```

### Fall B — Anzahl Platten gesucht

Beispiel RAID 5, 24 TB nutzbar, 6-TB-Platten:

```text
24 = (n - 1) × 6
24 / 6 = n - 1
4 = n - 1
n = 5
```

### Fall C — Plattengröße gesucht

Beispiel RAID 10, 20 TB nutzbar, 4 Platten:

```text
20 = 4 × Größe / 2
20 = 2 × Größe
Größe = 10 TB
```

Genau diese Umkehrlogik ist wichtig, weil Prüfungen nicht immer nur nach der fertigen Kapazität fragen.

---

## Kurz zusammengefasst

- **RAID 0:** Performance, keine Redundanz.
- **RAID 1:** Spiegelung, einfache Redundanz, ca. 50 % nutzbar.
- **RAID 5:** `(n-1) × Plattengröße`, ein Plattenausfall tolerierbar.
- **RAID 10:** Spiegelung + Striping, ca. 50 % nutzbar.
- RAID ist **kein Backup**.
- Vollbackup sichert alles.
- Inkrementell sichert Änderungen seit der letzten Sicherung.
- Differenziell sichert Änderungen seit dem letzten Vollbackup.
- **RPO** betrifft maximal akzeptablen Datenverlust, **RTO** die Wiederherstellungszeit.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| RAID erklären | „Erläutern Sie das Funktionsprinzip von RAID 5.“ |
| Kapazität berechnen | „Ermitteln Sie die nutzbare Kapazität bei 5 × 6 TB in RAID 5.“ |
| Formel umstellen | „Wie viele Platten werden benötigt, um 24 TB nutzbar zu erhalten?“ |
| RAID vs. Backup | „Begründen Sie, warum RAID ein Backup nicht ersetzt.“ |
| Backup vergleichen | „Vergleichen Sie inkrementelles und differenzielles Backup.“ |
| RPO/RTO | „Erläutern Sie RPO und RTO anhand eines Beispiels.“ |

---
<div class="kdm-calculators" data-calculators="raid"></div>
<div class="kdm-practice" data-topic="p12/raid-backup"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
