import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
export const CardDescription = ({ children, className = '' }) => {
    return _jsx("p", { className: cn("text-sm text-secondary-800 dark:text-secondary-300", className), children: children });
};
