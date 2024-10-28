'use client'

import React, { ReactNode } from 'react'
import { useModal } from './ModalContext'
import { cn } from '../../utils/cn'

interface ModalContentProps {
  children: ReactNode
  className?: string
}

export const ModalContent: React.FC<ModalContentProps> = ({ children, className = '', ...rest }) => {
  const { isOpen } = useModal()

  if (!isOpen) return null

  return (
    <div className={cn('fixed inset-0 flex items-center justify-center bg-black bg-opacity-50', className)} {...rest}>
      {children}
    </div>
  )
}
