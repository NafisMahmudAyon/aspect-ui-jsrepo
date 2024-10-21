import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className }) => {
    return (_jsx("div", { className: `${className} overflow-hidden rounded-lg bg-gray-400 shadow-md`, children: children }));
};
