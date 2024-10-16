import { HTMLAttributes } from 'react';
interface BreadcrumbProps extends HTMLAttributes<HTMLUListElement> {
    className?: string;
    children: React.ReactNode;
    separator?: React.ReactNode;
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export {};