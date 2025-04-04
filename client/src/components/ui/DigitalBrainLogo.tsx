import React from 'react';

interface LogoProps {
  className?: string;
}

// Text Logo with Organic Brain Component
const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      width="180" 
      height="45" 
      viewBox="0 0 180 45" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Organic Brain Logo */}
      <g transform="translate(5, 2) scale(0.9)">
        {/* Brain Outline */}
        <path 
          d="M20 20C20 13 25 8 32 8C39 8 44 13 44 20C44 23 42 26 42 28C42 30 44 32 44 35C44 38 39 42 32 42C25 42 20 38 20 35C20 32 22 30 22 28C22 26 20 23 20 20Z" 
          stroke="#0070f3" 
          strokeWidth="1.5" 
          fill="none"
        />
        
        {/* Brain Detail Lines */}
        <path 
          d="M28 15C28 12 35 12 35 15C35 18 28 18 28 15Z" 
          stroke="#0070f3" 
          strokeWidth="1.2" 
          fill="none"
        />
        <path 
          d="M35 20C35 17 42 17 42 20C42 23 35 23 35 20Z" 
          stroke="#0070f3" 
          strokeWidth="1.2" 
          fill="none"
        />
        <path 
          d="M35 30C35 27 42 27 42 30C42 33 35 33 35 30Z" 
          stroke="#0070f3" 
          strokeWidth="1.2" 
          fill="none"
        />
        <path 
          d="M28 35C28 32 35 32 35 35C35 38 28 38 28 35Z" 
          stroke="#0070f3" 
          strokeWidth="1.2" 
          fill="none"
        />
        <path 
          d="M22 30C22 27 29 27 29 30C29 33 22 33 22 30Z" 
          stroke="#0070f3" 
          strokeWidth="1.2" 
          fill="none"
        />
        <path 
          d="M22 20C22 17 29 17 29 20C29 23 22 23 22 20Z" 
          stroke="#0070f3" 
          strokeWidth="1.2" 
          fill="none"
        />
        
        {/* Center Fold */}
        <path 
          d="M32 8V42" 
          stroke="#0070f3" 
          strokeWidth="1" 
          strokeDasharray="2 2"
        />
      </g>
      
      {/* Text Logo */}
      <text 
        x="65" 
        y="29" 
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