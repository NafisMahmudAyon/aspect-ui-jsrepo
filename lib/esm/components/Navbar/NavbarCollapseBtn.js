// ./app/src/components/Navbar/NavbarCollapseBtn.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useNavbar } from './NavbarContext';
import { cn } from '../../utils/cn';
export const NavbarCollapseBtn = ({ className = '', icon, ...rest }) => {
    const { toggleCollapse, collapseOn } = useNavbar();
    return (_jsx("button", { className: cn('rounded-md p-2 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200', `block ${collapseOn === 'md' && 'md:hidden'} ${collapseOn === 'lg' && 'lg:hidden'} `, className), onClick: toggleCollapse, ...rest, children: icon ? icon :
            _jsx("svg", { className: 'h-6 w-6', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16m-7 6h7' }) }) }));
};
