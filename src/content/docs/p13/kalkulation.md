---
title: Kalkulation & Kostenrechnung
description: Break-even, Nutzwertanalyse, KLR, BAB, Deckungsbeitrag, Prozesskosten und Preiskalkulation
sidebar:
  badge:
    text: 4/7 Prüfungen
    variant: caution
---

## 1. Break-even-Analyse

Der **Break-even-Punkt** ist der Punkt, an dem Erlöse und Gesamtkosten gleich hoch sind. Bis dahin entsteht ein Verlust, danach ein Gewinn.

Wenn je Einheit laufende variable Kosten entstehen, wird zuerst der **Deckungsbeitrag je Einheit** berechnet:

```text
Deckungsbeitrag je Einheit = Verkaufspreis − variable Kosten je Einheit
Break-even-Menge = Fixkosten / Deckungsbeitrag je Einheit
```

Da man in der Praxis keine angebrochene Lizenz oder Stückzahl verkaufen kann, wird bei einer Mindestmenge auf die **nächste ganze Einheit aufgerundet**.

### Beispiel nach dem Muster Winter 2025/26

Gegeben:
- einmalige Entwicklungskosten: 50.000 €
- Verkaufspreis: 99 € je Lizenz und Monat
- laufende Betreuungskosten: 20 € je Lizenz und Monat
- eine Lizenz gilt für 5 Nutzer

```text
Deckungsbeitrag je Lizenzmonat = 99 € − 20 € = 79 €
Break-even = 50.000 € / 79 € = 632,91
```

→ Nach **633 verkauften Lizenzmonaten** sind die Fixkosten gedeckt; ab der nächsten zusätzlichen Einheit entsteht insgesamt Gewinn.

Wenn ein Großkunde 60 Nutzer lizenzieren möchte:

```text
benötigte Lizenzen = 60 / 5 = 12
monatlicher Gesamt-DB = 12 × 79 € = 948 €
50.000 € / 948 € = 52,74 Monate
```

→ Unter diesen Annahmen wird die Gewinnzone **im 53. Monat** erreicht.

> **IHK-Falle:** Nicht einfach `Fixkosten / Verkaufspreis` rechnen, wenn zusätzlich variable Kosten je Einheit genannt sind. Dann ist der **Deckungsbeitrag** der richtige Nenner.

---

## 2. Nutzwertanalyse

Bewertet Alternativen anhand **qualitativer Kriterien** durch gewichtete Punktvergabe.

**Vorgehen:**
1. Kriterien festlegen (z.B. Preis, Support, Skalierbarkeit, Sicherheit)
2. Gewichtung vergeben (in %, Summe = 100%)
3. Alternativen pro Kriterium bewerten (Punkte, z.B. 1–5 oder 1–10)
4. Gewichtete Punkte berechnen: Note × Gewicht
5. Summe je Alternative → **höchster Wert gewinnt**

**Beispiel:**

| Kriterium | Gewicht | Anbieter A | Punkte A | Anbieter B | Punkte B |
|---|---|---|---|---|---|
| Preis | 30% | 4 | 1,2 | 5 | 1,5 |
| Support | 25% | 5 | 1,25 | 3 | 0,75 |
| Skalierbarkeit | 20% | 4 | 0,8 | 4 | 0,8 |
| Datenschutz | 15% | 5 | 0,75 | 3 | 0,45 |
| Usability | 10% | 3 | 0,3 | 4 | 0,4 |
| **Gesamt** | **100%** | | **4,3** | | **3,9** |

→ **Anbieter A** gewinnt.

---

## 3. Lizenzmodelle

| Modell | Beschreibung | Vorteile Kunde | Vorteile Anbieter |
|---|---|---|---|
| **Abo-Lizenz (SaaS)** | Monatliche/jährliche Gebühr | Niedrige Anfangskosten; Updates häufig im Abo enthalten | Planbarer Umsatz, laufende Kundenbindung |
| **Einmallizenz (perpetual)** | Einmalzahlung, dauerhaftes Nutzungsrecht gemäß Lizenzbedingungen | Keine laufende Lizenzgebühr für die erworbene Version | Hoher Einmalerlös |
| **Volumen-/Staffellizenz** | Preis sinkt mit Menge | Günstig bei großen Mengen | Kundenbindung durch Menge |
| **Freemium** | Basis kostenlos, Premium kostenpflichtig | Einstieg ohne Kosten | Große Nutzerbasis, Conversion-Potenzial |

---

## 4. Anforderungen an Software/Hardware

In der Prüfung: Passende Anforderungen zum Szenario nennen.

**Betriebssystemanforderungen:** Kompatibilität, Mindestversion, Updates verfügbar  
**Hardwareanforderungen:** Prozessorleistung, RAM, Speicherplatz, Grafikkarte  
**Sicherheitsanforderungen:** Verschlüsselung, Firewall, Zugriffsschutz, regelmäßige Updates

---

## 5. Kosten- und Leistungsrechnung (KLR)

| Kostenart | Definition | Beispiele |
|---|---|---|
| **Einzelkosten** | Direkt einem Kostenträger zurechenbar | Rohmaterial, direkt zuordenbare Hardware |
| **Gemeinkosten** | Nicht direkt zurechenbar, werden über Schlüssel verteilt | Miete, Verwaltung |
| **Fixe Kosten** | im betrachteten Beschäftigungsbereich mengenunabhängig | Miete, feste Grundgebühren |
| **Variable Kosten** | verändern sich mit Beschäftigung/Menge | Material, nutzungsabhängige Gebühren |

### Betriebsabrechnungsbogen (BAB)

**Zweck:** Gemeinkosten auf Kostenstellen verteilen, um Gemeinkostenzuschlagssätze zu ermitteln.

