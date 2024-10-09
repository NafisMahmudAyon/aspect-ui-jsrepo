'use client'

import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  switchClassName?: string;
  labelClassName?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className = '',
  switchClassName = '',
  labelClassName = '',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={`inline-flex items-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div className={`relative ${switchClassName}`}>
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <div className={`w-10 h-6 bg-gray-200 rounded-full shadow-inner transition-colors duration-300 ease-in-out ${checked ? 'bg-blue-500' : ''}`}></div>
        <div className={`absolute w-4 h-4 bg-white rounded-full shadow inset-y-1 left-1 transition-transform duration-300 ease-in-out ${checked ? 'transform translate-x-full' : ''}`}></div>
      </div>
      {label && (
        <span className={`ml-3 ${labelClassName}`}>
          {label}
        </span>
      )}
    </label>
  );
};
