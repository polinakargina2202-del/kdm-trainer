export const NEW_PERIOD_OPEN_QUESTIONS = [
  {
    id:'npopen_001',section:'p12',topic:'p12/iot-rfid-sensorik',points:8,operator:'Beschreiben',
    prompt:'Ein Lager soll Waren künftig per RFID erfassen. Beschreiben Sie den technischen Lesevorgang in vier aufeinanderfolgenden Schritten.',
    rubric:[['RFID-Tag/Transponder wird durch Reader/Funkfeld angesprochen',2],['Tag übermittelt Kennung/Daten per Funk',2],['Reader empfängt und leitet die Daten an Anwendung/Backend weiter',2],['Backend ordnet Kennung einem Datensatz zu bzw. löst Prozess aus',2]],
    model:'Das Lesegerät erzeugt ein Funkfeld und spricht den RFID-Tag an. Der Tag sendet seine Kennung zurück. Der Reader empfängt die Kennung und übergibt sie an die Anwendung. Das Backend ordnet sie einem Datensatz zu und kann z. B. den Wareneingang aktualisieren.'
  },
  {
    id:'npopen_002',section:'p12',topic:'p12/projektmanagement',points:8,operator:'Erläutern',
    prompt:'Für die Einführung eines neuen Kundenportals soll ein Kick-off durchgeführt werden. Erläutern Sie vier sinnvolle Inhalte bzw. Ziele dieses Meetings.',
    rubric:[['Projektziel/Ausgangslage',2],['Rollen und Verantwortlichkeiten',2],['Kommunikations-/Eskalationswege oder Zeitplan/Meilensteine',2],['Risiken, Erwartungen, offene Fragen oder nächste Schritte',2]],
    model:'Im Kick-off wird ein gemeinsames Verständnis von Ziel und Ausgangslage hergestellt. Rollen und Verantwortlichkeiten werden geklärt, Kommunikations- und Eskalationswege vereinbart und der grobe Zeitplan abgestimmt. Außerdem werden Risiken, Erwartungen und nächste Schritte transparent gemacht.'
  },
  {
    id:'npopen_003',section:'p12',topic:'p12/cloud-servicemodelle',points:6,operator:'Unterscheiden',
    prompt:'Ein Unternehmen vergleicht Hosting und Housing. Unterscheiden Sie beide Varianten anhand von Hardware-Eigentum, Verantwortlichkeit und einem möglichen Vorteil.',
    rubric:[['Hosting korrekt: Ressourcen typischerweise vom Anbieter bereitgestellt/betrieben',2],['Housing korrekt: kundeneigene Hardware im Rechenzentrum des Anbieters',2],['passender Vorteil/Verantwortungsunterschied fallbezogen erläutert',2]],
    model:'Beim Hosting stellt der Dienstleister typischerweise die Serverressourcen und übernimmt je nach Vertrag große Teile des Betriebs. Beim Housing betreibt der Kunde eigene Hardware im Rechenzentrum des Dienstleisters, der z. B. Strom, Klima und Netzanbindung bereitstellt. Housing verbindet eigene Hardwarekontrolle mit professioneller Rechenzentrumsumgebung.'
  },
  {
    id:'npopen_004',section:'p12',topic:'p12/raid-backup',points:6,operator:'Berechnen',
    prompt:'Eine Datensicherung von 120 GB wird mit konstant 300 Mbit/s übertragen. Berechnen Sie die theoretische Dauer in Sekunden und Minuten. Verwenden Sie 1 GB = 8.000 Mbit.',
    rubric:[['120 GB = 960.000 Mbit korrekt',2],['960.000 / 300 = 3.200 Sekunden korrekt',2],['3.200 / 60 = ca. 53,33 Minuten korrekt',2]],
    model:'120 × 8.000 = 960.000 Mbit. 960.000 / 300 = 3.200 s. 3.200 / 60 = ca. 53,33 min.'
  },
  {
    id:'npopen_005',section:'p13',topic:'p13/crm-kundenanalyse',points:8,operator:'Erläutern',
    prompt:'Ein IT-Dienstleister führt eine ABC-Analyse seiner Kunden durch. Beschreiben Sie vier Arbeitsschritte von den Kundendaten bis zur Zuordnung in A-, B- und C-Kunden.',
    rubric:[['geeignete Bezugsgröße je Kunde bestimmen',2],['Kunden nach Bezugsgröße absteigend sortieren',2],['Anteile und kumulierte Anteile berechnen',2],['anhand der vorgegebenen Grenzen A/B/C zuordnen und Ergebnis interpretieren',2]],
    model:'Zunächst wird z. B. der Umsatz oder Deckungsbeitrag je Kunde bestimmt. Danach werden die Kunden absteigend sortiert. Anschließend werden Einzel- und kumulierte Anteile berechnet. Abschließend werden die in der Aufgabe vorgegebenen Klassengrenzen angewendet und passende Betreuungsmaßnahmen abgeleitet.'
  },
  {
    id:'npopen_006',section:'p13',topic:'p13/urheberrecht-drm',points:6,operator:'Unterscheiden',
    prompt:'Ein E-Book-Anbieter erwägt harten oder weichen Kopierschutz. Unterscheiden Sie beide Ansätze und nennen Sie jeweils einen möglichen Vor- oder Nachteil.',
    rubric:[['harter Kopierschutz korrekt als technische Einschränkung beschrieben',2],['weicher Kopierschutz korrekt als Kennzeichnung/Nachverfolgbarkeit beschrieben',2],['jeweils sinnvoller Vor-/Nachteil bzw. insgesamt zwei konkrete Auswirkungen',2]],
    model:'Harter Kopierschutz verhindert oder begrenzt Nutzung technisch, z. B. durch Gerätebindung; er schützt stärker, kann aber legitime Nutzung erschweren. Weicher Kopierschutz kennzeichnet eine Datei, etwa per personalisiertem Wasserzeichen; er ist nutzerfreundlicher, verhindert Kopieren aber nicht unmittelbar.'
  },
  {
    id:'npopen_007',section:'p13',topic:'p13/vertragsrecht',points:8,operator:'Erläutern',
    prompt:'Ein Vertrag soll vollständig digital abgeschlossen werden. Erläutern Sie die Unterschiede zwischen einfacher, fortgeschrittener und qualifizierter elektronischer Signatur und nennen Sie den zentralen Prüfpunkt bei gesetzlichen Formvorschriften.',
    rubric:[['EES als einfache elektronische Zuordnung beschrieben',2],['FES mit stärkerer Identitätsbindung/Manipulationserkennbarkeit beschrieben',2],['QES als höchste eIDAS-Stufe mit besonderen Anforderungen beschrieben',2],['Formvorschrift des konkreten Rechtsgeschäfts muss geprüft werden',2]],
    model:'Die einfache elektronische Signatur ermöglicht eine einfache elektronische Zuordnung. Die fortgeschrittene Signatur ist stärker an den Signierenden gebunden und macht nachträgliche Änderungen erkennbar. Die qualifizierte Signatur erfüllt die strengsten eIDAS-Anforderungen. Vor dem Einsatz muss geprüft werden, welche Form das konkrete Rechtsgeschäft verlangt.'
  },
  {
    id:'npopen_008',section:'p13',topic:'p13/kennzahlen-wirtschaftlichkeit',points:8,operator:'Berechnen',
    prompt:'Ein Mitarbeiter kostet den Arbeitgeber laut Aufgabe 3.600 € pro Monat. Es stehen 160 produktive Arbeitsstunden zur Verfügung. Ein manueller Vorgang dauert 8 Minuten und tritt 2.000-mal monatlich auf. Berechnen Sie die Personalkosten des Prozesses.',
    rubric:[['160 h × 60 = 9.600 produktive Minuten',2],['3.600 / 9.600 = 0,375 € je Minute',2],['8 × 2.000 = 16.000 Prozessminuten',2],['16.000 × 0,375 = 6.000 € Prozesskosten',2]],
    model:'160 × 60 = 9.600 Minuten. 3.600 € / 9.600 = 0,375 €/Min. Der Prozess benötigt 8 × 2.000 = 16.000 Min. Somit entstehen 16.000 × 0,375 = 6.000 € Personalkosten pro Monat.'
  }
];