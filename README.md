# agentic-dev.io

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/N4N71WOHZ3)

**Agentic Systems & AI Development**

[\![Live](https://img.shields.io/badge/agentic--dev.io-live-blue?style=flat-square)](https://agentic-dev.io)

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/)
- Content from DuckDB CMS (build-time JSON, zero runtime overhead)
- Deployed via GitHub Pages + GitHub Actions

Deutsch ist unter `/` und Englisch unter `/en/` verfügbar. Die englischen CMS-Texte stehen ergänzend in `src/english.js`; Impressum und Datenschutz sind in beiden Sprachen verfügbar; die englische Fassung verweist auf das deutsche Original.

## Development

Der GitHub-Pages-Build benötigt das Repository-Secret `CMS_DEPLOY_KEY`: einen privaten SSH-Deploy-Key mit ausschließlich lesendem Zugriff auf `agentic-dev-io/cms`.

```bash
npm install
npm run dev      # Dev server on port 5173
npm run build    # Production build → dist/
npm run preview  # Preview build on port 4173
```

Hero, Leistungen einschließlich Workshops, Projekte und Vorstellung werden im CMS gepflegt und mit `uv run cms export --site agentic-dev` aus dem CMS-Verzeichnis exportiert. Angebot und Projekte verwenden einzelne Karten mit einheitlichen Abständen und Rundungen. Die Seite nutzt eine dunkle redaktionelle Gestaltung mit schieferblauer Palette nach der Designvorlage; Einsatzbeispiele, der Ablauf im Ansatz und der Kontakttext stehen in `src/App.jsx`.

Die technische Bestandsaufnahme zum AI Act steht in `docs/ai-act-website-sichtung.md`.

## License

[MIT Ethical Use](LICENSE)

