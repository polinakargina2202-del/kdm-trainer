---
title: Cloud & Servicemodelle
description: Public/Private Cloud, IaaS/PaaS/SaaS, VPN, On-Premises
sidebar:
  badge:
    text: 5/7 Prüfungen
    variant: caution
---

## 1. Cloud-Bereitstellungsmodelle

| Modell | Beschreibung | Vorteile | Nachteile |
|---|---|---|---|
| **Public Cloud** | Ressourcen über Internet für alle verfügbar (AWS, Azure, Google Cloud) | Pay-as-you-go, keine eigene Hardware, skalierbar | Datenkontrolle eingeschränkt, DSGVO-Risiko |
| **Private Cloud** | Cloud nur für eine Organisation, intern oder extern gehostet | Volle Kontrolle, höhere Sicherheit | Teurer, eigenes Know-how nötig |
| **Hybrid Cloud** | Kombination aus Public + Private | Flexibel, sensible Daten intern | Komplexere Verwaltung |
| **Community Cloud** | Für eine Gruppe von Organisationen (z.B. Behörden) | Gemeinsame Kosten, gemeinsame Anforderungen | Weniger Kontrolle als Private |

---

## 2. Servicemodelle (IaaS / PaaS / SaaS)

| Modell | Was wird bereitgestellt | Nutzer verwaltet | Beispiele |
|---|---|---|---|
| **IaaS** (Infrastructure as a Service) | Virtuelle Hardware: Server, Netzwerk, Speicher | Betriebssystem, Software, Anwendungen | AWS EC2, Azure VMs, Hetzner Cloud |
| **PaaS** (Platform as a Service) | Entwicklungs- und Laufzeitumgebung | Eigene Anwendungen und Daten | Heroku, Google App Engine |
| **SaaS** (Software as a Service) | Fertige Softwareanwendungen | Nur eigene Daten | Office 365, Salesforce, Google Docs |

> **Merksatz (von unten nach oben):** IaaS = Infrastruktur · PaaS = Plattform · SaaS = Software  
> Je höher, desto weniger Verwaltungsaufwand für den Kunden.

---

## 3. On-Premises vs. Cloud

| | On-Premises | Cloud |
|---|---|---|
| **Hardware** | Eigene Server im eigenen RZ | Beim Anbieter |
| **Kosten** | Hohe Anfangsinvestition (CAPEX) | Laufende Kosten (OPEX), pay-as-you-go |
| **Kontrolle** | Vollständige Kontrolle | Abhängig vom Anbieter |
| **Skalierung** | Aufwändig (Hardware kaufen) | Sofort skalierbar |
| **DSGVO** | Daten bleiben im Unternehmen | Datenschutz prüfen (Serverstandort!) |

---

## 4. VPN (Virtual Private Network)

| VPN-Typ | Beschreibung | Anwendung |
|---|---|---|
| **End-to-Site (Remote Access)** | Einzelner Nutzer → Firmennetz | Homeoffice, mobiles Arbeiten |
| **Site-to-Site** | Zwei Netze sicher verbinden | Filiale ↔ Zentrale |
| **End-to-End** | Direkte verschlüsselte Verbindung zwischen zwei Geräten | Selten |

**Sicherheitsmechanismen:** Verschlüsselung (z.B. AES), Tunnelprotokolle (IPSec, OpenVPN), Authentifizierung

---

## 5. Datenschutzrisiken bei externer Cloud (S22, S25)

- **Datenverlust der Datenhoheit** — Daten liegen beim Anbieter, eingeschränkte Kontrolle
- **Unbefugter Zugriff** — Sicherheitslücken beim Anbieter
- **Serverstandort** — Daten müssen in EU/EWR gespeichert werden (DSGVO)
- **Anbieterabhängigkeit** — bei Insolvenz droht Datenverlust
- **Versehentliches Löschen** durch Anbieter

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Begriff erläutern | „Erläutern Sie den Begriff Public Cloud." |
| Servicemodell beschreiben | „Beschreiben Sie IaaS." |
| Vor-/Nachteile | „Nennen Sie je 2 Vor- und Nachteile der Private Cloud gegenüber On-Premises." |
| Datenschutzrisiken | „Nennen Sie 3 Datenschutzrisiken bei extern gehosteten Lösungen." |
