import { COMPANY, CONTACT } from '@/constants/contact';
import { products } from '@/constants/products';
import Logo from './Logo';

const Footer = () => (
  <footer className="site-footer">
    <div className="container-x grid gap-10 py-14 md:grid-cols-4">
      <div className="md:col-span-2 max-w-sm">
        <Logo className="h-10 w-auto mb-4" />
        <p className="text-soft text-sm leading-relaxed">
          AI products for Indian businesses: in Indian languages, private by design, priced for small teams.
        </p>
      </div>

      <div>
        <h2 className="footer-heading">Products</h2>
        <ul className="space-y-2">
          {products.map((p) => (
            <li key={p.id}>
              <a href={p.href ?? `/#${p.id}`} className="footer-link">{p.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="footer-heading">Company</h2>
        <ul className="space-y-2">
          <li><a href="/#company" className="footer-link">About</a></li>
          <li><a href="/#faq" className="footer-link">FAQ</a></li>
          <li><a href={`mailto:${CONTACT.email}`} className="footer-link">{CONTACT.email}</a></li>
          <li>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
              WhatsApp {CONTACT.phoneDisplay}
            </a>
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
