'use client'

import React, { ReactNode } from 'react'

interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
  className?: string
}

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <tfoot className={`bg-gray-50 ${className}`} {...rest}>
      {children}
    </tfoot>
  )
}
