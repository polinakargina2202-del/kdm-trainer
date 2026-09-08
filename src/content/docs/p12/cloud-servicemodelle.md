---
title: Cloud & Servicemodelle
description: Public/Private Cloud, IaaS/PaaS/SaaS, VPN, On-Premises
sidebar:
  badge:
    text: 5/7 Prüfungen
    variant: caution
---

## Worum geht es bei Cloud Computing?

Bei **Cloud Computing** werden IT-Ressourcen nicht ausschließlich auf eigener Hardware im Unternehmen betrieben, sondern über einen Dienstleister bereitgestellt. Das können zum Beispiel Speicherplatz, virtuelle Server, Datenbanken oder komplette Softwareanwendungen sein.

Der große Vorteil besteht darin, dass Ressourcen flexibel bereitgestellt werden können. Gleichzeitig entstehen neue Fragen zu Datenschutz, Abhängigkeit vom Anbieter, Kosten und Verantwortlichkeiten.

In Prüfungsaufgaben musst du deshalb häufig nicht nur Begriffe kennen, sondern **eine Cloud-Variante anhand eines Szenarios bewerten**.

---

## 1. On-Premises und Cloud verstehen

### On-Premises

**On-Premises** bedeutet: Die IT-Infrastruktur wird im eigenen Unternehmen oder eigenen Rechenzentrum betrieben.

Das Unternehmen beschafft und betreibt zum Beispiel selbst:

- Server
- Speicher
- Netzwerkkomponenten
- Betriebssysteme
- Anwendungen
- Updates und Wartung

Vorteile:

- hohe Kontrolle über Systeme und Daten
- eigene Sicherheits- und Betriebsregeln direkt umsetzbar
- weniger direkte Abhängigkeit von einem Cloud-Anbieter

Nachteile:

- hohe Anfangsinvestitionen
- eigenes Personal und Know-how notwendig
- Erweiterungen können Zeit kosten, weil Hardware beschafft werden muss

### Cloud

Bei einer Cloud-Lösung stellt ein externer oder interner Cloud-Anbieter Ressourcen bedarfsgerecht bereit.

Vorteile:

- schnelle Skalierung
- keine oder geringere eigene Hardwarebeschaffung
- häufig verbrauchsabhängige Kosten
- neue Systeme können schnell bereitgestellt werden

Nachteile:

- Abhängigkeit vom Anbieter
- Datenschutz und Vertragsbedingungen müssen geprüft werden
- laufende Kosten können bei starkem Wachstum steigen
- Internetverbindung spielt häufig eine zentrale Rolle

| | On-Premises | Cloud |
|---|---|---|
| **Hardware** | Eigene Infrastruktur | Beim Cloud-Anbieter oder Cloud-Betreiber |
| **Kostenstruktur** | Häufig hohe Anfangsinvestition | Häufig laufende/verbrauchsabhängige Kosten |
| **Kontrolle** | Sehr hoch | Je nach Modell geringer |
| **Skalierung** | Hardware muss beschafft werden | Oft schnell möglich |
| **Betriebsaufwand** | Größer beim Unternehmen | Teilweise beim Anbieter |

> **Prüfungstipp:** Schreibe nicht pauschal „Cloud ist billiger“. Ob sie wirtschaftlicher ist, hängt von Nutzung, Vertragsmodell, Migration, Personalaufwand und benötigter Kapazität ab.

---

## 2. Public, Private, Hybrid und Community Cloud

Diese Begriffe beschreiben, **wie die Cloud-Infrastruktur bereitgestellt wird**.

### Public Cloud

Die Infrastruktur gehört einem Cloud-Anbieter und wird vielen Kunden zur Verfügung gestellt. Jeder Kunde nutzt logisch getrennte Ressourcen.

Typische Eigenschaften:

- sehr gut skalierbar
- meist standardisierte Services
- keine eigene physische Infrastruktur notwendig
- geringere direkte Kontrolle über die Plattform

### Private Cloud

Die Cloud-Umgebung wird exklusiv für eine Organisation betrieben. Sie kann im eigenen Rechenzentrum oder durch einen Dienstleister betrieben werden.

Typische Eigenschaften:

- mehr Kontrolle
- individuelle Sicherheits- und Compliance-Anforderungen besser umsetzbar
- höherer Aufwand und meist höhere Kosten als bei standardisierter Public Cloud

### Hybrid Cloud

Eine **Hybrid Cloud** kombiniert Private- und Public-Cloud-Anteile.

Beispiel:

Ein Unternehmen speichert sensible Kundendaten in einer privaten Umgebung, nutzt aber für eine öffentlich zugängliche Webanwendung flexibel skalierbare Public-Cloud-Ressourcen.

Vorteil: sensible Bereiche können stärker kontrolliert werden, andere Lasten flexibel ausgelagert werden.

Nachteil: Integration und Administration werden komplexer.

