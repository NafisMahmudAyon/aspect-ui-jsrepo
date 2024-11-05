// components/Timeline/Timeline.tsx
import React from 'react';
import { TimelineItem } from './TimelineItem';

type TimelineProps = {
  children: React.ReactNode;
  position?: 'left' | 'right' | 'mixed';
  className?: string;
  lineClassName?: string;
};

export const Timeline: React.FC<TimelineProps> = ({
  children,
  position = 'left'
}) => {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gray-200"></div>
      <div className="relative">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<any>(child) && child.type === TimelineItem) {
            return React.cloneElement(child, {
              position: position === 'mixed'
                ? index % 2 === 0 ? 'left' : 'right'
                : position
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};
