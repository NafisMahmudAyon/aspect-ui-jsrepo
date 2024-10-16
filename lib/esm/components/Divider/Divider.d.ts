import React, { ReactNode } from 'react';
interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    color?: string;
    variant?: 'start' | 'center' | 'end' | 'full';
    children?: ReactNode;
}
export declare const Divider: React.FC<DividerProps>;
export {};
