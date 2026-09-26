import { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Check, Languages, Lock, IndianRupee, Mail } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { StudioMock, VoiceMock, AssistMock } from '@/components/site/Mocks';
import { products, type ProductStatus } from '@/constants/products';
import { COMPANY, CONTACT } from '@/constants/contact';

const statusClass: Record<ProductStatus, string> = {
  'Live': 'badge badge-live',
  'Early access': 'badge badge-beta',
  'In development': 'badge',
  'Planned · 2027': 'badge badge-muted',
};

const earlyAccess = `mailto:${CONTACT.email}?subject=Early%20access`;

const pillars = [
  {
    icon: Languages,
    title: 'Indian languages first',
    body: 'Telugu, Hindi and English from day one, including the way people really talk: switching languages mid-sentence.',
  },
  {
    icon: Lock,
    title: 'Private by design',
    body: 'We run open models on GPUs we own, in India. Your data is not used to train anyone else\'s model.',
  },
  {
    icon: IndianRupee,
    title: 'Priced for small teams',
    body: 'Owning our hardware keeps running costs low, so pricing works for a clinic, a shop or a 10-person firm.',
  },
];

const steps = [
  { title: 'Tell us the problem', body: 'A 20-minute call about the work that eats your team\'s time.' },
  { title: 'We set it up', body: 'We connect the product to your phone line, documents or brand, aiming to have you running within a week.' },
  { title: 'Use it and improve it', body: 'You see every conversation and video. We tune it with you as it runs.' },
];

const faqs = [
  {
    q: 'Can I use these products today?',
    a: 'GetJobEasy is live. YashAI Studio is open for early-access requests. YashAI Voice and YashAI Assist are in development, and YashAI Private is planned for 2027. Every product on this page shows its real status.',
  },
  {
    q: 'Where is my data processed?',
    a: 'Studio runs on our own GPU hardware in India. For Voice and Assist, we will tell you exactly which models and providers are used before you sign up, and we never use your data to train models for other customers.',
  },
  {
    q: 'How much does it cost?',
    a: 'Early-access customers get founding pricing, fixed for their first year. Email us with what you need and we will send a quote.',
  },
  {
    q: 'Who is behind YashAI?',
    a: `${COMPANY.legalName} is a private limited company incorporated in Telangana in April 2025 (CIN ${COMPANY.cin}). We are a small team based in Hyderabad.`,
  },
  {
    q: 'Can you build something custom?',
    a: 'Yes, if it is close to what our products already do. Tell us the problem and we will say honestly whether we are the right fit.',
  },
];

const Home = () => {
  useEffect(() => {
    document.title = 'YashAI Technologies | AI for Indian businesses';
  }, []);

  return (
    <div className="site">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />

      <main id="main">
        {/* Hero */}
        <section className="hero">
          <div className="container-x text-center">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Built in Hyderabad · YashAI Studio early access now open
            </p>
            <h1 className="display">
              AI that speaks your<br className="hidden sm:block" /> customer's language.
            </h1>
            <p className="lead mx-auto">
              YashAI builds AI video, voice and assistant products for Indian businesses. They work in Telugu,
              Hindi and English, run on infrastructure we own, and are priced for small teams.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={earlyAccess} className="btn btn-primary">
                Get early access <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#products" className="btn btn-ghost">See the products</a>
            </div>
          </div>
          <div className="container-x mt-14 md:mt-20">
            <div className="hero-mock">
              <StudioMock />
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Products</p>
              <h2 className="h2">Five products, one goal: less busywork.</h2>
              <p className="lead">Each product shows its real status. Early-access customers help shape what we build next.</p>
            </div>
            <div className="product-grid">
              {products.map((p) => {
                const Icon = p.icon;
                return (
                  <article key={p.id} id={p.id} className="product-card">
                    <div className="flex items-start justify-between gap-4">
                      <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                      <span className={statusClass[p.status]}>{p.status}</span>
                    </div>
                    <h3 className="h3 mt-5">{p.name}</h3>
                    <p className="font-medium mt-1">{p.tagline}</p>
                    <p className="text-soft mt-3 text-[15px] leading-relaxed">{p.description}</p>
                    <ul className="mt-4 space-y-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-2 text-[15px]">
                          <Check size={18} className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      {p.href ? (
                        <a href={p.href} className="text-link">
                          Visit {p.name} <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ) : (
                        <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(p.name)}`} className="text-link">
                          {p.status === 'Early access' ? 'Request access' : 'Join the waitlist'} <ArrowRight size={16} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Spotlights */}
        <section className="section section-alt">
          <div className="container-x space-y-24">
            <div className="spotlight">
              <div>
                <p className="kicker">YashAI Voice · In development</p>
                <h2 className="h2">Every call answered, even at 10 pm.</h2>
                <p className="lead">
                  Voice picks up when your team can't, understands callers who mix Telugu and English, books the
                  appointment and sends you a summary on WhatsApp.
                </p>
                <a href={`mailto:${CONTACT.email}?subject=YashAI%20Voice%20waitlist`} className="text-link mt-6">
                  Join the Voice waitlist <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <VoiceMock />
            </div>
            <div className="spotlight spotlight-rev">
              <div>
                <p className="kicker">YashAI Assist · In development</p>
                <h2 className="h2">Answers you can check.</h2>
                <p className="lead">
                  Assist answers only from your own documents and shows its source every time. When the answer
                  isn't there, it passes the question to your team instead of guessing.
                </p>
                <a href={`mailto:${CONTACT.email}?subject=YashAI%20Assist%20waitlist`} className="text-link mt-6">
                  Join the Assist waitlist <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <AssistMock />
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="section">
          <div className="container-x">
            <div className="section-head">
              <p className="kicker">Why YashAI</p>
              <h2 className="h2">Built for how India actually does business.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div key={title} className="pillar">
                  <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="h3 mt-5">{title}</h3>
                  <p className="text-soft mt-2 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <ol className="steps mt-20">
              {steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step-num">{i + 1}</span>
                  <h3 className="h3">{s.title}</h3>
                  <p className="text-soft mt-2 leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Company */}
        <section id="company" className="section section-alt">
          <div className="container-x grid gap-12 md:grid-cols-2 items-start">
            <div>
              <p className="kicker">Company</p>
              <h2 className="h2">A young company, building in the open.</h2>
              <p className="lead">
                YashAI Technologies was incorporated in April 2025. We are a small Hyderabad team that builds every
                product ourselves, from the models to the finished app. We'd rather show you an honest roadmap than
                a wall of logos.
              </p>
            </div>
            <dl className="facts">
              <div><dt>Legal name</dt><dd>{COMPANY.legalName}</dd></div>
              <div><dt>Incorporated</dt><dd>24 April 2025, Telangana</dd></div>
              <div><dt>CIN</dt><dd>{COMPANY.cin}</dd></div>
              <div><dt>Registered office</dt><dd>{COMPANY.address}</dd></div>
              <div><dt>Contact</dt><dd><a className="text-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd></div>
            </dl>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container-x max-w-3xl">
            <div className="section-head text-left">
              <p className="kicker">FAQ</p>
              <h2 className="h2">Straight answers.</h2>
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
        <section className="section pt-0">
          <div className="container-x">
            <div className="cta">
              <h2 className="h2 text-white">Be one of our first customers.</h2>
              <p className="mt-3 text-white/75 max-w-xl mx-auto">
                Early-access businesses get founding pricing and a direct line to the people building the product.
              </p>
              <a href={earlyAccess} className="btn btn-light mt-8">
                <Mail size={18} aria-hidden="true" /> {CONTACT.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
