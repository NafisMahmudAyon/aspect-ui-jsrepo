import React, { ReactNode } from 'react';
interface MasonryProps {
    children: ReactNode[];
    columnCount?: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    gap?: number;
    className?: string;
}
export declare const Masonry: React.FC<MasonryProps>;
export {};
