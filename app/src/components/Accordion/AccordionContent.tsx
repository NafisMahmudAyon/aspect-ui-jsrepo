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
    <div className={`${className} ${contentClassName} ${isOpen ? "border-primary-950 dark:border-primary-100 bg-primary-100 text-primary-950 dark:bg-primary-950 dark:text-primary-100" : "border-primary-950 dark:border-primary-100"} p-4 border-t `}>
      {children}
    </div>
  );
};
