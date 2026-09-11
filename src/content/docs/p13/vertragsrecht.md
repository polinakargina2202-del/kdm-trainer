---
title: Vertragsrecht & Abnahme
description: Werkvertrag, Dienstvertrag, Rahmenvertrag, Abnahme, SLA, internationale Verträge
sidebar:
  badge:
    text: 7/7 Prüfungen
    variant: danger
---

> **Prüfungsrelevanz:** In JEDER der 7 analysierten Sessions. Werkvertrag vs. Dienstvertrag in 5/7 explizit.

## 1. Vertragsarten im Überblick

| Vertragsart | Schuldet | BGB-Paragraph | Typische IT-Anwendung |
|---|---|---|---|
| **Werkvertrag** | Den **Erfolg** (fertiges Werk) | § 631 | App-Entwicklung, Softwarelieferung, Wartung |
| **Dienstvertrag** | Die **Tätigkeit** (Bemühen) | § 611 | Beratungsvertrag, Arbeitnehmerüberlassung |
| **Kaufvertrag** | Eigentumsübertragung einer Sache | § 433 | Hardware-Kauf, Lizenzkauf |
| **Mietvertrag** | Nutzungsüberlassung gegen Entgelt | § 535 | Server-Miete, Büro |
| **Leasingvertrag** | Nutzungsüberlassung (Sonderform) | — | Leasing von IT-Geräten |

---

## 2. Werkvertrag vs. Dienstvertrag

| Kriterium | Werkvertrag | Dienstvertrag |
|---|---|---|
| **Was wird geschuldet?** | Erfolg — das fertige Werk | Tätigkeit — das Bemühen |
| **Erfolgshaftung** | Ja — Mängelbeseitigung ist Pflicht | Nein — nur ordentliche Leistung |
| **Vergütung** | Nach Abnahme des Werkes | Für die geleistete Zeit (Stunden/Monat) |
| **Abnahme erforderlich?** | Ja | Nein |
| **Gewährleistung** | Ja (2 Jahre) | Nein |
| **IT-Beispiel** | Entwicklung einer App nach Spezifikation | IT-Berater nach Stunden abrechnen |

> **Merksatz:** Bei IT-Projekten mit konkretem Ergebnis → **Werkvertrag** wählen!
> Nur Werkvertrag gibt dir Recht auf Nachbesserung bei Mängeln.

---

## 3. Werkvertrag — Inhalte (§ 631 ff. BGB)

Wesentliche Regelungen:
- **Beschreibung des Werkes** (Leistungsbeschreibung)
- **Vergütung** (Festpreis oder nach Aufwand)
- **Fertigstellungstermin** / Meilensteine
- **Abnahmekriterien** (wann gilt das Werk als fertig?)
- **Gewährleistungsregelungen**
- Rechte und Pflichten beider Parteien

### Rechte des Bestellers:
- Abnahme verweigern bei wesentlichen Mängeln
- Nacherfüllung verlangen (Nachbesserung oder Neuherstellung)
- Minderung des Kaufpreises
- Rücktritt vom Vertrag
- Schadensersatz

### Pflichten des Auftragnehmers:
- Werk fachgerecht herstellen
- Mängel kostenlos beseitigen (Gewährleistung)
- Termin einhalten
- Dokumentation liefern

---

## 4. Rahmenvertrag

**Definition:** Regelt allgemeine Bedingungen für eine dauerhafte Zusammenarbeit, ohne jedes Mal neu verhandeln zu müssen.

**Vorteile:**
- Schnelle Abwicklung von Einzelaufträgen
- Geringerer Verhandlungsaufwand bei jedem Auftrag
- Konditionen (Preise, Qualitätsstandards, Fristen) vorab geregelt
- Verlässlichkeit für beide Seiten
- Basis für langfristige Partnerschaft

**Typische Inhalte:**
- Allgemeine Liefer- und Zahlungsbedingungen
- Qualitätsstandards
- Haftungsregelungen
- Laufzeit und Kündigung

---

## 5. Abnahme

### Abnahmearten:

| Art | Beschreibung |
|---|---|
| **Ausdrückliche Abnahme** | Schriftliche oder mündliche Erklärung: „Ich nehme das Werk ab" |
| **Stillschweigende Abnahme** | Aus dem Verhalten des Bestellers erkennbar (Nutzung, Bezahlung, Ablauf der Frist) |
| **Fiktive Abnahme** | Setzen einer Abnahmefrist → nach Ablauf gilt Werk als abgenommen |

### Folgen der Abnahme:

1. **Vergütung wird fällig** (Werklohn)
2. **Gefahr geht auf Besteller über** (zufälliger Untergang)
3. **Gewährleistungsfristen beginnen** (2 Jahre)
4. **Beweislast wechselt** — Besteller muss Mängel beweisen (vorher: Auftragnehmer)
5. Auftragnehmer hat Recht auf Abnahme bei mangelfreiem Werk

---

## 6. Qualitätskontrolle bei Subunternehmern

Möglichkeiten zur Prüfung der Leistung:
- **Direkte Vor-Ort-Kontrolle** — anhand der Leistungsbeschreibung prüfen, fotografisch dokumentieren
- **Videotelefonie** — Live-Kontrolle per Video
- **Fernwartung** — Remote-Zugriff auf Systeme
- **Meilensteinberichte** — regelmäßige Statusberichte vom Subunternehmer
- **Abnahmeprotokoll** — formale Prüfung bei Fertigstellung

