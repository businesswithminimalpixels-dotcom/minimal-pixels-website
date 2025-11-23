import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex flex-col justify-center cursor-default">
        <span className="text-xl font-bold text-white tracking-tight leading-tight">Minimal</span>
        <span className="text-xl font-bold text-white tracking-tight leading-tight">Pixels</span>
      </div>
    </div>
  );
};

export default Logo;