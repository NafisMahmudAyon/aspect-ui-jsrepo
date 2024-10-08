// ./app/src/components/Sidebar/Sidebar.tsx
'use client'

import React, { ReactNode } from 'react';
// import { SidebarProvider } from './SidebarContext';

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <>
    {/* <SidebarProvider> */}
      <aside className="flex flex-col h-screen bg-gray-800 text-white w-64 transition-all duration-300 ease-in-out">
        {children}
      </aside>
    {/* </SidebarProvider> */}
    </>
  );
};
