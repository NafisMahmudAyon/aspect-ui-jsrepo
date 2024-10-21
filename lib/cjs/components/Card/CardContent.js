import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
export const CardContent = ({ children, className = '' }) => {
    return _jsx("div", { className: cn('p-4', className), children: children });
};
