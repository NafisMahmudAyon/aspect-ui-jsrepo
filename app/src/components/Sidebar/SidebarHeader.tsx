// ./app/src/components/Sidebar/SidebarHeader.tsx
'use client'

import React, { ReactNode } from 'react'

interface SidebarHeaderProps {
  children: ReactNode
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children }) => {
  return <div className='border-b border-gray-700 p-4'>{children}</div>
}
