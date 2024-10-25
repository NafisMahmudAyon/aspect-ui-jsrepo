'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Children } from 'react';
import { cn } from '../../utils/cn';
import { Right } from '../Icon/Arrow';
export const Breadcrumb = ({ children, className = "", separator = _jsx(Right, {}), separatorClassName = '', ...rest }) => {
    // Safely convert children to an array
    const childrenArray = Children.toArray(children);
    return (_jsx("ul", { className: cn("flex max-w-max items-center gap-3 px-3.5 py-2.5 text-primary-800 dark:text-primary-100", className), ...rest, children: childrenArray.map((child, index) => (_jsxs(_Fragment, { children: [child, index < childrenArray.length - 1 && (_jsx("span", { className: cn('mx-2 text-primary-500', separatorClassName), children: separator }))] }))) }));
};
Breadcrumb.displayName = 'Breadcrumb';
