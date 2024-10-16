// ./app/src/components/Input/Input.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
export const Input = forwardRef(({ className, label, error, icon, iconPosition = 'left', ...props }, ref) => {
    return (_jsxs("div", { className: "mb-4", children: [label && (_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: label })), _jsxs("div", { className: "relative", children: [icon && (_jsx("div", { className: `
              absolute inset-y-0 flex items-center pointer-events-none 
              ${iconPosition === 'left' ? 'left-0 pl-3' : 'right-0 pr-3'}`, children: icon })), _jsx("input", { ref: ref, className: `
              w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              ${error ? 'border-red-500' : 'border-gray-300'}
              ${icon && iconPosition === 'left' ? 'pl-10' : 'pr-10'}
              ${className}
            `, ...props })] }), error && (_jsx("p", { className: "mt-1 text-sm text-red-600", children: error }))] }));
});
Input.displayName = 'Input';
