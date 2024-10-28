// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client'

import React, { ReactNode } from 'react'
import { useNavbar } from './NavbarContext'
import { cn } from '../../utils/cn'

interface NavbarCollapseProps {
  children: ReactNode
  className?: string
}

export const NavbarCollapse: React.FC<NavbarCollapseProps> = ({
  children,
  className = '',
  ...rest
}) => {
  const { isCollapsed, collapseOn } = useNavbar()

  return (
    <div
      className={cn(
        isCollapsed ? 'hidden' : 'block',
        `absolute left-0 right-0 top-full z-20 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 p-4 rounded-md border border-primary-200 dark:border-primary-800`,
        `${collapseOn}:hidden`,
        className
      )}
      {...rest}
    >
      <div className="flex flex-col space-y-2">
        {children}
      </div>
    </div>
  )
}
