---
title: IT-Sicherheit & Netzwerk
description: Schutzziele, 2FA, Verschlüsselung, Ransomware, Phishing, IPv6
sidebar:
  badge:
    text: 4/7 Prüfungen
    variant: note
---

## Worum geht es bei IT-Sicherheit?

IT-Sicherheit soll Systeme, Daten und Geschäftsprozesse vor Schäden schützen. Dabei geht es nicht nur um Hackerangriffe. Auch Fehlbedienung, technische Defekte oder falsche Berechtigungen können Sicherheitsprobleme verursachen.

Für Prüfungsaufgaben ist wichtig, dass du nicht nur Maßnahmen aufzählst, sondern verstehst, **welches Risiko durch welche Maßnahme reduziert wird**.

Beispiel:

- Verschlüsselung schützt vor unbefugtem Mitlesen.
- Backups helfen bei Datenverlust.
- 2FA reduziert das Risiko gestohlener Passwörter.
- Schulungen reduzieren menschliche Fehler und Phishing-Erfolge.

---

## 1. Die Schutzziele der IT-Sicherheit

Die drei klassischen Schutzziele werden oft als **CIA-Triade** bezeichnet.

### Vertraulichkeit — Confidentiality

Daten dürfen nur von berechtigten Personen eingesehen werden.

Beispiel:

Ein Mitarbeiter kann auf Gehaltsdaten zugreifen, obwohl er dafür keine Berechtigung besitzt.

Mögliche Schutzmaßnahmen:

- Berechtigungskonzepte
- Verschlüsselung
- Authentifizierung
- Need-to-know-Prinzip

### Integrität — Integrity

Daten und Systeme dürfen nicht unbemerkt oder unberechtigt verändert werden.

Beispiel:

Ein Angreifer ändert Kontodaten in einer Überweisung.

Mögliche Schutzmaßnahmen:

- digitale Signaturen
- Hashwerte
- Zugriffsschutz
- Protokollierung

### Verfügbarkeit — Availability

Systeme und Daten müssen dann nutzbar sein, wenn sie benötigt werden.

Beispiel:

Ein DDoS-Angriff legt einen Onlineshop lahm.

Mögliche Schutzmaßnahmen:

- Redundanz
- Backups
- Notfallkonzepte
- Lastverteilung
- Schutz vor DDoS

### Authentizität

Authentizität bedeutet, dass die Echtheit einer Person, Nachricht oder Quelle überprüfbar ist.

Beispiel:

Eine E-Mail wirkt so, als käme sie vom Geschäftsführer, wurde aber von einem Angreifer gefälscht.

| Schutzziel | Leitfrage |
|---|---|
| **Vertraulichkeit** | Wer darf die Information sehen? |
| **Integrität** | Ist die Information unverändert und korrekt? |
| **Verfügbarkeit** | Ist das System erreichbar, wenn es gebraucht wird? |
| **Authentizität** | Ist die Identität bzw. Herkunft echt? |

### Prüfungslogik

Wenn du ein Beispiel einem Schutzziel zuordnen sollst, frage dich, **was genau verletzt wurde**: Zugriff, Veränderung, Ausfall oder Echtheit.

---

## 2. Authentifizierung und Zwei-Faktor-Authentifizierung

Authentifizierung prüft, ob eine Person wirklich diejenige ist, für die sie sich ausgibt.

Dafür gibt es drei klassische Faktorgruppen.

### Wissen

Etwas, das man weiß.

Beispiele:

- Passwort
- PIN

### Besitz

Etwas, das man besitzt.

Beispiele:

- Smartphone
- Smartcard
- Hardware-Token

### Biometrie

Etwas, das man ist.

Beispiele:

- Fingerabdruck
- Gesicht
- Iris

### Wann ist es echte 2FA?

Zwei-Faktor-Authentifizierung bedeutet, dass **zwei unterschiedliche Faktorarten** kombiniert werden.

Beispiel:

- Passwort = Wissen
- OTP auf Smartphone = Besitz

Das ist echte 2FA.

Zwei verschiedene Passwörter wären dagegen keine echte Zwei-Faktor-Authentifizierung, weil beide zum Faktor „Wissen“ gehören.

> **Merksatz:** Zwei Faktoren = zwei verschiedene Kategorien.

### Warum hilft 2FA?

Wenn ein Passwort durch Phishing gestohlen wird, fehlt dem Angreifer noch der zweite Faktor. Dadurch wird ein einzelnes kompromittiertes Passwort weniger gefährlich.

---

## 3. Symmetrische und asymmetrische Verschlüsselung

### Symmetrische Verschlüsselung

Bei symmetrischer Verschlüsselung wird derselbe Schlüssel zum Ver- und Entschlüsseln verwendet.

