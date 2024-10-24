'use client'

import React, { ReactNode } from 'react'
import { useDropdown } from './DropdownContext'
import { cn } from '../../utils/cn'

interface DropdownActionProps {
  children: ReactNode
  className?: string
}

export const DropdownAction: React.FC<DropdownActionProps> = ({ children, className="" }) => {
  const { toggleDropdown } = useDropdown()

  return (
    <button
      type='button'
      className={cn('inline-flex w-full justify-center rounded-md bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100',className)}
      onClick={toggleDropdown}
    >
      {children}
    </button>
  )
}
