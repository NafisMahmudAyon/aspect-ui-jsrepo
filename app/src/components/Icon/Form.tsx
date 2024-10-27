import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  rest?: React.SVGProps<SVGSVGElement>
  size?: number
}

export const Mail = ({ className = '', size = 24, ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d="m3.549 6.733 4.218 2.63c2.059 1.282 3.088 1.923 4.233 1.923s2.174-.642 4.232-1.925l4.23-2.638M11 20h2c3.771 0 5.657 0 6.828-1.172S21 15.771 21 12s0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12s0 5.657 1.172 6.828S7.229 20 11 20"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const Right = ({ className = '', size = 24, ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d="m9.004 5.996 6 6L9 18"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const Up = ({ className = '', size = 24, ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d="m5.996 14.996 6-6L18 15"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const Down = ({ className = '', size = 24, ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d="m18 9-6 6-6.004-6.004"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
