'use client'

import React, { ReactNode } from 'react'

interface TableCaptionProps {
  children: ReactNode
  className?: string
}

export const TableCaption: React.FC<TableCaptionProps> = ({
  children,
  className = ''
}) => {
  return (
    <caption className={`mb-2 text-sm text-gray-500 ${className}`}>
      {children}
    </caption>
  )
}
