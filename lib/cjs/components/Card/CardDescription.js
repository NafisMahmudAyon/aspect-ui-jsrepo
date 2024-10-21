import { jsx as _jsx } from "react/jsx-runtime";
export const CardDescription = ({ children, className = '' }) => {
    return _jsx("p", { className: `${className} text-sm text-gray-600`, children: children });
};
