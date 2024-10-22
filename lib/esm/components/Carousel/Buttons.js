'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
export const CarouselButtons = forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ...props, className: cn("flex items-center gap-2", className), ref: ref, children: children }));
});
CarouselButtons.displayName = 'CarouselButtons';
