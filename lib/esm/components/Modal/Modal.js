'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { ModalProvider } from './ModalContext';
export const Modal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [setIsOpen]);
    return (_jsx(ModalProvider, { value: { isOpen, handleOpen }, children: children }));
};
