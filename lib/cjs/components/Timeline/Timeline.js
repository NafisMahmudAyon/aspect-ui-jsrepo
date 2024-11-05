import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/Timeline/Timeline.tsx
import React from 'react';
import { TimelineItem } from './TimelineItem';
export const Timeline = ({ children, position = 'left' }) => {
    return (_jsxs("div", { className: "relative mx-auto w-full max-w-3xl", children: [_jsx("div", { className: "absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gray-200" }), _jsx("div", { className: "relative", children: React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child) && child.type === TimelineItem) {
                        return React.cloneElement(child, {
                            position: position === 'mixed'
                                ? index % 2 === 0 ? 'left' : 'right'
                                : position
                        });
                    }
                    return child;
                }) })] }));
};
