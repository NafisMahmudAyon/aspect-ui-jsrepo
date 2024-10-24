import React from 'react';
interface CircularProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    className?: string;
    onVisible?: boolean;
    /**
     * Duration of the progress bar in seconds
     *
     * Default value is 2 seconds
     */
    duration?: number;
    strokeColor?: string;
    strokeFillColor?: string;
    strokeWidth?: number;
    contentClassName?: string;
    hideValue?: boolean;
    onClick?: () => void;
}
export declare const CircularProgressBar: React.FC<CircularProgressBarProps>;
export {};
