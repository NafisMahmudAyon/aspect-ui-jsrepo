// ./app/src/components/Radio/Radio.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Radio = ({ id, name, value, label, checked, onChange }) => {
    return (_jsxs("div", { className: 'flex items-center', children: [_jsx("input", { type: 'radio', id: id, name: name, value: value, checked: checked, onChange: onChange, className: 'form-radio h-5 w-5 text-blue-600' }), _jsx("label", { htmlFor: id, className: 'ml-2 text-gray-700', children: label })] }));
};
