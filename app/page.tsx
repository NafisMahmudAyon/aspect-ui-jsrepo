// import Image from "next/image";

import { Image } from "./src";
import Accordion from "./src/components/Accordion/Accordion";
import AccordionContent from "./src/components/Accordion/AccordionContent";
import AccordionHeader from "./src/components/Accordion/AccordionHeader";

export default function Home() {
  const accordionItems = [
    {
      title: 'Accordion Item #1',
      content: (
        <div>
          <p>This is the content of Accordion Item #1.</p>
          <button className="mt-2 p-2 bg-blue-500 text-white rounded">Click me</button>
        </div>
      ),
    },
    {
      title: 'Accordion Item #2',
      content: <p>This is the content of Accordion Item #2 with just text.</p>,
    },
    {
      title: 'Accordion Item #3',
      content: (
        <div>
          <h3>Subheading for Item 3</h3>
          <ul className="list-disc ml-4">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <main className=" min-h-screen mx-auto py-24">
      {/* Accordion with multiple items open */}
      <h2 className="text-xl font-semibold mb-4">Multiple Open Accordions</h2>
      <Accordion items={accordionItems} multiple={true} />

      {/* Accordion with only one open at a time */}
      <h2 className="text-xl font-semibold mb-6 mt-10">Single Open Accordion</h2>
      <Accordion items={accordionItems} multiple={false} />

      {/* Multiple open accordions, active={2} to open the second one on load */}
      <h2 className="text-xl font-semibold mb-4">Multiple Open Accordions</h2>
      <Accordion items={accordionItems} multiple={true} active={2} />

      {/* Single open accordion, active={3} to open the third one on load */}
      <h2 className="text-xl font-semibold mb-6 mt-10">Single Open Accordion</h2>
      <Accordion items={accordionItems} multiple={false} active={3} />

      {/* Example with active outside the range (0 or invalid), no item will be opened */}
      <h2 className="text-xl font-semibold mb-6 mt-10">No Open Accordion on Invalid Active</h2>
      <Accordion items={accordionItems} multiple={false} active={7} />

      {/* 1st usage: Passing the items prop */}
      <h2 className="text-xl font-semibold mb-6 mt-10">1st usage: Passing the items prop</h2>
      <Accordion items={accordionItems} multiple={true} active={2} />

      {/* 2nd usage: Using AccordionHeader and AccordionContent with mapping */}
      <h2 className="text-xl font-semibold mb-6 mt-10">2nd usage: Using AccordionHeader and AccordionContent with mapping</h2>
      <Accordion multiple={false}>
        {accordionItems.map((item, index) => (
          <div key={index}>
            <AccordionHeader>{item.title}</AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </div>
        ))}
      </Accordion>

      {/* 3rd usage: Using direct AccordionHeader and AccordionContent */}
      <Accordion multiple={false}>
        <AccordionHeader>Header 1</AccordionHeader>
        <AccordionContent>Content 1</AccordionContent>
        <AccordionHeader>Header 2</AccordionHeader>
        <AccordionContent>Content 2</AccordionContent>
        <AccordionHeader>Header 3</AccordionHeader>
        <AccordionContent>Content 3</AccordionContent>
      </Accordion>

    </main>
  );
}
