import { jsx as _jsx } from "react/jsx-runtime";
export const CardTitle = ({ children, className = "", }) => {
    return (_jsx("h3", { className: `${className} text-lg font-semibold text-gray-800`, children: children }));
};
