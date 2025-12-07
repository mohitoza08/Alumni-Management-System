import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  fullWidth?: boolean;
  className?: string;
  required?: boolean;
}

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  icon,
  error,
  fullWidth = false,
  className = '',
  required = false,
}: InputProps) {
  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="text-[#333333]">
          {label} {required && <span className="text-[#F5222D]">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-4 py-3 ${icon ? 'pl-12' : ''} border border-[#E0E0E0] rounded-[10px] bg-white text-[#333333] placeholder:text-[#777777] focus:outline-none focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE] focus:ring-opacity-20 transition-all`}
        />
      </div>
      {error && <span className="text-sm text-[#F5222D]">{error}</span>}
    </div>
  );
}
