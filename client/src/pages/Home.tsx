import { useEffect } from 'react';
import { ArrowRight, Check, Cloud, Building, ServerCog } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { CommandCenter, AgentMock, VoiceApiMock, KnowledgeMock } from '@/components/site/Mocks';
import PromptDemo from '@/components/site/PromptDemo';
import { modules, industries, trust, type ModuleStatus } from '@/constants/platform';
import { COMPANY, CONTACT, DEMO_URL } from '@/constants/contact';

const statusClass: Record<ModuleStatus, string> = {
  'Early access': 'badge badge-beta',
  'In development': 'badge',
  'Roadmap': 'badge badge-muted',
};

const deployments = [
  { icon: Cloud, title: 'YashAI Cloud (India)', body: 'Fully managed, hosted in India. The fastest way to start.' },
  { icon: Building, title: 'Private cloud', body: 'Deployed in your own AWS, Azure or Google Cloud account, in an Indian region.' },
  { icon: ServerCog, title: 'On-premise', body: 'Air-gapped deployment on your own GPUs, for the most sensitive workloads.' },
];

const principles = [
  { title: 'Honest about what works', body: "Our agents say 'I don't know' and hand off to a person instead of guessing. Every answer from your documents shows its source." },
  { title: 'Your data stays yours', body: 'Data stays in India by default, never trains models for other customers, and can stay entirely on your premises.' },
  { title: 'Built for Bharat, not translated', body: 'We design for code-mixed speech and regional languages from the start, not as an afterthought to English.' },
  { title: 'People stay in control', body: 'Every agent action is logged, reviewable and reversible. Sensitive decisions always go to a human.' },
];

const news = [
  { tag: 'Product', date: 'Sep 2026', title: 'Yash Studio opens for early access', body: 'Enterprises can now request access to generate training and product videos in Indian languages.', href: '#studio', art: 'art-a' },
  { tag: 'Company', date: 'Aug 2026', title: 'GetJobEasy launches', body: 'Our career platform for full-stack and Gen AI training, with a placement fee due only after an offer.', href: 'https://jobs.yashaitech.com', art: 'art-b' },
  { tag: 'Company', date: 'Apr 2025', title: 'YashAI Technologies is incorporated', body: 'YashAI Technologies Private Limited is registered in Telangana to build AI for Indian businesses.', href: '#company', art: 'art-c' },
];

const faqs = [
  {
    q: 'Which parts of the platform are available today?',
    a: 'Yash Studio is open for early-access requests. Yash Agents, Yash Voice and Yash Knowledge are in development, and Yash Sovereign is on our roadmap. Each module on this page shows its current status. Our career platform GetJobEasy is live.',
  },
  {
    q: 'What is a design partner?',
    a: 'A company that uses a module before general release, tells us what works and what doesn\'t, and gets founding pricing and direct access to our engineering team in return. We are looking for our first design partners now.',
  },
  {
    q: 'Where is data processed and stored?',
    a: 'In India by default. For regulated workloads we deploy in your own cloud account or on your premises, so data never leaves your control. We never train models for other customers on your data.',
  },
  {
    q: 'Which models do you use?',
    a: 'We build on leading open-weight language and speech models, adapted and evaluated for Indian languages. Because we control the models, we can run them wherever your data needs to stay.',
  },
  {
    q: 'Do you have security certifications?',
    a: 'We are an early-stage company and do not yet hold SOC 2 or ISO 27001 certification; both are on our roadmap. Today we design for India\'s DPDP Act and offer on-premise deployment for sensitive data.',
  },
  {
    q: 'Who is behind YashAI?',
    a: `${COMPANY.legalName} (CIN ${COMPANY.cin}) was incorporated in Telangana in April 2025. We are a Hyderabad-based team.`,
  },
];

