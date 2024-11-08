import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
export const CardTitle = ({ children, className = '', ...rest }) => {
    return (_jsx("h3", { className: cn("text-lg font-semibold text-primary-800 dark:text-primary-200  group-hover:text-primary-900 dark:group-hover:text-primary-100 transition-all duration-150 ease-in-out", className), ...rest, children: children }));
};
