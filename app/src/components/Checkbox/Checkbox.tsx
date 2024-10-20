// ./app/src/components/Checkbox/Checkbox.tsx

'use client'

import React, { ChangeEvent } from 'react'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  className = ''
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <label
      className={`flex cursor-pointer items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className='form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out'
      />
      <span className='ml-2 text-gray-700'>{label}</span>
    </label>
  )
}
