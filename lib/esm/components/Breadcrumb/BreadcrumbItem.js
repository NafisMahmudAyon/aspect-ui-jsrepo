'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const BreadcrumbItem = ({ children, className, ...rest }) => {
    return (_jsx("li", { ...rest, className: `
          flex cursor-pointer items-center
          ${className}
        `, children: children }));
};
BreadcrumbItem.displayName = 'BreadcrumbItem';