```text
Sender -- gemeinsamer Schlüssel --> verschlüsselte Daten
Empfänger -- derselbe Schlüssel --> Klartext
```

Vorteil:

- schnell und effizient

Problem:

- der gemeinsame Schlüssel muss sicher ausgetauscht werden

### Asymmetrische Verschlüsselung

Hier gibt es ein Schlüsselpaar:

- **Public Key** — darf öffentlich sein
- **Private Key** — bleibt geheim

Wenn eine Nachricht mit dem Public Key des Empfängers verschlüsselt wird, kann sie mit dem zugehörigen Private Key entschlüsselt werden.

### Schritt für Schritt

1. Empfänger erzeugt Public und Private Key.
2. Public Key wird verteilt.
3. Sender verschlüsselt die Nachricht mit dem Public Key.
4. Die verschlüsselte Nachricht wird übertragen.
5. Empfänger entschlüsselt sie mit seinem Private Key.

### Warum nutzt man hybride Verschlüsselung?

Asymmetrische Verfahren sind vergleichsweise rechenintensiv. Deshalb werden in der Praxis oft beide Verfahren kombiniert:

1. asymmetrisch: sicheren Sitzungsschlüssel austauschen,
2. symmetrisch: große Datenmengen schnell verschlüsseln.

Das nennt man **hybride Verschlüsselung**.

---

## 4. Hashing und Verschlüsselung unterscheiden

Diese Begriffe werden häufig verwechselt.

### Verschlüsselung

Ziel: Daten geheim halten.

Verschlüsselte Daten sollen mit dem passenden Schlüssel wieder entschlüsselt werden können.

### Hashing

Ein Hashwert ist eine Art digitaler Fingerabdruck einer Datenmenge.

Eigenschaften:

- gleiche Eingabe → gleicher Hashwert
- kleine Änderung → anderer Hashwert
- Hashing ist grundsätzlich nicht als „Rückwärtsentschlüsselung“ gedacht

Anwendung:

- Integritätsprüfung
- Passwortspeicherung mit geeigneten Passwort-Hashverfahren

### Beispiel

Eine heruntergeladene Datei hat einen veröffentlichten Hashwert. Nach dem Download wird der Hash erneut berechnet. Stimmen beide Werte überein, spricht das dafür, dass die Datei nicht verändert wurde.

---

## 5. Phishing und Social Engineering

### Social Engineering

Social Engineering nutzt menschliche Schwächen statt ausschließlich technische Schwachstellen.

Der Angreifer versucht zum Beispiel, Vertrauen, Angst oder Zeitdruck auszunutzen.

### Phishing

Phishing ist eine Form von Social Engineering. Dabei sollen Nutzer über gefälschte Nachrichten oder Webseiten zur Preisgabe sensibler Informationen gebracht werden.

Typische Merkmale:

- künstlicher Zeitdruck
- ungewöhnliche Absenderadresse
- Link zu einer fremden Domain
- unerwartete Anhänge
- Aufforderung zur Eingabe von Zugangsdaten
- ungewöhnliche Sprache oder Gestaltung

### Beispiel

Eine E-Mail behauptet:

> „Ihr Konto wird in 30 Minuten gesperrt. Melden Sie sich sofort über diesen Link an.“

Der Link führt zu einer gefälschten Login-Seite.

### Schutzmaßnahmen

- Absender und Domain prüfen
- Links vor dem Öffnen kontrollieren
- 2FA verwenden
- Mitarbeiterschulungen
- technische E-Mail-Filter
- verdächtige Nachrichten melden

---

## 6. Ransomware

**Ransomware** ist Schadsoftware, die häufig Daten verschlüsselt oder Systeme blockiert und anschließend Lösegeld fordert.

### Typischer Ablauf

1. Angreifer gelangt ins System, z. B. über Phishing oder ungepatchte Software.
2. Schadsoftware breitet sich aus.
3. Dateien oder Systeme werden verschlüsselt.
4. Betrieb wird gestört.
5. Lösegeldforderung erscheint.

### Schutzmaßnahmen

- regelmäßige Patches
- restriktive Berechtigungen
- Endpoint-Schutz
- Netzwerksegmentierung
- Awareness-Schulungen
- getestete Backups
- Offline- oder anderweitig geschützte Sicherungen

> **Prüfungstipp:** „Backup vorhanden“ reicht nicht immer als Antwort. Ein Backup, das dieselbe Ransomware ebenfalls verschlüsselt, hilft wenig. Die Sicherung muss so gestaltet sein, dass sie im Ernstfall verfügbar bleibt.

---

## 7. Incident Response

Ein **Incident Response Plan** beschreibt, wie ein Unternehmen auf Sicherheitsvorfälle reagiert.

Typische Phasen:

