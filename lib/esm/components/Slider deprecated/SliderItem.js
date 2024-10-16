'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { SplideSlide } from '@splidejs/react-splide';
export const SliderItem = ({ children, className }) => {
    return (_jsx(SplideSlide, { className: `mx-auto ${className}`, children: children }));
};
