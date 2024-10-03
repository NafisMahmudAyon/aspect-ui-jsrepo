import { ReactNode } from 'react';
export interface AccordionContentProps {
    isOpen?: boolean;
    children?: ReactNode;
    className?: string;
}
declare const AccordionContent: React.FC<AccordionContentProps>;
export default AccordionContent;
