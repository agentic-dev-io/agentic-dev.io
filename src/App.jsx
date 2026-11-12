import { ArrowDownRight, ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { getEmail, mailtoLink } from './utils/email';
import heroData from '@content/hero.json';
import projectsData from '@content/projects.json';
import servicesData from '@content/services.json';
import aboutData from '@content/about.json';

const EMAIL_DOMAIN = 'agentic-dev.io';
const approach = [
  ['01', 'Aufgabe', 'Wo hilft ein Agent wirklich? Wir klären den Ablauf, die Anforderungen und die Grenzen.'],
  ['02', 'Verbindung', 'Werkzeuge und Daten werden so angebunden, dass der Agent im vorgesehenen Rahmen arbeiten kann.'],
  ['03', 'Prüfung', 'Testfälle, Freigaben und nachvollziehbare Ergebnisse helfen Ihrem Team, das Verhalten zu beurteilen.'],
  ['04', 'Übergabe', 'Code, Dokumentation und gemeinsames Arbeiten schaffen die Grundlage für die Weiterentwicklung.'],
];
const examples = [
  ['Wissen & Recherche', 'Dokumente und interne Quellen auswerten, Ergebnisse mit Bezug auf ihre Grundlagen aufbereiten.'],
  ['Entwicklung & Betrieb', 'Entwicklungsteams bei wiederkehrenden Aufgaben unterstützen und Werkzeuge in bestehende Abläufe einbinden.'],
  ['Systeme & Daten', 'Informationen aus Datenbanken und Fachsoftware für einen konkreten Arbeitsprozess nutzbar machen.'],
];

function App() {
  return (
    <div className="site-shell" id="start">
      <header className="site-header">
        <div className="layout header-inner">
          <a className="wordmark" href="#start" aria-label="agentic-dev.io – zum Anfang">agentic-dev<span>.io</span></a>
          <nav className="site-nav" aria-label="Hauptnavigation">
            <a href="#approach">Ansatz</a><a href="#services">Leistungen</a><a href="#projects">Projekte</a><a href="#about">Über mich</a><a className="nav-contact" href="#contact">Kontakt <ArrowRight size={15} aria-hidden="true" /></a>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero section-rail" aria-labelledby="hero-title">
          <div className="layout hero-inner">
            <div className="hero-topline"><span>{heroData.subtitle}</span><span>Architektur · Integration · Wissenstransfer</span></div>
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span className="status-dot" /> Für Teams, die KI in ihre Arbeit bringen</p>
                <h1 id="hero-title">Agentensysteme<br /><span>für Ihre</span><br />Arbeitsabläufe<span className="accent">.</span></h1>
                <p className="hero-description">{heroData.description}</p>
                <div className="hero-actions"><a className="button-primary" href="#contact">{heroData.cta_text}<ArrowRight size={18} aria-hidden="true" /></a><a className="button-link" href="#approach">Mein Ansatz <ArrowDownRight size={17} aria-hidden="true" /></a></div>
              </div>
              <div className="system-diagram" aria-label="Vom Auftrag über Agenten und Werkzeuge zur Prüfung">
                <div className="diagram-heading"><span>Ein System, das zusammenarbeitet</span><span aria-hidden="true">↗</span></div>
                <div className="diagram-flow">
                  <div className="diagram-node"><span>01 / AUFGABE</span><strong>Ihr Arbeitsprozess</strong><small>Ziel · Kontext · Freigaben</small></div>
                  <div className="diagram-connection" aria-hidden="true" />
                  <div className="diagram-node diagram-node--active"><span>02 / AUSFÜHRUNG</span><strong>Agent &amp; Werkzeuge</strong><small>Modelle · APIs · MCP</small></div>
                  <div className="diagram-connection" aria-hidden="true" />
                  <div className="diagram-node"><span>03 / PRÜFUNG</span><strong>Ergebnis &amp; Team</strong><small>Evaluation · Übergabe</small></div>
                </div>
                <div className="diagram-foot">ARCHITEKTUR <span>→</span> INTEGRATION <span>→</span> EVALUATION</div>
              </div>
            </div>
            <div className="hero-signals">{heroData.features.map((feature, i) => <div key={feature}><span>0{i + 1}</span>{feature}</div>)}</div>
          </div>
        </section>

        <section className="section-rail section-dark" id="approach">
          <div className="layout section-inner">
            <p className="section-label">01 / Ansatz</p>
            <div className="section-intro"><h2>Von der Aufgabe zum <span>überprüfbaren Ablauf.</span></h2><p>Ein Modell allein löst noch keinen Arbeitsprozess. Ich verbinde es mit den richtigen Werkzeugen, Informationen und Prüfstellen – passend zu Ihrer Aufgabe und Umgebung.</p></div>
            <div className="approach-grid">{approach.map(([number, title, text]) => <article className="approach-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="section-rail" id="services">
          <div className="layout section-inner">
            <p className="section-label">02 / Leistungen</p>
            <div className="section-intro"><h2>Was ich <span>anbiete.</span></h2><p>Beratung, technische Umsetzung und Wissensvermittlung – einzeln oder als gemeinsame Begleitung Ihres Projekts.</p></div>
            <div className="service-grid">{servicesData.map((service, i) => <article className="service-card" key={service.block_id}><span className="service-number">0{i + 1} / {['CONSULTING', 'ENGINEERING', 'CONSULTING', 'EDUCATION'][i]}</span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.features.map(feature => <li key={feature}>{feature}</li>)}</ul></article>)}</div>
            <p className="deployment-note"><span>Ihre Umgebung.</span> Je nach Aufgabe und Anforderungen kommen lokale, On-Premises- oder Cloud-Lösungen in Frage.</p>
          </div>
        </section>

        <section className="section-rail section-dark" id="applications">
          <div className="layout section-inner">
            <p className="section-label">03 / Einsatzmöglichkeiten</p>
            <div className="section-intro"><h2>Für Aufgaben, die <span>weitergehen.</span></h2><p>Welche Umsetzung sinnvoll ist, hängt von Ihren Daten, Werkzeugen und dem gewünschten Ergebnis ab. Mögliche Ausgangspunkte:</p></div>
            <div className="examples-list">{examples.map(([title, description], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="section-rail" id="projects">
          <div className="layout section-inner">
            <p className="section-label">04 / Open Source</p>
            <div className="section-intro"><h2>Arbeit zum <span>Nachvollziehen.</span></h2><p>Eigene Projekte zeigen, wie ich Agenten, Daten und Werkzeuge miteinander verbinde.</p></div>
            <div className="project-grid">{projectsData.map(project => <a className="project-card" key={project.block_id} href={project.metadata.href} target="_blank" rel="noopener noreferrer"><div className="project-card__top"><span>OPEN SOURCE / {project.metadata.badge || 'PROJEKT'}</span><ExternalLink size={17} aria-hidden="true" /></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.features.map(tag => <span key={tag}>{tag}</span>)}</div></a>)}</div>
            <a className="text-link" href="https://github.com/orgs/agentic-dev-io/repositories?q=mirror%3Afalse+fork%3Afalse+archived%3Afalse" target="_blank" rel="noopener noreferrer">Alle Repositories ansehen <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="section-rail section-dark" id="about">
          <div className="layout section-inner">
            <p className="section-label">05 / Über mich</p>
            <div className="about-grid"><div><h2>Björn<br /><span>Bethge.</span></h2><p className="about-role">FOUNDER &amp; AI SYSTEMS ENGINEER</p></div><div className="about-copy">{aboutData.metadata.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="about-links">{aboutData.metadata.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ExternalLink size={15} aria-hidden="true" /></a>)}</div></div></div>
          </div>
        </section>

        <section className="section-rail contact-section" id="contact">
          <div className="layout section-inner"><p className="section-label">06 / Kontakt</p><h2>Eine Aufgabe<span className="accent">.</span><br /><span>Ein guter Anfang.</span></h2><p>Sie möchten ein agentisches System entwickeln, in bestehende Prozesse integrieren oder einen Prototyp weiterentwickeln? Erzählen Sie mir, welche Aufgabe Sie lösen möchten.</p><a className="button-primary" href={mailtoLink(EMAIL_DOMAIN)}>Projekt besprechen <Mail size={18} aria-hidden="true" /></a><a className="contact-email" href={mailtoLink(EMAIL_DOMAIN)}>{getEmail(EMAIL_DOMAIN)}</a></div>
        </section>
      </main>
      <footer className="site-footer"><div className="layout footer-inner"><span>© {new Date().getFullYear()} agentic-dev.io · Björn Bethge</span><nav aria-label="Rechtliches und Kontakt"><a href={mailtoLink(EMAIL_DOMAIN)}>Kontakt</a><a href="https://github.com/agentic-dev-io" target="_blank" rel="noopener noreferrer">GitHub</a><a href="/impressum.html">Impressum &amp; Datenschutz</a></nav></div></footer>
    </div>
  );
}

export default App;
