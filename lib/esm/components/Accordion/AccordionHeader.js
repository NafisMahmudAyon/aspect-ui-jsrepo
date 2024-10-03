import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AccordionHeader = ({ isOpen, onClick, children, className, iconEnabled, activeIcon, inactiveIcon, iconClassName, activeIconClassName, inactiveIconClassName, iconPosition = 'left' }) => {
    return (_jsxs("div", { className: `flex cursor-pointer items-center justify-between gap-3 p-4 ${className}`, onClick: onClick, children: [iconEnabled && iconPosition === 'left' && (_jsx("span", { className: `${iconClassName} ${isOpen ? activeIconClassName : inactiveIconClassName}`, children: isOpen
                    ? activeIcon
                        ? activeIcon
                        : '-'
                    : inactiveIcon
                        ? inactiveIcon
                        : '+' })), _jsx("span", { className: `flex-1`, children: children }), iconEnabled && iconPosition === 'right' && (_jsx("span", { className: `${iconClassName} ${isOpen ? activeIconClassName : inactiveIconClassName}`, children: isOpen
                    ? activeIcon
                        ? activeIcon
                        : '-'
                    : inactiveIcon
                        ? inactiveIcon
                        : '+' }))] }));
};
export default AccordionHeader;
