'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import { useDropdown } from './DropdownContext';
export const DropdownContent = ({ children, maxHeight = '300px' }) => {
    const { isOpen, positionClass } = useDropdown();
    const contentRef = useRef(null);
    useEffect(() => {
        if (isOpen && contentRef.current) {
            const selectedItem = contentRef.current.querySelector('[data-selected="true"]');
            if (selectedItem) {
                const container = contentRef.current;
                const containerHeight = container.clientHeight;
                const itemTop = selectedItem.offsetTop;
                const itemHeight = selectedItem.offsetHeight;
                container.scrollTop = itemTop - containerHeight / 2 + itemHeight / 2;
            }
        }
    }, [isOpen]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: `absolute z-10 ${positionClass}`, children: _jsx("div", { ref: contentRef, className: 'rounded-md border border-primary-50 dark:border-primary-950 shadow-lg overflow-y-auto [&::-webkit-scrollbar]:w-2\n  [&::-webkit-scrollbar-track]:bg-gray-100\n  [&::-webkit-scrollbar-thumb]:bg-gray-300\n  dark:[&::-webkit-scrollbar-track]:bg-neutral-700\n  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500', style: { maxHeight }, children: children }) }));
};