### 1. Erkennen

- Vorfall feststellen
- Umfang bewerten
- Verantwortliche informieren

### 2. Eindämmen

- betroffene Systeme isolieren
- weitere Ausbreitung verhindern

### 3. Beseitigen

- Schadsoftware entfernen
- Sicherheitslücke schließen
- kompromittierte Zugänge sperren

### 4. Wiederherstellen

- Systeme aus sauberen Backups wiederherstellen
- Funktionen prüfen
- überwachen, ob der Angriff erneut auftritt

### 5. Nachbereitung

- Ursache analysieren
- Lessons Learned dokumentieren
- Maßnahmen verbessern

Ein IRP enthält außerdem typischerweise:

- Rollen und Verantwortlichkeiten
- Kontaktlisten
- Eskalationswege
- Kommunikationsplan
- Dokumentationsvorgaben

---

## 8. ISMS — Informationssicherheits-Managementsystem

Ein **ISMS** ist kein einzelnes Sicherheitsprodukt, sondern ein systematisches Managementsystem für Informationssicherheit.

Es hilft einem Unternehmen dabei:

- Risiken zu erkennen,
- Schutzmaßnahmen auszuwählen,
- Verantwortlichkeiten festzulegen,
- Wirksamkeit zu überprüfen,
- Verbesserungen kontinuierlich umzusetzen.

### Typischer Ablauf

1. Geltungsbereich festlegen.
2. Werte und Risiken analysieren.
3. Schutzmaßnahmen auswählen.
4. Maßnahmen umsetzen.
5. Wirksamkeit prüfen.
6. Verbesserungen einleiten.

ISO/IEC 27001 ist eine bekannte internationale Norm für Informationssicherheits-Managementsysteme.

### ISB und DSB unterscheiden

**ISB — Informationssicherheitsbeauftragter:** Fokus auf Informationssicherheit insgesamt.

**DSB — Datenschutzbeauftragter:** Fokus auf den Schutz personenbezogener Daten und Datenschutzrecht.

Beide Themen überschneiden sich, sind aber nicht identisch.

---

## 9. Berechtigungen und Least Privilege

Ein wichtiges Sicherheitsprinzip ist **Least Privilege**.

Das bedeutet:

> Jeder Nutzer erhält nur die Rechte, die er für seine Aufgabe tatsächlich benötigt.

Beispiel:

Ein Praktikant braucht Leserechte auf bestimmte Dokumente, aber keine Administratorrechte auf dem Server.

Vorteile:

- geringerer Schaden bei kompromittierten Konten
- weniger Fehlbedienung
- bessere Trennung von Verantwortlichkeiten

---

## 10. Glasfaser-Anschlussarten

Die Abkürzungen unterscheiden sich danach, wie weit die Glasfaser bis zum Nutzer reicht.

| Typ | Glasfaser bis... | Reststrecke |
|---|---|---|
| **FTTC** | Verteilerkasten | meist Kupfer bis zum Gebäude |
| **FTTB** | Gebäude | interne Gebäudeverkabelung kann noch Kupfer sein |
| **FTTH** | Wohnung/Hausanschluss | Glasfaser bis zum Nutzeranschluss |
| **FTTP** | Grundstück/Gebäude | Sammelbegriff für Glasfaser bis zum Standort |

### Logik

Je näher die Glasfaser am Endgerät endet, desto kleiner wird die kupferbasierte Reststrecke.

---

## 11. Sicherheitsmaßnahmen einem Risiko zuordnen

Prüfungsaufgaben sind oft szenariobasiert.

Beispiel:

> Mitarbeiter verwenden nur Passwörter. Mehrere Konten wurden nach Phishing übernommen.

Mögliche Maßnahmen:

- 2FA einführen → reduziert Risiko bei gestohlenen Passwörtern
- Awareness-Schulung → reduziert Phishing-Erfolg
- E-Mail-Filter → blockiert einen Teil verdächtiger Nachrichten

Eine gute Antwort nennt also **Maßnahme + Wirkung**.

---

## Kurz zusammengefasst

- Die wichtigsten Schutzziele sind **Vertraulichkeit, Integrität und Verfügbarkeit**.
- 2FA kombiniert **zwei verschiedene Faktorarten**.
- Symmetrische Verschlüsselung ist schnell, asymmetrische erleichtert sicheren Schlüsselaustausch.
- Hashing dient besonders der Integritätsprüfung und ist nicht dasselbe wie Verschlüsselung.
- Phishing nutzt Täuschung, Ransomware verschlüsselt oder blockiert Daten/Systeme.
- Ein Incident Response Plan strukturiert die Reaktion auf Sicherheitsvorfälle.
- Ein ISMS organisiert Informationssicherheit systematisch.
- Least Privilege reduziert unnötige Berechtigungen.

