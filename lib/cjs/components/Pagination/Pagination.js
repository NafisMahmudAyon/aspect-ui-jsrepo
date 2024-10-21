import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
export const Pagination = ({ count, defaultPage = 1, boundaryCount = 1, siblingCount = 1, showFirstLast = true, showNextPrev = true, onChange }) => {
    const [currentPage, setCurrentPage] = useState(defaultPage);
    // Helper function to generate range of numbers
    const range = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };
    // Handle page change logic
    const handlePageChange = (page) => {
        if (page >= 1 && page <= count) {
            setCurrentPage(page);
            onChange(page); // Trigger onChange callback
        }
    };
    // Generate pagination numbers based on boundary and sibling count
    const generatePaginationItems = () => {
        const startPages = range(1, Math.min(boundaryCount, count));
        const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
        const siblingsStart = Math.max(Math.min(currentPage - siblingCount, count - boundaryCount - siblingCount * 2 - 1), boundaryCount + 2);
        const siblingsEnd = Math.min(Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2), endPages.length > 0 ? endPages[0] - 2 : count - 1);
        const showStartEllipsis = siblingsStart > boundaryCount + 2;
        const showEndEllipsis = siblingsEnd < count - boundaryCount - 1;
        const paginationItems = [
            ...(showFirstLast ? ['first'] : []),
            ...(showNextPrev ? ['previous'] : []),
            ...startPages,
            ...(showStartEllipsis
                ? ['start-ellipsis']
                : boundaryCount + 1 < count - boundaryCount
                    ? [boundaryCount + 1]
                    : []),
            ...range(siblingsStart, siblingsEnd),
            ...(showEndEllipsis
                ? ['end-ellipsis']
                : count - boundaryCount > boundaryCount
                    ? [count - boundaryCount]
                    : []),
            ...endPages,
            ...(showNextPrev ? ['next'] : []),
            ...(showFirstLast ? ['last'] : [])
        ];
        return paginationItems;
    };
    // Map the button type to its page number
    const buttonPage = (type) => {
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
    return (_jsx("nav", { className: 'flex items-center justify-center space-x-2', children: paginationItems.map((item, index) => (_jsx(React.Fragment, { children: item === 'start-ellipsis' || item === 'end-ellipsis' ? (_jsx("span", { className: 'px-3 py-1', children: "..." })) : (_jsxs("button", { onClick: () => handlePageChange(typeof item === 'string' ? buttonPage(item) : item), disabled: typeof item === 'string'
                    ? (item === 'previous' && currentPage === 1) ||
                        (item === 'next' && currentPage === count)
                    : false, className: `rounded-md px-3 py-1 ${currentPage === item
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} disabled:opacity-50`, children: [item === 'first' && 'First', item === 'previous' && 'Prev', item === 'next' && 'Next', item === 'last' && 'Last', typeof item === 'number' && item] })) }, index))) }));
};
