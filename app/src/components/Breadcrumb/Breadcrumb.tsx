'use client'
import { Children, HTMLAttributes } from 'react'

interface BreadcrumbProps extends HTMLAttributes<HTMLUListElement> {
  className?: string
  children: React.ReactNode;
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, className, separator = ">", ...rest }) => {
  // Safely convert children to an array
  const childrenArray = Children.toArray(children);

  return (
    <ul
      className={`
          flex max-w-max items-center gap-3 border-metal-100 px-3.5 py-2.5 dark:border-metal-700
          ${className}
        `}
      {...rest}>
      {childrenArray.map((child: React.ReactNode, index: number) => (
        <>
          {child}
          {index < childrenArray.length - 1 && (
            <span className="mx-2">{separator}</span>
          )}
        </>
      ))}
    </ul>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
