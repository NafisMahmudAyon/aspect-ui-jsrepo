// ./app/src/components/Checkbox/Checkbox.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Checkbox = ({ label, checked, 
// checkboxStyle="",
onChange, disabled = false, 
// variant = 'default',
className = '' }) => {
    const handleChange = (event) => {
        onChange(event.target.checked);
    };
    return (_jsxs("label", { className: `flex gap-2 cursor-pointer items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`, children: [_jsx("input", { type: 'checkbox', checked: checked, onChange: handleChange, disabled: disabled, className: "" }), _jsx("span", { className: '', children: label })] }));
};
