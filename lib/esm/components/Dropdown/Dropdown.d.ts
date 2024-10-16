import React, { ReactNode } from 'react';
type Direction = 'bottom' | 'top' | 'left' | 'right' | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
interface DropdownProps {
    children: ReactNode;
    hover?: boolean;
    hoverDelay?: number;
    closeDelay?: number;
    direction?: Direction;
}
export declare const Dropdown: React.FC<DropdownProps>;
export {};
