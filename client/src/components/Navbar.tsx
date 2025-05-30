import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { navigationLinks } from '@/constants/navigationLinks';
import { cn } from '@/lib/utils';
import { useCursor } from '@/contexts/CursorContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { setIsHovering } = useCursor();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobileMenu') && !target.closest('#menuToggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header id="navbar" className="fixed w-full top-0 z-50 transition-all duration-300">
      <motion.nav 
        className={cn(
          "px-6 py-4",
          isScrolled && "shadow-lg"
        )}
        style={{ backgroundColor: '#0B0023' }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a 
            href="/" 
            className="flex items-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="h-16 flex items-center">
              <img src="/blue-logo.png" alt="Logo" className="h-full w-auto" />
            </div>
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={cn(
                  link.isButton
                    ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-2 rounded-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
                    : "text-gray-300 hover:text-amber-500 transition-colors"
                )}
                onClick={e => handleNavClick(e, link.href)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <button 
            className="lg:hidden text-2xl" 
            id="menuToggle"
            onClick={toggleMobileMenu}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <i className={cn("fas", isMobileMenuOpen ? "fa-times" : "fa-bars")}></i>
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <motion.div 
        id="mobileMenu"
        className="lg:hidden bg-dark-800 glass p-4"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="flex flex-col space-y-4">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={cn(
                link.isButton
                  ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white py-3 px-4 rounded-lg text-center"
                  : "text-gray-300 hover:text-amber-500 transition-colors py-2"
              )}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
