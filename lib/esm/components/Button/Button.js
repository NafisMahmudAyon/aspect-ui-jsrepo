import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Button = ({ type = 'button', variant = 'primary', size = 'medium', disabled = false, loading = false, onClick, children, icon, iconPosition = 'left', className = "", iconClassName = "", isFab = false, position = 'bottom-right', ...rest }) => {
    const baseStyles = 'inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150';
    const sizeStyles = {
        small: 'px-3 py-2 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
        fab: 'w-16 h-16 p-0 rounded-full',
    };
    const variantStyles = {
        primary: `
      bg-primaryColor hover:bg-primaryColor-hover focus:ring-primaryColor-hover
      dark:bg-primaryColor-dark dark:hover:bg-primaryColor-hoverDark dark:focus:ring-primaryColor-hoverDark
      text-buttonTextColor dark:text-buttonTextColor-dark
    `,
        secondary: `
      bg-secondaryColor hover:bg-secondaryColor-hover focus:ring-secondaryColor-hover
      dark:bg-secondaryColor-dark dark:hover:bg-secondaryColor-hoverDark dark:focus:ring-secondaryColor-hoverDark
      text-buttonTextColor dark:text-buttonTextColor-dark
    `,
        destructive: `
      bg-errorColor hover:bg-errorColor-hover focus:ring-errorColor-hover
      dark:bg-errorColor-dark dark:hover:bg-errorColor-hoverDark dark:focus:ring-errorColor-hoverDark
      text-white
    `,
        link: `
      text-linkColor hover:text-linkHoverColor focus:ring-linkColor
      dark:text-linkColor-dark dark:hover:text-linkHoverColor-dark
    `,
        outline: `
      border border-primaryColor text-primaryColor hover:bg-primaryColor-light focus:ring-primaryColor
      dark:border-primaryColor-dark dark:text-primaryColor-dark dark:hover:bg-primaryColor-hoverDark
    `,
        ghost: `
      bg-transparent hover:bg-accentColor focus:ring-primaryColor
      dark:hover:bg-accentColor-dark
    `,
        icon: `
      p-0 rounded-full bg-transparent hover:bg-accentColor focus:ring-primaryColor
      dark:hover:bg-accentColor-dark
    `,
        withIcon: `
      bg-primaryColor text-white hover:bg-primaryColor-hover focus:ring-primaryColor
      dark:bg-primaryColor-dark dark:hover:bg-primaryColor-hoverDark dark:focus:ring-primaryColor-hoverDark
      inline-flex items-center
    `,
    };
    const fabPositionStyles = {
        'bottom-right': 'fixed bottom-4 right-4',
        'bottom-left': 'fixed bottom-4 left-4',
    };
    return (_jsxs("button", { type: type, onClick: onClick, disabled: disabled || loading, className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
        ${loading ? 'relative' : ''} ${isFab ? fabPositionStyles[position] : ''} ${className} font-sans`, ...rest, children: [loading && _jsx("span", { className: "loader absolute left-0 right-0 mx-auto" }), icon && iconPosition === 'left' && !loading && _jsx("span", { className: `${iconClassName}`, children: icon }), !loading && children, icon && iconPosition === 'right' && !loading && _jsx("span", { className: `${iconClassName}`, children: icon })] }));
};
