import React from 'react';
interface PaginationProps {
    count: number;
    defaultPage?: number;
    boundaryCount?: number;
    siblingCount?: number;
    showFirstLast?: boolean;
    showNextPrev?: boolean;
    firstButton?: React.ReactNode;
    lastButton?: React.ReactNode;
    nextButton?: React.ReactNode;
    previousButton?: React.ReactNode;
    firstButtonClassName?: string;
    lastButtonClassName?: string;
    nextButtonClassName?: string;
    previousButtonClassName?: string;
    className?: string;
    numberClassName?: string;
    activeClassName?: string;
    deactivateClassName?: string;
    ellipsisClassName?: string;
    numberType?: 'normal' | 'roman' | 'custom';
    numbers?: string[];
    onChange: (page: number) => void;
}
export declare const Pagination: React.FC<PaginationProps>;
export {};
