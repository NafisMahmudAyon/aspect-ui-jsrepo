'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useAccordion } from './AccordionContext';
export const AccordionContent = ({ children, isOpen, className = "" }) => {
    if (!isOpen)
        return null;
    const { contentClassName } = useAccordion();
    return (_jsx("div", { className: `${className} ${contentClassName} p-4 border-t`, children: children }));
};
