'use client'

import React, { ReactNode } from 'react'

interface TabListProps {
  children: ReactNode
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
  return <div className='mb-4 flex space-x-2'>{children}</div>
}
