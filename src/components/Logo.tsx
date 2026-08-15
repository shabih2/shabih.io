import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      width="100%" 
      height="100%"
    >
      {/* Left Ear */}
      <circle cx="25" cy="25" r="16" fill="currentColor" />
      <circle cx="25" cy="25" r="8" fill="var(--bg-main)" />
      
      {/* Right Ear */}
      <circle cx="75" cy="25" r="16" fill="currentColor" />
      <circle cx="75" cy="25" r="8" fill="var(--bg-main)" />
      
      {/* Main Head */}
      <circle cx="50" cy="55" r="38" fill="currentColor" />
      
      {/* Ninja Mask Slit (Pill Shape) */}
      <rect x="20" y="42" width="60" height="22" rx="11" fill="var(--bg-main)" />
      
      {/* Left Eye */}
      <circle cx="35" cy="53" r="5" fill="currentColor" />
      <circle cx="34" cy="51" r="1.5" fill="var(--bg-main)" />
      
      {/* Right Eye */}
      <circle cx="65" cy="53" r="5" fill="currentColor" />
      <circle cx="64" cy="51" r="1.5" fill="var(--bg-main)" />
    </svg>
  );
};

export default Logo;
