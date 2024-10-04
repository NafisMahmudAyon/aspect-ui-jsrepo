'use client'
import React, { useState, useRef, useEffect } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
  loading?: 'lazy' | 'eager';
  responsive?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  borderRadius?: string;
  shadow?: boolean;
  previewText?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  caption,
  width = 'full',
  height = 'auto',
  loading = 'lazy',
  responsive = true,
  objectFit = 'cover',
  borderRadius = 'rounded-lg',
  shadow = true,
  previewText = 'Preview',
}) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [mirror, setMirror] = useState(false);
  const [flipVertical, setFlipVertical] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement | null>(null);
  const position = useRef({ x: 0, y: 0 });

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (isLightboxOpen) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  }, [isLightboxOpen]);

  // Smooth zoom in/out
  const handleZoom = (direction: 'in' | 'out') => {
    if (direction === 'in') {
      setZoomLevel(prev => prev + 0.2);
    } else if (direction === 'out' && zoomLevel > 1) {
      setZoomLevel(prev => prev - 0.2);
    }
  };

  const handleRotate = (direction: 'cw' | 'ccw') => {
    if (direction === 'cw') {
      setRotate(prev => prev + 90);
    } else {
      setRotate(prev => prev - 90);
    }
  };

  const handleMirror = () => {
    setMirror(!mirror);
  };

  const handleFlipVertical = () => {
    setFlipVertical(!flipVertical);
  };

  // Start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.current.x, y: e.clientY - position.current.y });
  };

  // Drag image (pan)
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (isDragging && imageRef.current) {
      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;
      position.current = { x: deltaX, y: deltaY };

      requestAnimationFrame(() => {
        imageRef.current!.style.transform = `
          translate(${deltaX}px, ${deltaY}px) 
          scale(${zoomLevel}) 
          rotate(${rotate}deg) 
          scaleX(${mirror ? -1 : 1}) 
          scaleY(${flipVertical ? -1 : 1})
        `;
      });
    }
  };

  // Stop dragging
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Normal Image Display with hover fade effect */}
      <figure
        className={`relative flex flex-col items-center justify-center ${responsive ? 'w-full h-auto' : ''}`}
        onClick={() => setLightboxOpen(true)} // Open lightbox on click
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`
            transition-opacity duration-300
            ${width !== 'full' ? `w-${width}` : 'w-full'}
            ${height !== 'auto' ? `h-${height}` : 'h-auto'}
            object-${objectFit}
            ${borderRadius}
            ${shadow ? 'shadow-lg' : ''}
            cursor-pointer
            hover:opacity-0
          `}
        />
        {/* Preview text on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <span className="text-white text-lg">{previewText}</span>
        </div>
        {caption && <figcaption className="text-sm text-gray-600 mt-2">{caption}</figcaption>}
      </figure>

      {/* Lightbox Modal with fade-in/out effect */}
      {isLightboxOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="relative max-w-5xl p-4">
            {/* Lightbox Image with Transformations and Pan */}
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className={`transition-transform duration-300 ease-in-out cursor-move`}
              style={{
                transform: `
                  scale(${zoomLevel}) 
                  rotate(${rotate}deg) 
                  scaleX(${mirror ? -1 : 1}) 
                  scaleY(${flipVertical ? -1 : 1})
                `,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave} // Stop dragging if the mouse leaves
            />

            {/* Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <button
                onClick={() => handleZoom('in')}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
              >
                Zoom In
              </button>
              <button
                onClick={() => handleZoom('out')}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
              >
                Zoom Out
              </button>
              <button
                onClick={() => handleRotate('cw')}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
              >
                Rotate Clockwise
              </button>
              <button
                onClick={() => handleRotate('ccw')}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
              >
                Rotate Anti-Clockwise
              </button>
              <button
                onClick={handleMirror}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
              >
                Mirror
              </button>
              <button
                onClick={handleFlipVertical}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
              >
                Flip Upside Down
              </button>
              <button
                onClick={() => setLightboxOpen(false)}
                className="bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
