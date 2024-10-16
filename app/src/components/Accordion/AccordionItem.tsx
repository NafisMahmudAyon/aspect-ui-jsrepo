'use client'

import React, { ReactNode, isValidElement, cloneElement } from 'react';
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
        if (isValidElement(child)) {
          const childProps: any = {
            isOpen,
            onToggle: disabled ? undefined : () => toggleItem(id),
            disabled
          };

          // Only add isOpen if it's a valid prop for the child
          // if ('isOpen' in child.props) {
          //   childProps.isOpen = isOpen;
          // }

          return cloneElement(child, childProps);
        }
        return child;
      })}
    </div>
  );
};
