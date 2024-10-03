import { ReactNode } from 'react';
export interface AccordionHeaderProps {
    isOpen?: boolean;
    onClick?: () => void;
    children?: ReactNode;
}
declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export default AccordionHeader;
