'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
const Tooltip = ({ children, direction = 'top', showOnClick = false }) => {
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
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(0, 0, 0, 1)',
            padding: '0.5rem',
            borderRadius: '0.25rem',
            zIndex: 10,
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
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
                    borderTopColor: 'rgba(255, 255, 255, 1)'
                };
            case 'right':
                return {
                    ...baseStyle,
                    left: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderRightColor: 'rgba(255, 255, 255, 1)'
                };
            case 'bottom':
                return {
                    ...baseStyle,
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderBottomColor: 'rgba(255, 255, 255, 1)'
                };
            case 'left':
                return {
                    ...baseStyle,
                    right: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderLeftColor: 'rgba(255, 255, 255, 1)'
                };
        }
    };
    const [actionElement, contentElement] = React.Children.toArray(children);
    return (_jsxs("div", { className: 'relative inline-block', children: [_jsx("div", { onMouseEnter: showOnClick ? undefined : showTooltip, onMouseLeave: showOnClick ? undefined : hideTooltip, onClick: handleClick, children: actionElement }), isVisible && (_jsxs("div", { style: getTooltipStyle(), children: [contentElement, _jsx("div", { style: getArrowStyle() })] }))] }));
};
const TooltipAction = ({ children }) => {
    return _jsx(_Fragment, { children: children });
};
const TooltipContent = ({ children }) => {
    return _jsx(_Fragment, { children: children });
};
export { Tooltip, TooltipAction, TooltipContent };
