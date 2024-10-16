import React from 'react';
interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
    switchClassName?: string;
    labelClassName?: string;
}
export declare const Switch: React.FC<SwitchProps>;
export {};
