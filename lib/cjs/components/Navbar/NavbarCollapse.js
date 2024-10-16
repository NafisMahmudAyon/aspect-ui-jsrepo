// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useNavbar } from './NavbarContext';
export const NavbarCollapse = ({ children }) => {
    const { isCollapsed } = useNavbar();
    return (_jsx("div", { className: `${isCollapsed ? 'hidden' : 'block absolute top-full right-0'} md:block`, children: _jsx("div", { className: "flex flex-col md:flex-row", children: children }) }));
};
