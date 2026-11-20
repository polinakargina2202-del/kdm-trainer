---
title: Kalkulation & Kostenrechnung
description: Break-even, Nutzwertanalyse, KLR, BAB, Deckungsbeitrag, Prozesskosten und Preiskalkulation
sidebar:
  badge:
    text: Wirtschaftlichkeit 7/10
    variant: caution
---

> **Prüfungsrelevanz:** In Kalkulationsaufgaben liegt der Hauptfehler selten am Taschenrechner. Meist wird die **falsche Größe eingesetzt** oder eine Zahl an der falschen Stelle der Rechenkette verwendet. Deshalb zuerst die Struktur der Aufgabe verstehen, dann rechnen.

# Kalkulation und Kostenrechnung – die Logik hinter den Formeln

Die kaufmännischen Rechenaufgaben wirken sehr unterschiedlich. Viele lassen sich aber auf vier Fragen reduzieren:

1. Welche Kosten sind **fix** und welche **variabel**?
2. Welche Kosten können direkt zugerechnet werden?
3. Welche Bezugsgröße gehört in die Formel?
4. Welche Größe wird eigentlich gesucht?

---

## 1. Fixe und variable Kosten

### Fixe Kosten

Fixe Kosten bleiben innerhalb des betrachteten Bereichs zunächst unabhängig von der Menge.

Beispiele:
- Miete,
- feste Grundgebühr,
- einmalige Entwicklungskosten.

### Variable Kosten

Variable Kosten verändern sich mit der Menge oder Nutzung.

Beispiele:
- nutzungsabhängige Cloudkosten,
- Material pro Gerät,
- Transaktionsgebühr pro Vorgang.

### Warum ist die Unterscheidung wichtig?

Weil der Break-even nicht einfach vom Verkaufspreis abhängt. Jede zusätzliche Einheit verursacht gegebenenfalls variable Kosten.

---

## 2. Deckungsbeitrag – was bleibt von einer Einheit übrig?

```text
Deckungsbeitrag je Einheit
= Verkaufspreis − variable Kosten je Einheit
```

Der Deckungsbeitrag zeigt, welcher Betrag je verkaufter Einheit zur Deckung der Fixkosten beiträgt.

### Beispiel

Verkaufspreis: 30 €  
Variable Kosten: 18 €

```text
DB je Stück = 30 − 18 = 12 €
```

Jede Einheit trägt also 12 € zur Deckung der Fixkosten bei.

> **Merksatz:** Umsatz ist nicht automatisch Gewinn. Erst variable Kosten abziehen.

---

## 3. Break-even – wann sind alle Fixkosten gedeckt?

```text
Break-even-Menge
= Fixkosten / Deckungsbeitrag je Einheit
```

### Beispiel

Fixkosten: 24.000 €  
DB je Stück: 12 €

```text
24.000 / 12 = 2.000 Stück
```

Bei 2.000 Stück sind die Fixkosten genau gedeckt.

### Wenn ein Dezimalwert entsteht

Beispiel:

```text
50.000 / 79 = 632,91
```

Wenn die Frage lautet, ab welcher **ganzen Stückzahl** die Kosten gedeckt sind:

→ auf **633 Stück** aufrunden.

### Typische IHK-Falle

```text
Fixkosten / Verkaufspreis
```

ist falsch, wenn variable Kosten je Einheit existieren.

Dann muss zuerst der Deckungsbeitrag berechnet werden.

---

## 4. Betriebsergebnis – was bleibt nach den Fixkosten?

```text
Gesamt-DB = Absatzmenge × DB je Stück
Betriebsergebnis = Gesamt-DB − Fixkosten
```

### Beispiel

Preis: 30 €  
variable Kosten: 18 €  
Absatz: 8.000 Stück  
Fixkosten: 60.000 €

```text
DB je Stück = 12 €
Gesamt-DB = 8.000 × 12 = 96.000 €
Betriebsergebnis = 96.000 − 60.000 = 36.000 €
```

---

## 5. Kurzfristige und langfristige Preisuntergrenze

### Kurzfristige Preisuntergrenze

