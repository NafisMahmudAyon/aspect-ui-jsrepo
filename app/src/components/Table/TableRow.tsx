'use client'

import React, { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ children, className = '' }) => {
  return (
    <tr className={className}>
      {children}
    </tr>
  );
};
