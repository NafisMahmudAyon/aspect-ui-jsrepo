import React, { ReactNode } from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
  variant?: 'start' | 'center' | 'end' | 'full';
  children?: ReactNode;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  size = 'md',
  color = 'gray-200',
  variant = 'full',
  children,
}) => {
  const sizeStyles = {
    sm: 'border-[1px]',
    md: 'border-[2px]',
    lg: 'border-[3px]',
    xl: 'border-[4px]',
    '2xl': 'border-[6px]',
  };

  const baseStyles = `border-${color} ${sizeStyles[size]}`;

  const orientationStyles = orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l';

  const variantStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    full: '',
  };

  if (!children || variant === 'full') {
    return <div className={`${baseStyles} ${orientationStyles}`}></div>;
  }

  return (
    <div className={`flex items-center ${variantStyles[variant]}`}>
      {variant !== 'start' && <span className={`${baseStyles} ${orientationStyles} flex-grow`}></span>}
      <span className="px-3 text-sm text-gray-500">{children}</span>
      {variant !== 'end' && <span className={`${baseStyles} ${orientationStyles} flex-grow`}></span>}
    </div>
  );
};

