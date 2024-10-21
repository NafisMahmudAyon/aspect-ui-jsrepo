'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const ModalContext = createContext(undefined);
export const ModalProvider = ({ children, value }) => {
    return _jsx(ModalContext.Provider, { value: value, children: children });
};
export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
