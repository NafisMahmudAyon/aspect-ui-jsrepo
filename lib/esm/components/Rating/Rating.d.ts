import React from 'react';
interface RatingProps {
    maxRating?: number;
    initialRating?: number;
    size?: number;
    onRatingChange?: (rating: number) => void;
    starColor?: string;
    hoverColor?: string;
    unratedColor?: string;
    ratingTexts?: string[];
    readOnly?: boolean;
}
export declare const Rating: React.FC<RatingProps>;
export {};
