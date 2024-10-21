'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useDropdown } from './DropdownContext';
export const DropdownAction = ({ children }) => {
    const { toggleDropdown } = useDropdown();
    return (_jsx("button", { type: 'button', className: 'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100', onClick: toggleDropdown, children: children }));
};
