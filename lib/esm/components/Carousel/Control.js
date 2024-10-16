'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { carouselTheme } from './theme';
export const CarouselControl = forwardRef(({ children, className, ...props }, ref) => {
    const theme = carouselTheme;
    return (_jsx("div", { ...props, className: `${theme.controls.wrapper} ${className}`, ref: ref, children: children }));
});
CarouselControl.displayName = 'CarouselControl';
