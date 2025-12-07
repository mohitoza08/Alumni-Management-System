import React from 'react';
import { CheckCircle, Award, Star, Zap } from 'lucide-react';

interface BadgeProps {
  type: 'verified' | 'mentor' | 'top-alumni' | 'active';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function Badge({ type, size = 'md', showLabel = true }: BadgeProps) {
  const config = {
    verified: {
      icon: CheckCircle,
      color: '#36CFC9',
      label: 'Verified',
    },
    mentor: {
      icon: Award,
      color: '#6F57FF',
      label: 'Mentor',
    },
    'top-alumni': {
      icon: Star,
      color: '#FF8C42',
      label: 'Top Alumni',
    },
    active: {
      icon: Zap,
      color: '#52C41A',
      label: 'Active',
    },
  };
  
  const sizes = {
    sm: { icon: 12, text: 'text-xs', padding: 'px-2 py-1' },
    md: { icon: 16, text: 'text-sm', padding: 'px-3 py-1' },
    lg: { icon: 20, text: '', padding: 'px-4 py-2' },
  };
  
  const { icon: Icon, color, label } = config[type];
  const { icon: iconSize, text, padding } = sizes[size];
  
  if (!showLabel) {
    return <Icon size={iconSize} color={color} />;
  }
  
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full ${padding} ${text}`}
      style={{ backgroundColor: `${color}20`, color }}
    >
      <Icon size={iconSize} />
      {label}
    </span>
  );
}
