import React from 'react';
interface NavbarContextType {
    isCollapsed: boolean;
    toggleCollapse: () => void;
    collapseOn: 'sm' | 'md' | 'lg' | 'xl';
}
export declare const NavbarProvider: React.FC<{
    children: React.ReactNode;
    collapseOn: 'sm' | 'md' | 'lg' | 'xl';
}>;
export declare const useNavbar: () => NavbarContextType;
export {};
