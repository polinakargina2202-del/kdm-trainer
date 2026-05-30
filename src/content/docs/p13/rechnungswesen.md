---
title: Rechnungswesen & Bilanz
description: Rechnungsbestandteile, Bilanzveränderungen, Skonto, Abschreibung
sidebar:
  badge:
    text: 4/7 Prüfungen
    variant: caution
---

## 1. Gesetzliche Rechnungsbestandteile (§ 14 UStG)

Pflichtangaben auf einer ordnungsgemäßen Rechnung:

| Nr. | Pflichtangabe | Beispiel |
|---|---|---|
| 1 | Name + Adresse des **Leistenden** | AMAG Soft GmbH, Musterstr. 1 |
| 2 | Name + Adresse des **Empfängers** | KoCh-IT GmbH, Beispielweg 5 |
| 3 | **Steuernummer oder USt-IdNr.** des Leistenden | DE123456789 |
| 4 | **Rechnungsdatum** | 15.05.2025 |
| 5 | **Fortlaufende Rechnungsnummer** | RE-2025-0047 |
| 6 | **Menge + Art** der Leistung/Lieferung | 3 × Softwarelizenz „AppManager Pro" |
| 7 | **Zeitpunkt** der Leistung / Lieferdatum | Mai 2025 |
| 8 | **Nettobetrag**, **Steuersatz**, **Steuerbetrag**, **Bruttobetrag** | 1.000 € + 19% = 190 € = 1.190 € |

**Was fehlt → Konsequenzen:**
- Fehlende USt-IdNr. → Vorsteuerabzug kann verweigert werden!
- Fehlerhafte Rechnungen → IHK / Finanzamt kann Betriebsausgabe ablehnen

---

## 2. Bilanzveränderungen

Die Bilanz besteht aus **Aktiva** (Vermögen) und **Passiva** (Kapital/Schulden).

### Grundtypen:

| Typ | Was passiert | Beispiel |
|---|---|---|
| **Aktiv-Passiv-Mehrung** | Aktiv ↑, Passiv ↑ | Bankdarlehen aufnehmen: Bank↑, Verbindlichkeit↑ |
| **Aktiv-Passiv-Minderung** | Aktiv ↓, Passiv ↓ | Kredit tilgen: Bank↓, Verbindlichkeit↓ |
| **Aktiv-Tausch** | Aktiv ↑, anderes Aktiv ↓ | Bar zahlen: Ware↑, Kasse↓ |
| **Passiv-Tausch** | Passiv ↑, anderes Passiv ↓ | Lieferantenkredit mit Bankkredit ablösen |

### Beispiel — Rechnungseingang:

Warenlieferung 5.000 €, Zahlung nach 30 Tagen:
- Vorräte steigen (Aktiv ↑ 5.000 €)
- Verbindlichkeiten aus Lieferung steigen (Passiv ↑ 5.000 €)
→ Aktiv-Passiv-Mehrung

---

## 3. Lineare Abschreibung

**Abschreibung** = planmäßige Wertminderung eines Anlageguts über die Nutzungsdauer.

**Formel:**
```
Jährliche Abschreibung = Anschaffungskosten / Nutzungsdauer
Abschreibungssatz = 100% / Nutzungsdauer
```

**Beispiel:** Server, 12.000 €, 4 Jahre Nutzungsdauer:
```
Abschreibung/Jahr = 12.000 / 4 = 3.000 €/Jahr
Abschreibungssatz = 100% / 4 = 25%
```

### Auswirkung auf Bilanz und GuV:

| | Auswirkung |
|---|---|
| **Bilanz (Aktiv)** | Buchwert des Anlageguts sinkt jährlich |
| **GuV** | Abschreibung erscheint als **Aufwand** → Gewinn sinkt |
| **Steuerlich** | Abschreibung mindert steuerpflichtigen Gewinn |

---

## 4. Skonto-Vorteilhaftigkeitsrechnung

**Situation:** Lieferant bietet 2% Skonto bei Zahlung innerhalb 10 Tagen. Zahlungsziel sonst 30 Tage. Kontokorrentkredit kostet 8% p.a.

**Berechnung des effektiven Jahreszinses des Skontos:**
```
Effektiver Jahreszins = (Skonto% / (100% - Skonto%)) × (360 / (Zahlungsziel - Skontofrist))
                      = (2 / 98) × (360 / (30 - 10))
                      = 0,0204 × 18
                      = 36,7% p.a.
```

**Fazit:** 36,7% >> 8% (Kontokorrent) → **Skonto fast immer vorteilhaft**!

**Finanzierungsgewinn:**
- Skonto nutzen: Zinsen für Kredit zahlen (8% p.a.)
- Skonto nicht nutzen: Zinsvorteil durch 20 Tage längere Zahlung
- Differenz = **Finanzierungsgewinn durch Skontonutzung**

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Rechnungsbestandteile | „Nennen Sie 5 gesetzliche Pflichtangaben einer Rechnung." |
| Fehlende Angabe | „Was sind die Konsequenzen einer fehlenden USt-IdNr. auf der Rechnung?" |
| Bilanzveränderung | „Wie verändert sich die Bilanz bei Aufnahme eines Darlehens?" |
| Abschreibung berechnen | „Berechnen Sie die jährliche Abschreibung (linear) und den Abschreibungssatz." |
| Skonto-Rechnung | „Ermitteln Sie, ob die Nutzung des Skontos vorteilhaft ist." |
