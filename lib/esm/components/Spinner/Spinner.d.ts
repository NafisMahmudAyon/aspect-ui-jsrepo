import React, { HTMLAttributes } from 'react';
interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'small' | 'medium' | 'large';
    className?: string;
    thickness?: number;
}
export declare const Spinner: React.FC<SpinnerProps>;
export {};
