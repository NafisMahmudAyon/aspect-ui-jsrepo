'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAccordion } from './AccordionContext';
export const AccordionHeader = ({ children, isOpen, onToggle, iconEnabled: headerIconEnabled, iconPosition: headerIconPosition, iconClassName: headerIconClassName, activeIconClassName: headerActiveIconClassName, inactiveIconClassName: headerInactiveIconClassName, activeIcon: headerActiveIcon, inactiveIcon: headerInactiveIcon, disabled = false, }) => {
    const { iconEnabled: accordionIconEnabled, iconPosition: accordionIconPosition, iconClassName: accordionIconClassName, activeIconClassName: accordionActiveIconClassName, inactiveIconClassName: accordionInactiveIconClassName, activeIcon: accordionActiveIcon, inactiveIcon: accordionInactiveIcon, } = useAccordion();
    const iconEnabled = headerIconEnabled ?? accordionIconEnabled;
    const iconPosition = headerIconPosition ?? accordionIconPosition;
    const iconClassName = headerIconClassName ?? accordionIconClassName;
    const activeIconClassName = headerActiveIconClassName ?? accordionActiveIconClassName;
    const inactiveIconClassName = headerInactiveIconClassName ?? accordionInactiveIconClassName;
    const activeIcon = headerActiveIcon ?? accordionActiveIcon ?? '▲';
    const inactiveIcon = headerInactiveIcon ?? accordionInactiveIcon ?? '▼';
    const icon = isOpen ? activeIcon : inactiveIcon;
    const iconClass = `${iconClassName} ${isOpen ? activeIconClassName : inactiveIconClassName} transition-transform duration-300`;
    return (_jsxs("button", { className: `w-full p-4 text-left flex items-center justify-between ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`, onClick: onToggle, disabled: disabled, children: [iconEnabled && iconPosition === 'left' && (_jsx("span", { className: `${iconClass} ${isOpen ? 'rotate-180' : ''}`, children: icon })), _jsx("span", { className: "flex-grow", children: children }), iconEnabled && iconPosition === 'right' && (_jsx("span", { className: `${iconClass} ${isOpen ? 'rotate-180' : ''}`, children: icon }))] }));
};
