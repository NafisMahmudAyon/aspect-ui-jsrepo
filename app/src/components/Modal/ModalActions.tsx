'use client'

import React, { ReactNode } from 'react'
import { useModal } from './ModalContext'

interface ModalActionProps {
  children: ReactNode
}

export const ModalAction: React.FC<ModalActionProps> = ({ children }) => {
  const { handleOpen } = useModal()

  return (
    <button
      className='rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600'
      onClick={handleOpen}
    >
      {children}
    </button>
  )
}
