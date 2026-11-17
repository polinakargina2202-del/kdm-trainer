export const COVERAGE_OPEN_QUESTIONS = [
  {
    "id": "covopen_001",
    "section": "p12",
    "topic": "p12/digitale-geschaeftsmodelle",
    "points": 6,
    "operator": "Unterscheiden",
    "prompt": "Ein Onlineportal bietet Produktvergleiche und ermöglicht anschließend Buchungen. Ordnen Sie zwei 4C-Typen zu und erläutern Sie deren jeweiligen Nutzen.",
    "rubric": [
      [
        "Context passend zum Vergleich erläutert",
        3
      ],
      [
        "Commerce passend zur Buchung erläutert",
        3
      ]
    ],
    "model": "Context hilft, Angebote zu finden und zu vergleichen; Commerce ermöglicht den elektronischen Vertrags- oder Buchungsabschluss."
  },
  {
    "id": "covopen_002",
    "section": "p12",
    "topic": "p12/digitale-geschaeftsmodelle",
    "points": 8,
    "operator": "Erläutern",
    "prompt": "Ein Softwareanbieter plant Freemium statt eines reinen Abos. Erläutern Sie je zwei Vorteile und Risiken dieser Entscheidung.",
    "rubric": [
      [
        "Zwei unterschiedliche Freemium-Vorteile mit Wirkung",
        4
      ],
      [
        "Zwei unterschiedliche Risiken mit Wirkung",
        4
      ]
    ],
    "model": "Vorteile: niedrige Einstiegshürde und Reichweite; Risiken: hohe Betriebskosten freier Nutzer und zu geringe Umwandlung in Premiumkunden."
  },
  {
    "id": "covopen_003",
    "section": "p12",
    "topic": "p12/digitale-geschaeftsmodelle",
    "points": 6,
    "operator": "Beschreiben",
    "prompt": "Ordnen Sie einer Mobilitätsplattform drei passende Bausteine des Business Model Canvas zu und beschreiben Sie je ein konkretes Beispiel.",
    "rubric": [
      [
        "Drei korrekte BMC-Bausteine benannt",
        3
      ],
      [
        "Je ein passendes fallbezogenes Beispiel",
        3
      ]
    ],
    "model": "Kundensegmente: Pendler; Wertangebot: flexible Fahrt ohne eigenes Auto; Einnahmequellen: Minutenpreise oder Abonnement."
  },
  {
    "id": "covopen_004",
    "section": "p12",
    "topic": "p12/digitale-geschaeftsmodelle",
    "points": 6,
    "operator": "Begründen",
    "prompt": "Ein Team möchte vor dem vollständigen Rollout einen MVP testen. Nennen und begründen Sie zwei Gründe und eine messbare Erfolgskennzahl.",
    "rubric": [
      [
        "Zwei plausible Nutzenargumente",
        4
      ],
      [
        "Eine messbare und passende Kennzahl",
        2
      ]
    ],
    "model": "Frühes Nutzerfeedback und Begrenzung des Fehlinvestitionsrisikos; KPI z. B. Quote erfolgreich abgeschlossener Testbuchungen."
  },
  {
    "id": "covopen_005",
    "section": "p12",
    "topic": "p12/markt-kundenanalyse",
    "points": 6,
    "operator": "Erläutern",
    "prompt": "Ein App-Anbieter verliert viele Interessenten vor der Registrierung. Nennen Sie zwei geeignete Untersuchungsmethoden und erläutern Sie, welche Erkenntnisse sie liefern.",
    "rubric": [
      [
        "Geeignete quantitative Methode plus Erkenntnis",
        3
      ],
      [
        "Geeignete qualitative Methode plus Erkenntnis",
        3
      ]
    ],
    "model": "Funnel-Analyse zeigt, an welchem Schritt Nutzer aussteigen; moderierte Usability-Tests zeigen mögliche Gründe der Abbrüche."
  },
  {
    "id": "covopen_006",
    "section": "p12",
    "topic": "p12/markt-kundenanalyse",
    "points": 4,
    "operator": "Berechnen",
    "prompt": "Von 1.600 Besuchern registrieren sich 240; 48 schließen einen Kauf ab. Berechnen Sie die Registrierungsrate sowie die Kaufquote bezogen auf alle Besucher.",
    "rubric": [
      [
        "Registrierungsrate: 15 %",
        2
      ],
      [
        "Kaufquote: 3 %",
        2
      ]
    ],
    "model": "Registrierung 240/1600 = 15 %; Kauf 48/1600 = 3 %. Der Nenner muss jeweils den Besuchern entsprechen."
  },
  {
    "id": "covopen_007",
    "section": "p12",
    "topic": "p12/markt-kundenanalyse",
    "points": 6,
    "operator": "Beurteilen",
    "prompt": "Eine Firma will ein neues Produkt in einem neuen Land einführen. Ordnen Sie die Ansoff-Strategie zu und nennen Sie zwei Risiken.",
    "rubric": [
      [
        "Diversifikation korrekt zugeordnet",
        2
      ],
      [
        "Zwei unterschiedliche plausible Risiken",
        4
      ]
    ],
    "model": "Diversifikation (neuer Markt, neues Produkt). Risiken: Nachfrage falsch eingeschätzt, höhere Marketing-/Anpassungskosten, regulatorische Hürden."
  },
  {
    "id": "covopen_008",
    "section": "p12",
    "topic": "p12/schnittstellen-integration",
    "points": 6,
    "operator": "Beschreiben",
    "prompt": "Ein CRM und ein ERP verwenden unterschiedliche Bezeichnungen für Kundennummern und Datumsformate. Beschreiben Sie drei notwendige Arbeitsschritte für eine sichere Integration.",
    "rubric": [
      [
        "Mapping beschreiben",
        2
      ],
      [
        "Datentransformation beschreiben",
        2
      ],
      [
        "Validierung/Abgleich beschreiben",
        2
      ]
    ],
    "model": "Quell- und Zielfelder mappen, Datumsformat transformieren, Pflichtfelder und Anzahl/Beziehungen nach Import überprüfen."
  },
  {
    "id": "covopen_009",
    "section": "p12",
    "topic": "p12/schnittstellen-integration",
    "points": 8,
    "operator": "Erläutern",
    "prompt": "Nach einem Timeout sendet eine Zahlungs-API denselben Auftrag noch einmal. Erläutern Sie das Risiko und zwei Gegenmaßnahmen.",
    "rubric": [
      [
        "Doppelte Zahlung als Risiko mit Wirkung",
        2
      ],
      [
        "Eindeutige Transaktions-ID/Idempotenz erläutert",
        3
      ],
      [
        "Statusabfrage/Abgleich oder geeignete Fehlerbehandlung",
        3
      ]
    ],
    "model": "Ohne Kontrolle kann doppelt abgebucht werden. Eindeutige Idempotency Keys und eine Statusprüfung vor erneuter Zahlung verhindern Doppelverarbeitung."
  },
  {
    "id": "covopen_010",
    "section": "p12",
    "topic": "p12/schnittstellen-integration",
    "points": 6,
    "operator": "Unterscheiden",
    "prompt": "Unterscheiden Sie Authentifizierung und Autorisierung an einer API, und nennen Sie eine Maßnahme zur sicheren Datenübertragung.",
    "rubric": [
      [
        "Authentifizierung fachlich erklärt",
        2
      ],
      [
        "Autorisierung fachlich erklärt",
        2
      ],
      [
        "HTTPS/TLS als geeignete Maßnahme",
        2
      ]
    ],
    "model": "Authentifizierung: Identität prüfen, etwa Token. Autorisierung: Prüfen, ob Zugriff auf Ressource erlaubt. HTTPS/TLS schützt den Übertragungsweg."
  },
  {
    "id": "covopen_011",
    "section": "p12",
    "topic": "p12/analyse-methoden-netzwerk",
    "points": 4,
    "operator": "Berechnen",
    "prompt": "Ein Prozessrisiko wird mit B=7, A=4 und E=5 bewertet. Berechnen Sie die RPZ und nennen Sie eine Maßnahme zur Verbesserung der Entdeckbarkeit.",
    "rubric": [
      [
        "RPZ 140 korrekt",
        2
      ],
      [
        "Plausible Prüf-/Monitoringmaßnahme",
        2
      ]
    ],
    "model": "RPZ = 7×4×5 = 140. Zusätzliche Tests/Monitoring können Fehler früher entdecken."
  },
  {
    "id": "covopen_012",
    "section": "p12",
    "topic": "p12/analyse-methoden-netzwerk",
    "points": 4,
    "operator": "Beschreiben",
    "prompt": "Nennen Sie jeweils zwei Elemente, die in einem Use-Case-Diagramm und in einem Sequenzdiagramm dargestellt werden.",
    "rubric": [
      [
        "Zwei passende Elemente Use-Case",
        2
      ],
      [
        "Zwei passende Elemente Sequenz",
        2
      ]
    ],
    "model": "Use-Case: Akteure, Anwendungsfälle, Systemgrenze; Sequenz: Lebenslinien, Nachrichten, Reihenfolge."
  },
  {
    "id": "covopen_013",
    "section": "p12",
    "topic": "p12/analyse-methoden-netzwerk",
    "points": 6,
    "operator": "Begründen",
    "prompt": "Ein Gäste-WLAN soll keinen Zugang zu internen Fachanwendungen bieten. Nennen Sie zwei Maßnahmen und begründen Sie deren Wirkung.",
    "rubric": [
      [
        "Logische Trennung durch VLAN/Gastnetz",
        3
      ],
      [
        "Firewall-/Routingregeln bzw. Zugriffskontrolle mit Wirkung",
        3
      ]
    ],
    "model": "Gäste in eigenes Segment legen; zwischen Gäste- und internem Netz Verbindungen durch Firewallregeln einschränken."
  },
  {
    "id": "covopen_014",
    "section": "p12",
    "topic": "p12/projektmanagement",
    "points": 6,
    "operator": "Erstellen",
    "prompt": "Für die Einführung eines Ticketsystems sind Entwicklung, Test und Rollout geplant. Formulieren Sie zwei sinnvolle PSP-Teilaufgaben und je zwei Arbeitspakete.",
    "rubric": [
      [
        "Zwei plausible Teilaufgaben",
        2
      ],
      [
        "Je zwei zugehörige konkrete Arbeitspakete",
        4
      ]
    ],
    "model": "Teilaufgabe Entwicklung: Datenmodell erstellen, Oberfläche entwickeln. Teilaufgabe Einführung: Testfälle dokumentieren, Mitarbeitende schulen. Auch andere fachlich schlüssige Gliederungen zulässig."
  },
  {
    "id": "covopen_015",
    "section": "p12",
    "topic": "p12/datenbanken-sql",
    "points": 8,
    "operator": "Erstellen",
    "prompt": "Gegeben sind auftraege(id,kunde_id,betrag) und kunden(id,name). Schreiben Sie SQL für alle Kundennamen und ihre Gesamtbeträge, jedoch nur bei Summe über 1.000, absteigend sortiert.",
    "rubric": [
      [
        "JOIN mit korrekter Verknüpfung",
        2
      ],
      [
        "SUM und GROUP BY richtig",
        2
      ],
      [
        "HAVING SUM(...) > 1000",
        2
      ],
      [
        "ORDER BY Summe DESC",
        2
      ]
    ],
    "model": "SELECT k.name, SUM(a.betrag) AS summe FROM kunden k JOIN auftraege a ON a.kunde_id=k.id GROUP BY k.id, k.name HAVING SUM(a.betrag)>1000 ORDER BY summe DESC;"
  },
  {
    "id": "covopen_016",
    "section": "p12",
    "topic": "p12/datenbanken-sql",
    "points": 7,
    "operator": "Begründen",
    "prompt": "Ein Kundendatensatz wird in 400 Bestellzeilen mit Adresse gespeichert. Nennen Sie zwei mögliche Anomalien und begründen Sie die Trennung in Kunden- und Bestelltabelle.",
    "rubric": [
      [
        "Zwei Anomalien fachlich benannt und erläutert",
        4
      ],
      [
        "Trennung/Redundanzabbau und Fremdschlüssel begründet",
        3
      ]
    ],
    "model": "Änderungs- und Einfüge-/Löschanomalien. Kundendaten einmal speichern und Bestellungen per kunden_id verknüpfen senkt Redundanz."
  },
  {
    "id": "covopen_017",
    "section": "p12",
    "topic": "p12/it-sicherheit",
    "points": 6,
    "operator": "Unterscheiden",
    "prompt": "Ein Neubau soll per Glasfaser angebunden werden. Unterscheiden Sie FTTC, FTTB und FTTH nach dem Endpunkt der Glasfaser.",
    "rubric": [
      [
        "FTTC bis Straßenverteiler",
        2
      ],
      [
        "FTTB bis Gebäude",
        2
      ],
      [
        "FTTH bis Wohnung/Nutzungseinheit",
        2
      ]
    ],
    "model": "Curb = Straßenverteiler; Building = Gebäude; Home = Wohnung."
  },
  {
    "id": "covopen_018",
    "section": "p12",
    "topic": "p12/raid-backup",
    "points": 6,
    "operator": "Erläutern",
    "prompt": "Ein Betrieb darf bei Ausfall höchstens 30 Minuten neue Daten verlieren und muss nach zwei Stunden wieder arbeitsfähig sein. Bestimmen und erläutern Sie RPO und RTO.",
    "rubric": [
      [
        "RPO 30 Minuten und Datenverlust korrekt erläutert",
        3
      ],
      [
        "RTO 2 Stunden und Wiederanlauf korrekt erläutert",
        3
      ]
    ],
    "model": "RPO=30 Minuten maximale zeitliche Datenverlustspanne. RTO=2 Stunden maximal angestrebte Wiederherstellungszeit."
  },
  {
    "id": "covopen_019",
    "section": "p13",
    "topic": "p13/umsatzsteuer-buchfuehrung",
    "points": 5,
    "operator": "Berechnen",
    "prompt": "Eine GmbH stellt 5.950 € brutto in Rechnung (19 % USt). Sie hat 380 € abziehbare Vorsteuer. Berechnen Sie Ausgangs-USt und Zahllast.",
    "rubric": [
      [
        "Netto 5.000 € und USt 950 €",
        3
      ],
      [
        "Zahllast 570 €",
        2
      ]
    ],
    "model": "5.950/1,19=5.000; USt=950; 950−380=570 € Zahllast."
  },
  {
    "id": "covopen_020",
    "section": "p13",
    "topic": "p13/umsatzsteuer-buchfuehrung",
    "points": 6,
    "operator": "Bilden",
    "prompt": "Bilden Sie den vereinfachten Buchungssatz: Ein Unternehmen kauft Büromaterial für 200 € netto zuzüglich 19 % Vorsteuer und bezahlt sofort per Bank.",
    "rubric": [
      [
        "Büroaufwand im Soll 200 €",
        2
      ],
      [
        "Vorsteuer im Soll 38 €",
        2
      ],
      [
        "Bank im Haben 238 €",
        2
      ]
    ],
    "model": "Büroaufwand 200 €, Vorsteuer 38 € an Bank 238 €."
  },
  {
    "id": "covopen_021",
    "section": "p13",
    "topic": "p13/umsatzsteuer-buchfuehrung",
    "points": 6,
    "operator": "Erläutern",
    "prompt": "Erklären Sie den Unterschied zwischen Inventur, Inventar und Bilanz anhand eines IT-Unternehmens.",
    "rubric": [
      [
        "Inventur als Bestandsaufnahme",
        2
      ],
      [
        "Inventar als Verzeichnis",
        2
      ],
      [
        "Bilanz als verdichtete Gegenüberstellung",
        2
      ]
    ],
    "model": "Inventur ermittelt den tatsächlichen Bestand. Das Inventar enthält Vermögen und Schulden im Einzelnen. Die Bilanz stellt Aktiva und Passiva zusammengefasst dar."
  },
  {
    "id": "covopen_022",
    "section": "p13",
    "topic": "p13/kennzahlen-wirtschaftlichkeit",
    "points": 4,
    "operator": "Berechnen",
    "prompt": "Es liegen vor: Bank 20.000 €, kurzfristige Forderungen 35.000 €, Vorräte 45.000 €, kurzfristige Verbindlichkeiten 50.000 €. Ermitteln Sie Liquidität 1. und 2. Grades.",
    "rubric": [
      [
        "Liquidität 1 = 40 %",
        2
      ],
      [
        "Liquidität 2 = 110 %",
        2
      ]
    ],
    "model": "1. Grad: 20.000/50.000=40 %. 2. Grad: (20.000+35.000)/50.000=110 %."
  },
  {
    "id": "covopen_023",
    "section": "p13",
    "topic": "p13/kennzahlen-wirtschaftlichkeit",
    "points": 4,
    "operator": "Berechnen",
    "prompt": "Eigenfertigung verursacht 12.000 € Fixkosten plus 8 € pro Vorgang. Externer Dienstleister verlangt 14 € pro Vorgang. Berechnen Sie die kritische Menge.",
    "rubric": [
      [
        "Ansatz 12.000 + 8x = 14x",
        2
      ],
      [
        "Richtige kritische Menge 2.000 Vorgänge",
        2
      ]
    ],
    "model": "12.000 = 6x, also x=2.000. Unterhalb günstiger extern, oberhalb Eigenfertigung bei gleichen übrigen Faktoren."
  },
  {
    "id": "covopen_024",
    "section": "p13",
    "topic": "p13/kennzahlen-wirtschaftlichkeit",
    "points": 6,
    "operator": "Beurteilen",
    "prompt": "Ein Cloudangebot hat den niedrigsten Listenpreis, aber teuren Support und hohen Datenexportaufwand. Nennen Sie drei weitere Entscheidungskriterien und begründen Sie die TCO-Sicht.",
    "rubric": [
      [
        "Drei plausible unterschiedliche Kriterien",
        3
      ],
      [
        "TCO über Nutzungsdauer überzeugend begründet",
        3
      ]
    ],
    "model": "Supportkosten, Datenexport/Exit-Kosten, Verfügbarkeit/SLA oder Integrationskosten. TCO zeigt gesamten Aufwand statt bloßer Anschaffung."
  },
  {
    "id": "covopen_025",
    "section": "p13",
    "topic": "p13/kalkulation",
    "points": 4,
    "operator": "Berechnen",
    "prompt": "Eine Softwarelizenz wird für 75 € verkauft. Variable Kosten betragen 30 € je Lizenz, Fixkosten 9.000 €. Berechnen Sie Stückdeckungsbeitrag und Break-even-Menge.",
    "rubric": [
      [
        "Stück-DB 45 €",
        2
      ],
      [
        "Break-even-Menge 200 Lizenzen",
        2
      ]
    ],
    "model": "75−30=45 €; 9.000/45=200 Lizenzen."
  },
  {
    "id": "covopen_026",
    "section": "p13",
    "topic": "p13/vertragsrecht",
    "points": 6,
    "operator": "Erläutern",
    "prompt": "Ein Dienstleister muss eine funktionsfähige Software liefern und nach vereinbarten Kriterien abnehmen lassen. Erläutern Sie den Unterschied zu einem reinen Dienstvertrag.",
    "rubric": [
      [
        "Werkvertrag mit geschuldetem Ergebnis",
        3
      ],
      [
        "Dienstvertrag mit geschuldeter Tätigkeit und ohne zwingenden Erfolg",
        3
      ]
    ],
    "model": "Beim Werkvertrag ist ein bestimmter Erfolg geschuldet. Beim Dienstvertrag grundsätzlich die vereinbarte Tätigkeit; Art und Leistungsversprechen sind im Vertrag zu prüfen."
  },
  {
    "id": "covopen_027",
    "section": "wiso",
    "topic": "wiso/weiterbildung-digital-zusammenarbeiten",
    "points": 6,
    "operator": "Unterscheiden",
    "prompt": "Unterscheiden Sie Berufsausbildung, Fortbildung und Umschulung jeweils mit einem passenden beruflichen Beispiel.",
    "rubric": [
      [
        "Ausbildung zutreffend beschrieben",
        2
      ],
      [
        "Fortbildung zutreffend beschrieben",
        2
      ],
      [
        "Umschulung zutreffend beschrieben",
        2
      ]
    ],
    "model": "Ausbildung vermittelt erste Berufsfähigkeit; Fortbildung erweitert oder aktualisiert vorhandene Qualifikationen; Umschulung qualifiziert für einen anderen Beruf."
  },
  {
    "id": "covopen_028",
    "section": "wiso",
    "topic": "wiso/weiterbildung-digital-zusammenarbeiten",
    "points": 6,
    "operator": "Nennen und erläutern",
    "prompt": "Ein Projektteam möchte Dateien digital gemeinsam bearbeiten. Nennen Sie zwei Sicherheitsmaßnahmen und erläutern Sie ihren Nutzen.",
    "rubric": [
      [
        "Berechtigungen/Need-to-know mit Wirkung",
        3
      ],
      [
        "Versionierung/Backup/MFA mit Wirkung",
        3
      ]
    ],
    "model": "Begrenzte Zugriffsrechte verhindern unberechtigte Einsicht; Versionierung oder Backup erleichtert Nachvollziehbarkeit und Wiederherstellung."
  },
  {
    "id": "covopen_029",
    "section": "wiso",
    "topic": "wiso/sozialversicherung",
    "points": 6,
    "operator": "Nennen",
    "prompt": "Nennen Sie alle fünf Zweige der gesetzlichen Sozialversicherung und bestimmen Sie den Zweig, dessen Beiträge grundsätzlich allein der Arbeitgeber trägt.",
    "rubric": [
      [
        "Fünf Zweige korrekt",
        5
      ],
      [
        "Unfallversicherung als allein AG-finanziert",
        1
      ]
    ],
    "model": "Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung. Die gesetzliche Unfallversicherung finanziert grundsätzlich der Arbeitgeber."
  }
];
