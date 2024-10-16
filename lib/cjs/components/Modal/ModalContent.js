'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from './ModalContext';
export const ModalContent = ({ children }) => {
    const { isOpen } = useModal();
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: children }));
};
