import React from 'react';

interface LogoProps {
  className?: string;
}

// Digital Circuit Brain Logo Component (based on the reference image)
const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      width="210" 
      height="60" 
      viewBox="0 0 210 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Digital Circuit Brain Symbol */}
      <g transform="translate(15, 5)">
        {/* Brain Outline Shape */}
        <path 
          d="M32 5C18 5 10 13 8 18C6 23 6 28 8 33C10 38 18 45 32 45C46 45 54 38 56 33C58 28 58 23 56 18C54 13 46 5 32 5Z" 
          stroke="#0070f3" 
          strokeWidth="1.2" 
          fill="none"
        />
        
        {/* Digital Circuits - Top Left */}
        <path d="M15 13H8V8" stroke="#0082fc" strokeWidth="1" />
        <path d="M20 18H13V10" stroke="#0082fc" strokeWidth="1" />
        <path d="M15 22H5V15" stroke="#0082fc" strokeWidth="1" />
        <circle cx="8" cy="8" r="1.2" fill="#38bdf8" />
        <circle cx="13" cy="10" r="1.2" fill="#38bdf8" />
        <circle cx="15" cy="13" r="1.2" fill="#38bdf8" />
        <circle cx="5" cy="15" r="1.2" fill="#38bdf8" />
        <circle cx="20" cy="18" r="1.2" fill="#38bdf8" />
        <circle cx="15" cy="22" r="1.2" fill="#38bdf8" />
        
        {/* Digital Circuits - Bottom Left */}
        <path d="M15 35H5V42" stroke="#0082fc" strokeWidth="1" />
        <path d="M20 30H10V38" stroke="#0082fc" strokeWidth="1" />
        <path d="M18 25H12V32" stroke="#0082fc" strokeWidth="1" />
        <circle cx="5" cy="42" r="1.2" fill="#38bdf8" />
        <circle cx="10" cy="38" r="1.2" fill="#38bdf8" />
        <circle cx="12" cy="32" r="1.2" fill="#38bdf8" />
        <circle cx="15" cy="35" r="1.2" fill="#38bdf8" />
        <circle cx="18" cy="25" r="1.2" fill="#38bdf8" />
        <circle cx="20" cy="30" r="1.2" fill="#38bdf8" />
        
        {/* Digital Circuits - Top Right */}
        <path d="M49 13H56V8" stroke="#0082fc" strokeWidth="1" />
        <path d="M44 18H51V10" stroke="#0082fc" strokeWidth="1" />
        <path d="M49 22H59V15" stroke="#0082fc" strokeWidth="1" />
        <circle cx="56" cy="8" r="1.2" fill="#38bdf8" />
        <circle cx="51" cy="10" r="1.2" fill="#38bdf8" />
        <circle cx="49" cy="13" r="1.2" fill="#38bdf8" />
        <circle cx="59" cy="15" r="1.2" fill="#38bdf8" />
        <circle cx="44" cy="18" r="1.2" fill="#38bdf8" />
        <circle cx="49" cy="22" r="1.2" fill="#38bdf8" />
        
        {/* Digital Circuits - Bottom Right */}
        <path d="M49 35H59V42" stroke="#0082fc" strokeWidth="1" />
        <path d="M44 30H54V38" stroke="#0082fc" strokeWidth="1" />
        <path d="M46 25H52V32" stroke="#0082fc" strokeWidth="1" />
        <circle cx="59" cy="42" r="1.2" fill="#38bdf8" />
        <circle cx="54" cy="38" r="1.2" fill="#38bdf8" />
        <circle cx="52" cy="32" r="1.2" fill="#38bdf8" />
        <circle cx="49" cy="35" r="1.2" fill="#38bdf8" />
        <circle cx="46" cy="25" r="1.2" fill="#38bdf8" />
        <circle cx="44" cy="30" r="1.2" fill="#38bdf8" />
        
        {/* More Circuit Connections */}
        <path d="M22 10H42" stroke="#0082fc" strokeWidth="1" strokeDasharray="1 2" />
        <path d="M22 40H42" stroke="#0082fc" strokeWidth="1" strokeDasharray="1 2" />
        <path d="M15 25H25" stroke="#0082fc" strokeWidth="1" strokeDasharray="1 2" />
        <path d="M39 25H49" stroke="#0082fc" strokeWidth="1" strokeDasharray="1 2" />
        
        {/* Center "YA" Text */}
        <text 
          x="32" 
          y="33" 
          textAnchor="middle" 
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif" 
          fontWeight="bold" 
          fontSize="18" 
          fill="white"
          letterSpacing="0"
        >
          YA
        </text>
      </g>
      
      {/* Main Company Name */}
      <text 
        x="130" 
        y="34" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="22" 
        fill="#0070f3"
        letterSpacing="0.5"
      >
        YashAI
      </text>
    </svg>
  );
};

export default DigitalBrainLogo;