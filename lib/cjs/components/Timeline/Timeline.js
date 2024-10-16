import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TimelineItem = ({ date, title, description, icon, position }) => {
    return (_jsxs("div", { className: `flex ${position === 'right' ? '' : 'flex-row-reverse'} items-start mb-8`, children: [_jsxs("div", { className: `flex-1 ${position == 'left' ? "text-start" : "text-end"} ${position === 'right' ? 'pr-4' : 'pl-4'}`, children: [_jsx("div", { className: "text-sm text-gray-500", children: date }), _jsx("h3", { className: "text-lg font-semibold", children: title }), _jsx("div", { className: "mt-2", children: description })] }), _jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10", children: icon || _jsx("div", { className: "w-3 h-3 bg-white rounded-full" }) })] }));
};
export const Timeline = ({ items, position, lineStyle = 'solid' }) => {
    const lineClasses = `absolute ${position === 'left' ? 'left-4' : 'right-4'} top-0 w-px h-full ${lineStyle === 'dashed' ? 'border-l-2 border-dashed border-gray-300' : 'bg-gray-300'}`;
    return (_jsxs("div", { className: "relative", children: [_jsx("div", { className: lineClasses, style: lineStyle !== 'solid' && lineStyle !== 'dashed' ? { borderLeft: lineStyle } : {} }), items.map((item, index) => (_jsx(TimelineItem, { ...item, position: position }, index)))] }));
};
