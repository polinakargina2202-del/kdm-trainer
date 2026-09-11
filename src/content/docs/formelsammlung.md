---
title: Formelsammlung
description: Zentrale Rechenformeln für AP2 Digitalisierungsmanagement
---

# Formelsammlung AP2

Diese Seite ist zum **Wiederholen**, nicht zum blinden Auswendiglernen. In der Prüfung musst du zuerst erkennen, welche Größen zur Aufgabe passen.

## Wirtschaftlichkeit, Preis und Markt

| Thema | Formel | Denkhinweis |
|---|---|---|
| Deckungsbeitrag je Stück | `DB = Verkaufspreis − variable Kosten je Stück` | DB deckt Fixkosten und danach Gewinn. |
| Gesamt-DB | `Erlöse − variable Gesamtkosten` | Alternativ: `DB/Stück × Menge`. |
| Betriebsergebnis | `Gesamt-DB − Fixkosten` | Positiv = Gewinn im vereinfachten Modell. |
| Break-even-Menge | `Fixkosten / DB je Stück` | **Nicht** durch Verkaufspreis teilen, wenn variable Kosten vorhanden sind. |
| Prozesskostensatz | `Prozesskosten / Prozessmenge` | z. B. Kosten je Ticket/Vorgang. |
| Marktanteil | `eigener Absatz oder Umsatz / Marktvolumen × 100 %` | Zähler und Nenner müssen dieselbe Größe verwenden. |
| Amortisationsdauer | `Investition / jährlicher Netto-Nutzen` | Nur bei vergleichbaren periodischen Nutzenwerten. |
| jährlicher Netto-Nutzen | `Einsparungen + zusätzlicher wirtschaftlicher Nutzen − laufende Mehrkosten` | Umsatz nicht automatisch als Gewinn behandeln. |
| Handelsspanne | `(Nettoverkaufspreis − Einstandspreis) / Nettoverkaufspreis × 100 %` | Nenner = Verkaufspreis. |
| Kalkulationszuschlag | `(Nettoverkaufspreis − Einstandspreis) / Einstandspreis × 100 %` | Nenner = Einstandspreis. |

## Beschaffung und Kalkulation

```text
Listeneinkaufspreis
− Liefererrabatt
= Zieleinkaufspreis
− Liefererskonto
= Bareinkaufspreis
+ Bezugskosten
= Bezugspreis / Einstandspreis
```

```text
Gemeinkostenzuschlagssatz
= Gemeinkosten der Kostenstelle / passende Bezugsgröße × 100 %
```

**IHK-Falle:** Rabatt wird vor Skonto abgezogen. Bezugskosten werden anschließend addiert.

## Skonto

Vereinfachter Vergleich der Kosten eines Skontoverzichts:

```text
Effektiver Jahreszinssatz ≈
Skonto% / (100 − Skonto%) × 360 / (Zahlungsziel − Skontofrist)
```

Ist dieser rechnerische Satz höher als die Kosten einer möglichen Zwischenfinanzierung, spricht wirtschaftlich viel für die Skontonutzung — sofern die Liquidität gesichert ist.

## Finanzierung

**Ratendarlehen:**

```text
Tilgung je Periode = Darlehensbetrag / Anzahl Tilgungsperioden
Zinsen = Restschuld zu Periodenbeginn × Zinssatz
Rate = Tilgung + Zinsen
```

**Fälligkeitsdarlehen:** laufend Zinsen auf die volle Restschuld; Tilgung am Ende.

**Annuitätendarlehen:** Rate bleibt grundsätzlich konstant; Zinsanteil sinkt und Tilgungsanteil steigt.

## Rechnungswesen und Kennzahlen

| Kennzahl | Formel |
|---|---|
| Eigenkapitalquote | `Eigenkapital / Gesamtkapital × 100 %` |
| Eigenkapitalrentabilität | `Gewinn / Eigenkapital × 100 %` |
| Umsatzrentabilität | `Gewinn / Umsatz × 100 %` |
| Liquidität 1. Grades | `liquide Mittel / kurzfristige Verbindlichkeiten × 100 %` |
| absolute Abweichung | `Ist − Soll` |
| relative Abweichung | `(Ist − Soll) / Soll × 100 %` |
| lineare Abschreibung/Jahr | `Anschaffungskosten / Nutzungsdauer` |
| Abschreibungssatz | `100 % / Nutzungsdauer` |

## Prozesse und IT-Service

| Kennzahl | Formel |
|---|---|
| Durchlaufzeit | `Bearbeitungszeit + Wartezeit + Transport-/Liegezeit` |
| Fehlerquote | `fehlerhafte Vorgänge / alle Vorgänge × 100 %` |
| Automatisierungsgrad | `automatisierte betrachtete Schritte / alle betrachteten Schritte × 100 %` |
| Kosten je Vorgang | `gesamte Prozesskosten / Anzahl Vorgänge` |
| Nichtverfügbarkeit | `100 % − Verfügbarkeit` |
| erlaubte Ausfallzeit | `Gesamtzeit × Nichtverfügbarkeit als Dezimalzahl` |

## RAID

| RAID | Nutzbare Kapazität bei gleich großen Platten | Kerngedanke |
|---|---|---|
| RAID 0 | `n × Plattengröße` | keine Redundanz |
| RAID 1 | bei 2 Platten typischerweise `1 × Plattengröße` | Spiegelung |
| RAID 5 | `(n − 1) × Plattengröße` | verteilte Parität, mind. 3 Platten |
| RAID 10 | bei üblichen Paaren `n/2 × Plattengröße` | Spiegelung + Striping |

> **Merksatz:** RAID erhöht je nach Level Verfügbarkeit/Ausfallsicherheit, ersetzt aber kein Backup.

## Statistik und Datenanalyse

```text
Arithmetisches Mittel = Summe aller Werte / Anzahl der Werte
```

**Median:** mittlerer Wert einer sortierten Reihe; bei gerader Anzahl Mittelwert der beiden mittleren Werte.

**Standardabweichung:** beschreibt die Streuung um den Mittelwert. Größer = Werte liegen typischerweise weiter auseinander.

**Korrelation:** misst Stärke/Richtung eines statistischen Zusammenhangs. `r` nahe +1 = starker positiver, nahe −1 = starker negativer, nahe 0 = kein linearer Zusammenhang. **Korrelation beweist keine Kausalität.**

## Mini-Check vor jeder Rechnung

1. Was ist gesucht?
2. Welche Werte gehören fachlich zusammen?
3. Prozent oder Dezimalzahl?
4. Welche Einheit wird verlangt?
5. Muss auf ganze Stück/Lizenzen **aufgerundet** werden?
6. Wenn mit gerundetem Ergebnis weitergerechnet werden soll: Prüfungsanweisung beachten.
