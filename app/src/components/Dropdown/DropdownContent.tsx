'use client'

import React, { ReactNode } from 'react'
import { useDropdown } from './DropdownContext'

interface DropdownContentProps {
  children: ReactNode
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  children
}) => {
  const { isOpen, positionClass } = useDropdown()

  if (!isOpen) return null

  return (
    <div className={`absolute z-10 ${positionClass}`}>
      <div className='rounded-md border border-gray-200 bg-white shadow-lg'>
        {children}
      </div>
    </div>
  )
}
