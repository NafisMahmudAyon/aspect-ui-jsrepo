'use client';
import { Splide, SplideTrack, Options } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { ReactElement } from 'react';

interface SliderProps {
  children: React.ReactNode;
  options: Options;
  playPauseButton?: ReactElement;
  arrowIcon?: ReactElement;
  playIcon?: ReactElement;
  pauseIcon?: ReactElement;
  autoplay?: boolean;
  pagination?: boolean;
  arrows?: boolean;
  progressBar?: boolean;
  arrowStyle?: string;
  prevArrowStyle?: string;
  nextArrowStyle?: string;
  autoplayStyle?: string;
  playIconStyle?: string;
  pauseIconStyle?: string;
  paginationStyle?: object;  // Make sure this is an object for custom styles
}

export const Slider: React.FC<SliderProps> = ({
  children, options, arrowIcon, playIcon, pauseIcon, autoplay, pagination = true, arrows = true,
  progressBar, arrowStyle = '', prevArrowStyle = '', nextArrowStyle = '', autoplayStyle = '',
  playIconStyle = "", pauseIconStyle = "", paginationStyle, ...rest
}) => {

  // Function to generate CSS string from pagination style object
  const generateCSSFromStyle = (style: any) => {
    return Object.entries(style)
      .map(([key, value]) => {
        // Convert camelCase to kebab-case for CSS properties
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `${cssKey}: ${value};`;
      })
      .join(' ');
  };

  // Generate the CSS string based on the passed paginationStyle
  const paginationStyleCSS = generateCSSFromStyle(paginationStyle);

  return (
      <Splide hasTrack={false} className="relative uid" aria-label="My Favorite Images" options={options} {...rest}>
        <SplideTrack>{children}</SplideTrack>

        {arrows && (
          <div className={`${arrowStyle} splide__arrows`}>
            <button className={`${prevArrowStyle} splide__arrow splide__arrow--prev`} type="button" aria-label="Previous slide">
              {arrowIcon && arrowIcon != undefined ? arrowIcon : ">"}
            </button>
            <button className={`${nextArrowStyle} splide__arrow splide__arrow--next`} type="button" aria-label="Next slide">
              {arrowIcon && arrowIcon != undefined ? arrowIcon : ">"}
            </button>
          </div>
        )}

        {autoplay && (
          <>
            <button className={`${autoplayStyle} splide__toggle`} type="button">
              <span className={`${playIconStyle} splide__toggle__play`}>{playIcon || "play"}</span>
              <span className={`${pauseIconStyle} splide__toggle__pause`}>{pauseIcon || "pause"}</span>
            </button>
            {progressBar && <div className="splide__progress"><div className="splide__progress__bar" /></div>}
          </>
        )}

        {pagination && <ul className="splide__pagination"></ul>}
      {/* Dynamically applying styles */}
      <style jsx>{`
      .uid {
        background-color: white;
      }
        .uid .splide__pagination__page {
          ${paginationStyleCSS}
        }
      `}</style>
      </Splide>
  );
};
