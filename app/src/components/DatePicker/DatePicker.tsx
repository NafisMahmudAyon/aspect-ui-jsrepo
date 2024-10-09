'use client'
import React, { useState } from 'react';

interface DatePickerProps {
  onChange: (dates: Date[]) => void;
  initialDates?: Date[];
  isRange?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({ onChange, initialDates = [], isRange = false }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>(initialDates);
  const [isOpen, setIsOpen] = useState(false);

  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const generateCalendar = () => {
    const days = daysInMonth(currentDate);
    const startDay = firstDayOfMonth(currentDate);
    const calendarDays = [];

    for (let i = 0; i < startDay; i++) {
      calendarDays.push(null);
    }

    for (let i = 1; i <= days; i++) {
      calendarDays.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }

    return calendarDays;
  };

  const handleDateClick = (date: Date) => {
    let newDates: Date[];
    if (isRange) {
      if (selectedDates.length === 0 || selectedDates.length === 2) {
        newDates = [date];
      } else {
        newDates = [selectedDates[0], date].sort((a, b) => a.getTime() - b.getTime());
      }
    } else {
      newDates = [date];
    }
    setSelectedDates(newDates);
    onChange(newDates);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 > 3) ? 0 : (day % 100 - day % 10 != 10) ? day % 10 : 0];
    return `${month} ${day}${suffix}, ${year}`;
  };

  const formatDateRange = (dates: Date[]): string => {
    if (dates.length === 0) return 'Select your date';
    if (dates.length === 1) return formatDate(dates[0]);
    return `${formatDate(dates[0])} - ${formatDate(dates[1])}`;
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-md text-black"
        value={formatDateRange(selectedDates)}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
        placeholder="Select your date"
      />
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white text-black border rounded-md shadow-lg">
          <div className="flex justify-between items-center p-2 border-b">
            <button onClick={handlePrevMonth} className="p-1">&lt;</button>
            <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
            <button onClick={handleNextMonth} className="p-1">&gt;</button>
          </div>
          <div className="grid grid-cols-7 gap-1 p-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-sm font-bold">{day}</div>
            ))}
            {generateCalendar().map((date, index) => (
              <button
                key={index}
                onClick={() => date && handleDateClick(date)}
                className={`
                  w-8 h-8 text-center rounded-full
                  ${date ? 'hover:bg-blue-100' : 'invisible'}
                  ${date && selectedDates.some(d => d.toDateString() === date.toDateString()) ? 'bg-blue-500 text-white' : ''}
                  ${date && isRange && selectedDates.length === 2 && date > selectedDates[0] && date < selectedDates[1] ? 'bg-blue-200' : ''}
                `}
              >
                {date ? date.getDate() : ''}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
