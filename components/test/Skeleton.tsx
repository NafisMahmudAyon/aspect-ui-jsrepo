import { Skeleton } from '@/app/src/components/Skeleton'
import React from 'react'

const SkeletonDemo = () => {
  return (
    <div>
      <Skeleton variation="text" width="80%" />
      <Skeleton variation="circular" width={50} height={50} />
      <Skeleton variation="rectangular" width="100%" height={100} />
      <Skeleton variation="rounded" width="60%" height={30} />
    </div>
  )
}

export default SkeletonDemo