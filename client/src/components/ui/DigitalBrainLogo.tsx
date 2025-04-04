import React from 'react';

interface LogoProps {
  className?: string;
}

// Brain Logo Component inspired by the reference image - dual-sided brain only
const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      width="170" 
      height="55" 
      viewBox="0 0 170 55" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain Symbol */}
      <g transform="translate(25, 3) scale(0.9)">
        {/* Brain Outline */}
        <path 
          d="M40 10C40 6 47 2 60 2C73 2 80 6 80 10C80 14 76 18 76 24C76 30 80 34 80 38C80 42 73 46 60 46C47 46 40 42 40 38C40 34 44 30 44 24C44 18 40 14 40 10Z" 
          fill="none" 
          stroke="#141452" 
          strokeWidth="1.8"
        />
        
        {/* Center Dividing Line */}
        <path 
          d="M60 2V46" 
          stroke="#141452" 
          strokeWidth="1.5" 
          strokeDasharray="2 2"
        />
        
        {/* Right Brain Side - Organic */}
        <path 
          d="M61 6C68 7 76 12 76 18C76 24 72 28 71 32C70 37 67 41 64 42C62 43 61 43 61 6Z" 
          fill="none" 
          stroke="#141452" 
          strokeWidth="1.5"
        />
        
        <path 
          d="M72 13C69 15 66 17 63 17" 
          stroke="#141452" 
          strokeWidth="1.2" 
          fill="none"
        />
        
        <path 
          d="M72 23C69 25 66 27 63 27" 
          stroke="#141452" 
          strokeWidth="1.2" 
          fill="none"
        />
        
        <path 
          d="M68 33C65 35 63 36 62 36" 
          stroke="#141452" 
          strokeWidth="1.2" 
          fill="none"
        />

        <path 
          d="M65 39C64 40 63 41 62 41" 
          stroke="#141452" 
          strokeWidth="1.2" 
          fill="none"
        />
        
        {/* Left Brain Side - Digital Network */}
        <circle cx="44" cy="10" r="2.2" fill="url(#orange-gradient)" />
        <circle cx="51" cy="8" r="1.8" fill="url(#orange-gradient)" />
        <circle cx="47" cy="16" r="2.5" fill="url(#orange-gradient)" />
        <circle cx="55" cy="14" r="1.6" fill="url(#orange-gradient)" />
        <circle cx="50" cy="22" r="2.0" fill="url(#orange-gradient)" />
        <circle cx="57" cy="20" r="1.4" fill="url(#orange-gradient)" />
        <circle cx="45" cy="28" r="2.3" fill="url(#orange-gradient)" />
        <circle cx="53" cy="30" r="1.5" fill="url(#orange-gradient)" />
        <circle cx="48" cy="36" r="2.0" fill="url(#orange-gradient)" />
        <circle cx="54" cy="40" r="1.6" fill="url(#orange-gradient)" />
        
        {/* Network Connections */}
        <path 
          d="M44 10L51 8M51 8L47 16M47 16L55 14M55 14L50 22M50 22L57 20M57 20L45 28M45 28L53 30M53 30L48 36M48 36L54 40" 
          stroke="url(#orange-line-gradient)" 
          strokeWidth="0.8" 
        />
      </g>
      
      {/* YashAI Text */}
      <text 
        x="85" 
        y="46" 
        textAnchor="middle" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="18" 
        fill="#141452"
      >
        YashAI
      </text>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="orange-gradient" x1="45" y1="8" x2="57" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFC107" />
          <stop offset="0.5" stopColor="#FF9800" />
          <stop offset="1" stopColor="#FF5722" />
        </linearGradient>
        
        <linearGradient id="orange-line-gradient" x1="45" y1="8" x2="57" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFC107" />
          <stop offset="0.5" stopColor="#FF9800" />
          <stop offset="1" stopColor="#FF5722" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DigitalBrainLogo;