import React, { ReactNode } from 'react';
export interface TimelineItemProps {
    date: string;
    title: string;
    description: ReactNode;
    icon?: ReactNode;
}
interface TimelineProps {
    items: TimelineItemProps[];
    position: 'left' | 'right';
    lineStyle?: 'solid' | 'dashed' | string;
}
export declare const Timeline: React.FC<TimelineProps>;
export {};
