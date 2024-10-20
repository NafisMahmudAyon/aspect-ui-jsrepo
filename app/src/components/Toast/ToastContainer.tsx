'use client'
import React, { useState, useEffect, useCallback } from 'react'

interface ToastAction {
  label: string
  onClick: () => void
}

interface ToastProps {
  message: string
  description?: string // New prop for description
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  onClose?: () => void
  action?: ToastAction
}

const Toast: React.FC<ToastProps> = ({
  message,
  description, // New prop
  type = 'info',
  duration = 3000,
  onClose,
  action
}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration === Infinity) return

    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onClose) onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500'
      case 'error':
        return 'bg-red-500'
      case 'warning':
        return 'bg-yellow-500'
      default:
        return 'bg-blue-500'
    }
  }

  return (
    <div
      className={`fixed bottom-4 right-4 rounded-md px-4 py-2 text-white ${getBackgroundColor()} shadow-lg transition-opacity duration-300`}
    >
      <div className='flex items-center justify-between'>
        <div>
          <div className='font-medium'>{message}</div>
          {description && ( // Render description if provided
            <div className='mt-1 text-sm opacity-90'>{description}</div>
          )}
        </div>
        {action && (
          <button
            onClick={action.onClick}
            className='ml-4 rounded-md bg-white px-2 py-1 text-sm font-medium text-black'
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  )
}

interface ToastOptions {
  message: string
  description?: string // New field for description
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  action?: ToastAction
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastOptions[]>([])

  const addToast = useCallback((options: ToastOptions) => {
    setToasts(prevToasts => [...prevToasts, options])
  }, [])

  const removeToast = useCallback((index: number) => {
    setToasts(prevToasts => prevToasts.filter((_, i) => i !== index))
  }, [])

  const promise = useCallback(
    <T,>(
      promise: Promise<T>,
      options: {
        loading: string
        loadingDescription?: string // New field for loading description
        success: string
        successDescription?: string // New field for success description
        error: string
        errorDescription?: string // New field for error description
      }
    ) => {
      const toastId = Date.now()
      addToast({
        message: options.loading,
        description: options.loadingDescription,
        type: 'info',
        duration: Infinity
      })

      promise
        .then(result => {
          removeToast(toastId)
          addToast({
            message: options.success,
            description: options.successDescription,
            type: 'success'
          })
          return result
        })
        .catch(error => {
          removeToast(toastId)
          addToast({
            message: options.error,
            description: options.errorDescription,
            type: 'error'
          })
          throw error
        })

      return promise
    },
    [addToast, removeToast]
  )

  const ToastContainer: React.FC = () => (
    <div className='fixed bottom-4 right-4 flex flex-col space-y-2'>
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          message={toast.message}
          description={toast.description}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(index)}
          action={toast.action}
        />
      ))}
    </div>
  )

  return { addToast, ToastContainer, promise }
}
