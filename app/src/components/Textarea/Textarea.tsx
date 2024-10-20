// ./app/src/components/Textarea/Textarea.tsx

'use client'

import React, { forwardRef } from 'react'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className='mb-4'>
        {label && (
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full rounded-lg border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${error ? 'border-red-500' : 'border-gray-300'} ${className})`}
          {...props}
        />
        {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
