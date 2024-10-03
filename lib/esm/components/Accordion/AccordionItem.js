import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
const AccordionItem = ({ isOpen, onToggle, children }) => {
    return (_jsx("div", { className: 'rounded-md border border-gray-200', children: children &&
            React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    if (child.type === AccordionHeader) {
                        // Ensure type safety by casting child to the correct type
                        return React.cloneElement(child, { isOpen, onClick: onToggle });
                    }
                    if (child.type === AccordionContent) {
                        return React.cloneElement(child, { isOpen });
                    }
                }
                return child;
            }) }));
};
AccordionItem.displayName = 'AccordionItem';
export default AccordionItem;
