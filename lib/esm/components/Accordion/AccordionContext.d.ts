import React, { ReactNode } from 'react';
interface AccordionContextType {
    openItems: string[];
    toggleItem: (itemId: string) => void;
    iconEnabled: boolean;
    iconPosition: 'left' | 'right';
    iconClassName: string;
    activeIconClassName: string;
    inactiveIconClassName: string;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
}
export declare const AccordionProvider: React.FC<{
    children: React.ReactNode;
    value: AccordionContextType;
}>;
export declare const useAccordion: () => AccordionContextType;
export {};
