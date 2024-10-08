'use client'

import React, { ReactNode, useState } from 'react';
import { TabsProvider } from './TabsContext';

interface TabsProps {
  children: ReactNode;
  defaultActive: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultActive, className }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  return (
    <TabsProvider value={{ activeTab, setActiveTab }}>
      <div className={className}>
        {children}
      </div>
    </TabsProvider>
  );
};
