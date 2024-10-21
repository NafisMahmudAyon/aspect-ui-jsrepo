'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useDropdown } from './DropdownContext';
export const DropdownItem = ({ children, onClick }) => {
    const { closeDropdown } = useDropdown();
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        closeDropdown();
    };
    return (_jsx("a", { href: '#', className: 'block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900', role: 'menuitem', onClick: handleClick, children: children }));
};
