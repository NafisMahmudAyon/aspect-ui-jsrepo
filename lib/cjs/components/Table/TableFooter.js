'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const TableFooter = ({ children, className = '', ...rest }) => {
    return (_jsx("tfoot", { className: `border-t  font-medium [&>tr]:last:border-b-0 ${className}`, ...rest, children: children }));
};
