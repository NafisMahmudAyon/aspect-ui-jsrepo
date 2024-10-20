'use client'
import { Rating } from '@/app/src/components/Rating/Rating'
import React from 'react'

const RatingDemo = () => {
  const handleRatingChange = (rating: number) => {
    console.log(`New rating: ${rating}`)
  }

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Rating Component Example</h1>
      <div className='space-y-4'>
        <Rating initialRating={3.5} readOnly size={20} />
        <Rating initialRating={3.2} readOnly size={50} />
        <Rating initialRating={3.9} readOnly size={90} />
        <Rating initialRating={4.8} readOnly size={10} />
        <Rating
          initialRating={0}
          onRatingChange={rating => console.log(`New rating: ${rating}`)}
          size={20}
        />
      </div>
    </div>
  )
}

export default RatingDemo
