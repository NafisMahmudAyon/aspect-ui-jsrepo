'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useCarouselContext } from './CarouselContext';
import { DotButton, useDotButton } from './CarouselDotButton';
import { carouselTheme } from './theme';
export const CarouselIndicators = forwardRef(({ className, dotButtonStyle, ...props }, ref) => {
    const { emblaApi } = useCarouselContext();
    const theme = carouselTheme;
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    return (_jsx("div", { ...props, className: `${theme.controls.indicators.container} ${className}`, ref: ref, children: scrollSnaps.map((number, index) => (_jsx(DotButton, { onClick: () => onDotButtonClick(index), className: `${theme.controls.indicators.dot} ${index === selectedIndex && 'border-metal-900 dark:border-metal-100'} ${dotButtonStyle}` }, number))) }));
});
CarouselIndicators.displayName = 'CarouselIndicators';
