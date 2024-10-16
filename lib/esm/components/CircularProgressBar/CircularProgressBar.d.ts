import React from 'react';
interface CircularProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    className?: string;
    onVisible?: boolean;
    duration?: number;
    strokeColor?: string;
    strokeFillColor?: string;
    strokeWidth?: number;
    contentClassName?: string;
    onClick?: () => void;
}
export declare const CircularProgressBar: React.FC<CircularProgressBarProps>;
export {};
