// ./app/src/components/Sidebar/SidebarFooter.tsx
'use client'

import React, { ReactNode } from 'react';

interface SidebarFooterProps {
  children: ReactNode;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children }) => {
  return (
    <div className="p-4 border-t border-gray-700">
      {children}
    </div>
  );
};
