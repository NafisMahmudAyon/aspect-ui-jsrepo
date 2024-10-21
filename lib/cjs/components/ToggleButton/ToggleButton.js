// ./app/src/components/Toggle/ToggleButton.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useToggleButtonGroup } from './ToggleButtonGroupContext';
export const ToggleButton = ({ value, children, className = '' }) => {
    const { selectedValues, handleChange } = useToggleButtonGroup();
    const isSelected = Array.isArray(selectedValues)
        ? selectedValues.includes(value)
        : selectedValues === value;
    return (_jsx("button", { className: `rounded-md px-4 py-2 transition-colors duration-200 ${isSelected
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} ${className}`, onClick: () => handleChange(value), children: children }));
};
