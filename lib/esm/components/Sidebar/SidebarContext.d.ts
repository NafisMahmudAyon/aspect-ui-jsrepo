import React from 'react';
interface SidebarContextType {
    isOpen: boolean;
    toggleSidebar: () => void;
}
export declare const SidebarProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useSidebar: () => SidebarContextType;
export {};
