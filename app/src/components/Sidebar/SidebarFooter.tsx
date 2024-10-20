// ./app/src/components/Sidebar/SidebarFooter.tsx
'use client'

import React, { ReactNode } from 'react'

interface SidebarFooterProps {
  children: ReactNode
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children }) => {
  return <div className='border-t border-gray-700 p-4'>{children}</div>
}
