import React from 'react';
interface ToastAction {
    label: string;
    onClick: () => void;
}
interface ToastOptions {
    message: string;
    description?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    action?: ToastAction;
}
export declare const useToast: () => {
    addToast: (options: ToastOptions) => void;
    ToastContainer: React.FC<{}>;
    promise: <T>(promise: Promise<T>, options: {
        loading: string;
        loadingDescription?: string;
        success: string;
        successDescription?: string;
        error: string;
        errorDescription?: string;
    }) => Promise<T>;
};
export {};
