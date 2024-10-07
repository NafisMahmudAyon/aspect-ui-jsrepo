'use client'

import React, { ReactNode, useCallback, useState } from 'react';
import { ModalProvider } from './ModalContext';

interface ModalProps {
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [setIsOpen])

  return (
    <ModalProvider value={{ isOpen, openModal, closeModal, handleOpen }}>
      {children}
      {/* {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            {React.Children.map(children, child => {
              if (React.isValidElement(child) && child.type === ModalContent) {
                return child;
              }
              return null;
            })}
          </div>
        </div>
      )} */}
    </ModalProvider>
  );
};

