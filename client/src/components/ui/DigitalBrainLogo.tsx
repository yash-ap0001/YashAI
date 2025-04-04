import React from 'react';

interface LogoProps {
  className?: string;
}

// Brain Lightbulb Logo Component inspired by the reference image
const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      width="170" 
      height="60" 
      viewBox="0 0 170 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain Lightbulb Symbol */}
      <g transform="translate(20, 2) scale(0.85)">
        {/* Lightbulb Base */}
        <path 
          d="M60 42C60 42 53 42 53 46C53 50 53 54 60 54C67 54 67 50 67 46C67 42 60 42 60 42Z" 
          fill="#141452" 
        />
        
        {/* Lightbulb Connector Lines */}
        <rect x="53" y="46" width="14" height="2" fill="#141452" />
        <rect x="55" y="50" width="10" height="2" fill="#141452" />
        
        {/* Lightbulb Outline */}
        <path 
          d="M40 20C40 8.954 48.954 0 60 0C71.046 0 80 8.954 80 20C80 25.5 77.5 29 75 33C72.5 37 70 39 70 42H50C50 39 47.5 37 45 33C42.5 29 40 25.5 40 20Z" 
          fill="none" 
          stroke="#141452" 
          strokeWidth="2"
        />
        
        {/* Center Dividing Line */}
        <path 
          d="M60 0V42" 
          stroke="#141452" 
          strokeWidth="2" 
          strokeDasharray="2 2"
        />
        
        {/* Right Brain Side - Organic */}
        <path 
          d="M61 5C70 5 75 14 75 20C75 26 70 30 70 34C70 38 67 40 63 40C61 40 61 36 61 5Z" 
          fill="none" 
          stroke="#141452" 
          strokeWidth="1.5"
        />
        
        <path 
          d="M70 15C67 17 64 19 62 19" 
          stroke="#141452" 
          strokeWidth="1.5" 
          fill="none"
        />
        
        <path 
          d="M70 24C67 26 64 28 62 28" 
          stroke="#141452" 
          strokeWidth="1.5" 
          fill="none"
        />
        
        <path 
          d="M67 34C65 35 63 36 62 36" 
          stroke="#141452" 
          strokeWidth="1.5" 
          fill="none"
        />
        
        {/* Left Brain Side - Digital Network */}
        <circle cx="45" cy="10" r="2.5" fill="url(#orange-gradient)" />
        <circle cx="52" cy="8" r="2" fill="url(#orange-gradient)" />
        <circle cx="47" cy="17" r="3" fill="url(#orange-gradient)" />
        <circle cx="55" cy="15" r="1.8" fill="url(#orange-gradient)" />
        <circle cx="50" cy="24" r="2.3" fill="url(#orange-gradient)" />
        <circle cx="57" cy="22" r="1.5" fill="url(#orange-gradient)" />
        <circle cx="45" cy="30" r="2.7" fill="url(#orange-gradient)" />
        <circle cx="53" cy="32" r="1.7" fill="url(#orange-gradient)" />
        <circle cx="49" cy="38" r="2" fill="url(#orange-gradient)" />
        
        {/* Network Connections */}
        <path 
          d="M45 10L52 8M52 8L47 17M47 17L55 15M55 15L50 24M50 24L57 22M57 22L45 30M45 30L53 32M53 32L49 38" 
          stroke="url(#orange-line-gradient)" 
          strokeWidth="1" 
        />
      </g>
      
      {/* YashAI Text */}
      <text 
        x="85" 
        y="50" 
        textAnchor="middle" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="16" 
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