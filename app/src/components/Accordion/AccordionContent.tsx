import { ReactNode } from 'react';

interface AccordionContentProps {
  isOpen: boolean;
  children?: ReactNode; // Allow content to be passed as children
}

const AccordionContent: React.FC<AccordionContentProps> = ({ isOpen, children }) => {
  return (
    <div className={`p-4 ${isOpen ? 'block' : 'hidden'}`}>
      {children}
    </div>
  );
};

export default AccordionContent;
