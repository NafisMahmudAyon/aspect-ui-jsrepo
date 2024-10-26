'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useDropdown } from './DropdownContext';
import { cn } from '../../utils/cn';
import { Down, Left, Right, Up } from '../Icon/Arrow';
export const DropdownAction = ({ children, className = "", icon, iconPosition = "end" }) => {
    const { toggleDropdown, direction } = useDropdown();
    const [iconDefault, setIconDefault] = useState(_jsx(Down, {}));
    useEffect(() => {
        if (direction == 'top') {
            setIconDefault(_jsx(Up, {}));
        }
        if (direction == 'left') {
            setIconDefault(_jsx(Left, {}));
        }
        if (direction == 'right') {
            setIconDefault(_jsx(Right, {}));
        }
    }, [direction]);
    return (_jsxs("button", { type: 'button', className: cn('inline-flex w-full justify-center rounded-md bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100', className), onClick: toggleDropdown, children: [iconPosition === 'start' && (icon || iconDefault), children, iconPosition === 'end' && (icon ?? iconDefault)] }));
};
