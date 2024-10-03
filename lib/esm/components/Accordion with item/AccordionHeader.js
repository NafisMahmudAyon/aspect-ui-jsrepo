import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AccordionHeader = ({ isOpen, onClick, children }) => {
    console.log(isOpen ? 'true' : 'false');
    return (_jsxs("div", { className: 'flex cursor-pointer items-center justify-between p-4', onClick: onClick, children: [_jsx("span", { children: children }), _jsx("span", { children: isOpen ? '-' : '+' })] }));
};
export default AccordionHeader;
