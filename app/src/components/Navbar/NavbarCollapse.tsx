// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client'

import React, { ReactNode } from 'react'
import { useNavbar } from './NavbarContext'

interface NavbarCollapseProps {
  children: ReactNode
}

export const NavbarCollapse: React.FC<NavbarCollapseProps> = ({ children }) => {
  const { isCollapsed } = useNavbar()

  return (
    <div
      className={`${isCollapsed ? 'hidden' : 'absolute right-0 top-full block'} md:block`}
    >
      <div className='flex flex-col md:flex-row'>{children}</div>
    </div>
  )
}
