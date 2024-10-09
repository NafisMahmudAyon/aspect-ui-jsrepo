'use client'
import { DatePicker } from '@/app/src/components/DatePicker/DatePicker'
import React from 'react'

const DatePickerDemo = () => {
  const handleDateChange = (dates: Date[]) => {
    console.log('Selected date:', dates);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Date Picker Example</h1>
      <div className="w-64">
        <DatePicker onChange={handleDateChange} />
      </div>
      <div className="w-64">
        <DatePicker onChange={handleDateChange} isRange={true} />
      </div>
    </div>
  )
}

export default DatePickerDemo