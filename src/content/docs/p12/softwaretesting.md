---
title: Softwaretesting & Debugging
description: Blackbox, Whitebox, TDD, Unittests, Schreibtischtest, Debugger
sidebar:
  badge:
    text: 5/7 Prüfungen
    variant: caution
---

## 1. Blackbox- vs. Whitebox-Testing

| Kriterium | Blackbox-Testing | Whitebox-Testing |
|---|---|---|
| **Quellcode-Zugriff** | Kein Einblick in den Code | Code ist bekannt und wird analysiert |
| **Perspektive** | Nutzerperspektive | Entwicklerperspektive |
| **Testet** | Externe Funktionalität (Eingabe → Ausgabe) | Interne Logik, Schleifen, Bedingungen |
| **Ziel** | Entspricht das System den Anforderungen? | Hohe Testabdeckung (Code Coverage) |
| **Durchgeführt von** | Tester, Auftraggeber, QA-Team | Entwickler |
| **Basis** | Anforderungen, Spezifikationen | Quellcode, Algorithmen |

---

## 2. Weitere Test-Arten

| Testverfahren | Beschreibung |
|---|---|
| **UAT (User Acceptance Test)** | Abnahmetest durch den Auftraggeber/Endnutzer vor Go-Live |
| **Integrationstest** | Zusammenspiel mehrerer Module |
| **Regressionstest** | Sicherstellt, dass Änderungen keine bestehenden Funktionen brechen |
| **Lasttest / Stresstest** | Verhalten unter hoher Last testen |
| **Penetrationstest** | Sicherheitslücken gezielt suchen |

### UAT-Voraussetzungen (W24):
- Software ist vollständig entwickelt und intern getestet
- Testumgebung entspricht der Produktivumgebung
- Testfälle und Abnahmekriterien sind definiert
- Auftraggeber/Schlüsselnutzer sind verfügbar
- Dokumentation liegt vor

---

## 3. TDD — Test-Driven Development

> Erst Tests schreiben, dann Code entwickeln.

**Red-Green-Refactor-Zyklus:**

1. **Red** — Test schreiben → schlägt fehl (Funktion existiert noch nicht)
2. **Green** — Minimalen Code schreiben → Test besteht
3. **Refactor** — Code verbessern ohne Funktionsänderung (Tests müssen weiter bestehen)

**Vorteile:**
- Fehler werden früh erkannt
- Bessere Codequalität (nur was gebraucht wird, wird geschrieben)
- Tests dienen als lebende Dokumentation
- Sicheres Refactoring möglich

---

## 4. Unittests

**Merkmale:**
- Prüfen einzelne Funktionen / Module **isoliert**
- Testen verschiedene Parameterkombinationen (Normalfall, Grenzfall, Fehlerfall)
- **Automatisiert** ausführbar — können bei jeder Codeänderung laufen (CI/CD)
- Schnell (keine Abhängigkeiten zu Datenbanken, Netzwerk)
- Dokumentieren das **erwartete Verhalten**

**Beispiel:**
```python
def test_berechne_mwst():
    assert berechne_mwst(100, 19) == 19.0
    assert berechne_mwst(0, 19) == 0.0
    assert berechne_mwst(100, 0) == 0.0
```

---

## 5. Schreibtischtest (Dry Run)

Manuelles Durchspielen eines Algorithmus auf Papier — ohne Computer.

**Vorgehen:**
1. Startwerte der Variablen notieren
2. Jede Zeile des Codes Schritt für Schritt ausführen
3. Variablenwerte nach jedem Schritt aktualisieren
4. Erwartetes Ergebnis mit tatsächlichem Ergebnis vergleichen

**Vorteil:** Logikfehler früh erkennen, kein Computer nötig, versteht den Algorithmus tief

---

## 6. Debugger

Ein Debugger ist ein Werkzeug, das Entwicklern hilft, Fehler im Code zur Laufzeit zu finden.

**Kernfunktionen:**

| Funktion | Beschreibung |
|---|---|
| **Breakpoints** | Programm an bestimmter Zeile anhalten |
| **Step Into** | Nächste Zeile ausführen, in Funktionsaufrufe hineinsteigen |
| **Step Over** | Nächste Zeile ausführen, Funktionen überspringen |
| **Step Out** | Aktuelle Funktion verlassen |
| **Watch / Variables** | Variablenwerte in Echtzeit beobachten und ändern |
| **Call Stack** | Aufrufkette der Funktionen anzeigen |

**Zweck:** Logikfehler, falsche Variablenwerte und unererwartetes Verhalten finden

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Vergleich | „Erläutern Sie je 2 Merkmale von Blackbox- und Whitebox-Testing." |
| TDD | „Beschreiben Sie die Idee des Test-Driven Development." |
| Unittests | „Nennen Sie 2 wesentliche Merkmale von Unittests." |
| Schreibtischtest | „Führen Sie einen Schreibtischtest für den folgenden Pseudocode durch." |
| Debugger | „Erläutern Sie den Zweck eines Debuggers. Nennen Sie 3 Funktionen." |
