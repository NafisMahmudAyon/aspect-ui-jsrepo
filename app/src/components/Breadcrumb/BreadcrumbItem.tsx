'use client'
import { HTMLAttributes } from 'react'

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  className?: string
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ children, className, ...rest }) => {


  return (
    <li
      {...rest}
      className={`
          flex cursor-pointer items-center
          ${className}
        `}>
      {children}
    </li>
  )
}

BreadcrumbItem.displayName = 'BreadcrumbItem'