'use client'

import React, { ReactNode } from 'react';
import { useAccordion } from './AccordionContext';

interface AccordionContentProps {
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, isOpen, className="" }) => {
  if (!isOpen) return null;
  const { contentClassName } = useAccordion();

  return (
    <div className={`${className} ${contentClassName} p-4 border-t`}>
      {children}
    </div>
  );
};
