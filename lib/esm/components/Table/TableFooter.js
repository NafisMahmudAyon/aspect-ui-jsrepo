'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableFooter = ({ children, className = '', ...rest }) => {
    return (_jsx("tfoot", { className: `bg-gray-50 ${className}`, ...rest, children: children }));
};
