import React from 'react';

interface LogoProps {
  className?: string;
}

// Digital Brain with stylish YashAI text Logo Component
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
      {/* Brain Circuit Background */}
      <circle cx="24" cy="24" r="19" fill="url(#brain-bg-gradient)" fillOpacity="0.2" />
      
      {/* Main Brain Shape */}
      <path 
        d="M24 7C15.716 7 9 13.716 9 22C9 25.283 10.0293 28.3177 11.7635 30.7635C12.3754 31.6275 13.0678 32.4142 13.8301 33.1172C14.8989 34.1006 16.1313 34.9074 17.4863 35.4902C19.4837 36.3782 21.6903 36.8652 24 36.8652C26.3097 36.8652 28.5163 36.3782 30.5137 35.4902C31.8687 34.9074 33.1011 34.1006 34.1699 33.1172C34.9322 32.4142 35.6246 31.6275 36.2365 30.7635C37.9707 28.3177 39 25.283 39 22C39 13.716 32.284 7 24 7Z" 
        stroke="url(#gold-outline-gradient)"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Brain Circuit Lines */}
      <path 
        d="M16 20C19 17 29 17 32 20" 
        stroke="url(#gold-circuit-gradient)" 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
      <path 
        d="M16 28C19 31 29 31 32 28" 
        stroke="url(#gold-circuit-gradient)" 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
      
      {/* Left Hemisphere Lines */}
      <path 
        d="M19 15C17 18 17 30 19 33" 
        stroke="url(#gold-left-gradient)" 
        strokeWidth="1.2" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      
      {/* Right Hemisphere Lines */}
      <path 
        d="M29 15C31 18 31 30 29 33" 
        stroke="url(#gold-right-gradient)" 
        strokeWidth="1.2" 
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      
      {/* Middle Connection */}
      <path 
        d="M24 15V33" 
        stroke="url(#gold-middle-gradient)" 
        strokeWidth="1" 
        strokeLinecap="round"
        strokeDasharray="1 3"
      />
      
      {/* Horizontal Connections */}
      <path 
        d="M15 24H33" 
        stroke="url(#gold-horizontal-gradient)" 
        strokeWidth="1" 
        strokeLinecap="round"
        strokeDasharray="1 3"
      />
      
      {/* Digital Nodes - Larger central nodes */}
      <circle cx="24" cy="24" r="2.5" fill="url(#gold-center-node-gradient)" />
      
      {/* Digital Nodes - Connection points */}
      <circle cx="19" cy="15" r="1.5" fill="url(#gold-node-gradient)" />
      <circle cx="19" cy="33" r="1.5" fill="url(#gold-node-gradient)" />
      <circle cx="29" cy="15" r="1.5" fill="url(#gold-node-gradient)" />
      <circle cx="29" cy="33" r="1.5" fill="url(#gold-node-gradient)" />
      
      {/* Digital Nodes - Edge nodes */}
      <circle cx="15" cy="24" r="1.5" fill="url(#gold-node-gradient)" />
      <circle cx="33" cy="24" r="1.5" fill="url(#gold-node-gradient)" />
      <circle cx="24" cy="15" r="1.5" fill="url(#gold-node-gradient)" />
      <circle cx="24" cy="33" r="1.5" fill="url(#gold-node-gradient)" />
      
      {/* Digital Nodes - Internal network nodes */}
      <circle cx="21" cy="21" r="1" fill="url(#gold-node-gradient)" />
      <circle cx="27" cy="21" r="1" fill="url(#gold-node-gradient)" />
      <circle cx="21" cy="27" r="1" fill="url(#gold-node-gradient)" />
      <circle cx="27" cy="27" r="1" fill="url(#gold-node-gradient)" />
      
      {/* Connection between brain and text */}
      <path 
        d="M42 24H55" 
        stroke="url(#gold-gradient)" 
        strokeWidth="1" 
        strokeLinecap="round"
        strokeDasharray="1 3" 
      />
      
      <circle cx="42" cy="24" r="1.5" fill="url(#gold-fill-gradient)" />
      <circle cx="55" cy="24" r="1.5" fill="url(#gold-fill-gradient)" />
      
      {/* YashAI Text - Regular Font */}
      <text x="60" y="30" 
        fill="url(#gold-gradient)" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="20">
        YashAI
      </text>
      
      {/* Gradients */}
      <defs>
        <radialGradient id="brain-bg-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 24) rotate(90) scale(24)">
          <stop stopColor="#FFC107" stopOpacity="0.5" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0.2" />
        </radialGradient>
        
        <linearGradient id="gold-outline-gradient" x1="9" y1="22" x2="39" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        
        <linearGradient id="gold-circuit-gradient" x1="16" y1="24" x2="32" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        
        <linearGradient id="gold-left-gradient" x1="17" y1="24" x2="19" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.5" stopColor="#FFD700" />
        </linearGradient>
        
        <linearGradient id="gold-right-gradient" x1="29" y1="24" x2="31" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0.5" stopColor="#FFD700" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        
        <linearGradient id="gold-middle-gradient" x1="24" y1="15" x2="24" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        
        <linearGradient id="gold-horizontal-gradient" x1="15" y1="24" x2="33" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        
        <radialGradient id="gold-node-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 24) rotate(90) scale(20)">
          <stop stopColor="#FFC107" />
          <stop offset="1" stopColor="#F59E0B" />
        </radialGradient>
        
        <radialGradient id="gold-center-node-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 24) rotate(90) scale(4)">
          <stop stopColor="#FFD700" />
          <stop offset="1" stopColor="#F59E0B" />
        </radialGradient>
        
        <linearGradient id="gold-gradient" x1="50" y1="24" x2="150" y2="24" gradientUnits="userSpaceOnUse">
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