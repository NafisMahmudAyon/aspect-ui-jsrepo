'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from './Avatar';
import { cn } from '../../utils/cn';
export const AvatarGroup = ({ className = '', children, variant, ...rest }) => {
    // const [variantValue, setVariantValue] = useState({
    //   className: "",
    // });
    // useEffect(() => {
    //   if (variant == 1) {
    //     setVariantValue({
    //       className: " ",
    //     });
    //   } else if (variant == 2 || variant == 3 || variant == 4 || variant == 5 || variant == 6) {
    //     setVariantValue({
    //       className: "-space-x-2 ",
    //     });
    //   }
    // }, [variant]);
    return (_jsx("div", { className: cn('flex items-center -space-x-2', className), ...rest, children: !children ? (_jsxs(_Fragment, { children: [_jsx(Avatar, {}), _jsx(Avatar, {})] })) : (_jsx(_Fragment, { children: children })) }));
};
