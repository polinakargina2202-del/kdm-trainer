---
title: IT-Sicherheit & Netzwerk
description: Schutzziele, 2FA, Verschlüsselung, Ransomware, Phishing, IPv6
sidebar:
  badge:
    text: 4/7 Prüfungen
    variant: note
---

## 1. Schutzziele der IT-Sicherheit (CIA)

| Schutzziel | Bedeutung | Verletzungsbeispiel |
|---|---|---|
| **Vertraulichkeit** (Confidentiality) | Daten nur für Berechtigte zugänglich | Unbefugter liest Übertragung mit |
| **Integrität** (Integrity) | Daten dürfen nicht unbemerkt verändert werden | Kundendaten werden gefälscht |
| **Verfügbarkeit** (Availability) | Systeme und Daten sind zugänglich wenn nötig | DDoS-Angriff legt Server lahm |
| **Authentizität** | Echtheit und Herkunft sind nachweisbar | Gefälschter Absender in E-Mail |

---

## 2. Zwei-Faktor-Authentifizierung (2FA)

**Drei Faktoren:**

| Faktor | Beschreibung | Beispiele |
|---|---|---|
| **Wissen** | Etwas, das man weiß | Passwort, PIN, Sicherheitsfrage |
| **Besitz** | Etwas, das man hat | Smartphone (OTP-App), Hardware-Token, Smartcard |
| **Biometrie** | Etwas, das man ist | Fingerabdruck, Gesichtserkennung, Iris-Scan |

**Warum 2FA?**
Passwörter können gestohlen werden (Phishing, Datenpanne). Mit 2FA ist der Account auch bei bekanntem Passwort geschützt.

---

## 3. Asymmetrische Verschlüsselung (5 Schritte)

1. Empfänger erzeugt **Public Key + Private Key** (Schlüsselpaar)
2. Empfänger übermittelt **Public Key** an Versender (öffentlich bekannt)
3. Versender verschlüsselt Nachricht mit dem **Public Key**
4. Versender sendet verschlüsselte Nachricht
5. Empfänger entschlüsselt mit dem **Private Key** (nur er kennt ihn)

> **Prinzip:** Was mit Public Key verschlüsselt wird, kann nur mit Private Key entschlüsselt werden.

**Nachteil:** Rechenintensiv und langsam → in der Praxis oft **hybride Verschlüsselung** (asymmetrisch für Schlüsselaustausch, symmetrisch für Datenverschlüsselung).

---

## 4. Angriffsmethoden

### Ransomware:
Schadsoftware, die Daten verschlüsselt und Lösegeld fordert.
- Verbreitung: E-Mail-Anhänge, kompromittierte Webseiten, USB-Sticks
- Schutz: Backups (offline!), Patches, Endpoint-Schutz, Nutzer schulen

### Phishing:
Täuschung zum Erhalt von Zugangsdaten durch gefälschte E-Mails/Webseiten.

**Erkennungsmerkmale:**
- Dringlichkeitsgefühl ("Ihr Konto wird gesperrt!")
- Unbekannte/verdächtige Absenderadresse
- Link führt auf fremde Domain
- Grammatikfehler, ungewöhnliche Formatierung
- Aufforderung, Passwort/Daten einzugeben

**Schutz:** Absender prüfen, Links hovern (Ziel-URL prüfen), 2FA, Awareness-Schulungen

### Social Engineering:
Manipulation von Menschen, um an vertrauliche Informationen zu gelangen.
- Methoden: Phishing, Pretexting (falsche Identität), Tailgating (physischer Zugang)

---

## 5. Incident Response Plan

Inhalte eines IRP:
- Verantwortlichkeiten + Eskalationspfade
- Kontaktliste (intern + extern: BSI, IT-Dienstleister, Strafverfolgung)
- **Sofortmaßnahmen** zur Eindämmung (Systeme isolieren)
- Kommunikationsplan (intern/extern)
- Wiederherstellungsverfahren (Backups, Recovery)
- Dokumentationspflichten (für spätere Analyse)
- Post-Incident-Review (was lief schief?)

---

## 6. ISMS — Informationssicherheits-Managementsystem

**ISO 27001:** Internationale Norm für ISMS.

**Aufbauschritte (S22):**
1. Scope definieren (was soll geschützt werden?)
2. Risikoanalyse durchführen
3. Sicherheitsmaßnahmen (Controls) auswählen
4. Maßnahmen implementieren
5. Überwachen, messen, verbessern (PDCA-Zyklus)

**ISB vs. DSB:**

| | ISB (Informationssicherheitsbeauftragter) | DSB (Datenschutzbeauftragter) |
|---|---|---|
| **Ziel** | IT-Sicherheit des Unternehmens | Schutz personenbezogener Daten |
| **Rechtsgrundlage** | ISO 27001, IT-Grundschutz (BSI) | DSGVO |

---

## 7. Glasfaser-Anschlussarten (W24)

| Typ | Glasfaser bis... | Letzte Meile |
|---|---|---|
| **FTTB** (Fiber to the Building) | Gebäude | Kupfer im Gebäude |
| **FTTC** (Fiber to the Cabinet) | Verteilerkasten | Kupfer bis Haus (VDSL) |
| **FTTH** (Fiber to the Home) | Direkt in die Wohnung | Vollständig Glasfaser |
| **FTTP** (Fiber to the Premises) | Gebäude/Grundstück | Vollständig Glasfaser |

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Schutzziele | „Nennen Sie 3 Schutzziele der IT-Sicherheit und je ein Verletzungsbeispiel." |
| 2FA | „Erläutern Sie 2FA. Nennen Sie 3 Faktoren und eine Umsetzungsmöglichkeit." |
| Verschlüsselung | „Beschreiben Sie asymmetrische Verschlüsselung in 5 Schritten." |
| Ransomware | „Was ist Ransomware? Nennen Sie 2 Schutzmaßnahmen." |
| IRP | „Welche Inhalte sollte ein Incident Response Plan enthalten?" |
