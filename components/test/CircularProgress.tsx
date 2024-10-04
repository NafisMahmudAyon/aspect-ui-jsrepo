import { CircularProgressBar } from '@/app/src/components/CircularProgressBar'
import React from 'react'

const CircularProgressDemo = () => {
  return (
    <div>
      <CircularProgressBar
        value={85}
        duration={3}
        strokeColor='red'
        strokeFillColor='blue'
      >
        hello
      </CircularProgressBar>
      <CircularProgressBar
      value={85}
      onVisible={true}
      duration={3}
    /></div>
  )
}

export default CircularProgressDemo