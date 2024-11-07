interface ToggleButtonGroupProps {
    children: React.ReactNode;
    type: 'single' | 'multiple';
    defaultValue?: string | string[];
    onChange?: (value: string | string[]) => void;
    className?: string;
    outline?: boolean;
    disabled?: boolean;
}
export declare const ToggleButtonGroup: React.FC<ToggleButtonGroupProps>;
export {};
