'use client'

import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from '@/app/src/components/Carousel'
// import { CarouselContext } from ''
import { Slider } from '@/app/src/components/Slider deprecated/Slider'

import { SliderItem } from '@/app/src/components/Slider deprecated/SliderItem'
import React from 'react'

const CarouselDemo = () => {
  const items = [
    {
      id: 1,
      title: 'A',
      content: 'A',
      image: 'https://picsum.photos/600/400',
    },
    {
      id: 2,
      title: 'B',
      content: 'B',
      image: 'https://picsum.photos/600/400',
    },
    {
      id: 3,
      title: 'C',
      content: 'C',
      image: 'https://picsum.photos/600/400',
    },
    {
      id: 4,
      title: 'D',
      content: 'D',
      image: 'https://picsum.photos/600/400',
    },
    {
      id: 5,
      title: 'E',
      content: 'E',
      image: 'https://picsum.photos/600/400',
    },
  ]
  const images = [
    "https://via.placeholder.com/600x300?text=Slide+1",
    "https://via.placeholder.com/600x300?text=Slide+2",
    "https://via.placeholder.com/600x300?text=Slide+3",
  ];
  return (
    <div>
      <div className="[&_li_.splide\_\_pagination\_\_page]:bg-red-500 [&:]-bg-red-500">jsdfsdfsfsf</div>
      <Slider options={{
        type: "loop",
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: true,
        autoplay: true,
        interval: 3000,
      }}
      prevArrowStyle='!bg-red-500'
        pgStyle={`bg-red-500   w-[${items.length * 20}px] `}
        paginationStyle={{
          backgroundColor: 'blue',
          color: 'red',
          width: '100%',
          height: '100%',
        }}
      >
        {items.map((item) => (
          <SliderItem className=' text-center' key={item.id}>{item.title}
            <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
          </SliderItem>
        ))}
      </Slider>
      <Carousel options={{ loop: true }}>
        <CarouselSlides>
          {[1, 2, 3, 4, 5].map((slide) => (
            <CarouselItem key={slide} className='bg-red-300'>
              <div className="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
                <h1 className="text-heading-1 font-medium text-metal-900 dark:text-white">{slide}</h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        <CarouselControl>
          <CarouselButtons>
            <CarouselPrevButton />
            <CarouselNextButton />
          </CarouselButtons>
        </CarouselControl>
          <CarouselIndicators />
      </Carousel>

      <div className="hello">Hello</div>

    </div >
  )
}

export default CarouselDemo