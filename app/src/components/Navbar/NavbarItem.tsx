// ./app/src/components/Navbar/NavbarItem.tsx
'use client'

import React, { ReactNode } from 'react'

interface NavbarItemProps {
  children: ReactNode
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children }) => {
  return <div className='px-2 py-1'>{children}</div>
}
