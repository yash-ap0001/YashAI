import { useEffect } from 'react';
import { ArrowRight, Check, Cloud, Building, ServerCog } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import AgentRun from '@/components/site/AgentRun';
import { Workforce } from '@/components/site/Mocks';
import IndustryExplorer from '@/components/site/IndustryExplorer';
import { ideas, TeamThread } from '@/components/site/AgentTeam';
import { agents, capabilities, steps, plans, comparison } from '@/constants/agents';
import { trust } from '@/constants/platform';
import { COMPANY, CONTACT, DEMO_URL } from '@/constants/contact';

const tools = ['Salesforce', 'HubSpot', 'Zendesk', 'SAP', 'NetSuite', 'Slack', 'Microsoft 365', 'Google Workspace', 'Twilio', 'Jira', 'ServiceNow', 'Shopify'];

const facts = [
  {
    stat: '40%',
    text: 'of enterprise applications are expected to embed task-specific AI agents by the end of 2026, up from under 5% in 2025.',
    source: 'Gartner, via AI Accelerator Institute',
    href: 'https://www.aiacceleratorinstitute.com/30-startups-rebuilding-enterprise-software-with-ai-agents/',
  },
  {
    stat: '60%',
    text: 'of agentic AI founders say workflow integration is the biggest blocker to adoption. That is the part we do for you.',
    source: 'MMC Ventures, State of Agentic AI',
    href: 'https://mmc.vc/research/state-of-agentic-ai-founders-edition/',
  },
  {
    stat: '62%',
    text: 'of agentic AI startups are now paid from core line-of-business budgets, not experimental innovation funds.',
    source: 'MMC Ventures, State of Agentic AI',
    href: 'https://mmc.vc/research/state-of-agentic-ai-founders-edition/',
  },
];

const deployments = [
  { icon: Cloud, title: 'YashAI Cloud', body: 'Fully managed, in the region you choose. The fastest way to start.' },
  { icon: Building, title: 'Your cloud', body: 'Deployed in your own AWS, Azure or Google Cloud account.' },
  { icon: ServerCog, title: 'On-premise', body: 'Air-gapped, on open-weight models and your own GPUs.' },
];

const faqs = [
  {
    q: 'What is the difference between an AI agent and a chatbot?',
    a: 'A chatbot answers questions. An agent completes work: it plans the steps, uses your systems (CRM, ERP, ticketing, email), checks your policies, and finishes the task, asking a person to approve anything above the limits you set.',
  },
  {
    q: 'Where do the agents run? Does my computer need to stay on?',
    a: 'No. Agents run in the cloud, each with its own secure workspace and browser. You can start a task from your phone and close your laptop; the agent keeps working and messages you when it needs a decision or is done.',
  },
  {
    q: 'Can agents use systems that have no API?',
    a: 'Yes. Where a system has an API we use it. Where it does not, such as an older portal or a vendor website, the agent uses its own browser the way a person would, with scoped credentials stored in a vault.',
  },
  {
    q: 'What happens when an agent makes a mistake?',
    a: 'Every agent runs with guardrails and approval limits, and every step is logged so it can be replayed and reviewed. New agents start in shadow mode, where people approve every action, and only act alone once they have met the agreed accuracy on real work.',
  },
  {
    q: 'Which AI models do you use?',
    a: 'We are model-agnostic. We choose between leading commercial models and open-weight models for each task, based on accuracy, cost and where your data must stay, and we evaluate them on your real cases before going live.',
  },
  {
    q: 'Do we own the agents and the data?',
    a: 'Yes. Your data, prompts, evaluation sets and configurations belong to you. Your data is never used to train models for other customers.',
  },
  {
    q: 'How quickly can we see results?',
    a: 'Our pilot is designed to run for four weeks: one week to map and build, a week of shadow mode, and a go-live against a KPI you agree to up front.',
  },
  {
    q: 'Do you have case studies and certifications?',
    a: `We are a young company (${COMPANY.legalName}, incorporated April 2025) and are recruiting our first pilot customers now, so we don't yet have public case studies, SOC 2 or ISO 27001. That's why our pilots are fixed-fee, with success criteria written down before we start.`,
  },
];

