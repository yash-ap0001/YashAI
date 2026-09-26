import { COMPANY, CONTACT } from '@/constants/contact';
import { agents } from '@/constants/agents';
import Logo from './Logo';

const Footer = () => (
  <footer className="site-footer">
    <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2 max-w-sm">
        <Logo className="h-10 w-auto mb-5" tone="dark" />
        <p className="text-soft text-sm leading-relaxed">
          AI agents that do the work, designed, built and run by our engineers inside your systems.
        </p>
      </div>

      <div>
        <h2 className="footer-heading">Agents</h2>
        <ul className="space-y-2">
          {agents.map((a) => (
            <li key={a.id}><a href={`/#${a.id}`} className="footer-link">{a.name} · {a.role.replace(' Agent', '')}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="footer-heading">Platform</h2>
        <ul className="space-y-2">
          <li><a href="/#how" className="footer-link">How we deploy</a></li>
          <li><a href="/#industries" className="footer-link">Industries</a></li>
          <li><a href="/#platform" className="footer-link">Agent platform</a></li>
          <li><a href="/#services" className="footer-link">AI engineering services</a></li>
          <li><a href="/#security" className="footer-link">Security &amp; governance</a></li>
          <li><a href="/#pricing" className="footer-link">Engagement models</a></li>
          <li><a href="/#faq" className="footer-link">FAQ</a></li>
        </ul>
      </div>

      <div>
        <h2 className="footer-heading">Company</h2>
        <ul className="space-y-2">
          <li><a href="/#company" className="footer-link">About</a></li>
          <li><a href="https://jobs.yashaitech.com" className="footer-link">GetJobEasy</a></li>
          <li><a href={`mailto:${CONTACT.email}`} className="footer-link">{CONTACT.email}</a></li>
          <li>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-line">
      <div className="container-x flex flex-col gap-3 py-6 text-xs text-soft md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {COMPANY.legalName} · CIN {COMPANY.cin}</p>
        <div className="flex gap-6">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
