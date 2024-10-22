// ./app/src/components/Checkbox/Checkbox.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Checkbox = ({ label, checked, onChange, disabled = false, 
// variant = 'default',
className = '' }) => {
    const handleChange = (event) => {
        onChange(event.target.checked);
    };
    return (_jsxs("label", { className: `flex cursor-pointer items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`, children: [_jsx("input", { type: 'checkbox', checked: checked, onChange: handleChange, disabled: disabled, className: 'form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out' }), _jsx("span", { className: 'ml-2 text-gray-700', children: label })] }));
};
