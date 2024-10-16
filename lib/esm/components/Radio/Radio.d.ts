import React from 'react';
interface RadioProps {
    id: string;
    name: string;
    value: string;
    label: string;
    checked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Radio: React.FC<RadioProps>;
export {};
