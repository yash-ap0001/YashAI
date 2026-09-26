import { useCursor } from '@/contexts/CursorContext';
import DigitalBrainLogo from '@/components/ui/DigitalBrainLogo';
import { CONTACT } from '@/constants/contact';

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => {
  const { setIsHovering } = useCursor();

  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </a>
    </li>
  );
};

const FooterSection = () => {
  const { setIsHovering } = useCursor();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <DigitalBrainLogo className="w-11 h-11" />
            </div>
            <p className="text-gray-400 mb-6">
              AI software startup from Hyderabad, building practical AI tools for small businesses.
            </p>
            <div className="flex flex-col space-y-2 mb-4">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">{CONTACT.name}</a>
              <a href={`mailto:${CONTACT.email}`} className="text-gray-400 hover:text-white text-sm transition-colors">{CONTACT.email}</a>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">{CONTACT.phoneDisplay}</a>
              <a href="https://www.yashaitech.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">www.yashaitech.com</a>
            </div>
          </div>

          <div>
            <h4 className="font-space font-bold text-lg mb-6 text-white">Products</h4>
            <ul className="space-y-3">
              <FooterLink href="/#services">AI Explainer Videos</FooterLink>
              <FooterLink href="/#services">AI Assistants</FooterLink>
              <FooterLink href="/#services">AI Development</FooterLink>
              <FooterLink href="https://jobs.yashaitech.com">GetJobEasy</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-space font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/#about">About Us</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} YashAI Technologies Private Limited · CIN U62090TS2025PTC197645
          </p>
          <div className="flex space-x-6">
            {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms']].map(([text, href], index) => (
              <a
                key={index}
                href={href}
                className="text-gray-500 hover:text-white text-sm transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
