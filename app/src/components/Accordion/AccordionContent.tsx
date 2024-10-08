'use client'

import React, { ReactNode } from 'react';

interface AccordionContentProps {
  children: ReactNode;
  isOpen?: boolean;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="p-4 border-t">
      {children}
    </div>
  );
};
