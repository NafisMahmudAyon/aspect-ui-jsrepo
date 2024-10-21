'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const Skeleton = ({ variation = 'text', width, height, 
// animation = 'pulse',
className = '' }) => {
    const getVariationStyle = () => {
        switch (variation) {
            case 'circular':
                return 'rounded-full';
            case 'rectangular':
                return 'rounded-none';
            case 'rounded':
                return 'rounded-md';
            case 'text':
            default:
                return 'rounded';
        }
    };
    // const animation = 'pulse'
    // const getAnimationStyle = () => {
    //   switch (animation) {
    //     // case 'wave':
    //     //   return {
    //     //     backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
    //     //     backgroundSize: '200% 100%',
    //     //     animation: 'wave 1.5s infinite',
    //     //   };
    //     // case 'shimmer':
    //     //   return {
    //     //     backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    //     //     backgroundSize: '200% 100%',
    //     //     animation: 'shimmer 1.5s infinite',
    //     //   };
    //     case 'pulse':
    //     default:
    //       return {
    //         animation: 'pulse 1.5s infinite',
    //       };
    //   }
    // };
    return (_jsx("div", { className: `animate-pulse bg-gray-200 ${getVariationStyle()} ${className}`, style: {
            width: width || '100%',
            height: height || (variation === 'text' ? '1em' : '100%')
            // ...getAnimationStyle(),
        } }));
};
