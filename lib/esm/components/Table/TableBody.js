'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableBody = ({ children, className = '' }) => {
    return (_jsx("tbody", { className: `divide-y divide-gray-200 bg-white ${className}`, children: children }));
};
