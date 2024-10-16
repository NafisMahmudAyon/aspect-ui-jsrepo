'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useDropdown } from './DropdownContext';
export const DropdownContent = ({ children }) => {
    const { isOpen, positionClass } = useDropdown();
    if (!isOpen)
        return null;
    return (_jsx("div", { className: `absolute z-10 ${positionClass}`, children: _jsx("div", { className: "bg-white border border-gray-200 rounded-md shadow-lg", children: children }) }));
};
