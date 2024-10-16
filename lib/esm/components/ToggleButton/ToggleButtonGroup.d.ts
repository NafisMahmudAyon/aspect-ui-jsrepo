import React from 'react';
interface ToggleButtonGroupProps {
    children: React.ReactNode;
    type: 'single' | 'multiple';
    defaultValue?: string | string[];
    onChange?: (value: string | string[]) => void;
    className?: string;
}
export declare const ToggleButtonGroup: React.FC<ToggleButtonGroupProps>;
export {};
