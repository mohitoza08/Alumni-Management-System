import React from 'react';
import { StatusIndicator } from './StatusIndicator';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  initials?: string;
}

export function Avatar({ src, alt = 'Avatar', size = 'md', status, initials }: AvatarProps) {
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };
  
  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: '',
    lg: 'text-xl',
    xl: 'text-3xl',
  };
  
  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizes[size]} rounded-full object-cover`}
        />
      ) : (
        <div className={`${sizes[size]} rounded-full bg-[#1E73BE] text-white flex items-center justify-center ${textSizes[size]}`}>
          {initials || alt.charAt(0).toUpperCase()}
        </div>
      )}
      
      {status && (
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5">
          <StatusIndicator status={status} size="sm" />
        </div>
      )}
    </div>
  );
}
