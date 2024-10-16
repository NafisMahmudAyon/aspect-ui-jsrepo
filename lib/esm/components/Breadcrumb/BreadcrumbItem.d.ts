import { HTMLAttributes } from 'react';
export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
    className?: string;
}
export declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
