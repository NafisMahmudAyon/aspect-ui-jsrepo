'use client'
import React, { useState, ReactNode } from 'react'

type TooltipDirection = 'top' | 'right' | 'bottom' | 'left'

interface TooltipProps {
  children: [
    React.ReactElement<TooltipActionProps>,
    React.ReactElement<TooltipContentProps>
  ]
  direction?: TooltipDirection
  showOnClick?: boolean
}

interface TooltipActionProps {
  children: ReactNode
}

interface TooltipContentProps {
  children: ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  direction = 'top',
  showOnClick = false
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => setIsVisible(true)
  const hideTooltip = () => setIsVisible(false)

  const handleClick = () => {
    if (showOnClick) {
      setIsVisible(!isVisible)
    }
  }

  const getTooltipStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: 'rgba(0, 0, 0, 1)',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      zIndex: 10,
      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
    }

    switch (direction) {
      case 'top':
        return {
          ...baseStyle,
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)'
        }
      case 'right':
        return {
          ...baseStyle,
          left: 'calc(100% + 10px)',
          top: '50%',
          transform: 'translateY(-50%)'
        }
      case 'bottom':
        return {
          ...baseStyle,
          top: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)'
        }
      case 'left':
        return {
          ...baseStyle,
          right: 'calc(100% + 10px)',
          top: '50%',
          transform: 'translateY(-50%)'
        }
    }
  }

  const getArrowStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      width: '0',
      height: '0',
      border: '5px solid transparent'
    }

    switch (direction) {
      case 'top':
        return {
          ...baseStyle,
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderTopColor: 'rgba(255, 255, 255, 1)'
        }
      case 'right':
        return {
          ...baseStyle,
          left: '-10px',
          top: '50%',
          transform: 'translateY(-50%)',
          borderRightColor: 'rgba(255, 255, 255, 1)'
        }
      case 'bottom':
        return {
          ...baseStyle,
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderBottomColor: 'rgba(255, 255, 255, 1)'
        }
      case 'left':
        return {
          ...baseStyle,
          right: '-10px',
          top: '50%',
          transform: 'translateY(-50%)',
          borderLeftColor: 'rgba(255, 255, 255, 1)'
        }
    }
  }

  const [actionElement, contentElement] = React.Children.toArray(children) as [
    React.ReactElement<TooltipActionProps>,
    React.ReactElement<TooltipContentProps>
  ]

  return (
    <div className='relative inline-block'>
      <div
        onMouseEnter={showOnClick ? undefined : showTooltip}
        onMouseLeave={showOnClick ? undefined : hideTooltip}
        onClick={handleClick}
      >
        {actionElement}
      </div>
      {isVisible && (
        <div style={getTooltipStyle()}>
          {contentElement}
          <div style={getArrowStyle()}></div>
        </div>
      )}
    </div>
  )
}

const TooltipAction: React.FC<TooltipActionProps> = ({ children }) => {
  return <>{children}</>
}

const TooltipContent: React.FC<TooltipContentProps> = ({ children }) => {
  return <>{children}</>
}

export { Tooltip, TooltipAction, TooltipContent }
