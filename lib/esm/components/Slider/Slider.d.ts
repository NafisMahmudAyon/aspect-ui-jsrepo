import React from 'react';
interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue: number[];
    onChange?: (values: number[]) => void;
    className?: string;
}
export declare const Slider: React.FC<SliderProps>;
export {};
