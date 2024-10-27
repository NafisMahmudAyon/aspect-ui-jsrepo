import { InputHTMLAttributes, ReactNode } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    error?: string;
    icon?: ReactNode;
    labelClassName?: string;
    iconClassName?: string;
    className?: string;
    wrapperClassName?: string;
    errorClassName?: string;
    passwordIconClassName?: string;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
