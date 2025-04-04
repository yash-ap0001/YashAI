import React from 'react';

interface LogoProps {
  className?: string;
}

// Simple YashAI Logo Component with Gradient
const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      width="140" 
      height="40" 
      viewBox="0 0 140 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="textGradient" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#0070f3" />
          <stop offset="100%" stopColor="#00c6ff" />
        </linearGradient>
      </defs>
      
      {/* Simple Text Logo with gradient fill */}
      <text 
        x="10" 
        y="26" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="24" 
        fill="url(#textGradient)"
        letterSpacing="0.5"
      >
        YashAI
      </text>
    </svg>
  );
};

export default DigitalBrainLogo;