// ./app/src/components/Input/Input.tsx

'use client'

import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, iconPosition = 'left', ...props }, ref) => {
    return (
      <div className='mb-4'>
        {label && (
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            {label}
          </label>
        )}
        <div className='relative'>
          {icon && (
            <div
              className={`pointer-events-none absolute inset-y-0 flex items-center ${iconPosition === 'left' ? 'left-0 pl-3' : 'right-0 pr-3'}`}
            >
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'} ${icon && iconPosition === 'left' ? 'pl-10' : 'pr-10'} ${className} `}
            {...props}
          />
        </div>
        {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
