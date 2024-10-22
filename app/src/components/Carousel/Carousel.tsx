'use client'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { CarouselContext } from './CarouselContext'
import { CarouselViewport } from './Viewport'
import { cn } from '../../utils/cn'

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  options?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  carouselViewportClasses?: string
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      options,
      plugins,
      className,
      carouselViewportClasses
    }: CarouselProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

    return (
      <div className={cn("w-full relative pb-[2.4rem]", className)} ref={ref}>
        <CarouselContext.Provider value={{ emblaApi, emblaRef }}>
          <CarouselViewport className={carouselViewportClasses}>
            {children}
          </CarouselViewport>
        </CarouselContext.Provider>
      </div>
    )
  }
)

Carousel.displayName = 'Carousel'

export { Carousel }