```text
GKZ = Gemeinkosten der Kostenstelle / Bezugsgröße × 100 %
```

Beispiele:
- Materialgemeinkosten: `MaGK / Materialeinzelkosten × 100 %`
- Fertigungsgemeinkosten: `FtGK / Fertigungslöhne × 100 %`
- Verwaltungs-/Vertriebsgemeinkosten: häufig auf Herstellkosten bezogen, wenn die Aufgabe dies vorgibt.

**Vereinfachtes Kalkulationsschema:**
```text
Materialeinzelkosten
+ Materialgemeinkosten
= Materialkosten
+ Fertigungseinzelkosten
+ Fertigungsgemeinkosten
= Herstellkosten
+ Verwaltungs- und Vertriebsgemeinkosten
= Selbstkosten
+ Gewinn
= Angebotspreis (netto, vereinfachtes Schema)
```

---

## 6. Marktanalyse

| Begriff | Definition | Formel |
|---|---|---|
| **Marktvolumen** | tatsächlich realisierte Nachfrage / Umsatz im Markt | Summe der realisierten Werte |
| **Marktpotenzial** | maximal mögliche Nachfrage unter angenommenen Bedingungen | theoretisches Maximum |
| **Marktanteil** | Anteil des eigenen Unternehmens am Markt | eigener Umsatz/Absatz ÷ Marktvolumen × 100 % |

---

## 7. Aufwand/Ertrag vs. Kosten/Leistung

| Finanzbuchhaltung | KLR | Erklärung |
|---|---|---|
| **Aufwand** | **Kosten** | Aufwand = gesamter Werteverzehr; Kosten = betriebszweckbezogener Werteverzehr |
| **Ertrag** | **Leistung** | Ertrag = gesamter Wertezuwachs; Leistung = betriebszweckbezogener Wertezuwachs |

Beispiele:
- Spende: Aufwand, typischerweise aber keine Kosten des Betriebszwecks.
- kalkulatorischer Unternehmerlohn: Kosten, aber kein Aufwand der Finanzbuchhaltung.

## 8. Kostenart, Kostenstelle und Kostenträger

- **Kostenart:** Welche Kosten sind entstanden?
- **Kostenstelle:** Wo sind sie entstanden?
- **Kostenträger:** Wofür sind sie entstanden?

## 9. Vorwärts-, Differenz- und Nachkalkulation

```text
Listeneinkaufspreis
− Liefererrabatt
= Zieleinkaufspreis
− Liefererskonto
= Bareinkaufspreis
+ Bezugskosten
= Bezugspreis / Einstandspreis
```

**Vorwärtskalkulation:** vom Einkauf in Richtung Verkaufspreis.  
**Rückwärts-/Differenzkalkulation:** ein Markt-/Verkaufspreis ist vorgegeben; daraus wird der wirtschaftliche Spielraum ermittelt.  
**Nachkalkulation:** Planwerte werden mit tatsächlichen Werten verglichen und Abweichungen analysiert.

## 10. Handelsspanne und Kalkulationszuschlag

```text
Handelsspanne = (Nettoverkaufspreis − Einstandspreis) / Nettoverkaufspreis × 100 %
Kalkulationszuschlag = (Nettoverkaufspreis − Einstandspreis) / Einstandspreis × 100 %
```

Beispiel: Einstand 80 €, Verkauf 100 € → Handelsspanne 20 %, Kalkulationszuschlag 25 %.

## 11. Prozesskostenrechnung

```text
Prozesskostensatz = Prozesskosten / Prozessmenge
```

Beispiel: 24.000 € für 800 Ticketbearbeitungen → **30 € je Ticket**.

## 12. Deckungsbeitrag, Betriebsergebnis und Preisuntergrenze

```text
Deckungsbeitrag je Stück = Verkaufspreis − variable Kosten je Stück
Gesamt-DB = Erlöse − variable Gesamtkosten
Betriebsergebnis = Gesamt-DB − Fixkosten
```

- **kurzfristige Preisuntergrenze:** unter vereinfachten Bedingungen die relevanten variablen Stückkosten.
- **langfristige Preisuntergrenze:** muss auch die fixen Kosten decken.

Beispiel: Preis 30 €, variable Kosten 18 €, Fixkosten 60.000 €, Absatz 8.000 → Gesamt-DB 96.000 €, Betriebsergebnis **36.000 €**.

## 13. Grenzkosten und Preisdifferenzierung

**Grenzkosten** sind die zusätzlichen Kosten einer weiteren Einheit. Bei digitalen Produkten können sie niedrig sein, obwohl die Entwicklung hohe Fixkosten verursacht.

Mögliche **Preisdifferenzierung**:
- Basic/Pro-Pakete,
- Mengenstaffeln,
- zeit-/nutzungsabhängige Preise,
- unterschiedliche Kundengruppen.

Die Differenzierung muss wirtschaftlich nachvollziehbar und rechtlich zulässig sein und sollte den Kundennutzen berücksichtigen.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Break-even | „Ab welcher Absatzmenge werden die Fixkosten gedeckt?“ |
| Nutzwertanalyse | „Ergänzen Sie die Nutzwertanalyse und ermitteln Sie den besten Anbieter.“ |
| Lizenzmodell | „Nennen Sie zwei Vorteile eines Abo-Lizenzmodells.“ |
| KLR | „Ordnen Sie Kostenart, Kostenstelle und Kostenträger zu.“ |
| BAB | „Vervollständigen Sie den BAB / berechnen Sie einen Zuschlagssatz.“ |
| DB | „Berechnen Sie Deckungsbeitrag und Betriebsergebnis.“ |

---
<div class="kdm-calculators" data-calculators="breakeven,gkz,nwa,marketshare"></div>
<div class="kdm-practice" data-topic="p13/kalkulation"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
