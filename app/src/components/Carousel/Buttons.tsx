'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { carouselTheme } from './theme'

export const CarouselButtons = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
  const theme = carouselTheme
  return (
    <div
      {...props}
      className={`${theme.controls.button.container} bg-red-300 ${className}`}
      ref={ref}
    >
      {children}
    </div>
  )
})

CarouselButtons.displayName = 'CarouselButtons'
