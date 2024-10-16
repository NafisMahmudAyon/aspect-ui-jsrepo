// ./app/src/components/Navbar/Navbar.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { NavbarProvider } from './NavbarContext';
export const Navbar = ({ children }) => {
    return (_jsx(NavbarProvider, { children: _jsx("nav", { className: "bg-gray-400 shadow-md relative", children: children }) }));
};
