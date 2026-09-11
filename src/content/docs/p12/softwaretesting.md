---
title: Softwaretesting & Debugging
description: Blackbox, Whitebox, TDD, Unittests, Schreibtischtest, Debugger
sidebar:
  badge:
    text: 5/7 Prüfungen
    variant: caution
---

## Warum wird Software getestet?

Software kann auch dann Fehler enthalten, wenn sie sich zunächst „richtig“ anfühlt. Deshalb wird sie systematisch getestet.

Testing soll zum Beispiel prüfen:

- erfüllt die Software die Anforderungen?
- funktionieren einzelne Funktionen korrekt?
- arbeiten mehrere Module zusammen?
- treten bei Grenzwerten Fehler auf?
- funktioniert eine Änderung, ohne andere Funktionen zu beschädigen?

In Prüfungsaufgaben ist wichtig, verschiedene Testarten nicht nur auswendig zu kennen, sondern **dem richtigen Zweck zuordnen zu können**.

---

## 1. Testfall — was gehört dazu?

Ein Testfall beschreibt, **was geprüft wird und welches Ergebnis erwartet wird**.

Typische Bestandteile:

- Ausgangssituation/Voraussetzungen
- Eingabedaten
- auszuführende Schritte
- erwartetes Ergebnis
- tatsächliches Ergebnis
- Bewertung: bestanden/nicht bestanden

### Beispiel

Funktion: Rabatt berechnen.

```text
Eingabe: Warenwert 100 €, Rabatt 10 %
Erwartet: 90 € Endpreis
Tatsächlich: 90 €
Ergebnis: bestanden
```

Ein guter Test prüft nicht nur den Normalfall, sondern auch Grenz- und Fehlerfälle.

---

## 2. Normalfall, Grenzfall und Fehlerfall

### Normalfall

Typische, gültige Eingabe.

Beispiel: Alter = 35 bei erlaubtem Bereich 18–67.

### Grenzfall

Wert direkt an einer Grenze.

Beispiel: Alter = 18 oder 67.

### Fehlerfall

Ungültige Eingabe.

Beispiel: Alter = -5 oder Text statt Zahl.

### Warum sind Grenzfälle wichtig?

Viele Programmierfehler entstehen bei Bedingungen wie `<`, `<=`, `>` und `>=`.

Beispiel:

```text
Zulässig: ab 18 Jahren
```

Wenn der Code versehentlich `alter > 18` statt `alter >= 18` verwendet, funktioniert 18 als Grenzwert falsch.

---

## 3. Blackbox-Testing

Beim **Blackbox-Test** betrachtet der Tester die Software von außen.

Der Quellcode muss nicht bekannt sein.

Man prüft:

> Welche Ausgabe entsteht bei einer bestimmten Eingabe?

### Beispiel

Eine Login-Funktion wird getestet:

- richtige Zugangsdaten → Anmeldung erfolgreich
- falsches Passwort → Fehlermeldung
- leeres Passwort → Eingabe wird abgelehnt

Der Tester muss dafür nicht wissen, wie der Login intern programmiert wurde.

### Typischer Fokus

- Anforderungen
- Funktionalität
- Ein- und Ausgaben
- Nutzerperspektive

---

## 4. Whitebox-Testing

Beim **Whitebox-Test** kennt der Tester den internen Aufbau bzw. Quellcode.

Geprüft werden zum Beispiel:

- Bedingungen
- Schleifen
- Verzweigungen
- interne Pfade
- Codeabdeckung

### Beispiel

```python
if alter >= 18:
    freigabe = True
else:
    freigabe = False
```

Beim Whitebox-Test kann gezielt geprüft werden, ob beide Zweige mindestens einmal durchlaufen werden.

### Vergleich

| Kriterium | Blackbox | Whitebox |
|---|---|---|
| **Code bekannt?** | nicht erforderlich | ja |
| **Perspektive** | Nutzer/Anforderung | Entwickler/Code |
| **Fokus** | Verhalten von außen | interne Logik |
| **Grundlage** | Spezifikation/Testfälle | Quellcode und Struktur |

