import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Card = ({ children, className = "", ...rest }) => {
    return (_jsx("div", { className: cn("overflow-hidden rounded-lg bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 shadow-small group transition-all duration-150 ease-in-out", className), ...rest, children: children }));
};
