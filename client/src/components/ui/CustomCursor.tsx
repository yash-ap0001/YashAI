import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/contexts/CursorContext';
import { prefersReducedMotion } from '@/lib/utils';

const CustomCursor = () => {
  const { isHovering, cursorPosition, isVisible } = useCursor();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render custom cursor on desktop and when reduced motion is not preferred
    setShouldRender(window.innerWidth > 1024 && !prefersReducedMotion());
    
    // Add hover listeners to all interactive elements
    const setupHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      
      hoverElements.forEach(element => {
        element.classList.add('cursor-none');
      });
    };
    
    if (shouldRender) {
      setupHoverListeners();
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <motion.div
        className="cursor-dot fixed w-2 h-2 bg-amber-500 rounded-full z-[1000] pointer-events-none"
        style={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 0.75 : 1,
        }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="cursor-outline fixed w-10 h-10 border-2 border-amber-500/50 rounded-full z-[999] pointer-events-none"
        style={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
      />
    </>
  );
};

export default CustomCursor;
