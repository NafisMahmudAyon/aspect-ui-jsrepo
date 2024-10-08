'use client'

import React, { ReactNode } from 'react';
import { useDropdown } from './DropdownContext';

interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  const { closeDropdown } = useDropdown();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    closeDropdown();
  };

  return (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
