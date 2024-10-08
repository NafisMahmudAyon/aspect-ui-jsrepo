'use client'

import React, { ReactNode } from 'react';
import { useDropdown } from './DropdownContext';

interface DropdownActionProps {
  children: ReactNode;
}

export const DropdownAction: React.FC<DropdownActionProps> = ({ children }) => {
  const { toggleDropdown } = useDropdown();

  return (
    <button
      type="button"
      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      onClick={toggleDropdown}
    >
      {children}
    </button>
  );
};
