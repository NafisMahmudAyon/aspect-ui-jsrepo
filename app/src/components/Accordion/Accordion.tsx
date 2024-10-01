'use client'

import { useState, useEffect, ReactNode, Children, isValidElement, cloneElement } from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items?: AccordionItem[]; // Optional 'items' prop for array of accordion items
  multiple?: boolean;
  active?: number;
  children?: ReactNode; // Allow for direct child components as an alternative
}

const Accordion: React.FC<AccordionProps> = ({ items, multiple = false, active = 0, children }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (active > 0 && items && active <= items.length) {
      setOpenIndexes([active - 1]);
    }
  }, [active, items?.length]);

  const handleToggle = (index: number) => {
    if (multiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes[0] === index ? [] : [index]);
    }
  };

  // Render using 'items' if provided
  if (items) {
    return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <AccordionHeader
              isOpen={openIndexes.includes(index)}
              onClick={() => handleToggle(index)}
            >
              {item.title}
            </AccordionHeader>
            <AccordionContent isOpen={openIndexes.includes(index)}>
              {item.content}
            </AccordionContent>
          </div>
        ))}
      </div>
    );
  }

  // Render using children if no 'items' are provided
  let headerIndex = -1;
  const processedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    // Check if the element is of type AccordionHeader or AccordionContent
    if (child.type === AccordionHeader || child.type === AccordionContent) {
      if (child.type === AccordionHeader) headerIndex++;

      // Ensure that we pass `isOpen` and `onClick` props
      return cloneElement(child, {
        isOpen: openIndexes.includes(headerIndex),
        onClick: () => handleToggle(headerIndex),
      } as any); // Use `as any` to bypass the typing issue for now
    }

    return child;
  });

  return <div className="space-y-4">{processedChildren}</div>;
};

export default Accordion;
