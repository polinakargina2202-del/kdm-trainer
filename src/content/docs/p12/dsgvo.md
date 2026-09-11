---
title: Datenschutz & DSGVO
description: EU-DSGVO, personenbezogene Daten, Pflichten, technische Maßnahmen
sidebar:
  badge:
    text: 5/7 Prüfungen
    variant: caution
---

> **Prüfungsrelevanz:** Datenschutz erscheint häufig als Teilaufgabe innerhalb eines größeren IT- oder Geschäftsprozesses.

## Worum geht es bei der DSGVO?

Die **Datenschutz-Grundverordnung (DSGVO)** schützt personenbezogene Daten natürlicher Personen. Für Unternehmen bedeutet das: Personenbezogene Daten dürfen nicht einfach gesammelt, gespeichert und weitergegeben werden, nur weil es technisch möglich ist.

Stattdessen muss immer geprüft werden:

1. Welche Daten werden verarbeitet?
2. Zu welchem Zweck werden sie benötigt?
3. Gibt es eine Rechtsgrundlage?
4. Wer darf darauf zugreifen?
5. Wie lange werden die Daten benötigt?
6. Wie werden sie geschützt?

In Prüfungsaufgaben geht es deshalb häufig nicht nur um Definitionen, sondern darum, eine konkrete Eingabemaske, Cloud-Lösung oder Datenverarbeitung zu beurteilen.

---

## 1. Was sind personenbezogene Daten?

Nach Art. 4 Nr. 1 DSGVO sind personenbezogene Daten Informationen, die sich auf eine **identifizierte oder identifizierbare natürliche Person** beziehen.

Das bedeutet: Eine Information muss nicht unbedingt direkt einen Namen enthalten. Es reicht, wenn eine Person mit vertretbarem Aufwand identifiziert werden kann.

### Beispiele

- Name
- Adresse
- E-Mail-Adresse
- Telefonnummer
- Kundennummer
- IP-Adresse
- Standortdaten
- Kfz-Kennzeichen
- Foto
- Geburtsdatum

### Beispiel

Eine Tabelle enthält nur:

```text
Kundennummer: 4711
Umsatz: 8.500 €
```

Wenn das Unternehmen über die Kundennummer feststellen kann, welche Person dahintersteht, handelt es sich weiterhin um personenbezogene Daten.

> **Merksatz:** Personenbezogen bedeutet nicht nur „Name steht dabei“, sondern „Person kann bestimmt werden“.

---

## 2. Besondere Kategorien personenbezogener Daten

Art. 9 DSGVO schützt bestimmte besonders sensible Daten stärker.

Dazu gehören unter anderem Daten über:

- Gesundheit
- ethnische Herkunft
- politische Meinungen
- religiöse oder weltanschauliche Überzeugungen
- Gewerkschaftszugehörigkeit
- genetische Daten
- biometrische Daten zur eindeutigen Identifizierung
- Sexualleben oder sexuelle Orientierung

Die Verarbeitung solcher Daten ist grundsätzlich untersagt, sofern nicht eine der ausdrücklich vorgesehenen Ausnahmen greift.

### Prüfungslogik

Wenn in einem Szenario zum Beispiel Gesundheitsdaten verarbeitet werden, solltest du erkennen, dass nicht nur „normale“ personenbezogene Daten betroffen sind, sondern eine besonders geschützte Kategorie.

---

## 3. Grundsätze der Datenverarbeitung

Art. 5 DSGVO enthält zentrale Grundsätze.

### Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz

Datenverarbeitung braucht eine rechtliche Grundlage und muss für die betroffene Person nachvollziehbar sein.

### Zweckbindung

Daten dürfen nur für festgelegte, eindeutige und legitime Zwecke erhoben werden.

Beispiel:

Eine E-Mail-Adresse wird zur Vertragsabwicklung erhoben. Sie darf nicht automatisch für völlig andere Zwecke verwendet werden.

### Datenminimierung

Es sollen nur die Daten erhoben werden, die für den jeweiligen Zweck erforderlich sind.

Beispiel:

Für einen Newsletter ist normalerweise keine Personalausweisnummer notwendig.

### Richtigkeit

Gespeicherte Daten sollen sachlich richtig und möglichst aktuell sein.

### Speicherbegrenzung

Daten dürfen nicht unbegrenzt gespeichert werden, wenn sie für den Zweck nicht mehr benötigt werden und keine andere Aufbewahrungspflicht besteht.

### Integrität und Vertraulichkeit

