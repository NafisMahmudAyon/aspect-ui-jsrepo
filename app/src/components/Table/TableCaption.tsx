'use client'

import React, { ReactNode } from 'react';

interface TableCaptionProps {
  children: ReactNode;
  className?: string;
}

export const TableCaption: React.FC<TableCaptionProps> = ({ children, className = '' }) => {
  return (
    <caption className={`text-sm text-gray-500 mb-2 ${className}`}>
      {children}
    </caption>
  );
};
