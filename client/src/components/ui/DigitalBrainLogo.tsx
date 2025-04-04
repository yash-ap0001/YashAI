import React from 'react';

interface LogoProps {
  className?: string;
}

// Modern Brain Symbol Logo
const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      width="170" 
      height="48" 
      viewBox="0 0 170 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain Symbol */}
      <g transform="translate(0, 0)">
        {/* Brain Outline */}
        <path 
          d="M27 6C27 6 32 10 32 14C32 18 28 19 28 22C28 25 32 27 32 30C32 33 28 38 21 38C14 38 10 33 10 30C10 27 14 25 14 22C14 19 10 18 10 14C10 10 15 6 15 6" 
          stroke="url(#brain-gold-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Center Line */}
        <path 
          d="M21 6V38" 
          stroke="url(#brain-gold-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeDasharray="1 3"
        />
        
        {/* Left Brain Fold */}
        <path 
          d="M14 14C18 14 18 22 14 22" 
          stroke="url(#brain-gold-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Right Brain Fold */}
        <path 
          d="M28 14C24 14 24 22 28 22" 
          stroke="url(#brain-gold-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Bottom Left Brain Fold */}
        <path 
          d="M14 30C18 30 18 22 14 22" 
          stroke="url(#brain-gold-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Bottom Right Brain Fold */}
        <path 
          d="M28 30C24 30 24 22 28 22" 
          stroke="url(#brain-gold-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Connector Dots */}
        <circle cx="14" cy="14" r="2" fill="url(#node-gold-gradient)" />
        <circle cx="28" cy="14" r="2" fill="url(#node-gold-gradient)" />
        <circle cx="14" cy="22" r="2" fill="url(#node-gold-gradient)" />
        <circle cx="28" cy="22" r="2" fill="url(#node-gold-gradient)" />
        <circle cx="14" cy="30" r="2" fill="url(#node-gold-gradient)" />
        <circle cx="28" cy="30" r="2" fill="url(#node-gold-gradient)" />
        <circle cx="21" cy="22" r="3" fill="url(#center-gold-gradient)" />
        
        {/* Neural connections */}
        <path 
          d="M14 14L21 22M28 14L21 22M14 30L21 22M28 30L21 22" 
          stroke="url(#brain-gold-gradient)" 
          strokeWidth="1" 
          strokeLinecap="round"
          strokeDasharray="1 2"
        />
      </g>
      
      {/* YashAI Text */}
      <text 
        x="48" 
        y="28" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="22" 
        fill="url(#text-gold-gradient)"
      >
        YashAI
      </text>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="brain-gold-gradient" x1="10" y1="22" x2="32" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.5" stopColor="#FFD700" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        
        <radialGradient id="node-gold-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 22) rotate(90) scale(10)">
          <stop stopColor="#FFC107" />
          <stop offset="1" stopColor="#F59E0B" />
        </radialGradient>
        
        <radialGradient id="center-gold-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 22) rotate(90) scale(4)">
          <stop stopColor="#FFD700" />
          <stop offset="1" stopColor="#F59E0B" />
        </radialGradient>
        
        <linearGradient id="text-gold-gradient" x1="48" y1="28" x2="140" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.5" stopColor="#FFD700" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DigitalBrainLogo;