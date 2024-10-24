'use client'

import React, { ReactNode, useRef, useEffect } from 'react'
import { useDropdown } from './DropdownContext'

interface DropdownContentProps {
  children: ReactNode
  maxHeight?: string
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  children,
  maxHeight = '300px'
}) => {
  const { isOpen, positionClass } = useDropdown()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const selectedItem = contentRef.current.querySelector('[data-selected="true"]')
      if (selectedItem) {
        const container = contentRef.current
        const containerHeight = container.clientHeight
        const itemTop = (selectedItem as HTMLElement).offsetTop
        const itemHeight = (selectedItem as HTMLElement).offsetHeight

        container.scrollTop = itemTop - containerHeight / 2 + itemHeight / 2
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={`absolute z-10 ${positionClass}`}>
      <div
        ref={contentRef}
        className='rounded-md border border-primary-50 dark:border-primary-950 shadow-lg overflow-y-auto'
        style={{ maxHeight }}
      >
        {children}
      </div>
    </div>
  )
}
