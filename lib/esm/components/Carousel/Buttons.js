'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { carouselTheme } from './theme';
export const CarouselButtons = forwardRef(({ children, className, ...props }, ref) => {
    const theme = carouselTheme;
    return (_jsx("div", { ...props, className: `${theme.controls.button.container} bg-red-300 ${className}`, ref: ref, children: children }));
});
CarouselButtons.displayName = 'CarouselButtons';
