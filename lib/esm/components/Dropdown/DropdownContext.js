'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const DropdownContext = createContext(undefined);
export const DropdownProvider = ({ children, value }) => {
    return (_jsx(DropdownContext.Provider, { value: value, children: children }));
};
export const useDropdown = () => {
    const context = useContext(DropdownContext);
    if (context === undefined) {
        throw new Error('useDropdown must be used within a DropdownProvider');
    }
    return context;
};
