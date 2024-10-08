'use client'

import React, { ReactNode } from 'react';
import { useDropdown } from './DropdownContext';

interface DropdownContentProps {
  children: ReactNode;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({ children }) => {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  return (
    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white text-blue-500 ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {children}
      </div>
    </div>
  );
};
