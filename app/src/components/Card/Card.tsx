import React from 'react'
import { cn } from '../../utils/cn'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className="" }) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-primary-200 hover:bg-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 shadow-small group transition-all duration-150 ease-in-out",
        className
      )}
    >
      {children}
    </div>
  )
}
