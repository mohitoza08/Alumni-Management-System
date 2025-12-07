import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose: () => void;
}

export function Toast({ type, message, onClose }: ToastProps) {
  const config = {
    success: {
      icon: CheckCircle,
      color: '#52C41A',
      bgColor: '#F6FFED',
    },
    error: {
      icon: AlertCircle,
      color: '#F5222D',
      bgColor: '#FFF1F0',
    },
    warning: {
      icon: AlertCircle,
      color: '#FAAD14',
      bgColor: '#FFFBE6',
    },
    info: {
      icon: Info,
      color: '#1E73BE',
      bgColor: '#E6F7FF',
    },
  };
  
  const { icon: Icon, color, bgColor } = config[type];
  
  return (
    <div
      className="flex items-center gap-3 p-4 rounded-lg shadow-lg min-w-[300px]"
      style={{ backgroundColor: bgColor }}
    >
      <Icon size={20} style={{ color }} />
      <p className="flex-1 text-[#333333]">{message}</p>
      <button
        onClick={onClose}
        className="p-1 hover:bg-black hover:bg-opacity-5 rounded transition-colors"
      >
        <X size={18} className="text-[#777777]" />
      </button>
    </div>
  );
}
