'use client'
import { Slider } from '@/app/src/components/Slider'
import React from 'react'

const SliderDemo = () => {
  const handleSingleSliderChange = (values: number[]) => {
    console.log('Single slider value:', values[0])
  }

  const handleRangeSliderChange = (values: number[]) => {
    console.log('Range slider values:', values)
  }
  return (
    <div>
      <div>
        <h2 className='mb-2 text-lg font-semibold'>Single Value Slider</h2>
        <Slider
          min={0}
          max={100}
          defaultValue={[55]}
          onChange={handleSingleSliderChange}
        />
      </div>

      <div>
        <h2 className='mb-2 text-lg font-semibold'>Range Slider</h2>
        <Slider
          min={0}
          max={100}
          defaultValue={[33, 75]}
          onChange={handleRangeSliderChange}
        />
      </div>
    </div>
  )
}

export default SliderDemo
