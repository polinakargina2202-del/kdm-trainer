---
title: RAID & Datensicherung
description: RAID-Levels, Backup-Strategien, NAS vs. Cloud
sidebar:
  badge:
    text: 5/7 Prüfungen
    variant: caution
---

## 1. RAID (Redundant Array of Independent Disks)

Verbund mehrerer Festplatten zur Steigerung von **Verfügbarkeit** und/oder **Performance**.

| Level | Prinzip | Mind. Platten | Max. Ausfälle | Kapazität | Geeignet für |
|---|---|---|---|---|---|
| **RAID 0** | Striping (Aufteilung) | 2 | 0 | 100% | Performance, keine Redundanz |
| **RAID 1** | Spiegelung | 2 | 1 | 50% | Hohe Verfügbarkeit, kleine Systeme |
| **RAID 5** | Striping + Rotating Parity | 3 | 1 | (n-1)/n | Balance aus Performance + Redundanz |
| **RAID 10** | Spiegel + Stripe (1+0) | 4 | 1 je Spiegel | 50% | Höchste Performance + Redundanz |

### RAID 1 (Spiegelung):
- Alle Daten werden auf 2 Platten gespiegelt
- Fällt eine aus → Betrieb läuft weiter
- **Nachteil:** 50% der Kapazität geht verloren

### RAID 5 (Rotating Parity):
- Daten und Paritätsinformationen auf min. 3 Platten verteilt
- Aus Paritätsdaten kann eine ausgefallene Platte **rekonstruiert** werden
- **Berechnung:** Nutzbare Kapazität = (n-1) × Plattengröße
- **Beispiel:** 4 × 4 TB → nutzbar: 3 × 4 TB = 12 TB

### RAID 10 (Kombination):
- Erst spiegeln (RAID 1), dann verteilen (RAID 0)
- **Berechnung:** Mind. 4 Platten, 50% Kapazität nutzbar
- Beispiel für 6 TB nutzbar: mind. 4 Platten à mind. 3 TB

> **RAID ist kein Backup!** Es schützt vor Hardwareausfall, nicht vor Datenverlust durch Löschen, Viren oder Katastrophen.

---

## 2. Szenarien für Datenverlust trotz RAID (S23)

- **Menschliches Versagen** — versehentliches Löschen wird auf alle Spiegel übertragen
- **Ransomware / Virenbefall** — Verschlüsselung betrifft alle gespiegelten Laufwerke
- **Höhere Gewalt** — Feuer, Wasser, Blitz zerstört das gesamte System (NAS/Server)
- **Gleichzeitiger Ausfall von 2 Platten** (RAID 5) — wenn 2 Platten gleichzeitig ausfallen

---

## 3. Backup-Strategien

| Strategie | Was wird gesichert | Zeitaufwand | Speicherplatz | Wiederherstellung |
|---|---|---|---|---|
| **Vollbackup** | Alle Daten | Hoch | Hoch | Einfach (1 Sicherung) |
| **Differenzielles Backup** | Alle Änderungen seit letztem **Vollbackup** | Mittel, wächst | Mittel | Vollbackup + letzte differentielle Sicherung |
| **Inkrementelles Backup** | Nur Änderungen seit letztem **Backup** (gleich welcher Art) | Gering | Gering | Aufwändig (Vollbackup + alle Inkremente) |

### Praxisempfehlung (3-2-1-Regel):
- **3** Kopien der Daten
- **2** verschiedene Medien
- **1** außerhalb des Gebäudes (Offsite-Backup)

---

## 4. NAS vs. Cloud

| | NAS (Network Attached Storage) | Cloud-Backup |
|---|---|---|
| **Standort** | Lokal im Unternehmen | Extern beim Anbieter |
| **Kosten** | Einmalig (Hardware) | Laufend (Abo) |
| **Geschwindigkeit** | Sehr hoch (LAN) | Abhängig von Internetverbindung |
| **DSGVO** | Volle Kontrolle | Anbieter prüfen (Serverstandort) |
| **Verfügbarkeit bei Katastrophe** | Gefährdet (Feuer, Wasser) | Sicher (geographische Redundanz) |

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| RAID erläutern | „Erläutern Sie RAID 5." |
| RAID berechnen | „Wie viele TB sind bei RAID 10 mit 4 × 4 TB nutzbar?" |
| Backup vergleichen | „Erläutern Sie den Unterschied zwischen Vollbackup, differenziellem und inkrementellen Backup." |
| Datenverlust-Szenario | „Nennen Sie 2 Szenarien, in denen trotz RAID Datenverlust möglich ist." |
