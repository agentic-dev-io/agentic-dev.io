import { useEffect, useState } from 'react';
import { Check, ArrowRight, ExternalLink, Menu, X } from 'lucide-react';

import heroData from '@content/hero.json';
import projectsData from '@content/projects.json';
import stackData from '@content/stack.json';
import servicesData from '@content/services.json';
import aboutData from '@content/about.json';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-[#f0f0f5] overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)'
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] animate-float"
          style={{
            width: '700px', height: '700px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.25) 0%, transparent 70%)',
            top: '-250px', right: '-150px',
            animation: 'float 25s ease-in-out infinite'
          }}
        />
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(38, 255, 212, 0.15) 0%, transparent 70%)',
            bottom: '-200px', left: '-150px',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '-8s'
          }}
        />
        <div
          className="hidden sm:block absolute rounded-full blur-[100px]"
          style={{
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(255, 167, 38, 0.12) 0%, transparent 70%)',
            top: '40%', left: '30%',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '-16s'
          }}
        />
        <div
          className="hidden sm:block absolute rounded-full blur-[100px]"
          style={{
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(77, 208, 225, 0.1) 0%, transparent 70%)',
            top: '60%', right: '20%',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '-12s'
          }}
        />
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              animation: `rise ${20 + i * 3}s linear infinite`,
              animationDelay: `${-i * 5}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center px-4 sm:px-6 py-3 bg-[#050508]/70 backdrop-blur-xl border border-white/[0.08] rounded-full">
            <a href="/" className="flex items-center gap-2 font-mono text-base font-medium text-[#f0f0f5] no-underline">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
              agentic-dev.io
            </a>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('projects')} className="text-[0.9rem] text-[#9999aa] hover:text-[#f0f0f5] transition-colors">
                Projekte
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[0.9rem] text-[#9999aa] hover:text-[#f0f0f5] transition-colors">
                Kontakt
              </button>
              <a
                href="https://github.com/agentic-dev-io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] rounded-full text-[#050508] font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                GitHub
              </a>
            </div>
            <button className="md:hidden text-[#f0f0f5]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-2 px-6 py-4 bg-[#050508]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl mx-4">
              <div className="flex flex-col gap-3">
                <button onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} className="text-left text-sm text-[#9999aa] hover:text-[#f0f0f5] transition-colors py-2">
                  Projekte
                </button>
                <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="text-left text-sm text-[#9999aa] hover:text-[#f0f0f5] transition-colors py-2">
                  Kontakt
                </button>
                <a
                  href="https://github.com/agentic-dev-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] rounded-full text-[#050508] font-semibold text-sm text-center hover:opacity-90 transition-opacity"
                >
                  GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="min-h-screen flex items-center pt-24 pb-16">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Hero Content */}
              <div>
                <h1 className="text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-tight mb-6 font-['Fraunces'] tracking-tight">
                  <span
                    className="bg-gradient-to-r from-[#ff6b35] via-[#ffa726] to-[#26ffd4] bg-clip-text text-transparent"
                    style={{ backgroundSize: '200% 200%', animation: 'gradientShift 8s ease-in-out infinite' }}
                  >
                    {heroData.title.split('\n')[0]}
                  </span>
                  <br />
                  {heroData.title.split('\n')[1]}
                </h1>
                <p className="text-[1.15rem] text-[#9999aa] mb-6 leading-relaxed">
                  {heroData.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {heroData.features.map((feat, i) => (
                    <span key={i} className="flex items-center gap-2 text-[0.95rem] text-[#9999aa]">
                      <Check size={18} className="text-[#26ffd4]" /> {feat}
                    </span>
                  ))}
                </div>
                <a
                  href={heroData.cta_href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] text-[#050508] rounded-xl font-semibold hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(255,107,53,0.35)] transition-all"
                >
                  {heroData.cta_text} <ArrowRight size={18} />
                </a>
              </div>

              {/* Terminal */}
              <div className="bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="flex-1 text-center font-mono text-xs text-[#5a5a6e]">agentic-dev.sh</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  {[
                    { cmd: 'mao', args: 'start --swarm agent-farm', color: '#f0f0f5' },
                    { text: '→ Loading agents...', color: '#9999aa' },
                    { text: '→ mcp-adpa: code analysis ready', color: '#9999aa' },
                    { text: '→ mcp-b: bridge connected', color: '#9999aa' },
                    { text: '✓ 3 agents online. Swarm active.', color: '#26ffd4', success: true },
                    { text: '✓ Open Source. Built to ship.', color: '#26ffd4', success: true, cursor: true }
                  ].map((line, i) => (
                    <div
                      key={i}
                      className="opacity-0"
                      style={{
                        animation: `typeLine 0.5s ease forwards`,
                        animationDelay: `${0.5 + i * 0.7}s`
                      }}
                    >
                      {line.cmd && <span className="text-[#26ffd4]">$ </span>}
                      {line.cmd && <span className="text-[#f0f0f5]">{line.cmd} </span>}
                      {line.args && <span className="text-[#ffa726]">{line.args}</span>}
                      {line.text && <span style={{ color: line.color }}>{line.text}</span>}
                      {line.cursor && <span className="inline-block w-2 h-4 bg-[#ff6b35] ml-1 animate-[blink_1s_step-end_infinite]" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-widest text-[#5a5a6e] mb-4 font-mono">Open Source</div>
            <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Unsere Projekte</h2>
            <p className="text-lg text-[#9999aa] mb-10 max-w-[700px]">
              Frameworks, Tools und Plugins die wir selbst bauen und benutzen.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project, i) => (
                <a
                  key={i}
                  href={project.metadata.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl hover:border-[#ff6b35]/40 hover:shadow-[0_8px_32px_rgba(255,107,53,0.1)] hover:-translate-y-1 transition-all block no-underline"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div className="flex items-center gap-2">
                      {project.metadata.badge && (
                        <span className="px-2 py-0.5 bg-[#ff6b35]/10 border border-[#ff6b35]/30 text-[#ff6b35] text-[0.65rem] font-semibold rounded-full uppercase tracking-wider">
                          {project.metadata.badge}
                        </span>
                      )}
                      <ExternalLink size={14} className="text-[#5a5a6e] group-hover:text-[#ff6b35] transition-colors" />
                    </div>
                  </div>
                  <h3 className="font-mono text-base font-semibold mb-2 text-[#f0f0f5] group-hover:text-[#ff6b35] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#9999aa] mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] text-[0.7rem] text-[#5a5a6e] rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://github.com/orgs/agentic-dev-io/repositories?q=mirror%3Afalse+fork%3Afalse+archived%3Afalse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#9999aa] hover:text-[#ff6b35] transition-colors font-mono"
              >
                Alle Repositories ansehen <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="py-12 md:py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Tech Stack</h2>
            <p className="text-lg text-[#9999aa] mb-8">Die Technologien hinter unseren Projekten.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stackData.map((item, i) => (
                <div key={i} className="p-6 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl text-center hover:border-white/[0.15] transition-all">
                  <div className="font-mono text-base text-[#f0f0f5] mb-2">{item.title}</div>
                  <div className="text-xs text-[#5a5a6e]">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-12 md:py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Was wir bauen</h2>
            <p className="text-lg text-[#9999aa] mb-8">Drei Bereiche, ein Fokus: AI Agents die wirklich funktionieren.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {servicesData.map((service, i) => (
                <div
                  key={i}
                  className={`p-8 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border rounded-2xl relative hover:border-white/[0.15] transition-all ${
                    service.metadata.featured ? 'border-[#ff6b35]' : 'border-white/[0.08]'
                  }`}
                >
                  {service.metadata.featured && (
                    <span className="absolute -top-3 right-5 px-3 py-1 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] text-[#050508] text-xs font-semibold rounded-full">
                      Core
                    </span>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{service.icon} {service.title}</h3>
                  <p className="text-sm text-[#9999aa] mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#9999aa]">
                        <Check size={14} className="text-[#26ffd4] flex-shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-8 font-['Fraunces']">{aboutData.title}</h2>
            <div>
              {aboutData.metadata.paragraphs.map((p, i) => (
                <p key={i} className="text-[#9999aa] mb-4" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              <div className="flex flex-wrap gap-4 mt-6">
                {aboutData.metadata.links.map((link, i) => (
                  <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[rgba(24,24,32,0.6)] border border-white/[0.08] rounded-lg text-sm text-[#9999aa] hover:border-[#ff6b35] hover:text-[#f0f0f5] transition-all">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 p-6 bg-[rgba(24,24,32,0.4)] border border-white/[0.06] rounded-2xl">
              <div className="text-xs uppercase tracking-widest text-[#5a5a6e] mb-6 font-mono">Evolution</div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4">
                {[
                  { year: '2004', label: 'Blender Origin', color: '#9999aa' },
                  { year: '2008', label: 'VWAG Projekte', color: '#22d3ee' },
                  { year: '2014', label: 'Neural Research', color: '#a78bfa' },
                  { year: '2024', label: 'AI Agents', color: '#ffa726' },
                  { year: '2025', label: 'agentic-dev', color: '#ff6b35' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: item.color }} />
                    <div className="font-mono text-sm text-[#f0f0f5]">{item.year}</div>
                    <div className="text-[0.7rem] text-[#5a5a6e] mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 md:py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[650px] mx-auto p-6 md:p-12 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl text-center">
              <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Let's build.</h2>
              <p className="text-[#9999aa] mb-8">
                Alle unsere Projekte sind Open Source. Schau dir den Code an, öffne Issues, oder bau mit uns.
              </p>
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://github.com/agentic-dev-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] text-[#050508] rounded-xl font-semibold hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(255,107,53,0.35)] transition-all"
                >
                  GitHub Org <ArrowRight size={18} />
                </a>
                <div className="flex gap-8 mt-4">
                  <a href="mailto:hello@agentic-dev.io" className="text-sm text-[#5a5a6e] hover:text-[#f0f0f5] transition-colors">
                    hello@agentic-dev.io
                  </a>
                  <a href="https://www.linkedin.com/in/bj%C3%B6rn-bethge-a0754a329" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5a5a6e] hover:text-[#f0f0f5] transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.08]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5a5a6e]">© 2026 agentic-dev.io · agentic-dev Team · Deutschland</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:hello@agentic-dev.io" className="text-sm text-[#5a5a6e] hover:text-[#9999aa] transition-colors">
              Kontakt
            </a>
            <a href="https://www.linkedin.com/in/bj%C3%B6rn-bethge-a0754a329" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5a5a6e] hover:text-[#9999aa] transition-colors">
              LinkedIn
            </a>
            <a href="/impressum.html" className="text-sm text-[#5a5a6e] hover:text-[#9999aa] transition-colors">
              Impressum & Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
