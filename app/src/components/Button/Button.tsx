import React, { ReactNode } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'link'
    | 'outline'
    | 'ghost'
    | 'icon'
    | 'withIcon'
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children?: ReactNode
  icon?: ReactNode
  className?: string
  iconClassName?: string
  iconPosition?: 'left' | 'right'
  isFab?: boolean
  position?: 'bottom-right' | 'bottom-left'
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  children,
  icon,
  iconPosition = 'left',
  className = '',
  iconClassName = '',
  isFab = false,
  position = 'bottom-right',
  ...rest
}) => {
  const baseStyles =
    `${variant== 'link' ? "" : "inline-flex gap-2 items-center justify-center"} font-medium rounded-md focus:outline-none transition ease-in-out duration-200`

  const sizeStyles = {
    small: `${variant == 'link' ? "" : "px-3 py-2"} text-sm`,
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    fab: 'w-16 h-16 p-0 rounded-full'
  }

  const variantStyles = {
    primary: `
      bg-primary-500 hover:bg-primary-600 text-primary-950 dark:text-primary-100 focus-visible:ring-1 focus-visible:ring-primary-900 dark:focus-visible:ring-primary-100 focus-visible:outline-none
    `,
    secondary: `
      bg-secondary-500 hover:bg-secondary-600 text-secondary-950 dark:text-secondary-100 focus-visible:ring-1 focus-visible:ring-secondary-900 dark:focus-visible:ring-secondary-100 focus-visible:outline-none
    `,
    success: `
      bg-success-500 hover:bg-success-600 text-success-950 dark:text-success-100 focus-visible:ring-1 focus-visible:ring-success-900 dark:focus-visible:ring-success-100 focus-visible:outline-none
    `,
    warning: `
      bg-warning-500 hover:bg-warning-600 text-warning-950 dark:text-warning-100 focus-visible:ring-1 focus-visible:ring-warning-900 dark:focus-visible:ring-warning-100 focus-visible:outline-none
    `,
    link: `
      text-primary-950 dark:text-primary-100 hover:underline underline-offset-2 focus-visible:ring-1 focus-visible:ring-primary-900 dark:focus-visible:ring-primary-100 focus-visible:outline-none
    `,
    outline: `
      border border-primaryColor text-primaryColor hover:bg-primaryColor-light focus:ring-primaryColor
      dark:border-primaryColor-dark dark:text-primaryColor-dark dark:hover:bg-primaryColor-hoverDark
    `,
    ghost: `
      bg-transparent hover:bg-accentColor focus:ring-primaryColor
      dark:hover:bg-accentColor-dark
    `,
    icon: `
      p-0 rounded-full bg-transparent hover:bg-accentColor focus:ring-primaryColor
      dark:hover:bg-accentColor-dark
    `,
    withIcon: `
      bg-primaryColor text-white hover:bg-primaryColor-hover focus:ring-primaryColor
      dark:bg-primaryColor-dark dark:hover:bg-primaryColor-hoverDark dark:focus:ring-primaryColor-hoverDark
      inline-flex items-center
    `
  }

  const fabPositionStyles = {
    'bottom-right': 'fixed bottom-4 right-4',
    'bottom-left': 'fixed bottom-4 left-4'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${loading ? 'relative' : ''} ${isFab ? fabPositionStyles[position] : ''} ${className} font-sans`}
      {...rest}
    >
      {loading && (
        <span className=''>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12zm2 5.291A7.96 7.96 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938z" /></svg>
        </span>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className={`${iconClassName}`}>{icon}</span>
      )}
      {!loading && children}
      {icon && iconPosition === 'right' && !loading && (
        <span className={`${iconClassName}`}>{icon}</span>
      )}
    </button>
  )
}
