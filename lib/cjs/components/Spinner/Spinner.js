import { jsx as _jsx } from "react/jsx-runtime";
export const Spinner = ({ size = 'medium', color = 'text-blue-500', thickness = 2 }) => {
    const sizeClasses = {
        small: 'size-4',
        medium: 'size-8',
        large: 'size-12'
    };
    return (_jsx("div", { className: `inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${sizeClasses[size]} ${color}`, style: { borderWidth: `${thickness}px` }, role: 'status', children: _jsx("span", { className: '!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]', children: "Loading..." }) }));
};
