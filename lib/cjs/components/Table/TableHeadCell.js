'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableHeadCell = ({ children, className = '' }) => {
    return (_jsx("th", { className: `px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 ${className}`, children: children }));
};
