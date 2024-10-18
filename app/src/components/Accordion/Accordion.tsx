'use client'

import React, { ReactNode, useState } from 'react';
import { AccordionProvider } from './AccordionContext';

interface AccordionProps {
  children: ReactNode;
  iconEnabled?: boolean;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  activeIconClassName?: string;
  activeIcon?: ReactNode;
  inactiveIcon?: ReactNode;
  multiple?: boolean;
  className?: string;
  labelClassName?: string;
  activeLabelClassName?: string;
  headerClassName?: string;
  activeHeaderClassName?: string;
  contentClassName?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  iconEnabled = true,
  iconPosition = 'right',
  iconClassName = '',
  activeIconClassName = '',
  activeIcon,
  inactiveIcon,
  multiple = false,
  className = '',
  labelClassName = '',
  activeLabelClassName = '',
  headerClassName = '',
  activeHeaderClassName = '',
  contentClassName = '',
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
      activeIcon,
      inactiveIcon,
      labelClassName,
      activeLabelClassName,
      headerClassName,
      activeHeaderClassName,
      contentClassName,
    }}>
      <div className={`${className}  space-y-2`}>
        {children}
      </div>
    </AccordionProvider>
  );
};
