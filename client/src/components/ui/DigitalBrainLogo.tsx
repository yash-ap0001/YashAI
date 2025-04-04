import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

interface LogoProps {
  className?: string;
}

// YashAI Logo Component with Font Awesome Brain Icon
const DigitalBrainLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2 text-amber-600 text-4xl">
        <FontAwesomeIcon icon={faBrain} />
      </div>
      <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
        YashAI
      </span>
    </div>
  );
};

export default DigitalBrainLogo;