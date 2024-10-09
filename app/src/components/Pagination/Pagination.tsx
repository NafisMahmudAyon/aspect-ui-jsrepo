import React, { useState } from 'react';

interface PaginationProps {
  count: number;                // Total number of pages
  defaultPage?: number;         // Default page selected initially
  boundaryCount?: number;       // Number of pages to show on the boundary
  siblingCount?: number;        // Number of sibling pages to show around the current page
  showFirstLast?: boolean;      // Option to show 'First' and 'Last' buttons
  showNextPrev?: boolean;       // Option to show 'Next' and 'Previous' buttons
  onChange: (page: number) => void; // Callback when a page is changed
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  defaultPage = 1,
  boundaryCount = 1,
  siblingCount = 1,
  showFirstLast = true,
  showNextPrev = true,
  onChange,
}) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  // Helper function to generate range of numbers
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  // Handle page change logic
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= count) {
      setCurrentPage(page);
      onChange(page); // Trigger onChange callback
    }
  };

  // Generate pagination numbers based on boundary and sibling count
  const generatePaginationItems = () => {
    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

    const siblingsStart = Math.max(
      Math.min(currentPage - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
      boundaryCount + 2
    );
    const siblingsEnd = Math.min(
      Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
      endPages.length > 0 ? endPages[0] - 2 : count - 1
    );

    const showStartEllipsis = siblingsStart > boundaryCount + 2;
    const showEndEllipsis = siblingsEnd < count - boundaryCount - 1;

    const paginationItems = [
      ...(showFirstLast ? ['first'] : []),
      ...(showNextPrev ? ['previous'] : []),
      ...startPages,

      ...(showStartEllipsis ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
      ...range(siblingsStart, siblingsEnd),
      ...(showEndEllipsis ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []),

      ...endPages,
      ...(showNextPrev ? ['next'] : []),
      ...(showFirstLast ? ['last'] : []),
    ];

    return paginationItems;
  };

  // Map the button type to its page number
  const buttonPage = (type: string) => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return currentPage - 1;
      case 'next':
        return currentPage + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  const paginationItems = generatePaginationItems();

  return (
    <nav className="flex items-center justify-center space-x-2">
      {paginationItems.map((item, index) => (
        <React.Fragment key={index}>
          {item === 'start-ellipsis' || item === 'end-ellipsis' ? (
            <span className="px-3 py-1">...</span>
          ) : (
            <button
              onClick={() => handlePageChange(typeof item === 'string' ? buttonPage(item)! : item)}
              disabled={
                typeof item === 'string'
                  ? (item === 'previous' && currentPage === 1) || (item === 'next' && currentPage === count)
                  : false
              }
              className={`px-3 py-1 rounded-md ${currentPage === item
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } disabled:opacity-50`}
            >
              {item === 'first' && 'First'}
              {item === 'previous' && 'Prev'}
              {item === 'next' && 'Next'}
              {item === 'last' && 'Last'}
              {typeof item === 'number' && item}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
