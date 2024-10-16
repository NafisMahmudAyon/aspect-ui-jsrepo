import React, { ReactNode } from 'react';
interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children: ReactNode;
    className?: string;
    colSpan?: number;
}
export declare const TableCell: React.FC<TableCellProps>;
export {};
