'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableCell = ({ children, className = '', colSpan, ...rest }) => {
    return (_jsx("td", { className: `px-6 py-4 whitespace-nowrap ${className}`, colSpan: colSpan, ...rest, children: children }));
};
