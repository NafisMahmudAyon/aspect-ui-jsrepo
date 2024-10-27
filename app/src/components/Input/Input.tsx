// ./app/src/components/Input/Input.tsx

'use client'

import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'
import { Mail } from '../Icon/Form'
import { cn } from '../../utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  labelClassName?: string
  iconClassName?: string
  className?: string
  wrapperClassName?: string
  errorClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon=<Mail />, labelClassName="", iconClassName="", className="", wrapperClassName="", errorClassName="", ...rest }, ref) => {
    return (
      <fieldset className={cn('mb-4', wrapperClassName)}>
        {label && (
          <label className={cn('mb-1 block text-sm font-medium text-gray-700', labelClassName)}>
            {label}
          </label>
        )}
        <div className='relative'>
          {icon && (
            <div
              className={cn("pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50 text-primary-500", iconClassName)}
            >
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn("w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ps-11", error ? 'border-red-500' : 'border-gray-300', className)}
            {...rest}
          />
        </div>
        {error && <p className={cn('mt-1 text-sm text-error-600', errorClassName)}>{error}</p>}
      </fieldset>
    )
  }
)

Input.displayName = 'Input'
