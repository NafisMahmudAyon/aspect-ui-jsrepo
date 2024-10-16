import React from 'react';
interface PaginationProps {
    count: number;
    defaultPage?: number;
    boundaryCount?: number;
    siblingCount?: number;
    showFirstLast?: boolean;
    showNextPrev?: boolean;
    onChange: (page: number) => void;
}
export declare const Pagination: React.FC<PaginationProps>;
export {};
