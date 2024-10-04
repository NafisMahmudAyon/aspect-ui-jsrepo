'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { carouselTheme } from './theme'

export const CarouselControl = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const theme = carouselTheme
    return (
      <div {...props} className={`${theme.controls.wrapper} ${className}`} ref={ref}>
        {children}
      </div>
    )
  },
)

CarouselControl.displayName = 'CarouselControl'
