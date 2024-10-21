'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useDropdown } from './DropdownContext';
export const DropdownContent = ({ children }) => {
    const { isOpen, positionClass } = useDropdown();
    if (!isOpen)
        return null;
    return (_jsx("div", { className: `absolute z-10 ${positionClass}`, children: _jsx("div", { className: 'rounded-md border border-gray-200 bg-white shadow-lg', children: children }) }));
};
