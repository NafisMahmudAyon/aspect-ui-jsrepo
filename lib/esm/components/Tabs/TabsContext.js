'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const TabsContext = createContext(undefined);
export const TabsProvider = ({ children, value }) => {
    return _jsx(TabsContext.Provider, { value: value, children: children });
};
export const useTabs = () => {
    const context = useContext(TabsContext);
    if (context === undefined) {
        throw new Error('useTabs must be used within a TabsProvider');
    }
    return context;
};
