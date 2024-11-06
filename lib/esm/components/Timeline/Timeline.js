import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/Timeline/Timeline.tsx
import React from 'react';
import { TimelineItem } from './TimelineItem';
import { cn } from '../../utils/cn';
export const Timeline = ({ children, position = 'left', lineStyle = 'solid', className, lineClassName, ...rest }) => {
    const isMixed = position === 'mixed';
    return (_jsxs("div", { className: cn("relative", isMixed ? 'mx-auto max-w-3xl' : 'w-full', className), ...rest, children: [_jsx("div", { className: cn("absolute h-full border border-primary-900 dark:border-primary-200", position === 'mixed' ? "left-1/2 -translate-x-1/2" : position === 'left' ? "right-0" : "", lineStyle === 'dashed' ? 'border-dashed' : '') }), _jsx("div", { className: "relative", children: React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child) && child.type === TimelineItem) {
                        return React.cloneElement(child, {
                            position: isMixed ? (index % 2 === 0 ? 'left' : 'right') : position,
                            isMixed: isMixed
                        });
                    }
                    return child;
                }) })] }));
};
