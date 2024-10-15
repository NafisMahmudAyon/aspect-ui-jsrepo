import React, { ReactNode } from 'react';

export interface TimelineItemProps {
  date: string;
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  position?: 'left' | 'right';
}

interface TimelineProps {
  items: TimelineItemProps[];
  layout: 'single' | 'double';
  lineStyle?: 'solid' | 'dashed' | string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, icon, position = 'left' }) => {
  console.log(position);
  return (
    <div className={`flex ${position === 'right' ? 'flex-row-reverse' : ''} items-center mb-8`}>
      <div className={`w-1/2 ${position === 'right' ? 'pl-4' : 'pr-4'} ${position === 'left' ? 'text-right' : 'text-left'}`}>
        <div className="text-sm text-gray-500">{date}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2">{description}</div>
      </div>
      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
        {icon || <div className="w-3 h-3 bg-white rounded-full" />}
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ items, layout, lineStyle = 'solid' }) => {
  const lineClasses = `absolute left-1/2 transform -translate-x-1/2 w-px h-full ${lineStyle === 'dashed' ? 'border-l-2 border-dashed border-gray-300' : `bg-gray-300`
    }`;

  return (
    <div className="relative">
      <div className={lineClasses} style={lineStyle !== 'solid' && lineStyle !== 'dashed' ? { borderLeft: lineStyle } : {}}></div>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          position={layout === 'double' ? (index % 2 === 0 ? 'left' : 'right') : item.position ? item.position : 'left'}
        />
      ))}
    </div>
  );
};
