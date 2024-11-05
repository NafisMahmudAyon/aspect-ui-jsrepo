import React from 'react';
type TimelineProps = {
    children: React.ReactNode;
    position?: 'left' | 'right' | 'mixed';
    className?: string;
    lineClassName?: string;
};
export declare const Timeline: React.FC<TimelineProps>;
export {};
