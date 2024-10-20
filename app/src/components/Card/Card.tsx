import React from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-lg bg-gray-400 shadow-md`}
    >
      {children}
    </div>
  )
}
