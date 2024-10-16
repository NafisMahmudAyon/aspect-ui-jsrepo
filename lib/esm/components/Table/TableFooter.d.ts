import React, { ReactNode } from 'react';
interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
    className?: string;
}
export declare const TableFooter: React.FC<TableFooterProps>;
export {};
