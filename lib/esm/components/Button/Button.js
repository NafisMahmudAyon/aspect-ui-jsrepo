'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Button = ({ type = 'button', variant = 'primary', size = 'medium', disabled = false, loading = false, onClick, children, icon, iconPosition = 'left', }) => {
    // Dynamically generate button class names based on props
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150';
    const sizeStyles = {
        small: 'px-3 py-2 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        tertiary: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        link: 'text-blue-600 hover:underline focus:ring-blue-500',
    };
    return (_jsxs("button", { type: type, onClick: onClick, disabled: disabled || loading, className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${loading ? 'relative' : ''}`, children: [loading && _jsx("span", { className: "loader absolute left-0 right-0 mx-auto" }), icon && iconPosition === 'left' && !loading && _jsx("span", { className: "mr-2", children: icon }), !loading && children, icon && iconPosition === 'right' && !loading && _jsx("span", { className: "ml-2", children: icon })] }));
};
