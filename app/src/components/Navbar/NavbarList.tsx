// ./app/src/components/Navbar/NavbarList.tsx
'use client'

import React, { ReactNode } from 'react'
import { useNavbar } from './NavbarContext'
import { cn } from '../../utils/cn'

interface NavbarListProps {
  children: ReactNode
  className?: string
  position: 'left' | 'right'
}

export const NavbarList: React.FC<NavbarListProps> = ({
  children,
  className = '',
  position,
  ...rest
}) => {
  const { isCollapsed, collapseOn } = useNavbar()

  return (
    <div
      className={cn(
        'items-center',
        isCollapsed ? `${collapseOn}:flex` : `${collapseOn}:hidden`,
        className
      )}
      {...rest}
    >
      <div className="flex space-x-4">
        {children}
      </div>
    </div>
  )
}
