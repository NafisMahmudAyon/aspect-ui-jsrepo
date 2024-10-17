import React, { ReactNode } from 'react';
interface AccordionProps {
    children: ReactNode;
    iconEnabled?: boolean;
    iconPosition?: 'left' | 'right';
    iconClassName?: string;
    activeIconClassName?: string;
    inactiveIconClassName?: string;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    multiple?: boolean;
    className?: string;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
