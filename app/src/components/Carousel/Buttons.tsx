'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export const CarouselButtons = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn("flex items-center gap-2", className)}
      ref={ref}
    >
      {children}
    </div>
  )
})

CarouselButtons.displayName = 'CarouselButtons'
