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
  const { collapseOn } = useNavbar()
  return (
    <ul
      className={cn('items-center space-x-4', `hidden ${collapseOn === 'md' && 'md:flex'} ${collapseOn === 'lg' && 'lg:flex' }` , className)
      }
      {...rest}
    >
      {children}
    </ul>
  )
}

