'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useCarouselContext } from './CarouselContext';
export const CarouselViewport = forwardRef(({ children }, ref) => {
    const { emblaRef } = useCarouselContext();
    return (_jsx("div", { className: `overflow-hidden`, ref: ref || emblaRef, children: children }));
});
CarouselViewport.displayName = 'CarouselViewport';
