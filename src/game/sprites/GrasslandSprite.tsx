import React from 'react';

export const GrasslandSprite: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    {/* Base grass */}
    <rect x="0" y="0" width="32" height="32" fill="#4CAF50" stroke="#388E3C" strokeWidth="1"/>
    {/* Grass blades */}
    <rect x="4" y="24" width="2" height="8" fill="#66BB6A"/>
    <rect x="8" y="22" width="2" height="10" fill="#81C784"/>
    <rect x="12" y="25" width="2" height="7" fill="#66BB6A"/>
    <rect x="16" y="20" width="2" height="12" fill="#4CAF50"/>
    <rect x="20" y="23" width="2" height="9" fill="#66BB6A"/>
    <rect x="24" y="21" width="2" height="11" fill="#81C784"/>
    <rect x="28" y="24" width="2" height="8" fill="#66BB6A"/>
    
    <rect x="2" y="18" width="2" height="6" fill="#81C784"/>
    <rect x="6" y="16" width="2" height="8" fill="#66BB6A"/>
    <rect x="10" y="19" width="2" height="5" fill="#4CAF50"/>
    <rect x="14" y="15" width="2" height="9" fill="#66BB6A"/>
    <rect x="18" y="17" width="2" height="7" fill="#81C784"/>
    <rect x="22" y="14" width="2" height="10" fill="#4CAF50"/>
    <rect x="26" y="16" width="2" height="8" fill="#66BB6A"/>
    <rect x="30" y="19" width="2" height="5" fill="#81C784"/>
    
    {/* Small details */}
    <rect x="5" y="28" width="1" height="1" fill="#2E7D32"/>
    <rect x="13" y="29" width="1" height="1" fill="#2E7D32"/>
    <rect x="21" y="27" width="1" height="1" fill="#2E7D32"/>
    <rect x="29" y="30" width="1" height="1" fill="#2E7D32"/>
  </svg>
);

export default GrasslandSprite;