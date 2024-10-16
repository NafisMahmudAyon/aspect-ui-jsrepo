import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Divider = ({ orientation = 'horizontal', size = 'md', color = 'gray-200', variant = 'full', children, }) => {
    const sizeStyles = {
        sm: 'border-[1px]',
        md: 'border-[2px]',
        lg: 'border-[3px]',
        xl: 'border-[4px]',
        '2xl': 'border-[6px]',
    };
    const baseStyles = `border-${color} ${sizeStyles[size]}`;
    const orientationStyles = orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l';
    const variantStyles = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        full: '',
    };
    if (!children || variant === 'full') {
        return _jsx("div", { className: `${baseStyles} ${orientationStyles}` });
    }
    return (_jsxs("div", { className: `flex items-center ${variantStyles[variant]}`, children: [variant !== 'start' && _jsx("span", { className: `${baseStyles} ${orientationStyles} flex-grow` }), _jsx("span", { className: "px-3 text-sm text-gray-500", children: children }), variant !== 'end' && _jsx("span", { className: `${baseStyles} ${orientationStyles} flex-grow` })] }));
};
