// Accordion.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, Children, isValidElement, cloneElement } from 'react';
import AccordionItem from './AccordionItem';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
const Accordion = ({ items, multiple = false, active = 0, children }) => {
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
    const renderAccordionItem = (itemTitle, itemContent, index) => (_jsxs(AccordionItem, { isOpen: openIndexes.includes(index), onToggle: () => handleToggle(index), children: [_jsx(AccordionHeader, { children: itemTitle }), _jsx(AccordionContent, { children: itemContent })] }, index));
    // If items are provided, render from items prop
    if (items) {
        return (_jsx("div", { className: 'space-y-4', children: items.map((item, index) => renderAccordionItem(item.title, item.content, index)) }));
    }
    // Render children if no items are provided
    const processedChildren = Children.map(children, (child, index) => {
        if (isValidElement(child) && child.type === AccordionItem) {
            console.log(child);
            return cloneElement(child, {
                isOpen: openIndexes.includes(index),
                onToggle: () => handleToggle(index)
            });
        }
        return null;
    });
    return _jsx("div", { className: 'space-y-4', children: processedChildren });
};
export default Accordion;
