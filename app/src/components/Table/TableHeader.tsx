'use client'

import React, { ReactNode } from 'react'

interface TableHeaderProps {
  children: ReactNode
  className?: string
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = ''
}) => {
  return <thead className={`bg-gray-50 ${className}`}>{children}</thead>
}
