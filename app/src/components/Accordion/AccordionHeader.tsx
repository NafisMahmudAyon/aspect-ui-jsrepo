// components/AccordionHeader.tsx
import { ReactNode } from 'react'

export interface AccordionHeaderProps {
  isOpen?: boolean
  onClick?: () => void
  children?: ReactNode
  className?: string
  iconEnabled?: boolean
  activeIcon?: ReactNode
  inactiveIcon?: ReactNode
  iconClassName?: string
  activeIconClassName?: string
  inactiveIconClassName?: string
  iconPosition?: 'left' | 'right'
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  isOpen,
  onClick,
  children,
  className,
  iconEnabled,
  activeIcon,
  inactiveIcon,
  iconClassName,
  activeIconClassName,
  inactiveIconClassName,
  iconPosition = 'left'
}) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-between gap-3 p-4 ${className}`}
      onClick={onClick}
    >
      {iconEnabled && iconPosition === 'left' && (
        <span
          className={`${iconClassName} ${isOpen ? activeIconClassName : inactiveIconClassName}`}
        >
          {isOpen
            ? activeIcon
              ? activeIcon
              : '-'
            : inactiveIcon
              ? inactiveIcon
              : '+'}
        </span>
      )}
      <span className={`flex-1`}>{children}</span>
      {iconEnabled && iconPosition === 'right' && (
        <span
          className={`${iconClassName} ${isOpen ? activeIconClassName : inactiveIconClassName}`}
        >
          {isOpen
            ? activeIcon
              ? activeIcon
              : '-'
            : inactiveIcon
              ? inactiveIcon
              : '+'}
        </span>
      )}
    </div>
  )
}

export default AccordionHeader
