import { ReactNode } from 'react';
export interface AccordionHeaderProps {
    isOpen?: boolean;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    iconEnabled?: boolean;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    iconClassName?: string;
    activeIconClassName?: string;
    inactiveIconClassName?: string;
    iconPosition?: 'left' | 'right';
}
declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export default AccordionHeader;
