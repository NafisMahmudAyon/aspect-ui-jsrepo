import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
export const CardFooter = ({ children, className = '' }) => {
    return _jsx("div", { className: cn(className), children: children });
};
