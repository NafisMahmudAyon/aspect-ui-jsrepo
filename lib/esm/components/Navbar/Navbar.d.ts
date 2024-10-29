import React, { ReactNode } from 'react';
interface NavbarProps {
    children: ReactNode;
    className?: string;
    collapseBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all';
}
export declare const Navbar: React.FC<NavbarProps>;
export {};
