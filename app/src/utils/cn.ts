import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  cacheSize: 1000,
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'body1',
            'body2',
            'caption',
            'p',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'display1',
            'display2'
          ]
        }
      ],
      'text-color': [
        {
          text: [
            'primary-50',
            'primary-100',
            'primary-200',
            'primary-300',
            'primary-400',
            'primary-500',
            'primary-600',
            'primary-700',
            'primary-800',
            'primary-900',
            'primary-950',
            'success-50',
            'success-100',
            'success-200',
            'success-300',
            'success-400',
            'success-500',
            'success-600',
            'success-700',
            'success-800',
            'success-900',
            'success-950',
            'warning-50',
            'warning-100',
            'warning-200',
            'warning-300',
            'warning-400',
            'warning-500',
            'warning-600',
            'warning-700',
            'warning-800',
            'warning-900',
            'warning-950',
            'secondary-50',
            'secondary-100',
            'secondary-200',
            'secondary-300',
            'secondary-400',
            'secondary-500',
            'secondary-600',
            'secondary-700',
            'secondary-800',
            'secondary-900',
            'secondary-950',
            'info-50',
            'info-100',
            'info-200',
            'info-300',
            'info-400',
            'info-500',
            'info-600',
            'info-700',
            'info-800',
            'info-900',
            'info-950',
            'error-50',
            'error-100',
            'error-200',
            'error-300',
            'error-400',
            'error-500',
            'error-600',
            'error-700',
            'error-800',
            'error-900',
            'error-950'
          ]
        }
      ],
      'bg-color': [
        {
          bg: [
            'primary-50',
            'primary-100',
            'primary-200',
            'primary-300',
            'primary-400',
            'primary-500',
            'primary-600',
            'primary-700',
            'primary-800',
            'primary-900',
            'primary-950',
            'success-50',
            'success-100',
            'success-200',
            'success-300',
            'success-400',
            'success-500',
            'success-600',
            'success-700',
            'success-800',
            'success-900',
            'success-950',
            'warning-50',
            'warning-100',
            'warning-200',
            'warning-300',
            'warning-400',
            'warning-500',
            'warning-600',
            'warning-700',
            'warning-800',
            'warning-900',
            'warning-950',
            'secondary-50',
            'secondary-100',
            'secondary-200',
            'secondary-300',
            'secondary-400',
            'secondary-500',
            'secondary-600',
            'secondary-700',
            'secondary-800',
            'secondary-900',
            'secondary-950',
            'info-50',
            'info-100',
            'info-200',
            'info-300',
            'info-400',
            'info-500',
            'info-600',
            'info-700',
            'info-800',
            'info-900',
            'info-950',
            'error-50',
            'error-100',
            'error-200',
            'error-300',
            'error-400',
            'error-500',
            'error-600',
            'error-700',
            'error-800',
            'error-900',
            'error-950'
          ]
        }
      ],
      shadow: ['small', 'default', 'medium', 'large', 'xLarge', '2xLarge']
    }
  }
})

const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}

export { cn }