Unter vereinfachten Bedingungen entspricht sie den relevanten **variablen Stückkosten**.

Warum?

Fixkosten entstehen kurzfristig ohnehin. Ein zusätzlicher Auftrag kann deshalb kurzfristig sinnvoll sein, wenn er wenigstens seine zusätzlichen variablen Kosten deckt.

### Langfristige Preisuntergrenze

Langfristig müssen auch die Fixkosten gedeckt werden.

> **Prüfungsfalle:** Eine kurzfristige Entscheidung nicht automatisch als dauerhaft sinnvolle Preisstrategie behandeln.

---

## 6. Einzelkosten und Gemeinkosten

### Einzelkosten

Können direkt einem Kostenträger zugeordnet werden.

Beispiele:
- Hardware, die nur für ein bestimmtes Kundenprojekt gekauft wird,
- direkt zurechenbares Material.

### Gemeinkosten

Können nicht sinnvoll direkt einem einzelnen Kostenträger zugerechnet werden.

Beispiele:
- Büromiete,
- Verwaltung,
- zentrale IT-Infrastruktur.

Sie müssen über geeignete Schlüssel oder Zuschlagssätze verteilt werden.

---

## 7. Kostenart, Kostenstelle und Kostenträger

Diese drei Begriffe beantworten drei unterschiedliche Fragen:

| Begriff | Frage | Beispiel |
|---|---|---|
| **Kostenart** | Welche Kosten? | Miete, Personalkosten |
| **Kostenstelle** | Wo entstehen sie? | IT, Verwaltung |
| **Kostenträger** | Wofür entstehen sie? | Kundenprojekt A |

### Beispiel

Ein Entwickler arbeitet an Kundenprojekt X.

- Personalkosten = **Kostenart**
- Entwicklungsabteilung = **Kostenstelle**
- Projekt X = **Kostenträger**

> **Prüfungstipp:** „Was – wo – wofür“ ist der einfachste Merksatz.

---

## 8. BAB – Gemeinkosten verteilen

Der **Betriebsabrechnungsbogen (BAB)** verteilt Gemeinkosten auf Kostenstellen.

Danach können Gemeinkostenzuschlagssätze berechnet werden.

```text
GKZ = Gemeinkosten / Bezugsgröße × 100 %
```

### Beispiel

Gemeinkosten: 56.000 €  
Bezugsgröße: 224.000 €

```text
56.000 / 224.000 × 100 = 25 %
```

### Warum ist die Bezugsgröße so wichtig?

Weil ein Zuschlagssatz ohne passende Bezugsgröße keine sinnvolle Aussage hat.

Typische Bezugsgrößen hängen von der Aufgabe ab, zum Beispiel:
- Materialgemeinkosten auf Materialeinzelkosten,
- Fertigungsgemeinkosten auf Fertigungslöhne,
- Verwaltungs-/Vertriebsgemeinkosten auf Herstellkosten, wenn die Aufgabe dies vorgibt.

> **Prüfungsfalle:** Nicht einfach jede Gemeinkostenart durch die Gesamtkosten teilen.

---

