'use client'
import React, { useState, useEffect } from 'react'

interface DatePickerProps {
  onChange: (dates: Date[]) => void
  initialDates?: Date[]
  isRange?: boolean
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  initialDates = [],
  isRange = false
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<Date[]>(initialDates)
  const [isOpen, setIsOpen] = useState(false)
  const [years, setYears] = useState<number[]>([])

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYears(Array.from({ length: 201 }, (_, i) => currentYear - 100 + i))
  }, [])

  const daysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const generateCalendar = () => {
    const days = daysInMonth(currentDate)
    const startDay = firstDayOfMonth(currentDate)
    const calendarDays = []

    for (let i = 0; i < startDay; i++) {
      calendarDays.push(null)
    }

    for (let i = 1; i <= days; i++) {
      calendarDays.push(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      )
    }

    return calendarDays
  }

  const handleDateClick = (date: Date) => {
    let newDates: Date[] = []

    if (isRange) {
      if (selectedDates.length === 0) {
        newDates = [date]
      } else if (selectedDates.length === 1) {
        newDates = [selectedDates[0], date].sort((a, b) => a.getTime() - b.getTime())
      } else if (selectedDates.length === 2) {
        if (date.getTime() === selectedDates[0].getTime() || date.getTime() === selectedDates[1].getTime()) {
          newDates = []
        } else if (date > selectedDates[0] && date < selectedDates[1]) {
          newDates = [selectedDates[0], date]
        } else if (date < selectedDates[0]) {
          newDates = [date, selectedDates[1]]
        } else {
          newDates = [selectedDates[0], date]
        }
      }
    } else {
      newDates = [date]
    }

    setSelectedDates(newDates)
    onChange(newDates)
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    )
  }

  const formatDate = (date: Date): string => {
    const day = date.getDate()
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const suffix = ['th', 'st', 'nd', 'rd'][
      day % 10 > 3 ? 0 : (day % 100) - (day % 10) != 10 ? day % 10 : 0
    ]
    return `${month} ${day}${suffix}, ${year}`
  }

  const formatDateRange = (dates: Date[]): string => {
    if (dates.length === 0) return 'Select your date'
    if (dates.length === 1) return formatDate(dates[0])
    if (isRange && dates.length === 2) {
      return `${formatShortDate(dates[0])} - ${formatShortDate(dates[1])}`
    }
    return formatDate(dates[0])
  }

  const formatShortDate = (date: Date): string => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')}, ${date.getFullYear()}`
  }

  return (
    <div className='relative'>
      <input
        type='text'
        className='w-full rounded-md border px-4 py-2 text-black'
        value={formatDateRange(selectedDates)}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
        placeholder='Select your date'
      />
      {isOpen && (
        <div className='absolute left-0 top-full mt-2 rounded-md border border-primary-500 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 shadow-lg'>
          <div className='flex items-center justify-between border-b border-primary-500 p-2'>
            <button onClick={handlePrevMonth} className='p-1'>
              &lt;
            </button>
            <div className='flex'>
              <select
                value={currentDate.getMonth()}
                onChange={(e) => setCurrentDate(new Date(currentDate.getFullYear(), parseInt(e.target.value), 1))}
                className='mr-2 bg-transparent'
              >
                {monthNames.map((month, index) => (
                  <option key={month} value={index}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={currentDate.getFullYear()}
                onChange={(e) => setCurrentDate(new Date(parseInt(e.target.value), currentDate.getMonth(), 1))}
                className='bg-transparent'
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={handleNextMonth} className='p-1'>
              &gt;
            </button>
          </div>
          <div className='grid grid-cols-7 gap-1 p-2'>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className='text-center text-sm font-bold'>
                {day}
              </div>
            ))}
            {generateCalendar().map((date, index) => (
              <button
                key={index}
                onClick={() => date && handleDateClick(date)}
                className={`h-8 w-8 rounded-full text-center ${date ? 'hover:bg-primary-200 dark:hover:bg-primary-800' : 'invisible'} ${date && (date.getDate() == currentDate.getDate()) ? "bg-primary-200 dark:bg-primary-800" : ""} ${date && selectedDates.some(d => d.toDateString() === date.toDateString()) ? 'bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-primary-100' : ''} ${date && isRange && selectedDates.length === 2 && date > selectedDates[0] && date < selectedDates[1] ? 'bg-primary-50 dark:bg-primary-500 text-primary-300 dark:text-primary-800' : ''}`}
              >
                {date ? date.getDate() : ''}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
