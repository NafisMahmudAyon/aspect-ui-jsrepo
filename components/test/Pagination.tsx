'use client'
import { Pagination } from '@/app/src/components/Pagination';
import React, { useState } from 'react'

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Current Page: ${page}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pagination Example</h1>
      <Pagination
        count={20}
        defaultPage={6}
        boundaryCount={2}
        siblingCount={1}
        showFirstLast={true}
        showNextPrev={true}
        onChange={handlePageChange}
      />

      {/* <Pagination
        count={20}
        defaultPage={6}
        boundaryCount={2}
        siblingCount={2}
        showFirstLast={true}
        showNextPrev={true}
        onChange={handlePageChange}
      /> */}
      <p>Current Page: {currentPage}</p>
    </div>
  );
}

export default PaginationDemo