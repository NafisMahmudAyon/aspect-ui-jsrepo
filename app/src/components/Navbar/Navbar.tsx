'use client'
import React, { ReactNode } from 'react'
import { NavbarProvider } from './NavbarContext'
import { cn } from '../../utils/cn'

interface NavbarProps {
  children: ReactNode
  className?: string
  collapseOn?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Navbar: React.FC<NavbarProps> = ({ children, className='', collapseOn='lg', ...rest }) => {
  return (
    <NavbarProvider collapseOn={collapseOn}>
      <nav className={cn('relative bg-primary-100 dark:bg-primary-900 shadow-md', className)} {...rest}>
        {children}
      </nav>
    </NavbarProvider>
  )
}