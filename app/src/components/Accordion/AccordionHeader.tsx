import { ReactNode } from 'react';

interface AccordionHeaderProps {
  isOpen: boolean;
  onClick: () => void;
  children?: ReactNode | string; // Allow header content to be passed as children
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ isOpen, onClick, children }) => {
  return (
    <div
      className="p-4 cursor-pointer flex justify-between items-center"
      onClick={onClick}
    >
      <span>{children}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
  );
};

export default AccordionHeader;
