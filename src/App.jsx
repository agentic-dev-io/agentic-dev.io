import { useEffect, useState } from 'react';
import { Terminal, Check, ArrowRight, X, Shield, Zap, Lock } from 'lucide-react';

import heroData from '@content/hero.json';
import problemsData from '@content/problems.json';
import solutionsData from '@content/solutions.json';
import stackData from '@content/stack.json';
import servicesData from '@content/services.json';
import comparisonData from '@content/comparison.json';
import aboutData from '@content/about.json';
import ecosystemData from '@shared/ecosystem.json';

const solutionIcons = { Lock, Shield, Zap };

function App() {
  const [scrolled, setScrolled] = useState(false);

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

  const cloudComparison = comparisonData.find(c => c.metadata.side === 'cloud');
  const localComparison = comparisonData.find(c => c.metadata.side === 'local');

  const currentSiteId = 'agentic-dev';

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
          className="absolute rounded-full blur-[100px]"
          style={{
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(255, 167, 38, 0.12) 0%, transparent 70%)',
            top: '40%', left: '30%',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '-16s'
          }}
        />
        <div
          className="absolute rounded-full blur-[100px]"
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
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="flex justify-between items-center px-6 py-3 bg-[#050508]/70 backdrop-blur-xl border border-white/[0.08] rounded-full">
            <a href="/" className="flex items-center gap-2 font-mono text-base font-medium text-[#f0f0f5] no-underline">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
              agentic-dev.io
            </a>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-[0.9rem] text-[#9999aa] hover:text-[#f0f0f5] transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-5 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] rounded-full text-[#050508] font-semibold text-sm hover:opacity-90 transition-opacity">
                Gespräch buchen
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="min-h-screen flex items-center pt-24 pb-16">
          <div className="max-w-[1000px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] text-[#050508] rounded-xl font-semibold hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(255,107,53,0.35)] transition-all"
                >
                  {heroData.cta_text} <ArrowRight size={18} />
                </button>
              </div>

              {/* Terminal */}
              <div className="bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="flex-1 text-center font-mono text-xs text-[#5a5a6e]">local-ai-setup.sh</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  {[
                    { cmd: 'ollama', args: 'run llama3.1', color: '#f0f0f5' },
                    { text: '→ Modell läuft lokal auf deiner GPU...', color: '#9999aa' },
                    { text: '→ Keine Daten werden übertragen...', color: '#9999aa' },
                    { text: '→ API-Kosten: 0,00 €', color: '#9999aa' },
                    { text: '✓ Bereit. Unbegrenzte Anfragen.', color: '#26ffd4', success: true },
                    { text: '✓ Deine Daten bleiben bei dir.', color: '#26ffd4', success: true, cursor: true }
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

        {/* Problem Section */}
        <section className="py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-8">
            <h2 className="text-3xl font-semibold mb-8 font-['Fraunces']">ChatGPT & Co. sind praktisch, aber...</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {problemsData.map((item, i) => (
                <div key={i} className="p-6 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-[#9999aa]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-8">
            <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Die Alternative: Alles lokal</h2>
            <p className="text-lg text-[#9999aa] mb-8 max-w-[700px]">
              Moderne AI-Modelle laufen auf deinem eigenen Rechner.
              Einmal einrichten, für immer nutzen.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {solutionsData.map((item, i) => {
                const IconComponent = solutionIcons[item.icon];
                return (
                  <div key={i} className="p-8 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl text-center hover:border-white/[0.15] transition-all">
                    {IconComponent && <IconComponent size={32} className="mx-auto mb-4 text-[#26ffd4]" />}
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-[#9999aa]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-8">
            <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Der Stack</h2>
            <p className="text-lg text-[#9999aa] mb-8">Open Source Tools, professionell konfiguriert.</p>
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

        {/* Services Section */}
        <section id="services" className="py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-8">
            <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Services</h2>
            <p className="text-lg text-[#9999aa] mb-8">Von Setup bis Automatisierung – ich helfe dir, lokal produktiv zu werden.</p>
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
                      Beliebt
                    </span>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{service.icon} {service.title}</h3>
                  <p className="text-sm text-[#9999aa] mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#9999aa]">
                        <Check size={14} className="text-[#26ffd4]" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-[#5a5a6e]">
              Preise individuell je nach Umfang –{' '}
              <button onClick={() => scrollToSection('contact')} className="text-[#ff6b35] hover:underline">
                lass uns reden
              </button>
            </p>
          </div>
        </section>

        {/* USP Comparison */}
        <section className="py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-8">
            <h2 className="text-3xl font-semibold mb-8 font-['Fraunces']">Cloud vs. Lokal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl">
                <h3 className="text-xs uppercase tracking-widest text-[#5a5a6e] mb-6">{cloudComparison.title}</h3>
                <ul className="space-y-3">
                  {cloudComparison.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#9999aa]">
                      <X size={14} className="text-red-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl">
                <h3 className="text-xs uppercase tracking-widest text-[#5a5a6e] mb-6">{localComparison.title}</h3>
                <ul className="space-y-3">
                  {localComparison.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#9999aa]">
                      <Check size={14} className="text-[#26ffd4]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-8">
            <h2 className="text-3xl font-semibold mb-8 font-['Fraunces']">{aboutData.title}</h2>
            <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
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
              <div className="p-6 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl">
                <h3 className="text-xs uppercase tracking-widest text-[#5a5a6e] mb-4">Meine Projekte</h3>
                {aboutData.metadata.projects.map((proj, i) => (
                  <div key={i} className="py-3 border-b border-white/[0.08] last:border-0">
                    <div className="font-mono text-sm text-[#f0f0f5]">{proj.name}</div>
                    <div className="text-xs text-[#5a5a6e]">{proj.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-8">
            <div className="text-xs uppercase tracking-widest text-[#5a5a6e] mb-4 font-mono">Ecosystem</div>
            <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Drei Orgs. Ein System.</h2>
            <p className="text-lg text-[#9999aa] mb-10 max-w-[700px]">
              agentic-dev ist Teil eines Ökosystems aus Forschung, Entwicklung und Produktion.
              Was im Lab entsteht, wird hier zu Tools – und im Studio zu Produktionen.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {ecosystemData.map((org, i) => {
                const isActive = org.org_id === currentSiteId;
                return (
                  <div
                    key={i}
                    className={`p-8 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border rounded-2xl relative transition-all ${
                      isActive ? 'border-[#ff6b35]/50 shadow-[0_0_30px_rgba(255,107,53,0.1)]' : 'border-white/[0.08] hover:border-white/[0.15]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -top-3 right-5 px-3 py-1 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] text-[#050508] text-xs font-semibold rounded-full">
                        Du bist hier
                      </span>
                    )}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: org.color }} />
                      <span className="font-mono text-sm text-[#f0f0f5]">{org.name}</span>
                    </div>
                    <div className="text-xs uppercase tracking-widest text-[#5a5a6e] mb-3">{org.role}</div>
                    <p className="text-sm text-[#9999aa] mb-4">{org.description}</p>
                    {!isActive && org.href && (
                      <a href={org.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline transition-colors" style={{ color: org.color }}>
                        Entdecken <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 p-6 bg-[rgba(24,24,32,0.4)] border border-white/[0.06] rounded-2xl">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#5a5a6e]">
                <span className="font-mono text-[#22d3ee]">Lab</span>
                <span>forscht</span>
                <ArrowRight size={14} className="text-[#5a5a6e]" />
                <span className="font-mono text-[#ff6b35]">Dev</span>
                <span>baut</span>
                <ArrowRight size={14} className="text-[#5a5a6e]" />
                <span className="font-mono text-[#ffa726]">Studio</span>
                <span>produziert</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 border-t border-white/[0.08]">
          <div className="max-w-[1000px] mx-auto px-8">
            <div className="max-w-[650px] mx-auto p-12 bg-[rgba(24,24,32,0.6)] backdrop-blur-xl border border-white/[0.08] rounded-2xl text-center">
              <h2 className="text-3xl font-semibold mb-4 font-['Fraunces']">Bereit für lokale AI?</h2>
              <p className="text-[#9999aa] mb-8">
                15 Minuten reichen, um zu klären, ob und wie ich dir helfen kann.
                Kein Sales-Pitch, nur ehrliche Beratung.
              </p>
              <div className="flex flex-col items-center gap-4">
                <a
                  href={heroData.cta_href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ffa726] text-[#050508] rounded-xl font-semibold hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(255,107,53,0.35)] transition-all"
                >
                  {heroData.cta_text} <ArrowRight size={18} />
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
              <p className="mt-8 pt-6 border-t border-white/[0.08] text-sm text-[#5a5a6e]">
                Für größere Projekte (Enterprise, Custom Development) →{' '}
                <a href="mailto:hello@agentic-dev.io" className="text-[#ff6b35] hover:underline">
                  lass uns reden
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.08]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5a5a6e]">© 2026 agentic-dev.io · Björn · Deutschland</p>
          <div className="flex gap-8">
            <a href="https://github.com/agentic-dev-io" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5a5a6e] hover:text-[#9999aa] transition-colors">
              GitHub
            </a>
            <a href="mailto:hello@agentic-dev.io" className="text-sm text-[#5a5a6e] hover:text-[#9999aa] transition-colors">
              Kontakt
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
