# Technische AI-Act-Sichtung der Websites

Stand: 12. November 2026. Umfang: lokale Quellstände von synapticore.io, synapticore.studio und agentic-dev.io. Diese technische Bestandsaufnahme ist keine rechtliche Konformitätsfeststellung und prüft weder den veröffentlichten Stand noch Kundenprojekte oder alle sonstigen betrieblichen KI-Nutzungen.

## Feststellungen

- In den untersuchten Website-Quelltexten wurde kein KI-Chat, Modellaufruf oder direkter Aufruf einer KI-Inferenz-API gefunden. Die Angebotsbeschreibungen sprechen über KI, stellen für sich genommen aber kein interaktives KI-System dar.
- Der Roboter auf synapticore.studio ist eine lokal gerenderte Three.js-Animation. Seine Begrüßung und Zeigerreaktion beruhen auf vorgegebenen Animationen und Gelenkberechnungen in `src/RobotGuide.jsx`; sie rufen kein KI-Modell auf.
- Die „World“-Medien sind laut Auskunft des Betreibers Blender-Bilder und -Videos, nicht generativ durch KI erstellt oder verändert. `world/world.js` und `src/lib/scrub-engine.js` spielen die angegebenen Medien ab. Eine eigenständige Prüfung der Entstehung jeder Datei war nicht Bestandteil der Sichtung.
- Aus diesem technischen Befund ergibt sich für die vorhandene Roboteranimation keine KI-Interaktionskennzeichnung allein aufgrund ihrer Mausreaktion. Der Befund ist keine allgemeine Aussage über alle künftigen Medien und Funktionen.

## Wiedervorlage

- Bei jeder neuen KI-Funktion, jeder wesentlichen Änderung am Einsatzzweck und vor einer Veröffentlichung erneut prüfen, ob die Bestandsaufnahme noch zutrifft.
- Zu Beginn jedes Kundenprojekts Einsatzzweck, Rollen und betroffene Personen aufnehmen; die Pflichten für das konkrete System separat beurteilen.
- Bei generierten oder bearbeiteten Medien Herkunft und Zweck dokumentieren und die anwendbaren Transparenzregeln prüfen.
- Vor der nächsten Beurteilung den aktuellen Gesetzestext und die Hinweise der EU-Kommission auf Änderungen prüfen; Daten und Ausnahmen nicht aus dieser Momentaufnahme fortschreiben.
- Eigene betriebliche Nutzung von KI und gegebenenfalls KI-Kompetenz nach Artikel 4 gesondert betrachten.

## Bei Änderungen erneut prüfen

- Bei Einbindung eines KI-Chats oder eines anderen direkt mit Menschen interagierenden KI-Systems Anwendungsbereich, Verantwortlichkeiten und gegebenenfalls den Hinweis auf die KI-Interaktion nach Artikel 50 prüfen. Die Verpflichtungen nach Artikel 50 gelten seit 2. August 2026: [EU-Kommission: Transparenzpflichten](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act).
- Bei neuem KI-erzeugtem oder verändertem Material Herkunft und Verwendungszweck erfassen und prüfen, ob es unter die einschlägigen Transparenzpflichten fällt. Nicht jedes KI-erzeugte Werk ist automatisch ein kennzeichnungspflichtiger Deepfake; Kontext und Merkmale sind entscheidend: [EU-Kommission: Transparenzpflichten](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations).
- Kundenlösungen gesondert nach Einsatzzweck und eigener Rolle als Anbieter oder Betreiber beurteilen. Die Website-Sichtung sagt nichts über die Konformität einzelner Agentensysteme oder Projekte aus.
- Unabhängig von der Website kann Artikel 4 über KI-Kompetenz für Anbieter und Betreiber relevant sein. Die erforderlichen Maßnahmen hängen unter anderem von den eingesetzten Systemen, dem Kontext und den beteiligten Personen ab: [EU-Kommission: Fragen und Antworten zu KI-Kompetenz](https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers).

Maßgeblich sind die tatsächlich geltende Fassung des [AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng), der konkrete Einsatz und die geltenden Übergangsregelungen. Datenschutz, Urheberrecht, Impressum und weitere Rechtsgebiete sind eigenständig zu prüfen.