> **Merksatz:** Blackbox = Was kommt raus? Whitebox = Wie läuft es innen?

---

## 5. Unit-Test

Ein **Unit-Test** prüft eine kleine, möglichst isolierte Einheit des Programms, zum Beispiel eine Funktion oder Methode.

### Beispiel

```python
def berechne_mwst(netto, steuersatz):
    return netto * steuersatz / 100
```

Mögliche Tests:

```python
assert berechne_mwst(100, 19) == 19
assert berechne_mwst(0, 19) == 0
assert berechne_mwst(100, 0) == 0
```

### Eigenschaften von Unit-Tests

- klein
- schnell
- automatisierbar
- wiederholbar
- möglichst unabhängig von externen Systemen

### Warum isoliert testen?

Wenn ein Unit-Test zusätzlich von Datenbank, Netzwerk und mehreren Fremdsystemen abhängt, ist schwer zu erkennen, welche Komponente den Fehler verursacht hat.

---

## 6. Integrationstest

Ein **Integrationstest** prüft das Zusammenspiel mehrerer Komponenten.

Beispiel:

- Webanwendung sendet Daten an API
- API speichert Daten in Datenbank

Jede Komponente kann einzeln funktionieren, trotzdem können Schnittstellenfehler auftreten.

Typische Fehler:

- falsches Datenformat
- falsche Feldnamen
- Authentifizierungsprobleme
- fehlerhafte Schnittstellenkonfiguration

> **Merksatz:** Unit = einzelner Baustein. Integration = Zusammenspiel mehrerer Bausteine.

---

## 7. Systemtest

Beim Systemtest wird das vollständige System als Ganzes geprüft.

Dabei kann zum Beispiel getestet werden:

- funktionale Anforderungen
- Performance
- Sicherheit
- Benutzerabläufe
- Schnittstellen im Gesamtsystem

Der Systemtest liegt damit auf einer höheren Ebene als Unit- und Integrationstests.

---

## 8. UAT — User Acceptance Test

Der **User Acceptance Test** ist ein Abnahme- bzw. Akzeptanztest aus Sicht des Auftraggebers oder der späteren Nutzer.

Die Kernfrage lautet:

> Erfüllt die Lösung die fachlichen Anforderungen so, dass sie eingesetzt werden kann?

### Beispiel

Ein neues Ticketsystem ist technisch fertig. Nun prüfen Key User typische reale Abläufe:

- Ticket anlegen
- Priorität ändern
- Bearbeiter zuweisen
- Ticket abschließen

Wenn definierte Abnahmekriterien erfüllt sind, kann die Lösung freigegeben werden.

### Typische Voraussetzungen

- Software wurde intern getestet
- Testfälle und Abnahmekriterien sind definiert
- geeignete Testumgebung steht bereit
- Key User/Auftraggeber stehen zur Verfügung
- relevante Dokumentation ist vorhanden

---

## 9. Regressionstest

Ein **Regressionstest** prüft, ob eine Änderung bestehende Funktionen unbeabsichtigt beschädigt hat.

### Beispiel

Ein Entwickler ändert die Rabattberechnung.

Danach funktionieren plötzlich Rechnungen ohne Rabatt nicht mehr korrekt.

Ein Regressionstest würde bereits vorhandene Testfälle erneut ausführen und diesen Nebeneffekt erkennen.

Regressionstests sind deshalb besonders wichtig bei:

- Updates
- Bugfixes
- Refactoring
- neuen Features

---

## 10. Lasttest und Stresstest

### Lasttest

Prüft das System unter einer erwarteten oder erhöhten Belastung.

Beispiel:

Kann ein Webshop 5.000 gleichzeitige Nutzer verarbeiten?

### Stresstest

Belastet das System bewusst über die erwartete Grenze hinaus.

Ziel ist herauszufinden:

- wann das System an Grenzen stößt,
- wie es sich beim Überlasten verhält,
- ob es kontrolliert ausfällt und sich erholt.

