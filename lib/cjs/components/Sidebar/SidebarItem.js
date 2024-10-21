// ./app/src/components/Sidebar/SidebarItem.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const SidebarItem = ({ children, onClick }) => {
    return (_jsx("div", { className: 'cursor-pointer p-4 transition-colors duration-200 hover:bg-gray-700', onClick: onClick, children: children }));
};
