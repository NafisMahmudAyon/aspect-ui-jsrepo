import React from 'react';
interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    onClose?: () => void;
}
declare const Toast: React.FC<ToastProps>;
export default Toast;
