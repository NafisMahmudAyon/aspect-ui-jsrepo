// ./app/src/components/FileUpload.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
export const FileUpload = ({ onFileSelect, accept = '*', multiple = false }) => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        }
        else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileSelect(e.dataTransfer.files[0]);
        }
    };
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            onFileSelect(e.target.files[0]);
        }
    };
    const onButtonClick = () => {
        inputRef.current?.click();
    };
    return (_jsxs("div", { className: `flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`, onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDrag, onDrop: handleDrop, onClick: onButtonClick, children: [_jsx("input", { ref: inputRef, type: "file", className: "hidden", multiple: multiple, accept: accept, onChange: handleChange }), _jsx("svg", { className: "w-10 h-10 mb-3 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }) }), _jsxs("p", { className: "mb-2 text-sm text-gray-500", children: [_jsx("span", { className: "font-semibold", children: "Click to upload" }), " or drag and drop"] }), _jsx("p", { className: "text-xs text-gray-500", children: multiple ? 'Upload any files' : 'Upload a file' })] }));
};
