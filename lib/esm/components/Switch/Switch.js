'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Switch = ({ checked, onChange, disabled = false, label, className = '', switchClassName = '', labelClassName = '', }) => {
    const handleChange = (event) => {
        onChange(event.target.checked);
    };
    return (_jsxs("label", { className: `inline-flex items-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`, children: [_jsxs("div", { className: `relative ${switchClassName}`, children: [_jsx("input", { type: "checkbox", className: "sr-only", checked: checked, onChange: handleChange, disabled: disabled }), _jsx("div", { className: `w-10 h-6 bg-gray-200 rounded-full shadow-inner transition-colors duration-300 ease-in-out ${checked ? 'bg-blue-500' : ''}` }), _jsx("div", { className: `absolute w-4 h-4 bg-white rounded-full shadow inset-y-1 left-1 transition-transform duration-300 ease-in-out ${checked ? 'transform translate-x-full' : ''}` })] }), label && (_jsx("span", { className: `ml-3 ${labelClassName}`, children: label }))] }));
};