### Community Cloud

Mehrere Organisationen mit ähnlichen Anforderungen teilen sich eine Cloud-Umgebung, zum Beispiel Organisationen aus einer Branche oder Verwaltung.

| Modell | Kernidee |
|---|---|
| **Public Cloud** | Gemeinsame Anbieterplattform für viele Kunden |
| **Private Cloud** | Exklusiv für eine Organisation |
| **Hybrid Cloud** | Kombination aus Private und Public |
| **Community Cloud** | Gemeinsame Umgebung für eine definierte Gruppe |

---

## 3. IaaS, PaaS und SaaS — wer verwaltet was?

Diese drei Begriffe beschreiben nicht den Standort der Cloud, sondern den **Umfang der bereitgestellten Leistung**.

### IaaS — Infrastructure as a Service

Der Anbieter stellt die grundlegende Infrastruktur bereit, zum Beispiel:

- virtuelle Server
- Speicher
- Netzwerk

Der Kunde kümmert sich typischerweise selbst um Betriebssystem, Anwendungen und Daten.

**Beispiel:** Ein Unternehmen mietet eine virtuelle Maschine und installiert darauf selbst Linux, Datenbank und eigene Software.

### PaaS — Platform as a Service

Der Anbieter stellt zusätzlich eine fertige Laufzeit- oder Entwicklungsplattform bereit.

Der Kunde konzentriert sich stärker auf:

- eigene Anwendung
- eigenen Code
- eigene Daten

Betriebssystem und viele technische Komponenten werden vom Anbieter verwaltet.

**Beispiel:** Ein Entwickler lädt seine Webanwendung auf eine Plattform, ohne selbst den darunterliegenden Server administrieren zu müssen.

### SaaS — Software as a Service

Der Anbieter stellt eine fertige Software bereit. Der Kunde nutzt sie über Browser oder App.

Beispiele:

- Microsoft 365
- Salesforce
- webbasierte CRM- oder Ticketsysteme

Der Kunde verwaltet vor allem Benutzer, Einstellungen und eigene Daten.

### Die Logik dahinter

Von IaaS zu SaaS übernimmt der Anbieter immer mehr Aufgaben.

```text
On-Premises: Kunde verwaltet fast alles
       ↓
IaaS: Infrastruktur beim Anbieter
       ↓
PaaS: Infrastruktur + Plattform beim Anbieter
       ↓
SaaS: komplette Anwendung beim Anbieter
```

> **Merksatz:** Je weiter du von **IaaS → PaaS → SaaS** gehst, desto weniger technischen Betriebsaufwand hat der Kunde — aber desto weniger Kontrolle über die darunterliegenden Ebenen.

### Prüfungslogik

Wenn du ein Servicemodell bestimmen sollst, frage dich:

> „Was bekommt der Kunde fertig geliefert?“

- nur virtuelle Infrastruktur → IaaS
- Entwicklungs-/Laufzeitplattform → PaaS
- komplette Anwendung → SaaS

---

## 4. Skalierbarkeit und Elastizität

Diese beiden Begriffe gehören oft zur Cloud.

**Skalierbarkeit** bedeutet, dass Ressourcen vergrößert oder verkleinert werden können.

Beispiel:

Ein Webshop bekommt mehr Besucher und erhält zusätzliche Rechenleistung.

**Elastizität** bedeutet, dass diese Anpassung sehr flexibel oder sogar automatisch an den aktuellen Bedarf erfolgt.

Beispiel:

Während einer Verkaufsaktion werden automatisch zusätzliche Instanzen gestartet und danach wieder reduziert.

Das kann wirtschaftlich sinnvoll sein, weil nicht dauerhaft maximale Kapazität vorgehalten werden muss.

---

## 5. CAPEX und OPEX

Bei Cloud-vs.-On-Premises-Aufgaben kann die Kostenart relevant sein.

**CAPEX (Capital Expenditure)** = Investitionsausgaben, zum Beispiel Kauf eigener Server.

**OPEX (Operating Expenditure)** = laufende Betriebsausgaben, zum Beispiel monatliche Cloud-Gebühren.

On-Premises ist häufig stärker von CAPEX geprägt, Cloud häufig stärker von OPEX. In der Praxis können Mischformen entstehen.

---

## 6. Vendor Lock-in

**Vendor Lock-in** bedeutet, dass ein Wechsel zu einem anderen Anbieter technisch oder wirtschaftlich schwierig wird.

Das kann passieren, wenn:

- proprietäre Dienste verwendet werden,
- Datenformate schwer exportierbar sind,
- Anwendungen stark an spezielle Schnittstellen gebunden sind,
- hohe Migrationskosten entstehen.

### Beispiel

Eine Anwendung nutzt viele spezielle Funktionen eines bestimmten Cloud-Anbieters. Ein Wechsel zu einem anderen Anbieter würde große Teile der Anwendung neu entwickeln lassen.

