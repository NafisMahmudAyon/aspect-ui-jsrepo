// ./app/src/components/Sidebar/SidebarHeader.tsx
'use client'

import React, { ReactNode } from 'react';

interface SidebarHeaderProps {
  children: ReactNode;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children }) => {
  return (
    <div className="p-4 border-b border-gray-700">
      {children}
    </div>
  );
};
