'use client'
import React from 'react'
// import { motion } from 'framer-motion';

type SkeletonVariation = 'text' | 'circular' | 'rectangular' | 'rounded'
// type AnimationType = 'pulse' | 'wave' | 'shimmer';

interface SkeletonProps {
  variation?: SkeletonVariation
  width?: string | number
  height?: string | number
  // animation?: boolean;
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variation = 'text',
  width,
  height,
  // animation = 'pulse',
  className = ''
}) => {
  const getVariationStyle = () => {
    switch (variation) {
      case 'circular':
        return 'rounded-full'
      case 'rectangular':
        return 'rounded-none'
      case 'rounded':
        return 'rounded-md'
      case 'text':
      default:
        return 'rounded'
    }
  }
  // const animation = 'pulse'

  // const getAnimationStyle = () => {
  //   switch (animation) {
  //     // case 'wave':
  //     //   return {
  //     //     backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
  //     //     backgroundSize: '200% 100%',
  //     //     animation: 'wave 1.5s infinite',
  //     //   };
  //     // case 'shimmer':
  //     //   return {
  //     //     backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
  //     //     backgroundSize: '200% 100%',
  //     //     animation: 'shimmer 1.5s infinite',
  //     //   };
  //     case 'pulse':
  //     default:
  //       return {
  //         animation: 'pulse 1.5s infinite',
  //       };
  //   }
  // };

  return (
    <div
      className={`animate-pulse bg-gray-200 ${getVariationStyle()} ${className}`}
      style={{
        width: width || '100%',
        height: height || (variation === 'text' ? '1em' : '100%')
        // ...getAnimationStyle(),
      }}
    ></div>
  )
}
