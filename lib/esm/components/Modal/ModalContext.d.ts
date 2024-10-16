import React from 'react';
interface ModalContextType {
    isOpen: boolean;
    handleOpen: () => void;
}
export declare const ModalProvider: React.FC<{
    children: React.ReactNode;
    value: ModalContextType;
}>;
export declare const useModal: () => ModalContextType;
export {};
