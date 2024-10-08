'use client'

import React, { ReactNode } from 'react';

interface TabListProps {
  children: ReactNode;
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
  return (
    <div className="flex space-x-2 mb-4">
      {children}
    </div>
  );
};
