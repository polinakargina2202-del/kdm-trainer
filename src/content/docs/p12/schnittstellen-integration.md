---
title: Schnittstellen, REST, Datenintegration
description: API, HTTP, JSON/XML/CSV, Authentifizierung, Mapping, ETL, Migration und Fehlerbehandlung
---

# Schnittstellen, API und Datenintegration

**Prüfungsbezug:** Prüfungskatalog KIDM 2024, insbesondere S. 21–22 (Datenstruktur, Formate, Datenanalyse, Schnittstellen, Import/Export und Qualitätssicherung) sowie S. 27–28 (Datenquellen und Auswertung im Rechnungswesen).

## 1. Was ist eine Schnittstelle?

Eine **Schnittstelle** legt fest, **wie zwei Systeme Daten austauschen oder Funktionen nutzen**. Sie beschreibt unter anderem Datenformat, Übertragungsweg, Berechtigungen, Fehlerantworten und Aktualisierungszeitpunkt.

- **API (Application Programming Interface):** Programmierschnittstelle für definierte Funktionen/Daten.
- **REST:** Architekturstil für ressourcenorientierte Web-APIs; häufig HTTP und JSON.
- **Webservice:** Über ein Netzwerk nutzbare Dienstfunktion; nicht jeder Webservice ist REST.
- **Batch-/Dateischnittstelle:** Dateien werden periodisch importiert/exportiert, nicht bei jedem Einzelereignis.
- **Webhook:** System informiert ein anderes bei einem Ereignis (z. B. neue Zahlung); Empfänger benötigt sicheren Endpunkt.

**Fall:** Ein Webshop sendet bezahlte Bestellungen an ein ERP. Die API braucht eine eindeutige Bestell-ID, definierte Felder und Regeln gegen doppelte Verarbeitung.

## 2. REST und HTTP – Prüfungsüberblick

| Methode | Typischer Zweck | Beispiel |
|---|---|---|
| GET | Ressource lesen | Bestellung anzeigen |
| POST | Ressource anlegen/Aktion auslösen | Bestellung anlegen |
| PUT | Ressource vollständig ersetzen | Kundenprofil ersetzen |
| PATCH | Ressource teilweise ändern | Lieferadresse ändern |
| DELETE | Ressource entfernen | Entwurf löschen |

**HTTP-Statuscodes:** 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized (Anmeldung fehlt/ungültig), 403 Forbidden (keine Berechtigung), 404 Not Found, 409 Conflict, 500 Internal Server Error.

**Wichtig:** *Authentifizierung* = Wer bist du? *Autorisierung* = Was darfst du? Die genaue API implementiert Rollen, Tokens und Rechte. HTTPS/TLS schützt die Daten **auf dem Transportweg**, ersetzt aber keine Zugriffskontrolle.

## 3. Datenformate – richtig wählen

| Format | Charakter | Geeignet für |
|---|---|---|
| JSON | Schlüssel-Wert-Struktur mit Arrays und verschachtelten Objekten | Web-API, App |
| XML | Tags, hierarchisch, gut validierbar | Standardisierte Geschäftsdokumente |
| CSV | Zeilen und Spalten als Text, Trennzeichen beachten | Tabellenexport und Stapelimport |
| Relationale Datenbank | Tabellen mit Primär- und Fremdschlüsseln | Strukturierte Geschäftsdaten |
| Unstrukturierte Daten | Kein festes Tabellenschema | PDF, Bild, Audio |

**Mini-Beispiel in JSON:**

~~~json
{
  "bestell_id": 4711,
  "kunde": "Musterkunde",
  "bezahlt": true
}
~~~

Eine CSV-Datei könnte dieselben **flachen** Felder als Spalten enthalten, bildet verschachtelte Daten aber nicht ohne Umformung ab.

## 4. Mapping, Transformation, Validierung

**Mapping:** Quellfelder den passenden Zielfeldern zuordnen. Beispiel: `customer_number` → `kunden_id`.

**Transformation:** Datenwerte in das benötigte Format umwandeln. Beispiel: 17.11.2026 → 2026-11-17. Einheiten (EUR/Cent), Dezimaltrennzeichen und Zeitzonen beachten.

**Validierung:** Prüfen, ob Daten formal und fachlich zulässig sind, z. B. Pflichtfelder, eindeutige IDs, Datumsbereich, Fremdschlüssel, IBAN-Prüfziffer.

**ETL:** Extract (lesen), Transform (bereinigen/umformen), Load (in Zielsystem übernehmen). Bei **ELT** werden Daten erst geladen und anschließend im Ziel verarbeitet.

