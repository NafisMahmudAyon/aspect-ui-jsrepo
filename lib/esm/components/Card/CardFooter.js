import { jsx as _jsx } from "react/jsx-runtime";
export const CardFooter = ({ children, className = "", }) => {
    return _jsx("div", { className: `${className} p-4 border-t`, children: children });
};
