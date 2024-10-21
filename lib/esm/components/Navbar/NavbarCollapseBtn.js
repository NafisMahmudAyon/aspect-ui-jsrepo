// ./app/src/components/Navbar/NavbarCollapseBtn.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useNavbar } from './NavbarContext';
export const NavbarCollapseBtn = () => {
    const { toggleCollapse } = useNavbar();
    return (_jsx("button", { className: 'rounded-md p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 md:hidden', onClick: toggleCollapse, children: _jsx("svg", { className: 'h-6 w-6', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16m-7 6h7' }) }) }));
};
