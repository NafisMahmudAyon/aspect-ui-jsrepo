// ./app/src/components/Toggle/ToggleButtonGroup.tsx

'use client'

import React from 'react';
import { ToggleButtonGroupProvider } from './ToggleButtonGroupContext';

interface ToggleButtonGroupProps {
  children: React.ReactNode;
  type: 'single' | 'multiple';
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  className?: string;
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  children,
  type,
  defaultValue,
  onChange,
  className = '',
}) => {
  return (
    <ToggleButtonGroupProvider type={type} defaultValue={defaultValue} onChange={onChange}>
      <div className={`flex space-x-2 ${className}`}>
        {children}
      </div>
    </ToggleButtonGroupProvider>
  );
};
