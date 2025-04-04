import { useEffect } from 'react';
import { prefersReducedMotion } from '@/lib/utils';

const useScrollReveal = () => {
  useEffect(() => {
    if (prefersReducedMotion()) {
      // If the user prefers reduced motion, immediately reveal all elements
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(element => {
        element.classList.add('active');
      });
      return;
    }

    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    // Initial check on mount
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default useScrollReveal;