---

## 8. Bedrohung, Schwachstelle und Risiko

Diese drei Begriffe werden oft verwechselt:
- **Bedrohung:** möglicher schädigender Auslöser, z. B. Ransomware oder Feuer.
- **Schwachstelle:** ausnutzbare Schwäche, z. B. ungepatchtes System oder schwaches Passwort.
- **Risiko:** Kombination aus Eintrittswahrscheinlichkeit und möglicher Schadenshöhe.

Eine einfache Risikobewertung nutzt z. B.:
```text
Risikowert = Eintrittswahrscheinlichkeit × Schadensausmaß
```
Danach können Risiken **vermeiden, vermindert, übertragen oder akzeptiert** werden.

## 9. Rollen- und Berechtigungskonzepte

Wichtige Prinzipien:
- **Least Privilege:** nur die Rechte, die für die Aufgabe notwendig sind.
- **Need-to-know:** Zugriff nur, wenn die Information für die Tätigkeit benötigt wird.
- **Deny by Default:** ohne ausdrückliche Freigabe kein Zugriff.
- **RBAC (Role-Based Access Control):** Rechte werden Rollen statt einzelnen Personen zugeordnet.
- **Rezertifizierung:** Berechtigungen regelmäßig überprüfen.
- **Joiner–Mover–Leaver:** Rechte bei Eintritt, Rollenwechsel und Austritt systematisch anpassen/entziehen.

## 10. Verschlüsselung, Hash und digitale Signatur

| Verfahren | Zweck | Merksatz |
|---|---|---|
| **symmetrische Verschlüsselung** | Vertraulichkeit, sehr schnell | gleicher geheimer Schlüssel zum Ver- und Entschlüsseln |
| **asymmetrische Verschlüsselung** | Vertraulichkeit/Schlüsselaustausch | Public Key + Private Key |
| **hybride Verschlüsselung** | kombiniert Geschwindigkeit + sicheren Schlüsselaustausch | z. B. TLS-Prinzip |
| **Hashfunktion** | Integrität/Prüfwert | Einwegfunktion; kein „Entschlüsseln“ |
| **digitale Signatur** | Integrität + Authentizität | Signatur mit privatem Schlüssel, Prüfung mit öffentlichem Schlüssel |

> Eine digitale Signatur verschlüsselt nicht automatisch den Inhalt. Sie bestätigt vor allem Herkunft und Unverändertheit.

## 11. Netzwerksicherheit

Typische Maßnahmen:
- **Firewall:** filtert Netzwerkverkehr nach Regeln.
- **Netzsegmentierung/VLAN:** begrenzt Kommunikationswege und Schadensausbreitung.
- **IDS:** erkennt verdächtige Aktivitäten und alarmiert.
- **IPS:** kann erkannte Angriffe zusätzlich automatisiert blockieren.
- **Patchmanagement:** schließt bekannte Schwachstellen.
- **Hardening:** unnötige Dienste/Ports deaktivieren, sichere Konfigurationen verwenden.

## 12. RPO, RTO und Wiederanlauf

Bei Notfallplanung sind zwei Ziele wichtig:
- **RPO (Recovery Point Objective):** Wie viel Datenverlust in Zeit ist maximal akzeptabel? RPO 4 h → Sicherungs-/Replikationskonzept muss höchstens etwa 4 h Datenverlust zulassen.
- **RTO (Recovery Time Objective):** Wie lange darf der Dienst maximal ausfallen, bis er wieder verfügbar sein muss?

Ein Backup ist nur dann belastbar, wenn **Wiederherstellung regelmäßig getestet** wird. Notfallpläne sollten Verantwortlichkeiten, Kommunikationswege, Ersatzsysteme und Wiederanlaufreihenfolge enthalten.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Schutzziele | „Nennen Sie 3 Schutzziele und je ein Beispiel für eine Verletzung.“ |
| 2FA | „Erläutern Sie 2FA und nennen Sie geeignete Faktorarten.“ |
| Verschlüsselung | „Beschreiben Sie asymmetrische Verschlüsselung in mehreren Schritten.“ |
| Hashing | „Erläutern Sie den Unterschied zwischen Hashing und Verschlüsselung.“ |
| Phishing | „Nennen Sie Merkmale einer Phishing-Mail und geeignete Schutzmaßnahmen.“ |
| Ransomware | „Beschreiben Sie Ransomware und nennen Sie Schutzmaßnahmen.“ |
| Incident Response | „Nennen Sie wesentliche Schritte nach einem Sicherheitsvorfall.“ |
| ISMS | „Erläutern Sie den Zweck eines ISMS.“ |

---
<div class="kdm-practice" data-topic="p12/it-sicherheit"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
