import { InputHTMLAttributes, ReactNode } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    labelClassName?: string;
    iconClassName?: string;
    className?: string;
    wrapperClassName?: string;
    errorClassName?: string;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
