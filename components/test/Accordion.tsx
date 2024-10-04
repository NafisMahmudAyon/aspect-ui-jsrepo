import {Accordion} from '@/app/src/components/Accordion'
import React from 'react'

const AccordionDemo = () => {
  interface ItemProps {
    title: string
    content: React.ReactNode
  }
  const accordionItems: ItemProps[] = [
    {
      title: 'Accordion Item #1',
      content: (
        <div>
          <p>This is the content of Accordion Item #1.</p>
          <button className='mt-2 rounded bg-blue-500 p-2 text-white'>
            Click me
          </button>
        </div>
      )
    },
    {
      title: 'Accordion Item #2',
      content: <p>This is the content of Accordion Item #2 with just text.</p>
    },
    {
      title: 'Accordion Item #3',
      content: (
        <div>
          <h3>Subheading for Item 3</h3>
          <ul className='ml-4 list-disc'>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
      )
    }
  ]
  return (
    <div>
      <h2 className='mb-4 text-xl font-semibold'>Multiple Open Accordions</h2>
      <Accordion items={accordionItems} multiple={false} active={2} />

      <Accordion
        items={accordionItems}
        multiple={true}
        active={3}
        className='bg-red-500'
        contentClassName='bg-blue-500'
        headerClassName='bg-green-500'
        itemClassName='bg-yellow-500'
        iconClassName='bg-purple-500'
        activeIconClassName='bg-orange-500'
        inactiveIconClassName='bg-pink-500'
        iconPosition='left'
        iconEnabled={true}
      />
    </div>
  )
}

export default AccordionDemo