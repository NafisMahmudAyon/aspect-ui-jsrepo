import React from 'react'
import { Timeline, TimelineItemProps } from '@/app/src/components/Timeline'
import { TimelineItem } from '@/app/src/components/Timeline/TimelineItem'
// import { FaBirthdayCake, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const TimelineDemo: React.FC = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      date: '1990-05-15',
      title: 'Born',
      description: <div className='text-red-800'>Hello</div>,
      icon: 'A'
    },
    {
      date: '2012-06-30',
      title: 'Graduated University',
      description: 'Received a degree in Computer Science',
      icon: 'B'
    },
    {
      date: '2013-01-15',
      title: 'Started First Job',
      description: 'Joined a tech startup as a junior developer',
      icon: 'C'
    }
  ]

  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-4 text-2xl font-bold'>My Life Timeline</h1>
      {/* <Timeline items={timelineItems} lineStyle='dashed' position='left' />
      <Timeline items={timelineItems} lineStyle='dashed' position='right' /> */}
      <div className="p-8">
        <Timeline position="left">
          <TimelineItem>
            <h3 className="font-bold text-primary-500">First Event</h3>
            <p className='text-primary-500'>This is the first timeline item</p>
          </TimelineItem>

          <TimelineItem>
            <h3 className="font-bold text-primary-500">Second Event</h3>
            <p className='text-primary-500'>This is the second timeline item</p>
          </TimelineItem>

          <TimelineItem icon="A">
            <h3 className="font-bold text-primary-500">Third Event</h3>
            <p className='text-primary-500'>This is the third timeline item</p>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}

export default TimelineDemo