## 9. Vereinfachtes Kalkulationsschema

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
= Angebotspreis netto
```

Das Schema kann in Aufgaben erweitert oder verkürzt sein. Deshalb immer die gegebenen Positionen verwenden.

---

## 10. Paarvergleich – welche Kriterien sind wichtiger?

Ein Paarvergleich hilft, Kriterien nach ihrer Bedeutung zu gewichten.

Jedes Kriterium wird mit jedem anderen verglichen.

Ein mögliches Schema:
- wichtiger = 1 Punkt,
- gleich wichtig = 0,5 Punkte,
- weniger wichtig = 0 Punkte.

Danach werden die Punkte addiert und in eine Gewichtung überführt.

### Warum vor einer Nutzwertanalyse?

Die Nutzwertanalyse benötigt Gewichtungen. Der Paarvergleich kann helfen, diese nachvollziehbar zu bestimmen.

> **Prüfungsfalle:** Paarvergleich bewertet **Kriterien gegeneinander**. Nutzwertanalyse bewertet später **Alternativen anhand dieser Kriterien**.

---

## 11. Nutzwertanalyse – qualitative Kriterien in eine Entscheidung bringen

Ablauf:

1. Kriterien festlegen.
2. Gewichtungen festlegen.
3. jede Alternative bewerten.
4. Bewertung × Gewichtung rechnen.
5. gewichtete Werte summieren.
6. Ergebnis sachlich interpretieren.

### Beispiel

| Kriterium | Gewicht | Anbieter A | A gewichtet | Anbieter B | B gewichtet |
|---|---:|---:|---:|---:|---:|
| Datenschutz | 40 % | 5 | 2,0 | 3 | 1,2 |
| Support | 30 % | 4 | 1,2 | 5 | 1,5 |
| Skalierbarkeit | 30 % | 4 | 1,2 | 5 | 1,5 |
| **Gesamt** | **100 %** | | **4,4** | | **4,2** |

→ Anbieter A erreicht den höheren Nutzwert.

### Aber: Muss-Kriterien zuerst

Wenn eine Alternative ein zwingendes Muss-Kriterium nicht erfüllt, darf sie nicht allein durch hohe Punkte in anderen Bereichen „gerettet“ werden.

---

## 12. Bezugspreis / Einstandspreis – Rechenkette in richtiger Reihenfolge

```text
Listeneinkaufspreis
− Liefererrabatt
= Zieleinkaufspreis

− Liefererskonto
= Bareinkaufspreis

+ Bezugskosten
= Bezugspreis / Einstandspreis
```

### Warum Reihenfolge wichtig ist

Rabatt und Skonto beziehen sich nicht immer auf dieselbe Ausgangsgröße.

Typische Fehler:
- Skonto direkt vom Listeneinkaufspreis berechnen,
- Bezugskosten vor Rabatt abziehen,
- Prozentwert und Eurobetrag verwechseln.

---

## 13. Vorwärts-, Rückwärts-/Differenz- und Nachkalkulation

### Vorwärtskalkulation

Du startest bei bekannten Einkaufskosten und rechnest in Richtung Verkaufspreis.

### Rückwärts-/Differenzkalkulation

Ein Markt- oder Verkaufspreis ist vorgegeben. Du rechnest rückwärts und prüfst, welcher Einkaufspreis bzw. Spielraum möglich ist.

### Nachkalkulation

Planwerte werden nachträglich mit den tatsächlichen Werten verglichen.

Ziel:
- Abweichung erkennen,
- Ursache finden,
- zukünftige Kalkulation verbessern.

---

## 14. Handelsspanne und Kalkulationszuschlag – ähnlicher Zähler, anderer Nenner

```text
Handelsspanne
= (Nettoverkaufspreis − Einstandspreis)
  / Nettoverkaufspreis × 100 %

Kalkulationszuschlag
= (Nettoverkaufspreis − Einstandspreis)
  / Einstandspreis × 100 %
