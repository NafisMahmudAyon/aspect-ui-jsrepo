'use strict';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Splide, SplideTrack } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
export const Slider = ({ children, options, arrowIcon, playIcon, pauseIcon, autoplay, pagination = true, arrows = true, pgStyle = "", progressBar, arrowStyle = '', prevArrowStyle = '', nextArrowStyle = '', autoplayStyle = '', playIconStyle = "", pauseIconStyle = "", paginationStyle, ...rest }) => {
    var pgStyles = "";
    if (pgStyle) {
        var style = pgStyle.split(" "); // split by blank space if multiple spaces
        for (let i = 0; i < style.length; i++) {
            if (style[i] != "") {
                pgStyles += `[&_li_.splide\_\_pagination\_\_page]:${style[i]} `;
            }
        }
    }
    // Function to generate CSS string from pagination style object
    // const generateCSSFromStyle = (style: any) => {
    //   return Object.entries(style)
    //     .map(([key, value]) => {
    //       // Convert camelCase to kebab-case for CSS properties
    //       const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    //       return `${cssKey}: ${value};`;
    //     })
    //     .join(' ');
    // };
    // Generate the CSS string based on the passed paginationStyle
    // const paginationStyleCSS = generateCSSFromStyle(paginationStyle);
    return (_jsx("div", { className: 'relative uid', children: _jsxs(Splide, { hasTrack: false, className: "", "aria-label": "My Favorite Images", options: options, ...rest, children: [_jsx(SplideTrack, { children: children }), arrows && (_jsxs("div", { className: `${arrowStyle} splide__arrows`, children: [_jsx("button", { className: `${prevArrowStyle} splide__arrow splide__arrow--prev`, type: "button", "aria-label": "Previous slide", children: arrowIcon && arrowIcon != undefined ? arrowIcon : "<" }), _jsx("button", { className: `${nextArrowStyle} splide__arrow splide__arrow--next`, type: "button", "aria-label": "Next slide", children: arrowIcon && arrowIcon != undefined ? arrowIcon : ">" })] })), autoplay && (_jsxs(_Fragment, { children: [_jsxs("button", { className: `${autoplayStyle} splide__toggle`, type: "button", children: [_jsx("span", { className: `${playIconStyle} splide__toggle__play`, children: playIcon || "play" }), _jsx("span", { className: `${pauseIconStyle} splide__toggle__pause`, children: pauseIcon || "pause" })] }), progressBar && _jsx("div", { className: "splide__progress", children: _jsx("div", { className: "splide__progress__bar" }) })] })), pagination && _jsx("ul", { className: `splide__pagination ${pgStyles}`, children: _jsx("li", { role: "presentation", children: _jsx("button", { className: "splide__pagination__page " }) }) })] }) }));
};
