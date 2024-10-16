import React from 'react';
interface FileUploadProps {
    onFileSelect: (file: File) => void;
    accept?: string;
    multiple?: boolean;
}
export declare const FileUpload: React.FC<FileUploadProps>;
export {};
