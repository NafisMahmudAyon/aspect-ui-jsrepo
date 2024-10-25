import React, { ReactNode } from 'react';
interface DropdownContentProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
export declare const DropdownContent: React.FC<DropdownContentProps>;
export {};
