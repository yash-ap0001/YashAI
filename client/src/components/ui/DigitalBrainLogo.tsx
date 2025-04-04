import React from 'react';

interface LogoProps {
  className?: string;
}

// Stylish YashAI Logo Component
const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      width="160" 
      height="48" 
      viewBox="0 0 180 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Y */}
      <path 
        d="M14 8L22 20L30 8M22 20V40" 
        stroke="url(#gold-gradient)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* a */}
      <path 
        d="M48 25C45 22 38 22 35 25C32 28 32 34 35 37C38 40 45 40 48 37V25M48 31H35" 
        stroke="url(#gold-gradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* s */}
      <path 
        d="M55 27C55 24 62 22 66 25C70 28 63 31 59 31C55 31 52 34 55 37C58 40 65 40 68 37" 
        stroke="url(#gold-gradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* h */}
      <path 
        d="M75 10V40M75 25C78 22 85 22 88 25V40M75 25C78 22 85 22 88 25" 
        stroke="url(#gold-gradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* A */}
      <path 
        d="M100 40L108 10L116 40M103 30H113" 
        stroke="url(#gold-gradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* I */}
      <path 
        d="M123 10V40" 
        stroke="url(#gold-gradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />

      {/* Digital circuit decoration for dot over the i */}
      <circle cx="123" cy="8" r="3" fill="url(#gold-fill-gradient)" />

      {/* Digital circuit decorations */}
      <path 
        d="M30 20C35 20 40 20 45 20" 
        stroke="url(#gold-gradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="1 3" 
      />
      
      <circle cx="46" cy="19" r="1.5" fill="url(#gold-fill-gradient)" />
      
      <path 
        d="M92 25C95 25 98 25 101 25" 
        stroke="url(#gold-gradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="1 3" 
      />
      
      <circle cx="100" cy="25" r="1.5" fill="url(#gold-fill-gradient)" />
      
      <path 
        d="M118 30C120 30 122 30 124 30" 
        stroke="url(#gold-gradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="1 3" 
      />
      
      <circle cx="118" cy="30" r="1.5" fill="url(#gold-fill-gradient)" />
      
      {/* Gold Gradients */}
      <defs>
        <linearGradient id="gold-gradient" x1="10" y1="24" x2="140" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.5" stopColor="#FFD700" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        
        <radialGradient id="gold-fill-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(90 24) rotate(90) scale(24)">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#D97706" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default DigitalBrainLogo;