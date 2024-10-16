'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const TableContext = createContext(undefined);
export const TableProvider = ({ children }) => {
    return (_jsx(TableContext.Provider, { value: {}, children: children }));
};
export const useTable = () => {
    const context = useContext(TableContext);
    if (context === undefined) {
        throw new Error('useTable must be used within a TableProvider');
    }
    return context;
};
