import React, { ReactNode } from 'react';
type ToggleButtonGroupType = 'single' | 'multiple';
interface ToggleButtonGroupContextType {
    type: ToggleButtonGroupType;
    selectedValues: string | string[];
    handleChange: (value: string) => void;
}
export declare const useToggleButtonGroup: () => ToggleButtonGroupContextType;
interface ToggleButtonGroupProviderProps {
    children: ReactNode;
    type: ToggleButtonGroupType;
    defaultValue?: string | string[];
    onChange?: (value: string | string[]) => void;
}
export declare const ToggleButtonGroupProvider: React.FC<ToggleButtonGroupProviderProps>;
export {};
