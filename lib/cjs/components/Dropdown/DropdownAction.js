'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useDropdown } from './DropdownContext';
export const DropdownAction = ({ children }) => {
    const { toggleDropdown } = useDropdown();
    return (_jsx("button", { type: "button", className: "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500", onClick: toggleDropdown, children: children }));
};
