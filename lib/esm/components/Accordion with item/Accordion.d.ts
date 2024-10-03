import { ReactNode } from 'react';
interface AccordionProps {
    items?: {
        title: ReactNode;
        content: ReactNode;
    }[];
    active?: number;
    multiple?: boolean;
    children?: ReactNode;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
