'use client'

import React, { ReactNode } from 'react'

interface TableHeadCellProps {
  children: ReactNode
  className?: string
}

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
  children,
  className = ''
}) => {
  return (
    <th
      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 ${className}`}
    >
      {children}
    </th>
  )
}
