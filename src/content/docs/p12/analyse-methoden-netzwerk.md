---
title: Analyseverfahren, UML und Netzwerk-Praxis
description: SWOT, FMEA, Nutzwertanalyse, UML-Diagramme, Netzwerksegmentierung, IPv6 und Glasfaser
---

# Analyseverfahren, UML und praktische Netzwerktechnik

**Prüfungsbezug:** KIDM-Katalog 2024, S. 20–22 und 28–29. Diese Seite ergänzt die bestehenden Seiten [Projektmanagement](/kdm-trainer/p12/projektmanagement/), [Prozesse](/kdm-trainer/p12/bpmn-itsm/) und [IT-Sicherheit](/kdm-trainer/p12/it-sicherheit/).

## 1. SWOT – vier Perspektiven auseinanderhalten

**Strengths (Stärken)** und **Weaknesses (Schwächen)** liegen **im Unternehmen**. **Opportunities (Chancen)** und **Threats (Risiken)** entstehen **außerhalb** des Unternehmens.

| | Vorteilhaft | Nachteilig |
|---|---|---|
| Intern | Geschultes IT-Team | Fehlendes Know-how für neue Software |
| Extern | Wachsende Nachfrage | Neuer Konkurrent |

**Anwendung:** „Datenschutzkompetenz fehlt intern“ = Schwäche. „Neue gesetzliche Anforderungen verursachen Aufwand“ = äußeres Risiko. SWOT macht Faktoren sichtbar, ist aber noch keine fertige Entscheidung.

## 2. FMEA – Risiken systematisch priorisieren

FMEA = **Fehlermöglichkeits- und -einflussanalyse**. Typischer Ablauf:

1. Möglichen Fehler und Auswirkungen nennen.
2. **Bedeutung/Schwere (B)**, **Auftretenswahrscheinlichkeit (A)** und **Entdeckbarkeit (E)** nach vorgegebener Skala bewerten.
3. Risikoprioritätszahl berechnen.
4. Gegenmaßnahmen festlegen und erneut bewerten.

**RPZ = B × A × E.** Beispiel: B=8, A=4, E=6 → **RPZ 192**.

**Achtung:** Bei der Entdeckbarkeit steht eine **hohe Punktzahl** typischerweise für schlechte Entdeckbarkeit. RPZ ist ein Hilfsmittel zur Priorisierung; auch seltene, aber gravierende Risiken dürfen nicht verharmlost werden.

## 3. Nutzwertanalyse – qualitative Entscheidungen

Für jedes Kriterium **Gewichtung × Bewertung** berechnen und summieren. Alle Alternativen nach denselben Kriterien bewerten. Gewichtungen ergeben zusammen 100 % (oder 1,0).

| Kriterium | Gewicht | Produkt A | Produkt B |
|---|---:|---:|---:|
| Datenschutz | 50 % | 5 | 4 |
| Bedienbarkeit | 30 % | 3 | 5 |
| Support | 20 % | 4 | 3 |
| **Gesamt** | **100 %** | **4,2** | **4,1** |

Beispiel A: 0,5×5 + 0,3×3 + 0,2×4 = **4,2**. **Muss-Kriterien** müssen vor der Nutzwertanalyse geprüft werden; eine Lösung ohne erfülltes Muss-Kriterium darf nicht durch andere hohe Werte „gerettet“ werden.

## 4. UML – welches Diagramm für welche Frage?

| UML-Diagramm | Wofür? | Kernelemente |
|---|---|---|
| **Use-Case-Diagramm** | Wer nutzt welche Systemfunktion? | Akteur, Systemgrenze, Anwendungsfall |
| **Aktivitätsdiagramm** | Wie läuft eine Tätigkeit mit Verzweigungen ab? | Start/Ende, Aktivität, Entscheidung, parallele Pfade |
| **Sequenzdiagramm** | In welcher Reihenfolge tauschen Beteiligte Nachrichten aus? | Lebenslinien, Nachrichten, zeitlicher Ablauf |
| **Klassendiagramm** | Welche Klassen/Attribute/Beziehungen gibt es? | Klasse, Attribute, Methoden, Assoziationen |

**Prüfungsfall:** Für „Kunde bucht Fahrzeug“ mit Akteuren *Kunde* und *Zahlungsdienst* eignet sich ein Use-Case-Diagramm. Für die zeitliche Kommunikation zwischen App, Buchungsserver und Zahlungsdienst ein Sequenzdiagramm.

**EPK vs. BPMN:** Eine EPK zeigt Ereignisse und Funktionen im Wechsel; BPMN kennt z. B. Tasks, Start-/Endereignisse, Gateways, Pools und Lanes. **UML ist nicht dasselbe wie BPMN.**

## 5. Wertstrom und Prozessoptimierung

- **Wertschöpfend:** Kunde erhält messbaren Nutzen, z. B. fehlerfreie Buchungsbestätigung.
- **Nicht wertschöpfend:** Doppeltes Erfassen bereits vorhandener Daten.
- **Engpass / Flaschenhals:** Schritt mit geringster Kapazität begrenzt gesamten Durchsatz.
- **Durchlaufzeit:** Zeit vom Prozessbeginn bis -ende, einschließlich Wartezeit.
- **Bearbeitungszeit:** Zeit, in der tatsächlich gearbeitet wird.
- **Soll-Ist-Vergleich:** Gemessene Werte vor und nach Verbesserung gegenüberstellen.
- **Change Management:** Neue Abläufe kommunizieren, Mitarbeitende einbinden, schulen, Rückmeldungen auswerten.

