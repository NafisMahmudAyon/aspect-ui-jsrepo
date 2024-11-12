'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableBody = ({ children, className = '' }) => {
    return (_jsx("tbody", { className: cn("divide-y  divide-primary-50 border-b border-b-primary-50", className), children: children }));
};
