'use client'

import React, { ReactNode } from 'react'

interface DropdownListProps {
  children: ReactNode
}

export const DropdownList: React.FC<DropdownListProps> = ({ children }) => {
  return <div className='py-1'>{children}</div>
}
