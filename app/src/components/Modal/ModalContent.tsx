'use client'

import React, { ReactNode } from 'react'
import { useModal } from './ModalContext'

interface ModalContentProps {
  children: ReactNode
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  const { isOpen } = useModal()

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      {children}
    </div>
  )
}
