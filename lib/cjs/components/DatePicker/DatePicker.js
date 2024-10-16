'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export const DatePicker = ({ onChange, initialDates = [], isRange = false }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState(initialDates);
    const [isOpen, setIsOpen] = useState(false);
    const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
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
    const handleDateClick = (date) => {
        let newDates;
        if (isRange) {
            if (selectedDates.length === 0 || selectedDates.length === 2) {
                newDates = [date];
            }
            else {
                newDates = [selectedDates[0], date].sort((a, b) => a.getTime() - b.getTime());
            }
        }
        else {
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
    const formatDate = (date) => {
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 > 3) ? 0 : (day % 100 - day % 10 != 10) ? day % 10 : 0];
        return `${month} ${day}${suffix}, ${year}`;
    };
    const formatDateRange = (dates) => {
        if (dates.length === 0)
            return 'Select your date';
        if (dates.length === 1)
            return formatDate(dates[0]);
        return `${formatDate(dates[0])} - ${formatDate(dates[1])}`;
    };
    return (_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", className: "w-full px-4 py-2 border rounded-md text-black", value: formatDateRange(selectedDates), onClick: () => setIsOpen(!isOpen), readOnly: true, placeholder: "Select your date" }), isOpen && (_jsxs("div", { className: "absolute top-full left-0 mt-2 bg-white text-black border rounded-md shadow-lg", children: [_jsxs("div", { className: "flex justify-between items-center p-2 border-b", children: [_jsx("button", { onClick: handlePrevMonth, className: "p-1", children: "<" }), _jsxs("span", { children: [monthNames[currentDate.getMonth()], " ", currentDate.getFullYear()] }), _jsx("button", { onClick: handleNextMonth, className: "p-1", children: ">" })] }), _jsxs("div", { className: "grid grid-cols-7 gap-1 p-2", children: [['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (_jsx("div", { className: "text-center text-sm font-bold", children: day }, day))), generateCalendar().map((date, index) => (_jsx("button", { onClick: () => date && handleDateClick(date), className: `
                  w-8 h-8 text-center rounded-full
                  ${date ? 'hover:bg-blue-100' : 'invisible'}
                  ${date && selectedDates.some(d => d.toDateString() === date.toDateString()) ? 'bg-blue-500 text-white' : ''}
                  ${date && isRange && selectedDates.length === 2 && date > selectedDates[0] && date < selectedDates[1] ? 'bg-blue-200' : ''}
                `, children: date ? date.getDate() : '' }, index)))] })] }))] }));
};
