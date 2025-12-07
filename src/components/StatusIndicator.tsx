import React from 'react';

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'away' | 'busy';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function StatusIndicator({ status, size = 'md', showLabel = false }: StatusIndicatorProps) {
  const colors = {
    online: '#52C41A',
    offline: '#999999',
    away: '#FAAD14',
    busy: '#F5222D',
  };
  
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };
  
  const labels = {
    online: 'Online',
    offline: 'Offline',
    away: 'Away',
    busy: 'Busy',
  };
  
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${sizes[size]} rounded-full`}
        style={{ backgroundColor: colors[status] }}
      />
      {showLabel && (
        <span className="text-sm text-[#555555]">{labels[status]}</span>
      )}
    </div>
  );
}
