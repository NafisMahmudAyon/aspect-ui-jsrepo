'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from './ModalContext';
export const ModalAction = ({ children }) => {
    const { handleOpen } = useModal();
    return (_jsx("button", { className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors", onClick: handleOpen, children: children }));
};
