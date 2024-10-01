// import Image from "next/image";

import { Image } from './src'
import { AccordionDetails } from './src/Accordion'
import Accordion from './src/components/Accordion/Accordion'
import AccordionContent from './src/components/Accordion/AccordionContent'
import AccordionHeader from './src/components/Accordion/AccordionHeader'
import AccordionItem from './src/components/Accordion/AccordionItem'

export default function Home() {
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
    <main className='mx-auto min-h-screen py-24'>
      {/* Accordion with multiple items open */}
      <h2 className='mb-4 text-xl font-semibold'>Multiple Open Accordions</h2>
      <Accordion items={accordionItems} multiple={true} active={2} />

      <Accordion
        items={accordionItems}
        multiple={true}
        active={2}
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

      {/* Accordion with only one open at a time */}
      {/* <h2 className="text-xl font-semibold mb-6 mt-10">Single Open Accordion</h2>
      <Accordion items={accordionItems} multiple={false} /> */}

      {/* Accordion with multiple items open */}
      {/* <h2 className="text-xl font-semibold mb-4">Multiple Open Accordions</h2>
      <Accordion items={accordionItems} multiple={true} /> */}

      {/* Accordion with only one open at a time */}
      {/* <h2 className="text-xl font-semibold mb-6 mt-10">Single Open Accordion</h2>
      <Accordion items={accordionItems} multiple={false} /> */}

      {/* Multiple open accordions, active={2} to open the second one on load */}
      {/* <h2 className="text-xl font-semibold mb-4">Multiple Open Accordions</h2>
      <Accordion items={accordionItems} multiple={true} active={2} /> */}

      {/* Single open accordion, active={3} to open the third one on load */}
      {/* <h2 className="text-xl font-semibold mb-6 mt-10">Single Open Accordion</h2>
      <Accordion items={accordionItems} multiple={false} active={3} /> */}

      {/* Example with active outside the range (0 or invalid), no item will be opened */}
      {/* <h2 className="text-xl font-semibold mb-6 mt-10">No Open Accordion on Invalid Active</h2>
      <Accordion items={accordionItems} multiple={false} active={7} /> */}

      {/* 1st usage: Passing the items prop */}
      {/* <h2 className="text-xl font-semibold mb-6 mt-10">1st usage: Passing the items prop</h2>
      <Accordion items={accordionItems} multiple={true} active={2} /> */}

      {/* 2nd usage: Using AccordionHeader and AccordionContent with mapping */}
      {/* <h2 className="text-xl font-semibold mb-6 mt-10">2nd usage: Using AccordionHeader and AccordionContent with mapping</h2>
      <Accordion multiple={false}>
        {accordionItems.map((item, index) => (
          <div key={index}>
            <AccordionHeader>{item.title}</AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </div>
        ))}
      </Accordion> */}

      {/* 3rd usage: Using direct AccordionHeader and AccordionContent */}
      {/* <Accordion multiple={false}>
        <AccordionHeader>Header 1</AccordionHeader>
        <AccordionContent>Content 1</AccordionContent>
        <AccordionHeader>Header 2</AccordionHeader>
        <AccordionContent>Content 2</AccordionContent>
        <AccordionHeader>Header 3</AccordionHeader>
        <AccordionContent>Content 3</AccordionContent>
      </Accordion> */}

      {/* Testing */}
      {/* <h2>Testing</h2>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>Header 1</AccordionHeader>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Header 2</AccordionHeader>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion multiple={true}>
        <AccordionItem>
          <AccordionHeader>Title 1</AccordionHeader>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Title 2</AccordionHeader>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </main>
  )
}
