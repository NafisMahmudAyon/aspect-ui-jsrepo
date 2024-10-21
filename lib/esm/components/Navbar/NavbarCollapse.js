// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useNavbar } from './NavbarContext';
export const NavbarCollapse = ({ children }) => {
    const { isCollapsed } = useNavbar();
    return (_jsx("div", { className: `${isCollapsed ? 'hidden' : 'absolute right-0 top-full block'} md:block`, children: _jsx("div", { className: 'flex flex-col md:flex-row', children: children }) }));
};
