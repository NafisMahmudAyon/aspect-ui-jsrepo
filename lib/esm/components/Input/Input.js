// ./app/src/components/Input/Input.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Mail } from '../Icon/Form';
import { cn } from '../../utils/cn';
export const Input = forwardRef(({ label, error, icon = _jsx(Mail, {}), labelClassName = "", iconClassName = "", className = "", wrapperClassName = "", errorClassName = "", ...rest }, ref) => {
    return (_jsxs("fieldset", { className: cn('mb-4', wrapperClassName), children: [label && (_jsx("label", { className: cn('mb-1 block text-sm font-medium text-gray-700', labelClassName), children: label })), _jsxs("div", { className: 'relative', children: [icon && (_jsx("div", { className: cn("pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50 text-primary-500", iconClassName), children: icon })), _jsx("input", { ref: ref, className: cn("w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ps-11", error ? 'border-red-500' : 'border-gray-300', className), ...rest })] }), error && _jsx("p", { className: cn('mt-1 text-sm text-error-600', errorClassName), children: error })] }));
});
Input.displayName = 'Input';
