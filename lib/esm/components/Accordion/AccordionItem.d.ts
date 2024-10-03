import React, { ReactNode } from 'react';
export interface AccordionItemProps {
    isOpen?: boolean;
    onToggle?: () => void;
    children?: ReactNode;
}
declare const AccordionItem: React.FC<AccordionItemProps>;
export default AccordionItem;
