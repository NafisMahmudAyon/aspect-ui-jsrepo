'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { AccordionProvider } from './AccordionContext';
export const Accordion = ({ children, iconEnabled = true, iconPosition = 'right', iconClassName = '', activeIconClassName = '', inactiveIconClassName = '', activeIcon, inactiveIcon, multiple = false, }) => {
    const [openItems, setOpenItems] = useState([]);
    const toggleItem = (itemId) => {
        setOpenItems(prev => {
            if (prev.includes(itemId)) {
                return prev.filter(id => id !== itemId);
            }
            else {
                return multiple ? [...prev, itemId] : [itemId];
            }
        });
    };
    return (_jsx(AccordionProvider, { value: {
            openItems,
            toggleItem,
            iconEnabled,
            iconPosition,
            iconClassName,
            activeIconClassName,
            inactiveIconClassName,
            activeIcon,
            inactiveIcon,
        }, children: _jsx("div", { className: "space-y-2", children: children }) }));
};
