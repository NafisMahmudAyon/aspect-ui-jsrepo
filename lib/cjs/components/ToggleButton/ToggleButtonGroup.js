// ./app/src/components/Toggle/ToggleButtonGroup.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { ToggleButtonGroupProvider } from './ToggleButtonGroupContext';
export const ToggleButtonGroup = ({ children, type, defaultValue, onChange, className = '' }) => {
    return (_jsx(ToggleButtonGroupProvider, { type: type, defaultValue: defaultValue, onChange: onChange, children: _jsx("div", { className: `flex space-x-2 ${className}`, children: children }) }));
};
