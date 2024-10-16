import React from 'react';
interface ImageProps {
    src: string;
    alt: string;
    caption?: string;
    width?: string;
    height?: string;
    loading?: 'lazy' | 'eager';
    responsive?: boolean;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    borderRadius?: string;
    shadow?: boolean;
    previewText?: string;
}
export declare const Image: React.FC<ImageProps>;
export {};
