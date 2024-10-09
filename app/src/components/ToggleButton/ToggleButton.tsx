// ./app/src/components/Toggle/ToggleButton.tsx

'use client'

import React from 'react';
import { useToggleButtonGroup } from './ToggleButtonGroupContext';

interface ToggleButtonProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  children,
  className = '',
}) => {
  const { selectedValues, handleChange } = useToggleButtonGroup();

  const isSelected = Array.isArray(selectedValues)
    ? selectedValues.includes(value)
    : selectedValues === value;

  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors duration-200 ${isSelected
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } ${className}`}
      onClick={() => handleChange(value)}
    >
      {children}
    </button>
  );
};
