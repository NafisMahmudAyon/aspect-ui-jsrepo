'use client'

import React, { ReactNode } from 'react'
import { useDropdown } from './DropdownContext'

interface DropdownActionProps {
  children: ReactNode
}

export const DropdownAction: React.FC<DropdownActionProps> = ({ children }) => {
  const { toggleDropdown } = useDropdown()

  return (
    <button
      type='button'
      className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
      onClick={toggleDropdown}
    >
      {children}
    </button>
  )
}