---

## 7. Auswahlkriterien Subunternehmer

Qualitative Kriterien:
- Erfahrung und Referenzen im Fachbereich
- Zertifizierungen (ISO, Fachkompetenz)
- Finanzielle Stabilität (kein Insolvenzrisiko)
- Verfügbare Kapazitäten
- Reaktionszeit und Erreichbarkeit
- Qualitätsstandards und Prozesse
- Standortnähe / Lieferzeit

---

## 8. Internationale Verträge

Besondere Regelungen bei internationalen Verträgen:
- **Anwendbares Recht** — welches nationale Recht gilt? (BGB gilt nicht automatisch!)
- **Gerichtsstand** — wo wird bei Streit verhandelt?
- **Vertragssprache** — welche Sprache ist rechtlich bindend?
- **Währung** und Zahlungsmodalitäten
- **INCOTERMS** — internationale Handelsklauseln (Lieferbedingungen)

---

## 9. SLA-Inhalte (S23)

Ein SLA (Service Level Agreement) regelt als Bestandteil eines Werkvertrags:

| Aspekt | Beispiel |
|---|---|
| **Verfügbarkeit** | 99,9% Up-Time |
| **Reaktionszeit** | Innerhalb 4 Stunden nach Incident-Meldung |
| **Wiederherstellungszeit** | System in 8 Stunden wiederhergestellt |
| **Support-Zeiten** | 8×5 oder 24×7 |
| **Eskalationspfade** | An wen eskalieren? |
| **Vertragsstrafe** | 10% Vergütungsminderung je Stunde Überschreitung |

---

## 10. Kündigung (S23)

| Art | Bedingungen |
|---|---|
| **Ordentliche Kündigung** | Frist einhalten (vertraglich oder gesetzlich), kein Grund nötig |
| **Außerordentliche Kündigung** | Wichtiger Grund (z.B. Vertragsverletzung, Insolvenz), fristlos |

**Abhängigkeit vom Lieferanten verhindern:**
- Vertraglich Übergabe der Quellcodes sichern
- Escrow-Vereinbarung (Quellcode bei neutralem Dritten)
- Dokumentationspflichten vereinbaren
- Exit-Strategie definieren

---

## 11. Allgemeine Geschäftsbedingungen (AGB)

AGB sind für viele Verträge **vorformulierte Vertragsbedingungen**. Wichtig für Prüfungen:
- Sie müssen wirksam in den Vertrag einbezogen werden.
- Überraschende/unzulässige Klauseln können unwirksam sein.
- **Individualabreden haben Vorrang** vor AGB.
- Bei B2B und B2C gelten teilweise unterschiedliche Schutzmaßstäbe.

Bei digitalen Verträgen müssen außerdem Datenschutz, Preis-/Leistungsbeschreibung, Laufzeit/Kündigung und Lizenz-/Nutzungsrechte klar geregelt werden.

## 12. Vertragsschluss und digitale Vertragsgestaltung

Ein Vertrag entsteht grundsätzlich durch zwei übereinstimmende Willenserklärungen: **Angebot und Annahme**.

Nicht jede Webseite ist bereits ein bindendes Angebot: Häufig ist eine Produktdarstellung nur eine **invitatio ad offerendum** – der Kunde gibt mit der Bestellung das Angebot ab; der Anbieter nimmt es anschließend an.

Bei elektronischen Prozessen sind Nachweisbarkeit, Berechtigungen und ggf. Formvorschriften wichtig. Eine elektronische Signatur ersetzt **nicht automatisch jede gesetzlich geforderte Schriftform**.

## 13. Vertretungsmacht im Unternehmen

- **Prokura:** sehr weitreichende handelsrechtliche Vollmacht; Eintragung ins Handelsregister wird bekannt gemacht.
- **Handlungsvollmacht:** enger; umfasst gewöhnliche Geschäfte des jeweiligen Handelsgewerbes bzw. Aufgabenbereichs.
- **Einzelvollmacht:** für einen konkret bestimmten Vorgang.

**Prüfungslogik:** Bei Bestellung/Vertragsverhandlung kann gefragt werden, ob eine Person das Unternehmen überhaupt wirksam vertreten darf.

## 14. Leistungserbringung dokumentieren

Geeignete Nachweise bei IT-Verträgen:
- Abnahmeprotokoll,
- Leistungs-/Stundennachweis,
- Testprotokoll,
- Übergabe-/Installationsprotokoll,
- SLA-Report,
- Dokumentation offener Mängel und Nacharbeiten.

Dokumentation hilft bei Rechnung, Gewährleistung, Streitfällen und beim Soll-Ist-Vergleich von Zeit/Kosten.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Vertragsart begründen | „Begründen Sie, welcher Vertragstyp für die Entwicklung einer App geeignet ist." |
| Unterschied erläutern | „Erläutern Sie den Unterschied zwischen Werkvertrag und Dienstvertrag." |
| Abnahme | „Was ist der Unterschied zwischen ausdrücklicher und stillschweigender Abnahme? Nennen Sie 2 Folgen der Abnahme." |
| Rahmenvertrag | „Nennen Sie 2 Vorteile eines Rahmenvertrags." |
| Subunternehmer | „Nennen Sie 4 Auswahlkriterien für einen Subunternehmer." |
| Qualitätskontrolle | „Wie kann die Qualität eines Subunternehmers kontrolliert werden?" |

---
<div class="kdm-practice" data-topic="p13/vertragsrecht"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
