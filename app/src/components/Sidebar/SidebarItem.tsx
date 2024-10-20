// ./app/src/components/Sidebar/SidebarItem.tsx
'use client'

import React, { ReactNode } from 'react'

interface SidebarItemProps {
  children: ReactNode
  onClick?: () => void
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  onClick
}) => {
  return (
    <div
      className='cursor-pointer p-4 transition-colors duration-200 hover:bg-gray-700'
      onClick={onClick}
    >
      {children}
    </div>
  )
}
