'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, forwardRef, isValidElement } from 'react';
import { carouselTheme } from './theme';
export const CarouselItem = forwardRef(({ children, asChild, className, ...props }, ref) => {
    const theme = carouselTheme;
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            itemRef: ref,
            ...props
        });
    }
    return (_jsx("div", { ...props, className: `${theme.item.slide} ${className}`, ref: ref, children: children }));
});
CarouselItem.displayName = 'CarouselItem';
