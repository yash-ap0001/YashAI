import React from 'react';

interface LogoProps {
  className?: string;
}

// Normal Text Logo Component
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
      {/* Simple Text Logo */}
      <text 
        x="10" 
        y="28" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="24" 
        fill="#0070f3"
        letterSpacing="0.5"
      >
        YashAI
      </text>
    </svg>
  );
};

export default DigitalBrainLogo;