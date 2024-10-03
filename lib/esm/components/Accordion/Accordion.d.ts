import { ReactNode } from 'react';
interface AccordionItem {
    title: ReactNode;
    content: ReactNode;
}
interface AccordionProps {
    items?: AccordionItem[];
    multiple?: boolean;
    active?: number;
    children?: ReactNode;
    className?: string;
    iconEnabled?: boolean;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    headerClassName?: string;
    contentClassName?: string;
    itemClassName?: string;
    iconClassName?: string;
    activeIconClassName?: string;
    inactiveIconClassName?: string;
    iconPosition?: 'left' | 'right';
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
