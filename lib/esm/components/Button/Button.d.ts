import React, { ReactNode } from 'react';
interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    children: ReactNode;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}
export declare const Button: React.FC<ButtonProps>;
export {};
