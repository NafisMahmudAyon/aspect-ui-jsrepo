'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableBody = ({ children, className = '' }) => {
    return (_jsx("tbody", { className: `bg-white divide-y divide-gray-200 ${className}`, children: children }));
};