**Beispiel:** Eine manuelle Freigabe kann Engpass sein. Automatisierte Vorprüfung verkürzt die Wartezeit nur dann, wenn der Engpass tatsächlich dort liegt.

## 6. Grundlagen der Netzwerkkommunikation

| Gerät / Konzept | Funktion | Prüfungsbeispiel |
|---|---|---|
| **Switch** | Verbindet Geräte im LAN, leitet Ethernet-Frames anhand von MAC-Adressen weiter | PC und Drucker im selben VLAN |
| **Router** | Verbindet IP-Netze und entscheidet anhand von IP-Routen | Filiale mit Internet |
| **VLAN** | Logische Trennung innerhalb der Switch-Infrastruktur | Gäste- und internes Netz |
| **Firewall** | Prüft/steuert erlaubte Kommunikationsverbindungen | Nur HTTPS zur Web-API |
| **DNS** | Wandelt Namen in passende Adressen um | host.example → IP-Adresse |
| **DHCP** | Vergibt Netzwerkkonfiguration automatisch | IP, Gateway, DNS |
| **VPN** | Gesicherte Verbindung über ein anderes Netz | Homeoffice zur Firma |

**Schichten grob:** Ethernet/MAC (Sicherungsschicht), IP (Vermittlung), TCP/UDP (Transport), HTTP/HTTPS (Anwendung). Verwechsele **IP-Adresse** nicht mit **MAC-Adresse**.

## 7. IPv4, IPv6 und Segmentierung

- **IPv4:** 32-Bit-Adressen, z. B. 192.0.2.10 (Beispieladresse).
- **IPv6:** 128-Bit-Adressen, z. B. 2001:db8::10 (Dokumentationsbereich).
- **CIDR-Präfix:** Gibt den Netzanteil an, z. B. /24 bei IPv4 oder /64 häufig bei IPv6-LANs.
- **Dual Stack:** Geräte können IPv4 und IPv6 verwenden.
- **NAT:** Adressumsetzung, häufig bei IPv4; IPv6 benötigt nicht prinzipiell NAT.
- **Netzsegmentierung:** Nutzergruppen/Server in getrennte Netze einteilen und Übergänge über Regeln kontrollieren.
- **Least Privilege:** Nur erforderliche Verbindungen zwischen Segmenten erlauben.

**Prüfungsbeispiel:** Gast-WLAN und Finanzsysteme dürfen nicht unkontrolliert miteinander kommunizieren. Zwei VLANs allein reichen nicht; die Kommunikation zwischen ihnen muss per Routing/Firewall passend begrenzt werden.

## 8. Glasfaser-Anschlussarten

| Begriff | Wie weit reicht die Glasfaser? | Was folgt typischerweise? |
|---|---|---|
| **FTTC** | Straßenverteiler (*Curb*) | Kupfer bis Gebäude |
| **FTTB** | Gebäude (*Building*) | Interne Verkabelung kann Kupfer sein |
| **FTTH** | Wohnung / Nutzungseinheit (*Home*) | Glasfaser bis zum Teilnehmer |
| **FTTP** | Sammelbegriff „Premises“ | Je nach Auslegung FTTB/FTTH |

**Merksatz:** C = Curb, B = Building, H = Home.

## 9. IT-Schutz im Netz – Maßnahmen zuordnen

- **IDS:** Erkennt verdächtige Aktivitäten und meldet sie.
- **IPS:** Erkennt und kann verdächtige Verbindungen aktiv blockieren.
- **Monitoring:** Verfügbarkeit, Auslastung, Fehlermeldungen prüfen.
- **Patchmanagement:** Bekannte Schwachstellen schließen.
- **MFA und IAM:** Identität prüfen und Rechte verwalten.
- **Backup:** Daten nach Verlust wiederherstellen; kein Ersatz für Firewalls oder RAID.
- **Zutrittskontrolle:** Wer darf physisch in einen Raum?
- **Zugangskontrolle:** Wer darf sich an einem System anmelden?
- **Zugriffskontrolle:** Welche Daten darf eine angemeldete Person lesen oder bearbeiten?

## 10. Kleine Anwendungsfälle

**Fall 1:** Ein Entwicklungsteam hat viele Fehler. Ein Fehler wird häufig erst bei Kunden entdeckt. Welcher FMEA-Faktor ist betroffen?

<details><summary>Lösung</summary>

Die Entdeckbarkeit E. Schlechte Entdeckbarkeit wird typischerweise hoch bewertet; Maßnahmen wären z. B. frühere Tests oder automatische Prüfungen.

</details>

**Fall 2:** Ein Mitarbeiter soll Abläufe mit Akteuren und Systemfunktionen skizzieren. Welcher UML-Typ passt?

<details><summary>Lösung</summary>

Use-Case-Diagramm.

</details>

**Fall 3:** Im Büro sollen Gäste nicht auf interne Server zugreifen. Nennen Sie zwei passende Maßnahmen.

<details><summary>Lösung</summary>

Separates Gäste-VLAN bzw. Gäste-Netz und Firewall-/Routing-Regeln, die den Zugriff auf interne Netze sperren.

</details>

<div class="kdm-practice" data-topic="p12/analyse-methoden-netzwerk"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>

**Quelle:** Prüfungskatalog KIDM, 2. Auflage 2024, S. 20–22, 28–29. Eigene Beispiele, keine Originalaufgabentexte.
