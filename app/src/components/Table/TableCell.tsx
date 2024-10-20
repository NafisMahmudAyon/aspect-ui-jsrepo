'use client'

import React, { ReactNode } from 'react'

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  className?: string
  colSpan?: number
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className = '',
  colSpan,
  ...rest
}) => {
  return (
    <td
      className={`whitespace-nowrap px-6 py-4 ${className}`}
      colSpan={colSpan}
      {...rest}
    >
      {children}
    </td>
  )
}
