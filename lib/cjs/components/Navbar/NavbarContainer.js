// ./app/src/components/Navbar/NavbarContainer.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const NavbarContainer = ({ children }) => {
    return (_jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "flex justify-between items-center py-4", children: children }) }));
};
