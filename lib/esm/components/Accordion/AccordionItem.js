'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { isValidElement, cloneElement } from 'react';
import { useAccordion } from './AccordionContext';
export const AccordionItem = ({ children, id, disabled = false }) => {
    const { openItems, toggleItem } = useAccordion();
    const isOpen = openItems.includes(id);
    return (_jsx("div", { className: `border rounded-md overflow-hidden ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`, children: React.Children.map(children, child => {
            if (isValidElement(child)) {
                const childProps = {
                    isOpen,
                    onToggle: disabled ? undefined : () => toggleItem(id),
                    disabled
                };
                // Only add isOpen if it's a valid prop for the child
                // if ('isOpen' in child.props) {
                //   childProps.isOpen = isOpen;
                // }
                return cloneElement(child, childProps);
            }
            return child;
        }) }));
};
