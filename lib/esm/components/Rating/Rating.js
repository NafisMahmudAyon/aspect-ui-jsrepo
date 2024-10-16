'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star } from '../Icon/Star';
import { useState } from 'react';
const defaultRatingTexts = ['Terrible', 'Bad', 'OK', 'Good', 'Excellent'];
export const Rating = ({ maxRating = 5, initialRating = 0, size = 30, onRatingChange, starColor = '#ffc107', hoverColor = '#ffecb3', unratedColor = '#e4e5e9', ratingTexts = defaultRatingTexts, readOnly = false, }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(null);
    const handleRatingChange = (newRating) => {
        if (!readOnly) {
            setRating(newRating);
            if (onRatingChange) {
                onRatingChange(newRating);
            }
        }
    };
    const getRatingText = (value) => {
        if (value === 0)
            return '';
        const index = Math.ceil(value) - 1;
        return ratingTexts[index] || defaultRatingTexts[index];
    };
    const renderStar = (index) => {
        const starValue = index + 1;
        const isHovered = hover !== null && starValue <= hover;
        const isFilled = starValue <= rating;
        const currentColor = isHovered ? hoverColor : (isFilled ? starColor : unratedColor);
        return (_jsxs("div", { className: "relative inline-block", style: { width: size, height: size, marginRight: 5 }, onMouseEnter: () => !readOnly && setHover(starValue), onMouseLeave: () => !readOnly && setHover(null), children: [_jsx(Star, { className: "absolute top-0 left-0", color: currentColor, size: size }), !readOnly && (_jsx("input", { type: "radio", name: "rating", value: starValue, onClick: () => handleRatingChange(starValue), className: "absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" }))] }, index));
    };
    return (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "flex", children: [...Array(maxRating)].map((_, index) => renderStar(index)) }), (rating > 0 || hover !== null) && (_jsx("div", { className: "mt-2 text-sm font-semibold", children: getRatingText(hover !== null ? hover : rating) }))] }));
};
