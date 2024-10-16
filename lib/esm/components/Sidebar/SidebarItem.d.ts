import React, { ReactNode } from 'react';
interface SidebarItemProps {
    children: ReactNode;
    onClick?: () => void;
}
export declare const SidebarItem: React.FC<SidebarItemProps>;
export {};
