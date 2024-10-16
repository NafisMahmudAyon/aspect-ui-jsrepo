import React from 'react';
interface NavbarContextType {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}
export declare const NavbarProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useNavbar: () => NavbarContextType;
export {};
