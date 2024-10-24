import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
import { useDropdown } from "./DropdownContext";
export const DropdownItem = ({ children, className = '', activeClassName = '', onClick, isSelected = false }) => {
    const { closeDropdown } = useDropdown();
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        closeDropdown();
    };
    return (_jsx("a", { href: '#', className: cn('block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900', className, isSelected ? activeClassName : ''), role: 'menuitem', onClick: handleClick, "data-selected": isSelected, children: children }));
};
