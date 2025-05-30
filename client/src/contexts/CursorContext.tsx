import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { prefersReducedMotion } from '@/lib/utils';

type CursorContextType = {
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
  cursorPosition: { x: number; y: number };
  isVisible: boolean;
};

// Initialize with default values
const defaultContextValue: CursorContextType = {
  isHovering: false,
  setIsHovering: () => {},
  cursorPosition: { x: -100, y: -100 },
  isVisible: false
};

const CursorContext = createContext<CursorContextType>(defaultContextValue);

export const useCursor = () => {
  return useContext(CursorContext);
};

type CursorProviderProps = {
  children: ReactNode;
};

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't enable custom cursor if reduced motion is preferred
    // or if on mobile device (screen width <= 1024px)
    if (prefersReducedMotion() || window.innerWidth <= 1024) {
      return;
    }

    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering, cursorPosition, isVisible }}>
      {children}
    </CursorContext.Provider>
  );
};
