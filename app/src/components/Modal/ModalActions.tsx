'use client'

import React, { ReactNode } from 'react';
import { useModal } from './ModalContext';

interface ModalActionProps {
  children: ReactNode;
}

export const ModalAction: React.FC<ModalActionProps> = ({ children }) => {
  const { handleOpen } = useModal();

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onClick={handleOpen}
    >
      {children}
    </button>
  );
};

