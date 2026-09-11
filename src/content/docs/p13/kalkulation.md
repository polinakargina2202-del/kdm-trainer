---
title: Kalkulation & Kostenrechnung
description: Break-even, Nutzwertanalyse, KLR, BAB, Deckungsbeitrag, Prozesskosten und Preiskalkulation
sidebar:
  badge:
    text: 4/7 Prüfungen
    variant: caution
---

## 1. Break-even-Analyse

Der **Break-even-Punkt** ist der Punkt, an dem Erlöse = Kosten (weder Gewinn noch Verlust).

**Formel:**
```
Break-even-Menge = Fixkosten / (Verkaufspreis - variable Kosten je Einheit)
```

**Einfachere Formel (reine Fixkosten):**
```
Mindestabsatz = Fixkosten / Preis je Einheit
```

**Beispiel (W25/26):**
- Entwicklungskosten: 50.000 €
- Lizenzpreis: 10 € pro Lizenz
- Break-even: 50.000 ÷ 10 = **5.000 Lizenzen**

**Mit Gewinnzuschlag (9%):**
- Fixkosten sollen 91% der Gesamterlöse sein
- Benötigte Erlöse: 50.000 ÷ 0,91 = 54.945 €
- Lizenzen: 54.945 ÷ 10 = **5.495 Lizenzen**

**Prüfungsbeispiel — Monate bis Break-even:**
- 60 Mitarbeiter beim Großkunden × 5 Lizenzen = 12 Lizenzen/Monat
- Bei 5.000 Lizenzen Ziel: 5.000 ÷ 12 = **≈ 417 Monate** (Achtung: Nur diesen Kunden berücksichtigen!)

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
| **Abo-Lizenz (SaaS)** | Monatliche/jährliche Gebühr | Niedrige Anfangskosten, immer aktuelle Version | Planbarer Umsatz, enge Kundenbindung |
| **Einmallizenz (perpetual)** | Einmalzahlung, Software gehört Käufer | Keine laufenden Kosten | Hoher Einmalerlös |
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

### Kostenarten:

| Kostenart | Definition | Beispiele |
|---|---|---|
| **Einzelkosten** | Direkt einem Kostenträger (Produkt/Auftrag) zurechenbar | Rohmaterial, Akkordlöhne |
| **Gemeinkosten** | Nicht direkt zurechenbar, werden über Schlüssel verteilt | Miete, Verwaltung, Gehälter |
| **Fixe Kosten** | Unabhängig von der Produktionsmenge | Miete, Abschreibungen |
| **Variable Kosten** | Steigen mit der Produktionsmenge | Materialkosten, Energiekosten |

---

### Betriebsabrechnungsbogen (BAB):

**Zweck:** Gemeinkosten auf Kostenstellen verteilen, um Gemeinkostenzuschlagssätze zu ermitteln.

**Kostenstellen (Beispiel):**
- Materialstelle (Einkauf, Lager)
- Fertigungsstelle (Produktion)
- Vertriebsstelle (Verkauf)
- Verwaltungsstelle (Buchhaltung, Management)

**Gemeinkostenzuschlagssatz (GKZ):**
```
GKZ = Gemeinkosten der Kostenstelle / Bezugsgröße × 100%

Beispiele:
- Materialgemeinkosten: GKZ = MaGK / Materialeinzelkosten × 100%
- Fertigungsgemeinkosten: GKZ = FtGK / Fertigungslöhne × 100%
- Verwaltungs-/Vertriebsgemeinkosten: GKZ = VwGK / Herstellkosten × 100%
```

**Kalkulationsschema:**
```
Materialeinzelkosten
+ Materialgemeinkosten (MEK × MaGKZ%)
= Materialkosten
+ Fertigungslöhne
+ Fertigungsgemeinkosten (FL × FtGKZ%)
= Herstellkosten
+ Verwaltungsgemeinkosten (HK × VwGKZ%)
+ Vertriebsgemeinkosten (HK × VtGKZ%)
= Selbstkosten
+ Gewinnzuschlag
= Angebotspreis (netto)
```

---

## 6. Marktanalyse

| Begriff | Definition | Formel |
|---|---|---|
| **Marktvolumen** | Tatsächlich realisierter Umsatz aller Anbieter | Σ aller Umsätze |
| **Marktpotenzial** | Maximale mögliche Nachfrage | Theoretisches Maximum |
| **Marktanteil** | Anteil des eigenen Unternehmens am Markt | (eigener Umsatz / Marktvolumen) × 100% |

---

## 7. Aufwand/Ertrag vs. Kosten/Leistung

Diese Begriffe gehören nicht automatisch zusammen:

| Finanzbuchhaltung | KLR | Erklärung |
|---|---|---|
| **Aufwand** | **Kosten** | Aufwand ist gesamter Werteverzehr; Kosten sind der betriebszweckbezogene Werteverzehr |
| **Ertrag** | **Leistung** | Ertrag ist gesamter Wertezuwachs; Leistung ist betriebszweckbezogener Wertezuwachs |

