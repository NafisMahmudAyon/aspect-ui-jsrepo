// components/Timeline/TimelineItem.tsx
import React from 'react';

type TimelineItemProps = {
  children: React.ReactNode;
  position?: 'left' | 'right';
  icon?: React.ReactNode;
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  position = 'left',
  icon,
  ...rest
}) => {
  const isLeft = position === 'left';

  return (
    <div className="mb-8 flex justify-between items-center w-full" {...rest}>
      {/* Content wrapper */}
      <div className={`w-5/12 ${isLeft ? 'mr-auto' : 'ml-auto order-1'}`}>
        <div className="p-4 bg-white rounded-lg shadow">
          {children}
        </div>
      </div>

      {/* Dot */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white" /> */}
      <div className='z-10 absolute left-1/2 -translate-x-1/2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
        {icon || <div className='h-3 w-3 rounded-full bg-white' />}
      </div>
    </div>
  );
};
