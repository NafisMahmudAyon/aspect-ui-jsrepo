'use client'

import React, { ReactNode } from 'react'
import { useAccordion } from './AccordionContext'
import { cn } from '../../utils/cn'

interface AccordionHeaderProps {
  children: ReactNode
  isOpen?: boolean
  onToggle?: () => void
  iconEnabled?: boolean
  iconPosition?: 'left' | 'right'
  iconClassName?: string
  activeIconClassName?: string
  activeIcon?: ReactNode
  inactiveIcon?: ReactNode
  disabled?: boolean
  className?: string
  labelClassName?: string
  activeLabelClassName?: string
  headerClassName?: string
  activeHeaderClassName?: string
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  isOpen,
  onToggle,
  className = '',
  iconEnabled: headerIconEnabled,
  iconPosition: headerIconPosition,
  iconClassName: headerIconClassName,
  activeIconClassName: headerActiveIconClassName,
  activeIcon: headerActiveIcon,
  inactiveIcon: headerInactiveIcon,
  labelClassName: headerLabelClassName,
  activeLabelClassName: headerActiveLabelClassName,
  headerClassName: headerHeaderClassName,
  activeHeaderClassName: headerActiveHeaderClassName,
  disabled = false
}) => {
  const {
    iconEnabled: accordionIconEnabled,
    iconPosition: accordionIconPosition,
    iconClassName: accordionIconClassName,
    activeIconClassName: accordionActiveIconClassName,
    activeIcon: accordionActiveIcon,
    inactiveIcon: accordionInactiveIcon,
    labelClassName: accordionLabelClassName,
    activeLabelClassName: accordionActiveLabelClassName,
    headerClassName: accordionHeaderClassName,
    activeHeaderClassName: accordionActiveHeaderClassName
  } = useAccordion()

  const iconEnabled = headerIconEnabled ?? accordionIconEnabled
  const iconPosition = headerIconPosition ?? accordionIconPosition
  const iconClassName = headerIconClassName ?? accordionIconClassName
  const activeIconClassName =
    headerActiveIconClassName ?? accordionActiveIconClassName
  const activeIcon = headerActiveIcon ?? accordionActiveIcon ?? '▲'
  const inactiveIcon = headerInactiveIcon ?? accordionInactiveIcon ?? '▼'

  const icon = isOpen ? activeIcon : inactiveIcon
  const iconClass = `${iconClassName} ${isOpen ? activeIconClassName : ''} transition-transform duration-300`

  const labelClassName = headerLabelClassName ?? accordionLabelClassName
  const activeLabelClassName =
    headerActiveLabelClassName ?? accordionActiveLabelClassName
  const headerClassName = headerHeaderClassName ?? accordionHeaderClassName
  const activeHeaderClassName =
    headerActiveHeaderClassName ?? accordionActiveHeaderClassName

  const labelClass = `${labelClassName} ${isOpen ? activeLabelClassName : ''}`
  const headerClass = `${headerClassName} ${isOpen ? activeHeaderClassName : ''}`
  return (
    <button
      className={cn(
        headerClass,
        'flex w-full items-center justify-between p-4 text-left transition-all duration-150 ease-in-out',
        disabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer hover:bg-primary-300 dark:hover:bg-primary-950',
        isOpen
          ? 'bg-primary-300 text-primary-950 dark:bg-primary-950 dark:text-primary-100'
          : 'bg-primary-200 text-primary-950 dark:bg-primary-900 dark:text-primary-50',
        className
      )}
      onClick={onToggle}
      disabled={disabled}
    >
      {iconEnabled && iconPosition === 'left' && (
        <span className={`${iconClass}`}>{icon}</span>
      )}
      <span className={`${labelClass} flex-grow`}>{children}</span>
      {iconEnabled && iconPosition === 'right' && (
        <span className={`${iconClass}`}>{icon}</span>
      )}
    </button>
  )
}
