// ./app/src/components/Navbar/NavbarContainer.tsx
'use client'

import React, { ReactNode } from 'react';

interface NavbarContainerProps {
  children: ReactNode;
}

export const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        {children}
      </div>
    </div>
  );
};
