'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TabList = ({ children, className = "", ...rest }) => {
    return _jsx("div", { className: cn('mb-4 flex space-x-2', className), ...rest, children: children });
};
