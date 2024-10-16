'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useCarouselContext } from './CarouselContext';
import { carouselTheme } from './theme';
export const CarouselViewport = forwardRef(({ children }, ref) => {
    const theme = carouselTheme;
    const { emblaRef } = useCarouselContext();
    return (_jsx("div", { className: `${theme.viewport}`, ref: ref || emblaRef, children: children }));
});
CarouselViewport.displayName = 'CarouselViewport';
