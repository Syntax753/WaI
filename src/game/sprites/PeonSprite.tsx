import React from 'react';

export const PeonSprite: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <rect x="8" y="4" width="8" height="8" fill="#FDB863" stroke="#8B4513" strokeWidth="1"/>
    {/* Hat */}
    <rect x="6" y="2" width="12" height="4" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
    <rect x="4" y="0" width="16" height="2" fill="#654321" stroke="#4A2C17" strokeWidth="1"/>
    {/* Eyes */}
    <rect x="9" y="6" width="2" height="2" fill="#000000"/>
    <rect x="13" y="6" width="2" height="2" fill="#000000"/>
    {/* Body */}
    <rect x="7" y="12" width="10" height="8" fill="#4A90E2" stroke="#2E5BBA" strokeWidth="1"/>
    {/* Arms */}
    <rect x="4" y="13" width="3" height="6" fill="#FDB863" stroke="#8B4513" strokeWidth="1"/>
    <rect x="17" y="13" width="3" height="6" fill="#FDB863" stroke="#8B4513" strokeWidth="1"/>
    {/* Legs */}
    <rect x="8" y="20" width="3" height="4" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
    <rect x="13" y="20" width="3" height="4" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
    {/* Feet */}
    <rect x="7" y="24" width="5" height="2" fill="#654321" stroke="#4A2C17" strokeWidth="1"/>
    <rect x="12" y="24" width="5" height="2" fill="#654321" stroke="#4A2C17" strokeWidth="1"/>
  </svg>
);

export default PeonSprite;