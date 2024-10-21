import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TimelineItem = ({ date, title, description, icon, position }) => {
    return (_jsxs("div", { className: `flex ${position === 'right' ? '' : 'flex-row-reverse'} mb-8 items-start`, children: [_jsxs("div", { className: `flex-1 ${position == 'left' ? 'text-start' : 'text-end'} ${position === 'right' ? 'pr-4' : 'pl-4'}`, children: [_jsx("div", { className: 'text-sm text-gray-500', children: date }), _jsx("h3", { className: 'text-lg font-semibold', children: title }), _jsx("div", { className: 'mt-2', children: description })] }), _jsx("div", { className: 'z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500', children: icon || _jsx("div", { className: 'h-3 w-3 rounded-full bg-white' }) })] }));
};
export const Timeline = ({ items, position, lineStyle = 'solid' }) => {
    const lineClasses = `absolute ${position === 'left' ? 'left-4' : 'right-4'} top-0 w-px h-full ${lineStyle === 'dashed'
        ? 'border-l-2 border-dashed border-gray-300'
        : 'bg-gray-300'}`;
    return (_jsxs("div", { className: 'relative', children: [_jsx("div", { className: lineClasses, style: lineStyle !== 'solid' && lineStyle !== 'dashed'
                    ? { borderLeft: lineStyle }
                    : {} }), items.map((item, index) => (_jsx(TimelineItem, { ...item, position: position }, index)))] }));
};
