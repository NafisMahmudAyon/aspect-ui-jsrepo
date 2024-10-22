'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useCarouselContext } from './CarouselContext';
import { DotButton, useDotButton } from './CarouselDotButton';
import { cn } from '../../utils/cn';
export const CarouselIndicators = forwardRef(({ className, dotButtonStyle, ...props }, ref) => {
    const { emblaApi } = useCarouselContext();
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    return (_jsx("div", { ...props, className: cn('flex flex-wrap items-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 w-full', className), ref: ref, children: scrollSnaps.map((number, index) => (_jsx(DotButton, { onClick: () => onDotButtonClick(index), className: cn("inline-flex size-3 rounded-full border-2 border-primary-300 dark:border-primary-800", `${index === selectedIndex && 'border-primary-900 dark:border-primary-100'}`, dotButtonStyle) }, number))) }));
});
CarouselIndicators.displayName = 'CarouselIndicators';
