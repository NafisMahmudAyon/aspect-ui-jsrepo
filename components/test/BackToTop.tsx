import { BackToTop } from '@/app/src/components/BackToTop'
import React from 'react'

const BackToTopDemo = () => {
  return (
    <div>
      <div id='hello' className='bg-red-300 h-[100vh] w-full'></div>
      <div id='hello1' className='bg-red-600 h-[100vh] w-full'></div>
      <a href="#hello">hello</a>
      <BackToTop />
      <BackToTop threshold={500} smooth={false}>
        <span className="text-sm">Top</span>
      </BackToTop>
    </div>
  )
}

export default BackToTopDemo