// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client'

import React, { ReactNode } from 'react'
import { useNavbar } from './NavbarContext'
import { cn } from '../../utils/cn'

interface NavbarCollapseProps {
  children: ReactNode
  className?: string
  listClassName?: string
}

export const NavbarCollapse: React.FC<NavbarCollapseProps> = ({ children, className = '', listClassName = '', ...rest }) => {
  const { isCollapsed, collapseOn } = useNavbar()

  const hiddenClass = `${collapseOn}:block`

  return (
    <div
      className={cn(isCollapsed ? 'hidden' : 'absolute right-0 top-full block z-20 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 p-4 rounded-md border border-primary-200 dark:border-primary-800', hiddenClass, className)} {...rest}
    >
      <div className={cn('flex', isCollapsed ? `${collapseOn}:flex-row gap-2` : 'flex-col', listClassName)}>{children}</div>
    </div>
  )
}
