'use client'

import React, { ReactNode, useEffect, useRef } from 'react';
import { useDropdown } from './DropdownContext';
import { cn } from '../../utils/cn';

interface DropdownContentProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({ children, className = "", ...rest }) => {
  const { isOpen, positionClass } = useDropdown();

  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const selectedItem = contentRef.current.querySelector('[data-selected="true"]')
      if (selectedItem) {
        const container = contentRef.current
        const containerHeight = container.clientHeight
        const itemTop = (selectedItem as HTMLElement).offsetTop
        const itemHeight = (selectedItem as HTMLElement).offsetHeight

        container.scrollTop = itemTop - containerHeight / 2 + itemHeight / 2
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={cn("absolute z-10", positionClass, className)} ref={contentRef} {...rest}>
      <div className=" border border-primary-50 dark:border-primary-950 rounded-md shadow-lg">
        {children}
      </div>
    </div>
  );
};