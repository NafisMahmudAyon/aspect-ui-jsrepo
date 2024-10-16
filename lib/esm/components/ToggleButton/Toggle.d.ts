import React from 'react';
interface ToggleProps {
    value: string;
    children: React.ReactNode;
    className?: string;
    defaultSelected?: boolean;
    onChange?: (value: string, selected: boolean) => void;
}
export declare const Toggle: React.FC<ToggleProps>;
export {};
