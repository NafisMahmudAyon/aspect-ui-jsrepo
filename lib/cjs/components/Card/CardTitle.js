import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
export const CardTitle = ({ children, className = '', ...rest }) => {
    return (_jsx("h3", { className: cn("text-lg font-semibold text-primary-900 hover:text-primary-800 group-hover:text-primary-900 dark:text-primary-200 dark:hover:text-primary-300 dark:group-hover:text-primary-300", className), ...rest, children: children }));
};
