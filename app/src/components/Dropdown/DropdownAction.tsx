'use client'

import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import { useDropdown } from './DropdownContext'
import { cn } from '../../utils/cn'
import { Down, Left, Right, Up } from '../Icon/Arrow'

interface DropdownActionProps {
  children: ReactNode
  className?: string
  icon?: ReactElement
  iconPosition?: 'start' | 'end'
}

export const DropdownAction: React.FC<DropdownActionProps> = ({ children, className = "", icon, iconPosition = "end" }) => {
  const { toggleDropdown, direction } = useDropdown()
  const [iconDefault, setIconDefault] = useState(<Down />)
  useEffect(() => {
    if (direction == 'top') {
      setIconDefault(<Up />)
    }
    if (direction == 'left') {
      setIconDefault(<Left />)
    }
    if (direction == 'right') {
      setIconDefault(<Right />)
    }
  }, [direction]);

  return (
    <button
      type='button'
      className={cn('inline-flex w-full justify-center rounded-md bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100', className)}
      onClick={toggleDropdown}
    >
      {iconPosition === 'start' && (icon || iconDefault)}
      {children}
      {iconPosition === 'end' && (icon ?? iconDefault)}
    </button>
  )
}