const Home = () => {
  useEffect(() => {
    document.title = 'YashAI | AI agents that do the work';
  }, []);

  return (
    <div className="site">
      <a href="#main" className="skip-link">Skip to content</a>
      <a href="#pricing" className="announce">
        Now booking 4-week agent pilots for Q4 2026 <ArrowRight size={14} aria-hidden="true" />
      </a>
      <Header overDark />

      <main id="main">
        {/* Hero */}
        <section className="hero-dark">
          <div className="stars" aria-hidden="true" />
          <div className="glow" aria-hidden="true" />
          <div className="container-x relative text-center">
            <p className="hero-pill"><span className="eyebrow-dot" /> Agentic AI, deployed</p>
            <h1 className="display-xl">
              AI agents that <span className="grad">do&nbsp;the&nbsp;work.</span>
            </h1>
            <p className="hero-sub">
              We design, build and run production AI agents for support, sales, finance, security and operations.
              They are embedded in your tools, governed by your rules and measured against your KPIs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={DEMO_URL} className="btn btn-light">Book a free workflow workshop <ArrowRight size={18} aria-hidden="true" /></a>
              <a href="#agents" className="btn btn-outline-light">Meet the agents</a>
            </div>
            <AgentRun />
          </div>
        </section>

        {/* Tools strip */}
        <section className="strip" aria-label="Systems our agents work with">
          <div className="container-x py-6">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-soft mb-4">
              Agents that work inside the systems you already use
            </p>
            <div className="tool-row">
              {tools.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Why now</p>
              <h2 className="h2">Agents have moved from experiments to the P&amp;L.</h2>
            </div>
            <div className="facts-grid">
              {facts.map((f) => (
                <div key={f.stat} className="fact">
                  <p className="fact-stat">{f.stat}</p>
                  <p className="mt-3 leading-relaxed">{f.text}</p>
                  <a href={f.href} target="_blank" rel="noopener noreferrer" className="fact-src">Source: {f.source}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How our agents work */}
        <section id="how-agents-work" className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">How our agents work</p>
              <h2 className="h2">Not a chatbot. A team that works while you sleep.</h2>
              <p className="lead">
                Our agents behave like capable colleagues: they live in the cloud, have their own computer, remember
                their job, and bring you decisions instead of busywork.
              </p>
            </div>
            <div className="team-grid">
              <div className="idea-grid">
                {ideas.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="idea">
                    <Icon size={18} className="text-brand" aria-hidden="true" />
                    <h3 className="font-semibold mt-3">{title}</h3>
                    <p className="text-soft mt-1.5 text-[14.5px] leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <TeamThread />
            </div>
          </div>
        </section>

        {/* Agents */}
        <section id="agents" className="section section-alt">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Meet the agents</p>
              <h2 className="h2">A digital workforce, built around your workflows.</h2>
              <p className="lead">
                Each agent owns a job, not just a prompt. We configure it on your systems, policies and data, then
                prove it on one workflow before scaling it.
              </p>
            </div>
            <div className="agent-grid">
              {agents.map((a) => {
                const Icon = a.icon;
                return (
                  <article key={a.id} id={a.id} className="agent">
                    <div className="flex items-center gap-3">
                      <span className="agent-avatar"><Icon size={20} aria-hidden="true" /></span>
                      <div>
                        <h3 className="font-semibold leading-tight">{a.name}</h3>
                        <p className="text-soft text-sm">{a.role}</p>
                      </div>
                    </div>
                    <p className="agent-summary">{a.summary}</p>
                    <ul className="space-y-1.5 text-[14px]">
                      {a.tasks.map((t) => (
                        <li key={t} className="flex gap-2">
                          <Check size={16} className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="agent-tools">
                      {a.tools.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <p className="agent-pilot"><span>First pilot:</span> {a.pilot}</p>
                  </article>
                );
              })}
            </div>
            <p className="text-soft mt-8 text-center">
              Don't see your workflow? Most of our work is custom agents.{' '}
              <a className="text-link" href={DEMO_URL}>Tell us the job <ArrowRight size={15} aria-hidden="true" /></a>
            </p>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Industries</p>
              <h2 className="h2">Agents for every domain.</h2>
              <p className="lead">
                The same platform, configured for the systems, rules and language of your industry. Pick a domain
                to see what its agents do and an example of one at work.
              </p>
            </div>
            <IndustryExplorer />
          </div>
        </section>

        {/* Workforce view */}
        <section className="section pb-0">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">One control plane</p>
              <h2 className="h2">See every agent, every action, every approval.</h2>
              <p className="lead">
                A single view of your digital workforce: what each agent did today, what is waiting for a human, and
                how every agent is performing against its KPI.
              </p>
            </div>
            <Workforce />
          </div>
        </section>

        {/* How we deploy */}
        <section id="how" className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">How we deploy</p>
              <h2 className="h2">From workshop to a live agent in four weeks.</h2>
              <p className="lead">
                Our forward-deployed engineers work inside your team. We start with one workflow, prove the result,
                then expand.
              </p>
            </div>
            <ol className="timeline">
              {steps.map((s) => (
                <li key={s.title} className="tl-step">
                  <span className="tl-week">{s.week}</span>
                  <h3 className="h3 mt-2">{s.title}</h3>
                  <p className="text-soft mt-2 text-[15px] leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="section section-alt">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">The agent platform</p>
              <h2 className="h2">Everything an agent needs to be trusted in production.</h2>
              <p className="lead">
                Model-agnostic by design. Every agent runs on the model that fits the task: leading commercial
                models, or open-weight models in your own environment.
              </p>
            </div>
            <div className="cap-grid">
              {capabilities.map(({ title, body, icon: Icon }) => (
                <div key={title} className="cap">
                  <span className="icon-tile"><Icon size={20} aria-hidden="true" /></span>
                  <h3 className="h3 mt-4">{title}</h3>
                  <p className="text-soft mt-2 text-[15px] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="section section-dark">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker kicker-dark">Security &amp; governance</p>
              <h2 className="h2">Autonomy, with you in control.</h2>
              <p className="lead lead-dark">
                Agents act inside limits you define. Anything outside them goes to a person, and everything is on the record.
              </p>
            </div>
            <div className="trust-grid">
              {trust.map(({ title, body, icon: Icon }) => (
                <div key={title} className="trust">
                  <Icon size={20} aria-hidden="true" />
                  <h3 className="font-semibold mt-4">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="deploy-grid">
              {deployments.map(({ icon: Icon, title, body }) => (
                <div key={title} className="deploy">
                  <Icon size={20} aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-[15px]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Build, buy or partner</p>
              <h2 className="h2">The speed of software, the fit of a custom build.</h2>
            </div>
            <div className="table-wrap">
              <table className="compare">
                <thead>
                  <tr>
                    <th scope="col"><span className="sr-only">Criteria</span></th>
                    <th scope="col">Build in-house</th>
                    <th scope="col">Large consultancy</th>
                    <th scope="col">Off-the-shelf agent</th>
                    <th scope="col" className="us">YashAI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">{r.label}</th>
                      <td>{r.diy}</td>
                      <td>{r.si}</td>
                      <td>{r.saas}</td>
                      <td className="us">{r.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section section-alt">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Engagement models</p>
              <h2 className="h2">Start with a pilot. Scale what works.</h2>
            </div>
            <div className="plan-grid">
              {plans.map((p) => (
                <div key={p.name} className={`plan${p.featured ? ' plan-featured' : ''}`}>
                  <p className="plan-name">{p.name}</p>
                  <p className="h3 mt-1">{p.tagline}</p>
                  <p className="plan-price">{p.price}</p>
                  <ul className="mt-5 space-y-2.5 text-[15px]">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <Check size={18} className="shrink-0 mt-0.5 plan-check" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={DEMO_URL} className={`btn mt-7 w-full ${p.featured ? 'btn-light' : 'btn-primary'}`}>Talk to us</a>
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
              <h2 className="h2">Engineers who ship agents, not slide decks.</h2>
              <p className="lead">
                YashAI is an agentic AI company. We build production agents alongside our customers' teams and stay
                accountable for the results. We are headquartered in Hyderabad, India, and work with companies worldwide.
              </p>
            </div>
            <dl className="facts">
              <div><dt>Legal name</dt><dd>{COMPANY.legalName}</dd></div>
              <div><dt>Incorporated</dt><dd>24 April 2025</dd></div>
              <div><dt>CIN</dt><dd>{COMPANY.cin}</dd></div>
              <div><dt>Headquarters</dt><dd>Hyderabad, India</dd></div>
              <div><dt>Contact</dt><dd><a className="text-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd></div>
            </dl>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-alt">
          <div className="container-x max-w-3xl">
            <div className="section-head">
              <p className="kicker">FAQ</p>
              <h2 className="h2">What buyers ask us.</h2>
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
        <section id="partner" className="section">
          <div className="container-x">
            <div className="cta">
              <h2 className="h2">Which job should your first agent do?</h2>
              <p className="mt-4 text-soft max-w-xl mx-auto text-lg">
                Book a free 30-minute workflow workshop. We'll map your top three automatable workflows and tell you
                honestly which one an agent should take first.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href={DEMO_URL} className="btn btn-light">Book the workshop <ArrowRight size={18} aria-hidden="true" /></a>
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
