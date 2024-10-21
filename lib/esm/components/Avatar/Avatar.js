import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { AvatarImage } from './AvatarImage';
export const Avatar = ({ className = '', children, onClick, ...rest }) => {
    return (_jsxs("div", { className: cn('relative flex size-12 items-center justify-center rounded-full bg-primary-200 text-lg font-semibold text-primary-800 dark:bg-primary-800 dark:text-primary-200', className), onClick: onClick, ...rest, children: [children && children, !children && _jsx(AvatarImage, {})] }));
};
