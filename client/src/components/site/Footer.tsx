import { COMPANY, CONTACT } from '@/constants/contact';
import { modules, industries } from '@/constants/platform';
import Logo from './Logo';

const Footer = () => (
  <footer className="site-footer">
    <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2 max-w-sm">
        <Logo className="h-11 w-auto mb-4" />
        <p className="text-soft text-sm leading-relaxed">
          Enterprise AI in every language: agents, voice and knowledge, deployed on your terms.
        </p>
      </div>

      <div>
        <h2 className="footer-heading">Platform</h2>
        <ul className="space-y-2">
          {modules.map((m) => (
            <li key={m.id}><a href={`/#${m.id}`} className="footer-link">{m.name}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="footer-heading">Industries</h2>
        <ul className="space-y-2">
          {industries.map((i) => (
            <li key={i.name}><a href="/#industries" className="footer-link">{i.name}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="footer-heading">Company</h2>
        <ul className="space-y-2">
          <li><a href="/#company" className="footer-link">About</a></li>
          <li><a href="/#security" className="footer-link">Security</a></li>
          <li><a href="/#faq" className="footer-link">FAQ</a></li>
          <li><a href="https://jobs.yashaitech.com" className="footer-link">GetJobEasy</a></li>
          <li><a href={`mailto:${CONTACT.email}`} className="footer-link">{CONTACT.email}</a></li>
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
