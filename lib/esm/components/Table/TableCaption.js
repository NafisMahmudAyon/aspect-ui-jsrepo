'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableCaption = ({ children, className = '' }) => {
    return (_jsx("caption", { className: `mb-2 text-sm text-gray-500 ${className}`, children: children }));
};
