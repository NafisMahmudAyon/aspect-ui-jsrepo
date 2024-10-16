import React, { ReactNode } from 'react';

export interface TimelineItemProps {
  date: string;
  title: string;
  description: ReactNode;
  icon?: ReactNode;
}

interface TimelineProps {
  items: TimelineItemProps[];
  position: 'left' | 'right';
  lineStyle?: 'solid' | 'dashed' | string;
}

const TimelineItem: React.FC<TimelineItemProps & { position: 'left' | 'right' }> = ({ date, title, description, icon, position }) => {
  return (
    <div className={`flex ${position === 'right' ? '' : 'flex-row-reverse'} items-start mb-8`}>
      <div className={`flex-1 ${position == 'left' ? "text-start" : "text-end" } ${position === 'right' ? 'pr-4' : 'pl-4'}`}>
        <div className="text-sm text-gray-500">{date}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2">{description}</div>
      </div>
      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
        {icon || <div className="w-3 h-3 bg-white rounded-full" />}
      </div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ items, position, lineStyle = 'solid' }) => {
  const lineClasses = `absolute ${position === 'left' ? 'left-4' : 'right-4'} top-0 w-px h-full ${lineStyle === 'dashed' ? 'border-l-2 border-dashed border-gray-300' : 'bg-gray-300'
    }`;

  return (
    <div className="relative">
      <div className={lineClasses} style={lineStyle !== 'solid' && lineStyle !== 'dashed' ? { borderLeft: lineStyle } : {}}></div>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          position={position}
        />
      ))}
    </div>
  );
};
