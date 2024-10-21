import React from 'react';
interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    contentPosition?: 'left' | 'right';
    duration?: number;
    animateOnLoad?: boolean;
    animateOnVisible?: boolean;
    min?: number;
    max?: number;
    className?: string;
    containerClassName?: string;
    fillClassName?: string;
    contentClassName?: string;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export {};
