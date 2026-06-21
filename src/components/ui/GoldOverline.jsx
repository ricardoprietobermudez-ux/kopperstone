import React from 'react';

export default function GoldOverline({ children, className = '' }) {
  return (
    <div className={`gold-overline ${className}`}>
      {children}
    </div>
  );
}