Beispiele:
- Spende an Verein: Aufwand, aber typischerweise **keine Kosten** des Betriebszwecks (neutraler Aufwand).
- kalkulatorischer Unternehmerlohn: **Kosten**, aber kein Aufwand in der Fibu (Zusatzkosten).

## 8. Kostenstelle und Kostenträger

- **Kostenart:** Welche Kosten sind entstanden? z. B. Miete, Personal, Energie.
- **Kostenstelle:** Wo sind sie entstanden? z. B. IT, Verwaltung, Vertrieb.
- **Kostenträger:** Wofür sind sie entstanden? z. B. Produkt, Projekt, Kundenauftrag.

Der **BAB** verteilt Gemeinkosten auf Kostenstellen. Anschließend können Zuschlagssätze für Kostenträger kalkuliert werden.

## 9. Vorwärts-, Rückwärts-/Differenz- und Nachkalkulation

Bei der **Vorwärtskalkulation** wird vom Einkaufspreis zum Verkaufspreis gerechnet:
```text
Listeneinkaufspreis
- Liefererrabatt
= Zieleinkaufspreis
- Liefererskonto
= Bareinkaufspreis
+ Bezugskosten
= Bezugspreis / Einstandspreis
+ Handlungskosten
= Selbstkosten
+ Gewinn
= Verkaufspreis (vereinfacht)
```

**Rückwärts-/Differenzkalkulation:** Ein Markt-/Verkaufspreis ist vorgegeben; daraus wird z. B. der maximal tragbare Einstandspreis oder der verbleibende Gewinn ermittelt.

**Nachkalkulation:** geplante Werte werden mit tatsächlichen Kosten/Erlösen verglichen. Abweichungen werden analysiert.

## 10. Handelsspanne und Kalkulationszuschlag

Nicht verwechseln:
```text
Handelsspanne = (Nettoverkaufspreis − Einstandspreis) / Nettoverkaufspreis × 100 %

Kalkulationszuschlag = (Nettoverkaufspreis − Einstandspreis) / Einstandspreis × 100 %
```

**Beispiel:** Einstand 80 €, Verkauf 100 € → Handelsspanne 20 %, Kalkulationszuschlag 25 %.

## 11. Prozesskostenrechnung

Bei prozessorientierten Dienstleistungen kann eine Kostenstelle zu grob sein. Dann werden Kosten einem **Prozess** und einem **Kostentreiber** zugeordnet.

```text
Prozesskostensatz = Prozesskosten / Prozessmenge
```

Beispiel: 24.000 € Kosten für 800 Ticketbearbeitungen → **30 € je Ticket**.

## 12. Deckungsbeitrag, Betriebsergebnis und Preisuntergrenze

```text
Deckungsbeitrag je Stück = Verkaufspreis − variable Kosten je Stück
Gesamt-DB = Erlöse − variable Gesamtkosten
Betriebsergebnis = Gesamt-DB − Fixkosten
```

- **kurzfristige Preisuntergrenze:** grundsätzlich variable Stückkosten (wenn freie Kapazität besteht und keine weiteren relevanten Kosten entstehen).
- **langfristige Preisuntergrenze:** muss auch Fixkosten decken → Vollkosten.

**Beispiel:** Preis 30 €, variable Kosten 18 €, Fixkosten 60.000 €, Absatz 8.000:
`DB = 12 € × 8.000 = 96.000 €`; Betriebsergebnis = **36.000 €**.

## 13. Grenzkosten und Preisdifferenzierung

**Grenzkosten** sind die zusätzlichen Kosten einer weiteren Einheit. Bei digitalen Produkten können sie sehr niedrig sein, obwohl die Entwicklung hohe Fixkosten verursacht.

Das ermöglicht **Preisdifferenzierung**, z. B.:
- unterschiedliche Pakete (Basic/Pro),
- Mengenstaffeln,
- zeit-/nutzungsabhängige Preise,
- unterschiedliche Kundengruppen.

Die Differenzierung sollte nachvollziehbar, rechtlich zulässig und am **Kundennutzen** ausgerichtet sein.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Break-even | „Ab wie vielen Lizenzen werden die Entwicklungskosten gedeckt?" |
| Nutzwertanalyse | „Ergänzen Sie die Nutzwertanalyse und ermitteln Sie den besten Anbieter." |
| Lizenzmodell | „Nennen Sie 2 Vorteile des Abo-Lizenzmodells für den Kunden." |
| Kostenarten | „Was sind Einzelkosten? Nennen Sie ein Beispiel." |
| BAB | „Vervollständigen Sie den Betriebsabrechnungsbogen." |
| GKZ berechnen | „Berechnen Sie den Materialgemeinkosten-Zuschlagssatz." |

---
<div class="kdm-calculators" data-calculators="breakeven,gkz,nwa,marketshare"></div>
<div class="kdm-practice" data-topic="p13/kalkulation"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
