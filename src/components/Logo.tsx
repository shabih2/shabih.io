import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={className}
      width="100%" 
      height="100%"
    >
      {/* Left Ear - outer */}
      <circle cx="47" cy="48" r="28" fill="currentColor" />
      {/* Left Ear - inner hollow */}
      <circle cx="47" cy="48" r="16" fill="var(--logo-bg)" />

      {/* Right Ear - outer */}
      <circle cx="153" cy="48" r="28" fill="currentColor" />
      {/* Right Ear - inner hollow */}
      <circle cx="153" cy="48" r="16" fill="var(--logo-bg)" />

      {/* Main Head */}
      <circle cx="100" cy="115" r="78" fill="currentColor" />

      {/* Ninja Mask Slit - wide pill shape */}
      <rect x="34" y="88" width="132" height="44" rx="22" fill="var(--logo-bg)" />

      {/* Left Eye */}
      <circle cx="72" cy="110" r="11" fill="currentColor" />
      {/* Left Eye shine */}
      <circle cx="68" cy="106" r="4" fill="var(--logo-bg)" />

      {/* Right Eye */}
      <circle cx="128" cy="110" r="11" fill="currentColor" />
      {/* Right Eye shine */}
      <circle cx="124" cy="106" r="4" fill="var(--logo-bg)" />
    </svg>
  );
};

export default Logo;
