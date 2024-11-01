// ./app/src/components/Sidebar/SidebarContainer.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const SidebarContainer = ({ children }) => {
    return _jsx("div", { className: 'flex-grow overflow-y-auto my-2 space-y-1', children: children });
};
