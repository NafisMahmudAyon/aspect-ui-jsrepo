'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../../utils/cn';
const Tooltip = ({ children, direction = 'top', showOnClick = false, className = '', arrowColor = '#847ef3', arrowSize = 10, contentClassName = '', actionClassName = '', ...rest }) => {
    const [isVisible, setIsVisible] = useState(false);
    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);
    const handleClick = () => {
        if (showOnClick) {
            setIsVisible(!isVisible);
        }
    };
    const getTooltipStyle = () => {
        const baseStyle = {
            position: 'absolute',
            zIndex: 10,
        };
        switch (direction) {
            case 'top':
                return {
                    ...baseStyle,
                    bottom: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)'
                };
            case 'right':
                return {
                    ...baseStyle,
                    left: 'calc(100% + 10px)',
                    top: '50%',
                    transform: 'translateY(-50%)'
                };
            case 'bottom':
                return {
                    ...baseStyle,
                    top: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)'
                };
            case 'left':
                return {
                    ...baseStyle,
                    right: 'calc(100% + 10px)',
                    top: '50%',
                    transform: 'translateY(-50%)'
                };
        }
    };
    const getArrowStyle = () => {
        const baseStyle = {
            position: 'absolute',
            width: '0',
            height: '0',
            border: '5px solid transparent'
        };
        switch (direction) {
            case 'top':
                return {
                    ...baseStyle,
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderTopColor: arrowColor
                };
            case 'right':
                return {
                    ...baseStyle,
                    left: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderRightColor: arrowColor
                };
            case 'bottom':
                return {
                    ...baseStyle,
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderBottomColor: arrowColor
                };
            case 'left':
                return {
                    ...baseStyle,
                    right: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderLeftColor: arrowColor
                };
        }
    };
    const [actionElement, contentElement] = React.Children.toArray(children);
    return (_jsxs("div", { className: cn('relative inline-block', className), ...rest, children: [_jsx("div", { className: cn('', actionClassName), onMouseEnter: showOnClick ? undefined : showTooltip, onMouseLeave: showOnClick ? undefined : hideTooltip, onClick: handleClick, children: actionElement }), isVisible && (_jsxs("div", { className: cn('bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-md text-body2 w-max', contentClassName), style: getTooltipStyle(), children: [contentElement, _jsx("div", { style: getArrowStyle() })] }))] }));
};
const TooltipAction = ({ children }) => {
    return _jsx(_Fragment, { children: children });
};
const TooltipContent = ({ children }) => {
    return _jsx(_Fragment, { children: children });
};
export { Tooltip, TooltipAction, TooltipContent };