### Mögliche Gegenmaßnahmen

- offene Standards verwenden
- Datenexport und Exit-Szenario vertraglich klären
- portable Technologien nutzen
- Abhängigkeiten früh dokumentieren

---

## 7. Datenschutz und externe Cloud-Dienste

Wenn personenbezogene oder vertrauliche Daten extern verarbeitet werden, müssen technische, rechtliche und organisatorische Aspekte geprüft werden.

Typische Prüfpunkte:

- Wo werden Daten gespeichert und verarbeitet?
- Welche Unterauftragnehmer nutzt der Anbieter?
- Welche Zugriffsrechte bestehen?
- Wie werden Daten verschlüsselt?
- Gibt es Backup- und Löschkonzepte?
- Welche vertraglichen Regelungen gelten bei Auftragsverarbeitung?
- Wie können Daten bei Vertragsende exportiert oder gelöscht werden?

> **Wichtig:** Der Serverstandort allein entscheidet nicht über die gesamte DSGVO-Konformität. Es müssen die konkrete Verarbeitung, Rechtsgrundlage, Verträge und Schutzmaßnahmen betrachtet werden.

### Typische Risiken

- unbefugter Zugriff
- Datenverlust
- Abhängigkeit vom Anbieter
- unklare Datenübermittlungen
- mangelnde Portabilität

---

## 8. VPN — Virtual Private Network

Ein **VPN** schafft eine geschützte Verbindung über ein unsicheres oder öffentliches Netz, zum Beispiel das Internet.

### Remote Access / End-to-Site

Ein einzelner Nutzer verbindet sich mit dem Unternehmensnetz.

Beispiel:

Ein Mitarbeiter arbeitet im Homeoffice und baut eine VPN-Verbindung zur Firma auf.

### Site-to-Site

Zwei ganze Netzwerke werden miteinander verbunden.

Beispiel:

Eine Filiale ist über VPN mit der Zentrale verbunden.

### Wozu dient ein VPN?

Typische Ziele:

- verschlüsselte Übertragung
- sichere Verbindung über öffentliche Netze
- kontrollierter Zugriff auf interne Systeme
- Authentifizierung des Verbindungspartners

> **Prüfungstipp:** VPN bedeutet nicht automatisch, dass ein System insgesamt sicher ist. Es schützt vor allem die Verbindung. Endgeräte, Berechtigungen und Authentifizierung müssen ebenfalls abgesichert werden.

---

## 9. Auswahl einer Cloud-Lösung — Beispiel

Ein Unternehmen möchte eine neue Anwendung einführen. Die Nutzerzahl schwankt stark. Es gibt wenig eigenes Administrationspersonal und die Software soll schnell verfügbar sein.

Mögliche Argumentation:

- Cloud ist sinnvoll, weil Ressourcen flexibel skaliert werden können.
- SaaS kann geeignet sein, wenn eine fertige Standardsoftware existiert und möglichst wenig eigener Betriebsaufwand gewünscht ist.
- Datenschutz, Verfügbarkeit, Datenexport und Anbieterabhängigkeit müssen vor Vertragsabschluss geprüft werden.

So entsteht eine **begründete Entscheidung** statt einer bloßen Aufzählung von Vor- und Nachteilen.

---

## Kurz zusammengefasst

- **On-Premises** = Betrieb auf eigener Infrastruktur.
- **Public/Private/Hybrid/Community** beschreiben das Bereitstellungsmodell.
- **IaaS/PaaS/SaaS** beschreiben, wie viel der Anbieter als Service übernimmt.
- IaaS bietet viel Kontrolle, SaaS wenig Betriebsaufwand.
- Cloud ist gut skalierbar, erzeugt aber Anbieter- und Datenschutzfragen.
- **Vendor Lock-in** bezeichnet eine schwer lösbare Anbieterabhängigkeit.
- **VPN** schützt Netzwerkverbindungen über unsichere Netze.

---

## Prüfungsaufgaben-Muster

| Aufgabentyp | Beispielformulierung |
|---|---|
| Begriff erläutern | „Erläutern Sie den Begriff Public Cloud.“ |
| Servicemodell | „Ordnen Sie die Lösung IaaS, PaaS oder SaaS zu und begründen Sie.“ |
| Vergleich | „Nennen und erläutern Sie je 2 Vor- und Nachteile von Cloud gegenüber On-Premises.“ |
| Auswahl begründen | „Empfehlen Sie ein Bereitstellungsmodell für das Szenario.“ |
| Datenschutz | „Nennen Sie 3 Aspekte, die bei extern gehosteten Lösungen geprüft werden müssen.“ |
| VPN | „Unterscheiden Sie Remote-Access- und Site-to-Site-VPN.“ |

---
<div class="kdm-practice" data-topic="p12/cloud-servicemodelle"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>
