// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client'

import React, { ReactNode } from 'react';
import { useNavbar } from './NavbarContext';

interface NavbarCollapseProps {
  children: ReactNode;
}

export const NavbarCollapse: React.FC<NavbarCollapseProps> = ({ children }) => {
  const { isCollapsed } = useNavbar();

  return (
    <div className={`${isCollapsed ? 'hidden' : 'block absolute top-full right-0'} md:block`}>
      <div className="flex flex-col md:flex-row">
        {children}
      </div>
    </div>
  );
};