Daten müssen vor unbefugter oder unrechtmäßiger Verarbeitung sowie vor Verlust und Zerstörung geschützt werden.

### Rechenschaftspflicht

Das Unternehmen muss die Einhaltung der Datenschutzregeln nicht nur umsetzen, sondern auch nachweisen können.

| Grundsatz | Leitfrage |
|---|---|
| **Rechtmäßigkeit** | Darf ich diese Daten verarbeiten? |
| **Zweckbindung** | Wofür wurden die Daten erhoben? |
| **Datenminimierung** | Brauche ich wirklich jedes Feld? |
| **Richtigkeit** | Sind die Daten korrekt? |
| **Speicherbegrenzung** | Wie lange werden sie benötigt? |
| **Integrität/Vertraulichkeit** | Sind sie ausreichend geschützt? |
| **Rechenschaftspflicht** | Kann ich die Einhaltung nachweisen? |

---

## 4. Rechtsgrundlagen der Verarbeitung

Eine Datenverarbeitung braucht eine Rechtsgrundlage. Häufig relevante Fälle sind:

### Einwilligung

Die betroffene Person stimmt einer bestimmten Verarbeitung freiwillig zu.

Wichtig: Eine Einwilligung muss für einen bestimmten Zweck erfolgen und kann unter den gesetzlichen Voraussetzungen widerrufen werden.

### Vertragserfüllung

Daten dürfen verarbeitet werden, wenn dies für die Erfüllung eines Vertrags oder vorvertragliche Maßnahmen erforderlich ist.

Beispiel:

Ein Onlineshop benötigt Name und Lieferadresse, um die bestellte Ware zu versenden.

### Rechtliche Verpflichtung

Manche Daten müssen verarbeitet oder gespeichert werden, weil ein Gesetz dies verlangt.

### Berechtigtes Interesse

Unter bestimmten Voraussetzungen kann eine Verarbeitung auf einem berechtigten Interesse beruhen. Dabei müssen die Interessen des Unternehmens gegen die Rechte und Interessen der betroffenen Person abgewogen werden.

### Prüfungslogik

Schreibe nicht automatisch „Einwilligung ist immer nötig“. Eine Verarbeitung kann auch auf einer anderen Rechtsgrundlage beruhen.

---

## 5. Informationspflichten

Wenn personenbezogene Daten erhoben werden, müssen betroffene Personen grundsätzlich darüber informiert werden, was mit ihren Daten geschieht.

Typische Informationen sind zum Beispiel:

- wer verantwortlich ist,
- welche Daten verarbeitet werden,
- zu welchem Zweck,
- auf welcher Rechtsgrundlage,
- wie lange gespeichert wird,
- an wen Daten übermittelt werden,
- welche Rechte die betroffene Person hat.

Das ist der Grund, warum Webseiten und Anwendungen Datenschutzhinweise enthalten.

---

## 6. Rechte betroffener Personen

### Auskunft — Art. 15

Eine Person kann erfahren, welche personenbezogenen Daten über sie verarbeitet werden.

### Berichtigung — Art. 16

Falsche oder unvollständige Daten können berichtigt werden.

### Löschung — Art. 17

Unter bestimmten Voraussetzungen können Daten gelöscht werden.

Das „Recht auf Vergessenwerden“ bedeutet aber nicht, dass jedes Datum jederzeit gelöscht werden muss. Gesetzliche Aufbewahrungspflichten können einer sofortigen Löschung entgegenstehen.

### Einschränkung — Art. 18

Die Verarbeitung kann in bestimmten Fällen eingeschränkt werden.

### Datenübertragbarkeit — Art. 20

Bestimmte Daten können in einem strukturierten, gängigen und maschinenlesbaren Format herausgegeben werden.

### Widerspruch — Art. 21

Gegen bestimmte Verarbeitungen kann Widerspruch eingelegt werden.

---

## 7. Technische und organisatorische Maßnahmen (TOMs)

Datenschutz besteht nicht nur aus Dokumenten. Personenbezogene Daten müssen praktisch geschützt werden.

### Technische Maßnahmen

Beispiele:

- Verschlüsselung
- sichere Authentifizierung
- Zugriffsbeschränkungen
- Protokollierung
- Backups
- Firewalls
- Schutz vor Schadsoftware
- Pseudonymisierung

### Organisatorische Maßnahmen

Beispiele:

- Rollen- und Berechtigungskonzepte
- Schulungen
- klare Zuständigkeiten
- Löschkonzept
- Datenschutzrichtlinien
- regelmäßige Überprüfung von Berechtigungen
- geregelter Umgang mit Sicherheitsvorfällen

