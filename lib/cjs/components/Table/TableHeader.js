'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableHeader = ({ children, className = '' }) => {
    return _jsx("thead", { className: `bg-gray-50 ${className}`, children: children });
};
