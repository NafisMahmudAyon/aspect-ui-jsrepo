// ./app/src/components/Textarea/Textarea.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
export const Textarea = forwardRef(({ label, error, className, ...props }, ref) => {
    return (_jsxs("div", { className: "mb-4", children: [label && (_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: label })), _jsx("textarea", { ref: ref, className: `
            w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${error ? "border-red-500" : "border-gray-300"} ${className})`, ...props }), error && (_jsx("p", { className: "mt-1 text-xs text-red-500", children: error }))] }));
});
Textarea.displayName = 'Textarea';
