import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ children, hover = false, className = '', onClick, padding = 'md' }: CardProps) {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverClass = hover ? 'hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] cursor-pointer' : '';
  
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-200 ${paddingClasses[padding]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
