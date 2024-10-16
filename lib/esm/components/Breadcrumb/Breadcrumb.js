'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Children } from 'react';
export const Breadcrumb = ({ children, className, separator = ">", ...rest }) => {
    // Safely convert children to an array
    const childrenArray = Children.toArray(children);
    return (_jsx("ul", { className: `
          flex max-w-max items-center gap-3 border-metal-100 px-3.5 py-2.5 dark:border-metal-700
          ${className}
        `, ...rest, children: childrenArray.map((child, index) => (_jsxs(_Fragment, { children: [child, index < childrenArray.length - 1 && (_jsx("span", { className: "mx-2", children: separator }))] }))) }));
};
Breadcrumb.displayName = 'Breadcrumb';
