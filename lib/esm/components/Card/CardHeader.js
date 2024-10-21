import { jsx as _jsx } from "react/jsx-runtime";
export const CardHeader = ({ children, className = '' }) => {
    return _jsx("div", { className: `${className} border-b p-4`, children: children });
};
