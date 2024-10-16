import React from 'react';
type SkeletonVariation = 'text' | 'circular' | 'rectangular' | 'rounded';
interface SkeletonProps {
    variation?: SkeletonVariation;
    width?: string | number;
    height?: string | number;
    className?: string;
}
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
