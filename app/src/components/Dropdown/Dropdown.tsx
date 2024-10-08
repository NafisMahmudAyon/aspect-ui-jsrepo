'use client'

import React, { ReactNode, useState, useCallback, useRef, useEffect } from 'react';
import { DropdownProvider } from './DropdownContext';

interface DropdownProps {
  children: ReactNode;
  hover?: boolean;
  hoverDelay?: number;
  closeDelay?: number;
}

export const Dropdown: React.FC<DropdownProps> = ({ children, hover = false, hoverDelay = 0, closeDelay = 300 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDropdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), hoverDelay);
  }, [hoverDelay]);

  const closeDropdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), closeDelay);
  }, [closeDelay]);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownProvider value={{ isOpen, toggleDropdown: !hover ? toggleDropdown : ()=>{}, closeDropdown: !hover ? closeDropdown : ()=>{} }}>
      <div
        className="relative inline-block text-left"
        {...(hover ? { onMouseEnter: openDropdown, onMouseLeave: closeDropdown } : {})}
        ref={dropdownRef}
      >
        {children}
      </div>
    </DropdownProvider>
  );
};