**Plausibilität:** Ein Lieferdatum darf nicht vor dem Bestelldatum liegen. **Vollständigkeit:** Keine fehlenden Pflichtdatensätze. **Eindeutigkeit:** Keine doppelten Bestell-IDs.

## 5. Datenmigration Schritt für Schritt

1. **Datenquellen und Zielmodell** analysieren.
2. **Mapping-Regeln** und Pflichtfelder definieren.
3. **Backup / Wiederanlaufplan** erstellen.
4. Testmigration mit repräsentativen Daten durchführen.
5. Daten transformieren, validieren und importieren.
6. **Abgleich**: Datensatzanzahl, Summen, Stichproben und referenzielle Integrität prüfen.
7. Freigabe, Protokollierung, Umstellung und Nachkontrolle durchführen.

**Häufige Risiken:** Datenverlust, Dubletten, ungültige Beziehungen, falsch interpretierte Datumsformate, Systemausfall und Datenschutzverletzungen.

**Passende Maßnahmen:** Testmigration, Datenbereinigung, Logging, Checksummen/Abgleich, Rechtekonzept, verschlüsselte Übertragung und Rollback-Plan.

## 6. Schnittstellensicherheit und Fehlerbehandlung

- **Minimale Rechte:** Schnittstellenkonto darf nur benötigte Daten lesen/ändern.
- **Secrets:** API-Schlüssel nicht offen im Quellcode oder Log speichern; regelmäßig sicher verwalten.
- **HTTPS/TLS:** Übertragung absichern; Zertifikate prüfen.
- **Protokollierung:** Status, Anfrage-ID, Zeitpunkt und Fehler sichern, aber keine unnötigen personenbezogenen Inhalte.
- **Fehlerbehandlung:** 4xx-Fehler prüfen/korrigieren; bei vorübergehenden 5xx-Fehlern geeignete Wiederholungen mit Grenzen und Wartezeiten.
- **Idempotenz:** Wiederholte gleiche Anfragen dürfen keine doppelten Buchungen erzeugen, z. B. über eine eindeutige Transaktions-ID.
- **Verfügbarkeit:** Zeitüberschreitungen, Monitoring, Wartungsfenster, Retry/Queue und SLA beachten.
- **Datenschutz:** Zwecke/Rechtsgrundlage, Auftragsverarbeitung, Lösch- und Aufbewahrungsfristen sowie Datenminimierung klären.

**Prüfungsfalle:** Ein erfolgreicher HTTP-Status beweist nicht, dass der Datensatz fachlich richtig verarbeitet wurde. Fachliche Rückmeldung und Abgleich sind zusätzlich nötig.

## 7. Anwendung in Prüfungsfällen

**Fall A:** Ein ERP erwartet `kunden_id`, der Webshop sendet `customerNo`. Nennen Sie die notwendige Maßnahme.

<details><summary>Lösung</summary>

Feldmapping definieren und in der Testübertragung prüfen, ob die richtige Kundenkennung in das Zielsystem gelangt.

</details>

**Fall B:** Nach einem Verbindungsfehler wird eine Zahlungsanforderung erneut gesendet. Nennen Sie ein Risiko und eine technische Maßnahme.

<details><summary>Lösung</summary>

Risiko: doppelte Abbuchung. Maßnahme: eindeutige Transaktions-ID bzw. Idempotency Key und Prüfung, ob die Zahlung bereits verarbeitet wurde.

</details>

**Fall C:** Eine API liefert den Status 403. Was bedeutet das?

<details><summary>Lösung</summary>

Die Anfrage ist nicht erlaubt, weil die erforderliche Berechtigung fehlt. Nicht mit 401 (fehlende/ungültige Authentifizierung) verwechseln.

</details>

## 8. Was du ohne Nachschlagen können solltest

1. Fünf HTTP-Methoden den Aufgaben zuordnen.
2. Unterschied Authentifizierung – Autorisierung erklären.
3. Drei Prüfungen nach einer Datenmigration nennen.
4. JSON, XML und CSV unterscheiden.
5. Zwei Schnittstellenrisiken mit passenden Gegenmaßnahmen erläutern.
6. Ein Datenmapping mit einem Beispiel erklären.

<div class="kdm-practice" data-topic="p12/schnittstellen-integration"></div>
<script type="module" src="/kdm-trainer/trainer/trainer.js"></script>

**Quelle:** Prüfungskatalog KIDM, 2. Auflage 2024, S. 21–22 und 27–28; eigenständig konzipierte Praxisbeispiele.
