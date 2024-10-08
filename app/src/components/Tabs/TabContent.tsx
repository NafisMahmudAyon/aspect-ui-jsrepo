'use client'

import React, { ReactNode } from 'react';
import { useTabs } from './TabsContext';

interface TabContentProps {
  children: ReactNode;
  value: string;
}

export const TabContent: React.FC<TabContentProps> = ({ children, value }) => {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return <div>{children}</div>;
};
