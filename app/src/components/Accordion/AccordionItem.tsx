'use client'

import React, { ReactNode } from 'react';
import { useAccordion } from './AccordionContext';

interface AccordionItemProps {
  children: ReactNode;
  id: string;
  disabled?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, id, disabled = false }) => {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(id);

  return (
    <div className={`border rounded-md overflow-hidden ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen,
            onToggle: disabled ? undefined : () => toggleItem(id),
            disabled
          });
        }
        return child;
      })}
    </div>
  );
};
