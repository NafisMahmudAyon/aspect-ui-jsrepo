'use client'

import React, { ReactNode } from 'react';
import { useAccordion } from './AccordionContext';

interface AccordionHeaderProps {
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  iconEnabled?: boolean;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  activeIconClassName?: string;
  inactiveIconClassName?: string;
  activeIcon?: ReactNode;
  inactiveIcon?: ReactNode;
  disabled?: boolean;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  isOpen,
  onToggle,
  iconEnabled: headerIconEnabled,
  iconPosition: headerIconPosition,
  iconClassName: headerIconClassName,
  activeIconClassName: headerActiveIconClassName,
  inactiveIconClassName: headerInactiveIconClassName,
  activeIcon: headerActiveIcon,
  inactiveIcon: headerInactiveIcon,
  disabled = false,
}) => {
  const {
    iconEnabled: accordionIconEnabled,
    iconPosition: accordionIconPosition,
    iconClassName: accordionIconClassName,
    activeIconClassName: accordionActiveIconClassName,
    inactiveIconClassName: accordionInactiveIconClassName,
    activeIcon: accordionActiveIcon,
    inactiveIcon: accordionInactiveIcon,
  } = useAccordion();

  const iconEnabled = headerIconEnabled ?? accordionIconEnabled;
  const iconPosition = headerIconPosition ?? accordionIconPosition;
  const iconClassName = headerIconClassName ?? accordionIconClassName;
  const activeIconClassName = headerActiveIconClassName ?? accordionActiveIconClassName;
  const inactiveIconClassName = headerInactiveIconClassName ?? accordionInactiveIconClassName;
  const activeIcon = headerActiveIcon ?? accordionActiveIcon ?? '▲';
  const inactiveIcon = headerInactiveIcon ?? accordionInactiveIcon ?? '▼';

  const icon = isOpen ? activeIcon : inactiveIcon;
  const iconClass = `${iconClassName} ${isOpen ? activeIconClassName : inactiveIconClassName} transition-transform duration-300`;

  return (
    <button
      className={`w-full p-4 text-left flex items-center justify-between ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onToggle}
      disabled={disabled}
    >
      {iconEnabled && iconPosition === 'left' && (
        <span className={`${iconClass} ${isOpen ? 'rotate-180' : ''}`}>{icon}</span>
      )}
      <span className="flex-grow">{children}</span>
      {iconEnabled && iconPosition === 'right' && (
        <span className={`${iconClass} ${isOpen ? 'rotate-180' : ''}`}>{icon}</span>
      )}
    </button>
  );
};
