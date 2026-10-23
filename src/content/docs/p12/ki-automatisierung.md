---
title: Künstliche Intelligenz, RPA & sicherer Einsatz
description: KI-Grundlagen, KI-Risiken und Maßnahmen, RPA-Vergleich und prüfungsnahe Anwendung für AP2
---

# KI und Automatisierung – Prüfungsvorbereitung AP2

**Prüfungsbezug:** KI ist ein **bereichsübergreifendes Thema**. In der vorhandenen **Sommer-2025-Prüfung AP2-2, Aufgabe 2c**, wurden etwa Risiken der KI und der sichere Einsatz zur Informationsrecherche behandelt. Die folgenden Beispiele sind neu formulierte Lernbeispiele, keine Abschriften der Prüfung.

## 1. KI, Machine Learning und generative KI unterscheiden

| Begriff | Bedeutung | Beispiel |
|---|---|---|
| **Künstliche Intelligenz (KI)** | Oberbegriff für Systeme, die Aufgaben bearbeiten, für die typischerweise menschenähnliche Wahrnehmungs-, Entscheidungs- oder Sprachfähigkeiten nötig sind | Bilderkennung, Klassifikation, Prognose, Textanalyse |
| **Machine Learning (ML)** | Teilgebiet der KI: Ein Modell lernt Muster aus Trainingsdaten, statt alle Entscheidungsregeln einzeln vorgegeben zu bekommen | Betrugserkennung anhand bekannter Transaktionen |
| **Generative KI** | KI, die neue Inhalte wie Text, Bilder oder Programmcode erzeugen kann | Entwurf einer Kunden-E-Mail, Zusammenfassung, Codevorschlag |
| **RPA** | Regelbasierte Automatisierung vorhandener Prozessschritte, häufig über Benutzeroberflächen | Wiederkehrende Übertragung von Rechnungsdaten zwischen Anwendungen |

**Merksatz:** Nicht jede Automatisierung ist KI. Eine fest programmierte Wenn-dann-Regel ist nicht automatisch Machine Learning.

## 2. Einsatzmöglichkeiten im Unternehmen

- **Dokumente klassifizieren:** Eingehende Dokumente nach Typ vorsortieren.
- **Kundenservice unterstützen:** Fragen vorbereiten, Informationen suchen, Antwortentwürfe erstellen.
- **Prognosen:** Absatzmengen oder Bearbeitungsvolumen auf Basis geeigneter Daten schätzen.
- **Qualitätskontrolle:** Muster und Auffälligkeiten in strukturierten Daten erkennen.
- **Wissensmanagement:** Interne Dokumente auffindbar machen und mit Quellenbezug zusammenfassen.
- **IT-Support:** Tickets kategorisieren und Lösungsvorschläge anbieten, die Mitarbeitende prüfen.

**Kriterien für eine sinnvolle Einführung:** tatsächlicher Bedarf, ausreichende Datenqualität, Datenschutz, Berechtigungskonzept, Wirtschaftlichkeit, nachvollziehbare Qualitätsmessung und menschliche Kontrolle bei kritischen Entscheidungen.

## 3. Chancen und Nutzen

| Chance | Erläuterung mit Fallbezug |
|---|---|
| Zeitersparnis | Wiederkehrende Recherchen oder Textentwürfe können beschleunigt werden |
| Entlastung | Mitarbeitende gewinnen Zeit für Fälle mit höherem Beratungsbedarf |
| Skalierbarkeit | Große Dokument- oder Anfragevolumina können schneller vorsortiert werden |
| Datenanalyse | Auffälligkeiten und Muster können als Entscheidungshilfe erkannt werden |
| Verfügbarkeit | Ein System kann unterstützende Informationen rund um die Uhr bereitstellen, sofern der Dienst verfügbar ist |

**Achtung:** Zeitersparnis ist eine **mögliche** Folge, kein Automatismus. Aufwand für Prüfung, Nacharbeit, Datenschutz und Betrieb ist mitzurechnen.

## 4. Risiken und passende Gegenmaßnahmen

| Risiko | Mögliche Auswirkung | Geeignete Maßnahme |
|---|---|---|
| **Halluzinationen** | Plausibel klingende Falschaussagen führen zu Fehlentscheidungen | Quellenprüfung, Plausibilitätskontrolle, Freigabe durch Fachpersonal |
| **Bias / Verzerrung** | Bestimmte Gruppen oder Sachverhalte werden systematisch ungünstig behandelt | Geeignete Testdaten, Fairness-Prüfung, regelmäßige Qualitätskontrolle |
| **Datenschutzverletzung** | Personenbezogene Daten werden unzulässig verarbeitet oder offengelegt | Rechtsgrundlage, Datenminimierung, geeignete freigegebene Systeme, Zugriffsregeln |
| **Vertraulichkeitsverlust** | Betriebs- und Kundengeheimnisse gelangen an Unberechtigte | Keine vertraulichen Inhalte in nicht freigegebene Dienste eingeben, Daten klassifizieren |
| **Unzureichende Aktualität** | Veraltete Informationen werden als aktuelle Fakten übernommen | Datenstand prüfen, aktuelle verlässliche Quellen heranziehen |
| **Fehlende Nachvollziehbarkeit** | Ergebnis kann nicht begründet oder geprüft werden | Dokumentation, Quellenbezug, definierte Prüfschritte |
| **Automation Bias** | Beschäftigte vertrauen der KI-Ausgabe zu stark | Schulungen, Vier-Augen-Prinzip bei kritischen Entscheidungen |
| **Abhängigkeit vom Anbieter** | Preissteigerungen oder Ausfälle beeinträchtigen Prozesse | Exit-Strategie, Schnittstellen, SLA, Notfallverfahren |

