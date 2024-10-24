import React from 'react';
interface DatePickerProps {
    onChange: (dates: Date[]) => void;
    initialDates?: Date[];
    isRange?: boolean;
    shape?: 'rounded' | 'square' | 'circle';
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