> **Merksatz:** Lasttest = erwartete hohe Last. Stresstest = bewusst über die Grenze hinaus.

---

## 11. Penetrationstest

Bei einem **Penetrationstest** werden Systeme kontrolliert auf Sicherheitslücken untersucht.

Dabei werden Angriffsmethoden unter festgelegten Bedingungen nachgestellt.

Ziel:

- Schwachstellen finden,
- Risiko bewerten,
- Maßnahmen ableiten.

Ein Penetrationstest ist nicht dasselbe wie ein normaler Funktionstest.

---

## 12. TDD — Test-Driven Development

Bei **Test-Driven Development** werden Tests vor oder sehr früh mit dem eigentlichen Produktivcode entwickelt.

Der bekannte Ablauf heißt:

### Red

Einen Test für die gewünschte Funktion schreiben. Der Test schlägt zunächst fehl, weil die Funktion noch nicht oder noch nicht korrekt existiert.

### Green

Nur so viel Code schreiben, dass der Test erfolgreich wird.

### Refactor

Code verbessern, ohne das Verhalten zu verändern. Die Tests müssen danach weiterhin bestehen.

```text
RED → GREEN → REFACTOR → nächster Test
```

### Beispiel

Gewünschte Funktion: `addiere(2, 3)` soll `5` liefern.

1. Test schreiben.
2. Test schlägt fehl.
3. Funktion implementieren.
4. Test wird grün.
5. Code verbessern.

### Vorteile

- Fehler werden früh sichtbar
- Anforderungen werden in Tests konkretisiert
- automatisierte Tests entstehen kontinuierlich
- Refactoring wird sicherer

> **Prüfungstipp:** Bei TDD ist die Reihenfolge entscheidend: **Test zuerst, dann Implementierung**.

---

## 13. Schreibtischtest / Dry Run

Ein **Schreibtischtest** bedeutet, einen Algorithmus manuell Schritt für Schritt durchzugehen.

Das ist besonders sinnvoll bei Schleifen und Variablenänderungen.

### Beispiel

Pseudocode:

```text
summe = 0
für i = 1 bis 3
    summe = summe + i
```

Tabelle:

| Schritt | i | summe vorher | summe nachher |
|---|---:|---:|---:|
| Start | — | — | 0 |
| 1 | 1 | 0 | 1 |
| 2 | 2 | 1 | 3 |
| 3 | 3 | 3 | 6 |

Ergebnis: `summe = 6`

### Vorgehen in der Prüfung

1. Startwerte notieren.
2. Code Zeile für Zeile verfolgen.
3. Nach jeder Änderung neuen Variablenwert eintragen.
4. Schleifenbedingung genau prüfen.
5. Endergebnis bestimmen.

---

## 14. Debugger

Ein **Debugger** hilft dabei, ein Programm während der Ausführung zu untersuchen.

### Breakpoint

Hält das Programm an einer bestimmten Stelle an.

### Step Into

Führt den nächsten Schritt aus und geht in aufgerufene Funktionen hinein.

### Step Over

Führt die nächste Zeile aus, ohne eine aufgerufene Funktion im Detail zu betreten.

### Step Out

Führt die aktuelle Funktion zu Ende und springt zurück zum Aufrufer.

### Watch / Variables

Zeigt aktuelle Variablenwerte.

### Call Stack

Zeigt, welche Funktionen nacheinander aufgerufen wurden.

### Beispiel

Ein Programm liefert bei einem Preis von 100 € plötzlich 1.900 € Mehrwertsteuer.

Mit einem Debugger kann man an der Berechnung anhalten und prüfen, welche Werte `netto` und `steuersatz` tatsächlich enthalten.

---

## 15. Fehlerarten verstehen

### Syntaxfehler

Der Code verletzt die Regeln der Programmiersprache.

Beispiel: fehlende Klammer.

### Laufzeitfehler

Der Fehler tritt während der Ausführung auf.

Beispiel: Division durch null.

### Logikfehler

