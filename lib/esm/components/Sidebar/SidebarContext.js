// ./app/src/components/Sidebar/SidebarContext.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const SidebarContext = createContext(undefined);
export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(prev => !prev);
    return (_jsx(SidebarContext.Provider, { value: { isOpen, toggleSidebar }, children: children }));
};
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