### Beispiel

In einer Personalabteilung sollen nur bestimmte Mitarbeiter Gehaltsdaten sehen können.

Technische Maßnahme: Zugriff wird über Benutzerrechte begrenzt.

Organisatorische Maßnahme: Rollen werden definiert und regelmäßig überprüft.

> **Merksatz:** Technische Maßnahmen schützen durch Systeme. Organisatorische Maßnahmen schützen durch Regeln und Prozesse.

---

## 8. Pseudonymisierung und Anonymisierung

Diese Begriffe werden häufig verwechselt.

### Pseudonymisierung

Direkte Identifikationsmerkmale werden durch ein Kennzeichen ersetzt.

Beispiel:

Statt eines Namens steht in einer Auswertung nur `KUNDE_4711`.

Wenn über eine zusätzliche Zuordnungstabelle wieder festgestellt werden kann, wer dahintersteht, bleiben die Daten personenbezogen.

### Anonymisierung

Die Daten werden so verändert, dass eine Person nicht mehr identifizierbar ist.

Sind Daten tatsächlich anonym, fallen sie nicht mehr als personenbezogene Daten unter die DSGVO.

> **Merksatz:** Pseudonymisiert = Zuordnung grundsätzlich noch möglich. Anonymisiert = Zuordnung nicht mehr möglich.

---

## 9. Auftragsverarbeitung

Ein Unternehmen nutzt häufig externe Dienstleister, die personenbezogene Daten im Auftrag verarbeiten.

Beispiele:

- Cloud-Anbieter
- externer Hosting-Dienstleister
- Lohnabrechnungsdienstleister

Dann muss geprüft werden, ob eine **Auftragsverarbeitung** vorliegt und ob ein entsprechender Vertrag nach Art. 28 DSGVO erforderlich ist.

Wichtig ist: Die Verantwortung verschwindet nicht einfach, nur weil ein externer Dienstleister eingesetzt wird.

---

## 10. Datenschutzverletzungen

Eine Datenschutzverletzung kann zum Beispiel vorliegen, wenn personenbezogene Daten:

- verloren gehen,
- an falsche Empfänger gesendet werden,
- gestohlen werden,
- unbefugt eingesehen werden,
- durch einen Angriff offengelegt werden.

### Meldepflicht an die Aufsichtsbehörde

Nach Art. 33 DSGVO muss eine meldepflichtige Verletzung grundsätzlich **unverzüglich und möglichst binnen 72 Stunden nach Bekanntwerden** an die zuständige Aufsichtsbehörde gemeldet werden.

Eine Meldung ist nicht in jedem Fall erforderlich, wenn die Verletzung voraussichtlich nicht zu einem Risiko für die Rechte und Freiheiten natürlicher Personen führt.

### Benachrichtigung der betroffenen Person

Bei voraussichtlich hohem Risiko kann nach Art. 34 DSGVO zusätzlich eine Benachrichtigung der betroffenen Personen erforderlich sein.

### Mögliche Bußgelder

Bei schweren Verstößen können sehr hohe Geldbußen entstehen. In bestimmten Fällen reicht der obere Rahmen bis zu **20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes**, je nachdem, welcher Betrag höher ist.

---

## 11. Eingabemaske auf Datenschutz prüfen

Typische Prüfungsaufgabe:

Eine App verlangt bei einer einfachen Terminbuchung:

- Name
- E-Mail
- Telefonnummer
- Geburtsdatum
- Familienstand
- Religionszugehörigkeit

Wie gehst du vor?

### Schritt 1: Zweck bestimmen

Wofür werden die Daten benötigt? Für eine Terminbuchung werden vermutlich Name und eine Kontaktmöglichkeit benötigt.

### Schritt 2: Datenminimierung prüfen

Familienstand und Religionszugehörigkeit wirken für den Zweck nicht erforderlich.

### Schritt 3: Rechtsgrundlage prüfen

Für erforderliche Daten kann zum Beispiel die Vertragsanbahnung oder Vertragserfüllung relevant sein. Für zusätzliche optionale Zwecke braucht es ggf. eine andere Rechtsgrundlage.

### Schritt 4: Transparenz prüfen

Der Nutzer muss verstehen können, warum welche Daten erhoben werden.

### Schritt 5: Schutz und Löschung prüfen

Berechtigungen, Speicherdauer und Schutzmaßnahmen müssen festgelegt sein.

---

## 12. Weitere prüfungsrelevante Aspekte

### Privacy by Design und Privacy by Default