Das Programm läuft, liefert aber ein falsches Ergebnis.

Beispiel:

```text
Rabatt = Preis × 10
```

statt

```text
Rabatt = Preis × 0,10
```

Gerade Logikfehler sind oft schwieriger zu erkennen, weil das Programm technisch „funktioniert“.

---

## 16. Teststrategie in einer Prüfungsaufgabe

Beispiel:

Ein Unternehmen entwickelt eine Reservierungs-App.

Welche Tests könnten sinnvoll sein?

- **Unit-Test:** Berechnung der Reservierungsgebühr
- **Integrationstest:** App ↔ Backend ↔ Datenbank
- **Systemtest:** kompletter Buchungsprozess
- **UAT:** Mitarbeiter/Kunde testet reale Geschäftsabläufe
- **Lasttest:** viele gleichzeitige Buchungen
- **Penetrationstest:** Sicherheitsprüfung
- **Regressionstest:** nach einem Update alte Funktionen erneut prüfen

So lässt sich jede Testart mit einem konkreten Zweck verbinden.

---

## Kurz zusammengefasst

- **Blackbox** testet Verhalten von außen, **Whitebox** interne Logik.
- **Unit-Test** prüft eine kleine Einheit, **Integrationstest** das Zusammenspiel.
- **UAT** prüft, ob die Lösung fachlich abgenommen werden kann.
- **Regressionstest** schützt vor Nebenwirkungen von Änderungen.
- **TDD:** Red → Green → Refactor.
- **Schreibtischtest** verfolgt Variablen manuell Schritt für Schritt.
- Ein **Debugger** untersucht ein laufendes Programm.
- Testfälle sollten Normal-, Grenz- und Fehlerfälle berücksichtigen.

---

## 7. Teststufen

| Teststufe | Was wird geprüft? |
|---|---|
| **Unit-/Komponententest** | einzelne Funktion/Klasse/Modul |
| **Integrationstest** | Zusammenspiel mehrerer Komponenten/Schnittstellen |
| **Systemtest** | Gesamtsystem gegen technische/fachliche Anforderungen |
| **Abnahmetest / UAT** | Erfüllung der Anforderungen aus Kundensicht |

Je früher ein Fehler entdeckt wird, desto günstiger ist er meist zu beheben.

## 8. Guter Testfall und Akzeptanzkriterium

Ein reproduzierbarer Testfall enthält mindestens:
- eindeutige Testfall-ID/Ziel,
- Vorbedingungen,
- Testdaten,
- Schritte,
- erwartetes Ergebnis,
- tatsächliches Ergebnis und Status.

**Akzeptanzkriterium:** messbare Bedingung, wann eine Anforderung als erfüllt gilt. Beispiel: „Nach drei falschen Loginversuchen wird das Konto für 15 Minuten gesperrt.“

## 9. Fehler-Schweregrad vs. Priorität

**Severity/Schweregrad:** Wie stark ist die technische/fachliche Auswirkung?  
**Priority/Priorität:** Wie schnell soll der Fehler bearbeitet werden?

Ein Rechtschreibfehler auf der Startseite kann technisch „gering“, aber kurz vor einer wichtigen Präsentation dennoch „hoch priorisiert“ sein.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Vergleich | „Erläutern Sie den Unterschied zwischen Blackbox- und Whitebox-Testing.“ |
| Testart auswählen | „Nennen Sie eine geeignete Testart für das Szenario und begründen Sie.“ |
| TDD | „Beschreiben Sie den Red-Green-Refactor-Zyklus.“ |
| Unit-Test | „Nennen Sie wesentliche Merkmale eines Unit-Tests.“ |
| UAT | „Nennen Sie Voraussetzungen für einen User Acceptance Test.“ |
| Schreibtischtest | „Führen Sie den Algorithmus schrittweise aus und dokumentieren Sie die Variablenwerte.“ |
| Debugger | „Nennen und erläutern Sie Funktionen eines Debuggers.“ |

---
<div class="kdm-practice" data-topic="p12/softwaretesting"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
