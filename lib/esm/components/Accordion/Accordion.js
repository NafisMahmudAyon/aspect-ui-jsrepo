'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, Children, isValidElement, cloneElement } from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
export const Accordion = ({ items, multiple = false, active = 0, children, className, iconEnabled = false, activeIcon, inactiveIcon, headerClassName, contentClassName, itemClassName, iconClassName, activeIconClassName, inactiveIconClassName, iconPosition = 'left' }) => {
    const [openIndexes, setOpenIndexes] = useState([]);
    useEffect(() => {
        if (active > 0 && items && active <= items.length) {
            setOpenIndexes([active - 1]);
        }
    }, [active, items?.length]);
    const handleToggle = (index) => {
        if (multiple) {
            if (openIndexes.includes(index)) {
                setOpenIndexes(openIndexes.filter(i => i !== index));
            }
            else {
                setOpenIndexes([...openIndexes, index]);
            }
        }
        else {
            setOpenIndexes(openIndexes[0] === index ? [] : [index]);
        }
    };
    // Render using 'items' if provided
    if (items) {
        return (_jsx("div", { className: `space-y-4 ${className}`, children: items.map((item, index) => (_jsxs("div", { className: `rounded-md border border-gray-200 ${itemClassName}`, children: [_jsx(AccordionHeader, { className: headerClassName, iconEnabled: iconEnabled, activeIcon: activeIcon, inactiveIcon: inactiveIcon, iconClassName: iconClassName, activeIconClassName: activeIconClassName, inactiveIconClassName: inactiveIconClassName, iconPosition: iconPosition, isOpen: openIndexes.includes(index), onClick: () => handleToggle(index), children: item.title }), _jsx(AccordionContent, { isOpen: openIndexes.includes(index), className: contentClassName, children: item.content })] }, index))) }));
    }
    // Render using children if no 'items' are provided
    let headerIndex = -1;
    const processedChildren = Children.map(children, child => {
        if (!isValidElement(child))
            return child;
        // Check if the element is of type AccordionHeader or AccordionContent
        if (child.type === AccordionHeader || child.type === AccordionContent) {
            if (child.type === AccordionHeader)
                headerIndex++;
            // Ensure that we pass `isOpen` and `onClick` props
            return cloneElement(child, {
                isOpen: openIndexes.includes(headerIndex),
                onClick: () => handleToggle(headerIndex)
            }); // Use `as any` to bypass the typing issue for now
        }
        return child;
    });
    return _jsx("div", { className: 'space-y-4', children: processedChildren });
};
