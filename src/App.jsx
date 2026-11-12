import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { getEmail, mailtoLink } from './utils/email';
import heroData from '@content/hero.json';
import projectsData from '@content/projects.json';
import servicesData from '@content/services.json';
import aboutData from '@content/about.json';
import { english } from './english';

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
  const en = /^\/en(?:\/|$)/.test(window.location.pathname);
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);
  useEffect(() => {
    if (window.location.hash) {
      const section = document.getElementById(window.location.hash.slice(1));
      if (section) section.scrollIntoView({ behavior: 'instant' });
    }
  }, []);
  const hero = en ? english.hero : heroData;
  const services = en ? servicesData.map(service => ({ ...service, ...english.services[service.block_id] })) : servicesData;
  const projects = en ? projectsData.map(project => ({ ...project, description: english.projects[project.block_id] || project.description })) : projectsData;
  const links = en ? aboutData.metadata.links.map(link => link.label === 'Mein Hintergrund' ? { label: 'My background', href: 'https://synapticore.io/en/#about' } : link) : aboutData.metadata.links;
  return (
    <div className="site-shell" id="start">
      <header className="site-header"><div className="layout header-inner">
        <a className="wordmark" href="#start" aria-label={en ? 'agentic-dev.io – back to top' : 'agentic-dev.io – zum Anfang'}>agentic-dev<span>.io</span></a>
        <nav className="site-nav" aria-label={en ? 'Main navigation' : 'Hauptnavigation'}>
          <a href="#approach">{en ? 'Approach' : 'Ansatz'}</a><a href="#services">{en ? 'Services' : 'Leistungen'}</a><a href="#projects">{en ? 'Projects' : 'Projekte'}</a><a href="#about">{en ? 'About' : 'Über mich'}</a><a className="nav-contact" href="#contact">{en ? 'Contact' : 'Kontakt'} <ArrowRight size={15} aria-hidden="true" /></a>
          <span className="language-switch" role="group" aria-label={en ? 'Language' : 'Sprache'}><a href={`/${hash}`} lang="de" aria-current={!en ? 'page' : undefined}>DE</a><span aria-hidden="true">/</span><a href={`/en/${hash}`} lang="en" aria-current={en ? 'page' : undefined}>EN</a></span>
        </nav>
      </div></header>
      <main>
        <section className="hero section-rail" aria-labelledby="hero-title"><div className="layout hero-inner">
          <div className="hero-topline"><span>{hero.subtitle}</span><span>{en ? 'Architecture · Integration · Knowledge transfer' : 'Architektur · Integration · Wissenstransfer'}</span></div>
          <div className="hero-grid"><div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {en ? 'For teams putting AI to work' : 'Für Teams, die KI in ihre Arbeit bringen'}</p>
            <h1 id="hero-title">{en ? 'Agentic systems' : 'Agentensysteme'}<br /><span>{en ? 'for your' : 'für Ihre'}</span><br />{en ? 'workflows' : 'Arbeitsabläufe'}<span className="accent">.</span></h1>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions"><a className="button-primary" href="#contact">{hero.cta_text}<ArrowRight size={18} aria-hidden="true" /></a><a className="button-link" href="#approach">{en ? 'My approach' : 'Mein Ansatz'} <ArrowDownRight size={17} aria-hidden="true" /></a></div>
          </div><div className="system-diagram" aria-label={en ? 'From task through agents and tools to evaluation' : 'Vom Auftrag über Agenten und Werkzeuge zur Prüfung'}>
            <div className="diagram-heading"><span>{en ? 'A system working together' : 'Ein System, das zusammenarbeitet'}</span><span aria-hidden="true">↗</span></div>
            <div className="diagram-flow">
              <div className="diagram-node"><span>{en ? '01 / TASK' : '01 / AUFGABE'}</span><strong>{en ? 'Your workflow' : 'Ihr Arbeitsprozess'}</strong><small>{en ? 'Goal · Context · Approvals' : 'Ziel · Kontext · Freigaben'}</small></div>
              <div className="diagram-connection" aria-hidden="true" />
              <div className="diagram-node diagram-node--active"><span>{en ? '02 / EXECUTION' : '02 / AUSFÜHRUNG'}</span><strong>{en ? 'Agent & tools' : 'Agent & Werkzeuge'}</strong><small>{en ? 'Models · APIs · MCP' : 'Modelle · APIs · MCP'}</small></div>
              <div className="diagram-connection" aria-hidden="true" />
              <div className="diagram-node"><span>{en ? '03 / EVALUATION' : '03 / PRÜFUNG'}</span><strong>{en ? 'Result & team' : 'Ergebnis & Team'}</strong><small>{en ? 'Evaluation · Handover' : 'Evaluation · Übergabe'}</small></div>
            </div><div className="diagram-foot">{en ? 'ARCHITECTURE' : 'ARCHITEKTUR'} <span>→</span> INTEGRATION <span>→</span> EVALUATION</div>
          </div></div>
          <div className="hero-signals">{hero.features.map((feature, i) => <div key={feature}><span>0{i + 1}</span>{feature}</div>)}</div>
        </div></section>
        <section className="section-rail section-dark" id="approach"><div className="layout section-inner">
          <p className="section-label">01 / {en ? 'Approach' : 'Ansatz'}</p>
          <div className="section-intro"><h2>{en ? 'From a challenge to a ' : 'Von der Aufgabe zum '}<span>{en ? 'workflow you can evaluate.' : 'überprüfbaren Ablauf.'}</span></h2><p>{en ? 'A model alone does not solve a workflow. I connect it with the right tools, information and checks — tailored to your task and environment.' : 'Ein Modell allein löst noch keinen Arbeitsprozess. Ich verbinde es mit den richtigen Werkzeugen, Informationen und Prüfstellen – passend zu Ihrer Aufgabe und Umgebung.'}</p></div>
          <div className="approach-grid">{(en ? english.approach : approach).map(([number, title, text]) => <article className="approach-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>
        <section className="section-rail" id="services"><div className="layout section-inner">
          <p className="section-label">02 / {en ? 'Services' : 'Leistungen'}</p>
          <div className="section-intro"><h2>{en ? 'What I ' : 'Was ich '}<span>{en ? 'offer.' : 'anbiete.'}</span></h2><p>{en ? 'Advice, technical implementation and knowledge transfer — individually or as combined support throughout your project.' : 'Beratung, technische Umsetzung und Wissensvermittlung – einzeln oder als gemeinsame Begleitung Ihres Projekts.'}</p></div>
          <div className="service-grid">{services.map((service, i) => <article className="service-card" key={service.block_id}><span className="service-number">0{i + 1} / {['CONSULTING', 'ENGINEERING', 'CONSULTING', 'EDUCATION'][i]}</span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.features.map(feature => <li key={feature}>{feature}</li>)}</ul></article>)}</div>
          <p className="deployment-note"><span>{en ? 'Your environment.' : 'Ihre Umgebung.'}</span> {en ? 'Depending on the task and requirements, local, on-premises or cloud solutions may be appropriate.' : 'Je nach Aufgabe und Anforderungen kommen lokale, On-Premises- oder Cloud-Lösungen in Frage.'}</p>
        </div></section>
        <section className="section-rail section-dark" id="applications"><div className="layout section-inner">
          <p className="section-label">03 / {en ? 'Applications' : 'Einsatzmöglichkeiten'}</p>
          <div className="section-intro"><h2>{en ? 'For work that ' : 'Für Aufgaben, die '}<span>{en ? 'moves forward.' : 'weitergehen.'}</span></h2><p>{en ? 'The right implementation depends on your data, tools and desired result. Some possible starting points:' : 'Welche Umsetzung sinnvoll ist, hängt von Ihren Daten, Werkzeugen und dem gewünschten Ergebnis ab. Mögliche Ausgangspunkte:'}</p></div>
          <div className="examples-list">{(en ? english.examples : examples).map(([title, description], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div></section>
        <section className="section-rail" id="projects"><div className="layout section-inner">
          <p className="section-label">04 / Open Source</p>
          <div className="section-intro"><h2>{en ? 'Work you can ' : 'Arbeit zum '}<span>{en ? 'explore.' : 'Nachvollziehen.'}</span></h2><p>{en ? 'My open-source projects show how I connect agents, data and tools.' : 'Eigene Projekte zeigen, wie ich Agenten, Daten und Werkzeuge miteinander verbinde.'}</p></div>
          <div className="project-grid">{projects.map(project => <a className="project-card" key={project.block_id} href={project.metadata.href} target="_blank" rel="noopener noreferrer"><div className="project-card__top"><span>OPEN SOURCE / {project.metadata.badge || (en ? 'PROJECT' : 'PROJEKT')}</span><ExternalLink size={17} aria-hidden="true" /></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.features.map(tag => <span key={tag}>{tag}</span>)}</div></a>)}</div>
          <a className="text-link" href="https://github.com/orgs/agentic-dev-io/repositories?q=mirror%3Afalse+fork%3Afalse+archived%3Afalse" target="_blank" rel="noopener noreferrer">{en ? 'Explore all repositories' : 'Alle Repositories ansehen'} <ArrowRight size={17} aria-hidden="true" /></a>
        </div></section>
        <section className="section-rail section-dark" id="about"><div className="layout section-inner">
          <p className="section-label">05 / {en ? 'About me' : 'Über mich'}</p>
          <div className="about-grid"><div><h2>Björn<br /><span>Bethge.</span></h2><p className="about-role">FOUNDER &amp; AI SYSTEMS ENGINEER</p></div><div className="about-copy">{(en ? english.about : aboutData.metadata.paragraphs).map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="about-links">{links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ExternalLink size={15} aria-hidden="true" /></a>)}</div></div></div>
        </div></section>
        <section className="section-rail contact-section" id="contact"><div className="layout section-inner">
          <p className="section-label">06 / {en ? 'Contact' : 'Kontakt'}</p><h2>{en ? 'A challenge' : 'Eine Aufgabe'}<span className="accent">.</span><br /><span>{en ? 'A good start.' : 'Ein guter Anfang.'}</span></h2>
          <p>{en ? 'Looking to develop an agentic system, integrate it into an existing process or take a prototype further? Tell me about the challenge you want to solve.' : 'Sie möchten ein agentisches System entwickeln, in bestehende Prozesse integrieren oder einen Prototyp weiterentwickeln? Erzählen Sie mir, welche Aufgabe Sie lösen möchten.'}</p><a className="button-primary" href={mailtoLink(EMAIL_DOMAIN)}>{en ? 'Discuss your project' : 'Projekt besprechen'} <Mail size={18} aria-hidden="true" /></a><a className="contact-email" href={mailtoLink(EMAIL_DOMAIN)}>{getEmail(EMAIL_DOMAIN)}</a>
        </div></section>
      </main>
      <footer className="site-footer"><div className="layout footer-inner"><span>© {new Date().getFullYear()} agentic-dev.io · Björn Bethge</span><nav aria-label={en ? 'Legal information and contact' : 'Rechtliches und Kontakt'}><a href={mailtoLink(EMAIL_DOMAIN)}>{en ? 'Contact' : 'Kontakt'}</a><a href="https://github.com/agentic-dev-io" target="_blank" rel="noopener noreferrer">GitHub</a><a href={en ? '/en/impressum.html' : '/impressum.html'}>{en ? 'Legal notice & privacy' : 'Impressum & Datenschutz'}</a></nav></div></footer>
    </div>
  );
}

export default App;
