

import { Slider } from '@/app/src/components/Slider/Slider'
import { SliderItem } from '@/app/src/components/Slider/SliderItem'
import React from 'react'

const SliderDemo = () => {
  const items = [
    {
      id: 1,
      title: 'A',
      content: 'A',
    },
    {
      id: 2,
      title: 'B',
      content: 'B',
    },
    {
      id: 3,
      title: 'C',
      content: 'C',
    },
    {
      id: 4,
      title: 'D',
      content: 'D',
    },
    {
      id: 5,
      title: 'E',
      content: 'E',
    },
  ]
  return (
    <div>
      <Slider options={{
        type: "loop",
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: true,
        autoplay: true,
        interval: 3000,
      }}
        paginationStyle={{
          backgroundColor: 'blue',
          color: 'red',
          width: '100%',
          height: '100%',
        }}
      >
        {items.map((item) => (
          <SliderItem className=' text-center' key={item.id}>{item.title}</SliderItem>
        ))}
      </Slider>

    </div >
  )
}

export default SliderDemo