**Prüfungsschema:** Risiko **nennen** → mögliche Auswirkung **erläutern** → passende Gegenmaßnahme **begründen**. Vermeide, jedes Problem pauschal nur mit „Schulung“ zu beantworten.

## 5. KI-Recherche sicher einsetzen – Prüfungsfall

**Situation:** Ein IT-Unternehmen prüft drei Cloud-Anbieter. Eine KI soll die verfügbaren Informationen zusammenfassen.

**Geeignetes Vorgehen:**
1. Zuerst einen konkreten Rechercheauftrag und Bewertungskriterien festlegen.
2. Nur freigegebene, nicht vertrauliche Informationen in das verwendete System eingeben.
3. Preise, technische Leistungen, Vertragslaufzeiten und Datenschutzangaben anhand aktueller Anbieterunterlagen prüfen.
4. Aussagen mit Quellen dokumentieren; unklare oder widersprüchliche Angaben manuell klären.
5. Die endgültige Anbieterentscheidung mithilfe nachvollziehbarer Kriterien treffen, nicht nur nach der KI-Empfehlung.

**Beispielantwort für „Erläutern Sie zwei Maßnahmen für den sicheren KI-Einsatz“:**

> Die von der KI genannten Anbietermerkmale sollten anhand aktueller und verlässlicher Quellen überprüft werden, da generative KI falsche oder veraltete Aussagen liefern kann. Außerdem dürfen personenbezogene oder vertrauliche Unternehmensdaten nur unter Beachtung der Datenschutzvorgaben in geeigneten, freigegebenen Systemen verarbeitet werden.

## 6. RPA und KI vergleichen

| Kriterium | RPA | KI / ML |
|---|---|---|
| Grundprinzip | Führt vorher festgelegte Schritte aus | Erkennt gelernte Muster oder erzeugt Ergebnisse |
| Geeignete Daten | Besonders gut bei strukturierten, stabilen Daten | Kann auch unstrukturierte Texte/Bilder verarbeiten |
| Vorteil | Hohe Wiederholbarkeit bei stabilen Abläufen | Flexibilität bei Mustererkennung und Sprache |
| Risiko | Fehler bei geänderter Oberfläche oder Ausnahmen | Falsche, verzerrte oder schwer prüfbare Ergebnisse |
| Qualitätskontrolle | Test der festen Prozessregeln | Laufende Prüfung von Ergebnisqualität und Daten |

**Praxis:** RPA kann Daten aus Formularen in ein System übertragen; eine KI könnte zuvor den Dokumentinhalt klassifizieren. In einem kombinierten Prozess müssen beide Komponenten überwacht werden.

## 7. Wirtschaftlichkeit einer KI-Einführung

Betrachte nicht nur Lizenzkosten, sondern auch:
- Einrichtung und Schnittstellen;
- Schulungen und Change Management;
- Datenaufbereitung und Datenschutzmaßnahmen;
- laufende Nutzungskosten;
- zusätzliche Qualitätssicherung;
- erwartete Zeitersparnis und vermiedene Fehlerkosten.

**Formulierung:** „Die Einführung ist nur wirtschaftlich sinnvoll, wenn der realistisch erwartete Nutzen die einmaligen und laufenden Kosten unter Berücksichtigung der Risiken rechtfertigt.“

## 8. Prüfungsfallen

- **„KI ist immer korrekt.“** Falsch: Ergebnisse müssen geprüft werden.
- **„KI ist automatisch RPA.“** Falsch: RPA kann vollständig regelbasiert arbeiten.
- **„Bei KI ist immer eine Einwilligung erforderlich.“** Zu pauschal: Die passende DSGVO-Rechtsgrundlage muss im Einzelfall geprüft werden.
- **„Ohne personenbezogene Daten gibt es keine KI-Risiken.“** Falsch: Zum Beispiel Halluzinationen, Bias oder Geschäftsgeheimnisse bleiben relevant.
- **„Der Anbieter ist allein verantwortlich.“** Zu pauschal: Anwenderunternehmen müssen den eigenen Einsatz und ihre jeweiligen Pflichten prüfen.

## 9. Drei Formulierungen zum Auswendiglernen

1. **Ein Risiko besteht darin, dass die KI falsche Informationen erzeugt. Werden diese ungeprüft übernommen, kann dies zu Fehlentscheidungen führen.**
2. **Zur Minimierung dieses Risikos sollten die KI-Ergebnisse anhand verlässlicher Quellen geprüft und durch zuständige Mitarbeitende freigegeben werden.**
3. **Die Einführung von KI sollte sowohl technisch und rechtlich als auch wirtschaftlich bewertet werden.**

[Weitere universelle Prüfungsformulierungen](/kdm-trainer/formulierungsbaukasten/) · [Thematische Abdeckung](/kdm-trainer/pruefungsabdeckung/) · [IHK-Antworttraining](/kdm-trainer/antworttraining/)

---

<div class="kdm-practice" data-topic="p12/ki-automatisierung"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
