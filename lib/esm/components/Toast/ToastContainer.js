'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from 'react';
const Toast = ({ message, description, // New prop
type = 'info', duration = 3000, onClose, action, }) => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        if (duration === Infinity)
            return;
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onClose)
                onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);
    if (!isVisible)
        return null;
    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-blue-500';
        }
    };
    return (_jsx("div", { className: `fixed bottom-4 right-4 px-4 py-2 rounded-md text-white ${getBackgroundColor()} shadow-lg transition-opacity duration-300`, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: message }), description && ( // Render description if provided
                        _jsx("div", { className: "text-sm mt-1 opacity-90", children: description }))] }), action && (_jsx("button", { onClick: action.onClick, className: "ml-4 px-2 py-1 bg-white text-black rounded-md text-sm font-medium", children: action.label }))] }) }));
};
export const useToast = () => {
    const [toasts, setToasts] = useState([]);
    const addToast = useCallback((options) => {
        setToasts((prevToasts) => [...prevToasts, options]);
    }, []);
    const removeToast = useCallback((index) => {
        setToasts((prevToasts) => prevToasts.filter((_, i) => i !== index));
    }, []);
    const promise = useCallback((promise, options) => {
        const toastId = Date.now();
        addToast({
            message: options.loading,
            description: options.loadingDescription,
            type: 'info',
            duration: Infinity,
        });
        promise
            .then((result) => {
            removeToast(toastId);
            addToast({
                message: options.success,
                description: options.successDescription,
                type: 'success',
            });
            return result;
        })
            .catch((error) => {
            removeToast(toastId);
            addToast({
                message: options.error,
                description: options.errorDescription,
                type: 'error',
            });
            throw error;
        });
        return promise;
    }, [addToast, removeToast]);
    const ToastContainer = () => (_jsx("div", { className: "fixed bottom-4 right-4 flex flex-col space-y-2", children: toasts.map((toast, index) => (_jsx(Toast, { message: toast.message, description: toast.description, type: toast.type, duration: toast.duration, onClose: () => removeToast(index), action: toast.action }, index))) }));
    return { addToast, ToastContainer, promise };
};
