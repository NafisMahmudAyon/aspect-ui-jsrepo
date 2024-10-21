'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const BreadcrumbItem = ({ children, className = "", ...rest }) => {
    return (_jsx("li", { ...rest, className: cn("flex cursor-pointer items-center", className), children: children }));
};
BreadcrumbItem.displayName = 'BreadcrumbItem';
