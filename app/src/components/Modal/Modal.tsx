'use client'

import React, { ReactNode, useCallback, useState } from 'react'
import { ModalProvider } from './ModalContext'

interface ModalProps {
  children: ReactNode
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [setIsOpen])

  return (
    <ModalProvider value={{ isOpen, handleOpen }}>{children}</ModalProvider>
  )
}
