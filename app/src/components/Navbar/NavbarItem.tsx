// ./app/src/components/Navbar/NavbarItem.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface NavbarItemProps {
  children: ReactNode
  className?: string 
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children, className = '', ...rest }) => {
  return <div className={cn('px-2 py-1', className)} {...rest}>{children}</div>
}
