'use client'

import React, { ReactNode, useState } from 'react';
import { AccordionProvider } from './AccordionContext';

interface AccordionProps {
  children: ReactNode;
  iconEnabled?: boolean;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  activeIconClassName?: string;
  inactiveIconClassName?: string;
  activeIcon?: ReactNode;
  inactiveIcon?: ReactNode;
  multiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  iconEnabled = true,
  iconPosition = 'right',
  iconClassName = '',
  activeIconClassName = '',
  inactiveIconClassName = '',
  activeIcon,
  inactiveIcon,
  multiple = false,
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return multiple ? [...prev, itemId] : [itemId];
      }
    });
  };

  return (
    <AccordionProvider value={{
      openItems,
      toggleItem,
      iconEnabled,
      iconPosition,
      iconClassName,
      activeIconClassName,
      inactiveIconClassName,
      activeIcon,
      inactiveIcon,
    }}>
      <div className={`${className} space-y-2`}>
        {children}
      </div>
    </AccordionProvider>
  );
};
