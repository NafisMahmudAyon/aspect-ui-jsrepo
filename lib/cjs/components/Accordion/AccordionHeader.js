'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAccordion } from './AccordionContext';
import { cn } from '../../utils/cn';
export const AccordionHeader = ({ children, isOpen, onToggle, className = '', iconEnabled: headerIconEnabled, iconPosition: headerIconPosition, iconClassName: headerIconClassName, activeIconClassName: headerActiveIconClassName, activeIcon: headerActiveIcon, inactiveIcon: headerInactiveIcon, labelClassName: headerLabelClassName, activeLabelClassName: headerActiveLabelClassName, headerClassName: headerHeaderClassName, activeHeaderClassName: headerActiveHeaderClassName, disabled = false }) => {
    const { iconEnabled: accordionIconEnabled, iconPosition: accordionIconPosition, iconClassName: accordionIconClassName, activeIconClassName: accordionActiveIconClassName, activeIcon: accordionActiveIcon, inactiveIcon: accordionInactiveIcon, labelClassName: accordionLabelClassName, activeLabelClassName: accordionActiveLabelClassName, headerClassName: accordionHeaderClassName, activeHeaderClassName: accordionActiveHeaderClassName } = useAccordion();
    const iconEnabled = headerIconEnabled ?? accordionIconEnabled;
    const iconPosition = headerIconPosition ?? accordionIconPosition;
    const iconClassName = headerIconClassName ?? accordionIconClassName;
    const activeIconClassName = headerActiveIconClassName ?? accordionActiveIconClassName;
    const activeIcon = headerActiveIcon ?? accordionActiveIcon ?? '▲';
    const inactiveIcon = headerInactiveIcon ?? accordionInactiveIcon ?? '▼';
    const icon = isOpen ? activeIcon : inactiveIcon;
    const iconClass = `${iconClassName} ${isOpen ? activeIconClassName : ''} transition-transform duration-300`;
    const labelClassName = headerLabelClassName ?? accordionLabelClassName;
    const activeLabelClassName = headerActiveLabelClassName ?? accordionActiveLabelClassName;
    const headerClassName = headerHeaderClassName ?? accordionHeaderClassName;
    const activeHeaderClassName = headerActiveHeaderClassName ?? accordionActiveHeaderClassName;
    const labelClass = `${labelClassName} ${isOpen ? activeLabelClassName : ''}`;
    const headerClass = `${headerClassName} ${isOpen ? activeHeaderClassName : ''}`;
    return (_jsxs("button", { className: cn(headerClass, 'flex w-full items-center justify-between p-4 text-left transition-all duration-150 ease-in-out', disabled
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:bg-primary-200 dark:hover:bg-primary-900', isOpen
            ? 'bg-primary-200 text-primary-950 dark:bg-primary-900 dark:text-primary-50'
            : 'bg-primary-100 text-primary-900 dark:bg-primary-800 dark:text-primary-100', className), onClick: onToggle, disabled: disabled, children: [iconEnabled && iconPosition === 'left' && (_jsx("span", { className: `${iconClass}`, children: icon })), _jsx("span", { className: `${labelClass} flex-grow`, children: children }), iconEnabled && iconPosition === 'right' && (_jsx("span", { className: `${iconClass}`, children: icon }))] }));
};
