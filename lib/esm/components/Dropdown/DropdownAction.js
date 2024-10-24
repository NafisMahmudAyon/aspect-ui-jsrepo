'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useDropdown } from './DropdownContext';
import { cn } from '../../utils/cn';
export const DropdownAction = ({ children, className = "" }) => {
    const { toggleDropdown } = useDropdown();
    return (_jsx("button", { type: 'button', className: cn('inline-flex w-full justify-center rounded-md bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100', className), onClick: toggleDropdown, children: children }));
};
