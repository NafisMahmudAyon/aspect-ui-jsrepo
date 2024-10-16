import React, { ReactNode } from 'react';
interface DropdownItemProps {
    children: ReactNode;
    onClick?: () => void;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export {};
