import React, { ReactNode } from 'react';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'destructive' | 'link' | 'outline' | 'ghost' | 'icon' | 'withIcon';
    size?: 'small' | 'medium' | 'large' | 'fab';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    children?: ReactNode;
    icon?: ReactNode;
    className?: string;
    iconClassName?: string;
    iconPosition?: 'left' | 'right';
    isFab?: boolean;
    position?: 'bottom-right' | 'bottom-left';
}
export declare const Button: React.FC<ButtonProps>;
export {};
