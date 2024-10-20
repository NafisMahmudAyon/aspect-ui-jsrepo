// ./app/src/components/Navbar/Navbar.tsx
'use client'

import React, { ReactNode } from 'react'
import { NavbarProvider } from './NavbarContext'

interface NavbarProps {
  children: ReactNode
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <NavbarProvider>
      <nav className='relative bg-gray-400 shadow-md'>{children}</nav>
    </NavbarProvider>
  )
}