```

### Beispiel

Einstandspreis: 80 €  
Verkaufspreis: 100 €

Gewinnspanne in Euro:

```text
100 − 80 = 20 €
```

Handelsspanne:

```text
20 / 100 × 100 = 20 %
```

Kalkulationszuschlag:

```text
20 / 80 × 100 = 25 %
```

> **Prüfungsfalle:** Der Zähler ist gleich, der **Nenner ist unterschiedlich**.

---

## 15. Prozesskostenrechnung – Kosten eines Vorgangs

```text
Prozesskostensatz = Prozesskosten / Prozessmenge
```

### Beispiel

24.000 € Kosten für 800 Ticketbearbeitungen:

```text
24.000 / 800 = 30 € je Ticket
```

### Aus Personalkosten ableiten

Arbeitgeberkosten pro Monat: 3.600 €  
Produktive Zeit: 160 Stunden

```text
160 × 60 = 9.600 Minuten
3.600 / 9.600 = 0,375 € je Minute
```

Ein Vorgang dauert 8 Minuten:

```text
8 × 0,375 = 3,00 € Personalkosten je Vorgang
```

Bei 2.000 Vorgängen:

```text
2.000 × 3,00 = 6.000 €
```

> **Prüfungsstrategie:** Erst Kosten pro Zeiteinheit, dann Zeit pro Vorgang, dann Prozessmenge.

---

## 16. Marktvolumen, Marktpotenzial und Marktanteil

| Begriff | Bedeutung |
|---|---|
| **Marktvolumen** | tatsächlich realisierte Nachfrage / Umsatz im Markt |
| **Marktpotenzial** | theoretisch maximal mögliche Nachfrage |
| **Marktanteil** | eigener Anteil am realisierten Markt |

```text
Marktanteil
= eigener Umsatz oder Absatz / Marktvolumen × 100 %
```

### Beispiel

Eigener Umsatz: 250.000 €  
Marktvolumen: 2.000.000 €

```text
250.000 / 2.000.000 × 100 = 12,5 %
```

---

## 17. Aufwand/Ertrag und Kosten/Leistung unterscheiden

Finanzbuchhaltung betrachtet:
- **Aufwand**
- **Ertrag**

KLR betrachtet:
- **Kosten**
- **Leistung**

Nicht jeder Aufwand ist automatisch eine Kostenposition des Betriebszwecks.

Beispiel:
- Spende = Aufwand, typischerweise keine betriebszweckbezogenen Kosten.
- kalkulatorischer Unternehmerlohn = Kosten, aber kein entsprechender Aufwand der Finanzbuchhaltung.

---

## 18. Grenzkosten und digitale Produkte

**Grenzkosten** sind die zusätzlichen Kosten einer weiteren Einheit.

Bei digitalen Produkten können die Grenzkosten niedrig sein:
- Software ist bereits entwickelt,
- zusätzliche Downloads verursachen nur geringe Mehrkosten.

Trotzdem können hohe Fixkosten bestehen:
- Entwicklung,
- Plattform,
- Sicherheit,
- Marketing.

Das erklärt, warum digitale Geschäftsmodelle oft hohe Anfangskosten und niedrige Kosten je zusätzlichem Nutzer kombinieren.

---

## 19. Preisdifferenzierung

Mögliche Formen:
- Basic/Pro-Pakete,
- Mengenstaffeln,
- zeitabhängige Preise,
- nutzungsabhängige Preise,
- unterschiedliche Kundengruppen.

Eine Preisdifferenzierung sollte:
- wirtschaftlich sinnvoll,
- nachvollziehbar,
- rechtlich zulässig
und am Kundennutzen orientiert sein.

---

## 20. Prüfungsstrategie für Rechenaufgaben

Vor dem Rechnen:

1. **Gesuchte Größe markieren.**
2. Einheiten prüfen.
3. Fix/variabel bzw. Einzel-/Gemeinkosten einordnen.
4. passende Formel auswählen.
5. Werte mit Einheit einsetzen.
6. Ergebnis auf Plausibilität prüfen.
7. wenn verlangt: **wirtschaftlich interpretieren**, nicht nur Zahl hinschreiben.

### Typische Fehler

- falscher Nenner,
- Prozent und Prozentpunkte verwechseln,
- Rabatt und Skonto in falscher Reihenfolge,
- beim Break-even den Verkaufspreis statt DB verwenden,
- Gewichtungen der Nutzwertanalyse ergeben nicht 100 %,
- Ergebnis rechnen, aber keine Entscheidung begründen.

---

## Kurz zusammengefasst

- DB je Stück = Preis − variable Stückkosten.
- Break-even = Fixkosten / DB je Stück.
- Kostenart = **was**, Kostenstelle = **wo**, Kostenträger = **wofür**.
- BAB verteilt Gemeinkosten.
- NWA = Gewicht × Bewertung.
- Bezugspreis folgt einer festen Rechenkette.
- Handelsspanne und Kalkulationszuschlag unterscheiden sich im Nenner.
- Prozesskosten lassen sich aus Zeit- und Personalkosten ableiten.

<div class="kdm-calculators" data-calculators="breakeven,gkz,nwa,marketshare,processcost"></div>
<div class="kdm-practice" data-topic="p13/kalkulation"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
