import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className }) => {
    return (_jsx("div", { className: `${className} bg-gray-400 rounded-lg shadow-md overflow-hidden`, children: children }));
};
