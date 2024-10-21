import React from 'react';
interface DropdownContextType {
    isOpen: boolean;
    toggleDropdown: () => void;
    closeDropdown: () => void;
    direction: 'top' | 'left' | 'right' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    positionClass: string;
}
export declare const DropdownProvider: React.FC<{
    children: React.ReactNode;
    value: DropdownContextType;
}>;
export declare const useDropdown: () => DropdownContextType;
export {};
