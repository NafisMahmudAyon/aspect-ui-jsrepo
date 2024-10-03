import { jsx as _jsx } from "react/jsx-runtime";
const AccordionContent = ({ isOpen, children, className }) => {
    return (_jsx("div", { className: `accordion-content overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 p-4' : 'invisible max-h-0 p-0'} ${className}`, children: children }));
};
export default AccordionContent;
