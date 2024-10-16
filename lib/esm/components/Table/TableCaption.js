'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableCaption = ({ children, className = '' }) => {
    return (_jsx("caption", { className: `text-sm text-gray-500 mb-2 ${className}`, children: children }));
};
