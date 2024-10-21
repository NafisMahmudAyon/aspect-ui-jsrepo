'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from './ModalContext';
export const ModalAction = ({ children }) => {
    const { handleOpen } = useModal();
    return (_jsx("button", { className: 'rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600', onClick: handleOpen, children: children }));
};
