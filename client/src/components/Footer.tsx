import { useCursor } from '@/contexts/CursorContext';
import DigitalBrainLogo from '@/components/ui/DigitalBrainLogo';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

// Email validation function
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

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
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  
  const currentYear = new Date().getFullYear();

  const getMailtoLink = () => {
    const subject = encodeURIComponent('Newsletter Subscription');
    const body = encodeURIComponent(`Please subscribe me to your newsletter. My email is: ${email}`);
    return `mailto:yash@yashaitech.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-dark-900 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <DigitalBrainLogo className="w-11 h-11" />
            </div>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative AI solutions and digital modernization strategies.
            </p>
            <div className="flex flex-col space-y-2 mb-4">
              <a href="mailto:yash@yashaitech.com" className="text-gray-400 hover:text-white text-sm transition-colors">yash@yashaitech.com</a>
              <a href="tel:+919347706474" className="text-gray-400 hover:text-white text-sm transition-colors">+91 93477 06474</a>
              <a href="https://www.yashaitech.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">www.yashaitech.com</a>
            </div>
            <div className="flex space-x-4">
              {['linkedin-in', 'twitter', 'facebook-f', 'instagram'].map((icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-space font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Strategy & Advisory</FooterLink>
              <FooterLink href="#">Data Solutions</FooterLink>
              <FooterLink href="#">Professional Services</FooterLink>
              <FooterLink href="#">Software Products</FooterLink>
              <FooterLink href="#">Modernization</FooterLink>
              <FooterLink href="#">Cloud Services</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-space font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#work">Case Studies</FooterLink>
              <FooterLink href="#work">Testimonials</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-space font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on AI innovation.
            </p>
            <form onSubmit={e => { e.preventDefault(); window.location.href = getMailtoLink(); }}>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-amber-500"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} YashAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies Policy'].map((text, index) => (
              <a 
                key={index}
                href="#" 
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
