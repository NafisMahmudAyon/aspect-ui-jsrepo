import React from 'react';
interface SliderProps {
    min: number;
    max: number;
    defaultValue: number[];
    onChange?: (values: number[]) => void;
}
export declare const Slider: React.FC<SliderProps>;
export {};
