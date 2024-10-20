'use client'

import React, { ReactNode } from 'react'
import { useTabs } from './TabsContext'

interface TabItemProps {
  children: ReactNode
  value: string
}

export const TabItem: React.FC<TabItemProps> = ({ children, value }) => {
  const { activeTab, setActiveTab } = useTabs()

  return (
    <button
      className={`rounded px-4 py-2 ${
        activeTab === value
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}
