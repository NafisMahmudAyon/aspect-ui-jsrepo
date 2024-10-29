import React, { ReactNode } from 'react';
interface NavbarProps {
    children: ReactNode;
    className?: string;
    collapseOn?: 'sm' | 'md' | 'lg' | 'xl';
}
export declare const Navbar: React.FC<NavbarProps>;
export {};