const Home = () => {
  useEffect(() => {
    document.title = 'YashAI | Enterprise AI platform for India';
  }, []);

  return (
    <div className="site">
      <a href="#main" className="skip-link">Skip to content</a>
      <a href="#studio" className="announce">
        Yash Studio early access is open: enterprise video in every Indian language <ArrowRight size={14} aria-hidden="true" />
      </a>
      <Header overDark />

      <main id="main">
        {/* Hero: dark, cosmic, with a live-feeling prompt */}
        <section className="hero-dark">
          <div className="stars" aria-hidden="true" />
          <div className="glow" aria-hidden="true" />
          <div className="container-x relative text-center">
            <p className="hero-pill">
              <span className="eyebrow-dot" /> Yash Studio early access is open
            </p>
            <h1 className="display-xl">
              Enterprise AI that <span className="grad">speaks India.</span>
            </h1>
            <p className="hero-sub">
              One platform for agents, real-time voice, generative video and private knowledge search. Built for
              India's languages, deployed in India, on your terms.
            </p>
            <PromptDemo />
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={DEMO_URL} className="btn btn-light">Request a demo <ArrowRight size={18} aria-hidden="true" /></a>
              <a href="#platform" className="btn btn-outline-light">Explore the platform</a>
            </div>
          </div>
        </section>

        {/* Designed-for strip */}
        <section className="strip" aria-label="Platform principles">
          <div className="container-x strip-row">
            <span>Data residency in India</span>
            <span>DPDP Act by design</span>
            <span>Code-mixed Indian languages</span>
            <span>Cloud, private cloud or on-premise</span>
            <span>Open-weight models</span>
          </div>
        </section>

        {/* Platform in action */}
        <section className="section pb-0">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">One control plane</p>
              <h2 className="h2">Every agent, language and deployment in one view.</h2>
            </div>
            <CommandCenter />
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">The platform</p>
              <h2 className="h2">One platform. Five ways to put AI to work.</h2>
              <p className="lead">
                Each module works on its own and gets stronger together: shared models, shared knowledge,
                one place to govern it all.
              </p>
            </div>
            <div className="bento">
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <article key={m.id} id={m.id} className={`module${i < 2 ? ' module-wide' : ''}`}>
                    <div className="flex items-start justify-between gap-4">
                      <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                      <span className={statusClass[m.status]}>{m.status}</span>
                    </div>
                    <p className="module-cat">{m.category}</p>
                    <h3 className="h3">{m.name}</h3>
                    <p className="module-head">{m.headline}</p>
                    <p className="text-soft mt-3 text-[15px] leading-relaxed">{m.description}</p>
                    <ul className="mt-5 space-y-2">
                      {m.capabilities.map((c) => (
                        <li key={c} className="flex gap-2 text-[15px]">
                          <Check size={18} className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deep dives */}
        <section className="section section-alt">
          <div className="container-x space-y-28">
            <div className="spotlight">
              <div>
                <p className="kicker">Yash Agents</p>
                <h2 className="h2">Agents that take action, in the customer's language.</h2>
                <p className="lead">
                  Agents don't stop at answering. They look up the order, create the return, book the pickup and
                  confirm on WhatsApp, and hand off to a person with full context when judgement is needed.
                </p>
              </div>
              <AgentMock />
            </div>
            <div className="spotlight spotlight-rev">
              <div>
                <p className="kicker">Yash Voice</p>
                <h2 className="h2">Voice AI for the way India actually speaks.</h2>
                <p className="lead">
                  Most speech models struggle when a caller switches from Telugu to English mid-sentence. Yash Voice
                  is being built for code-mixed speech from the start, as streaming APIs developers can build on.
                </p>
              </div>
              <VoiceApiMock />
            </div>
            <div className="spotlight">
              <div>
                <p className="kicker">Yash Knowledge</p>
                <h2 className="h2">Every answer, with its source.</h2>
                <p className="lead">
                  Connect drives, policies and tickets once. Staff and agents get answers grounded in your own
                  documents, with citations, and only from files each person is allowed to see.
                </p>
              </div>
              <KnowledgeMock />
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Industries</p>
              <h2 className="h2">Built for India's largest sectors.</h2>
            </div>
            <div className="industry-grid">
              {industries.map(({ name, icon: Icon, uses }) => (
                <div key={name} className="industry">
                  <Icon size={22} className="text-brand" aria-hidden="true" />
                  <h3 className="h3 mt-4">{name}</h3>
                  <ul className="mt-3 space-y-1.5 text-[15px] text-soft">
                    {uses.map((u) => <li key={u}>{u}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="section section-dark">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker kicker-dark">Security & trust</p>
              <h2 className="h2 text-white">Enterprise-grade control over your data.</h2>
              <p className="lead lead-dark">
                Designed for banks, hospitals and government from day one, not bolted on later.
              </p>
            </div>
            <div className="trust-grid">
              {trust.map(({ title, body, icon: Icon }) => (
                <div key={title} className="trust">
                  <Icon size={20} aria-hidden="true" />
                  <h3 className="font-semibold mt-4 text-white">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="deploy-grid">
              {deployments.map(({ icon: Icon, title, body }) => (
                <div key={title} className="deploy">
                  <Icon size={20} aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-[15px]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company */}
        <section id="company" className="section">
          <div className="container-x grid gap-12 md:grid-cols-2 items-start">
            <div>
              <p className="kicker">Company</p>
              <h2 className="h2">Our mission: make world-class AI work for every Indian business.</h2>
              <p className="lead">
                India's businesses run in dozens of languages, under strict data rules, at price points global AI
                products weren't designed for. YashAI is building the platform that fits: from Hyderabad, for India.
              </p>
              <p className="text-soft mt-5">
                Also from YashAI: <a className="text-link" href="https://jobs.yashaitech.com">GetJobEasy</a>, our
                career-training platform for India's next generation of engineers.
              </p>
            </div>
            <dl className="facts">
              <div><dt>Legal name</dt><dd>{COMPANY.legalName}</dd></div>
              <div><dt>Incorporated</dt><dd>24 April 2025, Telangana</dd></div>
              <div><dt>CIN</dt><dd>{COMPANY.cin}</dd></div>
              <div><dt>Headquarters</dt><dd>Hyderabad, India</dd></div>
              <div><dt>Contact</dt><dd><a className="text-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd></div>
            </dl>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Our principles</p>
              <h2 className="h2">How we build AI we'd trust with our own customers.</h2>
            </div>
            <div className="principles">
              {principles.map((p, i) => (
                <div key={p.title} className="principle">
                  <span className="principle-num">0{i + 1}</span>
                  <h3 className="h3">{p.title}</h3>
                  <p className="text-soft mt-2 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsroom */}
        <section id="news" className="section section-alt">
          <div className="container-x">
            <div className="section-head flex items-end justify-between gap-6 max-w-none">
              <div>
                <p className="kicker">Latest</p>
                <h2 className="h2">News from YashAI</h2>
              </div>
            </div>
            <div className="news-grid">
              {news.map((n) => (
                <a key={n.title} href={n.href} className="news-card">
                  <div className={`news-art ${n.art}`} aria-hidden="true" />
                  <div className="p-6">
                    <p className="news-meta">{n.tag} · {n.date}</p>
                    <h3 className="h3 mt-2">{n.title}</h3>
                    <p className="text-soft mt-2 text-[15px] leading-relaxed">{n.body}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-alt">
          <div className="container-x max-w-3xl">
            <div className="section-head">
              <p className="kicker">FAQ</p>
              <h2 className="h2">Questions enterprises ask us.</h2>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-x">
            <div className="cta">
              <h2 className="h2 text-white">Become a design partner.</h2>
              <p className="mt-4 text-white/75 max-w-xl mx-auto text-lg">
                We're looking for a small group of Indian companies to shape the platform with us. Partners get early
                access, founding pricing and a direct line to our engineers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href={DEMO_URL} className="btn btn-light">Request a demo <ArrowRight size={18} aria-hidden="true" /></a>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
