// ./app/src/components/Sidebar/SidebarItem.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const SidebarItem = ({ children, onClick }) => {
    return (_jsx("div", { className: "p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200", onClick: onClick, children: children }));
};
