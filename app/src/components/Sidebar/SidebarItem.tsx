// ./app/src/components/Sidebar/SidebarItem.tsx
'use client'

import React, { ReactNode } from 'react';

interface SidebarItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ children, onClick }) => {
  return (
    <div
      className="p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
