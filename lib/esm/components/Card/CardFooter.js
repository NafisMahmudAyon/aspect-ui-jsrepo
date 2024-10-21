import { jsx as _jsx } from "react/jsx-runtime";
export const CardFooter = ({ children, className = '' }) => {
    return _jsx("div", { className: `${className} border-t p-4`, children: children });
};
