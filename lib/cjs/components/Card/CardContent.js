import { jsx as _jsx } from "react/jsx-runtime";
export const CardContent = ({ children, className = '' }) => {
    return _jsx("div", { className: `${className} p-4`, children: children });
};
