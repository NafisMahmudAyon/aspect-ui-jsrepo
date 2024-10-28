// ./app/src/components/Navbar/NavbarContext.tsx
'use client'
import React, { createContext, useContext, useState } from 'react'

interface NavbarContextType {
  isCollapsed: boolean
  toggleCollapse: () => void
  collapseOn: 'sm' | 'md' | 'lg' | 'xl'
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined)

export const NavbarProvider: React.FC<{ children: React.ReactNode, collapseOn: 'sm' | 'md' | 'lg' | 'xl' }> = ({
  children,
  collapseOn = 'lg' // default value
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => setIsCollapsed(prev => !prev)

  return (
    <NavbarContext.Provider value={{ isCollapsed, toggleCollapse, collapseOn }}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext)
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider')
  }
  return context
}