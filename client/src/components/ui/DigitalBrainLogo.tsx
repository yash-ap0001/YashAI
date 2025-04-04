import React from 'react';

interface LogoProps {
  className?: string;
}

const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain Circuit Background */}
      <g className="brain-circuits">
        <path d="M24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5Z" stroke="url(#circuit-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 3"/>
        
        <path d="M16 18C17.5 16.5 20 15 24 15C28 15 30.5 16.5 32 18" stroke="url(#circuit-gradient)" strokeWidth="1" strokeLinecap="round"/>
        <path d="M32 30C30.5 31.5 28 33 24 33C20 33 17.5 31.5 16 30" stroke="url(#circuit-gradient)" strokeWidth="1" strokeLinecap="round"/>
        
        <circle cx="14" cy="24" r="1.5" fill="url(#node-gradient)" />
        <circle cx="34" cy="24" r="1.5" fill="url(#node-gradient)" />
        <circle cx="24" cy="14" r="1.5" fill="url(#node-gradient)" />
        <circle cx="24" cy="34" r="1.5" fill="url(#node-gradient)" />
        
        <path d="M14 24H34" stroke="url(#circuit-gradient)" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 2"/>
        <path d="M24 14V34" stroke="url(#circuit-gradient)" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 2"/>
      </g>
      
      {/* Stylized Y for YashAI */}
      <path d="M14 13L20 22L26 13" stroke="url(#y-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 22V33" stroke="url(#y-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* AI Text */}
      <path d="M28 25L30 18H32L34 25" stroke="url(#ai-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29 23H33" stroke="url(#ai-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 18V25" stroke="url(#ai-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 18V25" stroke="url(#ai-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 22H38" stroke="url(#ai-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Digital Nodes */}
      <circle cx="20" cy="22" r="2" fill="url(#node-gradient)" />
      <circle cx="26" cy="13" r="1.5" fill="url(#node-gradient)" />
      <circle cx="14" cy="13" r="1.5" fill="url(#node-gradient)" />
      <circle cx="20" cy="33" r="1.5" fill="url(#node-gradient)" />
      <circle cx="36" cy="22" r="1.5" fill="url(#node-gradient)" />
      <circle cx="31" cy="23" r="1.5" fill="url(#node-gradient)" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="circuit-gradient" x1="5" y1="24" x2="43" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#2DD4BF" />
        </linearGradient>
        
        <linearGradient id="y-gradient" x1="14" y1="23" x2="26" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#2DD4BF" />
        </linearGradient>
        
        <linearGradient id="ai-gradient" x1="28" y1="21.5" x2="38" y2="21.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        
        <radialGradient id="node-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 24) rotate(90) scale(20)">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2DD4BF" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default DigitalBrainLogo;