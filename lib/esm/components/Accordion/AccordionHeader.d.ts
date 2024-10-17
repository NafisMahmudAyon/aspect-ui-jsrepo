import React, { ReactNode } from 'react';
interface AccordionHeaderProps {
    children: ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    iconEnabled?: boolean;
    iconPosition?: 'left' | 'right';
    iconClassName?: string;
    activeIconClassName?: string;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    disabled?: boolean;
    className?: string;
    labelClassName?: string;
    activeLabelClassName?: string;
    headerClassName?: string;
    activeHeaderClassName?: string;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export {};
