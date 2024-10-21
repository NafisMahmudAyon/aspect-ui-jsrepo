'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { AccordionProvider } from './AccordionContext';
import { cn } from '../../utils/cn';
export const Accordion = ({ children, iconEnabled = true, iconPosition = 'right', iconClassName = '', activeIconClassName = '', activeIcon, inactiveIcon, multiple = false, className = '', labelClassName = '', activeLabelClassName = '', headerClassName = '', activeHeaderClassName = '', contentClassName = '' }) => {
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
            activeIcon,
            inactiveIcon,
            labelClassName,
            activeLabelClassName,
            headerClassName,
            activeHeaderClassName,
            contentClassName
        }, children: _jsx("div", { className: cn('space-y-2', className), children: children }) }));
};
