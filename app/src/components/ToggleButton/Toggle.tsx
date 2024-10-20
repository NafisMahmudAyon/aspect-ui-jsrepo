// ./app/src/components/Toggle/StandaloneToggleButton.tsx

'use client'

import React, { useState } from 'react'

interface ToggleProps {
  value: string
  children: React.ReactNode
  className?: string
  defaultSelected?: boolean
  onChange?: (value: string, selected: boolean) => void
}

export const Toggle: React.FC<ToggleProps> = ({
  value,
  children,
  className = '',
  defaultSelected = false,
  onChange
}) => {
  const [isSelected, setIsSelected] = useState(defaultSelected)

  const handleClick = () => {
    const newSelectedState = !isSelected
    setIsSelected(newSelectedState)
    onChange?.(value, newSelectedState)
  }

  return (
    <button
      className={`rounded-md px-4 py-2 transition-colors duration-200 ${
        isSelected
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
