import { ProgressBar } from '@/app/src/components/ProgressBar'
import React from 'react'

const ProgressBarDemo = () => {
  return (
    <div>
      <ProgressBar value={60} duration={3} />
      <ProgressBar
        value={85}
        animateOnVisible
        duration={3}
        className='bg-red-500'
        containerClassName='bg-blue-500'
        fillClassName='!bg-green-500'
        contentClassName='bg-yellow-500'
      />
    </div>
  )
}

export default ProgressBarDemo