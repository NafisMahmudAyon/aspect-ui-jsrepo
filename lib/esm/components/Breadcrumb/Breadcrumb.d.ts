import React, { HTMLAttributes } from 'react';
interface BreadcrumbProps extends HTMLAttributes<HTMLUListElement> {
    className?: string;
    children: React.ReactNode;
    separator?: React.ReactNode;
    separatorClassName?: string;
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export {};
