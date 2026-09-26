import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DEMO_URL } from '@/constants/contact';
import Logo from './Logo';

const links = [
  { label: 'Platform', href: '/#platform' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Security', href: '/#security' },
  { label: 'Company', href: '/#company' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <a href="/" aria-label="YashAI Technologies home" className="flex items-center">
          <Logo className="h-11 w-auto" />
        </a>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={DEMO_URL} className="btn btn-primary btn-sm">
            Request a demo
          </a>
        </div>

        <button
          type="button"
          className="md:hidden icon-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="md:hidden mobile-nav">
        <div className="container-x flex flex-col py-4 gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={DEMO_URL} className="btn btn-primary mt-3">
            Request a demo
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
