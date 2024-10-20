'use client'

import React from 'react'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
  className?: string
  switchClassName?: string
  labelClassName?: string
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className = '',
  switchClassName = '',
  labelClassName = ''
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <label
      className={`inline-flex cursor-pointer items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
    >
      <div className={`relative ${switchClassName}`}>
        <input
          type='checkbox'
          className='sr-only'
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <div
          className={`h-6 w-10 rounded-full bg-gray-200 shadow-inner transition-colors duration-300 ease-in-out ${checked ? 'bg-blue-500' : ''}`}
        ></div>
        <div
          className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ease-in-out ${checked ? 'translate-x-full transform' : ''}`}
        ></div>
      </div>
      {label && <span className={`ml-3 ${labelClassName}`}>{label}</span>}
    </label>
  )
}