**Privacy by Design** bedeutet, dass Datenschutz bereits bei der Planung und Entwicklung eines Systems berücksichtigt wird und nicht erst nachträglich ergänzt wird.

**Privacy by Default** bedeutet, dass die Voreinstellungen eines Systems standardmäßig möglichst datenschutzfreundlich sind. Ohne zusätzliche Entscheidung des Nutzers sollen also nur die für den jeweiligen Zweck notwendigen Daten verarbeitet und freigegeben werden.

**Beispiel:** Eine neue App erfasst bei der Registrierung nur die zwingend benötigten Profildaten. Optionale Datenfelder sind leer und zusätzliche Freigaben nicht vorausgewählt.

> **Merksatz:** Privacy by Design = Datenschutz von Anfang an mitdenken. Privacy by Default = datenschutzfreundliche Grundeinstellungen.

### Datenschutz-Folgenabschätzung (DSFA)

Wenn eine geplante Verarbeitung voraussichtlich ein **hohes Risiko für die Rechte und Freiheiten natürlicher Personen** verursacht, muss geprüft werden, ob vor Beginn der Verarbeitung eine Datenschutz-Folgenabschätzung erforderlich ist. Dabei werden die geplante Verarbeitung und ihre Risiken bewertet und geeignete Schutzmaßnahmen festgelegt.

Typische Hinweise in einer Prüfungsaufgabe können sein:

- neue oder besonders eingriffsintensive Technologien,
- umfangreiche Verarbeitung besonders sensibler Daten,
- systematische Überwachung oder Profilbildung mit hohem Risiko.

### Datenhoheit und Schutzrechte

Bei digitalen Geschäftsmodellen reicht die Frage „Dürfen wir personenbezogene Daten verarbeiten?“ allein nicht immer aus. Zusätzlich kann wichtig sein, **wer über Daten verfügen, sie weitergeben oder wirtschaftlich nutzen darf** und welche vertraglichen oder gesetzlichen Schutzrechte betroffen sind.

Mögliche Aspekte sind zum Beispiel:

- vertraglich vereinbarte Nutzungsrechte,
- Urheberrechte an Inhalten oder Software,
- Schutz von Geschäftsgeheimnissen,
- Regelungen zur Datenportabilität und Herausgabe beim Anbieterwechsel.

**Prüfungslogik:** Datenschutz, Datenhoheit und Schutzrechte können gleichzeitig relevant sein, beantworten aber unterschiedliche Fragen.

---

## Kurz zusammengefasst

- Personenbezogene Daten beziehen sich auf eine identifizierte oder identifizierbare natürliche Person.
- Art. 9 DSGVO schützt besondere Kategorien besonders stark.
- Jede Verarbeitung braucht einen **Zweck** und eine **Rechtsgrundlage**.
- **Datenminimierung** bedeutet: nur notwendige Daten verarbeiten.
- Betroffene haben Rechte auf Auskunft, Berichtigung, Löschung usw.
- **TOMs** schützen personenbezogene Daten technisch und organisatorisch.
- Pseudonymisierte Daten bleiben personenbezogen, wenn die Zuordnung wieder möglich ist.
- Datenschutzverletzungen können Melde- und Benachrichtigungspflichten auslösen.
- **Privacy by Design/Default** berücksichtigt Datenschutz bereits bei Gestaltung und Voreinstellungen.
- Bei hohem Risiko kann eine **DSFA** erforderlich sein.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Begriff | „Erläutern Sie personenbezogene Daten und nennen Sie 2 Beispiele.“ |
| Grundsätze | „Nennen und erläutern Sie 3 Grundsätze der DSGVO.“ |
| Eingabemaske | „Beurteilen Sie die abgefragten Daten unter dem Gesichtspunkt der Datenminimierung.“ |
| Rechtsgrundlage | „Nennen Sie eine mögliche Rechtsgrundlage für die Verarbeitung.“ |
| Betroffenenrechte | „Nennen Sie 3 Rechte betroffener Personen.“ |
| TOMs | „Nennen Sie je 2 technische und organisatorische Maßnahmen.“ |
| Privacy by Default | „Nennen Sie eine datenschutzfreundliche Voreinstellung für die Anwendung.“ |
| DSFA | „Begründen Sie, warum für die geplante Datenverarbeitung eine DSFA zu prüfen ist.“ |
| Datenpanne | „Beschreiben Sie das Vorgehen nach Bekanntwerden einer Datenschutzverletzung.“ |

---
<div class="kdm-practice" data-topic="p12/dsgvo"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>