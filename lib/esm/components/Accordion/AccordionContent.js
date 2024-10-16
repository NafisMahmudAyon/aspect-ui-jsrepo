'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const AccordionContent = ({ children, isOpen }) => {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "p-4 border-t", children: children }));
};
