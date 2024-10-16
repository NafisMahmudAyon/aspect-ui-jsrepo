// ./app/src/components/Toggle/StandaloneToggleButton.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export const Toggle = ({ value, children, className = '', defaultSelected = false, onChange, }) => {
    const [isSelected, setIsSelected] = useState(defaultSelected);
    const handleClick = () => {
        const newSelectedState = !isSelected;
        setIsSelected(newSelectedState);
        onChange?.(value, newSelectedState);
    };
    return (_jsx("button", { className: `px-4 py-2 rounded-md transition-colors duration-200 ${isSelected
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} ${className}`, onClick: handleClick, children: children }));
};
