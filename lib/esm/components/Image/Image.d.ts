import React from 'react';
interface ImageProps {
    src: string;
    alt: string;
    caption?: string;
    width?: number | 'full' | 'auto';
    height?: number | 'auto' | 'full';
    loading?: 'lazy' | 'eager';
    responsive?: boolean;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    previewText?: string;
    wrapperClassName?: string;
    previewTextClassName?: string;
    className?: string;
    captionClassName?: string;
    lightbox?: boolean;
    lightboxProps?: {
        src: string;
        alt: string;
        caption?: boolean | React.ReactNode;
    };
}
export declare const Image: React.FC<ImageProps>;
export {};
